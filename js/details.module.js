export function showDetails(id) {
  const gameDetails = document.querySelector('.game-details-container');
  const gamesHome = document.querySelector('.home');

  gameDetails.classList.replace('d-none', 'd-block');
  gamesHome.classList.replace('d-block', 'd-none');

  var url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  
  var options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e73a1e2e3bmsh8f8f6ed1e3bb166p1222e1jsnb0a1f7b02531',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then(response => response.json())
    .then(finalData => {
      const detailsTitle = document.querySelector('.details-title');
      const detailsImage = document.querySelector('.details-cover');
      const detailsCategory = document.querySelector('.details-category');
      const detailsPlatform = document.querySelector('.details-platform');
      const detailsStatus = document.querySelector('.details-status');
      const detailsDesc = document.querySelector('.details-long-desc');
      const detailsBtn = document.querySelector('.show-game');

      detailsTitle.innerHTML = finalData.title; 
      detailsImage.src = finalData.thumbnail; 
      detailsCategory.innerHTML = finalData.genre;
      detailsPlatform.innerHTML = finalData.platform;
      detailsStatus.innerHTML = finalData.status;
      detailsDesc.innerHTML = finalData.description;

      detailsBtn.onclick = function() {
        window.open(finalData.game_url, '_blank');
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}

export function closeDetails() {
  const gameDetails = document.querySelector('.game-details-container');
  const gamesHome = document.querySelector('.home');

  if (gameDetails && gamesHome) {
    gameDetails.classList.replace('d-block', 'd-none');
    gamesHome.classList.replace('d-none', 'd-block');
  }
}

