// サイトに出す作品の正本。ページはここから表示する（手で HTML に作品を書かない）。
// 2026-11-24 刷新案（TASK-86）: チャンネルごとの並びと合計の数字をやめる。
// 11/24 本人: 見本は関ヶ原 1 本と、表現の幅を見せる短いデモ 1 本だけ。
// 下の asOf・videos・views・top・statChannels はページには出さない。公開リポジトリの GitHub Actions（update-stats、毎日 6:00）が
// update_stats.py でこの行を書き換えるので、行が無いと Action が落ちる。残しておく。
const SITE = {
  asOf: "2026-11-26",
  // Data API 2026-11-26 の値。statChannels の公開本数・再生の合計と、works の中の 1 本の最高
  videos: 122,
  views: 1492465,
  top: 53528,
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

  // 見本 0（先頭）: デモリール v12（2026-11-26 本人合格。元 C:/dev/video/studio-cadence-demo/production/reel-v1/out/web、43.67 秒）。
  // 事実は profile/works/cadence-reel.md。題は CW の公開プロフィールの項目「デモリール：作れる映像の幅（43秒）」と同じ。
  // リールを差し替えたら demo/ の 2 つと len・made を直す。src が空のあいだは poster の上に「準備中」を出す
  demo: {
    src: "demo/cadence-reel.mp4", poster: "demo/cadence-reel.jpg", len: "0:43",
    t: "デモリール：作れる映像の幅（43秒）",
    form: "横 16:9・43 秒",
    note: "題材に合わせて描き分けた映像を、1 本のリールにまとめました。左下の札が、その場面の種類です。",
    made: ["長尺ドキュメンタリー","地図で語る解説","YouTube 漫画","解説ショート","図解","実写調の映像","ゲーム内の巨大建築","AI キャスト","切り抜き"],
  },
};
