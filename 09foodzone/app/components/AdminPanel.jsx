import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { BASE_URL } from "../src/App";

const MEAL_TYPES = ["breakfast", "lunch", "dinner"];

const emptyForm = {
  name: "",
  price: "",
  text: "",
  image: "",
  type: "breakfast",
};

const AdminPanel = ({ data, token, onLogout, onRefetch }) => {
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [deletingName, setDeletingName] = useState(null);

  // ── Stats ──────────────────────────────────────────────────────────────────
  const stats = {
    all: data?.length ?? 0,
    breakfast: data?.filter((i) => i.type === "breakfast").length ?? 0,
    lunch: data?.filter((i) => i.type === "lunch").length ?? 0,
    dinner: data?.filter((i) => i.type === "dinner").length ?? 0,
  };

  // ── Add item ───────────────────────────────────────────────────────────────
  const handleAdd = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");
    if (!form.name.trim() || !form.price || !form.type) {
      setFormError("Name, price and meal type are required.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${BASE_URL}/foods`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          name: form.name.trim().toUpperCase(),
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setFormError(json.error || "Failed to add item.");
      } else {
        setFormSuccess(`"${json.name}" added successfully!`);
        setForm(emptyForm);
        onRefetch();
      }
    } catch {
      setFormError("Could not reach the server.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Delete item ────────────────────────────────────────────────────────────
  const handleDelete = async (name) => {
    if (!window.confirm(`Delete "${name}"? This cannot be undone.`)) return;
    setDeletingName(name);
    try {
      const res = await fetch(
        `${BASE_URL}/foods/${encodeURIComponent(name)}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.ok) {
        onRefetch();
      } else {
        const json = await res.json();
        alert(json.error || "Delete failed.");
      }
    } catch {
      alert("Could not reach the server.");
    } finally {
      setDeletingName(null);
    }
  };

  return (
    <Wrapper>
      {/* ── Top Bar ─────────────────────────────────────────────────────── */}
      <TopBar>
        <Brand>
          <span className="icon">🍽️</span>
          <span>Food Zone <strong>Admin</strong></span>
        </Brand>
        <LogoutBtn id="admin-logout-btn" onClick={onLogout}>
          Logout ↩
        </LogoutBtn>
      </TopBar>

      <Inner>
        {/* ── Stats ─────────────────────────────────────────────────────── */}
        <StatsRow>
          {[
            { label: "Total Items", value: stats.all, icon: "🍴", color: "#ff6b35" },
            { label: "Breakfast", value: stats.breakfast, icon: "🍳", color: "#ffc857" },
            { label: "Lunch", value: stats.lunch, icon: "🥗", color: "#4ecdc4" },
            { label: "Dinner", value: stats.dinner, icon: "🌙", color: "#a78bfa" },
          ].map((s) => (
            <StatCard key={s.label} style={{ "--accent": s.color }}>
              <span className="icon">{s.icon}</span>
              <span className="value">{s.value}</span>
              <span className="label">{s.label}</span>
            </StatCard>
          ))}
        </StatsRow>

        <Grid>
          {/* ── Add New Item Form ────────────────────────────────────────── */}
          <FormCard>
            <SectionTitle>➕ Add New Item</SectionTitle>

            <form id="add-food-form" onSubmit={handleAdd}>
              <FormGroup>
                <label htmlFor="food-name">Item Name *</label>
                <input
                  id="food-name"
                  type="text"
                  placeholder="e.g. PASTA BOLOGNESE"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </FormGroup>

              <FormRow>
                <FormGroup>
                  <label htmlFor="food-price">Price ($) *</label>
                  <input
                    id="food-price"
                    type="number"
                    placeholder="e.g. 15"
                    min="1"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="food-type">Meal Type *</label>
                  <select
                    id="food-type"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    {MEAL_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </option>
                    ))}
                  </select>
                </FormGroup>
              </FormRow>

              <FormGroup>
                <label htmlFor="food-desc">Description</label>
                <textarea
                  id="food-desc"
                  rows={3}
                  placeholder="Describe the dish..."
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="food-image">Image Path</label>
                <input
                  id="food-image"
                  type="text"
                  placeholder="/images/your-image.png"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                />
                <small>Leave blank to use a default image.</small>
              </FormGroup>

              {formError && <AlertMsg type="error">⚠️ {formError}</AlertMsg>}
              {formSuccess && <AlertMsg type="success">✅ {formSuccess}</AlertMsg>}

              <AddBtn type="submit" id="add-food-btn" disabled={submitting}>
                {submitting ? <SpinnerInline /> : "Add Food Item"}
              </AddBtn>
            </form>
          </FormCard>

          {/* ── Items Table ──────────────────────────────────────────────── */}
          <TableCard>
            <SectionTitle>📋 All Items ({stats.all})</SectionTitle>

            {!data || data.length === 0 ? (
              <EmptyState>No food items yet. Add one! 👆</EmptyState>
            ) : (
              <TableScroll>
                <Table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.name}>
                        <td>
                          <ItemImg
                            src={`${BASE_URL}${item.image}`}
                            alt={item.name}
                            onError={(e) => { e.target.style.display = "none"; }}
                          />
                        </td>
                        <td className="name">{item.name}</td>
                        <td>
                          <TypeBadge type={item.type}>{item.type}</TypeBadge>
                        </td>
                        <td className="price">${item.price}</td>
                        <td>
                          <DeleteBtn
                            id={`delete-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={() => handleDelete(item.name)}
                            disabled={deletingName === item.name}
                          >
                            {deletingName === item.name ? "..." : "🗑️ Delete"}
                          </DeleteBtn>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TableScroll>
            )}
          </TableCard>
        </Grid>
      </Inner>
    </Wrapper>
  );
};

export default AdminPanel;

// ── Animations ────────────────────────────────────────────────────────────────
const fadeSlide = keyframes`from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}`;
const spinAnim = keyframes`to{transform:rotate(360deg)}`;

// ── Styles ────────────────────────────────────────────────────────────────────
const Wrapper = styled.div`
  min-height: 100vh;
  background: #0d0d0d;
  animation: ${fadeSlide} 0.4s ease;
`;

const TopBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 64px;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(255,255,255,0.07);
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(12px);
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  color: rgba(255,255,255,0.75);

  .icon { font-size: 22px; }
  strong { color: #ff6b35; }
`;

const LogoutBtn = styled.button`
  background: rgba(255,80,80,0.1);
  border: 1px solid rgba(255,80,80,0.25);
  color: #ff8080;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 13px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: rgba(255,80,80,0.2);
    transform: translateY(-1px);
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px 60px;
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
`;

const StatCard = styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-top: 3px solid var(--accent);
  border-radius: 16px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.3);
  }

  .icon { font-size: 24px; }

  .value {
    font-size: 36px;
    font-weight: 700;
    color: var(--accent);
    line-height: 1.1;
  }

  .label {
    font-size: 13px;
    color: rgba(255,255,255,0.45);
    font-weight: 500;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 24px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const cardBase = `
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 28px;
`;

const FormCard = styled.div`${cardBase}`;
const TableCard = styled.div`${cardBase}`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
  margin-bottom: 20px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  letter-spacing: 0.3px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;

  label {
    font-size: 12px;
    font-weight: 500;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.4px;
    text-transform: uppercase;
  }

  input, select, textarea {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 10px 14px;
    color: #fff;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    outline: none;
    transition: border 0.2s, background 0.2s;
    resize: vertical;

    &::placeholder { color: rgba(255,255,255,0.2); }
    &:focus {
      border-color: #ff6b35;
      background: rgba(255,107,53,0.08);
    }
  }

  select option { background: #1a1a1a; }

  small {
    font-size: 11px;
    color: rgba(255,255,255,0.25);
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const AlertMsg = styled.p`
  font-size: 13px;
  padding: 10px 14px;
  border-radius: 10px;
  margin-bottom: 16px;
  ${({ type }) =>
    type === "error"
      ? "background:rgba(255,80,80,0.1);border:1px solid rgba(255,80,80,0.25);color:#ff8080;"
      : "background:rgba(80,200,120,0.1);border:1px solid rgba(80,200,120,0.25);color:#6fcf97;"}
`;

const AddBtn = styled.button`
  width: 100%;
  padding: 13px;
  background: linear-gradient(135deg, #ff6b35, #ff9a5c);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255,107,53,0.4);
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

const SpinnerInline = styled.div`
  width: 18px; height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spinAnim} 0.7s linear infinite;
`;

const TableScroll = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th {
    text-align: left;
    padding: 10px 12px;
    font-size: 11px;
    font-weight: 600;
    color: rgba(255,255,255,0.35);
    text-transform: uppercase;
    letter-spacing: 0.6px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  td {
    padding: 12px 12px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    vertical-align: middle;
    color: rgba(255,255,255,0.8);
  }

  tr:last-child td { border-bottom: none; }

  tr:hover td { background: rgba(255,255,255,0.03); }

  .name { font-weight: 600; color: #fff; }
  .price { color: #ff6b35; font-weight: 600; }
`;

const ItemImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  object-fit: cover;
  background: #1a1a1a;
`;

const TypeBadge = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  ${({ type }) => {
    if (type === "breakfast") return "background:rgba(255,200,87,0.12);color:#ffc857;";
    if (type === "lunch") return "background:rgba(78,205,196,0.12);color:#4ecdc4;";
    return "background:rgba(167,139,250,0.12);color:#a78bfa;";
  }}
`;

const DeleteBtn = styled.button`
  background: rgba(255,80,80,0.1);
  border: 1px solid rgba(255,80,80,0.2);
  color: #ff8080;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: rgba(255,80,80,0.2);
    transform: scale(1.03);
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const EmptyState = styled.p`
  text-align: center;
  color: rgba(255,255,255,0.3);
  padding: 40px 20px;
  font-size: 14px;
`;
