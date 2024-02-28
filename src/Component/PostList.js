import React from "react";
import { selectAllPosts } from "../Features/Posts/PostSlice";

import { useSelector, useDispatch } from "react-redux";

const PostList = () => {
  const post = useSelector(selectAllPosts);

  const renderPosts = post.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2 className="text-center">Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostList;
