let case1 = null
// let case2 = document.getElementsByClassName("box")[1]
// let case3 = document.getElementsByClassName("box")[2]
// let case4 = document.getElementsByClassName("box")[3]
// let case5 = document.getElementsByClassName("box")[4]
// let case6 = document.getElementsByClassName("box")[5]
// let case7 = document.getElementsByClassName("box")[6]
// let case8 = document.getElementsByClassName("box")[7]
// let case9 = document.getElementsByClassName("box")[8]
let tours = 0
// let joueurs = ["X","O"]
// tours =  tours % 2
// console.log(case4)
// let ticTac = [case1, case2, case3, case4, case5, case6, case7, case8, case9]
document.addEventListener("DOMContentLoaded", () => {
    case1 = document.getElementsByClassName("box")


    case1 = Array.from(document.getElementsByClassName('box'));



    console.log(case1[1].value)

    let click = (element) => {
        let joueurs = ["X", "O"]
        tours = tours % 2

        if (element.innerText === "") {
            element.innerText = joueurs[tours]
            tours++
        }
    }


    case1.forEach(element => element.addEventListener("click", () => click(element)))
    
    let reset = document.getElementsByClassName("reset")[0]
    let reset1 = (element) => {
        element.innerText=""
    } 
    reset.addEventListener("click", () => {
        case1.forEach(element => reset1(element))
        
        
      console.log(case1[1])  
        
    })





























})
