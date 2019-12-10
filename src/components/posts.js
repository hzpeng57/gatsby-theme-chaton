import React, { Fragment } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Styled, css } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/home-footer"

const Posts = ({ location, posts, siteTitle, socialLinks }) => {
  const { site: siteMetadata } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            copyright
          }
        }
      }
    `
  )

  return (
    <Layout location={location} title={siteTitle}>
      <main>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          const keywords = node.keywords || []
          return (
            <Fragment key={node.slug}>
              <SEO title="Home" keywords={keywords} />
              <div>
                <Styled.h2
                  css={css({
                    mb: 1,
                  })}
                >
                  <Styled.a
                    as={Link}
                    css={{
                      textDecoration: `none`,
                    }}
                    to={node.slug}
                  >
                    {title}
                  </Styled.a>
                </Styled.h2>
                <small>{node.date}</small>
                <Styled.p>{node.excerpt}</Styled.p>
              </div>
            </Fragment>
          )
        })}
      </main>
      <Footer socialLinks={socialLinks} siteTitle={siteTitle} {...siteMetadata} />
    </Layout>
  )
}

export default Posts
