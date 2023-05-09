import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from 'react-transition-group';
import "./BackDrop.css";

const BackDropOverlay = (props) => {
    const content = (
        <div 
                className="backdrop"
                onClick={props.onClick}
            >     
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('backdrop-hook'));
};

const BackDrop = (props) => {
    return (
        <CSSTransition 
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={300}
        classNames="backdrop"
    >
        <BackDropOverlay {...props}> </BackDropOverlay>
    </CSSTransition>
    )
    
}

export default BackDrop;