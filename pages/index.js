import React from 'react';
import Link from 'next/link';
import HomeComponent from '../components/home';
import { getCategories } from '../http/index';

class HomePage extends React.Component {
  static async getInitialProps(context) {
    const userAgent = context.req
      ? context.req.headers['user-agent']
      : navigator.userAgent;
    const initialData = {
      categories: null,
      error: null
    };
    try {
      let response = await getCategories();
      // console.log('HomePage - getInitialProps: ', response.data.data);
      initialData.categories = response.data.data;
      return { userAgent, ...initialData };
    } catch (error) {
      initialData.error = error;
      return { userAgent, ...initialData };
    }
  }

  render() {
    // console.log('huy - ', this.props);
    const { userAgent, ...rest } = this.props;
    return (
      <div>
        <p>Hello World - {this.props.userAgent}</p>
        <div>
          Click{' '}
          <Link prefetch href="/tv/about">
            <a>here</a>
          </Link>{' '}
          to read more
        </div>
        <div>
          <Link prefetch href="/tv/videolist">
            <a>Link Video List</a>
          </Link>
        </div>
        <HomeComponent {...rest} />
      </div>
    );
  }
}
export default HomePage;
