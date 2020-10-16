import Link from "next/link";
import { useEffect } from "react";

function addRequirement() {
  var tbRequirement = 1;
  $("#requirement").append(
    "<table" +
      '  id="tb-requirement-' +
      tbRequirement +
      '"' +
      '  width="100%"' +
      '  align="center"' +
      '  class="border-grey text-left mt-2"' +
      ">" +
      "  <tbody>" +
      '    <tr class="valign-middle">' +
      '      <td width="5%">' +
      '        <input type="checkbox" class="ml-2" />' +
      "      </td>" +
      '      <td width="45%">' +
      '        <p class="mt-12">Available after completion</p>' +
      "      </td>" +
      ' <td width="50%">' +
      '        <p class="mt-12">Select Task / Quiz</p>' +
      "      </td> " +
      "      </tr> " +
      "      <tr> " +
      "        <td></td><td>" +
      '        <select class="form-control width-60 mb-3">' +
      "          <option>Quiz</option>" +
      "          <option>Task</option>" +
      "        </select>" +
      "      </td>" +
      "      <td>" +
      '        <select class="form-control mb-3">' +
      "          <option>1. Introduction</option>" +
      "          <option>2. Explanatory</option>" +
      "          <option>3. Warm Up Test</option>" +
      "        </select>" +
      "      </td>" +
      "      <td>" +
      "        <center>" +
      '          <button id="req-ok" value="' +
      tbRequirement +
      '" class="btn btn-primary ml-3 mb-3 btn-sm float-right mr-4">' +
      "            Ok" +
      "          </button>" +
      '          <i id="req-edit" class="fa fa-edit font-size-18 text-warning p-2 display-none"></i>' +
      '          <i id="req-delete" class="fa fa-trash-alt font-size-18 text-danger p-2 display-none"></i>' +
      "        </center>" +
      "      </td>" +
      "    </tr>" +
      "  </tbody>" +
      "</table>"
  );
  tbRequirement = tbRequirement + 1;
}

