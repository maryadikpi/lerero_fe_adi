import {useState, useEffect} from 'react'
import Header from "components/admin/header";
import Navbar from "components/admin/navbar";
import Sidebar from "components/admin/sidebar";

import TableQuizManagement from "components/quiz/management/table_QuizManagement";
import ModalQuizManagement from "components/quiz/management/modal_QuizManagement";

import {kpiFetch} from 'kpi_helper'
import {GET_ALL_QUIZZ} from 'config/const_api_url'

function QuizManagement(props) {
  const [quizList, setQuizList] = useState([])

  // set api
  async function initialFetch() {
    const quizList = await kpiFetch('GET', GET_ALL_QUIZZ)
    console.log(quizList);
    if (quizList.status) {
      setQuizList(quizList)
    }
  }
  // call api to get data
  useEffect(
    () => {
      if (!props.quizList) {
        initialFetch()
      } else {
        setQuizList(props.quizList)
      }
    }, []
  )
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
                  <h1 className="m-0 text-dark">Quiz Management</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Quiz</a>
                    </li>
                    <li className="breadcrumb-item active">Management</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <TableQuizManagement 
                quizList={quizList} 
              />
              <ModalQuizManagement />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
  };

export default QuizManagement;
