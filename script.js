document.addEventListener('DOMContentLoaded', () => {
  // O @media print do style.css troca para tema claro, entao a caixa de
  // impressao do navegador ja gera o PDF pronto para enviar.
  const btn = document.getElementById('btn-imprimir');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  }
});
