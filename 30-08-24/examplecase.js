function getTotalLikes(user){
  const totalLikes=user.blogs.reduce((total,blog)=>{
    return (total+=blog.likes);
  },0);
  return totalLikes;
}

function getMostPopularBlog(user){
  const maxLikes=user.blogs.reduce(
    (max,blog,index)=>{
      if(blog.likes>max.likes){
        return {
          index:index,
          likes:blog.likes,
        };
      }
      else{
        return max;
      }
    },
    {index:undefined,likes:0},
  );
  const topBlog=user.blogs[maxLikes.index];
  return topBlog;
}

const getMinLikes=(user)=>{
  let minLikes=0;
  minLikes=100;
  return minLikes;
};
module.exports={getTotalLikes,getMostPopularBlog,getMinLikes};