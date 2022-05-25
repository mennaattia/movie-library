var ul = document.querySelector("ul"),
    addBtn = document.querySelector(".addBtn"),
    closeBtn = document.querySelector(".closeBtn"),
    saveBtn = document.querySelector(".saveBtn")
    modal = document.querySelector(".modal"),
    inputTitle = document.querySelector(".inputTitle"),
    inputImg = document.querySelector(".inputImg"),
    inputRate = document.querySelector(".inputRate");
var openModal = () => {
    modal.classList.remove("none");
    modal.classList.add("block");
}
addBtn.addEventListener("click", openModal);
var closeModal = () => {
    modal.classList.replace("block", "none");
}
closeBtn.addEventListener("click", closeModal);
var addMovie = () => {
    if(inputTitle.value.trim() == "" || inputImg.value.trim() == "" || inputRate.value.trim() == "" || Number(inputRate.value) > 10 || Number(inputRate.value) < 0) {
        alert("Please check your data again!");
    } else {
        ul.innerHTML += `
        <li>
            <div class="container-fluid">
            <div class="row box">
                <div class="col-md-4 col-sm-4 col-4">
                <img src="${inputImg.value}" class="img-fluid">
                </div>
                <div class="col-md-4 col-sm-4 col-4 movieInfo">
                <h3 class="title">${inputTitle.value}</h3>
                <p class="rate">${inputRate.value}/10</p>
                </div>
                <div class="col-md-4 col-sm-4 col-4 delete">
                <i class="fas fa-solid fa-trash trash"></i>
                </div>
            </div>
            </div>
        </li>
        `
        modal.classList.add("none");
        alertD.classList.add("none");
        inputImg.value = "";
        inputTitle.value = "";
        inputRate.value = "";
    }
}
saveBtn.addEventListener("click", addMovie);
var deleteMovieFunction = (e) => {
    if (e.target.classList.contains("trash")) {
        e.target.parentElement.parentElement.remove();
    }
}
document.addEventListener("click", deleteMovieFunction);