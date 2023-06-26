document.getElementById('bg-toggle').addEventListener('change', function() {
    var body = document.getElementsByTagName('body')[0];
    const switchElement = document.getElementById('bg-toggle');
    const navElement = document.getElementById('main-nav');

    if (this.checked) {
        body.classList.add('blue-bg');
        body.classList.remove('black-bg');
        navElement.classList.add('black-bg');
        navElement.classList.remove('blue-bg');
    } else {
        body.classList.remove('blue-bg');
        body.classList.add('black-bg');
        navElement.classList.remove('black-bg');
        navElement.classList.add('blue-bg');
    }
});
