import Link from "next/link";
import { useState, useEffect } from "react"
import {Spinner, Toast} from "react-bootstrap"

import kpiHelper, {kpiFetch} from 'kpi_helper'
import {ADD_QUESTION, UPDATE_QUESTION} from 'config/const_api_url'

import AddNewCategory from "../modal/modalAddQuestionCategory"
import CancelAddQuestion from "../modal/modalCancelAddQuestion"
import QuestionOptions from "./questionOptions"
import AnswerFeedback from "./answerFeedback"

function TableQuestionManagement(props) {
  
  const [questionName, setQuestionName] = useState('')
  const [questionDesc, setQuestionDesc] = useState('')
  const [questionCatgId, setQuestionCatg] = useState()
  const [isSubmit, setSubmit] = useState(false)
  const [showSpinner, setSpinner] = useState(false)
  const [showToast, setToast] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleQuestionName = (e) => {
    setQuestionName(e.target.value)
  }

  const handleQuestionDesc = (e) => {
    setQuestionDesc(e.target.value)
  }

  const handleNewCategory = () => {
    $('#addNewQuestionCat').modal('show')
  }

  var questCategory = []
    if (props.questCategory) {
      questCategory = props.questCategory.map((item, i) => {
                    return <option key={i} value={item.id}>{item.display_name}</option>
                })
    }

  const handleSelectCatg = (event) => {
    setQuestionCatg(event.target.value)
  }

  function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }

  const defaultOptParams = [
    {
      a: {
        label: 'a',
        answer: 'Answer 1',
        correct: false,
        feedback: 'this is feedback answer a'
      }
    }
  ]

  const defaultFeedback= {
    correct: {
      status: false,
      content: null
    }, 
    wrong: {
      status: false,
      content: null
    }
  }

  const maxQuestionOption = 4
  const [currQuestOpt, setCurrQuestOpt] = useState([])
  const [currLetter, setCurrLetter] = useState('a')
  const [currQuestType, setCurrQuestType] = useState('')
  const [questTypeNumber, setQuestTypeNumber] = useState(0)
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false)
  const [showAddAnswerBtn, setShowAddAnswerBtn] = useState(false)
  const [optionParams, setOptionParams] = useState(defaultOptParams)
  const [feedback, setFeedback] = useState(defaultFeedback)

  const handleQuestionType = (type) => {
    
    switch (type) {
      case 'single':
        if (currQuestType !== 'single') {
          // First time
          setCurrQuestOpt([])
          setCurrQuestType('single')
          setCurrLetter('a')
          setCurrQuestOpt([{title: 'a'}])
          setOptionParams(defaultOptParams)
          setFeedback(defaultFeedback)
          setQuestTypeNumber(1)
        } else {
          // Second time and so on
          setCurrLetter(nextChar(currLetter))
          setCurrQuestOpt([].concat(currQuestOpt, [{title: nextChar(currLetter)}]))
          setOptionParams([].concat(optionParams, [{[`${nextChar(currLetter)}`]: {label: nextChar(currLetter)}}]))
        }
        setShowAnswerFeedback(false)
        setShowAddAnswerBtn(true)
      break
      case 'multiple':
        if (currQuestType !== 'multiple') {
          // First time
          setCurrQuestOpt([])
          setCurrQuestType('multiple')
          setCurrLetter('a')
          setCurrQuestOpt([{title: 'a'}])
          setOptionParams(defaultOptParams)
          setFeedback(defaultFeedback)
          setQuestTypeNumber(2)
        } else { 
          // Second time and so on
          setCurrLetter(nextChar(currLetter))
          setCurrQuestOpt([].concat(currQuestOpt, [{title: currLetter}]))
          setOptionParams([].concat(optionParams, [{[`${nextChar(currLetter)}`]: {label: nextChar(currLetter)}}]))
        }
        setShowAnswerFeedback(true)
        setShowAddAnswerBtn(true)
      break
      case 'number':
        if (currQuestType !== 'number') {
          // First time
          setCurrQuestOpt([])
          setCurrQuestType('number')
          setCurrLetter('a')
          setCurrQuestOpt([{title: 'a'}])
          setOptionParams(defaultOptParams)
          setFeedback(defaultFeedback)
          setQuestTypeNumber(3)
        } else {
          // Second time and so on
          setCurrLetter(nextChar(currLetter))
          setCurrQuestOpt([].concat(currQuestOpt, [{title: currLetter}]))
          setOptionParams([].concat(optionParams, [{[`${nextChar(currLetter)}`]: {label: nextChar(currLetter)}}]))
        }
        setShowAnswerFeedback(true)
        setShowAddAnswerBtn(false)
      break
    }
  }

  const handleAddAnswer = () => {
    setCurrLetter(nextChar(currLetter))
    setCurrQuestOpt([].concat(currQuestOpt, [{title: nextChar(currLetter)}]))
    setOptionParams([].concat(optionParams, [{[`${nextChar(currLetter)}`]: {label: nextChar(currLetter)}}]))
  }

  const handleSaveQuestion = async () => {
    setSpinner(true)
    setSubmit(true)

    let tempOptions = []
    let tempData = []
    let url = ''
    // Extract value of optionParams
    optionParams.forEach(item => {
      let tempVal = Object.values(item)
      if (tempVal) {
        tempOptions = tempOptions.concat(tempVal)
      }
    })

    console.log('ISI FINAL OPTION')
    console.log(tempOptions)

    if (kpiHelper.getQuestionType() === 'add') {

      tempData = {
        company_id: kpiHelper.getGlobalStore().loginInfo? kpiHelper.getGlobalStore().loginInfo.user.company_id : '',
        question_category_id: questionCatgId,
        name: questionName,
        question: questionDesc,
        type: currQuestType,
        status: null,
        detail: {
          option: tempOptions,
          feedback: feedback
        }
      }
      url = ADD_QUESTION
    } else {
      url = UPDATE_QUESTION
    }

    const resp = await kpiFetch('POST', url, tempData)
    if (resp.status) {
      $('#saveQuestionSuccess').modal('show')
    } else {
      setToast(true)
      setErrorMsg(resp.message)
    }

    setSpinner(false)
    setSubmit(false)
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
                            onChange={(e) => {handleQuestionName(e)}}
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
                              value={questionCatgId}
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
                              disabled={isSubmit}
                            >
                              + Add New Category
                            </button>

                        </div>
                      </div>

                      <p htmlFor="leraningPathname" className="">
                        <b>Question Description : </b>
                      </p>
                      <textarea
                        className="form-control mb-4"
                        rows="7"
                        onChange={(e) => {handleQuestionDesc(e)}}
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
                                onClick={() => handleQuestionType("multiple")}
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
                          return <QuestionOptions 
                            key={index} 
                            type={currQuestType} 
                            ansLabel={item}
                            optParams={optionParams}
                            setOptParams={setOptionParams}
                          />
                        })
                      }

                      {showAnswerFeedback && 
                        <AnswerFeedback 
                          feedback={feedback}
                          setFeedback={setFeedback}
                        />
                      }

                    {
                      // ********************************* //
                    }

                    {showAddAnswerBtn &&
                      <button
                        id="btnAddAnswer"
                        onClick={handleAddAnswer}
                        className="btn btn-primary float-right"
                      >
                      + Add Answer
                    </button>
                    }

                    </div>
                  </div>
                  { showSpinner ?
                        <Spinner 
                          animation="border" 
                          variant="primary" 
                          style={{position:'absolute', top: '50%', left: '45%', zIndex:'9999'}}
                        />
                        : ''
                      }
                  <div className="mt-5">
                    <button
                      id="btnOptionMulti"
                      onClick={handleSaveQuestion}
                      className="btn btn-primary mt-3 width-10 ml-2 float-right"
                      disabled={isSubmit}
                    >
                      Save
                    </button>
                    <button
                      id="btnOptionMulti"
                      data-toggle="modal"
                      data-target="#publishAddQuestion"
                      className="btn btn-success mt-3 width-10 float-right"
                      disabled={isSubmit}
                    >
                      Publish
                    </button>
                    <button
                      id="btnOptionMulti"
                      onClick={() => {
                        $('#cancelAddQuestion').modal('show')
                      }}
                      className="btn btn-danger mt-3 width-10 float-left"
                      disabled={isSubmit}
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
        
      <div
        className="modal fade"
        id="saveQuestionSuccess"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog text-dark" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title width-100">Warning!</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-3">
              <div className="row align-center p-3">
                <div className="col-12 text-center">
                  <p>
                    <i className="fa fa-check-circle text-success icon-width-50"></i>
                  </p>
                  <p>Successfully save this Question</p>
                </div>
              </div>
              <br />

              <div className="row mb-5">
                <div className="col-12 text-center">
                  <button
                    type="button"
                    data-dismiss="modal"
                    className="btn width-30 btn-sm btn-primary"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        
      <div
        className="modal fade"
        id="publishAddQuestion"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog text-dark" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title width-100">Warning!</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-3">
              <div className="row align-center p-3">
                <div className="col-12 text-center">
                  <p>
                    <i className="fa fa-exclamation-triangle text-warning icon-width-50"></i>
                  </p>
                  <p>Are you sure want to publish this question ? </p>
                </div>
              </div>
              <br />

              <div className="row mb-5">
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-sm btn-danger width-90 float-right"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#publishQuestionSuccess"
                    className="btn width-90 btn-sm btn-primary"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="publishQuestionSuccess"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog text-dark" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title width-100">Warning!</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-3">
              <div className="row align-center p-3">
                <div className="col-12 text-center">
                  <p>
                    <i className="fa fa-check-circle text-success icon-width-50"></i>
                  </p>
                  <p>Successfully publish this Question</p>
                </div>
              </div>
              <br />

              <div className="row mb-5">
                <div className="col-12 text-center">
                  <button
                    type="button"
                    data-dismiss="modal"
                    className="btn width-30 btn-sm btn-primary"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toast 
            style={{
                position: 'absolute',
                top: 17,
                right: 17,
                zIndex: 9999
            }}
            onClose={() => setToast(false)}
            show={showToast}
            delay={3000}
            autohide
            >
              <Toast.Header>
                <strong className="mr-auto" style={{color: 'red'}}>Create Question Error</strong>
              </Toast.Header>
              <Toast.Body> <span style={{color: 'black'}}>{errorMsg}</span></Toast.Body>
          </Toast>
    
      <AddNewCategory
        questCategory={props.questCategory}
        setQuestCategory={props.setQuestCategory}
      />

      <CancelAddQuestion />
    </>
  );
}

export default TableQuestionManagement;
