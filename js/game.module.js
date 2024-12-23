export async function getGame(id) {
  var url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  
  var options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e73a1e2e3bmsh8f8f6ed1e3bb166p1222e1jsnb0a1f7b02531',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  try {
    var response = await fetch(url, options);
    var finalData = await response.json();
    return finalData;
  } catch (error) {
    console.error('Error fetching game data:', error);
    return null;
  }
}
