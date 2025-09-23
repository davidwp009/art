// Fetch JSON data for the resorts
fetch('progects.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('cards-container');

        // Iterate through each resort and create a card
        data.resorts.forEach(resort => {
            const card = createCard(resort);
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading data:', error));

// Function to create a card dynamically
function createCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = data.imageUrl;
    image.alt = data.title;
    card.appendChild(image);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const title = document.createElement('div');
    title.classList.add('card-title');
    title.textContent = data.title;
    cardContent.appendChild(title);

    const info = document.createElement('div');
    info.classList.add('card-info');
    info.innerHTML = `
        <span>Сума інвестицій: ${data.investmentAmount}</span>
        <span>Капіталізація: ${data.capitalization}</span>
        <span>Дата відкриття: ${data.openingDate}</span>
        <span>Річна ставка: ${data.interestRate}</span>
        <span>Місцезнаходження: ${data.location}</span>
    `;
    cardContent.appendChild(info);

    const footer = document.createElement('div');
    footer.classList.add('card-footer');
    const detailsButton = document.createElement('button');
    detailsButton.classList.add('details-button');
    detailsButton.textContent = 'Детальніше';
    detailsButton.onclick = () => showDetails(data.details); // Show details on button click
    footer.appendChild(detailsButton);

    card.appendChild(cardContent);
    card.appendChild(footer);

    return card;
}

// Function to show detailed information
function showDetails(details) {
    alert(details);
}
