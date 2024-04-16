fetch("http://localhost:3000/criteria")
    .then((resp)=> resp.json())
    .then((data) => displayCriteria(data))

    //Run json-server --watch db.json
    
function displayCriteria(criteriaArr) {
        
    const critA = document.querySelector("#strands1")
        
    critA.addEventListener("mouseover", displayCritA)

    function displayCritA() {
        const critAStrands = criteriaArr.filter((data) => 
            data.criterion == "A: Knowing and Understanding");
        
        const intro1 = document.querySelector("#intro1");
        intro1.textContent ="At the end of year 5, students should be able to:";
            
        const strandA1 = (critAStrands[0].strand);
        const strandA2 = (critAStrands[1].strand);
        
        const critAOne = document.querySelector("#p1");
        critAOne.textContent = strandA1;
        
        const critATwo = document.querySelector("#p2");
        critATwo.textContent = strandA2;
        
        critA.addEventListener("mouseout", hideCritA)
            function hideCritA() {
                intro1.textContent = ' '
                critAOne.textContent = ' '
                critATwo.textContent = ' '
        };
    }
    //QUESTION- why does the first event stop working after mouseout event? 
    const critB = document.querySelector("#strands2")
    
    critB.addEventListener("mouseover", displayCritB)

        function displayCritB() {
            
            const critBStrands = criteriaArr.filter((data) => 
            data.criterion == "B: Investigating")
            const intro2 = document.querySelector("#intro2")
            intro2.textContent ="At the end of year 5, students should be able to:"
                const strandB1 = (critBStrands[0].strand)
                const strandB2 = (critBStrands[1].strand)
                const strandB3 = (critBStrands[2].strand)
                const strandB4 = (critBStrands[3].strand)
                const critBOne = document.querySelector("#p3")
                critBOne.textContent = strandB1
                const critBTwo = document.querySelector("#p4")
                critBTwo.textContent = strandB2
                const critBThree = document.querySelector("#p5")
                critBThree.textContent = strandB3
                const critBFour = document.querySelector("#p6")
                critBFour.textContent = strandB4
                
        critB.addEventListener("mouseout", hideCritB)
                function hideCritB() {
                    intro2.textContent = ' '
                    critBOne.textContent = ' '
                    critBTwo.textContent = ' '
                    critBThree.textContent = ' '
                    critBFour.textContent = ' '
            }
    }
    const critC = document.querySelector("#strands3")
    
    critC.addEventListener("mouseover", displayCritC)
    
        function displayCritC() {
            
            const critCStrands = criteriaArr.filter((data) => 
            data.criterion == "C: Communicating",)
            const intro3 = document.querySelector("#intro3")
            intro3.textContent ="At the end of year 5, students should be able to:"
                const strandC1 = (critCStrands[0].strand)
                const strandC2 = (critCStrands[1].strand)
                const strandC3 = (critCStrands[2].strand)
                const critCOne = document.querySelector("#p7")
                critCOne.textContent = strandC1
                const critCTwo = document.querySelector("#p8")
                critCTwo.textContent = strandC2
                const critCThree = document.querySelector("#p9")
                critCThree.textContent = strandC3
        
            critC.addEventListener("mouseout", hideCritC)
                function hideCritC() {
                    intro3.textContent = ' '
                    critCOne.textContent = ' '
                    critCTwo.textContent = ' '
                    critCThree.textContent = ' '
            }
        
    }
    const critD = document.querySelector("#strands4")
    
    critD.addEventListener("mouseover", displayCritD)
    
        function displayCritD() {
            
            const critDStrands = criteriaArr.filter((data) => 
            data.criterion == "D: Thinking Critically",)
            const intro4 = document.querySelector("#intro4")
            intro4.textContent ="At the end of year 5, students should be able to:"
                const strandD1 = (critDStrands[0].strand)
                const strandD2 = (critDStrands[1].strand)
                const strandD3 = (critDStrands[2].strand)
                const strandD4 = (critDStrands[3].strand)
                const critDOne = document.querySelector("#p10")
                critDOne.textContent = strandD1
                const critDTwo = document.querySelector("#p11")
                critDTwo.textContent = strandD2
                const critDThree = document.querySelector("#p12")
                critDThree.textContent = strandD3
                const critDFour = document.querySelector("#p13")
                critDFour.textContent = strandD4
        
                critD.addEventListener("mouseout", hideCritD)
                function hideCritD() {
                    intro4.textContent = ' '
                    critDOne.textContent = ' '
                    critDTwo.textContent = ' '
                    critDThree.textContent = ' '
                    critDFour.textContent = ' '
            }

    }
}

    const reflectionForm = document.querySelector("#reflection-form");
    const strategyName = document.querySelector("#strategy-name");
    const reflectionInput = document.querySelector("#reflection");

    reflectionForm.addEventListener('submit', (e) => handleSubmit(e))
    
    function handleSubmit(e) {
        e.preventDefault(e);
        const strategyCard = document.querySelector("#strategy-card").textContent = strategyName.value;
        //here- add CSS to style card


        // console.log(strategyName.value)
        // console.log(reflectionInput.value)
    }
    
