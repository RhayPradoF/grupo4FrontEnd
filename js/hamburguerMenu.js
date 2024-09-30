const menu = document.getElementById('menu');

function clickMenu(){
    if(menu.style.display == 'block' ){
      menu.style.display = 'none';
    }else{
      menu.style.display = 'block';
    }
    
  };

  window.addEventListener('resize', () =>{
    if(window.innerWidth > 1040){
        menu.style.display = 'inline-block';
    }else{
        menu.style.display = 'none';
    }
  });