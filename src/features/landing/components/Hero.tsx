import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ResumeImage from "@/assets/resume.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-28">
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-4rem)] relative flex items-center px-6">
        <div className="flex gap-10 flex-col-reverse md:flex-row max-md:items-center">
          <div className="w-full md:w-[60%] shrink-0">
            {/* badget */}
            <p className="text-xl font-semibold text-gray-600 mb-2">
              Free Online Resume Builder
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-800">
              Build Your
              <span className="text-gradient"> Dream Resume </span>
              in Minutes
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              Create professional, ATS-friendly resumes with our AI-powered
              builder. Stand out from the crowd and land your dream job with
              stunning, customizable templates.
            </p>

            {/* <div className="flex flex-col md:flex-row gap-4 mb-8 lg:mb-16"> */}
            <Button className="btn-xl btn-gradient px-16 mb-8 lg:mb-16 group">
              Create Resume Free
              <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* </div> */}

            {/* showcase */}
            <div>
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-1 *:data-[slot=avatar]:ring-2">
                <Avatar className="md:size-9 lg:size-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="md:size-9 lg:size-12">
                  <AvatarImage
                    src="https://github.com/leerob.png"
                    alt="@leerob"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar className="md:size-9 lg:size-12">
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <Avatar className="md:size-9 lg:size-12">
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <Avatar className="md:size-9 lg:size-12">
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </div>

              <p className="font-semibold text-base lg:text-lg text-gray-600 mt-2">
                Trusted by over 1000+ users
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm shadow-sm h-full w-[300px] lg:w-full">
            <Image
              src={ResumeImage}
              alt="resume"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* Floating Elements */
}
{
  /* <div className="absolute -top-4 -left-6 size-32 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div> */
}
