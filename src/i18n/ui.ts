export type Lang = 'el' | 'en';

/** Dialling prefix. Used for tel: links and structured data only, never displayed. */
const COUNTRY_CODE = '+357';

export const site = {
  domain: 'https://www.chrossides.com',
  phoneShop: '22 764662',
  phoneFactory: '22 432481',
  phoneFactory2: '22 347982',
  contactPerson: { el: 'Ελένη Ρωσσίδου', en: 'Eleni Rossidou' },
  factoryPersons: { el: 'Μιχάλης & Νίκος Ρωσσίδης', en: 'Michalis & Nicos Rossides' },
  mapShop: 'https://maps.app.goo.gl/9boKTNLgHSPWGbFd7',
  mapFactory: 'https://maps.app.goo.gl/6h57PwGUxxAqyt8V8',
  geoShop: { lat: 35.1684522, lng: 33.3695678 },
  geoFactory: { lat: 35.182648, lng: 33.379283 },
  sameAs: [
    'https://www.facebook.com/profile.php?id=100052710947198',
    'https://www.instagram.com/chrossides_ltd/',
    'https://maps.app.goo.gl/qAVz1GjbH3xVna6X6',
    'https://maps.app.goo.gl/Yv9PHi2cpyBMbLbt8',
    'https://www.tradekey.com/company/Charalambos-Rossides-Ltd-714536.html',
    'https://www.cyprusmanufacturers.com/listings/name/charalambos-rossides',
    'https://www.oncyprus.com/charalambos_rossides',
  ],
  addressShop: {
    street: 'Πινδάρου 5Β',
    streetEn: 'Pindarou 5B',
    postal: '1060',
    city: { el: 'Λευκωσία', en: 'Nicosia' },
    // Locality line worded to match the Google Maps listing, for NAP consistency.
    cityLine: { el: 'Λευκωσία 1060, Κύπρος', en: 'Nicosia, Lefkosia 1060, Cyprus' },
  },
  addressFactory: {
    street: 'Νικολάου Ιωάννου 3, Καϊμακλί',
    streetEn: 'Nikolaou Ioannou 3, Kaimakli',
    postal: '1036',
    city: { el: 'Λευκωσία', en: 'Nicosia' },
    cityLine: { el: 'Λευκωσία 1036, Κύπρος', en: 'Nicosia, Lefkosia 1036, Cyprus' },
  },
};

/** Full international form - for tel: links and structured data, not for display. */
export function telIntl(phone: string): string {
  return `${COUNTRY_CODE} ${phone}`;
}

export function telHref(phone: string): string {
  return `tel:${COUNTRY_CODE}${phone.replace(/ /g, '')}`;
}

