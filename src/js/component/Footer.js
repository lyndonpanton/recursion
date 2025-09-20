class Footer {
    constructor(author) {
        this.container = document.createElement("footer");
        this.author = author;
    }
    
    create() {
        this.container.appendChild(this.createDeveloper());
        this.container.appendChild(this.createData());
        this.container.appendChild(this.createCopyright());
    }

    createCopyright() {
        const component = document.createElement("article");
        component.id = "copyright";

        const rightsSymbol = document.createElement("span");
        rightsSymbol.classList.add("copyright-item", "copyright-symbol");
        rightsSymbol.innerHTML = "&copy; ";
        const rightsYear = document.createElement("span");
        rightsYear.classList.add("copyright-item", "copyright-year");
        rightsYear.textContent = new Date().getFullYear() + " ";
        const rightsHolder = document.createElement("span");
        rightsHolder.classList.add("copyright-item", "copyright-author");
        rightsHolder.textContent = this.author;
        const rightsDivider = document.createElement("span");
        rightsDivider.classList.add("copyright-item", "copyright-divider");
        rightsDivider.textContent = " | ";
        const rightsType = document.createElement("span");
        rightsType.classList.add("copyright-item", "copyright-type");
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
        component.id = "data";

        component.appendChild(this.createDataLegal());
        component.appendChild(this.createDataSocial());

        return component;
    }

    createDataLegal() {
        const component = document.createElement("ul");
        component.classList.add("data-list");

        let privacy = document.createElement("li");
        privacy.classList.add("data-list-item");
        privacy.textContent = "Privacy Policy";
        
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
        component.id = "developer";

        component.appendChild(this.createDeveloperInformation());
        component.appendChild(this.createDeveloperLanguages());
        component.appendChild(this.createDeveloperManagers());
        component.appendChild(this.createDeveloperProjects());

        return component;
    }

    createDeveloperInformation() {
        const component = document.createElement("ul");
        component.classList.add("developer-list");

        let heading = document.createElement("li");
        heading.classList.add("developer-list-item", "developer-list-heading");
        heading.textContent = "Developer Information";
        
        let portfolio = document.createElement("li");
        portfolio.classList.add("developer-list-item");
        let portfolioLink = document.createElement("a");
        portfolioLink.classList.add("developer-list-link");
        portfolioLink.textContent = "Portfolio"
        portfolioLink.href = "https://lyndonpanton.co.uk/";
        portfolio.appendChild(portfolioLink);

        let github = document.createElement("li");
        github.classList.add("developer-list-item");
        let githubLink = document.createElement("a");
        githubLink.classList.add("developer-list-link");
        githubLink.textContent = "GitHub"
        githubLink.href = "https://github.com/lyndonpanton";
        github.appendChild(githubLink);
        
        let linkedin = document.createElement("li");
        linkedin.classList.add("developer-list-item");
        let linkedinLink = document.createElement("a");
        linkedinLink.classList.add("developer-list-link");
        linkedinLink.textContent = "LinkedIn"
        linkedinLink.href = "https://www.linkedin.com/in/lyndonpanton/";
        linkedin.appendChild(linkedinLink);

        component.appendChild(heading);
        component.appendChild(portfolio);
        component.appendChild(github);
        component.appendChild(linkedin);

        return component;
    }

    createDeveloperLanguages() {
        const component = document.createElement("ul");
        component.classList.add("developer-list");

        let heading = document.createElement("li");
        heading.classList.add("developer-list-item", "developer-list-heading");
        heading.textContent = "Languages and Frameworks";

        let html = document.createElement("li");
        html.classList.add("developer-list-item");
        let htmlLink = document.createElement("a");
        htmlLink.classList.add("developer-list-link");
        htmlLink.href = "https://developer.mozilla.org/en-US/docs/Web/HTML";
        htmlLink.textContent = "HTML";
        html.appendChild(htmlLink);

        let css = document.createElement("li");
        css.classList.add("developer-list-item");
        let cssLink = document.createElement("a");
        cssLink.classList.add("developer-list-link");
        cssLink.href = "https://developer.mozilla.org/en-US/docs/Web/CSS";
        cssLink.textContent = "CSS";
        css.appendChild(cssLink);

        let javaScript = document.createElement("li");
        javaScript.classList.add("developer-list-item");
        let javaScriptLink = document.createElement("a");
        javaScriptLink.classList.add("developer-list-link");
        javaScriptLink.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
        javaScriptLink.textContent = "JavaScript";
        javaScript.appendChild(javaScriptLink);

        component.appendChild(heading);
        component.appendChild(html);
        component.appendChild(css);
        component.appendChild(javaScript);
        
        return component;
    }

    createDeveloperManagers() {
        const component = document.createElement("ul");
        component.classList.add("developer-list");

        let heading = document.createElement("li");
        heading.classList.add("developer-list-item", "developer-list-heading");
        heading.textContent = "Managers, Packages, and APIs";

        let npm = document.createElement("li");
        npm.classList.add("developer-list-item");
        let npmLink = document.createElement("a");
        npmLink.classList.add("developer-list-link");
        npmLink.href = "https://www.npmjs.com/";
        npmLink.textContent = "npm";
        npm.appendChild(npmLink);

        let webpack = document.createElement("li");
        webpack.classList.add("developer-list-item");
        let webpackLink = document.createElement("a");
        webpackLink.classList.add("developer-list-link");
        webpackLink.href = "https://webpack.js.org/";
        webpackLink.textContent = "Webpack";
        webpack.appendChild(webpackLink);

        component.appendChild(heading);
        component.appendChild(npm);
        component.appendChild(webpack);
        
        return component;
    }

    createDeveloperProjects() {
        const component = document.createElement("ul");
        component.classList.add("developer-list");

        let heading = document.createElement("li");
        heading.classList.add("developer-list-item", "developer-list-heading");
        heading.textContent = "More Projects";

        let weatherApp = document.createElement("li");
        weatherApp.classList.add("developer-list-item");
        let weatherAppLink = document.createElement("a");
        weatherAppLink.classList.add("developer-list-link");
        weatherAppLink.href = "https://lyndonpanton.github.io/weather-app/";
        weatherAppLink.textContent = "Weather Forecast";
        weatherApp.appendChild(weatherAppLink);

        let pixelArtEditor = document.createElement("li");
        pixelArtEditor.classList.add("developer-list-item");
        let pixelArtEditorLink = document.createElement("a");
        pixelArtEditorLink.classList.add("developer-list-link");
        pixelArtEditorLink.href = "https://github.com/lyndonpanton/pixel-art-editor";
        pixelArtEditorLink.textContent = "Pixel Art Editor";
        pixelArtEditor.appendChild(pixelArtEditorLink);

        let currencyConverter = document.createElement("li");
        currencyConverter.classList.add("developer-list-item");
        let currencyConverterLink = document.createElement("a");
        currencyConverterLink.classList.add("developer-list-link");
        currencyConverterLink.href = "https://github.com/lyndonpanton/currency-converter";
        currencyConverterLink.textContent = "Currency Converter";
        currencyConverter.appendChild(currencyConverterLink);

        let wordCounter = document.createElement("li");
        wordCounter.classList.add("developer-list-item");
        let wordCounterLink = document.createElement("a");
        wordCounterLink.classList.add("developer-list-link");
        wordCounterLink.href = "https://github.com/lyndonpanton/word-counter";
        wordCounterLink.textContent = "Word Counter";
        wordCounter.appendChild(wordCounterLink);

        component.appendChild(heading);
        component.appendChild(weatherApp);
        component.appendChild(pixelArtEditor);
        component.appendChild(currencyConverter);
        component.appendChild(wordCounter);
        
        return component;
    }
}

export default Footer;
