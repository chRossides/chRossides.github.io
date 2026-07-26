export type Lang = 'el' | 'en';

export const site = {
  domain: 'https://www.chrossides.com',
  phoneShop: '+357 22 764662',
  phoneFactory: '+357 22 432481',
  phoneFactory2: '+357 22 347982',
  contactPerson: { el: 'Ελένη Ρωσσίδου', en: 'Eleni Rossidou' },
  factoryPersons: { el: 'Μιχάλης & Νίκος Ρωσσίδης', en: 'Michalis & Nicos Rossides' },
  mapShop: 'https://maps.app.goo.gl/9boKTNLgHSPWGbFd7',
  mapFactory: 'https://maps.app.goo.gl/6h57PwGUxxAqyt8V8',
  geoShop: { lat: 35.1684522, lng: 33.3695678 },
  geoFactory: { lat: 35.182648, lng: 33.379283 },
  sameAs: [
    'https://maps.app.goo.gl/qAVz1GjbH3xVna6X6',
    'https://maps.app.goo.gl/Yv9PHi2cpyBMbLbt8',
    'https://www.tradekey.com/company/Charalambos-Rossides-Ltd-714536.html',
    'https://www.cyprusmanufacturers.com/listings/name/charalambos-rossides',
    'https://www.oncyprus.com/charalambos_rossides',
  ],
  addressShop: { street: 'Πινδάρου 5Β', streetEn: 'Pindarou 5B', postal: '1060', city: { el: 'Λευκωσία', en: 'Nicosia' } },
  addressFactory: { street: 'Νικολάου Ιωάννου 3, Καϊμακλί', streetEn: 'Nikolaou Ioannou 3, Kaimakli', postal: '1036', city: { el: 'Λευκωσία', en: 'Nicosia' } },
};

export function telHref(phone: string): string {
  return `tel:${phone.replace(/ /g, '')}`;
}

