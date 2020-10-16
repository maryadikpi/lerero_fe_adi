import Link from "next/link";
import { useEffect } from "react";

function addRequirement() {
  var tbRequirement = 1;
  $("#requirement").append(
    "<table" +
      '  id="tb-requirement-' +
      tbRequirement +
      '"' +
      '  width="50%"' +
      '  align="center"' +
      '  class="border-grey text-left mt-2"' +
      ">" +
      "  <tbody>" +
      '    <tr class="valign-middle p-2">' +
      '      <td width="5%">' +
      '        <input type="checkbox" class="ml-2" />' +
      "      </td>" +
      '      <td width="25%">' +
      '        <p class="mt-12">Available after completion</p>' +
      "      </td>" +
      '      <td width="10%">' +
      '        <select class="form-control">' +
      "          <option>Quiz</option>" +
      "          <option>Task</option>" +
      "        </select>" +
      "      </td>" +
      '      <td width="15%">' +
      '        <p class="pl-4 mt-12">Select Quiz :</p>' +
      "      </td>" +
      '      <td width="25%">' +
      '        <select class="form-control">' +
      "          <option>1. Introduction</option>" +
      "          <option>2. Explanatory</option>" +
      "          <option>3. Warm Up Test</option>" +
      "        </select>" +
      "      </td>" +
      "      <td>" +
      "        <center>" +
      '          <button id="req-ok" value="' +
      tbRequirement +
      '" class="btn btn-primary btn-sm float-right mr-4">' +
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
                  <div id="tab-1" className="tab text-center">
                    <h3 className="title">General Information</h3>
                    <hr className="width-30" />
                    <table
                      width="50%"
                      border="0"
                      className="text-left mt-5"
                      align="center"
                    >
                      <tbody>
                        <tr>
                          <td width="40%">
                            Task Name : <br />
                            <input
                              placeholder="Your Profile Name"
                              className="form-control border-top-0 border-left-0 border-right-0"
                            />
                          </td>
                          <td width="20%">
                            <div htmlFor="points" className="pl-5">
                              Points :
                              <input
                                id="points"
                                placeholder="10"
                                className="form-control"
                              />
                            </div>
                          </td>
                          <td rowSpan="2" className="valign-top">
                            <div htmlFor="points" className="pl-5">
                              Files :
                              <input
                                type="file"
                                id="points"
                                className="form-control"
                                multiple
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <div className="row">
                              <div className="col-2">Type :</div>
                              <div className="col-10">
                                <select className="form-control">
                                  <option>Individual</option>
                                  <option>Group</option>
                                </select>
                              </div>
                            </div>
                          </td>
                          <td width="20%">
                            <div htmlFor="points" className="pl-5">
                              Deadline :<br />
                              <div className="row">
                                <div className="col-6">
                                  <input
                                    id="points"
                                    placeholder="6"
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-6"> Days</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="3">
                            <div className="mt-2">
                              Description : <br />
                              <textarea
                                rows="5"
                                className="width-100 border-grey"
                              ></textarea>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div id="tab-2" className="tab text-center">
                    <h3 className="title">Requirement</h3>
                    <hr className="width-30" />
                    <div id="requirement"></div>
                    <table width="50%" align="center" className="text-left">
                      <tbody>
                        <tr className="valign-middle p-2">
                          <td>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm mt-2 float-right  width-20"
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
                          data-target="#cancelTask"
                        >
                          Cancel
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success btn-sm mr-5 width-100"
                          data-toggle="modal"
                          data-target="#saveTaskSuccess"
                        >
                          Save
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm mr-5 width-100"
                          data-toggle="modal"
                          data-target="#publishTask"
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
