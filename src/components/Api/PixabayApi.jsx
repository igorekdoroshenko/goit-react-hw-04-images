// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';

// const API_KEY = '35547387-1d51a37224883657f5a5d5cc8';

// export const perPage = 12;

// export const getImages = async (query, page ) => {
//     const response = axios.get(
//         `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
//     );
//     return response.data;
// }



import axios from 'axios';

export const getImages = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api';
  const OPTIONS = `q=${query}&page=${page}&key=35547387-1d51a37224883657f5a5d5cc8&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(`${BASE_URL}/?${OPTIONS}`);
  return response.data;
};
