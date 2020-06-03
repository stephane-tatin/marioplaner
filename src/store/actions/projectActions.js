export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        //make async call
        const firestore = getFirestore();
        firestore.collection("projects").add({
            ...project, 
            authorFirstName: "Luigi",
            authorLastName : "Bros",
            authorId : 123,
            createdAt : new Date()
        }).then(() => {
            dispatch({ type : "CREATE_PROJECT", project })}
        ).catch((err) => {
            dispatch({ type: "CREATE_PROJECT_ERROR", err})
        })
    }
}