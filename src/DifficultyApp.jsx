import './styles.css'
import { useState } from 'react';

// A component with same name & first letter capital
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
            <h1 className='heading text-secondary'>Choose the Difficulty</h1>

            <div className="row">
                <div className="left_box">
                    <ul>
                        <li> <button className='btn btn-success' onClick={low} >Low</button> </li>
                        <li> <button className='btn btn-success' onClick={medium} >Medium</button> </li>
                        <li> <button className='btn btn-success' onClick={hard} >Hard</button> </li>
                        <li> <button className='btn btn-success' onClick={insane} >Insane</button> </li>
                    </ul>
                </div>
                <div className="right_box">
                    {diff}
                </div>
            </div>
        </>
    );
}