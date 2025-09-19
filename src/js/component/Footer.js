class Footer {
    constructor(author) {
        this.container = document.createElement("footer");
        this.author = author;
    }
    
    create() {
        this.createCopyright();
    }

    createCopyright() {
        const copyright = document.createElement("article");
        copyright.id = "footer-copyright";

        const rightsSymbol = document.createElement("span");
        rightsSymbol.classList.add("footer-copyright-symbol");
        rightsSymbol.textContent = "&copy; ";
        const rightsYear = document.createElement("span");
        rightsYear.classList.add("footer-copyright-year");
        rightsYear.textContent = new Date().getFullYear();
        const rightsHolder = document.createElement("span");
        rightsHolder.classList.add("footer-copyright-author");
        rightsHolder.textContent = this.author;
        const rightsDivider = document.createElement("span");
        rightsDivider.classList.add("footer-copyright-divider");
        rightsDivider.textContent = " | ";
        const rightsType = document.createElement("span");
        rightsType.classList.add("footer-copyright-type");
        rightsType.textContent = "All Rights Reserved";

        copyright.appendChild(rightsSymbol);
        copyright.appendChild(rightsYear);
        copyright.appendChild(rightsHolder);
        copyright.appendChild(rightsDivider);
        copyright.appendChild(rightsType);

        this.container.appendChild(copyright);
    }
}

export default Footer;
