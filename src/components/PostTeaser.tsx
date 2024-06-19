import { Card, Tag, Flex, Typography } from "antd"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { PostType } from "types/post"

const { Text } = Typography

const StyledCard = styled(Card)`
  border: none;
  box-shadow: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    img {
      transform: scale(1.05);
    }
  }

  .ant-card-cover {
    border-radius: ${(props) => props.theme.antd.borderRadiusLG}px;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform 0.1s ${(props) => props.theme.antd.motionEaseOut};
    }
  }

  .ant-card-body {
    padding: 0;
  }
`

const StyledCover = styled.div`
  height: 200px;
  position: relative;
`

const StyledTag = styled(Tag)`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
  border-radius: ${(props) => props.theme.antd.borderRadiusSM}px;
  border: none;

  &:first-letter {
    text-transform: capitalize;
  }
`

const PostInfo = styled.div`
  margin: ${(props) => props.theme.antd.marginXS}px 0;
`

const PostTitle = styled(Text)`
  font-size: ${(props) => props.theme.antd.fontSizeLG}px;
`

type Props = {
  details: PostType
}

const PostTeaser = ({ details }: Props) => {
  const formattedDate = new Date(details.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })

  const CardCover = () => {
    return (
      <StyledCover>
        <StyledTag>{details.topic}</StyledTag>
        <img src={details.photoUrl} alt="" />
      </StyledCover>
    )
  }

  return (
    <Link to={details.id.toString()}>
      <StyledCard cover={<CardCover />}>
        <PostInfo>
          <Text type="secondary">
            {formattedDate} &bull; {details.author}
          </Text>
        </PostInfo>
        <Flex vertical>
          <PostTitle strong>{details.title}</PostTitle>
          <Text type="secondary">{details.description}</Text>
        </Flex>
      </StyledCard>
    </Link>
  )
}

export default PostTeaser
