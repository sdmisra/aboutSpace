const url = 'https://api.spaceflightnewsapi.net/v4/articles/'

const getAllArticles =  async (path :string = url) => {

  return await fetch(path)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

export default getAllArticles;