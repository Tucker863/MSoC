import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import TitlePage from '../components/TitlePage'
import LocalizedLink from '../components/LocalizedLink'
import useTranslations from '../components/useTranslations'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import * as S from '../components/ListWrapper/styled'
import 'antd/dist/antd.css'
import './style.css'

const Index = ({ data: { allMarkdownRemark } }) => {
    // useTranslations is aware of the global context (and therefore also "locale")
    // so it'll automatically give back the right translations
    const carousel = React.useRef(null)

    const {
        hello,
        buuld,
        subline,
        category,
        latestPosts,
        allPosts,
    } = useTranslations()

    const postList = allMarkdownRemark.edges

    const imageLink = [
        '/images/slides/slide (1).jpg',
        '/images/slides/slide (2).jpg',
        '/images/slides/slide (3).jpg',
        '/images/slides/slide (4).jpg',
        '/images/slides/slide (5).jpg',
    ]
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    }
    return (
        <div className="homepage">
            <SEO title="Home" />
            <div style={{ position: 'relative' }}>
                <a
                    className="slider-button left"
                    onClick={() => carousel.current.prev()}
                >
                    <LeftOutlined className="slider-logo" />
                </a>
                <Carousel ref={carousel} style={{ marginBottom: '35px' }}>
                    {imageLink.map((link, idx) => {
                        return (
                            <div key={idx}>
                                <img src={link} alt="" />
                            </div>
                        )
                    })}
                </Carousel>
                <a
                    className="slider-button right"
                    onClick={() => carousel.current.next()}
                >
                    <RightOutlined className="slider-logo" />
                </a>
            </div>
            <h1></h1>
            <TitlePage text={hello} />
            <h1>{buuld}</h1>
            {/*
      
      
      <p>{subline}</p>
      <hr style={{ margin: `2rem 0` }} />
      <h2>
        <strong>{latestPosts}</strong>
      </h2>
      <br />
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: {
                background,
                category,
                date,
                description,
                title,
                image,
              },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItem
              slug={`/blog/${slug}`}
              background={background}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              image={image}
              key={slug}
            />
          ),
        )}
      </S.ListWrapper>

      <br />

      <LocalizedLink to={`/blog/`}>{allPosts}</LocalizedLink>
      */}
        </div>
    )
}

export default Index

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!, ) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            category
            background
            image
            date(formatString: $dateFormat)

          }
          timeToRead
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`
