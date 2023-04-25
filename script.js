let nextPageToken = ""
console.log("hello")
function getVideos(){
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCgi1dmAallk-EgA-l8EjL4Q&maxResults=6&key=AIzaSyBiWWn3tyoq4yLlNQV-e33xEYt2W5YbL5E&pageToken="+nextPageToken)
        .then((result) => {
            return result.json()
            // console.log(result.json())
        }).then((data) => {
            console.log(data)
            let videos = data.items
            nextPageToken= data.nextPageToken
            let videoContainer = document.querySelector(".youtube-container")
            for(video of videos) {
                // <h3>${video.snippet.title}</h3>
                // document.write(video.snippet.title)
                console.log(video);
                videoContainer.innerHTML += `
            <img src = "${video.snippet.thumbnails.high.url}">
            `;
            }
    })
}