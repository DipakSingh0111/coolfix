import siteData from './content.json';

const category = siteData.categories.CoolFix;
const { sections } = category;

export type SiteData = typeof siteData;

export type SectionProps<T = unknown> = {
  data?: T;
  className?: string;
};

export type TemplateData = typeof siteData.categories.CoolFix.templateComponents['template-1'];
export type GlobalData = typeof siteData.categories.CoolFix.sections.Global.variants.CoolFixGlobal1;
export type TopbarData = typeof siteData.categories.CoolFix.sections.Topbar.variants.CoolFixTopbar1;
export type HeaderData = typeof siteData.categories.CoolFix.sections.Header.variants.CoolFixHeader1;
export type PageBannersData = typeof siteData.categories.CoolFix.sections.PageBanners.variants.CoolFixPageBanners1;
export type HeroBannerData = typeof siteData.categories.CoolFix.sections.HeroBanner.variants.CoolFixHeroBanner1;
export type AboutUsData = typeof siteData.categories.CoolFix.sections.AboutUs.variants.CoolFixAboutUs1;
export type ServicesData = typeof siteData.categories.CoolFix.sections.Services.variants.CoolFixServices1;
export type ServiceDetailsData = ServicesData['serviceDetails'];
export type ServiceDetailItem = ServiceDetailsData['items'][number];
export type TestimonialsData = typeof siteData.categories.CoolFix.sections.Testimonials.variants.CoolFixTestimonials1;
export type HighlightsData = typeof siteData.categories.CoolFix.sections.Highlights.variants.CoolFixHighlights1;
export type WorkingProcessData = typeof siteData.categories.CoolFix.sections.WorkingProcess.variants.CoolFixWorkingProcess1;
export type StatsData = typeof siteData.categories.CoolFix.sections.Stats.variants.CoolFixStats1;
export type CtaBannerData = typeof siteData.categories.CoolFix.sections.CtaBanner.variants.CoolFixCtaBanner1;
export type WhyChooseUsData = typeof siteData.categories.CoolFix.sections.WhyChooseUs.variants.CoolFixWhyChooseUs1;
export type GalleryData = typeof siteData.categories.CoolFix.sections.Gallery.variants.CoolFixGallery1;
export type GetQuoteData = typeof siteData.categories.CoolFix.sections.GetQuote.variants.CoolFixGetQuote1;
export type ContactPageData = typeof siteData.categories.CoolFix.sections.ContactPage.variants.CoolFixContactPage1;
export type BookServiceData = typeof siteData.categories.CoolFix.sections.BookService.variants.CoolFixBookService1;
export type FooterData = typeof siteData.categories.CoolFix.sections.Footer.variants.CoolFixFooter1;

export type BannerPage = keyof PageBannersData['pages'];

export const site = {
  template: category.templateComponents['template-1'],
  global: sections.Global.variants.CoolFixGlobal1,
  topbar: sections.Topbar.variants.CoolFixTopbar1,
  header: sections.Header.variants.CoolFixHeader1,
  pageBanners: sections.PageBanners.variants.CoolFixPageBanners1,
  hero: sections.HeroBanner.variants.CoolFixHeroBanner1,
  about: sections.AboutUs.variants.CoolFixAboutUs1,
  services: sections.Services.variants.CoolFixServices1,
  serviceDetails: sections.Services.variants.CoolFixServices1.serviceDetails,
  testimonials: sections.Testimonials.variants.CoolFixTestimonials1,
  highlights: sections.Highlights.variants.CoolFixHighlights1,
  workingProcess: sections.WorkingProcess.variants.CoolFixWorkingProcess1,
  stats: sections.Stats.variants.CoolFixStats1,
  ctaBanner: sections.CtaBanner.variants.CoolFixCtaBanner1,
  whyChooseUs: sections.WhyChooseUs.variants.CoolFixWhyChooseUs1,
  gallery: sections.Gallery.variants.CoolFixGallery1,
  getQuote: sections.GetQuote.variants.CoolFixGetQuote1,
  contact: sections.ContactPage.variants.CoolFixContactPage1,
  book: sections.BookService.variants.CoolFixBookService1,
  footer: sections.Footer.variants.CoolFixFooter1,
};

export default site;
