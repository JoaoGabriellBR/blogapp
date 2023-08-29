import axios from "axios";

export default async function fetchNewsData(newsCategory: string) {
  try {
    const res = await axios({
      method: "GET",
      url: "/noticias",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "category": newsCategory
      },
    });
    return res?.data;
  } catch (err) {
    console.log("Não foi possível carregar os dados.");
  }
}
