const reveal = document.querySelector('.open');
const hide = document.querySelector('.hide');

reveal.addEventListener('click', () => {
    hide.style.display = "block";
    reveal.style.transform = "rotate(180deg)";
});

