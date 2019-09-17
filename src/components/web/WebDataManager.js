import API from './API';

const googleURL = "https://www.googleapis.com/customsearch/v1"

export default {
    getWebResults(searchInput) {
        return fetch(`${googleURL}?key=${API.key}&cx=${API.cx}&q=${searchInput}&num=10`)
            .then(response => response.json());
    }
}



// import API from './API';

// const remoteURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&&maxResults=10&type=video&key="

// export default {
//     getVideos(searchInput) {
//         console.log(`${remoteURL}${API.key}&q=${searchInput}`)

//         return fetch(`${remoteURL}${API.key}&q=${searchInput}`)
//             .then(response => response.json())
//     }
// }