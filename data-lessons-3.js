/* En Archē Greek — Unit 2: Lessons 11– */
window.COURSE = window.COURSE || {};
(function (C) {
  const L = C.lessons = C.lessons || [];

  /* ============ LESSON 11 ============ */
  L.push({
    n: 11, title: 'The Third Declension', gk: 'ἡ τρίτη κλίσις',
    blurb: 'Nouns like σάρξ, ὄνομα and πατήρ: find the stem in the genitive, then add one set of endings.',
    goals: [
      'Find a third-declension stem from the genitive singular',
      'Add the endings, and predict what happens when σ meets the stem',
      'Decline neuters in -μα like ὄνομα and πνεῦμα',
      'Recognize πατήρ, ἀνήρ and γυνή'
    ],
    sections: [
      { h: 'A third family of nouns', html: `
        <p>The first and second declensions are built on vowels: their stems end in α/η or ο. The third declension gathers the rest. Its stems usually end in a consonant, and it includes some of the most important words in the Bible: πατήρ, πνεῦμα, ὄνομα, χάρις, σάρξ, ἀνήρ and γυνή.</p>
        <p>It looks harder than it is. There is one set of endings for masculine and feminine nouns and one for neuters. Once you know a noun’s stem, the rest follows.</p>
        <aside class="callout latin"><b>Latin parallel.</b> Latin’s third declension works the same way, and some of its words are relatives of these: <em>pater, patris</em> and πατήρ, πατρός; <em>nōmen, nōminis</em> and ὄνομα, ὀνόματος.</aside>` },
      { h: 'Find the stem in the genitive', html: `
        <p>In the first two declensions the nominative shows you the stem: λόγ-ος, ἀρχ-ή. In the third declension the nominative often hides it. The genitive singular shows it clearly.</p>
        <ol class="steps">
          <li>Find the genitive singular in the dictionary entry: <span class="gk-inline">σάρξ, σαρκός, ἡ</span>.</li>
          <li>Remove the ending -ος. What is left is the stem: σαρκ-.</li>
          <li>Add the endings to the stem: σαρκί, σάρκα, σάρκες, σαρκῶν.</li>
        </ol>
        <p>This is why vocabulary lists always give the genitive. Learn each third-declension noun as three words: nominative, genitive and article. <span class="gk-inline">ὄνομα, ὀνόματος, τό</span> gives the stem ὀνοματ-; <span class="gk-inline">ἐλπίς, ἐλπίδος, ἡ</span> gives ἐλπιδ-; <span class="gk-inline">χάρις, χάριτος, ἡ</span> gives χαριτ-.</p>` },
      { h: 'The endings', html: `
        <p>These endings attach to the stem. Masculine and feminine nouns share one set. Neuters differ only in the nominative and accusative.</p>
        <div class="tbl-wrap"><table class="tbl">
          <thead><tr><th></th><th>Masculine &amp; feminine</th><th>Neuter</th></tr></thead>
          <tbody>
            <tr class="grp"><th colspan="3">Singular</th></tr>
            <tr><th scope="row">Nom.</th><td>-ς, or none</td><td>none</td></tr>
            <tr><th scope="row">Gen.</th><td>-ος</td><td>-ος</td></tr>
            <tr><th scope="row">Dat.</th><td>-ι</td><td>-ι</td></tr>
            <tr><th scope="row">Acc.</th><td>-α or -ν</td><td>none</td></tr>
            <tr class="grp"><th colspan="3">Plural</th></tr>
            <tr><th scope="row">Nom.</th><td>-ες</td><td>-α</td></tr>
            <tr><th scope="row">Gen.</th><td>-ων</td><td>-ων</td></tr>
            <tr><th scope="row">Dat.</th><td>-σι(ν)</td><td>-σι(ν)</td></tr>
            <tr><th scope="row">Acc.</th><td>-ας</td><td>-α</td></tr>
          </tbody>
        </table></div>
        <p>Three things to notice:</p>
        <ul>
          <li><b>-ος is the genitive singular here,</b> not the nominative as in λόγος. σαρκός means “of flesh.”</li>
          <li><b>The dative plural is -σι(ν),</b> with the same movable ν as ἐστί(ν).</li>
          <li><b>Neuters keep the rules from Lesson 6:</b> nominative and accusative are identical, and the plural ends in -α.</li>
        </ul>
        <p>The genitive plural -ων is the same in all three declensions.</p>` },
      { h: 'When σ meets the stem', html: `
        <p>Two endings begin with σ: the nominative singular -ς and the dative plural -σι. When σ meets the consonant at the end of a stem, the two combine. There are only three rules:</p>
        <div class="tbl-wrap"><table class="tbl">
          <thead><tr><th>Stem ends in</th><th>Before σ</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>κ, γ, χ</td><td>becomes ξ</td><td>σαρκ-ς → σάρξ; σαρκ-σι → σαρξί(ν)</td></tr>
            <tr><td>π, β, φ</td><td>becomes ψ</td><td>βλεπ-σω → βλέψω, “I will see” (the future tense, later in this unit)</td></tr>
            <tr><td>τ, δ, θ</td><td>drops out</td><td>ἐλπιδ-ς → ἐλπίς; ὀνοματ-σι → ὀνόμασι(ν)</td></tr>
          </tbody>
        </table></div>
        <p>Here are two feminine nouns side by side. In σάρξ and σαρξί(ν), the highlighted ξ is the stem’s κ fused with σ.</p>
        <div data-para="nouns:sarx,elpis" data-art="1"></div>
        <aside class="callout latin"><b>Latin parallel.</b> The same fusion happens in Latin: <em>rēg-s</em> is written <em>rēx</em>, and <em>duc-s</em> is <em>dux</em>.</aside>` },
      { h: 'Neuters in -μα', html: `
        <p>A large group of neuter nouns ends in -μα, with a genitive in -ματος. Their stem ends in -ματ. Greek nouns never end in τ, so the τ disappears in the nominative and accusative singular. Before -σι it drops out, as usual.</p>
        <div data-para="noun:onoma" data-art="1" data-gloss="1"></div>
        <p>Every noun of this type declines like ὄνομα: <span class="gk-inline">πνεῦμα, πνεύματος</span> (spirit), <span class="gk-inline">σῶμα, σώματος</span> (body), <span class="gk-inline">αἷμα, αἵματος</span> (blood) and <span class="gk-inline">ῥῆμα, ῥήματος</span> (word). You met τὸ ῥῆμα in Isaiah 40:8 in Lesson 6. English keeps the stem in words like <em>pneumatic</em>, <em>dogmatic</em> and <em>dramatic</em>.</p>` },
      { h: 'Family words: πατήρ, ἀνήρ, γυνή', html: `
        <p>A few very common nouns change their stem slightly from form to form. The endings are the regular ones; only the stem shifts.</p>
        <div data-para="nouns:pater,aner,gyne" data-art="1"></div>
        <ul>
          <li>πατήρ switches between πατερ- and πατρ-. μήτηρ, μητρός, “mother,” does the same.</li>
          <li>ἀνήρ adds a δ: ἀνδρός, ἀνδρί, ἄνδρα.</li>
          <li>γυνή looks like ἀρχή, but it is third declension: γυναικός, γυναικί. Its dative plural γυναιξί(ν) shows κ + σ = ξ again.</li>
        </ul>
        <p>These nouns also have a vocative, the case for calling someone: πάτερ, “Father!” and γύναι, “Woman!” The Lord’s Prayer opens with Πάτερ ἡμῶν. Jesus calls his mother γύναι at Cana (John 2:4) and from the cross (John 19:26). It is a solemn title, not a rebuke.</p>` },
      { h: 'Which declension is it?', html: `
        <p>Some endings now have more than one possible meaning:</p>
        <ul>
          <li><b>-ος</b>: nominative singular in the second declension (λόγος), genitive singular in the third (σαρκός).</li>
          <li><b>-α</b>: nominative singular in the first declension (δόξα), accusative singular in the third (σάρκα), or a neuter plural (ἔργα, ὀνόματα).</li>
          <li><b>-ας</b>: genitive singular or accusative plural in the first declension (ἡμέρας), accusative plural in the third (σάρκας).</li>
        </ul>
        <p>The article usually settles it: τῆς σαρκός, τὴν σάρκα, τὰς σάρκας. Without one, your vocabulary does. If you know σάρξ, σαρκός, then σαρκός cannot be a nominative.</p>` }
    ],
    texts: [
      { ref: 'Ps 118:105', alt: '(119:105)', src: 'LXX', w: [['Λύχνος', 'lamp (nom.)'], ['τοῖς', 'for the'], ['ποσίν', 'feet (dat. pl. of πούς)'], ['μου', 'my'], ['ὁ', 'the'], ['λόγος', 'word'], ['σου', 'your'], ['καὶ', 'and'], ['φῶς', 'light (nom., neuter)'], ['ταῖς', 'for the'], ['τρίβοις', 'paths (dat. pl.)'], ['μου.', 'my']],
        en: 'Your word is a lamp for my feet and a light for my paths.',
        notes: ['ποσίν is the dative plural of πούς, ποδός, “foot.” The δ of the stem ποδ- drops out before -σι: ποσί(ν).', 'φῶς, φωτός, τό, “light,” is a third-declension neuter. The genitive shows its stem, φωτ-.', 'ταῖς τρίβοις: τρίβος, “path,” is a feminine second-declension noun, like ὁδός.', 'No verb: supply “is.”'] },
      { ref: 'Matt 6:9', src: 'NT', w: [['Πάτερ', 'Father (vocative)'], ['ἡμῶν', 'our'], ['ὁ', 'who (are)'], ['ἐν', 'in'], ['τοῖς', 'the'], ['οὐρανοῖς·', 'heavens'], ['ἁγιασθήτω', 'let it be made holy, hallowed be'], ['τὸ', 'the'], ['ὄνομά', 'name'], ['σου·', 'your']],
        en: 'Our Father in heaven, hallowed be your name.',
        notes: ['Πάτερ is the vocative of πατήρ, the form for speaking to someone directly.', 'ὁ ἐν τοῖς οὐρανοῖς: a prepositional phrase after the article, in attributive position (Lesson 9).', 'ὄνομά σου: the enclitic σου adds a second accent to ὄνομα.', 'In Latin: <em>Pater noster, qui es in caelis, sanctificetur nomen tuum.</em>'] },
      { ref: 'Matt 28:19', src: 'NT', w: [['βαπτίζοντες', 'baptizing'], ['αὐτοὺς', 'them'], ['εἰς', 'into, in'], ['τὸ', 'the'], ['ὄνομα', 'name (acc. sg.)'], ['τοῦ', 'of the'], ['πατρὸς', 'Father (gen. sg.)'], ['καὶ', 'and'], ['τοῦ', 'of the'], ['υἱοῦ', 'Son (gen. sg.)'], ['καὶ', 'and'], ['τοῦ', 'of the'], ['ἁγίου', 'Holy (gen. sg.)'], ['πνεύματος,', 'Spirit (gen. sg.)']],
        en: '… baptizing them in the name of the Father and of the Son and of the Holy Spirit.',
        notes: ['Three genitives depend on one noun: πατρός and πνεύματος are third declension, υἱοῦ second.', 'ὄνομα is singular. Christians are baptized “not in their names, for there is only one God” (Catechism 233).', 'These are the words of Baptism and of the Sign of the Cross: <em>in nomine Patris et Filii et Spiritus Sancti</em>.', 'τοῦ ἁγίου πνεύματος: the adjective stands between the article and the noun (Lesson 8).'] },
      { ref: 'Luke 1:42', src: 'NT', w: [['εὐλογημένη', 'blessed (fem.)'], ['σὺ', 'you'], ['ἐν', 'among'], ['γυναιξὶν', 'women (dat. pl.)'], ['καὶ', 'and'], ['εὐλογημένος', 'blessed (masc.)'], ['ὁ', 'the'], ['καρπὸς', 'fruit'], ['τῆς', 'of the'], ['κοιλίας', 'womb'], ['σου.', 'your']],
        en: 'Blessed are you among women, and blessed is the fruit of your womb.',
        notes: ['Elizabeth’s greeting to Mary, which follows the angel’s words in the Hail Mary: <em>benedicta tu in mulieribus, et benedictus fructus ventris tui</em>.', 'γυναιξίν is the dative plural of γυνή, γυναικός. The stem γυναικ- plus -σι gives γυναιξί(ν): κ + σ = ξ.', 'No verb: supply “are” and “is.”'] },
      { ref: 'John 1:14', src: 'NT', w: [['Καὶ', 'and'], ['ὁ', 'the'], ['λόγος', 'Word'], ['σὰρξ', 'flesh (nom.)'], ['ἐγένετο', 'became'], ['καὶ', 'and'], ['ἐσκήνωσεν', 'dwelt, pitched his tent'], ['ἐν', 'among'], ['ἡμῖν,', 'us']],
        en: 'And the Word became flesh and dwelt among us.',
        notes: ['Like εἰμί, the verb “became” links two nominatives. ὁ λόγος has the article, so it is the subject; σάρξ is the predicate.', 'ἐσκήνωσεν comes from σκηνή, “tent.” The Word pitched his tent among us, as God dwelt with Israel in the tabernacle.', 'In the Angelus: <em>Et Verbum caro factum est, et habitavit in nobis.</em> Latin <em>caro, carnis</em> is third declension too.'] }
    ],
    ex: [
      { t: 'mc', q: 'Where do you find the stem of a third-declension noun?', o: ['In the genitive singular, minus -ος', 'In the nominative singular', 'In the dative plural', 'In the article'], a: 0, x: 'The nominative often hides the stem; the genitive shows it.' },
      { t: 'mc', q: 'What is the stem of <span class="big">ὄνομα, ὀνόματος</span>?', o: ['ὀνοματ-', 'ὀνομ-', 'ὀνομα-', 'ὀνοματο-'], a: 0 },
      { t: 'mc', q: 'Parse <span class="big">σαρκός</span>.', o: ['genitive singular', 'nominative singular', 'accusative plural', 'dative singular'], a: 0, x: 'In the third declension, -ος marks the genitive singular, not the nominative as in λόγος.' },
      { t: 'mc', q: 'Parse <span class="big">τὰ πνεύματα</span>.', o: ['nominative or accusative plural', 'genitive plural', 'nominative singular', 'dative plural'], a: 0, x: 'A neuter plural: nominative and accusative are identical and end in -α.' },
      { t: 'mc', q: 'What is the dative plural of <span class="big">σῶμα</span>?', o: ['σώμασι(ν)', 'σώματσι(ν)', 'σωμάτοις', 'σώματι'], a: 0, x: 'The τ of the stem σωματ- drops out before -σι.' },
      { t: 'mc', q: 'When a stem ending in κ meets σ, the result is…', o: ['ξ', 'ψ', 'σσ', 'κ alone'], a: 0, x: 'σαρκ- + ς gives σάρξ, as Latin rēg- + s gives rēx.' },
      { t: 'mc', q: 'Why is the nominative <span class="big">ἐλπίς</span> and not ἐλπίδς?', o: ['δ drops out before σ', 'δ turns into ς', 'Third-declension nominatives have no ending', 'ἐλπίς is a first-declension noun'], a: 0 },
      { t: 'mc', q: 'Which article goes with <span class="big">σάρκα</span>?', o: ['τήν', 'τά', 'τόν', 'τῆς'], a: 0, x: 'σάρκα is the accusative singular of σάρξ, a feminine noun.' },
      { t: 'mc', q: 'Parse <span class="big">ἀνδράσιν</span>.', o: ['dative plural', 'accusative plural', 'genitive singular', 'nominative plural'], a: 0, x: 'From ἀνήρ, ἀνδρός, “man.” -σι(ν) is the dative plural ending.' },
      { t: 'mc', q: 'Translate <span class="big">εἰς τὸ ὄνομα τοῦ πατρός</span>.', o: ['in the name of the Father', 'in the names of the Father', 'in the name of the fathers', 'to the Father of the name'], a: 0, x: 'πατρός is the genitive singular of πατήρ: “of the Father.”' },
      { t: 'mc', q: 'In <span class="big">ὁ λόγος σὰρξ ἐγένετο</span>, what is σάρξ?', o: ['the predicate: “became flesh”', 'the subject', 'the object', 'a genitive: “of flesh”'], a: 0, x: 'ὁ λόγος has the article, so it is the subject. σάρξ is the predicate nominative.' },
      { t: 'match', q: 'Match each noun to its meaning.', pairs: [['σάρξ', 'flesh'], ['πνεῦμα', 'spirit'], ['χάρις', 'grace'], ['ἐλπίς', 'hope'], ['γυνή', 'woman, wife'], ['αἷμα', 'blood']] },
      { t: 'self', q: 'Translate:', gk: 'ὁ πατὴρ πέμπει τὸν υἱὸν εἰς τὸν κόσμον.', a: 'The Father sends the Son into the world.', x: 'ὁ πατήρ is nominative, the subject; τὸν υἱόν is accusative, the object.' },
      { t: 'self', q: 'Translate:', gk: 'ἐν τῷ ὀνόματι τοῦ κυρίου ἔχομεν ἐλπίδα.', a: 'In the name of the Lord we have hope.', x: 'ὀνόματι is dative after ἐν. ἐλπίδα is the accusative singular of ἐλπίς, the object of ἔχομεν.' }
    ]
  });

  /* ============ LESSON 12 ============ */
  L.push({
    n: 12, title: 'Contract Verbs', gk: 'ποιῶ, ἀγαπῶ, πληρῶ',
    blurb: 'Verbs like ποιέω, ἀγαπάω and πληρόω: the stem vowel merges with the ending, and a circumflex marks the spot.',
    goals: [
      'Recognize verbs whose stem ends in ε, α or ο',
      'Form the present of ποιέω, ἀγαπάω and πληρόω',
      'Read a circumflex on the ending as a sign of contraction',
      'Work back from a contracted form to the dictionary form'
    ],
    sections: [
      { h: 'Verbs whose stem ends in a vowel', html: `
        <p>The verbs in Lesson 4 have stems that end in a consonant (λεγ-, ἐχ-, βλεπ-) or in υ (λυ-, πιστευ-). Three large groups of verbs have stems that end in a short vowel:</p>
        <ul>
          <li><b>ε-verbs</b> like ποιέω, “I do, make”</li>
          <li><b>α-verbs</b> like ἀγαπάω, “I love”</li>
          <li><b>ο-verbs</b> like πληρόω, “I fill, fulfill”</li>
        </ul>
        <p>When the stem vowel meets the vowel at the start of the ending, the two merge into one sound. This is called <b>contraction</b>, and these are <b>contract verbs</b>. The endings are the ones you already know: -ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν). Only the point where stem and ending meet changes.</p>
        <div class="example"><p class="gk-line">ποιέ + ω → ποιῶ</p><p class="gk-line">ἀγαπά + ομεν → ἀγαπῶμεν</p><p>Dictionaries list contract verbs in the uncontracted form, ποιέω, so you can see the stem vowel. In a text you will almost always find the contracted form, ποιῶ.</p></div>
        <aside class="callout latin"><b>Latin parallel.</b> Latin contracted too. <em>amō</em> comes from an older <em>amā-ō</em>: the stem vowel merged into the ending, just as ἀγαπάω becomes ἀγαπῶ. The other forms keep it: <em>amās, amat, amāmus</em>.</aside>` },
      { h: 'ε-verbs: ποιέω', html: `
        <p>The ε-verbs are the largest group. Here is ποιέω, “I do, make,” in full. The highlighted letters are the stem vowel and the ending, merged.</p>
        <div data-para="cverb:poieo" data-gloss="1"></div>
        <p>The ε meets the endings in three ways:</p>
        <div class="tbl-wrap"><table class="tbl">
          <thead><tr><th>Meeting</th><th>Result</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>ε + ε</td><td>ει</td><td>ποιέ-ετε → ποιεῖτε</td></tr>
            <tr><td>ε + ο</td><td>ου</td><td>ποιέ-ομεν → ποιοῦμεν</td></tr>
            <tr><td>ε + a long vowel or diphthong</td><td>ε disappears</td><td>ποιέ-ω → ποιῶ; ποιέ-ει → ποιεῖ; ποιέ-ουσι → ποιοῦσι(ν)</td></tr>
          </tbody>
        </table></div>
        <p>Watch the accent. In the uncontracted form it sits on the stem vowel: ποιέω, ποιέομεν. When an accented vowel merges with the next vowel, the new syllable takes a circumflex: ποιῶ, ποιοῦμεν. So a circumflex on the ending of a present-tense verb is the quickest sign of a contract verb. Compare λέγει, “he says,” with λαλεῖ, “he speaks”: only λαλεῖ is contracted.</p>` },
      { h: 'α-verbs: ἀγαπάω', html: `
        <p>With α, the result depends on the vowel that follows:</p>
        <ul>
          <li><b>α + an o-sound (ο, ω, ου) gives ω:</b> ἀγαπῶ, ἀγαπῶμεν, ἀγαπῶσι(ν).</li>
          <li><b>α + ε gives α:</b> ἀγαπᾶτε.</li>
          <li><b>α + ει gives ᾳ:</b> the ι survives as an iota subscript: ἀγαπᾷς, ἀγαπᾷ.</li>
        </ul>
        <div data-para="cverb:agapao" data-gloss="1"></div>
        <p>One common verb breaks the pattern. ζάω, “I live,” contracts to η where you would expect α: ζῶ, ζῇς, ζῇ, ζῶμεν, ζῆτε, ζῶσι(ν).</p>` },
      { h: 'ο-verbs: πληρόω', html: `
        <ul>
          <li><b>ο + ω gives ω:</b> πληρῶ.</li>
          <li><b>ο + ε, ο or ου gives ου:</b> πληροῦτε, πληροῦμεν, πληροῦσι(ν).</li>
          <li><b>ο + ει gives οι:</b> πληροῖς, πληροῖ.</li>
        </ul>
        <div data-para="cverb:pleroo" data-gloss="1"></div>
        <p>The ο-verbs are the smallest group, but they include πληρόω, which Matthew uses again and again for Scripture being fulfilled, and σταυρόω, “I crucify.” Many are built from adjectives or nouns: φανερός, “visible,” gives φανερόω, “I make visible, reveal.”</p>` },
      { h: 'All three side by side', html: `
        <p>Here are the three groups together. Under each form you can see which vowels merged.</p>
        <div data-para="cverbs:poieo,agapao,pleroo" data-gloss="1"></div>
        <p>Three patterns help you remember them:</p>
        <ul>
          <li><b>The first person singular is the same in all three:</b> ποιῶ, ἀγαπῶ, πληρῶ.</li>
          <li><b>o-sounds win.</b> If either vowel is ο or ω, the result is ω or ου, unless an ι has to be kept.</li>
          <li><b>An ι is never lost.</b> It stays as a subscript (ᾳ) or in a diphthong (ει, οι).</li>
        </ul>` },
      { h: 'Looking up a contract verb', html: `
        <p>To find a contract verb in the dictionary, work backward. Take off the ending and decide which vowel was lost:</p>
        <ul>
          <li><b>-εῖς, -εῖ, -εῖτε</b> can only come from an ε-verb.</li>
          <li><b>-ᾷς, -ᾷ, -ᾶτε, -ῶμεν, -ῶσι(ν)</b> can only come from an α-verb.</li>
          <li><b>-οῖς, -οῖ, -οῦτε</b> can only come from an ο-verb.</li>
          <li><b>-οῦμεν and -οῦσι(ν)</b> could be ε or ο, and <b>-ῶ</b> could be any of the three. Here your vocabulary decides: ποιοῦμεν is from ποιέω, πληροῦμεν from πληρόω.</li>
        </ul>
        <p>This is why vocabulary lists give contract verbs uncontracted. ἀγαπάω tells you the stem vowel; ἀγαπῶ would not. Learn each one with its vowel.</p>` }
    ],
    texts: [
      { ref: 'Ps 145:8', alt: '(146:8)', src: 'LXX', w: [['κύριος', 'the Lord'], ['σοφοῖ', 'makes wise'], ['τυφλούς,', 'the blind (acc. pl.)'], ['κύριος', 'the Lord'], ['ἀνορθοῖ', 'sets upright'], ['κατερραγμένους,', 'those who are broken down'], ['κύριος', 'the Lord'], ['ἀγαπᾷ', 'loves'], ['δικαίους·', 'the righteous (acc. pl.)']],
        en: 'The Lord makes the blind wise, the Lord sets upright those who are broken down, the Lord loves the righteous.',
        notes: ['σοφοῖ and ἀνορθοῖ are ο-verbs: σοφόω, “make wise,” from σοφός, “wise,” and ἀνορθόω, “set upright,” from ὀρθός, “straight.” ο + ει gives οι.', 'ἀγαπᾷ is an α-verb: α + ει gives ᾳ.', 'τυφλούς and δικαίους are adjectives used as nouns (Lesson 8): “blind people,” “righteous people.”', 'κατερραγμένους, “broken down,” is a participle. Participles come later in this unit.', 'The Hebrew says the Lord “opens the eyes of the blind.” The Septuagint reads “makes the blind wise.”'] },
      { ref: 'John 3:35', src: 'NT', w: [['ὁ', 'the'], ['πατὴρ', 'Father'], ['ἀγαπᾷ', 'loves'], ['τὸν', 'the'], ['υἱόν,', 'Son'], ['καὶ', 'and'], ['πάντα', 'all things'], ['δέδωκεν', 'has given'], ['ἐν', 'into'], ['τῇ', 'the'], ['χειρὶ', 'hand (dat. sg.)'], ['αὐτοῦ.', 'his']],
        en: 'The Father loves the Son and has given all things into his hand.',
        notes: ['ἀγαπᾷ: α + ει gives ᾳ, “he loves.”', 'χειρί is the dative of χείρ, χειρός, ἡ, “hand,” a third-declension noun (Lesson 11).', 'δέδωκεν, “has given,” is a perfect tense of δίδωμι, “I give.”', 'John 5:20 says the same thing with the other verb for love: ὁ γὰρ πατὴρ φιλεῖ τὸν υἱόν. In John the two verbs overlap a great deal.'] },
      { ref: 'Luke 6:46', src: 'NT', w: [['Τί', 'why?'], ['δέ', 'and, but'], ['με', 'me'], ['καλεῖτε·', 'do you call'], ['Κύριε', 'Lord (vocative)'], ['κύριε,', 'Lord'], ['καὶ', 'and'], ['οὐ', 'not'], ['ποιεῖτε', 'do'], ['ἃ', 'what, the things that'], ['λέγω;', 'I say']],
        en: 'Why do you call me “Lord, Lord,” and not do what I say?',
        notes: ['καλεῖτε and ποιεῖτε are 2nd person plural ε-verbs: ε + ε gives ει.', 'Κύριε is the vocative of κύριος, the form for speaking to someone (Lesson 11).', 'τί usually means “what?” Here it means “why?”', 'Calling Jesus “Lord” is not enough. A disciple does what the Lord says.'] },
      { ref: 'John 21:15', src: 'NT', w: [['Σίμων', 'Simon'], ['Ἰωάννου,', 'son of John'], ['ἀγαπᾷς', 'do you love'], ['με', 'me'], ['πλέον', 'more'], ['τούτων;', 'than these'], ['λέγει', 'he says'], ['αὐτῷ·', 'to him'], ['Ναί,', 'yes'], ['κύριε,', 'Lord'], ['σὺ', 'you'], ['οἶδας', 'know'], ['ὅτι', 'that'], ['φιλῶ', 'I love'], ['σε.', 'you']],
        en: '“Simon, son of John, do you love me more than these?” He says to him, “Yes, Lord, you know that I love you.”',
        notes: ['ἀγαπᾷς is from ἀγαπάω (α + εις gives ᾷς). φιλῶ is from φιλέω (ε + ω gives ω).', 'Both verbs mean “love.” Some readers see a contrast between them here. John 3:35 and 5:20, which use each verb for the Father’s love of the Son, suggest they mean much the same.', 'Ἰωάννου is genitive: “Simon, son of John.”', 'Jesus asks three times, and Peter, who had denied him three times, answers three times. Each time Jesus entrusts his flock to Peter: “Feed my lambs,” “Tend my sheep,” “Feed my sheep” (Catechism 553).'] },
      { ref: '1 John 4:19', src: 'NT', w: [['ἡμεῖς', 'we'], ['ἀγαπῶμεν,', 'love'], ['ὅτι', 'because'], ['αὐτὸς', 'he'], ['πρῶτος', 'first'], ['ἠγάπησεν', 'loved'], ['ἡμᾶς.', 'us']],
        en: 'We love, because he first loved us.',
        notes: ['ἀγαπῶμεν: α + ομεν gives ῶμεν. Only α-verbs end in -ῶμεν.', 'ἡμεῖς and αὐτός are emphatic (Lesson 10): we love because he loved first.', 'ἠγάπησεν, “he loved,” is the aorist of the same verb. The aorist comes later in this unit.', 'Three verses earlier, 1 John 4:16 says ὁ θεὸς ἀγάπη ἐστίν, “God is love.” Benedict XVI’s first encyclical, <em>Deus caritas est</em>, takes its title from that verse.'] }
    ],
    ex: [
      { t: 'mc', q: 'Why is <span class="big">ποιέω</span> called a contract verb?', o: ['Its stem vowel ε merges with the vowel of each ending', 'It has no personal endings', 'Its stem ends in a consonant', 'It is used only in the plural'], a: 0 },
      { t: 'mc', q: 'What does ε + ο become?', o: ['ου', 'ει', 'ω', 'ο'], a: 0, x: 'ποιέομεν becomes ποιοῦμεν.' },
      { t: 'mc', q: 'What does α + ε become?', o: ['α', 'η', 'ει', 'ω'], a: 0, x: 'ἀγαπάετε becomes ἀγαπᾶτε.' },
      { t: 'mc', q: 'Parse <span class="big">ποιοῦσιν</span>.', o: ['3rd person plural', '1st person plural', '3rd person singular', '2nd person plural'], a: 0, x: 'ε + ουσι gives οῦσι: “they do.”' },
      { t: 'mc', q: 'Parse <span class="big">ἀγαπᾷ</span>.', o: ['3rd person singular', '2nd person singular', '1st person singular', '2nd person plural'], a: 0, x: 'α + ει gives ᾳ: the ι of the ending survives as a subscript. The 2nd person singular is ἀγαπᾷς.' },
      { t: 'mc', q: 'Parse <span class="big">λαλεῖτε</span>.', o: ['2nd person plural', '3rd person singular', '1st person plural', '3rd person plural'], a: 0, x: 'ε + ετε gives εῖτε: “you (pl.) speak.”' },
      { t: 'mc', q: 'What is the 2nd person plural of <span class="big">ἀγαπάω</span>?', o: ['ἀγαπᾶτε', 'ἀγαπεῖτε', 'ἀγαποῦτε', 'ἀγαπῶτε'], a: 0, x: 'α + ε gives α.' },
      { t: 'mc', q: 'What is the 3rd person singular of <span class="big">πληρόω</span>?', o: ['πληροῖ', 'πληρεῖ', 'πληρᾷ', 'πληροῦσι(ν)'], a: 0, x: 'ο + ει gives οι. πληροῦσι(ν) is the 3rd person plural.' },
      { t: 'mc', q: 'You meet <span class="big">ἀγαπῶμεν</span> in a text. Which form do you look up?', o: ['ἀγαπάω', 'ἀγαπέω', 'ἀγαπόω', 'ἀγαπῶμαι'], a: 0, x: 'Only α-verbs end in -ῶμεν. ε- and ο-verbs give -οῦμεν.' },
      { t: 'mc', q: 'The ending <span class="big">-οῦμεν</span> could come from…', o: ['an ε-verb or an ο-verb', 'an α-verb only', 'an ε-verb only', 'any of the three'], a: 0, x: 'ποιοῦμεν (ε + ο) and πληροῦμεν (ο + ο) look alike. α + ο gives ω: ἀγαπῶμεν.' },
      { t: 'mc', q: 'Which form is <b>not</b> from a contract verb?', o: ['λέγει', 'λαλεῖ', 'ποιεῖ', 'καλεῖ'], a: 0, x: 'λέγω has the consonant stem λεγ-, so its accent stays on the stem. The circumflex on λαλεῖ, ποιεῖ and καλεῖ marks a contraction.' },
      { t: 'mc', q: 'Translate <span class="big">Τί ζητεῖτε;</span>', o: ['What are you looking for?', 'What is he looking for?', 'What are we looking for?', 'Who is looking for you?'], a: 0, x: 'ζητεῖτε is the 2nd person plural of ζητέω. These are Jesus’ first words in the Gospel of John (1:38).' },
      { t: 'match', q: 'Match each verb to its meaning.', pairs: [['ποιέω', 'I do, make'], ['λαλέω', 'I speak'], ['ζητέω', 'I seek'], ['τηρέω', 'I keep'], ['πληρόω', 'I fill, fulfill'], ['ἀγαπάω', 'I love']] },
      { t: 'self', q: 'Translate:', gk: 'οἱ μαθηταὶ ἀκολουθοῦσι τῷ κυρίῳ καὶ τηροῦσι τοὺς λόγους αὐτοῦ.', a: 'The disciples follow the Lord and keep his words.', x: 'ἀκολουθέω takes its object in the dative: τῷ κυρίῳ. Both verbs are 3rd person plural ε-verbs.' },
      { t: 'self', q: 'Translate:', gk: 'ὁ κύριος καλεῖ τὰ τέκνα αὐτοῦ καὶ λαλεῖ αὐτοῖς.', a: 'The Lord calls his children and speaks to them.', x: 'καλεῖ and λαλεῖ are 3rd person singular ε-verbs. αὐτοῖς is dative: “to them.”' }
    ]
  });

})(window.COURSE);
