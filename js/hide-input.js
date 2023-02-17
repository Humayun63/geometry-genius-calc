const items = document.getElementsByClassName('hide');
for (const item of items) {
    item.addEventListener('change', function(event){
        event.target.parentNode.style.display= 'none';
    });
}


