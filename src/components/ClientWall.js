import React, { useEffects } from 'react';
import {StaticQuery} from 'gatsby';
import Img from 'gatsby-image';


import '../styles/components/contact-form.scss';



// const ClientWall = (props) => {

//     // const [formData, setFormData]

//     // useEffects(() => {

//     // }, [])

//     const submitData = () => {
//         axios.post()
//     }

//     console.log(props)

//     // const dataClientLogos = props.data.clients.edges.map(({node}) => node) //.find(({node}) => )

//     // const clientWall = dataClientLogos.map(d => <div className={'grid-client-logo'}>
//     //     <Img
//     //         fluid={d.acf.client_logo.localFile.childImageSharp.fluid}
//     //         objectFit="cover"
//     //         objectPosition="50% 50%"
//     //     />
//     // </div>)

//     return 


//     return null//clientWall


// }

const ClientWall = () => <StaticQuery
    query={graphql`
    query {
        clients: allWordpressPage(filter: {wordpress_parent: {eq: 674}}, sort: {fields: [menu_order],  order: ASC}) {
            edges {
              node {
                slug,
                wordpress_parent,
                wordpress_id,
                content,
                menu_order,
                acf {
                  client_name
                  client_logo {
                    localFile {
                      childImageSharp {
                          fluid(maxWidth: 500, quality: 100) {
                              ...GatsbyImageSharpFluid_noBase64
                          }
                      }
                    }
                  }
                }
              }
            }
          }
        }
    `}
    render={data => {
        const dataClientLogos = data.clients.edges.map(({node}) => node) 

        const clientWall = dataClientLogos.map(d => <div className={'grid-client-logo'} style={{position: 'relative'}}>
        <Img
             fluid={d.acf.client_logo.localFile.childImageSharp.fluid}
             objectFit="contain"
             objectPosition="50% 50%"
             imgStyle={{objectFit: 'contain'}}
             fadeIn={false}
            //  loading="eager" // for future
         />
     </div>)

        return <div className="grid-client" style={{zIndex: 1}}>{clientWall}</div>
    }}
/>


export default ClientWall

