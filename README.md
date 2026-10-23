# ノジマ イオンモール成田店 フロアマップ・商品相談

## 🌐 公開中のサイト
**https://information000.github.io/Nojima/** （ホーム）

- エリア：[家電](https://information000.github.io/Nojima/kaden/) ／ [季節・AV](https://information000.github.io/Nojima/season-av/) ／ [情報](https://information000.github.io/Nojima/info/) ／ [通信](https://information000.github.io/Nojima/tsushin/)
- 商品：[冷蔵庫](https://information000.github.io/Nojima/fridge/) ／ [洗濯機](https://information000.github.io/Nojima/washer/) ／ [炊飯器](https://information000.github.io/Nojima/rice/) ／ [電子レンジ](https://information000.github.io/Nojima/microwave/) ／ [オーブン](https://information000.github.io/Nojima/oven/) ／ [ドライヤー](https://information000.github.io/Nojima/dryer/) ／ [ヘアアイロン](https://information000.github.io/Nojima/iron/) ／ [シェーバー](https://information000.github.io/Nojima/shaver/) ／ [電動歯ブラシ](https://information000.github.io/Nojima/toothbrush/) ／ [エアコン](https://information000.github.io/Nojima/aircon/) ／ [テレビ](https://information000.github.io/Nojima/tv/) ／ [パソコン](https://information000.github.io/Nojima/pc/) ／ [プリンター](https://information000.github.io/Nojima/printer/)

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

## 店舗ごとに内容を分ける
- ホームのスタート画面「あなたのノジマの店舗は？」で、店舗を選ぶ・ノジマの店舗名で作る・手入力で新しい店舗や個人名で作ることができます（毎回パスワード staff2026 が必要）。
- 店舗を切り替えると、ホーム・各エリア・各商品ページの編集内容（マップ・商品・在庫・ヒアリング）がその店舗用に分かれて保存されます。ほかの店舗には影響しません。
- その店舗の内容を公開するには、書き出したファイルを `stores/<店舗ID>/` に置きます（詳しくは [stores/README.md](stores/README.md)）。

