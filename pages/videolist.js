import * as React from 'react';
import { getVideoList } from '../http/index';
import VideoList from '../components/video/list';

// getInitialProps receives a context object with the following properties:

// pathname - path section of URL
// query - query string section of URL parsed as an object
// asPath - String of the actual path (including the query) shows in the browser
// req - HTTP request object (server only)
// res - HTTP response object (server only)
// jsonPageRes - Fetch Response object (client only)
// err - Error object if any error is encountered during the rendering

class VideoListPage extends React.Component {
  static async getInitialProps(context) {
    console.log('VideoList 2019: ', context.query);
    const { categoryCode, subCatId } = context.query;
    try {
      let json = await getVideoList({ id: '5b837f12aec52b58d86a48b5' });
      console.log('VideoList 2019: ', json.data.data);
      return { videos: json.data.data };
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log('render -> ', this.props);
    return (
      <div>
        <p>Video List Worked</p>
        <VideoList videos={this.props.videos} />
      </div>
    );
  }
}

export default VideoListPage;
