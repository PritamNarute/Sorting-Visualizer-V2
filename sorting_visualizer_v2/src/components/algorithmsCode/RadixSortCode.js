import React from 'react';

const RadixSortCode = (line) => {
    return (
        <React.Fragment>
            <p className={`${line === '1' ? "focus" : ""}`}>procedure radixSort(A : list of integers)</p>
            <p className={`${line === '2' ? "focus" : ""}`} style={{marginLeft: "15px"}}>max_digit = getMaxDigit(A)</p>
            <p className={`${line === '3' ? "focus" : ""}`} style={{marginLeft: "15px"}}>for i = 0 to max_digit-1 inclusive do</p>
            <p className={`${line === '4' ? "focus" : ""}`} style={{marginLeft: "30px"}}>buckets = initializeBuckets()</p>
            <p className={`${line === '5' ? "focus" : ""}`} style={{marginLeft: "30px"}}>for j = 0 to length(A)-1 inclusive do</p>
            <p className={`${line === '6' ? "focus" : ""}`} style={{marginLeft: "45px"}}>digit = getDigit(A[j], i)</p>
            <p className={`${line === '7' ? "focus" : ""}`} style={{marginLeft: "45px"}}>push A[j] to buckets[digit]</p>
            <p className={`${line === '8' ? "focus" : ""}`} style={{marginLeft: "30px"}}>end for</p>
            <p className={`${line === '9' ? "focus" : ""}`} style={{marginLeft: "30px"}}>A = concatenateBuckets(buckets)</p>
            <p className={`${line === '10' ? "focus" : ""}`} style={{marginLeft: "15px"}}>end for</p>
            <p className={`${line === '11' ? "focus" : ""}`}>end procedure</p>
        </React.Fragment>
    )
}

export default RadixSortCode;
