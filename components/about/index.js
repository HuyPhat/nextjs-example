import * as React from 'react';

class AboutComponent extends React.Component {
  render() {
    console.log('about-component: ', this.props);
    return <h1>About Index</h1>;
  }
}

export default AboutComponent;
