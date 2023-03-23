import { Hero } from "@/sections/Hero";
import { Info } from "@/sections/Info";
import { Tracks } from "@/sections/Tracks";
import { Prizes } from "@/sections/Prizes";
import readDataFile from "@/utilities/readDataFile";
import { Faq } from "@/sections/Faq";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import { Sponsors } from "@/sections/Sponsors";
import { Judges } from "@/sections/Judges";

type Props = {
  tracks: Track[];
  prizes: PrizeCategory[][];
  faqs: Faq[];
  sponsors: SponsorGroup[];
  pageData: PageData;
};

const Home = ({ tracks, prizes, faqs, sponsors, pageData }: Props) => {
  return (
    <Layout pageData={pageData}>
      <>
        <Head>
          <title>DeerHack 2023 - Fawning Over Innovation</title>
        </Head>
        <Hero discordUrl={pageData.socialLinks.discord} />
        <Info />
        <Tracks tracks={tracks} />
        <Prizes prizeCategories={prizes} />
        <Judges />
        <Faq faqs={faqs} />
        <Sponsors sponsorGroups={sponsors} />
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
  const sponsorData = await readDataFile("sponsors.json");

  return {
    props: {
      tracks: tracksData["tracks"],
      prizes: prizesData["prizes"],
      faqs: faqData["faqs"],
      sponsors: sponsorData["sponsorGroups"],
      pageData: pageData,
    },
  };
}
