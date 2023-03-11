import Image from "next/image";

type Props = {
  width: number;
  height: number;
};

const DeerhackLogo = ({ width, height }: Props) => {
  return (
    <Image
      src={"/images/logo.png"}
      alt="Deerhack logo"
      width={width}
      height={height}
    />
  );
};
export default DeerhackLogo;
