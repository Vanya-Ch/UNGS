document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rentCarForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const car = document.getElementById('car').value;
        const driver = document.getElementById('driver').value;
        const startPoint = document.getElementById('startPoint').value;
        const destination = document.getElementById('destination').value;
        const startTime = new Date(document.getElementById('startTime').value).toISOString();
        const endTime = new Date(document.getElementById('endTime').value).toISOString();
        const comment = document.getElementById('comment').value;
        const passanger = document.getElementById('passanger').value;
        const typeOfTravel = document.getElementById('typeOfTravel').value;

        fetch('/rentCar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                car,
                driver,
                startPoint,
                destination,
                time: [{ startTime, endTime }],
                comment,
                passanger,
                typeOfTravel
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                } else {
                    alert('Бронювання успішно створене!');
                }
            })
            .catch(error => {
                console.error('Помилка при створенні бронювання:', error);
            });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const carSelect = document.getElementById('car');
    const carImage = document.getElementById('carImage');
    const driverSelect = document.getElementById('driver');


    const carToDriver = {
        'Toyota Hilux  ВІ 1900 СН': 'Євгеній Павлій',
        'Toyota Hilux  ВІ 0019 ВМ': 'Олександр Патьома',
        'Toyota Prado  ВІ 7040 ІС': 'Олександр Карпенко',
        'Range Rover  ВІ 0070 СК': 'Максим Логвиненко',
        'Volkswagen Touareg  ВІ 1963 ІН': 'Без водія',
        'Volkswagen T6  ВІ 0440 НС': 'Олексій Ноженко'
    };


    const carImages = {
        'Toyota Hilux  ВІ 1900 СН': '../assets/images/hilux_blue.png',
        'Toyota Hilux  ВІ 0019 ВМ': '../assets/images/hilux_blue.png',
        'Toyota Prado  ВІ 7040 ІС': '../assets/images/prado_black.png',
        'Range Rover  ВІ 0070 СК': '../assets/images/land_rover_gray.png',
        'Volkswagen Touareg  ВІ 1963 ІН': '../assets/images/touareg_black.png',
        'Volkswagen T6  ВІ 0440 НС': '../assets/images/volkswagen_t6_white.png'
    };

    carSelect.addEventListener('change', function () {
        const selectedCar = carSelect.value;


        if (selectedCar === 'Volkswagen Touareg  ВІ 1963 ІН') {
            driverSelect.disabled = false;
        } else {
            driverSelect.disabled = true;
            driverSelect.value = carToDriver[selectedCar];
        }


        carImage.classList.remove('fade-in');
        carImage.classList.add('fade-out');

        setTimeout(() => {
            carImage.src = carImages[selectedCar];
            carImage.classList.remove('fade-out');
            carImage.classList.add('fade-in');
        }, 500);
    });
});


document.addEventListener('DOMContentLoaded', async function () {
    try {
        const [bookingsResponse, driversResponse] = await Promise.all([
            fetch('/rentCar'),
            fetch('/users/drivers')
        ]);

        if (!bookingsResponse.ok) {
            throw new Error(`Помилка запиту /rentCar: ${bookingsResponse.status}`);
        }
        if (!driversResponse.ok) {
            throw new Error(`Помилка запиту /users/drivers: ${driversResponse.status}`);
        }

        const bookings = await bookingsResponse.json();
        const drivers = await driversResponse.json();

        // Створюємо мапу бронювань для кожного водія
        const bookingsByDriver = drivers.reduce((acc, driver) => {
            const driverFullName = `${driver.name} ${driver.surname}`;
            acc[driver._id] = bookings.filter(booking => booking.driver === driverFullName);
            return acc;
        }, {});

        displayBookingsByDriver(drivers, bookingsByDriver);
    } catch (error) {
        console.error('Помилка отримання даних:', error);
    }
});

function displayBookingsByDriver(drivers, bookingsByDriver) {
    const driversContainer = document.getElementById('driversContainer');
    driversContainer.innerHTML = '';

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    drivers.forEach(driver => {
        const driverColumn = document.createElement('div');
        driverColumn.classList.add('driver-column');

        const driverHeaderContainer = document.createElement('div');
        driverHeaderContainer.classList.add('driver-header-container');

        driverHeaderContainer.innerHTML = `
        <svg width="50" height="50" viewBox="0 0 112 112" fill="none">
        <g clip-path="url(#clip0_3_88)">
        <path d="M56 79.625C38.1485 79.625 23.625 94.1485 23.625 112H32.375C32.375 107.064 33.8975 102.478 36.4963 98.6836L46.6714 108.859C46.3389 109.846 46.1562 110.901 46.1562 112H65.8438C65.8438 110.901 65.6611 109.846 65.3288 108.859L75.504 98.6834C78.1025 102.478 79.625 107.064 79.625 112H88.375C88.375 94.1485 73.8515 79.625 56 79.625ZM52.8585 102.671L42.6834 92.496C46.4776 89.8975 51.0641 88.375 56 88.375C60.9359 88.375 65.5224 89.8975 69.3164 92.4962L59.1412 102.671C58.1545 102.339 57.0988 102.156 56 102.156C54.9012 102.156 53.8455 102.339 52.8585 102.671ZM95.5981 72.4019C89.4987 66.3027 82.2388 61.7875 74.3179 59.0542C82.8015 53.2112 88.375 43.4324 88.375 32.375C88.375 14.5235 73.8515 0 56 0C38.1485 0 23.625 14.5235 23.625 32.375C23.625 43.4324 29.1985 53.2112 37.6823 59.0544C29.7614 61.7875 22.5015 66.3027 16.4021 72.4021C5.82509 82.9791 0 97.0419 0 112H8.75C8.75 85.9462 29.9462 64.75 56 64.75C82.0538 64.75 103.25 85.9462 103.25 112H112C112 97.0419 106.175 82.9791 95.5981 72.4019ZM32.375 32.375C32.375 19.3482 42.973 8.75 56 8.75C69.027 8.75 79.625 19.3482 79.625 32.375C79.625 45.4018 69.027 56 56 56C42.973 56 32.375 45.4018 32.375 32.375Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_3_88">
        <rect width="112" height="112" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `;

        const driverHeader = document.createElement('h3');
        driverHeader.textContent = `${driver.name} ${driver.surname}`;
        driverHeaderContainer.appendChild(driverHeader);

        driverColumn.appendChild(driverHeaderContainer);

        // Відображення статусу чергового
        const dutyInfo = document.createElement('div');
        dutyInfo.classList.add('duty-info');
        dutyInfo.textContent = `${driver.duty}`;
        dutyInfo.style.opacity = ['черговий', 'додатковий черговий'].includes(driver.duty) ? '1' : '0';
        dutyInfo.style.textAlign = 'center';
        driverHeaderContainer.appendChild(dutyInfo);

        // Відображення бронювань
        const filteredBookings = (bookingsByDriver[driver._id] || []).filter(booking => {
            const bookingDate = new Date(booking.time[0].startTime);
            bookingDate.setHours(0, 0, 0, 0);
            return bookingDate.getTime() === today.getTime() || bookingDate.getTime() === tomorrow.getTime();
        }).sort((a, b) => new Date(a.startTime) - new Date(b.startTime));

        filteredBookings.forEach(booking => {
            const bookingInfo = createBookingInfo(booking);
            driverColumn.appendChild(bookingInfo);
        });

        driversContainer.appendChild(driverColumn);
    });
}

