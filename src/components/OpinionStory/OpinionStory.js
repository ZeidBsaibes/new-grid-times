import React from "react";
import styled from "styled-components/macro";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <AuthorName>{author}</AuthorName>
        <ArticleTitle>{title}</ArticleTitle>
        <Avatar alt="" src={avatar} />
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  padding-bottom: 16px;
  padding-top: 16px;

  border-bottom: 1px solid var(--color-gray-300);

  & :last-child {
    border-bottom: none;
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-areas:
    "author avatar"
    "title avatar";
`;

const Avatar = styled.img`
  grid-area: avatar;
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  justify-self: end;
  align-self: center;
`;

const AuthorName = styled.p`
  grid-area: author;
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  grid-area: title;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
