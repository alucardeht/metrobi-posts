import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import PostsService from "../../services/api/Posts/PostsService";
import { Post } from "../../services/api/Posts/PostsTypes";
import {
  Container,
  PostsContainer,
  PostCardContainer,
  PostCardTitle,
  PostCardText,
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
      <PostCardContainer>
        <PostCardTitle>{item.title}</PostCardTitle>
        <PostCardText>{item.body}</PostCardText>
      </PostCardContainer>
    );
  };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <PostsContainer>{posts?.map(renderPost)}</PostsContainer>
      )}
    </Container>
  );
};
