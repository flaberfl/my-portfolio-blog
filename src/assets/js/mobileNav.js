const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');
const body = document.body;

// Когда кликаем на бургер-проверяем, есть ли у body класс show-sidebar, если класс есть - мы вызываем
// closeSidebar (убирается show-sidebar у body и убирается маска, которая была создана ),
// а если show-sidebar нету у body то showSidebar(создаем маску, добавляем ее в page и выдаем body - show-sidebar )

burger.addEventListener('click', event => {
  if (body.classList.contains('show-sidebar')) {
    closeSidebar();
  } else {
    showSidebar();
  }
});

function showSidebar() {
  let mask = document.createElement('div');
  mask.classList.add('page__mask');
  mask.addEventListener('click', closeSidebar);
  page.appendChild(mask);

  body.classList.add('show-sidebar');
}


function closeSidebar() {
  body.classList.remove('show-sidebar');
  document.querySelector('.page__mask').remove();
}