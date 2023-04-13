

//icon
import { BsXLg } from "react-icons/bs"
//sass
import "./modal.scss"

export default function Modal({ content, header,size,show,hide }) {

    if (show) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <>
        {/* check is the model shown or not from the moday view state */}
            {show && ( 
                <div className="modal-wrapper">
                    <div onClick={() => {
                        hide(false)
                    }} className="overlay"></div>
                    <div className={`modal-content-wrapper ${size}`}>
                        <div className="modal-header">
                            <h4>{header}</h4>
                            <button className="close-modal" onClick={() => {
                                hide(false)
                            }}
                            >
                                <BsXLg  />
                            </button>
                        </div>
                        <div className="modal-content">
                            {content}
                        </div>
                    </div>

                </div>
            )}
         
        </>
    );
}