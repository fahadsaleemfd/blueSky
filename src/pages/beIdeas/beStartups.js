import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../../components/layout"
import { StaticQuery, graphql } from "gatsby"

const BeStartup = () => (
    <StaticQuery query={beStartupsIndex} render={data=>{
        {console.log(data.allMarkdownRemark.edges)}
            return (
                <Layout>
                    <Container>
                        <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
                        <img src={data.allMarkdownRemark.edges[0].node.frontmatter.image} />
                        
                    </Container>
                </Layout>
            )

    }}/>
)





const beStartupsIndex = graphql`
query startUp {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/beStartups/"}}) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            image
            description
          }
          
        }
      }
    }
  }

 `

export default BeStartup
