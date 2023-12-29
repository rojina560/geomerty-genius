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
    areaSpan.innerText = area


    
}
function calculateReactangleArea() {
    const rectangWidth = document.getElementById("rectangle-width");
    const widthValueText = rectangWidth.value
    const width = parseFloat(widthValueText)
    const rectanglelenght = document.getElementById("rectangle-lenght");
    const lenghtValueText = rectanglelenght.value;
    const lenght = parseFloat(lenghtValueText)
    const area = width * lenght
    const areaSpan = document.getElementById("rectangle-area");
    areaSpan.innerText =area

}
// Parallelogram;
function calculateParallelogramArea() {
    
}
