import React from 'react'
// import PageRevealer from 'components/page-revealer'
// import PageRevealer from 'components/page-revealer'
// import Revealer from '../page-revealer/index2'
// import Navbar from 'components/navbar'
import Navbar from '../navbar/Navbar'
import Loader from '../page-revealer/index2'
// import Footer from 'components/footer'
import Footer2 from '../footer/Footer2/Footer2'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'scss/abstract.scss'

class Layout extends React.Component {
  constructor() {
    super()
    this.state = { isLoading: true }
  }

  // componentDidUpdate() {
  //   window.location.reload(false);
  // }
  componentDidMount() {
    setTimeout(() => {this.setState({isLoading: false})}, 1000)
    // setTimeout(() => this.setState({ isLoading: false }), 1000)
  }

  render() {

    const { children } = this.props

    return (this.state.isLoading ? (<Loader />) : (<div>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer2 />
    </div>))

    // return (
    //   <div id="main">
    //     <Revealer />
    //     <Navbar />
    //     <div>
    //       {children}
    //     </div>
    //     <Footer2 />
    //   </div>
    // )
  }
}

export default Layout
