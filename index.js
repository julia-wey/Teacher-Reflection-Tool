fetch("http://localhost:3000/criteria")
    .then((resp)=> resp.json())
    .then((data) => displayCriteria(data))

function displayCriteria(criteriaArr) {
        
    const critA = document.querySelector("#strands1")
        
    critA.addEventListener("click", displayCritA)
        function displayCritA() {
            const critAStrands = criteriaArr.filter((data) => 
            data.criterion == "A: Knowing and Understanding")
            const strandA1 = (critAStrands[0].strand)
            const strandA2 = (critAStrands[1].strand)
            const critAOne = document.querySelector("#p1")
            critAOne.append(strandA1)
            const critATwo = document.querySelector("#p2")
            critATwo.append(strandA2)
        }
    // critA.addEventListener("mouseout", hideCritA)
    //     function hideCritA() {
    //         critAOne.style.display = 'none'
    //         critATwo.style.display = 'none'
    //     }}
    //QUESTION- why does the first event stop working after mouseout event? 
    const critB = document.querySelector("#strands2")
    
    critB.addEventListener("click", displayCritB)

        function displayCritB() {
            
            const critBStrands = criteriaArr.filter((data) => 
            data.criterion == "B: Investigating")
                const strandB1 = (critBStrands[0].strand)
                const strandB2 = (critBStrands[1].strand)
                const strandB3 = (critBStrands[2].strand)
                const strandB4 = (critBStrands[3].strand)
                const critBOne = document.querySelector("#p3")
                critBOne.append(strandB1)
                const critBTwo = document.querySelector("#p4")
                critBTwo.append(strandB2)
                const critBThree = document.querySelector("#p5")
                critBThree.append(strandB3)
                const critBFour = document.querySelector("#p6")
                critBFour.append(strandB4)
    }
    const critC = document.querySelector("#strands3")
    
    critC.addEventListener("click", displayCritC)
    
        function displayCritC() {
            
            const critCStrands = criteriaArr.filter((data) => 
            data.criterion == "C: Communicating",)
                const strandC1 = (critCStrands[0].strand)
                const strandC2 = (critCStrands[1].strand)
                const strandC3 = (critCStrands[2].strand)
                const critCOne = document.querySelector("#p7")
                critCOne.append(strandC1)
                const critCTwo = document.querySelector("#p8")
                critCTwo.append(strandC2)
                const critCThree = document.querySelector("#p9")
                critCThree.append(strandC3)
    }
    const critD = document.querySelector("#strands4")
    
    critD.addEventListener("click", displayCritD)
    
        function displayCritD() {
            
            const critDStrands = criteriaArr.filter((data) => 
            data.criterion == "D: Thinking Critically",)
                const strandD1 = (critDStrands[0].strand)
                const strandD2 = (critDStrands[1].strand)
                const strandD3 = (critDStrands[2].strand)
                const strandD4 = (critDStrands[3].strand)
                const critDOne = document.querySelector("#p10")
                critDOne.append(strandD1)
                const critDTwo = document.querySelector("#p11")
                critDTwo.append(strandD2)
                const critDThree = document.querySelector("#p12")
                critDThree.append(strandD3)
                const critDFour = document.querySelector("#p13")
                critDFour.append(strandD4)

    }
}


/* make a card for the strands to populate and for mouseover
*/

//here- forEach loop with mouse event to display criteria
/*
1- function displayCriteria
2- event mouseover
3- foreach- displaystrands
4- 
*/