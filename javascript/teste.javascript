const axios = require('axios')
const cheerio = require('cheerio')
const linkfy = require('linkifyjs')

async function tiktok(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  });
  const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n")
  return data.replace(regex, "")}
  console.log(response.data)
async function shortener(url) {
  return url}
  
  result = {}
  result.creator = "YNTKTS"
  result.title = clean(response.data.desc)
  result.author = clean(response.data.author)
  result.nowm = (response.data.links[0].a || "")
  result.watermark = (response.data.links[1].a || "")
  result.audio = (response.data.links[2].a || "")
  result.thumbnail = response.data.cover
console.log(result)
  return result
}
  tiktok('https://vm.tiktok.com/ZMMbYPhRh/').then( r => {
    console.log(r)
  }) 