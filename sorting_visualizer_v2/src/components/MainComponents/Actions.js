import Button from "../FormElements/Button";
import "./Actions.css";

const Actions = ({arrayState, onForward, onBackward, onPlay, play, onEnd, onSliderChange, time}) => {
    return (
        <div className="action-buttons">
    		<Button
				onClick={onBackward}
				disabled = {play || arrayState.counter <= 0 ? true: false}
				buttonText = "Prev Step"
				circle = {true}
			>
				<i class="fa-solid fa-backward-step"></i>
			</Button>

			<Button 
				onClick={onPlay}
				disabled = {
		           arrayState.counter >= arrayState.algoVisualisation.length-1 ? true: false}
				buttonText = {play ? "Stop" : "Start"}
				circle = {true}
			>
				{!play && <i class="fa-solid fa-play"></i>}
                {play && <i class="fa-solid fa-pause"></i>}
			</Button>

			<Button
				onClick={onForward}
				disabled = { play || arrayState.counter >= arrayState.algoVisualisation.length-1 ? true: false }
				buttonText = "Next Step"
				circle = {true}
			>
				<i class="fa-solid fa-forward-step"></i>
			</Button>
			<div className="slider-container">
				<div className="slider-content">
					<p>Speed:</p>
					{time}X
				</div>
				<input className="slider" onChange={(e) => onSliderChange(e)} type="range" min="1" max="10" step="1" value={time} />
			</div>
        </div>
    )
}

export default Actions;