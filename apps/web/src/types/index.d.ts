type Track = {
  logo: string;
  title: string;
  description: string;
};
type CarouselCard = {
  link: string;
  img: string;
  name: string;
  role: string;
};
type Prize = {
  title: string;
  prizes: string[];
};

type Faq = {
  question: string;
  answer: string;
};

type Sponsor = {
  name: string;
  logo: string;
  link: string;
};

type SponsorGroup = {
  title: string;
  sponsors: Sponsor[];
};

type PageData = {
  socialLinks: {
    facebook: string;
    instagram: string;
    discord: string;
    linkedin: string;
  };
  registerForm: string;
  contactEmail: string;
};
