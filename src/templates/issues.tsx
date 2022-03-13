import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@src/layouts/base';

export default function BlogPost(props: any) {
  const data = props.data.issuesJson;
  return (
    <Layout className="issues-page">
      <div className="markdown-body">
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.bodyHTML }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery($number: Int!) {
    issuesJson(number: { eq: $number }) {
      id
      title
      number
      bodyHTML
    }
  }
`;
