// サイトに出す作品の正本。ページはここから表示する（手で HTML に作品を書かない）。
// 2026-11-24 刷新案（TASK-86）: チャンネルごとの並びと合計の数字をやめる。
// 11/24 本人: 見本は関ヶ原 1 本と、表現の幅を見せる短いデモ 1 本だけ。
// 下の asOf・videos・views・top・statChannels はページには出さない。公開リポジトリの GitHub Actions（update-stats、毎日 6:00）が
// update_stats.py でこの行を書き換えるので、行が無いと Action が落ちる。残しておく。
const SITE = {
  asOf: "2026-11-24",
  // Data API 2026-11-24 の値。statChannels の公開本数・再生の合計と、works の中の 1 本の最高
  videos: 124,
  views: 1484486,
  top: 53508,
  statChannels: ["UCKWY0Ai2NUilf4H8DW19GCA","UCezfcf6CYuHm6coF37PWkTg","UCJhZRxZUDxgEJlm9YPkyxVQ"],

  // 見本 1。数字と事実は profile/works/sekigahara.md
  featured: {
    slug: "sekigahara-long", v:"h7XYd8m5raA",
    t: "関ヶ原の敗軍・島津の兵は、どうやって薩摩に帰ったのか【完全版】",
    form: "横 16:9・長尺 約 12 分",
    note: "敗れた島津の兵が薩摩へ帰り着くまでを、横長の地図と図解、動きを付けた絵でたどる歴史解説。",
    made: ["台本","場面の絵（AI 画像）","絵の動き（Wan 2.2）","地図・図解","声（合成音声）","字幕","音量の調整・書き出し"],
    story: "短尺の制作の仕組みを土台に、長尺用の仕組み（横長の地図、長尺の字幕、音量をそろえる道具、静止画の動き付け）を足すところから公開までを、1 日で行いました。",
  },

  // 見本 2: 表現の幅のデモ（別の担当が作る）。できたら src に動画のパス（例 "works/demo.mp4"）を入れ、poster を差し替える。
  // src が空のあいだは poster の上に「デモ動画は準備中」を出す
  demo: {
    src: "", poster: "request/manga-1.jpg",
    t: "表現の幅のデモ",
    form: "短尺のデモ（準備中）",
    // note はデモの中身が決まったら合わせて直す
    note: "同じ仕組みで作り分けた絵柄・尺・語り口を、1 本の短い動画にまとめています。",
  },
};
