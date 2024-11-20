document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newsForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
  
      // Відправка POST-запиту на сервер для створення новини
      fetch('/infos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          newsContent: content
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Новина успішно створена:', data);
        // Перенаправлення на сторінку новин після успішного створення
        window.location.href = '/pages/news.html';
      })
      .catch(error => {
        console.error('Помилка при створенні новини:', error);
      });
    });
  });
  