import { BiMoviePlay } from "react-icons/bi";
import ContentWrapper from "../Hoc/SectionWrapper";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-full bg-black-100">
        <ContentWrapper>
          <main className="w-full flex flex-col py-10">
            <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-10 mb-10">
              <section className="flex items-start justify-start gap-20">
                <ul className="flex flex-col items-start gap-2">
                  <h1 className="font-bold text-xl sm:text-2xl uppercase mb-2">
                    TMBD
                  </h1>
                  <li className="font-semibold text-base sm:text-lg capitalize hover:text-slate-400">
                    For you
                  </li>
                  <li className="font-semibold text-base sm:text-lg capitalize hover:text-slate-400">
                    Movies
                  </li>
                  <li className="font-semibold text-base sm:text-lg capitalize hover:text-slate-400">
                    Tv shows
                  </li>
                  <li className="font-semibold text-base sm:text-lg capitalize hover:text-slate-400">
                    Free
                  </li>
                </ul>
                <ul className="flex flex-col items-start gap-2">
                  <h1 className="font-bold text-xl sm:text-2xl capitalize mb-2">
                    Support
                  </h1>
                  <li className="font-semibold text-base sm:text-lg capitalize hover:text-slate-400">
                    Help Center
                  </li>
                  <li className="font-semibold text-base sm:text-lg capitalize hover:text-slate-400">
                    Terms Of Use
                  </li>
                  <li className="font-semibold text-base sm:text-lg capitalize hover:text-slate-400">
                    Privacy Policy
                  </li>
                  <li className="font-semibold text-base sm:text-lg capitalize hover:text-slate-400">
                    Content Complaints
                  </li>
                </ul>
              </section>
              <section className="flex flex-col item-start justify-start gap-2">
                <h1 className="capitalize font-bold text-xl sm:text-2xl ">
                  Connect with us
                </h1>
                <div className="flex items-center gap-4">
                  <AiOutlineTwitter
                    className="bg-[#333436] hover:bg-[#4d4d50] p-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer"
                    onClick={() =>
                      window.open("https://twitter.com/mhdamaan79", "_blank")
                    }
                  />
                  <AiFillLinkedin
                    className="bg-[#333436] hover:bg-[#4d4d50] p-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/mhdamaan79/",
                        "_blank"
                      )
                    }
                  />
                  <AiOutlineGithub
                    className="bg-[#333436] hover:bg-[#4d4d50] p-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://github.com/mhdamaan79/CineWave.git",
                        "_blank"
                      )
                    }
                  />
                </div>
              </section>
            </div>
            <hr />
            <div className="w-full flex items-center justify-between gap-10 mt-10">
              <span className="text-gray-400 text-sm">
                Copyright &copy; {new Date().getFullYear()} TMBD. All rights
                reserved.
              </span>
              <BiMoviePlay className="bg-pink p-[6px] rounded-full text-4xl" />
            </div>
          </main>
        </ContentWrapper>
      </footer>
    </>
  );
};

export default Footer;
