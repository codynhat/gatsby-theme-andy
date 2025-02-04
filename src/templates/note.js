import React from 'react';
import { graphql } from 'gatsby';
import BrainNoteContainer from '../components/BrainNoteContainer';

export default (props) => {
  return (
    <BrainNoteContainer
      note={props.data.brainNote}
      location={props.location}
      slug={props.pageContext.slug}
      siteMetadata={props.data.site.siteMetadata}
    />
  );
};

export const query = graphql`
  query BrainNoteWithRefsBySlug($slug: String!) {
    brainNote(slug: { eq: $slug }) {
      slug
      title
      childMdx {
        body
      }
      inboundReferenceNotes {
        title
        slug
        childMarkdownRemark {
          excerpt(format: HTML)
        }
      }
      outboundReferenceNotes {
        title
        slug
        childMarkdownRemark {
          excerpt(format: HTML)
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
