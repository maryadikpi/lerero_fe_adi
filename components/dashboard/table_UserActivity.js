const TblUserActivity = () => (
  <div className="row mb-10">
    <div className="col-12">
      <div className="card text-dark">
        <div className="card-header border-0">
          <h3 className="card-title">Latest User Activity</h3>
          <div className="card-tools">
            <a href="#" className="btn btn-tool btn-sm">
              <i className="fas fa-download"></i>
            </a>
            <a href="#" className="btn btn-tool btn-sm">
              <i className="fas fa-bars"></i>
            </a>
          </div>
        </div>
        <div className="card-body table-responsive p-0">
          <table className="table table-striped table-valign-middle">
            <thead>
              <tr>
                <th>Id</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>User Group</th>
                <th>Task Progress</th>
                <th>Quiz Progress</th>
                <th>Latest Task Done</th>
                <th>Latest Quiz Done</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src="../dist/img/default-150x150.png"
                    alt="Product 1"
                    className="img-circle img-size-32 mr-2"
                  />
                </td>
                <td>Makaryo Sregep</td>
                <td>Sales</td>
                <td>
                  <div class="progress progress-xs">
                    <div class="progress-bar progress-bar-50 bg-warning"></div>
                  </div>
                </td>
                <td>
                  <div class="progress progress-xs">
                    <div class="progress-bar progress-bar-70 bg-warning"></div>
                  </div>
                </td>
                <td>2.1 Breaking the new ..</td>
                <td>7.4 Small change</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <img
                    src="../dist/img/default-150x150.png"
                    alt="Product 1"
                    className="img-circle img-size-32 mr-2"
                  />
                </td>
                <td>Makaryo Sregep</td>
                <td>Sales</td>
                <td>
                  <div class="progress progress-xs">
                    <div class="progress-bar progress-bar-80 bg-warning"></div>
                  </div>
                </td>
                <td>
                  <div class="progress progress-xs">
                    <div class="progress-bar progress-bar-100 bg-success"></div>
                  </div>
                </td>
                <td>2.1 Breaking the new ..</td>
                <td>7.4 Small change</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <img
                    src="../dist/img/default-150x150.png"
                    alt="Product 1"
                    className="img-circle img-size-32 mr-2"
                  />
                </td>
                <td>Makaryo Sregep</td>
                <td>Sales</td>
                <td>
                  <div class="progress progress-xs">
                    <div class="progress-bar progress-bar-40 bg-danger"></div>
                  </div>
                </td>
                <td>
                  <div class="progress progress-xs">
                    <div class="progress-bar progress-bar-80 bg-warning"></div>
                  </div>
                </td>
                <td>2.1 Breaking the new ..</td>
                <td>7.4 Small change</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <img
                    src="../dist/img/default-150x150.png"
                    alt="Product 1"
                    className="img-circle img-size-32 mr-2"
                  />
                </td>
                <td>Makaryo Sregep</td>
                <td>Sales</td>
                <td>
                  <div class="progress progress-xs">
                    <div class="progress-bar progress-bar-50 bg-danger"></div>
                  </div>
                </td>
                <td>
                  <div class="progress progress-xs">
                    <div class="progress-bar progress-bar-90 bg-success"></div>
                  </div>
                </td>
                <td>2.1 Breaking the new ..</td>
                <td>7.4 Small change</td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <img
                    src="../dist/img/default-150x150.png"
                    alt="Product 1"
                    className="img-circle img-size-32 mr-2"
                  />
                </td>
                <td>Makaryo Sregep</td>
                <td>Sales</td>
                <td>
                  <div class="progress progress-xs">
                    <div class="progress-bar progress-bar-30 bg-danger"></div>
                  </div>
                </td>
                <td>
                  <div class="progress progress-xs">
                    <div class="progress-bar progress-bar-70 bg-warning"></div>
                  </div>
                </td>
                <td>2.1 Breaking the new ..</td>
                <td>7.4 Small change</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default TblUserActivity;
