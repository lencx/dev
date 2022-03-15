import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@layouts/base';
import IssuesList from '@comps/issues_list';
import getEmoji from '@utils/emoji';
import { go } from '@utils/tools';
import '@styles/category.scss';

export default function BlogCategory(props: any) {
  const categoryInfo = props.pageContext.category;
  const repo = props.data.site.siteMetadata.repo;
  const categoriesLink = `${repo}/discussions/categories/${categoryInfo.name}`
    .toLocaleLowerCase()
    .replace(/ /g, '-');

  return (
    <Layout className="category-page">
      <div className="markdown-body">
        <div className="category-head" title={categoriesLink}>
          <span className="name" onClick={() => go(categoriesLink)}>
            {getEmoji(categoryInfo.emoji)} {categoryInfo.name}
          </span>
          <span className="desc">{categoryInfo.description}</span>
        </div>

        <IssuesList data={props.data} pageContext={props.pageContext} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query DevCategoryQuery($name: String!) {
    site {
      siteMetadata {
        repo
      }
    }
    allDiscussionsJson(
      filter: { node: { category: { name: { eq: $name } } } }
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
