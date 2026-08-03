import type { Lang } from './ui';

/**
 * Product facts below come from docs/PRODUCT-SPECS.md (owner-confirmed 2 August 2026).
 * Do not add specifications that are not in that document, and note its standing rules:
 * no prices anywhere, no mention of rush orders, sizes always written width x height.
 */

export interface SpecTable {
  columns: string[];
  rows: string[][];
}

export interface Section {
  heading: string;
  body?: string[];
  table?: SpecTable;
  bullets?: string[];
  footnote?: string;
}

export interface QA {
  q: string;
  a: string;
}

export interface CategoryContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  specsTitle: string;
  specs: string[];
  sections: Section[];
  faqTitle: string;
  faq: QA[];
  /** Heading for the auto-generated links to the other three categories. */
  relatedTitle: string;
}

export type CategoryKey =
  | 'national'
  | 'logo'
  | 'parade'
  | 'embroidery'
  | 'repairs'
  | 'parades'
  | 'school'
  | 'table'
  | 'poles'
  | 'bunting'
  | 'sizes'
  | 'military';

export interface Category {
  key: CategoryKey;
  slug: { el: string; en: string };
  /** The four tiles on the homepage grid. Order here must match ui.products.categories. */
  featured?: boolean;
  /** Explicit cross-links, chosen editorially rather than linking to everything. */
  related: CategoryKey[];
  content: { el: CategoryContent; en: CategoryContent };
}

export function categoryPath(c: Category, lang: Lang): string {
  return lang === 'el' ? `/proionta/${c.slug.el}/` : `/en/products/${c.slug.en}/`;
}

export function byKey(key: CategoryKey): Category {
  const found = categories.find((c) => c.key === key);
  if (!found) throw new Error(`Unknown category key: ${key}`);
  return found;
}

/** The four homepage tiles, in the order the homepage copy expects. */
export function featuredCategories(): Category[] {
  return categories.filter((c) => c.featured);
}

