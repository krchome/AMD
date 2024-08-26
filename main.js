// main.js
  import { getUserPosts } from './posts.js';
  
  async function displayUserPosts(username) {
    try {
      const posts = await getUserPosts(username);
      console.log(`Posts for ${username}:`, posts);
    } catch (error) {
      console.error('Error in fetching posts:', error);
    }
  }
  
  displayUserPosts('Alice');