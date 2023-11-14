let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let show = document.querySelector('.show');
let sector1 = document.querySelector('.sector1');   
let sector2 = document.querySelector('.sector2');   
let contain = document.querySelector('.clockcontain')
let container = document.querySelector('.clockcontainer')
setInterval(()=>{
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    hdegree = 30*h + m/2;
    mdegree = 6*m;
    sdegree = 6*s;
    hour.style.transform = `rotate(${hdegree}deg)`;
    min.style.transform = `rotate(${mdegree}deg)`;
    sec.style.transform = `rotate(${sdegree}deg)`;
    show.innerText = h+":"+m+":"+s

},1000);

document.querySelector('.clockcontain').addEventListener('mouseover',()=>{
    // sector1.style.backgroundColor= "rgb(0, 255, 0)";
    sector1.style.left = "-40px";
    sector2.style.left = "76px";
    contain.style.boxShadow = "1px 1px 100px rgb(157, 157, 157) inset"
    container.style.boxShadow = "1px 1px 100px rgb(21, 255, 0)"
})
document.querySelector('.clockcontain').addEventListener('mouseout',()=>{
    // sector1.style.backgroundColor= "rgb(0, 255, 0)";
    sector1.style.left = "-25px";
    sector2.style.left = "61px";
    contain.style.boxShadow = "1px 1px 100px rgb(0, 0, 0) inset"
    container.style.boxShadow = "1px 1px 50px rgb(21, 255, 0)"
})