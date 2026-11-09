const symbols = {
  'Buying Guide': 'M5 4h14v16H5z M8 8h8 M8 12h8 M8 16h5',
  Comparison: 'M12 3v18 M7 21h10 M3 7h18 M5 7l-3 7h6z M19 7l-3 7h6z',
  'Home Office': 'M3 10l9-7 9 7v11H3z M9 21v-7h6v7',
  Business: 'M5 21V3h11v18 M16 10h4v11H3 M8 7h5 M8 11h5 M8 15h5',
  Technical: 'M6 6h12v12H6z M9 9h6v6H9z M9 3v3 M15 3v3 M9 18v3 M15 18v3 M3 9h3 M3 15h3 M18 9h3 M18 15h3',
  Maintenance: 'M14 6l4 4 3-3a6 6 0 0 1-7 8l-5 5a2 2 0 0 1-3-3l5-5a6 6 0 0 1 8-7l-3 3',
  'Cost Analysis': 'M12 2v20 M17 6H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H6',
  Protection: 'M12 3l8 3v5c0 5-4 8-8 10-4-2-8-5-8-10V6z',
  Mobile: 'M7 3h10v18H7z M11 18h2',
  Environment: 'M4 20c3-5 7-8 12-11 M5 17C1 8 9 6 20 4c0 9-5 17-15 13z',
  Supplies: 'M3 7l9-4 9 4v10l-9 4-9-4z M3 7l9 4 9-4 M12 11v10',
  Efficiency: 'M13 2L4 14h7l-1 8 10-12h-7z',
  Upgrades: 'M12 20V4 M6 10l6-6 6 6',
};

const related = {
  Troubleshooting: 'Maintenance', Security: 'Protection', 'Cost Savings': 'Cost Analysis',
  'Getting Started': 'Buying Guide', Specifications: 'Buying Guide',
  'Wireless Printer Guide': 'Mobile', 'Wireless Setup': 'Mobile',
  'Inkjet vs Laser': 'Comparison', 'Photo vs Inkjet': 'Comparison',
};

export default function GuideIcon({ category }) {
  const topic = related[category] ?? category;
  return <span className="guide-emblem" data-topic={topic} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={symbols[topic] ?? symbols['Buying Guide']} />
    </svg>
  </span>;
}
