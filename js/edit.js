const elements = document.getElementsByClassName('edit');
for (const element of elements) {
    element.addEventListener('click', function(event){
       const targetElement =  event.target.parentNode.nextSibling.nextSibling;
       targetElement.style.display = 'block';
        const checkboxElement ='#' +  targetElement.id + ' .hide';
        console.log(checkboxElement);
        document.querySelector(checkboxElement).checked = true;
    });
}

