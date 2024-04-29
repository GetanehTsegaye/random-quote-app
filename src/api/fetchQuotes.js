import axios from "axios";
export async function fetchQuotes() {
  try {
    const response = await axios.get(
      "https://api.quotable.io/quotes/random?limit=5"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching quotes:", error);

    return [];
  }
}
