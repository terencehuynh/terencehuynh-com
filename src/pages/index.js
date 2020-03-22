import React from 'react'

import Layout from '../components/Layout'
import HomepageHero from '../components/Homepage/Hero'

const IndexPage = () => (
  <Layout showHeader={false}>
    <HomepageHero />
  </Layout>
)

export default IndexPage
