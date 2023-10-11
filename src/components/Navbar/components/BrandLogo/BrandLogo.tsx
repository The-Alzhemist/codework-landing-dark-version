import Link from "next/link";

export const CodeworkTechLogo = () => {
    return (
      <>
        <Link href="/">
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
              className="w-auto h-3"
            />
          </picture>
        </Link>
      </>
    );
  };