import {
    TO_PATH_RECEIVER, LIST_TO_LIST,
    LIST_TO_RECEIVER,
    RECEIVER_TO_LIST, FROM_PATH_RECEIVER
} from '../actions/actionTypes'

export const updateDroppable = (state = {}, action) => {
    const payload = action.payload;

    switch (action.type) {
        case LIST_TO_RECEIVER: {

            // Assign content from list to receiver
            const content = state.lists[payload.listType].docks[payload.contentID].content;
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
                            [payload.contentID]: {
                                ...state.lists[payload.listType].docks[payload.contentID],
                                content: null,
                            }
                        }
                    }
                },
                receivers: {
                    ...state.receivers,
                    [payload.receiverID]: {
                        ...state.receivers[payload.receiverID],
                        content: content,
                    }
                }
            };
            return (newState);
        }

        case RECEIVER_TO_LIST: {
            console.log(payload)
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
                            [payload.contentID]: {
                                ...state.lists[payload.listType].docks[payload.contentID],
                                content: content,
                            }
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

        case LIST_TO_LIST: {
            return(state);
        }

        case TO_PATH_RECEIVER: {
            // Check if path takes item/key
            const keyVisibility = !!payload.content.needs_key;
            const itemVisibility = !!payload.content.usable_items;

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
            for (let type of ["item", "key"]) {
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
                                    [content.name]: {
                                        ...newState.lists[listType].docks[content.name],
                                        content: content
                                    }
                                }
                            }
                        }
                    };
                }
            }
            return(newState);
        }

        default: {
            return(state);
        }
    }
}