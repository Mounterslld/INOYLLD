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
            
            // Анимация при загрузке
            setTimeout(() => {
                document.querySelectorAll('.animate').forEach((el, index) => {
                    el.classList.add('animate');
                    el.classList.add(`delay-${index % 4}`);
                });
            }, 100);
            
            // Эффект при наведении на карточки
            const cards = document.querySelectorAll('.ward-card');
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const angleX = (y - centerY) / 20;
                    const angleY = (centerX - x) / 20;
                    
                    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(-10px)';
                });
            });
        });