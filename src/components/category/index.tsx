import React, { FC } from 'react';
import { Link } from 'gatsby';

import getEmoji from '@utils/emoji';

import './index.scss';

interface CategoryProps {
  category: any;
}

const Category: FC<CategoryProps> = ({ category }) => {
  return (
    <Link className="category" to={`/category/${category.name}`}>
      {getEmoji(category.emoji)} {category.name}
    </Link>
  );
};

export default Category;
