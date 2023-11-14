let string = ""
let button = document.querySelectorAll('.button')
button.forEach((e)=>{
    e.addEventListener('click',(t)=>{
       
        if(t.target.innerHTML=='='){
            if(string=="")
            return
            string = eval(string)
            document.querySelector('.screen').value = string
        }
        else if(t.target.innerHTML=='AC'){
            string = ""
            document.querySelector('.screen').value = string
        }
        else if(t.target.innerHTML=='DEL'){
            string = string.substring(0,string.length-1)
            document.querySelector('.screen').value = string
        }
        else{
            string += t.target.innerHTML
            document.querySelector('.screen').value = string
        }
    })
})