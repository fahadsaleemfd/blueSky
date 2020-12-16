import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"

const BlueEconomy = () => (

    <StaticQuery query={blueEconomyQuery} render={data=>{
        {console.log(data.allMarkdownRemark.edges[0].node.frontmatter.video.absolutePath)}
            return (
                <Layout>
                    <Container>
                       
                            

                        <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>

                            <iframe
                                src={data.allMarkdownRemark.edges[0].node.frontmatter.video.publicURL}
                                title={data.allMarkdownRemark.edges[0].node.frontmatter.title}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                webkitallowfullscreen="true"
                                mozallowfullscreen="true"
                                frameBorder="0"
                                allowFullScreen
                                width="100%" height="700"
                                />
                                

                      
                        
                    </Container>
                </Layout>
            )

    }}/>
)

const blueEconomyQuery = graphql`
query MyQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/blueEconomy/"}}) {
      edges {
        node {
          id
          html
          frontmatter {
            video {
              id
              absolutePath
              base
              publicURL
            }
            title
            description
          }
        }
      }
    }
  }

 `



export default BlueEconomy
