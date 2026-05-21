function validar() {
  let form = document.querySelector('.form1');
  let inputNome = form.elements['nome'];
  let inputComentario = form.elements['comentario'];
  let radiosPesquisa = form.elements['pesquisa'];

  if (inputNome.value.trim().length < 10) {
    alert('O Nome não pode ter menos que 10 caracteres.');
    inputNome.focus();
    return false;
  }

  if (inputComentario.value.trim().length < 20) {
    alert('O Comentário deve ter no mínimo 20 caracteres.');
    inputComentario.focus();
    return false;
  }

  let pesquisaSelecionada = '';
  let pesquisaMarcada = false;

  for (let i = 0; i < radiosPesquisa.length; i++) {
    if (radiosPesquisa[i].checked) {
      pesquisaMarcada = true;
      pesquisaSelecionada = radiosPesquisa[i].value;
      break;
    }
  }

  if (!pesquisaMarcada) {
    alert('Por favor, responda a pesquisa.');
    return false;
  }

  if (pesquisaSelecionada === 'nao') {
    alert('Que bom que você voltou a visitar esta página!');
  } else {
    alert('Volte sempre à está página!');
  }

  return false;
}
