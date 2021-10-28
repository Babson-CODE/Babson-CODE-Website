import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { createMedia } from "@artsy/fresnel"
import PropTypes from "prop-types"

import {
  Button,
  Container,
  Dropdown,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react"
import ResponsiveContainer from "../components/Shared/ResponsiveContainer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FixedNavMenu from "../components/Shared/Navbar/Navbar"
import HomepageHeading from "../components/Home/HomeHeading"
import ResidentBanner from "../components/Home/ResidentBanner"
import "semantic-ui-css/semantic.min.css"
import CodeMemberTypesCardSection from "../components/Home/CodeMemberTypesCardSection"

const IndexPage = () => (

    <Layout>
      {/*<Seo title="Home" />*/}

      
      <HomepageHeading mobile />
      <ResidentBanner />
      <CodeMemberTypesCardSection />
      
    </Layout>
  
)

export default IndexPage
