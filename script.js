let cell = null

const jeu = ['','','','','','','','','']

let tours = 0

document.addEventListener("DOMContentLoaded", () => {
    cell = Array.from(document.getElementsByClassName('box'));
    let winOrNo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]
    ]


    function winOrNot() {
        winOrNo.forEach(casDeVictoire => {
            const indexCell1 = casDeVictoire[0]
            const indexCell2 = casDeVictoire[1]
            const indexCell3 = casDeVictoire[2]
            if(jeu[indexCell1] !== "" && jeu[indexCell2] !== "" && jeu[indexCell3] !== ""){
                if(jeu[indexCell1] === jeu[indexCell2] && jeu[indexCell2] === jeu[indexCell3]){
                    setTimeout(() => alert(`le gagnant est : ${jeu[indexCell1]}`), 200)
                }
            }
        })
    }



    let click = (element) => {
        const index = element.getAttribute("id")
        let joueurs = ["X", "O"]
        tours = tours % 2

        if (element.innerText === "") {
            element.innerText = joueurs[tours]
            jeu[index] = joueurs[tours]
            winOrNot()
            tours++
        }
        
    }
    //             else if (element[0].innerText === joueurs[tours] && element[1].innerText === joueurs[tours]&& element[2].innerText ===joueurs[tours]){
    //           alert(joueurs[tours] + " win")
    // }






    cell.forEach(element => element.addEventListener("click", () => click(element)))

    console.log(cell[1].innerText)


    let reset = document.getElementsByClassName("reset")[0]
    let reset1 = (element) => {
        element.innerText = ""
    }
    reset.addEventListener("click", () => {
        cell.forEach(element => reset1(element))
        for(let i=0; i>jeu.length;i++){
            jeu[i]=""
        }

        //   console.log(case1[1])  

    })





























})
