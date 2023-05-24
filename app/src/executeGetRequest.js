async function executeGetRequest() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            return json;
        });
}

export default executeGetRequest;