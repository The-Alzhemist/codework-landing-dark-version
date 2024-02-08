import Link from "next/link";
import { usePathname } from "next/navigation";

export const CodeworkTechLogo = () => {
  const pathname = usePathname();
  const currentLang = pathname.includes('en') ? 'en' : 'th'
  
    return (
      <>
        <Link href={`/${currentLang}`}>
          <picture>
            <source
              srcSet="/logo/codework-tech-logo-white-transpatent.webp"
              type="image/webp"
            />
            <img
              src="/logo/codework-tech-logo-white-transpatent.png"
              alt="codework tech logo"
              title="codework tech logo"
              loading="lazy"
              className="w-auto h-4"
            />
          </picture>
        </Link>
      </>
    );
  };