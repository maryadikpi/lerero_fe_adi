import Link from "next/link";
import { useEffect } from "react";
function TableLearningPathManagement() {
  useEffect(() => {
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    $(".next").click(function() {
      if (animating) return false;
      animating = true;

      current_fs = $(this).parent();
      next_fs = $(this)
        .parent()
        .next();

      //activate next step on progressbar using the index of next_fs
      $("#progressbar li")
        .eq($("fieldset").index(next_fs))
        .addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        {
          opacity: 0
        },
        {
          step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = now * 50 + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
              transform: "scale(" + scale + ")",
              position: "inherit"
            });
            next_fs.css({
              left: left,
              opacity: opacity
            });
          },
          duration: 800,
          complete: function() {
            current_fs.hide();
            animating = false;
          },
          //this comes from the custom easing plugin
          easing: "easeInOutBack"
        }
      );
    });

    $(".previous").click(function() {
      if (animating) return false;
      animating = true;

      current_fs = $(this).parent();
      previous_fs = $(this)
        .parent()
        .prev();

      //de-activate current step on progressbar
      $("#progressbar li")
        .eq($("fieldset").index(current_fs))
        .removeClass("active");

      //show the previous fieldset
      previous_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        {
          opacity: 0
        },
        {
          step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = (1 - now) * 50 + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
              left: left
            });
            previous_fs.css({
              transform: "scale(" + scale + ")",
              opacity: opacity
            });
          },
          duration: 800,
          complete: function() {
            current_fs.hide();
            animating = false;
          },
          //this comes from the custom easing plugin
          easing: "easeInOutBack"
        }
      );
    });

    let i = 1;
    $("#addMilestone").click(function() {
      $("#milestone").html(
        "<tr id='milestone" +
          "'>" +
          "<td width='20%' class='border-bottom-0'  style='vertical-align: top;'>Milestone Name</td>" +
          "<td>" +
          "<input type='text' class='form-control' />" +
          "</td>" +
          "</tr>" +
          "<tr>" +
          "<td  style='vertical-align: top;'>Milestone Description</td>" +
          "<td>" +
          "<textarea type='text' class='form-control'></textarea>" +
          "</td>" +
          "</tr>" +
          "<tr>" +
          "<td colspan='3'>" +
          "<button type='button' class='btn btn-sm btn-primary width-10 m-2 float-right' id='addMilestone'>Ok</button>" +
          "<button type='button' class='btn btn-sm btn-danger width-10 m-2 float-right' id='removeAddMilestone'>Cancel</button>" +
          "</td>" +
          "</tr>"
      );
      i++;
    });
  });
  return (
    <>
      <div className="row mb-10">
        <div className="col-12">
          <div className="card text-dark card-primary card-outline">
            <div className="card-body table-responsive p-2">
              <div className="row align-center p-3">
                <div className="col-12">
                  <section className="multi_step_form">
                    <form id="msform">
                      <ul id="progressbar">
                        <li className="active">General Information</li>
                        <li>Association</li>
                        <li>Milestone Configuration</li>
                      </ul>
                      <fieldset>
                        <div>
                          <h2>General Information</h2>
                          <hr className="width-40 mb-5" />
                        </div>
                        <div className="row text-left">
                          <div className="col-md-7">
                            <p htmlFor="leraningPathname" className="">
                              <b>Learning Path Name : </b>
                            </p>
                            <input
                              id="leraningPathname"
                              type="text"
                              className="form-control border-top-0 border-right-0 border-left-0 mb-5"
                              placeholder="Type user's group name"
                            />
                            <p htmlFor="leraningPathname" className="">
                              <b>Learning Path Description : </b>
                            </p>
                            <textarea className="form-control mb-4"></textarea>
                            <p htmlFor="leraningPathname" className="">
                              <b>Learning Path Requirement : </b>
                            </p>
                            <table className="table text-left font-size-12 table-valign-middle">
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td
                                    className="accordion-toggle collapsed"
                                    id="accordion1"
                                    data-toggle="collapse"
                                    data-parent="#accordion1"
                                    href="#collapseOne"
                                  >
                                    Learning Path 1
                                  </td>
                                  <td>Requirement : N/A</td>
                                  <td>Status : Published</td>
                                  <td>Created On : 23/11/20</td>
                                  <td>Create By : Thomas Wayne</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td
                                    className="accordion-toggle collapsed"
                                    id="accordion1"
                                    data-toggle="collapse"
                                    data-parent="#accordion1"
                                    href="#collapseOne"
                                  >
                                    Learning Path 2
                                  </td>
                                  <td>Requirement : Learning Path 1</td>
                                  <td>Status : Published</td>
                                  <td>Created On : 23/11/20</td>
                                  <td>Create By : Thomas Wayne</td>
                                </tr>
                              </tbody>
                            </table>
                            <button
                              type="button"
                              data-toggle="modal"
                              data-target="#addLearningPath"
                              className="btn btn-sm text-left btn-success width-50 mb-5"
                            >
                              + Add Learning Path Requirement
                            </button>
                            <p htmlFor="leraningPathname" className="">
                              <b> Milestone :</b>
                            </p>
                            <table id="milestone" width="100%"></table>
                            <button
                              type="button"
                              className="btn btn-sm text-left btn-success width-20 mb-5 mt-5"
                              id="addMilestone"
                            >
                              + Add Milestone
                            </button>
                          </div>
                          <div className="col-md-1"></div>
                          <div className="col-md-4 text-center">
                            <p htmlFor="leraningPathname" className="">
                              <b>Learning Path Image Hero : </b>
                            </p>
                            <img
                              src={
                                process.env.NEXT_PUBLIC_IMG_PATH +
                                "/dist/img/default-150x150.png"
                              }
                              alt="Product 1"
                              className="img-circle mr-2"
                            />
                            <br />
                            <button
                              type="button"
                              className="btn btn-sm text-center btn-success mt-4 width-30 mb-5"
                            >
                              Upload Image
                            </button>
                          </div>
                        </div>
                        <br />
                        <button
                          type="button"
                          className="next mt-2 mb-2 width-50 action-button"
                        >
                          Continue
                        </button>
                        <br />
                      </fieldset>
                      <fieldset>
                        <h3>Verify Your Identity</h3>
                        <h6>
                          Please upload any of these documents to verify your
                          Identity.
                        </h6>
                        <button
                          type="button"
                          className="action-button previous previous_button"
                        >
                          Back
                        </button>
                        <button type="button" className="next action-button">
                          Continue
                        </button>
                      </fieldset>
                      <fieldset>
                        <h3>Create Security Questions</h3>
                        <h6>
                          Please update your account with security questions
                        </h6>
                        <button
                          type="button"
                          className="action-button previous previous_button"
                        >
                          Back
                        </button>
                        <a href="#" className="action-button">
                          Finish
                        </a>
                      </fieldset>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableLearningPathManagement;
