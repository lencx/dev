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
              emoji
              description
              isAnswerable
            }
            labels {
              edges {
                node {
                  color
                  name
                  id
                }
              }
            }
          }
        }
      }
    }
  `);

  let categoryMap = new Map();
  let labelsMap = new Map();
  let nlen = 0;

  data.allDiscussionsJson.nodes.forEach(({ node }) => {
    const number = node.number;

    // number length
    const _nlen = `${number}`.length;
    if (nlen < _nlen) nlen = _nlen;

    // create issues pages
    actions.createPage({
      path: `issues/${number}`,
      component: require.resolve(`./src/templates/issues.tsx`),
      context: { number },
    });

    // category
    const category = node.category;
    if (!categoryMap.get(category.name)) {
      categoryMap.set(category.name, category);
    }

    // labels
    const labels = node.labels.edges;
    labels.forEach(({ node }) => {
      if (!labelsMap.get(node.name)) {
        labelsMap.set(node.name, node);
      }
    });
  });

  // create category pages
  for (let [key, value] of categoryMap.entries()) {
    actions.createPage({
      path: `category/${key}`,
      component: require.resolve(`./src/templates/category.tsx`),
      context: { category: value, name: key, nlen },
    });
  }

  // create labels pages
  for (let [key, value] of labelsMap.entries()) {
    actions.createPage({
      path: `labels/${key}`,
      component: require.resolve(`./src/templates/labels.tsx`),
      context: { labels: value, name: key, nlen },
    });
  }
};
