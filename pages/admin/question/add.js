import {useState, useEffect} from 'react'

import Header from "components/admin/header";
import Navbar from "components/admin/navbar";
import Sidebar from "components/admin/sidebar";

import TableQuestionManagement from "components/question/add/table_QuestionManagement";
import ModalQuestionManagement from "components/question/add/modal_QuestionManagement";

import {kpiFetch} from 'kpi_helper'
import {GET_QUESTION_CATEGORY} from 'config/const_api_url'

const QuestionManagement = () => {

  const [questionCategory, setQuestionCategory] = useState([])
  const initialFetch = async () => {
    const catlist = await kpiFetch('GET', GET_QUESTION_CATEGORY)
      if (catlist.status) {
        setQuestionCategory(catlist.data.data)
      }
  }

  useEffect(() => {
    if(questionCategory && questionCategory.length < 1) {
      initialFetch()
    }
  })

  return (
  <>
    <Header />
    <Navbar />
    <section className="hold-transition sidebar-mini">
      <div className="wrapper bg-dark">
        <Sidebar />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Add New Question</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Question</a>
                    </li>
                    <li className="breadcrumb-item active">Management</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <TableQuestionManagement 
                questCategory={questionCategory}
                setQuestCategory={setQuestionCategory}
              />
              <ModalQuestionManagement />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)}

export default QuestionManagement;
