import { FaqCard } from "./components";

type Props = {
  faqs: Faq[];
};

const Faq = ({ faqs }: Props) => {
  return (
    <section className="bg-gradient-to-r from-[#100A28] to-[#4F3E93] py-24" id="faq">
      <div className="container mx-auto">
        <h2 className="font-mont font-bold text-5xl text-white text-center">
          FAQ
        </h2>
        <div className="mt-16 flex flex-row justify-between items-start gap-x-4 gap-y-14 flex-wrap px-5">
          {faqs.map((faq) => (
            <FaqCard key={faq.question} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
