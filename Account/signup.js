const box1 = document.getElementById('password1')
const box2 = document.getElementById('password2')
const img1 = document.getElementById('togglePassword1');
const img2 = document.getElementById('togglePassword2');

img1.addEventListener("click", () => {
    const isPassword = box1.type === 'password';
    box1.type = isPassword ? 'text' : 'password';

    img1.src = isPassword ? 'visibility-on.png': 'visibility-off.png'
})

img2.addEventListener("click", () => {
    const isPassword = box2.type === 'password';
    box2.type = isPassword ? 'text' : 'password';

    img2.src = isPassword ? 'visibility-on.png': 'visibility-off.png'

})

