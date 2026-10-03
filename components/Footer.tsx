import React from 'react';
import data from '../data/content.json';

export default function Footer() {
  const footer = data.footer;

  const socialStyles: Record<string, { bg: string; svg: React.ReactNode }> = {
    facebook: {
      bg: 'bg-[#3b5998]',
      svg: <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>,
    },
    instagram: {
      bg: 'bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]',
      svg: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2z"/></svg>,
    },
    youtube: {
      bg: 'bg-[#ff0000]',
      svg: <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>,
    },
    whatsapp: {
      bg: 'bg-[#25D366]',
      svg: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 10-7.85-4.52l-1.35 4.05 4.2-1.12A9 9 0 0012 21z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M9 10a.5.5 0 001 0V9a.5.5 0 00-1 0v1a5 5 0 005 5h1a.5.5 0 000-1h-1a.5.5 0 000 1"></path></svg>,
    },
  };

  return (
    <footer className="bg-[#041a33] text-gray-300 font-sans border-t-[8px] border-[#0b1c3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 lg:gap-12">
        {/* Column 1: Logo, Description & Socials */}
        <div className="flex flex-col gap-6 pr-4 col-span-2 md:col-span-1">
          <img className="h-14 sm:h-16 w-auto object-contain self-start" src={footer.logo} alt={footer.logoAlt} />
          <p className="text-[15px] leading-relaxed text-gray-400">
            {footer.description}
          </p>
          <div className="w-8 h-1 bg-[#ff6b00]"></div>
          
          <div className="flex flex-wrap gap-3 lg:gap-4 mt-2">
            {footer.socials.map((social) => {
              const style = socialStyles[social.icon];
              if (!style) return null;
              return (
                <a
                  key={social.icon}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full ${style.bg} flex items-center justify-center hover:opacity-80 transition`}
                >
                  {style.svg}
                </a>
              );
            })}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-white font-bold text-[22px] mb-2">{footer.quickLinksTitle}</h3>
          <div className="w-8 h-1 bg-[#ff6b00] mb-8"></div>
          <ul className="space-y-4">
            {footer.quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="text-gray-400 hover:text-[#ff6b00] transition flex items-center gap-3">
                  <span className="text-[#ff6b00] text-xl leading-none">›</span>
                  <span className="text-[15px]">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div className="flex flex-col">
          <h3 className="text-white font-bold text-[22px] mb-2">{footer.servicesTitle}</h3>
          <div className="w-8 h-1 bg-[#ff6b00] mb-8"></div>
          <ul className="space-y-4">
            {footer.services.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="text-gray-400 hover:text-[#ff6b00] transition flex items-center gap-3">
                  <span className="text-[#ff6b00] text-xl leading-none">›</span>
                  <span className="text-[15px]">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="flex flex-col col-span-2 md:col-span-1">
          <h3 className="text-white font-bold text-[22px] mb-2">{footer.contactTitle}</h3>
          <div className="w-8 h-1 bg-[#ff6b00] mb-8"></div>
          <div className="flex flex-col gap-6">
            {footer.contacts.map((contact, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#ff6b00] flex items-center justify-center flex-shrink-0 mt-1">
                  {contact.icon === 'phone' && <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>}
                  {contact.icon === 'mail' && <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
                  {contact.icon === 'location' && <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>}
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold">{contact.label}</span>
                  <span className="text-gray-400 text-[15px]">{contact.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-700/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <p className="text-gray-400 text-sm">
             {footer.copyright}
           </p>
        </div>
      </div>
    </footer>
  );
}
