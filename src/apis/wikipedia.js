import axios from "axios";

export default axios.create({
  baseURL: "https://en.wikipedia.org",
  params: {
    action: "query",
    list: "search",
    format: "json",
    origin: "*",
  },
});
