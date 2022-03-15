import React, { FC } from 'react';
import { Link } from 'gatsby';

import { go, fmtIssues } from '@utils/tools';

import './index.scss';

interface IssuesListProps {
  data: any;
  pageContext: any;
}

const IssuesList: FC<IssuesListProps> = (props) => {
  const data = props.data.allDiscussionsJson.nodes;
  const nlen = props.pageContext.nlen;
  const repo = props.data.site.siteMetadata.repo;

  return (
    <div className="issues-list">
      {data.map(({ node }: any) => {
        const issuesLink = `${repo}/discussions/${node.number}`;

        return (
          <div key={node.number} className="issues-item">
            <span
              className="num issues-num"
              title={issuesLink}
              onClick={() => go(issuesLink)}
            >
              {fmtIssues(node.number, nlen)}
            </span>
            <Link className="title" to={`/issues/${node.number}`}>
              {node.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default IssuesList;
