const initialState = {
    poi: {
            name: "api_headquarters",
            full_path: "/api",
            description: {
                    text: "As the simulation materializes within your visual cortex, you find yourself on a vast lawn. Rising before you is a monolith of polished, white concrete, notched with an even grid of black glass windows. There's a breeze you can almost feel, and the familiar tingling sensation of simulated embodiment, like a limb that's fallen asleep. At the foot of the building, a singular entrance leads to a [lobby] .",
                    docks: {
                            lobby: {
                                    content: {
                                        name: "lobby",
                                        description: "The lobby is still and sparse, save a grid of benches and an empty which, raised on platform, looks more like a judge's bench. To your left, there is a corridor labelled [research_wing] . On the right, another corridor [admin_wing] .",
                                        parent: null,
                                        needs_key: null,
                                        full_path: "/lobby",
                                        spawned_items: [
                                                {
                                                        name: "keycard",
                                                        description: "A keycard to access the research wing.",
                                                        spawn_poi: "http://localhost:8000/poi/lobby/",
                                                        use_poi: "http://localhost:8000/poi/research_wing/",
                                                        is_key: true
                                                },
                                                {
                                                        name: "crowbar",
                                                        description: "A tool or a weapon?",
                                                        spawn_poi: "http://localhost:8000/poi/lobby/",
                                                        use_poi: "http://localhost:8000/poi/admin_wing/",
                                                        is_key: false
                                                }                                                    
                                        ],
                                        usable_items: [],
                                        children: [
                                            "http://localhost:8000/poi/research_wing/",
                                            "http://localhost:8000/poi/admin_wing/"
                                        ]
                                    },
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
    invalid_request_message: "",
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
                                    GET: {name: "GET"},
                                    POST: {name: "POST"},
                                    PUT: {name: "PUT"}
                            }
                    },
                    key_list: {
                            title: "keys",
                            docks: {}
                    },
                    item_list: {
                            title: "items",
                            docks: {
                                    decoy_bug: {name: "decoy_bug", description: "False entity which can be uploaded into a security system"}
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