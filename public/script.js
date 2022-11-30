$(document).ready(function(){

var API_KEY = "AIzaSyDZBN0VKEEkLe5fM0-sXVpciYmTz4_qbAU";

var video = ''



$("#form").submit(function(event){
    event.preventDefault()

    var search = $("#search").val()
    
    videoSearch(API_KEY,search,15)
})

function videoSearch(key,search,maxResults){
    $("#videos").empty()
    $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults="+ maxResults 
    + "&q=" + search, function(data){
        console.log(data)
        data.items.forEach(item => {
            video = `
                <iframe width="320" height = "215" src = "http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>

            `
            $("#videos").append(video)
            
        });
        
    }
    )
}
});