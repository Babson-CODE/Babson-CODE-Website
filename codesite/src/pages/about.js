import * as React from 'react'

import AboutPageHeader from '../components/AboutUs/AboutPageHeader'
import AboutTextCols from '../components/AboutUs/AboutTextCols'
import Layout  from '../components/layout'
import Seo from '../components/seo'

import { Link } from 'gatsby'

const AboutUsPage = () => {
    return(
    <Layout>
        <AboutPageHeader />
        <AboutTextCols />
    </Layout>
)
}

export default AboutUsPage