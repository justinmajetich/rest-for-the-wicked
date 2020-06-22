import {
    TO_PATH_RECEIVER, LIST_TO_LIST,
    LIST_TO_RECEIVER,
    RECEIVER_TO_LIST, FROM_PATH_RECEIVER, RECEIVERS_TO_LISTS, ADD_SPAWNED_ITEMS_TO_LISTS
} from '../actions/actionTypes'

export const updateDroppable = (state = {}, action) => {
    const payload = action.payload;

    switch (action.type) {
        case LIST_TO_RECEIVER: {

            // Assign content from list to receiver
            const content = state.lists[payload.listType].docks[payload.contentID];
            // newState.receivers[payload.receiverID].content = newState.lists[payload.listType].docks[payload.contentID].content;
            // newState.lists[payload.listType].docks[payload.contentID].content = null;

            // Create new state with updated content
            const newState = {
                lists: {
                    ...state.lists,
                    [payload.listType]: {
                        ...state.lists[payload.listType],
                        docks: {
                            ...state.lists[payload.listType].docks,
                            [payload.contentID]: null
                        }
                    }
                },
                receivers: {
                    ...state.receivers,
                    [payload.receiverID]: {
                        ...state.receivers[payload.receiverID],
                        content: content
                    }
                }
            };
            return (newState);
        }

        case RECEIVER_TO_LIST: {
            const content = state.receivers[payload.receiverID].content;

            // Create new state with updated content
            const newState = {
                ...state,
                lists: {
                    ...state.lists,
                    [payload.listType]: {
                        ...state.lists[payload.listType],
                        docks: {
                            ...state.lists[payload.listType].docks,
                            [payload.contentID]: content
                        }
                    }
                },
                receivers: {
                    ...state.receivers,
                    [payload.receiverID]: {
                        ...state.receivers[payload.receiverID],
                        content: null,
                    }
                }
            };
            return (newState);
        }

        case TO_PATH_RECEIVER: {    
            // Check if path takes key
            const keyVisibility = !!payload.content.needs_key;

            // Check if method is POST/PUT and path takes item
            let itemVisibility = false;
            if (state.receivers.method_receiver.content &&
                (state.receivers.method_receiver.content.name === "PUT" ||
                state.receivers.method_receiver.content.name === "POST")) {
                itemVisibility = !!payload.content.usable_items.length;
            }

            // Create new state with updated content and visibilities
            const newState = {
                ...state,
                receivers: {
                    ...state.receivers,
                    path_receiver: {
                        ...state.receivers.path_receiver,
                        content: payload.content
                    },
                    key_receiver: {
                        ...state.receivers.key_receiver,
                        is_visible: keyVisibility
                    },
                    item_receiver: {
                        ...state.receivers.item_receiver,
                        is_visible: itemVisibility
                    }
                }
            };
            return(newState);
        }

        case FROM_PATH_RECEIVER: {
            // Remove content from path receiver, hide key/item receivers
            let newState = {
                ...state,
                receivers: {
                    ...state.receivers,
                    path_receiver: {
                        ...state.receivers.path_receiver,
                        content: null
                    },
                    key_receiver: {
                        ...state.receivers.key_receiver,
                        is_visible: false
                    },
                    item_receiver: {
                        ...state.receivers.item_receiver,
                        is_visible: false
                    }
                }
            };

            // Return content from item/key receiver to dock
            for (let type of ["key", "item"]) {
                let listType = type + "_list";
                let receiverType = type + "_receiver";
                console.log(listType)
                console.log(receiverType)
                if (state.receivers[receiverType].content) {
                    const content = state.receivers[receiverType].content;
                    console.log(content)
                    newState = {
                        ...newState,
                        receivers: {
                            ...newState.receivers,
                            [receiverType]: {
                                ...newState.receivers[receiverType],
                                content: null,
                            }
                        },
                        lists: {
                            ...newState.lists,
                            [listType]: {
                                ...newState.lists[listType],
                                docks: {
                                    ...newState.lists[listType].docks,
                                    [content.name]: content
                                }
                            }
                        }
                    };
                }
            }
            return(newState);
        }

        case RECEIVERS_TO_LISTS: {
            // Remove content from path receiver, hide key/item receivers
            let newState = {
                ...state,
                receivers: {
                    ...state.receivers,
                    path_receiver: {
                        ...state.receivers.path_receiver,
                        content: null
                    },
                    key_receiver: {
                        ...state.receivers.key_receiver,
                        is_visible: false
                    },
                    item_receiver: {
                        ...state.receivers.item_receiver,
                        is_visible: false
                    }
                }
            };

            // Return content from item/key/method receiver to dock
            for (let type of ["item", "key", "method"]) {
                let listType = type + "_list";
                let receiverType = type + "_receiver";
                if (state.receivers[receiverType].content) {
                    const content = state.receivers[receiverType].content;
                    newState = {
                        ...newState,
                        receivers: {
                            ...newState.receivers,
                            [receiverType]: {
                                ...newState.receivers[receiverType],
                                content: null,
                            }
                        },
                        lists: {
                            ...newState.lists,
                            [listType]: {
                                ...newState.lists[listType],
                                docks: {
                                    ...newState.lists[listType].docks,
                                    [content.name]: content
                                }
                            }
                        }
                    };
                }
            }
            return(newState);
        }

        case ADD_SPAWNED_ITEMS_TO_LISTS: {
            // Create key docks from spawned keys/items
            const key_docks = state.lists.key_list.docks;
            const item_docks = state.lists.item_list.docks;
            console.log(payload)
            payload.forEach(item => {
                if (item.is_key) {
                    key_docks[item.name] = item;
                } else {
                    item_docks[item.name] = item;
                }
            });

            const newState = {
                ...state,
                lists: {
                    ...state.lists,
                    key_list: {
                        ...state.lists.key_list,
                        docks: key_docks
                    },
                    item_list: {
                        ...state.lists.item_list,
                        docks: item_docks
                    }
                }
            }
            return (newState);
        }

        case LIST_TO_LIST: {
            return(state);
        }

        default: {
            return(state);
        }
    }
}