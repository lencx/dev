import React from 'react';
import { graphql, Link, navigate } from 'gatsby';

import Layout from '@layouts/base';
import getEmoji from '@utils/emoji';
import { go } from '@utils/tools';
import '@styles/home.scss';

export default function IndexPage(props: any) {
  const repo = props.data.site.siteMetadata.repo;

  const handleCategory = (name: string) => {
    navigate(`/category/${name}`);
  };

  return (
    <Layout className="home-page">
      <div className="markdown-body issues-list">
        <div>
          {props.data.allDiscussionsJson.nodes.map((item: any) => {
            const post = item.node;
            const category = post.category;
            const issuesLink = `${repo}/discussions/${post.number}`;

            return (
              <div className="item" key={post.number}>
                <div className="info">
                  <span
                    className="category"
                    onClick={() => handleCategory(category.name)}
                  >
                    {getEmoji(category.emoji)} {category.name}
                  </span>
                  <span className="empty" />
                  <span
                    className="number issues-num"
                    title={issuesLink}
                    onClick={() => go(issuesLink)}
                  >
                    #{post.number}
                  </span>
                </div>
                <Link className="title" to={`/issues/${post.number}`}>
                  {post.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        repo
      }
    }
    allDiscussionsJson {
      nodes {
        node {
          number
          title
          category {
            name
            isAnswerable
            emoji
          }
        }
      }
    }
  }
`;
