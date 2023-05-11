import Modal from "./Modal";
import { useState, useEffect } from "react";
import "./Welcome.css";

const Welcome = () => {
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
		const timeout = setTimeout(() => {
		  setShowWelcome(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);
    return ( 
        <Modal class="modal_top" show= {showWelcome}>  
            <div className="welcome-container">
                <h1 className="welcome-heading"> Sorting Visualizer </h1>
                <p className="welcome-text">Made by Pritam Narute</p>
            </div>
        </Modal>
    )
}
export default Welcome;