let currentIndex = 0;

function showSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }
    
    items.forEach((item, i) => {
        item.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots[i].classList.remove('active');
    });
    
    dots[currentIndex].classList.add('active');
}

function currentSlide(index) {
    showSlide(index);
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Exibir o botão de "Voltar ao Topo" quando a rolagem for maior que 100px
window.onscroll = function() {
    var button = document.getElementById("scrollTopButton");
    if (window.scrollY > 100) {
        button.classList.add("visible");
    } else {
        button.classList.remove("visible");
    }
};