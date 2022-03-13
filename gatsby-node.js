exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
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
  `);

  data.allDiscussionsJson.nodes.forEach(({ node }) => {
    const number = node.number;
    actions.createPage({
      path: `issues/${number}`,
      component: require.resolve(`./src/templates/issues.tsx`),
      context: { number },
    });
  });
};
