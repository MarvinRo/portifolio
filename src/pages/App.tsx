import '../style/global.css';
import { Switch } from "@/components/ui/switch";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { useEffect, useState } from 'react';

import { Button } from "@/components/ui/button"
import { ChevronUpIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function App() {
  // Adicionando um estado para controlar o idioma selecionado
  /* const [idioma, setIdioma] = useState(''); */ // Defina o idioma padrão

  // Estado para o switch
  const [check, setCheck] = useState(Boolean);

  // Função de mudança do switch

  const Click = check == true ? () => setCheck(false) : () => setCheck(true);

  // Adicione um estado para controlar a visibilidade do botão
  const [showButton, setShowButton] = useState(false);

  // Função para rolar suavemente até o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Função para mostrar ou ocultar o botão de acordo com a posição da página
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Adicionar um event listener para o evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  return (
    <>


      <div className='flex justify-between  bg-[#061420]'>
        <div className="mt-5 ml-5">
          <Menubar className='flex align-middle mx-auto'>
            <MenubarMenu>
              <MenubarTrigger><a href="#apresentacao">Apresentação</a></MenubarTrigger>
              <MenubarTrigger><a href="#experiencia">Experiência</a></MenubarTrigger>
              <MenubarTrigger><a href="#redes_sociais">Projetos</a></MenubarTrigger>
              <MenubarTrigger><a href="#redes_sociais">Redes Sociais</a></MenubarTrigger>
            </MenubarMenu>
          </Menubar>

          {/* <NavigationMenu>
            <NavigationMenuItem >
              <NavigationMenuTrigger >Navegação</NavigationMenuTrigger>
              <NavigationMenuContent >
                <ul className="grid w-[200px] gap-3 p-4 md:w-[200px] lg:w-[200px] list-none ">
                  <li><a href="#apresentacao">Apresentação</a></li>
                  <li><a href="#experiencia">Experiência</a></li>
                  <li><a href="#redes_sociais">Redes Sociais</a></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu> */}
        </div>

        <div className="flex space-x-2 items-center justify-between w-180 mt-5 mr-[25px]">
          <img src="../../public/img/brazil_5111560.png" alt="PT-BR" />

          <Switch className={check != true ? 'border-0 bg-gradient-to-r from-[#009440] to-[#ffcb00]' : 'border-0 bg-gradient-to-r from-[#B22234] via-[#FFFFFF] to-[#3C3B6E]'} onCheckedChange={Click} />

          <img src="../../public/img/estados-unidos.png" alt="EN" />
        </div>
      </div>
      <section id="apresentacao" className=" flex flex-col items-center justify-center w-full p-0 border-0 bg-gradient-to-b from-[#061420] to-[#001423] mx-auto my-auto">

        <div className="top-0 left-0 w-full h-full overflow-hidden -z-[1]">
          <object
            data="/home/marvin/projetos/portifolio/public/img/Marvin.svg"
            type="image/svg+xml"
            className="w-full h-full">
          </object>
        </div>


        <div className='relative w-full h-full overflow-hidden -z-2'>
          <video
            autoPlay
            loop
            muted
            className=' mx-auto -mt-60 -mb-[200px] scale-90 w-100% object-cover -translate-x-50% -translate-y-50% ' >
            <source src="../../public/img/Marvin_Rocha.mp4" type='video/mp4'></source>
          </video>
        </div>
        <div className="z-10 h-[330px] text-[24px] mx-[10%] text-white ">

          <p className='pl-4 ml-4 text-justify'>
            Olá! Eu sou Marvin Rocha, um desenvolvedor que adora misturar criatividade com tecnologia para criar algo especial. Trabalhar com HTML, CSS, JavaScript e React Js/Native é como minha segunda natureza, mas o que realmente me motiva é a oportunidade de resolver problemas de maneiras inovadoras. Meu portfólio é como um diário das minhas aventuras de codificação, mostrando não apenas o que construí, mas também a paixão e o empenho que coloquei em cada projeto. Estou sempre disposto a ouvir novas ideias e colaborar em projetos interessantes, então, se você tem algo em mente, vamos conversar! Estou animado para ver onde nossa jornada nos levará.
          </p>

        </div>

      </section>
      <div className='bg-cover bg-center h-100% w-100%' style={{ backgroundImage: 'url("../../public/img/background.jpg")' }}>
        <section id="experiencia" className="h-screen flex flex-col items-center justify-center text-white">



          <Carousel className='mx-auto bg-[rgba(10,23,55,0.5);] my-auto rounded-md  ' >
            <CarouselContent>
              <CarouselItem className='mt-[35px]'>
                <h1 className='ml-[40px] text-[24px]'>AADC(Agência Amazonence de Desenvolvimeento Cultural)</h1>
                <ul>
                  <li>
                    <p className='ml-[40px] text-justify'>
                      Desenvolvimento e manutenção de sistemas web e mobile.
                    </p>
                  </li>
                  <li>
                    <p className='ml-[40px] text-justify'>
                      Desenvolvimento e manutenção de sistemas web e mobile.
                    </p>

                  </li>
                </ul>
              </CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>





        </section>
        <section id="redes_sociais" className="h-[80px] w-full flex items-center">
          <div className=" text-white mx-auto flex items-center">
            <img src="../../public/img/social_15527631.png" alt="" className=" h-10 w-10 mr-2" /><a href="https://www.linkedin.com/in/marvin-rocha-84b28714a/" className='text-white mr-4' target="_blank">Marvin Rocha</a>
            <img src="../../public/img/github.png" alt="" className=" h-10 w-10 mr-2 rounded-full" /> <a href="https://github.com/MarvinRo" className='text-white mr-4' target="_blank">MarvinRo</a>
            <img src="../../public/img/gmail.png" alt="" className=" h-10 w-10 mr-2" /><a href="mailto:marvins.rocha@gmail.com" className='text-white' target="_blank">marvins.rocha@gmail.com</a>
          </div>
        </section>
      </div>
      <div style={{ position: 'fixed', bottom: '20px', right: '30px', display: showButton ? 'block' : 'none', zIndex: '999' }}>
        <Button variant="outline" size="icon" className="rounded-full" onClick={scrollToTop}>
          <ChevronUpIcon className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}

export default App;