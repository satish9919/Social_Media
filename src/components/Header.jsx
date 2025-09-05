import { useState } from "react";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {/* Header */}
      <header
        style={{
          background: "linear-gradient(90deg, #1E1E2F, #2D2D44)",
          padding: "0.8rem 0",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "white",
              fontSize: "1.4rem",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            <svg width="36" height="36" style={{ fill: "#FFD700" }}>
              <use xlinkHref="#bootstrap"></use>
            </svg>
            S_Brand
          </a>

          {/* Navigation */}
          <ul
            style={{
              display: "flex",
              gap: "20px",
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
          >
            {["Home", "Features", "Pricing", "FAQs", "About"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  style={{
                    color: "#ddd",
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFD700")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ddd")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <input
            type="search"
            placeholder="Search..."
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              border: "none",
              outline: "none",
              background: "#2E2E40",
              color: "white",
              marginRight: "10px",
            }}
          />

          {/* Auth Buttons */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => setShowLogin(true)}
              style={{
                padding: "6px 14px",
                borderRadius: "6px",
                border: "1px solid white",
                background: "transparent",
                color: "white",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Login
            </button>
            <button
              onClick={() => setShowSignup(true)}
              style={{
                padding: "6px 14px",
                borderRadius: "6px",
                border: "none",
                background: "#FFD700",
                color: "black",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      {showLogin && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" style={inputStyle} />
            <input type="password" placeholder="Password" style={inputStyle} />
            <button style={primaryBtn}>Login</button>
            <button style={secondaryBtn} onClick={() => setShowLogin(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Full Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <input type="password" placeholder="Password" style={inputStyle} />
            <button style={primaryBtn}>Sign Up</button>
            <button style={secondaryBtn} onClick={() => setShowSignup(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

/* Styles */
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
};

const modalStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const inputStyle = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const primaryBtn = {
  padding: "8px",
  borderRadius: "6px",
  background: "#FFD700",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

const secondaryBtn = {
  padding: "8px",
  borderRadius: "6px",
  background: "#ccc",
  border: "none",
  cursor: "pointer",
};

export default Header;
