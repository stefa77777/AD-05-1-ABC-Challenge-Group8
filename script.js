function voltear(carta) {
    const frente = carta.querySelector(".card-frente");
    const dorso = carta.querySelector(".card-dorso");

    frente.classList.toggle("d-none");
    dorso.classList.toggle("d-none");
}