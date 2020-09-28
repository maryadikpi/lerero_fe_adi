import Link from "next/link";
import UserRow from './row_UserManagement'
/**
 * userData will be fected using getStaticProps later
 */
const userData = [];
const userRow = userData.map((dData) => <UserRow data={dData}/>)
const TabelUserManagement = () => (
  <>
    <div className="row mb-10">
      <div className="col-12">
        <div className="card text-dark card-primary card-outline">
          <div className="card-header border-0">
            <h3 className="card-title">List of User</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                data-toggle="modal"
                data-target="#addGroup"
              >
                <i className="fas fa-file-alt"></i> Import CSV
              </button>

              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                data-toggle="modal"
                data-target="#addGroup"
              >
                <i className="fas fa-user"></i> Add User
              </button>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            <table className="table table-striped table-valign-middle text-center">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>User Group</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {dummyData.map((dData) => {
                  <UserRow data={dData}/>
                  })
                } */
                userRow
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default TabelUserManagement;
