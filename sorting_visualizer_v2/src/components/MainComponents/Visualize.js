import { useRef, useEffect } from 'react';
import Description from "./Description";
import ArrayDisplay from "./ArrayDisplay";
import ShowCode from './ShowCode';
import { useWindowDimensions } from "../util/windowDimesion";

const Visualize = ({codeOpen, setCodeOpen, arrayState, onForward, onBackward, play, time, setPlay, selectedAlgorithm}) => {
    const intervalRef = useRef();
    console.log(selectedAlgorithm);
    const { width, height } = useWindowDimensions();

    if (play && arrayState.counter >= arrayState.algoVisualisation.length - 1) {
		clearInterval(intervalRef.current);
		setPlay();
	}

    useEffect(() => {
		if(arrayState.algoVisualisation && arrayState.counter < arrayState.algoVisualisation.length - 1 && play) {
			intervalRef.current = setInterval(() => {
				onForward();
			}, (1000/time));
		}
		return () => {
			clearInterval(intervalRef.current);
		}
	});
    useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.keyCode === 37) {
				if (play || arrayState.counter <= 0) {
					return;
				}
				onBackward();
			} else if (event.keyCode === 39) {
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
		play
	]);

    return (
        <div>
            <Description arrayState={arrayState}></Description>
            <ArrayDisplay width = {width} height = {height} codeOpen = {codeOpen} elements={arrayState.array}></ArrayDisplay>
            {
                arrayState.algoVisualisation && 
                <ShowCode 
                    width = {width} 
                    height = {height}
                    setCodeOpen={() => setCodeOpen(!codeOpen)}
                    codeOpen={codeOpen}
                    selectedAlgorithm = {selectedAlgorithm}
                    focused = {arrayState.counter >= 0 ? arrayState.algoVisualisation[arrayState.counter].line : -1}
                ></ShowCode>}
        </div>
    )
}

export default Visualize;