import React from 'react';
import { graphql } from 'gatsby';

// markup
const IndexPage = (props) => {
  // console.log(props.data.allIssuesJson);
  return <main>Interview</main>;
};

export default IndexPage;

export const query = graphql`
  {
    allIssuesJson {
      nodes {
        body
        category {
          name
        }
      }
    }
  }
`;
