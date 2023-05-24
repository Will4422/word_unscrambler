import React from "react";

class ResultsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Results are displayed!</p>
                <p>The results = {this.props.results["title"]}</p>
            </div>
        )
    }
}

export default ResultsContainer;