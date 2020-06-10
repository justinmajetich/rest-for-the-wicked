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
            children: [{name: "lobby", needs_key: "lab_badge", usable_items: [{name: "cheese"}]}]
    },
    objective: "init objective",
    request_bar: {
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
            methods_list: {
                    title: "methods",
                    content: [{name: "GET"}, {name: "POST"}, {name: "PUT"}]
            },
            keys_list: {
                    title: "keys",
                    content: [{name: "lab_badge"}]
            },
            items_list: {
                    title: "items",
                    content: [{name: "decoy_bug"}, {name: "email"}]
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