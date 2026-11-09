const sheets = [
  { width: 1522, height: 1428, left: 150, rows: [11, 487, 963] },
  { width: 1450, height: 1434, left: 78, rows: [23, 499, 975] },
  { width: 1364, height: 1434, left: 54, rows: [41, 517, 993] },
  { width: 1344, height: 1438, left: 32, rows: [33, 509, 985] },
  { width: 1298, height: 984, left: 18, rows: [23, 499] },
];

// Each group follows the image order in its corresponding catalogue sheet.
const listings = [
  [
    ['envy-7955e', 'Envy 7955e Wireless Photo All-in-One Inkjet Printer', 22999, 'home', true],
    ['deskjet-2855e', 'DeskJet 2855e Wireless All-in-One Inkjet Printer', 8999, 'home', true],
    ['deskjet-4255e', 'DeskJet 4255e Wireless All-in-One Inkjet Printer', 10999, 'home', true],
    ['envy-7958e', 'Envy 7958e Wireless Photo All-in-One Inkjet Printer', 22999, 'home', true],
    ['envy-6155e', 'Envy 6155e Wireless All-in-One Inkjet Printer', 15999, 'home', true],
    ['envy-6555e', 'Envy 6555e Wireless All-in-One Inkjet Printer', 17999, 'home', true],
    ['envy-7255e', 'Envy 7255e Wireless Photo All-in-One Inkjet Printer', 20999, 'home', true],
    ['laserjet-3001dw', 'LaserJet 3001dw Wireless Monochrome Laser Printer', 24999, 'laser'],
    ['laserjet-3101fdw', 'LaserJet 3101fdw Wireless Monochrome All-in-One Laser Printer', 47999, 'laser', true],
    ['laserjet-3101sdw', 'LaserJet 3101sdw Wireless Monochrome All-in-One Laser Printer', 34900, 'laser', true],
    ['laserjet-3201dw', 'LaserJet 3201dw Wireless Laser Printer', 39900, 'laser'],
    ['laserjet-3301fdw', 'LaserJet 3301fdw Wireless All-in-One Laser Printer with Fax and Duplex', 63900, 'laser', true],
  ],
  [
    ['laserjet-3301sdw', 'LaserJet 3301sdw Wireless All-in-One Laser Printer', 53900, 'laser', true],
    ['laserjet-4001dn', 'LaserJet 4001dn Monochrome Laser Printer with Duplex', 47999, 'laser'],
    ['laserjet-4101fdw', 'LaserJet 4101fdw Wireless All-in-One Laser Printer with Fax and Duplex', 65900, 'laser', true],
    ['laserjet-4201dw', 'LaserJet 4201dw Wireless Laser Printer', 69900, 'laser'],
    ['laserjet-4301fdw', 'LaserJet 4301fdw Wireless All-in-One Laser Printer with Fax and Duplex', 85900, 'laser', true],
    ['laserjet-5700dn', 'LaserJet 5700dn Color Laser Printer with Duplex', 169999, 'laser'],
    ['laserjet-m554dn', 'LaserJet Enterprise M554dn Color Laser Printer', 104999, 'laser'],
    ['laserjet-m607n', 'LaserJet Enterprise M607n Monochrome Laser Printer', 114999, 'laser'],
    ['laserjet-m110w', 'LaserJet M110w Compact Wireless Monochrome Laser Printer', 16900, 'laser'],
    ['laserjet-m140w', 'LaserJet M140w Wireless All-in-One Laser Printer with Scan', 20900, 'laser', true],
    ['laserjet-m207dw', 'LaserJet M207dw Wireless Monochrome Laser Printer with Duplex', 23999, 'laser'],
    ['laserjet-m209', 'LaserJet M209 Monochrome Laser Printer', 21999, 'laser'],
  ],
  [
    ['laserjet-m234sdw', 'LaserJet M234sdw Wireless Monochrome All-in-One Laser Printer', 27900, 'laser', true],
    ['laserjet-m235sdw', 'LaserJet M235sdw Wireless Monochrome All-in-One Laser Printer', 31999, 'laser', true],
    ['laserjet-m406dn', 'LaserJet M406dn Monochrome Laser Printer with Duplex', 52900, 'laser'],
    ['laserjet-m430f', 'LaserJet M430f All-in-One Laser Printer with Fax', 81900, 'laser', true],
    ['laserjet-m455dn', 'LaserJet M455dn Color Laser Printer with Duplex', 65900, 'laser'],
    ['laserjet-m480f', 'LaserJet M480f Color All-in-One Laser Printer with Fax and Duplex', 98900, 'laser', true],
    ['laserjet-m501dn', 'LaserJet M501dn Monochrome Laser Printer with Duplex', 77999, 'laser'],
    ['laserjet-m507n', 'LaserJet M507n Monochrome Laser Printer', 75900, 'laser'],
    ['laserjet-m611dn', 'LaserJet M611dn Enterprise Monochrome Laser Printer with Duplex', 145900, 'laser'],
    ['officejet-8015e', 'OfficeJet 8015e Wireless All-in-One Inkjet Printer', 15999, 'office', true],
    ['officejet-8125e', 'OfficeJet 8125e Wireless All-in-One Inkjet Printer', 17999, 'office', true],
    ['officejet-8135e', 'OfficeJet 8135e Wireless All-in-One Inkjet Printer', 23999, 'office', true],
  ],
  [
    ['officejet-8139e', 'OfficeJet 8139e Wireless All-in-One Inkjet Printer with Auto Duplex', 27999, 'office', true],
    ['officejet-9110', 'OfficeJet 9110 Wireless Inkjet Printer', 21999, 'office'],
    ['officejet-9125e', 'OfficeJet 9125e Wireless All-in-One Inkjet Printer', 30999, 'office', true],
    ['officejet-9135e', 'OfficeJet 9135e Wireless All-in-One Inkjet Printer', 42999, 'office', true],
    ['officejet-9730e', 'OfficeJet 9730e Wireless Wide-Format All-in-One Inkjet Printer', 43999, 'office', true],
    ['scanjet-9000-s1', 'ScanJet Enterprise Flow 9000 s1 Document Scanner', 239900, 'scanner'],
    ['scanjet-n9000-sn1', 'ScanJet Enterprise Flow N9000 sn1 Network Document Scanner', 284900, 'scanner'],
    ['scanjet-n9120-fn2', 'ScanJet Enterprise Flow N9120 fn2 Network Document Scanner', 501900, 'scanner'],
    ['scanjet-2000-s2', 'ScanJet Pro 2000 s2 Sheet-Feed Document Scanner', 44999, 'scanner'],
    ['scanjet-2600-f1', 'ScanJet Pro 2600 f1 Flatbed Document Scanner', 43900, 'scanner'],
    ['scanjet-3600-f1', 'ScanJet Pro 3600 f1 Flatbed Scanner with ADF', 68900, 'scanner'],
    ['scanjet-4200-s1', 'ScanJet Pro 4200 s1 Sheet-Feed Document Scanner', 62999, 'scanner'],
  ],
  [
    ['scanjet-n4000-snw1', 'ScanJet Pro N4000 snw1 Sheet-Feed Document Scanner', 79999, 'scanner'],
    ['smart-tank-5101', 'Smart Tank 5101 Wireless Ink Tank Printer', 25999, 'home'],
    ['smart-tank-5103', 'Smart Tank 5103 Wireless Ink Tank Printer', 26999, 'home'],
    ['smart-tank-6001', 'Smart Tank 6001 Wireless All-in-One Ink Tank Printer', 36999, 'both', true],
    ['smart-tank-651', 'Smart Tank 651 Wireless All-in-One Ink Tank Printer', 32999, 'home', true],
    ['smart-tank-7001', 'Smart Tank 7001 Wireless All-in-One Ink Tank Printer', 42999, 'office', true],
    ['smart-tank-7301', 'Smart Tank 7301 Wireless All-in-One Ink Tank Printer', 44999, 'both', true],
    ['smart-tank-7602', 'Smart Tank 7602 Wireless All-in-One Ink Tank Printer', 46999, 'office', true],
  ],
];

export const allProducts = listings.flatMap((group, sheetIndex) => group.map(
  ([id, name, cents, category, allInOne = false], index) => {
    const sheet = sheets[sheetIndex];
    return {
      id, name: 'HP ' + name, cents, category, allInOne,
      image: {
        url: '/images/catalogue/sheet-' + (sheetIndex + 1) + '.png',
        width: sheet.width,
        height: sheet.height,
        x: sheet.left + (index % 4) * 318 + 2,
        y: sheet.rows[Math.floor(index / 4)] + 2,
      },
    };
  },
));

export const shopCatalogue = allProducts;
export const catalogueProducts = allProducts.filter(product => !['laser', 'scanner'].includes(product.category));
export const homeCatalogue = allProducts.filter(product => ['home', 'both'].includes(product.category));
export const officeCatalogue = allProducts.filter(product => ['office', 'both', 'laser'].includes(product.category));
export const allInOneCatalogue = allProducts.filter(product => product.allInOne);
export const scannerCatalogue = allProducts.filter(product => product.category === 'scanner');
export const money = cents => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
