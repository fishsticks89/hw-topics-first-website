console.log("hello")
setTimeout(() => {

    const inverter = document.getElementById('inverter');

    document.addEventListener('mousemove', (e) => {
        inverter.style.left = e.clientX + 'px';
        inverter.style.top = e.clientY + 'px';
    });
}, 1000)