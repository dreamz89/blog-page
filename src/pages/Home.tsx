import { useEffect, useState } from "react"
import { Typography } from "antd"
import styled from "styled-components"

import getPosts from "api/localdata"
import getPhoto from "api/unsplash"
import PostTeaser from "components/PostTeaser"
import { device } from "styles/breakpoints"
import { PostType } from "types/post"

const { Title, Paragraph } = Typography

const Page = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  padding: 32px 0;
`

const StyledParagraph = styled(Paragraph)`
  font-size: ${(props) => props.theme.antd.fontSizeLG}px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 16px;

  @media ${device.sm} {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 0;
  }

  @media ${device.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Home = () => {
  const [postsData, setPostsData] = useState<PostType[]>()

  const getPostsData = async () => {
    const posts = await getPosts()

    const getPhotos = posts.map(async (post: PostType) => {
      const photoUrl = await getPhoto(`${post.topic} ${post.title}`)

      return {
        ...post,
        photoUrl,
      }
    })

    const data = await Promise.all(getPhotos)
    setPostsData(data)
  }

  useEffect(() => {
    getPostsData()
  }, [])

  return (
    <Page>
      <div>
        <Title>Blog</Title>
        <StyledParagraph>Follow me on my journey around the world</StyledParagraph>
      </div>
      <Grid>
        {postsData?.map((post) => (
          <PostTeaser key={post.id} details={post} />
        ))}
      </Grid>
    </Page>
  )
}

export default Home
