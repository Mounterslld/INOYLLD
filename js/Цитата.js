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