import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from '../../pagesMaterial/ServicesPage/Header/Header'
import Webdevlopment from '../../pagesMaterial/ServicesPage/Services/webdevlopment/webdevlopment'
import Ecommerce from '../../pagesMaterial/ServicesPage/Services/EcommerceSolution/ecommercesolu'
import Seo from '../../pagesMaterial/ServicesPage/Services/Seo/Seo'
import Smm from '../../pagesMaterial/ServicesPage/Services/Smm/Smm'
import Bss from '../../pagesMaterial/ServicesPage/Services/Bss/Bss'
import Csd from '../../pagesMaterial/ServicesPage/Services/Csd/Csd'
import Mad from '../../pagesMaterial/ServicesPage/Services/Mad/Mad'
import Gdva from '../../pagesMaterial/ServicesPage/Services/Gdva/Gdva'
import Contact from '../../../src/sections/contact/ContactCreative2/ContactCreative2'
import Footer2 from '../../components/footer/Footer2/Footer2'
class Index extends React.Component {

  render() {

    const { site } = this.props.data

    return (
      <div>
        <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
        <Header />
        <Webdevlopment />
        <Ecommerce />
        <Seo />
        <Smm />
        <Bss />
        <Csd />
        <Mad />
        <Gdva />
        <Contact />
        <Footer2 />
      </div>
    )
  }
}

export default Index

export const ServiceQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`