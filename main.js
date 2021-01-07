const myInp = document.getElementById("myInp");
const btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function () {

    myInp.select();

    document.execCommand("Copy");
};
