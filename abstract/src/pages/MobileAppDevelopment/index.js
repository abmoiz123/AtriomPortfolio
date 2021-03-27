import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Mad2 from '../../pagesMaterial/ServicesPage/Services/Mad/Mad2'
import Header from '../../pagesMaterial/ServicesPage/Header/Header'
import Contact from '../../sections/contact/ContactCreative2/ContactCreative2'
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
                <Mad2 />
                <Contact />
                <Footer2 />
            </div>
        )
    }
}

export default Index

export const MobileAppDevelopmentQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`