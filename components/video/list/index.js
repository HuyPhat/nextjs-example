import * as React from 'react';
import Link from 'next/link';

class VideoList extends React.Component {
  render() {
    return <ul>{this.props.videos.map(this.renderVideoItems.bind(this))}</ul>;
  }

  renderVideoItems(item, index) {
    return (
      <li key={item.id}>
        <Link>
          <a>{item.sortTitle}</a>
        </Link>
      </li>
    );
  }
}

export default VideoList;
