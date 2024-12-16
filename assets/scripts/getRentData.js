const exportBtn = document.getElementById('exportBtn');
    const monthModal = document.getElementById('monthModal');
    const confirmBtn = document.getElementById('confirmBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const monthSelect = document.getElementById('monthSelect');

    // Показати модальне вікно
    exportBtn.addEventListener('click', () => {
      monthModal.style.display = 'flex';
    });

    // Підтвердити вибір місяця
    confirmBtn.addEventListener('click', () => {
      const month = monthSelect.value;
      const year = new Date().getFullYear();

      if (!month) {
        alert('Будь ласка, оберіть місяць.');
        return;
      }

      // Закриваємо модальне вікно
      monthModal.style.display = 'none';

      // Перенаправляємо на сервер
      window.location.href = `/export-rentals?year=${year}&month=${month}`;
    });

    // Скасувати вибір
    cancelBtn.addEventListener('click', () => {
      monthModal.style.display = 'none';
    });

    // Закривати модальне вікно при кліку за його межами
    window.addEventListener('click', (e) => {
      if (e.target === monthModal) {
        monthModal.style.display = 'none';
      }
    });