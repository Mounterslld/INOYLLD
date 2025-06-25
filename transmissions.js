// Данные трансляций (можно заменить на API запрос)
const liveTransmissions = [
    {
        id: 1,
        user: "StreamerPro",
        title: "Прохождение Cyberpunk 2077: Phantom Liberty",
        game: "Cyberpunk 2077",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        thumbnail: "https://avatars.mds.yandex.net/i?id=06790461fdf39c5317c96a3e3980a0d48c724c0b397ffb27-5433970-images-thumbs&n=13",
        viewers: 1245,
        isLive: true
    },
    {
        id: 2,
        user: "GameMaster",
        title: "Speedrun Dark Souls III - World Record Attempt",
        game: "Dark Souls III",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        thumbnail: "https://avatars.mds.yandex.net/i?id=05490632327b0ad4e14a1e040e9c79fff54b1eea-5449619-images-thumbs&n=13",
        viewers: 876,
        isLive: true
    },
    {
        id: 3,
        user: "EsportsFan",
        title: "Турнир по Dota 2 - Финал чемпионата",
        game: "Dota 2",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        thumbnail: "https://avatars.mds.yandex.net/i?id=ff8f417050403581b865878d1617ad1a1c47846b-5220447-images-thumbs&n=13",
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
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        date: "29.10",
        time: "20:00"
    },
    {
        id: 5,
        user: "RetroLover",
        title: "Ретро вечер: играем в старые RPG",
        game: "Baldur's Gate",
        avatar: "https://a.imgfoto.host/2025/06/21/photo_2025-06-21_17-32-53.md.jpeg",
        date: "28.10",
        time: "18:00"
    },
        {
        id: 5,
        user: "Kklamix",
        title: "Играем в майн с друзьями",
        game: "MINECRAFT",
        avatar: "https://i.pinimg.com/736x/09/e9/8d/09e98d99440749aa978e4db4cf6daca2.jpg",
        date: "26.10",
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
                <span class="upcoming-month">июнь</span>
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