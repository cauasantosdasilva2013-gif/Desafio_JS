// Array que armazena os itens do carrossel
let carouselArr = [];

class Carousel {

    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }

    static Start(arr) {
        if (!arr || arr.length === 0) {
            throw "Method Start needs an Array Variable.";
        }

        carouselArr = arr;

        Carousel._sequence = 0;
        Carousel._size = arr.length;

        // Mostra a primeira imagem
        Carousel.MostrarTela();

        // Troca automaticamente a cada 5 segundos
        Carousel._interval = setInterval(function () {
            Carousel.Next();
        }, 2000);
    }

    static Next() {
        

        // Próxima imagem
        Carousel._sequence++;

        // Volta para a primeira ao chegar ao final
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.MostrarTela()
    }

    static MostrarTela(){
        const carousel = document.getElementById("carousel");
        const carouselTitle = document.getElementById("carousel-title");

        if (!carousel) {
            console.error('Elemento com id="carousel" não foi encontrado.');
            return;
        }

        // Limpa a imagem anterior
        carousel.innerHTML = "";

        // Pega o item atual
        const item = carouselArr[Carousel._sequence];

        // iamgem do carrosel
        const img = document.createElement("img");
        img.src = "img/" + item.image;
        img.alt = item.title;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.display = "block";

        //  link da imagem
        const link = document.createElement("a");
        link.href = item.link;
        link.appendChild(img);

        // Adiciona ao carrossel
        carousel.appendChild(link);

        // Atualiza o título, se existir no HTML
        if (carouselTitle) {
            carouselTitle.innerHTML = "";

            const titleLink = document.createElement("a");
            titleLink.href = item.link;
            titleLink.textContent = item.title;

            carouselTitle.appendChild(titleLink);
        }
    }

    // BOTÃO PARA VOLTAR AO INÍCIO
    static Previous() {
        


        Carousel._sequence--;

        if(Carousel._sequence<0){
            Carousel._sequence=2
        }

        Carousel.MostrarTela();

        Carousel.MostrarTela <= 0;
    }
}
    


