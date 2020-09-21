import Header from "../../../components/admin/header";
import Navbar from "../../../components/admin/navbar";
import Sidebar from "../../../components/admin/sidebar";
import TblUserActivity from "../../../components/dashboard/tblUserActivity";

const Homepage = () => (
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
                  <h1 className="m-0 text-dark">Dashboard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <div className="row mb-10">
                <div className="col-lg-2 col-6">
                  <div className="small-box bg-primary">
                    <div className="inner">
                      <h3>150</h3>

                      <p>Active Users</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-user"></i>
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 col-6">
                  <div className="small-box bg-green">
                    <div className="inner">
                      <h3>53</h3>

                      <p>Active Group Users</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 col-6">
                  <div className="small-box bg-teal">
                    <div className="inner">
                      <h3>12</h3>

                      <p>Learning Paths</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-road"></i>
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 col-6">
                  <div className="small-box bg-cyan">
                    <div className="inner">
                      <h3>65</h3>

                      <p>Total Quiz</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-book"></i>
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 col-6">
                  <div className="small-box bg-secondary">
                    <div className="inner">
                      <h3>65</h3>

                      <p>Total Tasks</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-tasks"></i>
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 col-6">
                  <div className="small-box bg-primary">
                    <div className="inner">
                      <h3>5</h3>

                      <p>Total Badge</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <TblUserActivity />
              <div className="row mb-10 text-dark">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-header border-0">
                      <div className="d-flex justify-content-between">
                        <h3 className="card-title">Task Progress</h3>
                        <a href="">View Report</a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="position-relative mb-4">
                        <canvas id="visitors-chart" height="200"></canvas>
                      </div>

                      <div className="d-flex flex-row justify-content-end">
                        <span className="mr-2">
                          <i className="fas fa-square text-primary"></i> This
                          Week
                        </span>

                        <span>
                          <i className="fas fa-square text-gray"></i> Last Week
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-header border-0">
                      <div className="d-flex justify-content-between">
                        <h3 className="card-title">Quiz Progress</h3>
                        <a href="">View Report</a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="position-relative mb-4">
                        <canvas id="sales-chart" height="200"></canvas>
                      </div>

                      <div className="d-flex flex-row justify-content-end">
                        <span className="mr-2">
                          <i className="fas fa-square text-primary"></i> This
                          year
                        </span>

                        <span>
                          <i className="fas fa-square text-gray"></i> Last year
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <script src="../../plugins/chart.js/Chart.min.js"></script>
    <script src="../../dist/js/demo.js"></script>
    <script src="../../dist/js/pages/dashboard3.js"></script>
  </>
);

export default Homepage;
