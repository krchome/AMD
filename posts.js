// post.js
import { getUser } from './user.js';
  
export async function getUserPosts(username) {
  const user = await getUser(username);
  
  // Simulating an API call to get posts
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: `${user.name}'s first post` },
        { id: 2, title: `${user.name}'s second post` }
      ]);
    }, 1000);
  });
}