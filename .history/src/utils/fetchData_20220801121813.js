export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
       'X-RapidAPI-Key':  process.env.REACT_APP_RAPID_API_KEY,
    },
  }; 

 export  const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    headers: {
      'X-RapidAPI-Key':   '51e5534e0cmshb26092d53b1ba9ap1cfd53jsn8701a0c49f32',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data
};