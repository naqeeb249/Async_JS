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
            
             resolve();
            }else{
                reject('Something went wrong');
            }
            
            }, 2000);
    });
   
    }

    



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

// Using async await

 const postCreate = async()=> {
   await createPost({title:'Post three', body:'this is post three'})
   getPosts();
  
}

postCreate(); 

const postCreateAnddelete = async()=>{
    createPost({title:'Post four', body:'this is post four'});
   getPosts();
    await deletePost();
  getPosts();
      
    
}

postCreateAnddelete();
