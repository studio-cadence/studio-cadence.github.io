// LP に出す数字・チャンネル・作品の正本。ページはここから表示する（手で HTML に数字や作品を書かない）。
// 公開後は channels/ の post-log から自動で書き出す予定（ADR-0006「更新は最初は手書き」）。
const SITE = {
  asOf: "2026-09-25",
  videos: 33,          // 公開・予約済みの本数（post-log のフォルダ数）
  channels: [          // 並びは本人の指定順。チャンネル数はこの件数。作品のタブもこの順
    ["日本むかしぐらし","平安から明治までの暮らしと食を、4 選で","UCKWY0Ai2NUilf4H8DW19GCA"],
    ["ゆる再現劇場","子育ての小さな事件を、ゆるい絵で再現","UCezfcf6CYuHm6coF37PWkTg"],
    ["一生を一分で","日本の人物の一生を、一分に","UCdCaTEi_OC7UaocLzs-KEGw"],
    ["秒でオチる","掲示板のスレ風、数秒で落ちるコント","UCH7ovCRZYDrn25HumOJzKuA"],
    ["小さな逆転劇","ネットに投稿された話を再構成した、漫画調の逆転劇","UCJhZRxZUDxgEJlm9YPkyxVQ"],
  ],
  // 大きく出す 3 本（本人 2026-09-25: 江戸の大工。残り 2 本は視聴を続けた割合で選んだ）
  featured: [
    {slug:"edo-daiku", note:"絵から起こした動きで始まる、江戸の 1 日"},
    {slug:"kuuki-yomeru", note:"スレ風のコントが、数秒で落ちる"},
    {slug:"otto-wo-maku", note:"よくある一場面を、ゆるい絵で"},
  ],
  // 作品。v は YouTube の動画 ID（空なら未公開 → チャンネルへ飛ぶ）。先頭 9 本が最初の画面に散らばる
  works: [
    {slug:"edo-sento",ch:"日本むかしぐらし",t:"湯銭は八文！？内風呂を持たねえ江戸っ子が毎日通った湯屋の中身4選",v:"LXnlg8FL-VY"},
    {slug:"oshiri-missile",ch:"ゆる再現劇場",t:"小児科で「解熱剤、いりますか？」と聞かれたら、次男が大声で…",v:"KzhysYy9_s0"},
    {slug:"katsushika-oi",ch:"一生を一分で",t:"北斎の家に、もう一人絵師がいた。",v:"Nm_BPmOMN6Q"},
    {slug:"kuuki-yomeru",ch:"秒でオチる",t:"面接で特技を聞かれた結果",v:"aGhoV8MCLXg"},
    {slug:"chuusha-kippu",ch:"小さな逆転劇",t:"払ったのに「未払い」。証拠を出しても却下。だが、私が送った先の返事で…",v:"hXMtxaZJGWk"},
    {slug:"yatai-meshi",ch:"日本むかしぐらし",t:"立ったまま腹いっぱい！？江戸っ子が通いつめた屋台メシ4選",v:"P5yaRXvdAc0"},
    {slug:"pokemon-kasa",ch:"ゆる再現劇場",t:"「パパの傘、借りるね」「そうしなー」の5分後、玄関で固まった",v:"0aMRNzEwA1Y"},
    {slug:"higuchi-ichiyo",ch:"一生を一分で",t:"五千円札になった女は、二十四で死んだ。",v:"5rJVUP-aQ6A"},
    {slug:"shihatsu",ch:"秒でオチる",t:"始発に一番乗りした結果",v:"6Z6jA7iWRuU"},
    {slug:"kasai-hochiki",ch:"小さな逆転劇",t:"「ほしけりゃ自分で買え」と大家。翌朝6時半、ドアを叩いたのは…",v:"_Vp2jlOyxv4"},
    {slug:"meiji-shin-meshi",ch:"日本むかしぐらし",t:"日本最古のカレーには蛙が入っていた！？明治に生まれた新メシ4選",v:"V9_iR0Fed8I"},
    {slug:"oyama-sutematsu",ch:"一生を一分で",t:"鶴ヶ城を撃った男に嫁いだ、会津の娘。",v:"Ii-Xx6A32rY"},
    {slug:"edo-daiku",ch:"日本むかしぐらし",t:"火事のたびに稼ぐ江戸の大工の1日ルーティン",v:""},
    {slug:"otto-wo-maku",ch:"ゆる再現劇場",t:"どんどん先に歩く夫。ママの解決策が斬新すぎた",v:"dAUroN7y55k"},
  ],
};
