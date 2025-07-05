let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let billetera = +10000;
let num = 0;
h1.textContent = `Su balance es de $${billetera}`;

function handleSubmit(event){
    event.preventDefault();
    let monto = +event.target.monto.value;
    let apuesta = +event.target.apuesta.value;
    if(monto<=billetera && monto>0){
    h3.textContent = '';
    let intervalo = setInterval(random, 100);
    setTimeout(() => {
        clearInterval(intervalo);
        billetera += (apuesta == num) ? monto * 35 : -monto;
        h3.textContent = (apuesta == num) ? `Usted ganó $${monto*35}`:`Usted perdió $${monto}`
        h1.textContent = `Su balance es de $${billetera}`;
    }, 2000);
}
else h3.textContent = 'Monto Inválido';
}

function random(){
    num = Math.floor(Math.random()*36);
    h2.textContent = `${num}`;
}
