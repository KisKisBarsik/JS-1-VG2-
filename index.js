document.getElementById("submit").addEventListener("click", 

    function () {

        const username = "Aleksandr"
        const password = "alo123"

        if (username == document.getElementById("username").value && password == document.getElementById("password").value) {

            alert("You are in the system")
    
        } else {

            alert("You wrote a wrong username or password")

        }
        
    }
    
)



document.getElementById("submit2").addEventListener("click", 

    function () {

        const number1 = Number(document.getElementById("number1").value)
        const number2 = Number(document.getElementById("number2").value)
        const number3 = Number(document.getElementById("number3").value)
        
        const sum = (number1 + number2 + number3) / 3

        alert(`Sum of the numbers is: ${sum}`)

    }

)



document.getElementById("submit3").addEventListener("click", 

    function () {
        
        const celsius = Number(document.getElementById("celsius").value)
        const fahrenheit = Number(document.getElementById("fahrenheit").value)

        const sumF = (celsius * 9/5) + 32

        alert(`${celsius} of the celsius is ${sumF} of the fahrenheit `)

    }

)



document.getElementById("submit4").addEventListener("click", 

    function () {
        
        const celsius = Number(document.getElementById("celsius").value)
        const fahrenheit = Number(document.getElementById("fahrenheit").value)

        const sumC = (fahrenheit - 32) * 5/9

        alert(`${fahrenheit} of the fahrenheit is ${sumC} of the celsius `)

    }

)



document.getElementById("submit5").addEventListener("click", 

    function () {

        const numberForSuming = Number(document.getElementById("sumedNumber").value)
        
        let sumOfTheNumber = 0

        for (let i = 0; i <= numberForSuming; i++) {
            
            sumOfTheNumber += i

        }

        alert(`Your tall was sumed with others number that are fewer than your number, so the answer is: ${sumOfTheNumber}`)
        
    }

)



document.getElementById("submit6").addEventListener("click",

    function () {
        
        const inputForPoints = document.getElementById("pointSystem").value

        if (inputForPoints < 0) {

            alert("Du skrevet noe feil, prøv fra 0 til 100")

        } else if (inputForPoints <= 30) {
            
            alert("Du fått karakter 1")

        } else if (inputForPoints <=45) {

            alert("Du fått karakter 2")

        } else if (inputForPoints <= 60) {

            alert("Du fått karakter 3")

        } else if (inputForPoints <= 75) {

            alert("Du fått karakter 4")

        } else if (inputForPoints <= 90) {

            alert("Du fått karakter 5")

        } else if (inputForPoints <= 100) {

            alert("Du fått karakter 6")

        } else {

            alert("Du skrevet noe feil, prøv fra 0 til 100")

        }

    }

)



console.log("Oppgave 6");

function star() {

    for (let i = 1; i <= 1; i++) {
    
        var item = ""
              

        for (let i = 0; i < 5; i++) {

            item += "*"
            
            console.log(item);
            
        }
    
    }

}

star();



function star2() {

    for (let i = 5; i >= 1; i--) {
    
        var item = ""
              

        for (let j = 1; j <= i; j++) {

            item += "*"
            
        }

        console.log(item);
    
    }
    
}

star2()



console.log("Oppagev 7");

function star3() {

    result = ""

    for (let i = 0; i < 6; i++) {
        
        let item2 = ""

        for (let l = 0; l < 6; l++) {
            
            item2 += "* "
            
        }
        
        result += item2 + "\n"
        
    }

    console.log(result);
    
}

star3()