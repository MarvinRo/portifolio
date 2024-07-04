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
  SelectContent,
  SelectGroup,
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
        <Menubar className='flex align-middle mx-auto border-none w-auto bg-[#1f1f1f]'>
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
        <Select >
          <SelectTrigger className="mt-1 mb-0 w-auto rounded-md dark:bg-button-dark">
            <VscThreeBars className="w-8 h-8" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="p-2 border-[0.2px] rounded-md md:mx-auto space-y-2 text-white">
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

  const FullName = import.meta.env.VITE_API_FULL_NAME;
  const Linkedin = import.meta.env.VITE_API_LIKEDIN_LINK;
  const Email = import.meta.env.VITE_API_EMAIL;
  const Email_link = import.meta.env.VITE_API_EMAIL_LINK;
  const GitName = import.meta.env.VITE_API_GIT_NAME;
  const Git_Link = import.meta.env.VITE_API_GIT_LINK;


  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme" >
      <div className="xl:max-w-screen-2xl text-foreground dark:text-foreground mx-auto">
        <div className='flex justify-between items-center p-3 bg-[#1f1f1f]'>
          <div className="">
            <NavegacaoBar />
          </div>

          <div className="flex space-x-2 items-center mr-3">
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
        <section className="h-[100vh] m-0 p-0 flex items-center justify-center bg-[#1f1f1f]">
          <div className={useScreenSize().width > 768 ? "mx-auto flex" : 'flex flex-col'}>
            <img src="" alt="" className="bg-white rounded-full w-[300px] h-[300px] p-0 " />
            <h1 className="text-center text-4xl font-bold text-[#ffff]">
              <span className="font-bold">Marvin Rocha</span>
            </h1>
          </div>
        </section>
        <section id="apresentacao" className=" w-[98%] h-[100vh] flex flex-col items-center justify-center mx-auto">
          <div className="flex md:mx-auto justify-center align-middle">
            <p className=' w-[90%] text-justify md:text-lg'>
              Sou um desenvolvedor Jr. que adora misturar criatividade com tecnologia para criar algo especial. Trabalhar com HTML, CSS, JavaScript e React Js/Native é como minha segunda natureza, mas o que realmente me motiva é a oportunidade de resolver problemas de maneiras inovadoras. Meu portfólio é como um diário das minhas aventuras de codificação, mostrando não apenas o que construí, mas também a paixão e o empenho que coloquei em cada projeto. Estou sempre disposto a ouvir novas ideias e colaborar em projetos interessantes, então, se você tem algo em mente, vamos conversar! Estou animado para ver onde nossa jornada nos levará.
            </p>
          </div>
        </section>


        <section id="experiencia" className="mt-3 h-[100vh] flex flex-col justify-center " >
          <div className="ml-5">
            <h1 className=" text-xl">
              Experiências
            </h1>
          </div>
          <div className="flex justify-center">
            <Carousel className='w-[70%] my-auto dark:bg-popover rounded-lg'>
              <CarouselContent >
                <CarouselItem className='flex flex-col justify-center' >
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
                <CarouselItem className='flex flex-col justify-center'>
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
                <CarouselItem className='flex flex-col justify-center'> <h1 className=' '>ICTS (Instituto Centro de Tecnologia e Software)</h1>
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

          </div>
        </section>

        <section id="projetos" className=" h-[100vh] w-[98%] flex items-center md:mx-auto mt-3">
          <div className="md:mx-auto flex items-center">

          </div>
        </section>

        <section id="contato" className="flex items-center mt-3">
          <div className={useScreenSize().width > 768 ? 'flex items-center mx-auto md:bottom-0' : 'flex items-center justify-center flex-col mx-auto'}>
            <a href={Linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center mr-2 md:text-xm">
              <ImLinkedin className="md:w-8 md:h-8 mr-2" />
              {FullName}
            </a>
            <a href={Git_Link} target="_blank" rel="noopener noreferrer" className="flex items-center mr-2 md:text-xm">
              <VscGithub className="md:w-8 md:h-8 mr-2" />
              {GitName}
            </a>
            <a href={Email_link} target="_blank" rel="noopener noreferrer" className="flex items-center md:text-xm">
              <TbMailFilled className="md:w-8 md:h-8 mr-2" />
              {Email}
            </a>
          </div>
        </section>

        <div className={showButton ? 'fixed bottom-4 right-4 z-50 inline-block animate-bounce' : 'none'}>
          <Button variant="outline" size="icon" className="rounded-full" onClick={scrollToTop}>
            <ChevronUpIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
