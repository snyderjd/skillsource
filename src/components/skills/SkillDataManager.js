const remoteURL = "http://localhost:5002"

export default {

    getSkills(userId) {
        return fetch(`${remoteURL}/skills/?userId=${userId}`)
            .then(response => response.json());
    },

    postSkill(skillObject) {
        return fetch(`${remoteURL}/skills`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(skillObject)
        }).then(response => response.json());
    },

    deleteSkill(id) {
        return fetch(`${remoteURL}/skills/${id}`,
            {
                method: "DELETE"
            }).then(response => response.json());
    }

}

