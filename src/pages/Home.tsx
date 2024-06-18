import { useEffect, useState } from "react"
import getPosts from "../api/localdata"
import getPhoto from "../api/unsplash"
import { PostType } from "../types/post"

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

  return <div>Home</div>
}

export default Home
