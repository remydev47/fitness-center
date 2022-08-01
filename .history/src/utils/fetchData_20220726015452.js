export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6dce4f1813mshc87cb80b9ec3143p14b126jsne6f43eebe058',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data
}