import Image from 'next/image';

import Logo from '@/components/navbar/Logo';
import { footerLinks, socials } from '@/constants';

const Footer = () => {
  return (
    <footer className=" bg-very-dark-violet py-14 md:px-8 lg:pb-12 lg:pt-[4.5rem]">
      <div className="mx-auto max-w-[69.5rem] lg:flex lg:gap-[4.7rem]">
        <nav className="lg:grow" aria-label="secondary navigation">
          <div className="lg:flex lg:grow lg:justify-between">
            <Logo className="brightness-0 invert" />

            <div className="pt-10 text-center lg:grid lg:grid-cols-3 lg:gap-[5.2rem] lg:pt-0 lg:text-left">
              {footerLinks.map((section) => (
                <div key={section.title} className="py-2.5 lg:py-0">
                  <h3 className="text-base font-bold text-white">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 py-[1.4rem] lg:space-y-3.5">
                    {section.links.map((link) => (
                      <li key={link} className="text-sm text-gray">
                        <button
                          type="button"
                          className="transition hover:text-cyan"
                        >
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </nav>

        <ul className="flex justify-center gap-6 pt-4 lg:pt-0.5">
          {socials.map((social) => (
            <li key={social.title}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <button type="button" className="hover:custom-filter transition">
                <Image
                  src={social.icon}
                  alt={social.title}
                  aria-label={social.title}
                  width={24}
                  height={social.iconHeight || 24}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
