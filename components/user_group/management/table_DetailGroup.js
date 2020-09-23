import Link from "next/link";
const TabelDetailGroup = () => (
  <>
    <div className="row mb-10">
      <div className="col-12">
        <div className="card text-dark card-primary card-outline">
          <div className="card-header border-0">
            <h3 className="card-title">List of User</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-toggle="modal"
                data-target="#addGroup"
              >
                <i className="fas fa-users"></i> Add User
              </button>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            <table className="table text-center table-striped table-valign-middle">
              <thead>
                <tr>
                  <th width="5%">Id</th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Learning Path</th>
                  <th>Points</th>
                  <th>Badges</th>
                  <th>Kudos</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <img
                      src="../../dist/img/default-150x150.png"
                      alt="Product 1"
                      className="img-circle img-size-32 mr-2"
                    />
                  </td>
                  <td>Makaryo Sregep</td>
                  <td>makaryo123</td>
                  <td>101 Introduction</td>
                  <td>20</td>
                  <td>
                    <i className="fas fa-shield-alt"></i>
                  </td>
                  <td>3</td>
                  <td>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#actionMessage"
                      className="btn btn-primary width-100px mr-2 btn-sm"
                    >
                      More Details
                    </button>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#actionBtn"
                      className="btn btn-danger width-100px btn-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <img
                      src="../../dist/img/default-150x150.png"
                      alt="Product 1"
                      className="img-circle img-size-32 mr-2"
                    />
                  </td>
                  <td>Makaryo Sregep</td>
                  <td>makaryo123</td>
                  <td>101 Introduction</td>
                  <td>20</td>
                  <td>
                    <i className="fas fa-shield-alt"></i>
                  </td>
                  <td>3</td>
                  <td>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#actionMessage"
                      className="btn btn-primary width-100px mr-2 btn-sm"
                    >
                      More Details
                    </button>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#actionBtn"
                      className="btn btn-danger width-100px btn-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <img
                      src="../../dist/img/default-150x150.png"
                      alt="Product 1"
                      className="img-circle img-size-32 mr-2"
                    />
                  </td>
                  <td>Makaryo Sregep</td>
                  <td>makaryo123</td>
                  <td>101 Introduction</td>
                  <td>20</td>
                  <td>
                    <i className="fas fa-shield-alt"></i>
                  </td>
                  <td>4</td>
                  <td>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#actionMessage"
                      className="btn btn-primary width-100px mr-2 btn-sm"
                    >
                      More Details
                    </button>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#actionBtn"
                      className="btn btn-danger width-100px btn-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <img
                      src="../../dist/img/default-150x150.png"
                      alt="Product 1"
                      className="img-circle img-size-32 mr-2"
                    />
                  </td>
                  <td>Makaryo Sregep</td>
                  <td>makaryo123</td>
                  <td>101 Introduction</td>
                  <td>20</td>
                  <td>
                    <i className="fas fa-shield-alt"></i>
                  </td>
                  <td>3</td>
                  <td>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#actionMessage"
                      className="btn btn-primary width-100px mr-2 btn-sm"
                    >
                      More Details
                    </button>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#actionBtn"
                      className="btn btn-danger width-100px btn-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <img
                      src="../../dist/img/default-150x150.png"
                      alt="Product 1"
                      className="img-circle img-size-32 mr-2"
                    />
                  </td>
                  <td>Makaryo Sregep</td>
                  <td>makaryo123</td>
                  <td>101 Introduction</td>
                  <td>20</td>
                  <td>
                    <i className="fas fa-shield-alt"></i>
                  </td>
                  <td>3</td>
                  <td>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#actionMessage"
                      className="btn btn-primary width-100px mr-2 btn-sm"
                    >
                      More Details
                    </button>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#actionBtn"
                      className="btn btn-danger width-100px btn-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default TabelDetailGroup;
