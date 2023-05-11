import React from 'react';
const QuickSortCode = (line) => {
    return (
        <React.Fragment>
            <p className={`${line === '1' ? "focus" : ""}`}>function quickSort(arr, low, high):</p>
            <p className={`${line === '2' ? "focus" : ""}`}  style={{marginLeft: "15px"}}>if low {'<'} high:</p>
            <p className={`${line === '3' ? "focus" : ""}`}  style={{marginLeft: "30px"}}>pivot = partition(arr, low, high)</p>
            <p className={`${line === '4' ? "focus" : ""}`}  style={{marginLeft: "30px"}}>quickSort(arr, low, pivot - 1)</p>
            <p className={`${line === '5' ? "focus" : ""}`}  style={{marginLeft: "30px"}}>quickSort(arr, pivot + 1, high)</p>
            <p className={`${line === '6' ? "focus" : ""}`}>function partition(arr, low, high):</p>
            <p className={`${line === '7' ? "focus" : ""}`}  style={{marginLeft: "15px"}}>pivot = arr[high]   // select the last element as pivot</p>
            <p className={`${line === '8' ? "focus" : ""}`}  style={{marginLeft: "15px"}}>i = low - 1</p>
            <p className={`${line === '9' ? "focus" : ""}`}  style={{marginLeft: "15px"}}>for j = low to high - 1:</p>
            <p className={`${line === '10' ? "focus" : ""}`}  style={{marginLeft: "30px"}}>if arr[j] {'<'} pivot:</p>
            <p className={`${line === '11' ? "focus" : ""}`}  style={{marginLeft: "45px"}}>i = i + 1</p>
            <p className={`${line === '12' ? "focus" : ""}`}  style={{marginLeft: "45px"}}>swap(arr[i], arr[j])</p>
            <p className={`${line === '13' ? "focus" : ""}`}  style={{marginLeft: "15px"}}>swap(arr[i+1], arr[high])</p>
            <p className={`${line === '14' ? "focus" : ""}`}  style={{marginLeft: "15px"}}>return i + 1</p>
        </React.Fragment>
    )
}

export default QuickSortCode;
