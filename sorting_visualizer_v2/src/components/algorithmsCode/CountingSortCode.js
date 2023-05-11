import React from 'react';

const CountingSortCode = (line) => {
  return (
    <React.Fragment>
      <p className={`${line === '1' ? "focus" : ""}`}>procedure countingSort(A : list of sortable items, k : maximum element in the array)</p>
      <p className={`${line === '2' ? "focus" : ""}`} style={{marginLeft: "10px"}}>C = array of (k+1) zeros</p>
      <p className={`${line === '3' ? "focus" : ""}`} style={{marginLeft: "10px"}}>for j = 1 to length(A) do</p>
      <p className={`${line === '4' ? "focus" : ""}`} style={{marginLeft: "20px"}}>C[A[j]] = C[A[j]] + 1</p>
      <p className={`${line === '5' ? "focus" : ""}`} style={{marginLeft: "10px"}}>end for</p>
      <p className={`${line === '6' ? "focus" : ""}`} style={{marginLeft: "10px"}}>for i = 1 to k do</p>
      <p className={`${line === '7' ? "focus" : ""}`} style={{marginLeft: "20px"}}>C[i] = C[i] + C[i-1]</p>
      <p className={`${line === '8' ? "focus" : ""}`} style={{marginLeft: "10px"}}>end for</p>
      <p className={`${line === '9' ? "focus" : ""}`} style={{marginLeft: "10px"}}>B = array of length n</p>
      <p className={`${line === '10' ? "focus" : ""}`} style={{marginLeft: "10px"}}>for j = n downto 1 do</p>
      <p className={`${line === '11' ? "focus" : ""}`} style={{marginLeft: "20px"}}>B[C[A[j]]] = A[j]</p>
      <p className={`${line === '12' ? "focus" : ""}`} style={{marginLeft: "20px"}}>C[A[j]] = C[A[j]] - 1</p>
      <p className={`${line === '13' ? "focus" : ""}`} style={{marginLeft: "10px"}}>end for</p>
      <p className={`${line === '14' ? "focus" : ""}`}>end procedure</p>
    </React.Fragment>
  );
};

export default CountingSortCode;
