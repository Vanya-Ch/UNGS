document.addEventListener("DOMContentLoaded", function () {
    const date = new Date();

    const dateToday = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}, ${date.getHours() + ":" + date.getMinutes()}`;


    const newsDate = document.querySelectorAll('.news__date');


    newsDate.forEach(date => date.innerText = dateToday);

    const birthdays = [
        {
            names: ["Айперт Валдемар", "Смага Юрій", "Рау Данііл", "Пасько Інна", "Портний Дмитро", "Голенко Ігор", "Богданова Ганна"],
            dates: ["08.01", "11.01", "10.01", "18.01", "19.01", "23.01", "30.01"],
        },
        {
            names: ["Назаренко Борис", "Айперт Валдемар", "Литвиненко Олена", "Ковбаснюк Віктор", "Пуденко Ольга", "Лазоренко Віталій"],
            dates: ["05.02", "08.02", "15.02", "17.02", "18.02", "27.02"],
        },
        {
            names: ["Безух Олег", "Трутень Юлія", "Спичак Ірина"],
            dates: ["08.03", "25.03", "29.03"],
        },
        {
            names: ["Твердохліб Василь", "Гулькевич Владислав", "Мосієнко Сергій", "Логвиненко Максим"],
            dates: ["01.04", "25.04", "28.04", "29.04"],
        },
        {
            names: ["Ландар Сергій", "Ступак Віктор", "Кириченко Юрій", "Кухарець Олександр"],
            dates: ["03.05", "09.05", "24.05", "25.05"],
        },
        {
            names: ["Кучер Денис", "Олефір Костянтин"],
            dates: ["14.06", "22.06"],
        },
        {
            names: ["Бондар Андрій", "Харченко Станіслав", "Маловік Роман", "Носенко Михайло", "Павлій Євгеній"],
            dates: ["01.07", "16.07", "21.07", "27.07", "27.07"],
        },
        {
            names: ["Кісіль Тарас", "Ганнус Яків", "Позняковський Андрій"],
            dates: ["03.08", "19.08", "22.08"],
        },
        {
            names: ["Симоненко Євгеній", "Семенченко Людмила", "Татаурова Дар'я", "Костюк Микола"],
            dates: ["02.09", "02.09", "19.09", "21.09"],
        },
        {
            names: ["Вітрик Ігор", "Милейко Юлія", "Крещик Леонід", "Топтун Максим", "Мазуренко Владислав"],
            dates: ["03.10", "08.10", "18.10", "23.10", "28.10"],
        },
        {
            names: ["Костенко Анна", "Бурка Андрій", "Бондаревський Максим", "Саленко Максим", "Фолизюк Михайло", "Патьома Олександр", "Нагірний Іван"],
            dates: ["03.11", "09.11", "12.11", "13.11", "18.11", "27.11", "30.11"],
        },
        {
            names: ["Ноженко Олексій"],
            dates: ["22.12"],
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
                  <div class="comment__message">
                    <strong>${comment.author}:</strong> ${comment.content}
                  </div>
                `).join('')}
              </div>

              <div class="add-comment">
                <form class=" comment comment__fields" data-id="${info._id}">
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
                            const author = `${user.surname} ${user.name}`;
            
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

