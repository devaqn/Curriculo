document.addEventListener('DOMContentLoaded', () => {
    
    const btnImprimir = document.getElementById('btn-imprimir');
    
    if (btnImprimir) {
        btnImprimir.addEventListener('click', () => {
            window.print();
        });
    }

    const foto = document.getElementById('foto-perfil');
    if(foto) {
        foto.addEventListener('click', () => {
            alert("Este é o perfil de Pedro Miguel - Desenvolvedor Back-end!");
        });
    }
});
