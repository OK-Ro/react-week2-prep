async function fetchRandomUser() {
  try {
    const response = await fetch("https://www.randomuser.me/api?results=1");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.error("Error fetching random user:", error);
    throw error;
  }
}
export default fetchRandomUser;
