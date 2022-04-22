const dummy = () => 1;

const totalLikes = (blogPosts) => {
  var total = 0;
  blogPosts.forEach((arg) => (total += arg.likes));
  return total;
};

module.exports = {
  dummy,
  totalLikes,
};
