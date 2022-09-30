'use-strict'

const loginBtn = document.getElementById('btn-login');
const submitBtn = document.getElementById('submit-login'); 
const loginForm = document.getElementById('login-form')

/* Toggle to show or hide login form
loginBtn?.addEventListener("click", (e)=> {
    var loginWrapper = document.getElementById('login-wrapper');
    if (loginWrapper.style.display === 'none'){
        loginWrapper.style.display = 'block';

    }else{
        loginWrapper.style.display = 'none';

    }
})
*/

// WORKS
// TODO: 
    // Hash password
    // Connect to database to verify user and pass
    // Show error msg if wrong login
submitBtn.addEventListener('click', (e)=>
{
    const loginErrorMsg = document.getElementById('login-error-msg');
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    console.log(username, password);
    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        
    }
})