function AddTaskManagement() {
  useEffect(() => {
    var currentTab = 1; // Current tab is set to be the first tab (0)
    var numItems = $(".tab").length;
    showTab(currentTab); // Display the current tab
    step(currentTab, null);

    function showTab(n) {
      var x = $("#tab-" + n);
      x.show();
    }

    function step(n, cond) {
      if (cond === "next") {
        var step = $("#step-" + n);
        step.addClass("active");
      } else if (cond == "prev") {
        var step = $("#step-" + (n + 1));
        step.removeClass("active");
      } else {
        var step = $("#step-" + n);
        step.addClass("active");
      }
    }

    function hideTab(n) {
      var x = $("#tab-" + n);
      x.hide();
    }

    $("#nextBtn").click(function() {
      if (currentTab !== numItems) {
        hideTab(currentTab);
        currentTab = currentTab + 1;
        showTab(currentTab);
        step(currentTab, "next");
      }
    });

    $("#prevBtn").click(function() {
      if (currentTab !== 1) {
        hideTab(currentTab);
        currentTab = currentTab - 1;
        showTab(currentTab);
        step(currentTab, "prev");
      }
    });
  });
  return (
    <>
      <div className="row mb-10">
        <div className="col-12">
          <div className="card text-dark card-primary card-outline">
            <div className="card-body table-responsive p-2">
              <div className="row align-center p-3">
                <div className="col-12 mt-3 mb-5">
                  <center>
                    <span id="step-1" className="step mr-4">
                      1
                    </span>
                    <span id="step-2" className="step">
                      2
                    </span>
                  </center>
                </div>
                <div className="col-12">
                  <div id="tab-1" className="tab">
                    <h3 className="title  text-center">General Information</h3>
                    <hr className="width-30" />
                    <div className="row mt-5">
                      <div className="col-2"></div>
                      <div className="col-4">
                        Quiz Name : <br />
                        <input
                          type="text"
                          className="form-control border-left-0 border-top-0 border-right-0 mb-4"
                          placeholder="Your Quiz Name"
                        />
                        Minimum Passing Score : <br />
                        <input
                          type="text"
                          className="form-control width-30 mb-4"
                        />
                        Retaken Availibility : <br />
                        <table className="mb-3">
                          <tr>
                            <td width="30%">
                              <input
                                type="text"
                                className="form-control width-100"
                              />
                            </td>
                            <td>
                              <span className="pl-3">Days</span>
                            </td>
                          </tr>
                        </table>
                        Short Description : <br />
                        <textarea
                          type="text"
                          className="form-control width-100 mb-4"
                          rows="5"
                        ></textarea>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-4">
                        Points : <br />
                        <input
                          type="text"
                          className="form-control border-left-0 border-top-0 border-right-0 mb-4"
                          placeholder="Your Quiz Name"
                        />
                        Penalty Points : <br />
                        <table className="mb-4">
                          <tr>
                            <td width="5%">1st :</td>
                            <td width="10%">
                              <input
                                type="text"
                                className="width-60 ml-2 border-grey"
                              />
                            </td>
                            <td width="5%">2nd :</td>
                            <td width="10%">
                              <input
                                type="text"
                                className="width-60 ml-2 border-grey"
                              />
                            </td>
                            <td width="5%">3rd :</td>
                            <td width="10%">
                              <input
                                type="text"
                                className="width-60 ml-2 border-grey"
                              />
                            </td>
                            <td width="5%">3++ :</td>
                            <td width="10%">
                              <input
                                type="text"
                                className="width-60 ml-2 border-grey"
                              />
                            </td>
                          </tr>
                        </table>
                        Time to Finished (minutes): <br />
                        <input
                          type="text"
                          className="width-50 ml-2 form-control"
                        />
                        <div id="requirement">
                          <table
                            id="tb-requirement-0"
                            class="border-grey text-left mt-2"
                            width="100%"
                            align="center"
                          >
                            <tbody>
                              <tr class="valign-middle">
                                <td width="5%">
                                  <input type="checkbox" class="ml-2" />
                                </td>
                                <td width="45%">
                                  <p class="mt-12">
                                    Available after completion
                                  </p>
                                </td>
                                <td width="50%">
                                  <p class="mt-12">Select Task / Quiz</p>
                                </td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <select class="form-control width-60 mb-3">
                                    <option>Quiz</option>
                                    <option>Task</option>
                                  </select>
                                </td>
                                <td>
                                  <select class="form-control mb-3">
                                    <option>1. Introduction</option>
                                    <option>2. Explanatory</option>
                                    <option>3. Warm Up Test</option>
                                  </select>
                                </td>
                                <td>
                                  <center>
                                    <button
                                      id="req-ok"
                                      value="1"
                                      class="btn btn-primary ml-3 mb-3 btn-sm float-right mr-4"
                                    >
                                      Ok
                                    </button>
                                    <i
                                      id="req-edit"
                                      class="fa fa-edit font-size-18 text-warning p-2 display-none"
                                    ></i>
                                    <i
                                      id="req-delete"
                                      class="fa fa-trash-alt font-size-18 text-danger p-2 display-none"
                                    ></i>
                                  </center>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <table
                          width="100%"
                          align="center"
                          className="text-left"
                        >
                          <tbody>
                            <tr className="valign-middle p-2">
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-sm mt-2 float-right  width-40"
                                  onClick={() => addRequirement()}
                                >
                                  Add Another
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div id="tab-2" className="tab text-center">
                    <h3 className="title">Quiz Detail</h3>
                    <hr className="width-30" />
                    <table
                      width="70%"
                      className="text-left mt-5 border-grey"
                      align="center"
                      cellPadding="20"
                    >
                      <tr className="valign-top">
                        <td width="40%">
                          <font className="pl-2">Section Name :</font>
                          <br />
                          <input
                            type="text"
                            className="width-60 ml-2 border-grey border-top-0 mt-2 border-left-0 border-right-0"
                            placeholder="Your Section Name"
                          />
                        </td>
                        <td>
                          Question Feedback
                          <br />
                          <table>
                            <tr className="valign-top">
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>
                                <font className="ml-2">Wrong Answer</font>
                              </td>
                            </tr>
                            <tr className="valign-top">
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>
                                <font className="ml-2">Correct Answer</font>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr className="valign-top">
                        <td colSpan="2">
                          Short Description
                          <br />
                          <textarea
                            rows="6"
                            className="form-control mt-2"
                          ></textarea>
                        </td>
                      </tr>
                    </table>
                    <table
                      className=" table width-70 text-left mt-5 border-grey"
                      align="center"
                      cellPadding="20"
                    >
                      <tr>
                        <td colSpan="9">
                          Add New Question :
                          <button
                            type="button"
                            className="btn btn-primary btn-sm ml-3 width-20"
                            data-toggle="modal"
                            data-target="#addNewQuestion"
                          >
                            + Add From Question Bank
                          </button>
                        </td>
                      </tr>
                      <tr id="question-1">
                        <td width="5%">1</td>
                        <td width="5%">262</td>
                        <td width="20%">Question 1</td>
                        <td width="15%">Category 1</td>
                        <td width="15%">Multiple Choice</td>
                        <td width="5%">Active</td>
                        <td width="10%">Score : </td>
                        <td width="15%">
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <i className="fa fa-trash text-danger"></i>
                        </td>
                      </tr>
                      <tr id="question-1">
                        <td width="5%">2</td>
                        <td width="5%">262</td>
                        <td width="20%">Question 2</td>
                        <td width="15%">Category 1</td>
                        <td width="15%">Multiple Choice</td>
                        <td width="5%">Active</td>
                        <td width="10%">Score : </td>
                        <td width="15%">
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <i className="fa fa-trash text-danger"></i>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="col-12 mt-5">
                  <center>
                    <i
                      className="fa fa-chevron-circle-left mr-3 font-size-18"
                      id="prevBtn"
                    ></i>
                    <i
                      className="fa fa-chevron-circle-right ml-3 font-size-18"
                      id="nextBtn"
                    ></i>
                  </center>
                </div>
                <div className="col-12 mt-5">
                  <table width="50%" align="center">
                    <tr>
                      <td width="80%">
                        <button
                          type="button"
                          className="btn btn-danger btn-sm mr-5 width-20"
                          data-toggle="modal"
                          data-target="#cancelQuiz"
                        >
                          Cancel
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success btn-sm mr-5 width-100"
                          data-toggle="modal"
                          data-target="#saveQuizSuccess"
                        >
                          Save
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm mr-5 width-100"
                          data-toggle="modal"
                          data-target="#publishQuiz"
                        >
                          Publish
                        </button>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTaskManagement;
