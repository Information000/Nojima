# ノジマ イオンモール成田店 フロアマップ・商品相談

GitHub Pages でそのまま公開できる静的サイトです（ビルド不要）。

ページごとに別のURLで公開しています（例：`https://information000.github.io/Nojima/fridge/`）。

- `index.html` … ホーム（フロアマップ）
- エリア：`kaden/`（家電）・`season-av/`（季節・AV）・`info/`（情報）・`tsushin/`（通信）
- 商品：`fridge/` `washer/` `rice/` `microwave/` `oven/` `dryer/` `iron/` `shaver/` `toothbrush/` `aircon/` `tv/` `pc/` `printer/`
- 各フォルダの `index.html` が本体です（ページ内のリンクは `<base href="../">` でサイトの一番上を基準にしています）
- `area-*.html`・`product-*.html` … 以前のURL用の転送ページ（新しいURLへ自動で移動）
- `js/` … 各ページの .js コピー

各商品ページの上のバー「🔐 在庫管理」から、在庫の追加・更新（電子プライスの写真読み取り）とヒアリング設定ができます（暗証番号：staff2026）。
※暗証番号はページのソースに含まれるため、簡易的な目隠しです。

## 公開手順
在庫管理の「HTMLを書き出し」で保存したファイルは、該当フォルダの `index.html` と差し替えてください。

Settings → Pages → Source を「Deploy from a branch」、Branch を `main` / `(root)` にして保存。
