
const blogs = [
    {user:"user1", comment:"comment1", image:"image1"},
    {user:"user2", comment:"comment2", image:"image2"},
    {user:"user3", comment:"comment3", image:"image3"},
    {user:"user4", comment:"comment4", image:"image4"},
    
]

const showBlogs = () => {
    
    blogs.map((blog) =>{
        console.log(`${blog.user} tarafından "${blog.comment}" yorumlu "${blog.image}" linki olan görsel paylaşıldı.`)
    });
}


const addBlog = (blog) =>{
    const promise1 = new Promise((resolve, reject) =>{
        blogs.push(blog);
        resolve(blogs);
        //reject("Bir hata oluştu");
    });

    return promise1;

    
}




async function makeTimeline() {
    try {
        await addBlog({user:"user5", comment:"comment5", image:"image5"});
        showBlogs();
    } catch (error) {
        console.log(error)
    }
};
makeTimeline();