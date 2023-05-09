
export const selectionSort = (arr) => {
    let tempArr = [];
    let mainVisualizer = [];
    let n = arr.length;
    for(var i=0; i<n; i++) {
        arr[i] = {...arr[i], color:"purple"};
    }

    for (let i = 0; i < n; i++) {
        let minIndex = i;
        tempArr = [...arr];
        tempArr[minIndex] = {...tempArr[minIndex], color:"orange"};
        mainVisualizer.push({
            visualise:tempArr,
            description: `Locating the smallest element at index ${minIndex} in the current range of values.`
        });
        for (let j = i + 1; j < n; j++) {
            tempArr = [...tempArr];
            tempArr[j] = {...tempArr[j], color: "blue"};
            mainVisualizer.push({
                visualise: tempArr,
                description: `Comparing the value ${tempArr[j].value} at index ${j} with the current minimum value ${tempArr[minIndex].value} at index ${minIndex}.`
            });

            if(tempArr[j].value < tempArr[minIndex].value) {
                tempArr = [...tempArr];
                if(minIndex !== i) {
                    tempArr[minIndex] = {...tempArr[minIndex], color:"purple"};
                }
                minIndex = j;
                
                tempArr[j] = {...tempArr[j], color:"brown"};
                mainVisualizer.push({
                    visualise:tempArr,
                    description: `Value Less than current MinimumVlaue found. Thus Changing the minimum value to ${tempArr[minIndex].value}`
                });
            }
            if(j!==minIndex) {
                tempArr = [...tempArr];
                tempArr[j] = {...tempArr[j], color: "purple"};
            }
        }
        arr = [...arr];
        tempArr = [...tempArr];
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        [tempArr[i], tempArr[minIndex]] = [tempArr[minIndex], tempArr[i]];
        arr[i] = {...arr[i], color:"green"};
        tempArr[minIndex] = {...tempArr[minIndex], color:"brown"};
        tempArr[i] = {...tempArr[i], color:"orange"};
        mainVisualizer.push({
            visualise: tempArr,
            description: `Swapping ${tempArr[i].value} with ${tempArr[minIndex].value}`
        });
        tempArr = [...tempArr];
        tempArr[i] = {...tempArr[i], color: "green"};
        if(minIndex !== i) {
            tempArr[minIndex] = {...tempArr[minIndex], color:"purple"};
        }
        mainVisualizer.push({
            visualise: tempArr,
            description: `Element ${tempArr[i].value} is now at its sorted position`
        });
    }

    
    mainVisualizer.push({
        visualise: tempArr,
        description: "Array is now sorted",
    });

  return mainVisualizer;
};