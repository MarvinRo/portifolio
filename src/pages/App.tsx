import { ThemeProvider } from "@/components/ui/theme-provider"
import { ModeToggle } from "@/components/ui/modo-toggle"
import '../style/global.css';
import { Switch } from "@/components/ui/switch";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { ChevronUpIcon, Timer } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function App() {
  // Adicionando um estado para controlar o idioma selecionado
  //const [idioma, setIdioma] = useState(''); // Defina o idioma padrão

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
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="w-auto h-auto bg-background text-foreground dark:bg-background dark:text-foreground">
        <div className='flex justify-between'>
          <div className="mt-5 ml-5">
            <Menubar className='flex align-middle mx-auto border-none w-auto'>
              <MenubarMenu>
                <MenubarTrigger><a href="#apresentacao">Apresentação</a></MenubarTrigger>
                <MenubarTrigger><a href="#experiencia">Experiência</a></MenubarTrigger>
                <MenubarTrigger><a href="#redes_sociais">Projetos</a></MenubarTrigger>
                <MenubarTrigger><a href="#redes_sociais">Contato</a></MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </div>

          <div className="flex space-x-2 items-center justify-between w-180 mt-5 mr-[25px]">
            <img src="../../public/img/brazil_5111560.png" alt="PT-BR" />
            <Switch className={check != true ? 'border-1 bg-gradient-to-r from-[#009440] to-[#ffcb00] p-[2px]' : 'border-1 bg-gradient-to-r from-[#B22234] via-[#FFFFFF] to-[#3C3B6E] p-[2px]'} onCheckedChange={Click} />
            <img src="../../public/img/estados-unidos.png" alt="EN" />
            <ModeToggle />
          </div>
        </div>

        <section id="apresentacao" className=" flex flex-col items-center justify-center w-full p-0 border-0 mx-auto my-auto">

          <div className=''>
          </div>

          <div className="z-10 h-[330px] text-[24px] mx-[10%]">
            <p className='pl-4 ml-4 text-justify'>
              Olá! Eu sou Marvin Rocha, um desenvolvedor que adora misturar criatividade com tecnologia para criar algo especial. Trabalhar com HTML, CSS, JavaScript e React Js/Native é como minha segunda natureza, mas o que realmente me motiva é a oportunidade de resolver problemas de maneiras inovadoras. Meu portfólio é como um diário das minhas aventuras de codificação, mostrando não apenas o que construí, mas também a paixão e o empenho que coloquei em cada projeto. Estou sempre disposto a ouvir novas ideias e colaborar em projetos interessantes, então, se você tem algo em mente, vamos conversar! Estou animado para ver onde nossa jornada nos levará.
            </p>
          </div>

        </section>

        <div className='bg-cover bg-center h-100% w-100%'>
          <section id="experiencia" className="h-screen flex flex-col items-center justify-center ">



            <Carousel className='mx-auto my-auto rounded-md  ' >
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
            <div className="mx-auto flex items-center">
              <img src="../../public/img/social_15527631.png" alt="" className=" h-10 w-10 mr-2" /><a href="https://www.linkedin.com/in/marvin-rocha-84b28714a/" className=' mr-4' target="_blank">Marvin Rocha</a>
              <img src="../../public/img/github.png" alt="" className=" h-10 w-10 mr-2 rounded-full" /> <a href="https://github.com/MarvinRo" className=' mr-4' target="_blank">MarvinRo</a>
              <img src="../../public/img/gmail.png" alt="" className=" h-10 w-10 mr-2" /><a href="mailto:marvins.rocha@gmail.com" target="_blank">marvins.rocha@gmail.com</a>
            </div>
          </section>
        </div>
        <div style={{ position: 'fixed', bottom: '20px', right: '30px', display: showButton ? 'block' : 'none', zIndex: '999' }}>
          <Button variant="outline" size="icon" className="rounded-full" onClick={scrollToTop}>
            <ChevronUpIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;