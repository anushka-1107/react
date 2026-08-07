import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { BASE_URL } from "../src/App";

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        onLogin(data.token);
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch {
      setError("Could not reach the server. Is it running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Overlay>
      <Card>
        <TopAccent />
        <IconWrap>🔐</IconWrap>
        <h1>Admin Login</h1>
        <p className="subtitle">Food Zone Control Panel</p>

        <form onSubmit={handleSubmit} id="admin-login-form">
          <Field>
            <label htmlFor="admin-username">Username</label>
            <input
              id="admin-username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
          </Field>

          <Field>
            <label htmlFor="admin-password">Password</label>
            <PasswordWrap>
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                id="toggle-password"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </PasswordWrap>
          </Field>

          {error && <ErrorMsg id="login-error">⚠️ {error}</ErrorMsg>}

          <LoginBtn type="submit" id="admin-login-btn" disabled={loading}>
            {loading ? <Spinner /> : "Login →"}
          </LoginBtn>
        </form>

        <Hint>
          <span>Default: </span>
          <code>admin</code> / <code>admin123</code>
        </Hint>
      </Card>
    </Overlay>
  );
};

export default AdminLogin;

// ── Animations ────────────────────────────────────────────────────────────────
const fadeIn = keyframes`from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); }`;
const spin = keyframes`to { transform: rotate(360deg); }`;
const shimmer = keyframes`0%,100%{opacity:1} 50%{opacity:.5}`;

// ── Styles ────────────────────────────────────────────────────────────────────
const Overlay = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at top, #1a0a00 0%, #0d0d0d 60%);
  padding: 20px;
`;

const Card = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 48px 40px 36px;
  width: 100%;
  max-width: 420px;
  backdrop-filter: blur(16px);
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.5s ease;
  overflow: hidden;

  h1 {
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin-bottom: 6px;
  }

  .subtitle {
    text-align: center;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 32px;
    letter-spacing: 0.5px;
  }
`;

const TopAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ff6b35, #ff9a5c, #ff6b35);
  background-size: 200%;
  animation: ${shimmer} 2.5s ease infinite;
`;

const IconWrap = styled.div`
  font-size: 40px;
  text-align: center;
  margin-bottom: 12px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;

  label {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.4px;
  }

  input {
    width: 100%;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    color: #fff;
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    outline: none;
    transition: border 0.25s, background 0.25s;

    &::placeholder { color: rgba(255,255,255,0.25); }

    &:focus {
      border-color: #ff6b35;
      background: rgba(255, 107, 53, 0.08);
    }
  }
`;

const PasswordWrap = styled.div`
  position: relative;

  input { padding-right: 46px; }

  button {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 1;
    padding: 0;
  }
`;

const ErrorMsg = styled.p`
  background: rgba(255, 80, 80, 0.12);
  border: 1px solid rgba(255, 80, 80, 0.3);
  border-radius: 10px;
  color: #ff8080;
  font-size: 13px;
  padding: 10px 14px;
  margin-bottom: 20px;
`;

const LoginBtn = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #ff6b35, #ff9a5c);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 50px;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
  }

  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

const Hint = styled.p`
  text-align: center;
  margin-top: 24px;
  font-size: 12px;
  color: rgba(255,255,255,0.25);

  span { margin-right: 4px; }

  code {
    background: rgba(255,255,255,0.08);
    padding: 2px 8px;
    border-radius: 6px;
    font-family: monospace;
    font-size: 12px;
    color: rgba(255,255,255,0.5);
    margin: 0 3px;
  }
`;
