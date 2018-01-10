import React from 'react';
import citations from '../citations';
import Citation from './Citation';

class App extends React.Component {

    state = {
        citation: 'coucou',
        auteur: 'bla'
    };

    componentWillMount() {
        this.genererCitation();
    }

    genererCitation = event => {
        const keyArray = Object.keys(citations);
        const randomKey = keyArray[Math.floor(Math.random() *keyArray.length)];
        if (this.state.citation === citations[randomKey].citation) {
            this.genererCitation();
            return;
        }
        this.setState(citations[randomKey]);
    };

    render() {
        console.log(citations);
        return (
            <div>
                <Citation details={this.state} />
                <button onClick={e => this.genererCitation(e)} >Une autre citation!</button>
                </div>
        )
    }
}

export default App;