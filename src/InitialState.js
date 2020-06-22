const initialState = {
    poi: {
            name: "api_headquarters",
            description: {
                    text: "As the simulation materializes within your visual cortex, you find yourself on a vast lawn. Rising before you is a monolith of polished, white concrete, notched with an even grid of black glass windows. There's a breeze you can almost feel, and the familiar tingling sensation of simulated embodiment, like a limb that's fallen asleep. At the foot of the building, a singular entrance leads to a [lobby] .",
                    alt_text: null,
                    docks: {
                            lobby: {
                                    content: {
                                        name: "lobby",
                                        description: "The lobby is still and sparse, save a grid of benches and an empty which, raised on platform, looks more like a judge's bench. To your left, there is a corridor labelled [research_wing] . On the right, another corridor [admin_wing] .",
                                        parent: null,
                                        needs_key: null,
                                        full_path: "/lobby",
                                        spawned_items: [],
                                        usable_items: [],
                                        children: [
                                            "http://localhost:8000/poi/research_wing/",
                                            "http://localhost:8000/poi/desk",
                                            "http://localhost:8000/poi/admin_wing/"
                                        ]
                                    },
                                    docked: true
                            }
                    },
                    is_visible: true
            },
            spawned_items: [],
            usable_items: [],
            needs_key: null,
            parent: null,
            children: [{name: "lobby", usable_items: null}]
    },
    transition_is_active: false,
    button: {
        request_button_clicked: false,
        request_button_enabled: true
    },
    invalid_request_message: "",
    objective: "access research_wing",
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
        paths: {
                current_path: "",
                api_headquarters: {
                        name: "api_headquarters",
                        is_alt: false
                },
                lobby: {
                        name: "*****",
                        is_alt: false
                },
                research_wing: {
                        name: "*************",
                        is_alt: false
                },
                weapon_lab: {
                        name: "**********",
                        is_alt: false
                },
                logs: {
                        name: "****",
                        is_alt: false
                },
                vault: {
                        name: "*****",
                        is_alt: false
                },
                desk: {
                        name: "****",
                        is_alt: false
                },
                admin_wing: {
                        name: "**********",
                        is_alt: false
                },
                records: {
                        name: "*******",
                        is_alt: false
                },
                blacklist: {
                        name: "*********",
                        is_alt: false
                },
                computer: {
                        name: "********",
                        is_alt: false
                },
                offices: {
                        name: "*******",
                        is_alt: false
                },
                dr_delete: {
                        name: "*********",
                        is_alt: false
                },
                lt_glass: {
                        name: "********",
                        is_alt: false
                }
    }
};

export default initialState;


