// coursesSetup.js — логика загрузки и отображения курсов
// Автор: (ваше имя или команда)

// События для взаимодействия между модулями
const event = new Event('coursesLoaded');
const eventBought = new Event('courseBought');

let courseIndex = 0;
let indexAccum = 0;
let allCourses = [];

// Инициализация модального окна
document.addEventListener('DOMContentLoaded', () => {
    const detailsModal = document.getElementById("myModal");
    const closeBtn = detailsModal.querySelector(".close");
    
    // Закрытие по клику на крестик
    closeBtn.onclick = function() {
        detailsModal.style.display = "none";
    }
    
    // Закрытие по клику вне модального окна
    window.onclick = function(event) {
        if (event.target === detailsModal) {
            detailsModal.style.display = "none";
        }
    }
});

// Загрузка курсов из XML (имитация серверных данных)
function loadCoursesFromXML() {
    try {
        // XML-строка с курсами (можно заменить на fetch при необходимости)
        const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<courses>
    <course>
        <n>Основы программирования</n>
        <description>Изучите основы программирования с этим вводным курсом</description>
        <price>12</price>
        <image>./assets/images/test.webp</image>
    </course>
    <course>
        <n>Data Science</n>
        <description>Исследуйте мир науки о данных с этим фундаментальным курсом</description>
        <price>23</price>
        <image>./assets/images/2.webp</image>
    </course>
    <course>
        <n>Интенсивный веб-разработчик</n>
        <description>Овладейте навыками веб-разработки в этом интенсивном буткемпе</description>
        <price>20</price>
        <image>./assets/images/4.webp</image>
    </course>
    <course>
        <n>Цифровой маркетинг</n>
        <description>Откройте ключевые стратегии цифрового маркетинга в этом курсе</description>
        <price>31</price>
        <image>./assets/images/5.webp</image>
    </course>
    <course>
        <n>Графический дизайн</n>
        <description>Начните изучать графический дизайн в этом курсе для начинающих</description>
        <price>15</price>
        <image>./assets/images/7.webp</image>
    </course>
    <course>
        <n>Мастер-класс по фотографии</n>
        <description>Изучите техники фотографии от экспертов в этом комплексном курсе</description>
        <price>25</price>
        <image>./assets/images/8.webp</image>
    </course>
    <course>
        <n>Разработка мобильных приложений</n>
        <description>Создайте свои собственные мобильные приложения в этом практическом курсе</description>
        <price>17</price>
        <image>./assets/images/10.webp</image>
    </course>
    <course>
        <n>Маркетинг</n>
        <description>Научитесь создавать эффективные кампании в социальных сетях в этом курсе</description>
        <price>23</price>
        <image>./assets/images/6.webp</image>
    </course>
    <course>
        <n>Основы машинного обучения</n>
        <description>Погрузитесь в мир машинного обучения с этим фундаментальным курсом</description>
        <price>18</price>
        <image>./assets/images/12.webp</image>
    </course>
    <course>
        <n>Видеомонтаж</n>
        <description>Овладейте техникой видеомонтажа с этим практическим мастер-классом</description>
        <price>23</price>
        <image>./assets/images/3.webp</image>
    </course>
    <course>
        <n>Принципы UI/UX</n>
        <description>Откройте принципы дизайна пользовательского интерфейса и опыта пользователя в этом курсе</description>
        <price>10</price>
        <image>./assets/images/9.webp</image>
    </course>
    <course>
        <n>Основы кибербезопасности</n>
        <description>Научитесь защищать цифровые активы с помощью этого курса по кибербезопасности</description>
        <price>32</price>
        <image>./assets/images/11.webp</image>
    </course>
</courses>`;

        const parser = new DOMParser();
        const data = parser.parseFromString(xmlContent, "text/xml");

        if (data.getElementsByTagName("parsererror").length > 0) {
            throw new Error("XML parsing error");
        }
        
        const courses = data.getElementsByTagName("course");
        if (!courses || courses.length === 0) {
            throw new Error("No courses found in XML");
        }
        
        // Парсим XML и формируем массив курсов
        allCourses = Array.from(courses).map(course => {
            const nameEl = course.getElementsByTagName("n")[0];
            const descEl = course.getElementsByTagName("description")[0];
            const priceEl = course.getElementsByTagName("price")[0];
            const imageEl = course.getElementsByTagName("image")[0];
            
            if (!nameEl || !descEl || !priceEl || !imageEl) {
                throw new Error("Invalid course data structure");
            }
            
            return {
                name: nameEl.textContent,
                description: descEl.textContent,
                price: parseInt(priceEl.textContent),
                image: imageEl.textContent.replace('./', '')
            };
        });
        
        const coursesContainer = document.getElementById("courses");
        if (coursesContainer) {
            coursesContainer.innerHTML = ''; // Clear any error messages
            loadCourses();
        }
    } catch (error) {
        console.error("Error parsing XML:", error);
        handleError(error);
    }
}

// Обработка ошибок при загрузке курсов
function handleError(error) {
    console.error("Error loading courses:", error);
    const coursesContainer = document.getElementById("courses");
    if (coursesContainer) {
        coursesContainer.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <p style="color: #ff4444; margin-bottom: 10px;">Ошибка загрузки курсов</p>
                <button onclick="retryLoadCourses()" style="padding: 10px 20px; background-color: #4a4a72; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Попробовать снова
                </button>
            </div>`;
    }
}

