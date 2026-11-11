const contact = ['Contact Us', '/contact/'];

export const policies = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'See what stays on your device, what reaches Paperline or its service providers, and how to make a privacy request.',
    sections: [
      ['browser-storage', 'What your browser remembers', 'Paperline uses local storage to remember the model IDs and quantities in your cart and your privacy preference. You can remove these records by clearing this site’s data in your browser. Doing so resets your cart and preferences.', ['Manage privacy preferences', '#privacy-preferences']],
      ['checkout', 'Information entered in checkout', 'Checkout checks details such as your email address and delivery ZIP code in your browser. The website does not send or save these fields, place an order, or collect payment details.'],
      ['support', 'Messages you choose to send', 'The contact form prepares an email draft on your device. When an address is available, you can open the draft in your email app and send it yourself. We receive your email address and any information you include when you send a message. We use it to answer your inquiry and handle follow-up. Keep payment details, passwords, and sensitive documents out of routine messages.', contact],
      ['hosting', 'Information received when you visit', 'The hosting provider receives web requests when it serves pages and images. These requests can include your IP address, browser information, the requested URL, and the time of the request. The provider may keep logs for site operation, security, and troubleshooting.'],
      ['sharing', 'Service providers and external websites', 'Hosting and email providers handle the information needed to deliver their services. If you follow a link to a manufacturer or another website, that site handles any information you provide under its own privacy policy.'],
      ['tracking', 'Analytics and advertising', 'Paperline does not use optional analytics cookies or advertising pixels on this website. Use your browser’s site settings to manage local storage.'],
      ['retention', 'Retention and security', 'Your cart and privacy choice remain on your device until you clear them or your browser removes them. We may keep support correspondence while needed to resolve the inquiry, maintain records, or meet applicable obligations. Avoid sharing sensitive information through ordinary email.'],
      ['rights', 'Your privacy choices and requests', 'Depending on where you live and the law that applies, you may be able to request access to, correction of, or deletion of personal information. Use Contact Us and describe your request. We may need to verify your identity before acting on it.', contact],
      ['children', 'Children’s privacy', 'Paperline is intended for a general audience. If you believe a child has sent us personal information, contact us so we can review the matter.', contact],
      ['updates', 'Changes to this policy', 'We update this page when our data practices change. The date at the top shows when the notice was revised.'],
    ],
  },
  purchase: {
    title: 'Purchase Policy',
    intro: 'What catalogue prices mean, how to verify a model, and what to check before buying.',
    sections: [
      ['availability', 'Pricing and availability', 'Catalogue prices are shown in U.S. dollars. Treat a listing as a starting point for comparison. Confirm current stock, exact price, taxes, shipping, and any other fees with the seller before paying.'],
      ['orders', 'Cart and order confirmation', 'The cart keeps your selections on your device. Completing checkout checks your details without transmitting them or placing an order. A purchase requires separate confirmation from the seller that will take your payment and fulfill the order.'],
      ['compatibility', 'Check the exact model', 'Compare the model number and regional variant, supported operating systems, connection type, paper sizes, and compatible ink or toner. Ask the seller to confirm the condition, included accessories, and written warranty.', ['Warranty Information', '/policies/warranty/']],
      ['changes', 'Changes and cancellations', 'For a purchase made elsewhere, ask the seller whether an order can be changed or cancelled. Keep your receipt and any written confirmation of a price change, substitution, cancellation, or refund.', ['Returns & Refunds', '/policies/returns/']],
    ],
  },
  returns: {
    title: 'Returns & Refunds Policy',
    intro: 'Who handles a return, what to keep, and what to do if a product arrives damaged or incorrect.',
    sections: [
      ['eligibility', 'Return eligibility and deadlines', 'Paperline’s website does not take payments or issue refunds. If you bought from another seller, check the return window, any change-of-mind exclusions, and who pays for return shipping on your receipt or the seller’s policy. Product condition, opened supplies, or custom configurations may affect eligibility.'],
      ['issues', 'Damaged, defective, or incorrect items', 'Contact the seller promptly with the order number and model. Keep the package, shipping label, accessories, and proof of purchase. Photos of the product and packaging may help the seller investigate. Ask how to proceed before sending anything back.'],
      ['refunds', 'Replacements and refunds', 'Ask the seller to confirm the available remedy, return instructions, refund amount, and expected timing. After a refund is issued, your payment provider may take additional time to post it. A seller’s published terms do not remove rights you have under applicable law.'],
      ['warranty', 'When to check warranty coverage', 'A warranty claim may be appropriate for a fault that develops after delivery. Check who provides coverage and what documentation they require.', ['Warranty Information', '/policies/warranty/']],
    ],
  },
  shipping: {
    title: 'Shipping Policy',
    intro: 'How to confirm delivery costs, check a shipment, and handle delivery problems.',
    sections: [
      ['timing', 'Processing and delivery estimates', 'Paperline does not dispatch products through this website. For a purchase made elsewhere, confirm service to your ZIP code, processing time, expected ship date, estimated arrival, and delivery fees with the seller before paying. Processing time and carrier transit time are separate.'],
      ['address', 'Address and failed delivery', 'Check the street address, unit number, ZIP code, and any delivery restrictions before confirming the order. If an address changes or a delivery attempt fails, ask the seller or carrier what options and charges apply before arranging redelivery.'],
      ['tracking', 'Tracking and delivery confirmation', 'Use tracking information from your seller or carrier. If a package is late, missing, or marked delivered but cannot be located, contact the seller with your order number and tracking details. Ask about your cancellation and refund options if the seller cannot ship on time.'],
      ['damage', 'Damage in transit', 'Photograph the package, shipping label, and affected item. Keep the original materials until the seller gives you instructions.', ['Returns & Refunds', '/policies/returns/']],
    ],
  },
  warranty: {
    title: 'Warranty Information',
    intro: 'How to verify warranty coverage for an HP printer or scanner before buying and when you need support.',
    sections: [
      ['coverage', 'Verify coverage before purchase', 'Ask the seller for the written warranty for the exact model and condition. Check who provides coverage, when it starts, how long it lasts, and where it applies. A renewed, used, or imported device can have different terms from a new unit sold in your region.'],
      ['manufacturer', 'Check with HP', 'Use HP’s warranty tool to check your product using its serial number and country or region of purchase. Use the seller’s written terms for any separate seller warranty.', ['Check warranty with HP', 'https://support.hp.com/us-en/check-warranty']],
      ['claim', 'Prepare a warranty claim', 'Have your proof of purchase, model, serial number, and a short description of the issue ready. Ask the warranty provider whether service, shipping, or supplies are covered before returning the device.'],
      ['rights', 'Warranty and consumer rights', 'Written warranty terms apply alongside rights available under applicable law. If the product arrived damaged or differs from what you ordered, ask the seller about return options as well.', ['Returns & Refunds', '/policies/returns/']],
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    intro: 'Terms for browsing Paperline’s catalogue, using the cart, and reading our buying guides.',
    sections: [
      ['scope', 'Scope of the site', 'Paperline provides printer and scanner listings, buying guides, and a browser-based cart. This site does not accept orders or payment. Purchases made with another seller are governed by that seller’s terms and applicable law.', ['Purchase Policy', '/policies/purchase/']],
      ['use', 'Using the website', 'Use the site for lawful browsing and comparison. Do not interfere with its operation, impersonate anyone, or use site features to mislead other visitors.'],
      ['listings', 'Listings and external sites', 'Product specifications, availability, and pricing may change. Confirm details that affect your purchase with the seller or manufacturer. External websites set their own service and privacy terms.'],
      ['intellectual-property', 'Content and trademarks', 'Use Paperline’s material for personal reference and respect the rights of content owners. HP and other product names and logos identify the products shown and belong to their respective owners.', ['Disclaimer', '/policies/disclaimer/']],
      ['rights', 'Changes and consumer rights', 'Paperline may update its site terms as the catalogue or services change. These terms do not waive rights or remedies that applicable law protects.'],
    ],
  },
  disclaimer: {
    title: 'Disclaimer',
    intro: 'How to use Paperline’s buying guides, product photographs, and model information.',
    sections: [
      ['guides', 'Buying guides and technical information', 'The guides are general information. Check the manufacturer’s instructions before installing supplies, changing settings, servicing a device, or attempting repairs. Use a qualified service provider for electrical or persistent hardware issues.'],
      ['images', 'Product information and images', 'Use the exact model number to verify dimensions, connectivity, included accessories, and supplies. Lifestyle images are illustrations and may show different accessories, surroundings, or finishes from the items in a listing.'],
      ['independence', 'Independent catalogue', 'Paperline is an independent catalogue. HP names and marks identify the products shown. Their appearance does not imply manufacturer sponsorship, endorsement, or authorization.'],
      ['links', 'External websites', 'A link to manufacturer documentation or another website is provided for reference. Check the destination’s terms, privacy practices, and any conditions on an offer before sharing information or paying.'],
    ],
  },
  accessibility: {
    title: 'Accessibility Statement',
    intro: 'How to navigate Paperline and what to include if you run into an accessibility issue.',
    sections: [
      ['navigation', 'Using the site', 'Paperline provides a skip link, structured headings, descriptive controls, and text alternatives for meaningful product images. You can browse with a keyboard or use your browser’s zoom controls.'],
      ['feedback', 'Reporting a barrier', 'If a page or control is difficult to use, include the page address and what you were trying to do. If relevant, mention your browser or assistive technology so the issue can be reproduced.', contact],
    ],
  },
};

export function policyPath(slug) {
  return slug === 'privacy' ? '/privacy/' : `/policies/${slug}/`;
}
