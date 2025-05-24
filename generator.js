function updateName() {
    document.getElementById('name').textContent = document.getElementById('first_name_field').value + ' ' + document.getElementById('last_name_field').value;
}

function updateRole() {
    document.getElementById('role').textContent = document.getElementById('role_field').value;
}

function updatePhone() {
    document.getElementById('phone').querySelector('a').textContent = document.getElementById('phone_field').value;
    document.getElementById('phone').querySelector('a').href = 'tel:' + document.getElementById('phone_field').value.replace(/\s+/g, '');
}

function updateEmail() {
    let email;
    if(!document.getElementById('bda_email_field').checked && !document.getElementById('ecn_email_field').checked) { document.getElementById('email_field').disabled = false; }
    if(document.getElementById('bda_email_field').checked) {
        email = "bda@ec-nantes.fr";
        document.getElementById('email_field').disabled = true;
    }
    else if(document.getElementById('ecn_email_field').checked && document.getElementById('first_name_field').value.length > 0 && document.getElementById('last_name_field').value.length > 0) {
        email = document.getElementById('first_name_field').value.toLowerCase() + '.' + document.getElementById('last_name_field').value.toLowerCase() + '@eleves.ec-nantes.fr';
        email = email.replaceAll(' ', '-');
        email = email.replaceAll('\'', '');
        document.getElementById('email_field').value = email;
        document.getElementById('email_field').disabled = true;
    } else {
        email = document.getElementById('email_field').value;
    }
    document.getElementById('email').querySelector('a').textContent = email;
    document.getElementById('email').querySelector('a').href = 'mailto:' + email;
}

function updateLogo() {
    document.querySelector('#signature img').src = document.getElementById('logo_field').value === 'logo-acecn' ? 'https://pisteuralpin.github.io/signature-acecn/assets/logo-acecn.svg' : 'https://pisteuralpin.github.io/signature-acecn/assets/logo-mk.svg';
    document.querySelector('#signature img').alt = document.getElementById('logo_field').value === 'logo-acecn' ? "Logo de l'ACECN" : "Logo de Mario K'art";
}

function copyHTMLSignature() {
    const signature = document.getElementById('signature').outerHTML.replaceAll(/[\n\t ]{2,}/g, '');
    const tempInput = document.createElement('textarea');
    tempInput.value = signature;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Signature copiée dans le presse-papier !');
}