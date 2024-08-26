function getCoffee() {
    return new Promise((resolve) => {
      console.log("Starting to make coffee...");
      setTimeout(() => {
        console.log("Coffee is ready!");
        resolve("Here's your coffee");
      }, 2000);
    });
  }
  
  getCoffee().then((result) => {
    console.log(result);
  });