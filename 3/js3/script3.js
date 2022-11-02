'use strict';

      // read

      const readFixed = document.querySelector('.read__fixed'),
      closeRead = document.querySelector('.close__read'),
      btn1 = document.querySelector('.about');

        btn1.addEventListener('click', () =>{
        readFixed.classList.remove('hide');
        readFixed.classList.add('show');
        
      });

      closeRead.addEventListener('click', () =>{
        readFixed.classList.remove('show');
        readFixed.classList.add('hide');
      });

    //   partnyor 


        //   partnyor 

        const partnyorsFixed = document.querySelector('.partnyors__fixed'),
        closePartnyors = document.querySelector('.close__partnyors'),
        partnyor = document.querySelector('.Partners');
  
        partnyor.addEventListener('click', () =>{
          partnyorsFixed.classList.remove('hide');
          partnyorsFixed.classList.add('show');
  
          closePartnyors.addEventListener('click', () =>{
              partnyorsFixed.classList.remove('show');
              partnyorsFixed.classList.add('hide');
          });
  
        });
