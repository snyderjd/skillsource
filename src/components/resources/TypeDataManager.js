const remoteURL = "http://localhost:5002"

export default {
    getTypes() {
        return fetch(`${remoteURL}/types`)
            .then(response => response.json())
    }
}