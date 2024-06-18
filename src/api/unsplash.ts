const BASE_URL = "https://api.unsplash.com"

const getPhoto = async (query: string) => {
  const url = `${BASE_URL}/search/photos?per_page=1&query=${query}`
  
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Version": "v1",
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
      },
    })

    const photo = await response.json()

    return photo.results[0].urls.regular

  } catch (error) {
    console.error(error)
  }
}

export default getPhoto
