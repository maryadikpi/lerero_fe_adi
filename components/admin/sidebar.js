import Link from "next/link";

const Sidebar = () => (
  <aside className="main-sidebar sidebar-light-primary margin-top--60">
    <Link as="/admin/dashboard" href="/admin/dashboard">
      <a className="brand-link">
        <img
          src="../../dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-1"
        />
        <span className="brand-text font-weight-light">Lerero</span>
      </a>
    </Link>

    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img
            src="../../dist/img/user2-160x160.jpg"
            className="img-circle elevation-1"
            alt="User Image"
          />
        </div>
        <div className="info">
          <Link as="/admin/user/profile" href="/admin/user/profile">
            <a className="d-block">Alexander Pierce</a>
          </Link>
        </div>
      </div>

      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li class="nav-item">
            <Link as="/admin/dashboard" href="/admin/dashboard">
              <a class="nav-link">
                <i class="nav-icon fa fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link as="/admin/user/login" href="/admin/user/login">
              <a class="nav-link">
                <i class="nav-icon fa fa-sign-out-alt"></i>
                <p>Logout</p>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
);

export default Sidebar;
