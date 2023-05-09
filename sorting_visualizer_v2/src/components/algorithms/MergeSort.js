let tempArr;
let mainVisualizer= [];
const merge = (arr, l, m, r) =>
{
    let temp = [];
    tempArr = [...arr];
    for(let i=l; i<=m; i++) {
        tempArr[i] = {...tempArr[i], color: "brown"};
    }
    for(let i=m+1; i<=r; i++) {
        tempArr[i] = {...tempArr[i], color: "orange"}
    }

    mainVisualizer.push({
        visualise: tempArr,
        description: `We are processing the array from index ${l} to index ${r} in the merge function.`
    });

    let i=l;
    let j=m+1;
    let k = 0;
    while (i<=m && j<=r) {
        tempArr = [...tempArr];
        tempArr[i] = {...tempArr[i], color: "blue"};
        tempArr[j] = {...tempArr[j], color: "blue"};
        mainVisualizer.push({
        visualise: tempArr,
        description: `Comparing the element ${tempArr[i].value} with element ${tempArr[j].value}.`
        });
        let low = i;
        let high = j;
        if(arr[i].value <= arr[j].value) {
            mainVisualizer.push({
                visualise: tempArr,
                description: `Since ${tempArr[i].value} is less than or equal to ${tempArr[j].value}, we will push ${tempArr[i].value} to the extra array.`
            });
            temp[k++] = arr[i++];
        }

        else {
            mainVisualizer.push({
                visualise: tempArr,
                description: `Here, ${tempArr[i].value} is greater than ${tempArr[j].value}. Therefore, ${tempArr[j].value} is pushed to the extra array.`
            });
            temp[k++] = arr[j++];
        }
        tempArr = [...tempArr];
        tempArr[low] = {...tempArr[low], color:`purple`};
        tempArr[high] = {...tempArr[high], color: "purple"};
    }

    while(i<=m) {
        tempArr = [...tempArr];
        tempArr[i] = {...tempArr[i], color: "blue"};
        mainVisualizer.push ({
            visualise: tempArr,
            description: `The remaining element ${tempArr[i].value} of the left half is now being pushed to the extra array.`
        });
        tempArr = [...tempArr];
        tempArr[i] = {...tempArr[i], color:"purple" };
        temp[k++] = arr[i++];    
    }

    while(j<=r) {
        tempArr = [...tempArr];
        tempArr[j] = {...tempArr[j], color: "blue"};
        mainVisualizer.push ({
            visualise: tempArr,
            description: `Appending the remaining element ${tempArr[j].value} of right half to the extra array.`
        });
        tempArr = [...tempArr];
        tempArr[j] = {...tempArr[j], color:"purple" };
        temp[k++] = arr[j++];
    }
    k=0;
    for(i =l; i<=r; i++) {
        tempArr = [...tempArr];
        arr[i] = {...temp[k]};
        tempArr[i] = {...arr[i], color:"green"};
        arr[i] = {...arr[i], color:"green"}
        mainVisualizer.push({
            visualise: tempArr,
            description: `Now pushing ${temp[k].value} from the extra array to the main array.`
        })
        k++;
    }
}
 
const mergeSortHelper = (arr,l, r) => {
    if(l>=r){
        return;
    }

    tempArr= [...arr];
    for(let i=l; i<=r; i++) {
        tempArr[i] = {...tempArr[i], color: "purple"};
    }
    mainVisualizer.push({
        visualise: tempArr,
        description: `In the mergeSort function, we are currently working on processing the array from index ${l} to index ${r}.`
    });
    let m = l+ parseInt((r-l)/2);
    tempArr = [...tempArr];
    tempArr[m] = {...tempArr[m], color:'red'};
    arr[m] = {...arr[m], color:"red"};
    mainVisualizer.push({
        visualise: tempArr,
        description: `The middle element is calculated at index ${m} with a value of ${tempArr[m].value}.`
    });
    mergeSortHelper(arr,l,m);
    mergeSortHelper(arr,m+1,r);
    merge(arr,l,m,r);
}

export const mergeSort = (arr, low, high) => {
    mainVisualizer = [];
    if(arr.length === 1) {
        arr[0] = {...arr[0], color: "green"};
        mainVisualizer.push({
            visualise: arr,
            description: "The array has been sorted."
        });
        return mainVisualizer;
    }
    tempArr = [];
    mergeSortHelper(arr, low, high);
    mainVisualizer.push({
        visualise: tempArr,
        description: "The array has been sorted."
    })
    return mainVisualizer;
}