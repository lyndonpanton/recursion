import Header from "./js/component/Header";
import Main from "./js/component/Main";
import Footer from "./js/component/Footer";

class UI {
    constructor(body, title, author) {
        this.body = body;
        this.author = author;
        this.title = title;
        this.header = new Header(title);
        this.main = new Main();
        this.footer = new Footer(this.author);
    }

    create() {
        this.header.create();
        this.main.create();
        this.footer.create();

        this.body.appendChild(this.header.container);
        this.body.appendChild(this.main.container);
        this.body.appendChild(this.footer.container);
    }
}

export default UI;
