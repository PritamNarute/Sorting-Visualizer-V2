import { useState } from "react";
import Input from "../FormElements/Input";
import { useForm } from "../hooks/form-hook"
import { VALIDATOR_ARRAY } from "../util/validators";
import Button from "../FormElements/Button";


const NewCustomArrayModal = ( props ) => {
    const [showError, setShowError] = useState(false);
    const [formState, inputHandler] = useForm(
        {
            array: {
                value:  props.oldData ? props.oldData.inputs.array.value : '',
                isValid: props.oldData ? props.oldData.inputs.array.isValid :  false
            }
        },
        false
    );

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!formState.isValid) {
            setShowError(true);
            return;
        }
        props.onFormSubmit(formState);
    }

    const onCancel = (event) => {
        event.preventDefault();
        props.onCancelClick();
    }

    const error = (
        <ul style={{listStyle: "none"}}>
            <li>Array length should be between 1 to 50</li>
            <li>Array should not contain any negative element or zero</li>
            <li>Dont include any brackets to the array</li>
            <li>Array elements should be in rannge of 1 to 1000</li>
        </ul>
    )
    return (
        <form onSubmit={onFormSubmit} className="form">
            <Input
                required = {true}
                show={showError}
                id="array"
                type="text"
                label="Space Saperated Array Elements"
                placeholder="e.g=>  1 2 3 5 4 5"
                validators={[VALIDATOR_ARRAY(50)]}
                onInput={inputHandler}
                errorText = {error}
                initialValue={formState.inputs.array.value}
                initialValid={formState.inputs.array.isValid}
                rows={5}
            />
            <div className="buttons">
                <Button 
                    onClick={onCancel}

                > 
                    Cancel 
                </Button>
                <Button 
                    type="submit" 
                    onClick={onFormSubmit}
                    solid = {true}
                > 
                    Done 
                </Button>
            </div>
        </form>
    );
}

export default NewCustomArrayModal;
