import api from "./api.jsx";

export default async function fetchNewsData() {
    try {
        const res = await api.get("/noticias");
        return res?.data;
    } catch (err) {
        console.log("Não foi possível carregar os dados.");
    }
}