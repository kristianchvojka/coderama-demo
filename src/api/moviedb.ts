import axios from "axios";

export const getMovieSearch = async (searchString: string) => {
  const keyword = searchString.toLowerCase();
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${keyword}&apikey=${process.env.OMDB_API_KEY}`,
    );
    return response.data;
  } catch (e: any) {
    console.error(e);
    return { message: "Search Movie failed", error: e };
  }
};

export const getMovieDetail = async (movieId: string) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${movieId}&plot=full&apikey=${process.env.OMDB_API_KEY}`,
    );

    return response.data;
  } catch (e) {
    console.error(e);
    return { message: "Error getting movie detail", error: e };
  }
};
