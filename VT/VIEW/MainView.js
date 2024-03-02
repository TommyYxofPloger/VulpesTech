class MainView {
    console.log("MainView");
    static render(filename) {
        // Simula a inclusão do arquivo PHP em JavaScript
        fetch('PAGES/' + filename + '.php')
            .then(response => response.text())
            .then(html => {
                // Inserir o HTML retornado no corpo da página
                document.body.innerHTML = html;
            })
            .catch(error => {
                console.error('Erro ao renderizar página:', error);
            });
    }
}
