import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  const mediaStyles = {width:"200px", float:"left", margin:"0.5em 1em 0.25em 0"}

  return (
    <ListItem>

    <Link link={item.link}>
      {/*
      * If the want to show featured media in the
      * list of featured posts, we render the media.
      */}
      {state.theme.featured.showOnList && (
        <FeaturedMedia styles={mediaStyles} id={item.featured_media} />
      )}
    </Link>

      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <div>
        {/* If the post has an author, we render a clickable author text. */}
        {author && (
          <StyledLink link={author.link}>
            <AuthorName>
              By <b>{author.name}</b>
            </AuthorName>
          </StyledLink>
        )}
        <PublishDate>
          {" "}
          on <b>{date.toDateString()}</b>
        </PublishDate>
      </div>

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}

      <Link link={item.link}>
        <ReadMoreLink>Read more &rarr;</ReadMoreLink>
      </Link>
    </ListItem>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const ListItem = styled.article`
  background: #efefef;
  padding: 1em 1em 1.5em;
  margin-bottom: 2em;
  border: 1px solid #ccc;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  /* padding-top: 24px; */
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;

const ReadMoreLink = styled(Link)`
  background-color: #1f38c5;
  padding: 4px 8px;
  color: white;
  font-size: 0.9rem;
`;
