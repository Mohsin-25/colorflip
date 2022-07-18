let btn = document.getElementById(`btn`);
        let clr = document.querySelector(`#color`)
        let colors = [`Red`,`Orange`,`Yellow`,`Green`,`Blue`,`Indigo`,`Violet`,`Purple`,`Pink`,`Silver`,`Gold`,`Beige`,`Brown`,`Grey`]
        btn.addEventListener(`click`,function(){
            console.log(`clicked`);
            // get random number
            let randomNumber = getandomnumber();
            console.log(randomNumber);

            document.body.style.backgroundColor = colors[randomNumber];
            clr.textContent = colors[randomNumber];
            // document.getElementById(`btn`).style.color = colors[randomNumber];
            document.getElementById(`color`).style.color = colors[randomNumber];
        });
        function getandomnumber(){
            return Math.floor(Math.random()*colors.length);
        }