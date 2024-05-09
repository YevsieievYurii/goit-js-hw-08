const images = [
    {
    preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
    },
];
    
// const galleryContainer = document.querySelector(".gallery");
// galleryContainer.addEventListener("click", function(event) {
//     event.preventDefault();
// })    


// images.forEach(image => {
//     const listItem = document.createElement("li");
//     listItem.classList.add("gallery-item");
//     listItem.innerHTML =
//     `<a class="gallery-link" href="${image.original}" download="">
//     <img
//         class="gallery-image"
//         src="${image.preview}"
//         data-source="${image.original}"
//         alt="${image.description}"
//     />
//     </a>`;
    
// galleryContainer.appendChild(listItem);
// })

// galleryContainer.addEventListener("click", function (event) {
// console.log(event.target);
// })

// document.addEventListener('DOMContentLoaded', function () {
    // Ваш код для галереї
//     images.forEach(image => {
//         const listItem = document.createElement("li");
//         listItem.classList.add("gallery-item");
//         listItem.innerHTML =
//         `<a class="gallery-link" href="${image.original}" download="">
//         <img
//             class="gallery-image"
//             src="${image.preview}"
//             data-source="${image.original}"
//             alt="${image.description}"
//         />
//         </a>`;
        
//     galleryContainer.appendChild(listItem);
//     })

    // При кліку на зображення
//     document.querySelectorAll('.thumbnail').forEach(function (element) {
//     element.addEventListener('click', function () {
//         // Отримуємо посилання на зображення
//         const imgSrc = this.querySelector('img').getAttribute('src');
//         // Ініціалізуємо модальне вікно зображення
//         const lightbox = basicLightbox.create(`<img src="${image.original}" alt="${image.description}">`);
//         // Відображаємо модальне вікно
//         instance.show();
//     });
//     });
// });


const container = document.querySelector(".gallery");

const instance = basicLightbox.create(`
<div class="modal">
    <img src="" alt="Large Image" />
</div>
`);

container.insertAdjacentHTML("beforeend", createItem(images));
container.addEventListener("click", function(event) {
    event.preventDefault();

    const clickedElement = event.target.closest(".gallery-item");

    if (clickedElement) {
        const index = clickedElement.dataset.index;
        const imageUrl = images[index].original;
        
        instance.element().querySelector("img").setAttribute("src", imageUrl);

        instance.show();
    
    }
});


function createItem(arr) {
return arr.map((images, index) =>`
<li class="gallery-item" data-index="${index}">
    <a class="gallery-link" href="${images.original}">
    <img
        class="gallery-image"
        src="${images.preview}"
        data-source="${images.original}"
        alt="${images.description}"
    />
    </a>
</li>
`).join("");
}

