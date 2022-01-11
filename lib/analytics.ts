export const GA_TRACKING_ID = 'G-G6TVD8QN1K';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
