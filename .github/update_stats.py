# site.js の数字（公開本数・累計再生・1 本の最高・時点）を YouTube Data API で取り直して書き換える。
# 鍵は環境変数 YT_API_KEY。GitHub Actions（公開リポジトリの Secret）と publish_site.ps1（手元）の両方から呼ぶ。
# 引数: site.js のパス（既定はこのフォルダの site.js）。取れなかったときは書き換えずに終了コード 1。
import json, os, re, sys, pathlib, urllib.request, urllib.parse
from datetime import datetime, timedelta, timezone

path = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else pathlib.Path(__file__).parent / "site.js")
key = os.environ.get("YT_API_KEY")
if not key:
    sys.exit("YT_API_KEY がありません")
s = path.read_text(encoding="utf-8")
channels = re.findall(r'"(UC[\w-]{22})"', re.search(r"statChannels:\s*\[(.*?)\]", s).group(1))
videos = re.findall(r'\bv:"([\w-]{11})"', s)
assert channels and videos, "site.js から statChannels と works の動画 ID を読めない"

def api(endpoint, ids):
    q = urllib.parse.urlencode({"part": "statistics", "id": ",".join(ids), "key": key})
    with urllib.request.urlopen(f"https://www.googleapis.com/youtube/v3/{endpoint}?{q}", timeout=30) as r:
        return json.load(r)["items"]

c = api("channels", channels)
if len(c) != len(channels):
    sys.exit(f"チャンネルが {len(c)}/{len(channels)} しか返らない")
v = [x for i in range(0, len(videos), 50) for x in api("videos", videos[i:i + 50])]
new = {
    "videos": sum(int(x["statistics"].get("videoCount", 0)) for x in c),
    "views": sum(int(x["statistics"].get("viewCount", 0)) for x in c),
    "top": max(int(x["statistics"].get("viewCount", 0)) for x in v),
}
today = datetime.now(timezone(timedelta(hours=9))).strftime("%Y-%m-%d")
s = re.sub(r'asOf: "[\d-]+"', f'asOf: "{today}"', s, count=1)
s = re.sub(r"// Data API [\d-]+ の値", f"// Data API {today} の値", s, count=1)
for k, n in new.items():
    s, hit = re.subn(rf"^(\s*){k}: \d+,", rf"\g<1>{k}: {n},", s, count=1, flags=re.M)
    assert hit == 1, f"site.js に {k} の行が無い"
path.write_text(s, encoding="utf-8", newline="\n")
print(today, new)
