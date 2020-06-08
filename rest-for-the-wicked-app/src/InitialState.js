const initialState = {
    poi: {
            name: "init_poi_name",
            full_path: "/api/init_poi_name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            contained_items: [],
            usable_items: [],
            linked_poi: []
        },
    objective: "init objective",
    request_bar: [
        {
            method: {
                title: "method",
                tile: {}
            }
        },
        {
            path: {
                title: "path",
                tile: {}
            }
        },
        {
            key: {
                title: "key",
                tile: {}
            }
        },
        {
            item: {
                title: "item",
                tile: {}
            }
        }
    ],
    lists: {
        methods: {
            title: "methods",
            content: ["GET", "POST", "PUT", "DELETE"]
        },
        keys: {
            title: "keys",
            content: ["{lab_badge}", "{keycard}"]
        },
        items: {
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