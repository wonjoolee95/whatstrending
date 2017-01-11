
$(document).ready(function() {

    // console.log("YouTube:");
    $.getJSON("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=US&key=AIzaSyBxtJ-g7mQntP7KCUDxVDhuoorOzBXd6j0", function(data) {
        var link;
        var title;
        for (var i = 0; i < 10; i++) {
            link = "https://www.youtube.com/watch?v=" + data.items[i].id;
            title = data.items[i].snippet.title;
            $('#yt_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // console.log("CNN:");
    $.getJSON("https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        for (var i = 0; i < 10; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#cnn_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // console.log("Reddit:");
    $.getJSON("https://www.reddit.com/hot.json?limit=10", function(data) {
        for (var i = 0; i < 10; i++) {
            link = "https://www.reddit.com" + data.data.children[i].data.permalink;
            title = data.data.children[i].data.title;
            $('#rd_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // // console.log("Imgur:");
    // $.getJSON("https://api.imgur.com/3/gallery/hot/viral/0.json", function(data) {
    //     var link;
    //     var title;
    //     for (var i = 0; i < 10; i++) {
    //         link = data.data[i].link;
    //         title = data.data[i].title;
    //         document.getElementById("imgr_" + (i+1)).innerHTML = "<a href=" + link + " target=\"_blank\">" + title + "</a>";
    //     }
    // });

    // var xml = $.parseXML("https://itunes.apple.com/us/rss/topsongs/limit=10/explicit=true/xml"),
    // $xml = $(xml),
    // $test = $xml.find('title');
    // console.log($test.text());

 
});
