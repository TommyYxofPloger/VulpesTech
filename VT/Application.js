// Defina a classe Application em JavaScript
class Application {
    constructor() {
        this.Controller = null;
    }

    setApp() {
        let loadName = 'VT/CONTROLLERS/';
        let url = window.location.pathname.split('/');

        if (url[1] === '') {
            loadName += 'Home';
        } else {
            loadName += url[1].charAt(0).toUpperCase() + url[1].slice(1);
        }

        loadName += 'Controller';

        // Simulando a função file_exists em JavaScript
        // Verifica se a classe Controller existe
        if (typeof window[loadName] === 'function') {
            this.Controller = new window[loadName]();
        } else {
            // Simulando a inclusão do arquivo 404.php em JavaScript
            console.log('404: Página não encontrada');
            // window.location.href = 'VIEW/PAGES/404.php'; // Redirecionamento para uma página 404
        }
    }

    run() {
        this.setApp();
        if (this.Controller) {
            this.Controller.index();
        }
    }
}

// Simular a execução da aplicação quando o documento HTML é carregado
document.addEventListener('DOMContentLoaded', () => {
    const app = new Application();
    app.run();
});
