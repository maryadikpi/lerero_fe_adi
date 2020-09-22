import Link from "next/link";

const Sidebar = () => (
  <aside className="main-sidebar sidebar-dark-danger margin-top--60">
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
          <Link as="/admin/auth/profile" href="/admin/auth/profile">
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
          <li className="nav-item">
            <Link as="/admin/dashboard" href="/admin/dashboard">
              <a className="nav-link">
                <i className="nav-icon fa fa-home"></i>
                <p>Dashboard</p>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link as="/admin/dashboard" href="/admin/dashboard">
              <a className="nav-link">
                <i className="nav-icon fa fa-road"></i>
                <p>Learning Path</p>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link as="/admin/dashboard" href="/admin/dashboard">
              <a className="nav-link">
                <i className="nav-icon fa fa-tasks"></i>
                <p>Tasks</p>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link as="/admin/dashboard" href="/admin/dashboard">
              <a className="nav-link">
                <i className="nav-icon fa fa-tachometer-alt"></i>
                <p>Quiz</p>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link as="/admin/dashboard" href="/admin/dashboard">
              <a className="nav-link">
                <i className="nav-icon fa fa-user"></i>
                <p>User</p>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/user_group/management">
              <a className="nav-link">
                <i className="nav-icon fa fa-users"></i>
                <p>User Groups</p>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link as="/admin/dashboard" href="/admin/dashboard">
              <a className="nav-link">
                <i className="nav-icon fa fa-shield-alt"></i>
                <p>Badges</p>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link as="/admin/auth/login" href="/admin/auth/login">
              <a className="nav-link">
                <i className="nav-icon fa fa-sign-out-alt"></i>
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
