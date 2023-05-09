import React, { useRef, useEffect, useState } from "react";
import Header from "./components/MainComponents/Header";
import { newRandomArray } from "./components/util/ArrayGenerator";
import ArrayDisplay from "./components/MainComponents/ArrayDisplay";
import { useArray } from "./components/hooks/array-hook";
import Actions from "./components/MainComponents/Actions";
import Description from "./components/MainComponents/Description";
import Welcome from "./components/UIElements/Welcome";
import Modal from "./components/UIElements/Modal";

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
	const [showWelcome, setShowWelcome] = useState(true);
	const [selectedAlgorithm, setSelectdAlgorithm] = useState(null);
	const [play, setPlay] = useState(false);
	const intervalRef = useRef();

	const onSelect = (option) => {
		setSelectdAlgorithm(option);
	};

	const onSortButtonClick = () => {
		if (!arrayState.algoVisualisation) {
			onSortStart(arrayState.array, selectedAlgorithm);
		} else if (
			arrayState.algoVisualisation &&
			arrayState.counter >= arrayState.algoVisualisation.length - 1
		) {
			onReset();
		} else {
			onEnd();
		}
	};
	const onPlayClick = () => {
		if (!arrayState.algoVisualisation || play) {
			clearInterval(intervalRef.current);
		} else {
			intervalRef.current = setInterval(() => {
				onForward();
			}, 1000);
		}
		setPlay(!play);
	};

	if (play && arrayState.counter >= arrayState.algoVisualisation.length - 1) {
		onPlayClick();
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
		  setShowWelcome(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.keyCode === 37) {
				// left arrow key
				if (play || arrayState.counter <= 0) {
					return;
				}
				onBackward();
			} else if (event.keyCode === 39) {
				// right arrow key
				if (
					!arrayState.algoVisualisation ||
					play ||
					arrayState.counter >= arrayState.algoVisualisation.length - 1
				) {
					return;
				}
				onForward();
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [
		onBackward,
		onForward,
		arrayState.algoVisualisation,
		arrayState.counter,
		play,
	]);

	return (
		
		<div>
			<Modal class="modal_top" show= {showWelcome}> <Welcome></Welcome> </Modal>
			<Header
				onSelect={onSelect}
				selected={selectedAlgorithm}
				onNewArray={(array) => onNewArray(array)}
				onSort={onSortButtonClick}
				onPlay={onPlayClick}
				play={play}
				isAlgo={arrayState.algoVisualisation ? true : false}
				reset={arrayState.algoVisualisation && arrayState.counter === arrayState.algoVisualisation.length - 1 ? true : false}
			></Header>
			{
				arrayState.counter >= 0 && 
				<Description
					text={arrayState.algoVisualisation[arrayState.counter].description}
				></Description>
			}
			{
				arrayState.algoVisualisation && arrayState.counter === -1 &&
				<Description
					text = "Use the Next Step and Prev Step buttons for visualisation, or use the left and right arrow keys on the keyboard."
				></Description>
			}
			<ArrayDisplay elements={arrayState.array}></ArrayDisplay>
			{arrayState.algoVisualisation && (
				<Actions
					play={play}
					arrayState={arrayState}
					onForward={onForward}
					onBackward={onBackward}
					onPlay={onPlayClick}
				></Actions>
			)}
		</div>
	);
};

export default App;
