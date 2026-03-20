gsap.registerPlugin(SplitText);

const latasMenores = document.querySelectorAll(".latas img:nth-child(2)");
const slides = document.querySelectorAll(".slide");

let contador = 0

latasMenores.forEach(lataMenor=> {
    lataMenor.onclick = () => {
        const slideAtivo = document.querySelector(".slide.ativo");
        slideAtivo.classList.remove("ativo")

        if (contador == 3){
            contador = 0
        }
        else{
            contador++;
        }

        slides[contador].classList.add("ativo")
    }
})  



const split = SplitText.create(".conteudo h2",{
    type: "chars",
    mask: "chars"
})

gsap.from(split.chars, {
    y: 80,
    stagger: .1
})