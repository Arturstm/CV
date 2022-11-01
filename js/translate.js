const i18Obj = {
    'English': {
        'contacts': 'Contacts',
        'about': 'About Me',
        'skills': 'Skills',
        'works': 'Works',
        'language': 'Language',
        'menu': 'Menu',
        'abouttext1': 'Hello everybody! You can find all the information about me below. I am a novice front-end developer. My main qualities are to learn quickly and the ability to work in a team. You can contact me in any convenient way',
        'abouttext2': "I'll tell you a little about myself, I'm 20 years old, I graduated from the front-end developer \"RS-SCHOOL\" courses (HTML, CSS, JavaScript). I get used to new working conditions very quickly, I am ready for work of any complexity",
        'card1-text': "Teamwork to create an application for learning English",
        'card2-text': "Portfolio for the photographer",
        'card3-text': "The website of the animal shelter. Charitable Foundation",
        'card4-text': "Customization of a standard player for video playback",
        'card5-text': "Random quote of celebrities and characters from games",
        'card6-text': "The good old snake on pure JS",
        'card7-text': "Online store for the sale of electronic cigarettes",
        'card8-text': "Random Hero with Dota2 game items",
        'card9-text': "A company providing manipulator and cargo transportation services",
        'card-button': "Go somewhere",
        'name': "Artur Stamboltsyan",
        'profession': "FRONT-END DEVELOPER"
    },
    'Russian': {
        'contacts': 'Контакты',
        'about': 'Обо Мне',
        'skills': 'Умения',
        'works': 'Работы',
        'language': 'Язык',
        'menu': 'Меню',
        'abouttext1': 'Привет всем! Вы можете найти всю информацию обо мне ниже. Я  начинающий front-end developer. Мои главные качества - это быстро обучаться и умение работать в команде. Можете связаться со мной любым удобным способом',
        'abouttext2': "Расскажу немного о себе, мне 20 лет, закончил курсы front-end developer \"RS-SCHOOL\" (HTML, CSS, JavaScript). Очень быстро привыкаю к новым условиям работы, готов к работе любой сложности",
        'card1-text': "Командная работа по созданию приложения для изучения английского языка",
        'card2-text': "Портфолио для фотографа",
        'card3-text': "Сайт приюта для животных. Благотворительный фонд",
        'card4-text': "Кастомизация стандартного плеера для воспроизведения видео",
        'card5-text': "Случайна цитата знаменитостей и персонажей из игр",
        'card6-text': "Старая, добрая змейка на чистом JS",
        'card7-text': "Онлайн магазин по продаже электронных сигарет",
        'card8-text': "Случайный герой с предметами для игры Dota2",
        'card9-text': "Компания предоставляющая услуги манипулятора и перевозки груза",
        'card-button': "Перейти",
        'name': "Артур Стамболцян",
        'profession': "FRONT-END РАЗРАБОТЧИК"
    }
}
const switchLanguage = document.querySelector('.dropdown-menu');
const translate = document.querySelectorAll('[data-i18]');

let lang = 'English'
lang = localStorage.getItem('lang')

window.onload = function() {
    if (localStorage.getItem('lang') == null) {
        localStorage.setItem('lang', 'English')
        window.location.reload()
    }
}
translate.forEach(el => {el.textContent = i18Obj[lang][el.dataset.i18];})

switchLanguage.addEventListener('click', (element) => {
    translate.forEach(el => {el.textContent = i18Obj[element.target.textContent][el.dataset.i18];})
    localStorage.setItem('lang', element.target.textContent)
});

export {lang}