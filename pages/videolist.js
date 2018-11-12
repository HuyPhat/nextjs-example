import * as React from 'react';

// getInitialProps receives a context object with the following properties:

// pathname - path section of URL
// query - query string section of URL parsed as an object
// asPath - String of the actual path (including the query) shows in the browser
// req - HTTP request object (server only)
// res - HTTP response object (server only)
// jsonPageRes - Fetch Response object (client only)
// err - Error object if any error is encountered during the rendering

class VideoList extends React.Component {
  static async getInitialProps(context) {
    console.log('video list 2019 - ', context);
    // console.log('video list 2019 - ', req.url);
    // console.log('video list 2019 - ', req.params);
    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    // return { userAgent };
    return {};
  }

  render() {
    // console.log(this.props);
    return <div>Video List Worked</div>;
  }
}

export default VideoList;
