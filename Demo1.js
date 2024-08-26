// user.js
export async function getUser(id) {
    // Simulated async operation
    return new Promise(resolve => {
      setTimeout(() => resolve({ id, name: `User ${id}` }), 1000);
    });
  }
  
  // posts.js
  import { getUser } from './user.js';
  
  export async function getUserPosts(userId) {
    const user = await getUser(userId);
    // Simulated async operation
    return new Promise(resolve => {
      setTimeout(() => resolve([
        { id: 1, title: `${user.name}'s post` }
      ]), 1000);
    });
  }
  
  // main.js
  import { getUserPosts } from './posts.js';
  
  async function displayUserPosts(userId) {
    const posts = await getUserPosts(userId);
    console.log(posts);
  }
  
  displayUserPosts(1);