const functions = require('firebase-functions');
const admin = require("firebase-admin")
admin.initializeApp(functions.config().firebase)



const createNotification = (notification) => {
    console.log("trying to add notifications")
    return admin.firestore().collection("notifications")
        .add(notification)
        .then(doc => console.log(doc, "notification addded"))

}

exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc => {
        console.log("doc created")
        const project = doc.data()
        const notification = {
            content : "Added a new project",
            user : `${project.authorFirstName} ${project.authorLastName}`,
            time : admin.firestore.FieldValue.serverTimestamp()
        }
    
        return createNotification(notification)
        
    })

exports.userSignedUp = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection("users")
        .doc(user.uid).get().then((doc)=>{
            const newUser = doc.data()

            const notification = {
                content : "Joined the party",
                user : `${newUser.firstName} ${newUser.lastName}`,
                time : admin.firestore.FieldValue.serverTimestamp()
            }
            return createNotification(notification);
        } )
        
});




