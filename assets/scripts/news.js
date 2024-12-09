document.addEventListener("DOMContentLoaded", function () {
    const date = new Date();

    const dateToday = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}, ${date.getHours() + ":" + date.getMinutes()}`;


    const newsDate = document.querySelectorAll('.news__date');


    newsDate.forEach(date => date.innerText = dateToday);

    const birthdays = [
        {
            names: ['1abc', '11'],
            dates: ['1.01', '2.01'],
        },
        {
            names: ['2', '22'],
            dates: ['1.02', '2.02'],
        },
        {
            names: ['3', '33'],
            dates: ['1.03', '2.03'],
        },
        {
            names: ['4', '44'],
            dates: ['1.04', '2.04'],
        },
        {
            names: ['5', '55'],
            dates: ['1.05', '2.05'],
        },
        {
            names: ['6', '66'],
            dates: ['1.06', '2.06'],
        },
        {
            names: ['7', '77'],
            dates: ['1.07', '2.07'],
        },
        {
            names: ['8', '88'],
            dates: ['1.08', '2.08'],
        },
        {
            names: ['9', '99'],
            dates: ['1.09', '2.09'],
        },
        {
            names: ['10', '100'],
            dates: ['1.10', '2.10'],
        },
        {
            names: ['11', '111'],
            dates: ['1.11', '2.11'],
        },
        {
            names: ['12', '122'],
            dates: ['1.12', '2.12'],
        },
    ]

    const months = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень",]

    const bdMonth = document.querySelector('.birthdayInfo__month');

    bdMonth.innerText = `${months[date.getMonth()]}`;


    for (let i = 0; i < birthdays[date.getMonth()].names.length; i++) {

        let content = document.createElement('div'),
            name = document.createElement('div'),
            dateBD = document.createElement('div');

        content.classList.add('birthdayInfo__content')
        name.classList.add('birthdayInfo__name');
        dateBD.classList.add('birthdayInfo__date');

        name.innerText = birthdays[date.getMonth()].names[i]
        dateBD.innerText = birthdays[date.getMonth()].dates[i]

        content.append(name, dateBD);
        document.querySelector('.birthdayInfo__main').append(content)
    }





    document.querySelector('.birthdayInfo__count').addEventListener('click', (e) => {
        e.target.classList.toggle('active')
        document.querySelector('.birthdayInfo__main').classList.toggle('hidden')
    })
    fetch('/current-user')
    .then(response => response.json())
    .then(data => console.log('Поточний користувач:', data))
    .catch(error => console.error('Помилка отримання користувача:', error));

    fetch('/infos')
        .then(response => response.json())
        .then(data => {

            data.sort((a, b) => new Date(b.date) - new Date(a.date));

            const infoHtml = data.map(info => `
          <li>
            <div class="news">
              <h2 class="news__title">${info.title}</h2>
              <p class="news__content">${info.newsContent}</p>
              <div class="news__date">
                <p>${new Date(info.date).toLocaleDateString()}</p>
              </div>

              <div class="comments">
                ${info.comments.map(comment => `
                  <div class="comment">
                    <strong>${comment.author}:</strong> ${comment.content}
                  </div>
                `).join('')}
              </div>

              <div class="add-comment">
                <form class="comment" data-id="${info._id}">
                  <textarea class="comment__text" name="content" placeholder="Ваш коментар" required></textarea>
                  <button class="comment__button" type="submit">Відправити</button>
                </form>
              </div>
              
            </div>
          </li>
        `).join('');
            document.getElementById('info-list').innerHTML = infoHtml;

            // Додаємо обробники для кожної форми коментарів
            document.querySelectorAll('.comment').forEach(form => {
                form.addEventListener('submit', function (event) {
                    event.preventDefault();
                    const newsId = form.getAttribute('data-id');
                    const content = form.querySelector('textarea[name="content"]').value;
            
                    // Отримуємо автора з сесії через сервер
                    fetch('/current-user', { credentials: 'include' })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Користувач не авторизований');
                            }
                            return response.json();
                        })
                        .then(user => {
                            const author = user.username;
            
                            // Відправляємо коментар на сервер
                            return fetch(`/infos/${newsId}/comments`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ author, content }),
                            });
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Помилка сервера при створенні коментаря');
                            }
                            return response.json();
                        })
                        .then(() => {
                            window.location.reload();
                        })
                        .catch(error => console.error('Помилка при додаванні коментаря:', error));
                });
            });
            
        })
        .catch(error => console.error('Помилка при завантаженні новин:', error));
});

