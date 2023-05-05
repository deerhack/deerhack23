import Link from "next/link";

const NavLinks = () => {
  return (
    <>
      <li className="hover:text-primary">
        <Link href="/#about" scroll={false}>
          About
        </Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/#tracks" scroll={false}>
          Tracks
        </Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/#prizes" scroll={false}>
          Prizes
        </Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/#judges" scroll={false}>
          Judges
        </Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/#mentors" scroll={false}>
          Mentors
        </Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/#faq" scroll={false}>
          FAQ
        </Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/schedule">Schedule</Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/organizer">Organizers</Link>
      </li>
      <li className="hover:text-primary">
        <Link href={"/code-of-conduct"}>Code of Conduct</Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/resources/participants.pdf">Participants</Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/resources/judging_criteria.pdf">Judging Criteria</Link>
      </li>
    </>
  );
};

export default NavLinks;
