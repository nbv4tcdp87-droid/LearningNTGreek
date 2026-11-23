/* En Archē Greek — Lessons 6–10 */
window.COURSE = window.COURSE || {};
(function (C) {
  const L = C.lessons = C.lessons || [];

  /* ============ LESSON 6 ============ */
  L.push({
    n: 6, title: 'Neuter Nouns & the Article', gk: 'τὸ ἄρθρον',
    blurb: 'Neuter nouns like ἔργον, what the article does, and words that come second.',
    goals: [
      'Decline neuter nouns like ἔργον',
      'Use the masculine and neuter article',
      'Read the article where English has none, and supply “a” where Greek has none',
      'Place postpositive words like δέ and γάρ'
    ],
    sections: [
      { h: 'Neuter nouns: ἔργον', html: `
        <p>Second-declension nouns ending in -ον are neuter. They share most endings with λόγος.</p>
        <div data-para="noun:ergon" data-art="1" data-gloss="1"></div>
        <p>Two rules hold for <em>every</em> neuter noun in Greek, in every declension:</p>
        <ol class="steps">
          <li>The nominative and accusative are identical, in both singular and plural.</li>
          <li>The nominative and accusative plural end in short -α.</li>
        </ol>
        <p>Because τὰ ἔργα can be subject or object, context decides. Ask which reading makes sense with the verb.</p>
        <p>A neuter plural subject often takes a <em>singular</em> verb: τὰ τέκνα βλέπει, “the children see.” Koine is not consistent about this, and you will also see plural verbs (John 10:27, below).</p>` },
      { h: 'The article, masculine and neuter', html: `
        <div data-para="article" data-genders="m,n"></div>
        <p>The article agrees with its noun in gender, case and number. It does not always rhyme with it: the feminine noun ὁδός takes ἡ ὁδός, and you will meet masculine nouns ending in -ης that take ὁ (Lesson 7). When a noun’s ending is ambiguous, the article usually settles it.</p>` },
      { h: 'There is no “a”', html: `
        <p>Greek has a word for “the” but none for “a.” A noun without the article is translated with “a” or with no article at all: λόγος, “a word” or “word”; ὁ λόγος, “the word.”</p>
        <p>Greek also uses the article where English does not. Drop it in translation:</p>
        <ul>
          <li>with proper names: ὁ Ἰησοῦς, “Jesus”;</li>
          <li>with abstract nouns: ἡ ἀγάπη, “love”;</li>
          <li>often with θεός: ὁ θεός, “God.”</li>
        </ul>
        <p>Ἰησοῦς has an unusual pattern: Ἰησοῦς (nom.), Ἰησοῦ (gen. and dat.), Ἰησοῦν (acc.). The article tells you which: τοῦ Ἰησοῦ or τῷ Ἰησοῦ.</p>` },
      { h: 'The article marks the subject', html: `
        <p>With a verb like “is,” Greek can have two nominatives in one clause. The one with the article is normally the subject. Look again at John 1:1:</p>
        <div class="example"><p class="gk-line">καὶ θεὸς ἦν ὁ λόγος.</p><p>ὁ λόγος has the article, so it is the subject: “and <em>the Word</em> was God.” θεός stands first for emphasis and without the article. John has just said the Word was “with God” (πρὸς τὸν θεόν), meaning the Father. Here he says what the Word is: fully God, yet distinct from the Father. This is how the Church has always read the verse.</p></div>` },
      { h: 'Words that come second', html: `
        <p>A few small words are <strong>postpositive</strong>: they never stand first in their clause. Usually they come second, but in English you translate them first.</p>
        <div class="example"><p class="gk-line">ὁ δὲ Ἰησοῦς λέγει …</p><p><em>But</em> Jesus says … (not “The but Jesus”)</p></div>
        <p>The common ones are δέ (“but, and”), γάρ (“for”) and οὖν (“therefore,” Lesson 10). ἀλλά (“but”) is <em>not</em> postpositive; it comes first, like English “but.”</p>` }
    ],
    texts: [
      { ref: 'Isa 40:8', src: 'LXX', w: [['τὸ', 'the'], ['δὲ', 'but'], ['ῥῆμα', 'word (nom. sg., neuter)'], ['τοῦ', 'of the'], ['θεοῦ', 'God'], ['ἡμῶν', 'our'], ['μένει', 'remains (3rd sg.)'], ['εἰς', 'into'], ['τὸν', 'the'], ['αἰῶνα.', 'age']],
        en: 'But the word of our God remains forever.',
        notes: ['δέ is postpositive: it stands second, after τό, but we translate it first.', 'εἰς τὸν αἰῶνα, literally “into the age,” is the Greek idiom for “forever.”', 'ῥῆμα is neuter but belongs to the third declension (Unit 2). The article τό shows its gender.'] },
      { ref: 'Mark 1:1', src: 'NT', w: [['Ἀρχὴ', 'beginning'], ['τοῦ', 'of the'], ['εὐαγγελίου', 'gospel (gen. sg.)'], ['Ἰησοῦ', 'of Jesus'], ['Χριστοῦ', 'Christ']],
        en: 'The beginning of the gospel of Jesus Christ.',
        notes: ['τοῦ εὐαγγελίου: neuter genitive singular, the same ending as masculine λόγου.', 'Many manuscripts continue “the Son of God” (υἱοῦ θεοῦ).'] },
      { ref: 'John 10:27', src: 'NT', w: [['τὰ', 'the'], ['πρόβατα', 'sheep (nom. pl.)'], ['τὰ', 'the'], ['ἐμὰ', 'my'], ['τῆς', 'the'], ['φωνῆς', 'voice'], ['μου', 'my'], ['ἀκούουσιν,', 'hear (3rd pl.)'], ['κἀγὼ', 'and I'], ['γινώσκω', 'know (1st sg.)'], ['αὐτά,', 'them'], ['καὶ', 'and'], ['ἀκολουθοῦσίν', 'they follow'], ['μοι', 'me']],
        en: 'My sheep hear my voice, and I know them, and they follow me.',
        notes: ['τὰ πρόβατα is a neuter plural subject, here with a plural verb, ἀκούουσιν.', 'ἀκούω takes its object in the genitive: τῆς φωνῆς, “the voice.”', 'κἀγώ is καί + ἐγώ run together.'] }
    ],
    ex: [
      { t: 'mc', q: 'Parse <span class="big">τὰ ἔργα</span>.', o: ['nominative or accusative plural', 'genitive plural', 'nominative singular only', 'accusative singular'], a: 0, x: 'Neuter nominative and accusative are always identical.' },
      { t: 'mc', q: 'Which article goes with <span class="big">τέκνου</span>?', o: ['τοῦ', 'τό', 'τῷ', 'τῶν'], a: 0 },
      { t: 'mc', q: 'Which article goes with <span class="big">σημεῖα</span>?', o: ['τά', 'τό', 'αἱ', 'τοῖς'], a: 0 },
      { t: 'mc', q: 'Which article goes with <span class="big">ἀνθρώπῳ</span>?', o: ['τῷ', 'τοῦ', 'τόν', 'τοῖς'], a: 0 },
      { t: 'mc', q: 'In καὶ θεὸς ἦν ὁ λόγος, which word is the subject?', o: ['ὁ λόγος', 'θεός', 'ἦν'], a: 0, x: 'With “is/was,” the nominative that has the article is normally the subject.' },
      { t: 'mc', q: 'What does it mean that δέ is postpositive?', o: ['It never stands first in its clause', 'It always ends a sentence', 'It comes after the verb', 'It only joins nouns'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">λόγος</span> (no article).', o: ['a word, or word', 'the word', 'words', 'of a word'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">τὰ τέκνα ἀκούει τὸ εὐαγγέλιον</span>.', o: ['The children hear the gospel.', 'The child hears the gospels.', 'The gospel hears the children.', 'The children of the gospel hear.'], a: 0, x: 'A neuter plural subject with a singular verb. The sense shows which neuter is the subject.' },
      { t: 'mc', q: 'How do you say “the signs of the Lord”?', o: ['τὰ σημεῖα τοῦ κυρίου', 'τὸ σημεῖον τῶν κυρίων', 'τὰ σημεῖα τῷ κυρίῳ', 'τοῦ σημείου τοῦ κυρίου'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">βλέπει τὰ πλοῖα ὁ δοῦλος</span>.', o: ['The servant sees the boats.', 'The boats see the servant.', 'The servants see the boat.', 'He sees the servant’s boats.'], a: 0 },
      { t: 'self', q: 'Translate:', gk: 'ὁ Ἰησοῦς λέγει τοὺς λόγους τοῦ θεοῦ, οἱ δὲ ἄνθρωποι οὐκ ἀκούουσιν.', a: 'Jesus speaks the words of God, but the people do not listen.', x: 'Leave “the” off Jesus. δέ stands second in its clause but is translated first: “but the people …”' },
      { t: 'self', q: 'Translate:', gk: 'γράφομεν γὰρ τὸ βιβλίον.', a: 'For we are writing the book.', x: 'γάρ is postpositive; translate it first. The present can be “we write” or “we are writing.”' }
    ]
  });

  /* ============ LESSON 7 ============ */
  L.push({
    n: 7, title: 'The First Declension', gk: 'ἡ πρώτη κλίσις',
    blurb: 'Feminine nouns in three patterns, the full article, and masculine nouns in -ης.',
    goals: [
      'Decline the three feminine patterns: ἀρχή, ἡμέρα, δόξα',
      'Complete the article in all three genders',
      'Recognize masculine first-declension nouns like προφήτης',
      'Use the article to resolve ambiguous forms'
    ],
    sections: [
      { h: 'Three patterns, one plural', html: `
        <p>Most first-declension nouns are feminine. In the singular they come in three patterns, depending on how the stem ends. In the plural all three are the same.</p>
        <div data-para="nouns:arche,hemera,doxa" data-art="1"></div>` },
      { h: 'Which pattern?', html: `
        <ol class="steps">
          <li><b>After ε, ι or ρ, alpha stays alpha</b> all through the singular: ἡμέρα, ἡμέρας; καρδία, καρδίας; ἀλήθεια, ἀληθείας.</li>
          <li><b>After any other letter, a nominative in -α</b> switches to η in the genitive and dative: δόξα, δόξης, δόξῃ, δόξαν.</li>
          <li><b>A nominative in -η</b> keeps η all through the singular: ἀρχή, ἀρχῆς, ἀρχῇ, ἀρχήν.</li>
        </ol>
        <p>The dictionary entry tells you which: <span class="gk-inline">ἡμέρα, -ας, ἡ</span> versus <span class="gk-inline">δόξα, -ης, ἡ</span>.</p>
        <p>The genitive plural of every first-declension noun ends in a circumflexed -ῶν: ἀρχῶν, ἡμερῶν, δοξῶν.</p>` },
      { h: 'The full article', html: `
        <p>With the feminine forms the article is complete. Notice that most forms are τ- plus the noun ending; only the nominatives ὁ, ἡ, οἱ, αἱ lack the τ and take rough breathing instead.</p>
        <div data-para="article"></div>
        <aside class="callout latin"><b>Latin parallel.</b> The first declension is Latin’s first declension: <em>via, viae</em>. Compare Greek -αι with Latin -ae, and -ας with -ās.</aside>` },
      { h: 'Masculine nouns in -ης', html: `
        <p>A few first-declension nouns are masculine. They end in -ης, take a genitive in -ου borrowed from λόγος, and otherwise follow ἀρχή. The article ὁ marks them clearly.</p>
        <div data-para="noun:prophetes" data-art="1"></div>
        <p>μαθητής, “disciple,” follows the same pattern: ὁ μαθητής, τοῦ μαθητοῦ.</p>` },
      { h: 'When an ending could be two things', html: `
        <p>ἡμέρας can be genitive singular (“of the day”) or accusative plural (“the days”). Let the article decide: τῆς ἡμέρας is genitive singular; τὰς ἡμέρας is accusative plural. Without an article, let the sentence decide.</p>` }
    ],
    texts: [
      { ref: 'Prov 1:7', src: 'LXX', w: [['Ἀρχὴ', 'beginning (nom.)'], ['σοφίας', 'of wisdom (gen.)'], ['φόβος', 'fear (nom.)'], ['θεοῦ', 'of God']],
        en: 'The fear of God is the beginning of wisdom.',
        notes: ['No verb: Greek often leaves out “is.” Two nominatives, ἀρχή and φόβος, are joined by an understood “is.”', 'σοφία is α-pure: the stem ends in ι, so the genitive is σοφίας.'] },
      { ref: 'Luke 2:14', src: 'NT', w: [['δόξα', 'glory (nom.)'], ['ἐν', 'in'], ['ὑψίστοις', 'the highest places'], ['θεῷ', 'to God (dat.)'], ['καὶ', 'and'], ['ἐπὶ', 'on'], ['γῆς', 'earth (gen.)'], ['εἰρήνη', 'peace (nom.)'], ['ἐν', 'among'], ['ἀνθρώποις', 'people (dat. pl.)'], ['εὐδοκίας.', 'of good will, of (God’s) favor']],
        en: 'Glory to God in the highest, and on earth peace among people of good will.',
        notes: ['The angels’ hymn, which opens the Gloria at Mass.', 'δόξα and εἰρήνη are nominative; θεῷ is dative, “to God.”', 'Some manuscripts read εὐδοκία, “good will toward people.” The Latin Gloria’s <em>hominibus bonae voluntatis</em> follows εὐδοκίας.'] },
      { ref: 'Luke 1:46', src: 'NT', w: [['Μεγαλύνει', 'magnifies (3rd sg.)'], ['ἡ', 'the'], ['ψυχή', 'soul (nom.)'], ['μου', 'my'], ['τὸν', 'the'], ['κύριον', 'Lord (acc.)']],
        en: 'My soul magnifies the Lord.',
        notes: ['The first word of Mary’s song is the verb: Μεγαλύνει, in Latin <em>Magnificat</em>.', 'ἡ ψυχή is the subject; τὸν κύριον is the object.'] },
      { ref: 'John 14:6', src: 'NT', w: [['ἐγώ', 'I'], ['εἰμι', 'am'], ['ἡ', 'the'], ['ὁδὸς', 'way'], ['καὶ', 'and'], ['ἡ', 'the'], ['ἀλήθεια', 'truth'], ['καὶ', 'and'], ['ἡ', 'the'], ['ζωή', 'life']],
        en: 'I am the way and the truth and the life.',
        notes: ['Three feminine nouns, each with ἡ: ὁδός (second declension), ἀλήθεια and ζωή (first).'] }
    ],
    ex: [
      { t: 'mc', q: 'Parse <span class="big">τῆς ζωῆς</span>.', o: ['genitive singular', 'nominative plural', 'accusative plural', 'dative singular'], a: 0 },
      { t: 'mc', q: 'Without an article, <span class="big">ἡμέρας</span> could be…', o: ['genitive singular or accusative plural', 'nominative singular or plural', 'dative singular or plural', 'only accusative plural'], a: 0 },
      { t: 'mc', q: 'Parse <span class="big">δόξης</span>.', o: ['genitive singular', 'accusative plural', 'nominative singular', 'dative plural'], a: 0, x: 'δόξα switches to η in the genitive and dative singular.' },
      { t: 'mc', q: 'Which article goes with <span class="big">καρδίαις</span>?', o: ['ταῖς', 'τοῖς', 'τῆς', 'τάς'], a: 0 },
      { t: 'mc', q: 'What is the genitive plural of <span class="big">ψυχή</span>?', o: ['ψυχῶν', 'ψυχῆς', 'ψυχαῖς', 'ψυχάς'], a: 0 },
      { t: 'mc', q: 'Which of these nouns is masculine?', o: ['μαθητής', 'ἀρχή', 'καρδία', 'ὁδός'], a: 0, x: 'μαθητής, -οῦ, ὁ is a masculine first-declension noun. ὁδός looks masculine but is feminine.' },
      { t: 'mc', q: 'How do you say “the voice of the prophet”?', o: ['ἡ φωνὴ τοῦ προφήτου', 'ἡ φωνὴ τῆς προφήτης', 'ὁ φωνὴ τοῦ προφήτου', 'τῆς φωνῆς ὁ προφήτης'], a: 0 },
      { t: 'mc', q: 'In Μεγαλύνει ἡ ψυχή μου τὸν κύριον, what is the subject?', o: ['ἡ ψυχή', 'τὸν κύριον', 'μου'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">ὁ θεὸς γινώσκει τὰς καρδίας τῶν ἀνθρώπων</span>.', o: ['God knows the hearts of people.', 'The hearts of people know God.', 'God knows the heart of the person.', 'People know the heart of God.'], a: 0 },
      { t: 'match', q: 'Match each noun to its meaning.', pairs: [['ἡμέρα', 'day'], ['καρδία', 'heart'], ['ἁμαρτία', 'sin'], ['βασιλεία', 'kingdom'], ['εἰρήνη', 'peace'], ['ἀγάπη', 'love']] },
      { t: 'self', q: 'Translate:', gk: 'οἱ μαθηταὶ ἀκούουσι τὴν φωνὴν τοῦ προφήτου.', a: 'The disciples hear the voice of the prophet.', x: 'οἱ μαθηταί: nominative plural of a masculine first-declension noun.' },
      { t: 'self', q: 'Translate:', gk: 'τὴν ἀλήθειαν λέγει ἡ ἐκκλησία.', a: 'The church speaks the truth.', x: 'τὴν ἀλήθειαν is accusative (object), ἡ ἐκκλησία nominative (subject).' }
    ]
  });

  /* ============ LESSON 8 ============ */
  L.push({
    n: 8, title: 'Adjectives', gk: 'τὰ ἐπίθετα',
    blurb: 'Agreement, the attributive and predicate positions, and adjectives used as nouns.',
    goals: [
      'Decline ἀγαθός and ἅγιος in all three genders',
      'Tell the attributive position from the predicate position',
      'Translate adjectives used as nouns'
    ],
    sections: [
      { h: 'Agreement', html: `
        <p>An adjective agrees with the noun it describes in <strong>gender, case and number</strong>. To do that it needs all three genders. Most adjectives borrow their endings from the declensions you know: masculine like λόγος, feminine like ἀρχή or ἡμέρα, neuter like ἔργον. This is called a 2-1-2 adjective.</p>
        <p>Dictionary entries list all three nominatives: <span class="gk-inline">ἀγαθός, -ή, -όν</span>.</p>
        <div data-para="adj:agathos"></div>
        <p>When the stem ends in ε, ι or ρ, the feminine keeps α, just as ἡμέρα does: <span class="gk-inline">ἅγιος, ἁγία, ἅγιον</span>.</p>
        <div data-para="adj:hagios"></div>
        <p>Agreement does not mean matching endings. ὁ ἀγαθὸς μαθητής (masculine, first declension) and ἡ ἀγαθὴ ὁδός (feminine, second declension) are both correct.</p>` },
      { h: 'Position: the key idea', html: `
        <p>Where the article stands decides how an adjective is used.</p>
        <div class="tbl-wrap"><table class="tbl positions">
          <thead><tr><th>Greek</th><th>Position</th><th>English</th></tr></thead>
          <tbody>
            <tr><td class="gk-cell">ὁ ἀγαθὸς λόγος</td><td rowspan="2"><b>Attributive</b><br><small>the article stands right before the adjective</small></td><td rowspan="2">the good word</td></tr>
            <tr><td class="gk-cell">ὁ λόγος ὁ ἀγαθός</td></tr>
            <tr><td class="gk-cell">ὁ λόγος ἀγαθός</td><td rowspan="2"><b>Predicate</b><br><small>the adjective has no article of its own</small></td><td rowspan="2">the word is good</td></tr>
            <tr><td class="gk-cell">ἀγαθὸς ὁ λόγος</td></tr>
          </tbody>
        </table></div>
        <p>In the predicate position, supply “is” (or “are”). Greek leaves it out constantly. When there is no article anywhere, as in ἀγαθὸς λόγος, read it as attributive: “a good word.”</p>` },
      { h: 'Adjectives as nouns', html: `
        <p>With the article and no noun, an adjective becomes a noun. Its gender tells you what to supply:</p>
        <ul>
          <li>ὁ ἀγαθός, “the good man”; ἡ ἀγαθή, “the good woman”; τὸ ἀγαθόν, “the good thing, what is good”</li>
          <li>οἱ ἅγιοι, “the holy ones, the saints”; οἱ νεκροί, “the dead”</li>
          <li>ὁ πρῶτος καὶ ὁ ἔσχατος, “the first and the last”</li>
        </ul>` },
      { h: 'Two-ending adjectives', html: `
        <p>A few adjectives use their masculine forms for the feminine too, so they list only two endings: <span class="gk-inline">αἰώνιος, -ον</span>, “eternal.” That is why you will read ζωὴ αἰώνιος, “eternal life,” with a feminine noun and a masculine-looking adjective.</p>` }
    ],
    texts: [
      { ref: 'Ps 117:1', alt: '(118:1)', src: 'LXX', w: [['Ἐξομολογεῖσθε', 'give thanks'], ['τῷ', 'to the'], ['κυρίῳ,', 'Lord (dat.)'], ['ὅτι', 'for'], ['ἀγαθός,', 'good'], ['ὅτι', 'for'], ['εἰς', 'into'], ['τὸν', 'the'], ['αἰῶνα', 'age'], ['τὸ', 'the'], ['ἔλεος', 'mercy'], ['αὐτοῦ.', 'his']],
        en: 'Give thanks to the Lord, for he is good; for his mercy endures forever.',
        notes: ['ἀγαθός stands alone as a predicate: “(he is) good.” Greek leaves the verb unstated.'] },
      { ref: 'Rom 7:12', src: 'NT', w: [['ὥστε', 'so then'], ['ὁ', 'the'], ['μὲν', 'on the one hand'], ['νόμος', 'law (m.)'], ['ἅγιος,', 'holy (m., predicate)'], ['καὶ', 'and'], ['ἡ', 'the'], ['ἐντολὴ', 'commandment (f.)'], ['ἁγία', 'holy (f., predicate)'], ['καὶ', 'and'], ['δικαία', 'just (f.)'], ['καὶ', 'and'], ['ἀγαθή.', 'good (f.)']],
        en: 'So the law is holy, and the commandment is holy and just and good.',
        notes: ['Every adjective is predicate: none has its own article. Supply “is.”', 'ἅγιος agrees with masculine νόμος; ἁγία, δικαία and ἀγαθή agree with feminine ἐντολή.'] },
      { ref: 'John 15:1', src: 'NT', w: [['Ἐγώ', 'I'], ['εἰμι', 'am'], ['ἡ', 'the'], ['ἄμπελος', 'vine'], ['ἡ', 'the'], ['ἀληθινὴ', 'true (attributive)'], ['καὶ', 'and'], ['ὁ', 'the'], ['πατήρ', 'father'], ['μου', 'my'], ['ὁ', 'the'], ['γεωργός', 'farmer, vinedresser'], ['ἐστιν.', 'is']],
        en: 'I am the true vine, and my Father is the vinedresser.',
        notes: ['ἡ ἄμπελος ἡ ἀληθινή: the second attributive pattern, noun then article + adjective. The repeated article adds emphasis to “true.”', 'ἄμπελος is a feminine second-declension noun, like ὁδός.'] },
      { ref: 'Rev 22:13', src: 'NT', w: [['ἐγὼ', 'I (am)'], ['τὸ', 'the'], ['ἄλφα', 'alpha'], ['καὶ', 'and'], ['τὸ', 'the'], ['ὦ,', 'omega'], ['ὁ', 'the'], ['πρῶτος', 'first (one)'], ['καὶ', 'and'], ['ὁ', 'the'], ['ἔσχατος,', 'last (one)'], ['ἡ', 'the'], ['ἀρχὴ', 'beginning'], ['καὶ', 'and'], ['τὸ', 'the'], ['τέλος.', 'end']],
        en: 'I am the Alpha and the Omega, the first and the last, the beginning and the end.',
        notes: ['ὁ πρῶτος and ὁ ἔσχατος are adjectives used as nouns: “the first one,” “the last one.”'] }
    ],
    ex: [
      { t: 'mc', q: 'Translate <span class="big">ὁ ἀγαθὸς δοῦλος</span>.', o: ['the good servant', 'the servant is good', 'a good servant', 'the servant of the good man'], a: 0, x: 'Article directly before the adjective: attributive.' },
      { t: 'mc', q: 'Translate <span class="big">ὁ δοῦλος ἀγαθός</span>.', o: ['the servant is good', 'the good servant', 'the servants are good', 'a good servant'], a: 0, x: 'The adjective has no article of its own: predicate. Supply “is.”' },
      { t: 'mc', q: 'Translate <span class="big">ὁ δοῦλος ὁ ἀγαθός</span>.', o: ['the good servant', 'the servant is good', 'the good man is a servant', 'the servant of the good man'], a: 0, x: 'Second attributive position: noun, then article + adjective.' },
      { t: 'mc', q: 'Which form agrees with <span class="big">τὴν ὁδόν</span>?', o: ['ἀγαθήν', 'ἀγαθόν', 'ἀγαθῆς', 'ἀγαθάς'], a: 0, x: 'ὁδός is feminine, so the adjective takes feminine accusative singular.' },
      { t: 'mc', q: 'Translate <span class="big">οἱ ἅγιοι</span>.', o: ['the saints, the holy ones', 'the holy days', 'they are holy', 'holy things'], a: 0 },
      { t: 'mc', q: 'Why is the adjective masculine-looking in <span class="big">ζωὴ αἰώνιος</span>?', o: ['αἰώνιος uses its masculine forms for the feminine', 'ζωή is masculine', 'It is a predicate adjective', 'It is a copying mistake'], a: 0 },
      { t: 'mc', q: 'Parse <span class="big">τῆς ἁγίας</span>.', o: ['genitive singular feminine', 'accusative plural feminine', 'nominative singular feminine', 'genitive plural masculine'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">ἀγαθὸς ὁ θεός</span>.', o: ['God is good.', 'the good God', 'the good gods', 'God of the good'], a: 0 },
      { t: 'mc', q: 'In Rom 7:12, ἡ ἐντολὴ ἁγία, the adjective ἁγία is…', o: ['predicate: “the commandment is holy”', 'attributive: “the holy commandment”', 'used as a noun: “the holy woman”'], a: 0 },
      { t: 'mc', q: 'How do you say “the first and the last” (as titles)?', o: ['ὁ πρῶτος καὶ ὁ ἔσχατος', 'πρῶτος ὁ ἔσχατος', 'τὸ πρῶτον καὶ τὸ ἔσχατον ἔργον', 'ὁ πρῶτος ἔσχατος'], a: 0 },
      { t: 'self', q: 'Translate:', gk: 'ὁ πιστὸς δοῦλος λαμβάνει τὸ καλὸν ἔργον.', a: 'The faithful servant receives the good work.', x: 'Both adjectives are attributive: the article stands directly before each.' },
      { t: 'self', q: 'Translate:', gk: 'πονηραὶ αἱ ἡμέραι.', a: 'The days are evil.', x: 'Predicate position: πονηραί has no article of its own. Compare Eph 5:16.' }
    ]
  });

  /* ============ LESSON 9 ============ */
  L.push({
    n: 9, title: 'Prepositions', gk: 'αἱ προθέσεις',
    blurb: 'Fourteen prepositions, the cases they take, and how the case changes the meaning.',
    goals: [
      'Know 14 common prepositions and the case or cases each takes',
      'Let the case choose the meaning',
      'Recognize shortened forms like δι᾽ and μεθ᾽',
      'Spot prepositions inside compound verbs'
    ],
    sections: [
      { h: 'Preposition plus case', html: `
        <p>A preposition is always followed by a noun in a particular case, called its object. Some prepositions take only one case. Others take two or three, and the case changes the meaning: διὰ τοῦ νόμου (genitive) is “through the law,” but διὰ τὸν νόμον (accusative) is “because of the law.”</p>
        <aside class="callout latin"><b>Latin parallel.</b> Just like <em>in</em> + accusative (“into”) and <em>in</em> + ablative (“in”). Greek simply has more of these pairs.</aside>
        <p>As a rough guide: the genitive tends toward motion <em>from</em>, the dative toward <em>rest</em> at a place, and the accusative toward motion <em>to</em>.</p>` },
      { h: 'A picture of space', html: `
        <p>Many prepositions began as words for position. This diagram shows the core spatial meaning of eleven of them around an object.</p>
        <div data-custom="prep-diagram"></div>` },
      { h: 'The fourteen', html: `<div data-custom="prep-table"></div>` },
      { h: 'Shortened forms', html: `
        <p>Before a vowel, most prepositions drop their final vowel, marked with an apostrophe: δι᾽ αὐτοῦ, μετ᾽ αὐτοῦ, ἀπ᾽ ἀρχῆς. If the next word has rough breathing, the consonant before the apostrophe also becomes aspirated: μετ᾽ becomes μεθ᾽ (μεθ᾽ ἡμῶν, “with us”), κατ᾽ becomes καθ᾽, ἐπ᾽ becomes ἐφ᾽.</p>
        <p>ἐκ becomes ἐξ before a vowel: ἐξ οὐρανοῦ. The word “catholic” comes from καθ᾽ ὅλου, “according to the whole.”</p>` },
      { h: 'Prepositions inside verbs', html: `
        <p>Prepositions are often prefixed to verbs, usually adding their meaning: ἀπολύω (ἀπό + λύω), “I release, let go” (Luke 2:29); εἰσέρχομαι, “I go into”; ἐκβάλλω, “I throw out, cast out.” When you meet an unfamiliar verb, look for a preposition at the front.</p>` },
      { h: 'Phrases with the article', html: `
        <p>Like an adjective, a prepositional phrase can stand in the attributive position after an article: ὁ πατὴρ ὁ ἐν τοῖς οὐρανοῖς, “the Father (who is) in the heavens.” This is the shape of the opening of the Lord’s Prayer: Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς (Matt 6:9).</p>` }
    ],
    texts: [
      { ref: 'Ps 120:2', alt: '(121:2)', src: 'LXX', w: [['ἡ', 'the'], ['βοήθειά', 'help'], ['μου', 'my'], ['παρὰ', 'from (+ gen.)'], ['κυρίου', 'the Lord (gen.)'], ['τοῦ', 'the one'], ['ποιήσαντος', 'who made'], ['τὸν', 'the'], ['οὐρανὸν', 'heaven'], ['καὶ', 'and'], ['τὴν', 'the'], ['γῆν.', 'earth']],
        en: 'My help is from the Lord, who made heaven and earth.',
        notes: ['παρά with the genitive means “from (the side of).”', 'No verb: supply “is.”'] },
      { ref: 'Luke 1:28', src: 'NT', w: [['χαῖρε,', 'hail, rejoice'], ['κεχαριτωμένη,', 'favored one, full of grace'], ['ὁ', 'the'], ['κύριος', 'Lord'], ['μετὰ', 'with (+ gen.)'], ['σοῦ.', 'you (gen.)']],
        en: 'Hail, favored one, the Lord is with you.',
        notes: ['The angel’s greeting to Mary, the first words of the Hail Mary.', 'μετά with the genitive means “with.” Supply “is.”'] },
      { ref: 'Rom 11:36', src: 'NT', w: [['ὅτι', 'for'], ['ἐξ', 'from (+ gen.)'], ['αὐτοῦ', 'him'], ['καὶ', 'and'], ['δι᾽', 'through (+ gen.)'], ['αὐτοῦ', 'him'], ['καὶ', 'and'], ['εἰς', 'to (+ acc.)'], ['αὐτὸν', 'him'], ['τὰ', 'the'], ['πάντα·', 'all things'], ['αὐτῷ', 'to him'], ['ἡ', 'the'], ['δόξα', 'glory'], ['εἰς', 'into'], ['τοὺς', 'the'], ['αἰῶνας,', 'ages'], ['ἀμήν.', 'amen']],
        en: 'For from him and through him and to him are all things. To him be glory forever. Amen.',
        notes: ['Three prepositions, three cases of one pronoun: ἐξ αὐτοῦ, δι᾽ αὐτοῦ (both genitive), εἰς αὐτόν (accusative).', 'ἐξ is ἐκ before a vowel; δι᾽ is διά with its vowel dropped.'] },
      { ref: 'John 1:17', src: 'NT', w: [['ὅτι', 'for'], ['ὁ', 'the'], ['νόμος', 'law'], ['διὰ', 'through (+ gen.)'], ['Μωϋσέως', 'Moses (gen.)'], ['ἐδόθη,', 'was given'], ['ἡ', 'the'], ['χάρις', 'grace'], ['καὶ', 'and'], ['ἡ', 'the'], ['ἀλήθεια', 'truth'], ['διὰ', 'through'], ['Ἰησοῦ', 'Jesus (gen.)'], ['Χριστοῦ', 'Christ'], ['ἐγένετο.', 'came']],
        en: 'For the law was given through Moses; grace and truth came through Jesus Christ.',
        notes: ['διά with the genitive: “through.” Ἰησοῦ is genitive here.'] }
    ],
    ex: [
      { t: 'mc', q: 'Which case does <span class="big">εἰς</span> take?', o: ['accusative', 'genitive', 'dative', 'genitive or accusative'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">μετὰ τῶν μαθητῶν</span>.', o: ['with the disciples', 'after the disciples', 'through the disciples', 'against the disciples'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">μετὰ τὰς ἡμέρας</span>.', o: ['after the days', 'with the days', 'during the days', 'from the days'], a: 0, x: 'μετά + accusative means “after.”' },
      { t: 'mc', q: 'Translate <span class="big">διὰ τοῦ νόμου</span>.', o: ['through the law', 'because of the law', 'under the law', 'against the law'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">διὰ τὸν νόμον</span>.', o: ['because of the law', 'through the law', 'with the law', 'according to the law'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">ἐκ τοῦ κόσμου</span>.', o: ['out of the world', 'into the world', 'in the world', 'around the world'], a: 0 },
      { t: 'mc', q: 'How do you say “into the temple”?', o: ['εἰς τὸ ἱερόν', 'ἐν τῷ ἱερῷ', 'ἐκ τοῦ ἱεροῦ', 'πρὸς τοῦ ἱεροῦ'], a: 0 },
      { t: 'mc', q: 'Why is it <span class="big">μεθ᾽ ἡμῶν</span> and not μετ᾽ ἡμῶν?', o: ['ἡμῶν has rough breathing', 'ἡμῶν is plural', 'μετά takes the genitive', 'to avoid two accents'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">κατὰ τὸν νόμον</span>.', o: ['according to the law', 'against the law', 'down from the law', 'through the law'], a: 0, x: 'κατά + accusative: “according to.” With the genitive it means “against.”' },
      { t: 'mc', q: 'With a passive verb, <span class="big">ὑπὸ τοῦ κυρίου</span> means…', o: ['by the Lord', 'under the Lord', 'above the Lord', 'for the Lord'], a: 0 },
      { t: 'self', q: 'Translate:', gk: 'ὁ Ἰησοῦς διδάσκει ἐν τῷ ἱερῷ περὶ τῆς βασιλείας τοῦ θεοῦ.', a: 'Jesus teaches in the temple about the kingdom of God.', x: 'ἐν + dative “in”; περί + genitive “about, concerning.”' },
      { t: 'self', q: 'Translate:', gk: 'οἱ μαθηταὶ μένουσι σὺν τῷ κυρίῳ ἐν τῇ ὁδῷ.', a: 'The disciples remain with the Lord on the road.', x: 'σύν + dative “with.” τῇ ὁδῷ: the article shows ὁδός is feminine.' }
    ]
  });

  /* ============ LESSON 10 ============ */
  L.push({
    n: 10, title: 'εἰμί & Personal Pronouns', gk: 'ἐγώ εἰμι',
    blurb: '“I am,” the predicate nominative, and the pronouns for I, you, he, she and it.',
    goals: [
      'Conjugate εἰμί, “I am”',
      'Translate sentences with a predicate nominative',
      'Decline ἐγώ, σύ and αὐτός',
      'Read possessives like μου, σου and αὐτοῦ'
    ],
    sections: [
      { h: 'εἰμί, “I am”', html: `
        <div data-para="eimi"></div>
        <aside class="callout latin"><b>Latin parallel.</b> <em>sum, es, est, sumus, estis, sunt</em>. Greek ἐστί and Latin <em>est</em> are the same word.</aside>
        <p>All the forms except εἶ are enclitic, so their accent often disappears or jumps to the previous word: ὁ θεὸς ἀγάπη ἐστίν. At the start of a sentence, or after οὐκ, ἐστιν is written ἔστιν and often means “there is.”</p>` },
      { h: 'The predicate nominative', html: `
        <p>εἰμί does not take an object. It links two nominatives: the subject and what is said about it.</p>
        <div class="example"><p class="gk-line">ὁ θεὸς ἀγάπη ἐστίν.</p><p>“God is love” (1 John 4:8). ὁ θεός has the article, so it is the subject; ἀγάπη is the predicate. It does not mean “love is God.”</p></div>
        <p>As you have seen, “is” is often left out entirely, especially in short sayings: Ἀρχὴ σοφίας φόβος θεοῦ.</p>` },
      { h: 'ἐγώ and σύ', html: `
        <div data-para="pron:ego-su"></div>
        <p>Where two forms are given, the first is accented and emphatic; the second is enclitic and unemphatic. Prepositions usually take the emphatic forms: μετὰ σοῦ, ἐν ἐμοί.</p>
        <p>Because the verb ending already shows the person, a nominative pronoun adds <strong>emphasis</strong>. λέγω is “I say”; ἐγὼ λέγω is “<em>I</em> say.” This is why Jesus’ sayings in John, ἐγώ εἰμι, “I am,” carry such weight: they echo God’s self-naming to Moses in the LXX, ἐγώ εἰμι ὁ ὤν (Exod 3:14).</p>` },
      { h: 'αὐτός: he, she, it, they', html: `
        <p>The third-person pronoun declines like a 2-1-2 adjective, except that the neuter nominative and accusative singular end in -ο, not -ον.</p>
        <div data-para="pron:autos"></div>
        <p>A pronoun takes its <strong>gender and number</strong> from the noun it refers to, and its <strong>case</strong> from its own job in the sentence. If it refers to ἡ ἐκκλησία, it is feminine, and in English it becomes “it,” not “her”: τὴν ἐκκλησίαν βλέπω καὶ γινώσκω αὐτήν, “I see the church and know it.”</p>` },
      { h: 'Possession', html: `
        <p>Greek shows possession with a genitive pronoun, usually placed after the noun:</p>
        <div class="tbl-wrap"><table class="tbl">
          <tbody>
            <tr><td class="gk-cell">ὁ λόγος μου</td><td>my word</td><td class="gk-cell">ὁ λόγος ἡμῶν</td><td>our word</td></tr>
            <tr><td class="gk-cell">ὁ λόγος σου</td><td>your word</td><td class="gk-cell">ὁ λόγος ὑμῶν</td><td>your (pl.) word</td></tr>
            <tr><td class="gk-cell">ὁ λόγος αὐτοῦ</td><td>his word</td><td class="gk-cell">ὁ λόγος αὐτῶν</td><td>their word</td></tr>
            <tr><td class="gk-cell">ὁ λόγος αὐτῆς</td><td>her word</td><td></td><td></td></tr>
          </tbody>
        </table></div>
        <p>So the Lord’s Prayer begins Πάτερ ἡμῶν, “Our Father,” literally “Father of us.”</p>` },
      { h: 'The road ahead', html: `
        <p>With this lesson you have finished Unit 1: the alphabet, the present tense, the first two declensions, adjectives, prepositions, εἰμί and the personal pronouns. That is enough to read a good number of short verses with help. Unit 2 will add the third declension (πατήρ, πνεῦμα, χάρις), contract verbs, the imperfect and future tenses, and the middle and passive voices.</p>
        <p>Before moving on, spend time in <a href="#vocab">Vocabulary</a> and <a href="#review">Grammar review</a> until the paradigms come easily.</p>` }
    ],
    texts: [
      { ref: 'Exod 3:14', src: 'LXX', w: [['καὶ', 'and'], ['εἶπεν', 'said'], ['ὁ', 'the'], ['θεὸς', 'God'], ['πρὸς', 'to'], ['Μωυσῆν', 'Moses (acc.)'], ['Ἐγώ', 'I (emphatic)'], ['εἰμι', 'am'], ['ὁ', 'the one'], ['ὤν·', 'who is, being']],
        en: 'And God said to Moses, “I am the One who is.”',
        notes: ['Ἐγώ εἰμι: the nominative pronoun makes “I” emphatic.', 'ὁ ὤν is a participle of εἰμί, “the one being, he who is.” You will learn participles in a later unit.', 'Rahlfs spells the name Μωυσῆς; the NT editions print Μωϋσῆς.'] },
      { ref: 'Ruth 1:16', src: 'LXX', w: [['ὁ', 'the'], ['λαός', 'people'], ['σου', 'your'], ['λαός', 'people'], ['μου,', 'my'], ['καὶ', 'and'], ['ὁ', 'the'], ['θεός', 'God'], ['σου', 'your'], ['θεός', 'God'], ['μου·', 'my']],
        en: 'Your people shall be my people, and your God my God.',
        notes: ['Ruth to Naomi. No verb at all: supply “is” or “shall be.”', 'σου and μου are enclitic genitives: “your,” “my.” Notice the extra accent on λαός before σου.'] },
      { ref: 'Mark 1:11', src: 'NT', w: [['σὺ', 'you (emphatic)'], ['εἶ', 'are'], ['ὁ', 'the'], ['υἱός', 'son'], ['μου', 'my'], ['ὁ', 'the'], ['ἀγαπητός,', 'beloved'], ['ἐν', 'in'], ['σοὶ', 'you (dat.)'], ['εὐδόκησα.', 'I am well pleased']],
        en: 'You are my beloved Son; with you I am well pleased.',
        notes: ['The Father’s voice at Jesus’ baptism.', 'ὁ υἱός μου ὁ ἀγαπητός: second attributive position (Lesson 8).', 'ἐν σοί: after a preposition, the accented form σοί.'] },
      { ref: 'John 10:30', src: 'NT', w: [['ἐγὼ', 'I'], ['καὶ', 'and'], ['ὁ', 'the'], ['πατὴρ', 'Father'], ['ἕν', 'one (neuter)'], ['ἐσμεν.', 'we are']],
        en: 'I and the Father are one.',
        notes: ['ἕν, with rough breathing, is “one”; compare ἐν, “in” (Lesson 3).', 'ἕν is neuter: “one thing,” one in being, not one person.'] },
      { ref: '1 John 4:8', src: 'NT', w: [['ὁ', 'the'], ['θεὸς', 'God'], ['ἀγάπη', 'love (predicate nom.)'], ['ἐστίν.', 'is']],
        en: 'God is love.',
        notes: ['The article marks ὁ θεός as subject.'] }
    ],
    ex: [
      { t: 'mc', q: 'Translate <span class="big">ἐσμέν</span>.', o: ['we are', 'you (pl.) are', 'they are', 'I am'], a: 0 },
      { t: 'mc', q: 'How do you say “you (pl.) are”?', o: ['ἐστέ', 'εἶ', 'ἐσμέν', 'εἰσίν'], a: 0 },
      { t: 'mc', q: 'Why is ἐγώ emphatic in <span class="big">ἐγώ εἰμι</span>?', o: ['The verb already shows “I,” so the pronoun is extra', 'ἐγώ is always emphatic in every position', 'It is in the vocative', 'It is plural'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">ὁ λόγος αὐτοῦ</span>.', o: ['his word', 'the word itself', 'their word', 'her word'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">ἡ φωνὴ αὐτῆς</span>.', o: ['her voice', 'his voice', 'their voice', 'its voices'], a: 0 },
      { t: 'mc', q: 'How do you say “to us”?', o: ['ἡμῖν', 'ἡμῶν', 'ἡμᾶς', 'ὑμῖν'], a: 0 },
      { t: 'mc', q: 'Parse <span class="big">σε</span>.', o: ['accusative singular, “you”', 'nominative singular, “you”', 'genitive singular, “your”', 'accusative plural, “you”'], a: 0 },
      { t: 'mc', q: 'What case follows εἰμί in the predicate?', o: ['nominative', 'accusative', 'genitive', 'dative'], a: 0 },
      { t: 'mc', q: 'In <span class="big">ὁ θεὸς ἀγάπη ἐστίν</span>, which word is the subject?', o: ['ὁ θεός', 'ἀγάπη', 'ἐστίν'], a: 0 },
      { t: 'mc', q: 'In John 10:30, ἐγὼ καὶ ὁ πατὴρ ἕν ἐσμεν, what does ἕν mean?', o: ['one', 'in', 'is', 'we'], a: 0 },
      { t: 'self', q: 'Translate:', gk: 'ἡμεῖς ἐσμεν οἱ μαθηταὶ αὐτοῦ, καὶ ἀκούομεν τὴν φωνὴν αὐτοῦ.', a: 'We are his disciples, and we hear his voice.', x: 'ἡμεῖς is emphatic. αὐτοῦ after each noun means “his.”' },
      { t: 'self', q: 'Translate:', gk: 'σὺ εἶ ὁ Χριστός.', a: 'You are the Christ.', x: 'Peter’s confession (Mark 8:29). σύ is emphatic: “You are the Christ.”' }
    ]
  });

})(window.COURSE);
