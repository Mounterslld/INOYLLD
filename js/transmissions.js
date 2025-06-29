// Данные трансляций
const liveTransmissions = [
    {
        id: 1,
        user: "StreamerPro",
        title: "Прохождение Cyberpunk 2077: Phantom Liberty",
        game: "Cyberpunk 2077",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        thumbnail: "https://avatars.mds.yandex.net/i?id=06790461fdf39c5317c96a3e3980a0d48c724c0b397ffb27-5433970-images-thumbs&n=13",
        viewers: 1245,
        isLive: true,
        favorite: false,
        tags: ["RPG", "Открытый мир"]
    },
    {
        id: 2,
        user: "GameMaster",
        title: "Speedrun Dark Souls III - World Record Attempt",
        game: "Dark Souls III",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        thumbnail: "https://avatars.mds.yandex.net/i?id=05490632327b0ad4e14a1e040e9c79fff54b1eea-5449619-images-thumbs&n=13",
        viewers: 876,
        isLive: true,
        favorite: true,
        tags: ["Хардкор", "Экшен"]
    },
    {
        id: 3,
        user: "EsportsFan",
        title: "Турнир по Dota 2 - Финал чемпионата",
        game: "Dota 2",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        thumbnail: "https://avatars.mds.yandex.net/i?id=ff8f417050403581b865878d1617ad1a1c47846b-5220447-images-thumbs&n=13",
        viewers: 2543,
        isLive: true,
        favorite: false,
        tags: ["Киберспорт", "MOBA"]
    },
    {
        id: 4,
        user: "IndieDev",
        title: "Разработка своей игры на Unity - День 15",
        game: "Unity Engine",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        thumbnail: "https://avatars.mds.yandex.net/i?id=f8638bbf94f6d0f5741e76fcaebba10b3cd688e7-4935642-images-thumbs&n=13",
        viewers: 421,
        isLive: true,
        favorite: true,
        tags: ["Разработка", "Обучение"]
    },
    {
        id: 5,
        user: "RetroGamer",
        title: "Ретро-гейминг: играем в старые хиты 90-х",
        game: "Retro Games",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        thumbnail: "https://avatars.mds.yandex.net/i?id=f4287fb6b381b53d409cee101ed714362cd6de8b-5232419-images-thumbs&n=13",
        viewers: 567,
        isLive: true,
        favorite: false,
        tags: ["Ретро", "Ностальгия"]
    },
    {
        id: 6,
        user: "CosplayQueen",
        title: "Создаем костюм из The Witcher - процесс создания",
        game: "The Witcher 3",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        thumbnail: "https://avatars.mds.yandex.net/i?id=1910403b43bb4cc3ab2fdeb2f6babf22_l-12923036-images-thumbs&n=13",
        viewers: 789,
        isLive: true,
        favorite: true,
        tags: ["Косплей", "Творчество"]
    }
];
const upcomingTransmissions = [
    {
        id: 5,
        user: "ProGamer",
        title: "Новый сезон в Apex Legends",
        game: "Apex Legends",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        date: new Date(Date.now() + 86400000), // Завтра
        duration: 120
    },
    {
        id: 6,
        user: "RetroLover",
        title: "Ретро вечер: играем в старые RPG",
        game: "Baldur's Gate",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        date: new Date(Date.now() + 172800000), // Послезавтра
        duration: 90
    },
    {
        id: 7,
        user: "Kklamix",
        title: "Играем в майн с друзьями",
        game: "MINECRAFT",
        avatar: "https://i.pinimg.com/736x/09/e9/8d/09e98d99440749aa978e4db4cf6daca2.jpg",
        date: new Date(Date.now() + 259200000), // Через 3 дня
        duration: 180 
    },
    {
        id: 8,
        user: "TechReviewer",
        title: "Обзор новой игровой периферии",
        game: "Hardware",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        date: new Date(Date.now() + 345600000), // Через 4 дня
        duration: 60
    }
];

