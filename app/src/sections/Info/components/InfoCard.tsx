import clsx from "clsx";

type Props = {
  alignRight?: boolean;
  titleFirst: string;
  titleSecond: string;
  content: string;
  illustration: React.ReactNode;
};

const InfoCard = ({
  alignRight,
  titleFirst,
  titleSecond,
  content,
  illustration,
}: Props) => {
  return (
    <div
      className={clsx(
        "flex mb-16",
        alignRight ? ["flex-row-reverse", "text-right"] : "flex-row"
      )}
    >
      <div className="w-9/12">
        <h3 className="text-5xl font-bold text-white font-mont">
          {titleFirst}
          <span className="text-primary">{titleSecond}</span>
        </h3>
        <p className="text-xl font-medium text-white mt-3 font-poppins">
          {content}
        </p>
      </div>
      <div className="w-3/12">{illustration}</div>
    </div>
  );
};

export default InfoCard;
