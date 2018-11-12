import React from 'react';
import Link from 'next/link';
import AboutComponent from '../components/about';

class AboutPage extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    console.log('About - ' + userAgent);
    return { userAgent };
  }
  render() {
    return (
      <div>
        About - {this.props.userAgent}
        <div>
          Click{' '}
          <Link prefetch href="/">
            <a>here</a>
          </Link>{' '}
          to read more
        </div>
        <AboutComponent />
      </div>
    );
  }
}
export default AboutPage;
