class Header {
    constructor(text) {
        this.container = document.createElement("header");
        this.text = text;
    }

    create() {
        this.createHeading();
    }

    createHeading() {
        let heading = document.createElement("h1");
        heading.textContent = this.text;

        this.container.appendChild(heading);
    }
}

export default Header;
