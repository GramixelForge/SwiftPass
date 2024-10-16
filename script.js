document.getElementById('passForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const transport = document.getElementById('transport').value;
    const name = document.getElementById('name').value;
    const grade = document.getElementById('grade').value;
    const message = document.getElementById('message').value;
    const guardian = document.getElementById('guardian').value;
    const door = document.getElementById('door').value;
    const time = document.getElementById('time').value;
    const identif = Math.floor(100000000 + Math.random() * 900000000);

    // Generate the pass
    const passContent = `
        <h2>Salida en ${transport}</h2>
        <p><strong>Nombre del alumno:</strong> ${name}</p>
        <p><strong>Grado:</strong> ${grade}</p>
        <p><strong>Irà en ${transport}:</strong></p><p><strong> Horario:</strong> ${time}</p><p><strong> Texto enviado:</strong> ${message}</p>
        <p><strong>Persona que retira:</strong> ${guardian}</p><p><strong> Identificación:</strong> ${identif}</p><p><strong> Puerta:</strong> Puerta ${door}</p>
    `;

    document.getElementById('generatedPass').style.display = 'block';
    document.getElementById('generatedPass').innerHTML = passContent;

    // Update the mailto link
    const emailLink = `mailto:example@gmail.com?subject=Student Pass&body=Salida en ${transport}, Nombre: ${name}, Grado: ${grade}, Texto enviado: ${message}, Que retira: ${guardian}, Puerta: ${door}`;
    document.getElementById('sendEmail').href = emailLink;
});

document.getElementById('downloadPass').addEventListener('click', function() {
    const passElement = document.getElementById('generatedPass');
    html2pdf().from(passElement).save();
});
