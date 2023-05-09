import React, { useState } from "react"
import Button from "../FormElements/Button";
import "./NewArrayModal.css";

const NewArrayModal = ( props ) => {
    const [selected, setSelected] = useState(null);

    return (
        <React.Fragment>
            <div className="new-array-modal">
                <div 
                    onClick={() => setSelected("random")} 
                    className={`option ${selected && selected === "random" ? "selected" : ""}`}
                >
                    <h3> Create Random Array </h3>
                    <p> Creates a new Array of Random elements based on the values specified </p>
                </div>
                <div 
                    onClick={() => setSelected("custom")} 
                    className={`option ${selected && selected === "custom" ? "selected" : ""}`}
                >
                    <h3> Create Custom Array </h3>
                    <p> You can Specify how many and which elements array can have</p>
                </div>
            </div>
            <div className="buttons">
                <Button onClick={props.onCancelClick}
                > Cancel </Button>
                <Button 
                    onClick={() => props.onSubmit(selected)}
                    disabled = {!selected ? true : false}
                    solid = {true}
                > Next </Button>
            </div>
            

        </React.Fragment>
    )
}

export default NewArrayModal;