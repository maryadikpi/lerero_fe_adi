import Header from "../../../components/admin/header";
import Navbar from "../../../components/admin/navbar";
import Sidebar from "../../../components/admin/sidebar";

import UserProfileDetail from "../../../components/user/profileDetail";
import UserProfileTabActivity from "../../../components/user/profileTabActivity";
import UserProfileTabTimeline from "../../../components/user/profileTabTimeline";
import UserProfileTabSettings from "../../../components/user/profileTabSettings";

const Profile = () => (
  <>
    <Header />
    <Navbar />
    <body className="hold-transition sidebar-mini">
      <div className="wrapper">
        <Sidebar />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Profile</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">User Profile</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-3">
                  <UserProfileDetail />
                </div>
                <div class="col-md-9">
                  <div class="card">
                    <div class="card-header p-2">
                      <ul class="nav nav-pills">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            href="#activity"
                            data-toggle="tab"
                          >
                            Activity
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#timeline"
                            data-toggle="tab"
                          >
                            Timeline
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#settings"
                            data-toggle="tab"
                          >
                            Settings
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body">
                      <div class="tab-content">
                        <UserProfileTabActivity />
                        <UserProfileTabTimeline />
                        <UserProfileTabSettings />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </>
);

export default Profile;
