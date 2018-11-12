import * as React from 'react';
import Link from 'next/link';
import Router from 'next/router';
const slugify = require('slugify');
// genderAslink = (categoryCode, subCategory) =>
// 		`${process.env.PATH}/${categoryCode}/${_.kebabCase(
// 			slug(subCategory.title ? subCategory.title.toLowerCase() : '')
// 		)}-${subCategory.id}`;

class HomeComponent extends React.Component {
  render() {
    console.log('homecomponent: ', this.props);
    return (
      <div>
        <h1>Home Index</h1>
        {
          <ul>
            {this.props.categories.map(this.renderCategoryItems.bind(this))}
          </ul>
        }
      </div>
    );
  }

  renderCategoryItems(category) {
    return (
      <li key={category.id}>
        <Link scroll={false} as={`/p/`} href={`/post?id=`}>
          <a>{category['title~VI']}</a>
        </Link>
        <ul>
          {category.subCategories.map(
            this.renderSubCategoryItems(category.code)
          )}
        </ul>
      </li>
    );
  }

  renderSubCategoryItems = parentCode => category => {
    let as = slugify(category.title, { replacement: '-', lower: true });
    // as = parentCode + '/' + as + '-' + category.id;
    // as = 'videolist' + '/' + as + '-' + category.id;
    const href = {
      pathname: parentCode,
      query: {
        categoryCode: parentCode,
        subCategoryId: category.id,
        subCategoryTitle: category['title~VI']
      }
    };
    const url = '/videolist';
    const handler = () => {
      Router.push(
        {
          pathname: '/videolist',
          query: {
            categoryCode: parentCode,
            subCategoryId: category.id,
            subCategoryTitle: category['title~VI']
          }
        },
        parentCode + '/' + as + '-' + category.id
      );
    };
    return (
      <li key={category.id}>
        {/* <Link prefetch scroll={false} as={as} href={href}>
          <a>{category['title~VI']}</a>
        </Link> */}
        <button onClick={handler}>{category['title~VI']}</button>
      </li>
    );
  };
}

export default HomeComponent;
