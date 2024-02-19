//darkmode toggle
const darktoggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
darktoggle.addEventListener('click', function () {
    if (darktoggle.checked) {

        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

});