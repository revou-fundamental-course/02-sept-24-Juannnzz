document.getElementById('formLuas').addEventListener('submit', function(e) {
    e.preventDefault();
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const luas = 0.5 * alas * tinggi;
    document.getElementById('hasilLuas').innerText = `Luas Segitiga: ${luas}`;
});

document.getElementById('formKeliling').addEventListener('submit', function(e) {
    e.preventDefault();
    const sisiA = parseFloat(document.getElementById('sisiA').value);
    const sisiB = parseFloat(document.getElementById('sisiB').value);
    const sisiC = parseFloat(document.getElementById('sisiC').value);
    const keliling = sisiA + sisiB + sisiC;
    document.getElementById('hasilKeliling').innerText = `Keliling Segitiga: ${keliling}`;
});