
export default async function cityFinder(searchText) {
  const API_KEY = '45385812e6c14d5f9e0fb893841273e4';

  const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${searchText}&key=${API_KEY}`)

  const json = await response.json()

  return json
}