export const BubbleSort = (arr) => {
    const n = arr.length;
	
    const mainVisualizer = [];
	let tempArr = [];

    for (let i = 0; i <= n - 1; i++) {

        tempArr = [...arr];

        for (let k = 0; k <= n - i - 1; k++) {
            tempArr[k] = { ...tempArr[k], color: "purple" };
        }
		mainVisualizer.push({
			visualise: tempArr,
			description: `We'll be processing the array starting from the element at index 0 with a value of ${tempArr[0].value} and ending at the element at index ${n-i-1} with a value of ${tempArr[n-i-1].value}.` 
						  
		});
		for(var j=0; j<n-i-1; j++) {
			tempArr = [...tempArr];
			tempArr[j] = { ...tempArr[j], color: "blue" };
			tempArr[j+1] = { ...tempArr[j+1], color: "blue" };
			mainVisualizer.push({
				visualise: tempArr,
				description: `We're comparing ${tempArr[j].value} and ${tempArr[j+1].value}.`
			});
			tempArr = [...tempArr];
			if(arr[j].value > arr[j+1].value) {
				[ tempArr[j], tempArr[j+1] ] = [ tempArr[j+1], tempArr[j] ];
				[ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ];
				mainVisualizer.push({
					visualise: tempArr,
					description: `As we were comparing ${tempArr[j+1].value} and ${tempArr[j].value}, we found that ${tempArr[j+1].value} was greater than ${tempArr[j].value}. Thus, we had to swap them.`
				})
			}
			else {
				mainVisualizer.push({
					visualise: tempArr,
					description: `Here, ${tempArr[j+1].value} was not greater than ${tempArr[j].value}, hence there was no need for swapping.`
				})
			}
			tempArr = [...tempArr];
			tempArr[j] = {...tempArr[j], color: "purple"}
			tempArr[j+1] = {...tempArr[j+1], color: "purple"}
		}
		tempArr = [...arr];
		tempArr[n-i-1] = {...tempArr[n-i-1], color:"green"};
		arr[n-i-1] = {...arr[n-i-1], color: "green"};
		mainVisualizer.push({
			visualise: tempArr,
			description: `The element with the value ${tempArr[n-i-1].value} has now been sorted into its correct position.`
		});
    }
	mainVisualizer.push({
		visualise: tempArr,
		description: "The array has been sorted."
	});
	
    return mainVisualizer;
};