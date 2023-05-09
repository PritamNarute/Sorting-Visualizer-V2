import { useState } from "react";
import Input from "../FormElements/Input";
import { useForm } from "../hooks/form-hook"
import { VALIDATOR_MAX, VALIDATOR_MIN } from "../util/validators";
import Button from "../FormElements/Button";


const NewRandomArrayModal = ( props ) => {
    const [showError, setShowError] = useState(false);
    const [formState, inputHandler] = useForm(
        {
            number: {
                value: props.oldData ? props.oldData.inputs.number.value : '',
                isValid: props.oldData ? props.oldData.inputs.number.isValid : false,
            },
            min: {
                value: props.oldData ? props.oldData.inputs.min.value : '',
                isValid: props.oldData ? props.oldData.inputs.min.isValid : false,
            },
            max: {
                value: props.oldData ? props.oldData.inputs.max.value : '',
                isValid: props.oldData ? props.oldData.inputs.max.isValid : '',
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
    return (
        <form onSubmit={onFormSubmit} className="form">
            <Input
                required = {true}
                show={showError}
                id="number"
                element="input"
                type="number"
                label="Array Length"
                placeholder=""
                validators={[VALIDATOR_MIN(1), VALIDATOR_MAX(50)]}
                onInput={inputHandler}
                errorText = "Array length should be between 1 to 50"
                initialValue={formState.inputs.number.value}
                initialValid= {formState.inputs.number.isValid}
            />
            <Input
                required = {true}
                show={showError}
                id="min"
                element="input"
                type="number"
                label="Minimum Number in array"
                placeholder=""
                validators={[VALIDATOR_MIN(1), VALIDATOR_MAX(1000)]}
                onInput={inputHandler}
                errorText = "Range should be between 1 to 1000"
                initialValue={formState.inputs.min.value}
                initialValid= {formState.inputs.min.isValid}
            />
            <Input
                required = {true}
                show={showError}
                id="max"
                element="input"
                type="number"
                label="Maximum number in array"
                placeholder=""
                validators={[VALIDATOR_MIN(1), VALIDATOR_MAX(1000)]}
                onInput={inputHandler}
                errorText = "Range should be between 1 to 1000"
                initialValue={formState.inputs.max.value}
                initialValid= {formState.inputs.max.isValid}
            />
            <div className="buttons">
                <Button 
                    onClick={onCancel}
                > 
                    Cancel 
                </Button>
                <Button 
                    type="submit" 
                    solid = {true}
                    onClick = {onFormSubmit}
                > 
                    Done 
                </Button>
            </div>
        </form>
    );
}

export default NewRandomArrayModal;
