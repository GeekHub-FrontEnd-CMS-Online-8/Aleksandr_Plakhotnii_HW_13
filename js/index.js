jQuery(function ($) {
    const massif = [];
    const list = $('.list');
    const input = $('.inp');

    function addTodo(vlaue) {
        massif.push(vlaue);//добавляет элемент в конец массива
        renderMassif();
    }

    function renderMassif () {
        list.empty();//удаляет всё содержимое
        $.each(massif, function (i) {//для каждого элемента будет выполнятся функция
            list.prepend(`<li> ${this} <button data-index="${i}">remove</button> </li>`);
            localStorage.setItem('massif', JSON.stringify(massif));
            JSON.parse(localStorage.getItem('massif'));
        });
    }

    function removeList (index) {
        massif.splice(index, 1);  //удаляет элемент
        renderMassif();
    }


    input.on('change', function (e) {
        addTodo(this.value);
        this.value = '';
    });

    $(document).on('click', 'button', function () {
        const index = $(this).data('index');
        removeList(index)
    });

/*
    localStorage.setItem('myKey', 'myValue');
    document.write(localStorage.getItem('myKey'));
    localStorage.clear();
*/




    function loadDoc() {

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                var myObj = JSON.parse(this.responseText).slice(0, 10);
                for (let i = 0; i <10; i ++) {
                    console.log(myObj[i].title + "<br>")
                }


/*              console.log(myObj[0].title);
                console.log(myObj[1].title);
                console.log(myObj[2].title);
                console.log(myObj[3].title);
                console.log(myObj[4].title);*/
            }
        };
    }

    loadDoc();

});


