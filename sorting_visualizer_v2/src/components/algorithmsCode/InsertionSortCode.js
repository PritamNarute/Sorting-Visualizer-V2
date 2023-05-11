import React from 'react';
const InsertionSortCode = (line) => {
    return (
        <React.Fragment>

            <p className={`${line === '1' ? "focus" : ""}`}>procedure insertionSort(A : list of sortable items)</p>
            <p className={`${line === '2' ? "focus" : ""}`} style={{marginLeft: "15px"}}>n = length(A)</p>
            <p className={`${line === '3' ? "focus" : ""}`}  style={{marginLeft: "15px"}}>for i = 1 to n-1 inclusive do</p>
            <p className={`${line === '4' ? "focus" : ""}`}  style={{marginLeft: "30px"}}>j = i</p>
            <p className={`${line === '5' ? "focus" : ""}`}  style={{marginLeft: "30px"}}>while j {'>'} 0 and A[j-1] {'>'} A[j] do</p>
            <p className={`${line === '6' ? "focus" : ""}`}  style={{marginLeft: "45px"}}>swap(A[j-1], A[j])</p>
            <p className={`${line === '7' ? "focus" : ""}`}  style={{marginLeft: "45px"}}>j = j - 1</p>
            <p className={`${line === '8' ? "focus" : ""}`}  style={{marginLeft: "30px"}}>end while</p>
            <p className={`${line === '9' ? "focus" : ""}`}  style={{marginLeft: "15px"}}>end for</p>
            <p>end procedure</p>
        </React.Fragment>
    )
}

export default InsertionSortCode;
