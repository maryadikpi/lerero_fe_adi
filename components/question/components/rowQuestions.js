import Router from 'next/router'
import {useState, useEffect} from 'react'


import kpiHelper, {kpiFetch} from 'kpi_helper'
import {GET_QUESTION_DETAILS} from 'config/const_api_url'
import {ADMIN_EDIT_NEW_QUESTION} from "config/const_url"

export default function rowQuestion(props) {

    function displayStatusText(status) {
        return status ? 'Active' : 'Inactive'
    }

    function displayButtonText(status) {
        return status ? 'Deactivate' : 'Publish'
    }

    const handleDuplicate = () => {
        props.setQuestData({id: props.data.id})
        $("#duplicateQuestion").modal('show')
    }

    const handleEdit = async () => {
        props.setKpiSpinner(true)
        const resp = await kpiFetch('GET', GET_QUESTION_DETAILS+props.data.id)
        if (resp.status) {
            props.setKpiSpinner(false)
            kpiHelper.setQuestionType('edit')
            kpiHelper.setQuestionInfo(resp.data)
            Router.push(ADMIN_EDIT_NEW_QUESTION)
        } else {
            props.setKpiSpinner(false)
            props.setToastColor('red')
            props.setToastTitle('Edit Error')
            props.setShowToast(true)
            props.setToastMessage(resp.message)
        }
    }

    return (
        <>
            <tr>
                <td>{props.data.id}</td>
                <td>{props.data.name}</td>
                <td>{props.data.category_name}</td>
                <td>{props.data.type}</td>
                <td>{displayStatusText(props.data.status)}</td>
                <td>
                    <center>
                        <button
                            type="button"
                            onClick={handleDuplicate}
                            className="btn btn-success width-80px btn-sm m-1"
                        >
                            Duplicate
                        </button>
                        <button
                            type="button"
                            onClick={handleEdit}
                            className="btn btn-primary width-80px btn-sm m-1"
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            data-toggle="modal"
                            data-target="#deactiveQuestion"
                            className="btn btn-warning width-100px btn-sm m-1"
                        >
                            {displayButtonText(props.data.status)}
                        </button>
                        <button
                            type="button"
                            data-toggle="modal"
                            data-target="#deleteQuestion"
                            className="btn btn-danger width-80px btn-sm m-1"
                        >
                            Delete
                        </button>
                    </center>
                </td>
            </tr>
        </>
    )
}