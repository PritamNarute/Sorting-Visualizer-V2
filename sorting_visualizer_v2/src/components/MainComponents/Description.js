
import "./Description.css";
const Description = ({arrayState}) => {
    if(!arrayState.algoVisualisation) {
        return null;
    }
    return (
        <div>
            {
                arrayState.counter >= 0 && 
                <div className="description">
                    <i class="fa-solid fa-circle-info"></i>
                    {arrayState.algoVisualisation[arrayState.counter].description} 
                </div>
            }
            {
                arrayState.algoVisualisation && arrayState.counter === -1 &&
                <div className="description">
                    Use the Next Step and Prev Step buttons or left and right arrow keys.
                </div>
            }
        </div>
    )   
}

export default Description;