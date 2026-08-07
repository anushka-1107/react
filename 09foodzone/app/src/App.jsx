import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import SearchResult from "../components/SearchResult";
import AdminLogin from "../components/AdminLogin";
import AdminPanel from "../components/AdminPanel";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // ── Admin auth state ─────────────────────────────────────────────────────
  // view: "menu" | "login" | "admin"
  const [view, setView] = useState("menu");
  const [adminToken, setAdminToken] = useState(
    () => sessionStorage.getItem("admin_token") || null
  );

  // ── Fetch food data ──────────────────────────────────────────────────────
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(BASE_URL);
      const jsonData = await response.json();
      setData(jsonData);
    } catch {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ── Admin handlers ───────────────────────────────────────────────────────
  const handleLogin = (token) => {
    sessionStorage.setItem("admin_token", token);
    setAdminToken(token);
    setView("admin");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_token");
    setAdminToken(null);
    setView("menu");
    fetchData(); // refresh menu after any admin changes
  };

  const handleAdminClick = () => {
    if (adminToken) {
      setView("admin");
    } else {
      setView("login");
    }
  };

  // ── Admin views ──────────────────────────────────────────────────────────
  if (view === "login") {
    return <AdminLogin onLogin={handleLogin} />;
  }

  if (view === "admin") {
    return (
      <AdminPanel
        data={data}
        token={adminToken}
        onLogout={handleLogout}
        onRefetch={fetchData}
      />
    );
  }

  // ── Filtered data ────────────────────────────────────────────────────────
  const filteredData = data
    ? data
        .filter((item) =>
          filterType === "all" ? true : item.type === filterType
        )
        .filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    : null;

  if (error) {
    return (
      <ErrorContainer>
        <p>⚠️ {error}</p>
        <p>Make sure the server is running on port 9000.</p>
      </ErrorContainer>
    );
  }

  if (loading) {
    return (
      <LoadingContainer>
        <div className="spinner" />
        <p>Loading delicious food...</p>
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <Topcontainer>
        <div className="logo">
          <img src="/foodlogo.png" alt="Food Zone Logo" />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search your taste..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <AdminToggle
          id="open-admin-btn"
          onClick={handleAdminClick}
          title="Go to Admin Panel"
        >
          {adminToken ? "⚙️ Admin" : "🔐 Admin"}
        </AdminToggle>
      </Topcontainer>

      <Filterbox>
        <Button
          className={filterType === "all" ? "active" : ""}
          onClick={() => setFilterType("all")}
        >
          All
        </Button>
        <Button
          className={filterType === "breakfast" ? "active" : ""}
          onClick={() => setFilterType("breakfast")}
        >
          Breakfast
        </Button>
        <Button
          className={filterType === "lunch" ? "active" : ""}
          onClick={() => setFilterType("lunch")}
        >
          Lunch
        </Button>
        <Button
          className={filterType === "dinner" ? "active" : ""}
          onClick={() => setFilterType("dinner")}
        >
          Dinner
        </Button>
      </Filterbox>

      <SearchResult data={filteredData} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  min-height: 100vh;
`;

const Topcontainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

  .logo img {
    height: 64px;
    object-fit: contain;
  }

  .search {
    input {
      background-color: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 12px 20px;
      border-radius: 30px;
      height: 48px;
      font-size: 15px;
      color: #fff;
      width: 280px;
      outline: none;
      transition: border 0.3s ease, background 0.3s ease;

      &::placeholder {
        color: rgba(255, 255, 255, 0.45);
      }

      &:focus {
        border-color: #ff6b35;
        background-color: rgba(255, 107, 53, 0.1);
      }
    }
  }
`;

const Filterbox = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background-color: #2a2a2a;
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 22px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
  font-family: "Poppins", sans-serif;

  &:hover {
    background-color: #ff6b35;
    border-color: #ff6b35;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.35);
  }

  &.active {
    background-color: #ff6b35;
    border-color: #ff6b35;
    box-shadow: 0 4px 16px rgba(255, 107, 53, 0.4);
  }
`;

const AdminToggle = styled.button`
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  color: #ff6b35;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: background 0.25s, transform 0.2s, box-shadow 0.2s;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 107, 53, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.25);
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 12px;
  color: #ff6b6b;
  font-size: 18px;
  text-align: center;

  p:last-child {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
  color: rgba(255, 255, 255, 0.7);

  .spinner {
    width: 48px;
    height: 48px;
    border: 4px solid rgba(255, 107, 53, 0.2);
    border-top-color: #ff6b35;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
