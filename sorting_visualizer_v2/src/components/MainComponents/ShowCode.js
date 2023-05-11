
import Code from "./Code";
import "./ShowCode.css";
const ShowCode = ({focused, setCodeOpen, codeOpen, width, height, selectedAlgorithm}) => {
    return (
        <div>
            <Code 
                width={width} 
                height={height} 
                selectedAlgorithm = {selectedAlgorithm} 
                line = {focused} 
                codeOpen={codeOpen}
            ></Code>
            <button onClick={setCodeOpen} style={{right: `${codeOpen ? (40/100*width) : 0}px`}} className="button-code">
                {codeOpen && <i class="fa-solid fa-arrow-right"></i> }
                {!codeOpen && <i class="fa-solid fa-arrow-left"></i>}
                {codeOpen ? "Hide Code" : "Show Code"}
            </button>
        </div>
    )
}

export default ShowCode;