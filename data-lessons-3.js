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

})(window.COURSE);
