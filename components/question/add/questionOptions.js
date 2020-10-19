import { useState, useEffect } from "react"

export default function questionOptions(props) {
    let label = ''
    const [isCorrect, setIsCorrect] = useState(false)
    const [ansDesc, setAnsDesc] = useState('')
    const [feedback, setFeedback] = useState('')
    const [numberText, setNumberText] = useState('')
    const [feedbackStatus, setFeedbackStatus] = useState(false)

    const handleChangeAnsDes = (e) => {
        setAnsDesc(e.target.value)
        setOptParams(e.target.value, isCorrect, feedback, feedbackStatus)
    }

    const handleCheckBox = () => {
        let temp = isCorrect
        if (isCorrect) {
            setIsCorrect(false)
            temp = false
        } else {
            setIsCorrect(true)
            temp = true
        }
        setOptParams(ansDesc, temp, feedback, feedbackStatus)
    }

    const handleChangeFeedback = (e) => {
        setFeedback(e.target.value)
        setOptParams(ansDesc, isCorrect, e.target.value, feedbackStatus )
    }

    const handleNumberInput = (e) => {
        setNumberText(e.target.value)
        setOptParams(null, e.target.value, null, null )
    }

    const handleChangeFeedbackStatus = () => {
        let temp = feedbackStatus
        if (feedbackStatus) {
            setFeedbackStatus(false)
            temp = false
        } else {
            setFeedbackStatus(true)
            temp = true
        }
        setOptParams(ansDesc, isCorrect, feedback, temp)
    }

    function setOptParams(ans, corr, feed, feedStatus) {
        label = props.ansLabel?.title
        let temp = props.optParams.map((item, index) => {
            return Object.keys(item)[0] !== props.ansLabel.title ? item :
            {
                [`${label}`]: {
                    label: props.ansLabel.title,
                    answer: ans,
                    correct: corr,
                    feedback: {
                        status: feedStatus,
                        content: feed
                    }
                }
            }
        })
        props.setOptParams(temp)
    }

    return (
        <>
            {props.type === 'number' &&
                <div
                    className="p-3 mt-4"
                    style={{
                    border: "solid thin #2424"
                    }}
                >
                    <table width="100%">
                        <tbody>
                            <tr className="valign-top">
                                <td width="12%">Correct Answer : </td>
                                <td>
                                    <input type="text" className="form-control width-10" onChange={(e) => {handleNumberInput(e)}}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }

            {props.type !== 'number' &&
                <div id="id-option" className="card singleQuestion text-dark card-primary mt-4 card-outline">
                    <div className="card-body table-responsive p-3">
                        <div className="row">
                            <div className="col-1"> Answer {props.ansLabel?.title?.toUpperCase()}</div>
                            <div className="col-11">
                                <input type="checkbox" className="mr-2 p-2" defaultChecked={isCorrect} onClick={handleCheckBox}/>
                                    Correct Answer ?
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                Answer Description <br />
                                <textarea  className="form-control mb-4 mt-2" rows="7" onChange={(e)=> {handleChangeAnsDes(e)}}></textarea>
                            </div>
                        </div>
                        {props.type === 'single' &&
                            <div className="row ml-2 mt-3 mb-4">
                                <div className="col-lg-2 col-md-4 col-s-12">
                                    <input type="checkbox" defaultChecked={feedbackStatus} onClick={handleChangeFeedbackStatus}/>&nbsp;Feedback : 
                                </div>
                                <div className="col-lg-6 col-md-8 col-s-12">
                                    <input type="text" className="form-control pr-1" onChange={(e)=> {handleChangeFeedback(e)}}/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}