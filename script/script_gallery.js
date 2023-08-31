function mostrarFotos() {
    const contenedorFotos = document.querySelector('.fotos');
    const fotosIniciales = contenedorFotos.querySelectorAll('.foto:nth-child(-n+4)');
    const todasLasFotos = contenedorFotos.querySelectorAll('.foto');
    const boton = document.createElement('button');
    boton.classList.add('boton_galeria');
    boton.textContent = 'Mostrar más';

    fotosIniciales.forEach(foto => {
        foto.style.display = 'block';
      });

      boton.textContent = 'Mostrar más';
  
    contenedorFotos.addEventListener('click', () => {
      if (boton.textContent === 'Mostrar más') {
        fotosIniciales.forEach(foto => {
          foto.style.display = 'none';
        });
  
        todasLasFotos.forEach(foto => {
          foto.style.display = 'block';
        });
  
        boton.textContent = 'Mostrar menos';
      } else {
        todasLasFotos.forEach(foto => {
          foto.style.display = 'none';
        });
  
        fotosIniciales.forEach(foto => {
          foto.style.display = 'block';
        });
  
        boton.textContent = 'Mostrar más';
      }
    });
  
    contenedorFotos.parentNode.insertBefore(boton, contenedorFotos.nextSibling);
  
    boton.addEventListener('click', () => {
      if (boton.textContent === 'Mostrar más') {
        fotosIniciales.forEach(foto => {
          foto.style.display = 'none';
        });
  
        todasLasFotos.forEach(foto => {
          foto.style.display = 'block';
        });
  
        boton.textContent = 'Mostrar menos';
      } else {
        todasLasFotos.forEach(foto => {
          foto.style.display = 'none';
        });
  
        fotosIniciales.forEach(foto => {
          foto.style.display = 'block';
        });
  
        boton.textContent = 'Mostrar más';
      }
    });
  }
  
  mostrarFotos();
  