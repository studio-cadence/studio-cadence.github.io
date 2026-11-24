// サイトに出す作品の正本。ページはここから表示する（手で HTML に作品を書かない）。
// 2026-11-24 刷新案（TASK-86）: チャンネルごとの並びと合計の数字をやめ、「表現の幅」ごとに作品へ直接つなぐ。
// 下の asOf・videos・views・top・statChannels はページには出さない。公開リポジトリの GitHub Actions（update-stats、毎日 6:00）が
// update_stats.py でこの行を書き換えるので、行が無いと Action が落ちる。残しておく。
const SITE = {
  asOf: "2026-11-24",
  // Data API 2026-11-24 の値。statChannels の公開本数・再生の合計と、works の中の 1 本の最高
  videos: 124,
  views: 1484486,
  top: 53508,
  statChannels: ["UCKWY0Ai2NUilf4H8DW19GCA","UCezfcf6CYuHm6coF37PWkTg","UCJhZRxZUDxgEJlm9YPkyxVQ"],

  // 代表作。数字と事実は profile/works/sekigahara.md
  featured: {
    slug: "sekigahara-long", v:"h7XYd8m5raA",
    t: "関ヶ原の敗軍・島津の兵は、どうやって薩摩に帰ったのか【完全版】",
    form: "横 16:9・長尺 約 12 分",
    note: "敗れた島津の兵が薩摩へ帰り着くまでを、横長の地図と図解、動きを付けた絵でたどる歴史解説。",
    made: ["台本","場面の絵（AI 画像）","絵の動き（Wan 2.2）","地図・図解","声（合成音声）","字幕","音量の調整・書き出し"],
    story: "短尺の制作の仕組みを土台に、長尺用の仕組み（横長の地図、長尺の字幕、音量をそろえる道具、静止画の動き付け）を足すところから公開までを、1 日で行いました。",
  },

  // 表現の幅。1 行 = 1 つの表現。v は YouTube の動画 ID（long は /watch、それ以外は /shorts）。img は静止画だけの見本
  styles: [
    {name:"解説ショート", form:"縦 9:16・約 30 秒", note:"写実寄りの絵とナレーション、大きな字幕で、一つの問いに答える。", tags:["AI 画像","合成音声","字幕・ふりがな"],
     works:[
      {slug:"sanketsu-meshi", t:"信長・秀吉・家康 一番質素なメシは誰だった", v:"eqBeNBTt4SU"},
      {slug:"heian-shokutaku", t:"平安貴族の食卓 今ならアウトな作法", v:"lAmeR5jfqzQ"},
      {slug:"sumo-meshi", t:"江戸の巨人力士が 殿様の前で食った量", v:"jn9gZhtsKYA"},
      {slug:"kamakura-meshi", t:"鎌倉武士のメシ 執権の酒の肴は何だった", v:"JPmYG9MT2Rc"},
     ]},
    {name:"YouTube 漫画", form:"横 16:9・見本 53 秒", note:"アニメ調の絵に縦書きの吹き出し。台詞とナレーションに声と BGM を付けて動画にする。同じ人物の顔は最後までそろえる。", tags:["AI 画像","縦書きの吹き出し","声・BGM"],
     wide:true, href:"request/#samples",
     works:[
      {img:"request/manga-1.jpg", t:"『移動パン屋と、あんパン2つ』から"},
      {img:"request/manga-2.jpg", t:"同じ人物で、場面を続ける"},
      {img:"request/manga-3.jpg", t:"台詞は縦書きの吹き出しに"},
     ]},
    {name:"漫画調の再現ドラマ", form:"縦 9:16・ショート", note:"やわらかい漫画の絵で、日常の一場面を台詞とナレーションで再現する。", tags:["漫画調の絵","台詞の掛け合い","効果音"],
     works:[
      {slug:"unko-oukoku", t:"うんこを連呼する子どもに、母が静かに言った一言", v:"OZTtLwuEd74"},
      {slug:"pokemon-kasa", t:"「パパの傘、借りるね」「そうしなー」の5分後、玄関で固まった", v:"0aMRNzEwA1Y"},
      {slug:"oshiri-missile", t:"小児科で「解熱剤、いりますか？」と聞かれたら、次男が大声で…", v:"KzhysYy9_s0"},
     ]},
    {name:"劇画の逆転劇", form:"縦 9:16・ショート", note:"白黒の劇画で、体験談の起伏をナレーションで運ぶ。", tags:["白黒の劇画","ナレーション","山場の演出"],
     works:[
      {slug:"chuusha-kippu", t:"払ったのに「未払い」。証拠を出しても却下。だが、私が送った先の返事で…", v:"hXMtxaZJGWk"},
      {slug:"kasai-hochiki", t:"「ほしけりゃ自分で買え」と大家。翌朝6時半、ドアを叩いたのは…", v:"_Vp2jlOyxv4"},
     ]},
  ],

  // 動画の外の見本。profile/works/react-shadcn-portfolio.md（AI の人物と声の見本として URL つきで示してよい。動画のリップシンク作品とは書かない）
  avatar: {name:"AI の人物と声", form:"Web の案内役", note:"AI で作った人物に声を合わせ、あいさつ・待機・話す動きを切り替えて、作品を案内する分身。", href:"https://higgs1729.github.io/react-shadcn/"},
};
