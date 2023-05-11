let mainVisualizer = [];
let tempArr = [];

export const radixSort = (arr) => {
  const n = arr.length;
  mainVisualizer = [];
  tempArr = [...arr];
  let maxVal = arr[0].value;
  for (let i = 1; i < n; i++) {
    if (arr[i].value > maxVal) {
      maxVal = arr[i].value;
    }
  }

  // Get the maximum number of digits in the array
  let numDigits = Math.floor(Math.log10(maxVal)) + 1;
  for (let i = 0; i < numDigits; i++) {
    // Create 10 buckets for each digit
    const buckets = new Array(10).fill().map(() => []);
    tempArr = [...arr];
    mainVisualizer.push({
      visualise: tempArr,
      description: `We are dividing the values into different buckets based on the digit at the position ${i+1}, starting from the right and moving towards the left.`,
      line: "4"
    });

    // Place each element in the appropriate bucket based on the digit
    for (let j = 0; j < n; j++) {
      const digit = Math.floor((arr[j].value / Math.pow(10, i)) % 10);
      buckets[digit].push(arr[j]);
      tempArr = [...arr];
      tempArr[j] = { ...tempArr[j], color: "brown" };
      mainVisualizer.push({
        visualise: tempArr,
        description: `Placing ${arr[j].value} in bucket ${digit}`,
        line: "7"
      });
    }

    mainVisualizer.push({
        visualise: [...arr],
        line: "9",
        description: `Removing the elements from bucket and placing them in array in sorted order based on the digit at index ${i + 1}`
    })
    let k = 0;
    for (let j = 0; j < 10; j++) {
      while (buckets[j].length > 0) {
        arr[k++] = buckets[j].shift();
        if(i+1 === numDigits) {
            arr[k-1] = {...arr[k-1], color: "green"};
        }
        tempArr = [...arr];

        if(i+1 !== numDigits) {
            tempArr[k-1] = {...tempArr[k-1], color:"green"};
        }
        mainVisualizer.push({
          visualise: tempArr,
          description: `Placing ${arr[k - 1].value} at ${k-1} index`,
          line: "9"
        });
      }
    }
  }

  mainVisualizer.push({
    visualise: [...arr],
    description: "The array has been sorted now.",
    line: "11"
  });

  return mainVisualizer;
};
