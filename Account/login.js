const box1 = document.getElementById('password')
const img = document.getElementById('togglePassword');

img.addEventListener("click", () => {
    const isPassword = box1.type === 'password';
    box1.type = isPassword ? 'text' : 'password';

    img.src = isPassword ? 'visibility-on.png': 'visibility-off.png'

})


