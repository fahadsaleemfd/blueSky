import React from "react"
import { Container,Row,Col } from "react-bootstrap"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"

const Resources = () => (

   

    <StaticQuery query={resourcesQ} render={data=>{
      
            return (
                <Layout>
                    <Container>
                        <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
                        <Row>
                            <Col sm={2} xs={2}  lg={2} md={2}>
                            </Col>

                            {data.allMarkdownRemark.edges[0].node.frontmatter.listTitle.map((node)=>(
                                <Col sm={8} xs={8}  lg={8} md={8}>
                                        <div style={{background:"blue", height:'200px'}}>
                                        <h1>{node.title}</h1>
                                        <p>{node.description}</p>
                                        <button>{node.buttonLabel}</button>
                                    </div>

                                </Col>
                            ))} 

                            <Col sm={2} xs={2}  lg={2} md={2}>
                            </Col>
                        </Row><br></br><br></br>
                        </Container>
                
                <Container fluid>

                        <Row style={{background:"red"}}>
                            <Col sm={3} xs={3}  lg={3} md={3}>
                                {data.allMarkdownRemark.edges[0].node.frontmatter.title2}   
                            </Col>

                           
                                <Col sm={9} xs={9}  lg={9} md={9}>
                                    
                                        <p>{data.allMarkdownRemark.edges[0].node.frontmatter.description2}</p>
                                    

                                </Col>
                    

                           
                        </Row>
                            
                      
                        
                    </Container>
                </Layout>
            )

    }}/>
)

const resourcesQ = graphql`
query resourceQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/resources/"}}) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              description
              title2
              description2
              listTitle {
                description
                buttonLabel
                title
              }
            }
          }
        }
      }
  }

 `



export default Resources
