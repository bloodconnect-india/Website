$(function () {
    var $content = $('#jsonContent');
    var data = {rss_url: 'https://medium.com/feed/@traversymedia'};
    $.get('https://api.rss2json.com/v1/api.json', data, 
    function (response) {
        if (response.status == 'ok') {
            var output = '';
            var count = 0;
            $.each(response.items,
                 function (k, item) {
                     var visibleSm = '';
                     if(item.content.length > 300) {
                        output += '<div class="col-lg-3 col-sm-6 col-md-4 col-sm-12 p-0 mb-4  mx-auto ' + visibleSm + '">';
                        output += '<div class="blog-post mx-auto shadow pb-2"><header>';
                        output += '<h4 class="date hide">' + $.format.date(item.pubDate, "dd MMM") + "</h4>";
                        var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
                        var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
                        var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
                        var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
                        var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
                        if(src.indexOf('https://medium.com/_/stat') != 0)
                            output += '<div class="blog-element"><img class="img-responsive" src="' + src + '" width="250px" height="240px"></div></header>';
                        else
                            output += '<div class="blog-element"><img class="img-responsive" src="./img/event/1.jpg" width="250px" height="240px"></div></header>';
                        output += '<div class="blog-content m-4"><p class="mb-1"><a class="color-dark  bold" href="'+ item.link + '">' + item.title + '</a></p>';
                        output += '<div class="post-meta hide"><span>By ' + item.author + '</span></div>';
                        var yourString = item.description.replace(/<img[^>]*>/g,"");
                        yourString = stripHtml(yourString)
                        var maxLength = 120 // maximum number of characters to extract
                        //trim the string to the maximum length
                        var trimmedString = yourString.substr(0, maxLength);//re-trim if we are in the middle of a word
                        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
                        output += '<p class="description">' + trimmedString + '[...]</p>';
                        output += '<a class="color-main" href="'+item.link+'">Read More</a>'
                        output += '</div></div></div></div>';
                        count = count + 1;
                        console.log(yourString)
                        console.log(stripHtml(yourString))
                        return count < 4;
                     }
                    });
                    $("#skeleton-screen").hide()
                    $content.html(output);
                }});
            });

function stripHtml(html)
{
   var tmp = document.createElement("div");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}