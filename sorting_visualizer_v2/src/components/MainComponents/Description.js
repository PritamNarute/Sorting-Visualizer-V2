
import "./Description.css";
const Description = ({text}) => {
    return (
        <div className="description">
            <i class="fa-solid fa-circle-info"></i>
            {text}
        </div>
    )   
}

export default Description;