import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(4);
    return (
        <>
            <div>
                <h2>Count in functional compoent is {count}</h2>
                <h2>Count2 is {count2}</h2>
                <h1>Name : {props.name}</h1>
                <h2>Location : </h2>
                <h3>Contact : @aditya</h3>
            </div>
        </>
    )
}

export default User;