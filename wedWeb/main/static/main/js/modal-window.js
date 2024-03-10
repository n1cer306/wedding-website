document.getElementById("open-model-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open")
});

document.getElementById("close-my-model-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open")
});

window.addEventListener('keydown', (e) => {
    if (e.key == "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

document.querySelector("#my-modal .modal__box").addEventListener('click', Event => {
    Event._isClickerWithInModal = true;
});

document.getElementById("my-modal").addEventListener('click', Event => {
    if (Event._isClickerWithInModal) return;
    Event.currentTarget.classList.remove('open');
});