import api from "./api.jsx";
import axios from "axios";

export default async function fetchNewsData() {
  try {
    const res = await axios({
      method: "GET",
      url: "/noticias",
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    return res?.data;
  } catch (err) {
    console.log("Não foi possível carregar os dados.");
  }
}
