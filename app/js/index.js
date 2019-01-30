var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);

}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        toLocal();
    };
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        toLocal();
    }
    toLocal();
}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("todo__input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Это поле не может быть пустым!");
    } else {
        var todo_massif = document.getElementById("todo__list").appendChild(li);

    }
    document.getElementById("todo__input").value = "";
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    toLocal();
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

var todos;
function toLocal() {
    todos = todo__list.innerHTML;
    localStorage.setItem('todos', todos);
}

if(localStorage.getItem('todos')) {
    todo__list.innerHTML = localStorage.getItem('todos');
}

// localStorage.clear();


/*function loadDoc() {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var myObj = JSON.parse(this.responseText).slice(0, 10);
            for (let i = 0; i <10; i ++) {
                console.log(myObj[i].title)
            }
            console.log(myObj[0].title);
            console.log(myObj[1].title);
            console.log(myObj[2].title);
            console.log(myObj[3].title);
            console.log(myObj[4].title);
        }
    };
}

loadDoc();*/
