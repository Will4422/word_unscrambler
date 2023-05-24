import React from 'react';
import Row from 'react-bootstrap/Row';
import './scss/custom.scss';
import 'bootstrap';
import ResultsContainer from './results_container';

class unscrambleForm extends React.Component {
    constructor(props) {
        super(props);
        this.unscramble = this.unscramble.bind(this);
        this.state = {
            displayResults: false,
            results: {},
        }
    }
    
    async unscramble(event) {
        event.preventDefault();
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await res.json();
        this.setState({
            displayResults: true,
            results: data,
        });
    }
    

    render() {
        return(
            <div>
                <div className="container-fluid">
                    <h3 className="text-primary text-center">Word Unscrambler</h3>
                    <Row>
                        <div className="well">
                            <form onSubmit={this.unscramble}>
                            <input></input>
                            <button type='submit'>Unscramble!</button>
                            </form>
                        </div>
                    </Row>
                    {this.state.displayResults && <ResultsContainer results={this.state.results} />}
                </div>
            </div>
        );
    }
}

export default unscrambleForm;