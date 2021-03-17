import React from 'react'
import Layout from 'components/layout'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import HeroVideo from 'sections/hero/HeroVideo.js'
import AboutOne from 'sections/about/AboutOne.js'
import ServicesOne from 'sections/services/ServicesOne.js'
import PortfolioOne from 'sections/portfolio/PortfolioOne.js'
import TeamOne from 'sections/team/TeamOne.js'
import Blog from '../sections/Blog/Blog'
import ClientsOne from 'sections/clients/ClientsOne.js'
import ContactCreative2 from "../sections/contact/ContactCreative2/ContactCreative2"
// import Footer2 from "../components/footer/Footer2/Footer2"
class Index extends React.Component {

  render() {

    const { site } = this.props.data

    return (
      <div>
        <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
        <Blog />
         {/* <Layout isHome={true}>
          <HeroVideo />
          <AboutOne />
          <ServicesOne />
          <PortfolioOne />
          <ClientsOne />
          <Blog />
          <TeamOne />
          <ContactCreative2 />
        </Layout> */}
      </div>
    )
  }
}

export default Index

export const creativeOneQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`