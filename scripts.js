// Função para alternar a visibilidade do dropdown
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
  }
  
  // Fechar o dropdown se o usuário clicar fora dele
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  // Função para alternar a visibilidade do dropdown
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    var dropdowns = document.getElementsByClassName("dropdown-content");
    
    // Fecha todos os outros dropdowns
    for (var i = 0; i < dropdowns.length; i++) {
      var otherDropdown = dropdowns[i];
      if (otherDropdown.id !== dropdownId && otherDropdown.classList.contains('show')) {
        otherDropdown.classList.remove('show');
      }
    }
    
    // Abre ou fecha o dropdown clicado
    dropdown.classList.toggle("show");
  }
  
  // Fechar o dropdown se o usuário clicar fora dele
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  