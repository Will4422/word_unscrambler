function executeGetRequest() {
    fetch('https://will4422.github.io/word_unscrambler/words_alpha.json')
        .then(resp => resp.json())
        .then(json => console.log(JSON.stringify(json)))
    }

export default executeGetRequest;