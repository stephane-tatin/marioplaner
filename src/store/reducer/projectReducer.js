const initState = {
    projects : [
        {id : "1", title: "help me find Peach", content : "Minim elit sit voluptate ipsum elit do id ad tempor nostrud in labore nulla mollit." },
        {id : "2", title: "help me find Toad", content : "Amet culpa nostrud nisi incididunt." },
        {id : "3", title: "help me find Yoshi", content : "Laboris deserunt pariatur officia elit ex." },
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case "CREATE_PROJECT":
            console.log("created project", action.project)
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("create project error", action.err)
            return state;
        default : 
            return state
        }
}

export default projectReducer