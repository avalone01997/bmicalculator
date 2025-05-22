const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    
    if ( weight === "" || isNaN(weight)) {
        return result.innerHTML = "กรุณาป้อนน้ำหนักของคุณเป็นตัวเลข"
    } else if ( height === "" || isNaN(height)) {
        return result.innerHTML = "กรุณาป้อนส่วนสูงของคุณเป็นตัวเลข"
    } else {
        // เริ่มต้นคำนวนค่า BMI
        height = height / 100
        let bmi = (weight/Math.pow(height, 2)).toFixed(2)

        //บอกเกณฑ์
        if (bmi<18.5){
            showResult(bmi,"ผอมเกินไป", "blue")
            // return result.innerHTML = `ผลลัพธ์ = ${bmi} (ผอมเกินไป)`
        } 
        else if (bmi >= 18.5 && bmi <= 24.9) {
            showResult(bmi,"ปกติ", "green")
            // return result.innerHTML = `ผลลัพธ์ = ${bmi} (ปกติ)`
        } 
        else if ( bmi >= 25 && bmi <= 29.9) {
            showResult(bmi,"อ้วน", "red")
            // return result.innerHTML = `ผลลัพธ์ = ${bmi} (อ้วน)`
        } 
        else{
            showResult(bmi,"อ้วนเกินไป", "purple")
            // return result.innerHTML = `ผลลัพธ์ = ${bmi} (อ้วนเกินไป)`
        }
    }
})

function showResult(bmi, message, color) {
    result.style.backgroundColor = color
    return result.innerHTML = `ผลลัพธ์ = ${bmi} (${message})`
}