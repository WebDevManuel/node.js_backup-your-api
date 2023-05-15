import fs from 'node:fs/promises';

const api_url_posts = 'https://jsonplaceholder.typicode.com/posts/1';
const api_url_comments = 'https://jsonplaceholder.typicode.com/posts/1/comments';

/*********************************
      lev1
*********************************/
export const fetchPosts = async () => {
  try {
    const response = await fetch(api_url_posts);
    const posts = await response.json();
    console.log(posts);
    fs.writeFile('./data/posts.json', JSON.stringify(posts, null, 2))
    return posts;
  } catch (error) {
    console.error(error);
  };
};

/*********************************
      lev2
*********************************/
export const fetchComments = async () => {
  try {
    const response = await fetch(api_url_comments)
    const comments = await response.json();
    console.log(comments);
    fs.writeFile('./data/comments.json', JSON.stringify(comments, null, 2))
    return comments;
  } catch (error) {
    console.log(error);
  };
};

