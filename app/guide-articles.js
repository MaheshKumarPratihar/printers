import guides from './guide-content.json';

export const allGuideArticles = guides;
export const guideLibrary = guides.filter(guide => guide.inLibrary);
export const homepageGuides = guides
  .filter(guide => guide.homepage)
  .sort((first, second) => first.homepage.order - second.homepage.order);
