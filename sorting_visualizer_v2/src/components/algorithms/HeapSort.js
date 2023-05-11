let mainVisualizer = [];
let tempArr = [];
export const heapSort = (arr) => {
		mainVisualizer = [];
		let n = arr.length;
		
		for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
				heapify(arr, n, i);
				tempArr = [...arr];
				tempArr[i] = {...tempArr[i], color:"orange"};
				mainVisualizer.push ({
						visualise: tempArr,
						description: `The heapify process has been completed for the element located at index ${i}.`,
						line: "5"
					});
		}


		mainVisualizer.push ({
				visualise: [...arr],
				description: "We're now done building the heap. We'll then swap the first (max) and last elements, and perform heapify on the first index. We'll repeat this process until the whole array is sorted.",
				line: "-1"
			});
		for (let i = n - 1; i > 0; i--) {
				[arr[0], arr[i]] = [arr[i], arr[0]];
				arr[i] = {...arr[i], color: "green"};
		// Visualize the swap
				mainVisualizer.push({
						visualise: [...arr],
						description: `We have now sorted the element ${arr[i].value} by swapping it with the last element ${arr[0].value}.`,
						line : "8"
					});

		// Heapify the reduced heap
		heapify(arr, i, 0);
		tempArr = [...arr];
				tempArr[0] = {...tempArr[0], color:"orange"};
				mainVisualizer.push ({
						visualise: tempArr,
						description: `The heapify process has been completed for the element located at index ${i}.`,
						line : "-1"
					});
	}

//   // Mark the first element as sorted
	arr[0] = { ...arr[0], color: "green" };
	mainVisualizer.push({
		visualise: [...arr],
		description: `Element ${arr[0].value} is now sorted.`,
		line : "11"
	});
	mainVisualizer.push({
		visualise: [...arr],
		description: "The array has been successfully sorted.",
		line: "25"
	});

	return mainVisualizer;
};
const heapify = (arr, n, i) => {
	let largest = i; 
	let l = 2 * i + 1; 
	let r = 2 * i + 2; 

	tempArr = [...arr];
	for(var j =i; j<n; j++) {
		if(j === i) {
				tempArr[j] = {...tempArr[j], color: "orange"};
		}
		else {
				tempArr[j] = {...tempArr[j], color: "purple"};
		}
	}

	mainVisualizer.push ({
		visualise: tempArr,
		description: `We called Heapify on index ${i} to create a max heap at that position.`,
		line : "12"
	});
	// If left child is larger than root
	if (l < n) {
		tempArr = [...tempArr];
		tempArr[l] = {...tempArr[l], color: "blue"};
		mainVisualizer.push({
				visualise: tempArr,
				description: `We are comparing the root element ${tempArr[i].value} with its left child ${tempArr[l].value}.`,
				line: "16"
			});
		if(arr[l].value > arr[largest].value) {
				largest = l;
		}
	}

	if (r < n) {
		tempArr = [...tempArr];
		tempArr[r] = {...tempArr[r], color: "blue"};
		mainVisualizer.push({
				visualise: tempArr,
				description: `Comparing the root element, which is ${tempArr[i].value}, with its right child, which is ${tempArr[r].value}.`,
				line: "18"
			});
		if(arr[r].value > arr[largest].value) {
				largest = r;
		}
	}
	if (largest !== i) {
		tempArr = [...tempArr];
		tempArr[largest] = {...tempArr[largest], color:"brown"};
		mainVisualizer.push ({
				visualise: tempArr,
				description: `A larger child with value ${tempArr[largest].value} was found at index ${largest}.`,
				line : "20"
			});
		tempArr = [...tempArr];

		let temp1 = tempArr[i].value;
		let temp2 = tempArr[largest].value;
		tempArr[i] = {...tempArr[i], value: temp2};
		tempArr[largest] = {...tempArr[largest], value: temp1};

		arr[i] = {...arr[i], value: temp2};
		arr[largest] = {...arr[largest], value: temp1};

		mainVisualizer.push ({
				visualise: tempArr,
				description: `We're swapping the root element with its larger child, which is ${temp2}.`,
				line : "21"
			});
		heapify(arr, n, largest);
	}
};