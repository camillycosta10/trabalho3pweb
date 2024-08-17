function alterarEstado(selectElement) {
   
    const ambiente = selectElement.parentElement;
    
    
    const estadoDiv = ambiente.querySelector('.estado');

    
    estadoDiv.classList.remove('ocupado', 'livre', 'manutencao');


    const novoEstado = selectElement.value;
    estadoDiv.classList.add(novoEstado);

   
    estadoDiv.textContent = novoEstado.toUpperCase();

    if (novoEstado === 'ocupado') {
    }
     else if (novoEstado === 'livre') {
    } 
    else if (novoEstado === 'manutencao') {
        
    }
}
