const remoteURL = "http://localhost:5002"

export default {

    getSkillAndResources(skillId) {
        return fetch(`${remoteURL}/skills/${skillId}?_embed=resources`)
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
    }

}