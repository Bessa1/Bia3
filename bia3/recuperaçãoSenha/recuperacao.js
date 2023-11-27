function sendCode() {
    event.preventDefault();
    document.getElementById("step-email").style.display = "none";
    document.getElementById("step-code").style.display = "block";
  
    const codeInputs = document.getElementById("codeInputs");
    const numberOfDigits = 6; // Defina o número de dígitos do código
  
    // Cria um input separado para cada dígito do código
    for (let i = 0; i < numberOfDigits; i++) {
      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 1; // Permite apenas um caractere por input
      input.setAttribute("data-index", i + 1); // Atributo para identificar o índice do input
      input.className = "code-digit"; // Classe para estilização
      input.oninput = function () {
        const nextIndex = parseInt(this.getAttribute("data-index")) + 1;
        const nextInput = document.querySelector(`[data-index="${nextIndex}"]`);
        if (nextInput && this.value) {
          nextInput.focus();
        }
      };
      codeInputs.appendChild(input);
    }
  }


  //pop-up
function showPopup() {
    document.getElementById('successPopup').style.display = 'block';
  }
  
  function showPopup() {
    document.getElementById('successPopup').style.display = 'block';
  }
  
  // Adicione um evento de clique no botão "Fechar" dentro do pop-up
  document.getElementById('successPopup').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      if (event.target.classList.contains('close-button')) {
        document.getElementById('successPopup').style.display = 'none';
      }
    }
  });

  function verifyCode() {
    event.preventDefault()
    // ...
    // Após a verificação bem-sucedida:
    showPopup();

    
  }