import React from 'react';
import { graphql } from 'gatsby';

// markup
const IndexPage = (props) => {
  return (
    <main>
      {props.data.allDiscussionsJson.nodes.map((item) => {
        const post = item.node;
        return (
          <div key={post.number}>
            #{post.number} - {post.title}
          </div>
        );
      })}
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allDiscussionsJson {
      nodes {
        node {
          number
          title
          category {
            name
            isAnswerable
          }
        }
      }
    }
  }
`;
