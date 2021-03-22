import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import AboutPage from '../../pagesMaterial/AboutPage/AboutPage'
import ChooseUs from '../../pagesMaterial/AboutPage/ChooseUs/Chooseus'
import OurSpecialization from '../../pagesMaterial/AboutPage/OurSpecialization/OurSpecialization'
import Service from '../../sections/services/ServicesOne'

class Index extends React.Component {

  render() {

    const { site } = this.props.data

    return (
      <div>
        <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
        <OurSpecialization />
        {/* <AboutPage />
        <ChooseUs />
        <OurSpecialization />
        <Service /> */}
      </div>
    )
  }
}

export default Index

export const AboutQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`