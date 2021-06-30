const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const button = document.getElementById('btn');
const color = document.querySelector('.hex-code');

button.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += colors[getRAndomNumber()];
    }
    // console.log(hexColor);
    
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

const getRAndomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}