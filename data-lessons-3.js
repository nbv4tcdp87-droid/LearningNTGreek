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

  /* ============ LESSON 13 ============ */
  L.push({
    n: 13, title: 'The Imperfect and Future', gk: 'ἔλυον, λύσω',
    blurb: 'Two new tenses: the imperfect, for action going on in the past and marked by an augment, and the future, marked by σ.',
    goals: [
      'Tell the present, imperfect and future apart',
      'Recognize the augment and the imperfect endings',
      'Form the future with σ, including ψ and ξ',
      'Read ἦν and ἔσται, “was” and “will be”'
    ],
    sections: [
      { h: 'Past, present and future', html: `
        <p>Every verb so far has been in the present tense. This lesson adds two more: the <b>imperfect</b>, a past tense, and the <b>future</b>.</p>
        <p>A Greek tense shows more than time. It also shows the kind of action, called <b>aspect</b>. The present and the imperfect both show an action in progress or repeated. They differ only in time:</p>
        <div class="tbl-wrap"><table class="tbl">
          <thead><tr><th>Tense</th><th>Time</th><th>Example</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td>present</td><td>now</td><td>λύω</td><td>I loose, I am loosing</td></tr>
            <tr><td>imperfect</td><td>past, in progress</td><td>ἔλυον</td><td>I was loosing, I used to loose</td></tr>
            <tr><td>future</td><td>later</td><td>λύσω</td><td>I will loose</td></tr>
          </tbody>
        </table></div>
        <p>Greek has another past tense, the aorist, which presents an action as a single whole: “I loosed.” It comes later in this unit. When a Gospel writer uses the imperfect, he shows an action going on in the past: “he was teaching,” “they kept saying.”</p>
        <aside class="callout latin"><b>Latin parallel.</b> The Latin imperfect does the same work. <em>docēbat</em>, “he was teaching,” matches the Greek imperfect ἐδίδασκεν, while <em>docuit</em>, “he taught,” is closer to the aorist. The Latin future <em>docēbit</em>, “he will teach,” matches διδάξει.</aside>` },
      { h: 'The imperfect: ἔλυον', html: `
        <p>The imperfect is built on the present stem, with two changes:</p>
        <ol class="steps">
          <li>An <b>augment</b>, ἐ-, goes on the front. It marks past time.</li>
          <li>A different set of endings: -ον, -ες, -ε(ν), -ομεν, -ετε, -ον.</li>
        </ol>
        <div class="example"><p class="gk-line">ἐ + λυ + ον → ἔλυον</p><p>“I was loosing”</p></div>
        <div data-para="verb:luo:impf" data-gloss="1"></div>
        <p>Three things to notice:</p>
        <ul>
          <li><b>The 1st person singular and the 3rd person plural are the same.</b> ἔλυον means “I was loosing” or “they were loosing.” The subject and the context decide.</li>
          <li><b>The 3rd person singular can add a movable ν,</b> as λύουσι(ν) does: ἔλυε or ἔλυεν.</li>
          <li><b>The accent moves.</b> A verb’s accent goes as far toward the front as the rules allow (Lesson 3), which in the imperfect is the third syllable from the end. So it sits on the augment in ἔλυον, but on λυ in the longer ἐλύομεν.</li>
        </ul>
        <p>The imperfect is usually translated “was …ing.” Depending on the context, it can also mean “used to,” “kept on” or “began to.”</p>` },
      { h: 'Verbs that begin with a vowel', html: `
        <p>When a verb begins with a consonant, the augment adds the syllable ἐ-: λέγω → ἔλεγον, πιστεύω → ἐπίστευον. When it begins with a vowel, the augment <b>lengthens</b> that vowel instead:</p>
        <div class="tbl-wrap"><table class="tbl">
          <thead><tr><th>Vowel</th><th>Becomes</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>α</td><td>η</td><td>ἀκούω → ἤκουον</td></tr>
            <tr><td>ε</td><td>η</td><td>ἐλπίζω, “hope” → ἤλπιζον</td></tr>
            <tr><td>ο</td><td>ω</td><td>ὁμολογέω, “confess” → ὡμολόγουν</td></tr>
            <tr><td>αι</td><td>ῃ</td><td>αἰτέω, “ask” → ᾔτουν</td></tr>
            <tr><td>οι</td><td>ῳ</td><td>οἰκοδομέω, “build” → ᾠκοδόμουν</td></tr>
            <tr><td>ι, υ</td><td>long ι, υ</td><td>the letter looks the same</td></tr>
          </tbody>
        </table></div>
        <p>To look up an augmented verb, take off the ending and undo the augment. If the form begins with η, try α, then ε: ἤκουον is from ἀκούω. On the road to Emmaus the two disciples say ἡμεῖς δὲ ἠλπίζομεν, “but we were hoping” (Luke 24:21): from ἐλπίζω.</p>
        <p>One common verb is irregular: the imperfect of ἔχω is <b>εἶχον</b>, “I had, I was having.”</p>
        <p><b>Compound verbs</b> begin with a preposition, like περιπατέω (περί + πατέω). The augment goes between the preposition and the verb:</p>
        <ul>
          <li>περιπατέω → περιεπάτουν, “I was walking”</li>
          <li>ἀποστέλλω → ἀπέστελλον, “I was sending.” A preposition that ends in a vowel usually drops it before the augment (περί is an exception).</li>
          <li>ἐκβάλλω → ἐξέβαλλον, “I was casting out.” ἐκ becomes ἐξ before a vowel, as in Lesson 9.</li>
        </ul>` },
      { h: 'Contract verbs and εἰμί', html: `
        <p>Contract verbs take the augment and the imperfect endings, and the vowels merge by the rules of Lesson 12. Under each form you can see which vowels met.</p>
        <div data-para="cverbs:poieo,agapao,pleroo:impf" data-gloss="1"></div>
        <p>ε + ε gives ει, so ἐποίει is “he was doing.” α + ε gives α, so ἠγάπα is “he was loving.” It has no iota subscript, because the imperfect ending -ε has no ι: compare the present ἀγαπᾷ. These forms are everywhere in the Gospels: ἐλάλει, “he was speaking”; ἠκολούθουν, “they were following”; περιεπάτει, “he was walking.”</p>
        <p>εἰμί has an imperfect of its own. You met its 3rd person singular in Lesson 3: Ἐν ἀρχῇ ἦν ὁ λόγος, “In the beginning was the Word.”</p>
        <div data-para="eimi:impf"></div>
        <aside class="callout"><b>Was, not became.</b> John says ἦν of the Word three times in his first verse. In the beginning the Word already was: he did not come to be. John keeps ἐγένετο, “came to be,” for the things made through him (1:3) and for the moment the Word became flesh (1:14). The Creed says the same of the Son: “begotten, not made.”</aside>` },
      { h: 'The future: λύσω', html: `
        <p>The future adds σ to the present stem and uses the present endings:</p>
        <div class="example"><p class="gk-line">λυ + σ + ω → λύσω</p><p>“I will loose”</p></div>
        <div data-para="verb:luo:fut" data-gloss="1"></div>
        <p>The future has no augment, because the augment belongs to the past tenses. Often the σ is the only difference from the present: λύει is “he looses,” λύσει “he will loose.”</p>
        <p><b>Contract verbs</b> lengthen their vowel before the σ: ε and α become η, and ο becomes ω.</p>
        <ul>
          <li>ποιέω → ποιήσω, “I will do”</li>
          <li>ἀγαπάω → ἀγαπήσω, “I will love”</li>
          <li>πληρόω → πληρώσω, “I will fill”</li>
        </ul>
        <p>καλέω is an exception: it keeps the short ε, καλέσω.</p>
        <p>Here are the three tenses of λύω side by side:</p>
        <div data-para="tenses:luo"></div>` },
      { h: 'When σ meets a consonant', html: `
        <p>If the stem ends in a consonant, the σ combines with it, just as it does in third-declension nominatives like σάρξ (Lesson 11):</p>
        <div class="tbl-wrap"><table class="tbl">
          <thead><tr><th>Stem ends in</th><th>+ σ gives</th><th>Examples</th></tr></thead>
          <tbody>
            <tr><td>π, β, φ</td><td>ψ</td><td>βλέπω → βλέψω; γράφω → γράψω; πέμπω → πέμψω</td></tr>
            <tr><td>κ, γ, χ</td><td>ξ</td><td>διώκω → διώξω; ἄγω → ἄξω; κηρύσσω → κηρύξω</td></tr>
            <tr><td>τ, δ, θ, ζ</td><td>σ (the consonant drops)</td><td>σῴζω → σώσω; βαπτίζω → βαπτίσω</td></tr>
          </tbody>
        </table></div>
        <p>Two hints. Verbs in -σσω, like κηρύσσω, usually have a future in -ξω. Verbs in -ζω usually have a future in -σω. (σῴζω also loses its iota subscript.) In διδάσκω the -σκ- belongs only to the present, so the future is διδάξω.</p>
        <p><b>Liquid verbs.</b> Stems that end in λ, μ, ν or ρ do not take σ. Their future adds ε instead and contracts like an ε-verb:</p>
        <div class="example"><p class="gk-line">μένω → μενῶ, μενεῖς, μενεῖ, μενοῦμεν, μενεῖτε, μενοῦσι(ν)</p><p>Only the accent separates μένει, “he remains,” from μενεῖ, “he will remain.”</p></div>
        <p>Five verbs in this lesson’s vocabulary have liquid futures: ἀποστέλλω → ἀποστελῶ, ἐκβάλλω → ἐκβαλῶ, κρίνω → κρινῶ, ἐγείρω → ἐγερῶ and αἴρω → ἀρῶ. A double λ in the present becomes single in the future.</p>
        <p><b>Learn these separately.</b> ἔχω has the future <b>ἕξω</b>, with a rough breathing. λέγω uses another stem: <b>ἐρῶ</b>, ἐρεῖς, ἐρεῖ, which contracts like μενῶ. Some common verbs have a future with middle endings, such as γινώσκω → γνώσομαι and λαμβάνω → λήμψομαι. Those endings come in Lesson 14.</p>` },
      { h: 'The future of εἰμί, and the future as a command', html: `
        <p>εἰμί forms its future with middle endings, which come in Lesson 14. Learn the forms now, starting with ἔσται, “he/she/it will be,” and ἔσονται, “they will be.”</p>
        <div data-para="eimi:fut"></div>
        <p>The future can also give a command, as English can: “You will be home by nine.” The Septuagint gives the commandments this way, and the New Testament quotes them so:</p>
        <div class="example"><p class="gk-line">ἀγαπήσεις κύριον τὸν θεόν σου</p><p>“You shall love the Lord your God” (Deut 6:5)</p><p class="gk-line">οὐ φονεύσεις, οὐ μοιχεύσεις, οὐ κλέψεις</p><p>“You shall not murder, you shall not commit adultery, you shall not steal” (Matt 19:18)</p></div>
        <p>φονεύσεις and μοιχεύσεις add σ like λύσω. κλέψεις is from κλέπτω, “I steal” (compare <em>kleptomaniac</em>): πτ + σ gives ψ.</p>
        <aside class="callout latin"><b>Latin parallel.</b> The Vulgate uses the Latin future the same way: <em>diliges Dominum Deum tuum</em>, “you shall love the Lord your God” (Deut 6:5), and <em>non occides</em>, “you shall not kill” (Exod 20:13).</aside>` }
    ],
    texts: [
      { ref: 'Mark 4:2', src: 'NT', w: [['καὶ', 'and'], ['ἐδίδασκεν', 'he was teaching'], ['αὐτοὺς', 'them'], ['ἐν', 'in'], ['παραβολαῖς', 'parables (dat. pl.)'], ['πολλά,', 'many things'], ['καὶ', 'and'], ['ἔλεγεν', 'he was saying'], ['αὐτοῖς', 'to them'], ['ἐν', 'in'], ['τῇ', 'the'], ['διδαχῇ', 'teaching (dat. sg.)'], ['αὐτοῦ·', 'his']],
        en: 'And he was teaching them many things in parables, and in his teaching he was saying to them:',
        notes: ['ἐδίδασκεν and ἔλεγεν are imperfects: the augment ἐ-, the present stem, and the ending -ε(ν), here with movable ν.', 'Mark uses the imperfect to show Jesus teaching over a stretch of time. The Vulgate has Latin imperfects: <em>docebat</em>, <em>dicebat</em>.', 'διδαχή, “teaching,” comes from the same root as διδάσκω.', 'πολλά, “many things,” is the neuter plural of πολύς, “much, many.”'] },
      { ref: 'John 11:36', src: 'NT', w: [['ἔλεγον', 'were saying'], ['οὖν', 'so, then'], ['οἱ', 'the'], ['Ἰουδαῖοι·', 'Jews, Judeans'], ['Ἴδε', 'look!'], ['πῶς', 'how'], ['ἐφίλει', 'he loved'], ['αὐτόν.', 'him']],
        en: 'So the Jews were saying, “Look how he loved him!”',
        notes: ['ἔλεγον could mean “I was saying” or “they were saying.” The plural subject, οἱ Ἰουδαῖοι, decides.', 'ἐφίλει is the imperfect of φιλέω: ἐ + φιλε + ε, and ε + ε gives ει.', 'The bystanders say this when Jesus weeps at the tomb of his friend Lazarus (11:35).', 'Ἴδε, “look!”, is a command form. Commands come later in the course.'] },
      { ref: 'Luke 2:19', src: 'NT', w: [['ἡ', 'the'], ['δὲ', 'but, and'], ['Μαρία', 'Mary'], ['πάντα', 'all'], ['συνετήρει', 'kept, treasured'], ['τὰ', 'the'], ['ῥήματα', 'words, things'], ['ταῦτα', 'these'], ['συμβάλλουσα', 'pondering'], ['ἐν', 'in'], ['τῇ', 'the'], ['καρδίᾳ', 'heart'], ['αὐτῆς.', 'her']],
        en: 'But Mary kept all these things, pondering them in her heart.',
        notes: ['συνετήρει is the imperfect of συντηρέω, σύν + τηρέω (Lesson 12). The augment comes after the preposition: συν-ε-τήρει.', 'The imperfect shows something Mary went on doing: she kept these things and kept pondering them.', 'ῥήματα, the plural of ῥῆμα (Lesson 11), can mean “words” or “things, events.”', 'ταῦτα, “these,” and the participle συμβάλλουσα, “pondering,” come later in this unit.', 'Some manuscripts and editions read Μαριάμ here, the Semitic form of the name that Luke uses for Mary elsewhere (1:27, 1:30).', 'Luke says it again after the finding in the Temple, with another compound of τηρέω: ἡ μήτηρ αὐτοῦ διετήρει πάντα τὰ ῥήματα ἐν τῇ καρδίᾳ αὐτῆς (2:51).'] },
      { ref: 'Deut 6:5', src: 'LXX', w: [['καὶ', 'and'], ['ἀγαπήσεις', 'you shall love'], ['κύριον', 'the Lord'], ['τὸν', 'the'], ['θεόν', 'God'], ['σου', 'your'], ['ἐξ', 'with (lit. “out of”)'], ['ὅλης', 'whole, all'], ['τῆς', 'the'], ['καρδίας', 'heart'], ['σου', 'your'], ['καὶ', 'and'], ['ἐξ', 'with'], ['ὅλης', 'whole, all'], ['τῆς', 'the'], ['ψυχῆς', 'soul'], ['σου', 'your'], ['καὶ', 'and'], ['ἐξ', 'with'], ['ὅλης', 'whole, all'], ['τῆς', 'the'], ['δυνάμεώς', 'strength, power'], ['σου.', 'your']],
        en: 'And you shall love the Lord your God with all your heart and with all your soul and with all your strength.',
        notes: ['ἀγαπήσεις is the future of ἀγαπάω, 2nd person singular. The α lengthens to η before σ.', 'The future here gives a command: “you shall love.” Jesus calls this the greatest and first commandment (Matt 22:37–38).', 'This verse follows the Shema, Deut 6:4, which you read in Lesson 5.', 'ὅλης is from ὅλος, “whole.” δυνάμεως is the genitive of δύναμις, “power,” a third-declension noun.'] },
      { ref: 'Isa 7:14', src: 'LXX', w: [['ἰδοὺ', 'behold'], ['ἡ', 'the'], ['παρθένος', 'virgin'], ['ἐν', 'in'], ['γαστρὶ', 'womb (dat. sg.)'], ['ἕξει', 'will have'], ['καὶ', 'and'], ['τέξεται', 'will bear'], ['υἱόν,', 'a son'], ['καὶ', 'and'], ['καλέσεις', 'you will call'], ['τὸ', 'the'], ['ὄνομα', 'name'], ['αὐτοῦ', 'his'], ['Εμμανουηλ·', 'Emmanuel']],
        en: 'Behold, the virgin will conceive and bear a son, and you will call his name Emmanuel.',
        notes: ['ἕξει is the future of ἔχω: note the rough breathing. ἐν γαστρὶ ἔχω, “I have in the womb,” means “I am with child.”', 'καλέσεις, “you will call,” is the future of καλέω, which keeps its short ε.', 'τέξεται, “she will bear,” has a middle ending (Lesson 14).', 'Rahlfs prints the Hebrew name Εμμανουηλ without accent or breathing.', 'Matthew quotes this verse for the virginal conception of Jesus, with καλέσουσιν, “they will call,” and gives the meaning of the name: “God with us” (Matt 1:23; Catechism 497).'] },
      { ref: 'Luke 1:33', src: 'NT', w: [['καὶ', 'and'], ['βασιλεύσει', 'he will reign'], ['ἐπὶ', 'over'], ['τὸν', 'the'], ['οἶκον', 'house'], ['Ἰακὼβ', 'of Jacob'], ['εἰς', 'into'], ['τοὺς', 'the'], ['αἰῶνας,', 'ages'], ['καὶ', 'and'], ['τῆς', 'the'], ['βασιλείας', 'kingdom (gen.)'], ['αὐτοῦ', 'his'], ['οὐκ', 'not'], ['ἔσται', 'will be'], ['τέλος.', 'end']],
        en: 'And he will reign over the house of Jacob forever, and of his kingdom there will be no end.',
        notes: ['βασιλεύσει is the future of βασιλεύω, “I reign”: βασιλευ + σ + ει.', 'ἔσται, “will be,” is the future of εἰμί.', 'εἰς τοὺς αἰῶνας, “into the ages,” means “forever.”', 'Gabriel says this to Mary at the Annunciation. The Nicene Creed takes up his words: οὗ τῆς βασιλείας οὐκ ἔσται τέλος, in Latin <em>cuius regni non erit finis</em>, “and his kingdom will have no end.” <em>erit</em> is the future of <em>sum</em>, as ἔσται is of εἰμί.'] }
    ],
    ex: [
      { t: 'mc', q: 'What does the augment ἐ- at the front of a verb tell you?', o: ['The action is in the past', 'The action is in the future', 'The subject is plural', 'The verb is a contract verb'], a: 0, x: 'ἔλυον, “I was loosing,” has the augment. The present λύω and the future λύσω do not.' },
      { t: 'mc', q: 'Parse <span class="big">ἔλυες</span>.', o: ['imperfect, 2nd person singular', 'present, 2nd person singular', 'future, 2nd person singular', 'imperfect, 1st person singular'], a: 0, x: 'Augment + λυ + -ες. The present is λύεις and the future λύσεις.' },
      { t: 'mc', q: '<span class="big">ἔλεγον</span> can mean…', o: ['“I was saying” or “they were saying”', 'only “I was saying”', '“we were saying”', '“I will say”'], a: 0, x: 'In the imperfect, the 1st person singular and the 3rd person plural both end in -ον.' },
      { t: 'mc', q: 'Parse <span class="big">λύσομεν</span>.', o: ['future, 1st person plural', 'present, 1st person plural', 'imperfect, 1st person plural', 'future, 3rd person plural'], a: 0, x: 'σ + the present ending -ομεν. The present is λύομεν and the imperfect ἐλύομεν.' },
      { t: 'mc', q: 'What is the future of <span class="big">βλέπω</span>?', o: ['βλέψω', 'βλέπσω', 'βλέξω', 'ἔβλεπον'], a: 0, x: 'π + σ gives ψ. ἔβλεπον is the imperfect.' },
      { t: 'mc', q: 'What is the future of <span class="big">ποιέω</span>?', o: ['ποιήσω', 'ποιέσω', 'ποιῶ', 'ἐποίουν'], a: 0, x: 'A contract verb lengthens its vowel before σ: ε becomes η. ποιῶ is the present and ἐποίουν the imperfect.' },
      { t: 'mc', q: 'What is the imperfect, 3rd person singular, of <span class="big">ἀκούω</span>?', o: ['ἤκουε(ν)', 'ἐάκουε(ν)', 'ἀκούσει', 'ἀκούει'], a: 0, x: 'A verb that begins with α lengthens it to η instead of adding ἐ-.' },
      { t: 'mc', q: 'You meet <span class="big">ἠγάπα</span> in a text. Which verb do you look up?', o: ['ἀγαπάω', 'ἠγαπάω', 'ἐγαπάω', 'ἀγαπέω'], a: 0, x: 'Take off the augment: the η was α. The ending -α (α + ε) shows an α-verb. ἠγάπα means “he was loving.”' },
      { t: 'mc', q: 'What is the imperfect, 1st person singular, of <span class="big">περιπατέω</span>?', o: ['περιεπάτουν', 'ἐπεριπάτουν', 'περιπατοῦν', 'περιπάτουν'], a: 0, x: 'In a compound verb the augment goes after the preposition: περι-ε-πάτουν.' },
      { t: 'mc', q: 'Which is the future of <span class="big">ἔχω</span>?', o: ['ἕξω', 'ἔξω', 'εἶχον', 'ἔχσω'], a: 0, x: 'Note the rough breathing. ἔξω, with a smooth breathing, is a different word: “outside.” εἶχον is the imperfect.' },
      { t: 'mc', q: 'Parse <span class="big">μενεῖ</span>.', o: ['future, 3rd person singular of μένω', 'present, 3rd person singular of μένω', 'imperfect, 3rd person singular of μένω', 'present, 3rd person singular of μενέω'], a: 0, x: 'μένω has a liquid stem, so its future has no σ and contracts like an ε-verb. The present is μένει and the imperfect ἔμενε(ν).' },
      { t: 'mc', q: 'Which form means “they were”?', o: ['ἦσαν', 'ἦν', 'ἔσονται', 'εἰσί(ν)'], a: 0, x: 'ἦν is “he/she/it was,” ἔσονται “they will be,” and εἰσί(ν) “they are.”' },
      { t: 'mc', q: 'In <span class="big">ἀγαπήσεις κύριον τὸν θεόν σου</span>, the future…', o: ['gives a command: “you shall love”', 'describes the past: “you were loving”', 'is really a present: “you love”', 'is plural: “you all will love”'], a: 0, x: 'The future can give a command, as in the commandments: οὐ κλέψεις, “you shall not steal.”' },
      { t: 'match', q: 'Match each form to its meaning.', pairs: [['λύει', 'he looses'], ['ἔλυε', 'he was loosing'], ['λύσει', 'he will loose'], ['ἐστί', 'he is'], ['ἦν', 'he was'], ['ἔσται', 'he will be']] },
      { t: 'self', q: 'Translate:', gk: 'ὁ Ἰησοῦς ἐδίδασκεν τοὺς μαθητὰς καὶ ἐλάλει αὐτοῖς τὸν λόγον.', a: 'Jesus was teaching the disciples and speaking the word to them.', x: 'ἐδίδασκεν and ἐλάλει are imperfects: actions going on in the past. ἐλάλει is from λαλέω (ε + ε gives ει). Mark 2:2 has the same words: ἐλάλει αὐτοῖς τὸν λόγον.' },
      { t: 'self', q: 'Translate:', gk: 'οἱ μαθηταὶ κηρύξουσι τὸ εὐαγγέλιον, καὶ ὁ κύριος ἔσται μετ᾽ αὐτῶν.', a: 'The disciples will proclaim the gospel, and the Lord will be with them.', x: 'κηρύξουσι is the future of κηρύσσω: the stem ends in κ, and κ + σ gives ξ. ἔσται is the future of εἰμί. μετά with the genitive means “with” (Lesson 9).' }
    ]
  });

})(window.COURSE);
