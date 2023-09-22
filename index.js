// Función para incrementar los likes
function incrementLikes(btnId) {
    // Obtén el elemento del botón
    const button = document.querySelector(`#btn-like${btnId}`);
    
    // Obtén el elemento de conteo de likes
    const likeCountElement = button.previousElementSibling.querySelector('span');
    
    // Obtén el contador actual de likes
    let likeCount = parseInt(likeCountElement.innerText);
    
    // Incrementa el contador de likes
    likeCount++;
    
    // Actualiza el texto del contador de likes
    likeCountElement.innerText = likeCount;
}
