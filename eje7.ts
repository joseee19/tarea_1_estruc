// 7
function myFacto(nu: number): number {
    if (nu <= 1) {
        return 1;
    } else {
        let f = nu * (myFacto(nu-1))
        return f;
    }
}

console.log("El factorial del numero es: ", myFacto(3))