export const categories: Category[] = [
  {
    key: 'national',
    slug: { el: 'ethnikes-simaies', en: 'national-flags' },
    featured: true,
    related: ['logo', 'table', 'bunting', 'sizes'],
    content: {
      el: {
        title: 'Εθνικές σημαίες',
        metaTitle: 'Εθνικές σημαίες όλων των χωρών - Χαρ. Ρωσσίδης ΛΤΔ, Λευκωσία',
        metaDescription:
          'Εθνικές σημαίες όλων των χωρών σε οκτώ σταθερές διαστάσεις, από απόθεμα για άμεση παραλαβή. Κατασκευή στη Λευκωσία από το 1938, χωρίς ελάχιστη ποσότητα.',
        intro: [
          'Κατασκευάζουμε σημαίες όλων των χωρών του κόσμου - από την Κύπρο και την Ελλάδα μέχρι όποια χώρα χρειάζεστε - σε οκτώ σταθερές διαστάσεις ή σε οποιαδήποτε διάσταση κατά παραγγελία.',
          'Τις σταθερές διαστάσεις τις κρατάμε σε απόθεμα, οπότε στις περισσότερες περιπτώσεις μπορείτε να περάσετε και να παραλάβετε τη σημαία σας την ίδια μέρα. Αν κάτι λείπει προσωρινά, το ετοιμάζουμε σε μία με πέντε εργάσιμες ημέρες.',
          'Οι σημαίες μας κυματίζουν σε σχολεία, εκκλησίες, δήμους, ξενοδοχεία, αθλητικούς συλλόγους και επιχειρήσεις σε όλη την Κύπρο. Η κατασκευή γίνεται στο εργοστάσιό μας στο Καϊμακλί, με την ίδια φροντίδα από το 1938.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Όλες οι χώρες, οκτώ σταθερές διαστάσεις ή κατά παραγγελία',
          'Από απόθεμα - συνήθως άμεση παραλαβή',
          'Ψηφιακή εκτύπωση σε 100% πολυέστερ',
          'Από ένα τεμάχιο - χωρίς ελάχιστη ποσότητα',
        ],
        sections: [
          {
            heading: 'Διαστάσεις',
            body: [
              'Οι διαστάσεις δίνονται σε εκατοστά, πλάτος × ύψος. Αυτές είναι οι σταθερές μας διαστάσεις και τις κρατάμε σε απόθεμα.',
            ],
            table: {
              columns: ['Διάσταση (Π × Υ)', 'Πού χρησιμοποιείται συνήθως'],
              rows: [
                ['60 × 40 εκ.', 'Μικροί ιστοί, διακόσμηση εσωτερικού χώρου'],
                ['100 × 60 εκ.', 'Μπαλκόνι, πρόσοψη καταστήματος'],
                ['120 × 70 εκ.', 'Μπαλκόνι, μικρός ιστός'],
                ['150 × 90 εκ.', 'Η πιο συνηθισμένη επιλογή για ιστό σχολείου ή σπιτιού'],
                ['180 × 110 εκ.', 'Ψηλότεροι ιστοί, δημόσια κτίρια'],
                ['240 × 150 εκ.', 'Δήμοι, ξενοδοχεία, μεγάλοι ιστοί'],
                ['300 × 180 εκ.', 'Μεγάλοι ιστοί και εγκαταστάσεις'],
                ['5 × 3 μ.', 'Πολύ μεγάλοι ιστοί και προσόψεις κτιρίων'],
              ],
            },
            footnote:
              'Χρειάζεστε κάτι διαφορετικό; Κατασκευάζουμε οποιαδήποτε διάσταση κατά παραγγελία - πείτε μας τι θέλετε στο τηλέφωνο.',
          },
          {
            heading: 'Ύφασμα, εκτύπωση και ραφή',
            body: [
              'Τυπώνουμε ψηφιακά σε ύφασμα 100% πολυεστέρα. Η εκτύπωση γίνεται στη μία όψη και το σχέδιο φαίνεται και από την πίσω πλευρά.',
            ],
            bullets: [
              'Ύφασμα 100% πολυεστέρα, ψηφιακή εκτύπωση',
              'Ενισχυμένο στρίφωμα με διπλή ραφή, για αντοχή στον αέρα',
              'Τελείωμα με θήκη από πολυέστερ',
              'Χωρίς μεταλλικούς κρίκους, ώστε να μην υπάρχει σκουριά',
              'Προαιρετικά κρόσσια',
            ],
          },
          {
            heading: 'Ραμμένη ελληνική σημαία',
            body: [
              'Πέρα από την τυπωμένη σημαία, η ελληνική σημαία διατίθεται και σε ραμμένη μορφή. Οι λωρίδες κόβονται και ράβονται μία-μία σε ύφασμα πολυεστέρα.',
              'Είναι η επιλογή για όποιον θέλει μια σημαία που θα μείνει σε εξωτερικό ιστό για χρόνια - σε σχολείο, εκκλησία ή δημόσιο κτίριο.',
            ],
          },
          {
            heading: 'Απόθεμα και χρόνος παράδοσης',
            body: [
              'Οι σταθερές διαστάσεις είναι διαθέσιμες ανά πάσα στιγμή από το απόθεμά μας. Αν η διάσταση που θέλετε έχει εξαντληθεί προσωρινά, την ετοιμάζουμε σε μία με πέντε εργάσιμες ημέρες.',
              'Για σημαίες σε ειδική διάσταση ή με δικό σας σχέδιο, δείτε τις [[logo|σημαίες με λογότυπο]].',
            ],
          },
          {
            heading: 'Επιτραπέζιες σημαίες, σημαίες χειρός και σημαιάκια',
            body: ['Κατασκευάζουμε και τα μικρά μεγέθη, στις ίδιες σημαίες χωρών.'],
            table: {
              columns: ['Προϊόν', 'Διαστάσεις'],
              rows: [
                ['Επιτραπέζια σημαία', '24 × 16 εκ., ύψος 33 εκ. σε μεταλλική ασημί βάση διαμέτρου 6 εκ.'],
                ['Σημαία χειρός', '30 × 20 εκ.'],
                ['Σημαιάκια για σημαιοστολισμό', '30 × 20 εκ., συνήθως τρία ανά μέτρο'],
              ],
            },
            footnote:
              'Τα σημαιάκια γίνονται σε όποιον συνδυασμό χωρών θέλετε, ή με δικό σας σχέδιο. Για σημαιοστολισμό προμηθεύουμε τα υλικά - η τοποθέτηση γίνεται από εσάς.',
          },
          {
            heading: 'Πολύ μεγάλες σημαίες',
            body: [
              'Η μεγαλύτερη σημαία που έχουμε κατασκευάσει ήταν **58 × 27 μέτρα** - περίπου **1.566 τετραγωνικά μέτρα** υφάσματος. Την παρήγγειλε οπαδός του ΑΠΟΕΛ.',
              'Χρειάστηκαν δεκαπέντε ρολά υφάσματος και τρεις ολόκληρες ημέρες δουλειάς. Για να καταλάβετε την κλίμακα: με μήκος 58 μέτρων, η σημαία ήταν μεγαλύτερη από το μισό μήκος ενός γηπέδου ποδοσφαίρου.',
              'Ήταν τόσο μεγάλη που δεν μπορούσε να ξεδιπλωθεί μέσα στο εργοστάσιο. Την ανοίξαμε για πρώτη φορά σε γήπεδο ποδοσφαίρου - ήταν ο μόνος χώρος αρκετά μεγάλος ώστε να βεβαιωθούμε ότι κάθε κομμάτι είχε ραφτεί στη σωστή θέση.',
              'Οι οργανωμένοι οπαδοί του ΑΠΟΕΛ την έχουν ανοίξει σε ολόκληρο το πέταλο του ΓΣΠ, σε εθνικές επετείους. Το [[https://www.24sports.com.cy/gr/sports/podosfairo/kypros/a-katigoria/apoel/apoel-terastia-elliniki-simaia-sto-petalo-vid|24Sports κατέγραψε σε βίντεο]] μία τέτοια στιγμή.',
              'Δεν είναι δουλειά ρουτίνας και δεν την παρουσιάζουμε ως τέτοια. Τη λέμε επειδή απαντά στην ερώτηση που κάνει κάθε πελάτης με μεγάλη παραγγελία: **μπορείτε πραγματικά να το κάνετε;** Ό,τι κι αν έχετε στο μυαλό σας, πιθανότατα είναι μικρότερο από αυτό.',
              'Οι πολύ μεγάλες παραγγελίες σχεδιάζονται από την αρχή - κοπή, ραφή και έλεγχος - και θέλουν χρόνο και συνεννόηση. Πάρτε μας τηλέφωνο να το συζητήσουμε πριν κλείσετε ημερομηνία.',
            ],
          },
          {
            heading: 'Παράδοση και παραλαβή',
            bullets: [
              'Αποστολή με κούριερ σε όλη την Κύπρο',
              'Χωρίς χρέωση αποστολής για παραγγελίες άνω των €150',
              'Παραλαβή από το κατάστημα στην Πινδάρου ή από το εργοστάσιο στο Καϊμακλί',
              'Πληρωμή με μετρητά ή με κάρτα στο κατάστημα - χωρίς προκαταβολή',
            ],
          },
        ],
        faqTitle: 'Συχνές ερωτήσεις',
        faq: [
          {
            q: 'Έχετε σημαίες έτοιμες για άμεση παραλαβή;',
            a: 'Ναι. Κρατάμε σε απόθεμα τις οκτώ σταθερές διαστάσεις, οπότε συνήθως μπορείτε να περάσετε και να παραλάβετε αυθημερόν. Αν κάτι έχει εξαντληθεί προσωρινά, το ετοιμάζουμε σε μία με πέντε εργάσιμες ημέρες.',
          },
          {
            q: 'Ποια είναι η πιο συνηθισμένη διάσταση σημαίας;',
            a: 'Η 150 × 90 εκατοστά. Είναι η διάσταση που ταιριάζει στους περισσότερους ιστούς σε σχολεία και σπίτια. Για ψηλότερους ιστούς σε δημόσια κτίρια, οι πελάτες μας επιλέγουν συνήθως 180 × 110 ή 240 × 150 εκατοστά.',
          },
          {
            q: 'Οι σημαίες σας έχουν κρίκους;',
            a: 'Όχι, και είναι σκόπιμο. Οι μεταλλικοί κρίκοι σκουριάζουν και λεκιάζουν το ύφασμα. Οι σημαίες μας τελειώνονται με θήκη από πολυέστερ και ενισχυμένο στρίφωμα με διπλή ραφή.',
          },
          {
            q: 'Φαίνεται το σχέδιο και από την πίσω πλευρά;',
            a: 'Ναι. Η εκτύπωση γίνεται στη μία όψη και το σχέδιο περνάει στο ύφασμα, οπότε φαίνεται και από τις δύο πλευρές.',
          },
          {
            q: 'Μπορείτε να φτιάξετε σημαία σε διάσταση που δεν έχετε στον πίνακα;',
            a: 'Ναι, κατασκευάζουμε οποιαδήποτε διάσταση κατά παραγγελία, χωρίς ελάχιστη ποσότητα - ακόμη και για ένα μόνο τεμάχιο.',
          },
          {
            q: 'Φτιάχνετε ραμμένες σημαίες ή μόνο τυπωμένες;',
            a: 'Και τα δύο. Η ελληνική σημαία διατίθεται και σε ραμμένη μορφή σε ύφασμα πολυεστέρα.',
          },
        ],
        relatedTitle: 'Δείτε επίσης',
      },
      en: {
        title: 'National flags',
        metaTitle: 'National flags of every country - Char. Rossides LTD, Nicosia',
        metaDescription:
          'National flags of every country in eight stock sizes, usually available for same-day collection. Made in Nicosia since 1938, no minimum order.',
        intro: [
          'We make flags of every country in the world - from Cyprus and Greece to any country you need - in eight standard sizes, or any size you like to order.',
          'The standard sizes are held in stock, so in most cases you can come in and collect your flag the same day. If something is temporarily out, we make it in one to five working days.',
          'Our flags fly at schools, churches, municipalities, hotels, sports clubs and businesses across Cyprus. Everything is made at our factory in Kaimakli, with the same care since 1938.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Every country, eight stock sizes or made to order',
          'Held in stock - usually available immediately',
          'Digitally printed on 100% polyester',
          'From a single piece - no minimum order',
        ],
        sections: [
          {
            heading: 'Sizes',
            body: [
              'Sizes are given in centimetres, width × height. These are our standard sizes and we keep them in stock.',
            ],
            table: {
              columns: ['Size (W × H)', 'Typically used for'],
              rows: [
                ['60 × 40 cm', 'Small poles, indoor display'],
                ['100 × 60 cm', 'Balconies and shopfronts'],
                ['120 × 70 cm', 'Balconies, small poles'],
                ['150 × 90 cm', 'The most common choice for a school or home flagpole'],
                ['180 × 110 cm', 'Taller poles, public buildings'],
                ['240 × 150 cm', 'Municipalities, hotels, large poles'],
                ['300 × 180 cm', 'Large poles and installations'],
                ['500 × 300 cm', 'Very large poles and building façades'],
              ],
            },
            footnote:
              'Need something different? We make any size to order - tell us what you need over the phone.',
          },
          {
            heading: 'Fabric, printing and stitching',
            body: [
              'We print digitally onto 100% polyester fabric. Printing is single-sided and the design shows through on the reverse.',
            ],
            bullets: [
              '100% polyester fabric, digitally printed',
              'Reinforced, double-stitched hem to stand up to wind',
              'Finished with a polyester header',
              'No metal eyelets, so nothing corrodes or stains the fabric',
              'Optional fringing',
            ],
          },
          {
            heading: 'Sewn Greek flag',
            body: [
              'Alongside the printed version, the Greek flag is also available sewn, in every standard size in the table. The panels are cut and stitched together one by one in polyester fabric.',
              'It is the choice for a flag that will live on an outdoor pole for years - at a school, a church or a public building.',
            ],
          },
          {
            heading: 'Stock and lead times',
            body: [
              'Standard sizes are available at any time from stock. If the size you want is temporarily out, we make it in one to five working days.',
              'For flags in a special size or with your own design, see our [[logo|custom logo flags]].',
            ],
          },
          {
            heading: 'Table flags, hand flags and bunting',
            body: ['We make the small formats too, in the same national flags.'],
            table: {
              columns: ['Product', 'Dimensions'],
              rows: [
                ['Table flag', '24 × 16 cm, 33 cm total height on a silver metal base 6 cm across'],
                ['Hand flag', '30 × 20 cm'],
                ['Bunting', '30 × 20 cm, three per metre as standard'],
              ],
            },
            footnote:
              'Bunting is made in any combination of countries you like, or to your own design. For street decoration we supply the materials; installation is done by you.',
          },
          {
            heading: 'Very large flags',
            body: [
              'The largest flag we have ever made measured **58 × 27 metres** - roughly **1,566 square metres** of fabric. It was ordered by an APOEL supporter.',
              'It took **fifteen rolls of fabric** and **three full days of work**. For a sense of the scale: at 58 metres long, the flag was longer than half a football pitch.',
              'It was so large it **could not be unrolled inside the factory**. We opened it out for the first time on a football pitch - the only space big enough to confirm that every panel had been sewn into the right place.',
              'APOEL supporters have opened it across the entire south stand of the GSP Stadium on national anniversaries. [[https://www.24sports.com.cy/gr/sports/podosfairo/kypros/a-katigoria/apoel/apoel-terastia-elliniki-simaia-sto-petalo-vid|24Sports filmed]] one such occasion.',
              'This is not routine work and we do not present it as such. We mention it because it answers the question every customer with a large order asks: **can you actually do it?** Whatever you have in mind, it is probably smaller than that.',
              'Very large orders are planned from scratch - cutting, sewing and checking - and they need time and discussion. Call us and let us talk it through before you commit to a date.',
            ],
          },
          {
            heading: 'Delivery and collection',
            bullets: [
              'Courier delivery anywhere in Cyprus',
              'No delivery charge on orders over €150',
              'Collection from the shop on Pindarou or the factory in Kaimakli',
              'Cash or card at the shop - no deposit required',
            ],
          },
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'Do you have flags ready for immediate collection?',
            a: 'Yes. We keep all eight standard sizes in stock, so you can usually come in and collect the same day. If something is temporarily out, we make it in one to five working days.',
          },
          {
            q: 'What is the most common flag size?',
            a: '150 × 90 centimetres. It suits most flagpoles at schools and homes. For taller poles on public buildings, customers usually choose 180 × 110 or 240 × 150 centimetres.',
          },
          {
            q: 'Do your flags have eyelets?',
            a: 'No, and that is deliberate. Metal eyelets corrode and stain the fabric. Our flags are finished with a polyester header and a reinforced, double-stitched hem.',
          },
          {
            q: 'Does the design show on the back of the flag?',
            a: 'Yes. Printing is single-sided and the design carries through the fabric, so it is visible from both sides.',
          },
          {
            q: 'Can you make a flag in a size that is not in your table?',
            a: 'Yes, we make any size to order, with no minimum quantity - even a single piece.',
          },
          {
            q: 'Do you make sewn flags or only printed ones?',
            a: 'Both. The Greek flag is also available sewn, in every standard size, in polyester fabric.',
          },
        ],
        relatedTitle: 'See also',
      },
    },
  },
  {
    key: 'logo',
    slug: { el: 'simaies-me-logotypo', en: 'custom-logo-flags' },
    featured: true,
    related: ['national', 'embroidery', 'table', 'sizes'],
    content: {
      el: {
        title: 'Σημαίες με λογότυπο',
        metaTitle: 'Σημαίες με λογότυπο - παράδοση σε 10 ημέρες - Χαρ. Ρωσσίδης ΛΤΔ',
        metaDescription:
          'Σημαίες με το λογότυπό σας, ψηφιακή εκτύπωση σε πολυέστερ, σε κάθε διάσταση. Παράδοση έως 10 ημέρες, χωρίς ελάχιστη ποσότητα. Κατασκευή στη Λευκωσία.',
        intro: [
          'Στείλτε μας το λογότυπο ή το σχέδιό σας και θα το τυπώσουμε ψηφιακά σε ύφασμα, σε όποια διάσταση χρειάζεστε.',
          'Οι μικρές παραγγελίες παραδίδονται σε δέκα ημέρες το πολύ. Επειδή η παραγωγή γίνεται εδώ, στο εργοστάσιό μας στο Καϊμακλί, δεν περιμένετε εισαγωγή από το εξωτερικό.',
          'Ιδανικές για επιχειρήσεις, ξενοδοχεία, αθλητικούς συλλόγους, σωματεία και εκδηλώσεις - από μία σημαία μέχρι ολόκληρη σειρά, χωρίς ελάχιστη ποσότητα.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Εκτύπωση του δικού σας σχεδίου ή λογοτύπου',
          'Έως 10 ημέρες για μικρές παραγγελίες',
          'Αρχεία: EPS, PDF, SVG ή PNG υψηλής ανάλυσης',
          'Κάθε διάσταση, χωρίς ελάχιστη ποσότητα',
        ],
        sections: [
          {
            heading: 'Χρόνος παράδοσης',
            body: [
              'Οι χρόνοι μετρούν από τη στιγμή που εγκρίνετε το σχέδιο. Δεν υπάρχει ελάχιστη ποσότητα: κατασκευάζουμε ακόμη και ένα τεμάχιο.',
            ],
            table: {
              columns: ['Ποσότητα', 'Χρόνος παράδοσης'],
              rows: [
                ['Έως περίπου 10 τεμάχια', 'Έως 10 ημέρες'],
                ['Περίπου 100 τεμάχια', 'Περίπου 15 ημέρες'],
              ],
            },
          },
          {
            heading: 'Το αρχείο σας',
            body: [
              'Για το καλύτερο αποτέλεσμα στείλτε μας διανυσματικό αρχείο - EPS, PDF ή SVG - ή εικόνα υψηλής ανάλυσης σε PNG.',
              'Αν έχετε μόνο μια χαμηλής ποιότητας εικόνα του λογοτύπου σας, μπορούμε να το δώσουμε σε γραφίστα για να το ξανασχεδιάσει καθαρά. Η υπηρεσία αυτή χρεώνεται επιπλέον και θα σας το πούμε από πριν.',
              'Δεν είστε σίγουροι για το αρχείο σας; Καλέστε μας και θα σας πούμε αν είναι κατάλληλο πριν παραγγείλετε.',
            ],
          },
          {
            heading: 'Δείγματα πριν παραγγείλετε',
            body: [
              'Στο κατάστημά μας στην Πινδάρου έχουμε δείγματα για να δείτε και να πιάσετε το ύφασμα, την εκτύπωση και το τελείωμα πριν αποφασίσετε.',
            ],
          },
          {
            heading: 'Ύφασμα, εκτύπωση και ραφή',
            bullets: [
              'Ύφασμα 100% πολυεστέρα, ψηφιακή εκτύπωση',
              'Εκτύπωση στη μία όψη - το σχέδιο φαίνεται και από πίσω',
              'Ενισχυμένο στρίφωμα με διπλή ραφή',
              'Τελείωμα με θήκη από πολυέστερ, χωρίς μεταλλικούς κρίκους',
              'Προαιρετικά κρόσσια',
            ],
          },
          {
            heading: 'Διαστάσεις',
            body: [
              'Τυπώνουμε σε οποιαδήποτε διάσταση. Οι σταθερές μας διαστάσεις, σε εκατοστά και σε πλάτος × ύψος, είναι: 60 × 40, 100 × 60, 120 × 70, 150 × 90, 180 × 110, 240 × 150, 300 × 180 και 500 × 300.',
              'Για μικρά μεγέθη με το λογότυπό σας κατασκευάζουμε επιτραπέζιες σημαίες 24 × 16 εκ. σε μεταλλική βάση, σημαίες χειρός 30 × 20 εκ. και σημαιάκια 30 × 20 εκ., τρία ανά μέτρο.',
            ],
          },
          {
            heading: 'Πού χρησιμοποιούνται',
            body: [
              'Οι σημαίες με λογότυπο χρησιμοποιούνται από επιχειρήσεις στην πρόσοψη ή στην είσοδο, από ξενοδοχεία δίπλα στην εθνική σημαία, από αθλητικά σωματεία στις κερκίδες και από διοργανωτές σε εκθέσεις, συνέδρια και υπαίθριες εκδηλώσεις.',
              'Για γραφεία, αίθουσες συνεδριάσεων και τελετές αδελφοποίησης, το ίδιο λογότυπο μπορεί να μπει και σε επιτραπέζια σημαία με μεταλλική βάση.',
              'Για γιορτές, πανηγύρια και εγκαίνια, κατασκευάζουμε σειρές από σημαιάκια με το λογότυπό σας ή σε συνδυασμό με σημαίες χωρών.',
            ],
          },
          {
            heading: 'Γιατί έχει σημασία ότι κατασκευάζονται εδώ',
            body: [
              'Τις σημαίες τις φτιάχνουμε εμείς - δεν τις εισάγουμε. Η εκτύπωση, η ραφή και το τελείωμα γίνονται στο εργοστάσιό μας στο Καϊμακλί, από το 1938.',
              'Πρακτικά αυτό σημαίνει τρία πράγματα: δεν περιμένετε αποστολή από το εξωτερικό, μπορείτε να δείτε δείγματα από κοντά πριν παραγγείλετε, και αν κάτι χρειάζεται προσαρμογή το συζητάμε στο τηλέφωνο με τον άνθρωπο που θα το φτιάξει.',
            ],
          },
          {
            heading: 'Παράδοση και πληρωμή',
            bullets: [
              'Αποστολή με κούριερ σε όλη την Κύπρο',
              'Χωρίς χρέωση αποστολής για παραγγελίες άνω των €150',
              'Παραλαβή από το κατάστημα ή το εργοστάσιο',
              'Χωρίς προκαταβολή - μετρητά ή κάρτα στο κατάστημα',
            ],
          },
        ],
        faqTitle: 'Συχνές ερωτήσεις',
        faq: [
          {
            q: 'Πόσο γρήγορα μπορείτε να φτιάξετε σημαίες με το λογότυπό μας;',
            a: 'Για μικρές παραγγελίες, έως δέκα ημέρες από την έγκριση του σχεδίου. Για παραγγελίες γύρω στα 100 τεμάχια, περίπου δεκαπέντε ημέρες.',
          },
          {
            q: 'Τι αρχείο χρειάζεστε;',
            a: 'Ιδανικά διανυσματικό αρχείο - EPS, PDF ή SVG - ή εικόνα υψηλής ανάλυσης σε PNG.',
          },
          {
            q: 'Το λογότυπό μας είναι σε χαμηλή ανάλυση. Τι γίνεται τότε;',
            a: 'Μπορούμε να το δώσουμε σε γραφίστα για να το ξανασχεδιάσει σε κατάλληλη μορφή. Η υπηρεσία χρεώνεται επιπλέον και σας ενημερώνουμε πριν προχωρήσουμε.',
          },
          {
            q: 'Υπάρχει ελάχιστη ποσότητα;',
            a: 'Όχι. Κατασκευάζουμε από ένα μοναδικό τεμάχιο μέχρι μεγάλες ποσότητες, με την ίδια ποιότητα.',
          },
          {
            q: 'Μπορούμε να δούμε δείγμα πριν παραγγείλουμε;',
            a: 'Ναι. Στο κατάστημά μας στην Πινδάρου έχουμε δείγματα για να δείτε το ύφασμα, την εκτύπωση και το τελείωμα από κοντά.',
          },
        ],
        relatedTitle: 'Δείτε επίσης',
      },
      en: {
        title: 'Custom logo flags',
        metaTitle: 'Custom logo flags - 10 day lead time - Char. Rossides LTD',
        metaDescription:
          'Flags with your logo, digitally printed on polyester in any size. Up to 10 days for small orders, no minimum quantity. Made in Nicosia, Cyprus.',
        intro: [
          'Send us your logo or design and we will print it digitally on fabric, in whatever size you need.',
          'Small orders are delivered in ten days at most. Because everything is produced here at our factory in Kaimakli, you are not waiting on an import from abroad.',
          'Ideal for businesses, hotels, sports clubs, associations and events - from a single flag to a whole series, with no minimum order.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Printing of your own design or logo',
          'Up to 10 days for small orders',
          'Files: EPS, PDF, SVG or high-resolution PNG',
          'Any size, no minimum order',
        ],
        sections: [
          {
            heading: 'Lead times',
            body: [
              'Times run from the moment you approve the design. There is no minimum quantity: we will make a single piece.',
            ],
            table: {
              columns: ['Quantity', 'Lead time'],
              rows: [
                ['Up to around 10 pieces', 'Up to 10 days'],
                ['Around 100 pieces', 'About 15 days'],
              ],
            },
          },
          {
            heading: 'Your artwork',
            body: [
              'For the best result send us a vector file - EPS, PDF or SVG - or a high-resolution PNG image.',
              'If all you have is a low-quality image of your logo, we can pass it to a graphic designer to be redrawn cleanly. That service is charged separately and we will tell you the cost beforehand.',
              'Not sure about your file? Call us and we will tell you whether it will work before you order.',
            ],
          },
          {
            heading: 'Samples before you order',
            body: [
              'At our shop on Pindarou we keep samples so you can see and handle the fabric, the print and the finishing before you decide.',
            ],
          },
          {
            heading: 'Fabric, printing and stitching',
            bullets: [
              '100% polyester fabric, digitally printed',
              'Single-sided printing - the design shows through on the reverse',
              'Reinforced, double-stitched hem',
              'Finished with a polyester header, no metal eyelets',
              'Optional fringing',
            ],
          },
          {
            heading: 'Sizes',
            body: [
              'We print any size. Our standard sizes, in centimetres and given as width × height, are: 60 × 40, 100 × 60, 120 × 70, 150 × 90, 180 × 110, 240 × 150, 300 × 180 and 500 × 300.',
              'In the small formats we make table flags at 24 × 16 cm on a metal base, hand flags at 30 × 20 cm and bunting at 30 × 20 cm, three flags per metre - all with your logo.',
            ],
          },
          {
            heading: 'Where they are used',
            body: [
              'Logo flags are flown by businesses at their entrance or along a frontage, by hotels beside the national flag, by sports clubs on the terraces, and by organisers at exhibitions, conferences and outdoor events.',
              'For offices, meeting rooms and twinning ceremonies, the same logo can go onto a table flag with a metal base.',
              'For festivals, fairs and openings, we make runs of bunting carrying your logo, or combining it with national flags.',
            ],
          },
          {
            heading: 'Why it matters that they are made here',
            body: [
              'We make the flags ourselves - we do not import them. Printing, stitching and finishing all happen at our factory in Kaimakli, as they have since 1938.',
              'In practice that means three things: you are not waiting on a shipment from abroad, you can see samples in person before ordering, and if something needs adjusting you discuss it on the phone with the people who will actually make it.',
            ],
          },
          {
            heading: 'Delivery and payment',
            bullets: [
              'Courier delivery anywhere in Cyprus',
              'No delivery charge on orders over €150',
              'Collection from the shop or the factory',
              'No deposit - cash or card at the shop',
            ],
          },
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'How quickly can you make flags with our logo?',
            a: 'For small orders, up to ten days from approval of the design. For orders of around 100 pieces, about fifteen days.',
          },
          {
            q: 'What file do you need?',
            a: 'Ideally a vector file - EPS, PDF or SVG - or a high-resolution PNG image.',
          },
          {
            q: 'Our logo is low resolution. What then?',
            a: 'We can pass it to a graphic designer to be redrawn in a usable format. That is charged separately and we will let you know before going ahead.',
          },
          {
            q: 'Is there a minimum quantity?',
            a: 'No. We make anything from a single piece to large quantities, to the same standard.',
          },
          {
            q: 'Can we see a sample before ordering?',
            a: 'Yes. Our shop on Pindarou keeps samples so you can see the fabric, print and finishing up close.',
          },
        ],
        relatedTitle: 'See also',
      },
    },
  },
  {
    key: 'parade',
    slug: { el: 'lavara-parelaseon', en: 'parade-banners' },
    featured: true,
    related: ['school', 'repairs', 'poles', 'parades'],
    content: {
      el: {
        title: 'Λάβαρα παρελάσεων',
        metaTitle: 'Λάβαρα παρελάσεων & εκκλησιαστικά λάβαρα - Χαρ. Ρωσσίδης ΛΤΔ',
        metaDescription:
          'Χειροποίητα βελούδινα λάβαρα για σχολεία, συλλόγους και εκκλησίες, με κεντητά γράμματα, ιστό αλουμινίου και δερμάτινη τελαμώνα. Επισκευή παλιών λαβάρων.',
        intro: [
          'Χειροποίητα βελούδινα λάβαρα για σχολεία, συλλόγους, σωματεία και εκκλησίες, κατασκευασμένα ένα-ένα στο εργαστήριό μας στη Λευκωσία.',
          'Κάθε λάβαρο γίνεται κατά παραγγελία, με το δικό σας έμβλημα και τα δικά σας χρώματα. Εσείς διαλέγετε τι θα το συνοδεύει - ιστό, στέψη, τελαμώνα - και τα συνδυάζετε όπως σας βολεύει.',
          'Αναλαμβάνουμε επίσης την επισκευή παλιών λαβάρων - κάτι που πολλά σχολεία και ενορίες δεν ξέρουν ότι γίνεται.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Βελούδο σε μπλε, μαύρο ή μπορντό',
          'Κεντητά γράμματα, έμβλημα κεντητό ή τυπωμένο',
          'Ιστός αλουμινίου 3 μέτρων',
          'Ιστός, στέψη και τελαμώνα, όπως τα θέλετε',
          'Χρόνος κατασκευής 15 ημέρες',
        ],
        sections: [
          {
            heading: 'Το λάβαρο',
            body: [
              'Η συνηθισμένη διάσταση για λάβαρο σχολείου είναι 90 × 120 εκατοστά. Κατασκευάζουμε και οποιαδήποτε άλλη διάσταση κατά παραγγελία.',
              'Τα γράμματα γίνονται με κεντητή απλικέ εργασία. Το έμβλημα - η μακέτα στο κέντρο του λαβάρου - μπορεί να είναι κεντητό ή τυπωμένο, όπως προτιμάτε.',
            ],
            bullets: [
              'Βελούδο σε μπλε σκούρο, μαύρο ή μπορντό',
              'Κεντητά γράμματα με απλικέ',
              'Έμβλημα κεντητό ή τυπωμένο, ραμμένο πάνω στο ύφασμα',
              'Η πίσω όψη είναι βελούδινη, οπότε οι ραφές του εμβλήματος δεν φαίνονται',
              'Χρυσά κρόσσια',
              'Φούντες στο χρώμα που θέλετε - χρυσό, ασημί, μπλε και άλλα',
              'Χρυσές και μεταλλικές κλωστές στο κέντημα',
            ],
          },
          {
            heading: 'Ο ιστός',
            body: [
              'Ο ιστός είναι από αλουμίνιο, ώστε να αντέχει και να μη ζορίζει τον μαθητή που τον κρατά σε ολόκληρη την πορεία της παρέλασης.',
            ],
            table: {
              columns: ['Χαρακτηριστικό', 'Προδιαγραφή'],
              rows: [
                ['Υλικό', 'Αλουμίνιο'],
                ['Διάμετρος', '39 χιλιοστά'],
                ['Μήκος', '3 μέτρα'],
                ['Βάρος', '2 έως 2,5 κιλά'],
                ['Προαιρετικά', 'Μηχανισμός που χωρίζει τον ιστό στη μέση, για μεταφορά και αποθήκευση'],
              ],
            },
            footnote:
              'Φινίρισμα ιστού: μπλε και λευκός για την ελληνική σημαία, ολόλευκος για την κυπριακή, ή βελούδινος με κίτρινο κορδόνι, στα ίδια τρία χρώματα με το λάβαρο. Στην κορυφή μπαίνει σταυρός από PVC ή σφαίρα - πλαστική ή μπρούντζινο πόμωλο. Δείτε αναλυτικά τους [[poles|ιστούς και τα εξαρτήματα]].',
          },
          {
            heading: 'Η τελαμώνα',
            body: [
              'Η τελαμώνα από δέρμα αγελάδας στηρίζει το βάρος του ιστού στον ώμο του σημαιοφόρου.',
              'Αν το σχολείο ή ο σύλλογος έχει ήδη τελαμώνα σε καλή κατάσταση, δεν χρειάζεται καινούργια. Αν όχι, πείτε μας το μαζί με την παραγγελία του λαβάρου. Πωλείται και μόνη της, χωρίς λάβαρο.',
            ],
            bullets: [
              'Δέρμα αγελάδας',
              'Δύο ιμάντες, 100 εκ. και 60 εκ., πλάτους 4 εκ.',
              'Ρυθμιζόμενη, με πόρπη που δεν σκουριάζει',
            ],
          },
          {
            heading: 'Χρόνος κατασκευής και παρελάσεις',
            body: [
              'Ένα λάβαρο θέλει δεκαπέντε ημέρες κατασκευής.',
              'Πριν από την 25η Μαρτίου και την 28η Οκτωβρίου η ζήτηση ανεβαίνει απότομα. Δώστε μας τρεις εβδομάδες περιθώριο πριν από την ημερομηνία της παρέλασης, ώστε να προλάβουμε άνετα.',
              'Αν έχετε παρέλαση στο μυαλό σας, τηλεφωνήστε νωρίς - ακόμη κι αν δεν έχετε αποφασίσει ακόμη το σχέδιο.',
            ],
          },
          {
            heading: 'Επισκευή παλιών λαβάρων',
            body: [
              'Επισκευάζουμε λάβαρα που έχουν φθαρεί με τα χρόνια. Πολλά σχολεία και ενορίες κρατούν λάβαρα δεκαετιών που χρειάζονται φροντίδα και όχι αντικατάσταση.',
              'Αναλαμβάνουμε αλλαγή κροσσιών και φούντας, επισκευή ή αντικατάσταση ιστού, σφαίρας και σταυρού, καθώς και αντικατάσταση τελαμώνας.',
              'Φέρτε μας το λάβαρο στο κατάστημα ή στο εργοστάσιο για να το δούμε από κοντά και να σας πούμε τι χρειάζεται.',
            ],
          },
          {
            heading: 'Εκκλησιαστικά λάβαρα',
            body: [
              'Κατασκευάζουμε εκκλησιαστικά λάβαρα για ενορίες και μοναστήρια, με την ίδια χειροποίητη εργασία: βελούδο, κεντητά γράμματα με χρυσή κλωστή, κρόσσια και φούντες.',
              'Κατασκευάζουμε επίσης λάβαρα για πολιτιστικούς ομίλους, αθλητικά σωματεία και προσκοπικά συστήματα.',
            ],
          },
          {
            heading: 'Ιστοί και εξαρτήματα και μόνα τους',
            body: [
              'Πουλάμε ιστούς, σφαίρες, σταυρούς και εξαρτήματα και μεμονωμένα, αν έχετε ήδη λάβαρο και θέλετε μόνο το στήριγμα.',
            ],
          },
        ],
        faqTitle: 'Συχνές ερωτήσεις',
        faq: [
          {
            q: 'Πόσο νωρίς πρέπει να παραγγείλουμε λάβαρο για παρέλαση;',
            a: 'Το λάβαρο θέλει δεκαπέντε ημέρες κατασκευής. Πριν από την 25η Μαρτίου και την 28η Οκτωβρίου προτείνουμε να μας δώσετε τρεις εβδομάδες περιθώριο, γιατί η ζήτηση εκείνες τις περιόδους είναι μεγάλη.',
          },
          {
            q: 'Τι διάσταση έχει ένα λάβαρο σχολείου;',
            a: 'Η συνηθισμένη διάσταση είναι 90 × 120 εκατοστά. Κατασκευάζουμε και άλλες διαστάσεις κατά παραγγελία.',
          },
          {
            q: 'Σε τι χρώματα υπάρχει το βελούδο;',
            a: 'Σε μπλε σκούρο, μαύρο και μπορντό.',
          },
          {
            q: 'Επισκευάζετε παλιά λάβαρα;',
            a: 'Ναι. Αλλάζουμε κρόσσια και φούντες, επισκευάζουμε ή αντικαθιστούμε τον ιστό, τη σφαίρα και τον σταυρό, και αλλάζουμε την τελαμώνα. Φέρτε μας το λάβαρο να το δούμε.',
          },
          {
            q: 'Πόσο ζυγίζει ο ιστός;',
            a: 'Δύο με δυόμισι κιλά. Είναι από αλουμίνιο, διαμέτρου 39 χιλιοστών και μήκους 3 μέτρων, ώστε να μπορεί να τον κρατήσει μαθητής σε ολόκληρη την παρέλαση.',
          },
          {
            q: 'Μπορεί ο ιστός να χωρίσει για να μεταφερθεί;',
            a: 'Ναι, προαιρετικά. Υπάρχει μηχανισμός που χωρίζει τον ιστό στη μέση, για ευκολότερη μεταφορά και αποθήκευση.',
          },
        ],
        relatedTitle: 'Δείτε επίσης',
      },
      en: {
        title: 'Parade banners',
        metaTitle: 'Parade & church banners, handmade velvet - Char. Rossides LTD',
        metaDescription:
          'Handmade velvet banners for schools, clubs and churches, with embroidered lettering, aluminium pole and leather harness. We repair old banners too.',
        intro: [
          'Handmade velvet banners for schools, clubs, associations and churches, made one by one at our workshop in Nicosia.',
          'Every banner is made to order with your emblem and your colours. You choose what goes with it - pole, finial, carrying harness - and combine them however suits you.',
          'We also repair and restore old banners - something many schools and parishes do not realise is possible.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Velvet in navy blue, black or Bordeaux',
          'Embroidered lettering, printed or embroidered emblem',
          '3 m aluminium pole',
          'Pole, finial and harness as you choose',
          '15 days to make',
        ],
        sections: [
          {
            heading: 'The banner',
            body: [
              'The usual size for a school banner is 90 × 120 centimetres. We make any other size to order.',
              'Lettering is appliqué embroidery. The central emblem can be embroidered or printed, whichever you prefer.',
            ],
            bullets: [
              'Velvet in navy blue, black or Bordeaux',
              'Appliqué embroidered lettering',
              'Emblem embroidered or printed, sewn onto the fabric',
              'The reverse face is velvet, so the stitching behind the emblem is not visible',
              'Gold fringing',
              'Tassels in the colour you choose - gold, silver, blue and others',
              'Gold and metallic threads in the embroidery',
            ],
          },
          {
            heading: 'The pole',
            body: [
              'The pole is aluminium, so it lasts and stays light enough for a student to carry through a whole parade.',
            ],
            table: {
              columns: ['Feature', 'Specification'],
              rows: [
                ['Material', 'Aluminium'],
                ['Diameter', '39 mm'],
                ['Length', '3 metres'],
                ['Weight', '2 to 2.5 kg'],
                ['Optional', 'A mechanism that splits the pole in half for transport and storage'],
              ],
            },
            footnote:
              'Pole finishes: blue and white for the Greek flag, plain white for the Cypriot, or velvet with a yellow rope, in the same three colours as the banner. At the top, a PVC cross or a sphere - plastic, or a bronze knob (πόμωλο). See the full detail on [[poles|poles and fittings]].',
          },
          {
            heading: 'The carrying harness',
            body: [
              'The cow-leather harness rests the weight of the pole on the shoulder of whoever carries it.',
              'Add one to your order if you need it. If your school or club already has a harness in good condition, keep it. And if a harness is all you need, without a banner, we make those too.',
            ],
            bullets: [
              'Cow leather',
              'Two straps, 100 cm and 60 cm, 4 cm wide',
              'Adjustable, with a non-corroding buckle',
            ],
          },
          {
            heading: 'Lead times and parade season',
            body: [
              'An embroidered banner takes fifteen days to make.',
              'Demand rises sharply before 25 March and 28 October. Allow us three weeks before the date of the parade so there is comfortable margin.',
              'If you have a parade in mind, call early - even before you have settled on the design.',
            ],
          },
          {
            heading: 'Repairs and restoration',
            body: [
              'We repair banners worn by the years. Many schools and parishes hold banners decades old that need care rather than replacement.',
              'We replace fringing and tassels, repair or replace the pole, sphere and cross, and fit a new harness.',
              'Bring the banner to the shop or the factory so we can look at it properly and tell you what it needs.',
            ],
          },
          {
            heading: 'Church banners',
            body: [
              'We make church banners for parishes and monasteries with the same handwork: velvet, lettering embroidered in gold thread, fringing and tassels.',
              'We also make banners for cultural societies, sports clubs and scout groups.',
            ],
          },
          {
            heading: 'Poles and fittings on their own',
            body: [
              'We sell poles, spheres, crosses and fittings separately, if you already have a banner and need only the support.',
            ],
          },
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'How early should we order a banner for a parade?',
            a: 'A banner takes fifteen days to make. Before 25 March and 28 October we suggest allowing three weeks, because demand in those periods is heavy.',
          },
          {
            q: 'What size is a school banner?',
            a: 'The usual size is 90 × 120 centimetres. We make other sizes to order.',
          },
          {
            q: 'What velvet colours are available?',
            a: 'Navy blue, black and Bordeaux.',
          },
          {
            q: 'Do you repair old banners?',
            a: 'Yes. We replace fringing and tassels, repair or replace the pole, sphere and cross, and fit a new harness. Bring the banner in and we will look at it.',
          },
          {
            q: 'How heavy is the pole?',
            a: 'Two to two and a half kilos. It is aluminium, 39 mm in diameter and 3 metres long, so a student can carry it through a whole parade.',
          },
          {
            q: 'Can the pole be taken apart for transport?',
            a: 'Yes, as an option. A mechanism splits the pole in half for easier transport and storage.',
          },
        ],
        relatedTitle: 'See also',
      },
    },
  },
  {
    key: 'embroidery',
    slug: { el: 'kentimata-diakritika', en: 'embroidery-badges' },
    featured: true,
    related: ['parade', 'school', 'logo'],
    content: {
      el: {
        title: 'Κεντήματα & διακριτικά',
        metaTitle: 'Κεντητά διακριτικά, εμβλήματα & πινακίδες ονομάτων',
        metaDescription:
          'Κεντητά διακριτικά βαθμού, εμβλήματα μονάδων και πινακίδες ονομάτων για στολές, καθώς και σήματα συλλόγων. Ετοιμοπαράδοτα σχέδια, παράδοση από 7 ημέρες.',
        intro: [
          'Κεντάμε διακριτικά, εμβλήματα και σήματα για στολές - διακριτικά βαθμού, εμβλήματα μονάδων και σωμάτων, επωμίδες, σήματα αθλητικών σωματείων και συλλόγων.',
          'Κατασκευάζουμε επίσης πινακίδες ονομάτων, καθώς και πηλήκια και στρατιωτικά αξεσουάρ κατά παραγγελία.',
          'Η παραγωγή γίνεται στο εργοστάσιό μας στο Καϊμακλί, για μικρές και μεγάλες ποσότητες, χωρίς ελάχιστη παραγγελία.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Κεντητά διακριτικά βαθμού και εμβλήματα',
          'Πινακίδες ονομάτων σε 7 ημέρες',
          'Ετοιμοπαράδοτα τυποποιημένα σχέδια',
          'Μικρές και μεγάλες ποσότητες',
        ],
        sections: [
          {
            heading: 'Τι κατασκευάζουμε',
            bullets: [
              'Κεντητά διακριτικά βαθμού για στολές',
              'Εμβλήματα μονάδων και σωμάτων',
              'Επωμίδες',
              'Κεντητά σήματα αθλητικών σωματείων, συλλόγων και προσκοπικών συστημάτων',
              'Πινακίδες ονομάτων',
              'Πηλήκια κατά παραγγελία',
            ],
          },
          {
            heading: 'Χρόνος παράδοσης',
            table: {
              columns: ['Είδος', 'Χρόνος παράδοσης'],
              rows: [
                ['Τυποποιημένα σχέδια', 'Από απόθεμα - 7 ημέρες αν εξαντληθούν'],
                ['Πινακίδες ονομάτων', '7 ημέρες'],
                ['Διακριτικά με δικό σας σχέδιο', '15 ημέρες'],
              ],
            },
            footnote: 'Οι χρόνοι για τα σχέδια κατά παραγγελία μετρούν από την έγκριση του σχεδίου.',
          },
          {
            heading: 'Διακριτικά βαθμού και εμβλήματα μονάδων',
            body: [
              'Κεντάμε διακριτικά βαθμού και εμβλήματα μονάδων για στολές των σωμάτων ασφαλείας και του στρατού.',
              'Τα τυποποιημένα σχέδια τα κρατάμε σε απόθεμα και παραδίδονται αμέσως. Αν κάτι έχει εξαντληθεί προσωρινά, το ετοιμάζουμε σε επτά ημέρες. Για νέο σχέδιο ο χρόνος είναι δεκαπέντε ημέρες.',
            ],
          },
          {
            heading: 'Στερέωση στη στολή',
            body: [
              'Τα διακριτικά διατίθενται σε δύο μορφές, ανάλογα με το πώς θέλετε να τα τοποθετήσετε.',
            ],
            bullets: [
              '**Όπως είναι** - για να ραφτούν πάνω στη στολή',
              '**Με βέλκρο** - για να μπαίνουν και να βγαίνουν, όταν το ίδιο ρούχο χρησιμοποιείται με διαφορετικά διακριτικά',
            ],
            footnote: 'Πείτε μας ποια μορφή θέλετε μαζί με την παραγγελία.',
          },
          {
            heading: 'Πινακίδες ονομάτων',
            body: [
              'Κεντητές πινακίδες ονομάτων για στολές, σε επτά ημέρες. Στείλτε μας τη λίστα με τα ονόματα και τη μορφή που θέλετε.',
              'Είναι από τις πιο συχνές παραγγελίες μας, γιατί χρειάζονται με κάθε κατάταξη νέας εσσό.',
            ],
          },
          {
            heading: 'Πηλήκια και στρατιωτικά είδη',
            body: [
              'Κατασκευάζουμε πηλήκια κατά παραγγελία, με τα διακριτικά της μονάδας ή του συλλόγου σας. Στο κατάστημα θα βρείτε επίσης μπερέδες, καπέλα τζόκεϊ και εξοπλισμό πεδίου - δείτε τα [[military|στρατιωτικά είδη]].',
            ],
          },
          {
            heading: 'Για ποιούς δουλεύουμε',
            body: [
              'Σώματα ασφαλείας και στρατός, αθλητικά σωματεία, πολιτιστικοί σύλλογοι, προσκοπικά συστήματα, σχολεία και επιχειρήσεις με στολές.',
              'Αναλαμβάνουμε μικρές και μεγάλες ποσότητες με την ίδια ποιότητα, χωρίς ελάχιστη παραγγελία.',
            ],
          },
          {
            heading: 'Παράδοση και πληρωμή',
            bullets: [
              'Αποστολή με κούριερ σε όλη την Κύπρο',
              'Χωρίς χρέωση αποστολής για παραγγελίες άνω των €150',
              'Παραλαβή από το κατάστημα ή το εργοστάσιο',
              'Χωρίς προκαταβολή - μετρητά ή κάρτα στο κατάστημα',
            ],
          },
        ],
        faqTitle: 'Συχνές ερωτήσεις',
        faq: [
          {
            q: 'Πόσο χρόνο θέλουν τα κεντητά διακριτικά;',
            a: 'Με δικό σας σχέδιο, δεκαπέντε ημέρες. Τα τυποποιημένα σχέδια είναι ετοιμοπαράδοτα από το απόθεμά μας, και αν εξαντληθούν τα ετοιμάζουμε σε επτά ημέρες. Οι πινακίδες ονομάτων θέλουν επτά ημέρες.',
          },
          {
            q: 'Έχετε έτοιμα διακριτικά σε απόθεμα;',
            a: 'Ναι, τα τυποποιημένα σχέδια τα κρατάμε σε απόθεμα και παραδίδονται αμέσως.',
          },
          {
            q: 'Φτιάχνετε διακριτικά βαθμού για στολές;',
            a: 'Ναι. Κεντάμε διακριτικά βαθμού και εμβλήματα μονάδων για στολές των σωμάτων ασφαλείας και του στρατού.',
          },
          {
            q: 'Κάνετε πινακίδες ονομάτων;',
            a: 'Ναι, κεντητές πινακίδες ονομάτων για στολές, σε επτά ημέρες.',
          },
          {
            q: 'Πώς στερεώνονται στη στολή;',
            a: 'Όπως προτιμάτε: είτε όπως είναι, για να ραφτούν πάνω στη στολή, είτε με βέλκρο ώστε να μπαίνουν και να βγαίνουν.',
          },
          {
            q: 'Υπάρχει ελάχιστη ποσότητα;',
            a: 'Όχι. Αναλαμβάνουμε μικρές και μεγάλες ποσότητες με την ίδια ποιότητα.',
          },
        ],
        relatedTitle: 'Δείτε επίσης',
      },
      en: {
        title: 'Embroidery & badges',
        metaTitle: 'Embroidered badges, insignia & name tags - Nicosia',
        metaDescription:
          'Embroidered rank insignia, unit emblems and name tags for uniforms, plus club badges. Standard designs held in stock, lead times from 7 days.',
        intro: [
          'We embroider badges, emblems and insignia for uniforms - rank insignia, unit and corps emblems, epaulettes, and badges for sports clubs and associations.',
          'We also make name tags, along with kepis and military accessories to order.',
          'Production takes place at our factory in Kaimakli, for small and large quantities, with no minimum order.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Embroidered rank insignia and emblems',
          'Name tags in 7 days',
          'Standard designs held in stock',
          'Small and large quantities',
        ],
        sections: [
          {
            heading: 'What we make',
            bullets: [
              'Embroidered rank insignia for uniforms',
              'Unit and corps emblems',
              'Epaulettes',
              'Embroidered badges for sports clubs, associations and scout groups',
              'Name tags',
              'Kepis made to order',
            ],
          },
          {
            heading: 'Lead times',
            table: {
              columns: ['Item', 'Lead time'],
              rows: [
                ['Standard designs', 'From stock - 7 days if out'],
                ['Name tags', '7 days'],
                ['Badges to your own design', '15 days'],
              ],
            },
            footnote: 'Times for made-to-order designs run from approval of the artwork.',
          },
          {
            heading: 'Rank insignia and unit emblems',
            body: [
              'We embroider rank insignia and unit emblems for the uniforms of the security forces and the army.',
              'Standard designs are held in stock and go out immediately. If something is temporarily out, we make it in seven days. A new design takes fifteen days.',
            ],
          },
          {
            heading: 'Fixing to the uniform',
            body: [
              'Badges are supplied in two forms, depending on how you want to attach them.',
            ],
            bullets: [
              '**Plain** - to be sewn onto the uniform',
              '**With velcro** - so they can be swapped, where the same garment carries different insignia',
            ],
            footnote: 'Tell us which you want when you order.',
          },
          {
            heading: 'Name tags',
            body: [
              'Embroidered name tags for uniforms, in seven days. Send us the list of names and the format you want.',
              'They are one of our most frequent orders, because they are needed in small quantities and often - with every new appointment or transfer.',
            ],
          },
          {
            heading: 'Kepis and military supplies',
            body: [
              'We make kepis to order, carrying the insignia of your unit or association. The shop also carries berets, jockey caps and field equipment - see [[military|military supplies]].',
            ],
          },
          {
            heading: 'Who we work for',
            body: [
              'The security forces and the army, sports clubs, cultural associations, scout groups, schools and businesses with uniforms.',
              'We take on small and large quantities to the same standard, with no minimum order.',
            ],
          },
          {
            heading: 'Delivery and payment',
            bullets: [
              'Courier delivery anywhere in Cyprus',
              'No delivery charge on orders over €150',
              'Collection from the shop or the factory',
              'No deposit - cash or card at the shop',
            ],
          },
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'How long do embroidered badges take?',
            a: 'To your own design, fifteen days. Standard designs go out from stock, and if they run out we make them in seven days. Name tags take seven days.',
          },
          {
            q: 'Do you hold badges in stock?',
            a: 'Yes, standard designs are held in stock and go out immediately.',
          },
          {
            q: 'Do you make rank insignia for uniforms?',
            a: 'Yes. We embroider rank insignia and unit emblems for the uniforms of the security forces and the army.',
          },
          {
            q: 'Do you make name tags?',
            a: 'Yes, embroidered name tags for uniforms, in seven days.',
          },
          {
            q: 'How are they fixed to the uniform?',
            a: 'Whichever you prefer: supplied plain, to be sewn onto the uniform, or with velcro so they can be swapped.',
          },
          {
            q: 'Is there a minimum quantity?',
            a: 'No. We take on small and large quantities to the same standard.',
          },
        ],
        relatedTitle: 'See also',
      },
    },
  },
  {
    key: 'repairs',
    slug: { el: 'episkevi-lavaron', en: 'banner-repairs' },
    related: ['parade', 'school', 'poles', 'parades'],
    content: {
      el: {
        title: 'Επισκευή λαβάρων',
        metaTitle: 'Επισκευή & ανακαίνιση λαβάρων - Χαρ. Ρωσσίδης ΛΤΔ',
        metaDescription:
          'Επισκευάζουμε παλιά λάβαρα σχολείων, συλλόγων και εκκλησιών: κρόσσια, φούντες, ιστός, σφαίρα ή σταυρός και τελαμώνα. Φέρτε μας το λάβαρο να το δούμε.',
        intro: [
          'Ένα λάβαρο δεν χρειάζεται πάντα αντικατάσταση. Τα περισσότερα παλιά λάβαρα που φτάνουν στο εργαστήριό μας θέλουν φροντίδα, όχι καινούργιο ύφασμα.',
          'Επισκευάζουμε λάβαρα σχολείων, συλλόγων, σωματείων και εκκλησιών - ακόμη κι αν δεν τα κατασκευάσαμε εμείς.',
          'Φέρτε μας το λάβαρο στο κατάστημα ή στο εργοστάσιο, να το δούμε από κοντά και να σας πούμε τι χρειάζεται.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Αλλαγή κροσσιών και φούντας',
          'Νέος ιστός, σφαίρα, πόμωλο ή σταυρός',
          'Νέα δερμάτινη τελαμώνα',
          'Για λάβαρα κάθε ηλικίας και προέλευσης',
        ],
        sections: [
          {
            heading: 'Τι αναλαμβάνουμε',
            bullets: [
              'Αλλαγή χρυσών κροσσιών που έχουν φθαρεί ή ξεφτίσει',
              'Νέες φούντες, στο χρώμα που ταιριάζει με το λάβαρο',
              'Επανατοποθέτηση ή αντικατάσταση του εμβλήματος',
              'Καινούργιος ιστός αλουμινίου, σφαίρα, πόμωλο ή σταυρός',
              'Νέα δερμάτινη τελαμώνα',
            ],
          },
          {
            heading: 'Γιατί αξίζει η επισκευή',
            body: [
              'Πολλά σχολεία και ενορίες κρατούν λάβαρα δεκαετιών. Το έμβλημα μπορεί να έχει σχεδιαστεί πριν από πολλά χρόνια και να μην υπάρχει πουθενά αλλού, και το ίδιο το λάβαρο να έχει περάσει από γενιές μαθητών ή πιστών.',
              'Σε τέτοιες περιπτώσεις η επισκευή διατηρεί κάτι που δεν αντικαθίσταται. Ένα λάβαρο με φθαρμένα κρόσσια, στραβωμένο ιστό ή σκισμένη τελαμώνα μπορεί συχνά να ξαναγίνει αξιοπρεπές για την παρέλαση.',
            ],
          },
          {
            heading: 'Πώς ξεκινά',
            body: [
              'Δεν μπορούμε να πούμε τι χρειάζεται ένα λάβαρο χωρίς να το δούμε. Φέρτε το στο κατάστημα στην Πινδάρου ή στο εργοστάσιο στο Καϊμακλί και θα το εξετάσουμε μαζί σας.',
              'Θα σας πούμε τι μπορεί να επισκευαστεί, τι θα αλλάξει και πόσο χρόνο θα χρειαστεί, πριν αφήσετε οτιδήποτε.',
            ],
          },
          {
            heading: 'Ελέγξτε το λάβαρο πριν από την παρέλαση',
            body: [
              'Η καλύτερη στιγμή για να δείτε το λάβαρο του σχολείου δεν είναι η εβδομάδα της παρέλασης. Βγάλτε το από τη θήκη του στις αρχές Σεπτεμβρίου για τις παρελάσεις του Οκτωβρίου, και στις αρχές Μαρτίου για την 25η Μαρτίου.',
              'Κοιτάξτε τα κρόσσια, τις φούντες, τις ραφές γύρω από το έμβλημα και τον ιστό. Αν κάτι δεν είναι εντάξει, υπάρχει ακόμη χρόνος να το φέρετε.',
              'Πριν από την 25η Μαρτίου και την 28η Οκτωβρίου η ζήτηση ανεβαίνει απότομα, οπότε δώστε μας τρεις εβδομάδες περιθώριο.',
            ],
          },
          {
            heading: 'Αν τελικά χρειάζεται καινούργιο',
            body: [
              'Μερικές φορές το ύφασμα έχει φτάσει στο τέλος του και η επισκευή δεν συμφέρει. Θα σας το πούμε ειλικρινά.',
              'Σε αυτή την περίπτωση κατασκευάζουμε καινούργιο λάβαρο κατά παραγγελία, με το ίδιο έμβλημα και τα ίδια χρώματα, σε δεκαπέντε ημέρες.',
            ],
          },
        ],
        faqTitle: 'Συχνές ερωτήσεις',
        faq: [
          {
            q: 'Επισκευάζετε λάβαρα που δεν φτιάξατε εσείς;',
            a: 'Ναι. Αναλαμβάνουμε λάβαρα κάθε προέλευσης και ηλικίας.',
          },
          {
            q: 'Τι μπορεί να επισκευαστεί;',
            a: 'Κρόσσια και φούντες, ο ιστός, η σφαίρα ή ο σταυρός και η τελαμώνα. Πολύ συχνά ένα λάβαρο που μοιάζει τελειωμένο χρειάζεται μόνο καινούργια κρόσσια και έναν ίσιο ιστό.',
          },
          {
            q: 'Πόσο κοστίζει η επισκευή;',
            a: 'Εξαρτάται εντελώς από το τι χρειάζεται. Φέρτε μας το λάβαρο να το δούμε από κοντά και θα σας ενημερώσουμε πριν προχωρήσουμε σε οτιδήποτε.',
          },
          {
            q: 'Πόσο χρόνο θέλει;',
            a: 'Εξαρτάται από την έκταση της επισκευής. Πριν από τις παρελάσεις της 25ης Μαρτίου και της 28ης Οκτωβρίου προτείνουμε να μας το φέρετε τρεις εβδομάδες νωρίτερα.',
          },
          {
            q: 'Πού το φέρνω;',
            a: 'Στο κατάστημα στην Πινδάρου 5Β στη Λευκωσία ή στο εργοστάσιο στην οδό Νικολάου Ιωάννου 3 στο Καϊμακλί.',
          },
        ],
        relatedTitle: 'Δείτε επίσης',
      },
      en: {
        title: 'Banner repairs',
        metaTitle: 'Banner repair & restoration - Char. Rossides LTD, Nicosia',
        metaDescription:
          'We repair old school, club and church banners: fringing, tassels, poles, spheres and crosses, and harnesses. Bring the banner in and we will look at it.',
        intro: [
          'A banner does not always need replacing. Most of the old banners that reach our workshop need care rather than new fabric.',
          'We repair and restore banners for schools, clubs, associations and churches - even ones we did not make.',
          'Bring the banner to the shop or the factory so we can look at it properly and tell you what it needs.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'New fringing and tassels',
          'New pole, sphere, knob or cross',
          'New leather carrying harness',
          'Banners of any age or origin',
        ],
        sections: [
          {
            heading: 'What we take on',
            bullets: [
              'Replacing gold fringing that has worn or frayed',
              'New tassels, in a colour that matches the banner',
              'Refitting or replacing the emblem',
              'A new aluminium pole, sphere, knob or cross',
              'A new leather carrying harness',
            ],
          },
          {
            heading: 'Why repair is worth it',
            body: [
              'Many schools and parishes hold banners decades old. The emblem may have been drawn many years ago and exist nowhere else, and the banner itself may have passed through generations of pupils or parishioners.',
              'In those cases a repair preserves something that cannot be replaced. A banner with worn fringing, a bent pole or a split harness can often be made fit for the parade again.',
            ],
          },
          {
            heading: 'How it starts',
            body: [
              'We cannot tell what a banner needs without seeing it. Bring it to the shop on Pindarou or the factory in Kaimakli and we will examine it with you.',
              'We will tell you what can be repaired, what will be replaced and how long it will take, before you leave anything with us.',
            ],
          },
          {
            heading: 'Check the banner before the parade',
            body: [
              'The best moment to look at a school banner is not the week of the parade. Take it out of its cover in early September for the October parades, and in early March for 25 March.',
              'Look at the fringing, the tassels, the stitching around the emblem and the pole. If something is wrong, there is still time to bring it in.',
              'Demand rises sharply before 25 March and 28 October, so allow us three weeks.',
            ],
          },
          {
            heading: 'If it does need replacing',
            body: [
              'Sometimes the fabric has reached the end of its life and a repair is not worth it. We will tell you honestly.',
              'In that case we make a new banner to order, with the same emblem and the same colours, in fifteen days.',
            ],
          },
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'Do you repair banners you did not make?',
            a: 'Yes. We take on banners of any origin and any age.',
          },
          {
            q: 'What can be repaired?',
            a: 'Fringing and tassels, the pole, the sphere or cross, and the harness. Very often a banner that looks finished needs only new fringing and a straight pole.',
          },
          {
            q: 'What does a repair cost?',
            a: 'It depends entirely on what is needed. Bring the banner in so we can see it properly, and we will let you know before going ahead with anything.',
          },
          {
            q: 'How long does it take?',
            a: 'It depends on the extent of the repair. Before the 25 March and 28 October parades we suggest bringing it in three weeks ahead.',
          },
          {
            q: 'Where do I bring it?',
            a: 'To the shop at Pindarou 5B in Nicosia, or the factory at Nikolaou Ioannou 3 in Kaimakli.',
          },
        ],
        relatedTitle: 'See also',
      },
    },
  },
  {
    key: 'parades',
    slug: { el: 'paraggelies-parelaseon', en: 'parade-orders' },
    related: ['school', 'parade', 'repairs', 'national'],
    content: {
      el: {
        title: 'Παραγγελίες για παρελάσεις',
        metaTitle: 'Λάβαρα & σημαίες για παρελάσεις - πότε να παραγγείλετε',
        metaDescription:
          'Τι χρειάζεται ένα σχολείο ή σύλλογος για την παρέλαση της 25ης Μαρτίου και της 28ης Οκτωβρίου, και πόσο νωρίς πρέπει να παραγγείλει. Δώστε τρεις εβδομάδες.',
        intro: [
          'Κάθε χρόνο, τις δύο εβδομάδες πριν από την παρέλαση, δεχόμαστε τηλεφωνήματα από σχολεία και συλλόγους που ανακάλυψαν την τελευταία στιγμή ότι το λάβαρο έχει φθαρεί ή ότι λείπουν σημαίες.',
          'Αυτή η σελίδα υπάρχει για να μη σας συμβεί. Δείχνει τι χρειάζεται μια παρέλαση, πόσο χρόνο θέλει το καθένα και πότε πρέπει να μας τηλεφωνήσετε.',
          'Ο απλός κανόνας: δώστε μας τρεις εβδομάδες περιθώριο πριν από την ημερομηνία της παρέλασης.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Τρεις εβδομάδες περιθώριο πριν από την παρέλαση',
          'Κεντητό λάβαρο: 15 ημέρες',
          'Σημαίες σε σταθερές διαστάσεις: από απόθεμα',
          'Ελέγξτε το περσινό λάβαρο νωρίς',
        ],
        sections: [
          {
            heading: 'Πόσο χρόνο θέλει το καθένα',
            table: {
              columns: ['Τι χρειάζεστε', 'Χρόνος'],
              rows: [
                ['Εθνική σημαία σε σταθερή διάσταση', 'Από απόθεμα - 1 έως 5 ημέρες αν εξαντληθεί'],
                ['Σημαίες χειρός και σημαιάκια', 'Από απόθεμα ή με δικό σας σχέδιο'],
                ['Σημαία με λογότυπο ή έμβλημα', 'Έως 10 ημέρες'],
                ['Κεντητό λάβαρο', '15 ημέρες'],
                ['Κεντητά διακριτικά με δικό σας σχέδιο', '15 ημέρες'],
                ['Επισκευή παλιού λαβάρου', 'Ανάλογα με το τι χρειάζεται - φέρτε το νωρίς'],
              ],
            },
            footnote:
              "Οι χρόνοι μετρούν από την έγκριση του σχεδίου. Πριν από την 25η Μαρτίου και την 28η Οκτωβρίου η ζήτηση ανεβαίνει απότομα, γι' αυτό ζητάμε τρεις εβδομάδες.",
          },
          {
            heading: 'Το ημερολόγιο των παρελάσεων',
            body: [
              'Στην Κύπρο οι μεγάλες παρελάσεις είναι τέσσερις. Σημειώστε πότε πρέπει να μας τηλεφωνήσετε για την καθεμία.',
            ],
            table: {
              columns: ['Επέτειος', 'Τηλεφωνήστε μας'],
              rows: [
                ['25 Μαρτίου', 'Αρχές Μαρτίου'],
                ['1 Απριλίου', 'Μέσα Μαρτίου'],
                ['1 Οκτωβρίου', 'Αρχές Σεπτεμβρίου'],
                ['28 Οκτωβρίου', 'Αρχές Οκτωβρίου'],
              ],
            },
          },
          {
            heading: 'Τι χρειάζεται ένα σχολείο',
            bullets: [
              'Το λάβαρο του σχολείου - συνήθως 90 × 120 εκ., βελούδινο, με το έμβλημα και το όνομα του σχολείου',
              'Ιστό αλουμινίου 3 μέτρων, με σταυρό ή σφαίρα',
              'Δερμάτινη τελαμώνα για τον μαθητή που κρατά το λάβαρο',
              'Εθνικές σημαίες για τον ιστό της αυλής',
              'Σημαίες χειρός 30 × 20 εκ. για τους μαθητές',
              'Σημαιάκια για τον σημαιοστολισμό του χώρου',
            ],
          },
          {
            heading: 'Ελέγξτε το περσινό λάβαρο πρώτα',
            body: [
              'Πριν παραγγείλετε καινούργιο, βγάλτε το περσινό λάβαρο από τη θήκη του και δείτε το στο φως.',
              'Τα κρόσσια ξεφτίζουν, οι φούντες φθείρονται και οι ραφές γύρω από το έμβλημα ξηλώνονται με τα χρόνια. Όλα αυτά επισκευάζονται και συχνά κοστίζουν πολύ λιγότερο από ένα καινούργιο λάβαρο.',
            ],
          },
          {
            heading: 'Πώς να μας τηλεφωνήσετε',
            body: [
              'Έχετε πρόχειρα το όνομα του σχολείου ή του συλλόγου, τις διαστάσεις που θέλετε και - αν υπάρχει - το έμβλημα σε αρχείο.',
              'Αν δεν έχετε το έμβλημα σε καλή ποιότητα, μπορούμε να το δώσουμε σε γραφίστα να το ξανασχεδιάσει, με επιπλέον χρέωση που θα σας πούμε από πριν.',
            ],
          },
        ],
        faqTitle: 'Συχνές ερωτήσεις',
        faq: [
          {
            q: 'Πόσο νωρίς πρέπει να παραγγείλουμε για την παρέλαση;',
            a: 'Δώστε μας τρεις εβδομάδες περιθώριο πριν από την ημερομηνία της παρέλασης. Το κεντητό λάβαρο θέλει δεκαπέντε ημέρες κατασκευής, και εκείνες τις περιόδους η ζήτηση είναι μεγάλη.',
          },
          {
            q: 'Άργησα. Προλαβαίνετε;',
            a: 'Τηλεφωνήστε μας και ρωτήστε. Οι εθνικές σημαίες στις σταθερές διαστάσεις είναι σε απόθεμα και μπορείτε να τις παραλάβετε αμέσως. Για λάβαρο κατά παραγγελία, θα σας πούμε ειλικρινά αν προλαβαίνουμε.',
          },
          {
            q: 'Τι διάσταση έχει το λάβαρο ενός σχολείου;',
            a: 'Συνήθως 90 × 120 εκατοστά. Κατασκευάζουμε και άλλες διαστάσεις κατά παραγγελία.',
          },
          {
            q: 'Μπορούμε να επισκευάσουμε το περσινό λάβαρο αντί να πάρουμε καινούργιο;',
            a: 'Πολύ συχνά, ναι. Φέρτε το να το δούμε - κρόσσια, φούντες, ιστός, σφαίρα, σταυρός και τελαμώνα επισκευάζονται όλα.',
          },
          {
            q: 'Προμηθεύετε και σημαίες χειρός για τους μαθητές;',
            a: 'Ναι, σε διάσταση 30 × 20 εκατοστά, όπως και σημαιάκια για τον σημαιοστολισμό του σχολείου.',
          },
        ],
        relatedTitle: 'Δείτε επίσης',
      },
      en: {
        title: 'Ordering for parades',
        metaTitle: 'Banners & flags for parades - when to order',
        metaDescription:
          'What a school or club needs for the 25 March and 28 October parades, and how early to order. Allow three weeks before the date of the parade.',
        intro: [
          'Every year, in the fortnight before a parade, we take calls from schools and clubs that have discovered at the last minute that the banner is worn or that flags are missing.',
          'This page exists so that does not happen to you. It sets out what a parade needs, how long each item takes, and when to call us.',
          'The simple rule: allow us three weeks before the date of the parade.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Allow three weeks before the parade',
          'Embroidered banner: 15 days',
          'Flags in standard sizes: from stock',
          "Check last year's banner early",
        ],
        sections: [
          {
            heading: 'How long each item takes',
            table: {
              columns: ['What you need', 'Time'],
              rows: [
                ['National flag in a standard size', 'From stock - 1 to 5 days if out'],
                ['Hand flags and bunting', 'From stock, or to your own design'],
                ['Flag with a logo or emblem', 'Up to 10 days'],
                ['Embroidered banner', '15 days'],
                ['Embroidered badges to your own design', '15 days'],
                ['Repair of an old banner', 'Depends what it needs - bring it in early'],
              ],
            },
            footnote:
              'Times run from approval of the design. Demand rises sharply before 25 March and 28 October, which is why we ask for three weeks.',
          },
          {
            heading: 'The parade calendar',
            body: [
              'There are four major parades in Cyprus. Note when you should be calling us for each.',
            ],
            table: {
              columns: ['Anniversary', 'Call us'],
              rows: [
                ['25 March', 'Early March'],
                ['1 April', 'Mid March'],
                ['1 October', 'Early September'],
                ['28 October', 'Early October'],
              ],
            },
          },
          {
            heading: 'What a school needs',
            bullets: [
              'The school banner - usually 90 × 120 cm, velvet, with the school emblem and name',
              'A 3 metre aluminium pole, with a cross or sphere',
              'A leather harness for the pupil carrying the banner',
              'National flags for the pole in the yard',
              'Hand flags at 30 × 20 cm for the pupils',
              'Bunting to decorate the grounds',
            ],
          },
          {
            heading: "Check last year's banner first",
            body: [
              "Before ordering a new one, take last year's banner out of its cover and look at it in daylight.",
              'Fringing frays, tassels wear and the stitching around the emblem works loose over the years. All of it can be repaired, and it often costs a great deal less than a new banner.',
            ],
          },
          {
            heading: 'How to call us',
            body: [
              'Have ready the name of the school or club, the dimensions you want and - if you have one - the emblem as a file.',
              'If you do not have the emblem in good quality, we can pass it to a graphic designer to be redrawn, for an additional charge we will tell you about beforehand.',
            ],
          },
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'How early should we order for a parade?',
            a: 'Allow us three weeks before the date of the parade. An embroidered banner takes fifteen days to make, and demand in those periods is heavy.',
          },
          {
            q: 'We have left it late. Can you still do it?',
            a: 'Call and ask. National flags in standard sizes are in stock and can be collected straight away. For a banner made to order, we will tell you honestly whether there is time.',
          },
          {
            q: 'What size is a school banner?',
            a: 'Usually 90 × 120 centimetres. We make other sizes to order.',
          },
          {
            q: "Can we repair last year's banner instead of buying a new one?",
            a: 'Very often, yes. Bring it in and we will look at it - fringing, tassels, pole, sphere, cross and harness can all be seen to.',
          },
          {
            q: 'Do you supply hand flags for pupils?',
            a: 'Yes, at 30 × 20 centimetres, along with bunting to decorate the school.',
          },
        ],
        relatedTitle: 'See also',
      },
    },
  },
  {
    key: 'school',
    slug: { el: 'lavara-scholeion-ekklision', en: 'school-church-banners' },
    related: ['parades', 'parade', 'repairs', 'poles'],
    content: {
      el: {
        title: 'Λάβαρα σχολείων και εκκλησιών',
        metaTitle: 'Λάβαρα σχολείων & εκκλησιαστικά λάβαρα - χειροποίητα',
        metaDescription:
          'Χειροποίητα βελούδινα λάβαρα για σχολεία και εκκλησίες, με κεντητά γράμματα, χρυσά κρόσσια και ιστό αλουμινίου. Κατασκευή σε 15 ημέρες, στη Λευκωσία.',
        intro: [
          'Το λάβαρο είναι το πρώτο πράγμα που βλέπει κανείς όταν περνά το σχολείο στην παρέλαση ή η ενορία στη λιτανεία - και μένει για δεκαετίες.',
          'Κατασκευάζουμε λάβαρα σχολείων, ενοριών και μοναστηριών ένα-ένα στο εργαστήριό μας στη Λευκωσία, με το όνομα και το έμβλημα που θέλετε.',
          'Η συνηθισμένη διάσταση για λάβαρο σχολείου είναι 90 × 120 εκατοστά. Ο χρόνος κατασκευής είναι δεκαπέντε ημέρες.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Για σχολεία, ενορίες και μοναστήρια',
          'Βελούδο σε μπλε, μαύρο ή μπορντό',
          'Συνήθης διάσταση σχολείου 90 × 120 εκ.',
          'Ιστός αλουμινίου 3 μέτρων',
          'Ιστός, στέψη και τελαμώνα, όπως τα θέλετε',
          'Κατασκευή σε 15 ημέρες',
        ],
        sections: [
          {
            heading: 'Τι περιλαμβάνει',
            bullets: [
              'Βελούδινο λάβαρο 90 × 120 εκ., ή σε όποια διάσταση θέλετε',
              'Το όνομα του σχολείου με κεντητή απλικέ εργασία',
              'Το έμβλημα του σχολείου, κεντητό ή τυπωμένο, ραμμένο στο ύφασμα',
              'Χρυσά κρόσσια και φούντες στο χρώμα που επιλέγετε',
              'Ιστός αλουμινίου 3 μέτρων, διαμέτρου 39 χιλιοστών',
              'Σταυρός ή σφαίρα στην κορυφή',
            ],
            footnote:
              'Δεν χρειάζεται να τα πάρετε όλα μαζί. Αν το σχολείο έχει ήδη ιστό ή τελαμώνα σε καλή κατάσταση, παραγγέλνετε μόνο το λάβαρο - και αντίστροφα, αν χρειάζεστε μόνο ιστό ή τελαμώνα, τα φτιάχνουμε και μόνα τους.',
          },
          {
            heading: 'Χρώματα και έμβλημα',
            body: [
              'Το βελούδο διατίθεται σε μπλε σκούρο, μαύρο και μπορντό. Τα περισσότερα σχολεία επιλέγουν το χρώμα που ταιριάζει με τα χρώματα του σχολείου ή με το προηγούμενο λάβαρο.',
              'Το έμβλημα στο κέντρο μπορεί να είναι κεντητό ή τυπωμένο. Επειδή η πίσω όψη του λαβάρου είναι κι αυτή βελούδινη, οι ραφές δεν φαίνονται από πίσω.',
              'Στείλτε μας το έμβλημα σε EPS, PDF, SVG ή PNG υψηλής ανάλυσης. Αν το σχολείο έχει μόνο μια παλιά φωτοτυπία ή φωτογραφία, μπορούμε να το δώσουμε σε γραφίστα να το ξανασχεδιάσει, με επιπλέον χρέωση που θα σας πούμε από πριν.',
            ],
          },
          {
            heading: 'Ο ιστός και η τελαμώνα',
            body: [
              'Ο ιστός είναι από αλουμίνιο, μήκους 3 μέτρων και διαμέτρου 39 χιλιοστών, και ζυγίζει δύο με δυόμισι κιλά - αρκετά ελαφρύς ώστε να τον κρατήσει μαθητής σε ολόκληρη τη διαδρομή.',
              'Ο ιστός διατίθεται σε τρία φινιρίσματα: μπλε και λευκός, ολόλευκος, ή βελούδινος με κίτρινο κορδόνι. Το βελούδο του ιστού είναι στα ίδια τρία χρώματα με το λάβαρο - μπλε σκούρο, μαύρο ή μπορντό - ώστε να ταιριάζουν.',
              'Προαιρετικά τοποθετούμε μηχανισμό που χωρίζει τον ιστό στη μέση, ώστε το λάβαρο να μπαίνει σε αυτοκίνητο και να αποθηκεύεται πιο εύκολα.',
              'Η τελαμώνα είναι από δέρμα αγελάδας, με δύο ρυθμιζόμενους ιμάντες 100 και 60 εκατοστών, πλάτους 4 εκατοστών, και πόρπη που δεν σκουριάζει.',
            ],
          },
          {
            heading: 'Εκκλησιαστικά λάβαρα',
            body: [
              'Κατασκευάζουμε εκκλησιαστικά λάβαρα για ενορίες, μοναστήρια και θρησκευτικά σωματεία, με την ίδια χειροποίητη εργασία: βελούδο, κεντητά γράμματα με χρυσή και μεταλλική κλωστή, χρυσά κρόσσια και φούντες.',
              'Για την ενορία προτείνουμε τον βελούδινο ιστό - με κίτρινο κορδόνι, στο ίδιο χρώμα με το λάβαρο. Στην κορυφή μπαίνει σταυρός ή σφαίρα.',
              'Η τελαμώνα από δέρμα αγελάδας στηρίζει το βάρος στον ώμο κατά τη λιτανεία. Την προσθέτετε αν τη χρειάζεστε.',
              'Αν το λάβαρο χρειάζεται για συγκεκριμένη γιορτή ή πανηγύρι, τηλεφωνήστε μας τουλάχιστον τρεις εβδομάδες νωρίτερα.',
            ],
          },
          {
            heading: 'Πότε να παραγγείλετε',
            body: [
              'Το λάβαρο θέλει δεκαπέντε ημέρες κατασκευής. Πριν από την 25η Μαρτίου και την 28η Οκτωβρίου η ζήτηση ανεβαίνει απότομα, οπότε δώστε μας τρεις εβδομάδες περιθώριο.',
              'Πρακτικά: για τις παρελάσεις του Οκτωβρίου τηλεφωνήστε στις αρχές Σεπτεμβρίου, και για την 25η Μαρτίου στις αρχές Μαρτίου.',
            ],
          },
          {
            heading: 'Πριν παραγγείλετε καινούργιο',
            body: [
              'Αν το σχολείο ή η ενορία έχει ήδη λάβαρο, δείτε το πρώτα. Πολλές ενορίες κρατούν λάβαρα δεκαετιών, με κέντημα που δεν αντιγράφεται εύκολα σήμερα, και συχνά χρειάζονται μόνο καινούργια κρόσσια και φούντες.',
              'Η επισκευή διατηρεί το έμβλημα και την ιστορία του σχολείου ή της ενορίας, και συχνά κοστίζει πολύ λιγότερο από ένα καινούργιο λάβαρο.',
            ],
          },
        ],
        faqTitle: 'Συχνές ερωτήσεις',
        faq: [
          {
            q: 'Τι διάσταση έχει ένα λάβαρο σχολείου;',
            a: 'Η συνηθισμένη διάσταση είναι 90 × 120 εκατοστά. Κατασκευάζουμε και άλλες διαστάσεις κατά παραγγελία.',
          },
          {
            q: 'Πόσο χρόνο θέλει η κατασκευή;',
            a: 'Δεκαπέντε ημέρες. Πριν από τις παρελάσεις της 25ης Μαρτίου και της 28ης Οκτωβρίου δώστε μας τρεις εβδομάδες περιθώριο.',
          },
          {
            q: 'Τι περιλαμβάνει η παραγγελία;',
            a: 'Ό,τι επιλέξετε. Τα περισσότερα σχολεία παίρνουν λάβαρο, ιστό με στέψη και τελαμώνα μαζί. Αν έχετε ήδη ιστό ή τελαμώνα σε καλή κατάσταση, παραγγέλνετε μόνο το λάβαρο. Πείτε μας τι χρειάζεστε και σας δίνουμε τιμή για αυτό.',
          },
          {
            q: 'Δεν έχουμε το έμβλημα σε αρχείο. Τι κάνουμε;',
            a: 'Στείλτε μας ό,τι έχετε. Αν η ποιότητα δεν επαρκεί, μπορούμε να το δώσουμε σε γραφίστα να το ξανασχεδιάσει, με επιπλέον χρέωση που θα σας πούμε πριν προχωρήσουμε.',
          },
          {
            q: 'Φτιάχνετε εκκλησιαστικά λάβαρα;',
            a: 'Ναι, για ενορίες, μοναστήρια και θρησκευτικά σωματεία - βελούδο, κεντητά γράμματα με χρυσή κλωστή, χρυσά κρόσσια και φούντες, με ιστό και σταυρό ή σφαίρα.',
          },
          {
            q: 'Είναι βαρύ για μαθητή;',
            a: 'Ο ιστός ζυγίζει δύο με δυόμισι κιλά. Με δερμάτινη τελαμώνα το βάρος μεταφέρεται στον ώμο και ο μαθητής τον κρατά άνετα σε όλη τη διαδρομή. Αν και πάλι σας φαίνεται βαρύ, το κατασκευάζουμε και σε άλλες διαστάσεις κατά παραγγελία.',
          },
        ],
        relatedTitle: 'Δείτε επίσης',
      },
      en: {
        title: 'Church and school banners',
        metaTitle: 'Church & school banners - handmade to order in Cyprus',
        metaDescription:
          'Handmade velvet banners for schools and churches, with embroidered lettering, gold fringing and aluminium pole. Made in Nicosia in 15 days.',
        intro: [
          'The banner is the first thing anyone sees as a school passes in the parade or a parish walks in procession - and it stays with them for decades.',
          'We make banners for schools, parishes and monasteries one by one at our workshop in Nicosia, carrying the name and emblem you want. You choose what goes with it: pole, finial and harness, or only the parts you are missing.',
          'The usual size for a school banner is 90 × 120 centimetres. Either takes fifteen days to make.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'For schools, parishes and monasteries',
          'Velvet in navy blue, black or Bordeaux',
          'Usual school size 90 × 120 cm',
          '3 m aluminium pole',
          'Pole, finial and harness as you choose',
          'Made in 15 days',
        ],
        sections: [
          {
            heading: 'What a banner comes with',
            bullets: [
              'Velvet banner at 90 × 120 cm, or any size you want',
              'The school name in appliqué embroidery',
              'The school emblem, embroidered or printed, sewn onto the fabric',
              'Gold fringing and tassels in the colour you choose',
              'A 3 metre aluminium pole, 39 mm in diameter',
              'A cross or sphere at the top',
            ],
            footnote:
              'You do not have to take all of it together. If the school already has a pole or harness in good condition, order just the banner - and equally, if all you need is a pole or a harness, we make those on their own.',
          },
          {
            heading: 'Colours and emblem',
            body: [
              'The velvet comes in navy blue, black and Bordeaux. Most schools pick whichever matches the school colours or the previous banner.',
              'The emblem at the centre can be embroidered or printed. Because the reverse face of the banner is velvet too, the stitching is not visible from behind.',
              'Send us the emblem as EPS, PDF, SVG or a high-resolution PNG. If the school has only an old photocopy or photograph, we can pass it to a graphic designer to be redrawn, for an additional charge we will tell you about beforehand.',
            ],
          },
          {
            heading: 'The pole and harness',
            body: [
              'The pole is aluminium, 3 metres long and 39 mm in diameter, weighing two to two and a half kilos - light enough for a pupil to carry the whole route.',
              'The pole comes in three finishes: blue and white, plain white, or velvet with a yellow rope. The pole velvet comes in the same three colours as the banner - navy blue, black or Bordeaux - so the two match.',
              'As an option we fit a mechanism that splits the pole in half, so the banner fits in a car and stores more easily.',
              'The harness is cow leather, with two adjustable straps of 100 and 60 centimetres, 4 centimetres wide, and a buckle that does not corrode.',
            ],
          },
          {
            heading: 'Church banners',
            body: [
              'We make church banners for parishes, monasteries and religious associations with the same handwork: velvet, lettering embroidered in gold and metallic thread, gold fringing and tassels.',
              'For a parish we suggest the velvet pole - with a yellow rope, in the same colour as the banner. A cross or sphere is fitted at the top.',
              'The cow-leather harness rests the weight on the shoulder during a procession. Add one if you need it.',
              'If the banner is needed for a particular feast day, call us at least three weeks ahead.',
            ],
          },
          {
            heading: 'When to order',
            body: [
              'A banner takes fifteen days to make. Demand rises sharply before 25 March and 28 October, so allow us three weeks.',
              'In practice: call in early September for the October parades, and in early March for 25 March.',
            ],
          },
          {
            heading: 'Before ordering a new one',
            body: [
              'If the school or parish already has a banner, look at it first. Many parishes hold banners decades old, with embroidery that is not easily reproduced today, and often they need only new fringing and tassels.',
              'A repair keeps the emblem and the history of the school or parish, and often costs a great deal less than a new banner.',
            ],
          },
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'What size is a school banner?',
            a: 'The usual size is 90 × 120 centimetres. We make other sizes to order.',
          },
          {
            q: 'How long does it take to make?',
            a: 'Fifteen days. Before the 25 March and 28 October parades, allow us three weeks.',
          },
          {
            q: 'What does an order include?',
            a: 'Whatever you choose. Most schools take the banner, the pole with its finial and a harness together. If you already have a pole or harness in good condition, order just the banner. Tell us what you need and we will price that.',
          },
          {
            q: 'We do not have the emblem as a file. What now?',
            a: 'Send us whatever you have. If the quality is not good enough, we can pass it to a graphic designer to be redrawn, for an additional charge we will tell you about before going ahead.',
          },
          {
            q: 'Do you make church banners?',
            a: 'Yes, for parishes, monasteries and religious associations - velvet, lettering embroidered in gold thread, gold fringing and tassels, with a pole and a cross or sphere.',
          },
          {
            q: 'Is it heavy for a pupil?',
            a: 'The pole weighs two to two and a half kilos. With a leather harness the weight rests on the shoulder and a pupil can carry it comfortably for the whole route. If you still think it is too heavy, we can make it to custom dimensions.',
          },
        ],
        relatedTitle: 'See also',
      },
    },
  },
  {
    key: 'table',
    slug: { el: 'epitrapezies-simaies', en: 'table-flags' },
    related: ['national', 'logo', 'bunting', 'sizes'],
    content: {
      el: {
        title: 'Επιτραπέζιες σημαίες',
        metaTitle: 'Επιτραπέζιες σημαίες με βάση - Χαρ. Ρωσσίδης ΛΤΔ',
        metaDescription:
          'Επιτραπέζιες σημαίες 24 × 16 εκ., συνολικό ύψος 33 εκ., σε μεταλλική ασημί βάση. Σημαίες χωρών ή με το λογότυπό σας. Κατασκευή στη Λευκωσία.',
        intro: [
          'Επιτραπέζιες σημαίες για γραφεία, αίθουσες συνεδριάσεων, υποδοχές και τελετές - σε σημαίες χωρών ή με το λογότυπο του οργανισμού σας.',
          'Το σετ έχει συνολικό ύψος 33 εκατοστά και στηρίζεται σε μεταλλική ασημί βάση διαμέτρου 6 εκατοστών.',
          'Χρησιμοποιούνται από υπουργεία και δημόσιες υπηρεσίες, πρεσβείες, δήμους σε τελετές αδελφοποίησης, ξενοδοχεία και επιχειρήσεις.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Σημαία 24 × 16 εκ.',
          'Συνολικό ύψος 33 εκ.',
          'Μεταλλική ασημί βάση, διαμέτρου 6 εκ.',
          'Σημαίες χωρών ή με λογότυπο',
        ],
        sections: [
          {
            heading: 'Διαστάσεις',
            table: {
              columns: ['Στοιχείο', 'Διάσταση'],
              rows: [
                ['Σημαία', '24 × 16 εκ. (πλάτος × ύψος)'],
                ['Συνολικό ύψος', '33 εκ.'],
                ['Βάση', 'Μεταλλική, ασημί, διαμέτρου 6 εκ.'],
              ],
            },
          },
          {
            heading: 'Σημαίες χωρών ή δικό σας λογότυπο',
            body: [
              'Κατασκευάζουμε επιτραπέζιες σημαίες όλων των χωρών, καθώς και σημαίες με το λογότυπο ή το έμβλημα του οργανισμού σας.',
              'Για λογότυπο, στείλτε μας διανυσματικό αρχείο - EPS, PDF ή SVG - ή εικόνα υψηλής ανάλυσης σε PNG. Ο χρόνος για μικρές ποσότητες με δικό σας σχέδιο είναι έως δέκα ημέρες.',
              'Δεν υπάρχει ελάχιστη ποσότητα: κατασκευάζουμε ακόμη και ένα τεμάχιο.',
            ],
          },
          {
            heading: 'Πού χρησιμοποιούνται',
            bullets: [
              'Γραφεία διευθυντών και αίθουσες συνεδριάσεων',
              'Υπογραφές συμφωνιών και τελετές αδελφοποίησης',
              'Πρεσβείες, προξενεία και δημόσιες υπηρεσίες',
              'Συνέδρια και διεθνείς συναντήσεις',
              'Υποδοχές ξενοδοχείων',
            ],
          },
          {
            heading: 'Παράδοση και παραλαβή',
            bullets: [
              'Αποστολή με κούριερ σε όλη την Κύπρο',
              'Χωρίς χρέωση αποστολής για παραγγελίες άνω των €150',
              'Παραλαβή από το κατάστημα ή το εργοστάσιο',
              'Χωρίς προκαταβολή - μετρητά ή κάρτα στο κατάστημα',
            ],
          },
        ],
        faqTitle: 'Συχνές ερωτήσεις',
        faq: [
          {
            q: 'Τι διαστάσεις έχει η επιτραπέζια σημαία;',
            a: 'Η σημαία είναι 24 × 16 εκατοστά και το σετ έχει συνολικό ύψος 33 εκατοστά, σε μεταλλική βάση διαμέτρου 6 εκατοστών.',
          },
          {
            q: 'Από τι είναι η βάση;',
            a: 'Μεταλλική, σε ασημί χρώμα.',
          },
          {
            q: 'Μπορείτε να βάλετε το λογότυπό μας;',
            a: 'Ναι. Στείλτε μας το σχέδιο σε EPS, PDF, SVG ή PNG υψηλής ανάλυσης. Για μικρές ποσότητες ο χρόνος είναι έως δέκα ημέρες.',
          },
          {
            q: 'Υπάρχει ελάχιστη ποσότητα;',
            a: 'Όχι. Κατασκευάζουμε από ένα τεμάχιο.',
          },
        ],
        relatedTitle: 'Δείτε επίσης',
      },
      en: {
        title: 'Table flags',
        metaTitle: 'Table flags with base - Char. Rossides LTD, Nicosia',
        metaDescription:
          'Table flags at 24 × 16 cm, 33 cm total height, on a silver metal base. National flags or your own logo. Made in Nicosia, Cyprus.',
        intro: [
          'Table flags for offices, meeting rooms, receptions and ceremonies - as national flags or carrying the logo of your organisation.',
          'The set stands 33 centimetres tall on a silver metal base 6 centimetres across.',
          'They are used by ministries and government departments, embassies, municipalities at twinning ceremonies, hotels and businesses.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Flag 24 × 16 cm',
          '33 cm total height',
          'Silver metal base, 6 cm across',
          'National flags or your logo',
        ],
        sections: [
          {
            heading: 'Dimensions',
            table: {
              columns: ['Element', 'Dimension'],
              rows: [
                ['Flag', '24 × 16 cm (width × height)'],
                ['Total height', '33 cm'],
                ['Base', 'Metal, silver, 6 cm across'],
              ],
            },
          },
          {
            heading: 'National flags or your own logo',
            body: [
              'We make table flags of every country, as well as flags carrying the logo or emblem of your organisation.',
              'For a logo, send us a vector file - EPS, PDF or SVG - or a high-resolution PNG. Small quantities to your own design take up to ten days.',
              'There is no minimum quantity: we will make a single piece.',
            ],
          },
          {
            heading: 'Where they are used',
            bullets: [
              'Directors offices and meeting rooms',
              'Signing ceremonies and municipal twinnings',
              'Embassies, consulates and government departments',
              'Conferences and international meetings',
              'Hotel receptions',
            ],
          },
          {
            heading: 'Delivery and collection',
            bullets: [
              'Courier delivery anywhere in Cyprus',
              'No delivery charge on orders over €150',
              'Collection from the shop or the factory',
              'No deposit - cash or card at the shop',
            ],
          },
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'What size is a table flag?',
            a: 'The flag is 24 × 16 centimetres and the set stands 33 centimetres tall, on a metal base 6 centimetres across.',
          },
          {
            q: 'What is the base made of?',
            a: 'Metal, in a silver finish.',
          },
          {
            q: 'Can you put our logo on it?',
            a: 'Yes. Send us the design as EPS, PDF, SVG or a high-resolution PNG. Small quantities take up to ten days.',
          },
          {
            q: 'Is there a minimum quantity?',
            a: 'No. We will make a single piece.',
          },
        ],
        relatedTitle: 'See also',
      },
    },
  },
  {
    key: 'poles',
    slug: { el: 'istoi-kontaria', en: 'flag-poles' },
    related: ['parade', 'school', 'repairs', 'parades'],
    content: {
      el: {
        title: 'Ιστοί & κοντάρια',
        metaTitle: 'Ιστοί & κοντάρια σημαιών - αλουμινίου, 3 μέτρων',
        metaDescription:
          'Ιστοί αλουμινίου 3 μέτρων, διαμέτρου 39 χιλιοστών, με σταυρό ή σφαίρα και προαιρετικό μηχανισμό διαίρεσης. Πωλούνται και ξεχωριστά. Λευκωσία.',
        intro: [
          'Πουλάμε ιστούς, κοντάρια και εξαρτήματα και ξεχωριστά, όχι μόνο μαζί με λάβαρο.',
          'Είναι χρήσιμο αν έχετε ήδη λάβαρο σε καλή κατάσταση αλλά ο ιστός έχει στραβώσει, αν χάθηκε η σφαίρα ή ο σταυρός, ή αν χρειάζεστε δεύτερο σετ.',
          'Επειδή κατασκευάζονται και διατίθενται εδώ, δεν χρειάζεται να περιμένετε αποστολή από το εξωτερικό για ένα αντικείμενο τριών μέτρων.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Αλουμίνιο, μήκους 3 μέτρων',
          'Διάμετρος 39 χιλιοστά, βάρος 2-2,5 κιλά',
          'Σταυρός ή σφαίρα στην κορυφή',
          'Προαιρετικός μηχανισμός διαίρεσης',
        ],
        sections: [
          {
            heading: 'Προδιαγραφές ιστού',
            table: {
              columns: ['Χαρακτηριστικό', 'Προδιαγραφή'],
              rows: [
                ['Υλικό', 'Αλουμίνιο'],
                ['Μήκος', '3 μέτρα'],
                ['Διάμετρος', '39 χιλιοστά'],
                ['Βάρος', '2 έως 2,5 κιλά'],
                ['Διαίρεση', 'Προαιρετικός μηχανισμός που χωρίζει τον ιστό στη μέση'],
              ],
            },
          },
          {
            heading: 'Φινίρισμα ιστού',
            body: [
              'Ο ιστός διατίθεται σε τρία φινιρίσματα. Επιλέγετε ανάλογα με τη σημαία ή το λάβαρο που θα κρατήσει.',
            ],
            bullets: [
              '**Ελληνική σημαία** - ιστός σε μπλε και λευκό',
              '**Κυπριακή σημαία** - ολόλευκος ιστός',
              '**Βελούδινος** - βελούδινος ιστός με κίτρινο κορδόνι, σε μπλε σκούρο, μαύρο ή μπορντό',
            ],
            footnote:
              'Το βελούδινο φινίρισμα ταιριάζει σε λάβαρα σχολείων και εκκλησιών: το βελούδο του ιστού είναι στα ίδια τρία χρώματα με το βελούδο του λαβάρου, οπότε τα δύο δένουν μεταξύ τους.',
          },
          {
            heading: 'Στέψη',
            body: [
              'Στην κορυφή του ιστού τοποθετείται σταυρός ή σφαίρα, ανάλογα με τη σημαία και τη χρήση.',
            ],
            bullets: [
              'Σταυρός από PVC - η συνηθισμένη επιλογή για την ελληνική σημαία',
              'Σφαίρα - η συνηθισμένη επιλογή για την κυπριακή',
              'Η σφαίρα διατίθεται σε πλαστικό ή σε μπρούντζινο πόμωλο',
            ],
          },
          {
            heading: 'Ο μηχανισμός διαίρεσης',
            body: [
              'Ένας ιστός τριών μέτρων δεν χωράει σε αυτοκίνητο και δεν αποθηκεύεται εύκολα σε ντουλάπι σχολείου.',
              'Ο προαιρετικός μηχανισμός χωρίζει τον ιστό σε δύο κομμάτια, ώστε να μεταφέρεται και να φυλάσσεται πιο εύκολα, και να συναρμολογείται ξανά πριν από την παρέλαση.',
            ],
          },
          {
            heading: 'Τελαμώνες',
            body: [
              'Τις τελαμώνες τις φτιάχνουμε και μόνες τους, είτε μαζί με καινούργιο λάβαρο είτε για λάβαρο που έχετε ήδη.',
              'Είναι από δέρμα αγελάδας, με δύο ρυθμιζόμενους ιμάντες 100 και 60 εκατοστών, πλάτους 4 εκατοστών, και πόρπη που δεν σκουριάζει.',
              'Αν η παλιά τελαμώνα του σχολείου έχει σκληρύνει ή σκιστεί, αντικαθίσταται χωρίς να πειραχτεί το λάβαρο.',
            ],
          },
        ],
        faqTitle: 'Συχνές ερωτήσεις',
        faq: [
          {
            q: 'Πουλάτε ιστούς χωρίς λάβαρο;',
            a: 'Ναι. Ιστοί, σφαίρες, σταυροί, εξαρτήματα και τελαμώνες διατίθενται και ξεχωριστά.',
          },
          {
            q: 'Τι μήκος και βάρος έχει ο ιστός;',
            a: 'Τρία μέτρα, διαμέτρου 39 χιλιοστών, και ζυγίζει δύο με δυόμισι κιλά.',
          },
          {
            q: 'Χωρίζει για να μεταφερθεί;',
            a: 'Προαιρετικά, ναι. Υπάρχει μηχανισμός που τον χωρίζει στη μέση για μεταφορά και αποθήκευση.',
          },
          {
            q: 'Τι μπαίνει στην κορυφή;',
            a: 'Σταυρός από PVC, η συνηθισμένη επιλογή για την ελληνική σημαία, ή σφαίρα για την κυπριακή. Η σφαίρα διατίθεται σε πλαστικό ή μπρούντζινο πόμωλο.',
          },
          {
            q: 'Σε τι φινιρίσματα υπάρχει ο ιστός;',
            a: 'Σε τρία: μπλε και λευκός για την ελληνική σημαία, ολόλευκος για την κυπριακή, ή βελούδινος με κίτρινο κορδόνι. Το βελούδο διατίθεται σε μπλε σκούρο, μαύρο και μπορντό - τα ίδια χρώματα με τα λάβαρα.',
          },
        ],
        relatedTitle: 'Δείτε επίσης',
      },
      en: {
        title: 'Flag poles & fittings',
        metaTitle: 'Flag poles & fittings - 3 m aluminium, Nicosia',
        metaDescription:
          'Aluminium poles 3 metres long and 39 mm in diameter, with cross or sphere and an optional splitting mechanism. Sold separately. Made in Cyprus.',
        intro: [
          'We sell poles, staves and fittings separately, not only together with a banner.',
          'That helps if you already have a banner in good condition but the pole has bent, if the sphere or cross has been lost, or if you need a second set.',
          'Because they are supplied here, you are not waiting on a shipment from abroad for a three-metre object.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Aluminium, 3 metres long',
          '39 mm diameter, 2-2.5 kg',
          'Cross or sphere at the top',
          'Optional splitting mechanism',
        ],
        sections: [
          {
            heading: 'Pole specification',
            table: {
              columns: ['Feature', 'Specification'],
              rows: [
                ['Material', 'Aluminium'],
                ['Length', '3 metres'],
                ['Diameter', '39 mm'],
                ['Weight', '2 to 2.5 kg'],
                ['Splitting', 'Optional mechanism that separates the pole in half'],
              ],
            },
          },
          {
            heading: 'Pole finishes',
            body: [
              'The pole comes in three finishes. Choose according to the flag or banner it will carry.',
            ],
            bullets: [
              '**Greek flag** - a blue and white pole',
              '**Cypriot flag** - a plain white pole',
              '**Velvet** - a velvet pole with a yellow rope, in navy blue, black or Bordeaux',
            ],
            footnote:
              'The velvet finish suits school and church banners: the pole velvet comes in the same three colours as the banner velvet, so the two match.',
          },
          {
            heading: 'Finials',
            body: [
              'A cross or a sphere is fitted at the top of the pole, depending on the flag and the use.',
            ],
            bullets: [
              'A PVC cross - the usual choice for the Greek flag',
              'A sphere - the usual choice for the Cypriot',
              'The sphere is available in plastic, or as a bronze knob (πόμωλο)',
            ],
          },
          {
            heading: 'The splitting mechanism',
            body: [
              'A three-metre pole does not fit in a car and does not store easily in a school cupboard.',
              'The optional mechanism separates the pole into two pieces, so it travels and stores more easily and goes back together before the parade.',
            ],
          },
          {
            heading: 'Carrying harnesses',
            body: [
              'We also supply cow-leather harnesses, with two adjustable straps of 100 and 60 centimetres, 4 centimetres wide, and a buckle that does not corrode.',
              'If the old school harness has hardened or split, it can be replaced without touching the banner itself.',
              'Harnesses are cow leather, with two adjustable straps of 100 and 60 centimetres, 4 centimetres wide, and a buckle that does not corrode.',
            ],
          },
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'Do you sell poles without a banner?',
            a: 'Yes. Poles, spheres, crosses, fittings and harnesses are all available separately.',
          },
          {
            q: 'What length and weight is the pole?',
            a: 'Three metres, 39 mm in diameter, weighing two to two and a half kilos.',
          },
          {
            q: 'Does it come apart for transport?',
            a: 'As an option, yes. A mechanism separates it in half for transport and storage.',
          },
          {
            q: 'What goes on the top?',
            a: 'A PVC cross, the usual choice for the Greek flag, or a sphere for the Cypriot. The sphere comes in plastic or as a bronze knob.',
          },
          {
            q: 'What finishes does the pole come in?',
            a: 'Three: blue and white for the Greek flag, plain white for the Cypriot, or velvet with a yellow rope. The velvet comes in navy blue, black and Bordeaux - the same colours as our banners.',
          },
        ],
        relatedTitle: 'See also',
      },
    },
  },
  {
    key: 'bunting',
    slug: { el: 'simaiostolismos', en: 'bunting-street-decoration' },
    related: ['national', 'logo', 'table', 'parades'],
    content: {
      el: {
        title: 'Σημαιοστολισμός',
        metaTitle: 'Σημαιοστολισμός & σημαιάκια - Χαρ. Ρωσσίδης ΛΤΔ',
        metaDescription:
          'Σημαιάκια 30 × 20 εκ., τρία ανά μέτρο ή σε δική σας πυκνότητα, σε όποιον συνδυασμό χωρών θέλετε. Για δήμους, σχολεία, πανηγύρια και εκδηλώσεις.',
        intro: [
          'Κατασκευάζουμε σειρές από σημαιάκια για σημαιοστολισμό δρόμων, πλατειών, σχολικών αυλών, εκκλησιών και χώρων εκδηλώσεων.',
          'Τα σημαιάκια είναι 30 × 20 εκατοστά. Η συνήθης πυκνότητα είναι τρία ανά μέτρο, αλλά μπορείτε να διαλέξετε όποια πυκνότητα σας βολεύει. Ο συνδυασμός των σημαιών είναι επίσης δικός σας.',
          'Προμηθεύουμε τα υλικά. Η τοποθέτηση γίνεται από εσάς ή από τον δικό σας συνεργείο.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Σημαιάκια 30 × 20 εκ.',
          'Συνήθως τρία ανά μέτρο, ή δική σας πυκνότητα',
          'Όποιος συνδυασμός χωρών, ή δικό σας σχέδιο',
          'Προμήθεια υλικών - χωρίς τοποθέτηση',
        ],
        sections: [
          {
            heading: 'Προδιαγραφές',
            table: {
              columns: ['Στοιχείο', 'Προδιαγραφή'],
              rows: [
                ['Διάσταση σημαιακίου', '30 × 20 εκ. (πλάτος × ύψος)'],
                ['Πυκνότητα', 'Συνήθως τρία σημαιάκια ανά μέτρο - ή όση θέλετε'],
                ['Ύφασμα', '100% πολυεστέρας, ψηφιακή εκτύπωση'],
                ['Σχέδια', 'Σημαίες χωρών, συνδυασμοί, ή δικό σας σχέδιο'],
              ],
            },
          },
          {
            heading: 'Πυκνότητα και κόστος',
            body: [
              'Η συνήθης πυκνότητα είναι **τρία σημαιάκια ανά μέτρο**. Δεν είναι όμως δεσμευτική: ορίζετε εσείς πόσο αραιά ή πυκνά θα μπουν.',
              'Η χρέωση γίνεται **ανά σημαιάκι** - μετράει ο συνολικός αριθμός σημαίων πάνω στο σχοινί, όχι τα μέτρα. Αυτό σημαίνει ότι με πιο αραιή τοποθέτηση καλύπτετε το ίδιο μήκος με λιγότερα σημαιάκια, άρα με μικρότερο κόστος.',
              'Πείτε μας πόσα μέτρα θέλετε να καλύψετε και τι προϋπολογισμό έχετε, και θα σας προτείνουμε πυκνότητα.',
            ],
          },
          {
            heading: 'Πού χρησιμοποιείται',
            bullets: [
              'Δήμοι και κοινότητες στις εθνικές επετείους',
              'Σχολικές αυλές πριν από τις παρελάσεις',
              'Εκκλησίες και πανηγύρια',
              'Εγκαίνια καταστημάτων και εμπορικές εκδηλώσεις',
              'Αθλητικές διοργανώσεις και φεστιβάλ',
            ],
          },
          {
            heading: 'Συνδυασμοί και δικό σας σχέδιο',
            body: [
              'Ο πιο συνηθισμένος συνδυασμός είναι η κυπριακή με την ελληνική σημαία, αλλά μπορούμε να φτιάξουμε όποιον συνδυασμό χωρών χρειάζεστε - χρήσιμο σε διεθνείς εκδηλώσεις, αδελφοποιήσεις και φεστιβάλ.',
              'Μπορούμε επίσης να τυπώσουμε σημαιάκια με το λογότυπο ή το έμβλημά σας, ή σε συνδυασμό λογοτύπου και σημαιών.',
            ],
          },
          {
            heading: 'Τι αναλαμβάνουμε και τι όχι',
            body: [
              'Προμηθεύουμε τα σημαιάκια και τα υλικά. Δεν αναλαμβάνουμε την τοποθέτηση στον χώρο σας.',
              'Αν σχεδιάζετε σημαιοστολισμό για εθνική επέτειο, υπολογίστε τον χρόνο: για δικό σας σχέδιο χρειαζόμαστε έως δέκα ημέρες, ενώ πριν από την 25η Μαρτίου και την 28η Οκτωβρίου προτείνουμε τρεις εβδομάδες περιθώριο.',
            ],
          },
        ],
        faqTitle: 'Συχνές ερωτήσεις',
        faq: [
          {
            q: 'Πόσα σημαιάκια έχει το μέτρο;',
            a: 'Η συνήθης πυκνότητα είναι τρία σημαιάκια ανά μέτρο, το καθένα 30 × 20 εκατοστά. Μπορούμε όμως να τα τοποθετήσουμε πιο αραιά ή πιο πυκνά, όπως θέλετε.',
          },
          {
            q: 'Μπορούμε να διαλέξουμε συνδυασμό χωρών;',
            a: 'Ναι, όποιον συνδυασμό θέλετε. Μπορούμε επίσης να τυπώσουμε δικό σας σχέδιο ή λογότυπο.',
          },
          {
            q: 'Κάνετε και την τοποθέτηση;',
            a: 'Όχι. Προμηθεύουμε τα υλικά· η τοποθέτηση γίνεται από εσάς.',
          },
          {
            q: 'Πόσο νωρίς να παραγγείλουμε για εθνική επέτειο;',
            a: 'Για δικό σας σχέδιο χρειαζόμαστε έως δέκα ημέρες. Πριν από την 25η Μαρτίου και την 28η Οκτωβρίου δώστε μας τρεις εβδομάδες περιθώριο.',
          },
        ],
        relatedTitle: 'Δείτε επίσης',
      },
      en: {
        title: 'Bunting & street decoration',
        metaTitle: 'Bunting & street flag decoration - Char. Rossides LTD',
        metaDescription:
          'Bunting flags at 30 × 20 cm, three per metre or at your own spacing, in any combination of countries. For municipalities, schools and events in Cyprus.',
        intro: [
          'We make runs of bunting for decorating streets, squares, school yards, churches and event spaces.',
          'The flags are 30 × 20 centimetres. Three to the metre is the standard spacing, but you can choose whatever spacing suits you. The combination of flags is yours to choose too.',
          'We supply the materials. Installation is carried out by you or your own contractor.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Bunting flags 30 × 20 cm',
          'Three per metre as standard, or your own spacing',
          'Any combination of countries, or your own design',
          'Materials supplied - installation not included',
        ],
        sections: [
          {
            heading: 'Specification',
            table: {
              columns: ['Element', 'Specification'],
              rows: [
                ['Flag size', '30 × 20 cm (width × height)'],
                ['Spacing', 'Three flags per metre (standard) - or whatever you choose'],
                ['Fabric', '100% polyester, digitally printed'],
                ['Designs', 'National flags, combinations, or your own design'],
              ],
            },
          },
          {
            heading: 'Spacing and cost',
            body: [
              'The standard spacing is **three flags per metre**. It is not fixed, though: you decide how widely or closely they sit.',
              'Charging is **per flag** - what counts is the total number of flags on the rope, not the number of metres. So a wider spacing covers the same length with fewer flags, and costs less.',
              'Tell us how many metres you need to cover and what budget you have in mind, and we will suggest a spacing.',
            ],
          },
          {
            heading: 'Where it is used',
            bullets: [
              'Municipalities and communities on national anniversaries',
              'School yards before parades',
              'Churches and village festivals',
              'Shop openings and commercial events',
              'Sporting events and festivals',
            ],
          },
          {
            heading: 'Combinations and your own design',
            body: [
              'The most common combination is the Cypriot and Greek flags, but we can make any combination of countries you need - useful for international events, twinnings and festivals.',
              'We can also print bunting with your logo or emblem, or combining a logo with national flags.',
            ],
          },
          {
            heading: 'What we do and do not cover',
            body: [
              'We supply the bunting and the materials. We do not carry out installation on your site.',
              'If you are planning decoration for a national anniversary, allow time: your own design takes up to ten days, and before 25 March and 28 October we suggest three weeks.',
            ],
          },
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'How many flags are there per metre?',
            a: 'The standard spacing is three flags per metre, each 30 × 20 centimetres. We can space them wider or closer, whichever you prefer.',
          },
          {
            q: 'Can we choose a combination of countries?',
            a: 'Yes, any combination you like. We can also print your own design or logo.',
          },
          {
            q: 'Do you install it as well?',
            a: 'No. We supply the materials; installation is carried out by you.',
          },
          {
            q: 'How early should we order for a national anniversary?',
            a: 'Your own design takes up to ten days. Before 25 March and 28 October, allow us three weeks.',
          },
        ],
        relatedTitle: 'See also',
      },
    },
  },
  {
    key: 'sizes',
    slug: { el: 'odigos-diastaseon', en: 'size-guide' },
    related: ['national', 'logo', 'parade', 'table'],
    content: {
      el: {
        title: 'Οδηγός διαστάσεων',
        metaTitle: 'Οδηγός διαστάσεων σημαιών & λαβάρων - Κύπρος',
        metaDescription:
          'Όλες οι διαστάσεις σημαιών, λαβάρων, επιτραπέζιων σημαιών και διακριτικών σε έναν πίνακα, με το πού χρησιμοποιείται η καθεμία. Χαρ. Ρωσσίδης ΛΤΔ.',
        intro: [
          'Η πιο συχνή ερώτηση στο τηλέφωνο είναι «τι διάσταση να πάρω;». Αυτή η σελίδα συγκεντρώνει όλες τις διαστάσεις που κατασκευάζουμε, σε έναν πίνακα.',
          'Όλες οι διαστάσεις δίνονται σε εκατοστά και γράφονται πλάτος × ύψος. Αυτό είναι σημαντικό: η ίδια σημαία γράφεται αλλού ως 90 × 150 και αλλού ως 150 × 90, και η σειρά αλλάζει εντελώς το σχήμα.',
          'Αν δεν βρίσκετε αυτό που θέλετε, κατασκευάζουμε οποιαδήποτε διάσταση κατά παραγγελία.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Οκτώ σταθερές διαστάσεις σημαιών',
          'Όλες σε απόθεμα',
          'Πλάτος × ύψος, σε εκατοστά',
          'Οποιαδήποτε διάσταση κατά παραγγελία',
        ],
        sections: [
          {
            heading: 'Σημαίες - σταθερές διαστάσεις',
            table: {
              columns: ['Διάσταση (Π × Υ)', 'Πού χρησιμοποιείται συνήθως'],
              rows: [
                ['60 × 40 εκ.', 'Μικροί ιστοί, διακόσμηση εσωτερικού χώρου'],
                ['100 × 60 εκ.', 'Μπαλκόνι, πρόσοψη καταστήματος'],
                ['120 × 70 εκ.', 'Μπαλκόνι, μικρός ιστός'],
                ['150 × 90 εκ.', 'Η πιο συνηθισμένη επιλογή για ιστό σχολείου ή σπιτιού'],
                ['180 × 110 εκ.', 'Ψηλότεροι ιστοί, δημόσια κτίρια'],
                ['240 × 150 εκ.', 'Δήμοι, ξενοδοχεία, μεγάλοι ιστοί'],
                ['300 × 180 εκ.', 'Μεγάλοι ιστοί και εγκαταστάσεις'],
                ['500 × 300 εκ.', 'Πολύ μεγάλοι ιστοί και προσόψεις κτιρίων'],
              ],
            },
            footnote: 'Όλες οι σταθερές διαστάσεις κρατούνται σε απόθεμα.',
          },
          {
            heading: 'Μικρές σημαίες',
            table: {
              columns: ['Προϊόν', 'Διάσταση'],
              rows: [
                ['Επιτραπέζια σημαία', '24 × 16 εκ., συνολικό ύψος 33 εκ., βάση 6 εκ.'],
                ['Σημαία χειρός', '30 × 20 εκ.'],
                ['Σημαιάκι σημαιοστολισμού', '30 × 20 εκ., συνήθως τρία ανά μέτρο'],
              ],
            },
          },
          {
            heading: 'Λάβαρα και ιστοί',
            table: {
              columns: ['Είδος', 'Διάσταση'],
              rows: [
                ['Λάβαρο σχολείου', '90 × 120 εκ., ή κατά παραγγελία'],
                ['Ιστός λαβάρου', '3 μέτρα, διάμετρος 39 χιλ., βάρος 2-2,5 κιλά'],
                ['Ιμάντες τελαμώνας', '100 εκ. και 60 εκ., πλάτος 4 εκ.'],
              ],
            },
          },
          {
            heading: 'Πώς να διαλέξετε',
            body: [
              'Αν αντικαθιστάτε υπάρχουσα σημαία, μετρήστε την παλιά και δώστε μας τους αριθμούς. Είναι ο ασφαλέστερος τρόπος.',
              'Αν ο ιστός είναι καινούργιος, πείτε μας το ύψος του και πού βρίσκεται - αυλή σχολείου, μπαλκόνι, πρόσοψη ξενοδοχείου - και θα σας προτείνουμε διάσταση.',
              'Για οτιδήποτε δεν είναι στους πίνακες, κατασκευάζουμε κατά παραγγελία, χωρίς ελάχιστη ποσότητα.',
            ],
          },
        ],
        faqTitle: 'Συχνές ερωτήσεις',
        faq: [
          {
            q: 'Γράφετε πλάτος × ύψος ή ύψος × πλάτος;',
            a: 'Πλάτος × ύψος, σε εκατοστά. Δηλαδή 150 × 90 σημαίνει 150 εκατοστά πλάτος και 90 εκατοστά ύψος.',
          },
          {
            q: 'Ποια είναι η πιο συνηθισμένη διάσταση;',
            a: '150 × 90 εκατοστά. Είναι η διάσταση που ταιριάζει στους περισσότερους ιστούς σε σχολεία και σπίτια.',
          },
          {
            q: 'Κατασκευάζετε διαστάσεις εκτός πίνακα;',
            a: 'Ναι, οποιαδήποτε διάσταση κατά παραγγελία, χωρίς ελάχιστη ποσότητα.',
          },
          {
            q: 'Ποια είναι η μεγαλύτερη σημαία που έχετε φτιάξει;',
            a: '58 × 27 μέτρα. Χρειάστηκαν δεκαπέντε ρολά υφάσματος και τρεις ημέρες δουλειάς, και ήταν τόσο μεγάλη που ξεδιπλώθηκε για πρώτη φορά σε γήπεδο ποδοσφαίρου.',
          },
        ],
        relatedTitle: 'Δείτε επίσης',
      },
      en: {
        title: 'Size guide',
        metaTitle: 'Flag & banner size guide - Char. Rossides LTD, Cyprus',
        metaDescription:
          'Every flag, banner, table flag and badge size we make, in one table, with what each size is typically used for. Made in Nicosia, Cyprus.',
        intro: [
          'The most frequent question on the phone is which size to order. This page brings together every size we make, in one place.',
          'All sizes are given in centimetres and written width × height. That matters: the same flag is written elsewhere as 90 × 150 and as 150 × 90, and the order changes the shape entirely.',
          'If you cannot find what you need, we make any size to order.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Eight standard flag sizes',
          'All held in stock',
          'Width × height, in centimetres',
          'Any size made to order',
        ],
        sections: [
          {
            heading: 'Flags - standard sizes',
            table: {
              columns: ['Size (W × H)', 'Typically used for'],
              rows: [
                ['60 × 40 cm', 'Small poles, indoor display'],
                ['100 × 60 cm', 'Balconies and shopfronts'],
                ['120 × 70 cm', 'Balconies, small poles'],
                ['150 × 90 cm', 'The most common choice for a school or home flagpole'],
                ['180 × 110 cm', 'Taller poles, public buildings'],
                ['240 × 150 cm', 'Municipalities, hotels, large poles'],
                ['300 × 180 cm', 'Large poles and installations'],
                ['500 × 300 cm', 'Very large poles and building façades'],
              ],
            },
            footnote: 'All standard sizes are held in stock.',
          },
          {
            heading: 'Small flags',
            table: {
              columns: ['Product', 'Size'],
              rows: [
                ['Table flag', '24 × 16 cm, 33 cm total height, 6 cm base'],
                ['Hand flag', '30 × 20 cm'],
                ['Bunting flag', '30 × 20 cm, three per metre as standard'],
              ],
            },
          },
          {
            heading: 'Banners and poles',
            table: {
              columns: ['Item', 'Size'],
              rows: [
                ['School banner', '90 × 120 cm, or made to order'],
                ['Banner pole', '3 metres, 39 mm diameter, 2-2.5 kg'],
                ['Harness straps', '100 cm and 60 cm, 4 cm wide'],
              ],
            },
          },
          {
            heading: 'How to choose',
            body: [
              'If you are replacing an existing flag, measure the old one and give us the numbers. It is the safest approach.',
              'If the pole is new, tell us its height and where it stands - a school yard, a balcony, a hotel frontage - and we will suggest a size.',
              'For anything not in the tables, we make to order, with no minimum quantity.',
            ],
          },
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'Do you write width × height or height × width?',
            a: 'Width × height, in centimetres. So 150 × 90 means 150 centimetres wide and 90 centimetres tall.',
          },
          {
            q: 'What is the most common size?',
            a: '150 × 90 centimetres. It suits most flagpoles at schools and homes.',
          },
          {
            q: 'Do you make sizes outside the table?',
            a: 'Yes, any size to order, with no minimum quantity.',
          },
          {
            q: 'What is the largest flag you have made?',
            a: '58 × 27 metres. It took fifteen rolls of fabric and three days of work, and was so large it was first unrolled on a football pitch.',
          },
        ],
        relatedTitle: 'See also',
      },
    },
  },
  {
    key: 'military',
    slug: { el: 'stratiotika-eidi', en: 'military-supplies' },
    featured: true,
    related: ['embroidery', 'parade', 'national'],
    content: {
      el: {
        title: 'Στρατιωτικά είδη & πηλήκια',
        metaTitle: 'Στρατιωτικά είδη & πηλήκια - Λευκωσία',
        metaDescription:
          'Πηλήκια κατά παραγγελία με τα διακριτικά της μονάδας σας, και στρατιωτικά είδη από το κατάστημά μας στη Λευκωσία: μπερέδες, άρβυλα, σακίδια, παγούρια και άλλα.',
        intro: [
          'Εκτός από σημαίες και λάβαρα, το κατάστημά μας στην Πινδάρου εφοδιάζει στρατιωτικά είδη - από πηλήκια που κατασκευάζουμε εμείς μέχρι εξοπλισμό που θα βρείτε έτοιμο στο ράφι.',
          'Τα πηλήκια γίνονται κατά παραγγελία, με τα διακριτικά της μονάδας ή του σώματός σας. Τα υπόλοιπα είδη είναι διαθέσιμα από το κατάστημα.',
          'Είναι μια σειρά που εξυπηρετεί όσους ψάχνουν εξοπλισμό σε ένα μέρος, χωρίς παραγγελία από το εξωτερικό.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Πηλήκια κατά παραγγελία',
          'Μπερέδες και καπέλα τζόκεϊ',
          'Εξοπλισμός πεδίου και είδη καθαρισμού όπλου',
          'Από το κατάστημα στην Πινδάρου, Λευκωσία',
        ],
        sections: [
          {
            heading: 'Πηλήκια κατά παραγγελία',
            body: [
              'Το πηλήκιο το κατασκευάζουμε εμείς, με τα διακριτικά της μονάδας, του σώματος ή του συλλόγου σας.',
              'Επειδή γίνεται κατά παραγγελία, τηλεφωνήστε μας με το σώμα, τον βαθμό και το σχέδιο που χρειάζεστε, και θα σας πούμε τι είναι εφικτό και σε πόσο χρόνο.',
            ],
          },
          {
            heading: 'Καπέλα από το κατάστημα',
            body: [
              'Πέρα από τα πηλήκια, στο κατάστημα θα βρείτε έτοιμα:',
            ],
            bullets: [
              'Μπερέδες',
              'Καπέλα τζόκεϊ',
            ],
          },
          {
            heading: 'Εξοπλισμός και αξεσουάρ',
            body: [
              'Στο κατάστημα στην Πινδάρου θα βρείτε επίσης:',
            ],
            bullets: [
              'Άρβυλα',
              'Σακίδια πλάτης',
              'Τσαντάκια μέσης',
              'Ασκούς νερού και παγούρια',
              'Φακούς',
              'Σετ καθαρισμού όπλου',
              'Μπλούζες και πετσέτες',
            ],
            footnote:
              'Το απόθεμα αλλάζει. Αν ψάχνετε κάτι συγκεκριμένο, τηλεφωνήστε μας πριν έρθετε και θα σας πούμε αν το έχουμε.',
          },
          {
            heading: 'Διακριτικά, εμβλήματα και επωμίδες',
            body: [
              'Τα κεντητά διακριτικά βαθμού, τα εμβλήματα μονάδων, οι επωμίδες και οι πινακίδες ονομάτων γίνονται στο εργοστάσιό μας και έχουν δική τους σελίδα - δείτε τα [[embroidery|κεντήματα και διακριτικά]].',
              'Τα διακριτικά διατίθενται είτε όπως είναι, για να ραφτούν στη στολή, είτε με βέλκρο.',
            ],
          },
          {
            heading: 'Παράδοση και πληρωμή',
            bullets: [
              'Αποστολή με κούριερ σε όλη την Κύπρο',
              'Χωρίς χρέωση αποστολής για παραγγελίες άνω των €150',
              'Παραλαβή από το κατάστημα ή το εργοστάσιο',
              'Χωρίς προκαταβολή - μετρητά ή κάρτα στο κατάστημα',
            ],
          },
        ],
        faqTitle: 'Συχνές ερωτήσεις',
        faq: [
          {
            q: 'Κατασκευάζετε πηλήκια;',
            a: 'Ναι, κατά παραγγελία, με τα διακριτικά της μονάδας ή του σώματός σας. Τηλεφωνήστε μας με το τι χρειάζεστε.',
          },
          {
            q: 'Έχετε μπερέδες και καπέλα τζόκεϊ;',
            a: 'Ναι, διατίθενται έτοιμα από το κατάστημα στην Πινδάρου.',
          },
          {
            q: 'Τι άλλο έχετε στο κατάστημα;',
            a: 'Άρβυλα, σακίδια πλάτης, τσαντάκια μέσης, ασκούς νερού και παγούρια, φακούς, σετ καθαρισμού όπλου, μπλούζες και πετσέτες. Το απόθεμα αλλάζει, οπότε τηλεφωνήστε πριν έρθετε για κάτι συγκεκριμένο.',
          },
          {
            q: 'Κάνετε και τα διακριτικά για τη στολή;',
            a: 'Ναι. Τα κεντητά διακριτικά βαθμού, τα εμβλήματα μονάδων, οι επωμίδες και οι πινακίδες ονομάτων γίνονται στο εργοστάσιό μας.',
          },
        ],
        relatedTitle: 'Δείτε επίσης',
      },
      en: {
        title: 'Military supplies & kepis',
        metaTitle: 'Military supplies & kepis - Nicosia, Cyprus',
        metaDescription:
          'Kepis made to order with your unit insignia, plus army supplies from our shop in Nicosia: berets, boots, backpacks, water bottles and more.',
        intro: [
          'Alongside flags and banners, our shop on Pindarou supplies military kit - from kepis we make ourselves to equipment you will find ready on the shelf.',
          'Kepis are made to order, carrying the insignia of your unit or corps. The rest is available from the shop.',
          'It is a line for anyone who would rather find their kit in one place than order it from abroad.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Kepis made to order',
          'Berets and jockey caps off the shelf',
          'Field equipment and rifle-cleaning kits',
          'From the shop on Pindarou, Nicosia',
        ],
        sections: [
          {
            heading: 'Kepis made to order',
            body: [
              'We make the kepi ourselves, carrying the insignia of your unit, corps or association.',
              'Because it is made to order, call us with the corps, the rank and the design you need, and we will tell you what is possible and how long it will take.',
            ],
          },
          {
            heading: 'Headwear from the shop',
            body: ['Besides kepis, the shop carries ready to buy:'],
            bullets: [
              'Berets',
              'Jockey caps',
            ],
          },
          {
            heading: 'Equipment and accessories',
            body: ['The shop on Pindarou also carries:'],
            bullets: [
              'Boots',
              'Backpacks',
              'Waist pouches',
              'Hydration packs and water bottles',
              'Torches',
              'Rifle-cleaning kits',
              'Shirts and towels',
            ],
            footnote:
              'Stock changes. If you are after something specific, call before coming in and we will tell you whether we have it.',
          },
          {
            heading: 'Insignia, emblems and epaulettes',
            body: [
              'Embroidered rank insignia, unit emblems, epaulettes and name tags are made at our factory and have a page of their own - see [[embroidery|embroidery and badges]].',
              'Badges are supplied either plain, to be sewn onto the uniform, or with velcro.',
            ],
          },
          {
            heading: 'Delivery and payment',
            bullets: [
              'Courier delivery anywhere in Cyprus',
              'No delivery charge on orders over €150',
              'Collection from the shop or the factory',
              'No deposit - cash or card at the shop',
            ],
          },
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'Do you make kepis?',
            a: 'Yes, to order, carrying the insignia of your unit or corps. Call us with what you need.',
          },
          {
            q: 'Do you have berets and jockey caps?',
            a: 'Yes, ready to buy from the shop on Pindarou.',
          },
          {
            q: 'What else does the shop carry?',
            a: 'Boots, backpacks, waist pouches, hydration packs and water bottles, torches, rifle-cleaning kits, shirts and towels. Stock changes, so call ahead if you want something specific.',
          },
          {
            q: 'Do you make the insignia for the uniform as well?',
            a: 'Yes. Embroidered rank insignia, unit emblems, epaulettes and name tags are all made at our factory.',
          },
        ],
        relatedTitle: 'See also',
      },
    },
  },
];
