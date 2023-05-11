import React from "react";
import "./ArrayDisplay.css";

const ArrayDisplay = ({ elements, codeOpen, width, height}) => {
    let maxElement = 0;
    for(var i=0; i<elements.length; i++) {
        if(elements[i].value > maxElement) {
            maxElement = elements[i].value;
        }
    }
    let subtract = width <= 800 ? 350 : 300;
    if(codeOpen === true){
        width = (60/100*width);
    }
    const barHeight = (height - subtract) / maxElement;
    const maxBarWidth = 50;
    const numBars = elements.length;
    var barWidth = (width-20) / (numBars + (numBars/2));
    var gapWidth = barWidth/2;
    if(barWidth>maxBarWidth) {
        barWidth=maxBarWidth;
        gapWidth=maxBarWidth/2;
    }
    var fontSize = barWidth / 2 > 16 ? 16 : barWidth / 2.5;
    const renderedElements = elements.map((element, index) => (
        <div className="element-container" style={{width: `${barWidth}px`}}>
            <p className="element-value element-value-radius" style={{fontSize:`${fontSize}px`, backgroundColor: `${element.color}`}}>{element.value.toString()}</p>
            <div
                key={index}
                className="element"
                style={{
                    backgroundColor: `${element.color}`,
                    height: `${element.value * barHeight}px`,
                    width: `${barWidth}px`,
                }}>
                    {/*  */}
            </div>
            <p className="element-value index-value-radius" style={{fontSize:`${fontSize}px`, backgroundColor: `${element.color}`}}>{index.toString()}</p> 
        </div>
    ));

    return (
        <div
            className={`elements ${codeOpen ? "elements_showCode" : "elements_not_showCode"}`}
            style={{
                gap: `${gapWidth}px`,
            }}
        >
            {renderedElements}
        </div>
  );
};

export default ArrayDisplay;
