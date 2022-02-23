function snapCrackle(maxValue) {
    const string = []

    function primo(num) {
        let quantidade = 0
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                quantidade++

            }
        }
        if (quantidade === 2) {
            return true
        } else {
            false
        }
    }



    for (var i = 1; i <= maxValue; i++) {
        
        

         if(i % 2 != 0 && i % 5 === 0&&primo(i)===true){
            string.push("SnapCracklePrime")
            

        }
        else if (i%2!=0&&primo(i)===true){
            string.push("SnapPrime")
            

        }
        else if (primo(i) === true) {
            

            string.push("Prime")
        }
         else if (i % 2 != 0 && i % 5 === 0) {
            string.push(" SnapCrackle")
        } 
        else if (i % 2 != 0) {
            string.push(" Snap") //Snap

        }
         else if (i % 5 === 0) {
            string.push(" Crackle")

        }
         else {
            string.push(" " + i)
        }



    }
    return string.toString()
}



console.log(snapCrackle(10))