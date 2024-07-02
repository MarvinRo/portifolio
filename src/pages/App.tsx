import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/modo-toggle";
import '../style/global.css';
import { Switch } from "@/components/ui/switch";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronUpIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@radix-ui/react-select";
import { ImLinkedin } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { TbMailFilled } from "react-icons/tb";
import { VscThreeBars } from "react-icons/vsc";

function App() {
  const [check, setCheck] = useState(false);
  const [showButton, setShowButton] = useState(false);

  function useScreenSize() {
    const [screen, setScreen] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      function handleResize() {
        setScreen({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screen;
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavegacaoBar = () => {
    const screen = useScreenSize();
    if (screen.width > 768) {
      return (
        <Menubar className='flex align-middle mx-auto border-none w-auto'>
          <MenubarMenu>
            <MenubarTrigger><a href="#apresentacao">Apresentação</a></MenubarTrigger>
            <MenubarTrigger><a href="#experiencia">Experiência</a></MenubarTrigger>
            <MenubarTrigger><a href="#projetos">Projetos</a></MenubarTrigger>
            <MenubarTrigger><a href="#contato">Contato</a></MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      );
    } else {
      return (
        <Select>
          <SelectTrigger className="mt-1 mb-0 w-auto rounded-md">
            <VscThreeBars className="w-8 h-8" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="p-2 border-[0.2px] rounded-md md:mx-auto text-foreground dark:bg-background dark:text-foreground space-y-2">
              <SelectItem value="apresentacao"><a href="#apresentacao">Apresentação</a></SelectItem>
              <SelectItem value="experiencia"><a href="#experiencia">Experiência</a></SelectItem>
              <SelectItem value="projetos"><a href="#projetos">Projetos</a></SelectItem>
              <SelectItem value="contato"><a href="#contato">Contato</a></SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      );
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme" >
      <div className="text-foreground dark:bg-background dark:text-foreground">
        <section id="apresentacao" className="  w-[98%] flex flex-col items-center justify-center mx-auto">
          <div className='flex w-full justify-between items-center'>
            <div className="">
              <NavegacaoBar />
            </div>

            <div className="flex space-x-2 items-center ">
              <img src="../../public/img/brazil_5111560.png" alt="PT-BR" />
              <Switch
                className={
                  check
                    ? 'border-[0.2px]  bg-gradient-to-r from-[#B22234] via-[#FFFFFF] to-[#3C3B6E] p-[2px] '
                    : 'border-1 bg-gradient-to-r from-[#009440] to-[#ffcb00] p-[2px]'
                }
                onCheckedChange={() => setCheck(!check)}
              />
              <img src="../../public/img/estados-unidos.png" alt="EN" />

              <ModeToggle />

            </div>
          </div>
          <div className="md:container md:mx-auto h-8">

          </div>
          <div className="flex md:mx-auto justify-center align-middle">
            <p className=' w-[90%] text-justify md:text-lg'>
              Olá! Eu sou Marvin Rocha, um desenvolvedor que adora misturar criatividade com tecnologia para criar algo especial. Trabalhar com HTML, CSS, JavaScript e React Js/Native é como minha segunda natureza, mas o que realmente me motiva é a oportunidade de resolver problemas de maneiras inovadoras. Meu portfólio é como um diário das minhas aventuras de codificação, mostrando não apenas o que construí, mas também a paixão e o empenho que coloquei em cada projeto. Estou sempre disposto a ouvir novas ideias e colaborar em projetos interessantes, então, se você tem algo em mente, vamos conversar! Estou animado para ver onde nossa jornada nos levará.
            </p>
          </div>
        </section>


        <section id="experiencia" className="mt-3 md:mx-auto flex flex-col items-center justify-center " >
          <Carousel className='w-[70%] my-auto dark:bg-popover rounded-lg'>
            <CarouselContent >
              <CarouselItem className='flex justify-center' >
                <h1 className=''>AADC (Agência Amazonence de Desenvolvimento Cultural)</h1>
                <ul>
                  <li>
                    <p className=' text-justify'>
                      Desenvolvimento e manutenção de sistemas web e mobile.
                    </p>
                  </li>
                  <li>
                    <p className=' text-justify'>
                      Desenvolvimento e manutenção de sistemas web e mobile.
                    </p>
                  </li>
                </ul>
              </CarouselItem>
              <CarouselItem>
                <h1 className=' '>Ferragens Paraiba</h1>
                <ul>
                  <li>
                    <p className=' text-justify'>
                      Desenvolvimento e manutenção de sistemas web e mobile.
                    </p>
                  </li>
                  <li>
                    <p className=' text-justify'>
                      Desenvolvimento e manutenção de sistemas web e mobile.
                    </p>
                  </li>
                </ul>
              </CarouselItem>
              <CarouselItem> <h1 className=' '>ICTS (Instituto Centro de Tecnologia e Software)</h1>
                <ul>
                  <li>
                    <p className=' text-justify'>
                      Desenvolvimento e manutenção de sistemas web e mobile.
                    </p>
                  </li>
                  <li>
                    <p className=' text-justify'>
                      Desenvolvimento e manutenção de sistemas web e mobile.
                    </p>
                  </li>
                </ul></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section id="projetos" className=" flex items-center md:mx-auto mt-3">
          <div className="md:mx-auto flex items-center">

          </div>
        </section>

        <section id="contato" className="flex items-center mt-3">
          <div className="flex items-center fixed left-1/2 transform -translate-x-1/2 bottom-4 md:bottom-3">
            <a href="https://www.linkedin.com/in/marvin-rocha-84b28714a/" target="_blank" rel="noopener noreferrer" className="flex items-center mr-2 md:text-xm">
              <ImLinkedin className="md:w-8 md:h-8 mr-2" />
              Marvin Rocha
            </a>
            <a href="https://github.com/MarvinRo" target="_blank" rel="noopener noreferrer" className="flex items-center mr-2 md:text-xm">
              <VscGithub className="md:w-8 md:h-8 mr-2" />
              MarvinRo
            </a>
            <a href="mailto:marvins.rocha@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center md:text-xm">
              <TbMailFilled className="md:w-8 md:h-8 mr-2" />
              marvins.rocha@gmail.com
            </a>
          </div>
        </section>


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
