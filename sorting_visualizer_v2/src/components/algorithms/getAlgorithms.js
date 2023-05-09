import { BubbleSort } from "./BubbleSort"
import { mergeSort } from "./MergeSort";
import { quickSort } from "./QuickSort";
import { insertionSort } from "./InsertionSort";
import { selectionSort } from "./SelectionSort";
import { heapSort } from "./HeapSort";
import { countingSort } from "./CountingSort";
import { radixSort } from "./RadixSort";


export const getAlgorithms = (arr, name) => {
    let array = [];
    switch(name) {
        case "bubble":
            array = BubbleSort(arr);
            return array;
        case "merge":
            array = mergeSort(arr, 0, arr.length-1);
            return array;
        case "quick":
            array = quickSort(arr, 0, arr.length-1);
            return array;
        case "insertion": 
            array = insertionSort(arr);
            return array;
        case "selection": 
            array = selectionSort(arr);
            return array;
        case "heap": 
            array = heapSort(arr);
            return array;
        case "counting" : 
            array = countingSort(arr);
            return array;
        case "radix" :
            array = radixSort(arr);
            return array;
            
        default :
            return null;
    }
}