function scrollCarousel(direction) {
    const container = document.getElementById('reviews');
    const items = container.getElementsByClassName('review-item');
    const scrollAmount = items[0].clientWidth;
    container.scrollLeft += scrollAmount * direction;
}

let reviews = [
    {
        name: "Белодед Николай",
        text: "Отличные курсы, много полезной информации. Рекомендую!",
        image: "assets/images/beloded.jpg"
    },
    {
        name: "Ильинковский Арсений",
        text: "Очень понравилось обучение, все доступно и понятно. Спасибо!",
        image: "assets/images/arseni.jpg"
    },
    {
        name: "Волков Владислав",
        text: "Курсы помогли мне разобраться в сложных темах. Большое спасибо!",
        image: "assets/images/vova.jpg"
    },
    {
        name: "Груша Артём",
        text: "Отличные курсы, помогли мне развить свои навыки. Спасибо!",
        image: "assets/images/artem.jpg"
    },
    {
        name: "Крупкевич Иван",
        text: "Интересные задания и понятные объяснения. Рекомендую начинающим!",
        image: "assets/images/vanya.jpg"
    },
    {
        name: "Авдеенко Илья",
        text: "Курсы помогли мне справиться с трудными задачами. Очень доволен результатом!",
        image: "assets/images/ilya.jpg"
    },
    {
        name: "Жигар матвей",
        text: "Отличный формат обучения, удобно и эффективно. Рекомендую!",
        image: "assets/images/matvi.jpg"
    },
    {
        name: "Иванов Иван",
        text: "Верните деньги!",
        image: "assets/images/kto.jpg"
    },
    {
        name: "Новиков Глеб",
        text: "Благодаря этим курсам я смогла сменить профессию и найти работу мечты!",
        image: "assets/images/gleb.jpg"
    },
    {
        name: "Тайлер Дёрден",
        text: "Структурированный подход к обучению и отзывчивые преподаватели. Всё на высшем уровне!",
        image: "assets/images/tailer.jpg"
    },
    {
        name: "Дуэйн Джонсон",
        text: "Отличная платформа для обучения. Особенно понравились практические задания.",
        image: "assets/images/skala.jpg"
    },
    {
        name: "Альберт Эйнштейн",
        text: "Очень интересные курсы, жаль что я не дожил до них.",
        image: "assets/images/albert.jpg"
    },
    {
        name: "Дмитрий Соколов",
        text: "Удобный график обучения и качественные материалы. Спасибо за такой подход!",
        image: "assets/images/1foto.jpg"
    },
    {
        name: "Сергей Иванов",
        text: "Отличная поддержка на протяжении всего обучения. Рекомендую всем!",
        image: "assets/images/2foto.jpg"
    },
    {
        name: "Демьян Ульянов",
        text: "Благодаря этим курсам я получил повышение на работе. Спасибо за знания!",
        image: "assets/images/3foto.jpg"
    },
    {
        name: "Андрей Волков",
        text: "Практические задания очень приближены к реальным задачам. Это помогло мне быстрее адаптироваться на работе.",
        image: "assets/images/4foto.jpg"
    },
    {
        name: "Артур Павидлов",
        text: "Отличная обратная связь от преподавателей. Всегда помогали разобраться в сложных моментах.",
        image: "assets/images/5foto.jpg"
    },
    {
        name: "Игорь Семенов",
        text: "Курсы помогли мне систематизировать знания и выйти на новый уровень в карьере.",
        image: "assets/images/6foto.jpg"
    },
    {
        name: "Татьяна Кузнецова",
        text: "Удобный формат обучения позволил совмещать работу и учебу. Очень довольна результатом!",
        image: "assets/images/7foto.jpg"
    },
    {
        name: "Максим Соколов",
        text: "Современный подход к обучению и актуальные материалы. Рекомендую всем, кто хочет развиваться в IT.",
        image: "assets/images/8foto.jpg"
    },
    {
        name: "Артём Поварёнков",
        text: "Благодаря курсам я смог начать карьеру в новой сфере. Спасибо за поддержку и знания!",
        image: "assets/images/17foto.jpg"
    },
    {
        name: "Артем Козлов",
        text: "Отличная структура курса и понятные объяснения. Особенно понравились вебинары с разбором практических кейсов.",
        image: "assets/images/10foto.jpg"
    },
    {
        name: "Наталья Петрова",
        text: "Курсы помогли мне обрести уверенность в своих навыках. Теперь я успешно работаю в крупной компании.",
        image: "assets/images/11foto.jpg"
    },
    {
        name: "Денис Иванов",
        text: "Спасибо за качественное обучение и помощь в трудоустройстве. Все обещания были выполнены!",
        image: "assets/images/12foto.jpg"
    },
    {
        name: "Роман Ницкий",
        text: "Отличная платформа для обучения. Особенно понравилась возможность общаться с другими студентами.",
        image: "assets/images/13foto.jpg"
    },
    {
        name: "Павел Новиков",
        text: "Курсы помогли мне освоить новую специальность с нуля. Теперь я успешно работаю в IT-компании.",
        image: "assets/images/14foto.jpg"
    },
    {
        name: "Алина Волкова",
        text: "Благодаря курсам я смогла реализовать свою мечту о работе в IT. Спасибо за профессионализм!",
        image: "assets/images/16foto.jpg"
    },
    {
        name: "Роман Соколов",
        text: "Отличная программа обучения и поддержка на всех этапах. Рекомендую всем, кто хочет развиваться в IT.",
        image: "assets/images/15foto.jpg"
    }
];

function createReview(name, review, imageSource) {
    let reviewContainer = document.createElement("div");
    reviewContainer.classList.add("review-item");

    let image = document.createElement("img");
    image.classList.add("review-avatar");
    image.alt = "photo";
    image.src = imageSource;
    image.onerror = function() {
        console.error(`Failed to load image: ${imageSource}`);
        this.src = 'assets/images/default-avatar.jpg';
    };

    let contentContainer = document.createElement("div");
    contentContainer.classList.add("review-content");

    let wrap = document.createElement("div");
    wrap.classList.add("review-wrap");

    let title = document.createElement("h2");
    title.classList.add("review-name");
    title.innerHTML = name;

    let text = document.createElement("p");
    text.classList.add("review-text");
    text.textContent = review;

    contentContainer.appendChild(text);
    wrap.appendChild(image);
    wrap.appendChild(title);
    reviewContainer.appendChild(wrap);
    reviewContainer.appendChild(contentContainer);

    document.getElementById("reviews").appendChild(reviewContainer);
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Loading reviews...');
    const reviewsContainer = document.getElementById("reviews");
    if (!reviewsContainer) {
        console.error("Error: Could not find reviews container element");
        return;
    }

    try {
        reviews.forEach(review => {
            createReview(review.name, review.text, review.image);
        });
        console.log('Reviews loaded successfully');
    } catch (error) {
        console.error("Error loading reviews:", error);
        reviewsContainer.innerHTML = `<p style="color: red;">Ошибка загрузки отзывов: ${error.message}. Пожалуйста, обновите страницу.</p>`;
    }
});


