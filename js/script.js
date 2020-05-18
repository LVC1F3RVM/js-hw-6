/**
 * 1. Написать код, чтобы при нажатии на li его текст становился жирным, 
    при нажатии вне ul выделение слетает (на пустом месте страницы)
 */

/**
 * 2. Написать код, чтобы при нажатии на li 
 *  2.1 его текст становился жирным 
 *  2.2 его текст (!) выводился в alert 
    
    при нажатии вне ul выделение слетает (на пустом месте страницы)
 */

const elem = document.body;

elem.addEventListener('click', function (event) {
   console.log(event.target);

   if (event.target !== 'li') {
      elem.querySelectorAll('li').forEach(elem => elem.classList.remove('elem_hw_1'));
   }

   if (event.target.tagName == "LI") {
      event.target.classList.add('elem_hw_1');
      alert(event.target.innerHTML);
   }

})











