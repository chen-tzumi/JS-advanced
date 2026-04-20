let arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((number, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${index + 1}. ${number}`;
    let numberList = document.getElementById("numberList");
    numberList.appendChild(li);
});