import type { Lang } from './ui';

export interface CategoryContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  specsTitle: string;
  specs: string[];
}

export interface Category {
  key: 'national' | 'logo' | 'parade' | 'embroidery';
  slug: { el: string; en: string };
  content: { el: CategoryContent; en: CategoryContent };
}

export function categoryPath(c: Category, lang: Lang): string {
  return lang === 'el' ? `/proionta/${c.slug.el}/` : `/en/products/${c.slug.en}/`;
}

export const categories: Category[] = [
  {
    key: 'national',
    slug: { el: 'ethnikes-simaies', en: 'national-flags' },
    content: {
      el: {
        title: 'Εθνικές σημαίες',
        metaTitle: 'Εθνικές σημαίες όλων των χωρών - Χαρ. Ρωσσίδης ΛΤΔ, Λευκωσία',
        metaDescription:
          'Εθνικές σημαίες όλων των χωρών, σε κάθε διάσταση, με ψηφιακή εκτύπωση σε πολυέστερ. Κατασκευή στη Λευκωσία από το 1938, χωρίς ελάχιστη ποσότητα.',
        intro: [
          'Κατασκευάζουμε σημαίες όλων των χωρών του κόσμου - από την Κύπρο και την Ελλάδα μέχρι όποια χώρα χρειάζεστε - σε οποιαδήποτε διάσταση, με ψηφιακή εκτύπωση σε ύφασμα πολυεστέρα.',
          'Είτε χρειάζεστε μία σημαία για έναν ιστό είτε μεγαλύτερες ποσότητες για σημαιοστολισμό, η κατασκευή γίνεται στο εργοστάσιό μας στη Λευκωσία, με την ίδια φροντίδα από το 1938.',
          'Οι σημαίες μας κυματίζουν σε σχολεία, εκκλησίες, δήμους, ξενοδοχεία, αθλητικούς συλλόγους και επιχειρήσεις σε όλη την Κύπρο.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Όλες οι χώρες, σε κάθε διάσταση',
          'Ψηφιακή εκτύπωση σε ύφασμα πολυεστέρα',
          'Από ένα τεμάχιο - χωρίς ελάχιστη ποσότητα',
          'Παράδοση σε όλη την Κύπρο',
        ],
      },
      en: {
        title: 'National flags',
        metaTitle: 'National flags of every country - Char. Rossides LTD, Nicosia',
        metaDescription:
          'National flags of every country, in any size, digitally printed on polyester. Made in Nicosia since 1938, no minimum order.',
        intro: [
          'We make flags of every country in the world - from Cyprus and Greece to any country you need - in any size, digitally printed on polyester fabric.',
          'Whether you need a single flag for one pole or larger quantities for street decoration, everything is made at our factory in Nicosia with the same care since 1938.',
          'Our flags fly at schools, churches, municipalities, hotels, sports clubs and businesses across Cyprus.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Every country, any size',
          'Digital printing on polyester fabric',
          'From a single piece - no minimum order',
          'Delivery across Cyprus',
        ],
      },
    },
  },
  {
    key: 'logo',
    slug: { el: 'simaies-me-logotypo', en: 'custom-logo-flags' },
    content: {
      el: {
        title: 'Σημαίες με λογότυπο',
        metaTitle: 'Σημαίες με λογότυπο - ψηφιακή εκτύπωση - Χαρ. Ρωσσίδης ΛΤΔ',
        metaDescription:
          'Σημαίες με το λογότυπο ή το σχέδιό σας, τυπωμένες ψηφιακά σε ύφασμα, σε κάθε διάσταση. Χωρίς ελάχιστη ποσότητα. Κατασκευή στη Λευκωσία.',
        intro: [
          'Στείλτε μας το λογότυπο ή το σχέδιό σας και θα το τυπώσουμε ψηφιακά σε ύφασμα, σε όποια διάσταση χρειάζεστε.',
          'Ιδανικές για επιχειρήσεις, ξενοδοχεία, αθλητικούς συλλόγους, σωματεία και εκδηλώσεις - από μία σημαία μέχρι ολόκληρη σειρά.',
          'Για το καλύτερο αποτέλεσμα προτιμήστε διανυσματικό αρχείο (EPS, PDF, SVG) ή εικόνα υψηλής ανάλυσης (PNG). Δεν είστε σίγουροι για το αρχείο σας; Καλέστε μας για να σας συμβουλεύσουμε.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Εκτύπωση του δικού σας σχεδίου ή λογοτύπου',
          'Αρχεία: EPS, PDF, SVG ή PNG υψηλής ανάλυσης',
          'Κάθε διάσταση, χωρίς ελάχιστη ποσότητα',
          'Συμβουλές για το αρχείο σας στο τηλέφωνο',
        ],
      },
      en: {
        title: 'Custom logo flags',
        metaTitle: 'Custom logo flags - digital printing - Char. Rossides LTD',
        metaDescription:
          'Flags with your logo or design, digitally printed on fabric in any size. No minimum order. Made in Nicosia, Cyprus.',
        intro: [
          'Send us your logo or design and we will print it digitally on fabric, in whatever size you need.',
          'Ideal for businesses, hotels, sports clubs, associations and events - from a single flag to a whole series.',
          "For the best result, provide a vector file (EPS, PDF, SVG) or a high-resolution image (PNG). Not sure about your file? Call us and we'll advise you.",
        ],
        specsTitle: 'At a glance',
        specs: [
          'Printing of your own design or logo',
          'Files: EPS, PDF, SVG or high-resolution PNG',
          'Any size, no minimum order',
          'File advice over the phone',
        ],
      },
    },
  },
  {
    key: 'parade',
    slug: { el: 'lavara-parelaseon', en: 'parade-banners' },
    content: {
      el: {
        title: 'Λάβαρα παρελάσεων',
        metaTitle: 'Λάβαρα παρελάσεων & εκκλησιαστικά λάβαρα - Χαρ. Ρωσσίδης ΛΤΔ',
        metaDescription:
          'Χειροποίητα βελούδινα λάβαρα για σχολεία, συλλόγους και εκκλησίες, με ιστό και σταυρό ή σφαίρα. Κατασκευή κατά παραγγελία στη Λευκωσία.',
        intro: [
          'Χειροποίητα βελούδινα λάβαρα για σχολεία, συλλόγους, σωματεία και εκκλησίες, κατασκευασμένα ένα-ένα στο εργαστήριό μας στη Λευκωσία.',
          'Κάθε λάβαρο γίνεται κατά παραγγελία, με το δικό σας έμβλημα και τα δικά σας χρώματα, και ολοκληρώνεται με ιστό και σταυρό ή σφαίρα.',
          'Αναλαμβάνουμε επίσης εκκλησιαστικά λάβαρα και λάβαρα για πολιτιστικούς ομίλους και παρελάσεις.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Χειροποίητη κατασκευή από βελούδο',
          'Με το έμβλημα και τα χρώματά σας',
          'Ιστός με σταυρό ή σφαίρα',
          'Για σχολεία, συλλόγους, εκκλησίες',
        ],
      },
      en: {
        title: 'Parade banners',
        metaTitle: 'Parade & church banners, handmade velvet - Char. Rossides LTD',
        metaDescription:
          'Handmade velvet banners for schools, clubs and churches, finished with a pole and cross or sphere. Made to order in Nicosia, Cyprus.',
        intro: [
          'Handmade velvet banners for schools, clubs, associations and churches, made one by one at our workshop in Nicosia.',
          'Every banner is made to order with your emblem and your colours, and finished with a pole and a cross or sphere finial.',
          'We also make church banners and banners for cultural societies and parades.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Handmade from velvet',
          'With your emblem and colours',
          'Pole with cross or sphere finial',
          'For schools, clubs and churches',
        ],
      },
    },
  },
  {
    key: 'embroidery',
    slug: { el: 'kentimata-diakritika', en: 'embroidery-badges' },
    content: {
      el: {
        title: 'Κεντήματα & διακριτικά',
        metaTitle: 'Κεντήματα, διακριτικά & εμβλήματα - Χαρ. Ρωσσίδης ΛΤΔ',
        metaDescription:
          'Κεντητά διακριτικά, εμβλήματα και σήματα για συλλόγους, στρατό και αστυνομία. Επίσης πηλήκια και στρατιωτικά αξεσουάρ. Κατασκευή στη Λευκωσία.',
        intro: [
          'Κεντάμε διακριτικά, εμβλήματα και σήματα για στολές και συλλόγους - από αθλητικά σωματεία μέχρι σώματα ασφαλείας.',
          'Η παραγωγή γίνεται στο εργοστάσιό μας στο Καϊμακλί, για μικρές και μεγάλες ποσότητες, με βάση το δικό σας σχέδιο.',
          'Κατασκευάζουμε επίσης πηλήκια και στρατιωτικά αξεσουάρ κατά παραγγελία.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Κεντητά διακριτικά και εμβλήματα',
          'Για συλλόγους, στρατό, αστυνομία',
          'Πηλήκια και στρατιωτικά αξεσουάρ',
          'Μικρές και μεγάλες ποσότητες',
        ],
      },
      en: {
        title: 'Embroidery & badges',
        metaTitle: 'Embroidered badges & insignia - Char. Rossides LTD, Nicosia',
        metaDescription:
          'Embroidered badges, emblems and insignia for clubs, army and police. Also kepis and military accessories. Made in Nicosia, Cyprus.',
        intro: [
          'We embroider badges, emblems and insignia for uniforms and clubs - from sports associations to the security forces.',
          'Production takes place at our factory in Kaimakli, for small and large quantities, based on your design.',
          'We also make kepis and military accessories to order.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Embroidered badges and emblems',
          'For clubs, army and police',
          'Kepis and military accessories',
          'Small and large quantities',
        ],
      },
    },
  },
];
