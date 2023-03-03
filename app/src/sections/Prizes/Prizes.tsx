import { PrizeCard } from "./components";

type Props = {
  prizes: Prize[];
};

const Prizes = ({ prizes }: Props) => {
  return (
    <section className="bg-gradient-to-r from-[#4B64A3] to-[#182E66] py-24" id="prizes">
      <div className="container mx-auto">
        <h2 className="font-mont font-bold text-5xl text-white text-center">
          Prizes
        </h2>
        <div className="mt-16 flex flex-row justify-around items-start gap-x-4 gap-y-14 flex-wrap">
          {prizes.map((prize) => <PrizeCard key={prize.title} prize={prize}/>)}

        </div>
      </div>
    </section>
  );
};

export default Prizes;
