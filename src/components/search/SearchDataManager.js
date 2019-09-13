const remoteURL = "http://localhost:5002"

export default {
    searchSkills(input) {
        return fetch(`${remoteURL}/skills/?q=${input}`)
            .then(response => response.json());
    }
}