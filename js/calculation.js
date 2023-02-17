// TRIANGLE AREA CALCULATION
setElementById('triangle-calc-btn').addEventListener('click', function(){
    const base = getValueFromInput('triangle-base');
    const height = getValueFromInput('triangle-height');
    if(base > 0 && height > 0){
        setInnerText('triangle-h-text', height);
        setInnerText('triangle-b-text', base);
        const area = (0.5 * base * height).toFixed(2);
        displayResult('Triangle Area', area);
    }else{
        alert('Input Valid Info!')
    }
});

// RECTANGLE AREA CALCULATION
setElementById('rectangle-calc-btn').addEventListener('click', function(){
    const wide = getValueFromInput('rectangle-wide');
    const length = getValueFromInput('rectangle-length');
    if(wide > 0 && length > 0){
        setInnerText('rectangle-w-text', wide);
        setInnerText('rectangle-l-text', length);
        const area = (wide * length).toFixed(2);
        displayResult('Rectangle Area', area);
    }else{
        alert('Input Valid Info!')
    }
});

// PARALLELOGRAM AREA CALCULATION 
setElementById('parallelogram-calc-btn').addEventListener('click', function(){
    const base = getValueFromInput('parallelogram-base');
    const height = getValueFromInput('parallelogram-height');
    if(base > 0 && height > 0){
        setInnerText('parallelogram-h-text', height);
        setInnerText('parallelogram-b-text', base);
        const area = (base * height).toFixed(2);
        displayResult('Parallelogram Area', area);
    }else{
        alert('Input Valid Info!')
    }
})

// RHOMBUS AREA CALCULATION
setElementById('rhombus-calc-btn').addEventListener('click', function(){
    const firstDiagonal = getValueFromInput('rhombus-first-diagonal');
    const secondDiagonal = getValueFromInput('rhombus-second-diagonal');
    if(firstDiagonal > 0 && secondDiagonal > 0){
        setInnerText('rhombus-d1-text', firstDiagonal);
        setInnerText('rhombus-d2-text', secondDiagonal);
        const area = (0.5 * firstDiagonal * secondDiagonal).toFixed(2);
        displayResult('Rhombus Area', area);
    }else{
        alert('Input Valid Info!')
    }
});

// PENTAGON AREA CALCULATION
setElementById('pentagon-calc-btn').addEventListener('click', function(){
    const  perimeter= getValueFromInput('pentagon-perimeter');
    const base = getValueFromInput('pentagon-base');
    if(perimeter > 0 && base > 0){
        setInnerText('pentagon-p-text', perimeter);
        setInnerText('pentagon-b-text', base);
        const area = (0.5 * perimeter * base).toFixed(2);
        displayResult('Pentagon Area', area);
    }else{
        alert('Input Valid Info!')
    }
});
// ELLIPSE AREA CALCULATION
setElementById('ellipse-calc-btn').addEventListener('click', function(){
    const aAxis = getValueFromInput('a-axis');
    const bAxis = getValueFromInput('b-axis');
    if(aAxis > 0 && bAxis > 0){
        setInnerText('ellipse-a-text', aAxis);
        setInnerText('ellipse-b-text', bAxis);
        const area = (3.14 * aAxis * bAxis).toFixed(2);
        displayResult('Ellipse Area', area);
    }else{
        alert('Input Valid Info!')
    }
})
