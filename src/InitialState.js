const initialState = {
    stage: {
            current: 0,
            stage_transitioning: false
    },
    intro: {
            current_scene: 0,
            scene_text: [
                    "The sun sets on the seat of power and automation. Another day of exile. Since the state placed you on its notorious blocklist, you've been denied the basic rights and services of society. Access to currency, sustenance, healthcare gone overnight... it's a death sentence.",
                    "You look to take matters into your own hands. The blocklist itself lies deep within the state's super-network. If you could infiltrate this space, there's a chance you could destroy the list. The brainlink of a patrol officer could present a backdoor into the system.",
                    "With some struggle, you subdue the officer. Heart-pounding, you wrench off his helmet, fumble to splice into his brainlink, and wait for the override to kick in. Finding the blocklist will be one thing - destroying it another. You have your methods but nothing of that caliber. However, there are rumors of a powerful new tech being developed in the state's weapon labs..."
                ],
            scene_transitioning: false,
    },
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
        button_clicked: false,
        button_enabled: true,
        next_button_clicked: false,
        next_button_enabled: true,
        back_button_clicked: false,
        back_button_enabled: true
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


