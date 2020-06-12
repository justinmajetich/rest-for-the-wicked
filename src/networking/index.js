import axios from 'axios'
import { store } from '../redux/store'
import { makeRequestBegin, makeRequestSuccess } from '../redux/actions'

export async function makeRequest(request = {method: {}, path: {}, key: {}, item: {}}) {

    // Validate request
    if (validateRequest(request)) {
        store.dispatch(makeRequestBegin());
        
        // Make API request for poi
        const newPOI = await axios({
            method: request.method.name,
            url: "http://localhost:8000/poi/" + request.path.name,
        }).then(async (response) => {

            const data = response.data;
            
            // Get children/spawned_items of new POI
            data.children = await getChildren(data.children);
            data.spawned_items = await getItems(data.spawned_items);

            // Get key/usable_items of children poi
            for (let i = 0; i < data.children.length; i++) {
                data.children[i].needs_key = await getKey(data.children[i].needs_key);
                data.children[i].usable_items = await getItems(data.children[i].usable_items);
            }
            return (data);

        }).catch( error => {
            console.log('NETWORKING ERROR ' + error)
        });

        store.dispatch(makeRequestSuccess(newPOI));
    }
}

async function getChildren(childURLs) {
    const children = []

    if (childURLs) {
        for (let i = 0; i < childURLs.length; i++) {
            children[i] = await axios.get(childURLs[i]).then(response => {
                return (response.data);
            }).catch(error => {
                console.log('NETWORKING ERROR: ' + error);
            });
        }
        return (children);
    }
    return (null);
}

async function getItems(itemURLs) {
    const items = []

    if (itemURLs) {
        for (let i = 0; i < itemURLs.length; i++) {
            items[i] = await axios.get(itemURLs[i]).then(response => {
                return (response.data);
            }).catch(error => {
                console.log('NETWORKING ERROR: ' + error);
            });
        }
        return (items);
    }
    return (null);
}

async function getKey(keyURL) {
    if (keyURL) {
        const key = await axios.get(keyURL).then(response => {
            return (response.data);
        }).catch(error => {
            console.log('NETWORKING ERROR: ' + error);
        });
        return (key);
    }
    return (null);
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
    // Check if path uses items
    if (request.path.usable_items) {
        // Check if present item is valid
        if (request.item && 
            !request.path.usable_items.some(item => item.name === request.item.name)) {
            console.log('You cannot use ' + request.item.name +
                        ' in the ' + request.path.name);
            return false;
        }
    }
    return true;
}