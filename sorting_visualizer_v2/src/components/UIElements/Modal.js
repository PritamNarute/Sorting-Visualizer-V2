import React from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";
import  { CSSTransition } from 'react-transition-group';
import "./Modal.css";


const ModaOverlay = (props) => {
    const content = (
            <div className="modal">
                <header className="modal-header">
                    <h2> {props.header} </h2>
                </header>
                <form 
                    onSubmit={ props.onSubmit ? props.onSubmit : event => event.preventDefault()}
                >
                    <div className="modal-content">
                        {props.children}
                    </div>    
                    {props.footer && <footer className="modal-footer">
                        {props.footer}
                    </footer> }
                </form>    
            </div>
    );
    return ReactDOM.createPortal (content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
    return (
        <React.Fragment>
            <BackDrop show={props.show}></BackDrop>
            <CSSTransition 
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={300}
                classNames={props.class}
            >
                <ModaOverlay {...props}></ModaOverlay>
            </CSSTransition>    
        </React.Fragment>
    )
}

export default Modal;