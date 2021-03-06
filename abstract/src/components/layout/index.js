import React from 'react'
import PageRevealer from 'components/page-revealer'
import Navbar from 'components/navbar'
// import Footer from 'components/footer'
import Footer2 from '../footer/Footer2/Footer2'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'scss/abstract.scss'

class Layout extends React.Component {

  componentDidUpdate() {
    window.location.reload(false);
  }


  render() {

    const { children } = this.props



    return (
      <div id="main">
        <Navbar scroll={this.props.isHome ? true : false} sections={this.props.sections} />
        <PageRevealer />
        <div>
          {children}
        </div>
        <Footer2 />
      </div>
    )
  }
}

export default Layout
