import Link from "next/link"
import {useState, useEffect} from 'react'

import KpiSpinner from 'components/kpi_components/kpiSpinner'
import KpiToast from 'components/kpi_components/KpiToast'
import RowQuestion from './rowQuestions'
import DuplicateModal from '../modal/modalDuplicateQuestion'


import kpiHelper, {kpiFetch} from 'kpi_helper'
import {ADMIN_ADD_NEW_QUESTION} from 'config/const_url'


function  TableQuestionManagement(props) {
  
  const [showKpiSpinner, setKpiSpinner] = useState(false)
  const [questionData, setQuestionData] = useState({})

  const [showToast, setToast] = useState(false)
  const [toastTitleColor, setToastTitleColor] = useState('black')
  const [toastTitle, setToastTitle] = useState('')
  const [toastMessage, setToastMessage] = useState('')

  const handleImportCsv = () => {
    $('#importQuestionCsv').modal('show')
  }

  const handleAddQuestion = () => {
    kpiHelper.setQuestionType('add')
  }

return (
  <>
    <div className="row mb-10">
      <div className="col-12">
        <div className="card text-dark card-primary card-outline">
          <div className="card-header border-0">
            <h3 className="card-title">List of Question</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-primary btn-sm mr-2"
                onClick={handleImportCsv}
              >
                <i className="fas fa-shield-alt"></i> Import CSV
              </button>
              <Link as={ADMIN_ADD_NEW_QUESTION} href={ADMIN_ADD_NEW_QUESTION}>
                <button type="button" className="btn btn-primary btn-sm" onClick={handleAddQuestion}>
                  <i className="fas fa-shield-alt"></i> Add New Question
                </button>
              </Link>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            {showKpiSpinner && <KpiSpinner />}
            <table className="table text-center table-striped table-valign-middle">
              <thead>
                <tr>
                  <th width="2%">Id</th>
                  <th>Question Title</th>
                  <th>Category</th>
                  <th>Question Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {props.questionList && props.questionList.length > 0 && 
                  props.questionList.map((item, index) => {
                    return <RowQuestion 
                      key={index} 
                      data={item} 
                      setQuestData={setQuestionData}
                      setKpiSpinner={setKpiSpinner}
                      setShowToast={setToast}
                      setToastColor={setToastTitleColor}
                      setToastTitle={setToastTitle}
                      setToastMessage={setToastMessage}
                    />
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <KpiToast 
      showToast={showToast} 
      setShowToast={setToast}
      color={toastTitleColor}
      title={toastTitle}
      message={toastMessage}
    />
    <DuplicateModal 
      questData={questionData} 
      questList={props.questionList}
      setQuestList={props.setQuestionList}
    />

  </>
)

}

export default TableQuestionManagement;
