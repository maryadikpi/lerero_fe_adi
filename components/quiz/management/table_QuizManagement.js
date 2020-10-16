import Link from "next/link";
import QuizRow from './row_QuizManagement'
  function TableQuizManagement(props){
    var quizRow = []
    if (props.quizList.data) {
      // console.log(props.quizzList.data.data);
      quizRow = props.quizList.data.data.map(
        (dData, index) => {
          return <QuizRow 
                    key={index} 
                    data={dData} 
                    // setDeleteData={setDeleteData} 
                  />
        }
      )
    }
    return (
      <>
        <div className="row mb-10">
          <div className="col-12">
            <div className="card text-dark card-primary card-outline">
              <div className="card-header border-0">
                <h3 className="card-title">List of Quiz</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    data-toggle="modal"
                    data-target="#addGroup"
                  >
                    <i className="fas fa-shield-alt"></i> Add New Quiz
                  </button>
                </div>
              </div>
              <div className="card-body table-responsive p-0">
                <table className="table text-center table-striped table-valign-middle">
                  <thead>
                    <tr>
                      <th width="2%">Id</th>
                      <th>Quiz Name</th>
                      <th>Points</th>
                      <th>1st Pen</th>
                      <th>2nd Pen</th>
                      <th>3rd Pen</th>
                      <th>3rd+ Pen</th>
                      <th>Min Score</th>
                      <th>Retaken (days)</th>
                      <th>Learning Path</th>
                      <th>Milestone</th>
                      <th>Created On</th>
                      <th>Created By</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  { quizRow }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default TableQuizManagement;
