document.querySelector('.modal-body__form').onsubmit = async e => {
    e.preventDefault();
    let response = await fetch('', {
    method: 'POST',
    body: new FormData(e.target)
    });
    let result = await response.text();

    document.querySelector('.modal-body__form').style.display = 'none';
    document.querySelector('.modal-body__get').classList.remove("disable");
};