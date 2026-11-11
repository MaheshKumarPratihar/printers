const contact = ['Contact Us', '/contact/'];

export const policies = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'How Paperline handles information when you browse the catalogue, use checkout, or contact us.',
    sections: [
      ['browser-storage', 'Cart and privacy preferences', 'Your browser stores product IDs, quantities, and your privacy choice on your device. Clearing Paperline’s site data removes these records and resets your cart and preferences.', ['Manage privacy preferences', '#privacy-preferences']],
      ['checkout', 'Checkout details', 'The page checks the contact and delivery details you enter. Paperline does not transmit or retain those fields, create an order, or collect payment details.'],
      ['hosting', 'Hosting and site operation', 'Our hosting provider receives ordinary web requests, which can include your IP address, browser information, and the page requested. The provider may keep logs for site operation, security, and troubleshooting.'],
      ['support', 'Email and support', 'If you email Paperline, we receive your email address and the information you choose to send. We use it to respond and keep enough context to handle follow-up. Email and hosting providers may process information to deliver their services. Please keep payment credentials and sensitive documents out of routine messages.'],
      ['tracking', 'Analytics and advertising', 'Paperline’s site does not install analytics tags or advertising pixels. Site visitors can control local storage through their browser settings. Other sites you visit from Paperline have their own privacy policies.'],
      ['retention', 'How long information stays', 'Cart selections and privacy preferences remain on your device until you clear them or your browser removes them. Support correspondence may be retained while needed to resolve an inquiry, maintain records, or meet applicable obligations.'],
      ['rights', 'Privacy requests', 'Depending on applicable law, you may be able to ask for access to, correction of, or deletion of personal information. Use Contact Us to find the available support channel and describe what you are requesting. We may need to verify your identity before acting on a request.', contact],
      ['updates', 'Children and policy updates', 'Paperline is a general-audience printer catalogue. If you believe a child has shared personal information with us, please contact us so we can review it. We will update this page when our data practices change.'],
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
