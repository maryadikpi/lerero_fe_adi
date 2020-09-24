import Header from "components/admin/header";
import Navbar from "components/admin/navbar";
import Sidebar from "components/admin/sidebar";

import TabelDetailGroup from "components/user_group/management/table_DetailGroup";
import ModalDetailGroup from "components/user_group/management/modal_DetailGroup";

const UserGroupDetail = () => (
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
                  <h1 className="m-0 text-dark">Group Sales</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">User Group</a>
                    </li>
                    <li className="breadcrumb-item active">Detail</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <TabelDetailGroup />
              <ModalDetailGroup />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default UserGroupDetail;
