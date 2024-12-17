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
confirmBtn.addEventListener('click', async () => {
  const month = monthSelect.value;
  const year = new Date().getFullYear();

  if (!month) {
    alert('Будь ласка, оберіть місяць.');
    return;
  }

  try {
    // Запит на сервер для отримання файлу
    const response = await fetch(`/export-rentals?year=${year}&month=${month}`);
    if (!response.ok) {
      throw new Error('Помилка при отриманні даних.');
    }

    // Перетворюємо відповідь у Blob
    const blob = await response.blob();

    // Завантажуємо файл за допомогою FileSaver.js
    saveAs(blob, `rentals_${year}_${month}.xlsx`);
  } catch (error) {
    console.error('Помилка:', error);
    alert('Не вдалося завантажити файл.');
  } finally {
    monthModal.style.display = 'none';
  }
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