// Данные новостей
const streamerNews = [
    {
        id: 1,
        user: "StreamerPro",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        content: "Завтра в 19:00 по МСК запускаю новый проект по прохождению всех игр серии The Witcher! Присоединяйтесь!",
        time: "2 часа назад",
        tags: ["анонс", "ролевые игры"]
    },
    {
        id: 2,
        user: "EsportsFan",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        content: "Только что завершился турнир по Dota 2 с призовым фондом $500,000! Победила команда Team Spirit!",
        time: "5 часов назад",
        tags: ["киберспорт", "турнир"]
    },
    {
        id: 3,
        user: "IndieDev",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        content: "Выпустил новое обновление для своей игры! Добавил 3 новых уровня и систему достижений.",
        time: "вчера",
        tags: ["разработка", "обновление"]
    },
    {
        id: 4,
        user: "CosplayQueen",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        content: "Завершила работу над костюмом Цири из The Witcher. Фотосессия в студии на следующей неделе!",
        time: "2 дня назад",
        tags: ["косплей", "творчество"]
    }
];

// Настройки
const itemsPerPage = 6;
let currentPage = 1;
let currentFilter = "all";
let isListView = false;
let userFavorites = JSON.parse(localStorage.getItem('streamFavorites')) || [2, 4];

// DOM элементы
const transmissionsGrid = document.getElementById('transmissionsGrid');
const upcomingList = document.getElementById('upcomingList');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const currentPageEl = document.getElementById('currentPage');
const totalPagesEl = document.getElementById('totalPages');
const timezoneSelect = document.getElementById('timezoneSelect');
const newsFeed = document.getElementById('newsFeed');

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderTransmissions();
    renderUpcoming();
    renderNewsFeed();
    setupEventListeners();
});

function setupEventListeners() {
    // Кнопки сортировки
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            currentPage = 1;
            renderTransmissions();
        });
    });

    // Переключение вида
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            isListView = this.dataset.view === 'list';
            transmissionsGrid.classList.toggle('list-view', isListView);
            renderTransmissions();
        });
    });

    // Пагинация
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTransmissions();
        }
    });

    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(getFilteredTransmissions().length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderTransmissions();
        }
    });

    // Смена часового пояса
    timezoneSelect.addEventListener('change', renderUpcoming);

    // Обновление ленты новостей
    document.querySelector('.refresh-btn').addEventListener('click', renderNewsFeed);
}

// Фильтрация трансляций
function getFilteredTransmissions() {
    let filtered = [...liveTransmissions];
    
    if (currentFilter === "live") {
        filtered = filtered.filter(t => t.isLive);
    } else if (currentFilter === "popular") {
        filtered = filtered.filter(t => t.viewers > 1000);
    } else if (currentFilter === "favorites") {
        filtered = filtered.filter(t => userFavorites.includes(t.id));
    }
    
    return filtered;
}

// Отрисовка трансляций
function renderTransmissions() {
    const filtered = getFilteredTransmissions();
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);
    
    transmissionsGrid.innerHTML = '';
    
    if (paginated.length === 0) {
        transmissionsGrid.innerHTML = `
            <div class="no-results">
                <h3>Трансляции не найдены</h3>
                <p>Попробуйте изменить фильтры или зайти позже</p>
            </div>
        `;
        return;
    }
    
    paginated.forEach(transmission => {
        const isFavorite = userFavorites.includes(transmission.id);
        
        const card = document.createElement('div');
        card.className = `transmission-card ${isListView ? 'list-view' : ''}`;
        card.innerHTML = `
            <div class="transmission-thumbnail">
                <img src="${transmission.thumbnail}" alt="${transmission.title}">
                ${transmission.isLive ? '<span class="live-indicator">LIVE</span>' : ''}
                <span class="viewer-count">${formatViewers(transmission.viewers)}</span>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${transmission.id}">
                    ${isFavorite ? '★' : '☆'}
                </button>
            </div>
            <div class="transmission-info">
                <div class="transmission-user">
                    <img src="${transmission.avatar}" alt="${transmission.user}" class="user-avatar">
                    <div class="user-info">
                        <span class="user-name">${transmission.user}</span>
                        <span class="user-game">${transmission.game}</span>
                    </div>
                </div>
                <h3 class="transmission-title">${transmission.title}</h3>
                <div class="game-tags">
                    ${transmission.tags.map(tag => `<span class="game-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.favorite-btn')) {
                openTransmission(transmission.id);
            }
        });
        
        const favBtn = card.querySelector('.favorite-btn');
        favBtn.addEventListener('click', toggleFavorite);
        
        transmissionsGrid.appendChild(card);
    });
    
    // Обновление пагинации
    currentPageEl.textContent = currentPage;
    totalPagesEl.textContent = totalPages || 1;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

