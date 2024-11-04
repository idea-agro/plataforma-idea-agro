

document.getElementById('searchInput').addEventListener('input', function(event) {
  const query = event.target.value.trim().toLowerCase();
  const searchableElements = document.querySelectorAll('.searchable');

  let results = [];

  searchableElements.forEach(element => {
      const isVisible = window.getComputedStyle(element).getPropertyValue('display') !== 'none';
      const text = element.innerText.trim().toLowerCase();

      if (isVisible && text.includes(query)) {
          results.push({ element, text });
      }
  });

  showResults(results, query);
});

function showResults(results, query) {
  const searchResultsList = document.getElementById('searchResults');
  searchResultsList.innerHTML = ''; // Limpiar los resultados anteriores

  if (query === '') {
      return; // No mostrar resultados si no hay búsqueda
  }

  if (results.length === 0) {
      const listItem = document.createElement('li');
      listItem.textContent = 'No se encontraron resultados para: ' + query;
      searchResultsList.appendChild(listItem);
      return; // Salir de la función si no hay resultados
  }

  results.forEach(({ element, text }) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      const startIndex = text.indexOf(query); // Índice de inicio de la coincidencia
      const endIndex = text.indexOf('.', startIndex) + 1; // Índice de fin de la oración

      const sentence = text.substring(startIndex, endIndex).trim(); // Obtener la oración que contiene la coincidencia

      link.textContent = sentence; // Mostrar solo la oración relevante
      link.href = '#' + element.id; // Agregar un enlace al ID del elemento
      link.addEventListener('click', function(event) {
          event.preventDefault();
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          removeHighlight(); // Eliminar cualquier resaltado existente
          highlightMatches(element, query); // Resaltar solo la consulta dentro del elemento
      });

      listItem.appendChild(link);
      searchResultsList.appendChild(listItem);
  });
}

// Función para resaltar solo las coincidencias de búsqueda dentro del elemento dado
function highlightMatches(element, query) {
  const text = element.innerText.trim();
  const regex = new RegExp(query, 'gi');
  element.innerHTML = text.replace(regex, '<mark>$&</mark>');
}

// Función para eliminar el resaltado de búsqueda existente
function removeHighlight() {
  const highlightedElements = document.querySelectorAll('mark');
  highlightedElements.forEach(element => {
      element.outerHTML = element.textContent;
  });
}
