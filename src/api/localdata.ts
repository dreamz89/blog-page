const getPosts = async () => {
  try {
    const response = await fetch("data.json", {
      method: "GET",
    })

    const posts = await response.json()

    return posts.posts
  } catch (error) {
    console.error(error)
  }
}

export default getPosts
