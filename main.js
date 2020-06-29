const main = document.querySelector('main')


let coin = {
    state: 0,
    flip: function() {
        //use math.random and set it to "this.state"
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           this.state = Math.round(Math.random())
           console.log(this.state)

    },
    toString: function() {
        //use if/else statement depending on the flip and write it on the html, use append.
        //call the flip function inside here.
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           coin.flip()
           let tails = 1
           let heads = 0
           if (this.state === 0) {
                main.append(heads)
           }
           else {
                main.append(tails)
           }
    },

    toHTML: function() {
        coin.flip()
        let image = document.createElement('img');

        if (this.state === 0) {
            image.src = "./images/heads.png"
            main.append(image)
        }      
        else {
            image.src = "./images/tails.png"
            main.append(image) 
        }  
        
        //call the flip function inside here.
        //use if/else statement set to an image, use append.
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        

    }
};



//write two functions that flip the coin 20 times using a loop

function check () {
coin.toString()
coin.toHTML()
}

check()


function display20Images() {
//make use of your toHTML() method
}

function display20Flips() {
//make use of your toString() method
}