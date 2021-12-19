import React from "react";
import { Post as PostType } from "../../services/api/Posts/PostsTypes";
import { useLocation, Navigate } from "react-router-dom";

import { PostCardContainer, PostCardTitle, PostCardText } from "./styles";
import GradientContainer from "../../components/GradientContainer/GradientContainer";

type LocationState = {
  state?: {
    post?: PostType;
  };
};

export const Post = () => {
  const location = useLocation() as LocationState;

  if (!location.state?.post) {
    return <Navigate to="/" />;
  }

  return (
    <GradientContainer>
      <PostCardContainer>
        <PostCardTitle>{location.state?.post.title}</PostCardTitle>
        <PostCardText>{location.state?.post.body}</PostCardText>
      </PostCardContainer>
    </GradientContainer>
  );
};
