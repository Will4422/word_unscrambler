import React from "react";

/* 
    How do I use the this.props.results object?
        this.props.results is the entire json object, it just contains keys 1 - 99 and each key has a corresponding value
            which is an array
        this.props.results[1] should represent the length of the string that we want to investigate
            so this is the object that we want to iterate through
*/

class ResultsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Results are displayed!</p>
                {/* <p>Object.keys(Object.keys(this.props.results)) = {Object.keys(this.props.results)}</p>
                <p>Object.keys(Object.keys(this.props.result[1])) = {Object.keys(this.props.results[1])}</p>
                <p>Object.keys(Object.keys(this.props.result[2])) = {Object.keys(this.props.results[2])}</p> */}
                <p>The results = {this.props.scrambledStringProp}</p>
            </div>
        )
    }
}

export default ResultsContainer;