console.log("log out");

const deleteSomething = (event)=>{
    console.log("clicked");
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

}

let logout= document.getElementById('logout')
logout.addEventListener('click', deleteSomething);