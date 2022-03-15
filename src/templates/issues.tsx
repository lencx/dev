import React from 'react';
import { graphql, navigate } from 'gatsby';

import Layout from '@layouts/base';
import '@styles/issues.scss';

export default function BlogIssues(props: any) {
  const data = props.data.issuesJson;
  const labels = data.labels.edges;
  const comments = data.comments.edges;
  const hasComments = comments.length > 0;

  return (
    <Layout className="issues-page">
      <div className="markdown-body">
        <h1>{data.title}</h1>
        <div className="labels">
          {labels.map(({ node }: any) => {
            return (
              <span
                className="label"
                style={{ borderColor: `#${node.color}` }}
                onClick={() => navigate(`/labels/${node.name}`)}
              >
                <b style={{ background: `#${node.color}` }}>#</b>
                <em>{node.name}</em>
              </span>
            );
          })}
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.bodyHTML }} />
        {hasComments && <hr />}
        {comments.map(({ node }: any) => {
          return (
            <div
              key={node.id}
              dangerouslySetInnerHTML={{ __html: node.bodyHTML }}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query DevIssuesQuery($number: Int!) {
    issuesJson(number: { eq: $number }) {
      id
      title
      number
      bodyHTML

      labels {
        edges {
          node {
            name
            color
          }
        }
      }

      comments {
        edges {
          node {
            id
            bodyHTML
          }
        }
      }
    }
  }
`;
