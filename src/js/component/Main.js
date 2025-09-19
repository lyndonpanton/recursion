import { fibs, fibsRec } from "../algorithm/fibonacci"
import { mergeSort } from "../algorithm/merge-sort";

class Main {
    constructor() {
        this.container = document.createElement("main");
        
        this.fibonacciCount = 0;
        this.mergeSortList = [];
    }

    create() {
        this.createFibonacci();
        this.createMergeSort();
    }

    calculateFibonacci(output, e) {
        e.preventDefault();

        const result = fibsRec(this.fibonacciCount);

        output.textContent = result.join(", ");

        // also clear input field
        // fibonacciCount = 0
    }

    createFibonacci() {
        const fibonacciContainer = document.createElement("div");
        fibonacciContainer.id = "fibonacci";
        fibonacciContainer.classList.add("container");

        const heading = document.createElement("h2");
        heading.classList.add("container-heading");
        heading.textContent = "Fibonacci";

        const form = document.createElement("form");
        form.id = "fibonacci-form";
        form.classList.add("container-form");

        let fibonacciLegend = document.createElement("legend");
        fibonacciLegend.classList.add("form-legend");
        fibonacciLegend.textContent =
                "Please enter the number of items in the sequence";

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

        form.addEventListener("submit", this.calculateFibonacci.bind(this, output));

        fibonacciContainer.appendChild(heading);
        fibonacciContainer.appendChild(form);
        fibonacciContainer.appendChild(output);

        this.container.appendChild(fibonacciContainer);
    }

    calculateMergeSort(output, e) {
        e.preventDefault();

        let parsedList = [];
        let j = 0;

        for (let i = 0; i < this.mergeSortList.length; i++) {
            if (
                !isNaN(this.mergeSortList[i])
                && !this.mergeSortList[i].includes(" ")
            ) {
                parsedList[j++] = parseInt(this.mergeSortList[i])
            }
        }

        mergeSort(parsedList);

        let sortedList = [];
        j = 0;

        for (let i = 0; i < parsedList.length; i++) {
            // Ignore whitespace
            if (!(parsedList[i] == "")) {
                sortedList[j++] = parseInt(parsedList[i]);
            }
        }

        output.textContent = sortedList.join(", ")

        // also clear input field
        // this.mergeSortList = [];
    }

    createMergeSort() {
        const mergeSortContainer = document.createElement("div");
        mergeSortContainer.id = "merge-sort";
        mergeSortContainer.classList.add("container");

        const heading = document.createElement("h2");
        heading.classList.add("container-heading");
        heading.textContent = "Merge Sort";

        const form = document.createElement("form");
        form.id = "merge-sort-form";
        form.classList.add("container-form");

        let mergeSortLegend = document.createElement("legend");
        mergeSortLegend.classList.add("form-legend");
        mergeSortLegend.textContent =
                "Please enter space-separated integers to sort";

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
        formButton.value = "Apply";
        formButton.type = "submit";

        form.appendChild(mergeSortLegend);
        form.appendChild(mergeSortValues);
        form.appendChild(formButton);

        const output = document.createElement("p");
        output.textContent = "...";
        output.classList.add("form-output");

        form.addEventListener("submit", this.calculateMergeSort.bind(this, output));

        mergeSortContainer.appendChild(heading);
        mergeSortContainer.appendChild(form);
        mergeSortContainer.appendChild(output);

        this.container.appendChild(mergeSortContainer);
    }

    updateFibonacciCount(e) {
        this.fibonacciCount = e.target.value;
    }

    updateMergeSortList(e) {
        this.mergeSortList = e.target.value.split(" ");
    }
}

export default Main;
