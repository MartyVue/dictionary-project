import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <h2>{props.results.wrod}</h2>
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaing={meaning} />
                        </div>
                    );
                })}    
            </div>
        );
    } else {
        return null;
    }
}