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
    }, 2000 );
}

 function createPost(post){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){
            updateLastUserActivityTime();
             resolve();
            }else{
                reject('Something went wrong');
            }
            
            }, 2000);
    });
   
    }

    
createPost({title:'Post three', body:'this is post three'}).then(getPosts);


function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.pop();
            if(posts.length === 0) reject('array is empty');
            else 
            resolve();
           
        },2000);
    });
}

// create and delete at same time
/* function deleteP(){
    return new Promise((resolve, reject) =>{
        posts.pop();
        if(posts.length === 0) reject('array is empty');

        else
        resolve();

    } );
} */


createPost({title:'Post four', body:'this is post four'}).then(getPosts).then(deletePost).then(getPosts);


//createPost({title:'post five', body:'this is post five'}).then(getPosts).then(deleteP).then(getPosts);


//promise.all

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve,2000,'Good Bye');
});

//Promise.all([promise1, promise2, promise3]).then(values => console.log(values))


function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            resolve(`last updated at ${new Date().toLocaleString()}`);
        },2000)
    });
}



 setTimeout(()=>
{
    console.log(posts);
    updateLastUserActivityTime().then((message) => console.log(message));
},2000) 



setTimeout(()=>
{
    deletePost();
    console.log(posts);
    
},2000) 