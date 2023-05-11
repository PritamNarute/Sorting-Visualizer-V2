
export const insertionSort = (arr) => {
	let mainVisualizer = [];
	let tempArr = [];
	arr[0] = {...arr[0], color:"green"};
	mainVisualizer.push({
		visualise:arr,
		description: `First Element ${arr[0].value} is Sorted`,
		line: "-1"
	})
	arr = [...arr];
	
	for (let i = 1; i < arr.length; i++) {
		let key = arr[i];
		tempArr = [...arr];
		tempArr[i] = {...tempArr[i], color:"orange"};
		mainVisualizer.push({
			visualise: tempArr,
			description: `We are now inserting a new element ${tempArr[i].value} into this already sorted array.`,
			line: "5"
		});

		let j = i - 1;
		while (j >= 0)  {
			tempArr = [...tempArr];
			tempArr[j] = { ...tempArr[j], color: "blue" };
			mainVisualizer.push({
				visualise: tempArr,
				description: `Comparing the element with value ${tempArr[j].value} to the key element with value ${key.value}.`,
				line: "5"
			});
			if( arr[j].value > key.value) {
				tempArr = [...tempArr];
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
				tempArr[j] = {...tempArr[j], color:"green"};
				[tempArr[j], tempArr[j+1]] = [tempArr[j+1], tempArr[j]];
				mainVisualizer.push({
					visualise: tempArr,
					description: `Element ${tempArr[j].value} is being swapped with ${tempArr[j+1].value}.`,
					line : "6"
				});
			}

			else {
				tempArr = [...tempArr];
				tempArr[j] = { ...tempArr[j], color: "green" };
				break;
			} 
			
		j--;
	}
	tempArr = [...tempArr];
	tempArr[j+1] = {...tempArr[j+1], color:"green"};
	arr[j+1] = {...arr[j+1], color:"green"};
	mainVisualizer.push({
	  visualise: tempArr,
	  description: `The element ${tempArr[j + 1].value} has been inserted at index ${j+1} in the sorted array.`,
	  line: "8"
	});
  }

  mainVisualizer.push({
	visualise: arr,
	description: "The array has been sorted now.",
	line: "9"
  });
  return mainVisualizer;
};