// Повторная попытка загрузки курсов
function retryLoadCourses() {
    const coursesContainer = document.getElementById("courses");
    if (coursesContainer) {
        coursesContainer.innerHTML = '<p style="text-align: center; color: #ffffff;">Загрузка курсов...</p>';
    }
    setTimeout(loadCoursesFromXML, 500);
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Loading courses...');
    const coursesContainer = document.getElementById("courses");
    if (!coursesContainer) {
        console.error("Error: Could not find courses container element");
        return;
    }
    
    loadCoursesFromXML();
});

// Отрисовка курсов на странице
function loadCourses() {
    const coursesContainer = document.getElementById("courses");
    if (!coursesContainer) return;
    
    if (!allCourses || allCourses.length === 0) {
        handleError(new Error("No courses available"));
        return;
    }
    
    // Check if we're on the main page or courses page
    const isMainPage = window.location.pathname.endsWith('main.html') || window.location.pathname === '/';
    const coursesToShow = isMainPage ? allCourses.slice(0, 3) : allCourses;
    
    coursesToShow.forEach((course, index) => {
        createCourse(course.name, course.price, course.description, course.image, index);
    });
    
    document.dispatchEvent(event);
}

// Покупка курса (добавление в localStorage)
function buyCourse(e) {
    e.preventDefault();

    const el = document.querySelector("#test");
    let itemImg = $(this).closest('.all-courses-container__item').find('img').eq(0);

    const courseData = e.target.data;
    courseData.time = new Date().toLocaleDateString();
    courseData.isPaid = false;

    const boughtCourses = JSON.parse(localStorage.getItem('boughtCourses')) || [];

    const courseExists = boughtCourses.find(course => course.id === courseData.id);

    if (!courseExists) {
        flyToElement(itemImg, el);
        boughtCourses.push(courseData);
        localStorage.setItem('boughtCourses', JSON.stringify(boughtCourses));
        document.dispatchEvent(eventBought);
    } else {
        showWarningsModal();
    }
}

// Показать предупреждение, если курс уже куплен
function showWarningsModal() {
    const warnModal = document.querySelector('.warnCourseModal');
    const warnContent = document.querySelector('.warn-content');

    setTimeout(() => {
        warnModal.style.opacity = '1';
        warnContent.style.transform = 'translateX(-50%) translateY(100%)';
        setTimeout(() => {
            warnModal.style.opacity = '0';
            warnContent.style.transform = 'translateX(-50%) translateY(0)';
        }, 2000);
    }, 100);
}

// Создание DOM-элемента курса
function createCourse(name, price, description, imageSource, id) {
    let courseContainer = document.createElement("div");
    courseContainer.classList.add("all-courses-container__item");

    let course1 = document.createElement('div');
    course1.className = 'course-1';

    let courseImage = document.createElement('img');
    courseImage.alt = 'courseImage';
    courseImage.className = 'course-image';
    courseImage.src = imageSource;
    courseImage.onerror = function() {
        console.error(`Failed to load image: ${imageSource}`);
        this.src = 'assets/images/default.webp';
    };
    course1.appendChild(courseImage);

    let courseName = document.createElement('h2');
    courseName.className = 'course-name';
    courseName.textContent = name;
    course1.appendChild(courseName);

    let courseDescription = document.createElement('p');
    courseDescription.className = 'course-description';
    courseDescription.textContent = description;
    course1.appendChild(courseDescription);

    courseContainer.appendChild(course1);

    let course2 = document.createElement('div');
    course2.className = 'course-2';

    let coursePriceContainer = document.createElement('div');
    coursePriceContainer.className = 'course-price-container';

    let courseOldPriceText = document.createElement('div');
    courseOldPriceText.className = 'course-old-price-text';
    courseOldPriceText.textContent = price;
    coursePriceContainer.appendChild(courseOldPriceText);

    let courseNewPriceText = document.createElement('div');
    courseNewPriceText.className = 'course-new-price-text';
    courseNewPriceText.textContent = Math.round(price * 0.7);
    coursePriceContainer.appendChild(courseNewPriceText);

    let priceByn1 = document.createElement('div');
    priceByn1.className = 'price-byn';
    priceByn1.textContent = 'BYN/мес';
    coursePriceContainer.appendChild(priceByn1);

    let priceByn2 = document.createElement('div');
    priceByn2.className = 'price-byn';
    priceByn2.textContent = 'BYN/мес';
    coursePriceContainer.appendChild(priceByn2);

    course2.appendChild(coursePriceContainer);
    courseContainer.appendChild(course2);

    let courseControllerContainer = document.createElement('div');
    courseControllerContainer.className = 'course-controller-container';

    let buyCourseButton = document.createElement('input');
    buyCourseButton.type = 'button';
    buyCourseButton.value = 'Записаться';
    buyCourseButton.data = {name, price, description, imageSource, id};
    buyCourseButton.className = 'buyCourseBtn';
    buyCourseButton.addEventListener("click", buyCourse);
    courseControllerContainer.appendChild(buyCourseButton);

    let detailsButton = document.createElement('input');
    detailsButton.type = 'button';
    detailsButton.value = 'Подробнее';
    detailsButton.className = 'moreBtn';
    detailsButton.onclick = function() {
        const detailsModal = document.getElementById("myModal");
        detailsModal.style.display = "block";
        fillDetails(name, description, imageSource, price);
    };
    courseControllerContainer.appendChild(detailsButton);

    courseContainer.appendChild(courseControllerContainer);

    document.getElementById("courses").appendChild(courseContainer);
}

