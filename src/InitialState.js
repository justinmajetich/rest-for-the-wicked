const initialState = {
    poi: {
            name: "api",
            full_path: "/api",
            description: {
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut [lobby] et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisi ut ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    docks: {
                            lobby: {
                                    content: {name: "lobby", needs_key: "lab_badge", usable_items: [{name: "decoy_bug", description: "False entity which can be uploaded into a security system"}]},
                                    docked: true
                            }
                    }
            },
            spawned_items: [{name: "stapler", description: "shiny red"}, {name: "mug", description: "full of coffee"}],
            usable_items: [],
            needs_key: null,
            parent: null,
            children: [{name: "lobby", needs_key: "lab_badge", usable_items: [{name: "cheese"}]}]
    },
    objective: "init objective",
    droppables: {
            receivers: {
                    method_receiver: {
                            title: "method",
                            content: null,
                            is_visible: true
                    },
                    path_receiver: {
                            title: "path",
                            content: null,
                            is_visible: true

                    },
                    key_receiver: {
                            title: "key",
                            content: null,
                            is_visible: false
                    },
                    item_receiver: {
                            title: "item",
                            content: null,
                            is_visible: false
                    },
            },
            lists: {
                    method_list: {
                            title: "methods",
                            docks: {
                                    GET: {
                                            content: {name: "GET"},
                                            is_visible: true
                                    },
                                    POST: {
                                            content: {name: "POST"},
                                            is_visible: true
                                    },
                                    PUT: {
                                            content: {name: "PUT"},
                                            is_visible: true
                                    }
                            }
                    },
                    key_list: {
                            title: "keys",
                            docks: {
                                    lab_badge: {
                                            content: {name: "lab_badge"},
                                            is_visible: true
                                    }
                            }
                    },
                    item_list: {
                            title: "items",
                            docks: {
                                    decoy_bug: {
                                            content: {name: "decoy_bug", description: "False entity which can be uploaded into a security system"},
                                            is_visible: true
                                    },
                                    email: {
                                            content: {name: "email"},
                                            is_visible: true
                                    }
                            }
                    }
            }
    },
    map_nodes: {
            current_node: "",
            lobby: "*****",
            research_wing: "*************",
            labs: "****",
            logs: "****",
            vault: "*****",
            front_desk: "**********",
            admin_wing: "**********",
            records: "*******",
            blacklist: "*********",
            computer: "********",
            offices: "*******",
            dr_delete: "*********",
            lt_glass: "********"
    }
};

export default initialState;