const nome = document.getElementById('moodBox_userName');
const imagem = document.getElementById('moodBox_profileImage_input');
const imageTag = document.getElementById('moodBox_profileImage_imgTag');

// Recupera dados salvos ao carregar a página
const nomeSalvo = localStorage.getItem('nome');
nome.value = nomeSalvo ? JSON.parse(nomeSalvo) : '';

const fotoSalva = localStorage.getItem('foto');
if (fotoSalva) imageTag.src = fotoSalva;

// Salva o nome ao digitar
function saveData() {
    localStorage.setItem('nome', JSON.stringify(nome.value));
}

// Troca e salva a foto de perfil
function changeImage() {
    const file = imagem.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        imageTag.src = e.target.result;
        localStorage.setItem('foto', e.target.result);
    };
    reader.readAsDataURL(file);
}

nome.addEventListener('keyup', saveData);
imagem.addEventListener('change', changeImage);