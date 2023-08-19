import { useState } from "react";
import "./styles.css";

export function Age(props){

    const[age, setAge] = useState(24);

    function increaseAge(){

        setAge(age + 1);
    }

    return (
        <>
            <button className="button" onClick = {increaseAge} >Increase Age</button>
            <h3 className="display" >Current Age : {age}</h3>
        </>
    );
}


