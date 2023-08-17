// step 1 is to call the element which is the clicked option for ur processing the work or load your work
document.getElementById('btn-one').addEventListener('click', function(){
    // step 2 // now u need to varify the value of email and call the element and call with value is must 
    const useremail = document.getElementById('user-email')
    const email = useremail.value;

    // step 3 is to call the value of ur password which is the element u have to call must with values 
    const userpass = document.getElementById('user-pass')
    const pass = userpass.value;
    // warning: dont use this now as a beginner its danger 
    if(email === 'mihad44@gmail.com' && pass === 'hellojava'){
        window.location.href = 'bank.html'
    }else{
        alert('It is a wrong information you have given, please re-enter the boxes')
    }
})