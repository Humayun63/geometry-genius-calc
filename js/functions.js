// SET ELEMENT BY ID
function setElementById(elementId){
    return document.getElementById(elementId);
};
// RANDOM COLOR SET
function randomColor(){
    const color = 'rgb('+ Math.floor(Math.random()*255) + ',' + 
                    Math.floor(Math.random()*255) + ',' + 
                    Math.floor(Math.random()*255) + ')';
    return color; 
}
// GET VALUE FROM INPUT
function getValueFromInput(elementId){
    const element = setElementById(elementId);
    const valueString = element.value;
    const value = parseFloat(valueString);
    element.value = '';
    return value;
}
//  SET INNER TEXT VALUE
function setInnerText(elementId, value){
    const element = setElementById(elementId);
    element.innerText = value;
}

// DISPLAY ELEMENT TO AREA FIELD
let count = 0;
function displayResult(text, result){
    count++;
    const resultArea = setElementById('result-area');
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid', 'grid-cols-2', 'md:grid-cols-2', 'gap-1', 'mb-2');
    resultArea.appendChild(newDiv);

    const shapeName = document.createElement('p');
    shapeName.innerText = count + '.' + text;
    newDiv.appendChild(shapeName);

    const area = document.createElement('span');
    area.innerHTML = result + `cm<sup>2</sup>`;
    area.classList.add('text-center');
    newDiv.appendChild(area);

    const convertBtn = document.createElement('button');
    convertBtn.innerHTML =
     `
        Convert to m<sup>2</sup>
    `;
    convertBtn.classList.add('bg-sky-400', 'px-3', 'py-1', 'rounded-lg', 'text-lg', 'font-medium', 'text-white', 'my-1', 'block', 'md:col-span-2', 'w-full');
    newDiv.appendChild(convertBtn);
}