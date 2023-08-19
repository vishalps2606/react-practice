import './styles.css'
import { useState } from 'react';

export function DifficutyApp(props){

    const[diff, setDiff] = useState("No Difficulty Set!");

    function low(){
        setDiff("Difficulty is low");
    }
    function medium(){
        setDiff("Difficulty is medium");
    }
    function hard(){
        setDiff("Difficulty is hard");
    }
    function insane(){
        setDiff("Difficulty is insane");
    }

    return (
        <>
            <h1 className='heading'>Choose the Difficulty</h1>

            <div className="row">
                <div className="left_box">
                    <ul>
                        <li> <button onClick={low} >Low</button> </li>
                        <li> <button onClick={medium} >Medium</button> </li>
                        <li> <button onClick={hard} >Hard</button> </li>
                        <li> <button onClick={insane} >Insane</button> </li>
                    </ul>
                </div>
                <div className="right_box">
                    {diff}
                </div>
            </div>
        </>
    );
}