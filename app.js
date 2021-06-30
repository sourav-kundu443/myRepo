const colors = ['green', 'red', 'rgb(133, 122, 200)', '#f15025'];
const button = document.getElementById('btn');

const color = document.querySelector('.hex-code');

button.addEventListener('click', function() {
    // console.log(document.body);
    const randomNumber = Math.floor(Math.random() * 4);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
