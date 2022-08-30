const bodyClass = "bg-purple-800 bg-gradient-to-br from-blue-300 bg-opacity-25";
const bdy = document.querySelector('body');
bodyClass.split(" ").forEach(cls => bdy.classList.add(cls))

const calcBodyClass = "max-w-lg rounded overflow-hidden shadow-2xl bg-pink-700 bg-opacity-75 bg-gradient-to-tr from-gray-800 flex";
const calcBody = document.querySelector('.calcBody');
calcBodyClass.split(" ").forEach(cls => calcBody.classList.add(cls));

const outputClass = "flex flex-col w-3/4 h-12 justify-center items-end m-1 bg-gray-300 text-gray-900 font-semibold px-2 border border-black hover:border-gray-500 rounded";
const output = document.querySelector(".output");
outputClass.split(" ").forEach(cls => output.classList.add(cls));

const previousNumberClass = "flex max-w-lg h-1/3 pb-5 pt-1 text-gray-600 text-xs";
const previousNumber = document.querySelector(".previousNumber");
previousNumberClass.split(" ").forEach(cls => previousNumber.classList.add(cls));

const currNumberClass = "flex max-w-lg h-2/3 pb-2 text-xl";
const currNumber = document.querySelector(".currentNumber");
currNumberClass.split(" ").forEach(cls => currNumber.classList.add(cls));


const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    addClasses(btn);
})

function addClasses(btn) {
    const btnNumberClass = "hover:bg-green-500 border-green-500";
    const btnClearClass = "hover:bg-red-500 border-red-500";
    const btnOperatorClass = "hover:bg-blue-500 border-blue-500";
    const btnOpClass = "hover:bg-blue-500 border-blue-500";
    const btnEqClass = "hover:bg-red-500 border-red-500";
    const btnDecClass = "hover:bg-yellow-500 border-yellow-500";

    if (btn.classList.value === "number")
        btnNumberClass.split(" ").forEach(cls => btn.classList.add(cls));
    else if (btn.classList.value === "clear")
        btnClearClass.split(" ").forEach(cls => btn.classList.add(cls));
    else if (btn.classList.value === "operator")
        btnOperatorClass.split(" ").forEach(cls => btn.classList.add(cls));
    else if (btn.classList.value === "equal")
        btnEqClass.split(" ").forEach(cls => btn.classList.add(cls));
    else if (btn.classList.value === "decimal")
        btnDecClass.split(" ").forEach(cls => btn.classList.add(cls));

    const baseClass = "flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:border-transparent rounded text-white border-2 text-2xl";
    baseClass.split(" ").forEach(cls => btn.classList.add(cls));
}