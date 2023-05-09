import { useState } from "react"
import Dropdown from "./Dropdown";


const DropdownPage = ({onOptionSelect, isAlgo}) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onOptionSelect(option);
    }

    const options = [
        {
            label: "Bubble Sort",
            value: "bubble"
        },
        {
            label: "Merge Sort",
            value: "merge"
        },
        {
            label: "Quick Sort",
            value: "quick"
        },
        {
            label: "Insertion Sort",
            value: "insertion"
        },
        {
            label: "Selection Sort",
            value: "selection"
        }, 
        {
            label: "Heap Sort",
            value: "heap"
        }, 
        {
            label: "Counting Sort",
            value: "counting"
        },
        {
            label: "Radix Sort",
            value: "radix"
        }
    ];

    return (
        <div style={{zIndex:"5"}}>
            <Dropdown isAlgo = {isAlgo} options={options} value={selectedOption} onChange={handleSelect}></Dropdown>
        </div>
    )
}

export default DropdownPage;

