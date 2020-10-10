//sign up//
let name_Signup = $('#name');
let nick_name_Signup = $('nick_name');
let email_Signup = $('email');
let phone_number_Signup = $('phone_number');
let pass_Signup = $('pass');
let password_Signup = $('password');
let birthday_Signup = $('birthday');
let sex_Signup =$('sex');
let btn_Đk_chữ = $('btn_Đk_chữ');

name_Signup.on('keyup', function() {
    
});

nick_name_Signup.on('keyup',function (){
    
})

email_Signup.on('text',function () {
    
})
phone_number_Signup.on('text',function (){});
pass_Signup.on('text',function (){});
password_Signup.on('text',function (){});
birthday_Signup.on('text',function (){});
sex_Signup.on('text',function (){});
btn_Đk_chữ.on('button',function() {});





//log in//
let correctEmail = 'hihi@gmail.com';
let correctPassword = '123';


let inputEmailLogin = document.getElementById('email');
let inputPasswordLogin = document.getElementById("pass");




let btn_Đn_chữ = document.querySelector('#btn_Đn_chữ')
btn_Đn_chữ.addEventListener('click', function(){
    let emailLogin = inputEmailLogin.value ;
    let passwordLogin = inputPasswordLogin.value;
    if (emailLogin == correctEmail && passwordLogin == correctPassword) {
        // location.replace("./home_fix.html");
        
        window.location="../home//home_fix.html";
    } else {
        alert("sai vl")
    }  
})