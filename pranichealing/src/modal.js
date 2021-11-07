import { useState } from "react";

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
    if (modal) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }
    return (
        <div className="modal-container">
            <button className="btn-modal" onClick={toggleModal}>
                Next session 1
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Next Sunday Session 1</h2>
                        <p>
                            This is the information for the next sesion on
                            Sunday
                        </p>
                        <button className="close-modal" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
            <button className="btn-modal" onClick={toggleModal}>
                Next session 2
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Next Sunday Session</h2>
                        <p>
                            This is the information for the next sesion on
                            Sunday
                        </p>
                        <button className="close-modal" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
            <button className="btn-modal" onClick={toggleModal}>
                Next session 3
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Next Sunday Session</h2>
                        <p>
                            This is the information for the next sesion on
                            Sunday
                        </p>
                        <button className="close-modal" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
