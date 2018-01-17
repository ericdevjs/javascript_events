let btn = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let items = document.querySelectorAll("li");
let listContent = document.createTextNode(input.value);

// TEST CODE START

function inputLength() {
    return input.value.length
}

function createListElement() {
    // var li = document.createElement("li");
    ul.innerHTML = "<li><span><i class="fa fa-trash"></i></span>" + listContent + "</li>";
    // var listContent = document.createTextNode(input.value);
    // li.appendChild(document.createTextNode(input.value));
    // ul.appendChild(li);
    li.addEventListener("click", classToggle);
    input.value = "";
  }

function addListAfterKeypress() {
    if(inputLength() > 0 && event.keyCode === 13) {
      createListElement();
    }
}

function classToggle() {
  this.classList.toggle("done");
}

for(var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", classToggle);
}

// btn.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



// TEST CODE END
// TEST CODE END
// TEST CODE END
// TEST CODE END
// TEST CODE END
// TEST CODE END

// function inputLength() {
//     return input.value.length
// }
//
// function createListElement() {
//     // var li = document.createElement("li");
//     ul.innerHTML = "<li><span><i class="fa fa-trash"></i></span>" + listContent + "</li>";
//     // var listContent = document.createTextNode(input.value);
//     // li.appendChild(document.createTextNode(input.value));
//     // ul.appendChild(li);
//     li.addEventListener("click", classToggle);
//     input.value = "";
//   }
// function addListAfterClick() {
//     if(inputLength() > 0) {
//       createListElement();
//     }
// }
//
// function addListAfterKeypress() {
//     if(inputLength() > 0 && event.keyCode === 13) {
//       createListElement();
//     }
// }
//
// function classToggle() {
//   this.classList.toggle("done");
// }
//
// for(var i = 0; i < items.length; i++) {
//     items[i].addEventListener("click", classToggle);
// }
//
// // btn.addEventListener("click", addListAfterClick);
//
// input.addEventListener("keypress", addListAfterKeypress);
