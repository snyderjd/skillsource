const remoteURL = "http://localhost:5002"

export default {

    getSkillAndResources(skillId) {
        return fetch(`${remoteURL}/skills/${skillId}?_embed=resources`)
            .then(response => response.json());
    },

    getResources(skillId) {
        return fetch(`${remoteURL}/resources/?skillId=${skillId}&&_expand=type`)
            .then(response => response.json());
    },

    getResource(id) {
        return fetch(`${remoteURL}/resources/${id}`)
            .then(response => response.json());
    },

    saveResource(resourceObject) {
        return fetch(`${remoteURL}/resources`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(resourceObject)
        }).then(response => response.json());
    },

    deleteResource(id) {
        return fetch(`${remoteURL}/resources/${id}`, {
            method: "DELETE"
        }).then(response => response.json());
    },

    editResource(editedResource) {
        return fetch(`${remoteURL}/resources/${editedResource.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedResource)
        }).then(response => response.json());
    }

}