// Отрисовка предстоящих трансляций
function renderUpcoming() {
    upcomingList.innerHTML = '';
    
    if (upcomingTransmissions.length === 0) {
        upcomingList.innerHTML = `
            <div class="no-upcoming">
                <p>Предстоящих трансляций нет</p>
            </div>
        `;
        return;
    }
    
    upcomingTransmissions.forEach(transmission => {
        const timezone = timezoneSelect.value;
        let date = new Date(transmission.date);
        
        // Корректировка времени по часовому поясу
        if (timezone === "utc") {
            date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
        } else if (timezone === "msk") {
            date = new Date(date.getTime() + 3 * 60 * 60000);
        }
        
        const day = date.getDate();
        const month = getMonthName(date.getMonth());
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const durationHours = Math.floor(transmission.duration / 60);
        const durationMinutes = transmission.duration % 60;
        
        const card = document.createElement('div');
        card.className = 'upcoming-card';
        card.innerHTML = `
            <div class="upcoming-time">
                <span class="upcoming-day">${day}</span>
                <span class="upcoming-month">${month}</span>
            </div>
            <img src="${transmission.avatar}" alt="${transmission.user}" class="user-avatar">
            <div class="upcoming-info">
                <span class="upcoming-title">${transmission.title}</span>
                <span class="upcoming-user">${transmission.user} • ${hours}:${minutes} • ${durationHours}ч ${durationMinutes}мин</span>
            </div>
        `;
        
        upcomingList.appendChild(card);
    });
}

// Отрисовка ленты новостей
function renderNewsFeed() {
    newsFeed.innerHTML = '';
    
    if (streamerNews.length === 0) {
        newsFeed.innerHTML = `
            <div class="no-news">
                <p>Новостей пока нет</p>
            </div>
        `;
        return;
    }
    
    streamerNews.forEach(news => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
            <div class="news-header">
                <img src="${news.avatar}" alt="${news.user}" class="news-avatar">
                <span class="news-user">${news.user}</span>
                <span class="news-time">${news.time}</span>
            </div>
            <div class="news-content">${news.content}</div>
            <div class="news-tags">
                ${news.tags.map(tag => `<span class="news-tag">${tag}</span>`).join('')}
            </div>
        `;
        
        newsFeed.appendChild(card);
    });
}

// Вспомогательные функции
function formatViewers(viewers) {
    if (viewers >= 1000) {
        return (viewers / 1000).toFixed(1) + 'K';
    }
    return viewers;
}

function getMonthName(monthIndex) {
    const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    return months[monthIndex];
}

function toggleFavorite(e) {
    const btn = e.currentTarget;
    const id = parseInt(btn.dataset.id);
    const isFavorite = btn.classList.contains('active');
    
    if (isFavorite) {
        userFavorites = userFavorites.filter(favId => favId !== id);
        btn.classList.remove('active');
        btn.innerHTML = '☆';
    } else {
        userFavorites.push(id);
        btn.classList.add('active');
        btn.innerHTML = '★';
    }
    
    localStorage.setItem('streamFavorites', JSON.stringify(userFavorites));
    
    if (currentFilter === "favorites") {
        renderTransmissions();
    }
}

function openTransmission(id) {
    console.log(`Opening transmission ${id}`);
}

// Имитация загрузки данных
setTimeout(() => {
    renderTransmissions();
    renderUpcoming();
    renderNewsFeed();
}, 1500);

// WebSocket соединение (имитация)
function simulateWebSocket() {
    setInterval(() => {
        const randomStream = liveTransmissions[Math.floor(Math.random() * liveTransmissions.length)];
        const viewersChange = Math.floor(Math.random() * 50) - 20;
        randomStream.viewers = Math.max(100, randomStream.viewers + viewersChange);
        
        document.querySelectorAll('.transmission-card').forEach(card => {
            const id = parseInt(card.querySelector('.favorite-btn')?.dataset.id);
            if (id === randomStream.id) {
                const viewersEl = card.querySelector('.viewer-count');
                if (viewersEl) {
                    viewersEl.textContent = formatViewers(randomStream.viewers);
                }
            }
        });
    }, 5000);
}
simulateWebSocket();