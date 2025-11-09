
import React from "react";

class UserCardClass extends React.Component{
    constructor(props){
        console.log(`Constructor - Class ${props.name} Component`);
        super(props);
        this.state = {
            count:0
        }
    }

    componentDidMount(){
        //API CALL
        console.log("Component Did Mount - Class Component");
    }
    render(){
        
        const {name, location} = this.props;
        const {count} = this.state;
        
        return (

            <div className="user-card">
                {console.log(`Render - Class ${name} Component`)}
                <h1>Count: {count}</h1>
                <button className="btn btn-primary" onClick={()=>{
                    this.setState({count: count+1});
                }}>Increment Count</button>
                <h1>Name:{name}</h1>
                <h2>Location:{location}</h2>
            </div>
        )
    }
}
export default UserCardClass;
