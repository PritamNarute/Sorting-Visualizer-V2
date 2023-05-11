import  { useEffect, useRef } from 'react';
import { CSSTransition } from "react-transition-group";
import BubbleSortCode from '../algorithmsCode/BubbleSortCode';
import InsertionSortCode from '../algorithmsCode/InsertionSortCode';
import MergeSortCode from '../algorithmsCode/MergeSortCode';
import QuickSortCode from '../algorithmsCode/QuickSortCode';
import SelectionSortCode from '../algorithmsCode/SelectionSortCode';
import HeapSortCode from '../algorithmsCode/HeapSortCode';
import RadixSortCode from '../algorithmsCode/RadixSortCode';
import CountingSortCode from '../algorithmsCode/CountingSortCode';
const Code = ({codeOpen, width, height, selectedAlgorithm, line}) => {
    const Reference = useRef();
    console.log(parseInt(line));
    useEffect (() => {
        if(codeOpen && line !== -1 && line !== "-1") {
            console.log("use Effect" + line);
            Reference.current.children[parseInt(line)].scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
        }
    });
    let codeLines;
    switch(selectedAlgorithm.value) {
        case "bubble" : 
            codeLines = BubbleSortCode(line);
            break;
        case "insertion" :
            codeLines = InsertionSortCode(line);
            break;
        case "merge" :
            codeLines = MergeSortCode(line);
            break;
        case "quick" :
            codeLines = QuickSortCode(line);
            break;
        case "selection":
            codeLines = SelectionSortCode(line);
            break;
        case "heap" : 
            codeLines = HeapSortCode(line);
            break;
        case "radix" :
            codeLines = RadixSortCode(line);
            break;
        case "counting" :
            codeLines = CountingSortCode(line);
            break;
        default :
            codeLines=[];
    }

    console.log(selectedAlgorithm);

    const content = (
        <div className="showcode" style = {{width: `${40/100*width}px`, height: `${height-155-100}px`}} ref={Reference}>
                {codeLines}
                <style>
                {`
                    .show_code-enter {
                        right: ${45/100*width*(-1)};
                        opacity: 0;
                    }
            
                    .show_code-enter-active {
                        opacity: 1;
                        right: 0;
                        transition: all 300ms;
                    }
                    
                    .show_code-exit {
                        right: 0;
                        opacity: 1;
                    }
                    
                    .show_code-exit-active {
                        right: ${45/100*width*-1};
                        opacity: 0;
                        transition: all 300ms;
                    }
                `}
            </style>
        </div>
                
    )
    
    return (

        <CSSTransition
            in={codeOpen}
            mountOnEnter
            unmountOnExit
            timeout={300}
            classNames="show_code"
        >   
            {content}
        </CSSTransition>
    )
}

export default Code;