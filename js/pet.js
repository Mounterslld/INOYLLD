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
            
            // Анимация при загрузке
            setTimeout(() => {
                document.querySelectorAll('.animate').forEach((el, index) => {
                    el.classList.add('animate');
                    el.classList.add(`delay-${index % 6 + 1}`);
                });
            }, 100);
        });
        
        // Функции для демонстрации способностей
        function demoTimeEffect(type) {
            const card = document.querySelector('.lisa-card');
            const timeEffect = card.querySelector('.time-effect');
            
            if (type === 'slow') {
                timeEffect.style.animation = 'time-slow 3s linear';
                setTimeout(() => {
                    timeEffect.style.animation = '';
                }, 3000);
            } else {
                timeEffect.style.animation = 'time-fast 0.5s linear infinite';
                setTimeout(() => {
                    timeEffect.style.animation = '';
                }, 2000);
            }
        }
        
        function demoPortalEffect() {
            const card = document.querySelector('.alex-card');
            const portal = document.createElement('div');
            portal.className = 'portal-demo';
            portal.innerHTML = '<i class="fas fa-ring"></i>';
            card.appendChild(portal);
            
            setTimeout(() => {
                portal.remove();
            }, 1500);
        }
        
        function demoDragonPower() {
            const card = document.querySelector('.dragon-mother-card');
            card.style.boxShadow = '0 0 30px rgba(255, 71, 87, 0.7)';
            
            setTimeout(() => {
                card.style.boxShadow = '';
            }, 2000);
        }
        
        function demoChaosEffect() {
            const card = document.querySelector('.dragon-baby-card');
            const elements = card.querySelectorAll('*');
            
            elements.forEach(el => {
                const randomRot = (Math.random() - 0.5) * 20;
                const randomX = (Math.random() - 0.5) * 20;
                const randomY = (Math.random() - 0.5) * 20;
                
                el.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRot}deg)`;
                el.style.transition = 'transform 0.5s ease';
            });
            
            setTimeout(() => {
                elements.forEach(el => {
                    el.style.transform = '';
                });
            }, 1000);
        }
        
        function demoStormEffect() {
            const card = document.querySelector('.cassandra-card');
            card.style.boxShadow = '0 0 30px rgba(0, 128, 128, 0.7)';
            
            // Создаем элементы бури
            for (let i = 0; i < 20; i++) {
                const stormElement = document.createElement('div');
                stormElement.className = 'storm-particle';
                stormElement.style.left = `${Math.random() * 100}%`;
                stormElement.style.top = `${Math.random() * 100}%`;
                card.appendChild(stormElement);
                
                // Анимация частицы
                setTimeout(() => {
                    stormElement.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
                    stormElement.style.opacity = '0';
                }, 10);
                
                // Удаляем через 2 секунды
                setTimeout(() => {
                    stormElement.remove();
                }, 2000);
            }
            
            setTimeout(() => {
                card.style.boxShadow = '';
            }, 2000);
        }
        
        function demoGhostEffect() {
            const card = document.querySelector('.darian-card');
            const originalOpacity = card.style.opacity || 1;
            
            // Эффект проявления
            card.style.opacity = '0.3';
            card.style.boxShadow = '0 0 30px rgba(135, 206, 235, 0.7)';
            
            setTimeout(() => {
                card.style.opacity = originalOpacity;
                card.style.boxShadow = '';
            }, 2000);
        }
        
        // Добавляем стили для анимаций
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes time-slow {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
            
            @keyframes time-fast {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
            
            .portal-demo {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100px;
                height: 100px;
                background: rgba(166, 130, 255, 0.2);
                border: 2px dashed rgba(166, 130, 255, 0.8);
                border-radius: 50%;
                transform: translate(-50%, -50%) scale(0);
                animation: portal-open 1.5s ease-out;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                color: white;
                z-index: 10;
            }
            
            @keyframes portal-open {
                0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
            }
            
            .storm-particle {
                position: absolute;
                width: 8px;
                height: 8px;
                background: rgba(0, 128, 128, 0.7);
                border-radius: 50%;
                pointer-events: none;
                z-index: 5;
                transition: all 1.5s ease;
            }
            
            @keyframes ghost-fade {
                0% { opacity: 0.1; }
                100% { opacity: 0.4; }
            }
        `;
        document.head.appendChild(style);