document.getElementById('btn-with').addEventListener('click', function(){
    const inputwith = document.getElementById('input-with')
    const inputwithdraw = inputwith.value;
    const inputwithnumber = parseFloat(inputwithdraw)
    

    const withdraw = document.getElementById('withdraw')
    const currentwith = withdraw.innerText;
    const withnumber = parseFloat(currentwith);

    const totalwithdraw = inputwithnumber + withnumber;

    withdraw.innerText = totalwithdraw;

    const callbalance = document.getElementById('balance')
    const balancetotal = callbalance.innerText;
    const balancenumber = parseFloat(balancetotal);

    const balancewith = balancenumber - inputwithnumber;

    callbalance.innerText = balancewith;

    inputwith.value = '';
})