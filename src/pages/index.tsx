import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '@src/layouts/base';

export default function IndexPage(props: any) {
  return (
    <Layout className="home-page">
      <div className="markdown-body">
        {props.data.allDiscussionsJson.nodes.map((item: any) => {
          const post = item.node;
          return (
            <div className="issues-item" key={post.number}>
              <Link to={`/issues/${post.number}`}>
                #{post.number} - {post.title}
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

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
