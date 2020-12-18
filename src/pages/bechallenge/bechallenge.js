import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../../components/layout"
import { StaticQuery, graphql } from "gatsby"
import {Row,Col,Image,Card ,CardDeck ,CardGroup,Button} from 'react-bootstrap'
import LocalImage from '../../images/html.jpg'
import LocalImage2 from '../../images/challenge1.webp'
import  "../../components/beChallenge.css"
import SEO from "../../components/seo"

const BeChallenege = () => (
    
    <StaticQuery query={beChallengequery} render={data=>{
            {
                const queryData = data.allMarkdownRemark.edges[0].node.frontmatter
                console.log(queryData)
            }
        return ( 

          
        <div>
        <Layout>
            <SEO title="Be Challenege 2021" />
        </Layout>
        <Container fluid >

                    <Row style={{position: "relative", left: "0", right: "0",zIndex: "-1", background:"#b8d2ff"}}>
                        <Col sm={4}  lg={4} md={4}>                       
                        </Col>
                        <Col sm={8} xs={12} lg={8} md={8}>                               
                            
                                  <Image  src={data.allMarkdownRemark.edges[0].node.frontmatter.image1} style={{minHeight:"500px"}} fluid/>
                        </Col>
                     </Row>
                     <Row style={{position:"absolute", top:"100px"}}>
                         <Col sm={12} xs={12 }  lg={12} md={10}>
                         <div id="paragraph">
                                        <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title1}</h1>
                                        <br></br>
                                        <p>
                                        {data.allMarkdownRemark.edges[0].node.frontmatter.description1}
                                        </p>
                                </div>
                         </Col>
                     </Row>
        </Container>

        {/* Timeline: key Milestones start here*/}
            <Container fluid style={{background:"#b8d2ff", padding:"50px"}}>
                    <h1 style={{textAlign:"center"}}>Timeline: key Milestones</h1>
                     <Row style={{padding:"50px"}}>
                         <Col sm={12} xs={12}  lg={3} md={6}>
                                        <Card style={{border:"black 1px solid", borderRadius:"0px"}}>
                                            <Card.Body>
                                                <Card.Title style={{textAlign:"center"}}>Preparation</Card.Title>
                                                 <Card.Text>
                                                       {data.allMarkdownRemark.edges[0].node.frontmatter.predesc}      
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>          
                         </Col>
                         <Col sm={12} xs={12}  lg={3} md={6}>
                                       <Card style={{border:"black 1px solid",borderRadius:"0px"}}>
                                            <Card.Body>
                                                <Card.Title style={{textAlign:"center"}}>ROUND 1</Card.Title>
                                                 <Card.Text>
                                                 {data.allMarkdownRemark.edges[0].node.frontmatter.round1}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>              
                         </Col>
                         <Col sm={12} xs={12}  lg={3} md={6}>
                                        <Card style={{border:"black 1px solid",borderRadius:"0px"}}>
                                            <Card.Body>
                                                <Card.Title style={{textAlign:"center"}}>ROUND 2</Card.Title>
                                                 <Card.Text>  
                                                        {data.allMarkdownRemark.edges[0].node.frontmatter.round2}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>             
                         </Col>
                         <Col sm={12} xs={12}  lg={3} md={6}>
                                       <Card style={{border:"black 1px solid",borderRadius:"0px"}}>
                                            <Card.Body>
                                                <Card.Title style={{textAlign:"center"}}>ROUND 3: TOP 10 SHORTLIST</Card.Title>
                                                 <Card.Text>
                                                 {data.allMarkdownRemark.edges[0].node.frontmatter.round3}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>             
                         </Col>
                         
                        <div id="my_centered_buttons">
                                {/* <Button variant="outline-secondary" style={{}}>Register Now</Button> */}
                        </div>
                        
                     </Row>
                  
    
                    
                    
                    </Container>
            </div>  
                   
               
              )
            }}/>
)

const beChallengequery = graphql`
query challenge {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/beChallenge/"}}) {
      edges {
        node {
          id
          html
          frontmatter {
            title1
            image1
            description1
            predesc
            round1
            round2
            round3
          }
          
        }
      }
    }
  }

 `


export default BeChallenege
