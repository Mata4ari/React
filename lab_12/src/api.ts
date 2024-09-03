
export const movieAPI = {
  getMovie(category: string, title: string){
      return fetch(`http://www.omdbapi.com/?apikey=fd0f629d&type=${category}&s=${title}`)
              .then(response => response.json())
              .then(data => data.Search)
  },
}

export type MovieType = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}