
$(document).ready(function() {

    // --------------------------------------------
    // HOME

    // YouTube
    $.getJSON("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=US&key=AIzaSyBxtJ-g7mQntP7KCUDxVDhuoorOzBXd6j0", function(data) {
        var link;
        var title;
        for (var i = 0; i < 10; i++) {
            link = "https://www.youtube.com/watch?v=" + data.items[i].id;
            title = data.items[i].snippet.title;
            $('#yt_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // CNN
    $.getJSON("https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        var len = Math.min(10, data.articles.length);
        for (var i = 0; i < len; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#cnn_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // Reddit
    $.getJSON("https://www.reddit.com/hot.json?limit=10", function(data) {
        var link;
        var title;
        for (var i = 0; i < 10; i++) {
            link = "https://www.reddit.com" + data.data.children[i].data.permalink;
            title = data.data.children[i].data.title;
            $('#rd_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // --------------------------------------------
 
    // --------------------------------------------
    // ENTERTAINMENT

    // YouTube

    // Reddit

    // BuzzFeed https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898
    $.getJSON("https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        var len = Math.min(10, data.articles.length);
        for (var i = 0; i < len; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#buzzfeed_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });


    // Mashable https://newsapi.org/v1/articles?source=mashable&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898
    $.getJSON("https://newsapi.org/v1/articles?source=mashable&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        var len = Math.min(10, data.articles.length);
        for (var i = 0; i < len; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#mashable_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // TheLadBible https://newsapi.org/v1/articles?source=the-lad-bible&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898
    $.getJSON("https://newsapi.org/v1/articles?source=the-lad-bible&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        var len = Math.min(10, data.articles.length);
        for (var i = 0; i < len; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#theladbible_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });


    // --------------------------------------------

    // --------------------------------------------
    // NEWS

    // CNN

    // BBC https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898
    $.getJSON("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        var len = Math.min(10, data.articles.length);
        for (var i = 0; i < len; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#bbc_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // USA Today https://newsapi.org/v1/articles?source=usa-today&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898
    $.getJSON("https://newsapi.org/v1/articles?source=usa-today&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        var len = Math.min(10, data.articles.length);
        for (var i = 0; i < len; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#usatoday_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // Google News https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898
    $.getJSON("https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        var len = Math.min(10, data.articles.length);
        for (var i = 0; i < len; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#googlenews_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // The Wall Street Journal https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898
    $.getJSON("https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        var len = Math.min(10, data.articles.length);
        for (var i = 0; i < len; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#wsj_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });


    // --------------------------------------------


    // --------------------------------------------
    // SPORTS

    // ESPN https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898
    $.getJSON("https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        var len = Math.min(10, data.articles.length);
        for (var i = 0; i < len; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#espn_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // Sky Sports News https://newsapi.org/v1/articles?source=sky-sports-news&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898
    $.getJSON("https://newsapi.org/v1/articles?source=sky-sports-news&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        var len = Math.min(10, data.articles.length);
        for (var i = 0; i < len; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#skysportsnews_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // The Sports Bible https://newsapi.org/v1/articles?source=the-sport-bible&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898
    $.getJSON("https://newsapi.org/v1/articles?source=the-sport-bible&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        var len = Math.min(10, data.articles.length);
        for (var i = 0; i < len; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#thesportsbible_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });


    // --------------------------------------------

    // --------------------------------------------
    // TECHNOLOGY

    // Engadget https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898
    $.getJSON("https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        var len = Math.min(10, data.articles.length);
        for (var i = 0; i < len; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#engadget_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // Recode https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898
    $.getJSON("https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        var len = Math.min(10, data.articles.length);
        for (var i = 0; i < len; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#recode_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // TechRadar https://newsapi.org/v1/articles?source=techradar&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898
    $.getJSON("https://newsapi.org/v1/articles?source=techradar&sortBy=top&apiKey=4c87f78d4669468c9c4b9462797c5898", function(data) {
        var link;
        var title;
        var len = Math.min(10, data.articles.length);
        for (var i = 0; i < len; i++) {
            link = data.articles[i].url;
            title = data.articles[i].title;
            $('#techradar_table').append("<tr><td>" + (i+1) + "</td><td>" + "<a href=" + link + " target=\"_blank\">" + title + "</a></td></tr>");
        }
    });

    // --------------------------------------------

    // --------------------------------------------
    // ABOUT

    // --------------------------------------------


});
