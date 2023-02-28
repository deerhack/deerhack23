import clsx from "clsx";

type Props = {
    alignRight?: boolean;
    titleFirst: string;
    titleSecond: string;
    content: string;
}

const InfoCard = ({ alignRight, titleFirst, titleSecond, content }: Props) => {
    return (
        <div className={clsx('flex mb-16', alignRight ? ['flex-row-reverse', 'text-right'] : 'flex-row')}>
            <div className="w-9/12">
                <h3 className="text-5xl font-bold text-white">{titleFirst}<span className="text-primary">{titleSecond}</span></h3>
                <p className="text-xl font-medium text-white mt-3">{content}</p>
            </div>
            <div className="w-3/12">

            </div>
        </div>
    )
}

export default InfoCard;