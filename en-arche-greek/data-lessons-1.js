/* En Archē Greek — Lessons 1–5 */
window.COURSE = window.COURSE || {};
(function (C) {
  const L = C.lessons = C.lessons || [];

  /* ============ LESSON 1 ============ */
  L.push({
    n: 1, title: 'The Alphabet', gk: 'τὸ ἀλφάβητον',
    blurb: 'All 24 letters, their sounds, and how to write Greek in English letters.',
    goals: [
      'Recognize all 24 letters, small and capital',
      'Say each letter with the Erasmian pronunciation',
      'Transliterate a Greek word into English letters'
    ],
    sections: [
      { h: 'One language, two testaments', html: `
        <p>The Greek of the Septuagint and the New Testament is <em>Koine</em>, from κοινή, “common.” After Alexander the Great (d. 323 BC), this everyday Greek became the shared language of the eastern Mediterranean. In Alexandria, Jewish scholars began translating the Hebrew Scriptures into it in the third century BC. That translation, the Septuagint (abbreviated LXX, after the legend of its seventy translators), became the Bible of the early Church and is quoted throughout the New Testament.</p>
        <p>Both collections are written in the same language, so everything you learn here serves both. You will read real verses from each in every lesson.</p>
        <p>Greek has 24 letters. Many will look familiar, because the Latin alphabet, and so the English one, grew out of a form of the Greek alphabet.</p>` },
      { h: 'The 24 letters', html: `
        <div data-custom="alphabet"></div>
        <aside class="callout"><b>About pronunciation.</b> This course teaches the <strong>Erasmian</strong> pronunciation, used in most seminaries and New Testament grammars. It is named for Erasmus, who argued for it in 1528, and it gives each letter its own sound, which makes spelling easier. It is a teaching convention: first-century speakers sounded different, and modern Greek is different again.</aside>` },
      { h: 'Three groups to learn', html: `
        <p>Learn the letters in three groups rather than in alphabetical order.</p>
        <div class="groups">
          <div><h4>Familiar</h4><p class="gk-row">α β δ ε ι κ ο τ</p><p>Look and sound much like their English cousins.</p></div>
          <div><h4>False friends</h4><p class="gk-row">η ν ρ χ ω γ</p><p>They look like English letters but are not: η is <em>ē</em> (not n), ν is <em>n</em> (not v), ρ is <em>r</em> (not p), χ is <em>ch</em> (not x), ω is <em>ō</em> (not w), γ is <em>g</em> (not y).</p></div>
          <div><h4>New shapes</h4><p class="gk-row">ζ θ λ μ ξ π σ ς υ φ ψ</p><p>Unfamiliar at first. Say the name each time you write one.</p></div>
        </div>` },
      { h: 'Sigma, capitals and transliteration', html: `
        <p><strong>Sigma has two small forms.</strong> Write σ at the beginning or in the middle of a word and ς at the end. The word κόσμος (<em>kosmos</em>, “world”) has both.</p>
        <p><strong>Capitals are used sparingly.</strong> Modern editions capitalize proper names (Ἰησοῦς, Πέτρος) and the first word of a paragraph, and some capitalize the start of a quotation. They do not capitalize every sentence.</p>
        <p><strong>Transliteration</strong> means writing Greek in English letters. Most letters map one to one. Four become two-letter pairs (θ <em>th</em>, φ <em>ph</em>, χ <em>ch</em>, ψ <em>ps</em>), and the long vowels take a line above: η <em>ē</em>, ω <em>ō</em>. Upsilon is <em>y</em> on its own and <em>u</em> in combinations like ου.</p>` },
      { h: 'You have already seen Greek', html: `
        <ul class="facts">
          <li><b class="big-gk">Α Ω</b> The first and last letters, cut into the Paschal candle at the Easter Vigil. They come from Revelation: “I am the Alpha and the Omega.”</li>
          <li><b class="big-gk">Χ Ρ</b> The Chi-Rho: the first two letters of ΧΡΙΣΤΟΣ, <em>Christos</em>.</li>
          <li><b class="big-gk">ΙΗΣ</b> The first three letters of ΙΗΣΟΥΣ, <em>Iēsous</em>. Read with Latin eyes, the eta looked like an H, which gave us the monogram IHS.</li>
          <li><b class="big-gk">ΙΧΘΥΣ</b> <em>Ichthys</em>, “fish”: the initials of Ἰησοῦς Χριστὸς Θεοῦ Υἱὸς Σωτήρ, “Jesus Christ, Son of God, Savior.”</li>
        </ul>
        <aside class="callout"><b>In the manuscripts.</b> The great codices were written in capitals with no spaces between words. Scribes shortened sacred names and marked them with a line above, the <em>nomina sacra</em>: <span class="ns">ΘΣ</span> for ΘΕΟΣ, <span class="ns">ΚΣ</span> for ΚΥΡΙΟΣ, <span class="ns">ΙΣ</span> for ΙΗΣΟΥΣ, <span class="ns">ΧΣ</span> for ΧΡΙΣΤΟΣ.</aside>` },
      { h: 'Read these aloud', html: `
        <p>Sound out each word, then tap it to check your transliteration. Ignore the small marks above the letters for now; Lesson 2 explains them.</p>
        <div data-custom="readlist" data-items="θεός|theos|God;λόγος|logos|word;κόσμος|kosmos|world;Χριστός|Christos|Christ;Πέτρος|Petros|Peter;ψυχή|psychē|soul;φῶς|phōs|light;βίβλος|biblos|book;Παῦλος|Paulos|Paul;σημεῖον|sēmeion|sign"></div>` }
    ],
    texts: [
      { ref: 'Rev 1:8', src: 'NT', w: [['Ἐγώ', 'I'], ['εἰμι', 'am'], ['τὸ', 'the'], ['ἄλφα', 'alpha'], ['καὶ', 'and'], ['τὸ', 'the'], ['ὦ,', 'omega (ō)'], ['λέγει', 'says'], ['κύριος', 'Lord'], ['ὁ', 'the'], ['θεός', 'God']],
        en: '“I am the Alpha and the Omega,” says the Lord God.',
        notes: ['The letter names are used as nouns: τὸ ἄλφα, “the alpha.” Omega is written simply ὦ.', 'Find θ, γ, ω, λ and ε. You can already sound out every word.'] }
    ],
    ex: [
      { t: 'mc', q: 'Which letter is <b>theta</b>?', o: ['θ', 'φ', 'ψ', 'ο'], a: 0, x: 'θ is theta (th). φ is phi, ψ is psi.' },
      { t: 'mc', q: 'What sound does <span class="big">η</span> make?', o: ['ē, as in obey', 'n, as in new', 'h, as in hat', 'i, as in pit'], a: 0, x: 'η (eta) is a long e. It only looks like an English n.' },
      { t: 'mc', q: 'The letter <span class="big">ν</span> is…', o: ['nu (n)', 'upsilon (u)', 'a v', 'gamma (g)'], a: 0, x: 'ν is nu, the Greek n. Greek has no v.' },
      { t: 'mc', q: 'The letter <span class="big">ρ</span> is…', o: ['rho (r)', 'pi (p)', 'phi (ph)', 'psi (ps)'], a: 0, x: 'ρ is rho, an r. Pi is π.' },
      { t: 'mc', q: 'Which form of sigma ends a word?', o: ['ς', 'σ', 'Σ', 'ζ'], a: 0, x: 'Final sigma ς appears only at the end of a word: κόσμος.' },
      { t: 'match', q: 'Match each capital to its small letter.', pairs: [['Γ', 'γ'], ['Δ', 'δ'], ['Λ', 'λ'], ['Σ', 'σ'], ['Ω', 'ω'], ['Ψ', 'ψ']] },
      { t: 'type', q: 'Transliterate into English letters:', gk: 'λόγος' },
      { t: 'type', q: 'Transliterate into English letters:', gk: 'κόσμος' },
      { t: 'type', q: 'Transliterate into English letters:', gk: 'Χριστός' },
      { t: 'type', q: 'Transliterate into English letters:', gk: 'ψυχή', hint: 'Use e for η if you can’t type ē.' },
      { t: 'mc', q: 'Read the capitals: <span class="big">ΠΕΤΡΟΣ</span>', o: ['Petros', 'Hetpos', 'Pempos', 'Retros'], a: 0, x: 'Π = P, Ε = E, Τ = T, Ρ = R, Ο = O, Σ = S.' },
      { t: 'mc', q: 'The monogram IHS comes from which Greek letters?', o: ['ΙΗΣ (iota, eta, sigma)', 'ΙΧΘ (iota, chi, theta)', 'ΙΝΣ (iota, nu, sigma)', 'ΗΙΣ (eta, iota, sigma)'], a: 0, x: 'ΙΗΣ are the first three letters of ΙΗΣΟΥΣ. The capital eta looks like a Latin H.' }
    ]
  });

  /* ============ LESSON 2 ============ */
  L.push({
    n: 2, title: 'Vowels, Diphthongs & Breathings', gk: 'φωνήεντα καὶ πνεύματα',
    blurb: 'Long and short vowels, the eight diphthongs, and the marks that add an h.',
    goals: [
      'Tell long vowels from short ones',
      'Read the eight diphthongs',
      'Read smooth and rough breathing marks',
      'Recognize iota subscript and diaeresis'
    ],
    sections: [
      { h: 'Seven vowels', html: `
        <p>Greek has seven vowels: α ε η ι ο υ ω. Two are always short, two are always long, and three can be either.</p>
        <div class="tbl-wrap"><table class="tbl">
          <thead><tr><th>Always short</th><th>Always long</th><th>Short or long</th></tr></thead>
          <tbody><tr><td class="gk-cell">ε ο</td><td class="gk-cell">η ω</td><td class="gk-cell">α ι υ</td></tr></tbody>
        </table></div>
        <p>The pairs are easiest to learn together. Epsilon (ε) is short e and eta (η) long e. Omicron, “little o” (ὂ μικρόν), is short o and omega, “big o” (ὦ μέγα), long o.</p>` },
      { h: 'Diphthongs', html: `
        <p>A diphthong is two vowels pronounced as one sound. Each counts as a single syllable.</p>
        <div class="tbl-wrap"><table class="tbl">
          <thead><tr><th>Diphthong</th><th>Sound</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td class="gk-cell">αι</td><td>ai as in aisle</td><td>καί <em>kai</em>, “and”</td></tr>
            <tr><td class="gk-cell">ει</td><td>ei as in eight</td><td>εἰμί <em>eimi</em>, “I am”</td></tr>
            <tr><td class="gk-cell">οι</td><td>oi as in oil</td><td>οἶκος <em>oikos</em>, “house”</td></tr>
            <tr><td class="gk-cell">αυ</td><td>ow as in how</td><td>αὐτός <em>autos</em>, “he”</td></tr>
            <tr><td class="gk-cell">ευ</td><td>eu as in feud</td><td>εὐαγγέλιον <em>euangelion</em>, “gospel”</td></tr>
            <tr><td class="gk-cell">ηυ</td><td>eu as in feud (rare)</td><td>ηὔξανεν <em>ēuxanen</em>, “it was growing” (Acts 6:7)</td></tr>
            <tr><td class="gk-cell">ου</td><td>oo as in soup</td><td>οὐρανός <em>ouranos</em>, “heaven”</td></tr>
            <tr><td class="gk-cell">υι</td><td>wee as in suite</td><td>υἱός <em>huios</em>, “son”</td></tr>
          </tbody>
        </table></div>` },
      { h: 'Iota subscript and diaeresis', html: `
        <p><strong>Iota subscript.</strong> A small iota can sit under α, η or ω: ᾳ ῃ ῳ. In Erasmian pronunciation it is silent, so ἀρχῇ sounds like <em>archē</em>. It matters for grammar, though, so always notice it. With capitals it is written beside the letter (ᾼ or Αι).</p>
        <p><strong>Diaeresis.</strong> Two dots over a vowel (¨) mean it does <em>not</em> join the vowel before it. Μωϋσῆς is <em>Mō-y-sēs</em> (Moses), in four syllables, and Ἠσαΐας is <em>Ē-sa-i-as</em> (Isaiah).</p>` },
      { h: 'Breathing marks', html: `
        <p>Every word that begins with a vowel or diphthong carries a breathing mark, which looks like a tiny comma above the letter.</p>
        <div class="pair-cards">
          <div><span class="big-gk">ἐ</span><b>Smooth breathing</b><p>Curves like a closing quote (᾿). It makes no sound: ἐν <em>en</em>, “in.”</p></div>
          <div><span class="big-gk">ἑ</span><b>Rough breathing</b><p>Curves like an opening quote (῾). Add an <em>h</em> sound: ἕν <em>hen</em>, “one.”</p></div>
        </div>
        <ul>
          <li>On a diphthong the breathing sits on the <em>second</em> vowel: αὐτός, οὐρανός, υἱός.</li>
          <li>With a capital it stands in front of the letter: Ἰησοῦς, Ἀβραάμ, Ὡσαννά.</li>
          <li>Initial υ always takes rough breathing (υἱός <em>huios</em>), and so does initial ρ: ῥῆμα <em>rhēma</em>, “word.”</li>
        </ul>
        <aside class="callout"><b>Hallelujah and Hosanna.</b> Both come into English with an H because Greek wrote them with rough breathing: ἁλληλουϊά (Rev 19:1) and ὡσαννά (Mark 11:9). By contrast ἀμήν has smooth breathing, so it is simply <em>amēn</em>.</aside>` },
      { h: 'Gamma before a guttural', html: `
        <p>Before γ, κ, ξ or χ, gamma is pronounced <em>n</em>. So ἄγγελος is <em>angelos</em> (messenger, angel), εὐαγγέλιον is <em>euangelion</em>, and ἀνάγκη is <em>anankē</em> (necessity).</p>` },
      { h: 'Syllables', html: `
        <p>A Greek word has one syllable for each vowel or diphthong. The last three syllables have names you will need for accents:</p>
        <div class="syll"><span><b>ἄν</b><small>antepenult</small></span><span><b>θρω</b><small>penult</small></span><span><b>πος</b><small>ultima</small></span></div>
        <p>Divide between two consonants that cannot begin a word together (ἐκ-κλη-σί-α), and before a single consonant (λό-γος).</p>` }
    ],
    texts: [
      { ref: 'Mark 11:9', src: 'NT', w: [['ὡσαννά·', 'Hosanna (from Hebrew, “save, please”)'], ['εὐλογημένος', 'blessed'], ['ὁ', 'the one'], ['ἐρχόμενος', 'coming'], ['ἐν', 'in'], ['ὀνόματι', 'name'], ['κυρίου', 'of the Lord']],
        en: 'Hosanna! Blessed is he who comes in the name of the Lord!',
        notes: ['These words are sung in the Sanctus at every Mass.', 'Find the rough breathing (ὡ), a diphthong with smooth breathing (εὐ), and the diphthong ου.'] },
      { ref: 'Rev 19:1', src: 'NT', w: [['ἁλληλουϊά·', 'Hallelujah (Hebrew, “praise the LORD”)'], ['ἡ', 'the'], ['σωτηρία', 'salvation'], ['καὶ', 'and'], ['ἡ', 'the'], ['δόξα', 'glory'], ['καὶ', 'and'], ['ἡ', 'the'], ['δύναμις', 'power'], ['τοῦ', 'of the'], ['θεοῦ', 'God'], ['ἡμῶν', 'our']],
        en: 'Hallelujah! Salvation and glory and power belong to our God.',
        notes: ['ἁλληλουϊά: rough breathing gives the H, and the diaeresis on ϊ keeps ου and ι apart.', 'ἡ (“the”) has rough breathing: say <em>hē</em>.'] }
    ],
    ex: [
      { t: 'mc', q: 'Which two vowels are always long?', o: ['η and ω', 'ε and ο', 'α and ι', 'υ and ο'], a: 0, x: 'η and ω are always long; ε and ο always short.' },
      { t: 'mc', q: 'Which word is pronounced <em>hen</em>?', o: ['ἕν', 'ἐν'], a: 0, x: 'Rough breathing (῾) adds an h. ἕν means “one”; ἐν means “in.”' },
      { t: 'mc', q: 'The diphthong <span class="big">ου</span> sounds like…', o: ['oo in soup', 'oi in oil', 'ow in how', 'o in tone'], a: 0 },
      { t: 'mc', q: 'On a diphthong, where does the breathing mark go?', o: ['On the second vowel', 'On the first vowel', 'Between the two vowels', 'Diphthongs never take one'], a: 0, x: 'αὐτός, οὐρανός, υἱός: always on the second vowel.' },
      { t: 'mc', q: 'How is <span class="big">ἄγγελος</span> pronounced?', o: ['angelos', 'aggelos', 'ajelos', 'agkelos'], a: 0, x: 'γ before γ, κ, ξ or χ is pronounced n.' },
      { t: 'mc', q: 'Which word begins with an h sound?', o: ['ἡμέρα', 'ἐν', 'αὐτός', 'ἀμήν'], a: 0, x: 'ἡμέρα has rough breathing: hēmera, “day” (compare ephemeral).' },
      { t: 'type', q: 'Transliterate (remember the breathing):', gk: 'ἁμαρτία' },
      { t: 'type', q: 'Transliterate:', gk: 'υἱός' },
      { t: 'type', q: 'Transliterate:', gk: 'αὐτός' },
      { t: 'type', q: 'Transliterate:', gk: 'ῥῆμα', hint: 'Initial ρ always has rough breathing.' },
      { t: 'mc', q: 'How many syllables are in <span class="big">ἐκκλησία</span>?', o: ['4', '3', '5', '6'], a: 0, x: 'ἐκ-κλη-σί-α: four vowels, four syllables.' },
      { t: 'mc', q: 'In <span class="big">Ἠσαΐας</span>, the two dots over ι tell you…', o: ['α and ι are pronounced separately', 'the ι is silent', 'the ι is long', 'the word is a question'], a: 0, x: 'A diaeresis breaks up what would otherwise be a diphthong: Ē-sa-i-as.' }
    ]
  });

  /* ============ LESSON 3 ============ */
  L.push({
    n: 3, title: 'Accents & First Reading', gk: 'πρώτη ἀνάγνωσις',
    blurb: 'Accents, punctuation, and your first two verses: Genesis 1:1 and John 1:1.',
    goals: [
      'Recognize the three accents and stress the right syllable',
      'Read Greek punctuation, including the question mark',
      'Tell apart words that differ only by accent or breathing',
      'Read Genesis 1:1 and John 1:1 aloud'
    ],
    sections: [
      { h: 'Three accents', html: `
        <div class="pair-cards three">
          <div><span class="big-gk">ά</span><b>Acute</b><p>Rises to the right. The most common accent.</p></div>
          <div><span class="big-gk">ὰ</span><b>Grave</b><p>Falls to the right. Only on the last syllable.</p></div>
          <div><span class="big-gk">ᾶ</span><b>Circumflex</b><p>A small wave. Only on a long vowel or diphthong.</p></div>
        </div>
        <p>In ancient Greek the accents marked pitch. Today we read them as stress: say the accented syllable a little louder. ἄνθρωπος is <em>AN-thrō-pos</em>; ἀνθρώπου is <em>an-THRŌ-pou</em>.</p>
        <p>Three facts cover most of what you will see:</p>
        <ul>
          <li>An accent can stand only on one of the last three syllables.</li>
          <li>A circumflex can stand only on the last two syllables, and only on a long vowel.</li>
          <li>An acute on the last syllable becomes grave when another word follows directly: θεός, but θεὸς ἦν.</li>
        </ul>
        <p>You do not need to place accents yourself yet. Notice them, and stress the syllable they mark.</p>` },
      { h: 'Marks that change the meaning', html: `
        <p>A handful of very common words differ only by breathing or accent. These are worth learning now.</p>
        <div class="tbl-wrap"><table class="tbl">
          <thead><tr><th>Word</th><th>Meaning</th><th>Word</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td class="gk-cell">ἐν</td><td>in</td><td class="gk-cell">ἕν</td><td>one</td></tr>
            <tr><td class="gk-cell">εἰ</td><td>if</td><td class="gk-cell">εἶ</td><td>you are</td></tr>
            <tr><td class="gk-cell">ἡ</td><td>the (feminine)</td><td class="gk-cell">ἤ</td><td>or, than</td></tr>
            <tr><td class="gk-cell">οὐ</td><td>not</td><td class="gk-cell">οὗ</td><td>where; of whom</td></tr>
            <tr><td class="gk-cell">ὁ</td><td>the (masculine)</td><td class="gk-cell">ὅ</td><td>which</td></tr>
          </tbody>
        </table></div>` },
      { h: 'Punctuation', html: `
        <div class="tbl-wrap"><table class="tbl">
          <thead><tr><th>Mark</th><th>Name</th><th>English equivalent</th></tr></thead>
          <tbody>
            <tr><td class="gk-cell">.</td><td>period</td><td>period</td></tr>
            <tr><td class="gk-cell">,</td><td>comma</td><td>comma</td></tr>
            <tr><td class="gk-cell">·</td><td>raised dot (ἄνω τελεία)</td><td>semicolon or colon</td></tr>
            <tr><td class="gk-cell">;</td><td>Greek question mark</td><td>question mark (?)</td></tr>
            <tr><td class="gk-cell">᾽</td><td>apostrophe</td><td>a vowel has been dropped: δι᾽ αὐτοῦ for διὰ αὐτοῦ</td></tr>
          </tbody>
        </table></div>
        <p>So τίς ἐστιν; means “Who is it?” The semicolon shape is the question mark.</p>` },
      { h: 'Little words that lean', html: `
        <p>Some short words have no accent of their own. <strong>Proclitics</strong> lean forward onto the next word: ὁ, ἡ, οἱ, αἱ, ἐν, εἰς, ἐκ, οὐ, εἰ, ὡς. <strong>Enclitics</strong> lean back on the word before, sometimes giving it a second accent: τὸν δοῦλόν σου, “your servant” (Luke 2:29). The common enclitics include μου, σου, and the forms of “to be,” such as ἐστιν.</p>
        <p>Some words also add a <strong>movable ν</strong> before a vowel or at the end of a sentence: ἐστί or ἐστίν, both meaning “is.” It does not change the meaning.</p>` },
      { h: 'Your first reading', html: `
        <p>The Greek Bible opens twice with the same two words, Ἐν ἀρχῇ, “in the beginning”: once in Genesis, translated in the LXX, and again at the start of John’s Gospel, which deliberately echoes it. Read both verses below. Tap any word to see what it means, then read each line aloud until it flows.</p>
        <div data-custom="readlist" data-items="Ἐν ἀρχῇ ἐποίησεν ὁ θεὸς τὸν οὐρανὸν καὶ τὴν γῆν.|En archē epoiēsen ho theos ton ouranon kai tēn gēn.|Gen 1:1 LXX;Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος.|En archē ēn ho logos, kai ho logos ēn pros ton theon, kai theos ēn ho logos.|John 1:1" data-wide="1"></div>` }
    ],
    texts: [
      { ref: 'Gen 1:1', src: 'LXX', w: [['Ἐν', 'in'], ['ἀρχῇ', 'beginning'], ['ἐποίησεν', 'made'], ['ὁ', 'the'], ['θεὸς', 'God'], ['τὸν', 'the'], ['οὐρανὸν', 'heaven'], ['καὶ', 'and'], ['τὴν', 'the'], ['γῆν.', 'earth']],
        en: 'In the beginning God made the heaven and the earth.',
        notes: ['ἀρχῇ has an iota subscript: silent in pronunciation, important in grammar (Lesson 7).', 'Greek often uses “the” where English does not: ὁ θεός is simply “God.”'] },
      { ref: 'John 1:1', src: 'NT', w: [['Ἐν', 'in'], ['ἀρχῇ', 'beginning'], ['ἦν', 'was'], ['ὁ', 'the'], ['λόγος,', 'Word'], ['καὶ', 'and'], ['ὁ', 'the'], ['λόγος', 'Word'], ['ἦν', 'was'], ['πρὸς', 'with'], ['τὸν', 'the'], ['θεόν,', 'God'], ['καὶ', 'and'], ['θεὸς', 'God'], ['ἦν', 'was'], ['ὁ', 'the'], ['λόγος.', 'Word']],
        en: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
        notes: ['Notice θεόν and θεός: the ending changes with the word’s job in the sentence. Lesson 5 explains why.', 'θεὸς ἦν: the acute on θεός turns grave because another word follows.'] },
      { ref: 'John 1:4', src: 'NT', w: [['ἐν', 'in'], ['αὐτῷ', 'him'], ['ζωὴ', 'life'], ['ἦν,', 'was'], ['καὶ', 'and'], ['ἡ', 'the'], ['ζωὴ', 'life'], ['ἦν', 'was'], ['τὸ', 'the'], ['φῶς', 'light'], ['τῶν', 'of the'], ['ἀνθρώπων·', 'men, people']],
        en: 'In him was life, and the life was the light of men.',
        notes: ['The raised dot (·) at the end works like an English semicolon.'] }
    ],
    ex: [
      { t: 'mc', q: 'The Greek mark <span class="big">;</span> is equivalent to the English…', o: ['question mark', 'semicolon', 'colon', 'exclamation point'], a: 0 },
      { t: 'mc', q: 'The raised dot <span class="big">·</span> works like an English…', o: ['semicolon or colon', 'period', 'question mark', 'apostrophe'], a: 0 },
      { t: 'mc', q: 'Which accent can stand only on a long vowel or diphthong?', o: ['Circumflex', 'Acute', 'Grave', 'All of them'], a: 0 },
      { t: 'mc', q: 'An accent can fall on which syllables?', o: ['Only the last three', 'Any syllable', 'Only the last two', 'Only the first'], a: 0 },
      { t: 'mc', q: 'What does <span class="big">εἶ</span> mean?', o: ['you are', 'if', 'one', 'in'], a: 0, x: 'εἰ means “if”; εἶ, with a circumflex, means “you are.”' },
      { t: 'mc', q: 'Why is the accent on <span class="big">θεὸς</span> grave in θεὸς ἦν?', o: ['Another word follows directly', 'The word is plural', 'It begins a sentence', 'The vowel is long'], a: 0, x: 'An acute on the last syllable becomes grave when another word follows without punctuation.' },
      { t: 'mc', q: 'Which syllable is stressed in <span class="big">ἀνθρώπου</span>?', o: ['θρώ (the penult)', 'ἀν (the antepenult)', 'που (the ultima)'], a: 0 },
      { t: 'mc', q: 'What does <span class="big">Ἐν ἀρχῇ</span> mean?', o: ['In the beginning', 'In the world', 'The Word was', 'God made'], a: 0 },
      { t: 'mc', q: 'What does the apostrophe in <span class="big">δι᾽ αὐτοῦ</span> show?', o: ['A vowel was dropped (διά)', 'The word is a question', 'The word is a name', 'The word is plural'], a: 0 },
      { t: 'self', q: 'Read Genesis 1:1 aloud, then check your transliteration.', gk: 'Ἐν ἀρχῇ ἐποίησεν ὁ θεὸς τὸν οὐρανὸν καὶ τὴν γῆν.', a: 'En archē epoiēsen ho theos ton ouranon kai tēn gēn.', x: 'Stress: en ar-CHĒ e-POI-ē-sen ho the-OS ton ou-ra-NON kai tēn GĒN.' }
    ]
  });

  /* ============ LESSON 4 ============ */
  L.push({
    n: 4, title: 'Verbs: The Present Tense', gk: 'τὸ ῥῆμα',
    blurb: 'How one verb ending can mean “I,” “you,” “he” or “they.”',
    goals: [
      'Identify person and number from a verb ending',
      'Translate present active verbs',
      'Negate a verb with οὐ, οὐκ or οὐχ',
      'Find a verb’s dictionary form'
    ],
    sections: [
      { h: 'The ending carries the subject', html: `
        <p>English needs a pronoun to say who acts: <em>I</em> say, <em>they</em> say. Greek puts that information in the ending of the verb. λέγω means “I say,” λέγουσι means “they say,” and no pronoun is needed.</p>
        <p>Each ending tells you two things: <strong>person</strong> (first: I, we; second: you; third: he, she, it, they) and <strong>number</strong> (singular or plural).</p>
        <aside class="callout latin"><b>Latin parallel.</b> This works exactly like <em>dīcō, dīcis, dīcit, dīcimus, dīcitis, dīcunt</em>. Even the shapes are cousins: Latin -mus and Greek -μεν, Latin -tis and Greek -τε.</aside>` },
      { h: 'The pattern: λύω, “I loose”', html: `
        <p>Grammars traditionally use λύω (“I loose, untie”) as the model verb because its stem never changes. Learn the endings in the highlighted color.</p>
        <div data-para="verb:luo" data-gloss="1"></div>
        <p>Between the stem and the ending sits a connecting vowel: ο before μ or ν, ε elsewhere (λύ-ο-μεν, λύ-ε-τε). The third person plural adds a <strong>movable ν</strong> before a vowel or at the end of a clause: λύουσι or λύουσιν.</p>
        <p>Every verb in this lesson follows the same pattern. Swap in a new stem and keep the endings: λέγω, λέγεις, λέγει, λέγομεν, λέγετε, λέγουσι(ν).</p>` },
      { h: 'Ongoing action', html: `
        <p>The Greek present describes action as ongoing or in progress. πιστεύω can be translated “I believe” or “I am believing”; context decides. Start with the simple English present and switch to the progressive (“I am …”) when it reads better.</p>` },
      { h: 'Finding the dictionary form', html: `
        <p>Greek dictionaries list a verb under its first person singular present form, not under an infinitive. So to look up βλέπουσιν, remove the ending -ουσιν and add -ω: βλέπω, “I see.” This form is called the <strong>lexical form</strong>.</p>` },
      { h: 'Saying “not”', html: `
        <p>The negative οὐ comes before the verb and changes shape to suit the next sound:</p>
        <div class="tbl-wrap"><table class="tbl">
          <thead><tr><th>Form</th><th>Used before</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td class="gk-cell">οὐ</td><td>a consonant</td><td>οὐ βλέπω, “I do not see”</td></tr>
            <tr><td class="gk-cell">οὐκ</td><td>smooth breathing</td><td>οὐκ ἔχει, “he does not have”</td></tr>
            <tr><td class="gk-cell">οὐχ</td><td>rough breathing</td><td>οὐχ εὑρίσκομεν, “we do not find”</td></tr>
          </tbody>
        </table></div>
        <p>The connective καί means “and.” It can also mean “also” or “even,” and καί … καί means “both … and.”</p>
        <p>Greek word order is free. Verbs often come first. Always read the endings rather than the position of a word.</p>` }
    ],
    texts: [
      { ref: 'Ps 22:1', alt: '(23:1)', src: 'LXX', w: [['Κύριος', 'the Lord'], ['ποιμαίνει', 'shepherds (3rd sg.)'], ['με,', 'me'], ['καὶ', 'and'], ['οὐδέν', 'nothing'], ['με', 'me'], ['ὑστερήσει.', 'will be lacking to']],
        en: 'The Lord shepherds me, and I shall lack nothing.',
        notes: ['ποιμαίνει: present active, third person singular, “he shepherds.” Its subject is Κύριος.', 'The LXX numbers this Psalm 22. Catholic Bibles that follow the Vulgate (like the Douay-Rheims) use the same numbering.'] },
      { ref: 'Ps 1:6', src: 'LXX', w: [['ὅτι', 'for'], ['γινώσκει', 'knows (3rd sg.)'], ['κύριος', 'the Lord'], ['ὁδὸν', 'way'], ['δικαίων,', 'of the righteous'], ['καὶ', 'and'], ['ὁδὸς', 'way'], ['ἀσεβῶν', 'of the ungodly'], ['ἀπολεῖται.', 'will perish']],
        en: 'For the Lord knows the way of the righteous, and the way of the ungodly will perish.',
        notes: ['γινώσκει: from γινώσκω, ending -ει, third person singular. The verb comes before its subject κύριος.'] },
      { ref: 'Mark 9:24', src: 'NT', w: [['πιστεύω·', 'I believe (1st sg.)'], ['βοήθει', 'help!'], ['μου', 'my'], ['τῇ', 'the'], ['ἀπιστίᾳ.', 'unbelief']],
        en: 'I believe; help my unbelief!',
        notes: ['One word, πιστεύω, is a whole sentence: “I believe.”'] },
      { ref: 'Luke 2:29', src: 'NT', w: [['νῦν', 'now'], ['ἀπολύεις', 'you dismiss (2nd sg.)'], ['τὸν', 'the'], ['δοῦλόν', 'servant'], ['σου,', 'your'], ['δέσποτα,', 'Master'], ['κατὰ', 'according to'], ['τὸ', 'the'], ['ῥῆμά', 'word'], ['σου', 'your'], ['ἐν', 'in'], ['εἰρήνῃ·', 'peace']],
        en: 'Now, Master, you let your servant go in peace, according to your word.',
        notes: ['ἀπολύεις is λύω with the prefix ἀπό, “away”: “you release.” The ending -εις marks the second person singular.', 'This is the Nunc Dimittis, Simeon’s canticle, prayed at Night Prayer.'] }
    ],
    ex: [
      { t: 'mc', q: 'Parse <span class="big">λέγουσιν</span>.', o: ['3rd person plural', '3rd person singular', '1st person plural', '2nd person plural'], a: 0, x: '-ουσι(ν) is the third person plural ending: “they say.”' },
      { t: 'mc', q: 'How do you say “we have”?', o: ['ἔχομεν', 'ἔχετε', 'ἔχουσιν', 'ἔχει'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">πιστεύεις</span>.', o: ['you (sg.) believe', 'he believes', 'you (pl.) believe', 'I believe'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">γράφετε</span>.', o: ['you (pl.) write', 'we write', 'they write', 'you (sg.) write'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">οὐκ ἀκούει</span>.', o: ['he does not hear', 'they do not hear', 'I do not hear', 'he hears'], a: 0 },
      { t: 'mc', q: 'Which negative belongs before <span class="big">ἔχω</span>?', o: ['οὐκ', 'οὐ', 'οὐχ'], a: 0, x: 'ἔχω begins with smooth breathing, so οὐ becomes οὐκ.' },
      { t: 'mc', q: 'What is the lexical form of <span class="big">βλέπετε</span>?', o: ['βλέπω', 'βλέπει', 'βλέπετω', 'βλέπ'], a: 0, x: 'Drop the ending -ετε and add -ω.' },
      { t: 'mc', q: 'In Κύριος ποιμαίνει με (Ps 22:1 LXX), which word is the verb?', o: ['ποιμαίνει', 'Κύριος', 'με'], a: 0, x: 'The -ει ending marks a third person singular verb.' },
      { t: 'match', q: 'Match each verb to its meaning.', pairs: [['λαμβάνω', 'I take, receive'], ['γινώσκω', 'I know'], ['ἀκούω', 'I hear'], ['διδάσκω', 'I teach'], ['μένω', 'I remain'], ['πέμπω', 'I send']] },
      { t: 'mc', q: 'Translate <span class="big">λαμβάνομεν καὶ διδάσκομεν</span>.', o: ['we receive and we teach', 'they receive and teach', 'you receive and teach', 'we teach and we write'], a: 0 },
      { t: 'self', q: 'Translate:', gk: 'οὐ βλέπομεν καὶ οὐκ ἀκούομεν.', a: 'We do not see and we do not hear.', x: '-ομεν is first person plural. οὐ before β; οὐκ before the smooth breathing of ἀκούομεν.' },
      { t: 'self', q: 'Translate:', gk: 'διδάσκει καὶ γράφει, ἀλλὰ οὐ πιστεύουσιν.', a: 'He (or she) teaches and writes, but they do not believe.', x: 'ἀλλά means “but.” The verb endings change from singular (-ει) to plural (-ουσιν).' }
    ]
  });

  /* ============ LESSON 5 ============ */
  L.push({
    n: 5, title: 'Nouns & Cases', gk: 'αἱ πτώσεις',
    blurb: 'Five cases, the second declension, and the masculine article.',
    goals: [
      'Name the five cases and their main jobs',
      'Decline λόγος and recognize its endings',
      'Use the masculine article ὁ',
      'Translate sentences with a subject and an object'
    ],
    sections: [
      { h: 'Endings show the job', html: `
        <p>In English, word order shows who does what. “The man sees God” and “God sees the man” mean different things. Greek marks each noun’s job with its ending, so the order can change freely:</p>
        <div class="example"><p class="gk-line">ὁ ἄνθρωπος βλέπει τὸν θεόν.</p><p class="gk-line">τὸν θεὸν βλέπει ὁ ἄνθρωπος.</p><p>Both mean “The man sees God.” The ending -ος marks the subject and -ον marks the object.</p></div>
        <p>These different forms of a noun are called <strong>cases</strong>. Listing all of a noun’s forms is called <strong>declining</strong> it, and a family of nouns that share endings is a <strong>declension</strong>.</p>` },
      { h: 'The five cases', html: `
        <div class="tbl-wrap"><table class="tbl">
          <thead><tr><th>Case</th><th>Main job</th><th>Key word</th></tr></thead>
          <tbody>
            <tr><td><b>Nominative</b></td><td>Subject of the verb; also what follows “is”</td><td>—</td></tr>
            <tr><td><b>Genitive</b></td><td>Possession, description, source</td><td>“of”</td></tr>
            <tr><td><b>Dative</b></td><td>Indirect object; also means, place, time</td><td>“to, for” (also “in, by, with”)</td></tr>
            <tr><td><b>Accusative</b></td><td>Direct object of the verb</td><td>—</td></tr>
            <tr><td><b>Vocative</b></td><td>Direct address</td><td>“O …!”</td></tr>
          </tbody>
        </table></div>
        <aside class="callout latin"><b>Latin parallel.</b> Greek has no ablative. Its jobs are shared out: separation (“from”) goes to the genitive, and means, place and time (“by, in, at”) go to the dative.</aside>
        <p>Every noun also has a <strong>gender</strong> (masculine, feminine or neuter) and a <strong>number</strong> (singular or plural). Gender is grammatical: λόγος, “word,” is masculine and ὁδός, “road,” is feminine.</p>` },
      { h: 'The second declension: λόγος', html: `
        <p>Most nouns ending in -ος are masculine and follow this pattern. The article ὁ, “the,” is shown with it; learn them together.</p>
        <div data-para="noun:logos" data-art="1" data-gloss="1"></div>
        <p>The vocative singular ends in -ε: λόγε, and most famously κύριε, “O Lord!” as in <em>Kyrie eleison</em>. Vocative plurals look like nominative plurals.</p>
        <p>Notice the iota subscript in the dative singular, -ῳ. It is silent, but it is how you tell λόγῳ (dative) from λόγο-, which is never a full word.</p>` },
      { h: 'Reading a dictionary entry', html: `
        <p>Nouns are listed like this: <span class="gk-inline">λόγος, -ου, ὁ</span>. That gives the nominative, the genitive ending, and the article, which tells you the gender. A few second-declension nouns are feminine, and the article is your only warning: <span class="gk-inline">ὁδός, -οῦ, ἡ</span>, “way.”</p>` },
      { h: 'Accents that move', html: `
        <p>A noun’s accent tries to stay on the syllable where it sits in the dictionary form. It moves only when it must:</p>
        <ul>
          <li>When the last syllable is long, the accent cannot stay three syllables back: ἄνθρωπος becomes ἀνθρώπου.</li>
          <li>Nouns accented on the last syllable take a circumflex in the genitive and dative: θεός, θεοῦ, θεῷ.</li>
        </ul>
        <p>You only need to recognize these shifts for now. The ending tells you the form; the accent just follows rules.</p>` },
      { h: 'Translating step by step', html: `
        <ol class="steps">
          <li>Find the verb and read its ending: who is acting?</li>
          <li>Find a nominative: that is the subject.</li>
          <li>Find an accusative: that is the object.</li>
          <li>Attach each genitive to the noun before it, with “of.”</li>
        </ol>
        <div class="example"><p class="gk-line">ὁ κύριος γινώσκει τοὺς λόγους τῶν ἀνθρώπων.</p><p>γινώσκει, “he knows” → ὁ κύριος (nom.), “the Lord” → τοὺς λόγους (acc. pl.), “the words” → τῶν ἀνθρώπων (gen. pl.), “of the people.” <em>The Lord knows the words of the people.</em></p></div>` }
    ],
    texts: [
      { ref: 'Ps 18:2', alt: '(19:1)', src: 'LXX', w: [['Οἱ', 'the'], ['οὐρανοὶ', 'heavens (nom. pl.)'], ['διηγοῦνται', 'tell, declare'], ['δόξαν', 'glory'], ['θεοῦ', 'of God (gen. sg.)']],
        en: 'The heavens declare the glory of God.',
        notes: ['Οἱ οὐρανοί is nominative plural: the subject.', 'θεοῦ is genitive: “of God.”'] },
      { ref: 'Deut 6:4', src: 'LXX', w: [['Ἄκουε,', 'hear!'], ['Ισραηλ·', 'Israel'], ['κύριος', 'the Lord (nom.)'], ['ὁ', 'the'], ['θεὸς', 'God (nom.)'], ['ἡμῶν', 'our'], ['κύριος', 'Lord'], ['εἷς', 'one'], ['ἐστιν·', 'is']],
        en: 'Hear, O Israel: the Lord our God is one Lord.',
        notes: ['The Shema. κύριος and θεός are both nominative.', 'The standard LXX edition (Rahlfs) prints Hebrew names like Ισραηλ without accents or breathings.'] },
      { ref: 'Matt 1:1', src: 'NT', w: [['Βίβλος', 'book'], ['γενέσεως', 'of the genealogy'], ['Ἰησοῦ', 'of Jesus'], ['Χριστοῦ', 'Christ (gen.)'], ['υἱοῦ', 'son (gen.)'], ['Δαυὶδ', 'of David'], ['υἱοῦ', 'son (gen.)'], ['Ἀβραάμ.', 'of Abraham']],
        en: 'The book of the genealogy of Jesus Christ, son of David, son of Abraham.',
        notes: ['A chain of genitives. Χριστοῦ and υἱοῦ end in -ου, the genitive singular.'] },
      { ref: 'Matt 17:15', src: 'NT', w: [['κύριε,', 'Lord (voc.)'], ['ἐλέησόν', 'have mercy on'], ['μου', 'my'], ['τὸν', 'the'], ['υἱόν', 'son (acc.)']],
        en: 'Lord, have mercy on my son.',
        notes: ['κύριε is vocative; τὸν υἱόν is accusative, the object of “have mercy on.”'] }
    ],
    ex: [
      { t: 'mc', q: 'Parse <span class="big">τὸν λόγον</span>.', o: ['accusative singular', 'nominative singular', 'genitive singular', 'accusative plural'], a: 0 },
      { t: 'mc', q: 'Parse <span class="big">λόγου</span>.', o: ['genitive singular', 'genitive plural', 'dative singular', 'nominative plural'], a: 0 },
      { t: 'mc', q: 'Parse <span class="big">θεῷ</span>.', o: ['dative singular', 'genitive singular', 'dative plural', 'accusative singular'], a: 0 },
      { t: 'mc', q: 'Parse <span class="big">ἀνθρώπους</span>.', o: ['accusative plural', 'genitive singular', 'nominative plural', 'dative plural'], a: 0 },
      { t: 'mc', q: 'Translate <span class="big">τὸν κόσμον βλέπει ὁ θεός</span>.', o: ['God sees the world.', 'The world sees God.', 'God and the world see.', 'The gods see the world.'], a: 0, x: 'ὁ θεός is nominative (subject); τὸν κόσμον is accusative (object). Word order does not decide.' },
      { t: 'mc', q: 'How do you say “of the brothers”?', o: ['τῶν ἀδελφῶν', 'τοῖς ἀδελφοῖς', 'τοὺς ἀδελφούς', 'τοῦ ἀδελφοῦ'], a: 0 },
      { t: 'mc', q: 'How do you say “to the servant”?', o: ['τῷ δούλῳ', 'τοῦ δούλου', 'τὸν δοῦλον', 'οἱ δοῦλοι'], a: 0 },
      { t: 'mc', q: 'Which form would you use to call out “O Lord!”?', o: ['κύριε', 'κύριος', 'κυρίου', 'κύριον'], a: 0 },
      { t: 'mc', q: 'What tells you that ὁδός is feminine?', o: ['The article ἡ in its dictionary entry', 'Its -ος ending', 'Its accent', 'Its rough breathing'], a: 0, x: 'The entry ὁδός, -οῦ, ἡ gives the feminine article.' },
      { t: 'mc', q: 'Translate <span class="big">τὸν νόμον γινώσκουσιν οἱ υἱοί</span>.', o: ['The sons know the law.', 'The law knows the sons.', 'The son knows the laws.', 'They know the law of the sons.'], a: 0 },
      { t: 'self', q: 'Translate:', gk: 'ὁ κύριος ἀκούει τοὺς λόγους τῶν ἀνθρώπων.', a: 'The Lord hears the words of the people.', x: 'ὁ κύριος (nom.) subject; τοὺς λόγους (acc. pl.) object; τῶν ἀνθρώπων (gen. pl.) “of the people.”' },
      { t: 'self', q: 'Translate:', gk: 'οἱ δοῦλοι λαμβάνουσι τὸν νόμον καὶ διδάσκουσι τὸν λαόν.', a: 'The servants receive the law and teach the people.', x: 'οἱ δοῦλοι is nominative plural, matching the plural verbs.' }
    ]
  });

})(window.COURSE);
