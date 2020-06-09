$(function () {
    // var $content = $('#jsonContent');
    var ourPost = {rss_url: 'https://medium.com/feed/bloodconnect'};
    $.get('https://api.rss2json.com/v1/api.json', ourPost, 
    function (response) {
        console.log(response)
        if (response.status == 'ok') {
            var output = '';
            var count = 0;
            $.each(response.items,
                 function (k, item) {
                     var visibleSm = '';
                     if(item.content.length > 300) {
                        output += '<div class="  mb-4 col-lg-3 col-sm-6 col-md-4  mx-auto ' + visibleSm + '">';
                        output += '<div class="blog-post mx-auto shadow-hover p-2 pb-2"><header>';
                        //output += '<h4 class="date hide">' + $.format.date(item.pubDate, "dd MMM") + "</h4>";
                        var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
                        var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
                        var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
                        var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
                        var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
                        var title = item.title.substr(0,50)
                        if(src.indexOf('https://medium.com/_/stat') != 0)
                            output += '<div class="blog-element"><img class="img-responsive" src="' + src + '" ></div></header>';
                        else
                            output += '<div class="blog-element"><img class="img-responsive" src="./img/event/1.jpg"></div></header>';
                        output += '<div class="blog-content my-4 mx-2"><p class="mb-1"><a class="color-dark  bold" href="'+ item.link + '">' + item.title + '...</a></p>';
                        output += '<div class="post-meta hide"><span>By ' + item.author + '</span></div>';
                        var yourString = item.description.replace(/<img[^>]*>/g,"");
                        yourString = stripHtml(yourString)
                        var maxLength = 50 // maximum number of characters to extract
                        //trim the string to the maximum length
                        var trimmedString = yourString.substr(0, maxLength);//re-trim if we are in the middle of a word
                        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
                        output += '<p class="description hide">' + trimmedString + '[...]</p><div class="post-end">';
                        output += '<div class="d-flex mb-2"><img class="br-25" src="./img/avatar1.png" width="50" height="50" /><div class=""><p class="color-dark fw-6  m-0">'+item.author+'</p><p class="color-grey m-0">Jun 10, 2016</p></div></div>'
                        output += '<a class="color-main text-center" href="'+item.link+'">Read More <i class="fa fa-share"></i></a>'
                        output += '</div></div></div></div></div>';
                        count = count + 1;
                        return count < 8;
                     }
                    });
                    $("#skeleton-screen").hide()
                    // $content.html(output);
                    $("#posts").html(output)
                    // $('#carousel').slick('slickAdd',output);
                }});
 

})          

function stripHtml(html)
{
   var tmp = document.createElement("div");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}