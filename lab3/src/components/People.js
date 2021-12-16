import React, { useState } from "react";

function People() {
    const [color, setColor] = useState("red");

    const people = {
    name: "Plai",
    age: 20,
};

const numbers = [10, 20, 30];
const text = (
  <>
    <div>Holle World !!! React {numbers[0] + numbers[2]}</div>
    <h3 className="red">My name is Chaiyapot</h3>
  </>
);

const multiNum = (num) => {
    console.log(num);
    };

return (
    <>
        <p>my name is {People.name} </p>
        <p>I love {color}</p>
        <button 
         onClick={() => {
         setColor("blue");
        }}
       > 
        Change
        </button>
        {text}
        <button onClick={multiNum(5)}>MULTI</button>
    </>
    );
}

export default People;