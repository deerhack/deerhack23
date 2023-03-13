type Track = {
  logo: string;
  title: string;
  description: string;
};

type Prize = {
  title: string;
  prizes: string[];
};

type Faq = {
  question: string;
  answer: string;
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
