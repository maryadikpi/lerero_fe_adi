import {Spinner} from "react-bootstrap"
export default function kpiSpinner() {
    return (
        <>
            <style>
              {`
                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background: rgba(0,0,0,.7);
                }
                
                .overlay__wrapper {
                    width: 100%;
                    height: 100%;
                    position: relative;
                }
                
                .overlay__spinner {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            `}
            </style>
            <div className="overlay">
                <div className="overlay__wrapper">
                    <div className="overlay__spinner">
                        <Spinner 
                          animation="border"
                          variant="primary"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}