export const ui = {
  el: {
    meta: {
      title: 'Σημαίες, Λάβαρα & Κεντήματα Λευκωσία | Χαρ. Ρωσσίδης ΛΤΔ',
      description:
        'Χειροποίητες εθνικές και προσωποποιημένες σημαίες, λάβαρα παρελάσεων και κεντήματα στη Λευκωσία από το 1938. Κάθε διάσταση, χωρίς ελάχιστη ποσότητα.',
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
        { t: 'Λάβαρα σχολείων', d: 'Με το έμβλημα και το όνομα του σχολείου.', key: 'school' },
        { t: 'Επισκευή λαβάρων', d: 'Κρόσσια, φούντες, κεντήματα, ιστός.', key: 'repairs' },
        { t: 'Επιτραπέζιες σημαίες', d: 'Με βάση και ιστό, για γραφεία και συνέδρια.', key: 'table' },
        { t: 'Σημαιοστολισμός', d: 'Σειρές σημαιάκια για γιορτές και πανηγύρια.', key: 'bunting' },
        { t: 'Αθλητικές σημαίες', d: 'Χρώματα και έμβλημα του συλλόγου σας.', key: 'logo' },
        { t: 'Εκκλησιαστικά λάβαρα', d: 'Χειροποίητα, με κέντημα σε χρυσή κλωστή.', key: 'church' },
        { t: 'Ιστοί & εξαρτήματα', d: 'Κοντάρια, σφαίρες, σταυροί και τελαμώνες.', key: 'poles' },
        { t: 'Οδηγός διαστάσεων', d: 'Όλες οι διαστάσεις σε έναν πίνακα.', key: 'sizes' },
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
          a: 'Τις εθνικές σημαίες στις σταθερές διαστάσεις τις κρατάμε σε απόθεμα, οπότε συνήθως παραλαμβάνετε αυθημερόν. Οι σημαίες με λογότυπο θέλουν έως 10 ημέρες σε μικρές ποσότητες, ενώ τα κεντητά λάβαρα και τα διακριτικά με δικό σας σχέδιο 15 ημέρες.',
        },
        {
          q: 'Έχετε σημαίες έτοιμες για άμεση παραλαβή;',
          a: 'Ναι. Κρατάμε σε απόθεμα τις σταθερές διαστάσεις, από 60 × 40 έως 500 × 300 εκατοστά. Αν κάτι έχει εξαντληθεί προσωρινά, το ετοιμάζουμε σε ένα με πέντε εργάσιμες ημέρες.',
        },
        {
          q: 'Σε ποιες διαστάσεις και υλικά φτιάχνετε σημαίες;',
          a: 'Σε οποιαδήποτε διάσταση χρειάζεστε. Οι σημαίες τυπώνονται ψηφιακά σε ύφασμα 100% πολυεστέρα, με ενισχυμένο στρίφωμα και διπλή ραφή. Τα λάβαρα κατασκευάζονται από βελούδο, με κεντητά γράμματα και ιστό αλουμινίου.',
        },
        {
          q: 'Τι αρχείο χρειάζεστε για σημαία με λογότυπο;',
          a: 'Ιδανικά διανυσματικό αρχείο (EPS, PDF, SVG) ή εικόνα υψηλής ανάλυσης (PNG). Αν έχετε μόνο μια απλή φωτογραφία του σχεδίου, καλέστε μας για να σας συμβουλεύσουμε.',
        },
        {
          q: 'Πού παραδίδετε;',
          a: 'Σε όλη την Κύπρο, με κούριερ. Για παραγγελίες άνω των €150 δεν υπάρχει χρέωση αποστολής. Μπορείτε επίσης να παραλάβετε από το κατάστημα στην Πινδάρου ή από το εργοστάσιο στο Καϊμακλί.',
        },
        {
          q: 'Φτιάχνετε εκκλησιαστικά λάβαρα και λάβαρα παρελάσεων;',
          a: 'Ναι, είναι από τις ειδικότητές μας. Χειροποίητα βελούδινα λάβαρα, ολοκληρωμένα με ιστό αλουμινίου, σταυρό ή σφαίρα και δερμάτινο τελαμώνα. Επισκευάζουμε επίσης παλιά λάβαρα.',
        },
        {
          q: 'Πόσο νωρίς πρέπει να παραγγείλουμε για παρέλαση;',
          a: 'Δώστε μας τρεις εβδομάδες περιθώριο πριν από την 25η Μαρτίου ή την 28η Οκτωβρίου. Εκείνες τις περιόδους η ζήτηση είναι μεγάλη και θέλουμε να προλάβουμε άνετα.',
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
      productsLabel: 'Προϊόντα & υπηρεσίες',
    },
  },
  en: {
    meta: {
      title: 'Flags, Banners & Embroidery Cyprus | Char. Rossides LTD',
      description:
        'Handmade national and custom flags, parade banners and embroidery in Nicosia, Cyprus since 1938. Any size, no minimum order. Call us for a quote.',
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
        { t: 'School banners', d: 'With your school emblem and name.', key: 'school' },
        { t: 'Banner repairs', d: 'Fringing, tassels, embroidery, poles.', key: 'repairs' },
        { t: 'Table flags', d: 'With base and pole, for offices and conferences.', key: 'table' },
        { t: 'Bunting & string flags', d: 'Flag garlands for festivals and celebrations.', key: 'bunting' },
        { t: 'Sports flags', d: "Your club's colours and emblem.", key: 'logo' },
        { t: 'Church banners', d: 'Handmade, embroidered in gold thread.', key: 'church' },
        { t: 'Poles & fittings', d: 'Poles, spheres, crosses and harnesses.', key: 'poles' },
        { t: 'Size guide', d: 'Every size we make, in one table.', key: 'sizes' },
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
          a: 'National flags in our standard sizes are held in stock, so you can usually collect the same day. Logo flags take up to 10 days in small quantities, while embroidered banners and badges to your own design take 15 days.',
        },
        {
          q: 'Do you have flags ready for immediate collection?',
          a: 'Yes. We keep our standard sizes in stock, from 60 × 40 up to 500 × 300 centimetres. If something is temporarily out, we make it in one to five working days.',
        },
        {
          q: 'What sizes and materials do you work with?',
          a: 'Any size you need. Flags are digitally printed on 100% polyester with a reinforced, double-stitched hem. Banners are made of velvet, with embroidered lettering and an aluminium pole.',
        },
        {
          q: 'What file do you need for a logo flag?',
          a: 'Ideally a vector file (EPS, PDF, SVG) or a high-resolution image (PNG). If all you have is a simple photo of the design, call us and we will advise you.',
        },
        {
          q: 'Where do you deliver?',
          a: 'Anywhere in Cyprus, by courier. There is no delivery charge on orders over €150. You can also collect from the shop on Pindarou or the factory in Kaimakli.',
        },
        {
          q: 'Do you make church and parade banners?',
          a: 'Yes, they are one of our specialties. Handmade velvet banners, finished with an aluminium pole, cross or sphere finial and a leather carrying harness. We also repair old banners.',
        },
        {
          q: 'How early should we order for a parade?',
          a: 'Allow us three weeks before 25 March or 28 October. Demand in those periods is heavy and we want comfortable margin.',
        },
        {
          q: 'How do I get a quote?',
          a: "With one phone call to 22 764662 (shop) or 22 432481 (factory). Tell us what you need and we'll give you a price and delivery time.",
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
      productsLabel: 'Products & services',
    },
  },
} as const;
