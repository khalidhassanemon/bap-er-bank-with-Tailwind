document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('Submit button clicked');

    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    // console.log(email);

    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
    console.log(email,password);


    if(email==='khalidhassanemon12@gmail.com' && password==='bangladesh'){
        window.location.href='bank.html';
    }
    else{
        alert('invalid user or password');
    }
})