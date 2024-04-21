let login = document.querySelector('.sub-btn');
let popup= document.querySelector('.popup');
let ok = document.querySelector('.start-btn');


   login.addEventListener('click', () =>{
      popup.style.display = 'block';           
   });
        
   ok.addEventListener('click', () =>{
      popup.style.display = 'none';
   });