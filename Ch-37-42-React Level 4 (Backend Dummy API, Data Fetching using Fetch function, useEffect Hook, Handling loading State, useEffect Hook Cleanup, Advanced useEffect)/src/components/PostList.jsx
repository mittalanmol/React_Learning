import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [fetching, setFetching] = useState(false); // initialy fecthing is false, it means data aa chuka hai humm fetch nhi kr rhe
  // in case of states we use []

  // By use Effect we can reload the initial posts when the app starts
  useEffect(() => {
    setFetching(true); // true means humm fetch kr rhe hai
    fetch("https://dummyjson.com/posts") // this is a dummy api from dummyjson.com
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts); // we are getting array of posts from above promise so we deifned a new object named as data and fetching the posts
        setFetching(false);
      });
  }, []); // this [] empty square brackets means we are fetching it for just one time when the app starts

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
