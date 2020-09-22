import Header from "../../../components/admin/header";
import Navbar from "../../../components/admin/navbar";
import Sidebar from "../../../components/admin/sidebar";

import TableGroupManagement from "../../../components/user_group/management/table_GroupManagement";

const UserGroupManagement = () => (
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
                  <h1 className="m-0 text-dark">User Group Management</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">User Group</a>
                    </li>
                    <li className="breadcrumb-item active">Management</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <TableGroupManagement />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default UserGroupManagement;
