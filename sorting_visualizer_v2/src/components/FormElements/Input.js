
import { useEffect, useReducer } from "react";
import { validate } from "../util/validators";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isValid: props.initialValid || false
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators
    });
  };

  const element =
    props.element === "input" ? (
      <input
        required={props.required ? true : false}
        onKeyDown={handleKeyDown}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
      required={props.required ? true : false}
        onKeyDown={handleKeyDown}
        placeholder={props.placeholder}
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputState.value}
      />
    );
  return (
    <div className={`form-control ${!inputState.isValid && props.show && "form-control--invalid"}`}>
      <label htmlFor={props.id}> {props.label} </label>
      {element}
      {!inputState.isValid && props.show && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
