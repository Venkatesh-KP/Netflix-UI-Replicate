import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3'; // Replace with the actual base URL of the API

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movies?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movies/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for movie ID ${movieId}:`, error);
    throw error;
  }
};

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const movies = [
    {
      id: 1,
      title: "Avengers",
      description: "Earth's mightiest heroes must come together to stop a global threat.",
      poster_path: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
      summary: "A team of superheroes unites to save the world from an alien invasion led by Loki.",
      cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Mark Ruffalo"],
    },
    {
      id: 2,
      title: "Transformers",
      description: "An ancient struggle between two Cybertronian races comes to Earth.",
      poster_path: "https://image.tmdb.org/t/p/w500/giUKiMdy8ycXbFNjVBYAZTfNd80.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/sfKQXzIY2GCzL9eQC6FnhqGf5rY.jpg",
      summary: "Autobots and Decepticons battle for supremacy, with humanity caught in the crossfire.",
      cast: ["Shia LaBeouf", "Megan Fox", "Josh Duhamel", "Peter Cullen"],
    },
    {
      id: 3,
      title: "Money Heist",
      description: "A criminal mastermind plans the biggest heist in recorded history.",
      poster_path: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/5Ndv8KZko5FXxxz7rWcq5ZfVAkA.jpg",
      summary: "A group of robbers, led by 'The Professor,' attempt to pull off a heist on the Royal Mint of Spain.",
      cast: ["Álvaro Morte", "Úrsula Corberó", "Itziar Ituño", "Pedro Alonso"],
    },
    {
      id: 4,
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology is given a chance to erase his criminal record.",
      poster_path: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      summary: "Dom Cobb must plant an idea into a target's subconscious, facing deadly projections of his own mind.",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"],
    },
    {
      id: 5,
      title: "Interstellar",
      description: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity’s survival.",
      poster_path: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
      summary: "Set in a dystopian future where Earth is becoming uninhabitable, a group seeks a new planet.",
      cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    },
    {
      id: 6,
      title: "Joker",
      description: "Arthur Fleck, a failed comedian, descends into madness and becomes the iconic villain, Joker.",
      poster_path: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
      summary: "In Gotham's grim reality, a mentally ill man is pushed to his limits and sparks a revolution.",
      cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy"],
    },
    {
      id: 7,
      title: "The Dark Knight",
      description: "Batman faces his greatest psychological and moral challenge when the Joker wreaks havoc on Gotham.",
      poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
      summary: "As the Joker terrorizes Gotham, Batman must choose between order and chaos.",
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Maggie Gyllenhaal"],
    },
    {
      id: 8,
      title: "Stranger Things",
      description: "A group of kids uncovers a government conspiracy while searching for their missing friend.",
      poster_path: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      summary: "When a young boy disappears, his friends uncover a mystery involving secret experiments and supernatural forces.",
      cast: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour", "Winona Ryder"],
    }
  ];
  
  
export const handleMovieSelect = (movie) => {
    console.log('Selected movie:', movie);
};
export default movies;