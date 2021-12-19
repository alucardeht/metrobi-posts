import React, { useEffect, useState } from "react";
import GradientContainer from "../../components/GradientContainer/GradientContainer";
import Loader from "../../components/Loader/Loader";
import PostsService from "../../services/api/Posts/PostsService";
import { Post } from "../../services/api/Posts/PostsTypes";
import {
  PostsContainer,
  PostCardContainer,
  PostCardTitle,
  PostCardLinkContainer,
} from "./styles";

export const Main = () => {
  const [posts, setPosts] = useState<Array<Post>>();
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const post_list = await PostsService.getPosts();

    setPosts(post_list);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPost = (item: Post) => {
    return (
      <PostCardLinkContainer
        to="/post"
        state={{
          post: item,
        }}
      >
        <PostCardContainer>
          <PostCardTitle>{item.title}</PostCardTitle>
        </PostCardContainer>
      </PostCardLinkContainer>
    );
  };

  return (
    <GradientContainer>
      {loading ? (
        <Loader />
      ) : (
        <PostsContainer>{posts?.map(renderPost)}</PostsContainer>
      )}
    </GradientContainer>
  );
};
