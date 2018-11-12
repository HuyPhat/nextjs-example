import * as React from 'react';
import Link from 'next/link';
const slugify = require('slugify');

class VideoList extends React.Component {
  render() {
    return <ul>{this.props.videos.map(this.renderVideoItems.bind(this))}</ul>;
  }

  renderVideoItems(item, index) {
    // video/rich-kids-hoa-ra-cung-co-thu-ma-cac-con-nha-giau-khong-mua-duoc-5be7d8ba8040351ccda82392
    let as =
      'video/' +
      slugify(item.sortTitle, { replacement: '-', lower: true }) +
      '';
    return (
      <li key={item.id}>
        <Link as={as} href={href}>
          <a>{item.sortTitle}</a>
        </Link>
      </li>
    );
  }
}

export default VideoList;
