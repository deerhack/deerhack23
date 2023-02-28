import { Hero } from "@/sections/Hero";
import { Info } from "@/sections/Info";
import { Tracks } from "@/sections/Tracks";
import { Prizes } from "@/sections/Prizes";
import readDataFile from "@/utilities/readDataFile";
import { Faq } from "@/sections/Faq";

type Props = {
  tracks: Track[];
  prizes: Prize[];
  faqs: Faq[];
};

const Home = ({ tracks, prizes, faqs }: Props) => {
  return (
    <>
      <Hero />
      <Info />
      <Tracks tracks={tracks} />
      <Prizes prizes={prizes} />
      <Faq faqs={faqs} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const tracksData = await readDataFile("tracks.json");
  const prizesData = await readDataFile("prizes.json");
  const faqData = await readDataFile("faqs.json");

  return {
    props: {
      tracks: tracksData["tracks"],
      prizes: prizesData["prizes"],
      faqs: faqData["faqs"],
    },
  };
}
