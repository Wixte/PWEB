const inputTexto = document.getElementById('meuTexto');
const btnMaiuscula = document.getElementById('btnMaiuscula');
const btnMinuscula = document.getElementById('btnMinuscula');

function transformarTexto() {
  if (btnMaiuscula.checked) {
    inputTexto.value = inputTexto.value.toUpperCase();
  } else if (btnMinuscula.checked) {
    inputTexto.value = inputTexto.value.toLowerCase();
  }
}

btnMaiuscula.addEventListener('change', transformarTexto);
btnMinuscula.addEventListener('change', transformarTexto);

inputTexto.addEventListener('input', transformarTexto);
