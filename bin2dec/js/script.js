function converter(){
    //inputs
    let inputBin = document.querySelector('input#bin')
    let res = document.querySelector('div#input-container')
    //tabela
    let table = document.querySelector('table#tabela')
    let nlinhas = table.rows.lenght
    let linha = table.insertRow(nlinhas)
    let celulabin = linha.insertCell(0)
    let celuladec = linha.insertCell(1)
    if (Number(inputBin.value) !== 0) {
        //conversao
        let bin = Number(inputBin.value)
        let dec = parseInt(bin,2)
        //Inserindo na tabela
        celulabin.innerHTML = bin
        celuladec.innerHTML = dec
    }
    else{
        alert('Insira um número diferente de 0')
    }
    
}

