/* En Archē Greek — core data: alphabet, paradigms, vocabulary, prepositions.
   Greek text follows Rahlfs (LXX) and NA28/SBLGNT (NT). Frequencies are approximate NT counts. */
window.COURSE = window.COURSE || {};
(function (C) {

  /* ---------- Alphabet (Erasmian) ---------- */
  // [capital, small, English name, Greek name, transliteration, sound,
  //  phonetic English spelling, key word]  (the last two drive the Alphabet practice page)
  C.alphabet = [
    ['Α', 'α', 'alpha', 'ἄλφα', 'a', 'a as in father', 'ah', 'father'],
    ['Β', 'β', 'beta', 'βῆτα', 'b', 'b as in bible', 'b', 'bible'],
    ['Γ', 'γ', 'gamma', 'γάμμα', 'g', 'g as in go (n before γ, κ, ξ, χ)', 'g', 'go'],
    ['Δ', 'δ', 'delta', 'δέλτα', 'd', 'd as in dog', 'd', 'dog'],
    ['Ε', 'ε', 'epsilon', 'ἒ ψιλόν', 'e', 'e as in get', 'eh', 'get'],
    ['Ζ', 'ζ', 'zeta', 'ζῆτα', 'z', 'dz as in adze', 'dz', 'adze'],
    ['Η', 'η', 'eta', 'ἦτα', 'ē', 'ey as in obey', 'ay', 'obey'],
    ['Θ', 'θ', 'theta', 'θῆτα', 'th', 'th as in thing', 'th', 'thing'],
    ['Ι', 'ι', 'iota', 'ἰῶτα', 'i', 'i as in pit; long, as in machine', 'ih / ee', 'pit, machine'],
    ['Κ', 'κ', 'kappa', 'κάππα', 'k', 'k as in kite', 'k', 'kite'],
    ['Λ', 'λ', 'lambda', 'λάμβδα', 'l', 'l as in lamp', 'l', 'lamp'],
    ['Μ', 'μ', 'mu', 'μῦ', 'm', 'm as in mother', 'm', 'mother'],
    ['Ν', 'ν', 'nu', 'νῦ', 'n', 'n as in new', 'n', 'new'],
    ['Ξ', 'ξ', 'xi', 'ξῖ', 'x', 'x as in axe', 'ks', 'axe'],
    ['Ο', 'ο', 'omicron', 'ὂ μικρόν', 'o', 'o as in often', 'aw', 'often'],
    ['Π', 'π', 'pi', 'πῖ', 'p', 'p as in pen', 'p', 'pen'],
    ['Ρ', 'ρ', 'rho', 'ῥῶ', 'r', 'r as in run (lightly rolled)', 'r', 'run, rolled'],
    ['Σ', 'σ ς', 'sigma', 'σίγμα', 's', 's as in sing', 's', 'sing'],
    ['Τ', 'τ', 'tau', 'ταῦ', 't', 't as in top', 't', 'top'],
    ['Υ', 'υ', 'upsilon', 'ὖ ψιλόν', 'y / u', 'like German ü (many say oo)', 'ü / oo', 'über'],
    ['Φ', 'φ', 'phi', 'φῖ', 'ph', 'ph as in phone', 'f', 'phone'],
    ['Χ', 'χ', 'chi', 'χῖ', 'ch', 'ch as in Bach (or simply k)', 'kh', 'Bach'],
    ['Ψ', 'ψ', 'psi', 'ψῖ', 'ps', 'ps as in lips', 'ps', 'lips'],
    ['Ω', 'ω', 'omega', 'ὦ μέγα', 'ō', 'o as in tone', 'oh', 'tone']
  ];
  // One example word per letter, in the same order: [Greek, transliteration, meaning, recorded?].
  // Letter-name audio is audio/<English name>.m4a (audio/alpha.m4a); a word marked 1 also has
  // audio/<English name>-word.m4a. The words are the ones Angela uses in Alpha with Angela's alphabet
  // lessons (9, 16 and 18). ε and υ have only sound drills there, so their words have no recording.
  C.alphaWords = [
    ['ἄγγελος', 'angelos', 'angel, messenger', 1], ['βιβλίον', 'biblion', 'book', 1], ['γῆ', 'gē', 'earth', 1], ['δένδρον', 'dendron', 'tree', 1],
    ['ἐγώ', 'egō', 'I'], ['ζῷον', 'zōon', 'animal', 1], ['ἥλιος', 'hēlios', 'sun', 1], ['θεός', 'theos', 'God', 1],
    ['ἵππος', 'hippos', 'horse', 1], ['κακός', 'kakos', 'bad', 1], ['λίθος', 'lithos', 'stone', 1], ['μέγας', 'megas', 'great, large', 1],
    ['ναί', 'nai', 'yes', 1], ['ξύλον', 'xylon', 'wood, tree', 1], ['ὄνος', 'onos', 'donkey', 1], ['πέντε', 'pente', 'five', 1],
    ['ῥίς', 'rhis', 'nose', 1], ['στόμα', 'stoma', 'mouth', 1], ['τρία', 'tria', 'three', 1], ['ὕδωρ', 'hydōr', 'water'],
    ['φῶς', 'phōs', 'light', 1], ['χείρ', 'cheir', 'hand', 1], ['ψῦχος', 'psychos', 'cold', 1], ['ὥρα', 'hōra', 'hour', 1]
  ];

  C.greekNumerals = ['', 'αʹ', 'βʹ', 'γʹ', 'δʹ', 'εʹ', 'ϛʹ', 'ζʹ', 'ηʹ', 'θʹ', 'ιʹ',
    'ιαʹ', 'ιβʹ', 'ιγʹ', 'ιδʹ', 'ιεʹ', 'ιϛʹ', 'ιζʹ', 'ιηʹ', 'ιθʹ', 'κʹ'];

  // Units group lessons in the rail and on the home page. `first` is the unit's first lesson number.
  C.units = [
    { n: 1, first: 1, title: 'From the alphabet to “I am”' },
    { n: 2, first: 11, title: 'From the third declension to the subjunctive' }
  ];

  /* ---------- Paradigms ---------- */
  const P = C.para = {};
  P.cases = ['Nom.', 'Gen.', 'Dat.', 'Acc.'];
  P.caseNames = ['nominative', 'genitive', 'dative', 'accusative'];

  // Present active indicative: accented stem + endings (accent stays on the stem's last syllable)
  P.verbEndings = ['ω', 'εις', 'ει', 'ομεν', 'ετε', 'ουσι(ν)'];
  // Lesson 13. impf: [stem for 1-3 sg. and 3 pl., stem for 1-2 pl.], both augmented and accented
  // (the accent is recessive, so it shifts in the longer 1st and 2nd plural: ἔλυον, ἐλύομεν).
  // fut: accented future stem + P.verbEndings, or, with fcv, unaccented stem + P.cEndings[fcv]
  // (liquid futures such as μενῶ contract like ε-verbs). No fut: the future is middle (γνώσομαι, λήμψομαι).
  // ing: the -ing form for imperfect glosses ("I was loosing").
  P.impfEndings = ['ον', 'ες', 'ε(ν)', 'ομεν', 'ετε', 'ον'];
  // Lesson 14. Middle/passive endings: primary (present, future middle) and secondary (imperfect).
  // An ending that carries an accent takes the stem without its accent: λυ-όμεθα, ἐλυ-όμην.
  // pp: the past participle for passive glosses ("I am loosed"). futm: the stem of a future that is
  // middle only (γνώσομαι); verbs with an active fut also form a future middle from it (λύσομαι).
  P.mpEndings = ['ομαι', 'ῃ', 'εται', 'όμεθα', 'εσθε', 'ονται'];
  P.impfMpEndings = ['όμην', 'ου', 'ετο', 'όμεθα', 'εσθε', 'οντο'];
  P.verbs = {
    luo: { lemma: 'λύω', stem: 'λύ', en: 'loose', en3: 'looses', ing: 'loosing', pp: 'loosed', impf: ['ἔλυ', 'ἐλύ'], fut: 'λύσ', L: 4 },
    lego: { lemma: 'λέγω', stem: 'λέγ', en: 'say', en3: 'says', ing: 'saying', pp: 'said', impf: ['ἔλεγ', 'ἐλέγ'], fut: 'ἐρ', fcv: 'ε', L: 4 },
    echo: { lemma: 'ἔχω', stem: 'ἔχ', en: 'have', en3: 'has', ing: 'having', pp: 'held', impf: ['εἶχ', 'εἴχ'], fut: 'ἕξ', L: 4 },
    akouo: { lemma: 'ἀκούω', stem: 'ἀκού', en: 'hear', en3: 'hears', ing: 'hearing', pp: 'heard', impf: ['ἤκου', 'ἠκού'], fut: 'ἀκούσ', L: 4 },
    blepo: { lemma: 'βλέπω', stem: 'βλέπ', en: 'see', en3: 'sees', ing: 'seeing', pp: 'seen', impf: ['ἔβλεπ', 'ἐβλέπ'], fut: 'βλέψ', L: 4 },
    ginosko: { lemma: 'γινώσκω', stem: 'γινώσκ', en: 'know', en3: 'knows', ing: 'knowing', pp: 'known', futm: 'γνώσ', impf: ['ἐγίνωσκ', 'ἐγινώσκ'], L: 4 },
    pisteuo: { lemma: 'πιστεύω', stem: 'πιστεύ', en: 'believe', en3: 'believes', ing: 'believing', pp: 'believed', impf: ['ἐπίστευ', 'ἐπιστεύ'], fut: 'πιστεύσ', L: 4 },
    grapho: { lemma: 'γράφω', stem: 'γράφ', en: 'write', en3: 'writes', ing: 'writing', pp: 'written', impf: ['ἔγραφ', 'ἐγράφ'], fut: 'γράψ', L: 4 },
    lambano: { lemma: 'λαμβάνω', stem: 'λαμβάν', en: 'take', en3: 'takes', ing: 'taking', pp: 'taken', futm: 'λήμψ', impf: ['ἐλάμβαν', 'ἐλαμβάν'], L: 4 },
    didasko: { lemma: 'διδάσκω', stem: 'διδάσκ', en: 'teach', en3: 'teaches', ing: 'teaching', pp: 'taught', impf: ['ἐδίδασκ', 'ἐδιδάσκ'], fut: 'διδάξ', L: 4 },
    meno: { lemma: 'μένω', stem: 'μέν', en: 'remain', en3: 'remains', ing: 'remaining', pp: 'awaited', impf: ['ἔμεν', 'ἐμέν'], fut: 'μεν', fcv: 'ε', L: 4 },
    pempo: { lemma: 'πέμπω', stem: 'πέμπ', en: 'send', en3: 'sends', ing: 'sending', pp: 'sent', impf: ['ἔπεμπ', 'ἐπέμπ'], fut: 'πέμψ', L: 4 }
  };

  // Contract verbs (Lesson 12): unaccented stem (minus the contract vowel) + contracted endings.
  // The contracted syllable always carries the accent (a circumflex) in the present active indicative.
  // cv is the contract vowel: 'ε', 'α' or 'ο'.
  P.cEndings = {
    'ε': ['ῶ', 'εῖς', 'εῖ', 'οῦμεν', 'εῖτε', 'οῦσι(ν)'],
    'α': ['ῶ', 'ᾷς', 'ᾷ', 'ῶμεν', 'ᾶτε', 'ῶσι(ν)'],
    'ο': ['ῶ', 'οῖς', 'οῖ', 'οῦμεν', 'οῦτε', 'οῦσι(ν)']
  };
  // Imperfect (Lesson 13): impf[0] is accented on the stem (ἐποί-ουν), impf[1] is unaccented and the
  // ending carries the circumflex (ἐποι-οῦμεν). The future lengthens the contract vowel: ποιήσ- + P.verbEndings.
  P.cImpfEndings = {
    'ε': ['ουν', 'εις', 'ει', 'οῦμεν', 'εῖτε', 'ουν'],
    'α': ['ων', 'ας', 'α', 'ῶμεν', 'ᾶτε', 'ων'],
    'ο': ['ουν', 'ους', 'ου', 'οῦμεν', 'οῦτε', 'ουν']
  };
  // Middle/passive of contract verbs (Lesson 14), present and imperfect. Every ending is accented.
  P.cMpEndings = {
    'ε': ['οῦμαι', 'ῇ', 'εῖται', 'ούμεθα', 'εῖσθε', 'οῦνται'],
    'α': ['ῶμαι', 'ᾷ', 'ᾶται', 'ώμεθα', 'ᾶσθε', 'ῶνται'],
    'ο': ['οῦμαι', 'οῖ', 'οῦται', 'ούμεθα', 'οῦσθε', 'οῦνται']
  };
  P.cImpfMpEndings = {
    'ε': ['ούμην', 'οῦ', 'εῖτο', 'ούμεθα', 'εῖσθε', 'οῦντο'],
    'α': ['ώμην', 'ῶ', 'ᾶτο', 'ώμεθα', 'ᾶσθε', 'ῶντο'],
    'ο': ['ούμην', 'οῦ', 'οῦτο', 'ούμεθα', 'οῦσθε', 'οῦντο']
  };
  P.cverbs = {
    poieo: { lemma: 'ποιέω', stem: 'ποι', cv: 'ε', en: 'do', en3: 'does', ing: 'doing', pp: 'made', impf: ['ἐποί', 'ἐποι'], fut: 'ποιήσ', L: 12 },
    laleo: { lemma: 'λαλέω', stem: 'λαλ', cv: 'ε', en: 'speak', en3: 'speaks', ing: 'speaking', pp: 'spoken', impf: ['ἐλάλ', 'ἐλαλ'], fut: 'λαλήσ', L: 12 },
    kaleo: { lemma: 'καλέω', stem: 'καλ', cv: 'ε', en: 'call', en3: 'calls', ing: 'calling', pp: 'called', impf: ['ἐκάλ', 'ἐκαλ'], fut: 'καλέσ', L: 12 },
    zeteo: { lemma: 'ζητέω', stem: 'ζητ', cv: 'ε', en: 'seek', en3: 'seeks', ing: 'seeking', pp: 'sought', impf: ['ἐζήτ', 'ἐζητ'], fut: 'ζητήσ', L: 12 },
    tereo: { lemma: 'τηρέω', stem: 'τηρ', cv: 'ε', en: 'keep', en3: 'keeps', ing: 'keeping', pp: 'kept', impf: ['ἐτήρ', 'ἐτηρ'], fut: 'τηρήσ', L: 12 },
    phileo: { lemma: 'φιλέω', stem: 'φιλ', cv: 'ε', en: 'love', en3: 'loves', ing: 'loving', pp: 'loved', impf: ['ἐφίλ', 'ἐφιλ'], fut: 'φιλήσ', L: 12 },
    agapao: { lemma: 'ἀγαπάω', stem: 'ἀγαπ', cv: 'α', en: 'love', en3: 'loves', ing: 'loving', pp: 'loved', impf: ['ἠγάπ', 'ἠγαπ'], fut: 'ἀγαπήσ', L: 12 },
    gennao: { lemma: 'γεννάω', stem: 'γενν', cv: 'α', en: 'beget', en3: 'begets', ing: 'begetting', pp: 'begotten', impf: ['ἐγένν', 'ἐγενν'], fut: 'γεννήσ', L: 12 },
    pleroo: { lemma: 'πληρόω', stem: 'πληρ', cv: 'ο', en: 'fill', en3: 'fills', ing: 'filling', pp: 'filled', impf: ['ἐπλήρ', 'ἐπληρ'], fut: 'πληρώσ', L: 12 },
    phaneroo: { lemma: 'φανερόω', stem: 'φανερ', cv: 'ο', en: 'reveal', en3: 'reveals', ing: 'revealing', pp: 'revealed', impf: ['ἐφανέρ', 'ἐφανερ'], fut: 'φανερώσ', L: 12 },
    stauroo: { lemma: 'σταυρόω', stem: 'σταυρ', cv: 'ο', en: 'crucify', en3: 'crucifies', ing: 'crucifying', pp: 'crucified', impf: ['ἐσταύρ', 'ἐσταυρ'], fut: 'σταυρώσ', L: 12 }
  };

  P.eimi = { lemma: 'εἰμί', sg: ['εἰμί', 'εἶ', 'ἐστί(ν)'], pl: ['ἐσμέν', 'ἐστέ', 'εἰσί(ν)'],
    en: [['I am', 'you are', 'he/she/it is'], ['we are', 'you (pl.) are', 'they are']], L: 10 };
  // Lesson 13. The future has middle endings (Lesson 14).
  P.eimi.impf = { sg: ['ἤμην', 'ἦς', 'ἦν'], pl: ['ἦμεν', 'ἦτε', 'ἦσαν'],
    en: [['I was', 'you were', 'he/she/it was'], ['we were', 'you (pl.) were', 'they were']] };
  P.eimi.fut = { sg: ['ἔσομαι', 'ἔσῃ', 'ἔσται'], pl: ['ἐσόμεθα', 'ἔσεσθε', 'ἔσονται'],
    en: [['I will be', 'you will be', 'he/she/it will be'], ['we will be', 'you (pl.) will be', 'they will be']] };

  P.article = {
    m: { sg: ['ὁ', 'τοῦ', 'τῷ', 'τόν'], pl: ['οἱ', 'τῶν', 'τοῖς', 'τούς'] },
    f: { sg: ['ἡ', 'τῆς', 'τῇ', 'τήν'], pl: ['αἱ', 'τῶν', 'ταῖς', 'τάς'] },
    n: { sg: ['τό', 'τοῦ', 'τῷ', 'τό'], pl: ['τά', 'τῶν', 'τοῖς', 'τά'] }
  };

  // cls: '2' (2nd decl. masc/fem), '2n' (2nd neuter), '1' (1st fem), '1m' (1st masc),
  //      '3' (3rd masc/fem), '3n' (3rd neuter)
  // Optional: dict (genitive as printed in the dictionary entry, for 3rd decl.),
  //           E (per-noun ending lengths, overriding P.endLen[cls]), voc (vocative).
  P.nouns = {
    logos: { lemma: 'λόγος', g: 'm', cls: '2', gloss: 'word', en: 'word', enPl: 'words', L: 5,
      sg: ['λόγος', 'λόγου', 'λόγῳ', 'λόγον'], pl: ['λόγοι', 'λόγων', 'λόγοις', 'λόγους'], voc: 'λόγε' },
    theos: { lemma: 'θεός', g: 'm', cls: '2', gloss: 'God, god', L: 5,
      sg: ['θεός', 'θεοῦ', 'θεῷ', 'θεόν'], pl: ['θεοί', 'θεῶν', 'θεοῖς', 'θεούς'] },
    anthropos: { lemma: 'ἄνθρωπος', g: 'm', cls: '2', gloss: 'man, person', L: 5,
      sg: ['ἄνθρωπος', 'ἀνθρώπου', 'ἀνθρώπῳ', 'ἄνθρωπον'], pl: ['ἄνθρωποι', 'ἀνθρώπων', 'ἀνθρώποις', 'ἀνθρώπους'] },
    kyrios: { lemma: 'κύριος', g: 'm', cls: '2', gloss: 'Lord, lord', L: 5,
      sg: ['κύριος', 'κυρίου', 'κυρίῳ', 'κύριον'], pl: ['κύριοι', 'κυρίων', 'κυρίοις', 'κυρίους'], voc: 'κύριε' },
    huios: { lemma: 'υἱός', g: 'm', cls: '2', gloss: 'son', L: 5,
      sg: ['υἱός', 'υἱοῦ', 'υἱῷ', 'υἱόν'], pl: ['υἱοί', 'υἱῶν', 'υἱοῖς', 'υἱούς'] },
    doulos: { lemma: 'δοῦλος', g: 'm', cls: '2', gloss: 'servant, slave', L: 5,
      sg: ['δοῦλος', 'δούλου', 'δούλῳ', 'δοῦλον'], pl: ['δοῦλοι', 'δούλων', 'δούλοις', 'δούλους'] },
    adelphos: { lemma: 'ἀδελφός', g: 'm', cls: '2', gloss: 'brother', L: 5,
      sg: ['ἀδελφός', 'ἀδελφοῦ', 'ἀδελφῷ', 'ἀδελφόν'], pl: ['ἀδελφοί', 'ἀδελφῶν', 'ἀδελφοῖς', 'ἀδελφούς'] },
    ouranos: { lemma: 'οὐρανός', g: 'm', cls: '2', gloss: 'heaven, sky', L: 5,
      sg: ['οὐρανός', 'οὐρανοῦ', 'οὐρανῷ', 'οὐρανόν'], pl: ['οὐρανοί', 'οὐρανῶν', 'οὐρανοῖς', 'οὐρανούς'] },
    hodos: { lemma: 'ὁδός', g: 'f', cls: '2', gloss: 'way, road', L: 5,
      sg: ['ὁδός', 'ὁδοῦ', 'ὁδῷ', 'ὁδόν'], pl: ['ὁδοί', 'ὁδῶν', 'ὁδοῖς', 'ὁδούς'] },
    ergon: { lemma: 'ἔργον', g: 'n', cls: '2n', gloss: 'work, deed', en: 'work', enPl: 'works', L: 6,
      sg: ['ἔργον', 'ἔργου', 'ἔργῳ', 'ἔργον'], pl: ['ἔργα', 'ἔργων', 'ἔργοις', 'ἔργα'] },
    teknon: { lemma: 'τέκνον', g: 'n', cls: '2n', gloss: 'child', L: 6,
      sg: ['τέκνον', 'τέκνου', 'τέκνῳ', 'τέκνον'], pl: ['τέκνα', 'τέκνων', 'τέκνοις', 'τέκνα'] },
    hieron: { lemma: 'ἱερόν', g: 'n', cls: '2n', gloss: 'temple', L: 6,
      sg: ['ἱερόν', 'ἱεροῦ', 'ἱερῷ', 'ἱερόν'], pl: ['ἱερά', 'ἱερῶν', 'ἱεροῖς', 'ἱερά'] },
    ploion: { lemma: 'πλοῖον', g: 'n', cls: '2n', gloss: 'boat', L: 6,
      sg: ['πλοῖον', 'πλοίου', 'πλοίῳ', 'πλοῖον'], pl: ['πλοῖα', 'πλοίων', 'πλοίοις', 'πλοῖα'] },
    euangelion: { lemma: 'εὐαγγέλιον', g: 'n', cls: '2n', gloss: 'gospel', L: 6,
      sg: ['εὐαγγέλιον', 'εὐαγγελίου', 'εὐαγγελίῳ', 'εὐαγγέλιον'], pl: ['εὐαγγέλια', 'εὐαγγελίων', 'εὐαγγελίοις', 'εὐαγγέλια'] },
    arche: { lemma: 'ἀρχή', g: 'f', cls: '1', gloss: 'beginning', en: 'beginning', enPl: 'beginnings', L: 7,
      sg: ['ἀρχή', 'ἀρχῆς', 'ἀρχῇ', 'ἀρχήν'], pl: ['ἀρχαί', 'ἀρχῶν', 'ἀρχαῖς', 'ἀρχάς'] },
    phone: { lemma: 'φωνή', g: 'f', cls: '1', gloss: 'voice', L: 7,
      sg: ['φωνή', 'φωνῆς', 'φωνῇ', 'φωνήν'], pl: ['φωναί', 'φωνῶν', 'φωναῖς', 'φωνάς'] },
    psyche: { lemma: 'ψυχή', g: 'f', cls: '1', gloss: 'soul, life', L: 7,
      sg: ['ψυχή', 'ψυχῆς', 'ψυχῇ', 'ψυχήν'], pl: ['ψυχαί', 'ψυχῶν', 'ψυχαῖς', 'ψυχάς'] },
    hemera: { lemma: 'ἡμέρα', g: 'f', cls: '1', gloss: 'day', en: 'day', enPl: 'days', L: 7,
      sg: ['ἡμέρα', 'ἡμέρας', 'ἡμέρᾳ', 'ἡμέραν'], pl: ['ἡμέραι', 'ἡμερῶν', 'ἡμέραις', 'ἡμέρας'] },
    kardia: { lemma: 'καρδία', g: 'f', cls: '1', gloss: 'heart', L: 7,
      sg: ['καρδία', 'καρδίας', 'καρδίᾳ', 'καρδίαν'], pl: ['καρδίαι', 'καρδιῶν', 'καρδίαις', 'καρδίας'] },
    hamartia: { lemma: 'ἁμαρτία', g: 'f', cls: '1', gloss: 'sin', L: 7,
      sg: ['ἁμαρτία', 'ἁμαρτίας', 'ἁμαρτίᾳ', 'ἁμαρτίαν'], pl: ['ἁμαρτίαι', 'ἁμαρτιῶν', 'ἁμαρτίαις', 'ἁμαρτίας'] },
    doxa: { lemma: 'δόξα', g: 'f', cls: '1', gloss: 'glory', en: 'glory', enPl: 'glories', L: 7,
      sg: ['δόξα', 'δόξης', 'δόξῃ', 'δόξαν'], pl: ['δόξαι', 'δοξῶν', 'δόξαις', 'δόξας'] },
    aletheia: { lemma: 'ἀλήθεια', g: 'f', cls: '1', gloss: 'truth', L: 7,
      sg: ['ἀλήθεια', 'ἀληθείας', 'ἀληθείᾳ', 'ἀλήθειαν'], pl: null },
    prophetes: { lemma: 'προφήτης', g: 'm', cls: '1m', gloss: 'prophet', L: 7,
      sg: ['προφήτης', 'προφήτου', 'προφήτῃ', 'προφήτην'], pl: ['προφῆται', 'προφητῶν', 'προφήταις', 'προφήτας'] },
    mathetes: { lemma: 'μαθητής', g: 'm', cls: '1m', gloss: 'disciple', L: 7,
      sg: ['μαθητής', 'μαθητοῦ', 'μαθητῇ', 'μαθητήν'], pl: ['μαθηταί', 'μαθητῶν', 'μαθηταῖς', 'μαθητάς'] },
    // Third declension (Lesson 11). In σάρξ and σαρξί(ν) the highlighted ξ is the stem's κ fused with σ.
    sarx: { lemma: 'σάρξ', dict: 'σαρκός', g: 'f', cls: '3', gloss: 'flesh', L: 11,
      sg: ['σάρξ', 'σαρκός', 'σαρκί', 'σάρκα'], pl: ['σάρκες', 'σαρκῶν', 'σαρξί(ν)', 'σάρκας'] },
    elpis: { lemma: 'ἐλπίς', dict: '-ίδος', g: 'f', cls: '3', gloss: 'hope', L: 11,
      sg: ['ἐλπίς', 'ἐλπίδος', 'ἐλπίδι', 'ἐλπίδα'], pl: ['ἐλπίδες', 'ἐλπίδων', 'ἐλπίσι(ν)', 'ἐλπίδας'] },
    onoma: { lemma: 'ὄνομα', dict: '-ατος', g: 'n', cls: '3n', gloss: 'name', en: 'name', enPl: 'names', L: 11,
      sg: ['ὄνομα', 'ὀνόματος', 'ὀνόματι', 'ὄνομα'], pl: ['ὀνόματα', 'ὀνομάτων', 'ὀνόμασι(ν)', 'ὀνόματα'] },
    pneuma: { lemma: 'πνεῦμα', dict: '-ατος', g: 'n', cls: '3n', gloss: 'spirit, Spirit', L: 11,
      sg: ['πνεῦμα', 'πνεύματος', 'πνεύματι', 'πνεῦμα'], pl: ['πνεύματα', 'πνευμάτων', 'πνεύμασι(ν)', 'πνεύματα'] },
    soma: { lemma: 'σῶμα', dict: '-ατος', g: 'n', cls: '3n', gloss: 'body', L: 11,
      sg: ['σῶμα', 'σώματος', 'σώματι', 'σῶμα'], pl: ['σώματα', 'σωμάτων', 'σώμασι(ν)', 'σώματα'] },
    pater: { lemma: 'πατήρ', dict: 'πατρός', g: 'm', cls: '3', gloss: 'father', L: 11, voc: 'πάτερ',
      sg: ['πατήρ', 'πατρός', 'πατρί', 'πατέρα'], pl: ['πατέρες', 'πατέρων', 'πατράσι(ν)', 'πατέρας'],
      E: { sg: [0, 2, 1, 1], pl: [2, 2, 2, 2] } },
    aner: { lemma: 'ἀνήρ', dict: 'ἀνδρός', g: 'm', cls: '3', gloss: 'man, husband', L: 11, voc: 'ἄνερ',
      sg: ['ἀνήρ', 'ἀνδρός', 'ἀνδρί', 'ἄνδρα'], pl: ['ἄνδρες', 'ἀνδρῶν', 'ἀνδράσι(ν)', 'ἄνδρας'],
      E: { sg: [0, 2, 1, 1], pl: [2, 2, 2, 2] } },
    gyne: { lemma: 'γυνή', dict: 'γυναικός', g: 'f', cls: '3', gloss: 'woman, wife', L: 11, voc: 'γύναι',
      sg: ['γυνή', 'γυναικός', 'γυναικί', 'γυναῖκα'], pl: ['γυναῖκες', 'γυναικῶν', 'γυναιξί(ν)', 'γυναῖκας'],
      E: { sg: [0, 2, 1, 1], pl: [2, 2, 2, 2] } }
  };

  // Ending lengths (letters) used to highlight endings in tables
  P.endLen = {
    '2': { sg: [2, 2, 1, 2], pl: [2, 2, 3, 3] },
    '2n': { sg: [2, 2, 1, 2], pl: [1, 2, 3, 1] },
    '1': { sg: [1, 2, 1, 2], pl: [2, 2, 3, 2] },
    '1m': { sg: [2, 2, 1, 2], pl: [2, 2, 3, 2] },
    '2n-o': { sg: [1, 2, 1, 1], pl: [1, 2, 3, 1] },
    '3': { sg: [1, 2, 1, 1], pl: [2, 2, 2, 2] },
    '3n': { sg: [0, 2, 1, 0], pl: [1, 2, 2, 1] }
  };

  P.adj = {
    agathos: { lemma: 'ἀγαθός, -ή, -όν', gloss: 'good', L: 8, cls: { m: '2', f: '1', n: '2n' },
      m: { sg: ['ἀγαθός', 'ἀγαθοῦ', 'ἀγαθῷ', 'ἀγαθόν'], pl: ['ἀγαθοί', 'ἀγαθῶν', 'ἀγαθοῖς', 'ἀγαθούς'] },
      f: { sg: ['ἀγαθή', 'ἀγαθῆς', 'ἀγαθῇ', 'ἀγαθήν'], pl: ['ἀγαθαί', 'ἀγαθῶν', 'ἀγαθαῖς', 'ἀγαθάς'] },
      n: { sg: ['ἀγαθόν', 'ἀγαθοῦ', 'ἀγαθῷ', 'ἀγαθόν'], pl: ['ἀγαθά', 'ἀγαθῶν', 'ἀγαθοῖς', 'ἀγαθά'] } },
    kalos: { lemma: 'καλός, -ή, -όν', gloss: 'good, beautiful', L: 8, cls: { m: '2', f: '1', n: '2n' },
      m: { sg: ['καλός', 'καλοῦ', 'καλῷ', 'καλόν'], pl: ['καλοί', 'καλῶν', 'καλοῖς', 'καλούς'] },
      f: { sg: ['καλή', 'καλῆς', 'καλῇ', 'καλήν'], pl: ['καλαί', 'καλῶν', 'καλαῖς', 'καλάς'] },
      n: { sg: ['καλόν', 'καλοῦ', 'καλῷ', 'καλόν'], pl: ['καλά', 'καλῶν', 'καλοῖς', 'καλά'] } },
    hagios: { lemma: 'ἅγιος, -α, -ον', gloss: 'holy', L: 8, cls: { m: '2', f: '1', n: '2n' },
      m: { sg: ['ἅγιος', 'ἁγίου', 'ἁγίῳ', 'ἅγιον'], pl: ['ἅγιοι', 'ἁγίων', 'ἁγίοις', 'ἁγίους'] },
      f: { sg: ['ἁγία', 'ἁγίας', 'ἁγίᾳ', 'ἁγίαν'], pl: ['ἅγιαι', 'ἁγίων', 'ἁγίαις', 'ἁγίας'] },
      n: { sg: ['ἅγιον', 'ἁγίου', 'ἁγίῳ', 'ἅγιον'], pl: ['ἅγια', 'ἁγίων', 'ἁγίοις', 'ἅγια'] } },
    dikaios: { lemma: 'δίκαιος, -α, -ον', gloss: 'righteous, just', L: 8, cls: { m: '2', f: '1', n: '2n' },
      m: { sg: ['δίκαιος', 'δικαίου', 'δικαίῳ', 'δίκαιον'], pl: ['δίκαιοι', 'δικαίων', 'δικαίοις', 'δικαίους'] },
      f: { sg: ['δικαία', 'δικαίας', 'δικαίᾳ', 'δικαίαν'], pl: ['δίκαιαι', 'δικαίων', 'δικαίαις', 'δικαίας'] },
      n: { sg: ['δίκαιον', 'δικαίου', 'δικαίῳ', 'δίκαιον'], pl: ['δίκαια', 'δικαίων', 'δικαίοις', 'δίκαια'] } },
    nekros: { lemma: 'νεκρός, -ά, -όν', gloss: 'dead', L: 8, cls: { m: '2', f: '1', n: '2n' },
      m: { sg: ['νεκρός', 'νεκροῦ', 'νεκρῷ', 'νεκρόν'], pl: ['νεκροί', 'νεκρῶν', 'νεκροῖς', 'νεκρούς'] },
      f: { sg: ['νεκρά', 'νεκρᾶς', 'νεκρᾷ', 'νεκράν'], pl: ['νεκραί', 'νεκρῶν', 'νεκραῖς', 'νεκράς'] },
      n: { sg: ['νεκρόν', 'νεκροῦ', 'νεκρῷ', 'νεκρόν'], pl: ['νεκρά', 'νεκρῶν', 'νεκροῖς', 'νεκρά'] } }
  };

  P.pron = {
    ego: { lemma: 'ἐγώ', gloss: 'I / we', L: 10,
      sg: ['ἐγώ', 'ἐμοῦ, μου', 'ἐμοί, μοι', 'ἐμέ, με'], pl: ['ἡμεῖς', 'ἡμῶν', 'ἡμῖν', 'ἡμᾶς'],
      en: { sg: ['I', 'of me, my', 'to/for me', 'me'], pl: ['we', 'of us, our', 'to/for us', 'us'] } },
    su: { lemma: 'σύ', gloss: 'you', L: 10,
      sg: ['σύ', 'σοῦ, σου', 'σοί, σοι', 'σέ, σε'], pl: ['ὑμεῖς', 'ὑμῶν', 'ὑμῖν', 'ὑμᾶς'],
      en: { sg: ['you', 'of you, your', 'to/for you', 'you'], pl: ['you (pl.)', 'of you, your (pl.)', 'to/for you (pl.)', 'you (pl.)'] } },
    autos: { lemma: 'αὐτός, -ή, -ό', gloss: 'he, she, it', L: 10, cls: { m: '2', f: '1', n: '2n-o' },
      m: { sg: ['αὐτός', 'αὐτοῦ', 'αὐτῷ', 'αὐτόν'], pl: ['αὐτοί', 'αὐτῶν', 'αὐτοῖς', 'αὐτούς'] },
      f: { sg: ['αὐτή', 'αὐτῆς', 'αὐτῇ', 'αὐτήν'], pl: ['αὐταί', 'αὐτῶν', 'αὐταῖς', 'αὐτάς'] },
      n: { sg: ['αὐτό', 'αὐτοῦ', 'αὐτῷ', 'αὐτό'], pl: ['αὐτά', 'αὐτῶν', 'αὐτοῖς', 'αὐτά'] } }
  };

  /* ---------- Prepositions ---------- */
  C.preps = [
    { p: 'ἐν', uses: [['dat.', 'in, on, among; by, with']], ex: [['ἐν ἀρχῇ', 'in the beginning', 'John 1:1']] },
    { p: 'εἰς', uses: [['acc.', 'into, to, for']], ex: [['εἰς τὸν κόσμον', 'into the world', '']] },
    { p: 'ἐκ, ἐξ', uses: [['gen.', 'out of, from']], ex: [['ἐκ τοῦ οὐρανοῦ', 'out of heaven', '']] },
    { p: 'ἀπό', uses: [['gen.', 'from, away from']], ex: [['ἀπὸ τοῦ πονηροῦ', 'from the evil one', 'Matt 6:13']] },
    { p: 'πρός', uses: [['acc.', 'to, toward; with']], ex: [['πρὸς τὸν θεόν', 'with God', 'John 1:1']] },
    { p: 'σύν', uses: [['dat.', 'with, together with']], ex: [['σὺν αὐτῷ', 'with him', '']] },
    { p: 'διά', uses: [['gen.', 'through'], ['acc.', 'because of, on account of']], ex: [['δι᾽ αὐτοῦ', 'through him', 'John 1:3'], ['διὰ τὸν λόγον', 'because of the word', '']] },
    { p: 'μετά', uses: [['gen.', 'with'], ['acc.', 'after']], ex: [['μετὰ σοῦ', 'with you', 'Luke 1:28'], ['μετὰ τρεῖς ἡμέρας', 'after three days', 'Mark 8:31']] },
    { p: 'κατά', uses: [['gen.', 'against; down from'], ['acc.', 'according to; throughout']], ex: [['κατὰ τοῦ Ἰησοῦ', 'against Jesus', 'Matt 26:59'], ['κατὰ τὸ ῥῆμά σου', 'according to your word', 'Luke 1:38']] },
    { p: 'περί', uses: [['gen.', 'concerning, about'], ['acc.', 'around']], ex: [['περὶ αὐτοῦ', 'concerning him', 'John 1:15'], ['περὶ τὸ ἱερόν', 'around the temple', '']] },
    { p: 'ὑπό', uses: [['gen.', 'by (the agent)'], ['acc.', 'under']], ex: [['ὑπὸ τοῦ κυρίου', 'by the Lord', ''], ['ὑπὸ νόμον', 'under law', 'Rom 6:14']] },
    { p: 'ὑπέρ', uses: [['gen.', 'for, on behalf of'], ['acc.', 'above, beyond']], ex: [['ὑπὲρ ἡμῶν', 'for us', 'Rom 5:8'], ['ὑπὲρ τὸν διδάσκαλον', 'above the teacher', 'Matt 10:24']] },
    { p: 'ἐπί', uses: [['gen.', 'on, upon, over'], ['dat.', 'on, at, on the basis of'], ['acc.', 'on, onto, to, against']], ex: [['ἐπὶ γῆς', 'on earth', 'Matt 6:10'], ['ἐπὶ τὴν γῆν', 'onto the earth', '']] },
    { p: 'παρά', uses: [['gen.', 'from (the side of)'], ['dat.', 'beside, with, in the presence of'], ['acc.', 'alongside, by']], ex: [['παρὰ κυρίου', 'from the Lord', 'Ps 120:2 LXX'], ['παρὰ τῷ θεῷ', 'with God', 'Luke 1:30'], ['παρὰ τὴν θάλασσαν', 'beside the sea', 'Mark 1:16']] }
  ];

  /* ---------- Vocabulary ---------- */
  // g: lexical form, d: dictionary details, en: meaning, f: ≈ NT occurrences, L: lesson, pos, n: note
  const V = [
    // Lesson 4 — verbs
    { g: 'λύω', en: 'I loose, untie, destroy', f: 42, L: 4, pos: 'verb', n: 'analysis (ἀνά + λύω)' },
    { g: 'λέγω', en: 'I say, speak, tell', f: 2354, L: 4, pos: 'verb', n: 'related to λόγος' },
    { g: 'ἔχω', en: 'I have, hold', f: 708, L: 4, pos: 'verb' },
    { g: 'ἀκούω', en: 'I hear, listen to', f: 428, L: 4, pos: 'verb', n: 'acoustic' },
    { g: 'βλέπω', en: 'I see, look at', f: 132, L: 4, pos: 'verb' },
    { g: 'γινώσκω', en: 'I know, come to know', f: 222, L: 4, pos: 'verb', n: 'agnostic, Gnostic' },
    { g: 'πιστεύω', en: 'I believe, trust', f: 241, L: 4, pos: 'verb', n: 'often πιστεύω εἰς, “believe in”' },
    { g: 'γράφω', en: 'I write', f: 191, L: 4, pos: 'verb', n: 'graphic, autograph' },
    { g: 'λαμβάνω', en: 'I take, receive', f: 258, L: 4, pos: 'verb' },
    { g: 'διδάσκω', en: 'I teach', f: 97, L: 4, pos: 'verb', n: 'didactic, Didache' },
    { g: 'μένω', en: 'I remain, abide, stay', f: 118, L: 4, pos: 'verb' },
    { g: 'πέμπω', en: 'I send', f: 79, L: 4, pos: 'verb' },
    { g: 'καί', en: 'and, also, even', f: 9161, L: 4, pos: 'conj.', n: 'καί … καί: both … and' },
    { g: 'οὐ, οὐκ, οὐχ', en: 'not', f: 1623, L: 4, pos: 'adv.', n: 'οὐκ before smooth breathing, οὐχ before rough' },
    // Lesson 5 — second declension masculine
    { g: 'ὁ, ἡ, τό', en: 'the', f: 19867, L: 5, pos: 'article' },
    { g: 'λόγος', d: '-ου, ὁ', en: 'word, message, statement', f: 330, L: 5, pos: 'noun', n: 'logic, theology' },
    { g: 'θεός', d: '-οῦ, ὁ', en: 'God, god', f: 1317, L: 5, pos: 'noun', n: 'theology' },
    { g: 'κύριος', d: '-ου, ὁ', en: 'Lord, lord, master, sir', f: 717, L: 5, pos: 'noun', n: 'Kyrie eleison' },
    { g: 'ἄνθρωπος', d: '-ου, ὁ', en: 'man, human being, person', f: 550, L: 5, pos: 'noun', n: 'anthropology' },
    { g: 'υἱός', d: '-οῦ, ὁ', en: 'son, descendant', f: 377, L: 5, pos: 'noun' },
    { g: 'ἀδελφός', d: '-οῦ, ὁ', en: 'brother', f: 343, L: 5, pos: 'noun', n: 'Philadelphia' },
    { g: 'κόσμος', d: '-ου, ὁ', en: 'world', f: 186, L: 5, pos: 'noun', n: 'cosmos, cosmetic' },
    { g: 'οὐρανός', d: '-οῦ, ὁ', en: 'heaven, sky', f: 273, L: 5, pos: 'noun', n: 'Uranus' },
    { g: 'νόμος', d: '-ου, ὁ', en: 'law; the Law', f: 194, L: 5, pos: 'noun', n: 'Deuteronomy' },
    { g: 'δοῦλος', d: '-ου, ὁ', en: 'slave, servant', f: 126, L: 5, pos: 'noun' },
    { g: 'λαός', d: '-οῦ, ὁ', en: 'people', f: 142, L: 5, pos: 'noun', n: 'laity' },
    { g: 'Χριστός', d: '-οῦ, ὁ', en: 'Christ, Messiah, Anointed One', f: 529, L: 5, pos: 'noun' },
    { g: 'ὁδός', d: '-οῦ, ἡ', en: 'way, road, journey', f: 101, L: 5, pos: 'noun', n: 'exodus (ἐξ + ὁδός); feminine!' },
    // Lesson 6 — neuter nouns, conjunctions
    { g: 'ἔργον', d: '-ου, τό', en: 'work, deed', f: 169, L: 6, pos: 'noun', n: 'energy, ergonomic' },
    { g: 'τέκνον', d: '-ου, τό', en: 'child', f: 99, L: 6, pos: 'noun' },
    { g: 'εὐαγγέλιον', d: '-ου, τό', en: 'good news, gospel', f: 76, L: 6, pos: 'noun', n: 'evangelist' },
    { g: 'ἱερόν', d: '-οῦ, τό', en: 'temple, sanctuary', f: 71, L: 6, pos: 'noun', n: 'hierarchy' },
    { g: 'πλοῖον', d: '-ου, τό', en: 'boat, ship', f: 68, L: 6, pos: 'noun' },
    { g: 'σημεῖον', d: '-ου, τό', en: 'sign, miracle', f: 77, L: 6, pos: 'noun', n: 'semiotics' },
    { g: 'δαιμόνιον', d: '-ου, τό', en: 'demon', f: 63, L: 6, pos: 'noun' },
    { g: 'βιβλίον', d: '-ου, τό', en: 'book, scroll', f: 34, L: 6, pos: 'noun', n: 'Bible, bibliography' },
    { g: 'πρόβατον', d: '-ου, τό', en: 'sheep', f: 39, L: 6, pos: 'noun' },
    { g: 'Ἰησοῦς', d: '-οῦ, ὁ', en: 'Jesus, Joshua', f: 917, L: 6, pos: 'noun', n: 'Ἰησοῦ serves as gen. and dat.' },
    { g: 'ἀλλά', en: 'but, yet, rather', f: 638, L: 6, pos: 'conj.', n: 'ἀλλ᾽ before a vowel' },
    { g: 'δέ', en: 'but, and, now', f: 2792, L: 6, pos: 'conj.', n: 'postpositive' },
    { g: 'γάρ', en: 'for, since', f: 1041, L: 6, pos: 'conj.', n: 'postpositive' },
    // Lesson 7 — first declension
    { g: 'ἀρχή', d: '-ῆς, ἡ', en: 'beginning; ruler', f: 55, L: 7, pos: 'noun', n: 'archaic, archangel' },
    { g: 'ζωή', d: '-ῆς, ἡ', en: 'life', f: 135, L: 7, pos: 'noun', n: 'zoology' },
    { g: 'φωνή', d: '-ῆς, ἡ', en: 'voice, sound', f: 139, L: 7, pos: 'noun', n: 'phonics, telephone' },
    { g: 'ψυχή', d: '-ῆς, ἡ', en: 'soul, life, self', f: 103, L: 7, pos: 'noun', n: 'psychology' },
    { g: 'ἀγάπη', d: '-ης, ἡ', en: 'love', f: 116, L: 7, pos: 'noun' },
    { g: 'γῆ', d: 'γῆς, ἡ', en: 'earth, land, ground', f: 250, L: 7, pos: 'noun', n: 'geology' },
    { g: 'εἰρήνη', d: '-ης, ἡ', en: 'peace', f: 92, L: 7, pos: 'noun', n: 'Irene, irenic' },
    { g: 'ἡμέρα', d: '-ας, ἡ', en: 'day', f: 389, L: 7, pos: 'noun', n: 'ephemeral' },
    { g: 'ἁμαρτία', d: '-ας, ἡ', en: 'sin', f: 173, L: 7, pos: 'noun', n: 'hamartiology' },
    { g: 'καρδία', d: '-ας, ἡ', en: 'heart', f: 156, L: 7, pos: 'noun', n: 'cardiac' },
    { g: 'βασιλεία', d: '-ας, ἡ', en: 'kingdom, reign', f: 162, L: 7, pos: 'noun', n: 'basilica' },
    { g: 'ἐκκλησία', d: '-ας, ἡ', en: 'church, assembly', f: 114, L: 7, pos: 'noun', n: 'ecclesial' },
    { g: 'ἀλήθεια', d: '-ας, ἡ', en: 'truth', f: 109, L: 7, pos: 'noun' },
    { g: 'δόξα', d: '-ης, ἡ', en: 'glory, majesty', f: 166, L: 7, pos: 'noun', n: 'doxology' },
    { g: 'προφήτης', d: '-ου, ὁ', en: 'prophet', f: 144, L: 7, pos: 'noun', n: 'masculine, first declension' },
    { g: 'μαθητής', d: '-οῦ, ὁ', en: 'disciple, learner', f: 261, L: 7, pos: 'noun', n: 'masculine, first declension' },
    // Lesson 8 — adjectives
    { g: 'ἀγαθός', d: '-ή, -όν', en: 'good, useful', f: 102, L: 8, pos: 'adj.', n: 'Agatha' },
    { g: 'καλός', d: '-ή, -όν', en: 'good, beautiful, noble', f: 101, L: 8, pos: 'adj.', n: 'calligraphy' },
    { g: 'ἅγιος', d: '-α, -ον', en: 'holy; (pl.) saints', f: 233, L: 8, pos: 'adj.', n: 'hagiography' },
    { g: 'δίκαιος', d: '-α, -ον', en: 'righteous, just', f: 79, L: 8, pos: 'adj.' },
    { g: 'πιστός', d: '-ή, -όν', en: 'faithful, believing', f: 67, L: 8, pos: 'adj.' },
    { g: 'πρῶτος', d: '-η, -ον', en: 'first, foremost', f: 155, L: 8, pos: 'adj.', n: 'prototype' },
    { g: 'ἔσχατος', d: '-η, -ον', en: 'last, final', f: 52, L: 8, pos: 'adj.', n: 'eschatology' },
    { g: 'νεκρός', d: '-ά, -όν', en: 'dead; (as noun) dead person', f: 128, L: 8, pos: 'adj.', n: 'necrology' },
    { g: 'πονηρός', d: '-ά, -όν', en: 'evil, wicked', f: 78, L: 8, pos: 'adj.' },
    { g: 'μακάριος', d: '-α, -ον', en: 'blessed, happy', f: 50, L: 8, pos: 'adj.' },
    { g: 'ἀγαπητός', d: '-ή, -όν', en: 'beloved', f: 61, L: 8, pos: 'adj.' },
    { g: 'αἰώνιος', d: '-ον', en: 'eternal', f: 71, L: 8, pos: 'adj.', n: 'two endings: masc. forms serve for fem.' },
    // Lesson 9 — prepositions
    { g: 'ἐν', d: '+ dat.', en: 'in, on, among; by, with', f: 2752, L: 9, pos: 'prep.' },
    { g: 'εἰς', d: '+ acc.', en: 'into, to, for', f: 1767, L: 9, pos: 'prep.', n: 'eisegesis' },
    { g: 'ἐκ, ἐξ', d: '+ gen.', en: 'out of, from', f: 914, L: 9, pos: 'prep.', n: 'ἐξ before a vowel; exodus' },
    { g: 'ἀπό', d: '+ gen.', en: 'from, away from', f: 646, L: 9, pos: 'prep.', n: 'apostasy' },
    { g: 'πρός', d: '+ acc.', en: 'to, toward, with', f: 700, L: 9, pos: 'prep.' },
    { g: 'διά', d: '+ gen. / acc.', en: 'gen.: through · acc.: because of', f: 667, L: 9, pos: 'prep.', n: 'diameter' },
    { g: 'μετά', d: '+ gen. / acc.', en: 'gen.: with · acc.: after', f: 469, L: 9, pos: 'prep.', n: 'metaphysics' },
    { g: 'κατά', d: '+ gen. / acc.', en: 'gen.: against · acc.: according to', f: 473, L: 9, pos: 'prep.', n: 'catholic (καθ᾽ ὅλου)' },
    { g: 'περί', d: '+ gen. / acc.', en: 'gen.: concerning · acc.: around', f: 333, L: 9, pos: 'prep.', n: 'perimeter' },
    { g: 'ὑπό', d: '+ gen. / acc.', en: 'gen.: by · acc.: under', f: 220, L: 9, pos: 'prep.', n: 'hypodermic' },
    { g: 'ἐπί', d: '+ gen. / dat. / acc.', en: 'on, upon, over, to, against', f: 890, L: 9, pos: 'prep.', n: 'epidermis' },
    { g: 'παρά', d: '+ gen. / dat. / acc.', en: 'gen.: from · dat.: beside · acc.: alongside', f: 194, L: 9, pos: 'prep.', n: 'parallel' },
    { g: 'σύν', d: '+ dat.', en: 'with, together with', f: 128, L: 9, pos: 'prep.', n: 'synagogue' },
    { g: 'ὑπέρ', d: '+ gen. / acc.', en: 'gen.: on behalf of · acc.: above', f: 150, L: 9, pos: 'prep.', n: 'hyper-' },
    // Lesson 10 — εἰμί and pronouns
    { g: 'εἰμί', en: 'I am, exist', f: 2462, L: 10, pos: 'verb' },
    { g: 'ἐγώ', d: 'pl. ἡμεῖς', en: 'I; (pl.) we', f: 1725, L: 10, pos: 'pron.', n: 'ego' },
    { g: 'σύ', d: 'pl. ὑμεῖς', en: 'you', f: 1069, L: 10, pos: 'pron.' },
    { g: 'αὐτός', d: '-ή, -ό', en: 'he, she, it; (pl.) they; self, same', f: 5597, L: 10, pos: 'pron.', n: 'autograph, automatic' },
    { g: 'ὅτι', en: 'that, because', f: 1296, L: 10, pos: 'conj.' },
    { g: 'νῦν', en: 'now', f: 147, L: 10, pos: 'adv.' },
    { g: 'οὖν', en: 'therefore, then, so', f: 499, L: 10, pos: 'conj.', n: 'postpositive' },
    { g: 'ἀμήν', en: 'amen, truly', f: 129, L: 10, pos: 'particle', n: 'from Hebrew' },
    { g: 'πατήρ', d: 'πατρός, ὁ', en: 'father', f: 413, L: 10, pos: 'noun', n: 'third declension (Lesson 11); vocative πάτερ' },
    // Lesson 11 — third declension
    { g: 'πνεῦμα', d: '-ατος, τό', en: 'spirit, Spirit; wind, breath', f: 379, L: 11, pos: 'noun', n: 'pneumatic' },
    { g: 'ὄνομα', d: '-ατος, τό', en: 'name', f: 231, L: 11, pos: 'noun', n: 'onomatopoeia; Latin nomen' },
    { g: 'ἀνήρ', d: 'ἀνδρός, ὁ', en: 'man, husband', f: 216, L: 11, pos: 'noun', n: 'android, Andrew' },
    { g: 'γυνή', d: 'γυναικός, ἡ', en: 'woman, wife', f: 215, L: 11, pos: 'noun', n: 'gynecology; vocative γύναι' },
    { g: 'χάρις', d: '-ιτος, ἡ', en: 'grace, favor; thanks', f: 155, L: 11, pos: 'noun', n: 'charisma; accusative χάριν' },
    { g: 'σάρξ', d: 'σαρκός, ἡ', en: 'flesh, body; human nature', f: 147, L: 11, pos: 'noun', n: 'sarcophagus' },
    { g: 'σῶμα', d: '-ατος, τό', en: 'body', f: 142, L: 11, pos: 'noun', n: 'psychosomatic' },
    { g: 'αἰών', d: '-ῶνος, ὁ', en: 'age, eternity', f: 122, L: 11, pos: 'noun', n: 'eon; εἰς τὸν αἰῶνα, “forever”' },
    { g: 'αἷμα', d: '-ατος, τό', en: 'blood', f: 97, L: 11, pos: 'noun', n: 'hematology' },
    { g: 'πούς', d: 'ποδός, ὁ', en: 'foot', f: 93, L: 11, pos: 'noun', n: 'podium, tripod' },
    { g: 'μήτηρ', d: 'μητρός, ἡ', en: 'mother', f: 83, L: 11, pos: 'noun', n: 'declines like πατήρ; Latin mater' },
    { g: 'φῶς', d: 'φωτός, τό', en: 'light', f: 73, L: 11, pos: 'noun', n: 'photograph' },
    { g: 'ῥῆμα', d: '-ατος, τό', en: 'word, saying; thing, matter', f: 68, L: 11, pos: 'noun', n: 'same root as rhetoric' },
    { g: 'ἐλπίς', d: '-ίδος, ἡ', en: 'hope', f: 53, L: 11, pos: 'noun' },
    // Lesson 12 — contract verbs
    { g: 'ποιέω', d: 'ποιῶ', en: 'I do, make', f: 568, L: 12, pos: 'verb', n: 'poem, poet (a “maker”)' },
    { g: 'λαλέω', d: 'λαλῶ', en: 'I speak, say', f: 296, L: 12, pos: 'verb', n: 'glossolalia' },
    { g: 'καλέω', d: 'καλῶ', en: 'I call, name, invite', f: 148, L: 12, pos: 'verb', n: 'related to ἐκκλησία, those “called out”' },
    { g: 'ἀγαπάω', d: 'ἀγαπῶ', en: 'I love', f: 143, L: 12, pos: 'verb', n: 'related to ἀγάπη' },
    { g: 'ζάω', d: 'ζῶ', en: 'I live', f: 140, L: 12, pos: 'verb', n: 'contracts to η: ζῇς, ζῇ, ζῆτε; related to ζωή' },
    { g: 'ζητέω', d: 'ζητῶ', en: 'I seek, look for', f: 117, L: 12, pos: 'verb' },
    { g: 'γεννάω', d: 'γεννῶ', en: 'I beget, give birth to', f: 97, L: 12, pos: 'verb', n: 'genesis' },
    { g: 'περιπατέω', d: 'περιπατῶ', en: 'I walk; live, conduct myself', f: 95, L: 12, pos: 'verb', n: 'περί + πατέω; peripatetic' },
    { g: 'ἀκολουθέω', d: 'ἀκολουθῶ', en: 'I follow', f: 90, L: 12, pos: 'verb', n: 'takes a dative object; acolyte' },
    { g: 'πληρόω', d: 'πληρῶ', en: 'I fill, fulfill', f: 86, L: 12, pos: 'verb', n: 'πλήρωμα, “fullness”' },
    { g: 'μαρτυρέω', d: 'μαρτυρῶ', en: 'I bear witness, testify', f: 76, L: 12, pos: 'verb', n: 'martyr' },
    { g: 'τηρέω', d: 'τηρῶ', en: 'I keep, guard, observe', f: 70, L: 12, pos: 'verb' },
    { g: 'φανερόω', d: 'φανερῶ', en: 'I reveal, make known', f: 49, L: 12, pos: 'verb', n: 'phenomenon' },
    { g: 'σταυρόω', d: 'σταυρῶ', en: 'I crucify', f: 46, L: 12, pos: 'verb', n: 'from σταυρός, “cross”' },
    { g: 'εὐλογέω', d: 'εὐλογῶ', en: 'I bless, praise', f: 41, L: 12, pos: 'verb', n: 'εὖ + λόγος; eulogy' },
    { g: 'φιλέω', d: 'φιλῶ', en: 'I love, like; kiss', f: 25, L: 12, pos: 'verb', n: 'philosophy, Philadelphia' },
    // Lesson 13 — imperfect and future (d gives the future)
    { g: 'ἐγείρω', d: 'fut. ἐγερῶ', en: 'I raise up; (passive) I rise', f: 144, L: 13, pos: 'verb', n: 'John 2:19: ἐν τρισὶν ἡμέραις ἐγερῶ αὐτόν, “in three days I will raise it up”' },
    { g: 'ἀποστέλλω', d: 'fut. ἀποστελῶ', en: 'I send, send out', f: 132, L: 13, pos: 'verb', n: 'apostle, one who is sent; imperfect ἀπέστελλον' },
    { g: 'κρίνω', d: 'fut. κρινῶ', en: 'I judge, decide', f: 114, L: 13, pos: 'verb', n: 'critic, crisis' },
    { g: 'σῴζω', d: 'fut. σώσω', en: 'I save, rescue, heal', f: 106, L: 13, pos: 'verb', n: 'related to σωτηρία, “salvation”' },
    { g: 'αἴρω', d: 'fut. ἀρῶ', en: 'I take up, take away', f: 101, L: 13, pos: 'verb', n: 'John 1:29: ὁ αἴρων τὴν ἁμαρτίαν τοῦ κόσμου, “who takes away the sin of the world”' },
    { g: 'ἐκβάλλω', d: 'fut. ἐκβαλῶ', en: 'I cast out, drive out', f: 81, L: 13, pos: 'verb', n: 'ἐκ + βάλλω, “throw”; imperfect ἐξέβαλλον' },
    { g: 'βαπτίζω', d: 'fut. βαπτίσω', en: 'I baptize, wash', f: 77, L: 13, pos: 'verb', n: 'baptism' },
    { g: 'ἄγω', d: 'fut. ἄξω', en: 'I lead, bring', f: 67, L: 13, pos: 'verb', n: 'synagogue (σύν + ἄγω); imperfect ἦγον' },
    { g: 'δοξάζω', d: 'fut. δοξάσω', en: 'I glorify, praise', f: 61, L: 13, pos: 'verb', n: 'related to δόξα' },
    { g: 'κηρύσσω', d: 'fut. κηρύξω', en: 'I proclaim, preach', f: 59, L: 13, pos: 'verb', n: 'kerygma, the Church’s proclamation' },
    { g: 'διώκω', d: 'fut. διώξω', en: 'I pursue, persecute', f: 45, L: 13, pos: 'verb' },
    { g: 'θεραπεύω', d: 'fut. θεραπεύσω', en: 'I heal; serve', f: 43, L: 13, pos: 'verb', n: 'therapy' },
    { g: 'τότε', en: 'then, at that time', f: 160, L: 13, pos: 'adv.', n: 'a favorite word of Matthew' },
    { g: 'πάλιν', en: 'again, back', f: 141, L: 13, pos: 'adv.', n: 'palindrome' },
    { g: 'ἔτι', en: 'still, yet; more', f: 93, L: 13, pos: 'adv.' },
    { g: 'ἤδη', en: 'already, now', f: 61, L: 13, pos: 'adv.' },
    // Lesson 14 — middle and passive voice
    { g: 'γίνομαι', d: 'fut. γενήσομαι', en: 'I become, happen, come into being; am born', f: 669, L: 14, pos: 'verb', n: 'genesis; ἐγένετο, “it came to be,” is its aorist' },
    { g: 'ἔρχομαι', d: 'fut. ἐλεύσομαι', en: 'I come, go', f: 632, L: 14, pos: 'verb', n: 'imperfect ἠρχόμην' },
    { g: 'ὁράω', d: 'fut. ὄψομαι', en: 'I see', f: 454, L: 14, pos: 'verb', n: 'optic (from the future stem ὀπ-)' },
    { g: 'πίστις', d: '-εως, ἡ', en: 'faith, trust, faithfulness', f: 243, L: 14, pos: 'noun', n: 'related to πιστεύω; third declension, gen. πίστεως' },
    { g: 'ἀποκρίνομαι', en: 'I answer, reply', f: 231, L: 14, pos: 'verb', n: 'takes the dative of the person answered' },
    { g: 'οὐδείς', d: 'οὐδεμία, οὐδέν', en: 'no one, nothing; no', f: 227, L: 14, pos: 'adj.', n: 'οὐδέ + εἷς, “not even one”' },
    { g: 'ἐξέρχομαι', en: 'I go out, come out', f: 218, L: 14, pos: 'verb', n: 'ἐκ + ἔρχομαι' },
    { g: 'δύναμαι', en: 'I can, am able', f: 210, L: 14, pos: 'verb', n: 'no linking vowel: δύναται, “he can”; dynamic' },
    { g: 'εἰσέρχομαι', en: 'I go in, enter', f: 194, L: 14, pos: 'verb', n: 'εἰς + ἔρχομαι' },
    { g: 'πορεύομαι', en: 'I go, proceed; live', f: 153, L: 14, pos: 'verb' },
    { g: 'φοβέομαι', d: 'φοβοῦμαι', en: 'I fear, am afraid', f: 95, L: 14, pos: 'verb', n: 'phobia; μὴ φοβοῦ, “do not be afraid”' },
    { g: 'ἄρχω', en: 'I rule (+ gen.); (middle) I begin', f: 86, L: 14, pos: 'verb', n: 'related to ἀρχή; monarch' },
    { g: 'προσεύχομαι', en: 'I pray', f: 85, L: 14, pos: 'verb', n: 'related to προσευχή, “prayer”' },
    { g: 'ὕδωρ', d: 'ὕδατος, τό', en: 'water', f: 76, L: 14, pos: 'noun', n: 'hydrant, hydrogen' },
    { g: 'δέχομαι', en: 'I receive, welcome, accept', f: 56, L: 14, pos: 'verb' },
    { g: 'πείθω', en: 'I persuade; (middle/passive + dat.) I obey, trust', f: 52, L: 14, pos: 'verb', n: 'related to πίστις' }
  ];
  C.vocab = V;

})(window.COURSE);
