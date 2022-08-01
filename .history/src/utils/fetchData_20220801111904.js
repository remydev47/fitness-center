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
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_YOUTUBE_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data
};