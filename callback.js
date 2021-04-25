const posts = [
    {title:'Post One' ,body : 'This is post one'},
    {title:'Post two', body:'This is post two'}
] ;

function getPosts(){

    setTimeout(()=>{
        let output = '';

        posts.forEach((post, index) => {
           
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000 );
}

//getPosts();

function createPost(post,){
setTimeout(() => {
posts.push(post);

}, 2000)
}

createPost({title:'Post three', body: 'This is post three'});

function create4thPost(post){
    setTimeout(()=> {
        posts.push(post);
       
    },2000);
}

create4thPost({title:'Post four', body:'this is post four'});


 function getLastEditedTime(callback){
    setTimeout(() =>{
        posts.forEach((post,index) =>{
            post.LastEditedTime = new Date().toLocaleTimeString();
        });
        callback();
       
    },2000);
    
}
getLastEditedTime(getPosts);  
console.log(posts);

