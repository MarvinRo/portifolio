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
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@radix-ui/react-select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import TypeIt from "typeit-react"
import { ImLinkedin } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { TbMailFilled, TbBrandReactNative } from "react-icons/tb";
import { VscThreeBars } from "react-icons/vsc";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import { MdOutlineMoreTime } from "react-icons/md";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiJavascript, SiTypescript, SiSwagger } from "react-icons/si";

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

    const handleSelectChange = (value: string) => {
      const section = document.querySelector(`#${value}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const screen = useScreenSize();

    if (screen.width > 767) {
      return (
        <Menubar className='flex align-middle mx-auto border-none w-auto bg-[#1f1f1f] '>
          <MenubarMenu>
            <MenubarTrigger><a href="#apresentacao">Apresentação</a></MenubarTrigger>
            <MenubarTrigger><a href="#projetos">Projetos</a></MenubarTrigger>
            <MenubarTrigger><a href="#contato">Contato</a></MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      );
    } else {
      return (
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="mt-1 mb-0 w-auto rounded-md dark:bg-button-dark">
            <VscThreeBars className="w-8 h-8" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="p-2 border-[0.2px] rounded-md md:mx-auto space-y-2 text-foreground bg-popover">
              <SelectItem value="apresentacao"><a href="#apresentacao">Apresentação</a></SelectItem>
              <SelectItem value="projetos"><a href="#projetos">Projetos</a></SelectItem>
              <SelectItem value="contato"><a href="#contato">Contato</a></SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      );
    }
  };

  const Skills = () => {
    if (screen.width > 767) {
      return (
        <div className="flex  justify-center items-center align-middle md:space-x-14">
          <p className=" flex flex-col justify-center w-full sm:w-1/2 md:w-auto items-center"><FaHtml5 className="md:w-14 md:h-14" />HTML</p>
          <p className=" flex flex-col justify-center w-full sm:w-1/2 md:w-auto items-center"><FaCss3Alt className="md:w-14 md:h-14" /> CSS3</p>
          <p className=" flex flex-col justify-center w-full sm:w-1/2 md:w-auto items-center"><SiJavascript className="md:w-14 md:h-14" /> JavaScript</p>
          <p className=" flex flex-col justify-center w-full sm:w-1/2 md:w-auto items-center"><FaReact className="md:w-14 md:h-14" />React JS</p>
          <DiNodejs className="w-full sm:w-1/2  md:w-[110px] md:h-[110px]" />
          <p className=" flex flex-col justify-center w-full sm:w-1/2 md:w-auto items-center"><TbBrandReactNative className="md:w-14 md:h-14" />React Native</p>
          <p className=" flex flex-col justify-center w-full sm:w-1/2 md:w-auto items-center"><SiTypescript className="md:w-14 md:h-14" />TypeScript</p>
          <p className=" flex flex-col justify-center w-full sm:w-1/2 md:w-auto items-center"><SiSwagger className="md:w-14 md:h-14" />Swagger</p>
        </div>
      )
    } else {
      return (
        <div className="flex  justify-center mx-auto space-x-[90px]">
          <div className="flex justify-center flex-col items-center align-middle space-y-8">
            <p className=" flex flex-col justify-center w-full sm:w-1/2 md:w-auto items-center"><FaHtml5 className="min-w-[50px] min-h-[50px]" />HTML</p>
            <p className=" flex flex-col justify-center w-full sm:w-1/2 md:w-auto items-center"><FaCss3Alt className="min-w-[50px] min-h-[50px]" /> CSS3</p>
            <p className=" flex flex-col justify-center w-full sm:w-1/2 md:w-auto items-center"><SiJavascript className="min-w-[50px] min-h-[50px]" /> JavaScript</p>
            <p className=" flex flex-col justify-center w-full sm:w-1/2 md:w-auto items-center"><FaReact className="min-w-[50px] min-h-[50px]" />React JS</p>
          </div>
          <div className="flex justify-center flex-col items-center align-middle space-y-8" >
            <p className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-auto mt-[-12px]"><DiNodejs className=" min-w-[85px] min-h-[85px]" /></p>
            <p className=" flex flex-col justify-center w-full sm:w-1/2 md:w-auto items-center"><TbBrandReactNative className="min-w-[50px] min-h-[50px]" />React Native</p>
            <p className=" flex flex-col justify-center w-full sm:w-1/2 md:w-auto items-center"><SiTypescript className="min-w-[50px] min-h-[50px]" />TypeScript</p>
            <p className=" flex flex-col justify-center w-full sm:w-1/2 md:w-auto items-center"><SiSwagger className="min-w-[50px] min-h-[50px]" />Swagger</p>
          </div>


        </div>
      )
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const IMG_PROFILE = import.meta.env.VITE_API_IMG_PROFILE;
  const FullName = import.meta.env.VITE_API_FULL_NAME;
  const Linkedin = import.meta.env.VITE_API_LIKEDIN_LINK;
  const Email = import.meta.env.VITE_API_EMAIL;
  const Email_link = import.meta.env.VITE_API_EMAIL_LINK;
  const GitName = import.meta.env.VITE_API_GIT_NAME;
  const Git_Link = import.meta.env.VITE_API_GIT_LINK;
  const Phone = import.meta.env.VITE_API_PHONE;
  const Phone_Link = import.meta.env.VITE_API_PHONE_LINK;

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme" >
      <div className="xl:max-w-screen-2xl text-foreground dark:text-foreground mx-auto z-10">
        <div className="relative">
          <div className="absolute inset-0 z-[-10]">
            <AnimatedBackground />
          </div>

          <div className='flex justify-between items-center rounded-md mt-4 p-3 bg-[#1f1f1f]'>
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

          <section className="h-[100vh] m-0 p-0 flex ">

            <div className={useScreenSize().width > 768 ? " flex my-auto ml-[80px]" : 'flex flex-col mx-auto'}>
              <div>
                <img src={IMG_PROFILE} alt="" className="w-[450px] h-[450px] rounded-sm -z-2 object-contain " />
              </div>
              <div className="flex flex-col justify-center">
                <div>
                  <h1 className={useScreenSize().width > 768 ? " mt-[70px] text-center text-4xl font-bold " : 'text-center text-4xl font-bold '}>
                    <TypeIt

                      options={{
                        strings: ["Marvin Rocha ", "Desenvolvedor FrontEnd"],
                        waitUntilVisible: true,
                      }}

                    />
                  </h1>
                </div>

                <div className="mt-4">
                  <Button >Download Curriculum</Button>
                </div>
              </div>
            </div>

          </section>
          <section className=" w-[98%] h-[100vh] flex flex-col justify-center mx-auto space-y-14 mb-3">
            <h1 id="apresentacao" className="text-3xl flex justify-center mb-4 ">
              Apresentação
            </h1>
            <div className=" md:container flex justify-center align-middle items-center md:space-x-4 mb-4 ">
              <div className="flex justify-center align-middle items-center">
                <Card className="  bg-popover dark:bg-popover rounded-lg" >
                  <CardHeader >
                    <CardTitle className="text-foreground flex justify-center"><MdOutlineMoreTime /></CardTitle>
                    <CardDescription className="text-foreground flex justify-center">Experiência</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground flex justify-center">+1 ano</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-foreground flex justify-center">Desenvolvedor Frontend</p>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center align-middle items-center">
                <Card className="bg-popover dark:bg-popover rounded-lg">
                  <CardHeader>
                    <CardTitle className=" text-foreground flex justify-center"><IoIosSchool /></CardTitle>
                    <CardDescription className="text-foreground flex justify-center">Formação</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground items-center align-middle">Ciência da Computação </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-foreground flex justify-center mx-auto">Bacharel</p>
                  </CardFooter>
                </Card>
              </div>
            </div>
            <div className="flex md:mx-auto justify-center align-middle">
              <p className=' w-[90%] text-justify md:text-lg'>
                Sou um desenvolvedor que adora misturar criatividade com tecnologia para criar algo especial. Trabalhar com HTML, CSS, JavaScript e React Js/Native é como minha segunda natureza, mas o que realmente me motiva é a oportunidade de resolver problemas de maneiras inovadoras. Meu portfólio é como um diário das minhas aventuras de codificação, mostrando não apenas o que construí, mas também a paixão e o empenho que coloquei em cada projeto. Estou sempre disposto a ouvir novas ideias e colaborar em projetos interessantes, então, se você tem algo em mente, vamos conversar! Estou animado para ver onde nossa jornada nos levará.
              </p>
            </div>
            <div>
              <h1 className="flex justify-center text-3xl mb-4 "> Skills</h1>
              <Skills />
            </div>
          </section>

          <section className="  w-[98%] h-[100vh] flex flex-col justify-center">
            <h1 id="projetos" className="text-3xl flex justify-center">
              Projetos
            </h1>
            <div className=" md:container flex justify-center align-middle items-center space-x-4 mb-4 ">
              <div className="flex justify-center align-middle items-center">
                <Card className="  bg-popover dark:bg-popover rounded-lg" >
                  <CardHeader >
                    <CardTitle className="text-foreground flex justify-center"><MdOutlineMoreTime /></CardTitle>
                    <CardDescription className="text-foreground flex justify-center">Experiência</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground flex justify-center">+1 ano</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-foreground flex justify-center">Desenvolvedor Frontend</p>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center align-middle items-center">
                <Card className="bg-popover dark:bg-popover rounded-lg">
                  <CardHeader>
                    <CardTitle className=" text-foreground flex justify-center"><IoIosSchool /></CardTitle>
                    <CardDescription className="text-foreground flex justify-center">Formação</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground items-center align-middle">Ciência da Computação </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-foreground flex justify-center mx-auto">Bacharel</p>
                  </CardFooter>
                </Card>
              </div>
            </div>
            <div className=" md:container flex justify-center align-middle items-center space-x-4 mb-4 ">
              <div className="flex justify-center align-middle items-center">
                <Card className="  bg-popover dark:bg-popover rounded-lg" >
                  <CardHeader >
                    <CardTitle className="text-foreground flex justify-center"><MdOutlineMoreTime /></CardTitle>
                    <CardDescription className="text-foreground flex justify-center">Experiência</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground flex justify-center">+1 ano</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-foreground flex justify-center">Desenvolvedor Frontend</p>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center align-middle items-center">
                <Card className="bg-popover dark:bg-popover rounded-lg">
                  <CardHeader>
                    <CardTitle className=" text-foreground flex justify-center"><IoIosSchool /></CardTitle>
                    <CardDescription className="text-foreground flex justify-center">Formação</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground items-center align-middle">Ciência da Computação </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-foreground flex justify-center mx-auto">Bacharel</p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>

          <section id="contato" className="flex items-center mt-3">
            <div className={useScreenSize().width > 767 ? 'flex items-center mx-auto md:bottom-0' : 'flex items-start justify-center flex-col ml-3 '}>
              <a href={Linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center mr-2 md:text-xm">
                <ImLinkedin className="md:w-8 md:h-8 mr-2" />
                {FullName}
              </a>
              <a href={Git_Link} target="_blank" rel="noopener noreferrer" className="flex items-center mr-2 md:text-xm">
                <VscGithub className="md:w-8 md:h-8 mr-2" />
                {GitName}
              </a>
              <a href={Email_link} target="_blank" rel="noopener noreferrer" className="flex items-center mr-2 md:text-xm">
                <TbMailFilled className="md:w-8 md:h-8 mr-2" />
                {Email}
              </a>
              <a href={Phone_Link} target="_blank" rel="noopener noreferrer" className="flex items-center md:text-xm">
                <BsWhatsapp className="md:w-8 md:h-8 mr-2" />
                {Phone}
              </a>
            </div>
          </section>

          <div className={showButton ? 'fixed bottom-4 right-4 z-50 inline-block animate-bounce' : 'none'}>
            <Button variant="outline" size="icon" className="rounded-full" onClick={scrollToTop}>
              <ChevronUpIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div >
    </ThemeProvider >
  );
}

export default App;
