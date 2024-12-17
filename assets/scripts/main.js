
function toggleInformacion() {
  const informacionSection = document.getElementById('informacion');
  informacionSection.classList.toggle('visible');
  
  // Mostrar u ocultar la sección
  if (informacionSection.style.display === 'none' || informacionSection.style.display === '') {
    informacionSection.style.display = 'flex';  
  } else {
    informacionSection.style.display = 'none'; 
  }

  informacionSection.scrollIntoView({ behavior: 'smooth' });
}
