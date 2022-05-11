function atualizarDisplay(btn){
    const display = document.getElementById('display');
    if(display.value.length === 9) return;
    if(display.value === '0') display.value = btn.value;
    else display.value += btn.value;
}

function limparDisplay(){
    document.getElementById('display').value = '0';
}

function calcularOperacao(){
    const display = document.getElementById('display');
    display.value = eval(display.value);
}

function raiz(){
    const display = document.getElementById('display')
    display.value = Math.sqrt(display.value)
}

function manipularTeclado(){
    if(/[0-9]/.test(event.key))
        atualizarDisplay({value: event.key});
}