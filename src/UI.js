import { fibs, fibsRec } from "./js/fibonacci"
import { mergeSort } from "./js/merge-sort";

class UI {
    constructor(main) {
        this.main = main;
        this.fibonacciCount = 0;
        this.mergeSortList = [];
    }

    displayUI() {
        this.fibonacciUI();
        this.mergeSortUI();
    }

    fibonacciCall(output, e) {
        e.preventDefault();

        const result = fibsRec(this.fibonacciCount);

        output.textContent = result.join(", ");

        // also clear input field
        // fibonacciCount = 0
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
        fibonacciLegend.classList.add("form-legend");
        fibonacciLegend.textContent =
                "How many numbers in the sequence would you like?";

        let fibonacciAmount = document.createElement("input");
        fibonacciAmount.classList.add("form-count");
        fibonacciAmount.max = 50;
        fibonacciAmount.min = 1;
        fibonacciAmount.required = true;
        fibonacciAmount.step = 1;
        fibonacciAmount.type = "number";
        fibonacciAmount.addEventListener("keydown",
                this.updateFibonacciCount.bind(this));
        fibonacciAmount.addEventListener("keyup",
                this.updateFibonacciCount.bind(this));

        let formButton = document.createElement("input");
        formButton.classList.add("form-submit");
        formButton.value = "Generate";
        formButton.type = "submit";

        form.appendChild(fibonacciLegend);
        form.appendChild(fibonacciAmount);
        form.appendChild(formButton);

        const output = document.createElement("p");
        output.textContent = "...";
        output.classList.add("form-output");

        form.addEventListener("submit", this.fibonacciCall.bind(this, output));

        container.appendChild(heading);
        container.appendChild(form);
        container.appendChild(output);

        this.main.appendChild(container);
    }

    mergeSortCall(output, e) {
        e.preventDefault();

        for (let i = 0; i < this.mergeSortList.length; i++) {
            if (isNaN(this.mergeSortList[i])) {
                // display with error message and return if value is not a number
            } else {
                this.mergeSortList[i] = parseInt(this.mergeSortList[i]);
            }
        }

        console.log(this.mergeSortList);

        mergeSort(this.mergeSortList);

        output.textContent = this.mergeSortList.join(", ")

        // also clear input field
        // this.mergeSortList = [];
    }

    mergeSortUI() {
        const container = document.createElement("div");
        container.id = "merge-sort";
        container.classList.add("container");

        const heading = document.createElement("h2");
        heading.classList.add("container-heading");
        heading.textContent = "Merge Sort";

        const form = document.createElement("form");
        form.id = "merge-sort-form";
        form.classList.add("container-form");

        let mergeSortLegend = document.createElement("legend");
        mergeSortLegend.classList.add("form-legend");
        mergeSortLegend.textContent =
                "Enter space-separated values to sort";

        let mergeSortValues = document.createElement("input");
        mergeSortValues.classList.add("form-count");
        mergeSortValues.maxLength = 50;
        mergeSortValues.minLength = 1;
        // Only only integers and spaces
        // Do not allow two consecutive spaces?
        // mergeSortValues.pattern = "";
        mergeSortValues.required = true;
        mergeSortValues.type = "text";
        mergeSortValues.addEventListener("keydown",
                this.updateMergeSortList.bind(this));
        mergeSortValues.addEventListener("keyup",
                this.updateMergeSortList.bind(this));

        let formButton = document.createElement("input");
        formButton.classList.add("form-submit");
        formButton.value = "Merge and Sort";
        formButton.type = "submit";

        form.appendChild(mergeSortLegend);
        form.appendChild(mergeSortValues);
        form.appendChild(formButton);

        const output = document.createElement("p");
        output.textContent = "...";
        output.classList.add("form-output");

        form.addEventListener("submit", this.mergeSortCall.bind(this, output));

        container.appendChild(heading);
        container.appendChild(form);
        container.appendChild(output);

        this.main.appendChild(container);
    }

    updateFibonacciCount(e) {
        this.fibonacciCount = e.target.value;
    }

    updateMergeSortList(e) {
        this.mergeSortList = e.target.value.split(" ");
    }
}

export default UI;
