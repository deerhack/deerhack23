import { Illustration1, Illustration2, Illustration3 } from "@/assets/images";
import { InfoCard } from "./components";

const Info = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#4B64A3] to-[#182E66] py-10 lg:py-24"
      id="about"
    >
      <div className="container mx-auto p-5">
        <InfoCard
          titleFirst="About "
          titleSecond="Deerwalk Institute of Technology"
          content="Deerwalk Institute of Technology (DWIT) is an educational institution that prepares students and professionals of all levels to meet the problems and grab the possibilities of the twenty-first century IT Industry. The institute is well-known for its approach to learning that is both open-minded and responsible. It has an affiliation with Tribhuvan University and offers two undergraduate degrees, BSc. CSIT and BCA."
          illustration={<Illustration1 />}
        />

        <InfoCard
          titleFirst="About "
          titleSecond="DeerHack"
          alignRight={true}
          content="Deer Hack 2023 is the brainchild of a small team to unleash the potential of young innovators through a 36-hour hackathon in which developers, designers, students, entrepreneurs, educators, and mentors collaborate to create solutions that tackle real-world problems. When people from many backgrounds collaborate, they do more than merely do good; they become a force for global change."
          illustration={<Illustration2 />}
        />

        <InfoCard
          titleFirst="Why "
          titleSecond="Join?"
          content="DeerHack gives participants a one-of-a-kind opportunity to work in groups to develop innovative solutions to real-world problems. You will work with individuals who share your desire to create something significant. DeerHack also provides you access to mentors and industry specialists that can assist you throughout the event and help you improve your skills. You will also be able to network with other participants and potential employers, which will help your entire career."
          illustration={<Illustration3 />}
        />
      </div>
    </section>
  );
};

export default Info;
