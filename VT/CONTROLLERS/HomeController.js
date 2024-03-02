class HomeController {
    console.log("HomeController");
    index() {
        // Chamar a função render() da classe MainView
        MainView.render('About');
    }
}
