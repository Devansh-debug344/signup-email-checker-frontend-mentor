function emailverify(){
     const emailInput=document.getElementById('search-bar');
     emailInput.addEventListener('input', () => {
             const email=emailInput.value;
             const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
             if (email===""){
                emailInput.style.removeProperty('background-color');
             }
             else if (regex.test(email)){
                emailInput.style.backgroundColor= 'green';
             }
             else{
                emailInput.style.backgroundColor='red';
             }
     });
}
emailverify();
