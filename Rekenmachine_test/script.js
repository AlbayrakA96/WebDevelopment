let outputValue = document.getElementById("output-value").innerHTML;

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.addEventListener("click", userInput)    
}

function userInput() {
    let outputValue = document.getElementById("output-value").innerHTML;
    let inputField = this.innerHTML;
    console.log(this.innerHTML);
    // document.getElementById("output-value").innerHTML = this.innerHTML;
        // outputValue += inputField;
        console.log(outputValue.length);
        if(outputValue.length == 1) {
            if(outputValue == "0") {
                console.log("Iets");
                document.getElementById("output-value").innerHTML = `${inputField}`;
            }
        } if (outputValue >= 1 ) {
           
            document.getElementById("output-value").innerHTML += this.innerHTML;
            
        }

    // if (outputValue.innerHTML == "") {
    //     outputValue.innerHTML = inputField;

    // } else {
        // outputValue.innerHTML += inputField;
    // } 
}