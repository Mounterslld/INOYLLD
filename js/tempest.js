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
            
            // Цитаты Михаэля
            const quotes = [
                "Время — это не линейка, а спираль. Оно закручивается, петляет, и иногда... ломается.",
                "Вы думали, что это конец? О, нет, это только начало.",
                "Я создал всё это, а теперь убираю за вами. Как нянька.",
                "Что такое время, если не иллюзия? Особенно обеденное.",
                "Хаос — это не беспорядок, а высшая форма гармонии.",
                "Создать вселенную просто. Сложно не вмешиваться, когда они начинают творить глупости.",
                "Чай — это жидкость времени. Каждый глоток — новая эпоха.",
                "Если всё предопределено, зачем мне эти часы? Хотя... они красивые.",
                "Иногда я останавливаю время просто чтобы допить чай. Не судите строго."
            ];
            
            // Элементы DOM
            const quoteText = document.getElementById('quote-text');
            const createBtn = document.getElementById('create-universe');
            const distortBtn = document.getElementById('distort-reality');
            const teaBtn = document.getElementById('drink-tea');
            
            // Показать случайную цитату
            function showRandomQuote() {
                const randomIndex = Math.floor(Math.random() * quotes.length);
                quoteText.textContent = quotes[randomIndex];
            }
            
            // Обработчики событий
            createBtn.addEventListener('click', function() {
                const originalText = createBtn.innerHTML;
                createBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Создание...';
                createBtn.disabled = true;
                
                // Эффект создания вселенной
                document.body.style.background = 'radial-gradient(circle, #ff00cc, #3333ff, #00ccff)';
                document.body.style.backgroundSize = '400% 400%';
                
                setTimeout(() => {
                    createBtn.innerHTML = originalText;
                    createBtn.disabled = false;
                    document.body.style.background = 'radial-gradient(circle at center, #1a1a2e, #0c0c1d, #010114)';
                    
                    // Показать сообщение
                    alert('Новая вселенная успешно создана! Михаэль добавил в нее немного хаоса для баланса.');
                }, 2000);
            });
            
            distortBtn.addEventListener('click', function() {
                // Искажение реальности - анимация элементов
                const elements = document.querySelectorAll('*:not(.stars, .star)');
                elements.forEach(el => {
                    const randomX = (Math.random() - 0.5) * 30;
                    const randomY = (Math.random() - 0.5) * 30;
                    const randomRotate = (Math.random() - 0.5) * 20;
                    const randomScale = 1 + (Math.random() - 0.5) * 0.2;
                    
                    el.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(${randomScale})`;
                    el.style.transition = 'transform 0.5s ease';
                });
                
                setTimeout(() => {
                    elements.forEach(el => {
                        el.style.transform = '';
                    });
                    alert('Реальность успешно искажена! Михаэль довольно улыбается.');
                }, 1000);
            });
            
            teaBtn.addEventListener('click', function() {
                teaBtn.innerHTML = '<i class="fas fa-mug-hot"></i> Наслаждается чаем...';
                teaBtn.disabled = true;
                
                // Эффект пара от чая
                const steam = document.createElement('div');
                steam.style.position = 'fixed';
                steam.style.bottom = '20px';
                steam.style.right = '20px';
                steam.style.fontSize = '48px';
                steam.innerHTML = '☕';
                steam.style.opacity = '0.8';
                steam.style.zIndex = '1000';
                steam.style.animation = 'steam 3s ease forwards';
                document.body.appendChild(steam);
                
                setTimeout(() => {
                    teaBtn.innerHTML = '<i class="fas fa-mug-hot"></i> Выпить чаю';
                    teaBtn.disabled = false;
                    steam.remove();
                    showRandomQuote();
                }, 3000);
            });
            
            // Показать случайную цитату при загрузке
            showRandomQuote();
            
            // Смена цитаты каждые 20 секунд
            setInterval(showRandomQuote, 20000);
            
            // Анимация при загрузке
            setTimeout(() => {
                document.querySelectorAll('.animate').forEach((el, index) => {
                    el.classList.add('animate');
                    el.classList.add(`delay-${index % 4}`);
                });
            }, 100);
            
            // Добавить стили для анимации пара
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes steam {
                    0% { transform: translateY(0) scale(1); opacity: 0.8; }
                    100% { transform: translateY(-100px) scale(1.5); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        });