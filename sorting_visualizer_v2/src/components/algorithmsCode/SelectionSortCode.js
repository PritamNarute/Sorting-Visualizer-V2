import React from 'react';

const SelectionSortCode = (line) => {
    return (
        <React.Fragment>
            <p className={`${line === '1' ? "focus" : ""}`}>procedure selectionSort(A : list of sortable items)</p>
            <p className={`${line === '2' ? "focus" : ""}`} style={{marginLeft: "15px"}}>n = length(A)</p>
            <p className={`${line === '3' ? "focus" : ""}`} style={{marginLeft: "15px"}}>for i = 0 to n-2 inclusive do</p>
            <p className={`${line === '4' ? "focus" : ""}`} style={{marginLeft: "30px"}}>min_index = i</p>
            <p className={`${line === '5' ? "focus" : ""}`} style={{marginLeft: "30px"}}>for j = i+1 to n-1 inclusive do</p>
            <p className={`${line === '6' ? "focus" : ""}`} style={{marginLeft: "45px"}}>if A[j] {'<'} A[min_index] then</p>
            <p className={`${line === '7' ? "focus" : ""}`} style={{marginLeft: "60px"}}>min_index = j</p>
            <p className={`${line === '8' ? "focus" : ""}`} style={{marginLeft: "45px"}}>end if</p>
            <p className={`${line === '9' ? "focus" : ""}`} style={{marginLeft: "30px"}}>end for</p>
            <p className={`${line === '10' ? "focus" : ""}`} style={{marginLeft: "30px"}}>swap(A[i], A[min_index])</p>
            <p className={`${line === '11' ? "focus" : ""}`} style={{marginLeft: "15px"}}>end for</p>
            <p className={`${line === '12' ? "focus" : ""}`}>end procedure</p>
        </React.Fragment>
    )
}

export default SelectionSortCode;
