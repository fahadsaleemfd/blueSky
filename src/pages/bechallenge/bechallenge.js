import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../../components/layout"
import { StaticQuery, graphql } from "gatsby"

const BeChallenege = () => (
    <StaticQuery query={beChallenegeIndex} render={data=>{
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





const beChallenegeIndex = graphql`
query challenege {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/beChallenge/"}}) {
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

export default BeChallenege
