import MD5 from "crypto-js/md5";
const BaseUrl = "https://gateway.marvel.com/v1/public"
const PublicKey = "5c3d3bf89ff2766a5c622ec46e67a3bd"
const PrivateKey = "2d248eebc659a79ca623bb8140cd32e76077ab15"
const ts = new Date().getTime()
const StringToHash = ts + PrivateKey + PublicKey
const hash = MD5(StringToHash)

export const getAllComics = async (offset) => {
  const response = await fetch(`${BaseUrl}/comics?ts=${ts}&apikey=${PublicKey}&hash=${hash}&offset=${offset}`)
  if(response.ok) {
    return response.json()
  } else {
    throw response
  }
}

export const getComicById = async (id) => {
  const response = await fetch(`${BaseUrl}/comics/${id}?&ts=${ts}&apikey=${PublicKey}&hash=${hash}`)
  if(response.ok) {
    return response.json()
  } else {
    throw response
  }
}