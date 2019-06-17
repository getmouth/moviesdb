

export const moviesURL = () => `https://api.themoviedb.org/3/discover/movie?api_key=${DB_KEY}&language=en-US&include_adult=false&include_video=false`;


export const moviesParamsURL = (
  rMax: number,
  rMin: number,
  yrMax: number,
  yrMin: number,
  rtMax: number,
  rtMin: number,
  seletedGenre: string,
) => `https://api.themoviedb.org/3/discover/movie?api_key=bac128078ed572b3da5ccecc59685054&language=en-US&include_adult=false&include_video=false&primary_release_date.gte=${yrMin}&primary_release_date.lte=${yrMax}&vote_average.gte=${rtMin}&vote_average.lte=${rtMax}&with_runtime.gte=${rMin}&with_runtime.lte=${rMax}${seletedGenre}`;


export const imageURL = (image: string) => `https://image.tmdb.org/t/p/w500${image}`;

export const genreURL = () => 'https://api.themoviedb.org/3/genre/movie/list?api_key=bac128078ed572b3da5ccecc59685054&language=en-US';
