// Данные об играх
const games = [
    {
        id: 1,
        title: "The Witcher 3",
        genre: "rpg",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
        description: "Охотник на чудовищ Геральт из Ривии отправляется в эпическое путешествие по войной разорённым королевствам."
    },
    {
        id: 2,
        title: "Cyberpunk 2077",
        genre: "rpg",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
        description: "Откройте для себя Найт-Сити — город будущего, где власть, роскошь и модификации тела решают всё."
    },
    {
        id: 3,
        title: "Counter-Strike 2",
        genre: "shooter",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
        description: "Легендарный тактический шутер с командными режимами и киберспортивной сценой."
    },
    {
        id: 4,
        title: "Stellaris",
        genre: "strategy",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/281990/header.jpg",
        description: "Глобальная стратегия с исследованием галактики, дипломатией и межзвёздными войнами."
    },
    {
        id: 5,
        title: "Hollow Knight",
        genre: "indie",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg",
        description: "Метроидвания с атмосферным подземным миром и запоминающимися боссами."
    }
];

// Заполняем сетку игр
const gamesGrid = document.getElementById('gamesGrid');
const modal = document.getElementById('gameModal');
const modalTitle = document.querySelector('.modal-title');
const modalImage = document.querySelector('.modal-image');
const modalDescription = document.querySelector('.modal-description');
const modalGenre = document.querySelector('.modal-genre');
const closeBtn = document.querySelector('.close-btn');

function renderGames(genre = 'all') {
    gamesGrid.innerHTML = '';
    const filteredGames = genre === 'all' ? games : games.filter(game => game.genre === genre);
    
    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${game.genre.toUpperCase()}</p>
            </div>
        `;
        gameCard.addEventListener('click', () => openModal(game));
        gamesGrid.appendChild(gameCard);
    });
}

// Открытие модального окна
function openModal(game) {
    modalTitle.textContent = game.title;
    modalImage.src = game.image;
    modalDescription.textContent = game.description;
    modalGenre.textContent = `Жанр: ${game.genre.toUpperCase()}`;
    modal.style.display = 'flex';
}

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Фильтрация по жанрам
document.querySelectorAll('.genre-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGames(btn.dataset.genre);
    });
});

// Первоначальная загрузка
renderGames();