import { useState, useEffect } from "react"
export default function answerFeedback(props) {

    const [correctStatus, setCorrectStatus] = useState(false)
    const [correctContent, setCorrectContent] = useState('')
    const [wrongStatus, setWrongStatus] = useState(false)
    const [wrongContent, setWrongContent] = useState('')

    const handleCorrectStatus = () => {
        let temp = correctStatus
        if (correctStatus) {
            setCorrectStatus(false)
            temp = false
        } else {
            setCorrectStatus(true)
            temp = true
        }
        setFeedback(temp, correctContent, wrongStatus, wrongContent)
    }

    const handleWrongStatus = () => {
        let temp = wrongStatus
        if (wrongStatus) {
            setWrongStatus(false)
            temp = false
        } else {
            setWrongStatus(true)
            temp = true
        }
        setFeedback(correctStatus, correctContent, temp, wrongContent)
    }

    const handleChangeCorrectContent = (e) => {
        setCorrectContent(e.target.value)
        setFeedback(correctStatus, e.target.value, wrongStatus, wrongContent)
    }

    const handleChangeWrongContent = (e) => {
        setWrongContent(e.target.value)
        setFeedback(correctStatus, correctContent, wrongStatus, e.target.value)
    }

    function setFeedback(crrStat, crrCnt, wrgStat, wrgCnt) {
        props.setFeedback({
            correct: {
                status: crrStat,
                content: crrCnt
              }, 
              wrong: {
                status: wrgStat,
                content: wrgCnt
              }
        })
    }

    return (
        <>
            <div
                id="multiFeedBack"
                style={{
                    border: "solid thin #2424"
                }}
                className="my-4"
                >
                    <div className="row mx-2 my-4">
                        <div className="col-lg-2 col-md-4 col-s-12">
                            <input type="checkbox" defaultChecked={correctStatus} onClick={handleCorrectStatus}/>&nbsp;
                            Correct Feedback :
                        </div>
                        <div className="col-lg-6 col-md-8 col-s-12">
                            <input type="text" className="form-control" onChange={(e)=> {handleChangeCorrectContent(e)}}/>
                        </div>
                    </div>
                    <div className="row mx-2 my-4">
                        <div className="col-lg-2 col-md-4 col-s-12">
                            <input type="checkbox" defaultChecked={wrongStatus} onClick={handleWrongStatus}/>&nbsp;
                            Wrong Feedback :
                        </div>
                        <div className="col-lg-6 col-md-8 col-s-12">
                            <input type="text" className="form-control" onChange={(e)=> {handleChangeWrongContent(e)}}/>
                        </div>
                    </div>
            </div>
        </>
    )
}