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
            scrambledString: "",
            scrambledStringLength: 0,
            possibleSolutions: []
        }
    }
    
    async unscramble(event) {
        event.preventDefault();
        // fetch the json file data
        const res = await fetch('https://will4422.github.io/word_unscrambler/words_alpha.json');
        const data = await res.json();

        // Read the form data
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const scrambledString = formJson["inputString"];

        // find appropriate potentially matching strings
        const scrambledStringList = scrambledString.split('');
        const length = scrambledString.length;
        const allPossibleWordsByLength = Object.values(Object.values(data[length]));
        const possibleSolutions = [];

        // search through possible words by length of words
        allPossibleWordsByLength.forEach(word => {
            let shouldInclude = true;
            let wordUnderInvestigation = Object.keys(word)[0];
            let wordUnderInvestigationList = wordUnderInvestigation.split('');
            let sorted1 = scrambledStringList.sort();
            let sorted2 = wordUnderInvestigationList.sort();
            for (let i = 0; i < length; i++) {
                if (sorted1[i] !== sorted2[i]) {
                    shouldInclude = false;
                }
            }
            if (shouldInclude === true) {
                possibleSolutions.push(wordUnderInvestigation);
            }
        });
        debugger;


        this.setState({
            displayResults: true,
            results: data,
            scrambledString: scrambledString,
            scrambledStringLength: length,
            possibleSolutions: possibleSolutions
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
                                <label>
                                    Your letters: <input name="inputString" autoFocus={true}/>   
                                </label>
                            <button type='submit'>Unscramble!</button>
                            </form>
                        </div>
                    </Row>
                    {this.state.displayResults && this.state.possibleSolutions.map(solution => (<p>{solution}</p>))}
                </div>
            </div>
        );
    }
}

export default unscrambleForm;