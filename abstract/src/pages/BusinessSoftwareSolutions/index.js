import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Projects from '../../pagesMaterial/ServicesPage/Services/projects/projects'
import Bss2 from '../../pagesMaterial/ServicesPage/Services/Bss/Bss2'
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
                <Bss2 />
                <Projects />
                <Contact />
                <Footer2 />
            </div>
        )
    }
}

export default Index

export const BusinessSoftwareSolutionsQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`