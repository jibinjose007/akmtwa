import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLinks = ({ children, href }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={`block px-4 py-1 md:p-2 lg:px-4 ${
          router.asPath === href ? "text-secondary" : "text-primary"
        } `}
      >
        {children}
      </a>
    </Link>
  );
};
export default ActiveLinks;
