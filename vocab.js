var verbs_ichidan = [
  new Term(['あ','ける'], ['開',''], 'to open'),
  new Term(['あげる'], [''], 'to give'),
  new Term(['あつ','める'], ['集',''], 'to gather; to collect'),
  new Term(['あ','びる'], ['浴',''], 'to bathe; to take a shower'),
  new Term(['あわ','てる'], ['慌',''], 'to panic; to be flustered'),
  new Term(['い','い','つ','ける'], ['言','','付',''], 'to command; to order; to tell on someone'),
  new Term(['い','きる'], ['生',''], 'to be alive'),
  new Term(['いじ','める'], ['虐',''], 'to torment; to bully'),
  new Term(['いまし','める'], ['戒',''], 'to admonish'),
  new Term(['い','る'], ['居',''], 'to exist; to be'),
  new Term(['い','れる'], ['入',''], 'to insert; to put in'),
  new Term(['う','まれる'], ['生',''], 'to be born'),
  new Term(['え','る'], ['得',''], 'to obtain; to get'),
  new Term(['お','きる'], ['起',''], 'to wake up; to occur'),
  new Term(['おく','れる'], ['遅',''], 'to be late; to lag behind'),
  new Term(['おさ','える'], ['抑',''], 'to restrain; to control'),
  new Term(['おし','える'], ['教',''], 'to teach; to inform'),
  new Term(['おそ','れる'], ['恐',''],  'to fear'),
  new Term(['お','ちる'], ['落',''], 'to fall; to fail'),
  new Term(['おぼ','える'], ['覚',''], 'to remember; to learn'),
  new Term(['お','りる'], ['降',''], 'to alight, to descend'),
  new Term(['お','れる'], ['折',''], 'to be broken; to snap'),
  new Term(['か','える'], ['変',''], 'to change'),
  new Term(['か','える'], ['換',''], 'to change (clothes)'),
  new Term(['かか','える'], ['抱',''], 'to hold (in your arms), have')
  new Term(['かか','げる'], ['掲',''], 'to raise (a flag); to hold up'),
  new Term(['かける'], [''], 'to hang; to call on the phone; to risk'),
  new Term(['かさ','ねる'], ['重',''], 'to pile up; to repeat'),
  new Term(['かじ','る'], ['齧',''], 'to gnaw; to nibble'),
  new Term(['かぞ','える'], ['数',''], 'to count'),
  new Term(['かた','づ','ける'], ['片','付','ける'], 'to finish; to tidy up'),
  new Term(['かた','める'], ['固',''], 'to strengthen; to harden'),
  new Term(['かま','える'], ['構',''], 'to set up; to prepare in advance'),
  new Term(['か','りる'], ['借',''], 'to borrow; to rent'),
  new Term(['か','れる'], ['枯',''],  'to wither'),
  new Term(['かんが','える'], ['考',''], 'to think'),
  new Term(['かん','じる'], ['感',''], 'to feel; to sense'),
  new Term(['き','える'], ['消',''], 'to vanish; to disappear; to be extinguished'),
  new Term(['き','こえる'], ['聞',''], 'to be audible; to be able to hear'),
  new Term(['きず','つける'], ['傷',''], 'to wound; to damage; to harm'),
  new Term(['き','める'], ['決',''], 'to decide'),
  new Term(['き','る'], ['着',''], 'to wear'),
  new Term(['き','れる'], ['切',''], 'to break; to cut off; to expire'),
  new Term(['きん','じる'], ['禁',''], 'to ban; to prohibit'),
  new Term(['くず','れる'], ['崩',''], 'to collapse; to cave in'),
  new Term(['くら','べる'], ['比',''], 'to compare'),
  new Term(['くる','しめる'], ['苦',''], 'to inflict pain; to torment'),
  new Term(['く','れる'], ['呉',''], 'to give'),
  new Term(['く','れる'], ['暮',''], 'to grow dark (at night)'),
  new Term(['くわ','える'], ['加',''], 'to add to; to include'),
  new Term(['くわだ','てる'], ['企',''], 'to plan; to scheme'),
  new Term(['こ','げる'], ['焦',''], 'to be burned; to become charred'),
  new Term(['こし','か','ける'], ['腰','掛',''], 'to sit (western style)'),
  new Term(['こしら','える'], ['拵',''], 'to make; to manufacture'),
  new Term(['こた','える'], ['答',''], 'to answer'),
  new Term(['こぼれる', [''], 'to spill; to overflow'),
  new Term(['こわ','れる'], ['壊',''], 'to break'),
  new Term(['さ','ける'], ['避',''], 'to avoid; to dodge'),
  new Term(['さ','げる'], ['下',''], 'to lower; to hang'),
  new Term(['ささ','える'], ['支',''], 'to support'),
  new Term(['さだ','める'], ['定',''], 'to decide; to establish'),
  new Term(['さまた','げる'], ['妨',''], 'to hinder; to obstruct'),
  new Term(['し','める'], ['閉',''], 'to shut'),
  new Term(['し','らせる'], ['知',''], 'to notify'),
  new Term(['しら','べる'], ['調',''], 'to check; to investigate'),
  new Term(['しん','じる'], ['信',''], 'to believe; to trust'),
  new Term(['す','ぎる'], ['過',''], 'to pass; to exceed'),

  // TODO(andrea): finish converting
  // new Term(['すぐれる'], ['優れる'], ['れる'], 'to excel, be excellent, be superior'),
  // new Term(['すてる'], ['捨てる'], ['てる'], 'to throw away'),
  // new Term(['そだてる'], ['育てる'], ['てる'], 'to bring up a child, train'),
  // new Term(['そだてる'], ['育てる'], ['てる'], 'to rear, to bring up'),
  // new Term(['たおれる'], ['倒れる'], ['れる'], 'to fall down, collapse'),
  // new Term(['たくわえる'], ['蓄える'], ['える'], 'to save money, put aside, store'),
  // new Term(['たすける'], ['助ける'], ['ける'], 'to help'),
  // new Term(['たてる'], ['立てる'], ['てる'], 'to build'),
  // new Term(['たべる'], ['食べる'], ['べる'], 'to eat'),
  // new Term(['ためる', null, null, 'to save, store, accumulate'),
  // new Term(['たりる'], ['足りる'], ['りる'], 'to be enough, suffient'),
  // new Term(['つかれる'], ['疲れる'], ['れる'], 'to get tired'),
  // new Term(['つける'], ['点ける'], ['ける'], 'to turn on, light'),
  // new Term(['つづける'], ['続ける'], ['ける'], 'to continue, proceed'),
  // new Term(['つとめる'], ['勤める'], ['める'], 'to work for'),
  // new Term(['つよめる'], ['強める'], ['める'], 'to strengthen'),
  // new Term(['つれる'], ['連れる'], ['れる'], 'to lead'),
  // new Term(['でかける'], ['出かける'], ['かける'], 'to go out, leave home'),
  // new Term(['できる'], ['出来る'], ['る'], 'to be able'),
  // new Term(['でる'], ['出る'], ['る'], 'to leave; to come out'),
  // new Term(['とめる'], ['止める'], ['める'], 'to stop, fasten'),
  // new Term(['とりかえる'], ['取り換える'], ['える'], 'to exchange'),
  // new Term(['とれる'], ['取れる'], ['れる'], 'to come off'),
  // new Term(['ながめる'], ['眺める'], ['める'], 'to watch, view'),
  // new Term(['ながれる'], ['流れる'], ['れる'], 'to flow, be called off'),
  // new Term(['なぐさめる'], ['慰める'], ['める'], 'to comfort, console'),
  // new Term(['なげる'], ['投げる'], ['げる'], 'to throw away'),
  // new Term(['なまける'], ['怠ける'], ['ける'], 'to be lazy'),
  // new Term(['なめる'], ['舐める'], ['める'], 'to lick'),
  // new Term(['ならべる'], ['並べる'], ['べる'], 'to line up, list, arrange in order'),
  // new Term(['なれる'], ['慣れる'], ['れる'], 'to get used to, become familiar with'),
  // new Term(['にげる'], ['逃げる'], ['げる'], 'to run away, escape'),
  // new Term(['にる'], ['似る'], ['る'], 'to resemble, be similar to'),
  // new Term(['ぬれる'], ['濡れる'], ['れる'], 'to become wet'),
  // new Term(['ねる'], ['寝る'], ['る'], 'to sleep, go to bed'),
  // new Term(['のせる', null, null, 'to put on top off, put on board'),
  // new Term(['のりかえる'], ['乗り換える'], ['える'], 'to transit'),
  // new Term(['はじめる'], ['始める'], ['める'], 'to begin'),
  // new Term(['はずれる'], ['外れる'], ['れる'], 'to come off, go wide'),
  // new Term(['はれる'], ['晴れる'], ['れる'], 'to clear up, tidy up'),
  // new Term(['ひきうける'], ['引き受ける'], ['ける'], 'to take charge of'),
  // new Term(['ひろめる'], ['広める'], ['める'], 'to spread, make popular'),
  // new Term(['ふえる'], ['増える'], ['える'], 'to increase'),
  // new Term(['ふせる'], ['伏せる'], ['せる'], 'to lay face down'),
  // new Term(['ふれる'], ['触れる'], ['れる'], 'to touch'),
  // new Term(['ぶつける', null, null, 'to hit against, throw at'),
  // new Term(['へる'], ['減る'], ['る'], 'to pass through, go by'),
  // new Term(['ほどける'], ['解ける'], ['ける'], 'to come untied, loose'),
  // new Term(['ほめる'], ['褒める'], ['める'], 'to praise'),
  // new Term(['ほれる'], ['惚れる'], ['れる'], 'to fall in love'),
  // new Term(['まける'], ['負ける'], ['ける'], 'to be defeated, lose a game'),
  // new Term(['まげる'], ['曲げる'], ['げる'], 'to bend, twist'),
  // new Term(['まぜる'], ['混ぜる'], ['ぜる'], 'to mix'),
  // new Term(['まちがえる'], ['間違える'], ['える'], 'to make a mistake'),
  // new Term(['みえる'], ['見える'], ['える'], 'to be visible, able to see'),
  // new Term(['みせる'], ['見せる'], ['せる'], 'to show'),
  // new Term(['みつける'], ['見つける'], ['つける'], 'to find'),
  // new Term(['みとめる'], ['認める'], ['める'], 'to admit, recognize'),
  // new Term(['みる'], ['見る'], ['る'], 'to look'),
  // new Term(['むかえる'], ['迎える'], ['える'], 'to greet, meet, welcome'),
  // new Term(['もうける'], ['儲ける'], ['ける'], 'to profit, make money'),
  // new Term(['もてる', null, null, 'to be popular'),
  // new Term(['もとめる'], ['求める'], ['める'], 'to request, seek, buy, ask'),
  // new Term(['もれる'], ['漏れる'], ['れる'], 'to leak, escape'),
  // new Term(['やける'], ['焼ける'], ['ける'], 'to burn'),
  // new Term(['やめる'], ['辞める'], ['める'], 'to stop, give up, resign'),
  // new Term(['わかれる'], ['別れる'], ['れる'], 'to part, separate from, be divided, divorced'),
  // new Term(['わすれる'], ['忘れる'], ['れる'], 'to forget'),
];

var verbs_godan = [
  new Term(['わら','う'], ['笑',''], 'to laugh')
];

var adjective_i = [
  new Term(['あお','い'], ['青',''], 'blue')
];

var adjective_na = [
  new Term(['す','き'], ['好'], 'like; love')
];
