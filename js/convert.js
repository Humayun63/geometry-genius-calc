setElementById('result-area').addEventListener('click', function (event) {
    const isConvert = event.target.innerText;
    if(isConvert == "Convert to m2"){
        const element = event.target.previousSibling;
        const valueString = element.innerText;
        const value = parseFloat(valueString);
        const convertedValue = value / 10000;
        console.log(convertedValue);
        element.innerHTML = convertedValue + `m<sup>2</sup>`;
        // element.innerHTML = convertedValue + `m<sup>2</sup>`;
    }

});