const directors = [
    {
        imgUrl: '../assets/images/Vitrik.png',
        position: 'Генеральний директор',
        name: 'Вітрик Ігор Віталійович',
        contacts: {
            phone: '+380665544',
            mail: 'i.vitryk@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: управління, організація та координація роботи Сервісного управління, координація програм буріння, вибір і замовлення доліт, комунікація з постачальниками тазамовниками, планування мобілізації/демобілізації інженерів на об'єктах замовників; оптимізація процесів, підвищенняекономічної ефективності проєктів, підтримка та розвитоктехнічного забезпечення, участь в стратегічному плануванні та розвитку нових напрямків бізнесу."
    },
    {
        imgUrl: '../assets/images/Valdemar.png',
        position: 'Директор',
        name: 'Айперт Валдемар',
        contacts: {
            phone: '+3801234567',
            mail: 'w.eippert@ungs-drilling.com.ua'
        },
        tasks: "",
    }
];

const serviceManagement = [
    {
        imgUrl: '../assets/images/Landar.png',
        position: 'Керівник сервісного управління',
        name: 'Ландар Сергій Миколайович',
        contacts: {
            phone: '+380664476713',
            mail: 's.landar@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: управління, організація та координація роботи Сервісного управління, координація програм буріння, вибір і замовлення доліт, комунікація з постачальниками та замовниками, планування мобілізації/демобілізації інженерів на об'єктах замовників; оптимізація процесів, підвищення економічної ефективності проєктів, підтримка та розвиток технічного забезпечення, участь в стратегічному плануванні та розвитку нових напрямків бізнесу.",
    },
    {
        imgUrl: '../assets/images/Kuharec.png',
        position: 'Провідний інженер з буріння',
        name: 'Кухарець Олександр Олександрович',
        contacts: {
            phone: '+380956212085',
            mail: 'o.kukharets@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: складання заявок на замовлення обладнання для цеху, координування логістики по завезенню обладнання на свердловини, підготовка доліт до відправки, оформлення програм робіт по ПСБ та долотних програм, виконання інженерних розрахунків, редагування фінальних звітів, підготовку актів про втрату обладнання, обробку та інтерпретацію даних з реєстраторів, аналіз КНБК, підготовку презентацій, переклад технічної документації, консультації представників замовника, участь у технічних нарадах,  виїзди на свердловини як інженера-технолога.",
    },
    {
        imgUrl: '../assets/images/Olefir.png',
        position: 'Провідний інженер з буріння',
        name: 'Олефір Костянтин Миколайович',
        contacts: {
            phone: '+380505250758',
            mail: 'k.olefir@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: Координація робіт по MWD, забезпечення інженерів-технологів необхідними технічними засобами, проведення ТО та ремонту ТС, контроль даних телеметрії, складання замовлень на запчастини, підготовка та перевірка обладнання для відправки на свердловину, виїзди на об'єкти у разі виробничої потреби, редагування звітів, забезпечення безперебійної роботи телеметричних систем.",
    },
    {
        imgUrl: '../assets/images/Spuchak.png',
        position: 'Провідний фахівець',
        name: 'Спичак Ірина Володимирівна',
        contacts: {
            phone: '+380664322972',
            mail: 'i.spychak@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: координування  фінансовими та документальними аспектами взаємодії із замовниками. Комунікації на етапі погодження актів виконаних робіт, щотижневий розрахунок фактичного обороту, складання і узгодження актів приймання-передачі послуг та компенсацій за пошкоджене чи втрачене обладнання. Підготовка економічної частини прогнозів надходжень для формування фінансово-економічних звітів, контроль оформлення відряджень інженерів-технологів  для своєчасного нарахування відряджуваних виплат. Моніторинг тендерів, підготовка тендерної документації. Організація процесів мобілізації та демобілізації обладнання і персоналу.",
    },
    {
        imgUrl: '../assets/images/Pudenko.png',
        position: 'Провідний фахівець по роботі із замовником',
        name: 'Пуденко Ольга Олександрівна',
        contacts: {
            phone: '+380665603528',
            mail: 'o.pudenko@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: забезпечення ефективної комунікації із замовниками на всіх етапах підготовки та укладання договорів, контроль за їх виконанням та ведення реєстру, ведення звітності щодо дебіторської заборгованості за надані послуги, підготовка комерційних пропозицій, тендерної документації, підготовка необхідних документів та супровід оскаржень рішення Замовника, аналіз цінового рівня пропозицій конкурентів.",
    },
    {
        imgUrl: '../assets/images/image1.png',
        position: 'Фахівець',
        name: 'Семенченко Людмила Миколаївна',
        contacts: {
            phone: '+380952503967',
            mail: 'l.semenchenko@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: організація адміністративних процесів відділу, ведення сторінок компанії у соціальних мережах (обробка текстів, оформлення постів), підготовка щотижневих звітів про обладнання та персонал, що знаходиться в свердловинах, обробка даних з реєстраторів вибійних вібрацій в текстових редакторах, організація публічних заходів та інших внутрішніх  комунікаційних завдань для покращення корпоративної іміджевої складової.",
    }
];

const drilling = [
    {
        imgUrl: '../assets/images/Stupak.png',
        position: 'Провідний інженер технолог з похило-скерованого буріння',
        name: 'Ступак Віктор Олександрович',
        contacts: {
            phone: '+380995252881',
            mail: 'v.stupak@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: управління процесом похило-скерованого буріння з використанням телеметричної системи для досягнення заданих координат свердловини, оптимізації буріння через розрахунок та підбір компоновки бурильної колони, контролю режимів буріння і оперативного моніторингу відхилень, а також забезпеченні правильності оформлення документації та обладнання",
    },
    {
        imgUrl: '../assets/images/Nagirnui.png',
        position: 'Провідний інженер технолог з похило-скерованого буріння',
        name: 'Нагірний Іван Олександрович',
        contacts: {
            phone: '+380971739424',
            mail: 'i.nagirnyi@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: управління процесом похило-скерованого буріння з використанням телеметричної системи для досягнення заданих координат свердловини, оптимізації буріння через розрахунок та підбір компоновки бурильної колони, контролю режимів буріння і оперативного моніторингу відхилень, а також забезпеченні правильності оформлення документації та обладнання",
    },
    {
        imgUrl: '../assets/images/Golenko.png',
        position: 'Провідний інженер технолог з похило-скерованого буріння',
        name: 'Голенко Ігор Костянтинович',
        contacts: {
            phone: '+380663706945',
            mail: 'i.holenko@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: управління процесом похило-скерованого буріння з використанням телеметричної системи для досягнення заданих координат свердловини, оптимізації буріння через розрахунок та підбір компоновки бурильної колони, контролю режимів буріння і оперативного моніторингу відхилень, а також забезпеченні правильності оформлення документації та обладнання",
    },
    {
        imgUrl: '../assets/images/Lagura.png',
        position: 'Провідний інженер технолог з похило-скерованого буріння',
        name: 'Лагура Віталій Юрійович',
        contacts: {
            phone: '+380996585504',
            mail: 'v.lagura@ungs-drilling.com.ua',
        },
        tasks: "Ціль посади: управління процесом похило-скерованого буріння з використанням телеметричної системи для досягнення заданих координат свердловини, оптимізації буріння через розрахунок та підбір компоновки бурильної колони, контролю режимів буріння і оперативного моніторингу відхилень, а також забезпеченні правильності оформлення документації та обладнання",
    },
    {
        imgUrl: '../assets/images/Tverdohlib.png',
        position: 'Провідний інженер технолог з телеметричної системи',
        name: 'Твердохліб Василь Васильович',
        contacts: {
            phone: '+380967474337',
            mail: 'v.tverdokhlib@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: забезпечення ефективного обслуговування та технічного супроводу телеметричної системи з гідравлічним каналом зв’язку, включаючи збір, тестування, аналіз і обробку даних, контроль за роботою обладнання в свердловині, дотримання норм і стандартів, а також ведення звітної документації та обліку напрацювання обладнання.",
    },
    {
        imgUrl: '../assets/images/Rau.png',
        position: 'Провідний інженер технолог з телеметричної системи',
        name: 'Рау Данііл Олексійович',
        contacts: {
            phone: '+380951798385',
            mail: 'daniil.rau@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: забезпечення ефективного обслуговування та технічного супроводу телеметричної системи з гідравлічним каналом зв’язку, включаючи збір, тестування, аналіз і обробку даних, контроль за роботою обладнання в свердловині, дотримання норм і стандартів, а також ведення звітної документації та обліку напрацювання обладнання.",
    },
    {
        imgUrl: '../assets/images/Pholezuk.png',
        position: 'Інженер технолог з похило-скерованого буріння',
        name: 'Фолезюк Михайло Михайлович',
        contacts: {
            phone: '+380989067155',
            mail: 'm.folyziuk@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: контроль процесу похило-скерованого буріння, включаючи розрахунок і оптимізацію компоновки бурильної колони, моніторинг і корекцію траєкторії свердловини, управління режимами буріння відповідно до технологічної програми, оперативний контроль та вирішення ускладнень, а також забезпечення документального супроводу і перевірку технічного обладнання.",
    },
    {
        imgUrl: '../assets/images/Mazurenko.png',
        position: 'Інженер технолог з похило-скерованого буріння',
        name: 'Мазуренко Владислав Петрович',
        contacts: {
            phone: '+380669644127',
            mail: 'v.mazurenko@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: контроль процесу похило-скерованого буріння, включаючи розрахунок і оптимізацію компоновки бурильної колони, моніторинг і корекцію траєкторії свердловини, управління режимами буріння відповідно до технологічної програми, оперативний контроль та вирішення ускладнень, а також забезпечення документального супроводу і перевірку технічного обладнання.",
    },
    {
        imgUrl: '../assets/images/Phozuluk.png',
        position: 'Інженер технолог з похило-скерованого буріння',
        name: 'Фозилюк Дмитро Миколайович',
        contacts: {
            phone: '+380673430519',
            mail: 'd.folizyk@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: контроль процесу похило-скерованого буріння, включаючи розрахунок і оптимізацію компоновки бурильної колони, моніторинг і корекцію траєкторії свердловини, управління режимами буріння відповідно до технологічної програми, оперативний контроль та вирішення ускладнень, а також забезпечення документального супроводу і перевірку технічного обладнання.",
    },
    {
        imgUrl: '../assets/images/Bondar.png',
        position: 'Інженер технолог з похило-скерованого буріння',
        name: 'Бондар Андрій Володимирович',
        contacts: {
            phone: '+380664794974',
            mail: 'a.bondar@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: контроль процесу похило-скерованого буріння, включаючи розрахунок і оптимізацію компоновки бурильної колони, моніторинг і корекцію траєкторії свердловини, управління режимами буріння відповідно до технологічної програми, оперативний контроль та вирішення ускладнень, а також забезпечення документального супроводу і перевірку технічного обладнання.",
    },
    {
        imgUrl: '../assets/images/Kucher.png',
        position: 'Інженер технолог з телеметричної системи',
        name: 'Кучер Денис Юрійович',
        contacts: {
            phone: '+380662021997',
            mail: 'd.kucher@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: забезпечення комплексного обслуговування та технічного супроводу телеметричної системи з гідравлічним каналом зв’язку.Збір, тестування та обслуговування обладнання, аналіз і систематизацію отриманої інформації, розшифровку інклинометричної і каротажної інформації, а також контроль за спуском і роботою обладнання безпосередньо в свердловині. Контроль над дотриманням всіх діючих норм, правил і стандартів, ведення звітної документації та облік напрацювання обладнання, забезпечуючи тим самим високу ефективність і надійність роботи телеметричної системи",
    },
    {
        imgUrl: '../assets/images/image1.png',
        position: 'Інженер технолог з телеметричної системи',
        name: 'Топтун Максим Сергійович',
        contacts: {
            phone: '+380665544',
            mail: '@gmail.com'
        },
        tasks: "Ціль посади: забезпечення комплексного обслуговування та технічного супроводу телеметричної системи з гідравлічним каналом зв’язку.Збір, тестування та обслуговування обладнання, аналіз і систематизацію отриманої інформації, розшифровку інклинометричної і каротажної інформації, а також контроль за спуском і роботою обладнання безпосередньо в свердловині. Контроль над дотриманням всіх діючих норм, правил і стандартів, ведення звітної документації та облік напрацювання обладнання, забезпечуючи тим самим високу ефективність і надійність роботи телеметричної системи",
    },
]

const technical = [
    {
        imgUrl: '../assets/images/Kovbasnuk.png',
        position: 'Інженер технолог з буріння',
        name: 'Ковбаснюк Віктор Петрович',
        contacts: {
            phone: '+380507137656',
            mail: 'v.kovbasniuk@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: супровід роботи бурового обладнання на свердловині, наданні консультацій з питань буріння та забезпеченні дотримання технічних параметрів і режимів буріння, контролюванні якості та ефективності обладнання, а також своєчасному реагуванні на технологічні ускладнення та аварійні ситуації.",
    },
    {
        imgUrl: '../assets/images/Gulkevich.png',
        position: 'Інженер технолог з буріння',
        name: 'Гулькевич Владислав Вячеславович',
        contacts: {
            phone: '+380663579686',
            mail: 'v.gulkevich@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: супровід роботи бурового обладнання на свердловині, наданні консультацій з питань буріння та забезпеченні дотримання технічних параметрів і режимів буріння, контролюванні якості та ефективності обладнання, а також своєчасному реагуванні на технологічні ускладнення та аварійні ситуації.",
    },
    {
        imgUrl: '../assets/images/Gannus.png',
        position: 'Інженер технолог з буріння',
        name: 'Ганнус Яків Васильович',
        contacts: {
            phone: '+380953713540',
            mail: 'y.gannus@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: супровід роботи бурового обладнання на свердловині, наданні консультацій з питань буріння та забезпеченні дотримання технічних параметрів і режимів буріння, контролюванні якості та ефективності обладнання, а також своєчасному реагуванні на технологічні ускладнення та аварійні ситуації.",
    },
    {
        imgUrl: '../assets/images/Stecuk.png',
        position: 'Інженер технолог з буріння',
        name: 'Стецюк Петро Васильович',
        contacts: {
            phone: '+380685365896',
            mail: 'p.stetsiuk@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: супровід роботи бурового обладнання на свердловині, наданні консультацій з питань буріння та забезпеченні дотримання технічних параметрів і режимів буріння, контролюванні якості та ефективності обладнання, а також своєчасному реагуванні на технологічні ускладнення та аварійні ситуації.",
    },
    {
        imgUrl: '../assets/images/Kharchenko.png',
        position: 'Інженер технолог',
        name: 'Харченко Станіслав Юрійович',
        contacts: {
            phone: '+380997375414',
            mail: 's.kharchenko@ungs-drilling.com.ua'
        },
        tasks: "Ціль посади: супровід роботи бурового обладнання на свердловині, наданні консультацій з питань буріння та забезпеченні дотримання технічних параметрів і режимів буріння, контролюванні якості та ефективності обладнання, а також своєчасному реагуванні на технологічні ускладнення та аварійні ситуації.",
    },
]

const craftService = [
    {
        imgUrl: '../assets/images/Simonenko.png',
        position: 'Начальник цеху',
        name: 'Симоненко Євгеній Олександрович',
        contacts: {
            phone: '+380995490221',
            mail: 'y.symonenko@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: Управління та координація роботи цеху, контроль за дотриманням норм охорони праці, управління запасними частинами та орендованим обладнанням, організація та контроль обліку і звітності, організація проведення ремонтних робіт елементів вибійного обладнання як в Україні, так і за кордоном, управління підтримкою  санітарно-побутових умов для  забезпечення ефективної та безперебійної роботи цеху.",
    },
    {
        imgUrl: '../assets/images/Smaga.png',
        position: 'Інженер з комплектації устаткування й матеріалів',
        name: 'Смага Юрій Іванович',
        contacts: {
            phone: '+380994411170',
            mail: 'y.smaga@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: організація та контроль обліку запасних частин, ПММ та матеріалів для технічного обслуговування обладнання та цеху, ведення обліку в 1С, управління переміщенням бурового обладнання і комплектуючих, постачання матеріалів і ПММ, частковий супровід ремонту запчастин, замовлення автотранспорту і спецтехніки для переміщення обладнання, формування щомісячного звіту по орендованому обладнанню для митної служби.",
    },
    {
        imgUrl: '../assets/images/Salenko.png',
        position: 'Інженер з ремонту',
        name: 'Саленко Максим Валерійович',
        contacts: {
            phone: '+380667220880',
            mail: 'm.salenko@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення безперебійної роботи обладнання шляхом організації своєчасного проведення технічного обслуговування, перевірки та розробки графіків ремонту, ведення технічної документації та звітності, пошук та підбір інструментів для проведення сервісного обслуговування обладнання.",
    },
    {
        imgUrl: '../assets/images/Nagay.png',
        position: 'Старший механік з обслуговування гвинтових вибійних двигунів',
        name: 'Нагай Віктор Григорович',
        contacts: {
            phone: '+380664606262',
            mail: 'v.nahai@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення ефективного сервісного обслуговування через проведення збирання і розбирання обладнання, виконання вантажо-розвантажувальних робіт, робіт з пресом та навантажувачем, газозварювальних і слюсарних робіт, ведення обліку захоплюючих елементів та строп.",
    },
    {
        imgUrl: '../assets/images/Kostuk.png',
        position: 'Старший механік з обслуговування гвинтових вибійних двигунів',
        name: 'Костюк Микола Миколайович',
        contacts: {
            phone: '+380505218675',
            mail: 'n.kostyouk@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення ефективного сервісного обслуговування через проведення збирання і розбирання обладнання, виконання вантажо-розвантажувальних робіт, робіт з пресом та навантажувачем, газозварювальних і слюсарних робіт, ведення обліку захоплюючих елементів та строп.",
    },
    {
        imgUrl: '../assets/images/Nosenko.png',
        position: 'Механік з обслуговування гвинтових вибійних двигунів',
        name: 'Носенко Михайло Сергійович',
        contacts: {
            phone: '+380951370682',
            mail: 'm.nosenko@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпеченні технічного контролю обладнання, проведенні вантажо-розвантажувальних робіт, сервісного обслуговування як другий номер, складанні паспортів та розробленні звітів про пошкодження",
    },
    {
        imgUrl: '../assets/images/Burka.png',
        position: 'Механік з обслуговування гвинтових вибійних двигунів',
        name: 'Бурка Андрій Віталійович',
        contacts: {
            phone: '+380662719153',
            mail: 'a.burka@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпеченні технічного контролю обладнання, проведенні вантажо-розвантажувальних робіт, сервісного обслуговування як другий номер, складанні паспортів та розробленні звітів про пошкодження",
    },
    {
        imgUrl: '../assets/images/Bezuh.png',
        position: 'Помічник механіка з обслуговування гвинтових вибійних двигунів',
        name: 'Безух Олег Олексійович',
        contacts: {
            phone: '+380997231931',
            mail: 'o.bezuh@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: проведення сервісного обслуговування обладнання  (збирання, розбирання) другим номером, мийка та фарбування обладнання для забезпечення його безперебійної роботи та збереження в належному стані.",
    },
    {
        imgUrl: '../assets/images/Bondarevskiy.png',
        position: 'Помічник механіка з обслуговування гвинтових вибійних двигунів',
        name: 'Бондаревський Максим Володимирович',
        contacts: {
            phone: '+380958106208',
            mail: 'm.bondarevskiy@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: проведення сервісного обслуговування обладнання  (збирання, розбирання) другим номером, мийка та фарбування обладнання для забезпечення його безперебійної роботи та збереження в належному стані.",
    },
    {
        imgUrl: '../assets/images/Iofe.png',
        position: 'Прибиральник виробничих приміщень',
        name: 'Іоффе Ольга Данилівна',
        contacts: {
            phone: '+380999808519',
            mail: '@gmail.com'
        },
        tasks: "Мета посади: забезпеченні чистоти та порядку у службових приміщеннях компанії шляхом регулярного прибирання, очищення та дезінфекції всіх поверхонь та санітарно-технічного обладнання.",
    },
]

const finance = [
    {
        imgUrl: '../assets/images/Muleiko.png',
        position: 'Економіст',
        name: 'Милейко Юлія Миколаївна',
        contacts: {
            phone: '+380997965898',
            mail: 'y.myleiko@ungs-drilling.com.ua'
        },
        tasks: "",
    },
];

const transport = [
    {
        imgUrl: '../assets/images/Pruhodko.png',
        position: 'Механік',
        name: 'Приходько Олександр Юрійович',
        contacts: {
            phone: '+380959022715',
            mail: 'o.prykhodko@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення належного технічного стану та ефективної експлуатації автотранспортних засобів компанії шляхом контролю за ремонтом і технічним обслуговуванням, координація роботи водіїв, управління дорожньою документацією та паливними картками, організації заміни шин і усунення експлуатаційних несправностей.",
    },
    {
        imgUrl: '../assets/images/Pavlyi.png',
        position: 'Водій автотранспортних засобів',
        name: 'Павлій Євгеній Борисович',
        contacts: {
            phone: '+380503086405',
            mail: 'y.pavlii@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення високої якості обслуговування транспортного засобу, безпечне перевезення пасажирів дотриманням усіх правил дорожнього руху, контроль за чистотою автомобіля, своєчасну подачу, регулярний технічний огляд, звітність про своє місцезнаходження.",
    },
    {
        imgUrl: '../assets/images/Karpenko.png',
        position: 'Водій автотранспортних засобів',
        name: 'Карпенко Олександр Анатолійович',
        contacts: {
            phone: '+380503462936',
            mail: 'o.karpenko@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення високої якості обслуговування транспортного засобу, безпечне перевезення пасажирів дотриманням усіх правил дорожнього руху, контроль за чистотою автомобіля, своєчасну подачу, регулярний технічний огляд, звітність про своє місцезнаходження.",
    }, {
        imgUrl: '../assets/images/Patyoma.png',
        position: 'Водій автотранспортних засобів',
        name: 'Патьома Олександр Миколайович',
        contacts: {
            phone: '+380503057947',
            mail: 'o.patoma@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення високої якості обслуговування транспортного засобу, безпечне перевезення пасажирів дотриманням усіх правил дорожнього руху, контроль за чистотою автомобіля, своєчасну подачу, регулярний технічний огляд, звітність про своє місцезнаходження.",
    }, {
        imgUrl: '../assets/images/Logvinenko.png',
        position: 'Водій автотранспортних засобів',
        name: 'Логвиненко Максим Юрійович',
        contacts: {
            phone: '+380997627794',
            mail: 'm.lohvinenko@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення високої якості обслуговування транспортного засобу, безпечне перевезення пасажирів дотриманням усіх правил дорожнього руху, контроль за чистотою автомобіля, своєчасну подачу, регулярний технічний огляд, звітність про своє місцезнаходження.",
    },
];

const commercial = [
    {
        imgUrl: '../assets/images/Kirichenko.png',
        position: 'Провідний менеджер із зовнішньоекономічної діяльності',
        name: 'Кириченко Юрій Іванович',
        contacts: {
            phone: '+380504048783',
            mail: 'y.kyrychenko@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення ефективного управління зовнішньоекономічними процесами компанії шляхом складання та погодження зовнішньоекономічних договорів і документів, налагодження зв’язків з контрагентами, підготовки документів для митного оформлення і оптимізації митних платежів, а також моніторингу змін у нормативній документації для забезпечення безперебійної доставки товарів та послуг.",
    },
    {
        imgUrl: '../assets/images/Portnyi.png',
        position: 'Юрисконсульт',
        name: 'Портний Дмитро Олександрович',
        contacts: {
            phone: '+380505557536',
            mail: 'd.portnyi@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення юридичної підтримки через аналіз та підготовку проєктів договорів і додаткових угод, ведення реєстру та зберігання договорів, отримання документів з державних органів, консультування працівників з питань укладення, пролонгації та розірвання договорів, підготовку проєктів протоколів загальних зборів та надання інформації на запити державних органів.",
    },
];

const recruiters = [
    {
        imgUrl: '../assets/images/Kostenko.png',
        position: 'Менеджер з персоналу',
        name: 'Костенко Анна Анатоліївна',
        contacts: {
            phone: '+380504426277',
            mail: 'a.kostenko@ungs-drilling.com.ua'
        },
        tasks: "",
    },
    {
        imgUrl: '../assets/images/Pasko.png',
        position: 'Інспектор з кадрів',
        name: 'Пасько Інна Миколаївна',
        contacts: {
            phone: '+380500544200',
            mail: 'i.pasko@ungs-drilling.com.ua'
        },
        tasks: "",
    },
]

const accountants = [
    {
        imgUrl: '../assets/images/Litvinenko.png',
        position: 'Головний бухгалтер',
        name: 'Литвиненко Олена Володимирівна',
        contacts: {
            phone: '+380664630090',
            mail: 'o.lytvynenko@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: організація ефективної роботи відділу, забезпечення дотримання законодавчих вимог у сфері бухгалтерського обліку і фінансової звітності, включаючи правильне оформлення документів, контроль за податковими та фінансовими зобов'язаннями, взаємодію з контролюючими органами для забезпечення фінансової стійкості та мінімізації податкових ризиків підприємства.",
    },
    {
        imgUrl: '../assets/images/Tataurova.png',
        position: 'Бухгалтер з обліку товарно-матеріальних цінностей',
        name: 'Татаурова Дар’я Русланівна',
        contacts: {
            phone: '+380501675904',
            mail: 'd.tataurova@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення точного обліку і відображення документів, пов’язаних із придбанням, списанням, введенням в експлуатацію товарно-матеріальних цінностей, основних засобів та малоцінних матеріальних активів, а також у проведенні інвентаризацій, перевірці податкових накладних і банківських виписок, контролі правильності документів від постачальників та своєчасному оформленні відповідних актів і довіреностей.",
    },
    {
        imgUrl: '../assets/images/Bogdanova.png',
        position: 'Бухгалтер з розрахунку заробітної плати',
        name: 'Богданова Ганна Володимирівна',
        contacts: {
            phone: '+380667899857',
            mail: 'h.bohdanova@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення ефективного управління фінансовими операціями компанії шляхом своєчасної сплати рахунків, обробки банківських виписок, ведення авансових звітів, нарахування та виплати заробітної плати, оформлення документів для відряджень, формування та подання фінансових звітів до державних органів.",
    },
]

const safeKeeper = [
    {
        imgUrl: '../assets/images/Kreshuk.png',
        position: 'Інженер з охорони праці',
        name: 'Крещик Леонід Васильович',
        contacts: {
            phone: '+380994745074',
            mail: 'l.kreshchyk@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення безпеки праці та пожежної безпеки на підприємстві шляхом проведення інструктажів і навчань, розробки та актуалізації інструкцій, контролю за дотриманням нормативів і стандартів, оформлення документів та організації медичних оглядів,  створення безпечних умов праці для зменшення ризиків травмування та технічних збоїв.",
    },
]

const optimization = [
    {
        imgUrl: '../assets/images/Lazorenko.jpg',
        position: 'Розробник програмного забезпечення',
        name: 'Лазоренко Віталій Сергійович',
        contacts: {
            phone: '+380991802420',
            mail: 'v.lazorenko@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: створювати, вдосконалювати та підтримувати програмні рішення, які відповідають бізнес-потребам компанії, забезпечуючи високу якість коду, ефективність функціонування систем та інноваційний підхід до вирішення завдань.",
    },
    {
        imgUrl: '../assets/images/Poznyakovskiy.png',
        position: 'Адміністратор системи',
        name: 'Позняковський Андрій Олегович',
        contacts: {
            phone: '+380665022813',
            mail: 'a.poznyakovskiy@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення безперебійної роботи комп'ютерної та оргтехніки в компанії шляхом закупівлі, обслуговування, налаштування обладнання, управління сервером і антивірусними програмами, супроводу корпоративної пошти, резервного копіювання та відновлення даних, а також налаштування Wi-Fi та мережі.",
    },
]

const adminGosp = [
    {
        imgUrl: '../assets/images/Malovik.png',
        position: 'Енергетик',
        name: 'Маловік Роман Борисович',
        contacts: {
            phone: '+380958164476',
            mail: 'r.malovik@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення безперебійної роботи обладнання шляхом виконання планово-попереджувальних робіт, контролю та приймання робіт від підрядних організацій, оформлення звітів за напрямком енергетики, проведення інструктажів з електробезпеки, ведення технічної документації та контролю наявності запасних частин, інструментів і приладів.",
    },
    {
        imgUrl: '../assets/images/Truten.png',
        position: 'Ресепшіоніст',
        name: 'Трутень Юлія Олександрівна',
        contacts: {
            phone: '+380954437014',
            mail: 'y.truten@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: забезпечення ефективного функціонування офісу шляхом організації документообігу, реєстрації та обробки пошти, координації підписання документів, організації зустрічей та розміщення гостей, бронювання транспортних засобів та готелів, забезпечення офісу канцелярськими і господарськими товарами та контроль за роботою прибиральниці.",
    },
    {
        imgUrl: '../assets/images/Kasyanova.png',
        position: 'Офіс-адміністратор',
        name: 'Касьянова Світлана Олександрівна',
        contacts: {
            phone: '+380661656888',
            mail: 's.kasianova@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: організація і координації адміністративних і господарських процесів офісу, організація корпоративних заходів, координація проведення ремонтних робіт в офісі, комунікація з орендодавцями, виконання особистих доручень керівника.",
    },
    {
        imgUrl: '../assets/images/Karpenko2.png',
        position: 'Офіс-адміністратор',
        name: 'Карпенко Людмила Вікторівна',
        contacts: {
            phone: '+380667284027',
            mail: 'l.karpenko@ungs-drilling.com.ua'
        },
        tasks: "Мета посади: організація і координації адміністративних і господарських процесів офісу, організація корпоративних заходів, координація проведення ремонтних робіт в офісі, комунікація з орендодавцями, виконання особистих доручень керівника.",
    },
    {
        imgUrl: '../assets/images/Sichkar.png',
        position: 'Прибиральник службових приміщень',
        name: 'Січкар Ірина Анатоліївна',
        contacts: {
            phone: '+380990220880',
            mail: '@gmail.com'
        },
        tasks: "Мета посади: підтримка чистоти та порядку в приміщеннях офісу шляхом регулярного прибирання та дезінфекції для забезпечення  комфортного і безпечного робочого середовища.",
    },
]

function createWorkersCards(containerId, department) {
    const container = document.getElementById(containerId);

    department.forEach(worker => {
        // Створення картки
        const workerDiv = document.createElement('div');
        workerDiv.className = 'department__worker';

        // Створення фото
        const img = document.createElement('img');
        img.src = worker.imgUrl;
        img.alt = 'worker image';
        img.loading = 'lazy';
        img.className = 'department__worker-img';

        // Створення блоку інформації
        const infoDiv = document.createElement('div');
        infoDiv.className = 'department__worker-info';

        // Створення блоку імені
        const nameDiv = document.createElement('div');
        nameDiv.className = 'department__worker-name';
        nameDiv.textContent = worker.name;

        // Створення блоку посади
        const positionDiv = document.createElement('div');
        positionDiv.className = 'department__worker-position';
        positionDiv.textContent = worker.position;

        // Додавання інформації до картки
        infoDiv.append(nameDiv, positionDiv);

        // Створення блоку контактів
        const contactsDiv = document.createElement('div');
        contactsDiv.className = 'department__worker-contacts';

        // Створення блоку телефона
        const phoneDiv = document.createElement('div');
        phoneDiv.className = 'department__worker-phone';
        phoneDiv.textContent = `Phone: ${worker.contacts.phone}`;

        // Створення блоку пошти
        const emailDiv = document.createElement('div');
        emailDiv.className = 'department__worker-email';
        emailDiv.textContent = `Mail: ${worker.contacts.mail}`;

        // Створення блоку обов'язків
        const tasksDiv = document.createElement('div');
        tasksDiv.className = 'department__worker-tasks';
        tasksDiv.textContent = `${worker.tasks}`;

        // Додавання телефона, пошти та обов'язків
        contactsDiv.append(phoneDiv, emailDiv, tasksDiv);

        // Додавання всієї інформації в картку
        workerDiv.append(img, infoDiv, contactsDiv);

        // Додавання картки
        container.appendChild(workerDiv);
    });
}

// Створення карток
createWorkersCards('directors', directors);
createWorkersCards('service', serviceManagement);
createWorkersCards('drilling', drilling);
createWorkersCards('technical', technical);
createWorkersCards('craftService', craftService);
createWorkersCards('finance', finance);
createWorkersCards('transport', transport);
createWorkersCards('commercial', commercial);
createWorkersCards('recruiters', recruiters);
createWorkersCards('accountants', accountants);
createWorkersCards('safety', safeKeeper);
createWorkersCards('optimization', optimization);
createWorkersCards('adminGosp', adminGosp);

document.querySelectorAll('.department__worker').forEach(worker => {
    worker.addEventListener('click', () => {
        const imgSrc = worker.querySelector('.department__worker-img').src;
        const name = worker.querySelector('.department__worker-name').innerText;
        const position = worker.querySelector('.department__worker-position').innerText;
        const phone = worker.querySelector('.department__worker-phone').innerText;
        const email = worker.querySelector('.department__worker-email').innerText;
        const tasks = worker.querySelector('.department__worker-tasks').innerText;

        


        const modalContent = `
            <div class="modal__wrapper">
                <div><img src="${imgSrc}" alt="" style="width: 321px; height: auto;"></div>
                <div class="modal__info">
                    <div class="modal__position">${position}</div>
                    <div class="modal__name">
                        ${name}
                        <div class="modal__tasks">
                            ${tasks}
                        </div>
                    </div>
                    <div class="modal__phone">${phone}</div>
                    <div class="modal__email">${email}</div>
                    <textarea name="comment" id="comment" cols="30" rows="10" style="resize:none" ></textarea>
                </div>
            </div>
        `;

        document.querySelector('.modal__content').innerHTML = modalContent;
        document.querySelector('.modal-overlay').style.display = 'flex';

        document.querySelector('.modal__name').addEventListener('mouseover', ()=>{
            document.querySelector('.modal__tasks').style.display = 'block';
        })
        document.querySelector('.modal__name').addEventListener('mouseout', ()=>{
            document.querySelector('.modal__tasks').style.display = 'none';
        })

    });
});

document.querySelector('.modal-close').addEventListener('click', () => {
    document.querySelector('.modal-overlay').style.display = 'none';
});

