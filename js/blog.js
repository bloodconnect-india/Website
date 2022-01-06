function timeSince(date) {
  date = new Date(date);
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

function extractContent(s) {
  var span = document.createElement("span");
  span.innerHTML = s;
  return span.textContent || span.innerText;
}

function getCard(imgUrl, author, publishedAt, title, description, link) {
  if (!imgUrl || imgUrl.length === 0) {
    var match = description.match(/\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/);
    imgUrl = match && match.length >= 2 && !match[1].includes("fonts") ? match[1] : "https://www.bloodconnect.org/img/bc_heart.png";
  }
  description = extractContent(description).substring(0, 250);
  return `
    <div class="col-lg-4 w-12-rem-lg col-md-6 col-sm-12 bg-white shadow card mb-4 p-0">
      <img class="w-100 h-14-rem" src="${imgUrl}" />
      <div class="p-4">
        <p class="f-12">
          published by - <strong class="mr-4 f-12">${author}</strong> ${timeSince(publishedAt)} ago
        </p>
        <h2 class="mt-4 f-20 color-dark h-3-rem">${title}</h2>
        <p class="f-14 h-10-rem color-dark-light text-ellipsis overflow-hidden">
          ${description}...
        </p>
        <button  class="bg-main text-white text-decoration-none border-0 w-100">
          <a href="${link}" class="text-white text-decoration-none px-4 py-2 w-100-link" >Continue Reading</a>
        </button>
      </div>
    </div>
    `;
}

function getBlogs() {
  fetch("https://public-api.wordpress.com/rest/v1.1/sites/bloodconnect23176254.wordpress.com/posts?number=15")
    .then((response) => response.json())
    .then((response) => {
      const blogs = response.posts;
      let htmlToRender = "";
      blogs.forEach((blog) => {
        htmlToRender += getCard(blog.featured_image, blog.author.name, blog.date, blog.title, blog.content, blog.URL);
      });
      document.getElementById("blog-list").innerHTML = htmlToRender;
      document.getElementById("loading").classList.add("hide");
    });
}

getBlogs();
