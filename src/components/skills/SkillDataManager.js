const remoteURL = "http://localhost:5002"

// GET, POST, PUT, or DELETE skills in the database with various arguments and json query parameters
export default {

    getSkills(userId) {
        return fetch(`${remoteURL}/skills/?userId=${userId}`)
            .then(response => response.json());
    },

    getSkillsAndResources(userId) {
        return fetch(`${remoteURL}/skills/?userId=${userId}&&_embed=resources`)
            .then(response => response.json());
    },

    getSkill(id) {
        return fetch(`${remoteURL}/skills/${id}`)
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

    editSkill(editedSkill) {
        return fetch(`${remoteURL}/skills/${editedSkill.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedSkill)
        }).then(response => response.json());
    },

    deleteSkill(id) {
        return fetch(`${remoteURL}/skills/${id}`,
            {
                method: "DELETE"
            }).then(response => response.json());
    },

    checkSkillOwner(skillId, userId) {
        return fetch(`${remoteURL}/skills?id=${skillId}&&userId=${userId}`)
            .then(response => response.json());
    }
    

}