export const ui = {
  el: {
    meta: {
      title: 'Χαρ. Ρωσσίδης ΛΤΔ - Σημαίες, Λάβαρα & Κεντήματα στην Κύπρο από το 1938',
      description:
        'Χειροποίητες εθνικές και προσωποποιημένες σημαίες, λάβαρα παρελάσεων και κεντήματα στη Λευκωσία. Κάθε διάσταση, χωρίς ελάχιστη ποσότητα. Ζητήστε δωρεάν προσφορά.',
    },
    nav: {
      products: 'Προϊόντα',
      process: 'Πώς δουλεύουμε',
      about: 'Η εταιρεία',
      contact: 'Επικοινωνία',
      cta: 'Ζητήστε προσφορά',
    },
    hero: {
      badge: '★ Χειροποίητα στην Κύπρο από το 1938',
      title: 'Βρείτε τη σημαία σας - ή φτιάξτε τη δική σας.',
      sub: 'Εθνικές και προσωποποιημένες σημαίες, λάβαρα και κεντήματα. Κάθε διάσταση, χωρίς ελάχιστη ποσότητα.',
      pills: ['Εθνικές σημαίες', 'Σημαίες με λογότυπο', 'Λάβαρα παρελάσεων', 'Κεντήματα', 'Αθλητικές'],
      ctaCall: '☎ Καλέστε μας: 22 764662',
      ctaProducts: 'Δείτε τα προϊόντα',
      cardTitle: 'ΨΗΦΙΑΚΗ ΕΚΤΥΠΩΣΗ',
      cardSub: 'Σημαίες χωρών ή λογότυπο, τυπωμένο σε ύφασμα.',
      imgAlt: 'Ψηφιακή εκτύπωση σημαίας σε πολυέστερ',
    },
    trust: {
      label: 'Μας εμπιστεύονται:',
      items: ['Αθλητικοί σύλλογοι', 'Σχολεία', 'Εκκλησίες', 'Δήμοι', 'Επιχειρήσεις'],
    },
    products: {
      kicker: 'ΤΑ ΠΡΟΪΟΝΤΑ ΜΑΣ',
      title: 'Επιλέξτε κατηγορία',
      all: 'Όλα τα προϊόντα →',
      categories: [
        { title: 'Εθνικές σημαίες', sub: 'National flags', desc: 'Όλων των χωρών, σε κάθε διάσταση.' },
        { title: 'Σημαίες με λογότυπο', sub: 'Custom logo', desc: 'Ψηφιακή εκτύπωση του σχεδίου σας.' },
        { title: 'Λάβαρα παρελάσεων', sub: 'Parade banners', desc: 'Βελούδο, ιστός, σταυρός ή σφαίρα.' },
        { title: 'Κεντήματα & διακριτικά', sub: 'Embroidery & badges', desc: 'Σύλλογοι, στρατός, αστυνομία.' },
      ],
      moreTitle: 'Και κατά παραγγελία',
      moreSub: 'Ό,τι δεν βλέπετε, το κατασκευάζουμε από την αρχή.',
      more: [
        { t: 'Επιτραπέζιες σημαίες', d: 'Με βάση και ιστό, για γραφεία και συνέδρια.' },
        { t: 'Σημαιοστολισμός', d: 'Σειρές σημαιάκια για γιορτές και πανηγύρια.' },
        { t: 'Αθλητικές σημαίες', d: 'Χρώματα και έμβλημα του συλλόγου σας.' },
        { t: 'Εκκλησιαστικά λάβαρα', d: 'Κεντητά, χειροποίητα, σε σχήμα ασπίδας.' },
        { t: 'Κεπί & στρατιωτικά αξεσουάρ', d: 'Για σώματα ασφαλείας και συλλόγους.' },
        { t: 'Ιστοί & εξαρτήματα', d: 'Κοντάρια, σφαίρες, σταυροί και βάσεις.' },
      ],
    },
    process: {
      kicker: 'ΠΩΣ ΔΟΥΛΕΥΟΥΜΕ',
      title: 'Από την ιδέα στη σημαία σε 3 βήματα',
      steps: [
        { n: '01', t: 'Στείλτε το σχέδιο', d: 'Λογότυπο, χρώματα και διαστάσεις. Σας συμβουλεύουμε δωρεάν.' },
        { n: '02', t: 'Λάβετε δωρεάν προσφορά', d: 'Με τιμή και χρόνο παράδοσης, πριν δεσμευτείτε.' },
        { n: '03', t: 'Παραλάβετε', d: 'Χειροποίητη κατασκευή στη Λευκωσία, με αποστολή παγκύπρια.' },
      ],
    },
    about: {
      kicker: 'Η ΕΤΑΙΡΕΙΑ',
      title: 'Οικογενειακή βιοτεχνία στη Λευκωσία από το 1938',
      p1: 'Η βιοτεχνία μας ιδρύθηκε το 1938 από τον Χαραλάμπο Ρωσσίδη και συνεχίζεται σήμερα από τον Νίκο και τον Μιχάλη Ρωσσίδη - με την ίδια προσήλωση στη χειροποίητη ποιότητα.',
      p2: 'Παράγουμε τοπικά και αναλαμβάνουμε παραγγελίες κάθε ποσότητας, για συλλόγους, σχολεία, εκκλησίες, δήμους και επιχειρήσεις σε όλη την Κύπρο.',
      imgAlt: 'Το εργαστήριο στη Λευκωσία',
      stats: [
        { v: '87', l: 'χρόνια εμπειρίας' },
        { v: '100%', l: 'χειροποίητα στην Κύπρο' },
        { flag: true, l: 'αποστολή παγκύπρια' },
      ],
    },
    quote: {
      kicker: 'ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ',
      title: 'Μία κλήση αρκεί για δωρεάν προσφορά',
      sub: 'Πείτε μας τι χρειάζεστε - σχέδιο, διαστάσεις, ποσότητα - και θα σας δώσουμε τιμή και χρόνο παράδοσης στο τηλέφωνο, χωρίς ελάχιστη ποσότητα.',
      shopLabel: 'ΚΑΤΑΣΤΗΜΑ',
      factoryLabel: 'ΕΡΓΟΣΤΑΣΙΟ',
      callAction: 'Καλέστε τώρα',
      hint: 'Έχετε πρόχειρα: διαστάσεις, ποσότητα και - αν υπάρχει - το λογότυπό σας.',
    },
    faq: {
      kicker: 'ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ',
      title: 'Ό,τι θέλετε να ρωτήσετε',
      items: [
        {
          q: 'Υπάρχει ελάχιστη ποσότητα παραγγελίας;',
          a: 'Όχι. Κατασκευάζουμε από ένα μοναδικό τεμάχιο μέχρι μεγάλες ποσότητες, πάντα στην ίδια χειροποίητη ποιότητα.',
        },
        {
          q: 'Πόσος χρόνος χρειάζεται για μια παραγγελία;',
          a: 'Εξαρτάται από το προϊόν και την ποσότητα. Με την προσφορά θα σας δώσουμε συγκεκριμένο χρόνο παράδοσης, πριν δεσμευτείτε.',
        },
        {
          q: 'Σε ποιες διαστάσεις και υλικά φτιάχνετε σημαίες;',
          a: 'Σε οποιαδήποτε διάσταση χρειάζεστε. Οι σημαίες τυπώνονται ψηφιακά σε ύφασμα πολυεστέρα, ενώ τα λάβαρα κατασκευάζονται από βελούδο.',
        },
        {
          q: 'Τι αρχείο χρειάζεστε για σημαία με λογότυπο;',
          a: 'Ιδανικά διανυσματικό αρχείο (EPS, PDF, SVG) ή εικόνα υψηλής ανάλυσης (PNG). Αν έχετε μόνο μια απλή φωτογραφία του σχεδίου, καλέστε μας για να σας συμβουλεύσουμε.',
        },
        {
          q: 'Πού παραδίδετε;',
          a: 'Παραδίδουμε παραγγελίες σε όλη την Κύπρο.',
        },
        {
          q: 'Φτιάχνετε εκκλησιαστικά λάβαρα και λάβαρα παρελάσεων;',
          a: 'Ναι, είναι από τις ειδικότητές μας. Χειροποίητα βελούδινα λάβαρα με κέντημα, ολοκληρωμένα με ιστό, σταυρό ή σφαίρα.',
        },
        {
          q: 'Πώς θα πάρω προσφορά;',
          a: 'Με ένα τηλεφώνημα στο 22 764662 (κατάστημα) ή στο 22 432481 (εργοστάσιο). Πείτε μας τι χρειάζεστε και θα σας δώσουμε τιμή και χρόνο παράδοσης.',
        },
      ],
    },
    locations: {
      title: 'Επισκεφθείτε μας στη Λευκωσία',
      shop: 'ΚΑΤΑΣΤΗΜΑ',
      factory: 'ΕΡΓΟΣΤΑΣΙΟ',
      country: 'Κύπρος',
      map: 'Χάρτης ↗',
    },
    footer: {
      company: 'Χαρ. Ρωσσίδης ΛΤΔ',
      tagline: 'Made in Cyprus since 1938',
    },
  },
  en: {
    meta: {
      title: 'Char. Rossides LTD - Flags, Banners & Embroidery in Cyprus since 1938',
      description:
        'Handmade national and custom flags, parade banners and embroidery in Nicosia, Cyprus. Any size, no minimum order. Request a free quote.',
    },
    nav: {
      products: 'Products',
      process: 'How we work',
      about: 'The company',
      contact: 'Contact',
      cta: 'Request a quote',
    },
    hero: {
      badge: '★ Handmade in Cyprus since 1938',
      title: 'Find your flag - or create your own.',
      sub: 'National and custom flags, banners and embroidery. Any size, no minimum order.',
      pills: ['National flags', 'Logo flags', 'Parade banners', 'Embroidery', 'Sports'],
      ctaCall: '☎ Call us: 22 764662',
      ctaProducts: 'See our products',
      cardTitle: 'DIGITAL PRINTING',
      cardSub: 'Country flags or your logo, printed on fabric.',
      imgAlt: 'Digital printing of a flag on polyester',
    },
    trust: {
      label: 'Trusted by:',
      items: ['Sports clubs', 'Schools', 'Churches', 'Municipalities', 'Businesses'],
    },
    products: {
      kicker: 'OUR PRODUCTS',
      title: 'Choose a category',
      all: 'All products →',
      categories: [
        { title: 'National flags', sub: 'Εθνικές σημαίες', desc: 'Every country, any size you need.' },
        { title: 'Custom logo flags', sub: 'Σημαίες με λογότυπο', desc: 'Digital printing of your design.' },
        { title: 'Parade banners', sub: 'Λάβαρα παρελάσεων', desc: 'Velvet, pole, cross or sphere finial.' },
        { title: 'Embroidery & badges', sub: 'Κεντήματα', desc: 'Clubs, army, police insignia.' },
      ],
      moreTitle: 'Also made to order',
      moreSub: "Don't see what you need? We make it from scratch.",
      more: [
        { t: 'Table flags', d: 'With base and pole, for offices and conferences.' },
        { t: 'Bunting & string flags', d: 'Flag garlands for festivals and celebrations.' },
        { t: 'Sports flags', d: "Your club's colours and emblem." },
        { t: 'Church banners', d: 'Embroidered by hand, shield-shaped.' },
        { t: 'Kepis & military accessories', d: 'For security forces and associations.' },
        { t: 'Poles & fittings', d: 'Poles, spheres, crosses and bases.' },
      ],
    },
    process: {
      kicker: 'HOW WE WORK',
      title: 'From idea to flag in 3 steps',
      steps: [
        { n: '01', t: 'Send us your design', d: 'Logo, colours and dimensions. Free advice included.' },
        { n: '02', t: 'Get a free quote', d: 'Price and delivery time, before you commit.' },
        { n: '03', t: 'Receive your order', d: 'Handmade in Nicosia, delivered across Cyprus.' },
      ],
    },
    about: {
      kicker: 'THE COMPANY',
      title: 'A family workshop in Nicosia since 1938',
      p1: 'Our workshop was founded in 1938 by Charalambos Rossides and continues today under Nicos and Michalis Rossides - with the same devotion to handmade quality.',
      p2: 'We produce locally and take orders of any quantity, for clubs, schools, churches, municipalities and businesses across Cyprus.',
      imgAlt: 'The workshop in Nicosia',
      stats: [
        { v: '87', l: 'years of experience' },
        { v: '100%', l: 'handmade in Cyprus' },
        { flag: true, l: 'island-wide delivery' },
      ],
    },
    quote: {
      kicker: 'REQUEST A QUOTE',
      title: 'One call is all it takes for a free quote',
      sub: "Tell us what you need - design, dimensions, quantity - and we'll give you a price and delivery time over the phone, no minimum order.",
      shopLabel: 'SHOP',
      factoryLabel: 'FACTORY',
      callAction: 'Call now',
      hint: 'Have ready: dimensions, quantity and - if you have one - your logo.',
    },
    faq: {
      kicker: 'FAQ',
      title: 'Anything you want to ask',
      items: [
        {
          q: 'Is there a minimum order quantity?',
          a: 'No. We make anything from a single piece to large quantities, always to the same handmade standard.',
        },
        {
          q: 'How long does an order take?',
          a: "It depends on the product and quantity. Your quote includes a specific delivery time, before you commit.",
        },
        {
          q: 'What sizes and materials do you work with?',
          a: 'Any size you need. Flags are digitally printed on polyester fabric, while banners are made of velvet.',
        },
        {
          q: 'What file do you need for a logo flag?',
          a: 'Ideally a vector file (EPS, PDF, SVG) or a high-resolution image (PNG). If all you have is a simple photo of the design, call us and we will advise you.',
        },
        {
          q: 'Where do you deliver?',
          a: 'We deliver orders anywhere in Cyprus.',
        },
        {
          q: 'Do you make church and parade banners?',
          a: 'Yes, they are one of our specialties. Handmade velvet banners with embroidery, finished with a pole, cross or sphere finial.',
        },
        {
          q: 'How do I get a quote?',
          a: "With one phone call to +357 22 764662 (shop) or +357 22 432481 (factory). Tell us what you need and we'll give you a price and delivery time.",
        },
      ],
    },
    locations: {
      title: 'Visit us in Nicosia',
      shop: 'SHOP',
      factory: 'FACTORY',
      country: 'Cyprus',
      map: 'Map ↗',
    },
    footer: {
      company: 'Charalambos Rossides LTD',
      tagline: 'Made in Cyprus since 1938',
    },
  },
} as const;
