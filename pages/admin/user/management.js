import Header from "components/admin/header";
import Navbar from "components/admin/navbar";
import Sidebar from "components/admin/sidebar";

import TableUserManagement from "components/user/management/table_UserManagement";

const UserManagement = () => (
  <>
    <Header />
    <Navbar />
    <section className="hold-transition sidebar-mini">
      <div className="wrapper bg-dark">
        <Sidebar />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">User Management</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">User</a>
                    </li>
                    <li className="breadcrumb-item active">Management</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <TableUserManagement />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default UserManagement;
