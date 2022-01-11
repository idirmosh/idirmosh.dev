type GATypes = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const GA_ID = 'G-G6TVD8QN1K';

export const pageview = (url: URL): void => window.gtag('config', GA_ID, { page_path: url });

export const event = ({ action, category, label, value }: GATypes): void =>
  window.gtag('event', action, { event_category: category, event_label: label, value });
