import API from './API';

const remoteURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&&maxResults=10&type=video&key="

export default {
    getVideos(searchInput) {

        return fetch(`${remoteURL}${API.key}&q=${searchInput}`)
            .then(response => response.json())
    }
}

