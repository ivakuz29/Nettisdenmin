function erPalindrom(tekst) {
    // Fjern mellomrom og gjør om til små bokstaver
    tekst = tekst.replace(/\s+/g, '').toLowerCase();

    // Gå gjennom første halvdel av teksten og sammenlign med den andre halvdel
    const lengde = tekst.length;
    for (let i = 0; i < lengde / 2; i++) {
        if (tekst[i] !== tekst[lengde - i - 1]) {
            return false; // Hvis bokstavene ikke stemmer, er det ikke et palindrom
        }
    }
    return true; // Hvis vi kommer til slutten uten å finne feil, er det et palindrom
}

console.log(erPalindrom("nesen"));
console.log(erPalindrom("hei"));
