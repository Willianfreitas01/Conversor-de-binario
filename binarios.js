const numerosBinarios = (bin) => {
    console.log(bin);
    let transform = bin.length - 1
    console.log(transform)
    if (bin <= bin.length) {
        return "boa"
    }
    else {
        return "nada"
    }
}
console.log(numerosBinarios(0,1,0,1,0))