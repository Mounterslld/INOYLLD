        document.addEventListener('DOMContentLoaded', function() {
            // Создание звездного фона
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < 200; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.width = `${Math.random() * 3}px`;
                star.style.height = star.style.width;
                star.style.opacity = Math.random() * 0.8 + 0.2;
                star.style.setProperty('--duration', `${Math.random() * 5 + 2}s`);
                starsContainer.appendChild(star);
            }
            
            // Создание парящих чашек чая
            const teaContainer = document.getElementById('tea-container');
            function createTeaSteam() {
                const steam = document.createElement('div');
                steam.className = 'tea-steam';
                steam.innerHTML = '☕';
                steam.style.left = `${Math.random() * 90}%`;
                steam.style.fontSize = `${Math.random() * 40 + 30}px`;
                steam.style.animationDuration = `${Math.random() * 15 + 10}s`;
                teaContainer.appendChild(steam);
                
                // Удаление элемента после завершения анимации
                setTimeout(() => {
                    steam.remove();
                }, 20000);
            }
            
            // Создаем несколько чашек
            for (let i = 0; i < 5; i++) {
                setTimeout(createTeaSteam, i * 3000);
            }
            
            // Продолжаем создавать чашки каждые 5 секунд
            setInterval(createTeaSteam, 5000);
            
            // Фильтрация цитат по категориям
            const categoryBtns = document.querySelectorAll('.category-btn');
            const quoteCards = document.querySelectorAll('.quote-card');
            
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Убираем активный класс у всех кнопок
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    // Добавляем активный класс текущей кнопке
                    btn.classList.add('active');
                    
                    const category = btn.dataset.category;
                    
                    // Показываем/скрываем цитаты
                    quoteCards.forEach(card => {
                        if (category === 'all' || card.dataset.category === category) {
                            card.style.display = 'block';
                            // Добавляем анимацию появления
                            card.style.animation = 'fadeIn 0.8s ease forwards';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
            
            // Копирование цитаты
            const copyBtns = document.querySelectorAll('.quote-btn .fa-copy');
            copyBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const quoteText = this.closest('.quote-card').querySelector('.quote-text').textContent;
                    navigator.clipboard.writeText(quoteText)
                        .then(() => {
                            const originalIcon = this.className;
                            this.className = 'fas fa-check';
                            setTimeout(() => {
                                this.className = originalIcon;
                            }, 2000);
                        });
                });
            });
            
            // Случайная анимация для цитат
            quoteCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });
        });
        // Функция для инициализации скроллбара Михаэля
function initMichaelScrollbar() {
    // Создаем стили для скроллбара
    const style = document.createElement('style');
    style.id = 'michael-scrollbar-style';
    style.textContent = `
        /* Основной скроллбар */
        ::-webkit-scrollbar {
            width: 14px;
            height: 14px;
        }
        
        /* Трек (фон) скроллбара */
        ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            border: 1px solid rgba(255, 215, 0, 0.1);
        }
        
        /* Ползунок скроллбара */
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(45deg, #FFD700, #8A2BE2);
            border-radius: 10px;
            border: 2px solid rgba(23, 26, 33, 0.9);
            box-shadow: inset 0 0 5px rgba(255, 215, 0, 0.5);
            transition: all 0.3s ease;
        }
        
        /* Ползунок при наведении */
        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(45deg, #8A2BE2, #FFD700);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.7);
        }
        
        /* Угол скроллбара */
        ::-webkit-scrollbar-corner {
            background: transparent;
        }
        
        /* Кнопки скроллбара (стрелки) */
        ::-webkit-scrollbar-button {
            display: none;
        }
    `;
    
    // Добавляем стили в head документа
    document.head.appendChild(style);
    
    // Для Firefox (который не поддерживает ::-webkit-scrollbar)
    if (typeof InstallTrigger !== 'undefined') {
        const firefoxStyle = document.createElement('style');
        firefoxStyle.textContent = `
            html {
                scrollbar-color: #FFD700 rgba(255, 255, 255, 0.05);
                scrollbar-width: thin;
            }
        `;
        document.head.appendChild(firefoxStyle);
    }
    
    // Добавляем обработчик для плавного скролла
    document.documentElement.style.scrollBehavior = 'smooth';
    
    console.log('Скроллбар Михаэля инициализирован!');
}

// Функция для удаления скроллбара Михаэля
function removeMichaelScrollbar() {
    const style = document.getElementById('michael-scrollbar-style');
    if (style) {
        style.remove();
    }
    
    // Удаляем стили для Firefox
    const firefoxStyles = document.querySelectorAll('style');
    firefoxStyles.forEach(style => {
        if (style.textContent.includes('scrollbar-color')) {
            style.remove();
        }
    });
    
    // Возвращаем стандартное поведение скролла
    document.documentElement.style.scrollBehavior = '';
    
    console.log('Скроллбар Михаэля удален!');
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initMichaelScrollbar);

// Экспорт функций для использования в модульных системах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initMichaelScrollbar,
        removeMichaelScrollbar
    };
}