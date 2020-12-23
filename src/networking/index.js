import axios from 'axios'
import { store } from '../redux/store'
import { makeRequestBegin, makeRequestSuccess, receiversToLists, addSpawnedItemsToLists, setInvalidRequestMessage, setIsAltTrue, updateObjective, addDeleteMethod, updateToOutroStage } from '../redux/actions'

export async function makeRequest(request = {method: {}, path: {}, key: {}, item: {}}) {

    const state = store.getState();
    const objectivesByRoom = {
        "research_wing": 1,
        "vault": 2
    }

    // Validate request
    if (validateRequest(request)) {

        // Set current POI description to alt if item was obtained
        if (state.poi.spawned_items.length) {
            setTimeout(() => { store.dispatch(setIsAltTrue(state.poi.name)) }, 2000);
        }

        store.dispatch(makeRequestBegin());

        // Assign request url based on development or production environment
        const url = process.env.NODE_ENV === 'development' ? 
                        "http://localhost:8000/poi/" : 
                        "/poi/";
        
        // Make API request for POI
        const newPOI = await axios({
            method: 'GET',
            url: url + request.path.name,
        }).then(async (response) => {

            const data = response.data;

            // Get children/spawned_items of new POI
            data.children = await getChildren(data.children);
            data.spawned_items = await getItems(data.spawned_items);

            // Get parent POI
            data.parent = await getParent(data.parent);

            // Get key and usable items of parent POI
            if (data.parent)
            {
                data.parent.needs_key = await getKey(data.parent.needs_key);
                data.parent.usable_items = await getItems(data.parent.usable_items);
            }

            // Get key/usable_items of children POI
            for (let i = 0; i < data.children.length; i++) {
                data.children[i].needs_key = await getKey(data.children[i].needs_key);
                data.children[i].usable_items = await getItems(data.children[i].usable_items);
            }

            return (data);

        }).catch( error => {
            console.log('NETWORKING ERROR ' + error)
        });

        // Dispatch new POI object and request type to update story and path modules
        store.dispatch(makeRequestSuccess(newPOI, request.method.name));

        // Return request elements to docks
        setTimeout(() => { store.dispatch(receiversToLists()) }, 4000);

        // If POI spawns items/keys, add to respective lists
        if (newPOI.spawned_items) {
            setTimeout(() => { store.dispatch(addSpawnedItemsToLists(newPOI.spawned_items)) }, 4000);
        }

        // If room discovery moves objective forward and room has not already been visited
        if (newPOI.name in objectivesByRoom && state.objective.current < objectivesByRoom[newPOI.name])
        {
            store.dispatch(updateObjective());

            if (newPOI.name === "vault")
            setTimeout(() => { store.dispatch(addDeleteMethod()) }, 4000);
        }
    }
}

// Functions for nested requests
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

async function getParent(parentURL) {
    if (parentURL) {
        const parent = await axios.get(parentURL).then(response => {
            return (response.data);
        }).catch(error => {
            console.log('NETWORKING ERROR: ' + error);
        });
        return (parent);
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
        store.dispatch(setInvalidRequestMessage(
            'You must choose a method.'
        ));
        return false; 
    }
    // Check if path is present
    if (!request.path) {
        store.dispatch(setInvalidRequestMessage(
            'You must select a path.'
        ));
        return false;
    }

    // Check if path needs key
    if (request.path.needs_key) {
        // Check if key is present
        if (!request.key) {
            store.dispatch(setInvalidRequestMessage(
                'Access denied. Please use a key.'
            ));
            return false;
        }

        console.log("key passed is " + request.key.name + "\n" +
        "key need is " + request.path.needs_key.name + ", and they are equal (" +
        (request.key.name === request.path.needs_key.name) + ").");

        // Check if present key is valid
        if (request.key.name !== request.path.needs_key.name) {
            store.dispatch(setInvalidRequestMessage(
                'Access denied. Invalid key.'
            ));
            return false;
        }
    }
    // Check if method is POST/PUT
    if ((request.method.name === 'POST' || request.method.name === 'PUT')) {
        // Check if path is POST/PUT-able (a.k.a. receives an item)
        if (!request.path.usable_items.length) {
            store.dispatch(setInvalidRequestMessage(
                'You cannot make a ' + request.method.name + ' request to the ' + request.path.name + '.'
            ));
            return false;
        }
        // Check if item is present
        if (!request.item) {
            store.dispatch(setInvalidRequestMessage(
                'You must pass an item to complete a ' + request.method.name + ' request.'
            ));
            return false;
        }
        // Check if present item is valid
        if (request.item && 
            !request.path.usable_items.some(item => item.name === request.item.name)) {
                store.dispatch(setInvalidRequestMessage(
                    'You cannot use a ' + request.item.name + ' in the ' + request.path.name + '.'
                ));
            return false;
        }
    }

    // If DELETE method is being used on "blacklist" POI
    if (request.method.name === "DELETE") {
        if (request.path.name === "blacklist") {
            store.dispatch(updateToOutroStage());
            return false;
        }
        else {
            store.dispatch(setInvalidRequestMessage(
                'You cannot DELETE the ' + request.path.name + '.'
            ));
            return false;
        }
    }
    
    return true;
}