function createBookingInfo(booking) {
    const bookingInfo = document.createElement('div');
    bookingInfo.classList.add('booking-info');
    bookingInfo.innerHTML = `
    <div class="icon-label--time">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <div class="time-range">
            <p>${new Date(booking.time[0].startTime).toLocaleString('uk-UA', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</p>
            <p>${new Date(booking.time[0].endTime).toLocaleString('uk-UA', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</p>
        </div>
    </div>

    <div class="icon-label">
        <div class="icon-label__box">
            <svg width="24px" height="24px" viewBox="0 0 16 16">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" fill="#000000"/>
            </svg>
        </div>
        : <span class="icon-label__trip">${booking.startPoint}</span>
    </div>

    <div class="icon-label">
        <div class="icon-label__box">
        <svg width="24px" height="24px" viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}.cls-2{fill:#020202;}</style></defs><path class="cls-1" d="M9.11,5.08c0,2.39-3.81,6-3.81,6s-3.82-3.58-3.82-6A3.7,3.7,0,0,1,5.3,1.5,3.7,3.7,0,0,1,9.11,5.08Z"/><circle class="cls-2" cx="5.3" cy="5.32" r="0.95"/><path class="cls-1" d="M4.34,13h4.3A2.39,2.39,0,0,1,11,15.34h0a2.39,2.39,0,0,1-2.38,2.39H3.86a2.39,2.39,0,0,0-2.38,2.38h0A2.39,2.39,0,0,0,3.86,22.5H17.7"/><line class="cls-1" x1="16.75" y1="9.14" x2="16.75" y2="20.59"/><polygon class="cls-1" points="16.75 14.86 21.52 14.86 20.57 12.96 21.52 11.04 16.75 11.04 16.75 14.86"/></svg>
        </div>
        : <span class="icon-label__trip">${booking.destination}</span>
    </div>
    <p>Пасажир: ${booking.passanger}</p>
    <p>Тип поїздки: ${booking.typeOfTravel}</p>
    `;

    if (booking.comment && booking.comment.trim() !== '') {
        bookingInfo.innerHTML += `<p>Коментар: ${booking.comment}</p>`;
    }
    return bookingInfo;
}

document.addEventListener('DOMContentLoaded', async () => {
    const primaryDutySelect = document.getElementById('primaryDuty');
    const additionalDutySelect = document.getElementById('additionalDuty');
    const dutyForm = document.querySelector('.duty__form');

    try {
        const response = await fetch('/users/drivers');
        if (!response.ok) throw new Error(`Помилка запиту: ${response.status}`);
        const drivers = await response.json();

        drivers.forEach(driver => {
            const optionPrimary = document.createElement('option');
            optionPrimary.value = driver._id;
            optionPrimary.textContent = `${driver.name} ${driver.surname}`;
            primaryDutySelect.appendChild(optionPrimary);

            const optionAdditional = document.createElement('option');
            optionAdditional.value = driver._id;
            optionAdditional.textContent = `${driver.name} ${driver.surname}`;
            additionalDutySelect.appendChild(optionAdditional);
        });

        dutyForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const primaryDutyId = primaryDutySelect.value;
            const additionalDutyId = additionalDutySelect.value;

            for (const driver of drivers) {
                let newDuty = 'не черговий';
                if (driver._id === primaryDutyId) {
                    newDuty = 'черговий';
                } else if (driver._id === additionalDutyId) {
                    newDuty = 'додатковий черговий';
                }

                try {
                    const response = await fetch(`/users/${driver._id}/duty`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ duty: newDuty }),
                    });

                    if (!response.ok) {
                        const errorMessage = await response.json();
                        console.error(`Помилка оновлення водія ${driver._id}: ${errorMessage.message}`);
                    }
                } catch (error) {
                    console.error(`Помилка запиту для водія ${driver._id}:`, error);
                }
            }

            alert('Статуси водіїв успішно оновлено');
        });
    } catch (error) {
        console.error('Помилка отримання водіїв:', error);
    }
});
