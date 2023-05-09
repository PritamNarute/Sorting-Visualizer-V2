import { useReducer } from "react";
import { getAlgorithms } from "../algorithms/getAlgorithms";

const arrayReducer = (state, action) => {
    switch(action.type) {
        case 'FORWARD' :
            return {
                ...state,
                counter: state.counter+1,
                array: state.algoVisualisation[state.counter+1].visualise
            }
        case 'BACKWARD' : 
            return {
                ...state,
                counter: state.counter-1,
                array: state.algoVisualisation[state.counter-1].visualise
            }
        case 'SET_VISUALISE' :
            return {
                ...state,
                counter: -1,
                algoVisualisation: action.algoVisualisation
            }
        case 'SET_ARR' : 
            return {
                ...state,
                counter: -1,
                algoVisualisation: null,
                array: action.array
            }
        case 'END' : 
            const length = state.algoVisualisation.length-1;
            return {
                ...state,
                counter: length,
                array: state.algoVisualisation[length].visualise
            }
        case 'RESET' : 
            const tempArray = [...state.algoVisualisation[0].visualise];

            for(var i =0; i<tempArray.length; i++) {
                tempArray[i] = {...tempArray[i], color:"gray"};
            }
            return {
                ...state,
                counter: -1,
                array: tempArray,
                algoVisualisation: null
            }
        
        default :
            return state;
    }
}

export const useArray = (algoVisualisation, counter, array) => {
    const [arrayState, dispatch] = useReducer(arrayReducer, {
        algoVisualisation,
        counter,
        array
    });

    const onForward = () => {
        dispatch({
            type:'FORWARD'
        });
    }

    const onBackward = () => {
        dispatch({
            type: 'BACKWARD'
        })
    }

    const onEnd = () => {
        dispatch({
            type: 'END'
        })
    }

    const onReset = () => {
        dispatch({
            type: 'RESET'
        });
    }

    const onSortStart = (array, selectedAlgorithm) => {
        const dummyArray =  JSON.parse(JSON.stringify(array));
        dispatch({
            type: 'SET_VISUALISE',
            algoVisualisation: getAlgorithms(dummyArray, selectedAlgorithm.value)
        });
    }

    const onNewArray = (array) => {
        dispatch({
            type: 'SET_ARR',
            array: array
        })
    }

    return [arrayState, onForward, onBackward, onEnd, onReset, onNewArray, onSortStart];
}