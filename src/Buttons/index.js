import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

    <div className="list__textButtons">
        {tasks.lenght > 0 && (
            <>
                <button className="list__textButtonsButton">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className="list__textButtonsButton"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;