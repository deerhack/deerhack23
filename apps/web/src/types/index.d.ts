type Track = {
  logo: string;
  title: string;
  description: string;
};

type Prize = {
  icon: string;
  title: string;
  description: string;
  prize: string;
};

type PrizeCategory = {
  category: string;
  prize: Prize;
}


type Faq = {
  question: string;
  answer: string;
};

type Sponsor = {
  name: string;
  logo: string;
  link: string;
}

type SponsorGroup = {
  title: string;
  sponsors: Sponsor[];
}

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
