
import { createRoot } from "react-dom/client";
import "./index.css";
// Lazy-load admin screens to avoid unnecessary module fetches on non-admin routes

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);

function getRoute() {
  const pathname = window.location.pathname.replace(/\/+$/, "");
  if (pathname === "/admin" || pathname === "/admin/dashboard") return "dashboard";
  if (pathname === "/admin/login") return "login";
  return "app";
}

function navigate(path) {
  window.history.pushState(null, "", path);
  render();
}

function render() {
  const route = getRoute();
  const isLoggedIn = localStorage.getItem("mw_admin_logged_in") === "true";

  // Simple auth guard and redirects
  if (route === "dashboard" && !isLoggedIn) {
    navigate("/admin/login");
    return;
  }
  if (route === "login" && isLoggedIn) {
    navigate("/admin");
    return;
  }

  if (route === "dashboard") {
    import("./components/pages/Admin/Dashboard/AdminDashboard.jsx").then((m) => {
      const AdminDashboard = m.AdminDashboard;
      root.render(
        <AdminDashboard
          onLogout={() => {
            localStorage.removeItem("mw_admin_logged_in");
            navigate("/admin/login");
          }}
        />
      );
    });
    return;
  }

  if (route === "login") {
    import("./components/pages/Admin/Login/AdminLogin.jsx").then((m) => {
      const AdminLogin = m.AdminLogin;
      root.render(
        <AdminLogin
          onLogin={() => {
            localStorage.setItem("mw_admin_logged_in", "true");
            navigate("/admin");
          }}
        />
      );
    });
    return;
  }

  // Load main site only when not on admin routes
  import("./App.jsx").then((m) => {
    const App = m.default;
    root.render(<App />);
  });
}

window.addEventListener("popstate", render);
render();
  