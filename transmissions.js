// Данные трансляций (можно заменить на API запрос)
const liveTransmissions = [
    {
        id: 1,
        user: "StreamerPro",
        title: "Прохождение Cyberpunk 2077: Phantom Liberty",
        game: "Cyberpunk 2077",
        avatar: "https://i.imgur.com/streamer1.jpg",
        thumbnail: "https://i.imgur.com/cyberpunk-thumb.jpg",
        viewers: 1245,
        isLive: true
    },
    {
        id: 2,
        user: "GameMaster",
        title: "Speedrun Dark Souls III - World Record Attempt",
        game: "Dark Souls III",
        avatar: "https://i.imgur.com/streamer2.jpg",
        thumbnail: "https://i.imgur.com/darksouls-thumb.jpg",
        viewers: 876,
        isLive: true
    },
    {
        id: 3,
        user: "EsportsFan",
        title: "Турнир по Dota 2 - Финал чемпионата",
        game: "Dota 2",
        avatar: "https://i.imgur.com/streamer3.jpg",
        thumbnail: "https://i.imgur.com/dota2-thumb.jpg",
        viewers: 2543,
        isLive: true
    }
];

const upcomingTransmissions = [
    {
        id: 4,
        user: "ProGamer",
        title: "Новый сезон в Apex Legends",
        game: "Apex Legends",
        avatar: "https://i.imgur.com/streamer4.jpg",
        date: "15.10",
        time: "20:00"
    },
    {
        id: 5,
        user: "RetroLover",
        title: "Ретро вечер: играем в старые RPG",
        game: "Baldur's Gate",
        avatar: "https://i.imgur.com/streamer5.jpg",
        date: "16.10",
        time: "18:00"
    }
];

// Функция отрисовки трансляций
function renderTransmissions() {
    const grid = document.getElementById('transmissionsGrid');
    grid.innerHTML = '';
    
    liveTransmissions.forEach(transmission => {
        const card = document.createElement('div');
        card.className = 'transmission-card';
        card.innerHTML = `
            <div class="transmission-thumbnail">
                <img src="${transmission.thumbnail}" alt="${transmission.title}">
                ${transmission.isLive ? '<span class="live-indicator">LIVE</span>' : ''}
                <span class="viewer-count"><i class="fas fa-eye"></i> ${transmission.viewers}</span>
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
            </div>
        `;
        card.addEventListener('click', () => {
            openTransmission(transmission.id);
        });
        grid.appendChild(card);
    });
}

// Функция отрисовки предстоящих трансляций
function renderUpcoming() {
    const list = document.getElementById('upcomingList');
    list.innerHTML = '';
    
    upcomingTransmissions.forEach(transmission => {
        const [day, month] = transmission.date.split('.');
        
        const card = document.createElement('div');
        card.className = 'upcoming-card';
        card.innerHTML = `
            <div class="upcoming-time">
                <span class="upcoming-day">${day}</span>
                <span class="upcoming-month">окт</span>
            </div>
            <img src="${transmission.avatar}" alt="${transmission.user}" class="user-avatar">
            <div class="upcoming-info">
                <span class="upcoming-title">${transmission.title}</span>
                <span class="upcoming-user">${transmission.user} • ${transmission.time}</span>
            </div>
        `;
        list.appendChild(card);
    });
}

// Функция открытия трансляции (заглушка)
function openTransmission(id) {
    // В реальном проекте здесь будет переход на страницу трансляции
    console.log(`Opening transmission ${id}`);
    window.location.href = `transmission.html?id=${id}`;
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderTransmissions();
    renderUpcoming();
    
    // Обработчики для кнопок сортировки
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Здесь можно добавить логику сортировки
        });
    });
});
/*API-запросы:*/
async function fetchLiveTransmissions() {
    try {
        const response = await fetch('https://api.yourservice.com/live-streams');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching live streams:', error);
        return [];
    }
}

/*WebSocket для обновления в реальном времени:*/
const socket = new WebSocket('wss://stream.yourservice.com/updates');

socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    if (data.type === 'stream_started') {
        // Добавить новую трансляцию
        liveTransmissions.unshift(data.stream);
        renderTransmissions();
    }
};