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