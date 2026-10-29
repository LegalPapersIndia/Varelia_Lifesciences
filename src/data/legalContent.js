const COMPANY = "Varelia Lifesciences Private Limited";

export const legalDocs = {
  privacy: {
    slug: "privacy",
    path: "/privacy",
    badge: "Legal",
    title: "Privacy Policy",
    updated: "13 October 2026",
    intro: `This policy explains how ${COMPANY} ("Varelia", "we", "us") handles the information you share with us through this website.`,
    sections: [
      {
        id: "who-we-are",
        heading: "Who we are",
        paragraphs: [
          `${COMPANY} is an Indian pharmaceutical trading company based in Meerut, Uttar Pradesh. We supply products through qualified third-party manufacturing partners to business buyers in India and international markets.`,
          "This website is intended for business users such as distributors, importers, hospitals, institutions and manufacturers.",
        ],
      },
      {
        id: "information-we-collect",
        heading: "Information we collect",
        paragraphs: ["We may collect the following information:"],
        list: [
          "Information you enter in our enquiry forms: name, company, business email, phone or WhatsApp number, country or city, buyer or partner type, product and quantity requirements, and your message.",
          "Information you send us directly by email, phone or WhatsApp.",
          "Basic technical information that your browser shares with any website, such as IP address, browser type and device type, which may be processed by our hosting provider.",
        ],
      },
      {
        id: "how-forms-work",
        heading: "How our enquiry forms work",
        paragraphs: [
          "Our enquiry forms do not store your details on our own servers. When you submit a form, your device opens WhatsApp with a pre-filled message addressed to our business WhatsApp number. The message is sent only when you press send inside WhatsApp.",
          "Once you send it, the message is also handled under WhatsApp's own terms and privacy policy. Please review them if you want to know how WhatsApp treats messages.",
        ],
      },
      {
        id: "how-we-use",
        heading: "How we use your information",
        list: [
          "To respond to your enquiry and prepare a quotation.",
          "To coordinate orders, documentation and shipments.",
          "To evaluate partnership enquiries from distributors, importers and manufacturers.",
          "To communicate with you about your enquiry or order.",
          "To meet legal, accounting and regulatory obligations.",
          "To improve this website and our services.",
        ],
      },
      {
        id: "sharing",
        heading: "Sharing of information",
        paragraphs: [
          "We do not sell your personal information. We may share it only where needed for your enquiry or order, with:",
        ],
        list: [
          "Our qualified manufacturing partners, to confirm product availability, documents and pricing.",
          "Logistics and shipping providers, to arrange dispatch and delivery.",
          "Professional advisers and service providers who support our business, under appropriate confidentiality.",
          "Authorities or regulators, where we are required to do so by law.",
        ],
      },
      {
        id: "cookies",
        heading: "Cookies and third-party services",
        paragraphs: [
          "You do not need an account to use this website. We do not run advertising or analytics trackers on it at the time of writing. If we add such tools in the future, we will update this policy.",
          "Some parts of the website load content from third parties, such as the embedded Google Map on our Contact page, and links to WhatsApp, Facebook and Instagram. These services may collect information under their own policies.",
        ],
      },
      {
        id: "retention",
        heading: "How long we keep information",
        paragraphs: [
          "We keep enquiry information for as long as needed to handle your enquiry, maintain a business relationship, and meet legal or accounting requirements. After that, we delete it or keep it only in a form that does not identify you.",
        ],
      },
      {
        id: "security",
        heading: "Security",
        paragraphs: [
          "We take reasonable steps to protect the information we hold. However, no method of transmission over the internet or messaging apps is completely secure.",
          "Please do not send confidential documents, licence copies or identity numbers through our website forms. If documents are needed, we will tell you a suitable way to share them.",
        ],
      },
      {
        id: "your-rights",
        heading: "Your choices and rights",
        paragraphs: [
          "To the extent applicable under Indian law, including the Digital Personal Data Protection Act, 2026, you may ask us to give you access to, correct or delete the personal information you have shared with us. You may also ask us to stop contacting you about an enquiry.",
          "To make a request, write to us at the email addresses given below. We may need to verify your identity, and some information may have to be kept where the law requires it.",
        ],
      },
      {
        id: "children",
        heading: "Children",
        paragraphs: [
          "This website is meant for business users and is not directed at children under 18. We do not knowingly collect information from children.",
        ],
      },
      {
        id: "changes",
        heading: "Changes to this policy",
        paragraphs: [
          "We may update this policy from time to time. The date at the top of the page shows when it was last updated.",
        ],
      },
    ],
  },

  terms: {
    slug: "terms",
    path: "/terms",
    badge: "Legal",
    title: "Terms & Conditions",
    updated: "13 October 2026",
    intro: `These terms apply when you use the website of ${COMPANY} ("Varelia", "we", "us"). Please read them carefully. By using this website, you agree to them.`,
    sections: [
      {
        id: "acceptance",
        heading: "Acceptance of terms",
        paragraphs: [
          "By accessing or using this website, you agree to follow these terms and our Privacy Policy and Disclaimer. If you do not agree, please do not use the website.",
        ],
      },
      {
        id: "our-business",
        heading: "About our business and this website",
        paragraphs: [
          "Varelia is a pharmaceutical trading company. Products are supplied through qualified third-party manufacturing partners.",
          "This website is for business users only, such as distributors, importers, hospitals, institutions, tender buyers and manufacturers. It is not an online store, and we do not sell to individual consumers.",
        ],
      },
      {
        id: "product-information",
        heading: "Product information",
        paragraphs: [
          "Product names, strengths, pack sizes, standards and other details on this website are shown for general information. Images are for illustration only.",
          "Final specifications, pack configuration, packaging, documentation and availability are confirmed in writing for each order. Information on this website does not form an offer.",
        ],
      },
      {
        id: "enquiries-quotations",
        heading: "Enquiries and quotations",
        paragraphs: [
          "Sending an enquiry or requesting a quote does not create an order or a binding contract.",
          "Pricing, quantity, minimum order quantity, lead time, payment terms, documents and other commercial terms are confirmed in a written quotation. A contract is formed only when both sides have confirmed the order in writing.",
        ],
      },
      {
        id: "regulatory",
        heading: "Regulatory and import requirements",
        paragraphs: [
          "Registration, licensing, import permits and other regulatory requirements differ from country to country. The buyer is responsible for making sure that the product may lawfully be imported, stored, distributed and used in their market.",
          "We will share the documents we can provide, as applicable, but we do not guarantee that a product is registered or approved in any particular country.",
        ],
      },
      {
        id: "medical-use",
        heading: "Medical use",
        paragraphs: [
          "The content on this website is not medical advice. Intravenous fluids and similar products are intended to be used by, or under the supervision of, qualified healthcare professionals. They are not for self-medication or retail sale.",
        ],
      },
      {
        id: "acceptable-use",
        heading: "Acceptable use",
        paragraphs: ["When using this website, you agree not to:"],
        list: [
          "Provide false or misleading information in any enquiry.",
          "Use the website in any way that is unlawful or harms our business or other users.",
          "Try to gain unauthorised access to the website, its servers or related systems.",
          "Copy, scrape or reuse the website's content for commercial purposes without our written permission.",
        ],
      },
      {
        id: "intellectual-property",
        heading: "Intellectual property",
        paragraphs: [
          "The content of this website, including text, design, logo and images, belongs to Varelia or is used with permission. You may view it for your own business purposes, but you may not copy, modify or distribute it without our written permission.",
        ],
      },
      {
        id: "third-party",
        heading: "Third-party links and services",
        paragraphs: [
          "This website may link to or load content from third parties, such as WhatsApp, social media and Google Maps. We do not control these services and are not responsible for their content or practices.",
        ],
      },
      {
        id: "liability",
        heading: "Disclaimer of warranties and limitation of liability",
        paragraphs: [
          'This website is provided "as is" and "as available". We try to keep it accurate and up to date, but we do not promise that it will be free of errors or interruptions.',
          "To the fullest extent permitted by law, Varelia is not liable for any indirect or consequential loss arising from your use of this website or your reliance on its content. Nothing in these terms excludes any liability that cannot be excluded under applicable law.",
        ],
      },
      {
        id: "governing-law",
        heading: "Governing law",
        paragraphs: [
          "These terms are governed by the laws of India. The courts at Meerut, Uttar Pradesh, India will have jurisdiction over any dispute arising from them.",
        ],
      },
      {
        id: "changes",
        heading: "Changes to these terms",
        paragraphs: [
          "We may update these terms from time to time. The date at the top of the page shows when they were last updated. Continued use of the website after a change means you accept the updated terms.",
        ],
      },
    ],
  },

  disclaimer: {
    slug: "disclaimer",
    path: "/disclaimer",
    badge: "Legal",
    title: "Disclaimer",
    updated: "13 October 2026",
    intro: `This disclaimer explains the limits of the information on the website of ${COMPANY}. It should be read together with our Terms & Conditions.`,
    sections: [
      {
        id: "general",
        heading: "General information only",
        paragraphs: [
          "The content on this website is provided for general information about our business and products. We try to keep it accurate, but we do not guarantee that it is complete, current or free of errors.",
        ],
      },
      {
        id: "our-role",
        heading: "Our role",
        paragraphs: [
          "Varelia Lifesciences is a pharmaceutical trading company. We do not manufacture the products ourselves. Products are supplied through qualified third-party manufacturing partners.",
          "Manufacturing licences, GMP status and similar certifications belong to the respective manufacturing partners. They are shared as partner documents, where applicable, and are not presented as Varelia's own.",
        ],
      },
      {
        id: "product-information",
        heading: "Product information and images",
        paragraphs: [
          "Strength, pack size, packaging, storage conditions, shelf life and other details shown on the website are indicative. Final specifications and pack configuration are confirmed for each order.",
          "Product images are for illustration and may differ from the product actually supplied.",
        ],
      },
      {
        id: "documents",
        heading: "Documents",
        paragraphs: [
          "Documents such as COA, product specifications, and stability or regulatory documents are shared as applicable. Their availability can vary by product, manufacturing partner and destination, and is confirmed for each order.",
        ],
      },
      {
        id: "registration",
        heading: "Registration and import requirements",
        paragraphs: [
          "Supplying a product to a market does not mean that it is registered or approved there. Registration and import authorisation requirements vary by country and are the importer's responsibility.",
        ],
      },
      {
        id: "medical",
        heading: "Not medical advice",
        paragraphs: [
          "Nothing on this website is medical advice. Intravenous fluids and similar products are for use by, or under the supervision of, qualified healthcare professionals, and are not for self-medication.",
        ],
      },
      {
        id: "markets",
        heading: "Markets and presence",
        paragraphs: [
          "Regions listed as target markets on this website show where we are building partnerships. They do not indicate an existing operating presence in those markets.",
        ],
      },
      {
        id: "external-links",
        heading: "External links",
        paragraphs: [
          "This website may link to third-party sites and services. We do not control them and are not responsible for their content or practices.",
        ],
      },
      {
        id: "updates",
        heading: "Updates",
        paragraphs: [
          "We may change this disclaimer and the content of this website at any time without notice. The date at the top of the page shows when this disclaimer was last updated.",
        ],
      },
    ],
  },
};