let mainVisualizer = [];
let tempArr = [];

export const countingSort = (arr) => {

    const n = arr.length;
    mainVisualizer = [];
    tempArr = [...arr];
    let maxVal = arr[0].value;
    for (let i = 1; i < n; i++) {
        if (arr[i].value > maxVal) {
            maxVal = arr[i].value;
        }
    }

    const countArr = new Array(maxVal + 1).fill(0);
    mainVisualizer.push({
        visualise: [...arr],
        description: "We're now counting how many times each element appears in the array.",
        line: "1"
    });

    for (let i = 0; i < n; i++) {
        countArr[arr[i].value] ++;
        tempArr = [...arr];
        tempArr[i] = {...tempArr[i], color: "brown"};

        mainVisualizer.push({
            visualise: tempArr,
            description: `We found ${arr[i].value} in the array ${countArr[arr[i].value]} ${countArr[arr[i].value]>1 ? "times" : "time"}.`,
            line: "4"
        });
    }
    let k =0;
    for(let i=0; i<countArr.length; i++) {
        if(countArr[i]> 0) {
            for(let j=0; j<countArr[i]; j++) {
                arr[k] = {...arr[k], color:"green", value: i};
                k++;
            }

            mainVisualizer.push({
                visualise: [...arr],
                description: `Adding the occurrences of ${i} to the array.`,
                line: "11"
            });
        }
    }
    mainVisualizer.push({
        visualise: [...arr],
        description: "The array has been successfully sorted.",
        line: "14"
    })
    return mainVisualizer;
}