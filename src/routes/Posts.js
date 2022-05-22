import React from "react";
import { useState, useEffect } from "react";
import { fetchAllPosts, deletePost } from "../api";
import SearchBar from "../components/SearchBar";
import SendMessage from "../components/SendMessage";

const Posts = ({ token, username }) => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  console.log(username);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchAllPosts();
      setPosts(fetchedPosts);
    };
    getPosts();
  }, []);

  return (
    <>
      <SearchBar posts={posts} setPosts={setPosts} />
      {posts.map((post) => {
        const postID = post._id;
        return (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <h5>{post.price}</h5>
            <h6>{post.location}</h6>
            <h5>{post.description}</h5>
            <h6>{post.willDeliver}</h6>
            {post.author.username !== username ? (
              token ? (
                <SendMessage post={post} token={token} postID={postID}/>
              ) : null
            ) : null}
            {post.author.username === username ? (
              <button
                type="button"
                onClick={async () => {
                  deletePost(token, postID, posts, setPosts);
                }}
              >
                Delete
              </button>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default Posts;
