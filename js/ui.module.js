export function displayData(category) {
  var url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
  
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
      var container = '';
      for (var i = 0; i < finalData.length; i++) {
        var shortDescription = finalData[i].short_description
          .split(' ')
          .slice(0, 12)
          .join(' ') + '...';
        
        container += `<div class="col-3" onclick="showDetails(${finalData[i].id})">
              <div class="card">
                <img src="${finalData[i].thumbnail}" class="card-img-top game-thumbnail p-2" alt="" />
                <div class="card-body">
                  <div class="card-main-info d-flex justify-content-between">
                    <h5 class="card-title game-title">${finalData[i].title}</h5>
                    <p class="price game-price">free</p>
                  </div>
                  <p class="card-text text-center game-desc">${shortDescription}</p>
                </div>
                <div class="card-footer d-flex justify-content-between fw-bold">
                  <p class="text-uppercase m-0 game-category">${finalData[i].genre}</p>
                  <p class="game-platform m-0">${finalData[i].platform}</p>
                </div>
              </div>
            </div>`;
      }
      document.querySelector(".games-row").innerHTML = container;
    })
    .catch(error => console.error('Error fetching data:', error));
}

export function linksColor(clickedLink) {
  var links = document.querySelectorAll('.links a');
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }
  clickedLink.classList.add('active');
}
