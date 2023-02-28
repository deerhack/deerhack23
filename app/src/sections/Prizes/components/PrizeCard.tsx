import { TrophieLogo } from "@/assets/images";

type Props = {
  prize: Prize;
};

const PrizeCard = ({ prize }: Props) => {
  return (
    <div>
      <div className="relative max-w-sm">
        <div className="h-40 bg-color-3 w-full rounded-t-xl"></div>
        <div className="left-0 right-0 absolute flex justify-center">
          <div className="top-32 p-10 rounded-full bg-primary mx-auto inline-block translate-y-[-50%]">
            <TrophieLogo />
          </div>
        </div>
        <div className="bg-white py-20 min-h-[600px] rounded-b-xl">
          <h4 className="text-center font-mont font-bold text-2xl">
            {prize.title}
          </h4>
          <ul className="px-16 mt-5 font-poppins text-2xl list-disc leading-9">
            {prize.prizes.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrizeCard;
