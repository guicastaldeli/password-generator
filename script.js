document.addEventListener('DOMContentLoaded', () => {
    const ubar = document.getElementById('u-bar');
    const dbar = document.getElementById('d-bar');
    
    const pgen = document.getElementById('p-gen');
    
    const yn = document.getElementById('yn');
    
    const passConc = document.getElementById('pass-conc');
    const exit = document.getElementById('exit');

    const right = document.getElementById('right');
    const inputpass = document.getElementById('input-pass');
    inputpass.focus();

    const right2 = document.getElementById('right-2');
    const inputnum = document.getElementById('input-num');
    const inputnumContainer = document.getElementById('input-num-container');
    
    //Content
    ubar.textContent = '-'.repeat(93);
    pgen.textContent = 'Password Generator'.padStart(90, '‎ ');
    dbar.textContent = '-'.repeat(93);
    
    yn.textContent = 'To generate a Password, press "y", then, enter a length for the password. to exit, press "n".';
    
    //Generatie Password
    function generatePass() {
        let passLength = parseInt(Number(inputnum.value));
        let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let generatedPass = '';

        if(!(passLength >= 1 && passLength <= 99)) {
            passLength = 8;
        }
    
        for(let i = 0; i < passLength; i++) {
            let randomNum = Math.floor(Math.random() * chars.length);
            generatedPass += chars.charAt(randomNum);
        }
        return generatedPass;
    }

    document.addEventListener('keydown', (e) => {
        const inputPassVal = inputpass.value.toLowerCase();
        const inputNumVal = inputnum.value.toLowerCase();

        //Y or N Input
        if(e.key === 'Enter' && inputPassVal === 'y') {
            inputpass.disabled = true;

            inputnumContainer.style.display = 'block';
            inputnum.focus();
        } else if(e.key === 'Enter' && inputPassVal === 'n') {
            exit.style.display = 'block';
            exit.textContent = 'Exiting...';

            window.location.href = 'https://www.google.com';
        }

        //Number Input
        if(e.key === 'Enter' && inputNumVal === 'n') {
            passConc.style.display = 'none';

            exit.style.display = 'block';
            exit.textContent = 'Exiting...';

            window.location.href = 'https://www.google.com';
        }
        if(e.key === 'Enter' && parseInt(Number(inputnum.value))) {
            passConc.textContent = 'Your password is: ' + generatePass();
        }
    })

    //InputPass
    inputpass.addEventListener('keydown', (e) => {
        const regex = /[ynYN]/;

        if(e.key === 'Enter' && !regex.test(inputpass.value)) {
            passConc.textContent = 'Please, enter "y" or "n" keys!';
        }
    })
    //InputNum
    inputnum.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' && !parseInt(Number(inputnum.value))){
            passConc.textContent = 'Please, insert a Number!';
        }
    })
});