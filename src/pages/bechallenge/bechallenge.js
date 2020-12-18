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
                const queryData = data.allMarkdownRemark.edges[0].node.frontmatter.timeline.preparation
                console.log(queryData)
            }
        return ( 

          
        <div>
        <Layout>
            <SEO title="Be Challenege 2021" />
        </Layout>

        <Container fluid >
             <Image  src={data.allMarkdownRemark.edges[0].node.frontmatter.image1} className="center"  style={{minHeight:"500px"}} fluid/>
        </Container>

        <Container fluid>
             <Row><br></br>
             <Col sm={2}  lg={2} md={2}></Col> 
                <Col sm={8}  lg={8} md={8}> 
                        <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title1}</h1>
                        
                        <br></br>
                        
                         <p>
                            {data.allMarkdownRemark.edges[0].node.frontmatter.description1}
                        </p>
                </Col>
                <Col sm={2}  lg={2} md={2}></Col> 
             </Row> 
        </Container>

        {/* Timeline: key Milestones start here*/}
            <Container fluid style={{padding:"50px"}}>
                    <h1 style={{textAlign:"center"}}>Timeline: key Milestones</h1>
                     <Row style={{padding:"50px"}}>
                         <Col sm={12} xs={12}  lg={3} md={6}>
                                        <Card style={{border:"black 1px solid", borderRadius:"0px"}}>
                                            <Card.Body>
                                                <Card.Title style={{textAlign:"center"}}>Preparation</Card.Title>
                                                 <Card.Text>
                                                       {data.allMarkdownRemark.edges[0].node.frontmatter.timeline.preparation}      
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>          
                         </Col>
                         <Col sm={12} xs={12}  lg={3} md={6}>
                                       <Card style={{border:"black 1px solid",borderRadius:"0px"}}>
                                            <Card.Body>
                                                <Card.Title style={{textAlign:"center"}}>ROUND 1</Card.Title>
                                                 <Card.Text>
                                                 {data.allMarkdownRemark.edges[0].node.frontmatter.timeline.round1}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>              
                         </Col>
                         <Col sm={12} xs={12}  lg={3} md={6}>
                                        <Card style={{border:"black 1px solid",borderRadius:"0px"}}>
                                            <Card.Body>
                                                <Card.Title style={{textAlign:"center"}}>ROUND 2</Card.Title>
                                                 <Card.Text>  
                                                        {data.allMarkdownRemark.edges[0].node.frontmatter.timeline.round2}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>             
                         </Col>
                         <Col sm={12} xs={12}  lg={3} md={6}>
                                       <Card style={{border:"black 1px solid",borderRadius:"0px"}}>
                                            <Card.Body>
                                                <Card.Title style={{textAlign:"center"}}>ROUND 3: TOP 10 SHORTLIST</Card.Title>
                                                 <Card.Text>
                                                 {data.allMarkdownRemark.edges[0].node.frontmatter.timeline.round3}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>             
                         </Col>
                         
                        <div id="my_centered_buttons">
                                {/* <Button variant="outline-secondary" style={{}}>Register Now</Button> */}
                        </div>
                        
                     </Row>
                    </Container>
                    <Container>
                        <Row>
                        <Col sm={3} xs={3}  lg={3} md={3}></Col>
                        <Col sm={6} xs={6}  lg={6} md={6}>
                            <h1>Title</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five centuries, but 
                                also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing 
                                Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                <Image  src={data.allMarkdownRemark.edges[0].node.frontmatter.image1} className="center"  style={{minHeight:"500px"}} fluid/>

                        </Col>
                        <Col sm={3} xs={3}  lg={3} md={3}></Col>

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
            timeline {
                preparation
                round1
                round2
                round3
              }
           
          }
          
        }
      }
    }
  }

 `


export default BeChallenege
