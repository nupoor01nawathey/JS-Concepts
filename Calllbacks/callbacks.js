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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({title: 'Post three', body: 'this is post three'}, getPosts);
