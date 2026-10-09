// LP に出す数字・チャンネル・作品の正本。ページはここから表示する（手で HTML に数字や作品を書かない）。
// 数字は公開リポジトリの GitHub Actions（update-stats、毎日 6:00）と publish_site.ps1 が update_stats.py で書き換える。鍵はページに出さない。
const SITE = {
  asOf: "2026-10-09",
  // Data API 2026-10-09 の値。statChannels の公開本数・再生の合計と、works の中の 1 本の最高
  videos: 47,
  views: 233188,
  top: 39613,
  // 数字に数えるチャンネル（今のチャンネル＋過去作のチャンネル）
  statChannels: ["UCKWY0Ai2NUilf4H8DW19GCA","UCezfcf6CYuHm6coF37PWkTg","UCJhZRxZUDxgEJlm9YPkyxVQ"],
  // 今動いているチャンネル。[名前, 一言, チャンネル ID]。作品のタブはこの順の後ろに「これまでの作品」
  channels: [
    ["日本むかしぐらし","平安から明治までの暮らしと食を、ショートと長尺で","UCKWY0Ai2NUilf4H8DW19GCA"],
  ],
  // 過去作（更新を終えたチャンネル）。チャンネルへのリンクは出さない
  past: {name:"これまでの作品", note:"漫画調の再現ドラマと逆転劇"},
  // 大きく出す 3 本（本人 2026-10-07: 関ヶ原の長尺、大工の摂取カロリーは暫定、漫画調はうんこ）
  featured: [
    {slug:"sekigahara-long", note:"12 分の長尺。地図と動く絵で、敗軍の帰り道を追う"},
    {slug:"calorie-tsumiage", note:"食べた順に足していく、江戸の大工の 1 日"},
    {slug:"unko-oukoku", note:"子育ての一場面を、漫画調の絵で"},
  ],
  // 作品。v は YouTube の動画 ID、long は長尺（/watch で開く）。past は過去作。先頭 9 本が最初の画面に散らばる
  works: [
    {slug:"mibun-ranking",ch:"日本むかしぐらし",t:"江戸のメシ、身分で比べたら格差がエグすぎた",v:"XvihSH8UE0o"},
    {slug:"unko-oukoku",ch:"ゆる再現劇場",past:true,t:"うんこを連呼する子どもに、母が静かに言った一言",v:"OZTtLwuEd74"},
    {slug:"sekigahara-long",ch:"日本むかしぐらし",long:true,t:"関ヶ原の敗軍・島津の兵は、どうやって薩摩に帰ったのか【完全版】",v:"h7XYd8m5raA"},
    {slug:"daiku-gati",ch:"日本むかしぐらし",t:"【高給取り】江戸時代の大工、ガチの1日に密着。",v:"0JKEmJPDd7U"},
    {slug:"chuusha-kippu",ch:"小さな逆転劇",past:true,t:"払ったのに「未払い」。証拠を出しても却下。だが、私が送った先の返事で…",v:"hXMtxaZJGWk"},
    {slug:"hinawaju",ch:"日本むかしぐらし",t:"戦国最強の武器「火縄銃」のからくり",v:"YJy6xOED7z0"},
    {slug:"oshiri-missile",ch:"ゆる再現劇場",past:true,t:"小児科で「解熱剤、いりますか？」と聞かれたら、次男が大声で…",v:"KzhysYy9_s0"},
    {slug:"calorie-tsumiage",ch:"日本むかしぐらし",t:"江戸の大工、意外な一日の摂取カロリー",v:"iJbt9q7Gppc"},
    {slug:"okazu-banzuke",ch:"日本むかしぐらし",t:"【実在の番付】江戸の庶民、「おかず」ランキングTOP3",v:"ZnFgd3yLVy8"},
    {slug:"calorie-bomb",ch:"日本むかしぐらし",t:"江戸のカロリー爆弾、本当の爆弾は別にあった",v:"zFIS4PGGaFc"},
    {slug:"tempura-yatai",ch:"日本むかしぐらし",t:"【1本4文】江戸の天ぷら屋台、ガチの1日に密着。",v:"Zd8HbM7oMxc"},
    {slug:"sekigahara-ashigaru",ch:"日本むかしぐらし",t:"関ヶ原の敗軍・島津の兵は、どうやって薩摩に帰ったのか",v:"z2RAarNE96w"},
    {slug:"bannshirou-nikki",ch:"日本むかしぐらし",t:"【実在の日記】166年前の侍、ある1日の晩飯事情。",v:"G3x8nj3ytkI"},
    {slug:"pet-hashigo",ch:"日本むかしぐらし",t:"江戸のペット 0文 vs 年200両",v:"m5t4gMh1wr4"},
    {slug:"meiji-shin-meshi",ch:"日本むかしぐらし",t:"日本最古のカレーには蛙が入っていた！？明治に生まれた新メシ4選",v:"gzncVBDkS0g"},
    {slug:"yatai-meshi",ch:"日本むかしぐらし",t:"立ったまま腹いっぱい！？江戸っ子が通いつめた屋台メシ4選",v:"P5yaRXvdAc0"},
    {slug:"edo-sento",ch:"日本むかしぐらし",t:"湯銭は八文！？内風呂を持たねえ江戸っ子が毎日通った湯屋の中身4選",v:"LXnlg8FL-VY"},
    {slug:"pokemon-kasa",ch:"ゆる再現劇場",past:true,t:"「パパの傘、借りるね」「そうしなー」の5分後、玄関で固まった",v:"0aMRNzEwA1Y"},
    {slug:"otto-wo-maku",ch:"ゆる再現劇場",past:true,t:"どんどん先に歩く夫。ママの解決策が斬新すぎた",v:"rhDcmpghB0w"},
    {slug:"kasai-hochiki",ch:"小さな逆転劇",past:true,t:"「ほしけりゃ自分で買え」と大家。翌朝6時半、ドアを叩いたのは…",v:"_Vp2jlOyxv4"},
  ],
};
