


window.addEventListener('load', () => {
   let items = document.querySelectorAll('.list .item');
   let list = document.querySelector('.list');
   let count = items.length;
    let active = 1;
    let leftTransform = 0;
   
     setInterval(() => {
      setTimeout(() => {
         items.forEach(element => {
            element.classList.remove("animation")
          });
        }, 1000)

      items.forEach(element => {
         element.classList.add("animation")
       });

        let width_item = items[active % count].offsetWidth;
      
       
        
        leftTransform =   ((width_item * active) + ( width_item / 2 + (active * 3)));
        console.log(leftTransform)
        list.style.transform = `translate(-${leftTransform}px, -50%)`;
        active = (active + 1) % count; // Move to the next item, loop back to start




     }, 3000);
})

