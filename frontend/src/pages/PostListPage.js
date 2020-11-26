import React from 'react';
import PaginationContainer from '../containers/post/PaginationContainer';
import PostListContainer from '../containers/posts/PostListContainer';

const PostListPage = () => {
  return (
    <>
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
