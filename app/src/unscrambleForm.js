import React from 'react';
import './scss/custom.scss';
import 'bootstrap';

class unscrambleForm extends React.Component {
    constructor(props) {
        super(props);
        this.unscramble = this.unscramble.bind(this);
        this.state = {
            displayResults: false,
            results: {},
            possibleSolutions: [],
            emptyResults: false
        }
    }
    
    async unscramble(event) {
        event.preventDefault();
        // fetch the json file data
        const res = await fetch('https://will4422.github.io/json_storage/words_alpha.json');
        const data = await res.json();

        // Read the form data
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const scrambledString = formJson["inputString"].trim().toLowerCase(); // TODO: get rid of spaces, turn to lower case
        if (scrambledString === "") {
            alert("Please enter at least one letter");
            this.setState({
                displayResults: false
            })
            return;
        }

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
            debugger;
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

        if (possibleSolutions.length === 0) {
            this.setState({
                emptyResults: true,
                displayResults: true,
                possibleSolutions: []
            })
        } else {
            this.setState({
                emptyResults: false,
                displayResults: true,
                results: data,
                possibleSolutions: possibleSolutions
            });
        }
    }
    

    render() {
        return(
            <div>
                <div className="container-fluid">
                    <div className='row'>
                        <h3 className="text-primary text-center" id='title'>Word Unscrambler</h3>
                    </div>
                    <div className="row">
                    <div className="col-sm-2"></div> {/* Left column */}
                    <div className="col-sm-8"> {/* Middle column */}
                        <div className="well container">
                            <form onSubmit={this.unscramble}>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                                        <label>
                                        Your letters: <input name="inputString" autoFocus={true} />
                                        </label>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                                        <button type="submit" id='unscramble-button'>Unscramble!</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-2"></div> {/* Right column */}
                    </div>
                        <div className='row'>
                        <div className="col-sm-2"></div> {/* Left column */}
                        <div className="col-sm-8"> {/* Middle column */}
                            {(this.state.displayResults && this.state.emptyResults) && <p style={{color: "red"}}>No words can be formed from these letters!</p>}
                            {this.state.displayResults && this.state.possibleSolutions.map(solution => (<p>{solution}</p>))}
                        </div>
                        <div className="col-sm-2"></div> {/* Left column */}    
                    </div>
                </div>
            </div>
        );
    }
}

export default unscrambleForm;