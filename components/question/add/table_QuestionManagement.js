import Link from "next/link";
import { useState, useEffect } from "react"
import AddNewCategory from "../modal/modalAddQuestionCategory"
import CancelAddQuestion from "../modal/modalCancelAddQuestion"
import QuestionOptions from "./QuestionOptions"


var idOption = [0, 0, 0];
var option = ["A", "B", "C", "D"];

function TableQuestionManagement(props) {
  
  const handleNewCategory = () => {
    $('#addNewQuestionCat').modal('show')
  }

  var questCategory = []
    if (props.questCategory) {
      questCategory = props.questCategory.map((item, i) => {
                    return <option key={i} value={item.name}>{item.display_name}</option>
                })
    }
  const handleSelectCatg = (event) => {
    console.log(event.target.value)
  }

  const maxQuestionOption = 4
  const [currQuestOpt, setCurrQuestOpt] = useState([])
  const handleQuestionType = (type) => {
    console.log('handle question type : '+type)
    setCurrQuestOpt([].concat(currQuestOpt, [1]))
  }

  return (
    <>
      <div className="row mb-10">
        <div className="col-12">
          <div className="card text-dark card-primary card-outline">
            <div className="card-body table-responsive p-2">
              <div className="row align-center p-3">
                <div className="col-12">
                  <div>
                    <h2 className="text-center">Question Details</h2>
                    <hr className="width-30 mb-5" />
                  </div>
                  <div className="row text-left">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-3">
                          <p htmlFor="leraningPathname" className="">
                            <b>Question Name : </b>
                          </p>
                          <input
                            id="leraningPathname"
                            type="text"
                            className="form-control border-top-0 border-right-0 border-left-0 mb-5"
                            placeholder="Your Question Name"
                          />
                        </div>
                        <div className="col-1"></div>
                        <div className="col-3">
                          <p htmlFor="leraningPathname" className="">
                            <b>Question Category : </b>
                          </p>
                          {/* <input
                            id="leraningPathname"
                            type="text"
                            className="form-control border-top-0 border-right-0 border-left-0 mb-5"
                            placeholder="Your Question Category"
                          /> */}
                          <select
                              type="button"
                              className="form-control border-top-0 border-right-0 border-left-0 mb-5"
                              onChange={handleSelectCatg}
                              style={{width: '67%', border: '1px solid gray'}}
                              //value={data.role_id}
                          >
                              {questCategory}
                          </select>

                        </div>
                        <div className="col-2 col-md-3 col-sm-3">
                            <br/> <br/>
                            <button
                              type="button"
                              className="btn btn-sm btn-success width-80 float-right"
                              onClick={handleNewCategory}
                            >
                              + Add New Category
                            </button>

                        </div>
                      </div>

                      <p htmlFor="leraningPathname" className="">
                        <b>Learning Path Description : </b>
                      </p>
                      <textarea
                        className="form-control mb-4"
                        rows="7"
                      ></textarea>
                      <table width="800px" className="text-left">
                        <tbody>
                          <tr>
                            <td>Select question type : </td>
                            <td>
                              <input
                                onClick={() => handleQuestionType("single")}
                                id="single"
                                type="radio"
                                name="question_type"
                                className="mr-2"
                              />
                              Single Choice
                            </td>
                            <td>
                              <input
                                onClick={() => handleQuestionType("multi")}
                                id="multi"
                                type="radio"
                                name="question_type"
                                className="mr-2"
                              />
                              Multiple Choice
                            </td>
                            <td>
                              <input
                                onClick={() => handleQuestionType("number")}
                                id="number"
                                type="radio"
                                name="question_type"
                                className="mr-2"
                              />
                              Number Input
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      
                    {
                      // OPTION QUESTION TYPE WILL BE HERE
                    }

                    {currQuestOpt.length > 0 &&
                      currQuestOpt.map((item, index) => {
                        return <QuestionOptions key={index}/>
                      })
                    }

                    {
                      // ********************************* //
                    }
                      <button
                        id="btnOptionSingle"
                        onClick={() => addOption("single")}
                        className="btn btn-primary float-right"
                      >
                        + Add Answer
                      </button>

                    </div>
                  </div>
                  <div className="mt-5">
                    <button
                      id="btnOptionMulti"
                      data-toggle="modal"
                      data-target="#saveQuestionSuccess"
                      className="btn btn-primary mt-3 width-10 ml-2 float-right"
                    >
                      Save
                    </button>
                    <button
                      id="btnOptionMulti"
                      data-toggle="modal"
                      data-target="#publishAddQuestion"
                      className="btn btn-success mt-3 width-10 float-right"
                    >
                      Publish
                    </button>
                    <button
                      id="btnOptionMulti"
                      onClick={() => {
                        $('#cancelAddQuestion').modal('show')
                      }}
                      className="btn btn-danger mt-3 width-10 float-left"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddNewCategory
        questCategory={props.questCategory}
        setQuestCategory={props.setQuestCategory}
      />

      <CancelAddQuestion />
    </>
  );
}

export default TableQuestionManagement;
