import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";
class About extends Component{

    constructor(props)
    {
        super(props);

        console.log("Parent of About Page.");
    }

    componentDidMount(){
        console.log("About Page ComponentDidMount.")
    }

    render()
    {   
        console.log("Render of About page.")
        return (
          <>
            <h1>This is my FoodZilla App.</h1>
            <h3>Order Delicious Food</h3>
            <UserContext.Consumer>
              {({ loggedInUser }) => <h1 className="font-bold">This is {loggedInUser} and sended from Context Api.</h1>}
            </UserContext.Consumer>
            <hr />
            <UserClass />
          </>
        );
    }

}


// const About = () => {
//     return(
//     <>
//     <h1>This is my FoodZilla App.</h1>
//     <h3>Order Delicious Food</h3>
//     <hr/>
//     <User name={"Aditya Dwivedi"}/>
//     <UserClass name={"Aditya Dwivedi"}/>
//     </>
//     )
// }

export default About;