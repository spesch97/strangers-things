import React from "react";
import { useState, useEffect } from "react";
import { fetchAllPosts, deletePost } from "../api";
import SearchBar from "../components/SearchBar";
import SendMessage from "../components/SendMessage";

const Posts = ({ token, username }) => {
  const [posts, setPosts] = useState([]);

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
          <div className="postContainer" key={post._id}>
            <h3>{post.title}</h3>
            <div className="rowContainer" >
              <h5 className="textBlue">Price: {post.price}</h5>
              {post.location === "[On Request]" ? <h5 className="textBlue">Post Location Available on Request</h5>: <h5 className="textBlue">{post.location}</h5>}
              {post.willDeliver ? <h5 className="textBlue">Will Deliver</h5> : <h5 className="textBlue">Cannot Deliver</h5>}
            </div>
            <h6>Description</h6>
            <h5>{post.description}</h5>
            {post.author.username !== username ? (
              token ? (
                <SendMessage post={post} token={token} postID={postID}/>
              ) : null
            ) : null}
            {post.author.username === username ? (
              <button
                className="button"
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
