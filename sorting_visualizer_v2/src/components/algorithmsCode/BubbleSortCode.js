import React from 'react';
const BubbleSortCode = (line) => {
    console.log(line);
    return (
        <React.Fragment>
            <p className={`${line === '1' ? "focus" : ""}`}>procedure bubbleSort(A : list of sortable items)</p>
            <p className={`${line === '2' ? "focus" : ""}`} style={{marginLeft: "13px"}}>n = length(A)</p>
            <p className={`${line === '3' ? "focus" : ""}`}  style={{marginLeft: "15px"}}>repeat</p>
            <p className={`${line === '4' ? "focus" : ""}`}  style={{marginLeft: "30px"}}>swapped = false</p>
            <p className={`${line === '5' ? "focus" : ""}`}  style={{marginLeft: "30px"}}>for i = 1 to n-1 inclusive do</p>
            <p className={`${line === '6' ? "focus" : ""}`}  style={{marginLeft: "45px"}}>if A[i] {'>'} A[i+1] then</p>
            <p className={`${line === '7' ? "focus" : ""}`}  style={{marginLeft: "60px"}}>swap(A[i], A[i+1])</p>
            <p className={`${line === '8' ? "focus" : ""}`}  style={{marginLeft: "60px"}}>swapped = true</p>
            <p className={`${line === '9' ? "focus" : ""}`}  style={{marginLeft: "45px"}}>end if</p>
            <p className={`${line === '10' ? "focus" : ""}`}  style={{marginLeft: "30px"}}>end for</p>
            <p className={`${line === '11' ? "focus" : ""}`}  style={{marginLeft: "30px"}}>n = n - 1</p>
            <p className={`${line === '12' ? "focus" : ""}`}  style={{marginLeft: "15px"}}>until not swapped</p>
            <p className={`${line === '13' ? "focus" : ""}`}  style={{marginLeft: "15px"}}>end procedure</p>
            
        </React.Fragment>
    )
}

export default BubbleSortCode;
