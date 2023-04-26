import Link from "next/link";

const NavLinks = () => {
  return (
    <>
      <li>
        <Link href="/#about" scroll={false}>
          About
        </Link>
      </li>
      <li>
        <Link href="/#tracks" scroll={false}>
          Tracks
        </Link>
      </li>
      <li>
        <Link href="/#prizes" scroll={false}>
          Prizes
        </Link>
      </li>
      <li>
        <Link href="/#judges" scroll={false}>
          Judges
        </Link>
      </li>
      <li>
        <Link href="/#mentors" scroll={false}>
          Mentors
        </Link>
      </li>
      <li>
        <Link href="/#faq" scroll={false}>
          FAQ
        </Link>
      </li>
      <li>
        <Link href="/schedule">Schedule</Link>
      </li>
      <li>
        <Link href="/organizer">Organizers</Link>
      </li>
      <li>
        <Link href={"/code-of-conduct"}>Code of Conduct</Link>
      </li>
      <li>
        <Link href="/resources/participants.pdf">Participants</Link>
      </li>
    </>
  );
};

export default NavLinks;
