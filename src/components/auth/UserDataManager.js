const remoteURL = "http://localhost:5002";

export default {
    getAllUsers() {
        return fetch(`${remoteURL}/users`)
            .then(response => response.json());
    },

    postUser(userObject) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        }).then(response => response.json());
    },

    getUser(id) {
        return fetch(`${remoteURL}/users/${id}`)
            .then(response => response.json());
    },

    checkUsers(email, password) {
        return fetch(`${remoteURL}/users?email=${email}&&password=${password}`)
            .then(response => response.json());
    }
}
