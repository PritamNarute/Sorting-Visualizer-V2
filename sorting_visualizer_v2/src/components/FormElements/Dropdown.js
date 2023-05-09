import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Dropdown.css";


const Dropdown = ({options, onChange, value, isAlgo}) => {
    const [isOpen, setIsOpen] =useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler, true);
        }
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }

    const renderedOptions = options.map((option, index) => {
        if(value) {
            if(option.value === value.value) {
                return null;
            }
        }
        return (
            <div 
                key={index}
                className="dropdown-option"
                onClick={() => handleOptionClick(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={divEl} className="dropdown-menu">
            <div 
                className={`${isAlgo ? "disabled" : ""} dropdown-panel ${isOpen ? "remove-border-radius" : ""}`}
                onClick={handleClick}
            >
                <div className="panel-content">
                    {value ? value.label : "Select Alogorithm"}
                    <i className={`fa-solid fa-angle-down ${isOpen ? "rotate-icon" : "no-rotate"}`}></i>
                </div>
            </div>
            {/* {isOpen && <div className="dropdown-options">
                {renderedOptions}
            </div>} */}

            <CSSTransition
                in={isOpen}
                mountOnEnter
                unmountOnExit
                classNames="dropdown"
                timeout={300}
            >
                <div className="dropdown-options">
                    {renderedOptions}
                </div>
            </CSSTransition>
        </div>
    )
}

export default Dropdown;