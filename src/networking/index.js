import axios from 'axios'

export function makeRequest(request = {method: {}, path: {}, key: {}, item: {}}) {
    console.log(request)

    // Validate request
    if (validateRequest(request)) {
        // Make API request
        axios({
            method: request.method.name,
            url: "http://localhost:8000/poi/" + request.path.name,
        }).then(response => {
            console.log(response.data);
        });
    }
}

function validateRequest(request) {
    // Check if method is present
    if (!request.method) {
        console.log('You must use a method.');
        return false; 
    }
    // Check if path is present
    if (!request.path) {
        console.log('You must select a path.');
        return false;
    }
    // Check if path needs key
    if (request.path.needs_key) {
        // Check if key is present
        if (!request.key) {
            console.log('Access denied. Please use a key.');
            return false;
        }
        // Check if present key is valid
        if (request.key === request.path.needs_key) {
            console.log('Access denied. Invalid key.');
            return false;
        }
    }
    // Check if path uses key
    if (request.path.usable_items) {
        // Check if present item is valid
        if (request.item && 
            !request.path.usable_items.some(item => item === request.item)) {
            console.log('You cannot use ' + request.item.name +
                        ' in the ' + request.path.name);
            return false;
        }
    }
    return true;
}

function parseResponse() {

}