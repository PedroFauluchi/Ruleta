let i=0;
let billetera = +100000;
let h1 = document.querySelector('h1');
h1.textContent = `$${billetera}`;
let apuesta = 0;
let monto = 0;
let num = parseInt(Number);
function handleSubmit(event){
    event.preventDefault();
    apuesta = parseInt(event.target.apuesta.value);
    monto = parseInt(event.target.monto.value);
    id = setInterval(random, 100);
}

function random(){
    if(billetera>=monto){
    i++;
    if(i<20){
    num = parseInt(Math.floor(Math.random()*36));
    let h2 = document.querySelector('h2');
    h2.textContent = num;
    }
    else{
        clearInterval(id);
        i=0;
        if (apuesta==num){
        billetera=billetera+monto*35;
        h1.textContent = `$${billetera}`;
        alert('¡Ganaste!');
    }
        else{
        billetera=billetera-monto;
        h1.textContent = `$${billetera}`;
    }
    }
    console.log(num);
    console.log(apuesta);
    console.log(monto);
}
else{
    clearInterval(id);
}
}