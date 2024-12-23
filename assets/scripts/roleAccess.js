document.addEventListener('DOMContentLoaded', () => {
    fetch('/current-user')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Не вдалося отримати дані користувача');
            }
            return response.json();
        })
        .then((user) => {
            const roles = user.roles || [];
            document.querySelectorAll('[data-role]').forEach((el) => {
                const allowedRoles = el.dataset.role.split(',');
                const isAllowed = allowedRoles.some((role) => roles.includes(role));
                if (!isAllowed) {
                    el.remove() // Або el.remove()
                }
            });
        })
        .catch((error) => {
            console.error('Помилка при отриманні даних користувача:', error);

            // Приховуємо всі елементи з data-role, якщо сталася помилка
            document.querySelectorAll('[data-role]').forEach((el) => {
                el.style.display = 'none'; // Або el.remove()
            });
        });
});
