export default function addUserToGroup(props) {
    const closeAddUserGroup = () => addUserGroup(false);
    const openAdduserGroup = () => addUserGroup(true);
    return (
        <>
            <Modal size="lg" show={addUser} onHide={closeAddUserGroup}>
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    Create User Group
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body p-0">
                    <div className="row align-center">
                        <div className="col-12">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-0">
                                <i className="fas fa-search"></i>
                            </span>
                            </div>
                            <input
                            type="text"
                            className="form-control border-left-0 border-0"
                            placeholder="Search Name"
                            />
                        </div>
                        </div>
                        <div className="col-12">
                        <table className="table table-striped table-valign-middle">
                            <thead>
                            <tr>
                                <th width="10%">Add?</th>
                                <th width="5%">Id</th>
                                <th width="10%">Avatar</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                <input type="checkbox" className="mr-2" /> Yes
                                </td>
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
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>
                                <input type="checkbox" className="mr-2" /> Yes
                                </td>
                                <td>2</td>
                                <td>
                                <img
                                    src="../../dist/img/default-150x150.png"
                                    alt="Product 1"
                                    className="img-circle img-size-32 mr-2"
                                />
                                </td>
                                <td>Makaryo Sregep</td>
                                <td>makaryo123</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>
                                <input type="checkbox" className="mr-2" /> Yes
                                </td>
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
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>
                                <input type="checkbox" className="mr-2" /> Yes
                                </td>
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
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>
                                <input type="checkbox" className="mr-2" /> Yes
                                </td>
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
                                <td>Active</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <br />

                    <div className="row mb-5">
                        <div className="col-6">
                        <Button
                            onClick={closeAddUserGroup}
                            className="btn btn-sm btn-danger width-90 float-right"
                        >
                            Cancel
                        </Button>
                        </div>
                        <div className="col-6">
                        <Button
                            onClick={closeAddUserGroup}
                            className="btn width-90 btn-sm btn-primary"
                            data-target="#confimSave"
                            data-toggle="modal"
                        >
                            Ok
                        </Button>
                        </div>
                    </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}