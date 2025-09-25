// document.addEventListener('DOMContentLoaded', function () {
//     fetch('./projects.json')
//         .then(response => response.json())
//         .then(projects => {
//             const container = document.getElementById('cards-container');

           
//             projects.forEach(project => {
//                 const card = document.createElement('div');
//                 card.classList.add('card');

                
//                 const img = document.createElement('img');
//                 img.src = project.image;  
//                 img.alt = project.name;

                
//                 const title = document.createElement('h3');
//                 title.classList.add('card-title');
//                 title.innerText = project.name;

                
//                 const content = document.createElement('div');
//                 content.classList.add('card-content');
//                 content.innerHTML = `
//                     <div class="card-info"><strong>Адреса:</strong> ${project.address}</div>
//                     <div class="card-info"><strong>Інвестиції від:</strong> ${project.invest_start_from}</div>
//                     <div class="card-info"><strong>Капіталізація:</strong> ${project.capitalisation}</div>
//                     <div class="card-info"><strong>Річна ставка:</strong> ${project.profit_percent}</div>
//                     <div class="card-info"><strong>Планування:</strong> ${project.planning}</div>
//                     <div class="card-info"><strong>Вартість м2:</strong> ${project.cost}</div>
//                     <div class="card-info"><strong>Зростання вартості:</strong> ${project.cost_growth}</div>
//                     <div class="card-info"><strong>Дата запуску:</strong> ${project.project_launch}</div>
//                     <div class="card-info"><strong>Переваги:</strong><pre>${project.advantages}</pre></div>
//                 `;

                
//                 const button = document.createElement('a');
//                 button.classList.add('details-button');
//                 button.href = '#'; 
//                 button.innerText = 'Детальніше';

                
//                 card.appendChild(img);
//                 card.appendChild(title);
//                 card.appendChild(content);
//                 card.appendChild(button);

                
//                 container.appendChild(card);
//             });
//         });
// });
// ВСТАВЛЯЙ СВОЇ КАРТИНКИ СЮДИ
const images = [
  './image/first_foto.jpg',      // 1 картинка
  './image/second_foto.jpg',     // 2 картинка
  './image/third_foto.jpg'       // 3 картинка
  // додавай свої шляхи
];

let current = 0;

const imgEl = document.getElementById('slider-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showImage(index) {
  imgEl.src = images[index];
}

prevBtn.addEventListener('click', function(e) {
  e.preventDefault();
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

nextBtn.addEventListener('click', function(e) {
  e.preventDefault();
  current = (current + 1) % images.length;
  showImage(current);
});

// Початкова картинка
showImage(current);