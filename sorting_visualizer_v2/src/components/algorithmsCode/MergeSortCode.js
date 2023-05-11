import React from "react";

const MergeSortCode = (line) => {
    return (
        <React.Fragment>
        <p className={`${line === '1' ? "focus" : ""}`}>procedure mergeSort(A: list of sortable items)</p>
        <p className={`${line === '2' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>if length(A) ≤ 1 then</p>
        <p className={`${line === '3' ? "focus" : ""}`} style = {{marginLeft: "30px"}}>return A</p>
        <p className={`${line === '4' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>end if</p>
        <p className={`${line === '5' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>mid = length(A) / 2</p>
        <p className={`${line === '6' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>left = mergeSort(A[0:mid])</p>
        <p className={`${line === '7' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>right = mergeSort(A[mid:length(A)])</p>
        <p className={`${line === '8' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>return merge(left, right)</p>
        <p className={`${line === '9' ? "focus" : ""}`}>end procedure</p>
        <br/>
        <p className={`${line === '10' ? "focus" : ""}`}>procedure merge(left: list of sortable items, right: list of sortable items)</p>
        <p className={`${line === '11' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>result = []</p>
        <p className={`${line === '12' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>i = 0</p>
        <p className={`${line === '13' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>j = 0</p>
        <p className={`${line === '14' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>while i {'<'} length(left) and j {'<'} length(right) do</p>
        <p className={`${line === '15' ? "focus" : ""}`} style = {{marginLeft: "30px"}}>if left[i] ≤ right[j] then</p>
        <p className={`${line === '16' ? "focus" : ""}`} style = {{marginLeft: "45px"}}>result.append(left[i])</p>
        <p className={`${line === '17' ? "focus" : ""}`} style = {{marginLeft: "45px"}}>i = i + 1</p>
        <p className={`${line === '17' ? "focus" : ""}`} style = {{marginLeft: "30px"}}>else</p>
        <p className={`${line === '18' ? "focus" : ""}`} style = {{marginLeft: "45px"}}>result.append(right[j])</p>
        <p className={`${line === '19' ? "focus" : ""}`} style = {{marginLeft: "45px"}}>j = j + 1</p>
        <p className={`${line === '20' ? "focus" : ""}`} style = {{marginLeft: "30px"}}>end if</p>
        <p className={`${line === '21' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>end while</p>
        <p className={`${line === '22' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>while i {'<'} length(left) do</p>
        <p className={`${line === '23' ? "focus" : ""}`} style = {{marginLeft: "30px"}}>result.append(left[i])</p>
        <p className={`${line === '24' ? "focus" : ""}`} style = {{marginLeft: "30px"}}>i = i + 1</p>
        <p className={`${line === '26' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>end while</p>
        <p className={`${line === '28' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>while j {'<'} length(right) do</p>
        <p className={`${line === '29' ? "focus" : ""}`} style = {{marginLeft: "30px"}}>result.append(right[j])</p>
        <p className={`${line === '30' ? "focus" : ""}`} style = {{marginLeft: "30px"}}>j = j + 1</p>
        <p className={`${line === '31' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>end while</p>
        <p className={`${line === '32' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>for k = 0 to length(result)-1 do</p>
        <p className={`${line === '33' ? "focus" : ""}`} style = {{marginLeft: "30px"}}>A[k] = result[k]</p>
        <p className={`${line === '34' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>end for</p>
        <p className={`${line === '35' ? "focus" : ""}`} style = {{marginLeft: "15px"}}>return result</p>
        <p className={`${line === '36' ? "focus" : ""}`}>end procedure</p>
    </React.Fragment>
    )
}

export default MergeSortCode;