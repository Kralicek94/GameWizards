document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const email = document.getElementById("email");
    const telefon = document.getElementById("telefon");

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Zabráni predvolenému správaniu odosielania formulára

        // Skontrolujte či sú všetky vstupné polia platné
        if (validateForm()) {
            // Ak sú všetky polia platné, odošle sa formulár
            Swal.fire({
                title: "Skvelá práca",
                text: "Vaša správa bola odoslaná",
                icon: "success"
            });

            // Vymažte formulár po odoslaní a resetuje 
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        const inputs = document.querySelectorAll('.item');

        inputs.forEach(input => {
            const errorTxt = input.parentElement.querySelector('.error-txt');
            if (!input.value.trim()) {
                errorTxt.style.display = 'block';
                input.parentElement.classList.add('error'); // Pridá chybu 
                isValid = false;
            } else {
                errorTxt.style.display = 'none';
                input.parentElement.classList.remove('error'); // Odstráni chybu
            }
        });

        // Zavolá funkciu checkEmail iba ak pole email nie je prázdne
        if (email.value.trim()) {
            checkEmail();
            if (email.parentElement.classList.contains('error')) {
                isValid = false;
            }
        }

        // Zavolá funkciu checkPhoneNumber iba ak pole telefon nie je prázdne
        if (telefon.value.trim()) {
            checkPhoneNumber();
            if (telefon.parentElement.classList.contains('error')) {
                isValid = false;
            }
        }

        return isValid;
    }

    function checkEmail() {
        const errorTxt = email.parentElement.querySelector('.error-txt');
    
        if (!email.value.includes("@")) {
            errorTxt.textContent = 'Emailová adresa je neplatná musí obsahovať znak "@".';
            errorTxt.style.display = 'block';
            email.parentElement.classList.add('error');
        } else if (email.value.trim() === "@") {
            errorTxt.textContent = 'Emailová adresa je neplatná nemôže obsahovať iba znak "@".';
            errorTxt.style.display = 'block';
            email.parentElement.classList.add('error');
        } else {
            errorTxt.style.display = 'none';
            email.parentElement.classList.remove('error');
        }
    };


    function checkPhoneNumber() {
        const errorTxt = telefon.parentElement.querySelector('.error-txt');
        const phoneNumber = telefon.value.trim();
    
        if (!phoneNumber.match(/^\+\d+$/)) {
            errorTxt.textContent = 'Telefónne číslo je neplatné musí obsahovať znak "+" na začiatku a potom číslice.';
            errorTxt.style.display = 'block';
            telefon.parentElement.classList.add('error');
        } else {
            errorTxt.style.display = 'none';
            telefon.parentElement.classList.remove('error');
        }
    }
    
});








