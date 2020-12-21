import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"

const Resources = () => {

    return (
        <div>working fine</div>

    );

    // <StaticQuery query={blueEconomyQuery} render={data=>{
    //     {console.log(data.allMarkdownRemark.edges[0].node.frontmatter.video.absolutePath)}
    //         return (
    //             <Layout>
    //                 <Container>
    //                     <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>

    //                         <iframe
    //                             src={data.allMarkdownRemark.edges[0].node.frontmatter.video}
    //                             title={data.allMarkdownRemark.edges[0].node.frontmatter.title}
    //                             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //                             webkitallowfullscreen="true"
    //                             mozallowfullscreen="true"
    //                             frameBorder="0"
    //                             allowFullScreen
    //                             width="100%" height="700"
    //                             />
                                

                      
                        
    //                 </Container>
    //             </Layout>
    //         )

    // }}/>
    }

// const resources = graphql`
// query MyQuery {
//     allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/resources/"}}) {
//       edges {
//         node {
//           id
//           html
//           frontmatter {
//             video
//             title
//             description
//           }
//         }
//       }
//     }
//   }

//  `



export default Resources
