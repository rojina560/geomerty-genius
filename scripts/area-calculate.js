function calculateTriangleArea() {
    const baseField = document.getElementById("triangle-base");
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    console.log(baseValueText)

    const heightField = document.getElementById("triangle-height");
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    const area = 0.5 * base * height;
    const areaSpan = document.getElementById("triangele-area");
    areaSpan.innerText = area;
     addToCalculationEntry("triangele", area);
    if (isNaN(base) || isNaN(height)) {
        alert('please insert a number')
        return
    }
    
}
function calculateReactangleArea() {
  const rectangWidth = document.getElementById("rectangle-width");
  const widthValueText = rectangWidth.value;
  const width = parseFloat(widthValueText);
  const rectanglelenght = document.getElementById("rectangle-lenght");
  const lenghtValueText = rectanglelenght.value;
  const lenght = parseFloat(lenghtValueText);
  const area = width * lenght;
  const areaSpan = document.getElementById("rectangle-area");
    areaSpan.innerText = area;
    addToCalculationEntry("rectangle", area);
    
    
  // valid input: width and height
  if (isNaN(width) || isNaN(length)) {
    alert(" please insert a  valid number");
    return;
  }
}
// Parallelogram; 
function calculateParallelogramArea() {
    const base = getInputValue("Parallelogram-base");
    const length = getInputValue("Parallelogram-lenght");
    const area = base * length
    setElementById("Parallelogram-area", area);  
    addToCalculationEntry("Parallelogram", area);
}
 

// ellipse area 
function calculateellipseArea() {
  const majorRedius = getInputValue("ellipse-major");
  const minorRedius = getInputValue("ellipse-minor");
  const area = majorRedius * minorRedius;
    setElementById("ellipse-area", area);
    addToCalculationEntry('ellipse',area)
}
function calculateRhombusArea() {
  const width = getInputValue("Rhombus-base");
  const length = getInputValue("Rhombus-lenght");
  const area = 0.5 * width * length;
  setElementById("Rhombus-area", area);
  addToCalculationEntry( 'rhombus',area)
  

}
function calculatePentagonArea() {
  const base = getInputValue("Pentagon-base");
  const length = getInputValue("Pentagon-lenght");
  const area = base * length;
  setElementById("Pentagon-area", area);
  addToCalculationEntry( 'pantagon',area)
  
}

// reusable function reduce duplicate code
function getInputValue( inputId) {
    const inputField = document.getElementById(inputId);
    const inputTextValue = inputField.value
    const value = parseFloat(inputTextValue);
    return value
}
function setElementById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area
}
// add to calculation entry
/**
 * 1. get the element  where you want to add the dynamic HTML
 * 2.create a element you want to add
 *3. if neended add some class
 * 4. set inner HTML. it could be dynamic Tamplate String
 * 5. append the created element as a child of the parent
 */
function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4')

    p.innerHTML = `${count}  ${areaType}  ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success"> convert </button>`
    calculationEntry.appendChild(p)
}


 


