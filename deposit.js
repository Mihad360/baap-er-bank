// step 1 is first You need to add the clicked element by document which upload your work 
document.getElementById('btn-depo').addEventListener('click', function(){
    // step 2 is add or callthe input value by .value where u typw a value which is upload by your clicked element or button 
    const inputdepo = document.getElementById('input-depo')
    const input = inputdepo.value;
    // step 5 is that the input is string and it cant be sum with the current deposit so make it parseFloat to became a number 
    const inputnumber = parseFloat(input)
    // step 3 get the value from input and get the deposit total by the element 
    // and it is not a input so you must get the result by .innerText 
    const getdepo = document.getElementById('change-depo')
    const depo = getdepo.innerText;
    const deponumber = parseFloat(depo)
    // step 6 is to sum the deposit and input value 
    const totaldeposit = deponumber + inputnumber;
    
    getdepo.innerText = totaldeposit;

    // step 7 is to call the balance and sum with the input deposit to total balance
    const currentbalance = document.getElementById('balance')
    const totalbalance = currentbalance.innerText;
    const sumofbalance = parseFloat(totalbalance);
    
    const makesumofbalance = sumofbalance + inputnumber;
    currentbalance.innerText = makesumofbalance;
    // step 4 clear the input field 
    inputdepo.value = '';

})
