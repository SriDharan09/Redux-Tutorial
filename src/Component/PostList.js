import React from "react";
import { selectAllPosts } from "../Features/Posts/PostSlice";

import { useSelector } from "react-redux";
import TimeAgo from "../Features/Posts/TimeAgo";

const PostList = () => {
  const post = useSelector(selectAllPosts);
  const orderedPosts = post
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <div className="d-flex justify-content-between">
        <h3>{post.title}</h3>
        <p className="postCredit">
          {post.userId ? "Posted By: " + post.userId : "Posted By: Unknown"}
          <TimeAgo timestamp={post.date} />
        </p>
      </div>
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
