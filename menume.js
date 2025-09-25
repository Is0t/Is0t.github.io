// Modal açma ve kapama işlemleri
const modal = document.getElementById("projectModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModal = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

// Modal dışına tıklanırsa kapama
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
