let mainVisualizer = [];
let tempArr = [];

const partition = (arr, low, high) => {
    if(low === high) {
        return low;
    }
    tempArr = [...arr];
    for (let i = low; i <= high; i++) {
        tempArr[i] = { ...tempArr[i], color: "purple" };
    }
    let pivot = arr[high];
    mainVisualizer.push({
        visualise: tempArr,
        description: `Here we are starting to partition the array from index ${low} to index ${high}. We choose ${pivot.value} as the pivot value.`,
    });
    
    tempArr = [...tempArr];
    tempArr[high] = {...tempArr[high], color: "orange"};
    mainVisualizer.push({
        visualise: tempArr,
        description: `Pivot with value ${pivot.value} is chosen for partitioning the array.`
    });

    let i = low - 1;
    tempArr = [...tempArr];
    
    for (let j = low; j < high; j++) {
        tempArr[i+1] = {...tempArr[i+1], color:"brown"};
        tempArr = [...tempArr];
        tempArr[j] = { ...tempArr[j], color: "blue" };
        mainVisualizer.push({
        visualise: tempArr,
        description: `Comparing element ${tempArr[j].value} with pivot element with value ${pivot.value}.`
        });

        if (arr[j].value < pivot.value) {
            i++;
            tempArr = [...tempArr];
            tempArr[i] = { ...tempArr[i], color: "blue" };
            [arr[i], arr[j]] = [arr[j], arr[i]];
            [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];

            mainVisualizer.push({
                visualise: tempArr,
                description: `Since ${tempArr[i].value} is less than pivot ${pivot.value}, we swap ${tempArr[j].value} with ${tempArr[i].value}.`
            });
            tempArr = [...tempArr];
            tempArr[i] = {...tempArr[i], color: "purple"};
        }
        tempArr = [...tempArr];
        tempArr[j] = { ...tempArr[j], color: "purple" };
    }

    tempArr = [...tempArr];
    tempArr[i + 1] = { ...tempArr[i + 1], color: "blue" };
    tempArr[high] = { ...tempArr[high], color: "blue" };
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    [tempArr[i + 1], tempArr[high]] = [tempArr[high], tempArr[i + 1]];

    mainVisualizer.push({
        visualise: tempArr,
        description: `Finally swapping the pivot element ${tempArr[high].value} with the element ${tempArr[i + 1].value}`
    });
    return i + 1;
};

const quickSortHelper = (arr, low, high) => {
    if (low > high) {
        return;
    }

    let pi = partition(arr, low, high);
    arr[pi] = {...arr[pi], color: "green"};
    tempArr = [...arr];
    mainVisualizer.push({
        visualise: tempArr,
        description: `Element ${tempArr[pi].value} is ${low === high ? 'already' : 'now'} at its sorted position.`
    })
    quickSortHelper(arr, low, pi - 1);
    quickSortHelper(arr, pi + 1, high);
};

export const quickSort = (arr, low, high) => {
    mainVisualizer = [];
    if (arr.length === 1) {
    arr[0] = { ...arr[0], color: "green" };
    mainVisualizer.push({
      visualise: arr,
      description: "The array has been successfully sorted."
    });
    return mainVisualizer;
    }
    tempArr = [];
    
    quickSortHelper(arr, low, high);
    mainVisualizer.push({
        visualise: arr,
        description: "The array has been successfully sorted."
    });
    return mainVisualizer;
};
