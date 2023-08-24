import { useState } from "react";
import "./styles.css";

// A component with same name & first letter capital
export function Age(props){

    const[age, setAge] = useState(24);

    function increaseAge(){

        setAge(age + 1);
    }

    return (
        <>
            <button className="btn btn-primary button" onClick = {increaseAge} >Increase Age</button>
            <h3 className="display" >Current Age : {age}</h3>
        </>
    );
}


