import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 " id="Footer">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="caption text-n-1 lg:block"> Made in India 🇮🇳</p>
        <a
          href="mailto:blackvox.ai@gmail.com"
          className="caption text-n-4 lg:block"
        >
          blackvox.ai@gmail.com
        </a>
      </div>
    </Section>
  );
};

export default Footer;
