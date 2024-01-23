import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  // By use Effect we can reload the initial posts when the app starts
  useEffect(() => {
    fetch("https://dummyjson.com/posts") // this is a dummy api from dummyjson.com
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts); // we are getting array of posts from above promise so we deifned a new object named as data and fetching the posts
      });
  }, []); // this [] empty square brackets means we are fetching it for just one time when the app starts

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
