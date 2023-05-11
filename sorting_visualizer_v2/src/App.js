import React, { useState } from "react";
import Header from "./components/MainComponents/Header";
import { newRandomArray } from "./components/util/ArrayGenerator";
import { useArray } from "./components/hooks/array-hook";
import Actions from "./components/MainComponents/Actions";
import Welcome from "./components/UIElements/Welcome";
import Visualize from "./components/MainComponents/Visualize";

const App = () => {
	const [
		arrayState,
		onForward,
		onBackward,
		onEnd,
		onReset,
		onNewArray,
		onSortStart,
	] = useArray(null, -1, newRandomArray(10, 100, 10));
	const [selectedAlgorithm, setSelectdAlgorithm] = useState(null);
	const [play, setPlay] = useState(false);
	const [time, setTime] = useState(1);
	const [codeOpen, setCodeOpen] = useState(false);

	const onSelect = (option) => {
		setSelectdAlgorithm(option);
	};

	const onNewArrayClick = (array) => {
		setCodeOpen(false);
		onNewArray(array);
	}

	const onSortButtonClick = () => {
		if (!arrayState.algoVisualisation) {
			onSortStart(arrayState.array, selectedAlgorithm);
		} else if (
			arrayState.algoVisualisation &&
			arrayState.counter >= arrayState.algoVisualisation.length - 1
		) {
			setCodeOpen(false);
			onReset();
		} else {
			onEnd();
		}
	};

	return (
		<div>
			
			<Welcome></Welcome>
			<Header
				onSelect={onSelect}
				selected={selectedAlgorithm}
				onNewArray={onNewArrayClick}
				onSort={onSortButtonClick}
				onPlay={() => setPlay(!play)}
				play={play}
				isAlgo={arrayState.algoVisualisation ? true : false}
				reset={arrayState.algoVisualisation && arrayState.counter === arrayState.algoVisualisation.length - 1 ? true : false}
			></Header>

			<Visualize 
				arrayState = {arrayState}
				onForward = {onForward}
				onBackward = {onBackward}
				play = {play}
				setPlay = {() => setPlay(false)}
				time = {time}
				codeOpen={codeOpen}
				setCodeOpen={() => {setCodeOpen(!codeOpen)}}
				selectedAlgorithm={selectedAlgorithm}
			></Visualize>
			
			{arrayState.algoVisualisation && (
				<Actions
					play={play}
					arrayState={arrayState}
					onForward={onForward}
					onBackward={onBackward}
					onPlay={() => setPlay(!play)}
					onSliderChange = {(e) => {setTime(e.target.value)}}
					time = {time}
				></Actions>
			)}
		</div>
	);
};

export default App;
