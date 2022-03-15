import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@layouts/base';
import IssuesList from '@comps/issues_list';
import { go } from '@utils/tools';
import '@styles/labels.scss';

export default function BlogCategory(props: any) {
  const labelsInfo = props.pageContext.labels;
  const repo = props.data.site.siteMetadata.repo;
  const labelsLink = `${repo}/discussions?discussions_q=label:${labelsInfo.name}`;

  return (
    <Layout className="labels-page">
      <div className="markdown-body">
        <div
          className="labels-head"
          title={labelsLink}
          style={{ background: `#${labelsInfo.color}` }}
          onClick={() => go(labelsLink)}
        >
          {labelsInfo.name}
        </div>

        <IssuesList data={props.data} pageContext={props.pageContext} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query DevLabelsQuery($name: String!) {
    site {
      siteMetadata {
        repo
      }
    }
    allDiscussionsJson(
      filter: {
        node: {
          labels: { edges: { elemMatch: { node: { name: { eq: $name } } } } }
        }
      }
    ) {
      nodes {
        node {
          title
          number
        }
      }
    }
  }
`;
