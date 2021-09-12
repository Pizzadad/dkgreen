import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Seo = ({description, keywords, tittle, image,url, author}) => {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const medaDescription = description || data.site.siteMetada.description
                const medaTittle = tittle || data.site.siteMetada.tittle
                
                
                const medaKeywords = keywords || ["raiz","academia","peru","tarea","examen","resolver tarea", "clases","clases particulares"]
                return(
                    <Helmet
                        title= {tittle}
                        htmlAttributes = {{ lang: 'es' }}
                        meta= {[
                            {
                                name:`description`,
                                content: medaDescription,
                            },
                            {
                                name:`og:description`,
                                content: medaDescription,
                            },
                            {
                                name:`og:tittle`,
                                content: medaTittle,
                            }
                        ].concat(
                            medaKeywords && medaKeywords.length > 0 ? {
                                name: `keywords`,
                                content: medaKeywords.join(`, `),
                            } : []
                        )
                    }
                    />
                )
            }}
        />
    )
}

const detailsQuery = graphql`
    query DefaultSEOQuery{
        site{
            siteMetadata{
                tittle,
                description,              
                author
            }
        }
    }
`

export default Seo
