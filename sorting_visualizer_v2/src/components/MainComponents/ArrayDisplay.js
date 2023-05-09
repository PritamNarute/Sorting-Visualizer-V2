import React from "react";
import { useWindowDimensions } from "../util/windowDimesion";
import "./ArrayDisplay.css";

const ArrayDisplay = ({ elements }) => {
    const { width, height } = useWindowDimensions();
    let maxElement = 0;
    for(var i=0; i<elements.length; i++) {
        if(elements[i].value > maxElement) {
            maxElement = elements[i].value;
        }
    }
    const subtract = width <= 800 ? 350 : 300;
    const barHeight = (height - subtract) / maxElement;
    const maxBarWidth = 50;
    const numBars = elements.length;
    var barWidth = (width-50) / (numBars + (numBars/2));
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
            className="elements"
            style={{
                gap: `${gapWidth}px`,
            }}
        >
            {renderedElements}
        </div>
  );
};

export default ArrayDisplay;
