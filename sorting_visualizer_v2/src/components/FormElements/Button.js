

import "./Button.css";

const Button = (props) => {
    return (
        <div className="button-container">
            <button 
                className={
                    `
                        button 
                        ${props.className}
                        ${props.solid ? "solid" : "hollow"}
                        ${props.circle ? "circle" : "rectangle"}
                    `
                }
                type={props.type}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.children}
            </button>
            {
                props.buttonText && 
                <p className="button-text">
                    {props.buttonText}
                </p>
            }
        </div>
    )
};

export default Button;