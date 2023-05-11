import React from 'react';

const HeapSortCode = (line) => {
  return (
    <React.Fragment>
      <p className={`${line === '1' ? "focus" : ""}`}>procedure heapSort(a)</p>
      <p className={`${line === '2' ? "focus" : ""}`} style={{marginLeft: "10px"}}>n := size(a)</p>
      <p className={`${line === '3' ? "focus" : ""}`} style={{marginLeft: "10px"}}>// Build heap (rearrange array)</p>
      <p className={`${line === '4' ? "focus" : ""}`} style={{marginLeft: "10px"}}>for i := n / 2 - 1 downto 0 do</p>
      <p className={`${line === '5' ? "focus" : ""}`} style={{marginLeft: "20px"}}>heapify(a, n, i)</p>
      <p className={`${line === '6' ? "focus" : ""}`} style={{marginLeft: "10px"}}>// One by one extract an element from heap</p>
      <p className={`${line === '7' ? "focus" : ""}`} style={{marginLeft: "10px"}}>for i := n - 1 downto 0 do</p>
      <p className={`${line === '8' ? "focus" : ""}`} style={{marginLeft: "20px"}}>swap(a[0], a[i])</p>
      <p className={`${line === '9' ? "focus" : ""}`} style={{marginLeft: "20px"}}>// call max heapify on the reduced heap</p>
      <p className={`${line === '10' ? "focus" : ""}`} style={{marginLeft: "20px"}}>heapify(a, i, 0)</p>
      <p className={`${line === '11' ? "focus" : ""}`} style={{marginLeft: "10px"}}>end for</p>
      <p className={`${line === '25' ? "focus" : ""}`}>end Procedure</p>
      <p className={`${line === '12' ? "focus" : ""}`} style={{marginLeft: "10px"}}>function heapify(a, n, i)</p>
      <p className={`${line === '13' ? "focus" : ""}`} style={{marginLeft: "20px"}}>largest := i</p>
      <p className={`${line === '14' ? "focus" : ""}`} style={{marginLeft: "20px"}}>l := 2 * i + 1</p>
      <p className={`${line === '15' ? "focus" : ""}`} style={{marginLeft: "20px"}}>r := 2 * i + 2</p>
      <p className={`${line === '16' ? "focus" : ""}`} style={{marginLeft: "20px"}}>if l {'<'} n and a[l] {'>'} a[largest] then</p>
      <p className={`${line === '17' ? "focus" : ""}`} style={{marginLeft: "30px"}}>largest := l</p>
      <p className={`${line === '18' ? "focus" : ""}`} style={{marginLeft: "20px"}}>if r {'<'} n and a[r] {'>'} a[largest] then</p>
      <p className={`${line === '19' ? "focus" : ""}`} style={{marginLeft: "30px"}}>largest := r</p>
      <p className={`${line === '20' ? "focus" : ""}`} style={{marginLeft: "20px"}}>if(largest != i) </p>
      <p className={`${line === '21' ? "focus" : ""}`} style={{marginLeft: "30px"}}>swap(root, largest)</p>
      <p className={`${line === '22' ? "focus" : ""}`} style={{marginLeft: "30px"}}> repeat heapify</p>
      <p className={`${line === '23' ? "focus" : ""}`} style={{marginLeft: "20px"}}> end if</p>
      <p className={`${line === '24' ? "focus" : ""}`} style={{marginLeft: "20px"}}> end procedure</p>
    </React.Fragment>
  )

}
export default HeapSortCode;