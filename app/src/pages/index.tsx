import { Hero } from "@/sections/Hero";
import { Info } from "@/sections/Info";
import { Tracks } from "@/sections/Tracks";
import { Prizes } from "@/sections/Prizes";
import readDataFile from "@/utilities/readDataFile";
import { Faq } from "@/sections/Faq";
import { Layout } from "@/components/Layout";

type Props = {
  tracks: Track[];
  prizes: Prize[];
  faqs: Faq[];
  pageData: PageData;
};

const Home = ({ tracks, prizes, faqs, pageData }: Props) => {
  return (
    <Layout pageData={pageData}>
      <>
        <Hero discordUrl={pageData.socialLinks.discord} />
        <Info />
        <Tracks tracks={tracks} />
        {/* <Prizes prizes={prizes} /> */}
        <Faq faqs={faqs} />
      </>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const tracksData = await readDataFile("tracks.json");
  const prizesData = await readDataFile("prizes.json");
  const faqData = await readDataFile("faqs.json");
  const pageData = await readDataFile("pagedata.json");

  return {
    props: {
      tracks: tracksData["tracks"],
      prizes: prizesData["prizes"],
      faqs: faqData["faqs"],
      pageData: pageData,
    },
  };
}
