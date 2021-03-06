const Blog = require("../models/blog");

const dummy = () => 1;

const totalLikes = (blogPosts) => {
  let total = 0;
  blogPosts.forEach((post) => (total += post.likes));
  return total;
};

const favoriteBlog = (blogPosts) => {
  let mostLikes = {};
  let maxLikes = 0;

  if (blogPosts === {}) {
    return {};
  } else {
    for (let i = 0; i < blogPosts.length; i++) {
      let post = blogPosts[i];
      if (post.likes > maxLikes) {
        mostLikes = post;
        maxLikes = post.likes;
      }
    }

    return {
      title: mostLikes.title,
      author: mostLikes.author,
      likes: mostLikes.likes,
    };
  }
};

const blogsInDb = async () => {
  const blog = await Blog.find({});
  return blog.map((blog) => blog.toJSON());
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  blogsInDb,
};
