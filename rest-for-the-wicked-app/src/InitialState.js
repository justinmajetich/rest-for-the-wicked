const initialState = {
    poi: {
            name: "init_poi_name",
            full_path: "/api/init_poi_name",
            description: "init_description",
            spawned_items: [{name: "stapler", description: "shiny red"}, {name: "mug", description: "full of coffee"}],
            usable_items: [{name: "gun", description: "black metal"}],
            needs_key: {name: "keycard", description: "has dr delete's name on it"},
            linked_poi: ["research_wing", "admin_wing"]
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
                    content: ["stapler", "decoy_bug", "deletes_email"]
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