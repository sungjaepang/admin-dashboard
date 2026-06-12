/* 260606 front프로젝트 시작 */

/* 1단계 관리자 레이아웃 + 라우터 생성 */
/* 17단계 Dark Mode */ 
/*  */
/*  */


import { NavLink, Outlet } from "react-router-dom";
import { useThemeStore } from "../store/themeStore"; /* 17단계 */

function AdminLayout() {
  /* 17단계 */
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);


  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h1 className="sidebar-logo">Admin</h1>

        <nav className="sidebar-nav">
          <NavLink to="/" end>
            Dashboard
          </NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
      </aside>

      <div className="admin-main">
        <header className="topbar">
          <div>
            <p className="topbar-label">Admin Dashboard</p>
            <h2>Management Console</h2>
          </div>

          {/* 17단계 */}
          <button type="button" className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>

        </header>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;