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
          'Εθνικές σημαίες όλων των χωρών σε οκτώ σταθερές διαστάσεις, από απόθεμα για άμεση παραλαβή. Κατασκευή στη Λευκωσία από το 1938, χωρίς ελάχιστη ποσότητα.',
        intro: [
          'Κατασκευάζουμε σημαίες όλων των χωρών του κόσμου - από την Κύπρο και την Ελλάδα μέχρι όποια χώρα χρειάζεστε - σε οκτώ σταθερές διαστάσεις ή σε οποιαδήποτε διάσταση κατά παραγγελία.',
          'Τις σταθερές διαστάσεις τις κρατάμε σε απόθεμα, οπότε στις περισσότερες περιπτώσεις μπορείτε να περάσετε και να παραλάβετε τη σημαία σας την ίδια μέρα. Αν κάτι λείπει προσωρινά, το ετοιμάζουμε σε ένα με πέντε εργάσιμες ημέρες.',
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
                ['500 × 300 εκ.', 'Πολύ μεγάλοι ιστοί και προσόψεις κτιρίων'],
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
              'Πέρα από την τυπωμένη σημαία, η ελληνική σημαία διατίθεται και σε ραμμένη μορφή, σε όλες τις σταθερές διαστάσεις του πίνακα. Τα τμήματα κόβονται και ράβονται ένα-ένα σε ύφασμα πολυεστέρα.',
              'Είναι η επιλογή για όποιον θέλει μια σημαία που θα μείνει σε εξωτερικό ιστό για χρόνια - σε σχολείο, εκκλησία ή δημόσιο κτίριο.',
            ],
          },
          {
            heading: 'Απόθεμα και χρόνος παράδοσης',
            body: [
              'Οι σταθερές διαστάσεις είναι διαθέσιμες ανά πάσα στιγμή από το απόθεμά μας. Αν η διάσταση που θέλετε έχει εξαντληθεί προσωρινά, την ετοιμάζουμε σε ένα με πέντε εργάσιμες ημέρες.',
              'Για σημαίες σε ειδική διάσταση ή με δικό σας σχέδιο, δείτε τη σελίδα για τις σημαίες με λογότυπο.',
            ],
          },
          {
            heading: 'Επιτραπέζιες σημαίες, σημαίες χειρός και σημαιάκια',
            body: ['Κατασκευάζουμε και τα μικρά μεγέθη, στις ίδιες σημαίες χωρών.'],
            table: {
              columns: ['Προϊόν', 'Διαστάσεις'],
              rows: [
                ['Επιτραπέζια σημαία', '24 × 16 εκ., συνολικό ύψος 33 εκ. σε μεταλλική ασημί βάση διαμέτρου 6 εκ.'],
                ['Σημαία χειρός', '30 × 20 εκ.'],
                ['Σημαιάκια για σημαιοστολισμό', '30 × 20 εκ., τρία σημαιάκια ανά μέτρο'],
              ],
            },
            footnote:
              'Τα σημαιάκια γίνονται σε όποιον συνδυασμό χωρών θέλετε, ή με δικό σας σχέδιο. Για σημαιοστολισμό προμηθεύουμε τα υλικά - η τοποθέτηση γίνεται από εσάς.',
          },
          {
            heading: 'Πολύ μεγάλες σημαίες',
            body: [
              'Η μεγαλύτερη σημαία που έχουμε κατασκευάσει ήταν 58 × 27 μέτρα, παραγγελία οπαδού του ΑΠΟΕΛ. Χρειάστηκαν δεκαπέντε ρολά υφάσματος και τρεις ολόκληρες ημέρες δουλειάς.',
              'Ήταν τόσο μεγάλη που δεν μπορούσε να ξεδιπλωθεί μέσα στο εργοστάσιο: την ανοίξαμε για πρώτη φορά σε γήπεδο ποδοσφαίρου, για να βεβαιωθούμε ότι είχε συναρμολογηθεί σωστά.',
              'Αν έχετε κάτι μεγάλο στο μυαλό σας, το έχουμε ξανακάνει. Πάρτε μας τηλέφωνο να το συζητήσουμε.',
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
            a: 'Ναι. Κρατάμε σε απόθεμα τις οκτώ σταθερές διαστάσεις, οπότε συνήθως μπορείτε να περάσετε και να παραλάβετε αυθημερόν. Αν κάτι έχει εξαντληθεί προσωρινά, το ετοιμάζουμε σε ένα με πέντε εργάσιμες ημέρες.',
          },
          {
            q: 'Ποια είναι η πιο συνηθισμένη διάσταση σημαίας;',
            a: 'Η 150 × 90 εκατοστά. Είναι η διάσταση που ταιριάζει στους περισσότερους ιστούς σε σχολεία και σπίτια. Για ψηλότερους ιστούς σε δημόσια κτίρια, οι πελάτες μας επιλέγουν συνήθως 180 × 110 ή 240 × 150 εκατοστά.',
          },
          {
            q: 'Οι σημαίες σας έχουν κρίκους;',
            a: 'Όχι, και είναι σκόπιμο. Οι μεταλλικοί κρίκοι σκουριάζουν και λεκιάζουν το ύφασμα. Οι σημαίες μας τελειώνουν με θήκη από πολυέστερ και ενισχυμένο στρίφωμα με διπλή ραφή.',
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
            a: 'Και τα δύο. Η ελληνική σημαία διατίθεται και σε ραμμένη μορφή, σε όλες τις σταθερές διαστάσεις, σε ύφασμα πολυεστέρα.',
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
              'For flags in a special size or with your own design, see our custom logo flags page.',
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
                ['Bunting', '30 × 20 cm, three flags per metre'],
              ],
            },
            footnote:
              'Bunting is made in any combination of countries you like, or to your own design. For street decoration we supply the materials; installation is done by you.',
          },
          {
            heading: 'Very large flags',
            body: [
              'The largest flag we have ever made measured 58 × 27 metres, ordered by an APOEL supporter. It took fifteen rolls of fabric and three full days of work.',
              'It was so large it could not be unrolled inside the factory: the first time it was ever opened out was on a football pitch, to confirm it had been put together correctly.',
              'If you have something big in mind, we have done it before. Call us and let us talk it through.',
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
              'Είμαστε κατασκευαστές, όχι εισαγωγείς. Η εκτύπωση, η ραφή και το τελείωμα γίνονται στο εργοστάσιό μας στο Καϊμακλί, από το 1938.',
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
              'We are manufacturers, not importers. Printing, stitching and finishing all happen at our factory in Kaimakli, as they have since 1938.',
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
    content: {
      el: {
        title: 'Λάβαρα παρελάσεων',
        metaTitle: 'Λάβαρα παρελάσεων & εκκλησιαστικά λάβαρα - Χαρ. Ρωσσίδης ΛΤΔ',
        metaDescription:
          'Χειροποίητα βελούδινα λάβαρα για σχολεία, συλλόγους και εκκλησίες, με κεντητά γράμματα, ιστό αλουμινίου και δερμάτινο τελαμώνα. Επισκευή παλιών λαβάρων.',
        intro: [
          'Χειροποίητα βελούδινα λάβαρα για σχολεία, συλλόγους, σωματεία και εκκλησίες, κατασκευασμένα ένα-ένα στο εργαστήριό μας στη Λευκωσία.',
          'Κάθε λάβαρο γίνεται κατά παραγγελία, με το δικό σας έμβλημα και τα δικά σας χρώματα, και παραδίδεται ολοκληρωμένο: ύφασμα, ιστός, στέψη και δερμάτινος τελαμώνας.',
          'Αναλαμβάνουμε επίσης την επισκευή και ανακαίνιση παλιών λαβάρων - κάτι που πολλά σχολεία και ενορίες δεν ξέρουν ότι γίνεται.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Βελούδο σε μπλε, μαύρο ή μπορντό',
          'Κεντητά γράμματα, έμβλημα κεντητό ή τυπωμένο',
          'Ιστός αλουμινίου 3 μ. και δερμάτινος τελαμώνας',
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
              'Στέψη: για την ελληνική σημαία, μπλε ταινία και σταυρός από PVC. Για την κυπριακή, λευκή ταινία και σφαίρα - πλαστική ή μπρούντζινο πόμωλο.',
          },
          {
            heading: 'Ο τελαμώνας',
            body: [
              'Κάθε λάβαρο συνοδεύεται από τελαμώνα από δέρμα αγελάδας, για να στηρίζεται το βάρος του ιστού στον ώμο.',
            ],
            bullets: [
              'Δέρμα αγελάδας',
              'Δύο ιμάντες, 100 εκ. και 60 εκ., πλάτους 4 εκ.',
              'Ρυθμιζόμενος, με πόρπη που δεν σκουριάζει',
            ],
          },
          {
            heading: 'Χρόνος κατασκευής και παρελάσεις',
            body: [
              'Ένα κεντητό λάβαρο θέλει δεκαπέντε ημέρες κατασκευής.',
              'Πριν από την 25η Μαρτίου και την 28η Οκτωβρίου η ζήτηση ανεβαίνει απότομα. Δώστε μας τρεις εβδομάδες περιθώριο πριν από την ημερομηνία της παρέλασης, ώστε να προλάβουμε άνετα.',
              'Αν έχετε παρέλαση στο μυαλό σας, τηλεφωνήστε νωρίς - ακόμη κι αν δεν έχετε αποφασίσει ακόμη το σχέδιο.',
            ],
          },
          {
            heading: 'Επισκευή και ανακαίνιση παλιών λαβάρων',
            body: [
              'Επισκευάζουμε λάβαρα που έχουν φθαρεί με τα χρόνια. Πολλά σχολεία και ενορίες κρατούν λάβαρα δεκαετιών που χρειάζονται φροντίδα και όχι αντικατάσταση.',
              'Αναλαμβάνουμε αλλαγή κροσσιών και φούντας, επιδιόρθωση κεντήματος, αντικατάσταση ιστού ή τελαμώνα και γενική ανακαίνιση.',
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
            heading: 'Ιστοί και εξαρτήματα ξεχωριστά',
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
            a: 'Ναι. Αλλάζουμε κρόσσια και φούντες, επιδιορθώνουμε κεντήματα, αντικαθιστούμε ιστό ή τελαμώνα και ανακαινίζουμε λάβαρα δεκαετιών. Φέρτε μας το λάβαρο να το δούμε.',
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
          'Handmade velvet banners for schools, clubs and churches, with embroidered lettering, aluminium pole and leather harness. We also repair old banners.',
        intro: [
          'Handmade velvet banners for schools, clubs, associations and churches, made one by one at our workshop in Nicosia.',
          'Every banner is made to order with your emblem and your colours, and arrives complete: fabric, pole, finial and leather carrying harness.',
          'We also repair and restore old banners - something many schools and parishes do not realise is possible.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Velvet in navy blue, black or Bordeaux',
          'Embroidered lettering, printed or embroidered emblem',
          '3 m aluminium pole and leather harness',
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
              'Finials: for the Greek flag, a blue ribbon and a PVC cross. For the Cypriot flag, white with a sphere - plastic, or a bronze knob (πόμωλο).',
          },
          {
            heading: 'The carrying harness',
            body: [
              'Every banner comes with a cow-leather harness, so the weight of the pole rests on the shoulder.',
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
              'We replace fringing and tassels, repair embroidery, fit a new pole or harness, and carry out general restoration.',
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
            a: 'Yes. We replace fringing and tassels, repair embroidery, fit a new pole or harness, and restore banners decades old. Bring the banner in and we will look at it.',
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
    content: {
      el: {
        title: 'Κεντήματα & διακριτικά',
        metaTitle: 'Κεντητά διακριτικά & εμβλήματα - Χαρ. Ρωσσίδης ΛΤΔ, Λευκωσία',
        metaDescription:
          'Κεντητά και τυπωμένα διακριτικά, εμβλήματα και ονομαστικές πινακίδες για συλλόγους, στρατό και αστυνομία. Ετοιμοπαράδοτα σχέδια, παράδοση από 7 ημέρες.',
        intro: [
          'Κεντάμε διακριτικά, εμβλήματα και σήματα για στολές και συλλόγους - από αθλητικά σωματεία μέχρι σώματα ασφαλείας.',
          'Η παραγωγή γίνεται στο εργοστάσιό μας στο Καϊμακλί, για μικρές και μεγάλες ποσότητες, με βάση το δικό σας σχέδιο.',
          'Τα τυποποιημένα σχέδια τα κρατάμε σε απόθεμα και παραδίδονται αμέσως. Για ονομαστικές πινακίδες ο χρόνος είναι επτά ημέρες.',
        ],
        specsTitle: 'Με μια ματιά',
        specs: [
          'Κεντητά ή τυπωμένα διακριτικά',
          'Συνήθης διάσταση 50 χιλιοστά διάμετρος',
          'Ετοιμοπαράδοτα τυποποιημένα σχέδια',
          'Ονομαστικές πινακίδες σε 7 ημέρες',
        ],
        sections: [
          {
            heading: 'Χρόνος παράδοσης',
            table: {
              columns: ['Είδος', 'Χρόνος παράδοσης'],
              rows: [
                ['Τυποποιημένα σχέδια', 'Από απόθεμα - 7 ημέρες αν εξαντληθούν'],
                ['Ονομαστικές πινακίδες', '7 ημέρες'],
                ['Διακριτικά με δικό σας σχέδιο', '15 ημέρες'],
              ],
            },
          },
          {
            heading: 'Διαστάσεις και κατασκευή',
            body: [
              'Η πιο συνηθισμένη διάσταση διακριτικού είναι τα 50 χιλιοστά σε διάμετρο. Κατασκευάζουμε και άλλες διαστάσεις και σχήματα κατά παραγγελία.',
              'Το διακριτικό μπορεί να είναι κεντητό ή τυπωμένο, ανάλογα με το σχέδιο και τη χρήση. Στα κεντήματα χρησιμοποιούμε και χρυσές μεταλλικές κλωστές, όπου το ζητά το σχέδιο.',
            ],
            bullets: [
              'Κεντητά ή τυπωμένα',
              'Συνήθης διάσταση 50 χιλιοστά διάμετρος',
              'Άλλες διαστάσεις και σχήματα κατά παραγγελία',
              'Ραφή πάνω στη στολή ή στο ύφασμα',
              'Χρυσές και μεταλλικές κλωστές',
            ],
          },
          {
            heading: 'Για ποιους δουλεύουμε',
            body: [
              'Κατασκευάζουμε διακριτικά και εμβλήματα για αθλητικά σωματεία, πολιτιστικούς συλλόγους, προσκοπικά συστήματα, σχολεία, σώματα ασφαλείας και επιχειρήσεις με στολές.',
              'Αναλαμβάνουμε μικρές και μεγάλες ποσότητες, χωρίς ελάχιστη παραγγελία.',
            ],
          },
          {
            heading: 'Κεντητό ή τυπωμένο;',
            body: [
              'Και οι δύο τρόποι είναι διαθέσιμοι για το ίδιο σχέδιο, και η σωστή επιλογή εξαρτάται από το πώς θα χρησιμοποιηθεί το διακριτικό και από το ίδιο το σχέδιο.',
              'Δεν χρειάζεται να αποφασίσετε μόνοι σας. Πείτε μας πού θα μπει το διακριτικό - σε στολή, σε σακάκι συλλόγου, σε καπέλο - στείλτε μας το σχέδιο, και θα σας προτείνουμε τι ταιριάζει καλύτερα πριν παραγγείλετε.',
            ],
          },
          {
            heading: 'Το έμβλημα στα λάβαρα',
            body: [
              'Την ίδια δουλειά κάνουμε και για τα λάβαρα: το έμβλημα στο κέντρο του λαβάρου μπορεί να είναι κεντητό ή τυπωμένο και ράβεται πάνω στο βελούδο.',
              'Επειδή η πίσω όψη του λαβάρου είναι κι αυτή βελούδινη, οι ραφές δεν φαίνονται από πίσω. Αν φτιάχνετε λάβαρο για σχολείο, σύλλογο ή ενορία, δείτε τη σελίδα για τα λάβαρα παρελάσεων.',
            ],
          },
          {
            heading: 'Πηλήκια και στρατιωτικά αξεσουάρ',
            body: [
              'Κατασκευάζουμε επίσης πηλήκια και στρατιωτικά αξεσουάρ κατά παραγγελία, με τα διακριτικά της μονάδας ή του συλλόγου σας.',
            ],
          },
          {
            heading: 'Το αρχείο σας',
            body: [
              'Στείλτε μας το σχέδιο σε EPS, PDF, SVG ή PNG υψηλής ανάλυσης. Αν έχετε μόνο χαμηλής ποιότητας εικόνα, μπορούμε να το δώσουμε σε γραφίστα για να ξανασχεδιαστεί, με επιπλέον χρέωση που θα σας πούμε από πριν.',
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
            a: 'Με δικό σας σχέδιο, δεκαπέντε ημέρες. Τα τυποποιημένα σχέδια είναι ετοιμοπαράδοτα από το απόθεμά μας, και αν εξαντληθούν τα ετοιμάζουμε σε επτά ημέρες. Οι ονομαστικές πινακίδες θέλουν επτά ημέρες.',
          },
          {
            q: 'Τι διάσταση έχουν συνήθως τα διακριτικά;',
            a: 'Η πιο συνηθισμένη είναι τα 50 χιλιοστά σε διάμετρο, αλλά κατασκευάζουμε και άλλες διαστάσεις και σχήματα κατά παραγγελία.',
          },
          {
            q: 'Τα διακριτικά είναι κεντητά ή τυπωμένα;',
            a: 'Και τα δύο γίνονται - επιλέγετε ανάλογα με το σχέδιο και τη χρήση.',
          },
          {
            q: 'Πώς στερεώνονται στη στολή;',
            a: 'Ράβονται πάνω στο ύφασμα.',
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
        metaTitle: 'Embroidered badges & insignia - Char. Rossides LTD, Nicosia',
        metaDescription:
          'Embroidered and printed badges, emblems and name tags for clubs, army and police. Standard designs held in stock, lead times from 7 days.',
        intro: [
          'We embroider badges, emblems and insignia for uniforms and clubs - from sports associations to the security forces.',
          'Production takes place at our factory in Kaimakli, for small and large quantities, based on your design.',
          'Standard designs are held in stock and go out immediately. Name tags take seven days.',
        ],
        specsTitle: 'At a glance',
        specs: [
          'Embroidered or printed badges',
          'Typical size 50 mm across',
          'Standard designs held in stock',
          'Name tags in 7 days',
        ],
        sections: [
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
          },
          {
            heading: 'Sizes and construction',
            body: [
              'The most common badge size is 50 mm across. We make other sizes and shapes to order.',
              'A badge can be embroidered or printed, depending on the design and how it will be used. Where the design calls for it, we work in gold and metallic threads.',
            ],
            bullets: [
              'Embroidered or printed',
              'Typical size 50 mm across',
              'Other sizes and shapes to order',
              'Sewn onto the uniform or fabric',
              'Gold and metallic threads',
            ],
          },
          {
            heading: 'Who we work for',
            body: [
              'We make badges and emblems for sports clubs, cultural associations, scout groups, schools, the security forces and businesses with uniforms.',
              'We take on small and large quantities alike, with no minimum order.',
            ],
          },
          {
            heading: 'Embroidered or printed?',
            body: [
              'Both are available for the same design, and the right choice depends on how the badge will be used as much as on the artwork itself.',
              'You do not have to work it out alone. Tell us where the badge is going - a uniform, a club blazer, a cap - send us the design, and we will tell you what suits it best before you order.',
            ],
          },
          {
            heading: 'Emblems on banners',
            body: [
              'The same work goes into our banners: the emblem at the centre of a banner can be embroidered or printed, and is sewn onto the velvet.',
              'Because the reverse face of the banner is velvet too, the stitching is not visible from behind. If you are having a banner made for a school, club or parish, see our parade banners page.',
            ],
          },
          {
            heading: 'Kepis and military accessories',
            body: [
              'We also make kepis and military accessories to order, carrying the insignia of your unit or association.',
            ],
          },
          {
            heading: 'Your artwork',
            body: [
              'Send us your design as EPS, PDF, SVG or a high-resolution PNG. If all you have is a low-quality image, we can pass it to a graphic designer to be redrawn, for an additional charge we will tell you about beforehand.',
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
            q: 'What size are badges usually?',
            a: 'Most commonly 50 mm across, but we make other sizes and shapes to order.',
          },
          {
            q: 'Are badges embroidered or printed?',
            a: 'We do both - you choose according to the design and how it will be used.',
          },
          {
            q: 'How are they fixed to the uniform?',
            a: 'They are sewn onto the fabric.',
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
];
