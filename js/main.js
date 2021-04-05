$(document).ready(function () {

const menuButton = document.querySelector('.menu-buttons');
menuButton.addEventListener('click', function () {
  console.log('кнопка');
  document.querySelector('.navbar-top__nav').classList.toggle('navbar-top__nav--visible');
  
})

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: false,
  spaceBetween: 30,
  slidesPerView: 4,
  

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  
  keyboard: {
    enabled: false,
    onlyInViewport: false,
  },

});

$(".regular-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        centerMode: false,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 0.5,
          }
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 0.75,
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
          }
        },
        {
          breakpoint: 410,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
      });

  const modalOverlay = $('.modal__overlay');
  const modalDialog = $('.modal__dialog');
  const modalButton = $('[data-toggle="modal"]');
  const closeModalButton = $('.modal__close');
  const closeModalOverlay = $('.modal__overlay');
  
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  closeModalOverlay.on('click', closeModal);

  function openModal() {
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeModal(event);
    };
  });

  // Обработка форм
  $(".modal__form").validate({
      errorClass: "form-1",
      messages: {
        name: {
            required: "Пожалуйста, укажите имя",
            minlength: "Имя должно быть длиннее 2 букв",
          },
          email: {
              required: "Ваша почта для связи",
              email: "Еmail должен быть в формате name@domain.ru"
            },
            phone: {
                required: "Номер телефона обязателен",
                minlength: "Номер должен быть из 10 цифр"
              },
            }
            });
            
  
$(".phone").mask("+7 (000) 000-0000");
  
})