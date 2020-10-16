import Link from "next/link";
import { useState, useEffect } from "react"
import AddNewCategory from "../modal/modalAddQuestionCategory"
import CancelAddQuestion from "../modal/modalCancelAddQuestion"


var idOption = [0, 0, 0];
var option = ["A", "B", "C", "D"];

function addOption(category) {
  if (category === "single") {
    if (!option[idOption[0]]) {
      alert("Cannot Add More Option");
    } else {
      $("#answer").append(
        '  <div id="id-' +
          option[idOption[0]] +
          '" className="card singleQuestion text-dark card-primary mt-4 card-outline">' +
          '    <div className="card-body table-responsive p-3">' +
          '      <div className="row">' +
          '        <div className="col-1"> Answer ' +
          option[idOption[0]] +
          " </div>" +
          '        <div className="col-11">' +
          '          <input type="checkbox" className="mr-2 p-2" />' +
          "          Correct Answer ?" +
          "        </div>" +
          "      </div>" +
          '      <div className="row mt-3">' +
          '        <div className="col-12">' +
          "          Answer Description" +
          "          <br />" +
          "          <textarea" +
          '            className="form-control mb-4 mt-2"' +
          '            rows="7"' +
          "          ></textarea>" +
          "        </div>" +
          "      </div>" +
          '      <div className="row ml-2 mt-3 mb-4">' +
          '        <table width="100%">' +
          "          <tbody>" +
          '            <tr className="valign-top">' +
          '              <td width="2%">' +
          '                <input type="checkbox" />' +
          "              </td>" +
          '              <td width="7%">Feedback : </td>' +
          "              <td>" +
          "                <input" +
          '                  type="text"' +
          '                  className="form-control"' +
          "                />" +
          "              </td>" +
          "            </tr>" +
          "          </tbody>" +
          "        </table>" +
          "      </div>" +
          "    </div>" +
          "  </div>"
      );
      idOption[0] = idOption[0] + 1;
    }
  } else if (category === "multi") {
    if (!option[idOption[1]]) {
      alert("Cannot Add More Option");
    } else {
      $("#answer").append(
        '  <div id="id-' +
          option[idOption[1]] +
          '" className="card MultiQuestion text-dark card-primary mt-4 card-outline">' +
          '    <div className="card-body table-responsive p-3">' +
          '      <div className="row">' +
          '        <div className="col-1"> Answer ' +
          option[idOption[1]] +
          " </div>" +
          '        <div className="col-11">' +
          '          <input type="checkbox" className="mr-2 p-2" />' +
          "          Correct Answer ?" +
          "        </div>" +
          "      </div>" +
          '      <div className="row mt-3">' +
          '        <div className="col-12">' +
          "          Answer Description" +
          "          <br />" +
          "          <textarea" +
          '            className="form-control mb-4 mt-2"' +
          '            rows="7"' +
          "          ></textarea>" +
          "        </div>" +
          "      </div>" +
          "    </div>" +
          "  </div>"
      );
      idOption[1] = idOption[1] + 1;
    }
  }
}


function btnOption(category) {
  if (category === "single") {
    $(".singleQuestion").show();
    $("#btnOptionSingle").show();
    $("#btnOptionMulti").hide();
    $("#multiFeedBack").hide();
    $(".MultiQuestion").hide();
    $("#numberFeedBack").hide();
  } else if (category === "multi") {
    $("#btnOptionSingle").hide();
    $(".singleQuestion").hide();
    $("#multiFeedBack").show();
    $("#btnOptionMulti").show();
    $(".MultiQuestion").show();

    $("#numberFeedBack").hide();
  } else if (category === "number") {
    $("#btnOptionSingle").hide();
    $(".singleQuestion").hide();
    $("#multiFeedBack").hide();
    $("#btnOptionMulti").hide();
    $(".MultiQuestion").hide();
    $("#numberFeedBack").show();
  }
}


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
                                onClick={() => btnOption("single")}
                                id="single"
                                type="radio"
                                name="question_type"
                                className="mr-2"
                              />
                              Single Choice
                            </td>
                            <td>
                              <input
                                onClick={() => btnOption("multi")}
                                id="multi"
                                type="radio"
                                name="question_type"
                                className="mr-2"
                              />
                              Multiple Choice
                            </td>
                            <td>
                              <input
                                onClick={() => btnOption("number")}
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

                      <div
                        id="multiFeedBack"
                        style={{
                          border: "solid thin #2424"
                        }}
                        className="p-3 mt-4 display-none"
                      >
                        <div className="row">
                          <table width="100%">
                            <tbody>
                              <tr className="valign-top">
                                <td width="2%">
                                  <input type="checkbox" />
                                </td>
                                <td width="10%">Correct Feedback : </td>
                                <td>
                                  <input type="text" className="form-control" />
                                </td>
                              </tr>
                              <tr className="valign-top">
                                <td width="2%">
                                  <input type="checkbox" className="mt-2" />
                                </td>
                                <td width="10%" className="mt-2">
                                  Wrong Feedback :
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control mt-2"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div id="numberFeedBack" className=" mt-4 display-none">
                        <div
                          className="row p-3"
                          style={{
                            border: "solid thin #2424"
                          }}
                        >
                          <table width="100%">
                            <tbody>
                              <tr className="valign-top">
                                <td width="12%">Correct Answer : </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control width-10"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="row p-3 mt-4"
                          style={{
                            border: "solid thin #2424"
                          }}
                        >
                          <table width="100%">
                            <tbody>
                              <tr className="valign-top">
                                <td width="2%">
                                  <input type="checkbox" />
                                </td>
                                <td width="10%">Correct Feedback : </td>
                                <td>
                                  <input type="text" className="form-control" />
                                </td>
                              </tr>
                              <tr className="valign-top">
                                <td width="2%">
                                  <input type="checkbox" className="mt-2" />
                                </td>
                                <td width="10%" className="mt-2">
                                  Wrong Feedback :
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control mt-2"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div id="answer"></div>
                      <button
                        id="btnOptionSingle"
                        onClick={() => addOption("single")}
                        className="btn btn-primary float-right display-none"
                      >
                        + Add Answer
                      </button>
                      <button
                        id="btnOptionMulti"
                        onClick={() => addOption("multi")}
                        className="btn btn-primary mt-3 float-right display-none"
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
