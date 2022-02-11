function TocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < ListaDeTeclas.length) {
    ListaDeTeclas[contador].onclick = TocaSomPom;

    contador = contador + 1;


}

