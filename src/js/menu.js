export var menus = document.getElementsByClassName('dropDown-menu');

[].forEach.call(menus, function (m) {
    m.addEventListener('click', function () {
        m.classList.toggle('open');
    });
    m.addEventListener('click', function () {
        m.classList.toggle('display');
    });
    
});