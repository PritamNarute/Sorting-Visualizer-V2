import React, { useState } from 'react';
import Button from "../FormElements/Button";
import "./Header.css";
import Modal from '../UIElements/Modal';
import NewArrayModal from '../forms/NewArrayModal';
import DropdownPage from '../FormElements/DropdonwPage';
import NewRandomArrayModal from '../forms/NewRnadomArrayModal';
import NewCustomArrayModal from '../forms/NewCustomArrayModal';
import { newCustomArray, newRandomArray } from '../util/ArrayGenerator';


const Header = (props) => {
    const [newModal, setNewModal] = useState(false);
    const [newRandom, setNewRnadom] = useState(false);
    const [newCustom, setNewCustom] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    const [randomData, setRandomData] = useState(null);
    const [customData, setCustomData] = useState(null);

    const onNewArrayClicked = () => {
        if(props.play) {
            props.onPlay();
        }
        setNewModal(true)
    }

    const handleSelect = (option) => {
        props.onSelect(option);
    };

    const onSort = () => {
        props.onSort();
    }

    const onTypeSelect = (selected) => {
        if(selected === "random") {
            setNewRnadom(true);
        }
        else {
            setNewCustom(true);
        }
        setSelectedType(selected);
        setNewModal(false); 
    }

    const onSubmit = (state) => {
        if(selectedType === "random" ) {
            setRandomData(state);
            props.onNewArray(
                newRandomArray(
                    parseInt(state.inputs.min.value), parseInt(state.inputs.max.value), parseInt(state.inputs.number.value)
                )
            )
        }
        else {
            setCustomData(state);
            props.onNewArray(
                newCustomArray(state.inputs.array.value)
            )
        }
        onClose();
    }
    
    const onClose = () => {
        setNewModal(false);
        setNewRnadom(false);
        setNewCustom(false);
    }


    return (
        <React.Fragment>
            <Modal 
                show={newModal}
                header="Select Array Type"
                class="modal_top"
            >
                <NewArrayModal 
                    onSubmit={onTypeSelect}
                    onCancelClick = {onClose}
                ></NewArrayModal>
            </Modal>

            <Modal 
                show= {newRandom}
                header= "Create Random Array"
                class="modal_right"
            >
                <NewRandomArrayModal 
                    oldData = {randomData}
                    onCancelClick={onClose} 
                    onFormSubmit = {onSubmit}
                ></NewRandomArrayModal>
            </Modal>

            <Modal 
                show= {newCustom}
                header= "Create Custom Array"
                class="modal_right"
            >
                <NewCustomArrayModal 
                    oldData = {customData}
                    onCancelClick={onClose} 
                    onFormSubmit = {onSubmit}
                ></NewCustomArrayModal>
            </Modal>
            <div className='header-container'>
            <div className='header'>
                <div className="logo">
                    <i className="fa-solid fa-bars"></i>
                    <h1> Sorting visualizer </h1>
                </div>
                <div className="actions">
                    <Button
                        onClick={onNewArrayClicked}
                        solid = {true}
                    > 
                        <i class="fa-solid fa-plus"></i>
                        New Array 
                    </Button>
                    <DropdownPage isAlgo={props.isAlgo} onOptionSelect={handleSelect}></DropdownPage>
                    <Button 
                        onClick={onSort}
                        solid = {true}
                        disabled={!props.selected ? true : false}
                    > 
                        {!props.isAlgo && 
                            <React.Fragment>
                                <i class="fa-solid fa-sort"></i> 
                                Sort 
                            </React.Fragment>
                        }
                        {props.isAlgo && !props.reset &&
                            <React.Fragment>
                                <i className="fa-solid fa-xmark"></i> 
                                End 
                            </React.Fragment>
                        }
                        {props.reset && 
                            <React.Fragment>
                                <i class="fa-solid fa-code-compare"></i>
                                Reset
                            </React.Fragment>
                        }
                    </Button>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Header;