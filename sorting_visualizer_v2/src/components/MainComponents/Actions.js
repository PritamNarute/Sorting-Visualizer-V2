import Button from "../FormElements/Button";
import "./Actions.css";

const Actions = ({arrayState, onForward, onBackward, onPlay, play, onEnd}) => {
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
        </div>
    )
}

export default Actions;