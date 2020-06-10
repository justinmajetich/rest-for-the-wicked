import {LIST_TO_LIST, LIST_TO_RECEIVER, RECEIVER_TO_LIST} from "../actions/actionTypes";

export const updateDroppable = (state = {}, action) => {
    const payload = action.payload;
    const newState = {...state};

    switch (action.type) {
        case LIST_TO_RECEIVER: {
            // Assign content from list to receiver
            newState.receivers[payload.receiverID].content = newState.lists[payload.listID].docks[payload.contentID].content;
            // Remove content from list
            newState.lists[payload.listID].docks[payload.contentID].content = null;
            return (newState);

            // const content = state.droppables.lists[payload.listID].docks[payload.contentID].content;
            // state.lists[payload.listID].docks[payload.contentID].content = null;

            // Create new state with updated content
            // const newState = {
            //     ...state,
            //     lists: {
            //         ...state.lists,
            //         [payload.listID]: {
            //             ...state.lists[payload.listID],
            //             docks: {
            //                 ...state.lists[payload.listID].docks,
            //                 [payload.contentID]: {
            //                     ...state.lists[payload.listID].docks[payload.contentID],
            //                     content: null,
            //                 }
            //             }
            //         }
            //     },
            //     receivers: {
            //         ...state.receivers,
            //         [payload.receiverID]: {
            //             ...state.receivers[payload.receiverID],
            //             content: content,
            //         }
            //     }
            // };
        }

        case RECEIVER_TO_LIST: {
            const content = state.droppables.receivers[payload.receiverID].content;

            // Create new state with updated content
            const newState = {
                ...state,
                lists: {
                    ...state.lists,
                    [payload.listID]: {
                        ...state.lists[payload.listID],
                        docks: {
                            ...state.lists[payload.listID].docks,
                            [payload.contentID]: {
                                ...state.lists[payload.listID].docks[payload.contentID],
                                content: content,
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

        case LIST_TO_LIST: {
            return(state);

        }

        default: {
            return(state);
        }
    }
}