import { fibs, fibsRec } from "./js/fibonacci"
import { mergeSort } from "./js/merge-sort";

class UI {
    constructor(main) {
        this.main = main;
        this.fibonacciCount = 0;
    }

    displayUI() {
        this.fibonacciUI();
        // this.mergeSortUI();
    }

    fibonacciCall(output, e) {
        e.preventDefault();

        const result = fibsRec(this.fibonacciCount);

        output.textContent = result.join(", ");
    }

    fibonacciUI() {
        const container = document.createElement("div");
        container.id = "fibonacci";
        container.classList.add("container");

        const heading = document.createElement("h2");
        heading.classList.add("container-heading");
        heading.textContent = "Fibonacci";

        const form = document.createElement("form");
        form.id = "fibonacci-form";
        form.classList.add("container-form");

        let fibonacciLegend = document.createElement("legend");
        fibonacciLegend.classList.add("fibonacci-form-legend");
        fibonacciLegend.textContent =
                "How many numbers in the sequence would you like?";

        let fibonacciAmount = document.createElement("input");
        fibonacciAmount.classList.add("fibonacci-form-count");
        fibonacciAmount.max = 50;
        fibonacciAmount.min = 1;
        fibonacciAmount.required = true;
        fibonacciAmount.step = 1;
        fibonacciAmount.type = "number";
        fibonacciAmount.addEventListener("keydown",
                this.updateFibonacciCount.bind(this));
        fibonacciAmount.addEventListener("keyup",
                this.updateFibonacciCount.bind(this));

        form.appendChild(fibonacciLegend);
        form.appendChild(fibonacciAmount);

        const output = document.createElement("p");
        output.textContent = "...";
        output.classList.add("fibonacci-output");

        form.addEventListener("submit", this.fibonacciCall.bind(this, output));

        container.appendChild(heading);
        container.appendChild(form);
        container.appendChild(output);

        this.main.appendChild(container);
    }

    mergeSortUI() {
        const container = document.createElement("div");
        container.id = "merge-sort";
        container.classList.add("container");

        const form = document.createElement("form");
        form.id = "merge-sort-form";
        form.classList.add("container-form");


        container.appendChild(heading);
        container.appendChild(form);
        container.appendChild(output);
    }

    updateFibonacciCount(e) {
        this.fibonacciCount = e.target.value;
    }
}

export default UI;
