import UserCard from "./Usercard";
import UserCardClass from "./Usercardclass";
import { Component } from "react";

class About extends Component {

    constructor(props) {
        console.log("Constructor - About Component");
        super(props);
    }

    componentDidMount() {
        //API CALL
        console.log("Component Did Mount - About Component");
    }
    render() {
        console.log("Render - About Component");
         return(
        <><div className="about-us-container">
            <h1>This is About Us Page</h1>
            <h2>This is my first React Project</h2>
            <h3>My name is Mohamed Natharsha</h3>
            <h3>I am learning React</h3>
            <h3>I am doing this course in 2025</h3>
            <h3>This course is very good and easy to understand</h3>
            <h3>Thank you for visiting my website</h3>

            
            <UserCardClass name={"Mohamed Natharsha"} location={"India"}/>
            <UserCardClass name={"John Doe"} location={"USA"}/>
            <UserCardClass name={"Jane Smith"} location={"UK"}/>
        </div>
      
        </>
    )
    }
}


export default About;