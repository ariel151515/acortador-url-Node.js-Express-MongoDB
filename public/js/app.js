console.log('hola estoy aqui soy frontend')

document.addEventListener('click', e => {
    if (e.target.dataset.short) {
        const url = `http://localhost:5000/${e.target.dataset.short}`;

        // Esto es nativo de javascript, sirpve para copoiar en portapapeles
        navigator.clipboard
            .writeText(url)
            .then(() => {
                console.log('Text copied to clipboars...')
            })
            .catch((err) => {
                console.log('Something went wrong', err)
            })
    }
})