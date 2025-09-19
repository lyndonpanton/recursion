class Footer {
    constructor(author) {
        this.container = document.createElement("footer");
        this.author = author;
    }
    
    create() {
        // this.container.appendChild(this.createDeveloper());
        this.container.appendChild(this.createData());
        this.container.appendChild(this.createCopyright());
    }

    createCopyright() {
        const component = document.createElement("article");
        component.id = "footer-copyright";

        const rightsSymbol = document.createElement("span");
        rightsSymbol.classList.add("footer-copyright-symbol");
        rightsSymbol.innerHTML = "&copy; ";
        const rightsYear = document.createElement("span");
        rightsYear.classList.add("footer-copyright-year");
        rightsYear.textContent = new Date().getFullYear() + " ";
        const rightsHolder = document.createElement("span");
        rightsHolder.classList.add("footer-copyright-author");
        rightsHolder.textContent = this.author;
        const rightsDivider = document.createElement("span");
        rightsDivider.classList.add("footer-copyright-divider");
        rightsDivider.textContent = " | ";
        const rightsType = document.createElement("span");
        rightsType.classList.add("footer-copyright-type");
        rightsType.textContent = "All Rights Reserved";

        component.appendChild(rightsSymbol);
        component.appendChild(rightsYear);
        component.appendChild(rightsHolder);
        component.appendChild(rightsDivider);
        component.appendChild(rightsType);

        return component;
    }


    createData() {
        const component = document.createElement("section");
        component.id = "footer-data";

        component.appendChild(this.createDataLegal());
        component.appendChild(this.createDataSocial());

        return component;
    }

    createDataLegal() {
        const component = document.createElement("ul");
        component.classList.add("data-list");

        let privacy = document.createElement("li");
        privacy.classList.add("data-list-item");
        privacy.textContent = "Privacy";
        
        let terms = document.createElement("li");
        terms.classList.add("data-list-item");
        terms.textContent = "Terms and Conditions";
        
        let cookies = document.createElement("li");
        cookies.classList.add("data-list-item");
        cookies.textContent = "Cookies";

        component.appendChild(privacy);
        component.appendChild(terms);
        component.appendChild(cookies);

        return component;
    }

    createDataSocial() {
        const component = document.createElement("ul");
        component.classList.add("data-list");

        // Change to use icons
        let twitter = document.createElement("li");
        twitter.classList.add("data-list-item");
        let twitterLink = document.createElement("a");
        twitterLink.classList.add("data-list-link");
        twitterLink.textContent = "Twitter"
        twitterLink.href = "https://twitter.com";
        twitter.appendChild(twitterLink);
        
        let facebook = document.createElement("li");
        facebook.classList.add("data-list-item");
        let facebookLink = document.createElement("a");
        facebookLink.classList.add("data-list-link");
        facebookLink.textContent = "Facebook"
        facebookLink.href = "https://facebook.com";
        facebook.appendChild(facebookLink);
        
        let instagram = document.createElement("li");
        instagram.classList.add("data-list-item");
        let instagramLink = document.createElement("a");
        instagramLink.classList.add("data-list-link");
        instagramLink.textContent = "Instagram"
        instagramLink.href = "https://instagram.com";
        instagram.appendChild(instagramLink);

        component.appendChild(twitter);
        component.appendChild(facebook);
        component.appendChild(instagram);

        return component;
    }

    createDeveloper() {
        const component = document.createElement("section");

        this.createDeveloperInformation(component);
        this.createDeveloperLanguages(component);
        this.createDeveloperManagers(component);
        this.createDeveloperProjects(component);

        this.container.appendChild(component);
    }

    createDeveloperInformation() {
        const component = document.createElement("ul");



        return component;
    }

    createDeveloperLanguages() {
        const component = document.createElement("ul");



        return component;
    }

    createDeveloperManagers() {
        const component = document.createElement("ul");



        return component;
    }

    createDeveloperProjects() {
        const component = document.createElement("ul");



        return component;
    }
}

export default Footer;
