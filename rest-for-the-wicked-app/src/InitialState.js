const initialState = {
    poi: {
            name: "api",
            full_path: "/api",
            description: {
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut [lobby] et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisi ut ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    embeds: {
                            lobby_embed: {
                                    name: "lobby",
                                    docked: true
                            }
                    }
            },
            spawned_items: [{name: "stapler", description: "shiny red"}, {name: "mug", description: "full of coffee"}],
            usable_items: null,
            needs_key: null,
            parent: null,
            children: [{name: "research_wing"}, {name: "admin_wing"}]
    },
    objective: "init objective",
    request_bar: {
            method_receiver: {
                    title: "method",
                    content: null
            },
            path_receiver: {
                    title: "path",
                    content: null
            },
            key_receiver: {
                    title: "key",
                    content: null
            },
            item_receiver: {
                    title: "item",
                    content: null
            },
    },
    lists: {
            methods_list: {
                    title: "methods",
                    content: ["GET", "POST", "PUT", "DELETE"]
            },
            keys_list: {
                    title: "keys",
                    content: ["{lab_badge}", "{keycard}"]
            },
            items_list: {
                    title: "items",
                    content: ["decoy_bug", "deletes_email"]
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