/*
  Callback functions -> Control function calls as per requirement 
  In the below example we are making sure new user is added first
  and then lists all posts but Post thress is also printed
*/

const posts = [
    {title: 'Post One', body: 'This is Post one'},
    {title: 'Post Two', body: 'This is Post Two'}
  ];
  
  
  function getPosts() {
      setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
          output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
      }, 1000);
  }
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            // below code is just to demonstrate resolve and reject 
            // if error = true call, promise is resolved and calls then()
            // change error = true, promise is rejected and calls catch()
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Something went wrong!');
            }

        }, 2000);      
    });
  }
  
//   createPost({ title: 'Post THREE', body: 'This is a post THREE'  })
//   .then(getPosts)
//   .catch(err => console.log(err));

// Promise.all() Demo
const promise1 = Promise.resolve('Hello world'),
      promise2 = 10,
      promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, 'Goodbye');
      });

// for using fetch API response we have to first conver data in json() format
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json());

Promise.all([ promise1, promise2, promise3, promise4 ])
.then(values => {
    console.log(values);
});
