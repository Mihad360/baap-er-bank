document.getElementById('btn-with').addEventListener('click', function(){
    const inputwith = document.getElementById('input-with')
    const inputwithdraw = inputwith.value;
    const inputwithnumber = parseFloat(inputwithdraw)
    
    inputwith.value = '';

    if(isNaN(inputwithnumber)){
        alert('Please provide a valid number')
        return;
    }

    const withdraw = document.getElementById('withdraw')
    const currentwith = withdraw.innerText;
    const withnumber = parseFloat(currentwith);

    

    const callbalance = document.getElementById('balance')
    const balancetotal = callbalance.innerText;
    const balancenumber = parseFloat(balancetotal);

    

    if(inputwithnumber > balancenumber){
        alert('There is a less of money in your account. please lower your money then your total balance')
        return;
    }

    

    const totalwithdraw = inputwithnumber + withnumber;
    withdraw.innerText = totalwithdraw;

    const balancewith = balancenumber - inputwithnumber;
    callbalance.innerText = balancewith;

    
})