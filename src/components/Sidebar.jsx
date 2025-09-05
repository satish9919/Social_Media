const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const tabs = [
    { label: "Home", icon: "#home" },
    { label: "Create Post", icon: "#speedometer2" },
  ];

  return (
    <div
      style={{
        width: "220px",
        background: "#1E1E2F",
        color: "white",
        minHeight: "100vh",
        padding: "20px 15px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "2px 0 10px rgba(0,0,0,0.3)",
      }}
    >
      {/* Logo / Title */}
      <a
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "white",
          textDecoration: "none",
          marginBottom: "25px",
        }}
      >
        <svg width="32" height="32" style={{ fill: "#4F46E5" }}>
          <use xlinkHref="#bootstrap"></use>
        </svg>
        S_Brand
      </a>

      {/* Menu */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
        {tabs.map((tab) => (
          <li key={tab.label} style={{ marginBottom: "8px" }}>
            <a
              href="#"
              onClick={() => setSelectedTab(tab.label)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "10px 14px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "500",
                color: "white",
                background:
                  selectedTab === tab.label ? "#4F46E5" : "transparent",
                transition: "all 0.2s ease-in-out",
                boxShadow:
                  selectedTab === tab.label
                    ? "0 2px 8px rgba(79,70,229,0.4)"
                    : "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background =
                  selectedTab === tab.label ? "#4F46E5" : "rgba(255,255,255,0.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  selectedTab === tab.label ? "#4F46E5" : "transparent")
              }
            >
              <svg width="18" height="18" style={{ fill: "currentColor" }}>
                <use xlinkHref={tab.icon}></use>
              </svg>
              {tab.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div style={{ fontSize: "0.85rem", opacity: 0.6 }}>
        © 2025 S_Brand
      </div>
    </div>
  );
};

export default Sidebar;
