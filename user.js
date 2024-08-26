// user.js
export async function getUser(username) {
    // Simulating an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 123, name: username });
      }, 1000);
    });
    