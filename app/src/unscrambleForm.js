import React from 'react';
import Row from 'react-bootstrap/Row';
import './scss/custom.scss';
import 'bootstrap';
import executeGetRequest from './executeGetRequest';

class unscrambleForm extends React.Component {
    constructor(props) {
        super(props);
        this.unscramble = this.unscramble.bind(this);
    }
    
    async unscramble() {
        console.log("WE MADE IT");
        const res = await executeGetRequest();
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
                            <button type="submit">Unscramble!</button>
                            </form>
                        </div>
                    </Row>
                </div>
            </div>
        );
    }
}

export default unscrambleForm;