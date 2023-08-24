import React, { Component } from "react";
import "./Classstyle.css";

class ClassCompo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            // <div>
            //     <h1>Hello Session</h1>
            //     <h2>Hello World!</h2>
            // </div>
            // <div className="border">
            //     <h1>This is created using Class Component</h1>
            //     <h3>This is done using External CSS</h3>

            // <h3 style={{ color: "blue" }}>This is done using Inline CSS</h3>
            // </div>
            <div>
                <h1>{this.props.datas}</h1>
                <h1>{this.props.datas2.statevar}</h1>
            </div>
        )
    }
}
export default ClassCompo