function fillDetails(name, description, image, price) {
    const detailsContent = document.getElementById("courseDetails");
    detailsContent.innerHTML = "";

    let courseImage = document.createElement('img');
    courseImage.alt = 'courseImage';
    courseImage.src = image;
    courseImage.style.width = '100%';
    courseImage.style.maxHeight = '300px';
    courseImage.style.objectFit = 'cover';
    courseImage.style.borderRadius = '10px';
    courseImage.style.marginBottom = '20px';
    detailsContent.appendChild(courseImage);

    let courseName = document.createElement('h2');
    courseName.textContent = name;
    courseName.style.marginBottom = '15px';
    detailsContent.appendChild(courseName);

    let courseDescription = document.createElement('p');
    courseDescription.textContent = description;
    courseDescription.style.marginBottom = '15px';
    courseDescription.style.lineHeight = '1.5';
    detailsContent.appendChild(courseDescription);

    let coursePrice = document.createElement('p');
    coursePrice.textContent = 'Цена: ' + Math.round(price * 0.7) + " BYN/мес (скидка 30%)";
    coursePrice.style.fontSize = '1.2em';
    coursePrice.style.fontWeight = 'bold';
    coursePrice.style.color = '#4CAF50';
    detailsContent.appendChild(coursePrice);

    let courseTime = document.createElement('p');
    courseTime.textContent = 'Продолжительность: 12 месяцев';
    courseTime.style.marginTop = '10px';
    detailsContent.appendChild(courseTime);

    let additionalInfo = document.createElement('div');
    additionalInfo.style.marginTop = '20px';
    additionalInfo.style.padding = '15px';
    additionalInfo.style.backgroundColor = '#2b2b34';
    additionalInfo.style.borderRadius = '10px';
    
    let features = [
        '✓ Доступ к материалам курса 24/7',
        '✓ Практические задания с обратной связью',
        '✓ Персональный наставник',
        '✓ Сертификат по окончании курса'
    ];
    
    features.forEach(feature => {
        let featureElement = document.createElement('p');
        featureElement.textContent = feature;
        featureElement.style.margin = '10px 0';
        featureElement.style.color = '#bebebe';
        additionalInfo.appendChild(featureElement);
    });
    
    detailsContent.appendChild(additionalInfo);
}

function flyToElement(flyer, flyingTo) {
    var $func = $(this);
    var divider = 3;
    var flyerClone = $(flyer).clone();
    $(flyerClone).css({
        position: 'fixed',
        top: $(flyer).offset().top - $(window).scrollTop() + "px",
        left: $(flyer).offset().left - $(window).scrollLeft() + "px",
        opacity: 1,
        'z-index': 1000
    });
    $('body').append($(flyerClone));

    var gotoX = $(flyingTo).offset().left - $(window).scrollLeft() + $(flyingTo).width() / 2 - $(flyer).width() / (2 * divider);
    var gotoY = $(flyingTo).offset().top - $(window).scrollTop() + $(flyingTo).height() / 2 - $(flyer).height() / (2 * divider);

    $(flyerClone).animate({
        opacity: 0.4,
        left: gotoX,
        top: gotoY,
        width: $(flyer).width()/divider,
        height: $(flyer).height()/divider
    }, 700, function () {
        $(flyingTo).css({
            transform: 'scale(0.9)',
        });
        $(flyingTo).fadeTo('fast', 1, function() {
            $(this).css('transform', 'scale(1)');
        });
        $(flyerClone).fadeOut('fast', function() {
            $(flyerClone).remove();
        });
    });
}
