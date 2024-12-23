import { displayData, linksColor } from './ui.module.js';
import { showDetails } from './details.module.js';
import { closeDetails } from './details.module.js';

document.querySelector('.close').addEventListener('click', closeDetails);

async function init() {
  await displayData('MMORPG');

  document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', async (e) => {
      e.preventDefault();

      await displayData(link.textContent.trim());

      linksColor(link);
    });
  });
  window.showDetails = showDetails;
}
init();