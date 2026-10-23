<!DOCTYPE html>
<html lang="ja">
<head>
<script id="nj-store-js">
/* =====================================================================
   店舗の切り替え（ホームのスタート画面で選んだ店舗ごとに内容を分ける）
   ・この端末で選んだ店舗：localStorage の fg-registry-v1（current）
   ・成田店（narita）… このHTMLに入っている内容がそのまま公開データ
   ・ほかの店舗 … GitHub の stores/<店舗ID>/ に置いたデータだけがその店舗に反映
   ===================================================================== */
window.NJ_STORE = (function () {
  "use strict";
  var DEF = "narita", REL = "../";
  function get(k) { try { return JSON.parse(localStorage.getItem(k) || "null"); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, typeof v === "string" ? v : JSON.stringify(v)); return true; } catch (e) { return false; } }
  function nm(o) { return o ? (typeof o === "string" ? o : o.ja || o.en || "") : ""; }
  var reg = get("fg-registry-v1"), id = (reg && reg.current) || DEF, sd = get("fg-store-" + id);
  var b = sd && sd.store ? nm(sd.store.brand) : "", n = sd && sd.store ? nm(sd.store.name) : "";
  var name = n ? (b && n.indexOf(b) !== 0 ? b + " " + n : n) : (id === DEF ? "ノジマ イオンモール成田店" : id);
  var isDef = id === DEF;
  function key(k) { return isDef ? k : k.replace(/-v1$/, "") + "-" + id + "-v1"; }   // 店舗ごとの保存場所
  function site() { return new URL(REL, location.href).href; }
  function pubKey(f) { return "nj-pub-" + id + "-" + f; }
  function pub(f) { return isDef ? null : get(pubKey(f)); }
  // GitHub の stores/<店舗ID>/<ファイル> を確認し、新しければ保存して1回だけ読み込み直す
  function sync(f, apply) {
    if (isDef || !window.fetch) return;
    var g = "nj-reloaded-" + id + "-" + f;
    fetch(site() + "stores/" + encodeURIComponent(id) + "/" + f + "?t=" + Date.now(), { cache: "no-store" }).then(function (r) { return r.ok ? r.text() : null; }).then(function (t) {
      if (!t) return;
      if (localStorage.getItem(pubKey(f)) === t) { try { sessionStorage.removeItem(g); } catch (e) {} return; }
      var d; try { d = JSON.parse(t); } catch (e) { return; }
      set(pubKey(f), t); if (apply) try { apply(d); } catch (e) {}
      try { if (sessionStorage.getItem(g)) return; sessionStorage.setItem(g, "1"); } catch (e) {}
      location.reload();
    }).catch(function () {});
  }
  return { id: id, name: name, isDefault: isDef, DEF: DEF, key: key, pub: pub, sync: sync, site: site, get: get, set: set };
})();
</script>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes, viewport-fit=cover">
<title>洗濯機の相談 | イオンモール成田店</title>
<style id="product-shell-css">
*{box-sizing:border-box;margin:0;padding:0;font-family:Plus Jakarta Sans,Noto Sans JP,Noto Sans SC,sans-serif;-webkit-tap-highlight-color:transparent}
html,body{width:100%;max-width:100%;overflow-x:hidden}
body{background:linear-gradient(160deg,#e8f0ff,#f8fafc 45%,#eef2ff);color:#0f172a;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:16px}
.pg-card{background:#fff;border:1px solid #e2e8f0;border-radius:18px;padding:28px 22px;max-width:420px;width:100%;text-align:center;box-shadow:0 10px 30px #0f172a14}
.pg-ico{font-size:2.6rem}
.pg-ttl{font-size:1.3rem;font-weight:800;margin:8px 0 18px}
.pg-btn{display:block;width:100%;padding:14px;border-radius:12px;border:none;font-size:1rem;font-weight:700;cursor:pointer;text-decoration:none;margin-top:8px}
.pg-btn.main{background:#ea580c;color:#fff}
.pg-btn.sub{background:#f1f5f9;color:#0f172a}
#modal,#modal-link-btn,#lang-switcher{display:none}
.fr-rec,.sv-rec{position:relative}
.ht-heart{position:absolute;top:8px;right:8px;z-index:5;width:48px;height:48px;border-radius:50%;border:2px solid #fecdd3;background:#fff;color:#e11d48;font-size:1.5rem;line-height:1;cursor:pointer;box-shadow:0 2px 8px #0f172a24;display:flex;align-items:center;justify-content:center;padding:0;transition:transform .2s}
.ht-heart:active{transform:scale(.9)}
.ht-heart[aria-pressed=true]{background:#e11d48;border-color:#e11d48;color:#fff;animation:htPop .5s cubic-bezier(.34,1.56,.64,1)}

@keyframes htPop {
  0% {
    transform: scale(.6);
  }
  60% {
    transform: scale(1.25);
  }
  to {
    transform: scale(1);
  }
}
</style>
<!-- ホーム側にあった相談アプリ向けの調整CSS（スマホ・タブレット対応など） -->
<style id="app-adapt-css">
.fr-rec,
.sv-rec {
  position: relative;
}
.ht-heart {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 5;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #fecdd3;
  background: #fff;
  color: #e11d48;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 2px 8px #0f172a24;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: transform .2s;
}
.ht-heart:active {
  transform: scale(.9);
}
.ht-heart[aria-pressed=true] {
  background: #e11d48;
  border-color: #e11d48;
  color: #fff;
  animation: htPop .5s cubic-bezier(.34,1.56,.64,1);
}
@media (prefers-reduced-motion:reduce) {
.ht-heart {
    animation: none!important;
    transition: none!important;
  }
}
body.motion-off .ht-heart {
  animation: none!important;
  transition: none!important;
}
.fr-head,
.sv-head {
  padding-right: 56px;
}
.fr-name,
.sv-name {
  overflow-wrap: anywhere;
}
@media (max-width:430px) {
.sv-top {
    flex-wrap: wrap;
    row-gap: 4px;
    padding: calc(8px + env(safe-area-inset-top,0px)) 12px 8px;
  }
.sv-top b {
    order: 9;
    flex: 1 0 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
.sv-pill {
    margin-left: auto;
  }
}
@media (max-width:599px) {
.fr-wrap {
    padding-left: 12px;
    padding-right: 12px;
  }
}
@media (min-width:600px)and (max-width:1024px) {
.fr-wrap {
    max-width: 820px;
    padding-left: 24px;
    padding-right: 24px;
  }
}
html[data-device=tablet] .fr-wrap {
  max-width: 820px;
}
@media (min-width:1025px)and (hover:hover) {
.fr-wrap {
    max-width: 900px;
  }
}
</style>
</head>
<body data-lang="ja" data-dept="home" data-product="washer">
<!-- ======================================================================
     ▼▼▼ 在庫データ（洗濯機）▼▼▼
     ・1商品 = items の中の { } ひとつ。型番・価格・スペック・大きさ・リンクなど
     ・status: "active"=販売中 / "ended"=販売終了（相談に出なくなる）
     ・links: type は "official"(メーカー公式HP) / "manual"(取扱説明書) / "ref"(参考リンク)
     ・ふだんは相談画面の上のバーにある「🔐 在庫管理」から編集できます（暗証番号は adminPin）
     ====================================================================== -->
<script type="application/json" id="inventory-data">
{
  "category": "washer",
  "label": "洗濯機",
  "version": "2026-10-23",
  "adminPin": "staff2026",
  "groups": [
    {
      "id": "single_vertical",
      "name": "一人暮らし・低価格縦型（4.5～7kg）"
    },
    {
      "id": "mid_vertical",
      "name": "2～4人向け・標準～高機能縦型（7～10kg）"
    },
    {
      "id": "clean_nodrain",
      "name": "節水・清潔重視（SHARP 穴なし槽）"
    },
    {
      "id": "dryer_vertical",
      "name": "縦型洗濯乾燥機（ヒーター乾燥付き）"
    },
    {
      "id": "compact_drum",
      "name": "省スペース・コンパクトドラム（7～10kg）"
    },
    {
      "id": "flagship_drum",
      "name": "大容量ドラム式洗濯乾燥機（ヒートポンプ・自動投入）"
    }
  ],
  "tagOptions": {},
  "schema": {
    "root": "wm-app",
    "icon": "🫧",
    "map": {},
    "fields": [
      {
        "k": "wCap",
        "l": "洗濯容量（kg）",
        "t": "number"
      },
      {
        "k": "dCap",
        "l": "乾燥容量（kg）",
        "t": "number"
      },
      {
        "k": "type",
        "l": "タイプ（vertical=縦型 / drum=ドラム）"
      },
      {
        "k": "dryType",
        "l": "乾燥方式（none / heater / heatpump）"
      },
      {
        "k": "w",
        "l": "幅（mm）",
        "t": "number"
      },
      {
        "k": "d",
        "l": "奥行（mm）",
        "t": "number"
      },
      {
        "k": "h",
        "l": "高さ（mm）",
        "t": "number"
      },
      {
        "k": "pan",
        "l": "必要な防水パン（mm）",
        "t": "number"
      },
      {
        "k": "autoDisp",
        "l": "洗剤自動投入",
        "t": "seg",
        "o": [
          [
            "Yes",
            "あり"
          ],
          [
            "No",
            "なし"
          ]
        ]
      }
    ],
    "listFields": [
      "wCap",
      "type"
    ],
    "grades": [
      [
        "cap",
        "容量"
      ],
      [
        "dry",
        "乾燥"
      ],
      [
        "clean",
        "洗浄力"
      ],
      [
        "auto",
        "家事ラク"
      ],
      [
        "size",
        "コンパクト性"
      ]
    ],
    "gradeVals": [
      "◎",
      "◯",
      "△",
      "✕"
    ],
    "makers": [
      [
        "AQUA"
      ],
      [
        "HITACHI"
      ],
      [
        "Haier"
      ],
      [
        "Hisense"
      ],
      [
        "Panasonic"
      ],
      [
        "SHARP"
      ],
      [
        "TOSHIBA"
      ],
      [
        "YAMADA"
      ]
    ],
    "buckets": [
      [
        0,
        65000,
        "〜6.5万"
      ],
      [
        65000,
        100000,
        "6.5万〜10万"
      ],
      [
        100000,
        150000,
        "10万〜15万"
      ],
      [
        150000,
        200000,
        "15万〜20万"
      ],
      [
        200000,
        1000000000000,
        "20万〜"
      ]
    ]
  },
  "items": [
    {
      "id": "w1",
      "status": "active",
      "maker": "YAMADA",
      "name": "TNI45A1",
      "model": "TNI45A1",
      "price": 25080,
      "groupId": "single_vertical",
      "wCap": 4.5,
      "dCap": 0,
      "type": "vertical",
      "dryType": "none",
      "w": 526,
      "d": 500,
      "h": 888,
      "pan": 530,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "△",
        "dry": "✕",
        "clean": "◯",
        "auto": "✕",
        "size": "◎"
      },
      "desc": {
        "ja": "一人暮らしに十分な4.5kg。最安クラスで初期費用を徹底的に抑えたい方に",
        "en": "4.5kg for singles. Lowest entry budget for essential laundry needs",
        "zh": "单身自用4.5kg，入门超低价，有效压缩初期置家成本"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ayamada-denki.jp%20TNI45A1",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ayamada-denki.jp%20TNI45A1%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w2",
      "status": "active",
      "maker": "Hisense",
      "name": "HW-G55NJ1",
      "model": "HW-G55NJ1",
      "price": 26180,
      "groupId": "single_vertical",
      "wCap": 5.5,
      "dCap": 0,
      "type": "vertical",
      "dryType": "none",
      "w": 540,
      "d": 520,
      "h": 910,
      "pan": 530,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◯",
        "dry": "✕",
        "clean": "◯",
        "auto": "✕",
        "size": "◎"
      },
      "desc": {
        "ja": "2万円台で5.5kg。毛布洗いもお急ぎ14分コースもこなせるコスパモデル",
        "en": "5.5kg under 30k JPY with 14-min quick wash and blanket capability",
        "zh": "2万多日元入手5.5kg，带14分钟快速洗，实用性更胜一筹"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ahisense.co.jp%20HW-G55NJ1",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ahisense.co.jp%20HW-G55NJ1%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w3",
      "status": "active",
      "maker": "Hisense",
      "name": "HW-G70J",
      "model": "HW-G70J",
      "price": 32780,
      "groupId": "single_vertical",
      "wCap": 7,
      "dCap": 0,
      "type": "vertical",
      "dryType": "none",
      "w": 540,
      "d": 520,
      "h": 940,
      "pan": 530,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "✕",
        "clean": "◯",
        "auto": "✕",
        "size": "◎"
      },
      "desc": {
        "ja": "幅54cmの5kg級ボディに7kgを凝縮。まとめ洗いしたい単身・2人暮らしに最適",
        "en": "7kg capacity inside a slim 54cm body. Ideal for 1-2 persons bulk wash",
        "zh": "54cm超窄身形容纳7kg大容量，小机位大容量的性价比典范"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ahisense.co.jp%20HW-G70J",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ahisense.co.jp%20HW-G70J%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w4",
      "status": "active",
      "maker": "TOSHIBA",
      "name": "AW-5GA4-W",
      "model": "AW-5GA4-W",
      "price": 37180,
      "groupId": "single_vertical",
      "wCap": 5,
      "dCap": 0,
      "type": "vertical",
      "dryType": "none",
      "w": 563,
      "d": 580,
      "h": 957,
      "pan": 550,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◯",
        "dry": "✕",
        "clean": "◯",
        "auto": "✕",
        "size": "◎"
      },
      "desc": {
        "ja": "東芝エントリー5kg。浸透力×パワフル水流でしっかり洗い上げる安心の国内メーカー",
        "en": "Toshiba 5kg entry model with powerful water penetration for daily use",
        "zh": "东芝入门5kg，渗透强劲水流，日系大厂放心品质"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Atoshiba-lifestyle.com%20AW-5GA4-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Atoshiba-lifestyle.com%20AW-5GA4-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w5",
      "status": "active",
      "maker": "AQUA",
      "name": "AQW-V7A-W",
      "model": "AQW-V7A-W",
      "price": 65780,
      "groupId": "mid_vertical",
      "wCap": 7,
      "dCap": 0,
      "type": "vertical",
      "dryType": "none",
      "w": 560,
      "d": 540,
      "h": 965,
      "pan": 540,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◯",
        "dry": "✕",
        "clean": "◎",
        "auto": "✕",
        "size": "◎"
      },
      "desc": {
        "ja": "インバーター搭載で低騒音・省エネ。3Dアクティブ洗浄でガンコ汚れをもみ洗い",
        "en": "Inverter motor for quiet night operation with 3D Active soil scrubbing",
        "zh": "搭载变频电机超静音低能耗，3D立体水流揉搓洗净"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Aaqua-has.com%20AQW-V7A-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Aaqua-has.com%20AQW-V7A-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w6",
      "status": "active",
      "maker": "HITACHI",
      "name": "BW-V80P-C",
      "model": "BW-V80P-C",
      "price": 118800,
      "groupId": "mid_vertical",
      "wCap": 8,
      "dCap": 0,
      "type": "vertical",
      "dryType": "none",
      "w": 608,
      "d": 610,
      "h": 1000,
      "pan": 530,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "✕",
        "clean": "◎",
        "auto": "✕",
        "size": "◯"
      },
      "desc": {
        "ja": "高濃度×大流量の「ナイアガラ ビート洗浄」。泥汚れ・部活服・皮脂汚れを強力分解",
        "en": "Niagara Beat Wash: Extreme washing power tackling heavy mud & sweat",
        "zh": "日立瀑布流倍脱洗净，去泥垢汗渍力压群雄，运动家庭本命"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Akadenfan.hitachi.co.jp%20BW-V80P-C",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Akadenfan.hitachi.co.jp%20BW-V80P-C%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w7",
      "status": "active",
      "maker": "HITACHI",
      "name": "BW-X100P-W",
      "model": "BW-X100P-W",
      "price": 135300,
      "groupId": "mid_vertical",
      "wCap": 10,
      "dCap": 0,
      "type": "vertical",
      "dryType": "none",
      "w": 608,
      "d": 650,
      "h": 1050,
      "pan": 540,
      "autoDisp": "Yes",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "✕",
        "clean": "◎",
        "auto": "◎",
        "size": "◯"
      },
      "desc": {
        "ja": "ナイアガラ ビート洗浄に「液体洗剤・柔軟剤 自動投入」をプラスした大本命10kg",
        "en": "Combines Niagara Beat Wash with Auto-Detergent Dispensing (10kg)",
        "zh": "瀑布洗净叠加洗剂柔顺剂双重自动投放，10kg家务减负首选"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Akadenfan.hitachi.co.jp%20BW-X100P-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Akadenfan.hitachi.co.jp%20BW-X100P-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w8",
      "status": "active",
      "maker": "TOSHIBA",
      "name": "AW-8DPB6-W",
      "model": "AW-8DPB6-W",
      "price": 134200,
      "groupId": "mid_vertical",
      "wCap": 8,
      "dCap": 0,
      "type": "vertical",
      "dryType": "none",
      "w": 600,
      "d": 569,
      "h": 980,
      "pan": 510,
      "autoDisp": "Yes",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "✕",
        "clean": "◎",
        "auto": "◎",
        "size": "◯"
      },
      "desc": {
        "ja": "「抗菌ウルトラファインバブル洗浄W」＆自動投入。ナノ泡で黄ばみと部屋干し臭を撃退",
        "en": "Antibacterial Ultra Fine Bubble W tech with Auto Dispenser. Stops odor",
        "zh": "微纳超细气泡双重洗净加自动投放，深入纤维除黄防臭"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Atoshiba-lifestyle.com%20AW-8DPB6-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Atoshiba-lifestyle.com%20AW-8DPB6-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w9",
      "status": "active",
      "maker": "Panasonic",
      "name": "NA-FA10K6-C",
      "model": "NA-FA10K6-C",
      "price": 146300,
      "groupId": "mid_vertical",
      "wCap": 10,
      "dCap": 0,
      "type": "vertical",
      "dryType": "none",
      "w": 599,
      "d": 635,
      "h": 1071,
      "pan": 540,
      "autoDisp": "Yes",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "✕",
        "clean": "◎",
        "auto": "◎",
        "size": "◯"
      },
      "desc": {
        "ja": "濃密泡で汚れを包む「スゴ落ち泡洗浄」＆すっきりフロント設計。毛布の出し入れも楽々",
        "en": "Foam Wash technology with low front opening for easy heavy blanket handling",
        "zh": "浓密泡沫渗透剥离污渍，开口下移设计，拿放大件衣物不伤腰"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20NA-FA10K6-C",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20NA-FA10K6-C%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w10",
      "status": "active",
      "maker": "SHARP",
      "name": "ES-GE7K-W",
      "model": "ES-GE7K-W",
      "price": 58080,
      "groupId": "clean_nodrain",
      "wCap": 7,
      "dCap": 0,
      "type": "vertical",
      "dryType": "none",
      "w": 565,
      "d": 535,
      "h": 898,
      "pan": 507,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◯",
        "dry": "✕",
        "clean": "◯",
        "auto": "✕",
        "size": "◎"
      },
      "desc": {
        "ja": "黒カビを遮断しムダ水を大幅カットする「穴なし槽」。7kgで5万円台の手頃さも魅力",
        "en": "No-hole stainless tub blocking black mold and cutting wasted water",
        "zh": "无孔内桶杜绝夹层黑霉倒流，极度省水，7kg平价亲民"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.sharp%20ES-GE7K-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.sharp%20ES-GE7K-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w11",
      "status": "active",
      "maker": "SHARP",
      "name": "ES-GV8L-W",
      "model": "ES-GV8L-W",
      "price": 108680,
      "groupId": "clean_nodrain",
      "wCap": 8,
      "dCap": 0,
      "type": "vertical",
      "dryType": "none",
      "w": 600,
      "d": 595,
      "h": 960,
      "pan": 540,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "✕",
        "clean": "◯",
        "auto": "✕",
        "size": "◯"
      },
      "desc": {
        "ja": "8kg穴なしサイクロン洗浄。洗濯槽の外側に水がたまらないためトップクラスの節水力",
        "en": "8kg Holeless Cyclone wash saving tens of liters every cycle",
        "zh": "8kg无孔旋风强力洗，业内顶尖节水指标，守护家庭健康"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.sharp%20ES-GV8L-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.sharp%20ES-GV8L-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w12",
      "status": "active",
      "maker": "SHARP",
      "name": "ES-GV10L-W",
      "model": "ES-GV10L-W",
      "price": 116600,
      "groupId": "clean_nodrain",
      "wCap": 10,
      "dCap": 0,
      "type": "vertical",
      "dryType": "none",
      "w": 600,
      "d": 595,
      "h": 1020,
      "pan": 540,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "✕",
        "clean": "◯",
        "auto": "✕",
        "size": "◯"
      },
      "desc": {
        "ja": "大容量10kgの穴なし槽。毛布も清潔に洗えてカビの心配がないファミリー向け節水機",
        "en": "10kg Large no-hole tub ideal for families seeking hygienic water efficiency",
        "zh": "10kg大容量无孔内桶，洗被褥更洁净，彻底告别洗衣机二次污染"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.sharp%20ES-GV10L-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.sharp%20ES-GV10L-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w13",
      "status": "active",
      "maker": "HITACHI",
      "name": "BW-DV80M-WT",
      "model": "BW-DV80M-WT",
      "price": 154000,
      "groupId": "dryer_vertical",
      "wCap": 8,
      "dCap": 4.5,
      "type": "vertical",
      "dryType": "heater",
      "w": 610,
      "d": 635,
      "h": 1040,
      "pan": 540,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "◯",
        "clean": "◎",
        "auto": "✕",
        "size": "◯"
      },
      "desc": {
        "ja": "ナイアガラ ビート洗浄＋速乾ビート乾燥。ドラムは置けないが乾燥もしたいご家庭に",
        "en": "Beat Wash + Beat Dryer. Best solution for homes needing drying without drum",
        "zh": "瀑布洗净加风速烘干，无法摆放滚筒时的绝佳洗烘两全之选"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Akadenfan.hitachi.co.jp%20BW-DV80M-WT",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Akadenfan.hitachi.co.jp%20BW-DV80M-WT%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w14",
      "status": "active",
      "maker": "HITACHI",
      "name": "BW-DX100M-WT",
      "model": "BW-DX100M-WT",
      "price": 195800,
      "groupId": "dryer_vertical",
      "wCap": 10,
      "dCap": 5.5,
      "type": "vertical",
      "dryType": "heater",
      "w": 610,
      "d": 660,
      "h": 1105,
      "pan": 540,
      "autoDisp": "Yes",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "◯",
        "clean": "◎",
        "auto": "◎",
        "size": "◯"
      },
      "desc": {
        "ja": "10kg大容量＋5.5kg乾燥＋洗剤自動投入＋AIお洗濯。縦型乾燥機の最高峰フラッグシップ",
        "en": "10kg wash / 5.5kg dry with auto-dispenser and AI wash program",
        "zh": "10kg洗/5.5kg烘，自带自动投放与AI智慧感应，波轮洗烘天花板"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Akadenfan.hitachi.co.jp%20BW-DX100M-WT",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Akadenfan.hitachi.co.jp%20BW-DX100M-WT%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w15",
      "status": "active",
      "maker": "SHARP",
      "name": "ES-TX8L-W",
      "model": "ES-TX8L-W",
      "price": 138600,
      "groupId": "dryer_vertical",
      "wCap": 8,
      "dCap": 4.5,
      "type": "vertical",
      "dryType": "heater",
      "w": 600,
      "d": 650,
      "h": 1025,
      "pan": 540,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "◯",
        "clean": "◯",
        "auto": "✕",
        "size": "◯"
      },
      "desc": {
        "ja": "穴なし槽＋ハンガー乾燥＋プラズマクラスター。水洗いできないスーツの除菌消臭にも対応",
        "en": "No-hole tub with hanger drying & Plasmacluster deodorizing for suits",
        "zh": "无孔槽洗烘加挂架烘干，净离子群可免水洗除菌西服外套"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.sharp%20ES-TX8L-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.sharp%20ES-TX8L-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w16",
      "status": "active",
      "maker": "Haier",
      "name": "JW-FP80A-W",
      "model": "JW-FP80A-W",
      "price": 96800,
      "groupId": "compact_drum",
      "wCap": 8,
      "dCap": 4,
      "type": "drum",
      "dryType": "heater",
      "w": 595,
      "d": 593,
      "h": 943,
      "pan": 540,
      "autoDisp": "Yes",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◯",
        "dry": "◯",
        "clean": "◯",
        "auto": "◎",
        "size": "◎"
      },
      "desc": {
        "ja": "10万円切りで「ドラム乾燥＋洗剤自動投入」を実現。奥行59cmの超コンパクトエントリー",
        "en": "Drum washer-dryer with auto-dispenser under 100k JPY. Ultra-compact 59cm depth",
        "zh": "不到10万日元配齐滚筒洗烘与自动投放，59cm超浅机身好入户"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ahaier.co.jp%20JW-FP80A-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ahaier.co.jp%20JW-FP80A-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w17",
      "status": "active",
      "maker": "SHARP",
      "name": "ES-S7S1-WL",
      "model": "ES-S7S1-WL",
      "price": 99880,
      "groupId": "compact_drum",
      "wCap": 7,
      "dCap": 3.5,
      "type": "drum",
      "dryType": "heater",
      "w": 640,
      "d": 600,
      "h": 1039,
      "pan": 540,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◯",
        "dry": "◯",
        "clean": "◯",
        "auto": "✕",
        "size": "◎"
      },
      "desc": {
        "ja": "真四角に近いコンパクト設計で一般的な防水パンにすっきり収まる「マンション用ドラム」",
        "en": "Compact condo drum fitting standard small waterproof pans easily",
        "zh": "公寓紧凑户型专属滚筒，规整机身完美贴合普通小尺寸防水盘"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.sharp%20ES-S7S1-WL",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.sharp%20ES-S7S1-WL%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w18",
      "status": "active",
      "maker": "AQUA",
      "name": "AQW-DMS10A-LW",
      "model": "AQW-DMS10A-LW",
      "price": 168300,
      "groupId": "compact_drum",
      "wCap": 10,
      "dCap": 5,
      "type": "drum",
      "dryType": "heatpump",
      "w": 595,
      "d": 685,
      "h": 943,
      "pan": 540,
      "autoDisp": "Yes",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "◎",
        "clean": "◯",
        "auto": "◎",
        "size": "◎"
      },
      "desc": {
        "ja": "水平に回る「まっ直ぐドラム」で衣類の絡みを抑えシワを低減。自動投入付き10kgドラム",
        "en": "Straight Drum design preventing tangles and wrinkles, width 59.5cm",
        "zh": "水平“平直滚筒”大幅减少衣物缠绕与褶皱，自带自动投放"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Aaqua-has.com%20AQW-DMS10A-LW",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Aaqua-has.com%20AQW-DMS10A-LW%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w19",
      "status": "active",
      "maker": "Panasonic",
      "name": "NA-SD10HB-LW",
      "model": "NA-SD10HB-LW",
      "price": 197010,
      "groupId": "compact_drum",
      "wCap": 10,
      "dCap": 5,
      "type": "drum",
      "dryType": "heater",
      "w": 639,
      "d": 650,
      "h": 1010,
      "pan": 540,
      "autoDisp": "Yes",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "◯",
        "clean": "◎",
        "auto": "◎",
        "size": "◎"
      },
      "desc": {
        "ja": "パナソニックのスリムデザインドラム。LXシリーズが入らない設置場所でも置ける薄型設計",
        "en": "Slim Panasonic drum fitting locations too tight for standard LX models",
        "zh": "松下纤薄时尚滚筒，为放不下LX大型旗舰的紧凑浴室专研"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20NA-SD10HB-LW",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20NA-SD10HB-LW%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w20",
      "status": "active",
      "maker": "HITACHI",
      "name": "BD-SG110KL-W",
      "model": "BD-SG110KL-W",
      "price": 149600,
      "groupId": "flagship_drum",
      "wCap": 11,
      "dCap": 6,
      "type": "drum",
      "dryType": "heatpump",
      "w": 630,
      "d": 715,
      "h": 1050,
      "pan": 540,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "◎",
        "clean": "◎",
        "auto": "✕",
        "size": "◯"
      },
      "desc": {
        "ja": "15万円を切る大容量11kg日立ドラム。大風量「風アイロン」でシワを伸ばしてふんわり乾燥",
        "en": "11kg Wind Iron dryer smoothing wrinkles with high-speed airflow",
        "zh": "15万日元内入手日立11kg大滚筒，风熨斗高速气流舒展褶皱"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Akadenfan.hitachi.co.jp%20BD-SG110KL-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Akadenfan.hitachi.co.jp%20BD-SG110KL-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w21",
      "status": "active",
      "maker": "TOSHIBA",
      "name": "TW-127XM5-LW",
      "model": "TW-127XM5-LW",
      "price": 179300,
      "groupId": "flagship_drum",
      "wCap": 12,
      "dCap": 7,
      "type": "drum",
      "dryType": "heatpump",
      "w": 645,
      "d": 720,
      "h": 1060,
      "pan": 520,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "◎",
        "clean": "◎",
        "auto": "✕",
        "size": "◯"
      },
      "desc": {
        "ja": "12kg洗濯/7kg乾燥のヒートポンプ除湿乾燥＆ウルトラファインバブル洗浄。高コスパ大容量",
        "en": "12kg/7kg Heat-pump moisture condensation with Fine Bubble tech",
        "zh": "12kg洗/7kg烘微纳气泡洗净加热泵轻柔烘干，主流超高性价比"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Atoshiba-lifestyle.com%20TW-127XM5-LW",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Atoshiba-lifestyle.com%20TW-127XM5-LW%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w22",
      "status": "active",
      "maker": "Panasonic",
      "name": "NA-LX113E-LWJ",
      "model": "NA-LX113E-LWJ",
      "price": 195800,
      "groupId": "flagship_drum",
      "wCap": 12,
      "dCap": 6,
      "type": "drum",
      "dryType": "heatpump",
      "w": 639,
      "d": 722,
      "h": 1060,
      "pan": 540,
      "autoDisp": "No",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "◎",
        "clean": "◎",
        "auto": "✕",
        "size": "◯"
      },
      "desc": {
        "ja": "パナソニックLXシリーズの入門機。スゴ落ち泡洗浄とはやふわ乾燥ヒートポンプを20万円以下で",
        "en": "Entry into Panasonic LX series: Foam Wash + Hayafuwa Heat Pump",
        "zh": "松下LX旗舰系列入门机，20万日元内感受泡沫洗净与热泵柔烘"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20NA-LX113E-LWJ",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20NA-LX113E-LWJ%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w23",
      "status": "active",
      "maker": "Panasonic",
      "name": "NA-LX127FL-WJ",
      "model": "NA-LX127FL-WJ",
      "price": 316800,
      "groupId": "flagship_drum",
      "wCap": 12,
      "dCap": 6,
      "type": "drum",
      "dryType": "heatpump",
      "w": 639,
      "d": 722,
      "h": 1060,
      "pan": 540,
      "autoDisp": "Yes",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "◎",
        "clean": "◎",
        "auto": "◎",
        "size": "◯"
      },
      "desc": {
        "ja": "トリプル自動投入（おしゃれ着対応）＋スゴ落ち泡洗浄＋温水泡洗浄。家事ラク本命機",
        "en": "Triple Auto-Dispenser (with delicate wash tank) + Hot Foam Wash",
        "zh": "三元自动投放（支持羊毛真丝液）加温水泡洗，家务全托管顶梁柱"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20NA-LX127FL-WJ",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20NA-LX127FL-WJ%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w24",
      "status": "active",
      "maker": "HITACHI",
      "name": "BD-STX130P-LH",
      "model": "BD-STX130P-LH",
      "price": 415800,
      "groupId": "flagship_drum",
      "wCap": 13,
      "dCap": 7,
      "type": "drum",
      "dryType": "heatpump",
      "w": 630,
      "d": 720,
      "h": 1065,
      "pan": 540,
      "autoDisp": "Yes",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "◎",
        "clean": "◎",
        "auto": "◎",
        "size": "◯"
      },
      "desc": {
        "ja": "業界最大級13kg洗濯/7kg乾燥。カラー大型タッチパネル、風アイロン、洗剤自動投入の最高峰",
        "en": "Top flagship: 13kg/7kg with large touch screen, Wind Iron & Auto Dispense",
        "zh": "业界最大级13kg洗/7kg烘，巨幅彩色触控屏配风熨斗顶峰旗舰"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Akadenfan.hitachi.co.jp%20BD-STX130P-LH",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Akadenfan.hitachi.co.jp%20BD-STX130P-LH%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "w25",
      "status": "active",
      "maker": "TOSHIBA",
      "name": "TW-137XP6-LH",
      "model": "TW-137XP6-LH",
      "price": 404800,
      "groupId": "flagship_drum",
      "wCap": 13,
      "dCap": 7,
      "type": "drum",
      "dryType": "heatpump",
      "w": 645,
      "d": 720,
      "h": 1060,
      "pan": 520,
      "autoDisp": "Yes",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cap": "◎",
        "dry": "◎",
        "clean": "◎",
        "auto": "◎",
        "size": "◯"
      },
      "desc": {
        "ja": "東芝最高峰ZABOON。13kg大容量、UV温風除菌、大風量ヒートポンプ、3槽自動投入",
        "en": "Toshiba flagship: 13kg capacity with UV sterilization & 3-tank Auto Dispenser",
        "zh": "东芝ZABOON旗舰，13kg巨量容积搭载UV除菌与三槽智能自动投放"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Atoshiba-lifestyle.com%20TW-137XP6-LH",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Atoshiba-lifestyle.com%20TW-137XP6-LH%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    }
  ]
}
</script>
<!-- ▲▲▲ 在庫データここまで ▲▲▲ -->
<!-- ======================================================================
     ▼▼▼ ヒアリング設定（店舗ごとのアレンジ）▼▼▼
     ・ふだんは相談画面の「🔐 在庫管理」→「💬 ヒアリング」タブで編集できます
     ・questions：質問ごとの 非表示(hidden)・文言(t / h)・選択肢(opts / order)
     ・custom：店舗オリジナルの質問（スタッフ確認シートに表示）
     ====================================================================== -->
<script type="application/json" id="hearing-data">
{
  "category": "washer",
  "storeName": "",
  "version": "2026-10-23",
  "questions": {},
  "custom": []
}
</script>
<!-- ▲▲▲ ヒアリング設定ここまで ▲▲▲ -->
<!-- アプリを閉じた直後・読み込み中に一瞬見える画面 -->
<div class="pg-card">
  <div class="pg-ico" aria-hidden="true">🏠</div>
  <h1 class="pg-ttl">洗濯機</h1>
  <button type="button" class="pg-btn main" id="pg-open">相談をもう一度ひらく</button>
  <a class="pg-btn sub" id="pg-back" href="https://information000.github.io/Nojima/kaden/">← エリアへ戻る</a>
</div>
<!-- アプリが使う部品（画面には出ません） -->
<select id="lang-switcher" aria-hidden="true" tabindex="-1"><option value="ja">ja</option><option value="en">en</option><option value="zh">zh</option></select>
<div id="modal"><a id="modal-link-btn" href="#"></a></div>
<script id="device-adapt-js">
(function () {
  var i = document.documentElement, a;
  function d() {
    var e = window.matchMedia;
    return e && (e("(pointer:coarse)").matches || e("(hover:none)").matches)
      || (navigator.maxTouchPoints || 0) > 1;
  }
  function n() {
    var e = window.innerWidth, r = Math.min(screen.width || e, screen.height || e), t;
    d()
      ? t = r < 600 ? "phone" : "tablet"
      : t = e < 600 ? "phone" : e < 1025 ? "tablet" : "desktop",
      i.setAttribute("data-device", t),
      i.setAttribute(
        "data-orient",
        window.innerWidth >= window.innerHeight ? "landscape" : "portrait"
      );
    try {
      window.__walkers
        && window.__walkers[0]
        && (window.__walkers[0].speed = t === "phone" ? 24 : t === "tablet" ? 32 : 38);
    } catch {}
  }
  function o() {
    clearTimeout(a), a = setTimeout(n, 120);
  }
  n(),
    window.addEventListener("resize", o),
    window.addEventListener("orientationchange", o),
    window.addEventListener("load", n);
})();
</script>
<script id="product-shell-js">
/* ===== 商品ページ共通（言語・相談アプリ起動・閉じたらエリアへ・マイリスト） ===== */
var currentLang = "ja";
(function () {
  "use strict";
  var APP = "washer";                 // このページの相談アプリ
  var ROOT_ID = "wm-app";            // アプリの表示エリア
  var AREA_URL = "https://information000.github.io/Nojima/kaden/";       // 閉じたときに戻るエリアページ
  var I18N = {"backArea": ["← エリアへ戻る", "← Back to area", "← 返回区域"], "reopen": ["相談をもう一度ひらく", "Open the consultation", "重新打开咨询"], "favAdd": ["マイリストに追加", "Add to My List", "加入收藏"], "favDel": ["マイリストから外す", "Remove from My List", "取消收藏"], "favAdded": ["マイリストに追加しました", "Added to My List", "已加入收藏"], "favRemoved": ["マイリストから外しました", "Removed from My List", "已取消收藏"]};
  var $ = function (id) { return document.getElementById(id); };
  function li() { return currentLang === "en" ? 1 : currentLang === "zh" ? 2 : 0; }
  function t(k) { return I18N[k][li()]; }

  // ---- 言語（?lang= → 前回の選択 → 日本語）
  var qs; try { qs = new URLSearchParams(location.search); } catch (e) { qs = { get: function () { return null; } }; }
  var lg = qs.get("lang");
  if (!/^(ja|en|zh)$/.test(lg || "")) { try { lg = localStorage.getItem("nj-lang"); } catch (e) {} }
  currentLang = /^(ja|en|zh)$/.test(lg || "") ? lg : "ja";
  var sw = $("lang-switcher");
  sw.value = currentLang;
  sw.addEventListener("change", function () {     // アプリ内の言語切替もここに届く
    currentLang = sw.value;
    try { localStorage.setItem("nj-lang", currentLang); } catch (e) {}
    label();
  });
  function areaUrl() { return AREA_URL + "?lang=" + currentLang; }
  function label() {
    document.documentElement.lang = currentLang === "zh" ? "zh-CN" : currentLang;
    document.body.setAttribute("data-lang", currentLang);
    var b = $("pg-back"); b.href = areaUrl(); b.textContent = t("backArea");
    $("pg-open").textContent = t("reopen");
  }

  // ---- 相談アプリの起動（アプリは #modal-link-btn のクリックで開く作り）
  var mb = $("modal-link-btn");
  mb.addEventListener("click", function (e) { e.preventDefault(); });
  function open() { mb.dataset.app = APP; mb.click(); }
  $("pg-open").addEventListener("click", open);

  // ---- アプリを閉じたら（「← 一覧へ」/ブラウザの戻る）エリアページへ
  var leaving = false;
  function watchClose(root) {
    var wasOn = false;
    new MutationObserver(function () {
      var on = root.classList.contains("on");
      if (on) wasOn = true;
      else if (wasOn && !leaving) {
        leaving = true;
        setTimeout(function () { location.replace(areaUrl()); }, 250);
      }
    }).observe(root, { attributes: true, attributeFilter: ["class"] });
  }

  // ---- マイリスト（ホームの「マイリスト」と同じ保存先）
  var FKEY = "aeon-narita-mylist-v1";
  function load() { try { var v = JSON.parse(localStorage.getItem(FKEY) || "[]"); return Array.isArray(v) ? v : []; } catch (e) { return []; } }
  function save(v) { try { localStorage.setItem(FKEY, JSON.stringify(v)); } catch (e) {} }
  function has(k) { return load().some(function (e) { return e.k === k; }); }
  function item(card, cat) {
    var a = card.querySelector(".fr-name,.sv-name");
    if (!a) return null;
    var r = a.textContent.trim();
    if (!r) return null;
    var i = a.nextElementSibling, s = card.querySelector(".fr-price,.sv-price");
    return { k: cat + "|" + r, c: cat, name: r, sub: i ? i.textContent.trim() : "", price: s ? s.textContent.trim() : "", t: Date.now() };
  }
  function sync() {
    document.querySelectorAll(".ht-heart").forEach(function (b) {
      var on = has(b.getAttribute("data-key"));
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.textContent = on ? "♥" : "♡";
      b.setAttribute("aria-label", t(on ? "favDel" : "favAdd"));
      b.title = t(on ? "favDel" : "favAdd");
    });
  }
  function toggle(it) {
    var c = load();
    var was = c.some(function (e) { return e.k === it.k; });
    c = was ? c.filter(function (e) { return e.k !== it.k; }) : c.concat([it]);
    save(c); sync();
    window.NJ_TOAST && window.NJ_TOAST((was ? "♡ " : "♥ ") + t(was ? "favRemoved" : "favAdded") + "<br><small>" + it.name.replace(/[<>&]/g, "") + "</small>", { type: was ? "info" : "ok", icon: was ? "♡" : "♥" });
  }
  function hearts(root) {
    root.querySelectorAll(".fr-rec,.sv-rec").forEach(function (card) {
      if (card.querySelector(".ht-heart")) return;
      var it = item(card, root.id);
      if (!it) return;
      var b = document.createElement("button");
      b.type = "button"; b.className = "ht-heart"; b.setAttribute("data-key", it.k);
      b.addEventListener("click", function (e) { e.stopPropagation(); toggle(item(card, root.id) || it); });
      card.appendChild(b);
    });
    sync();
  }

  function boot() {
    label();
    var root = $(ROOT_ID);
    if (!root) return;
    var busy = false;
    new MutationObserver(function () {
      if (busy) return; busy = true;
      requestAnimationFrame(function () { busy = false; hearts(root); });
    }).observe(root, { childList: true, subtree: true });
    watchClose(root);
    open();
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
})();
</script>
<!-- ===== 相談アプリ共通（土台CSS・メーカーリンク） ===== -->
<style>
.fr-root {
  position: fixed;
  inset: 0;
  z-index: 99999;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background: linear-gradient(160deg,#e8f0ff,#f8fafc 45%,#eef2ff);
  color: #0f172a;
  opacity: 0;
  visibility: hidden;
  transform: translateY(28px) scale(.985);
  transition: opacity .4s,transform .5s cubic-bezier(.2,.8,.2,1),visibility 0s .5s;
}
.fr-root.on {
  opacity: 1;
  visibility: visible;
  transform: none;
  transition-delay: 0s;
}
.fr-root * {
  box-sizing: border-box;
  font-family: Plus Jakarta Sans,Noto Sans JP,Noto Sans SC,sans-serif;
}
.fr-top {
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: #ffffffdb;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e2e8f0;
}
.fr-top b {
  flex: 1;
  font-size: .98rem;
  color: #1d4ed8;
}
.fr-x {
  border: 0;
  background: #f1f5f9;
  border-radius: 99px;
  padding: 7px 12px;
  font-size: .86rem;
  font-weight: 700;
  color: #475569;
  cursor: pointer;
}
.fr-pill {
  background: #1d4ed8;
  color: #fff;
  border-radius: 99px;
  padding: 6px 12px;
  font-size: .8rem;
  font-weight: 700;
  white-space: nowrap;
}
.fr-pill i {
  font-style: normal;
  font-size: 1.05rem;
  margin: 0 2px;
}
.fr-prog {
  height: 3px;
  background: #dbeafe;
}
.fr-prog div {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg,#2563eb,#06b6d4);
  transition: width .6s cubic-bezier(.2,.8,.2,1);
}
.fr-wrap {
  max-width: 680px;
  margin: 0 auto;
  padding: 18px 14px 70px;
}
.fr-in {
  animation: frin .5s cubic-bezier(.2,.8,.2,1) both;
}
.fr-back .fr-in {
  animation-name: frinb;
}
@keyframes frin {
  0% {
    opacity: 0;
    transform: translate(34px);
  }
}
@keyframes frinb {
  0% {
    opacity: 0;
    transform: translate(-34px);
  }
}
@keyframes frup {
  0% {
    opacity: 0;
    transform: translateY(18px);
  }
}
.fr-up {
  animation: frup .55s cubic-bezier(.2,.8,.2,1) both;
  animation-delay: calc(var(--i,0)*70ms);
}
.fr-h1 {
  font-size: 1.55rem;
  font-weight: 800;
  line-height: 1.35;
  margin-bottom: 6px;
}
.fr-h1 em {
  font-style: normal;
  background: linear-gradient(90deg,#2563eb,#06b6d4);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.fr-p {
  font-size: .92rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 14px;
}
.fr-tag {
  display: inline-block;
  font-size: .78rem;
  font-weight: 800;
  padding: 3px 9px;
  border-radius: 99px;
  background: #dbeafe;
  color: #1d4ed8;
  margin-bottom: 8px;
}
.fr-types {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.fr-card {
  background: #fff;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  padding: 12px;
  cursor: pointer;
  transition: .25s;
  box-shadow: 0 2px 8px #0f172a0d;
  position: relative;
  overflow: hidden;
}
.fr-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px #2563eb26;
}
.fr-card.sel {
  border-color: #2563eb;
  grid-column: 1/-1;
  box-shadow: 0 10px 28px #2563eb33;
}
.fr-card h3 {
  font-size: .98rem;
  margin: 6px 0 2px;
}
.fr-card small {
  color: #64748b;
  font-size: .8rem;
  display: block;
}
.fr-more {
  display: none;
  margin-top: 8px;
  font-size: .86rem;
  line-height: 1.65;
  color: #334155;
}
.fr-card.sel .fr-more {
  display: block;
  animation: frup .4s both;
}
.fr-more div {
  margin-bottom: 4px;
}
.fr-more span {
  display: inline-block;
  min-width: 3.4em;
  font-weight: 800;
  color: #2563eb;
}
.fr-svg {
  width: 62px;
  height: 96px;
  display: block;
  margin: 0 auto;
}
.fr-card.sel .fr-svg {
  margin: 0;
}
.fr-d {
  transform-box: fill-box;
  transform-origin: right center;
  animation: frd 5.5s ease-in-out infinite;
  animation-delay: var(--dl,0s);
}
.fr-d.l {
  transform-origin: left center;
}
.fr-dr {
  animation-name: frdr;
}
@keyframes frd {
  0%,
  55%,
  to {
    transform: none;
  }
  65%,
  88% {
    transform: scaleX(.16) skewY(-7deg);
  }
}
@keyframes frdr {
  0%,
  55%,
  to {
    transform: none;
  }
  65%,
  88% {
    transform: translateY(7px);
  }
}
.fr-q {
  background: #fff;
  border-radius: 20px;
  padding: 18px 16px;
  box-shadow: 0 8px 28px #0f172a14;
}
.fr-q .no {
  font-size: .8rem;
  font-weight: 800;
  color: #2563eb;
  letter-spacing: .05em;
}
.fr-q h2 {
  font-size: 1.15rem;
  line-height: 1.5;
  margin: 4px 0 6px;
}
.fr-hint {
  font-size: .86rem;
  color: #475569;
  background: #eff6ff;
  border-left: 3px solid #3b82f6;
  border-radius: 6px;
  padding: 8px 10px;
  line-height: 1.6;
  margin-bottom: 12px;
}
.fr-opt {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  border: 1.5px solid #e2e8f0;
  background: #fff;
  border-radius: 12px;
  padding: 12px 13px;
  margin-bottom: 8px;
  font-size: .92rem;
  font-weight: 600;
  cursor: pointer;
  transition: .2s;
  color: #0f172a;
}
.fr-opt:hover {
  border-color: #93c5fd;
  transform: translate(3px);
}
.fr-opt.sel {
  border-color: #2563eb;
  background: #eff6ff;
  color: #1d4ed8;
  animation: frpop .35s;
}
.fr-opt .ck {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #cbd5e1;
  flex: none;
  display: grid;
  place-items: center;
  font-size: .8rem;
  color: #fff;
}
.fr-opt.sel .ck {
  background: #2563eb;
  border-color: #2563eb;
}
@keyframes frpop {
  50% {
    transform: scale(1.025);
  }
}
.fr-btn {
  display: block;
  width: 100%;
  border: 0;
  border-radius: 12px;
  padding: 14px;
  margin-top: 14px;
  font-size: 1rem;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg,#2563eb,#1d4ed8);
  cursor: pointer;
  box-shadow: 0 8px 20px #2563eb4d;
  transition: .2s;
}
.fr-btn:active {
  transform: scale(.98);
}
.fr-btn.s {
  background: #fff;
  color: #475569;
  border: 1.5px solid #cbd5e1;
  box-shadow: none;
  margin-top: 8px;
  font-size: .92rem;
  padding: 11px;
}
.fr-btn.k {
  background: #111827;
  color: #fbbf24;
}
.fr-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: .86rem;
  margin-bottom: 9px;
}
.fr-row b {
  width: 6.3em;
  flex: none;
}
.fr-bar {
  flex: 1;
  height: 12px;
  background: #e2e8f0;
  border-radius: 99px;
  overflow: hidden;
}
.fr-bar i {
  display: block;
  height: 100%;
  border-radius: 99px;
  background: linear-gradient(90deg,#3b82f6,#06b6d4);
  animation: frbar .9s cubic-bezier(.2,.8,.2,1) both;
  animation-delay: calc(var(--i,0)*60ms + .1s);
}
.fr-bar.g i {
  background: #cbd5e1;
}
@keyframes frbar {
  0% {
    width: 0;
  }
}
.fr-box {
  background: #fff;
  border-radius: 16px;
  padding: 14px;
  margin-bottom: 12px;
  box-shadow: 0 4px 16px #0f172a0f;
}
.fr-box h3 {
  font-size: .98rem;
  margin-bottom: 8px;
}
.fr-chip {
  display: inline-block;
  font-size: .8rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 99px;
  margin: 0 4px 4px 0;
  background: #f1f5f9;
  color: #334155;
}
.fr-chip.ok {
  background: #d1fae5;
  color: #065f46;
}
.fr-chip.w {
  background: #fef3c7;
  color: #92400e;
}
.fr-chip.ng {
  background: #fee2e2;
  color: #991b1b;
}
.fr-ax {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 4px 2px 10px;
  scroll-snap-type: x proximity;
}
.fr-ax button {
  flex: none;
  border: 1.5px solid #cbd5e1;
  background: #fff;
  border-radius: 99px;
  padding: 8px 13px;
  font-size: .86rem;
  font-weight: 700;
  cursor: pointer;
  color: #334155;
  transition: .2s;
  scroll-snap-align: start;
}
.fr-ax button.on {
  background: #2563eb;
  border-color: #2563eb;
  color: #fff;
  transform: scale(1.05);
}
.fr-win {
  border-radius: 14px;
  padding: 12px 14px;
  margin-bottom: 12px;
  background: linear-gradient(135deg,#fef3c7,#fde68a);
  font-size: .88rem;
  line-height: 1.6;
  animation: frup .4s both;
}
.fr-rec {
  background: #fff;
  border: 2px solid #e2e8f0;
  border-radius: 18px;
  padding: 14px;
  margin-bottom: 14px;
  position: relative;
  transition: .3s;
  box-shadow: 0 4px 16px #0f172a0f;
}
.fr-rec.hi {
  border-color: #f59e0b;
  box-shadow: 0 12px 32px #f59e0b4d;
  transform: scale(1.015);
}
.fr-rec.dim {
  opacity: .82;
}
.fr-rank {
  position: absolute;
  top: -11px;
  left: 14px;
  background: #111827;
  color: #fbbf24;
  font-size: .8rem;
  font-weight: 800;
  padding: 3px 11px;
  border-radius: 99px;
}
.fr-head {
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 4px 0 8px;
}
.fr-ring {
  width: 62px;
  height: 62px;
  flex: none;
  position: relative;
}
.fr-ring svg {
  transform: rotate(-90deg);
}
.fr-ring circle {
  fill: none;
  stroke-width: 6;
  stroke-linecap: round;
}
.fr-ring .bg {
  stroke: #e2e8f0;
}
.fr-ring .fg {
  stroke: #2563eb;
  animation: frrg 1.1s cubic-bezier(.2,.8,.2,1) both;
}
.fr-ring b {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 1rem;
}
@keyframes frrg {
  0% {
    stroke-dasharray: 0 164;
  }
}
.fr-name {
  font-weight: 800;
  font-size: 1.05rem;
}
.fr-price {
  font-weight: 800;
  color: #d90429;
  font-size: 1.1rem;
}
.fr-spec {
  width: 100%;
  border-collapse: collapse;
  font-size: .8rem;
  margin: 8px 0;
}
.fr-spec td {
  padding: 4px 6px;
  border-bottom: 1px solid #f1f5f9;
}
.fr-spec td:first-child {
  color: #64748b;
  font-weight: 700;
  width: 34%;
}
.fr-ul {
  list-style: none;
  font-size: .86rem;
  line-height: 1.6;
  margin: 6px 0;
}
.fr-ul li {
  padding-left: 1.4em;
  position: relative;
}
.fr-ul li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: 900;
}
.fr-ul li.w:before {
  content: "!";
  color: #d97706;
}
.fr-ul li.n:before {
  content: "×";
  color: #dc2626;
}
.fr-heat {
  display: grid;
  gap: 3px;
  font-size: .78rem;
  text-align: center;
}
.fr-heat div {
  padding: 7px 2px;
  border-radius: 6px;
  background: rgba(37,99,235,var(--a,0));
  animation: frup .5s both;
  animation-delay: calc(var(--i,0)*25ms);
}
.fr-heat .hd {
  background: none;
  font-weight: 800;
  color: #475569;
}
.fr-heat .rn {
  text-align: left;
  font-weight: 800;
  background: none;
}
.fr-ss {
  border: 2px solid #111827;
  border-radius: 12px;
  padding: 12px;
  background: #fff;
}
.fr-ss table {
  width: 100%;
  border-collapse: collapse;
  font-size: .86rem;
  margin-bottom: 8px;
}
.fr-ss td {
  padding: 5px 7px;
  border-bottom: 1px solid #e5e7eb;
  vertical-align: top;
}
.fr-ss td:first-child {
  background: #f3f4f6;
  font-weight: 800;
  width: 34%;
}
.fr-root {
  overscroll-behavior: contain;
  line-break: strict;
  overflow-wrap: break-word;
  -webkit-tap-highlight-color: transparent;
}
.fr-h1,
.fr-q h2,
.fr-card h3 {
  text-wrap: balance;
}
.fr-p,
.fr-hint,
.fr-more,
.fr-win {
  text-wrap: pretty;
}
.fr-top {
  padding: calc(8px + env(safe-area-inset-top,0px)) 12px 8px;
  box-shadow: 0 2px 12px #0f172a0f;
}
.fr-x,
.fr-ax button,
.fr-root select {
  min-height: 42px;
  touch-action: manipulation;
}
.fr-root select {
  font-size: 16px!important;
  padding: 6px 10px!important;
}
.fr-x {
  transition: transform .15s,background .2s;
}
.fr-x:active {
  transform: scale(.94);
}
.fr-wrap {
  padding: 20px 16px calc(88px + env(safe-area-inset-bottom,0px));
}
.fr-h1 {
  font-size: 1.6rem;
}
.fr-p {
  font-size: .95rem;
  line-height: 1.8;
}
.fr-q h2 {
  font-size: 1.25rem;
}
.fr-opt {
  min-height: 56px;
  font-size: 1rem;
  line-height: 1.5;
  padding: 14px;
  touch-action: manipulation;
}
.fr-opt:active {
  transform: scale(.98);
  background: #f1f5f9;
}
.fr-opt .ck {
  width: 24px;
  height: 24px;
}
.fr-btn {
  min-height: 54px;
  font-size: 1.05rem;
  position: relative;
  overflow: hidden;
  touch-action: manipulation;
}
.fr-btn.s {
  min-height: 48px;
  font-size: .95rem;
}
.fr-ul li {
  margin-bottom: 3px;
}
.fr-spec {
  font-size: .84rem;
}
.fr-spec td {
  padding: 8px 7px;
  line-height: 1.5;
}
.fr-heat {
  font-size: .72rem;
}
.fr-price,
.fr-pill,
.fr-ring b {
  font-variant-numeric: tabular-nums;
}
.fr-root button:focus-visible,
.fr-root select:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 2px;
}
.fr-prog {
  position: sticky;
  top: var(--frtop,56px);
  z-index: 5;
  height: 5px;
  overflow: hidden;
}
.fr-prog div {
  position: relative;
  border-radius: 0 99px 99px 0;
}
.fr-prog div:after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent) no-repeat;
  background-size: 55% 100%;
  animation: frprog 1.9s linear infinite;
}
@keyframes frprog {
  0% {
    background-position: -120% 0;
  }
  to {
    background-position: 240% 0;
  }
}
.fr-btn:not(.s):not(.k):after {
  content: "";
  position: absolute;
  top: 0;
  left: -60%;
  width: 38%;
  height: 100%;
  background: linear-gradient(100deg,transparent,rgba(255,255,255,.4),transparent);
  transform: skew(-20deg);
  animation: frsheen 3.8s ease-in-out infinite;
  pointer-events: none;
}
@keyframes frsheen {
  0%,
  55% {
    left: -60%;
  }
  to {
    left: 130%;
  }
}
.fr-opt.sel .ck {
  animation: frck .45s cubic-bezier(.2,1.4,.4,1);
}
@keyframes frck {
  0% {
    transform: scale(.3);
  }
  to {
    transform: scale(1);
  }
}
.fr-box {
  animation: frup .5s cubic-bezier(.2,.8,.2,1) both;
}
.fr-rec.hi {
  animation: frup .55s cubic-bezier(.2,.8,.2,1) both,frglow 2.8s ease-in-out infinite;
  animation-delay: calc(var(--i,0)*70ms),calc(var(--i,0)*70ms + .9s);
}
@keyframes frglow {
  50% {
    box-shadow: 0 14px 38px #f59e0b80;
  }
}
@media (max-width:430px) {
  .fr-top {
    flex-wrap: wrap;
    row-gap: 4px;
  }
  .fr-top b {
    order: 9;
    flex: 1 0 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .fr-pill {
    margin-left: auto;
  }
}
@media (hover:none) {
  .fr-opt:not(.sel):hover {
    transform: none;
    border-color: #e2e8f0;
  }
  .fr-card:hover {
    transform: none;
  }
}
body.motion-off .fr-root *,
body.motion-off .fr-root *:before,
body.motion-off .fr-root *:after {
  animation: none!important;
  transition: none!important;
}
@media (prefers-reduced-motion:reduce) {
  .fr-root *,
  .fr-root *:before,
  .fr-root *:after {
    animation: none!important;
  }
}
</style>
<script>
(function () {
  "use strict";
  var i = window.requestAnimationFrame
    || function (t) {
      return setTimeout(t, 16);
    };
  function o() {
    for (var t = document.querySelectorAll(".fr-root.on"), e = 0; e < t.length; e++) {
      var r = t[e].querySelector(".fr-top");
      r && t[e].style.setProperty("--frtop", r.offsetHeight + "px");
    }
  }
  function n() {
    var t = document.querySelectorAll(".fr-root");
    if (window.MutationObserver)
      for (var e = new MutationObserver(function () {
        i(o);
      }), r = 0; r < t.length; r++)
        e.observe(t[r], { childList: !0, attributes: !0, attributeFilter: ["class"] });
    window.addEventListener("resize", o),
      window.addEventListener("orientationchange", function () {
        setTimeout(o, 250);
      }),
      document.fonts && document.fonts.ready && document.fonts.ready.then(o);
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", n) : n();
  var a = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)");
  document.addEventListener(
    "click",
    function (t) {
      if (
        !(!navigator.vibrate || document.body.classList.contains("motion-off") || a && a.matches)
      ) {
        var e = t.target.closest
          && t.target.closest(".fr-root .fr-opt,.fr-root .fr-btn,.fr-root .fr-ax button");
        if (e)
          try {
            navigator.vibrate(10);
          } catch {}
      }
    },
    !0
  );
})();
</script>
<style id="nj-links-css">
.nj-lk {
  margin: 10px 0 2px;
  padding-top: 8px;
  border-top: 1px dashed #e2e8f0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}
.nj-lk a {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 11px;
  border-radius: 999px;
  font-size: .78rem;
  font-weight: 700;
  line-height: 1.3;
  text-decoration: none;
  border: 1px solid #bfdbfe;
  background: #eff6ff;
  color: #1d4ed8;
  min-height: 32px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.nj-lk a.nj-m {
  border-color: #bbf7d0;
  background: #f0fdf4;
  color: #15803d;
}
.nj-lk a.nj-s {
  border-color: #cbd5e1;
  background: #f8fafc;
  color: #475569;
  font-weight: 600;
}
.nj-lk a:hover {
  filter: brightness(.97);
}
.nj-lk .nj-n {
  flex-basis: 100%;
  font-size: .7rem;
  line-height: 1.5;
  color: #94a3b8;
}
</style>
<script id="nj-links-js">
(function () {
  "use strict";
  var G = function (q) {
    return "https://www.google.com/search?q=" + encodeURIComponent(q);
  };
  var BRM = "https://support.brother.co.jp/j/s/support/html/cv_mfcj742dn_jpn/doc/PDF/PDF.pdf";
  var BRM_OK = { "DCP-J529N": 1, "DCP-J929N": 1, "DCP-J1270N": 1 };
  var BRI = {
    "DCP-J529N": "dcpj529n/index.aspx",
    "DCP-J929N": "dcpj929n/",
    "DCP-J1270N": "dcpj1270n/index.aspx",
    "MFC-J7100CDW": "mfcj7100cdw/index.aspx"
  };
  var MK = {
    "Canon": {
      i: function (m) {
        return ["d", "https://personal.canon.jp/product/printer/pixus/lineup/" + m.toLowerCase()];
      },
      m: function () {
        return ["l", "https://canon.jp/support/manual?gr=1"];
      }
    },
    "Epson": {
      i: function (m) {
        return [
          "d",
          "https://www.epson.jp/products/colorio/" + m.replace(/-/g, "").toLowerCase() + "/"
        ];
      },
      m: function () {
        return ["l", "https://www.epson.jp/support/used/ks/6.htm"];
      }
    },
    "Brother": {
      i: function (m) {
        return BRI[m]
          ? ["d", "https://www.brother.co.jp/product/printer/inkjet/" + BRI[m]]
          : ["s", G("site:brother.co.jp " + m)];
      },
      m: function (m) {
        return BRM_OK[m] ? ["d", BRM] : ["s", G("site:support.brother.co.jp " + m + " 取扱説明書")];
      }
    },
    "Lenovo": {
      i: function (m) {
        return ["s", G("site:lenovo.com " + m)];
      },
      m: function (m) {
        return ["s", G("site:pcsupport.lenovo.com " + m)];
      }
    },
    "NEC": {
      i: function (m) {
        return ["s", G("site:nec-lavie.jp " + m)];
      },
      m: function (m) {
        return ["s", G("site:support.nec-lavie.jp " + m + " マニュアル")];
      }
    },
    "富士通": {
      i: function (m) {
        return ["s", G("site:fmworld.net " + m)];
      },
      m: function (m) {
        return ["s", G("site:fmworld.net " + m + " マニュアル")];
      }
    },
    "VAIO": {
      i: function (m) {
        return ["s", G("site:vaio.com " + m)];
      },
      m: function (m) {
        return ["s", G("site:vaio.com " + m + " 取扱説明書")];
      }
    },
    "Dynabook": {
      i: function (m) {
        return ["s", G("site:dynabook.com " + m)];
      },
      m: function (m) {
        return ["s", G("site:support.dynabook.com " + m)];
      }
    }
  };
  var T = {
    info: ["🔗 メーカー公式の詳細情報", "🔗 Official product page", "🔗 厂商官方产品详情"],
    infoS: ["🔎 公式サイトで型番検索（詳細情報）", "🔎 Search maker site (details)", "🔎 在官网按型号搜索（详情）"],
    man: ["📘 取扱説明書", "📘 User manual", "📘 使用说明书"],
    manL: ["📘 取扱説明書（公式マニュアル一覧）", "📘 User manuals (official list)", "📘 使用说明书（官方手册列表）"],
    manS: ["🔎 公式サイトで型番検索（取扱説明書）", "🔎 Search maker site (manual)", "🔎 在官网按型号搜索（说明书）"],
    nL: [
      "※マニュアル一覧ページが開きます。一覧から型番「{0}」を選んでください。",
      "* Opens the manual list. Choose model “{0}” from it.",
      "※将打开手册列表，请在列表中选择型号“{0}”。"
    ],
    nS: [
      "※型番「{0}」を使った公式サイト内の検索結果が開きます。",
      "* Opens a search of the maker’s site for “{0}”.",
      "※将打开在官网内搜索型号“{0}”的结果。"
    ]
  };
  function lg() {
    var l = "ja";
    try {
      if (typeof currentLang !== "undefined" && currentLang)
        l = currentLang;
    } catch (e) {}
    return l === "en" ? 1 : l === "zh" ? 2 : 0;
  }
  function f(s, a) {
    return s.replace("{0}", a);
  }
  window.NJ_LINK_OVERRIDE = window.NJ_LINK_OVERRIDE || {};
  window.njLinks = function (p) {
    try {
      if (!p || !p.model)
        return "";
      var c = MK[p.maker];
      if (!c)
        return "";
      var L = lg(), o = window.NJ_LINK_OVERRIDE[p.model] || {}, m = p.model;
      var i = o.i ? ["d", o.i] : c.i(m), u = o.m ? ["d", o.m] : c.m(m);
      var h = '<div class="nj-lk" data-nj="' + m + '">', nt = [];
      h += '<a href="'
        + i[1]
        + '" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="'
        + (i[0] === "s" ? "nj-s" : "")
        + '">'
        + (i[0] === "s" ? T.infoS[L] : T.info[L])
        + "</a>";
      h += '<a href="'
        + u[1]
        + '" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="nj-m'
        + (u[0] === "s" ? " nj-s" : "")
        + '">'
        + (u[0] === "s" ? T.manS[L] : u[0] === "l" ? T.manL[L] : T.man[L])
        + "</a>";
      if (i[0] === "s" || u[0] === "s")
        nt.push(f(T.nS[L], m));
      if (u[0] === "l")
        nt.push(f(T.nL[L], m));
      if (nt.length)
        h += '<span class="nj-n">' + nt.join("<br>") + "</span>";
      return h + "</div>";
    } catch (e) {
      return "";
    }
  };
})();
</script>
<!-- =====================================================================
     在庫管理モジュール（スタッフ用） ※相談画面の上のバーの「🔐 在庫管理」から開く（暗証番号が必要）
     ・在庫データは上の「在庫データ」欄（id="inventory-data"）にあります
     ・この端末で編集した内容はブラウザ内に保存され、閉じると相談に反映されます
     ・メニュー「HTMLを書き出す」で在庫入りの新しい product-pc.html を保存 → サイトに上げ直すと全端末に反映
     ===================================================================== -->
<style id="inventory-css">
/* ===================== 在庫管理 UI（スタッフ用） ===================== */
.iv-root,.iv-sheet-wrap,.iv-toasts,.iv-reflect{--bg:#f4f6fb;--card:#fff;--ink:#0f172a;--sub:#64748b;--line:#e5e9f2;--pri:#2563eb;--pri2:#7c3aed;--ok:#16a34a;--warn:#f59e0b;--dng:#e11d48;
  --ease:cubic-bezier(.32,.72,0,1);--spring:cubic-bezier(.34,1.22,.64,1)}
.iv-root{position:fixed;inset:0;z-index:100002;background:var(--bg);color:var(--ink);overflow:auto;overscroll-behavior:contain;
  font-family:Plus Jakarta Sans,Noto Sans JP,Noto Sans SC,sans-serif;font-size:15px;opacity:0;visibility:hidden;transform:scale(.985);
  transition:opacity .35s var(--ease),transform .45s var(--ease),visibility 0s .45s}
.iv-root.on{opacity:1;visibility:visible;transform:none;transition:opacity .35s var(--ease),transform .45s var(--ease)}
.iv-root *,.iv-sheet-wrap *,.iv-toasts *{box-sizing:border-box}
/* 在庫管理の入口 */
.iv-gear{position:fixed;left:14px;bottom:14px;z-index:100001;display:flex;align-items:center;gap:8px;padding:10px 16px 10px 12px;border-radius:999px;border:none;background:linear-gradient(135deg,#0f172a,#312e81);color:#fff;font:800 .95rem Plus Jakarta Sans,Noto Sans JP,sans-serif;cursor:pointer;box-shadow:0 10px 26px #312e8166;transition:transform .3s cubic-bezier(.34,1.56,.64,1),opacity .3s}
.iv-gear small{font-size:.68rem;font-weight:700;opacity:.75;padding:2px 7px;border-radius:99px;background:#ffffff22}
.iv-gear .lk,.iv-entry .lk{display:inline-block;animation:lkWig 4s ease-in-out infinite}
@keyframes lkWig{0%,90%,100%{transform:none}93%{transform:rotate(-14deg)}96%{transform:rotate(12deg)}}
.iv-gear:hover{transform:translateY(-2px) scale(1.03)}
body.iv-app-on .iv-gear{opacity:0;pointer-events:none;transform:translateY(20px)}
.iv-entry{display:inline-flex;align-items:center;gap:5px;border:none;border-radius:999px;padding:7px 12px;background:linear-gradient(135deg,#0f172a,#4338ca);color:#fff;font:800 .82rem Plus Jakarta Sans,Noto Sans JP,sans-serif;cursor:pointer;white-space:nowrap;box-shadow:0 4px 12px #4338ca4d;flex:none;transition:transform .2s}
.iv-entry:hover{transform:translateY(-1px)}
.iv-entry:active{transform:scale(.95)}
@media (max-width:480px){.iv-entry{padding:7px 10px;font-size:.78rem}}
.iv-pin-in{position:relative;margin:22px 0 10px}
.iv-pin-in input{margin:0!important;padding-right:52px}
.iv-pin-in .eye{position:absolute;right:8px;top:50%;transform:translateY(-50%);width:40px;height:40px;border:none;border-radius:12px;background:#ffffff1a;color:#fff;cursor:pointer;font-size:1.05rem}

/* --- キネティック・タイポグラフィ --- */
.kt{display:inline-block;white-space:pre}
.kt>span{display:inline-block;opacity:0;transform:translateY(.6em) rotate(6deg);filter:blur(6px);animation:ktIn .7s var(--spring) forwards;animation-delay:calc(var(--i)*38ms)}
@keyframes ktIn{to{opacity:1;transform:none;filter:none}}
.kt.wave>span{animation:ktIn .7s var(--spring) forwards,ktWave 2.6s ease-in-out calc(1s + var(--i)*90ms) infinite}
@keyframes ktWave{0%,100%{transform:none}50%{transform:translateY(-3px)}}
.grad-text>span{background:linear-gradient(90deg,#93c5fd,#c4b5fd,#f9a8d4,#93c5fd);background-size:calc(var(--n,4) * 2em) 100%;background-position:calc(var(--i) * -1em) 0;-webkit-background-clip:text;background-clip:text;color:transparent;animation:ktIn .7s var(--spring) forwards,gradMove 5s linear calc(.8s + var(--i)*40ms) infinite}
@keyframes gradMove{to{background-position:calc(var(--i) * -1em - var(--n,4) * 2em) 0}}

/* --- ヘッダー --- */
.iv-top{position:sticky;top:0;z-index:5;background:linear-gradient(120deg,#0f172a,#1e1b4b 60%,#312e81);color:#fff;padding:14px 16px 16px;box-shadow:0 8px 30px #0f172a33}
.iv-top-row{display:flex;align-items:center;gap:10px;max-width:1100px;margin:0 auto}
.iv-ttl{font-size:1.35rem;font-weight:800;letter-spacing:.02em;line-height:1.2}
.iv-ttl small{display:block;font-size:.78rem;font-weight:600;opacity:.7;letter-spacing:.08em;margin-top:2px}
.iv-ibtn{width:42px;height:42px;border-radius:12px;border:1px solid #ffffff33;background:#ffffff14;color:#fff;font-size:1.1rem;cursor:pointer;flex:none;transition:background .2s,transform .2s}
.iv-ibtn:hover{background:#ffffff26}.iv-ibtn:active{transform:scale(.92)}
.iv-sp{flex:1}

/* --- 検索（オートコンプリート）・フィルター --- */
.iv-search{position:relative;max-width:1100px;margin:12px auto 0}
.iv-search input{width:100%;height:46px;border-radius:14px;border:none;padding:0 14px 0 42px;font-size:1rem;background:#ffffff;color:var(--ink);box-shadow:0 6px 20px #0f172a26;outline:none;transition:box-shadow .2s}
.iv-search input:focus{box-shadow:0 0 0 3px #a78bfa88,0 6px 20px #0f172a26}
.iv-search .ico{position:absolute;left:14px;top:50%;transform:translateY(-50%);opacity:.5}
.ac-box{position:absolute;left:0;right:0;top:calc(100% + 6px);background:#fff;border-radius:14px;box-shadow:0 18px 40px #0f172a2e;border:1px solid var(--line);overflow:hidden;z-index:20;transform-origin:top;animation:acIn .22s var(--ease)}
@keyframes acIn{from{opacity:0;transform:translateY(-6px) scaleY(.96)}}
.ac-it{display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;color:var(--ink);font-size:.92rem;animation:fadeUp .25s var(--ease) both;animation-delay:calc(var(--i)*30ms)}
.ac-it small{color:var(--sub);margin-left:auto;font-size:.78rem;white-space:nowrap}
.ac-it.on,.ac-it:hover{background:#eef2ff}
.ac-it mark{background:#fde68a;color:inherit;border-radius:3px;padding:0 1px}
.iv-chips{position:relative;display:flex;gap:4px;max-width:1100px;margin:12px auto 0;background:#ffffff1a;padding:4px;border-radius:999px;width:max-content;max-width:100%;overflow-x:auto;scrollbar-width:none}
.iv-chip{position:relative;z-index:1;border:none;background:none;color:#fff;padding:8px 14px;border-radius:999px;font-weight:700;font-size:.85rem;cursor:pointer;white-space:nowrap;opacity:.75;transition:color .3s,opacity .3s}
.iv-chip.on{color:var(--ink);opacity:1}
.iv-chip b{font-size:.72rem;margin-left:4px;padding:1px 6px;border-radius:99px;background:#ffffff33}
.iv-chip.on b{background:#e0e7ff}
.iv-pill{position:absolute;top:4px;bottom:4px;left:0;border-radius:999px;background:#fff;transition:transform .45s var(--spring),width .45s var(--spring);box-shadow:0 4px 12px #0f172a33}

/* --- 本体 --- */
.iv-main{max-width:1100px;margin:0 auto;padding:14px 14px 120px}
.iv-ptr{height:0;overflow:visible;display:flex;justify-content:center;position:relative;z-index:1}
.iv-ptr i{position:absolute;top:-6px;width:38px;height:38px;border-radius:50%;background:#fff;box-shadow:0 6px 18px #0f172a26;display:flex;align-items:center;justify-content:center;font-style:normal;color:var(--pri);font-size:1.1rem;opacity:0;transform:translateY(-40px) rotate(0)}
.iv-ptr.spin i{animation:spin .8s linear infinite}
@keyframes spin{to{transform:translateY(18px) rotate(360deg)}}

/* --- インフォグラフィック --- */
.iv-dash{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:12px}
.iv-kpi{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:14px;position:relative;overflow:hidden;animation:popIn .6s var(--spring) both;animation-delay:calc(var(--i)*70ms)}
.iv-kpi:after{content:"";position:absolute;right:-20px;top:-20px;width:80px;height:80px;border-radius:50%;background:var(--c);opacity:.12}
.iv-kpi .l{font-size:.75rem;font-weight:700;color:var(--sub)}
.iv-kpi .v{font-size:1.65rem;font-weight:800;margin-top:4px;font-variant-numeric:tabular-nums;color:var(--c)}
.iv-kpi .v small{font-size:.8rem;margin-left:2px;color:var(--sub)}
@keyframes popIn{from{opacity:0;transform:translateY(14px) scale(.96)}}
.iv-charts{display:grid;grid-template-columns:1.1fr 1fr 1fr;gap:10px;margin-bottom:14px}
.iv-charts>*,.iv-dash>*{min-width:0}
.iv-card{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:14px;animation:popIn .6s var(--spring) both;animation-delay:calc(var(--i)*90ms)}
.iv-card h4{font-size:.85rem;font-weight:800;margin-bottom:10px;display:flex;align-items:center;gap:6px}
.iv-donut{display:flex;gap:12px;align-items:center}
.iv-donut svg{width:118px;height:118px;flex:none;transform:rotate(-90deg)}
.iv-donut circle{fill:none;stroke-width:16;transition:stroke-dasharray 1.2s var(--ease),stroke-dashoffset 1.2s var(--ease)}
.iv-donut .ctr{position:relative}
.iv-donut .ctr b{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;font-size:1.3rem;font-weight:800}
.iv-donut .ctr b small{font-size:.65rem;color:var(--sub);font-weight:700}
.iv-leg{display:flex;flex-direction:column;gap:4px;font-size:.74rem;min-width:0}
.iv-leg span{display:flex;align-items:center;gap:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;animation:fadeUp .4s var(--ease) both;animation-delay:calc(.3s + var(--i)*60ms)}
.iv-leg i{width:9px;height:9px;border-radius:3px;flex:none}
.iv-bars{display:flex;align-items:flex-end;gap:8px;height:120px;padding-top:14px}
.iv-bar{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;height:100%;justify-content:flex-end}
.iv-bar div{width:100%;border-radius:8px 8px 4px 4px;background:linear-gradient(180deg,var(--pri2),var(--pri));height:0;transition:height 1s var(--spring);transition-delay:calc(var(--i)*90ms);position:relative}
.iv-bar div b{position:absolute;top:-18px;left:0;right:0;text-align:center;font-size:.72rem;font-weight:800;color:var(--ink)}
.iv-bar span{font-size:.66rem;color:var(--sub);font-weight:700;white-space:nowrap}
.iv-gauges{display:flex;gap:10px;justify-content:space-around}
.iv-gauge{text-align:center;font-size:.72rem;font-weight:700;color:var(--sub)}
.iv-gauge svg{width:96px;height:58px;display:block;margin:0 auto}
.iv-gauge path{fill:none;stroke-width:11;stroke-linecap:round}
.iv-gauge .fg{transition:stroke-dashoffset 1.3s var(--ease)}
.iv-gauge b{display:block;font-size:1.2rem;color:var(--ink);margin-top:-14px}
.iv-dash-tgl{display:flex;align-items:center;gap:8px;margin:2px 0 10px;font-size:.8rem;font-weight:800;color:var(--sub);cursor:pointer;user-select:none;border:none;background:none}
.iv-dash-tgl i{transition:transform .35s var(--spring);font-style:normal}
.iv-dash-wrap{display:grid;grid-template-rows:1fr;transition:grid-template-rows .45s var(--ease)}
.iv-dash-wrap>div{overflow:hidden}
.iv-dash-wrap.closed{grid-template-rows:0fr}
.iv-dash-tgl.closed i{transform:rotate(-90deg)}

/* --- 一覧（スワイプ操作） --- */
.iv-list{display:flex;flex-direction:column;gap:8px}
.iv-sec-h{font-size:.8rem;font-weight:800;color:var(--sub);margin:4px 2px 8px;display:flex;justify-content:space-between}
.sw{position:relative;border-radius:18px;overflow:hidden;animation:fadeUp .45s var(--ease) both;animation-delay:calc(var(--i)*35ms);transition:height .35s var(--ease),opacity .35s,margin .35s}
@keyframes fadeUp{from{opacity:0;transform:translateY(10px)}}
.sw-act{position:absolute;inset:1px;border-radius:17px;overflow:hidden;display:flex;justify-content:space-between;align-items:stretch;opacity:0;transition:opacity .2s}
.sw.rv .sw-act{opacity:1}
.sw-act button{border:none;color:#fff;font-weight:800;font-size:.8rem;width:84px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}
.sw-act button span{font-size:1.2rem}
.sw-l{display:flex}.sw-r{display:flex}
.sw-price{background:linear-gradient(135deg,#2563eb,#7c3aed)}
.sw-end{background:#f59e0b}.sw-del{background:#e11d48}.sw-rev{background:#16a34a}
.sw-row{position:relative;z-index:1;display:grid;grid-template-columns:58px 1fr auto;gap:12px;align-items:center;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:10px 12px;cursor:pointer;touch-action:pan-y;user-select:none;transition:transform .35s var(--spring),box-shadow .2s,border-color .2s;will-change:transform}
.sw-row.drag{transition:none}
.sw-row:hover{border-color:#c7d2fe;box-shadow:0 8px 22px #0f172a12}
.sw.ended .sw-row{background:#fafafa}
.sw.ended .sw-row .nm{text-decoration:line-through;text-decoration-color:#94a3b8;color:#64748b}
.sw.flash .sw-row{animation:flash 1.4s var(--ease)}
@keyframes flash{0%,40%{box-shadow:0 0 0 3px #a78bfa,0 10px 30px #7c3aed33}100%{box-shadow:none}}
.th{width:58px;height:46px;border-radius:12px;background:linear-gradient(135deg,#eef2ff,#fdf4ff);display:flex;align-items:center;justify-content:center;font-size:22px;object-fit:cover}
.nm{font-weight:800;line-height:1.35;font-size:.98rem}
.mt{display:flex;flex-wrap:wrap;gap:4px;margin-top:5px}
.tg{font-size:.68rem;font-weight:700;padding:2px 7px;border-radius:999px;background:#f1f5f9;color:#475569;white-space:nowrap}
.tg.end{background:#fee2e2;color:#be123c}.tg.loc{background:#fef3c7;color:#92400e}.tg.new{background:#dcfce7;color:#166534}.tg.mdl{background:#eef2ff;color:#3730a3;font-family:ui-monospace,monospace}
.pr{text-align:right}
.pr b{font-size:1.08rem;font-weight:800;font-variant-numeric:tabular-nums;display:block}
.pr small{font-size:.68rem;color:var(--sub)}
.more{border:none;background:#f1f5f9;border-radius:10px;width:34px;height:30px;cursor:pointer;margin-top:4px;color:#475569;font-weight:800}
.iv-hint{font-size:.74rem;color:var(--sub);text-align:center;margin:10px 0 0;display:flex;align-items:center;justify-content:center;gap:6px}
.iv-hint i{display:inline-block;animation:nudge 1.8s ease-in-out infinite;font-style:normal}
@keyframes nudge{0%,100%{transform:translateX(0)}50%{transform:translateX(-8px)}}
.iv-empty{text-align:center;padding:40px 10px;color:var(--sub)}
.iv-empty .big{font-size:2.6rem;animation:floatY 3s ease-in-out infinite}
@keyframes floatY{50%{transform:translateY(-8px)}}

/* --- スケルトン --- */
.sk{position:relative;overflow:hidden;background:#e8ecf4;border-radius:10px}
.sk:after{content:"";position:absolute;inset:0;transform:translateX(-100%);background:linear-gradient(90deg,transparent,#ffffffb3,transparent);animation:shimmer 1.2s infinite}
@keyframes shimmer{to{transform:translateX(100%)}}
.sk-row{display:grid;grid-template-columns:58px 1fr 70px;gap:12px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:18px;padding:10px 12px}
.sk-row .a{height:46px;border-radius:12px}.sk-row .b{height:14px;width:70%}.sk-row .c{height:10px;width:45%;margin-top:8px}.sk-row .d{height:18px}
.scan .iv-f input,.scan .iv-f select{color:transparent;background:#e8ecf4 linear-gradient(90deg,transparent,#ffffffb3,transparent) no-repeat;background-size:50% 100%;animation:skField 1.1s infinite;border-color:transparent}
@keyframes skField{from{background-position:-50% 0}to{background-position:150% 0}}

/* --- FAB（スピードダイヤル） --- */
.iv-fab{position:fixed;right:18px;bottom:22px;z-index:100003;display:flex;flex-direction:column;align-items:flex-end;gap:10px}
.iv-fab-main{width:62px;height:62px;border-radius:20px;border:none;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;font-size:1.6rem;cursor:pointer;box-shadow:0 14px 30px #4f46e566;transition:transform .4s var(--spring),border-radius .4s}
.iv-fab.open .iv-fab-main{transform:rotate(135deg);border-radius:50%}
.iv-fab-it{display:flex;align-items:center;gap:10px;opacity:0;transform:translateY(16px) scale(.8);pointer-events:none;transition:opacity .25s,transform .4s var(--spring)}
.iv-fab.open .iv-fab-it{opacity:1;transform:none;pointer-events:auto}
.iv-fab.open .iv-fab-it:nth-child(2){transition-delay:.05s}
.iv-fab-it span{background:#0f172a;color:#fff;font-size:.8rem;font-weight:700;padding:6px 10px;border-radius:9px;white-space:nowrap}
.iv-fab-it button{width:50px;height:50px;border-radius:16px;border:none;background:#fff;font-size:1.3rem;cursor:pointer;box-shadow:0 8px 20px #0f172a2e}

/* --- ボトムシート --- */
.iv-sheet-wrap{position:fixed;inset:0;z-index:100010;background:#0f172a00;transition:background .35s;display:flex;align-items:flex-end;justify-content:center;font-family:Plus Jakarta Sans,Noto Sans JP,Noto Sans SC,sans-serif;color:#0f172a}
.iv-sheet-wrap.on{background:#0f172a73}
.iv-sheet{width:100%;max-width:760px;max-height:94vh;background:#fff;border-radius:26px 26px 0 0;box-shadow:0 -20px 60px #0f172a40;transform:translateY(105%);transition:transform .55s var(--ease);display:flex;flex-direction:column;will-change:transform}
.iv-sheet-wrap.on .iv-sheet{transform:translateY(0)}
.iv-sheet.drag{transition:none}
.iv-sheet.tall{height:94vh}
.iv-grab{padding:10px 0 4px;cursor:grab;touch-action:none;flex:none}
.iv-grab:before{content:"";display:block;width:44px;height:5px;border-radius:9px;background:#cbd5e1;margin:0 auto}
.iv-sh-h{display:flex;align-items:center;gap:10px;padding:2px 18px 10px;flex:none;touch-action:none}
.iv-sh-h h3{font-size:1.15rem;font-weight:800;flex:1}
.iv-sh-x{width:36px;height:36px;border-radius:50%;border:none;background:#f1f5f9;cursor:pointer;font-size:1rem}
.iv-sh-b{overflow:auto;padding:0 18px 18px;flex:1;overscroll-behavior:contain}
.iv-sh-f{flex:none;display:flex;gap:8px;padding:12px 18px calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--line,#e5e9f2);background:#fff;flex-wrap:wrap}
@media (min-width:900px){.iv-sheet-wrap{align-items:center}.iv-sheet{border-radius:26px;max-height:90vh;transform:translateY(40px) scale(.97);opacity:0;transition:transform .45s var(--spring),opacity .3s}.iv-sheet-wrap.on .iv-sheet{opacity:1;transform:none}.iv-sheet.tall{height:90vh}}
.iv-menu{display:flex;flex-direction:column;gap:6px}
.iv-menu button,.iv-menu label{display:flex;align-items:center;gap:12px;padding:14px;border-radius:14px;border:1px solid #e5e9f2;background:#fff;font-size:.95rem;font-weight:700;cursor:pointer;text-align:left;animation:fadeUp .35s var(--ease) both;animation-delay:calc(var(--i)*45ms);color:#0f172a}
.iv-menu button:hover,.iv-menu label:hover{background:#f8fafc}
.iv-menu .e{font-size:1.3rem;width:30px;text-align:center}
.iv-menu small{display:block;font-weight:500;color:#64748b;font-size:.76rem;margin-top:1px}
.iv-menu .dng{color:#be123c}

/* --- ボタン（リップル） --- */
.iv-b{position:relative;overflow:hidden;border:none;border-radius:14px;padding:12px 16px;font-weight:800;font-size:.92rem;cursor:pointer;background:#eef2f7;color:#0f172a;white-space:nowrap;transition:transform .15s,box-shadow .2s;font-family:inherit}
.iv-b:active{transform:scale(.97)}
.iv-b.pri{background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;box-shadow:0 8px 20px #4f46e540}
.iv-b.ok{background:linear-gradient(135deg,#16a34a,#0d9488);color:#fff;box-shadow:0 8px 20px #16a34a40}
.iv-b.warn{background:#fef3c7;color:#92400e}.iv-b.dng{background:#ffe4e6;color:#be123c}
.iv-b.grow{flex:1}
.rp{position:absolute;border-radius:50%;background:currentColor;opacity:.25;transform:scale(0);animation:rp .6s ease-out forwards;pointer-events:none}
@keyframes rp{to{transform:scale(4);opacity:0}}

/* --- 編集フォーム --- */
.iv-sec{margin:18px 0 8px;font-weight:800;font-size:.92rem;display:flex;align-items:center;gap:8px}
.iv-sec:before{content:"";width:6px;height:18px;border-radius:9px;background:linear-gradient(180deg,#2563eb,#7c3aed)}
.iv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:10px}
.iv-f{position:relative}
.iv-f label{display:block;font-size:.72rem;font-weight:800;color:#64748b;margin-bottom:4px}
.iv-f input,.iv-f select,.iv-f textarea{width:100%;border:1.5px solid #dfe5ee;border-radius:12px;padding:10px 11px;font-size:.98rem;background:#fff;font-family:inherit;transition:border-color .2s,box-shadow .2s,background .4s;color:#0f172a}
.iv-f input:focus,.iv-f select:focus,.iv-f textarea:focus{outline:none;border-color:#818cf8;box-shadow:0 0 0 4px #e0e7ff}
.iv-f textarea{min-height:70px;resize:vertical}
.iv-f.wide{grid-column:1/-1}
.iv-f.got input,.iv-f.got select{animation:got 1.6s var(--ease);animation-delay:calc(var(--i)*90ms)}
@keyframes got{0%{background:#fff}15%{background:#dcfce7;border-color:#22c55e;transform:scale(1.03)}100%{background:#fff}}
.iv-f .ac-box{top:100%}
.iv-chk{display:flex;flex-wrap:wrap;gap:6px}
.iv-chk label{display:inline-flex;align-items:center;gap:5px;padding:7px 11px;border:1.5px solid #dfe5ee;border-radius:999px;font-size:.82rem;cursor:pointer;background:#fff;font-weight:700;transition:all .25s var(--spring)}
.iv-chk input{display:none}
.iv-chk label.auto{opacity:.85;cursor:default;border-style:dashed}
.iv-chk label.auto i{font-style:normal;font-size:.62rem;padding:1px 5px;border-radius:99px;background:#e0e7ff;color:#3730a3;margin-left:2px}
.iv-chk label.auto:not(:has(input:checked)){opacity:.45}
.iv-chk label:has(input:checked){background:#eef2ff;border-color:#818cf8;color:#3730a3;transform:scale(1.04)}
.iv-seg{display:flex;background:#f1f5f9;border-radius:12px;padding:3px;gap:3px}
.iv-seg button{flex:1;border:none;background:none;border-radius:9px;padding:8px 4px;font-weight:800;font-size:.95rem;cursor:pointer;color:#64748b;transition:all .25s}
.iv-seg button.on{background:#fff;color:#0f172a;box-shadow:0 2px 8px #0f172a1f}
.iv-kv,.iv-ln{display:grid;gap:6px;align-items:center;margin-bottom:8px;animation:fadeUp .3s var(--ease)}
.iv-kv{grid-template-columns:1fr 2fr 38px}
.iv-ln{grid-template-columns:140px 1fr 2fr 38px 38px}
.iv-kv input,.iv-ln input,.iv-ln select{border:1.5px solid #dfe5ee;border-radius:11px;padding:9px;font-size:.9rem;width:100%;min-width:0;font-family:inherit}
.iv-x,.iv-go{border:none;border-radius:10px;height:38px;cursor:pointer;font-weight:800}
.iv-x{background:#ffe4e6;color:#be123c}.iv-go{background:#e0e7ff;color:#3730a3}
.iv-drop{position:relative;border:2px dashed #c7d2fe;border-radius:18px;background:linear-gradient(135deg,#f8faff,#faf5ff);padding:16px;display:flex;gap:14px;align-items:center;flex-wrap:wrap}
.iv-shot{position:relative;width:200px;max-width:100%;border-radius:14px;overflow:hidden;background:#0f172a;flex:none}
.iv-shot img{display:block;width:100%}
.iv-shot.scan:after{content:"";position:absolute;left:0;right:0;height:3px;background:#22d3ee;box-shadow:0 0 14px 4px #22d3ee99;animation:laser 1.4s ease-in-out infinite alternate}
@keyframes laser{from{top:4%}to{top:94%}}
.iv-prog{height:8px;background:#e0e7ff;border-radius:99px;overflow:hidden;margin:8px 0 4px}
.iv-prog i{display:block;height:100%;width:0;background:linear-gradient(90deg,#2563eb,#7c3aed,#ec4899);transition:width .3s}
.iv-ocr-txt{width:100%;min-height:110px;border:1.5px solid #dfe5ee;border-radius:12px;padding:10px;font-size:.84rem;font-family:ui-monospace,monospace;margin-top:8px}
.iv-cand{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px;align-items:center;font-size:.74rem;color:#64748b;font-weight:700}
.iv-cand button{border:1.5px solid #c7d2fe;background:#eef2ff;border-radius:999px;padding:5px 10px;font-size:.8rem;cursor:pointer;font-weight:700;animation:popIn .4s var(--spring) both;animation-delay:calc(var(--i)*60ms)}
.iv-note{font-size:.76rem;color:#64748b;line-height:1.65;margin-top:6px}
.iv-diff{margin:14px 0;padding:14px;border-radius:16px;background:#f8fafc;border:1px solid #e5e9f2}
.iv-diff .row{display:flex;align-items:baseline;justify-content:center;gap:12px;font-variant-numeric:tabular-nums}
.iv-diff .old{color:#94a3b8;text-decoration:line-through;font-size:1rem}
.iv-diff .new{font-size:1.9rem;font-weight:800}
.iv-diff .pct{font-weight:800;padding:3px 9px;border-radius:999px;font-size:.85rem}
.iv-diff .pct.up{background:#ffe4e6;color:#be123c}.iv-diff .pct.dn{background:#dcfce7;color:#166534}
.iv-diff .meter{height:10px;border-radius:99px;background:#e2e8f0;margin-top:12px;overflow:hidden;position:relative}
.iv-diff .meter i{position:absolute;top:0;bottom:0;left:50%;border-radius:99px;transition:all .6s var(--spring)}
.iv-big-in{width:100%;font-size:2rem;font-weight:800;text-align:center;border:2px solid #c7d2fe;border-radius:16px;padding:12px;font-variant-numeric:tabular-nums}

/* --- PIN --- */
.iv-pin{min-height:100%;display:flex;align-items:center;justify-content:center;padding:20px;background:radial-gradient(circle at 30% 20%,#312e81,#0f172a 60%)}
.iv-pin-c{width:100%;max-width:360px;text-align:center;color:#fff}
.iv-pin-c .lock{font-size:2.6rem;display:inline-block;animation:floatY 3s ease-in-out infinite}
.iv-pin-c h2{font-size:1.7rem;font-weight:800;margin:10px 0 4px}
.iv-pin-c p{opacity:.7;font-size:.9rem}
.iv-pin-c input{width:100%;height:56px;font-size:1.25rem;text-align:center;letter-spacing:.2em;border:1.5px solid #ffffff33;border-radius:16px;margin:22px 0 10px;background:#ffffff14;color:#fff;outline:none}
.iv-pin-c input:focus{border-color:#a78bfa;box-shadow:0 0 0 4px #a78bfa44}
.iv-pin-c .err{color:#fda4af;font-size:.85rem;min-height:1.3em;margin-bottom:8px}
.shake{animation:shake .45s}
@keyframes shake{20%,60%{transform:translateX(-9px)}40%,80%{transform:translateX(9px)}}
.iv-pin-c .iv-b{width:100%;margin-top:8px}
.iv-pin-c .ghost{background:transparent;color:#fff;border:1px solid #ffffff33}

/* --- トースト --- */
.iv-toasts{position:fixed;left:50%;bottom:20px;transform:translateX(-50%);z-index:100020;display:flex;flex-direction:column-reverse;gap:8px;width:min(92vw,440px);pointer-events:none;font-family:Plus Jakarta Sans,Noto Sans JP,Noto Sans SC,sans-serif}
body.iv-has-sheet .iv-toasts{bottom:96px}
.iv-toasts{transition:bottom .35s cubic-bezier(.2,.8,.2,1)}
.iv-toast{pointer-events:auto;position:relative;overflow:hidden;display:flex;align-items:center;gap:10px;background:#0f172a;color:#fff;border-radius:16px;padding:12px 14px;box-shadow:0 14px 34px #0f172a59;animation:tIn .5s var(--spring,cubic-bezier(.34,1.56,.64,1));touch-action:pan-y;font-size:.9rem;line-height:1.45;transition:transform .3s,opacity .3s}
.iv-toast.out{animation:tOut .35s ease forwards}
@keyframes tIn{from{opacity:0;transform:translateY(30px) scale(.9)}}
@keyframes tOut{to{opacity:0;transform:translateY(20px) scale(.92)}}
.iv-toast .ic{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex:none;font-size:.95rem;background:#ffffff1f}
.iv-toast.ok .ic{background:#16a34a}.iv-toast.warn .ic{background:#f59e0b}.iv-toast.err .ic{background:#e11d48}
.iv-toast .tx{flex:1;min-width:0}
.iv-toast button{border:none;background:#ffffff1f;color:#c4b5fd;font-weight:800;border-radius:10px;padding:7px 10px;cursor:pointer;white-space:nowrap}
.iv-toast .bar{position:absolute;left:0;bottom:0;height:3px;background:linear-gradient(90deg,#60a5fa,#a78bfa);animation:tBar linear forwards}
@keyframes tBar{from{width:100%}to{width:0}}

/* --- 反映中 --- */
.iv-reflect{position:fixed;inset:0;z-index:100030;background:#0f172ae6;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;color:#fff;font-family:Plus Jakarta Sans,Noto Sans JP,sans-serif;animation:fadeIn .3s}
@keyframes fadeIn{from{opacity:0}}
.iv-reflect .t{font-size:1.4rem;font-weight:800}
.iv-reflect .dots{display:flex;gap:6px}.iv-reflect .dots i{width:10px;height:10px;border-radius:50%;background:#a78bfa;animation:dot 1s infinite;animation-delay:calc(var(--i)*.15s)}
@keyframes dot{50%{transform:translateY(-8px);opacity:.4}}

@media (max-width:820px){.iv-dash{grid-template-columns:repeat(2,1fr)}.iv-charts{grid-template-columns:1fr}}
@media (max-width:640px){.iv-ln{grid-template-columns:1fr 38px 38px}.iv-ln select,.iv-ln input{grid-column:1/2}.iv-ln .iv-go{grid-column:2;grid-row:1}.iv-ln .iv-x{grid-column:3;grid-row:1}
  .iv-kv{grid-template-columns:1fr 1fr 38px}.iv-ttl{font-size:1.15rem}.iv-kpi .v{font-size:1.35rem}.sw-row{grid-template-columns:48px 1fr auto;gap:10px}.th{width:48px;height:40px}}
@media (prefers-reduced-motion:reduce){.iv-root *,.iv-sheet-wrap *,.iv-toasts *{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
/* お客様画面：参考リンク */
.nj-lk a.nj-r{background:#f8fafc}

/* ---- 在庫／ヒアリング タブ ---- */
.iv-tabs{position:relative;display:flex;gap:4px;max-width:1100px;margin:12px auto 0;padding:4px;border-radius:14px;background:#ffffff1a;width:max-content}
.iv-tab{position:relative;z-index:1;border:none;background:none;color:#fff;font-weight:800;font-size:.9rem;padding:9px 18px;border-radius:11px;cursor:pointer;opacity:.75;transition:color .3s,opacity .3s}
.iv-tab.on{color:#0f172a;opacity:1}
.iv-tabpill{position:absolute;top:4px;bottom:4px;left:4px;border-radius:11px;background:#fff;box-shadow:0 4px 12px #0f172a33;transition:transform .5s var(--ease),width .5s var(--ease)}
.iv-root.mode-hear .iv-search,.iv-root.mode-hear #iv-chips,.iv-root.mode-hear .iv-dash-tgl,.iv-root.mode-hear #iv-dash,.iv-root.mode-hear .iv-main>.iv-sec-h,.iv-root.mode-hear #iv-list,.iv-root.mode-hear .iv-hint,.iv-root.mode-hear #iv-fab,.iv-root.mode-hear #iv-ptr{display:none!important}
.iv-root:not(.mode-hear) #iv-hear{display:none}
/* ---- ヒアリング設定 ---- */
.hv-store{display:flex;gap:10px;align-items:flex-end;background:#fff;border:1px solid var(--line);border-radius:18px;padding:14px;margin-bottom:8px;animation:popIn .5s var(--spring) both}
.hv-list{display:flex;flex-direction:column;gap:8px;margin-bottom:18px}
.hq-row{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:12px 14px;cursor:pointer;transition:opacity .3s,background .3s,border-color .2s,transform .4s var(--ease);animation:fadeUp .45s var(--ease) both;animation-delay:calc(var(--i)*30ms)}
.hq-row:hover{border-color:#c7d2fe}
.hq-row:active{transform:scale(.985)}
.hq-row.off{background:#f8fafc}.hq-row.off .nm{color:#94a3b8;text-decoration:line-through}
.hq-tx{flex:1;min-width:0}
.hq-tx .nm{font-weight:800;line-height:1.45;word-break:auto-phrase}
.hv-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:6px}
/* iOS風スイッチ */
.tgl{position:relative;display:inline-block;width:52px;height:32px;flex:none;cursor:pointer}
.tgl input{position:absolute;opacity:0;width:0;height:0}
.tgl span{position:absolute;inset:0;border-radius:99px;background:#e2e8f0;transition:background .3s var(--ease)}
.tgl span:after{content:"";position:absolute;left:3px;top:3px;width:26px;height:26px;border-radius:50%;background:#fff;box-shadow:0 2px 6px #0f172a33;transition:transform .35s var(--ease)}
.tgl input:checked+span{background:#34c759}
.tgl input:checked+span:after{transform:translateX(20px)}
.tgl input:disabled+span{opacity:.5;cursor:not-allowed}
.tgl.sm{width:44px;height:26px}.tgl.sm span:after{width:20px;height:20px}.tgl.sm input:checked+span:after{transform:translateX(18px)}
.hv-opt{border:1px solid #e5e9f2;border-radius:14px;padding:10px 12px;margin-bottom:8px;background:#fff;transition:opacity .3s,background .3s}
.hv-opt.off{opacity:.55;background:#f8fafc}
.hv-opt-h{display:flex;align-items:center;gap:8px;margin-bottom:6px}
.hv-opt-h b{font-size:.88rem;line-height:1.4;min-width:0}
.hv-opt-h .sp{flex:1}
.hv-opt-h .iv-go,.hv-opt-h .iv-x{width:36px;flex:none}
.hv-more{grid-column:1/-1;font-size:.78rem;color:#64748b}
.hv-more summary{cursor:pointer;font-weight:700;padding:4px 0}
@media (max-width:640px){.hv-store{flex-direction:column;align-items:stretch}}
</style>
<script id="inventory-js">
/* =====================================================================
   在庫データの読み込み（相談アプリより先に動く）
   window.NJ_INV.products() … 販売中の在庫を相談アプリに渡す
   ===================================================================== */
window.NJ_INV = (function () {
  "use strict";
  var el = document.getElementById("inventory-data");
  var BASE = JSON.parse(el.textContent);
  var ST = window.NJ_STORE, HD = document.getElementById("hearing-data"), PAGE = BASE.category;
  try { PAGE = JSON.parse(HD.textContent).category || PAGE; } catch (e) {}
  // 成田店以外：GitHub の stores/<店舗ID>/<ページ>.json に置いた在庫を、その店舗の公開データとして使う
  var PUB = ST && ST.pub(PAGE + ".json");
  if (PUB && PUB.inventory && Array.isArray(PUB.inventory.items)) BASE = PUB.inventory;
  var LKEY = ST ? ST.key("nj-inventory-" + BASE.category + "-v1") : "nj-inventory-" + BASE.category + "-v1";   // この端末での編集（店舗ごと）
  ST && ST.sync(PAGE + ".json");   // この端末での編集内容

  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function local() {
    try { var v = JSON.parse(localStorage.getItem(LKEY) || "null"); if (v && v.items) return v; } catch (e) {}
    return { items: {}, removed: [] };
  }
  function saveLocal(v) {
    try { localStorage.setItem(LKEY, JSON.stringify(v)); return true; }
    catch (e) { alert("端末に保存できませんでした（容量不足の可能性）。写真を外すか、HTMLを書き出してください。"); return false; }
  }
  // 公開データ ＋ この端末の編集 を合わせた在庫
  function all() {
    var L = local(), out = [], seen = {};
    BASE.items.forEach(function (it) {
      if (L.removed.indexOf(it.id) >= 0) return;
      var x = L.items[it.id] ? clone(L.items[it.id]) : clone(it);
      if (L.items[it.id]) x._local = true;
      seen[it.id] = 1; out.push(x);
    });
    Object.keys(L.items).forEach(function (id) {
      if (seen[id] || L.removed.indexOf(id) >= 0) return;
      var x = clone(L.items[id]); x._local = true; x._new = true; out.push(x);
    });
    return out;
  }
  function gradeAuto(p) {
    var w = +p.weight || 0, r = +p.ram || 0, pr = +p.price || 0, s = +p.screen || 0;
    return {
      portability: w && w < 1.1 ? "◎" : w && w < 1.6 ? "◯" : "△",
      perf: r >= 16 ? "◎" : r >= 8 ? "◯" : "△",
      cost: pr && pr < 100000 ? "◎" : pr && pr < 170000 ? "◯" : "△",
      screen: s >= 15.6 ? "◎" : s >= 14 ? "◯" : "△",
      battery: "◯"
    };
  }
  // 相談アプリ用の形に整える
  // ---- メーカー名のゆれをそろえる（Fujitsu → 富士通 など）
  var MAKER_ALIAS = [
    ["Lenovo", /^(lenovo|レノボ)$/i], ["富士通", /^(富士通|fujitsu|fmv)$/i], ["NEC", /^(nec|ｎｅｃ|lavie)$/i],
    ["Dynabook", /^(dynabook|ダイナブック|東芝|toshiba)$/i], ["VAIO", /^(vaio|バイオ)$/i], ["Apple", /^(apple|アップル)$/i],
    ["HP", /^(hp|ヒューレット・?パッカード)$/i], ["Dell", /^(dell|デル)$/i], ["ASUS", /^(asus|エイスース)$/i], ["Acer", /^(acer|エイサー)$/i],
    ["Microsoft", /^(microsoft|マイクロソフト|surface)$/i], ["Panasonic", /^(panasonic|パナソニック)$/i]
  ];
  function canonMaker(m) {
    m = String(m || "").trim();
    for (var i = 0; i < MAKER_ALIAS.length; i++) if (MAKER_ALIAS[i][1].test(m)) return MAKER_ALIAS[i][0];
    return m;
  }
  // ---- メーカーとスペックで決まるタグは自動でそろえる（手入力のばらつき防止）
  var AUTO_TAGS = ["japan", "vaio", "ai", "large", "light", "desktop"];
  function autoTags(p) {
    var t = (p.tags || []).filter(function (x) { return AUTO_TAGS.indexOf(x) < 0 || x === "ai"; });
    var mk = canonMaker(p.maker), desk = p.groupId === "desktop_fh";
    if (mk === "富士通" || mk === "NEC" || mk === "Dynabook") t.push("japan");   // 国内メーカー（相談の選択肢どおり）
    if (mk === "VAIO") t.push("vaio");
    if (/core\s*ultra|ryzen\s*ai|snapdragon\s*x|apple\s*m[0-9]/i.test(p.cpu || "") && t.indexOf("ai") < 0) t.push("ai");
    if (+p.screen >= 15.3) t.push("large");
    if (!desk && +p.weight > 0 && +p.weight < 1.4) t.push("light");
    if (desk) t.push("desktop");
    return t.filter(function (x, i) { return t.indexOf(x) === i; });
  }
  var SC = BASE.schema || {};
  function products() {
    if (BASE.category !== "pc") return all().filter(function (p) { return p.status !== "ended" && p.model && +p.price > 0; }).map(function (p) {
      // 相談アプリ側の項目名に合わせる（例：エアコンは price→setPrice、model→inModel）
      p.price = +p.price;
      (SC.fields || []).forEach(function (fd) { if (fd.t === "number" && p[fd.k] !== "" && p[fd.k] != null) p[fd.k] = +p[fd.k]; });
      var mp = SC.map || {};
      Object.keys(mp).forEach(function (k) { p[mp[k]] = p[k]; });
      var g = {}; (SC.grades || []).forEach(function (x) { g[x[0]] = "◯"; });
      p.grades = Object.assign(g, p.grades || {});
      p.desc = p.desc && p.desc.ja ? p.desc : { ja: p.note && p.note.indexOf("【要確認】") !== 0 ? p.note : (p.name || ""), en: "", zh: "" };
      p.tags = p.tags || [];
      p.groupId = p.groupId || (BASE.groups[0] && BASE.groups[0].id);
      return p;
    });
    return all().filter(function (p) { return p.status !== "ended" && p.model && +p.price > 0; }).map(function (p) {
      p.price = +p.price; p.ram = +p.ram || 0; p.ssd = +p.ssd || 0; p.screen = +p.screen || 0; p.weight = +p.weight || 0;
      p.maker = canonMaker(p.maker);
      p.tags = autoTags(p); p.grades = Object.assign(gradeAuto(p), p.grades || {});   // 空欄の評価はスペックから自動
      p.desc = p.desc && p.desc.ja ? p.desc : { ja: p.note || p.name || "", en: "", zh: "" };
      p.office = p.office || "なし"; p.groupId = p.groupId || (BASE.groups[0] && BASE.groups[0].id);
      return p;
    });
  }

  // ---- お客様画面のリンク表示：在庫に登録したリンクを使う（公式・取説・参考）
  var LBL = {
    official: ["🔗 メーカー公式の詳細情報", "🔗 Official product page", "🔗 厂商官方产品详情"],
    manual: ["📘 取扱説明書", "📘 User manual", "📘 使用说明书"],
    ref: ["📎 参考リンク", "📎 Reference", "📎 参考链接"]
  };
  function li() { try { return currentLang === "en" ? 1 : currentLang === "zh" ? 2 : 0; } catch (e) { return 0; } }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function safeUrl(u) { return /^https?:\/\//i.test(u || "") ? u : ""; }
  var orig = window.njLinks;
  window.njLinks = function (p) {
    var ls = (p && p.links || []).filter(function (l) { return safeUrl(l.url); });
    if (!ls.length) return orig ? orig(p) : "";
    var O = { official: 0, manual: 1, ref: 2 }; ls.sort(function (a, b) { return (a.type in O ? O[a.type] : 2) - (b.type in O ? O[b.type] : 2); });
    return '<div class="nj-lk" data-nj="' + esc(p.model) + '">' + ls.map(function (l) {
      var srch = /google\.[a-z.]+\/search/.test(l.url);
      var lab = l.type === "ref" && l.title ? "📎 " + l.title
        : srch ? (l.type === "manual" ? ["🔎 メーカーサイトで取扱説明書を検索", "🔎 Search the maker site for the manual", "🔎 在厂商网站搜索说明书"] : ["🔎 メーカーサイトで型番を検索", "🔎 Search the maker site by model", "🔎 在厂商网站按型号搜索"])[li()]
        : (LBL[l.type] || LBL.ref)[li()];
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="'
        + (l.type === "manual" ? "nj-m" : l.type === "ref" ? "nj-r" : "") + '">' + esc(lab) + "</a>";
    }).join("") + "</div>";
  };
  window.__njLinksAuto = orig;

  // ---- 結果カードへリンクを差し込む（njLinks を呼ばないアプリ用）
  function autoLinks(p) {
    var m = encodeURIComponent(p.model || p.name || ""), mk = encodeURIComponent((p.maker || "") + " ");
    return [{ type: "official", url: "https://www.google.com/search?q=" + mk + m }, { type: "manual", url: "https://www.google.com/search?q=" + mk + m + "+%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8" }];
  }
  function injectLinks(rootId, sel) {
    var root = null, busy = false;   // 相談画面はあとから作られることがあるので毎回さがす
    // おすすめカード（.fr-rec / .sv-rec）ごとに、カード内の商品名・型番から商品を特定してリンクを付ける
    function run() {
      root = document.getElementById(rootId); if (busy || !root) return; busy = true;
      try {
        var cards = root.querySelectorAll(sel || ".fr-rec,.sv-rec");
        if (cards.length) {
          var ps = products();
          Array.prototype.forEach.call(cards, function (c) {
            if (c.querySelector(".nj-lk")) return;
            var nm = c.querySelector("[class$='-name']"), t = (nm && nm.textContent) || c.textContent || "", hit = null;
            var best = 0;   // いちばん長く一致した商品を採用（型番の前方一致の取り違え防止）
            function scan(txt) { ps.forEach(function (p) { [p.model, p.name].forEach(function (k) { k = String(k || ""); if (k.length >= 4 && k.length > best && txt.indexOf(k) >= 0) { hit = p; best = k.length; } }); }); }
            scan(t); if (!hit && nm) scan(c.textContent || "");
            if (!hit) return;
            var html = window.njLinks(Object.assign({}, hit, { links: (hit.links && hit.links.length) ? hit.links : autoLinks(hit) }));
            if (html) c.insertAdjacentHTML("beforeend", html);
          });
        }
      } catch (e) { console.warn("nj links", e); }
      busy = false;
    }
    var tm; new MutationObserver(function (ms) {
      for (var i = 0; i < ms.length; i++) { var t = ms[i].target; if (t.closest && t.closest(".nj-lk")) continue; if (!tm) tm = setTimeout(function () { tm = 0; run(); setTimeout(run, 700); setTimeout(run, 1600); }, 150); return; }
    }).observe(document.body, { childList: true, subtree: true });
    run();
  }

  return { injectLinks: injectLinks, AUTO_TAGS: AUTO_TAGS, autoTags: autoTags, canonMaker: canonMaker, BASE: BASE, LKEY: LKEY, all: all, products: products, local: local, saveLocal: saveLocal, gradeAuto: gradeAuto, clone: clone, esc: esc, safeUrl: safeUrl };
})();
</script>
<script id="hearing-js">
/* =====================================================================
   ヒアリング設定（店舗ごとのアレンジ）の読み込み
   公開データ：上の「ヒアリング設定」欄（id="hearing-data"）／この端末の編集：ブラウザ内
   ===================================================================== */
window.NJ_HEAR = (function () {
  "use strict";
  var el = document.getElementById("hearing-data");
  var BASE = { storeName: "", version: "", questions: {}, custom: [] };
  try { if (el) BASE = Object.assign(BASE, JSON.parse(el.textContent)); } catch (e) {}
  var STH = window.NJ_STORE, PH = STH && STH.pub((BASE.category || "pc") + ".json");
  if (PH && PH.hearing) BASE = Object.assign(BASE, PH.hearing);
  if (STH && !STH.isDefault && !BASE.storeName) BASE.storeName = STH.name;   // 店舗名（スタッフ確認シート用）
  var LKEY = STH ? STH.key("nj-hearing-" + (BASE.category || "pc") + "-v1") : "nj-hearing-" + (BASE.category || "pc") + "-v1";
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function local() { try { return JSON.parse(localStorage.getItem(LKEY) || "null"); } catch (e) { return null; } }
  function cfg() { var l = local(); var c = l || clone(BASE); c.questions = c.questions || {}; c.custom = c.custom || []; return c; }
  function save(c) { try { localStorage.setItem(LKEY, JSON.stringify(c)); return true; } catch (e) { return false; } }
  function reset() { try { localStorage.removeItem(LKEY); } catch (e) {} }
  // ---------------------------------------------------------------------
  // 汎用フック：相談アプリの質問配列に、店舗ごとの設定（非表示・文言・選択肢・オリジナル質問）を反映
  //   schema "std" … { id, st, t, h, o:[[ラベル, 値], ...] }（t/h/o は配列 or 関数）
  //   schema "tb"  … { id, title:{ja,en,zh}, options:[{ text:{ja,en,zh}, val }] }（配列ごとに1段階）
  // ---------------------------------------------------------------------
  function key(v) { return typeof v === "string" ? v : JSON.stringify(v); }
  function arr3(x) {
    if (Array.isArray(x)) return [x[0] || "", x[1] || x[0] || "", x[2] || x[0] || ""];
    if (x && typeof x === "object") return [x.ja || "", x.en || x.ja || "", x.zh || x.ja || ""];
    return [String(x == null ? "" : x), "", ""];
  }
  function ov3(o) { return o && o.ja ? [o.ja, o.en || o.ja, o.zh || o.ja] : null; }
  function like(sample, a3) {   // 元の形（配列 or {ja,en,zh}）に合わせる
    return Array.isArray(sample) || sample == null ? a3 : { ja: a3[0], en: a3[1], zh: a3[2] };
  }
  function call(f) { try { return typeof f === "function" ? f() : f; } catch (e) { return null; } }
  var DEFS = [], STG = [], LOCK = [], CUSTOM = [];
  function hook(arrs, opt) {
    opt = opt || {};
    var c = cfg(), schema = opt.schema || "std", lock = opt.lock || [];
    LOCK = lock.slice();
    if (schema === "std" && arrs[0] && arrs[0][0] && LOCK.indexOf(arrs[0][0].id) < 0) LOCK.push(arrs[0][0].id);   // 最初の質問は流れの起点
    // 質問の順番を id の一覧（例：{1:[...],2:[...]}）で持つアプリ用
    var flow = opt.flow || null, fkeys = flow ? Object.keys(flow).map(Number).sort(function (a, b) { return a - b; }) : [];
    function stageOf(id) { for (var i = 0; i < fkeys.length; i++) if (flow[fkeys[i]].indexOf(id) >= 0) return fkeys[i]; return null; }
    if (flow && fkeys.length && flow[fkeys[0]][0] && LOCK.indexOf(flow[fkeys[0]][0]) < 0) LOCK.push(flow[fkeys[0]][0]);
    lock = LOCK;
    arrs.forEach(function (arr, ai) {
      if (!Array.isArray(arr)) return;
      var drop = [];
      arr.forEach(function (q, qi) {
        if (!q || !q.id) return;
        var st = flow ? stageOf(q.id) : schema === "tb" ? ai : q.st, qc = c.questions[q.id] || {};
        if (flow && st === null) return;   // 流れで使っていない質問は対象外
        // --- 編集画面用に、元の内容を控える
        if (!DEFS.some(function (d) { return d.id === q.id; })) {
          var t = schema === "tb" ? q.title : call(q.t), h = schema === "tb" ? (opt.hints ? opt.hints[q.id] : q.hint) : call(q.h);
          var oo = schema === "tb" ? (q.options || []).map(function (o) { return { v: key(o.val), l: arr3(o.text) }; })
            : (call(q.o) || []).map(function (o) { return { v: key(o[1]), l: arr3(o[0]) }; });
          DEFS.push({ id: q.id, st: st, cond: !!q.show, t: arr3(t), h: h ? arr3(h) : ["", "", ""], o: typeof q.o === "function" && q.id !== "size" ? oo : oo, dyn: typeof q.o === "function" });
        }
        // --- 非表示
        if (qc.hidden && lock.indexOf(q.id) < 0 && !(schema === "std" && qi === 0 && ai === 0)) {
          if (flow) fkeys.forEach(function (k) { var j = flow[k].indexOf(q.id); j >= 0 && flow[k].splice(j, 1); });
          else drop.push(q);
          return;
        }
        // --- 文言
        var nt = ov3(qc.t), nh = ov3(qc.h);
        if (schema === "tb") {
          nt && (q.title = { ja: nt[0], en: nt[1], zh: nt[2] });
          nh && opt.hints && (opt.hints[q.id] = nh);
        } else {
          if (nt) { var t0 = call(q.t); q.t = typeof q.t === "function" ? function () { return like(t0, nt); } : like(q.t, nt); if (q.tn) q.tn = like(q.tn, nt); }
          if (nh) { var h0 = call(q.h); q.h = typeof q.h === "function" ? function () { return like(h0, nh); } : like(q.h, nh); if (q.hn) q.hn = like(q.hn, nh); }
        }
        // --- 選択肢（非表示・言い回し・並び順）
        var ocfg = qc.opts || {}, order = qc.order || [];
        if (!Object.keys(ocfg).length && !order.length) return;
        function tr(list, isTb) {
          if (!Array.isArray(list)) return list;
          var a = list.filter(function (o) { var k = key(isTb ? o.val : o[1]); return !(ocfg[k] && ocfg[k].hidden); }).map(function (o) {
            var k = key(isTb ? o.val : o[1]), lb = ocfg[k] && ov3(ocfg[k].label);
            if (!lb) return o;
            if (isTb) { var n = Object.assign({}, o); n.text = { ja: lb[0], en: lb[1], zh: lb[2] }; return n; }
            return [like(o[0], lb), o[1]];
          });
          if (a.length < 1) a = list;
          if (order.length) a.sort(function (x, y) { return (order.indexOf(key(isTb ? x.val : x[1])) + 1 || 999) - (order.indexOf(key(isTb ? y.val : y[1])) + 1 || 999); });
          return a;
        }
        if (schema === "tb") q.options = tr(q.options, true);
        else if (typeof q.o === "function") { var f = q.o; q.o = function () { return tr(f.apply(this, arguments), false); }; }
        else q.o = tr(q.o, false);
      });
      drop.forEach(function (q) { var i = arr.indexOf(q); i >= 0 && arr.splice(i, 1); });
    });
    // --- 店舗オリジナルの質問
    (c.custom || []).forEach(function (x) {
      if (!x || x.hidden || !x.t || !x.t.ja) return;
      var os = (x.o || []).filter(function (o) { return o && o.label && o.label.ja; });
      if (os.length < 2) return;
      var id = "x_" + x.id, st = +x.st || 0;
      CUSTOM.push({ id: id, t: ov3(x.t), o: os.map(function (o) { return ov3(o.label); }) });
      if (schema === "tb") {
        var target = flow ? arrs[0] : (arrs[st] || arrs[arrs.length - 1]);
        if (opt.hints) opt.hints[id] = ov3(x.h) || ["", "", ""];
        if (flow) { var fk = fkeys.indexOf(st) >= 0 ? st : fkeys[fkeys.length - 1]; var fl = flow[fk], at = fk === fkeys[fkeys.length - 1] ? fl.length : fl.length; fl.splice(at, 0, id); }
        target.push({ id: id, custom: true, title: { ja: x.t.ja, en: x.t.en || x.t.ja, zh: x.t.zh || x.t.ja }, options: os.map(function (o, i) { return { text: { ja: o.label.ja, en: o.label.en || o.label.ja, zh: o.label.zh || o.label.ja }, val: id + "_" + i }; }) });
      } else {
        var samp = (arrs[0] || [])[0] || {}, tS = call(samp.t), oS = (call(samp.o) || [[[]]])[0][0];
        // 同じステップを持つ流れすべてに入れる（例：ドライヤーとヘアアイロンの両方の流れ）
        var targets = arrs.filter(function (a) { return Array.isArray(a) && a.some(function (q) { return q.st === st; }); });
        if (!targets.length) targets = [arrs[0]];
        targets.forEach(function (tg) {
          var base = {};   // 元の質問にある配列項目（例：効く評価軸 k）は空で用意して、表示処理が止まらないようにする
          Object.keys(samp).forEach(function (pk) { if (Array.isArray(samp[pk]) && ["t", "h", "o", "tn", "hn"].indexOf(pk) < 0) base[pk] = []; });
          tg.push(Object.assign(base, opt.customExtra || {}, {
            id: id, custom: true, st: st, t: like(tS, ov3(x.t)), h: like(tS, ov3(x.h) || ["", "", ""]),
            o: os.map(function (o, i) { return [like(oS, ov3(o.label)), id + "_" + i]; })
          }));
        });
      }
    });
    var sts = []; DEFS.forEach(function (d) { sts.indexOf(d.st) < 0 && sts.push(d.st); });
    sts.sort(function (a, b) { return a - b; });
    STG = sts.map(function (s, i) {
      var first = DEFS.filter(function (d) { return d.st === s; })[0];
      return [s, "ステップ" + (i + 1) + (first ? "（" + first.t[0].replace(/[？?].*$/, "").slice(0, 18) + "…）" : "")];
    });
    if (opt.stageNames) STG = STG.map(function (x) { return [x[0], opt.stageNames[x[0]] || x[1]]; });
    window.NJ_HEAR_DEFS = { defs: function () { return DEFS; }, stages: STG, locked: LOCK, custom: opt.noCustom ? false : true };
    if (opt.root) watchSheet(opt.root);
  }
  // ---- スタッフ確認シート：店舗名と、店舗オリジナル質問の答えを書き足す
  function watchSheet(rootId) {
    var root = document.getElementById(rootId); if (!root) return;
    var ans = {};
    root.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest("button,[data-a],[data-v],[data-i]"); if (!b) return;
      var box = b.closest('[class$="-q"],.fr-q,.sv-q,.tb-q') || root, h = box.querySelector("h2,h3");
      var title = h ? h.textContent.trim() : "";
      CUSTOM.forEach(function (c) {
        if (c.t.indexOf(title) < 0) return;
        var txt = b.textContent.trim();
        c.o.forEach(function (o) { o.some(function (l) { return l && txt.indexOf(l) >= 0; }) && (ans[c.id] = { t: c.t, o: o }); });
      });
    }, true);
    function li() { try { return currentLang === "en" ? 1 : currentLang === "zh" ? 2 : 0; } catch (e) { return 0; } }
    function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
    new MutationObserver(function () {
      var ss = root.querySelector(".fr-ss,.sv-ss,[class$='-ss']");
      if (!ss || ss.getAttribute("data-nj")) return;
      ss.setAttribute("data-nj", "1");
      var c = cfg();
      if (c.storeName && ss.textContent.indexOf(c.storeName) < 0) {
        var hd = ss.firstElementChild, tag = document.createElement("b");
        tag.style.cssText = "font-size:.86rem;color:#111827;margin-left:auto"; tag.textContent = c.storeName;
        hd && hd.style && (hd.style.display = "flex", hd.style.alignItems = "center", hd.style.gap = "8px"); hd ? hd.appendChild(tag) : ss.insertBefore(tag, ss.firstChild);
      }
      var tb = ss.querySelector("table");
      Object.keys(ans).forEach(function (id) {
        var a = ans[id]; if (ss.textContent.indexOf(a.t[li()] || a.t[0]) >= 0) return;
        var row = "<tr><td>" + esc((a.t[li()] || a.t[0]).replace(/[？?]$/, "")) + "</td><td>" + esc(a.o[li()] || a.o[0]) + "</td></tr>";
        if (tb) (tb.tBodies[0] || tb).insertAdjacentHTML("beforeend", row);
        else ss.insertAdjacentHTML("beforeend", '<table style="width:100%">' + row + "</table>");
      });
    }).observe(root, { childList: true, subtree: true });
  }
  return { BASE: BASE, LKEY: LKEY, cfg: cfg, save: save, reset: reset, isLocal: function () { return !!local(); }, clone: clone, hook: hook };
})();
</script>
<script id="inventory-admin-js">
/* =====================================================================
   在庫管理（スタッフ用）
   スケルトン / プルトゥリフレッシュ / トースト / ボトムシート / スワイプ操作 /
   オートコンプリート / キネティック・タイポグラフィ / インフォグラフィック
   ===================================================================== */
(function () {
  "use strict";
  var INV = window.NJ_INV, B = INV.BASE, esc = INV.esc;
  var TESS = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js";
  var MAKERS = [
    ["Lenovo", /lenovo|レノボ/i], ["NEC", /\bnec\b|ＮＥＣ|lavie|ラヴィ/i], ["富士通", /富士通|fujitsu|fmv/i],
    ["Dynabook", /dynabook|ダイナブック|東芝/i], ["VAIO", /vaio|バイオ/i], ["Apple", /apple|macbook|imac|アップル/i],
    ["HP", /\bhp\b|hewlett|ヒューレット/i], ["Dell", /\bdell\b|デル/i], ["ASUS", /asus|エイスース/i],
    ["Acer", /\bacer\b|エイサー/i], ["Microsoft", /microsoft|surface|マイクロソフト/i], ["Panasonic", /panasonic|パナソニック|let'?s ?note|レッツノート/i],
    ["MSI", /\bmsi\b/i], ["Huawei", /huawei|ファーウェイ/i]
  ];
  var SPEC_KEYS = ["OS", "バッテリー駆動時間", "カメラ", "端子", "無線LAN", "Bluetooth", "色", "保証", "キーボード", "生体認証", "光学ドライブ", "付属品"];
  var GRADE_KEYS = [["portability", "持ち運び"], ["perf", "処理性能"], ["cost", "コスパ"], ["screen", "画面"], ["battery", "バッテリー"]];
  var COLORS = ["#2563eb", "#7c3aed", "#db2777", "#f59e0b", "#10b981", "#0ea5e9", "#64748b", "#ef4444"];
  var BUCKETS = [[0, 80000, "〜8万"], [80000, 120000, "8〜12万"], [120000, 160000, "12〜16万"], [160000, 200000, "16〜20万"], [200000, 1e12, "20万〜"]];
  var SS = { unlocked: "nj-inv-unlocked", toast: "nj-inv-toast", dash: "nj-inv-dash" };
  // ---- 商品カテゴリごとの設定（在庫データの schema から）
  var SC = B.schema || {};
  var IS_PC = B.category === "pc";
  if (SC.grades) GRADE_KEYS = SC.grades;
  if (SC.buckets) BUCKETS = SC.buckets;
  var ICON = SC.icon || "📦";
  var FIELDS = SC.fields || [];
  var LISTF = SC.listFields || [];
  (SC.makers || []).forEach(function (m) {
    if (!MAKERS.some(function (x) { return x[0] === m[0]; })) MAKERS.push([m[0], new RegExp(m[1] || m[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i")]);
  });
  if (!IS_PC && SC.makers) MAKERS = MAKERS.filter(function (m) { return SC.makers.some(function (x) { return x[0] === m[0]; }); });
  function fmtF(fd, v) { return v == null || v === "" ? "" : (fd.pre || "") + v + (fd.unit || ""); }

  var root, toasts, filt = { q: "", st: "active" }, dirty = false, openRow = null, mode = "inv";
  var $ = function (s, r) { return (r || root).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || root).querySelectorAll(s)); };
  function ss(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); v === null ? sessionStorage.removeItem(k) : sessionStorage.setItem(k, v); } catch (e) {} }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} }
  function today() { var d = new Date(); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function yen(n) { return n ? "¥" + Math.round(+n).toLocaleString("ja-JP") : "—"; }
  function gname(id) { var g = B.groups.filter(function (x) { return x.id === id; })[0]; return g ? g.name : id || "—"; }
  function short(s) { return String(s || "").replace(/[（(].*$/, "").trim(); }
  function dispName(p) { var n = p.name || p.model || ""; return n.toLowerCase().indexOf(String(p.maker || "").toLowerCase()) === 0 ? n : (p.maker + " " + n).trim(); }
  function byId(id) { return INV.all().filter(function (x) { return x.id === id; })[0]; }
  function clean(p) { p = INV.clone(p); delete p._local; delete p._new; return p; }
  function isSearch(u) { return /google\.[a-z.]+\/search|kakaku\.com\/search/.test(u || ""); }
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------------------------------------------------------------- キネティック・タイポグラフィ
  function kt(text, cls) {
    return '<span class="kt ' + (cls || "") + '" style="--n:' + Array.from(String(text)).length + '" aria-label="' + esc(text) + '">' + Array.from(String(text)).map(function (c, i) {
      return '<span aria-hidden="true" style="--i:' + i + '">' + (c === " " ? "&nbsp;" : esc(c)) + "</span>";
    }).join("") + "</span>";
  }
  function countUp(el, to, fmt, dur) {
    if (!el) return;
    fmt = fmt || function (v) { return Math.round(v).toLocaleString("ja-JP"); };
    if (reduce) { el.textContent = fmt(to); return; }
    var t0 = performance.now(); dur = dur || 1000;
    (function step(t) {
      var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(to * e);
      k < 1 && requestAnimationFrame(step);
    })(t0);
  }

  // ---------------------------------------------------------------- リップル
  document.addEventListener("pointerdown", function (e) {
    var b = e.target.closest && e.target.closest(".iv-b,.iv-ibtn,.iv-fab-main,.iv-menu button,.iv-menu label");
    if (!b || reduce) return;
    var r = b.getBoundingClientRect(), s = Math.max(r.width, r.height), d = document.createElement("span");
    d.className = "rp"; d.style.cssText = "width:" + s + "px;height:" + s + "px;left:" + (e.clientX - r.left - s / 2) + "px;top:" + (e.clientY - r.top - s / 2) + "px";
    getComputedStyle(b).position === "static" && (b.style.position = "relative");
    b.style.overflow = "hidden"; b.appendChild(d); setTimeout(function () { d.remove(); }, 650);
  }, { passive: true });

  // ---------------------------------------------------------------- トースト
  var ICON = { ok: "✓", warn: "!", err: "×", info: "i" };
  function toast(msg, o) {
    o = o || {};
    if (!toasts) { toasts = document.createElement("div"); toasts.className = "iv-toasts"; toasts.setAttribute("role", "status"); document.body.appendChild(toasts); }
    var ms = o.ms || (o.action ? 6000 : 3200), t = document.createElement("div");
    t.className = "iv-toast " + (o.type || "info");
    t.innerHTML = '<span class="ic">' + (o.icon || ICON[o.type || "info"]) + '</span><span class="tx">' + msg + "</span>"
      + (o.action ? "<button>" + esc(o.action.label) + "</button>" : "") + '<span class="bar" style="animation-duration:' + ms + 'ms"></span>';
    toasts.appendChild(t);
    while (toasts.children.length > 3) toasts.firstChild.remove();
    var gone = false, tm = setTimeout(kill, ms);
    function kill() { if (gone) return; gone = true; clearTimeout(tm); t.classList.add("out"); setTimeout(function () { t.remove(); }, 360); }
    o.action && t.querySelector("button").addEventListener("click", function () { kill(); o.action.fn(); });
    // スワイプで消す
    var sx = null;
    t.addEventListener("pointerdown", function (e) { if (e.target.tagName === "BUTTON") return; sx = e.clientX; t.setPointerCapture(e.pointerId); t.style.transition = "none"; });
    t.addEventListener("pointermove", function (e) { if (sx == null) return; var dx = e.clientX - sx; t.style.transform = "translateX(" + dx + "px)"; t.style.opacity = 1 - Math.min(1, Math.abs(dx) / 220); });
    t.addEventListener("pointerup", function (e) {
      if (sx == null) return; var dx = e.clientX - sx; sx = null; t.style.transition = "";
      if (Math.abs(dx) > 90) { t.style.transform = "translateX(" + (dx > 0 ? 500 : -500) + "px)"; t.style.opacity = 0; gone = true; clearTimeout(tm); setTimeout(function () { t.remove(); }, 300); }
      else { t.style.transform = ""; t.style.opacity = ""; }
    });
    return kill;
  }
  window.NJ_TOAST = toast;

  // ---------------------------------------------------------------- ボトムシート
  var sheetZ = 100010;
  function sheet(o) {
    var w = document.createElement("div");
    w.className = "iv-sheet-wrap"; w.style.zIndex = ++sheetZ;
    w.innerHTML = '<div class="iv-sheet' + (o.tall ? " tall" : "") + '" role="dialog" aria-modal="true"><div class="iv-grab"></div>'
      + '<div class="iv-sh-h"><h3>' + (o.title || "") + '</h3><button class="iv-sh-x" data-sx aria-label="閉じる">✕</button></div>'
      + '<div class="iv-sh-b"></div>' + (o.foot !== false ? '<div class="iv-sh-f"></div>' : "") + "</div>";
    document.body.appendChild(w);
    var sh = w.firstChild, api = {
      el: sh, wrap: w, body: sh.querySelector(".iv-sh-b"), foot: sh.querySelector(".iv-sh-f"),
      close: function (silent) {
        if (api.closed) return; api.closed = true;
        w.classList.remove("on");
        setTimeout(function () { w.remove(); document.querySelector(".iv-sheet-wrap.on") || document.body.classList.remove("iv-has-sheet"); }, 450);
        !silent && o.onClose && o.onClose();
      }
    };
    if (o.body) api.body.innerHTML = o.body;
    if (o.foot && api.foot) api.foot.innerHTML = o.foot;
    document.body.classList.add("iv-has-sheet");
    requestAnimationFrame(function () { requestAnimationFrame(function () { w.classList.add("on"); }); });
    w.addEventListener("click", function (e) {
      if (e.target === w || e.target.closest("[data-sx]")) return api.close();
      o.onClick && o.onClick(e, api);
    });
    w.addEventListener("keydown", function (e) { e.key === "Escape" && api.close(); });
    // 引っぱって閉じる
    var y0 = null, dy = 0, t0 = 0;
    [sh.querySelector(".iv-grab"), sh.querySelector(".iv-sh-h")].forEach(function (h) {
      h.addEventListener("pointerdown", function (e) { if (e.target.closest("button")) return; y0 = e.clientY; t0 = Date.now(); dy = 0; sh.classList.add("drag"); h.setPointerCapture(e.pointerId); });
      h.addEventListener("pointermove", function (e) { if (y0 == null) return; dy = Math.max(0, e.clientY - y0); sh.style.transform = "translateY(" + dy + "px)"; w.style.background = "rgba(15,23,42," + (0.45 * (1 - Math.min(1, dy / 400))) + ")"; });
      h.addEventListener("pointerup", function () {
        if (y0 == null) return; y0 = null; sh.classList.remove("drag"); sh.style.transform = ""; w.style.background = "";
        var v = dy / Math.max(1, Date.now() - t0);
        (dy > 140 || v > .8) && api.close();
      });
    });
    return api;
  }
  function confirmSheet(title, text, ok, danger) {
    return new Promise(function (res) {
      var done = false, s = sheet({
        title: kt(title), body: '<p style="color:#475569;line-height:1.7;font-size:.95rem">' + text + "</p>",
        foot: '<button class="iv-b grow" data-c="0">やめる</button><button class="iv-b grow ' + (danger ? "dng" : "pri") + '" data-c="1">' + esc(ok) + "</button>",
        onClose: function () { done || res(false); },
        onClick: function (e, api) { var c = e.target.closest("[data-c]"); if (c) { done = true; res(c.getAttribute("data-c") === "1"); api.close(true); } }
      });
    });
  }

  // ---------------------------------------------------------------- オートコンプリート
  function hl(label, q) {
    var s = String(label), i = q ? s.toLowerCase().indexOf(q.toLowerCase()) : -1;
    return i < 0 ? esc(s) : esc(s.slice(0, i)) + "<mark>" + esc(s.slice(i, i + q.length)) + "</mark>" + esc(s.slice(i + q.length));
  }
  function attachAC(input, src, pick, opt) {
    opt = opt || {};
    var box = null, idx = -1, items = [];
    function close() { box && box.remove(); box = null; idx = -1; }
    function show() {
      var q = input.value.trim();
      close();
      if (!q && !opt.showEmpty) return;
      items = src(q).slice(0, 7);
      if (!items.length || (items.length === 1 && String(items[0].value) === q)) return;
      box = document.createElement("div"); box.className = "ac-box"; box.setAttribute("role", "listbox");
      box.innerHTML = items.map(function (it, i) {
        return '<div class="ac-it" role="option" data-i="' + i + '" style="--i:' + i + '">' + (it.icon ? "<span>" + it.icon + "</span>" : "") + "<span>" + hl(it.label, q) + "</span>" + (it.sub ? "<small>" + esc(it.sub) + "</small>" : "") + "</div>";
      }).join("");
      input.parentNode.appendChild(box);
      box.addEventListener("pointerdown", function (e) { e.preventDefault(); var d = e.target.closest(".ac-it"); d && choose(+d.getAttribute("data-i")); });
    }
    function choose(i) { var it = items[i]; close(); if (!it) return; pick ? pick(it, input) : (input.value = it.value, input.dispatchEvent(new Event("input", { bubbles: true }))); }
    input.setAttribute("autocomplete", "off");
    input.addEventListener("input", show);
    input.addEventListener("focus", function () { opt.showEmpty && show(); });
    input.addEventListener("blur", function () { setTimeout(close, 120); });
    input.addEventListener("keydown", function (e) {
      if (!box) return;
      var n = items.length;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault(); idx = (idx + (e.key === "ArrowDown" ? 1 : -1) + n) % n;
        $$(".ac-it", box).forEach(function (d, i) { d.classList.toggle("on", i === idx); });
      } else if (e.key === "Enter" && idx >= 0) { e.preventDefault(); choose(idx); }
      else if (e.key === "Escape") close();
    });
  }
  function uniq(field) {
    var m = {}; INV.all().forEach(function (p) { p[field] && (m[p[field]] = (m[p[field]] || 0) + 1); });
    return Object.keys(m).sort(function (a, b) { return m[b] - m[a]; });
  }
  function srcList(list) {
    return function (q) {
      q = q.toLowerCase();
      return list().filter(function (v) { return !q || String(v).toLowerCase().indexOf(q) >= 0; }).map(function (v) { return { label: v, value: v }; });
    };
  }

  // ---------------------------------------------------------------- 起動・PIN
  function build() {
    root = document.createElement("div");
    root.className = "iv-root"; root.id = "iv-root";
    document.body.appendChild(root);
    // 入口①：画面左下の「在庫管理」ボタン（相談を閉じているときに表示）
    var g = document.createElement("button");
    g.className = "iv-gear"; g.type = "button"; g.title = "在庫管理（スタッフ用・暗証番号が必要）";
    g.innerHTML = '<span class="lk">🔐</span><span>在庫管理</span><small>スタッフ用</small>';
    g.addEventListener("click", open);
    document.body.appendChild(g);
    // 入口②：PC相談の上のバーに「在庫管理」ボタンを常に表示
    var app = document.getElementById(SC.root || "pc-app");
    if (app) {
      var put = function () {
        var top = app.querySelector(".fr-top,.sv-top");
        if (top && !top.querySelector(".iv-entry")) {
          var b = document.createElement("button");
          b.type = "button"; b.className = "iv-entry"; b.title = "在庫管理（スタッフ用・暗証番号が必要）";
          b.innerHTML = '<span class="lk">🔐</span><span class="tx">在庫管理</span>';
          b.addEventListener("click", function (e) { e.stopPropagation(); open(); });
          var pill = top.querySelector(".fr-pill,.sv-pill");
          pill ? top.insertBefore(b, pill.nextSibling) : top.appendChild(b);
        }
        document.body.classList.toggle("iv-app-on", app.classList.contains("on"));
      };
      new MutationObserver(put).observe(app, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
      put();
    }
    root.addEventListener("click", onClick);
    root.addEventListener("change", function (e) { mode === "hear" && e.target.closest("#iv-hear") && hearChange(e); });
    initSwipe(); initPTR();
  }
  function open() {
    root.classList.add("on");
    document.documentElement.style.overflow = "hidden";
    B.adminPin ? pin() : shell(true);   // 開くたびに暗証番号が必要
  }
  function close() {
    $$(".iv-sheet-wrap", document).forEach(function (w) { w.remove(); });
    if (dirty) return reflect();
    root.classList.remove("on");
    document.documentElement.style.overflow = "";
  }
  function reflect() {   // 相談アプリへ反映（読み込み直し）
    var d = document.createElement("div"); d.className = "iv-reflect";
    d.innerHTML = '<div class="t">' + kt("在庫を相談に反映しています", "wave") + '</div><div class="dots"><i style="--i:0"></i><i style="--i:1"></i><i style="--i:2"></i></div>';
    document.body.appendChild(d);
    ss(SS.toast, "在庫を相談に反映しました");
    setTimeout(function () { location.reload(); }, reduce ? 50 : 900);
  }
  function pin() {
    root.innerHTML = '<div class="iv-pin"><div class="iv-pin-c"><div class="lock">🔐</div><h2>' + kt("在庫管理", "grad-text") + "</h2><p>" + kt("スタッフ専用 ・ 暗証番号を入力") + "</p>"
      + '<div class="iv-pin-in"><input id="iv-pin" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="暗証番号" placeholder="暗証番号"><button type="button" class="eye" data-a="eye" aria-label="表示切替">👁</button></div><div class="err" id="iv-pin-e"></div>'
      + '<button class="iv-b pri" data-a="pin">開く</button><button class="iv-b ghost" data-a="close">戻る</button></div></div>';
    var i = $("#iv-pin");
    i.addEventListener("keydown", function (e) { e.key === "Enter" && $('[data-a="pin"]').click(); });
    setTimeout(function () { i.focus(); }, 80);
  }
  function tryPin() {
    var i = $("#iv-pin");
    if (i.value === String(B.adminPin)) {
      $(".iv-pin-c").style.cssText = "transition:transform .4s,opacity .4s;transform:scale(1.08);opacity:0";
      setTimeout(function () { shell(true); }, 300);
    } else {
      var c = $(".iv-pin-c"); c.classList.remove("shake"); void c.offsetWidth; c.classList.add("shake");
      $("#iv-pin-e").textContent = "暗証番号が違います"; i.select();
    }
  }

  // ---------------------------------------------------------------- 画面の骨組み
  function shell(withSkeleton) {
    root.innerHTML = '<div class="iv-top"><div class="iv-top-row">'
      + '<div class="iv-ttl">' + kt("在庫管理", "grad-text") + "<small>" + kt((window.NJ_STORE ? "🏬 " + NJ_STORE.name + " ・ " : "") + B.label + " ・ 公開データ " + B.version) + "</small></div><span class=\"iv-sp\"></span>"
      + '<button class="iv-ibtn" data-a="menu" aria-label="メニュー" title="書き出し・読み込みなど">⋯</button>'
      + '<button class="iv-ibtn" data-a="close" aria-label="閉じる" title="閉じる">✕</button></div>'
      + '<div class="iv-tabs"><span class="iv-tabpill"></span><button class="iv-tab' + (mode === "inv" ? " on" : "") + '" data-a="tab" data-v="inv">📦 在庫</button><button class="iv-tab' + (mode === "hear" ? " on" : "") + '" data-a="tab" data-v="hear">💬 ヒアリング</button></div>'
      + '<div class="iv-search"><span class="ico">🔍</span><input id="iv-q" type="search" placeholder="型番・商品名・メーカーで検索" value="' + esc(filt.q) + '" aria-label="在庫を検索"></div>'
      + '<div class="iv-chips" id="iv-chips"><span class="iv-pill"></span>'
      + [["active", "販売中"], ["ended", "販売終了"], ["local", "この端末で編集"], ["all", "すべて"]].map(function (c) {
        return '<button class="iv-chip' + (filt.st === c[0] ? " on" : "") + '" data-a="chip" data-v="' + c[0] + '">' + c[1] + "<b data-n=\"" + c[0] + "\">0</b></button>";
      }).join("") + "</div></div>"
      + '<div class="iv-main"><div id="iv-hear"></div><div class="iv-ptr" id="iv-ptr"><i>↻</i></div>'
      + '<button class="iv-dash-tgl" data-a="dash">' + "<i>▾</i>" + kt("在庫のようす") + "</button>"
      + '<div class="iv-dash-wrap" id="iv-dash"><div></div></div>'
      + '<div class="iv-sec-h"><span id="iv-cnt"></span><span>新しい順 ・ 更新日</span></div>'
      + '<div class="iv-list" id="iv-list"></div>'
      + '<div class="iv-hint"><i>👈</i> 左にスワイプで「販売終了・削除」、右にスワイプで「価格変更」</div></div>'
      + '<div class="iv-fab" id="iv-fab"><div class="iv-fab-it"><span>手入力で追加</span><button data-a="new" aria-label="手入力で追加">✏️</button></div>'
      + '<div class="iv-fab-it"><span>電子プライスを撮って追加・更新</span><button data-a="photo" aria-label="写真から追加">📷</button></div>'
      + '<button class="iv-fab-main" data-a="fab" aria-label="在庫を追加">＋</button></div>';
    root.classList.toggle("mode-hear", mode === "hear"); requestAnimationFrame(moveTab);
    if (mode === "hear") renderHear(true);
    var closed = ls(SS.dash) === "0";
    $("#iv-dash").classList.toggle("closed", closed); $(".iv-dash-tgl").classList.toggle("closed", closed);
    var q = $("#iv-q"), tm;
    q.addEventListener("input", function () { clearTimeout(tm); tm = setTimeout(function () { filt.q = q.value; renderList(false); }, 120); });
    attachAC(q, function (s) {
      s = s.toLowerCase();
      return INV.all().filter(function (p) { return [p.model, p.name, p.maker, p.jan].concat(LISTF.map(function (k) { return p[k]; })).join(" ").toLowerCase().indexOf(s) >= 0; }).map(function (p) {
        return { label: dispName(p), sub: p.model + " ・ " + yen(p.price), value: p.model, id: p.id, icon: p.status === "ended" ? "⏸" : ICON };
      });
    }, function (it) { openEdit(byId(it.id)); });
    if (withSkeleton && !reduce) {
      skeleton();
      setTimeout(function () { renderDash(); renderList(true); }, 650);
    } else { renderDash(); renderList(true); }
  }
  function skeleton() {
    $("#iv-dash > div").innerHTML = '<div class="iv-dash">' + [0, 1, 2, 3].map(function () { return '<div class="iv-kpi"><div class="sk" style="height:10px;width:50%"></div><div class="sk" style="height:26px;width:70%;margin-top:10px"></div></div>'; }).join("")
      + '</div><div class="iv-charts">' + [0, 1, 2].map(function () { return '<div class="iv-card"><div class="sk" style="height:12px;width:40%"></div><div class="sk" style="height:110px;margin-top:12px;border-radius:14px"></div></div>'; }).join("") + "</div>";
    $("#iv-list").innerHTML = Array(7).join(",").split(",").map(function () { return '<div class="sk-row"><div class="sk a"></div><div><div class="sk b"></div><div class="sk c"></div></div><div class="sk d"></div></div>'; }).join("");
    $("#iv-cnt").innerHTML = '<span class="sk" style="display:inline-block;width:90px;height:12px"></span>';
  }

  // ---------------------------------------------------------------- インフォグラフィック
  function renderDash() {
    var all = INV.all(), act = all.filter(function (p) { return p.status !== "ended"; }), L = INV.local();
    var nLocal = Object.keys(L.items).length + L.removed.length;
    var avg = act.length ? act.reduce(function (a, p) { return a + (+p.price || 0); }, 0) / act.length : 0;
    // タイプ別
    var gc = {}; act.forEach(function (p) { gc[p.groupId] = (gc[p.groupId] || 0) + 1; });
    var gs = B.groups.map(function (g, i) { return { n: short(g.name), v: gc[g.id] || 0, c: COLORS[i % COLORS.length] }; }).filter(function (g) { return g.v; });
    var C = 2 * Math.PI * 45, acc = 0;
    var arcs = gs.map(function (g) { var len = C * g.v / Math.max(1, act.length), a = acc; acc += len; return '<circle cx="60" cy="60" r="45" stroke="' + g.c + '" stroke-dasharray="0 ' + C + '" stroke-dashoffset="' + (-a) + '" data-len="' + (len - 1.5) + '"/>'; }).join("");
    // 価格帯
    var bc = BUCKETS.map(function (b) { return act.filter(function (p) { return p.price >= b[0] && p.price < b[1]; }).length; }), bm = Math.max.apply(null, bc.concat(1));
    // リンク
    function rate(type) { return act.length ? act.filter(function (p) { return (p.links || []).some(function (l) { return l.type === type && l.url && !isSearch(l.url); }); }).length / act.length : 0; }
    var rO = rate("official"), rM = rate("manual"), GL = Math.PI * 40;
    function gauge(r, col, lbl) {
      return '<div class="iv-gauge"><svg viewBox="0 0 96 56"><path d="M8 50 A40 40 0 0 1 88 50" stroke="#e2e8f0"/><path class="fg" d="M8 50 A40 40 0 0 1 88 50" stroke="' + col + '" stroke-dasharray="' + GL + '" stroke-dashoffset="' + GL + '" data-off="' + GL * (1 - r) + '"/></svg><b data-pct="' + Math.round(r * 100) + '">0%</b>' + lbl + "</div>";
    }
    $("#iv-dash > div").innerHTML = '<div class="iv-dash">'
      + kpi(0, "販売中", "#2563eb", act.length, "件") + kpi(1, "販売終了", "#e11d48", all.length - act.length, "件")
      + kpi(2, "平均価格（販売中）", "#7c3aed", avg, "", true) + kpi(3, "この端末で編集", "#f59e0b", nLocal, "件") + "</div>"
      + '<div class="iv-charts">'
      + '<div class="iv-card" style="--i:1"><h4>🍩 タイプ別の構成</h4><div class="iv-donut"><div class="ctr"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="45" stroke="#eef2f7"/>' + arcs + '</svg><b><span data-cu="' + act.length + '">0</span><small>販売中</small></b></div>'
      + '<div class="iv-leg">' + gs.map(function (g, i) { return '<span style="--i:' + i + '"><i style="background:' + g.c + '"></i>' + esc(g.n) + " " + g.v + "</span>"; }).join("") + "</div></div></div>"
      + '<div class="iv-card" style="--i:2"><h4>📊 価格帯の分布</h4><div class="iv-bars">' + BUCKETS.map(function (b, i) {
        return '<div class="iv-bar"><div style="--i:' + i + '" data-h="' + (bc[i] / bm * 100) + '"><b>' + bc[i] + "</b></div><span>" + b[2] + "</span></div>";
      }).join("") + "</div></div>"
      + '<div class="iv-card" style="--i:3"><h4>🔗 リンクの登録状況</h4><div class="iv-gauges">' + gauge(rO, "#7c3aed", "公式ページ") + gauge(rM, "#0ea5e9", "取扱説明書")
      + '</div><div class="iv-note" style="text-align:center">検索リンクではなく、正しいページを直接登録できている割合</div></div></div>';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        $$("#iv-dash circle[data-len]").forEach(function (c) { c.setAttribute("stroke-dasharray", c.getAttribute("data-len") + " " + C); });
        $$("#iv-dash .iv-bar div[data-h]").forEach(function (d) { d.style.height = Math.max(4, +d.getAttribute("data-h")) + "%"; });
        $$("#iv-dash path[data-off]").forEach(function (p) { p.style.strokeDashoffset = p.getAttribute("data-off"); });
        $$("#iv-dash [data-cu]").forEach(function (e) { countUp(e, +e.getAttribute("data-cu"), e.hasAttribute("data-yen") ? yen : null); });
        $$("#iv-dash [data-pct]").forEach(function (e) { countUp(e, +e.getAttribute("data-pct"), function (v) { return Math.round(v) + "%"; }, 1300); });
      });
    });
    // フィルター件数
    var n = { active: act.length, ended: all.length - act.length, local: all.filter(function (p) { return p._local; }).length + L.removed.length, all: all.length };
    $$("[data-n]").forEach(function (b) { b.textContent = n[b.getAttribute("data-n")]; });
    movePill();
  }
  function kpi(i, l, c, v, unit, isYen) {
    return '<div class="iv-kpi" style="--i:' + i + ";--c:" + c + '"><div class="l">' + l + '</div><div class="v"><span data-cu="' + v + '"' + (isYen ? " data-yen" : "") + ">0</span>" + (unit ? "<small>" + unit + "</small>" : "") + "</div></div>";
  }
  function movePill() {
    var on = $(".iv-chip.on"), p = $(".iv-pill");
    if (!on || !p) return;
    p.style.width = on.offsetWidth + "px"; p.style.transform = "translateX(" + (on.offsetLeft - 4 + 4) + "px)";
  }

  // ---------------------------------------------------------------- 一覧
  function renderList(anim) {
    var L = INV.local(), q = filt.q.trim().toLowerCase();
    var rows = INV.all().filter(function (p) {
      if (filt.st === "active" && p.status === "ended") return false;
      if (filt.st === "ended" && p.status !== "ended") return false;
      if (filt.st === "local" && !p._local) return false;
      return !q || [p.model, p.name, p.maker, p.jan, p.note].concat(LISTF.map(function (k) { return p[k]; })).join(" ").toLowerCase().indexOf(q) >= 0;
    }).sort(function (a, b) { return String(b.updated || "").localeCompare(String(a.updated || "")) || (a.price - b.price); });
    var list = $("#iv-list");
    list.innerHTML = rows.length ? rows.map(function (p, i) { return row(p, anim ? Math.min(i, 14) : 0, anim); }).join("")
      : '<div class="iv-empty"><div class="big">🔎</div>' + kt(q ? "「" + filt.q + "」は見つかりませんでした" : "ここにはまだ在庫がありません") + "</div>";
    $("#iv-cnt").innerHTML = kt(rows.length + "件") + (L.removed.length && filt.st === "local" ? "（削除 " + L.removed.length + "件）" : "");
    openRow = null;
  }
  function row(p, i, anim) {
    var th = p.photo ? '<img class="th" src="' + esc(p.photo) + '" alt="">' : '<div class="th">' + ICON + "</div>";
    var tg = '<span class="tg mdl">' + esc(p.model) + "</span>" + (p.status === "ended" ? '<span class="tg end">販売終了</span>' : "")
      + (p._new ? '<span class="tg new">新規</span>' : p._local ? '<span class="tg loc">端末で編集</span>' : "")
      + '<span class="tg">' + esc(short(gname(p.groupId))) + "</span>"
      + LISTF.map(function (k) { var fd = FIELDS.filter(function (x) { return x.k === k; })[0] || { k: k }, v = fmtF(fd, p[k]); return v ? '<span class="tg">' + esc(v) + "</span>" : ""; }).join("")
      + '<span class="tg">🔗 ' + (p.links || []).length + "</span>";
    var ended = p.status === "ended";
    return '<div class="sw' + (ended ? " ended" : "") + '" data-id="' + esc(p.id) + '" style="--i:' + i + (anim ? "" : ";animation:none") + '">'
      + '<div class="sw-act"><div class="sw-l"><button class="sw-price" data-a="price"><span>¥</span>価格変更</button></div>'
      + '<div class="sw-r">' + (ended ? '<button class="sw-rev" data-a="revive"><span>▶</span>販売中へ</button>' : '<button class="sw-end" data-a="end"><span>⏸</span>販売終了</button>')
      + '<button class="sw-del" data-a="del"><span>🗑</span>削除</button></div></div>'
      + '<div class="sw-row" tabindex="0">' + th + '<div style="min-width:0"><div class="nm">' + esc(dispName(p)) + '</div><div class="mt">' + tg + "</div></div>"
      + '<div class="pr"><b>' + yen(p.price) + "</b><small>" + esc(p.updated || "") + '</small><br><button class="more" data-a="more" aria-label="操作">⋯</button></div></div></div>';
  }

  // ---------------------------------------------------------------- スワイプ操作
  var OPEN_L = 84, OPEN_R = 168;
  function initSwipe() {
    var s = null;
    root.addEventListener("pointerdown", function (e) {
      var r = e.target.closest(".sw-row"); if (!r || e.target.closest("button") || e.button > 0) return;
      s = { r: r, x: e.clientX, y: e.clientY, base: +(r.dataset.tx || 0), dir: 0, id: e.pointerId };
    });
    root.addEventListener("pointermove", function (e) {
      if (!s || e.pointerId !== s.id) return;
      var dx = e.clientX - s.x, dy = e.clientY - s.y;
      if (!s.dir) {
        if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy) * 1.2) { s.dir = 1; s.r.classList.add("drag"); s.r.parentNode.classList.add("rv"); try { s.r.setPointerCapture(e.pointerId); } catch (x) {} closeOpen(s.r); }
        else if (Math.abs(dy) > 10) { s = null; return; }
        else return;
      }
      var tx = s.base + dx;
      if (tx > OPEN_L) tx = OPEN_L + (tx - OPEN_L) * .55;
      if (tx < -OPEN_R) tx = -OPEN_R + (tx + OPEN_R) * .55;
      s.r.style.transform = "translateX(" + tx + "px)"; s.tx = tx;
    });
    function end() {
      if (!s) return;
      var r = s.r, tx = s.tx || 0, sw = r.parentNode, id = sw.getAttribute("data-id"), moved = s.dir;
      s = null; r.classList.remove("drag");
      if (!moved) return;
      r.dataset.moved = "1"; setTimeout(function () { delete r.dataset.moved; }, 50);
      if (tx < -240) { snap(r, 0); var p = byId(id); p && (p.status === "ended" ? act("revive", id) : act("end", id)); }
      else if (tx < -60) { snap(r, -OPEN_R); openRow = r; }
      else if (tx > 140) { snap(r, 0); act("price", id); }
      else if (tx > 46) { snap(r, OPEN_L); openRow = r; }
      else snap(r, 0);
    }
    root.addEventListener("pointerup", end);
    root.addEventListener("pointercancel", end);
  }
  function snap(r, x) {
    r.style.transform = x ? "translateX(" + x + "px)" : ""; r.dataset.tx = x;
    var sw = r.parentNode; x ? sw.classList.add("rv") : setTimeout(function () { +r.dataset.tx || sw.classList.remove("rv"); }, 380);
  }
  function closeOpen(except) { if (openRow && openRow !== except) { snap(openRow, 0); openRow = null; } }

  // ---------------------------------------------------------------- プルトゥリフレッシュ
  function initPTR() {
    var y0 = null, pull = 0;
    root.addEventListener("touchstart", function (e) {
      if (root.scrollTop > 0 || !e.target.closest(".iv-main") || e.target.closest(".sw-row.drag")) return;
      y0 = e.touches[0].clientY; pull = 0;
    }, { passive: true });
    root.addEventListener("touchmove", function (e) {
      if (y0 == null) return;
      var dy = e.touches[0].clientY - y0;
      if (dy <= 0 || root.scrollTop > 0) { pull = 0; paint(0); return; }
      pull = Math.min(130, dy * .5); paint(pull);
    }, { passive: true });
    root.addEventListener("touchend", function () {
      if (y0 == null) return; y0 = null;
      if (pull > 70) refresh(); else paint(0, true);
      pull = 0;
    });
    function paint(p, anim) {
      var i = $("#iv-ptr i"), m = $("#iv-dash"); if (!i) return;
      i.style.transition = anim ? "all .3s" : "none";
      i.style.opacity = Math.min(1, p / 60); i.style.transform = "translateY(" + (p - 40) + "px) rotate(" + p * 3 + "deg)";
      i.textContent = p > 70 ? "⟳" : "↓";
      [m, $(".iv-dash-tgl"), $("#iv-list")].forEach(function (el) { if (el) { el.style.transition = anim ? "transform .3s" : "none"; el.style.transform = p ? "translateY(" + p * .6 + "px)" : ""; } });
    }
    root.__paintPTR = paint;
  }
  function refresh() {
    var ptr = $("#iv-ptr"), i = $("#iv-ptr i");
    if (ptr) { ptr.classList.add("spin"); i.textContent = "↻"; i.style.opacity = 1; }
    root.__paintPTR && setTimeout(function () { [$("#iv-dash"), $(".iv-dash-tgl"), $("#iv-list")].forEach(function (el) { if (el) { el.style.transition = "transform .3s"; el.style.transform = ""; } }); }, 10);
    skeleton();
    setTimeout(function () {
      ptr && ptr.classList.remove("spin"); i && (i.style.opacity = 0);
      renderDash(); renderList(true);
      toast("最新の状態にしました", { type: "ok", icon: "↻" });
    }, reduce ? 50 : 800);
  }

  // ---------------------------------------------------------------- データ変更（元に戻す付き）
  function commit(mut, msg, id, noUndo) {
    var before = JSON.stringify(INV.local()), L = INV.local();
    mut(L);
    if (!INV.saveLocal(L)) return false;
    dirty = true; refreshAll(id);
    toast(msg, noUndo ? { type: "ok" } : { type: "ok", action: { label: "元に戻す", fn: function () {
      try { localStorage.setItem(INV.LKEY, before); } catch (e) {}
      refreshAll(id); toast("元に戻しました", { type: "info", icon: "↶" });
    } } });
    return true;
  }
  function putItem(p) { return function (L) { L.items[p.id] = clean(p); L.removed = L.removed.filter(function (x) { return x !== p.id; }); }; }
  function refreshAll(id) {
    if (!$("#iv-list")) return;
    renderDash(); renderList(false);
    if (id) {
      var el = root.querySelector('.sw[data-id="' + id + '"]');
      if (el) { el.classList.add("flash"); try { el.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" }); } catch (e) {} }
    }
  }
  function act(a, id) {
    var p = byId(id); if (!p) return;
    closeOpen();
    if (a === "price") return openPrice(p);
    if (a === "edit") return openEdit(p);
    if (a === "end" || a === "revive") {
      var q = clean(p); q.status = a === "end" ? "ended" : "active"; q.updated = today();
      var el = root.querySelector('.sw[data-id="' + id + '"]');
      var go = function () { commit(putItem(q), a === "end" ? "⏸ <b>" + esc(q.model) + "</b> を販売終了にしました" : "▶ <b>" + esc(q.model) + "</b> を販売中に戻しました", id); };
      if (el && filt.st !== "all" && filt.st !== "local") { collapse(el, go); } else go();
      return;
    }
    if (a === "del") {
      confirmSheet("在庫を削除しますか？", "<b>" + esc(p.maker + " " + p.model) + "</b> を在庫から削除します。<br>販売をやめるだけなら「販売終了」がおすすめです（あとで戻せます）。", "削除する", true).then(function (ok) {
        if (!ok) return;
        var el = root.querySelector('.sw[data-id="' + id + '"]');
        var go = function () {
          commit(function (L) { delete L.items[id]; B.items.some(function (x) { return x.id === id; }) && L.removed.indexOf(id) < 0 && L.removed.push(id); }, "🗑 <b>" + esc(p.model) + "</b> を削除しました");
        };
        el ? collapse(el, go) : go();
      });
    }
  }
  function collapse(el, cb) {
    if (reduce) return cb();
    el.style.height = el.offsetHeight + "px"; void el.offsetHeight;
    el.style.height = "0px"; el.style.opacity = "0"; el.style.marginTop = "-8px";
    setTimeout(cb, 340);
  }

  // ---------------------------------------------------------------- 価格変更シート
  function openPrice(p) {
    var old = +p.price || 0;
    var s = sheet({
      title: kt("価格を変更"),
      body: '<div style="font-weight:800">' + esc(dispName(p)) + '</div><div class="iv-note">' + esc(p.model) + "</div>"
        + '<div class="iv-diff"><div class="row"><span class="old">' + yen(old) + '</span><span class="new" id="pv-new">' + yen(old) + '</span><span class="pct" id="pv-pct">±0%</span></div><div class="meter"><i id="pv-m"></i></div></div>'
        + '<input class="iv-big-in" id="pv-in" type="number" inputmode="numeric" value="' + old + '" aria-label="新しい価格（税込）">'
        + '<div class="iv-cand" style="justify-content:center">' + [-10000, -5000, -1000, 1000, 5000].map(function (d, i) { return '<button style="--i:' + i + '" data-d="' + d + '">' + (d > 0 ? "+" : "") + (d / 1000) + "千円</button>"; }).join("") + "</div>",
      foot: '<button class="iv-b grow" data-sx>キャンセル</button><button class="iv-b ok grow" data-pv="save">💾 この価格にする</button>',
      onClick: function (e, api) {
        var d = e.target.closest("[data-d]"); if (d) { var i = $("#pv-in", api.el); i.value = Math.max(0, (+i.value || 0) + +d.getAttribute("data-d")); upd(); return; }
        if (e.target.closest('[data-pv="save"]')) {
          var v = Math.round(+$("#pv-in", api.el).value || 0);
          if (!(v > 0)) return toast("価格を入れてください", { type: "err" });
          var q = clean(p); q.price = v; q.updated = today();
          api.close(true);
          commit(putItem(q), "¥ <b>" + esc(q.model) + "</b>：" + yen(old) + " → <b>" + yen(v) + "</b>", q.id);
        }
      }
    });
    var inp = $("#pv-in", s.el);
    function upd() {
      var v = +inp.value || 0, pct = old ? (v - old) / old * 100 : 0, el = $("#pv-pct", s.el), m = $("#pv-m", s.el);
      $("#pv-new", s.el).textContent = yen(v);
      el.textContent = (pct > 0 ? "+" : pct < 0 ? "−" : "±") + Math.abs(pct).toFixed(1) + "%"; el.className = "pct " + (pct > 0 ? "up" : pct < 0 ? "dn" : "");
      var w = Math.min(50, Math.abs(pct) / 30 * 50);
      m.style.left = pct < 0 ? (50 - w) + "%" : "50%"; m.style.width = w + "%"; m.style.background = pct > 0 ? "#e11d48" : "#16a34a";
    }
    inp.addEventListener("input", upd);
    inp.addEventListener("keydown", function (e) { e.key === "Enter" && $('[data-pv="save"]', s.el).click(); });
    setTimeout(function () { inp.focus(); inp.select(); }, 350);
  }

  // ---------------------------------------------------------------- 行の操作メニュー
  function openActions(p) {
    var off = (p.links || []).filter(function (l) { return l.type === "official"; })[0], man = (p.links || []).filter(function (l) { return l.type === "manual"; })[0];
    var items = [["edit", "✏️", "編集する", "スペック・リンク・説明をまとめて編集"], ["price", "¥", "価格を変更", "現在 " + yen(p.price)],
      p.status === "ended" ? ["revive", "▶️", "販売中に戻す", "相談にまた表示されます"] : ["end", "⏸", "販売終了にする", "相談に出なくなります（データは残ります）"]];
    if (off) items.push(["open:" + off.url, "🔗", "メーカー公式HPを開く", isSearch(off.url) ? "型番で検索" : off.url]);
    if (man) items.push(["open:" + man.url, "📘", "取扱説明書を開く", isSearch(man.url) ? "型番で検索" : man.url]);
    items.push(["del", "🗑", "削除する", "", "dng"]);
    sheet({
      title: kt(p.maker + " " + p.model), foot: false,
      body: '<div class="iv-menu">' + items.map(function (m, i) { return '<button style="--i:' + i + '" class="' + (m[4] || "") + '" data-m="' + esc(m[0]) + '"><span class="e">' + m[1] + "</span><span>" + m[2] + (m[3] ? "<small>" + esc(m[3]) + "</small>" : "") + "</span></button>"; }).join("") + "</div>",
      onClick: function (e, api) {
        var b = e.target.closest("[data-m]"); if (!b) return;
        var m = b.getAttribute("data-m"); api.close(true);
        if (m.indexOf("open:") === 0) { var u = INV.safeUrl(m.slice(5)); u && window.open(u, "_blank", "noopener"); return; }
        setTimeout(function () { act(m, p.id); }, 200);
      }
    });
  }

  // ---------------------------------------------------------------- メニュー（書き出し等）
  function openMenu() {
    var L = INV.local(), n = Object.keys(L.items).length + L.removed.length;
    sheet({
      title: kt("メニュー"), foot: false,
      body: '<div class="iv-menu">'
        + (window.NJ_STORE && !NJ_STORE.isDefault
          ? '<button style="--i:0" data-m="export-html"><span class="e">⬇️</span><span>この店舗の公開用データを書き出す<small>「' + NJ_STORE.name + '」だけに反映されます（GitHub の stores/' + NJ_STORE.id + '/ に置く）</small></span></button>'
          : '<button style="--i:0" data-m="export-html"><span class="e">⬇️</span><span>HTMLを書き出す<small>在庫とヒアリング設定入りの product-pc.html を保存 → サイトに上げ直すと全端末に反映</small></span></button>')
        + '<button style="--i:1" data-m="export-json"><span class="e">🧾</span><span>在庫データ（JSON）を保存<small>バックアップや、他の端末への受け渡しに</small></span></button>'
        + '<label style="--i:2"><span class="e">⬆️</span><span>在庫データ（JSON）を読み込む<small>保存したJSONの内容にそろえます</small></span><input type="file" accept=".json,application/json" hidden data-m-file></label>'
        + '<button style="--i:3" data-m="refresh"><span class="e">↻</span><span>最新の状態にする<small>スマホでは一覧を下に引っぱっても更新できます</small></span></button>'
        + (n ? '<button style="--i:5" class="dng" data-m="reset"><span class="e">↺</span><span>この端末の編集をすべて取り消す<small>' + n + "件の編集を捨てて、公開データに戻します</small></span></button>" : "")
        + "</div>",
      onClick: function (e, api) {
        var b = e.target.closest("[data-m]"); if (!b || b.hasAttribute("data-m-file")) return;
        var m = b.getAttribute("data-m"); if (b.tagName === "LABEL") return;
        api.close(true);
        if (m === "export-html") { if (window.NJ_STORE && !NJ_STORE.isDefault) exportStore(); else exportHtml(); }
        if (m === "export-json") { download("inventory-" + B.category + ".json", JSON.stringify(merged(), null, 2), "application/json"); toast("在庫データを保存しました", { type: "ok" }); }
        if (m === "refresh") refresh();
        if (m === "reset") confirmSheet("編集をすべて取り消しますか？", "この端末で行った " + n + " 件の編集を捨てて、公開中の在庫データに戻します。", "取り消す", true).then(function (ok) {
          if (!ok) return;
          commit(function (L2) { L2.items = {}; L2.removed = []; }, "この端末の編集を取り消しました");
        });
      }
    }).wrap.addEventListener("change", function (e) {
      if (e.target.hasAttribute("data-m-file") && e.target.files[0]) { importJson(e.target.files[0]); $$(".iv-sheet-wrap", document).forEach(function (w) { w.classList.remove("on"); setTimeout(function () { w.remove(); }, 400); }); }
    });
  }

  // ---------------------------------------------------------------- 編集シート
  function blank() {
    var b = { id: "u" + Date.now().toString(36), status: "active", maker: "", model: "", name: "", groupId: "",
      price: "", size: { w: null, d: null, h: null }, specs: {}, jan: "",
      tags: [], grades: {}, desc: { ja: "", en: "", zh: "" }, links: [], note: "", updated: today(), photo: null };
    FIELDS.forEach(function (fd) { b[fd.k] = fd.def != null ? fd.def : ""; });
    return b;
  }
  function f(label, key, val, type, wide) {
    return '<div class="iv-f' + (wide ? " wide" : "") + '"><label>' + label + '</label><input data-k="' + key + '" type="' + (type || "text") + '"'
      + (type === "number" ? ' step="any" inputmode="decimal"' : "") + ' value="' + esc(val == null ? "" : val) + '"></div>';
  }
  function seg(key, val, opts) {
    return '<div class="iv-seg" data-seg="' + key + '">' + opts.map(function (o) { return '<button type="button" data-e="seg" data-v="' + esc(o[0]) + '" class="' + (o[0] === val ? "on" : "") + '">' + o[1] + "</button>"; }).join("")
      + '</div><input type="hidden" data-k="' + key + '" value="' + esc(val) + '">';
  }
  function kv(k, v) {
    return '<div class="iv-kv" style="position:relative"><div class="iv-f" style="margin:0"><input data-sk placeholder="項目名" value="' + esc(k) + '"></div><input data-sv placeholder="内容" value="' + esc(v) + '"><button class="iv-x" data-e="row-del" aria-label="削除">×</button></div>';
  }
  function ln(l) {
    l = l || { type: "ref", title: "", url: "" };
    return '<div class="iv-ln"><select data-lt>' + [["official", "メーカー公式HP"], ["manual", "取扱説明書"], ["ref", "参考リンク"]].map(function (o) {
      return '<option value="' + o[0] + '"' + (o[0] === l.type ? " selected" : "") + ">" + o[1] + "</option>";
    }).join("") + '</select><input data-lti placeholder="表示名（参考リンク用）" value="' + esc(l.title) + '"><input data-lu type="url" placeholder="https://..." value="' + esc(l.url) + '">'
      + '<button class="iv-go" data-e="link-open" title="開いて確認" aria-label="開く">↗</button><button class="iv-x" data-e="row-del" aria-label="削除">×</button></div>';
  }

  function openEdit(item, o) {
    o = o || {};
    var isNew = !item, st = { item: item ? clean(item) : blank(), fresh: !item, img: null, ocrImg: null, thumb: null, ocr: "", cand: null, diff: null, busy: false };
    var s = sheet({
      tall: true, title: kt(isNew ? "新しい在庫" : "在庫の編集"),
      foot: "", onClick: function (e) { onEditClick(e, st, s); }
    });
    s.st = st;
    s.wrap.addEventListener("change", function (e) {
      if (e.target.id === "iv-cam" && e.target.files[0]) {
        st.item = collect(s, st);
        prep(e.target.files[0]).then(function (r) { st.img = r.view; st.ocrImg = r.ocr; st.thumb = r.thumb; runOcr(s, st); })
          .catch(function () { toast("写真を開けませんでした", { type: "err" }); });
      }
    });
    s.wrap.addEventListener("input", function (e) { if (e.target.id === "iv-ocr-txt") st.ocr = e.target.value; });
    drawEdit(s, st);
    o.camera && setTimeout(function () { var c = $("#iv-cam", s.el); c && c.click(); }, 450);
    return s;
  }
  function drawEdit(s, st, got) {
    var p = st.item, isNew = !byId(p.id), sc = s.body.scrollTop;
    var h = "";
    if (st.diff) h += '<div class="iv-diff"><div style="text-align:center;font-size:.8rem;font-weight:800;color:#92400e;margin-bottom:6px">⚠ すでに在庫にある型番です → 既存の在庫を更新します</div><div class="row"><span class="old">' + yen(st.diff.old) + '</span><span class="new">' + yen(st.diff.now) + '</span><span class="pct ' + (st.diff.now > st.diff.old ? "up" : "dn") + '">' + (st.diff.old ? ((st.diff.now - st.diff.old) / st.diff.old * 100 > 0 ? "+" : "") + ((st.diff.now - st.diff.old) / st.diff.old * 100).toFixed(1) + "%" : "") + "</span></div></div>";
    // 写真
    h += '<div class="iv-sec">📷 電子プライスの写真・読み取り</div><div class="iv-drop">'
      + (st.img || p.photo ? '<div class="iv-shot' + (st.busy ? " scan" : "") + '"><img src="' + esc(st.img || p.photo) + '" alt="値札の写真"></div>' : "")
      + '<div style="flex:1;min-width:220px"><label class="iv-b pri" style="display:inline-flex;gap:6px;align-items:center">📷 ' + (st.img ? "撮り直す" : "写真を撮る／選ぶ") + '<input type="file" accept="image/*" capture="environment" id="iv-cam" hidden></label> '
      + (st.img ? '<button class="iv-b" data-e="ocr">🔍 もう一度読み取る</button>' : "")
      + '<div class="iv-prog" id="iv-prog"' + (st.busy ? "" : ' style="display:none"') + '><i></i></div><div id="iv-ocr-st" class="iv-note"></div>'
      + '<textarea class="iv-ocr-txt" id="iv-ocr-txt" placeholder="読み取った文字がここに出ます。値札の文字を手で貼り付けてもOK">' + esc(st.ocr) + "</textarea>"
      + '<button class="iv-b" data-e="parse" style="margin-top:8px">⤵ この文字から項目を入れる</button>' + cand(st) + "</div></div>";
    // 基本
    h += '<div class="' + (st.busy ? "scan" : "") + '"><div class="iv-sec">基本情報</div><div class="iv-grid">'
      + '<div class="iv-f"><label>状態</label>' + seg("status", p.status || "active", [["active", "販売中"], ["ended", "販売終了"]]) + "</div>"
      + f("メーカー", "maker", p.maker) + f("型番 ※必須", "model", p.model) + f("商品名", "name", p.name)
      + '<div class="iv-f"><label>タイプ（相談での分類） ※必須</label><select data-k="groupId"><option value="">（選んでください）</option>' + B.groups.map(function (g) { return '<option value="' + esc(g.id) + '"' + (g.id === p.groupId ? " selected" : "") + ">" + esc(g.name) + "</option>"; }).join("") + "</select></div>"
      + f("価格（税込・円） ※必須", "price", p.price, "number") + f("JANコード", "jan", p.jan) + f("更新日", "updated", p.updated, "date") + "</div>";
    // スペック
    h += '<div class="iv-sec">スペック・大きさ</div><div class="iv-grid">'
      + FIELDS.map(function (fd) {
        if (fd.t === "seg") return '<div class="iv-f"><label>' + esc(fd.l) + "</label>" + seg(fd.k, p[fd.k] != null && p[fd.k] !== "" ? String(p[fd.k]) : fd.o[0][0], fd.o) + "</div>";
        return f(fd.l, fd.k, p[fd.k], fd.t === "number" ? "number" : "text");
      }).join("")
      + f("幅 W（mm）", "size.w", p.size && p.size.w, "number") + f("奥行 D（mm）", "size.d", p.size && p.size.d, "number") + f("高さ H（mm）", "size.h", p.size && p.size.h, "number")
      + "</div></div>";
    h += '<div class="iv-note" style="font-weight:800;margin-top:12px">その他のスペック</div><div id="iv-specs">' + Object.keys(p.specs || {}).map(function (k) { return kv(k, p.specs[k]); }).join("") + "</div>"
      + '<button class="iv-b" data-e="spec-add">＋ 項目を追加</button>';
    // リンク
    h += '<div class="iv-sec">🔗 メーカーHP・取扱説明書・参考リンク</div><div id="iv-links">' + (p.links || []).map(ln).join("") + "</div>"
      + '<button class="iv-b" data-e="link-add">＋ リンクを追加</button> <button class="iv-b warn" data-e="link-auto">🌐 型番からメーカーHP・取説を探す</button>'
      + '<div class="iv-note">メーカーと型番から公式サイト・取扱説明書のリンク（または公式サイト内の検索）を作ります。↗ で開き、正しいページが見つかったらそのURLに貼り替えると、お客様にも直接そのページが表示されます。</div>';
    // 見せ方
    var autoT = IS_PC ? INV.autoTags(p) : [], AUTO = IS_PC ? INV.AUTO_TAGS.filter(function (x) { return x !== "ai"; }) : [];
    var TAGO = B.tagOptions || {};
    h += '<div class="iv-sec">相談での見せ方</div>' + (Object.keys(TAGO).length ? '<div class="iv-chk">' : "<div>") + Object.keys(TAGO).map(function (t) {
      if (AUTO.indexOf(t) >= 0) return '<label class="auto" title="メーカー・スペックから自動で決まります"><input type="checkbox" disabled' + (autoT.indexOf(t) >= 0 ? " checked" : "") + ">" + esc(TAGO[t]) + "<i>自動</i></label>";
      return '<label><input type="checkbox" data-tag="' + t + '"' + ((p.tags || []).indexOf(t) >= 0 || (t === "ai" && autoT.indexOf("ai") >= 0) ? " checked" : "") + ">" + esc(TAGO[t]) + "</label>";
    }).join("") + "</div>" + (IS_PC ? '<div class="iv-note">「自動」のタグ（国内メーカー・VAIO・大画面・軽量・デスクトップ）は、メーカーと画面サイズ・重さから自動で付きます。AI PCは Core Ultra / Ryzen AI などのCPUなら自動で付きます。</div>' : "") + '<div class="iv-note" style="font-weight:800;margin-top:12px">' + (IS_PC ? "評価（空欄はスペックから自動）" : "評価（◎◯△・空欄は◯として扱います）") + '</div><div class="iv-grid">'
      + GRADE_KEYS.map(function (g) {
        var v = (p.grades || {})[g[0]] || "";
        return '<div class="iv-f"><label>' + g[1] + "</label>" + seg("g." + g[0], v, [["", IS_PC ? "自動" : "―"]].concat((SC.gradeVals || ["◎", "◯", "△"]).map(function (x) { return [x, x]; }))) + "</div>";
      }).join("") + "</div>"
      + '<div class="iv-grid" style="margin-top:10px">' + f("ひとこと説明（日本語）", "desc.ja", p.desc && p.desc.ja, "text", 1)
      + f("ひとこと説明（English・空欄なら日本語）", "desc.en", p.desc && p.desc.en, "text", 1) + f("ひとこと説明（中文・空欄なら日本語）", "desc.zh", p.desc && p.desc.zh, "text", 1)
      + '<div class="iv-f wide"><label>スタッフ用メモ（お客様には出ません）</label><textarea data-k="note">' + esc(p.note) + "</textarea></div></div>";
    s.body.innerHTML = h;
    s.body.scrollTop = sc;
    s.foot.innerHTML = '<button class="iv-b ok grow" data-e="save">💾 保存</button>'
      + (isNew ? "" : (p.status === "ended" ? '<button class="iv-b warn" data-e="revive">▶ 販売中に戻す</button>' : '<button class="iv-b warn" data-e="end">⏸ 販売終了</button>') + '<button class="iv-b dng" data-e="del">🗑</button>');
    // オートコンプリート
    attachAC($('[data-k="maker"]', s.body), srcList(function () { return MAKERS.map(function (m) { return m[0]; }).concat(uniq("maker")).filter(function (v, i, a) { return a.indexOf(v) === i; }); }), null, { showEmpty: true });
    FIELDS.forEach(function (fd) { if (fd.t !== "number" && fd.t !== "seg") { var el = $('[data-k="' + fd.k + '"]', s.body); el && attachAC(el, srcList(function () { return uniq(fd.k); })); } });
    attachAC($('[data-k="name"]', s.body), srcList(function () { return uniq("name"); }));
    attachAC($('[data-k="model"]', s.body), function (q) {
      q = q.toLowerCase();
      return INV.all().filter(function (x) { return x.id !== st.item.id && x.model.toLowerCase().indexOf(q) >= 0; }).map(function (x) { return { label: x.model, sub: "既存：" + x.maker + " " + yen(x.price), value: x.model, id: x.id, icon: "⚠" }; });
    }, function (it) { s.close(true); toast("既存の在庫を開きました", { type: "warn" }); openEdit(byId(it.id)); });
    $$("[data-sk]", s.body).forEach(function (i) { attachAC(i, srcList(function () { return SPEC_KEYS; }), null, { showEmpty: true }); });
    // 読み取った項目を順番に光らせる
    if (got && got.length) got.forEach(function (k, i) {
      var el = s.body.querySelector('[data-k="' + k + '"]'); el = el && el.closest(".iv-f");
      el && (el.style.setProperty("--i", i), el.classList.add("got"));
    });
  }
  function cand(st) {
    var c = st.cand; if (!c) return "";
    function grp(lbl, arr, key) {
      return arr && arr.length ? '<div class="iv-cand">' + lbl + "：" + arr.map(function (v, i) { return '<button type="button" style="--i:' + i + '" data-e="cand" data-k="' + key + '" data-v="' + esc(v) + '">' + esc(key === "price" ? yen(v) : v) + "</button>"; }).join("") + "</div>" : "";
    }
    return grp("型番の候補", c.models, "model") + grp("価格の候補", c.prices, "price");
  }
  function collect(s, st) {
    var p = INV.clone(st.item), b = s.body;
    $$("[data-k]", b).forEach(function (el) {
      var k = el.getAttribute("data-k"), v = el.value.trim();
      if (k.indexOf("g.") === 0) return;
      if (el.type === "number") v = v === "" ? null : +v;
      if (k.indexOf(".") > 0) { var a = k.split("."); p[a[0]] = p[a[0]] || {}; p[a[0]][a[1]] = v; } else p[k] = v;
    });
    p.tags = $$("[data-tag]:checked", b).map(function (c) { return c.getAttribute("data-tag"); });
    p.grades = {}; $$('[data-k^="g."]', b).forEach(function (h) { h.value && (p.grades[h.getAttribute("data-k").slice(2)] = h.value); });
    p.specs = {}; $$(".iv-kv", b).forEach(function (r) { var k = $("[data-sk]", r).value.trim(), v = $("[data-sv]", r).value.trim(); k && (p.specs[k] = v); });
    p.links = []; $$(".iv-ln", b).forEach(function (r) { var u = $("[data-lu]", r).value.trim(); u && p.links.push({ type: $("[data-lt]", r).value, title: $("[data-lti]", r).value.trim(), url: u }); });
    if (st.thumb) p.photo = st.thumb;
    var t = $("#iv-ocr-txt", b); t && (st.ocr = t.value);
    return p;
  }
  function onEditClick(e, st, s) {
    var b = e.target.closest("[data-e]"); if (!b) return;
    var a = b.getAttribute("data-e");
    if (a === "seg") { var g = b.parentNode; $$("button", g).forEach(function (x) { x.classList.toggle("on", x === b); }); g.nextElementSibling.value = b.getAttribute("data-v"); return; }
    if (a === "spec-add") { $("#iv-specs", s.body).insertAdjacentHTML("beforeend", kv("", "")); var i = $$("[data-sk]", s.body).pop(); attachAC(i, srcList(function () { return SPEC_KEYS; }), null, { showEmpty: true }); i.focus(); return; }
    if (a === "link-add") { $("#iv-links", s.body).insertAdjacentHTML("beforeend", ln()); return; }
    if (a === "row-del") { var r = b.parentNode; r.style.transition = "opacity .25s,transform .25s"; r.style.opacity = 0; r.style.transform = "translateX(30px)"; setTimeout(function () { r.remove(); }, 240); return; }
    if (a === "link-open") { var u = INV.safeUrl($("[data-lu]", b.parentNode).value.trim()); u ? window.open(u, "_blank", "noopener") : toast("URLを入れてください", { type: "warn" }); return; }
    if (a === "link-auto") {
      st.item = collect(s, st); var p = st.item;
      if (!p.maker || !p.model) return toast("メーカーと型番を入れてから押してください", { type: "warn" });
      var have = {}; p.links.forEach(function (l) { have[l.type] = 1; });
      var add = autoLinks(p).filter(function (l) { return !have[l.type] || l.type === "ref"; });
      p.links = p.links.concat(add); drawEdit(s, st);
      toast("🌐 リンクを " + add.length + " 件作りました。↗ で開いて確認してください", { type: "ok" });
      return;
    }
    if (a === "parse") { st.item = collect(s, st); return applyParsed(s, st, st.ocr, false); }
    if (a === "ocr") return runOcr(s, st);
    if (a === "cand") { st.item = collect(s, st); var k = b.getAttribute("data-k"); st.item[k] = k === "price" ? +b.getAttribute("data-v") : b.getAttribute("data-v"); drawEdit(s, st, [k]); return; }
    if (a === "save" || a === "end" || a === "revive") {
      var q = collect(s, st);
      if (a === "end") q.status = "ended";
      if (a === "revive") q.status = "active";
      var err = !q.model ? "型番を入れてください" : !(+q.price > 0) ? "価格を入れてください" : !q.groupId ? "タイプ（相談での分類）を選んでください" : "";
      if (err) { st.item = q; drawEdit(s, st); toast(err, { type: "err" }); var bad = s.body.querySelector(!q.model ? '[data-k="model"]' : !(+q.price > 0) ? '[data-k="price"]' : '[data-k="groupId"]'); bad && (bad.focus(), bad.closest(".iv-f").classList.add("shake")); return; }
      q.price = Math.round(+q.price); q.updated = a === "save" ? (q.updated || today()) : today();
      var wasNew = !byId(q.id);
      s.close(true);
      commit(putItem(q), a === "end" ? "⏸ <b>" + esc(q.model) + "</b> を販売終了にしました" : a === "revive" ? "▶ <b>" + esc(q.model) + "</b> を販売中に戻しました" : (wasNew ? "✨ <b>" + esc(q.model) + "</b> を在庫に追加しました" : "💾 <b>" + esc(q.model) + "</b> を保存しました"), q.id);
      return;
    }
    if (a === "del") { s.close(true); setTimeout(function () { act("del", st.item.id); }, 250); }
  }

  // ---------------------------------------------------------------- 写真 → 文字読み取り
  function loadTess() {
    return window.Tesseract ? Promise.resolve(window.Tesseract) : new Promise(function (ok, ng) {
      var sc = document.createElement("script"); sc.src = TESS; sc.onload = function () { ok(window.Tesseract); };
      sc.onerror = function () { ng(new Error("読み取り機能を読み込めませんでした（ネット接続を確認してください）")); };
      document.head.appendChild(sc);
    });
  }
  function prep(file) {
    return new Promise(function (ok, ng) {
      var r = new FileReader();
      r.onload = function () {
        var im = new Image();
        im.onload = function () {
          var sc = Math.min(2, 2000 / Math.max(im.width, im.height)) || 1;
          var c = document.createElement("canvas"); c.width = Math.round(im.width * sc); c.height = Math.round(im.height * sc);
          var x = c.getContext("2d"); x.drawImage(im, 0, 0, c.width, c.height);
          var d = x.getImageData(0, 0, c.width, c.height), a = d.data;
          for (var i = 0; i < a.length; i += 4) { var y = .299 * a[i] + .587 * a[i + 1] + .114 * a[i + 2]; y = y > 150 ? 255 : y < 90 ? 0 : (y - 90) * 4.25; a[i] = a[i + 1] = a[i + 2] = y; }
          x.putImageData(d, 0, 0);
          var t = document.createElement("canvas"), ts = 320 / Math.max(im.width, im.height);
          t.width = Math.round(im.width * ts); t.height = Math.round(im.height * ts);
          t.getContext("2d").drawImage(im, 0, 0, t.width, t.height);
          ok({ view: r.result, ocr: c.toDataURL("image/png"), thumb: t.toDataURL("image/jpeg", .7) });
        };
        im.onerror = ng; im.src = r.result;
      };
      r.onerror = ng; r.readAsDataURL(file);
    });
  }
  function runOcr(s, st) {
    if (!st.ocrImg) return;
    st.busy = true; drawEdit(s, st);
    var stEl = $("#iv-ocr-st", s.body), bar = $("#iv-prog i", s.body);
    stEl.innerHTML = kt("読み取りの準備中…（初回は数十秒かかります）");
    loadTess().then(function (T) {
      return T.recognize(st.ocrImg, "jpn+eng", { logger: function (m) {
        if (m.status === "recognizing text") { bar.style.width = Math.round(m.progress * 100) + "%"; stEl.textContent = "文字を読み取り中… " + Math.round(m.progress * 100) + "%"; }
        else stEl.textContent = "準備中：" + m.status;
      } });
    }).then(function (res) {
      st.busy = false; st.item = collect(s, st); st.ocr = res.data.text; applyParsed(s, st, st.ocr, true);
    }).catch(function (e) {
      st.busy = false; st.item = collect(s, st); drawEdit(s, st);
      toast(esc(e.message || e) + "<br>値札の文字を手で入れて「この文字から項目を入れる」でも登録できます", { type: "err", ms: 7000 });
    });
  }
  function parse(txt) {
    var t = (txt || "").normalize("NFKC").replace(/[‐‑‒–—―ー−]/g, function (c, i, s) { return /[A-Za-z0-9]/.test(s[i - 1] || "") && /[A-Za-z0-9]/.test(s[i + 1] || "") ? "-" : c; });
    var one = t.replace(/\s+/g, " "), o = { prices: [], models: [] }, pr = [];
    one.replace(/(?:[¥\\]|税込[^0-9]{0,6}|価格[^0-9]{0,6})\s*([0-9]{1,3}(?:[,.][0-9]{3})+|[0-9]{4,7})/g, function (m, n) { pr.push({ v: +n.replace(/[,.]/g, ""), tax: /税込/.test(m) }); return m; });
    one.replace(/([0-9]{1,3}(?:[,.][0-9]{3})+|[0-9]{4,7})\s*円/g, function (m, n) { pr.push({ v: +n.replace(/[,.]/g, ""), tax: false }); return m; });
    pr = pr.filter(function (p) { return p.v >= 1000 && p.v <= 2000000; });
    var taxed = pr.filter(function (p) { return p.tax; });
    o.price = taxed.length ? taxed[0].v : pr.length ? Math.max.apply(null, pr.map(function (p) { return p.v; })) : null;
    o.prices = pr.map(function (p) { return p.v; }).filter(function (v, i, a) { return a.indexOf(v) === i; }).slice(0, 6);
    var jan = one.match(/\b(4[59][0-9]{11})\b/); o.jan = jan ? jan[1] : "";
    var near = one.match(/(?:型番|品番|型式|MODEL)\s*[:：]?\s*([A-Z0-9][A-Z0-9\-\/\.]{4,})/i);
    var toks = (one.toUpperCase().match(/[A-Z0-9][A-Z0-9\-\/]{4,}[A-Z0-9]/g) || []).filter(function (w) {
      return /[A-Z]/.test(w) && /[0-9]/.test(w) && !/^(CORE|RYZEN|DDR|USB|HDMI|WIFI|WI-FI|LPDDR)/.test(w) && !/^[0-9]+(GB|TB|MM|KG|W|HZ|MAH)$/.test(w) && !/^I[3579]-?[0-9]/.test(w);
    });
    o.models = (near ? [near[1].toUpperCase()] : []).concat(toks.sort(function (a, b) { return b.length - a.length; })).filter(function (v, i, a) { return a.indexOf(v) === i; }).slice(0, 6);
    o.model = o.models[0] || "";
    o.maker = ""; MAKERS.some(function (m) { return m[1].test(t) && (o.maker = m[0]); });
    var cpu = one.match(/(Core\s*Ultra\s*[0-9]\s*[0-9]{3}[A-Z]{0,2}|Core\s*i[3579][\s-]*[0-9]{3,5}[A-Z]{0,2}|Core\s*[3579]\s*[0-9]{3}[A-Z]{0,2}|Ryzen\s*(?:AI\s*)?[3579]\s*[0-9A-Z ]{3,6}|Celeron\s*[A-Z0-9]*|Pentium\s*[A-Z0-9]*|Snapdragon\s*X?\s*[A-Za-z0-9 ]{0,10}|Kompanio\s*[0-9]+|Apple\s*M[1-5]\s*(?:Pro|Max)?|Intel\s*N[0-9]{2,3})/i);
    o.cpu = cpu ? cpu[1].replace(/\s+/g, " ").trim() : "";
    var ram = one.match(/(?:メモリ|RAM)[^0-9]{0,6}([0-9]{1,3})\s*GB/i) || one.match(/([0-9]{1,3})\s*GB\s*(?:メモリ|RAM)/i); o.ram = ram ? +ram[1] : null;
    var ssd = one.match(/SSD[^0-9]{0,6}([0-9]{2,4})\s*(GB|TB)/i) || one.match(/([0-9]{1,4})\s*(GB|TB)\s*SSD/i); o.ssd = ssd ? +ssd[1] * (/TB/i.test(ssd[2]) ? 1000 : 1) : null;
    var scr = one.match(/([0-9]{2}(?:\.[0-9])?)\s*(?:型|インチ|inch|")/i); o.screen = scr ? +scr[1] : null;
    var kg = one.match(/([0-9]\.[0-9]{1,3})\s*kg/i), g = one.match(/約?\s*([0-9]{3,4})\s*g\b/i); o.weight = kg ? +kg[1] : g ? +(+g[1] / 1000).toFixed(3) : null;
    o.office = /office|オフィス/i.test(one) ? "搭載" : null;
    var sz = one.match(/([0-9]{2,3}(?:\.[0-9])?)\s*[x×X＊*]\s*([0-9]{2,3}(?:\.[0-9])?)\s*[x×X＊*]\s*([0-9]{1,3}(?:\.[0-9])?)\s*mm/i);
    o.size = sz ? { w: +sz[1], d: +sz[2], h: +sz[3] } : null;
    return o;
  }
  function applyParsed(s, st, txt, fromOcr) {
    var o = parse(txt), p = st.item, got = [];
    st.cand = { models: o.models, prices: o.prices };
    var hit = o.model && INV.all().filter(function (x) { return x.model && x.model.toUpperCase() === o.model && x.id !== p.id; })[0];
    if (hit && st.fresh) {
      st.item = clean(hit); p = st.item; st.fresh = false;
      st.diff = { old: hit.price, now: o.price || hit.price };
      if (o.price) { p.price = o.price; got.push("price"); }
      p.updated = today(); p.status = "active"; got.push("updated");
      st.thumb && (p.photo = st.thumb);
      s.el.querySelector(".iv-sh-h h3").innerHTML = kt("既存の在庫を更新");
      drawEdit(s, st, got);
      toast("この型番はすでに在庫にあります。<b>価格の更新</b>として開きました", { type: "warn", ms: 5000 });
      return;
    }
    function set(k, v) { if (v != null && v !== "" && (p[k] == null || p[k] === "" || fromOcr)) { p[k] = v; got.push(k); } }
    set("model", o.model); set("price", o.price); set("maker", o.maker); set("jan", o.jan);
    if (IS_PC) { set("cpu", o.cpu); set("ram", o.ram); set("ssd", o.ssd); set("screen", o.screen); set("weight", o.weight); o.office && set("office", o.office); }
    if (o.size) { p.size = o.size; got.push("size.w", "size.d", "size.h"); }
    if (!p.name && p.model) { p.name = p.model; got.push("name"); }
    var linked = false;
    if (p.maker && p.model && !(p.links || []).length) { p.links = autoLinks(p); linked = true; }
    drawEdit(s, st, got);
    got.length ? toast("✨ " + got.length + " 項目を読み取りました" + (linked ? "（メーカーHP・取説リンクも作成）" : "") + "<br>値札と見比べて確認してください", { type: "ok", ms: 5000 })
      : toast("項目を読み取れませんでした。撮り直すか手で入力してください", { type: "warn" });
  }
  function autoLinks(p) {
    var out = [], h = "";
    try { h = (window.__njLinksAuto || function () { return ""; })({ maker: p.maker, model: p.model }) || ""; } catch (e) {}
    var u = [], m, re = /href="([^"]+)"/g;
    while ((m = re.exec(h))) u.push(m[1].replace(/&amp;/g, "&"));
    var g = function (q) { return "https://www.google.com/search?q=" + encodeURIComponent(q); };
    out.push({ type: "official", title: "", url: u[0] || g(p.maker + " " + p.model + " 仕様") });
    out.push({ type: "manual", title: "", url: u[1] || g(p.maker + " " + p.model + " 取扱説明書 PDF") });
    out.push({ type: "ref", title: "価格.com", url: "https://kakaku.com/search_results/" + encodeURIComponent(p.model) + "/" });
    return out;
  }

  // ---------------------------------------------------------------- 書き出し・読み込み
  function merged() {
    var d = INV.clone(B);
    d.items = INV.all().map(clean);
    d.version = today();
    return d;
  }
  function download(name, text, type) {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type: type }));
    a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }
  // 成田店以外：この店舗だけの公開用データ（在庫＋ヒアリング設定）を JSON で書き出す
  function exportStore() {
    var S = window.NJ_STORE, hd = document.getElementById("hearing-data"), page = B.category;
    try { page = JSON.parse(hd.textContent).category || page; } catch (e) {}
    var hc = H.cfg(); hc.version = today();
    var out = { store: S.id, storeName: S.name, page: page, version: today(), inventory: merged(), hearing: hc };
    download(page + ".json", JSON.stringify(out, null, 2), "application/json");
    toast("「" + page + ".json」を書き出しました。GitHub の stores/" + S.id + "/ に置くと、" + S.name + " だけに反映されます", { type: "ok", ms: 8000 });
  }
  function exportHtml() {
    var json = JSON.stringify(merged(), null, 2).replace(/<\//g, "<\\/");
    var k = toast("⬇ HTMLを作っています…", { type: "info", ms: 10000 });
    fetch(location.pathname, { cache: "no-store" }).then(function (r) { if (!r.ok) throw 0; return r.text(); }).then(function (src) {
      var re = /(<script type="application\/json" id="inventory-data">)[\s\S]*?(<\/script>)/;
      if (!re.test(src)) throw 0;
      var out = src.replace(re, function (_, a, b) { return a + "\n" + json + "\n" + b; });
      var hc = H.cfg(); hc.version = today();
      var hj = JSON.stringify(hc, null, 2).replace(/<\//g, "<\\/");
      out = out.replace(/(<script type="application\/json" id="hearing-data">)[\s\S]*?(<\/script>)/, function (_, a, b) { return a + "\n" + hj + "\n" + b; });
      download(location.pathname.split("/").pop() || "index.html", out, "text/html");
      k(); toast("HTMLを書き出しました。サイトに上げ直すと全端末の在庫が更新されます", { type: "ok", ms: 6000 });
    }).catch(function () {
      download("inventory-" + B.category + ".json", JSON.stringify(merged(), null, 2), "application/json");
      k(); toast("元のHTMLを読み込めなかったため（PCで直接開いている等）、在庫データ（JSON）だけ保存しました。HTMLの inventory-data をこの内容に貼り替えてください", { type: "warn", ms: 9000 });
    });
  }
  function importJson(file) {
    var r = new FileReader();
    r.onload = function () {
      try {
        var d = JSON.parse(r.result); if (!d.items || !Array.isArray(d.items)) throw 0;
        commit(function (L) {
          var ids = {};
          d.items.forEach(function (it) { if (it && it.id && it.model) { L.items[it.id] = it; ids[it.id] = 1; } });
          B.items.forEach(function (it) { ids[it.id] || L.removed.indexOf(it.id) >= 0 || L.removed.push(it.id); });
        }, "⬆ 在庫データを読み込みました（" + d.items.length + "件）");
      } catch (e) { toast("在庫データ（JSON）として読み込めませんでした", { type: "err" }); }
    };
    r.readAsText(file);
  }

  // ================================================================ ヒアリング設定（店舗ごとのアレンジ）
  var H = window.NJ_HEAR;
  var STAGES = [[0, "はじめに"], [1, "使う場所の条件（持ち歩き・サイズ・重さなど）"], [2, "使い方・暮らし方"], [3, "最後（譲れない1点・ご予算）"]];
  var LOCKED = { sit: "最初の質問（新しく決める／買い替え／2台目）は、このあとの質問の流れを決めるため非表示にできません。" };
  function isLock(id) { var D = window.NJ_HEAR_DEFS; return D && D.locked ? D.locked.indexOf(id) >= 0 : id === "sit"; }
  function defs() { try { var D = window.NJ_HEAR_DEFS || window.PC_HEAR; return D ? D.defs() : []; } catch (e) { return []; } }
  function stages() { try { return (window.NJ_HEAR_DEFS && window.NJ_HEAR_DEFS.stages) || STAGES; } catch (e) { return STAGES; } }
  function j3(a) { return Array.isArray(a) ? a[0] : (a && a.ja) || ""; }
  function hcommit(mut, msg) {
    var before = JSON.stringify(H.cfg()), c = H.cfg();
    mut(c); c.version = today();
    if (!H.save(c)) return toast("保存できませんでした", { type: "err" });
    dirty = true; renderHear();
    toast(msg, { type: "ok", action: { label: "元に戻す", fn: function () { H.save(JSON.parse(before)); renderHear(); toast("元に戻しました", { type: "info", icon: "↶" }); } } });
  }
  function renderHear(skel) {
    var box = $("#iv-hear"); if (!box) return;
    if (skel && !reduce) {
      box.innerHTML = Array(6).join(",").split(",").map(function () { return '<div class="sk-row" style="margin-bottom:8px"><div class="sk a"></div><div><div class="sk b"></div><div class="sk c"></div></div><div class="sk d"></div></div>'; }).join("");
      return setTimeout(function () { renderHear(); }, 450);
    }
    var c = H.cfg(), D = defs(), i = 0;
    var h = '<div class="hv-store"><div class="iv-f" style="flex:1"><label>店舗名（スタッフ確認シートの右上に表示）</label><input id="hv-store" placeholder="例：ノジマ イオンモール成田店" value="' + esc(c.storeName || "") + '"></div>'
      + '<button class="iv-b pri" data-a="hv-store">保存</button></div>'
      + '<div class="iv-note" style="margin:4px 2px 14px">質問の表示・非表示、質問文や選択肢の言い回し、並び順を店舗に合わせて変えられます。店舗オリジナルの質問も追加できます（答えはスタッフ確認シートに表示され、おすすめの順位には影響しません）。'
      + (H.isLocal() ? ' <b style="color:#b45309">この端末で編集中</b>' : "") + "</div>";
    stages().forEach(function (sg) {
      var qs = D.filter(function (d) { return d.st === sg[0]; });
      var cs = (c.custom || []).map(function (x, k) { return { x: x, k: k }; }).filter(function (o) { return (+o.x.st || 0) === sg[0]; });
      h += '<div class="iv-sec-h"><span>' + esc(sg[1]) + "</span><span>" + (qs.length + cs.length) + "問</span></div><div class=\"hv-list\">";
      qs.forEach(function (d) {
        var q = c.questions[d.id] || {}, off = q.hidden && !isLock(d.id);
        var nOpt = d.o.length, nOn = d.o.filter(function (o) { return !(q.opts && q.opts[o.v] && q.opts[o.v].hidden); }).length;
        var edited = (q.t && q.t.ja) || (q.h && q.h.ja) || (q.order && q.order.length) || Object.keys(q.opts || {}).some(function (k) { return q.opts[k].label && q.opts[k].label.ja; });
        var dyn = !d.o.length;
        h += '<div class="hq-row' + (off ? " off" : "") + '" data-hq="' + esc(d.id) + '" style="--i:' + Math.min(i++, 14) + '"><div class="hq-tx"><div class="nm">' + esc((q.t && q.t.ja) || j3(d.t) || "使い方に合わせた追加の質問") + '</div><div class="mt">'
          + (d.cond ? '<span class="tg">条件付きで表示</span>' : "") + (dyn ? '<span class="tg">内容は「使い方」の回答で変わります</span>' : '<span class="tg">選択肢 ' + nOn + "/" + nOpt + "</span>")
          + (edited ? '<span class="tg loc">文言を変更</span>' : "") + (isLock(d.id) ? '<span class="tg">必須</span>' : "") + "</div></div>"
          + '<label class="tgl" title="表示／非表示"><input type="checkbox" data-hq-on="' + esc(d.id) + '"' + (off ? "" : " checked") + (isLock(d.id) ? " disabled" : "") + '><span></span></label></div>';
      });
      cs.forEach(function (o) {
        var x = o.x;
        h += '<div class="hq-row' + (x.hidden ? " off" : "") + '" data-hc="' + o.k + '" style="--i:' + Math.min(i++, 14) + '"><div class="hq-tx"><div class="nm">' + esc((x.t && x.t.ja) || "（無題の質問）") + '</div><div class="mt"><span class="tg new">店舗オリジナル</span><span class="tg">選択肢 ' + (x.o || []).length + "</span></div></div>"
          + '<label class="tgl" title="表示／非表示"><input type="checkbox" data-hc-on="' + o.k + '"' + (x.hidden ? "" : " checked") + '><span></span></label></div>';
      });
      h += "</div>";
    });
    h += '<div class="hv-actions"><button class="iv-b pri" data-a="hv-add">＋ 店舗オリジナルの質問を追加</button>'
      + (H.isLocal() ? '<button class="iv-b dng" data-a="hv-reset">この端末のヒアリング編集を取り消す</button>' : "") + "</div>";
    box.innerHTML = h;
  }
  // ---- 既存の質問を編集
  function langRows(key, o, ph) {
    o = o || {};
    return '<div class="iv-f wide"><label>日本語</label><input data-l="' + key + '.ja" placeholder="' + esc(ph[0] || "") + '" value="' + esc(o.ja || "") + '"></div>'
      + '<details class="hv-more"><summary>English・中文（空欄なら日本語を表示）</summary><div class="iv-grid" style="margin-top:6px">'
      + '<div class="iv-f wide"><label>English</label><input data-l="' + key + '.en" placeholder="' + esc(ph[1] || "") + '" value="' + esc(o.en || "") + '"></div>'
      + '<div class="iv-f wide"><label>中文</label><input data-l="' + key + '.zh" placeholder="' + esc(ph[2] || "") + '" value="' + esc(o.zh || "") + '"></div></div></details>';
  }
  function readL(root2, key) {
    var o = {};
    ["ja", "en", "zh"].forEach(function (l) { var e = root2.querySelector('[data-l="' + key + "." + l + '"]'); e && e.value.trim() && (o[l] = e.value.trim()); });
    return o.ja ? o : null;
  }
  function openQEdit(id) {
    var d = defs().filter(function (x) { return x.id === id; })[0]; if (!d) return;
    if (!d.o.length) return toast("この質問は「使い方」の回答に合わせて内容が変わるため、スイッチで表示／非表示だけ切り替えられます", { type: "info", ms: 5000 });
    var c = H.cfg(), q = H.clone(c.questions[id] || {}), oo = q.opts || {};
    var order = (q.order && q.order.length ? q.order : []).concat(d.o.map(function (o) { return o.v; })).filter(function (v, i, a) { return a.indexOf(v) === i && d.o.some(function (o) { return o.v === v; }); });
    function optRow(v, n) {
      var def = d.o.filter(function (o) { return o.v === v; })[0], cur = oo[v] || {};
      return '<div class="hv-opt' + (cur.hidden ? " off" : "") + '" data-v="' + esc(v) + '"><div class="hv-opt-h"><label class="tgl sm"><input type="checkbox" data-ov="on"' + (cur.hidden ? "" : " checked") + '><span></span></label>'
        + '<b>' + esc(j3(def.l)) + '</b><span class="sp"></span><button class="iv-go" data-e="up" aria-label="上へ">↑</button><button class="iv-go" data-e="dn" aria-label="下へ">↓</button></div>'
        + '<div class="iv-grid">' + langRows("o_" + n, cur.label, def.l) + "</div></div>";
    }
    var s = sheet({
      tall: true, title: kt("質問を編集"),
      body: (isLock(id) ? '<div class="iv-note" style="background:#fef3c7;padding:10px;border-radius:12px;color:#92400e">' + (LOCKED[id] || "この質問は、このあとの質問の流れやおすすめの計算に必要なため非表示にできません（文言・選択肢の言い回しは変えられます）。") + "</div>" : "")
        + '<div class="iv-sec">質問文</div><div class="iv-grid">' + langRows("t", q.t, d.t) + "</div>"
        + '<div class="iv-sec">補足（💡のヒント）</div><div class="iv-grid">' + langRows("h", q.h, d.h) + "</div>"
        + '<div class="iv-sec">選択肢（スイッチで表示／非表示、↑↓で並び替え）</div><div id="hv-opts">' + order.map(optRow).join("") + "</div>"
        + '<div class="iv-note">空欄の言語は初期の文言のまま表示されます。選択肢の意味（おすすめの計算）は変わらないので、言い回しの調整に使ってください。</div>',
      foot: '<button class="iv-b ok grow" data-e="save">💾 保存</button><button class="iv-b" data-e="def">初期値に戻す</button>',
      onClick: function (e, api) {
        var b = e.target.closest("[data-e]"); if (!b) return;
        var a = b.getAttribute("data-e");
        if (a === "up" || a === "dn") {
          var r = b.closest(".hv-opt"), sib = a === "up" ? r.previousElementSibling : r.nextElementSibling;
          if (sib) { a === "up" ? r.parentNode.insertBefore(r, sib) : r.parentNode.insertBefore(sib, r); r.animate && !reduce && r.animate([{ transform: "translateY(" + (a === "up" ? 12 : -12) + "px)", opacity: .6 }, { transform: "none", opacity: 1 }], { duration: 300, easing: "cubic-bezier(.32,.72,0,1)" }); }
          return;
        }
        if (a === "def") {
          confirmSheet("初期値に戻しますか？", "この質問の文言・選択肢・並び順を最初の状態に戻します。", "戻す").then(function (ok) {
            if (!ok) return; api.close(true);
            hcommit(function (c2) { var hid = c2.questions[id] && c2.questions[id].hidden; delete c2.questions[id]; if (hid) c2.questions[id] = { hidden: true }; }, "質問を初期値に戻しました");
          });
          return;
        }
        if (a === "save") {
          var nq = { hidden: !!q.hidden }, rows = $$(".hv-opt", api.body), on = 0;
          var t = readL(api.body, "t"), hh = readL(api.body, "h");
          t && (nq.t = t); hh && (nq.h = hh);
          nq.opts = {}; nq.order = rows.map(function (r) { return r.getAttribute("data-v"); });
          rows.forEach(function (r) {
            var v = r.getAttribute("data-v"), n = order.indexOf(v), en = $('[data-ov="on"]', r).checked, lb = readL(r, "o_" + n), o = {};
            en ? on++ : (o.hidden = true);
            lb && (o.label = lb);
            Object.keys(o).length && (nq.opts[v] = o);
          });
          if (on < 2) return toast("選択肢は2つ以上表示してください", { type: "err" });
          if (nq.order.join() === d.o.map(function (o) { return o.v; }).join()) delete nq.order;
          api.close(true);
          hcommit(function (c2) { c2.questions[id] = nq; }, "💬 質問を保存しました");
        }
      }
    });
    s.wrap.addEventListener("change", function (e) { var r = e.target.closest(".hv-opt"); r && e.target.matches('[data-ov="on"]') && r.classList.toggle("off", !e.target.checked); });
  }
  // ---- 店舗オリジナルの質問
  function openCustom(k) {
    var c = H.cfg(), isNew = k == null, x = isNew ? { id: "c" + Date.now().toString(36), st: 2, t: {}, h: {}, o: [{ label: {} }, { label: {} }] } : H.clone(c.custom[k]);
    function oRow(o, n) {
      return '<div class="hv-opt" data-n="' + n + '"><div class="hv-opt-h"><b>選択肢 ' + (n + 1) + '</b><span class="sp"></span><button class="iv-x" data-e="odel" aria-label="削除">×</button></div><div class="iv-grid">' + langRows("o_" + n, o.label, ["", "", ""]) + "</div></div>";
    }
    function draw(api) {
      api.body.innerHTML = '<div class="iv-sec">どこで聞く？</div><div class="iv-f"><select id="hv-st">' + stages().map(function (sg) { return '<option value="' + sg[0] + '"' + (sg[0] === (+x.st || 0) ? " selected" : "") + ">" + esc(sg[1]) + "</option>"; }).join("") + "</select></div>"
        + '<div class="iv-sec">質問文</div><div class="iv-grid">' + langRows("t", x.t, ["例：下取りを希望されますか？", "", ""]) + "</div>"
        + '<div class="iv-sec">補足（💡のヒント・任意）</div><div class="iv-grid">' + langRows("h", x.h, ["例：古いPCの下取りで値引きできる場合があります", "", ""]) + "</div>"
        + '<div class="iv-sec">選択肢</div><div id="hv-copts">' + (x.o || []).map(oRow).join("") + '</div><button class="iv-b" data-e="oadd">＋ 選択肢を追加</button>'
        + '<div class="iv-note">店舗オリジナルの質問の答えは「スタッフ確認シート」に表示されます。おすすめの順位の計算には使いません。</div>';
    }
    function readAll(api) {
      x.st = +$("#hv-st", api.body).value;
      x.t = readL(api.body, "t") || {}; x.h = readL(api.body, "h") || {};
      x.o = $$("#hv-copts .hv-opt", api.body).map(function (r) { return { label: readL(r, "o_" + r.getAttribute("data-n")) || {} }; });
    }
    var s = sheet({
      tall: true, title: kt(isNew ? "店舗オリジナルの質問を追加" : "店舗オリジナルの質問"),
      foot: '<button class="iv-b ok grow" data-e="save">💾 保存</button>' + (isNew ? "" : '<button class="iv-b dng" data-e="del">🗑 削除</button>'),
      onClick: function (e, api) {
        var b = e.target.closest("[data-e]"); if (!b) return;
        var a = b.getAttribute("data-e");
        if (a === "oadd") { readAll(api); x.o.push({ label: {} }); draw(api); var ins = $$("#hv-copts input", api.body); ins.length && ins[ins.length - 3] && ins[ins.length - 3].focus(); return; }
        if (a === "odel") { readAll(api); x.o.splice(+b.closest(".hv-opt").getAttribute("data-n"), 1); draw(api); return; }
        if (a === "del") {
          confirmSheet("この質問を削除しますか？", "店舗オリジナルの質問「" + esc((x.t && x.t.ja) || "") + "」を削除します。", "削除する", true).then(function (ok) {
            if (!ok) return; api.close(true);
            hcommit(function (c2) { c2.custom.splice(k, 1); }, "🗑 質問を削除しました");
          });
          return;
        }
        if (a === "save") {
          readAll(api);
          if (!x.t.ja) return toast("質問文（日本語）を入れてください", { type: "err" });
          x.o = x.o.filter(function (o) { return o.label && o.label.ja; });
          if (x.o.length < 2) return toast("選択肢を2つ以上入れてください", { type: "err" });
          api.close(true);
          hcommit(function (c2) { isNew ? c2.custom.push(x) : (c2.custom[k] = x); }, isNew ? "✨ 店舗オリジナルの質問を追加しました" : "💾 質問を保存しました");
        }
      }
    });
    draw(s);
  }
  function hearClick(e) {
    var t = e.target;
    if (t.closest(".tgl")) return;   // スイッチは change で処理
    var b = t.closest("[data-a]");
    if (b) {
      var a = b.getAttribute("data-a");
      if (a === "hv-store") { var v = $("#hv-store").value.trim(); hcommit(function (c) { c.storeName = v; }, "🏬 店舗名を保存しました"); return true; }
      if (a === "hv-add") { openCustom(null); return true; }
      if (a === "hv-reset") { confirmSheet("ヒアリングの編集を取り消しますか？", "この端末で行ったヒアリング設定の変更を捨てて、公開中の設定に戻します。", "取り消す", true).then(function (ok) { if (ok) { H.reset(); dirty = true; renderHear(); toast("ヒアリング設定を公開中の状態に戻しました", { type: "ok" }); } }); return true; }
    }
    var r = t.closest("[data-hq]"); if (r) { openQEdit(r.getAttribute("data-hq")); return true; }
    var rc = t.closest("[data-hc]"); if (rc) { openCustom(+rc.getAttribute("data-hc")); return true; }
  }
  function hearChange(e) {
    var t = e.target, id = t.getAttribute("data-hq-on"), k = t.getAttribute("data-hc-on");
    if (id) { var on = t.checked; t.closest(".hq-row").classList.toggle("off", !on); hcommit(function (c) { c.questions[id] = c.questions[id] || {}; on ? delete c.questions[id].hidden : (c.questions[id].hidden = true); }, on ? "👁 質問を表示にしました" : "🙈 質問を非表示にしました"); }
    if (k != null) { var on2 = t.checked; hcommit(function (c) { c.custom[+k] && (on2 ? delete c.custom[+k].hidden : (c.custom[+k].hidden = true)); }, on2 ? "👁 質問を表示にしました" : "🙈 質問を非表示にしました"); }
  }

  // ---------------------------------------------------------------- クリック
  function moveTab() {
    var on = root.querySelector(".iv-tab.on"), p = root.querySelector(".iv-tabpill");
    if (on && p) { p.style.width = on.offsetWidth + "px"; p.style.transform = "translateX(" + (on.offsetLeft - 4) + "px)"; }
  }
  function onClick(e) {
    if (mode === "hear" && e.target.closest("#iv-hear") && hearClick(e)) return;
    var b = e.target.closest("[data-a]");
    var rowEl = e.target.closest(".sw-row");
    if (!b && rowEl) {
      if (rowEl.dataset.moved) return;
      if (openRow) { closeOpen(); return; }
      var p = byId(rowEl.parentNode.getAttribute("data-id")); p && openEdit(p);
      return;
    }
    if (!b) { $("#iv-fab") && $("#iv-fab").classList.remove("open"); return; }
    var a = b.getAttribute("data-a"), sw = b.closest(".sw");
    if (sw && ["price", "end", "revive", "del"].indexOf(a) >= 0) return act(a, sw.getAttribute("data-id"));
    if (a === "more") return openActions(byId(sw.getAttribute("data-id")));
    if (a === "close") return close();
    if (a === "pin") return tryPin();
    if (a === "eye") { var pi = $("#iv-pin"); pi.type = pi.type === "password" ? "text" : "password"; pi.focus(); return; }
    if (a === "menu") return openMenu();
    if (a === "fab") { $("#iv-fab").classList.toggle("open"); return; }
    if (a === "new" || a === "photo") { $("#iv-fab").classList.remove("open"); openEdit(null, { camera: a === "photo" }); return; }
    if (a === "tab") {
      var nm = b.getAttribute("data-v"); if (nm === mode) return;
      mode = nm; $$(".iv-tab").forEach(function (t) { t.classList.toggle("on", t === b); }); moveTab();
      root.classList.toggle("mode-hear", mode === "hear"); root.scrollTop = 0;
      if (mode === "hear") renderHear(true); else { renderDash(); renderList(true); }
      return;
    }
    if (a === "chip") {
      filt.st = b.getAttribute("data-v");
      $$(".iv-chip").forEach(function (c) { c.classList.toggle("on", c === b); }); movePill();
      $("#iv-list").innerHTML = Array(5).join(",").split(",").map(function () { return '<div class="sk-row"><div class="sk a"></div><div><div class="sk b"></div><div class="sk c"></div></div><div class="sk d"></div></div>'; }).join("");
      setTimeout(function () { renderList(true); }, reduce ? 0 : 260);
      return;
    }
    if (a === "dash") {
      var w = $("#iv-dash"), c = w.classList.toggle("closed"); b.classList.toggle("closed", c); ls(SS.dash, c ? "0" : "1");
      !c && renderDash();
    }
  }
  window.addEventListener("resize", function () { root && root.classList.contains("on") && (movePill(), moveTab()); });

  function boot() {
    build();
    var m = ss(SS.toast);
    if (m) { ss(SS.toast, null); setTimeout(function () { toast(esc(m), { type: "ok", icon: "✓" }); }, 700); }
    if (/[?&]admin(=|&|$)/.test(location.search || "")) open();
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
})();
</script>

<!-- ===== 相談アプリ: washer ===== -->
<style>
.wm-rot {
  transform-box: fill-box;
  transform-origin: center;
  animation: wmrot 3.4s linear infinite;
  animation-delay: var(--dl,0s);
}
@keyframes wmrot {
  to {
    transform: rotate(360deg);
  }
}
.wm-heat {
  animation: wmheat 1.8s ease-in-out infinite;
  animation-delay: var(--dl,0s);
}
@keyframes wmheat {
  0%,
  to {
    opacity: .15;
  }
  50% {
    opacity: 1;
  }
}
.wm-svg {
  width: 62px;
  height: 80px;
  display: block;
  margin: 0 auto;
}
.fr-card.sel .wm-svg {
  margin: 0;
}
.wm-cmp {
  width: 100%;
  border-collapse: collapse;
  font-size: .86rem;
  line-height: 1.55;
}
.wm-cmp td,
.wm-cmp th {
  padding: 7px 6px;
  border-bottom: 1px solid #e2e8f0;
  vertical-align: top;
  text-align: left;
}
.wm-cmp th {
  color: #1d4ed8;
  white-space: nowrap;
}
body.motion-off .wm-rot,
body.motion-off .wm-heat {
  animation: none!important;
}
</style><div id="wm-app" class="fr-root" role="dialog" aria-label="洗濯機購入相談"></div>
<script>
(function () {
  "use strict";
  const Me = [
    {
      id: "single_vertical",
      name: {
        ja: "一人暮らし・低価格縦型（4.5～7kg）",
        en: "Single / Value Top-Loader (4.5-7kg)",
        zh: "单身公寓·超值波轮（4.5～7kg）"
      },
      desc: {
        ja: "単身や少人数向け。5万円以下で手に入るコンパクト機から、毛布も洗える格安7kgまで。",
        en: "Compact top-loaders under 50k JPY. Fits small spaces and small laundry volumes.",
        zh: "单身或租房首选。5万日元以内紧凑机身，小占地低门槛。"
      },
      type: "vertical",
      minCap: 4.5,
      maxCap: 7,
      maxWidth: 540
    },
    {
      id: "mid_vertical",
      name: {
        ja: "2～4人向け・標準～高機能縦型（7～10kg）",
        en: "Family High-Performance Top-Loader (7-10kg)",
        zh: "家用主流·强洗净波轮（7～10kg）"
      },
      desc: {
        ja: "ビートウォッシュ、ZABOON、スゴ落ち泡洗浄など泥汚れや皮脂汚れに強い本命縦型。",
        en: "Featuring strong water flows (Beat Wash, ZABOON, Foam Wash) for heavy soil.",
        zh: "日立变频、东芝微泡、松下浓密泡沫，去顽固污渍实力派。"
      },
      type: "vertical",
      minCap: 7,
      maxCap: 10,
      maxWidth: 610
    },
    {
      id: "clean_nodrain",
      name: {
        ja: "節水・清潔重視（SHARP 穴なし槽）",
        en: "Water-Saving & Clean Tub (SHARP No-Hole)",
        zh: "节水防霉·无孔内桶（夏普专研）"
      },
      desc: {
        ja: "外槽との間のムダ水をカットし黒カビをブロック。節水性と清潔性を最優先する家庭に。",
        en: "Unique no-hole tub blocks mold and cuts waste water for maximum efficiency.",
        zh: "夏普独家无孔内桶，杜绝桶外夹层黑霉回流，极致节水。"
      },
      type: "vertical",
      minCap: 7,
      maxCap: 10,
      maxWidth: 600
    },
    {
      id: "dryer_vertical",
      name: {
        ja: "縦型洗濯乾燥機（ヒーター乾燥付き）",
        en: "Top-Loader with Dryer (Heater Type)",
        zh: "洗烘一体波轮（带加热烘干）"
      },
      desc: {
        ja: "ドラム式は置けないが雨の日や梅雨時に乾燥させたい方に。洗浄力と乾燥を両立。",
        en: "Top-loader design with integrated heater dryer for rainy days and tight spaces.",
        zh: "机位无法放滚筒、但梅雨季急需烘干衣物的折中全能解法。"
      },
      type: "vertical",
      minCap: 8,
      maxCap: 10,
      maxWidth: 610
    },
    {
      id: "compact_drum",
      name: {
        ja: "省スペース・コンパクトドラム（7～10kg）",
        en: "Compact & Entry Drum Washer (7-10kg)",
        zh: "纤薄省空间·入门滚筒（7～10kg）"
      },
      desc: {
        ja: "一般的な防水パンや狭い搬入経路に対応。手頃な価格でドラム式乾燥生活をスタート。",
        en: "Fits standard residential waterproof pans. Compact depth and reasonable cost.",
        zh: "专为标准小防水盘设计。机身浅窄好进门，低门槛享受滚筒烘干。"
      },
      type: "drum",
      minCap: 7,
      maxCap: 10,
      maxWidth: 640
    },
    {
      id: "flagship_drum",
      name: {
        ja: "大容量ドラム式洗濯乾燥機（ヒートポンプ・自動投入）",
        en: "Large Flagship Heat-Pump Drum (11～13kg)",
        zh: "大容量热泵旗舰滚筒（11～13kg）"
      },
      desc: {
        ja: "風アイロン、はやふわ乾燥、UV除菌、自動投入など家事を極限まで自動化する最高峰。",
        en: "Top-of-the-line heat-pump drying with auto-dispensing, large touchscreens, and wrinkle care.",
        zh: "低温热泵烘干护衣、风熨斗除皱、三元自动投放与巨幅彩屏顶配。"
      },
      type: "drum",
      minCap: 11,
      maxCap: 13,
      maxWidth: 740
    }
  ],
    H = (window.NJ_INV ? window.NJ_INV.products() : []),
    se = [
      {
        name: {
          ja: "洗濯機用 防振・防音ゴムマット (4枚組)",
          en: "Vibration Dampening Rubber Pads",
          zh: "洗衣机专用防震降噪静音脚垫"
        },
        price: "¥2,980",
        desc: {
          ja: "脱水時の激しい揺れやモーター音を吸収。夜間洗濯や階下への騒音防止に",
          en: "Absorbs spin-cycle vibration and noise for night washing",
          zh: "吸收脱水高频震动与电机嗡鸣，夜间洗衣不扰邻"
        }
      },
      {
        name: { ja: "洗濯機 かさ上げ台 (排水口・掃除用)", en: "Washer Riser Platform", zh: "洗衣机防堵加高底座支架" },
        price: "¥3,480",
        desc: {
          ja: "本体下に隙間を作り、排水ホースの折れを防ぎ、ホコリ掃除もラクラク",
          en: "Raises washer for easy cleaning and smooth drainage hose routing",
          zh: "垫高机身底部便于清理死角落尘，防止排水管折弯倒灌"
        }
      },
      {
        name: { ja: "酸素系 洗濯槽クリーナー (カビ・ニオイ除去)", en: "Oxygen Tub Cleaner", zh: "全自动洗衣机内桶除霉泡腾清洁剂" },
        price: "¥1,280",
        desc: {
          ja: "洗濯槽の裏側にこびりついた黒カビ・石けんカスを強力発泡でごっそり除去",
          en: "Removes hidden mold and soap scum thoroughly with active oxygen",
          zh: "强力活性氧深层瓦解桶夹层顽固黑霉与皮脂异味"
        }
      }
    ];
  var E = function () {
    return typeof currentLang < "u" && currentLang || "ja";
  },
    q = function (e) {
      return typeof e == "string" ? e : e && (e[E()] || e.ja) || "";
    },
    w = function (e) {
      const t = Math.round(e),
        a = Math.pow(10, Math.max(0, String(t).length - 2)),
        n = (Math.round(t / a) * a).toLocaleString("ja-JP");
      return r(["約" + n + "円", "approx. ¥" + n, "约" + n + "日元"]);
    },
    k = document.getElementById("wm-app"),
    de = { ja: 0, en: 1, zh: 2 },
    r = function (e) {
      return Array.isArray(e) ? e[de[E()]] : e;
    },
    u = function (e) {
      for (var t = r(e), a = 1; a < arguments.length; a++)
        t = t.split("{" + (a - 1) + "}").join(arguments[a]);
      return t;
    },
    c,
    O = { "◎": 5, "◯": 3.5, "△": 2, "✕": 1 },
    U = {
      none: ["なし", "None", "无"],
      heater: ["ヒーター式", "Heater type", "加热式"],
      heatpump: ["ヒートポンプ式", "Heat pump type", "热泵式"]
    },
    le = {
      pan: ["防水パン", "Waterproof pan", "防水盘"],
      w: ["幅", "Width", "宽度"],
      d: ["奥行", "Depth", "深度"],
      f: ["蛇口・棚", "Faucet / shelf", "水龙头·架子"],
      pa: ["搬入", "Delivery", "搬入"]
    },
    D = [
      {
        id: "single_vertical",
        n: ["コンパクト縦型", "Compact top-loader", "紧凑型波轮"],
        sub: ["4.5〜7kg", "4.5–7 kg", "4.5～7kg"],
        lay: "v",
        who: ["一人暮らし・サブ洗濯機", "Living alone / secondary washer", "独居·副洗衣机"],
        pro: [
          "幅54cm前後で小さな防水パンにも収まり、搬入も楽",
          "About 54 cm wide, so it fits small waterproof pans and is easy to carry in.",
          "宽约54cm，小防水盘也能放下，搬入轻松。"
        ],
        con: [
          "乾燥・自動投入なし。毛布など大物は容量に余裕がない",
          "No drying or auto-dispensing. Little capacity to spare for large items like blankets.",
          "没有烘干和自动投放。毛毯等大件衣物容量不够宽裕。"
        ]
      },
      {
        id: "mid_vertical",
        n: ["高機能縦型", "High-performance top-loader", "高性能波轮"],
        sub: ["7〜10kg", "7–10 kg", "7～10kg"],
        lay: "v",
        who: [
          "2〜5人・泥汚れ・皮脂汚れが気になる方",
          "2–5 people, concerned about mud and sebum stains",
          "2～5人·在意泥渍与皮脂污渍的人"
        ],
        pro: [
          "水流で洗うので洗浄力が高く、洗濯時間も短め。洗剤の自動投入も選べる",
          "Washes with water currents for strong cleaning power and shorter cycles. Auto-dispensing is also available.",
          "靠水流清洗，洗净力强，洗衣时间也较短。还可选带洗涤剂自动投放的机型。"
        ],
        con: [
          "乾燥はなし。幅60cm・奥行60cm超と一回り大きい",
          "No drying. A size larger, over 60 cm wide and deep.",
          "没有烘干功能。宽度、深度都超过60cm，体积大一圈。"
        ]
      },
      {
        id: "clean_nodrain",
        n: ["節水・穴なし槽", "Water-saving / no-hole tub", "节水·无孔内桶"],
        sub: ["シャープ・7〜10kg", "Sharp · 7–10 kg", "夏普·7～10kg"],
        lay: "v",
        who: ["槽のカビと水道代が気になる方", "Those concerned about tub mold and water bills", "在意内桶霉菌和水费的人"],
        pro: [
          "外槽との隙間がなく黒カビが付きにくい。水量も少なめで節水",
          "No gap with the outer tub, so black mold is less likely. Uses less water too.",
          "与外桶之间没有缝隙，不易滋生黑霉。用水量也较少，更节水。"
        ],
        con: [
          "洗浄力・機能は標準クラス。自動投入はなし",
          "Cleaning power and features are standard. No auto-dispensing.",
          "洗净力和功能为标准级别。没有自动投放。"
        ]
      },
      {
        id: "dryer_vertical",
        n: ["縦型洗濯乾燥機", "Top-loading washer-dryer", "波轮洗烘一体机"],
        sub: ["ヒーター乾燥付き", "With heater drying", "带加热烘干"],
        lay: "vd",
        who: [
          "ドラムは置けないが、雨の日は乾燥したい方",
          "Those who can’t fit a drum but want drying on rainy days",
          "放不下滚筒、但雨天想烘干的人"
        ],
        pro: [
          "縦型の洗浄力に乾燥も付く。ドラム式より設置の自由度が高い",
          "Top-loader cleaning power plus drying. More placement flexibility than a drum.",
          "兼具波轮的洗净力和烘干功能。安装位置比滚筒式更灵活。"
        ],
        con: [
          "ヒーター乾燥は電気代が高めで、乾燥容量は洗濯の半分ほど",
          "Heater drying costs more in electricity, and drying capacity is about half the wash capacity.",
          "加热烘干电费较高，烘干容量约为洗涤容量的一半。"
        ]
      },
      {
        id: "compact_drum",
        n: ["コンパクトドラム", "Compact drum", "紧凑型滚筒"],
        sub: ["7〜10kg", "7–10 kg", "7～10kg"],
        lay: "d",
        who: [
          "一般的な防水パン・狭い搬入経路でドラムにしたい方",
          "Those who want a drum despite a standard waterproof pan or narrow delivery path",
          "防水盘常规、搬入通道狭窄但想用滚筒的人"
        ],
        pro: [
          "奥行59〜65cmと浅めで、ドラム乾燥を手頃に始められる",
          "Shallow at 59–65 cm deep, an affordable way to start with drum drying.",
          "深度仅59～65cm较浅，可以较实惠地开始滚筒烘干生活。"
        ],
        con: [
          "乾燥はヒーター式が中心。大容量機より乾燥容量は控えめ",
          "Drying is mostly heater type. Drying capacity is smaller than large-capacity models.",
          "烘干以加热式为主。烘干容量比大容量机型小。"
        ]
      },
      {
        id: "flagship_drum",
        n: ["大容量ドラム", "Large-capacity drum", "大容量滚筒"],
        sub: ["11〜13kg・ヒートポンプ", "11–13 kg · Heat pump", "11～13kg·热泵"],
        lay: "D",
        who: [
          "毎日乾燥まで自動で終わらせたい方",
          "Those who want laundry fully finished through drying every day",
          "希望每天自动完成洗涤到烘干的人"
        ],
        pro: [
          "ヒートポンプで衣類に優しく、電気代も低め。自動投入・除菌などの機能も充実",
          "Heat pump is gentle on clothes and cheaper to run. Rich features such as auto-dispensing and sterilization.",
          "热泵烘干对衣物温和，电费也较低。自动投放、除菌等功能丰富。"
        ],
        con: [
          "奥行72cm級で、置けるかと搬入できるかの確認が必須。価格も高い",
          "About 72 cm deep, so you must confirm both placement and delivery. Price is also high.",
          "深度约72cm，必须确认能否放置和搬入。价格也较高。"
        ]
      }
    ],
    z = function (e) {
      return r(e.n);
    };
  function ee(e) {
    return D.filter(function (t) {
      return t.id === e.groupId;
    })[0];
  }
  function te(e, t) {
    var a = 'style="--dl:-' + t + 's"',
      n = e === "D" ? "#1e40af" : "#3b82f6",
      i = '<rect x="4" y="4" width="54" height="72" rx="7" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>',
      o;
    if (e === "v" || e === "vd")
      o = '<rect x="8" y="8" width="46" height="9" rx="3" fill="#cbd5e1"/><circle cx="14" cy="12.5" '
        + 'r="2" fill="#2563eb"/><rect x="8" y="20" width="46" height="52" rx="4" fill="#f8fafc"/>'
        + '<circle cx="31" cy="42" r="19" fill="#bfdbfe" stroke="#60a5fa" stroke-width="2"/><g class="wm-rot" '
        + a
        + '><circle cx="31" cy="42" r="9" fill="#fff" stroke="#3b82f6"/><path d="M31 33v18M22 42h18" '
        + 'stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"/></g>'
        + (
          e === "vd"
            ? '<path class="wm-heat" '
              + a
              + ' d="M17 66q3-3 0-6M31 66q3-3 0-6M45 66q3-3 0-6" stroke="#ef4444" stroke-width="2" '
              + 'fill="none" stroke-linecap="round"/>'
            : ""
        );
    else {
      var d = e === "D" ? 21 : 18;
      o = '<rect x="8" y="8" width="46" height="'
        + (e === "D" ? 12 : 9)
        + '" rx="3" fill="'
        + (e === "D" ? "#0f172a" : "#cbd5e1")
        + '"/><circle cx="31" cy="'
        + (e === "D" ? 50 : 46)
        + '" r="'
        + (d + 4)
        + '" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/><circle cx="31" cy="'
        + (e === "D" ? 50 : 46)
        + '" r="'
        + d
        + '" fill="'
        + n
        + '"/><g class="wm-rot" '
        + a
        + '><path d="M31 '
        + ((e === "D" ? 50 : 46) - d + 3)
        + "a"
        + (d - 3)
        + " "
        + (d - 3)
        + " 0 0 1 "
        + (d - 3)
        + " "
        + (d - 3)
        + "l-"
        + (d - 3)
        + ' 0z" fill="#bfdbfe"/><circle cx="'
        + (31 - d / 2)
        + '" cy="'
        + ((e === "D" ? 50 : 46) + d / 3)
        + '" r="4" fill="#fff" opacity=".8"/></g>';
    }
    return '<svg class="wm-svg" viewBox="0 0 62 80">' + i + o + "</svg>";
  }
  var W = [
    [
      "capfit",
      ["容量", "Capacity", "容量"],
      "📦",
      [
        "ご家族の洗濯量に対して洗濯容量（kg）が合っているか",
        "Whether the wash capacity (kg) suits your household’s laundry volume",
        "洗涤容量（kg）是否适合家人的洗衣量"
      ]
    ],
    [
      "dry",
      ["乾燥", "Drying", "烘干"],
      "🌬",
      [
        "乾燥機能の有無と方式（ヒートポンプは衣類に優しく電気代も低め）",
        "Whether it has drying and which type (heat pump is gentle on clothes and cheaper to run)",
        "有无烘干功能及方式（热泵对衣物温和、电费也较低）"
      ]
    ],
    [
      "clean",
      ["洗浄力", "Cleaning power", "洗净力"],
      "🫧",
      [
        "泥・皮脂・黄ばみへの強さ（ビート洗浄・ウルトラファインバブル・泡洗浄など）",
        "Strength against mud, sebum, and yellowing (Beat Wash, Ultra Fine Bubble, foam wash, etc.)",
        "对泥渍·皮脂·泛黄的去除能力（Beat洗净·超微细气泡·泡沫洗净等）"
      ]
    ],
    [
      "auto",
      ["家事ラク", "Chore-saving", "省心省力"],
      "🤖",
      [
        "洗剤・柔軟剤の自動投入、AIおまかせなど",
        "Auto-dispensing of detergent and softener, AI auto programs, etc.",
        "洗涤剂·柔顺剂自动投放、AI智能洗涤等"
      ]
    ],
    [
      "eco",
      ["節水・省エネ・静音", "Water/energy saving & quiet", "节水·节能·静音"],
      "💧",
      [
        "水量・電気代・インバーターによる静かさ",
        "Water use, electricity cost, and inverter quietness",
        "用水量·电费·变频带来的静音"
      ]
    ],
    [
      "size",
      ["コンパクト性", "Compactness", "小巧程度"],
      "📐",
      [
        "幅・奥行のスリムさ（設置・搬入のしやすさ）",
        "Slimness in width and depth (ease of placement and delivery)",
        "宽度·深度的纤薄程度（便于安装和搬入）"
      ]
    ]
  ],
    T = function (e) {
      return r(e[1]);
    },
    ae = function (e) {
      return r(e[3]);
    },
    ce = {
      w5: 5,
      w10: 5,
      w11: 5,
      w12: 5,
      w15: 4,
      w18: 4,
      w19: 3,
      w20: 4,
      w21: 4,
      w22: 4,
      w23: 4,
      w24: 4,
      w25: 4,
      w16: 2.5,
      w17: 2.5,
      w13: 2.5,
      w14: 3
    },
    I = function () {
      return c.a.hh === 0;
    },
    j = [
      {
        id: "sit",
        st: 0,
        t: ["まず、お住まいの状況を教えてください", "First, tell us about your housing situation", "请先告诉我们您的居住情况"],
        h: [
          "新居をこれから決める方は「暮らし方→間取りの想定」の順に、住まいが決まっている方は「設置場所の条件→暮らし方」の順におたずねします。",
          "If your new home is not decided yet, we start with your lifestyle and then plan the layout. "
            + "If your home is decided, we start with the installation spot and then your lifestyle.",
          "新居尚未确定的顾客先问生活方式、再设想布局；住处已确定的顾客先问安装位置条件、再问生活方式。"
        ],
        o: [
          [
            [
              "新居を検討中（間取り・洗濯機置き場はこれから）",
              "Planning a new home (layout and washer spot not decided)",
              "正在考虑新居（布局和洗衣机位置未定）"
            ],
            "new"
          ],
          [
            [
              "住まいは決まっている（今の洗濯機を買い替える）",
              "Home is decided (replacing my current washer)",
              "住处已定（更换现有洗衣机）"
            ],
            "repl"
          ],
          [
            [
              "住まいは決まっている（洗濯機は初めて・新生活）",
              "Home is decided (first washer / new life)",
              "住处已定（首次购买·新生活）"
            ],
            "first"
          ]
        ]
      },
      {
        id: "why",
        st: 1,
        when: function () {
          return c.a.sit === 1;
        },
        t: [
          "この洗濯機に買い替える、一番の理由は？",
          "What is the main reason for replacing your washer?",
          "更换洗衣机的最主要原因是？"
        ],
        h: [
          "理由によって、このあとの質問が変わります。",
          "Your reason changes the questions that follow.",
          "原因不同，后面的问题也会变化。"
        ],
        o: [
          [["壊れた・古くなった", "Broken or old", "坏了·用旧了"], "none"],
          [["容量が足りない", "Capacity is not enough", "容量不够"], "capfit"],
          [["乾燥機能が欲しい", "I want a drying function", "想要烘干功能"], "dry"],
          [["汚れ落ち・ニオイが気になる", "Cleaning power / odor", "去污力·异味"], "clean"],
          [["音・電気代・水道代が気になる", "Noise / electricity / water bills", "噪音·电费·水费"], "eco"]
        ]
      },
      {
        id: "cap2",
        st: 1,
        when: function () {
          return c.a.sit === 1 && g("why") === "capfit";
        },
        t: ["どんなときに容量が足りませんか？", "When is the capacity not enough?", "什么时候觉得容量不够？"],
        h: [
          "毛布・シーツなど大物が洗えないなら、今より2kgほど大きい容量を目安にします。",
          "If blankets and sheets will not fit, we aim about 2 kg above your current size.",
          "若毛毯床单等大件洗不了，则以比现在大约2kg的容量为参考。"
        ],
        o: [
          [["毛布・シーツなど大物が洗えない", "Blankets / sheets do not fit", "毛毯·床单等大件洗不了"], "big"],
          [["洗濯物の量・回数が増えた", "More laundry, more loads", "洗衣量·次数增加了"], "qty"]
        ]
      },
      {
        id: "hh",
        st: 1,
        t: ["どんな暮らし方ですか？", "What is your household like?", "您是怎样的家庭/生活状态？"],
        h: [
          "人数で洗濯量と、必要な機能の幅が変わります。一人暮らしの場合は、機能を絞った基本の質問だけにします。",
          "Household size sets laundry volume and how many features matter. If you live alone, we keep "
            + "the questions short and basic.",
          "人数决定洗衣量与所需功能范围。独居时我们会精简问题，只问基础项。"
        ],
        o: [
          [["一人暮らし", "Living alone", "独居"], [4.5, 7]],
          [["2人（夫婦・パートナー・共働き）", "2 people (couple / dual-income)", "2人（夫妻·双职工）"], [7, 9]],
          [["3〜4人（お子さまがいる）", "3–4 people (with kids)", "3～4人（有孩子）"], [8, 11]],
          [["5人以上・大家族", "5 or more / large family", "5人以上·大家庭"], [10, 13]]
        ]
      },
      {
        id: "tm",
        st: 1,
        t: [
          "洗濯は、いつ・どんなペースで回すことが多いですか？",
          "When and how often do you usually run laundry?",
          "您通常什么时候、以什么节奏洗衣？"
        ],
        h: [
          "夜に回すなら静音、朝なら時短・自動化、週末まとめ洗いなら大容量が効いてきます。",
          "Night runs favor quiet models, mornings favor speed and automation, weekend batches favor big capacity.",
          "夜间洗衣看重静音，早晨看重省时自动化，周末集中洗则看重大容量。"
        ],
        o: [
          [["朝、出かける前にさっと", "Quickly in the morning before leaving", "早上出门前快速洗"], "am"],
          [["夜に回す（音・振動が気になる）", "In the evening / night (noise matters)", "晚上洗（在意噪音震动）"], "night"],
          [["週末にまとめて", "Big batches on weekends", "周末集中洗"], "wk"],
          [["毎日少しずつ", "A little every day", "每天少量洗"], "dy"]
        ]
      },
      {
        id: "dry",
        st: 1,
        when: function () {
          return !I();
        },
        t: ["乾燥機能はどのくらい使いますか？", "How much will you use the drying function?", "烘干功能会用到什么程度？"],
        h: [
          "縦型かドラムか、ヒーター式かヒートポンプ式かを分ける大きなポイントです。",
          "This is a key point in choosing between top-loader and drum, and between heater and heat-pump drying.",
          "这是区分波轮或滚筒、加热式或热泵式的重要依据。"
        ],
        o: [
          [["毎日乾燥まで自動で終わらせたい", "I want drying finished automatically every day", "希望每天自动完成烘干"], 3],
          [
            [
              "普段は外干し、雨の日だけ乾燥",
              "Usually line-dry outdoors; dry only on rainy days",
              "平时晾在外面，只在雨天烘干"
            ],
            2
          ],
          [["乾燥は不要", "No drying needed", "不需要烘干"], .3]
        ]
      },
      {
        id: "dry1",
        st: 1,
        when: function () {
          return I();
        },
        t: ["乾燥機能は使いたいですか？", "Do you want a drying function?", "需要烘干功能吗？"],
        h: [
          "一人暮らし向けは洗濯のみの縦型が中心で、乾燥付きは少なめです。梅雨や花粉の時期だけ欲しい場合は、乾燥付き縦型やコンパクトドラムが候補です。",
          "Models for solo living are mostly wash-only top-loaders. If you only want drying in rainy "
            + "or pollen season, a top-loader with a dryer or a compact drum is an option.",
          "独居款多为仅洗涤的波轮机，带烘干的较少。若只在梅雨或花粉季需要，可考虑带烘干的波轮或紧凑滚筒。"
        ],
        o: [
          [["不要（外干し・部屋干しでOK）", "Not needed (line- or indoor-drying)", "不需要（晾晒即可）"], .3],
          [["梅雨・花粉の時期だけ使えたら嬉しい", "Nice for rainy / pollen season", "梅雨·花粉季能用就好"], 2]
        ]
      },
      {
        id: "soil",
        st: 1,
        t: ["特に落としたい汚れ・気になることは？", "What dirt or issue matters most to you?", "最想去除的污渍或最在意的问题？"],
        h: ["この答えに合わせて、次の質問が変わります。", "Your answer changes the next question.", "您的回答会改变下一个问题。"],
        o: [
          [["泥・部活のユニフォーム・作業着", "Mud, sports uniforms, work clothes", "泥渍·运动服·工作服"], "mud"],
          [["汗・皮脂・ニオイ・黄ばみ", "Sweat, sebum, odor, yellowing", "汗渍·皮脂·异味·泛黄"], "skin"],
          [["特にない", "Nothing in particular", "没有特别在意的"], "none"]
        ]
      },
      {
        id: "cmud",
        st: 1,
        when: function () {
          return g("soil") === "mud";
        },
        t: ["泥汚れは、どこまで落としたいですか？", "How thoroughly should mud be removed?", "泥渍希望去除到什么程度？"],
        h: [
          "縦型の水流洗浄（日立ビートウォッシュ・東芝ZABOON・パナソニック泡洗浄など）が得意な分野です。つけ置きしたくないほど縦型が有利です。",
          "Top-loader water-flow washing (Hitachi Beat Wash, Toshiba ZABOON, Panasonic foam wash) "
            + "excels here. The less pre-soaking you want, the more a top-loader helps.",
          "波轮水流洗净（日立Beat洗净、东芝ZABOON、松下泡沫洗净等）最擅长。不想预先浸泡的话，波轮更占优势。"
        ],
        o: [
          [["つけ置きなしで徹底的に", "Thoroughly, without pre-soaking", "不预浸也要彻底洗净"], 3],
          [["軽いつけ置きや予洗いはOK", "Light pre-soaking is fine", "轻度预浸或预洗可以"], 2]
        ]
      },
      {
        id: "cskin",
        st: 1,
        when: function () {
          return g("soil") === "skin";
        },
        t: [
          "ニオイ・黄ばみ対策は、どこまで求めますか？",
          "How much odor and yellowing prevention do you want?",
          "对异味·泛黄的防护要求有多高？"
        ],
        h: [
          "温水洗浄・除菌、穴なし槽（シャープ）、ヒートポンプ乾燥で部屋干し臭を抑えられます。",
          "Warm-water washing, sanitizing, a no-hole tub (Sharp) and heat-pump drying curb indoor-drying odor.",
          "温水洗涤、除菌、无孔内桶（夏普）、热泵烘干可抑制室内晾晒异味。"
        ],
        o: [
          [
            [
              "部屋干し臭・黄ばみまでしっかり防ぎたい",
              "Strongly prevent indoor-drying odor and yellowing",
              "想彻底防止室内晾晒异味和泛黄"
            ],
            3
          ],
          [["標準的な対策でよい", "Standard care is fine", "标准处理即可"], 1.5]
        ]
      },
      {
        id: "care",
        st: 1,
        when: function () {
          return !I() && g("dry") >= 2;
        },
        t: ["乾燥のあと、どんな仕上がりを求めますか？", "What finish do you want after drying?", "烘干后希望是什么样的效果？"],
        h: [
          "ヒートポンプ式は低温でふんわり・縮みにくく、日立「風アイロン」のようなシワ取り機能もあります。",
          "Heat-pump drying is low-temperature, fluffy and gentle; Hitachi’s “Wind Iron” also reduces wrinkles.",
          "热泵低温烘干蓬松、不易缩水；日立“风熨斗”还能减少褶皱。"
        ],
        o: [
          [["ふんわり・シワ少なめ・衣類を傷めたくない", "Fluffy, fewer wrinkles, gentle on clothes", "蓬松·少褶皱·不伤衣物"], 3],
          [["乾けばOK", "Dry is enough", "干了就行"], 1]
        ]
      },
      {
        id: "aut",
        st: 1,
        when: function () {
          return !I();
        },
        t: [
          "洗剤・柔軟剤の「自動投入」は？",
          "How about automatic dispensing of detergent and softener?",
          "洗涤剂·柔顺剂的“自动投放”需求如何？"
        ],
        h: [
          "毎回の計量が不要になります。投入タンクの掃除や、洗剤の対応種類は機種によって違います。",
          "It removes the need to measure each time. Tank cleaning and compatible detergent types vary by model.",
          "无需每次计量。投放箱的清洁以及可用洗涤剂种类因机型而异。"
        ],
        o: [
          [["絶対ほしい", "Must have", "一定要有"], 3],
          [["あれば便利", "Nice to have", "有的话更方便"], 2],
          [["不要（手動で十分）", "Not needed (manual is enough)", "不需要（手动就够了）"], .3]
        ]
      },
      {
        id: "eco",
        st: 1,
        when: function () {
          return !I() || g("tm") === "night";
        },
        t: [
          "静音・節水・電気代への関心は？",
          "How much do you care about quietness, water saving, and electricity cost?",
          "对静音·节水·电费有多在意？"
        ],
        h: [
          "夜間洗濯なら静音インバーター、水道代なら穴なし槽、乾燥するならヒートポンプが効きます。",
          "For night washing, a quiet inverter helps; for water bills, a no-hole tub; and if you dry, a heat pump.",
          "夜间洗衣适合静音变频，在意水费适合无孔内桶，需要烘干则热泵更有效。"
        ],
        o: [
          [
            [
              "夜間や早朝に回す・長く使うので重視",
              "Important — I run it at night or early morning, and will use it for a long time",
              "很重视——会在夜间或清晨使用，且会长期使用"
            ],
            3
          ],
          [["やや気になる", "Somewhat concerned", "有点在意"], 2],
          [["あまり気にしない", "Not very concerned", "不太在意"], 1]
        ]
      },
      {
        id: "home",
        st: 2,
        when: function () {
          return c.a.sit !== 0;
        },
        t: ["お住まいのタイプは？", "What type of home is it?", "住宅类型是？"],
        h: [
          "搬入のしやすさが変わるため、次の質問を分けます。",
          "Delivery difficulty differs, so the next questions branch here.",
          "搬入难度不同，后面的问题会据此分支。"
        ],
        o: [
          [["戸建て", "Detached house", "独栋住宅"], "house"],
          [["マンション（エレベーターあり）", "Apartment with elevator", "公寓（有电梯）"], "ev"],
          [["アパート・低層（階段のみ）", "Walk-up apartment (stairs only)", "公寓·低层（仅楼梯）"], "stairs"]
        ]
      },
      {
        id: "pan",
        st: 2,
        when: function () {
          return c.a.sit !== 0;
        },
        t: [
          "防水パンはありますか？ある場合、内寸（幅）は？",
          "Do you have a waterproof pan? If so, what is its inner width?",
          "有防水盘吗？如果有，内部宽度是多少？"
        ],
        h: [
          "洗濯機の脚が防水パンの内側に納まる必要があります。わからない場合は大きめの選択肢を選び、後でスタッフと採寸してください。パンがなければ床置きとして判定します。",
          "The washer’s feet must fit inside the waterproof pan. If unsure, choose a larger option and "
            + "measure with staff later. With no pan, we assume floor placement.",
          "洗衣机的脚必须能放进防水盘内侧。不确定时请选较大的选项，之后再与店员一起测量。没有防水盘则按直接放地面判定。"
        ],
        o: [
          [["パンなし（床置き）", "No pan (floor placement)", "没有防水盘（直接放地面）"], 9999],
          [["〜52cm（小さなパン）", "Up to 52 cm (small pan)", "52cm以下（小型防水盘）"], 520],
          [["〜54cm", "Up to 54 cm", "54cm以下"], 540],
          [["〜60cm", "Up to 60 cm", "60cm以下"], 600],
          [["64cm前後（標準的な大型パン）", "Around 64 cm (standard large pan)", "64cm左右（标准大型防水盘）"], 640]
        ]
      },
      {
        id: "width",
        st: 2,
        when: function () {
          return c.a.sit !== 0;
        },
        t: [
          "洗濯機を置く場所の「横幅」は？",
          "How wide is the space where the washer will go?",
          "放置洗衣机的位置“宽度”是多少？"
        ],
        h: [
          "壁や洗面台・棚の間の実測幅です。蛇口・ホースや点検のため約1cmの余裕を見て判定します。",
          "Measure the actual width between walls, sink, shelves, etc. We allow about 1 cm of "
            + "clearance for faucets, hoses, and servicing.",
          "请量取墙壁、洗手台、架子之间的实际宽度。为水龙头、软管和检修，判定时会留约1cm余量。"
        ],
        o: [
          [["〜55cm", "Up to 55 cm", "55cm以下"], 550],
          [["56〜62cm", "56–62 cm", "56～62cm"], 620],
          [["62〜66cm", "62–66 cm", "62～66cm"], 660],
          [["66〜75cm", "66–75 cm", "66～75cm"], 750],
          [["75cm以上・制限なし", "75 cm or more / no limit", "75cm以上·无限制"], 9999]
        ]
      },
      {
        id: "depth",
        st: 2,
        when: function () {
          return c.a.sit !== 0;
        },
        t: [
          "置き場の「奥行」は？（壁から手前の扉・通路まで）",
          "How deep is the space? (from the wall to the door or passage in front)",
          "放置处的“深度”是多少？（从墙面到前方的门·通道）"
        ],
        h: [
          "ドラム式は前に扉が開くため、奥行が大きな機種ほど前方スペースも必要になります。",
          "Drum washers open at the front, so deeper models need more space in front.",
          "滚筒洗衣机的门朝前开，深度越大的机型，前方所需空间也越大。"
        ],
        o: [
          [["〜55cm", "Up to 55 cm", "55cm以下"], 550],
          [["〜60cm", "Up to 60 cm", "60cm以下"], 600],
          [["〜65cm", "Up to 65 cm", "65cm以下"], 650],
          [["〜70cm", "Up to 70 cm", "70cm以下"], 700],
          [["72cm以上・制限なし", "72 cm or more / no limit", "72cm以上·无限制"], 9999]
        ]
      },
      {
        id: "wall",
        st: 2,
        when: function () {
          return c.a.sit !== 0 && !(I() && g("dry1") === .3);
        },
        t: ["洗濯機の横に「壁」があるのはどちら側？", "Which side of the washer has a wall?", "洗衣机的哪一侧靠墙？"],
        h: [
          "ドラム式は前面ドアが横に開きます。標準は「左開き」（ドアが左へ開く）なので、左側が壁だと開きにくくなります。縦型は上開きなので壁の位置に影響されません。",
          "On drum washers the front door swings sideways. The standard is left-hinged (opens to the "
            + "left), so a wall on the left makes it hard to open. Top-loaders open upward and are not "
            + "affected by wall position.",
          "滚筒洗衣机的前门向侧面打开。标准款为“左开”（门向左打开），所以左侧靠墙会不易开门。波轮机为上开式，不受墙壁位置影响。"
        ],
        o: [
          [["左側が壁", "Wall on the left", "左侧靠墙"], "L"],
          [["右側が壁", "Wall on the right", "右侧靠墙"], "R"],
          [["両側が壁", "Walls on both sides", "两侧都靠墙"], "B"],
          [["両側とも空いている", "Open on both sides", "两侧都有空位"], "N"]
        ]
      },
      {
        id: "faucet",
        st: 2,
        when: function () {
          return c.a.sit !== 0;
        },
        t: [
          "蛇口（水栓）や上の棚の「床からの高さ」は？",
          "How high above the floor is the faucet or shelf above?",
          "水龙头或上方架子距地面的“高度”是多少？"
        ],
        h: [
          "縦型はフタを開けるため、本体上に蛇口や棚があるとぶつかります。本体高さ＋2cmの余裕で判定します。",
          "Top-loaders open their lids upward, so a faucet or shelf above will interfere. We judge "
            + "with the unit height plus 2 cm clearance.",
          "波轮机需要向上开盖，机身上方有水龙头或架子会碰到。判定时按机身高度加2cm余量计算。"
        ],
        o: [
          [["〜95cm（低い）", "Up to 95 cm (low)", "95cm以下（较低）"], 950],
          [["〜105cm", "Up to 105 cm", "105cm以下"], 1050],
          [["〜115cm（一般的）", "Up to 115 cm (typical)", "115cm以下（一般高度）"], 1150],
          [["高い・制限なし", "High / no limit", "较高·无限制"], 9999]
        ]
      },
      {
        id: "drain",
        st: 2,
        when: function () {
          return c.a.sit !== 0 && !(I() && g("dry1") === .3);
        },
        t: ["排水口（排水トラップ）の位置は？", "Where is the drain (drain trap)?", "排水口（排水存水弯）在什么位置？"],
        h: [
          "排水口が洗濯機の真下にあると、ドラム式は排水ホースの取り回しやかさ上げ台が必要になる場合があります。",
          "If the drain is directly under the washer, a drum model may need hose rerouting or a riser platform.",
          "如果排水口正好在洗衣机正下方，滚筒式可能需要调整排水管走向或使用加高底座。"
        ],
        o: [
          [
            ["本体の真下（パン中央・奥）", "Directly under the unit (center/back of pan)", "机身正下方（防水盘中央·靠里）"],
            "U"
          ],
          [["本体の横や奥にずれている", "Off to the side or back of the unit", "偏向机身侧面或后方"], "S"],
          [["わからない（現地で確認）", "Not sure (check on site)", "不清楚（现场确认）"], "X"]
        ]
      },
      {
        id: "path",
        st: 2,
        when: function () {
          return c.a.sit !== 0;
        },
        t: [
          "搬入経路で一番狭い場所の幅は？",
          "How wide is the narrowest point along the delivery route?",
          "搬入路线上最窄处的宽度是多少？"
        ],
        h: [
          "玄関・廊下・階段・エレベーター・洗面所のドア幅です。幅か奥行の小さい面を向けて運ぶ前提の目安です（最終は下見で確認）。",
          "This covers the entrance, hallway, stairs, elevator, and bathroom door widths. It assumes "
            + "carrying the unit with its narrower face (width or depth) forward (final check by site visit).",
          "指玄关·走廊·楼梯·电梯·洗手间门的宽度。以较窄的一面（宽度或深度）朝前搬运为前提的参考值（最终以上门勘察为准）。"
        ],
        o: [
          [["〜60cm（狭い）", "Up to 60 cm (narrow)", "60cm以下（狭窄）"], 600],
          [["〜70cm", "Up to 70 cm", "70cm以下"], 700],
          [["70cm以上（広い）", "70 cm or more (wide)", "70cm以上（宽敞）"], 9999]
        ]
      },
      {
        id: "stair",
        st: 2,
        when: function () {
          return c.a.sit !== 0 && g("home") === "stairs";
        },
        t: ["階段の幅や曲がりは？", "How wide is the staircase, and how many turns?", "楼梯宽度与拐弯情况？"],
        h: [
          "ドラム式や大容量機は重く、狭い・急な階段では搬入が難しいことがあります。",
          "Drums and large models are heavy and can be hard to carry up narrow or steep stairs.",
          "滚筒和大容量机型较重，窄或陡的楼梯可能难以搬运。"
        ],
        o: [
          [["広め・まっすぐ", "Wide and straight", "较宽·笔直"], "ok"],
          [["狭い・急・曲がりが多い", "Narrow, steep or many turns", "窄·陡·拐弯多"], "tight"]
        ]
      },
      {
        id: "ev",
        st: 2,
        when: function () {
          return c.a.sit !== 0 && g("home") === "ev";
        },
        t: ["エレベーターの大きさは？", "How big is the elevator?", "电梯有多大？"],
        h: [
          "小さめの場合、ドラム式は梱包状態で載るか確認が必要です。",
          "In a small elevator, a drum must be checked to see if it fits when packed.",
          "电梯较小时，需确认滚筒机带包装能否放入。"
        ],
        o: [
          [["大きい（家具も載る）", "Large (furniture fits)", "较大（家具也能放）"], "big"],
          [["小さめ（数人乗れる程度）", "Small (a few people)", "较小（几个人的程度）"], "small"]
        ]
      },
      {
        id: "nplace",
        st: 4,
        when: function () {
          return c.a.sit === 0;
        },
        t: [
          "洗濯機の置き場として、どこを考えていますか？",
          "Where are you thinking of putting the washer?",
          "您打算把洗衣机放在哪里？"
        ],
        h: [
          "ベランダ・屋外は雨風や気温の影響を受けるため、ドラム式や乾燥機能付きは屋内向けです。",
          "Balconies and outdoor spots expose the washer to weather; drums and dryer models are meant for indoors.",
          "阳台·室外会受风雨气温影响，滚筒和带烘干的机型更适合室内。"
        ],
        o: [
          [["洗面所・脱衣所", "Washroom / changing room", "洗手间·更衣室"], "in"],
          [["室内のランドリースペース", "Indoor laundry space", "室内洗衣空间"], "in"],
          [["ベランダ・屋外", "Balcony / outdoors", "阳台·室外"], "out"],
          [["まだ決めていない", "Not decided yet", "尚未决定"], "tbd"]
        ]
      },
      {
        id: "nroom",
        st: 4,
        when: function () {
          return c.a.sit === 0;
        },
        t: [
          "洗濯機まわりに、どのくらいスペースを取れそうですか？",
          "How much space can you give the washer area?",
          "洗衣机周围大概能留出多少空间？"
        ],
        h: [
          "間取りの想定です。防水パンの内寸（幅）の目安で考えます。決められる段階なら、最終画面で必要な寸法をお伝えします。",
          "A layout assumption based on the waterproof pan inner width. If the layout is still open, "
            + "the final screen lists the dimensions you need.",
          "这是布局设想，以防水盘内部宽度为参考。若布局尚可调整，最终页会列出所需尺寸。"
        ],
        o: [
          [
            ["ゆったり（防水パン75cm以上・幅に余裕）", "Roomy (pan 75 cm+ / generous width)", "宽裕（防水盘75cm以上·宽度有余）"],
            9999
          ],
          [["標準（防水パン64cm前後）", "Standard (pan about 64 cm)", "标准（防水盘约64cm）"], 640],
          [["限られる（防水パン54cm前後まで）", "Limited (pan up to about 54 cm)", "有限（防水盘约54cm以内）"], 540],
          [["まだ決めていない（間取りはこれから）", "Not decided (layout still open)", "尚未决定（布局未定）"], 9999]
        ]
      },
      {
        id: "pri",
        st: 3,
        t: [
          "最後に、どうしても譲れない1点は？",
          "Finally, what is the one thing you absolutely won’t compromise on?",
          "最后，您绝对不能让步的一点是？"
        ],
        h: [
          "選んだ軸は評価を約2倍にして最終順位を決めます。最終画面で軸を切り替えて見比べもできます。",
          "The criterion you choose is weighted about 2x in the final ranking. You can switch criteria "
            + "on the final screen to compare.",
          "您选择的维度在最终排名中权重约为2倍。在最终画面可切换维度进行对比。"
        ],
        o: [
          [["容量の合い具合", "How well capacity fits", "容量是否合适"], "capfit"],
          [["乾燥のふんわり感", "Soft, fluffy drying", "烘干后的蓬松柔软感"], "dry"],
          [["洗浄力", "Cleaning power", "洗净力"], "clean"],
          [["家事ラク（自動投入）", "Chore-saving (auto-dispensing)", "省心省力（自动投放）"], "auto"],
          [["節水・省エネ・静音", "Water/energy saving & quiet", "节水·节能·静音"], "eco"],
          [["コンパクトさ", "Compactness", "小巧"], "size"]
        ]
      },
      {
        id: "budget",
        st: 9,
        t: ["ご予算の上限は？", "What is your maximum budget?", "预算上限是多少？"],
        h: [
          "ここまでの暮らし方を踏まえた目安です。少し上のモデルの方が合う場合もあるので、あと少し足して買えるモデルも最後にご案内します。",
          "A rough guide based on your lifestyle. A slightly higher model may suit you better, so "
            + "we’ll also show what a small step up could get you.",
          "请结合前面的生活方式作参考。稍高一档的机型可能更适合，最后也会为您介绍稍微加一点预算就能买到的机型。"
        ],
        o: [
          [["〜6万円", "Up to ¥60,000", "6万日元以下"], 6e4],
          [["〜14万円", "Up to ¥140,000", "14万日元以下"], 14e4],
          [["〜25万円", "Up to ¥250,000", "25万日元以下"], 25e4],
          [["〜35万円", "Up to ¥350,000", "35万日元以下"], 35e4],
          [["予算にこだわらない", "Budget is no concern", "不限预算"], 1e9]
        ]
      }
    ],
    N = function (e) {
      return j.filter(function (t) {
        return t.st === e && (!t.when || t.when());
      });
    },
    Ee = function (e) {
      return j.indexOf(e);
    },
    g = function (e) {
      var t = j.filter(function (n) {
        return n.id === e;
      })[0],
        a = c.a[e];
      return a == null || !V(t) ? null : t.o[a][1];
    },
    A = function (e) {
      var t = j.filter(function (n) {
        return n.id === e;
      })[0],
        a = c.a[e];
      return a == null || !V(t) ? "—" : r(t.o[a][0]);
    };
  function pe(e) {
    var t = [],
      a = [],
      n = [],
      i = g("pan") != null ? g("pan") : g("nroom"),
      o = g("width"),
      d = g("depth"),
      s = g("wall"),
      p = g("faucet"),
      h = g("drain"),
      m = g("path"),
      f = e.type === "drum";
    if (
      i != null
        && (
          e.pan > i
            ? t.push([
              "pan",
              u([
                "必要なパン内寸の目安{0}mmが、お持ちのパンより大きい",
                "The required pan inner size (about {0} mm) is larger than your pan",
                "所需防水盘内部尺寸参考值{0}mm大于您现有的防水盘"
              ], e.pan)
            ])
            : i < 9999
              && n.push(
                u([
                  "防水パン内寸（目安{0}mm）に収まる",
                  "Fits the pan inner size (about {0} mm)",
                  "可放入防水盘内部尺寸（参考{0}mm）"
                ], e.pan)
              )
        ),
        o != null
          && (
            e.w + 10 > o
              ? t.push([
                "w",
                u([
                  "幅{0}mmは設置幅に入りません",
                  "Width of {0} mm does not fit the installation width",
                  "宽度{0}mm放不进安装宽度"
                ], e.w)
              ])
              : n.push(
                u(
                  ["幅{0}mm（余裕{1}）", "Width {0} mm (clearance {1})", "宽度{0}mm（余量{1}）"],
                  e.w,
                  o >= 9999 ? r(["十分", "ample", "充足"]) : o - e.w + "mm"
                )
              )
          ),
        d != null
          && (
            e.d > d
              ? t.push([
                "d",
                u([
                  "奥行{0}mmは置き場に収まりません",
                  "Depth of {0} mm does not fit the space",
                  "深度{0}mm放不进安放位置"
                ], e.d)
              ])
              : n.push(u(["奥行{0}mmで収まる", "Depth of {0} mm fits", "深度{0}mm可放下"], e.d))
          ),
        p != null
          && (
            e.h + 20 > p
              ? t.push([
                "f",
                u([
                  "高さ{0}mmは蛇口・棚に干渉します",
                  "Height of {0} mm interferes with the faucet / shelf",
                  "高度{0}mm会碰到水龙头·架子"
                ], e.h)
              ])
              : n.push(
                u([
                  "高さ{0}mm（蛇口・棚に干渉しない）",
                  "Height {0} mm (clears faucet / shelf)",
                  "高度{0}mm（不会碰到水龙头·架子）"
                ], e.h)
              )
          ),
        m != null
    ) {
      var l = Math.min(e.w, e.d);
      l + 30 > m
        ? t.push([
          "pa",
          u([
            "最小面{0}mm＋余裕が搬入幅を超えます",
            "Smallest face of {0} mm plus clearance exceeds the delivery width",
            "最小面{0}mm加上余量超过搬入宽度"
          ], l)
        ])
        : n.push(r(["搬入経路を通過できる見込み", "Likely to pass through the delivery route", "预计可通过搬入路线"]));
    }
    return f
      ? (
        s === "L"
          && a.push(
            r([
              "左側が壁：標準の左開きでは扉が開きにくい。右開き仕様（別型番）の確認が必要",
              "Wall on the left: the standard left-hinged door is hard to open. A right-hinged version "
                + "(different model number) needs to be checked.",
              "左侧靠墙：标准左开门不易打开。需确认右开款（另有型号）。"
            ])
          ),
          s === "B"
            && (
              a.push(
                r([
                  "両側が壁：扉が十分に開かない恐れ。現地での寸法確認が必須",
                  "Walls on both sides: the door may not open fully. On-site measurement is essential.",
                  "两侧靠墙：门可能无法充分打开。必须现场确认尺寸。"
                ])
              ),
                a.push(
                  r([
                    "点検・ホース作業のスペースが取りにくい",
                    "Little room for servicing and hose work",
                    "检修·软管作业的空间不易保证"
                  ])
                )
            ),
          s === "R"
            && n.push(
              r([
                "左開きなので右側の壁に干渉しない",
                "Left-hinged, so it doesn’t clash with a wall on the right",
                "左开款，不会碰到右侧的墙"
              ])
            ),
          h === "U"
            && a.push(
              r([
                "排水口が本体の真下：かさ上げ台・L字ホースの確認が必要",
                "Drain directly under the unit: a riser platform / L-shaped hose must be checked",
                "排水口在机身正下方：需确认加高底座·L形排水管"
              ])
            )
      )
      : s
        && s !== "N"
        && n.push(
          r([
            "縦型は上開きで、壁の位置に影響されない",
            "Top-loaders open upward and are unaffected by wall position",
            "波轮机为上开式，不受墙壁位置影响"
          ])
        ),
      e.maker === "AQUA"
        && n.push(
          r([
            "AQUAは費用を抑えたい方向けのメーカーです（ご予算重視なら有力な選択肢）",
            "AQUA is mainly for cost-conscious buyers (a strong option if budget matters)",
            "AQUA主要面向想控制预算的顾客（重视预算时是有力选择）"
          ])
        ),
      g("nplace") === "out"
        && f
        && a.push(
          r([
            "ベランダ・屋外はドラム式・乾燥機能付きに不向き（屋内設置が前提）",
            "Balconies / outdoors are not suited to drums or dryer models (indoor use assumed)",
            "阳台·室外不适合滚筒·带烘干机型（以室内安装为前提）"
          ])
        ),
      g("stair") === "tight"
        && (f || e.wCap >= 10)
        && a.push(
          r([
            "階段が狭い・急な場合、大型機は階段搬入や吊り上げの可否を要確認",
            "With narrow or steep stairs, check whether a large model can be carried up or hoisted",
            "楼梯窄或陡时，大型机需确认能否搬上楼或吊装"
          ])
        ),
      g("ev") === "small"
        && f
        && a.push(
          r([
            "エレベーターが小さい場合、ドラム式は梱包サイズで載るか要確認",
            "In a small elevator, check that a packed drum fits",
            "电梯较小时，需确认滚筒机带包装能否放入"
          ])
        ),
      { ng: t, wn: a, ok: n };
  }
  function G(e) {
    var t = (g("hh") || [7, 9]).slice();
    g("cap2") === "big" && (t[0] += 2, t[1] += 2);
    var a = e.wCap < t[0] ? t[0] - e.wCap : e.wCap > t[1] ? e.wCap - t[1] : 0,
      n = e.price <= 4e4
        ? 5
        : e.price <= 8e4
          ? 4
          : e.price <= 14e4 ? 3 : e.price <= 22e4 ? 2 : e.price <= 32e4 ? 1.5 : 1;
    return {
      capfit: Math.max(1, 5 - a),
      dry: O[e.grades.dry],
      clean: O[e.grades.clean],
      auto: O[e.grades.auto],
      eco: ce[e.id] || 3,
      size: O[e.grades.size],
      price: n
    };
  }
  function Y() {
    var e = function (d, s) {
      var p = g(d);
      return p ?? s;
    },
      t = g("pri"),
      a = g("tm"),
      n = I(),
      i = {
        capfit: 3 + (a === "wk" ? 1.5 : 0),
        dry: .5 + e("dry", e("dry1", 1)) * 1.2 + e("care", 0) * .5,
        clean: .5 + e("cmud", e("cskin", 1)) * 1.2,
        auto: .5 + e("aut", .3) * 1.2 + (a === "am" ? .8 : 0),
        eco: .5 + e("eco", 1) + (a === "night" ? 1.2 : 0),
        size: n ? 2.5 : 1
      },
      o = g("why");
    return o && i[o] != null && (i[o] += 1.5),
      t && (i[t] *= 2.2),
      c.give
        && Object.keys(c.give).forEach(function (d) {
          c.give[d] && d !== t && i[d] != null && (i[d] *= .3);
        }),
      i;
  }
  function B(e) {
    var t = Y(), a = e ? 1e9 : g("budget") || 1e9;
    return H.map(function (n) {
      var i = pe(n), o = G(n), d = 0, s = 0;
      W.forEach(function (f) {
        d += t[f[0]] * o[f[0]] / 5, s += t[f[0]];
      });
      var p = 100 * d / s - i.wn.length * 12 - i.ng.length * 40, h = n.price > a, m = Math.round(p);
      return !e && n.maker === "AQUA" && g("budget") != null && g("budget") >= 14e4 && (p -= 10),
        h && (p -= Math.min(35, (n.price - a) / a * 90 + 8)),
        {
          p: n,
          h: i,
          a: o,
          raw: m,
          sc: Math.max(1, Math.min(99, Math.round(p))),
          over: h,
          t: ee(n)
        };
    });
  }
  var C = function (e) {
    return e.filter(function (t) {
      return !t.h.ng.length;
    });
  },
    F = function (e) {
      return e.slice().sort(function (t, a) {
        return a.sc - t.sc;
      });
    };
  function ue(e, t) {
    var a = performance.now(), n = +e.textContent || 0;
    (function i(o) {
      var d = Math.min(1, (o - a) / 450);
      e.textContent = Math.round(n + (t - n) * d), d < 1 && requestAnimationFrame(i);
    })(a);
  }
  function he() {
    var e = document.getElementById("wm-n");
    e && ue(e, C(B()).length);
  }
  function M(e, t) {
    t || c.hist.push(c.v), c.v = e, c.back = !!t, L(), k.scrollTo({ top: 0 });
  }
  function L() {
    var e = c.v,
      t = "",
      a = 0,
      n = j.length,
      i = E(),
      o = '<select class="tb-sel" data-a="lang" aria-label="Language"><option value="ja"'
        + (i === "ja" ? " selected" : "")
        + '>日本語</option><option value="en"'
        + (i === "en" ? " selected" : "")
        + '>English</option><option value="zh"'
        + (i === "zh" ? " selected" : "")
        + ">中文</option></select>",
      d = '<div class="fr-top"><button class="fr-x" data-a="close">'
        + r(["← 一覧へ", "← Back to list", "← 返回列表"])
        + "</button><b>"
        + r(["ノジマ式 洗濯機相談", "Nojima Washing Machine Advisor", "Nojima 洗衣机选购咨询"])
        + "</b>"
        + o
        + '<span class="fr-pill">'
        + u([
          '該当<i id="wm-n">{0}</i>/{1}機種',
          '<i id="wm-n">{0}</i>/{1} match',
          '符合<i id="wm-n">{0}</i>/{1}款'
        ], C(B()).length, H.length)
        + '</span></div><div class="fr-prog"><div id="wm-pg"></div></div>';
    if (e === "intro")
      t = me(), a = 3;
    else if (e === "rl")
      t = we(), a = J(e);
    else if (e === "r1")
      t = ge(), a = J(e);
    else if (e === "final")
      t = Le(), a = 100;
    else if (e === "staff")
      t = Pe(), a = 100;
    else {
      var s = N(e.st)[e.i];
      t = fe(s, e), a = J(e);
    }
    k.className = "fr-root on" + (c.back ? " fr-back" : ""),
      k.innerHTML = d + '<div class="fr-wrap"><div class="fr-in">' + t + "</div></div>",
      requestAnimationFrame(function () {
        var p = document.getElementById("wm-pg");
        p && (p.style.width = a + "%");
      });
  }
  function me() {
    var e = D.map(function (a, n) {
      var i = H.filter(function (f) {
        return f.groupId === a.id;
      }),
        o = i.map(function (f) {
          return f.price;
        }),
        d = i.map(function (f) {
          return f.w;
        }),
        s = i.map(function (f) {
          return f.d;
        }),
        p = i.map(function (f) {
          return f.wCap;
        }),
        h = r(["〜", "–", "～"]),
        m = function (f, l) {
          return Math.min.apply(0, f) / l + h + Math.max.apply(0, f) / l;
        };
      return '<div class="fr-card fr-up" style="--i:'
        + (n + 1)
        + '" data-a="type" data-i="'
        + n
        + '">'
        + te(a.lay, (n * .8).toFixed(1))
        + "<h3>"
        + z(a)
        + "</h3><small>"
        + r(a.sub)
        + "・"
        + i.length
        + r(["機種", " models", "款"])
        + '</small><div class="fr-more"><div><span>'
        + r(["向く方", "Best for", "适合人群"])
        + "</span>"
        + r(a.who)
        + "</div><div><span>"
        + r(["強み", "Strengths", "优点"])
        + "</span>"
        + r(a.pro)
        + "</div><div><span>"
        + r(["注意", "Watch out", "注意"])
        + "</span>"
        + r(a.con)
        + "</div><div><span>"
        + r(["目安", "Range", "参考"])
        + "</span>"
        + u([
          "洗濯{0}kg／幅{1}cm・奥行{2}cm",
          "Wash {0} kg / width {1} cm · depth {2} cm",
          "洗涤{0}kg／宽{1}cm·深{2}cm"
        ], m(p, 1), m(d, 10), m(s, 10))
        + "</div></div></div>";
    }).join(""),
      t = '<div class="fr-box fr-up" style="--i:7"><h3>'
        + r([
          "まず知っておきたい「縦型」と「ドラム」の違い",
          "Basics to know first: top-loader vs. drum",
          "先了解“波轮”与“滚筒”的区别"
        ])
        + '</h3><table class="wm-cmp"><tr><th>'
        + r(["洗い方", "Washing method", "洗涤方式"])
        + "</th><td>"
        + r([
          "縦型＝水流でもみ洗い（泥・皮脂に強い）／ドラム＝たたき洗い（衣類に優しく水が少ない）",
          "Top-loader = scrubbing with water currents (strong on mud and sebum) / Drum = tumble-wash "
            + "(gentle on clothes, uses less water)",
          "波轮＝水流揉洗（对泥渍·皮脂有效）／滚筒＝摔打洗（对衣物温和、用水少）"
        ])
        + "</td></tr><tr><th>"
        + r(["乾燥", "Drying", "烘干"])
        + "</th><td>"
        + r([
          "縦型＝なし or ヒーター式（電気代高め）／ドラム＝ヒーター式 or ヒートポンプ式（低温でふんわり・電気代も低め）",
          "Top-loader = none or heater type (higher electricity cost) / Drum = heater or heat-pump "
            + "type (low-temperature, fluffy results, lower electricity cost)",
          "波轮＝无烘干或加热式（电费较高）／滚筒＝加热式或热泵式（低温烘干更蓬松、电费也较低）"
        ])
        + "</td></tr><tr><th>"
        + r(["設置", "Installation", "安装"])
        + "</th><td>"
        + r([
          "縦型＝上開きで壁の位置に強く、搬入も楽／ドラム＝前開きなので<b>ドア向き・前の空き・排水口・搬入経路</b>が絶対条件",
          "Top-loader = opens upward, tolerant of wall position, easy to carry in / Drum = "
            + "front-opening, so <b>door direction, front clearance, drain position, and delivery "
            + "route</b> are must-check conditions",
          "波轮＝上开式，不受墙壁位置限制，搬入也轻松／滚筒＝前开式，因此<b>开门方向·前方空间·排水口·搬入路线</b>是硬性条件"
        ])
        + "</td></tr></table></div>";
    return '<span class="fr-tag fr-up">'
      + r(["STEP 0 ・ まずは全体像", "STEP 0 · The big picture", "STEP 0 · 先看整体概况"])
      + '</span><h1 class="fr-h1 fr-up" style="--i:1">'
      + r([
        "洗濯機は、大きく<em>6つのタイプ</em>に分かれます",
        "Washing machines fall into <em>6 main types</em>",
        "洗衣机大致分为<em>6种类型</em>"
      ])
      + '</h1><p class="fr-p fr-up" style="--i:2">'
      + u([
        "タップでタイプごとの違いを確認できます。そのあと、まず<b>お住まいの状況</b>をおたずねします。<b>新居を検討中</b>の方は、暮らし方→間取りの想定の順に。"
          + "<b>住まいが決まっている</b>方は、設置場所の条件→暮らし方の順に進め、店頭在庫{0}機種から3機種に絞ります。ご予算は、候補をご覧になってからおたずねします。",
        "Tap a card to see how the types differ. Then we first ask about <b>your housing "
          + "situation</b>. If you are <b>planning a new home</b>: lifestyle → layout assumptions. If "
          + "your <b>home is decided</b>: installation spot → lifestyle, narrowing {0} in-store models "
          + "to 3. We ask about budget after showing the picks.",
        "点击卡片查看各类型差异。之后先询问<b>居住情况</b>。<b>考虑新居</b>的顾客：生活方式→布局设想；<b>住处已定</b>的顾客：安装位置条件→生活方式，从店内{0}款中筛出3款。看完候选机型后再询问预算。"
      ], H.length)
      + '</p><div class="fr-types">'
      + e
      + "</div>"
      + t
      + '<button class="fr-btn" data-a="start">'
      + r(["診断をはじめる →", "Start the consultation →", "开始诊断 →"])
      + "</button>";
  }
  function fe(e, t) {
    var a = N(t.st),
      n = r(
        {
          1: ["暮らし方・使い方（生活スタイル）", "Your lifestyle & how you use it", "生活方式·使用习惯"],
          2: [
            "置けるか・開くか・運べるか（設置条件）",
            "Will it fit, open and get delivered? (installation)",
            "放得下·开得了·搬得进（安装条件）"
          ],
          0: ["はじめに｜お住まいの状況", "Start | Your housing situation", "开始｜居住情况"],
          4: ["新居の間取り・置き場の想定", "Your new home’s layout and washer spot", "新居的布局与摆放位置设想"],
          3: ["最後に｜譲れない点", "Last | Your priority", "最后｜不可让步的点"]
        }[t.st]
      ),
      i = Te(e),
      o = e.o.map(function (d, s) {
        return '<button class="fr-opt fr-up'
          + (i.i === s ? " rec" : "")
          + (c.a[e.id] === s ? " sel" : "")
          + '" style="--i:'
          + (s + 1)
          + '" data-a="pick" data-i="'
          + s
          + '"><span class="ck">'
          + (c.a[e.id] === s ? "✓" : "")
          + "</span>"
          + r(d[0])
          + (
            i.i === s
              ? '<span class="rb">'
                + (
                  i.why
                    ? "💡 " + i.why
                    : r(["💡 暮らし方から見たおすすめ", "💡 Suggested for your lifestyle", "💡 契合生活方式的推荐"])
                )
                + "</span>"
              : ""
          )
          + "</button>";
      }).join("");
    return '<span class="fr-tag">'
      + n
      + "</span>"
      + xe
      + Ae(t)
      + De(t)
      + '<div class="fr-q"><div class="no">Q'
      + (t.i + 1)
      + " / "
      + a.length
      + "</div><h2>"
      + r(e.t)
      + '</h2><div class="fr-hint">💡 '
      + r(e.h)
      + "</div>"
      + i.note
      + o
      + '</div><button class="fr-btn s" data-a="back">'
      + r(["← ひとつ戻る", "← Back", "← 返回上一步"])
      + "</button>";
  }
  function ge() {
    var e = B(), t = C(e), a = {};
    e.forEach(function (m) {
      m.h.ng.forEach(function (f) {
        a[f[0]] = (a[f[0]] || 0) + 1;
      });
    });
    var n = D.map(function (m, f) {
      var l = e.filter(function (x) {
        return x.t === m;
      }),
        v = l.filter(function (x) {
          return !x.h.ng.length;
        }).length;
      return '<div class="fr-row fr-up" style="--i:'
        + f
        + '"><b style="width:8.2em">'
        + z(m)
        + '</b><div class="fr-bar'
        + (v ? "" : " g")
        + '"><i style="width:'
        + (l.length ? v / l.length * 100 : 0)
        + "%;--i:"
        + f
        + '"></i></div><span style="width:3.4em;text-align:right">'
        + v
        + "/"
        + l.length
        + "</span></div>";
    }).join(""),
      i = Object.keys(a).map(function (m) {
        return '<span class="fr-chip ng">'
          + u(["{0}で {1}機種が対象外", "{1} models out by {0}", "因{0}排除{1}款"], r(le[m]), a[m])
          + "</span>";
      }).join("")
        || '<span class="fr-chip ok">' + r(["対象外なし", "Nothing excluded", "无被排除机型"]) + "</span>",
      o = g("wall"),
      d = t.filter(function (m) {
        return m.p.type === "vertical";
      }).length,
      s = t.length - d,
      p = r(
        o === "N"
          ? [
            "壁の制約がないため、扉の向きは気にせず選べます。",
            "With no wall constraints, you can choose without worrying about door direction.",
            "没有墙壁限制，选择时不必在意开门方向。"
          ]
          : o === "R"
            ? [
              "右側が壁でも、標準の左開きドラムは扉が壁側に開かないため問題ありません。",
              "Even with a wall on the right, a standard left-hinged drum’s door doesn’t open toward the "
                + "wall, so it’s fine.",
              "即使右侧靠墙，标准左开滚筒的门也不会朝墙一侧打开，没有问题。"
            ]
            : [
              "左側（または両側）が壁のため、<b>標準の左開きドラムは減点</b>しています。右開き仕様（別型番）の取り寄せ可否を確認します。縦型は影響を受けません。",
              "With a wall on the left (or both sides), <b>standard left-hinged drums are penalized</b>. "
                + "We will check whether a right-hinged version (different model number) can be ordered. "
                + "Top-loaders are unaffected.",
              "由于左侧（或两侧）靠墙，<b>标准左开滚筒会被扣分</b>。将确认能否订购右开款（另有型号）。波轮机不受影响。"
            ]
      ),
      h = t.filter(function (m) {
        return m.h.wn.length;
      }).length;
    return '<span class="fr-tag">'
      + r(["前半の結果", "Part 1 result", "前半结果"])
      + '</span><h1 class="fr-h1">'
      + u([
        "絶対条件で、<em>{0}機種</em>に絞り込みました",
        "Your must-haves narrowed it to <em>{0} models</em>",
        "根据硬性条件，已筛选出<em>{0}款</em>"
      ], t.length)
      + '</h1><p class="fr-p">'
      + u([
        "縦型 {0}機種／ドラム式 {1}機種が残っています。",
        "{0} top-loaders / {1} drum models remain.",
        "剩余波轮{0}款／滚筒{1}款。"
      ], d, s)
      + "<br>"
      + u([
        "パン {0}／幅 {1}／奥行 {2}／壁 {3}／蛇口 {4}／排水口 {5}／搬入 {6}",
        "Pan {0} / Width {1} / Depth {2} / Wall {3} / Faucet {4} / Drain {5} / Delivery {6}",
        "防水盘 {0}／宽 {1}／深 {2}／墙 {3}／水龙头 {4}／排水口 {5}／搬入 {6}"
      ], A("pan"), A("width"), A("depth"), A("wall"), A("faucet"), A("drain"), A("path"))
      + '</p><div class="fr-box"><h3>'
      + r(["タイプ別に残った機種数", "Models remaining by type", "各类型剩余机型数"])
      + "</h3>"
      + n
      + '</div><div class="fr-box"><h3>'
      + r(["外れた理由", "Why models were excluded", "被排除的原因"])
      + "</h3>"
      + i
      + '<p class="fr-p" style="margin:8px 0 0">'
      + p
      + (
        h
          ? u(["（要確認の注意つき：{0}機種）", " (with cautions to check: {0} models)", "（需确认的注意事项：{0}款）"], h)
          : ""
      )
      + "</p></div>"
      + (
        t.length < 3
          ? '<div class="fr-win">'
            + r([
              "⚠️ 条件にぴったり合う機種が3つ未満です。後半では「条件外」の近い機種も参考に表示します（赤字で明記）。設置条件を見直すと選択肢が広がる場合があります。",
              "⚠️ Fewer than 3 models match your conditions exactly. In Part 2 we also show close "
                + "“out-of-spec” models for reference (marked in red). Revisiting your installation conditions "
                + "may widen your options.",
              "⚠️ 完全符合条件的机型不足3款。后半部分也会参考性地显示接近的“条件外”机型（以红字标明）。重新核对安装条件，可能会增加选择。"
            ])
            + "</div>"
          : ""
      )
      + '<button class="fr-btn" data-a="next">'
      + r(["次へ：暮らし方・使い方のヒアリング→", "Next: your lifestyle questions →", "下一步：生活方式访谈→"])
      + '</button><button class="fr-btn k" data-a="staff">'
      + r(["📸 スタッフに見せる（条件メモ）", "📸 Show to staff (requirements memo)", "📸 出示给店员（条件备忘）"])
      + '</button><button class="fr-btn s" data-a="back">'
      + r(["← 前半をやり直す", "← Redo Part 1", "← 重做前半部分"])
      + "</button>";
  }
  function Oe() {
    var e = B(),
      t = C(e),
      a = D.map(function (s) {
        var p = t.filter(function (h) {
          return h.t === s;
        });
        return {
          t: s,
          n: p.length,
          v: W.map(function (h) {
            return p.length
              ? p.reduce(function (m, f) {
                return m + f.a[h[0]];
              }, 0)
                / p.length
              : 0;
          })
        };
      }),
      n = function (s) {
        return E() === "en" ? T(s).split(/[ \/]/)[0] : T(s).slice(0, 3);
      },
      i = '<div class="fr-heat" style="grid-template-columns:6.4em repeat(7,1fr);min-width:430px"><div '
        + 'class="hd"></div>'
        + W.map(function (s) {
          return '<div class="hd">' + s[2] + "<br>" + n(s) + "</div>";
        }).join("");
    a.forEach(function (s, p) {
      i += '<div class="rn">'
        + z(s.t)
        + '<br><small style="color:#94a3b8">'
        + s.n
        + r(["機種", " models", "款"])
        + "</small></div>"
        + s.v.map(function (h, m) {
          return '<div style="--a:'
            + (h ? (h / 5 * .85).toFixed(2) : 0)
            + ";--i:"
            + (p * 7 + m)
            + ";color:"
            + (h > 3.2 ? "#fff" : "#334155")
            + '">'
            + (h ? h.toFixed(1) : "—")
            + "</div>";
        }).join("");
    }),
      i += "</div>";
    var o = W.map(function (s, p) {
      return '<div class="fr-row fr-up" style="--i:'
        + p
        + ';align-items:flex-start"><b style="width:8em">'
        + s[2]
        + " "
        + T(s)
        + '</b><span style="flex:1;color:#475569">'
        + ae(s)
        + "</span></div>";
    }).join(""),
      d = a.filter(function (s) {
        return s.n;
      }).map(function (s) {
        return '<div style="margin-bottom:8px;font-size:.86rem;line-height:1.6"><b>'
          + z(s.t)
          + "</b>："
          + r(s.t.pro)
          + r(["。", ". ", "。"])
          + '<span style="color:#b45309">'
          + r(s.t.con)
          + "</span></div>";
      }).join("");
    return '<span class="fr-tag">'
      + r(["後半の結果", "Part 2 result", "后半结果"])
      + '</span><h1 class="fr-h1">'
      + r([
        "タイプごとの<em>違い</em>を見てみましょう",
        "Let’s look at the <em>differences</em> between types",
        "来看看各类型的<em>差异</em>"
      ])
      + '</h1><p class="fr-p">'
      + r([
        "条件に合う機種の平均点です（濃いほど得意・5点満点）。あなたの回答に応じて、この7つの軸で重みづけして点数をつけます。",
        "Average scores of matching models (darker = stronger, out of 5). Based on your answers, we "
          + "weight these 7 criteria to score each model.",
        "符合条件机型的平均分（颜色越深越强，满分5分）。根据您的回答，对这7个维度加权打分。"
      ])
      + '</p><div class="fr-box"><h3>'
      + r(["タイプ × 評価軸", "Type × criteria", "类型 × 评价维度"])
      + '</h3><div style="overflow-x:auto">'
      + i
      + '</div></div><div class="fr-box"><h3>'
      + r(["タイプごとの特徴", "Traits of each type", "各类型的特点"])
      + "</h3>"
      + d
      + '</div><div class="fr-box"><h3>'
      + r(["評価軸の見方", "How to read the criteria", "评价维度说明"])
      + "</h3>"
      + o
      + '</div><button class="fr-btn" data-a="next">'
      + r(["最後の質問へ →", "To the last question →", "前往最后一个问题 →"])
      + '</button><button class="fr-btn s" data-a="back">'
      + r(["← 後半をやり直す", "← Redo Part 2", "← 重做后半部分"])
      + "</button>";
  }
  var ye = {
    HITACHI: [
      "ビートウォッシュ（縦型）と風アイロン（ドラム）。泥・皮脂に強く、乾燥も得意",
      "Beat Wash (top-load) and Wind Iron (drum). Strong on mud and sebum, and on drying",
      "Beat洗净（波轮）与风熨斗（滚筒）。擅长去泥渍皮脂与烘干"
    ],
    Panasonic: [
      "洗剤・柔軟剤の自動投入と泡洗浄、スマホ連携。家事ラク・お手入れ重視",
      "Auto-dispensing, foam wash and app link. Chore-saving and easy care",
      "自动投放、泡沫洗净、手机联动。省心省力"
    ],
    TOSHIBA: [
      "ZABOONのウルトラファインバブルで衣類にやさしく。静音・省エネも得意",
      "ZABOON ultra-fine bubbles, gentle on clothes; quiet and efficient",
      "ZABOON超微细气泡，衣物护理温和；静音节能"
    ],
    SHARP: [
      "穴なし槽でカビを防ぎ節水。清潔さ重視の方、コンパクト設計が得意",
      "No-hole tub resists mold and saves water; good compact designs",
      "无孔内桶防霉节水；擅长紧凑设计"
    ],
    AQUA: [
      "費用を抑えたい方向けのメーカー。必要十分な機能と手頃な価格が魅力（大容量・スリム設計の機種など例外もあります）",
      "A maker mainly for cost-conscious buyers: essential features at friendly prices (with "
        + "exceptions such as large-capacity or slim models)",
      "主要面向想控制预算的顾客：功能够用、价格亲民（也有大容量·纤薄款等例外）"
    ],
    Haier: [
      "省スペースなドラム式を手頃に。小さな防水パンの住まいでも検討しやすい",
      "Affordable space-saving drums, easier to consider for small pans",
      "价格亲民的省空间滚筒，小防水盘也易考虑"
    ],
    Hisense: [
      "必要十分な機能で低価格。一人暮らし・サブ洗濯機にちょうどいい",
      "Basic features at a low price; ideal for solo living or a second washer",
      "基础功能、价格低；适合独居或副洗衣机"
    ],
    YAMADA: [
      "シンプルな機能で低価格。一人暮らしの最初の1台に",
      "Simple and affordable; a first washer for living alone",
      "功能简单、价格低；独居首选"
    ]
  };
  function we() {
    var e = Y(),
      t = {},
      a = j.filter(function (o) {
        return o.st === 1 && c.a[o.id] != null;
      }).map(function (o) {
        return '<span class="fr-chip">' + A(o.id) + "</span>";
      }).join("");
    H.forEach(function (o) {
      var d = G(o), s = 0, p = 0;
      W.forEach(function (m) {
        s += e[m[0]] * d[m[0]] / 5, p += e[m[0]];
      });
      var h = Math.round(100 * s / p);
      (!t[o.maker] || h > t[o.maker].sc) && (t[o.maker] = { p: o, sc: h });
    });
    var n = Object.keys(t).map(function (o) {
      return t[o];
    }).sort(function (o, d) {
      return d.sc - o.sc;
    }).slice(0, 5),
      i = n.map(function (o, d) {
        var s = o.p,
          p = (
            s.maker === "AQUA"
              ? '<span class="fr-chip">'
                + r(["💴 費用を抑えたい方向け", "💴 For cost-conscious buyers", "💴 适合控制预算"])
                + "</span>"
              : ""
          )
            + '<span class="fr-chip ok">'
            + s.wCap
            + 'kg</span><span class="fr-chip ok">'
            + r(["乾燥：", "Drying: ", "烘干："])
            + r(U[s.dryType])
            + "</span>"
            + (
              s.autoDisp === "Yes"
                ? '<span class="fr-chip ok">' + r(["自動投入", "Auto-dispensing", "自动投放"]) + "</span>"
                : ""
            );
        return '<div class="fr-box fr-up" style="--i:'
          + d
          + '"><h3>'
          + s.maker
          + "　"
          + u(["相性 {0}%", "Match {0}%", "契合度 {0}%"], o.sc)
          + '</h3><div class="fr-bar"><i style="width:'
          + o.sc
          + "%;--i:"
          + d
          + '"></i></div><p class="fr-p" style="margin:8px 0 6px">'
          + r(ye[s.maker])
          + '</p><div style="font-size:.86rem">'
          + u([
            "この暮らしに合う機種：<b>{0}</b>（{1}）",
            "Best fit for you: <b>{0}</b> ({1})",
            "最适合的机型：<b>{0}</b>（{1}）"
          ], s.name, z(ee(s)))
          + '</div><div style="margin-top:5px">'
          + p
          + "</div></div>";
      }).join("");
    return '<span class="fr-tag">'
      + r(["暮らし方の結果", "Your lifestyle result", "生活方式结果"])
      + '</span><h1 class="fr-h1">'
      + r([
        "あなたの暮らしに合う<em>メーカーの傾向</em>",
        "Which <em>makers</em> suit your life",
        "适合您生活的<em>品牌倾向</em>"
      ])
      + '</h1><p class="fr-p">'
      + r([
        "ここまでの回答をもとに、メーカーごとの得意分野と、相性の高い機種を比べました。暮らし方の相性だけで比べています（価格・設置条件は含みません）。",
        "Based on your answers, we compared each maker’s strengths and its best-matching model, on "
          + "lifestyle fit only (price and installation limits excluded).",
        "根据您的回答，仅按生活方式契合度比较各品牌的擅长领域与最契合机型（不含价格与安装条件）。"
      ])
      + '</p><div style="margin-bottom:10px">'
      + a
      + "</div>"
      + We()
      + i
      + '<button class="fr-btn" data-a="next">'
      + (
        _()
          ? r(["次へ：新居の間取りの想定→", "Next: your new home’s layout →", "下一步：新居的布局设想→"])
          : r(["次へ：譲れない点→", "Next: your priority →", "下一步：不可让步的点→"])
      )
      + '</button><button class="fr-btn s" data-a="back">'
      + r(["← 質問に戻る", "← Back to questions", "← 返回问题"])
      + "</button>";
  }
  function be() {
    var e = S(),
      t = e.top[0],
      a = e.top.map(function (n) {
        return n.p.id;
      });
    return t
      ? C(e.all).filter(function (n) {
        return a.indexOf(n.p.id) < 0
          && n.p.price > t.p.price
          && n.raw >= t.raw + 2
          && n.p.price - t.p.price <= Math.max(6e4, t.p.price * .6);
      }).sort(function (n, i) {
        return i.raw - n.raw;
      }).slice(0, 2).map(function (n) {
        return { e: n, base: t };
      })
      : [];
  }
  function ve() {
    var e = be();
    if (!e.length)
      return "";
    var t = e[0].base,
      a = e.map(function (n) {
        var i = n.e,
          o = i.p,
          d = W.filter(function (s) {
            return i.a[s[0]] - t.a[s[0]] >= 1;
          }).map(function (s) {
            return '<span class="fr-chip ok">'
              + s[2]
              + u(["{0}がUP", "{0} improves", "{0}提升"], T(s))
              + "</span>";
          }).join("");
        return '<div class="fr-win"><b>'
          + u(["あと{0}で「{1}」（{2}）", "For {0} more: {1} ({2})", "再加{0}：{1}（{2}）"], w(
            o.price - t.p.price
          ), o.name, o.maker)
          + "</b><br>"
          + u([
            "{0}｜洗濯{1}kg／乾燥：{2}｜合計 {3}",
            "{0} | Wash {1} kg / Drying: {2} | total {3}",
            "{0}｜洗涤{1}kg／烘干：{2}｜合计 {3}"
          ], z(i.t), o.wCap, r(U[o.dryType]), w(o.price))
          + '<div style="margin-top:4px">'
          + d
          + "</div></div>";
      }).join("");
    return '<div class="fr-box"><h3>'
      + r(["💡 もう少し予算を出せるなら", "💡 If you can stretch the budget a little", "💡 如果预算可以稍微放宽"])
      + '</h3><p class="fr-p">'
      + u([
        "1位「{0}」より、少し足すだけで暮らしにもっと合う機種があります。",
        "A small step up from #1 “{0}” gets you something that fits your life better.",
        "比第1名“{0}”稍微多加一点预算，就有更贴合您生活的机型。"
      ], t.p.name)
      + "</p>"
      + a
      + "</div>";
  }
  function ke() {
    return '<div class="fr-win" style="margin-top:10px">'
      + r([
        "※価格は目安（約）です。在庫や価格は変動しますので、ご購入前に必ず売場スタッフ・店頭表示で最新の価格と在庫をご確認ください。",
        "* Prices are approximate. Stock and prices change, so please confirm the latest price and "
          + "availability with store staff or the shelf tag before buying.",
        "※价格仅为大致参考。库存与价格会变动，购买前请务必向店员或价签确认最新价格与库存。"
      ])
      + "</div>";
  }
  function V(e) {
    return !e.when || e.when();
  }
  var xe = "<style>.wm-mini .wm-svg{width:38px;height:49px}.fr-opt.rec:not(.sel){background:#fffbeb;"
    + "border-color:#fde68a}.fr-opt .rb{display:block;font-size:.72rem;color:#b45309;"
    + "margin-top:2px}</style>";
  function re(e, t) {
    var a = W.filter(function (n) {
      return n[0] !== "capfit" && e.a[n[0]] - t.a[n[0]] >= 1;
    }).map(function (n) {
      return n[2] + T(n);
    });
    return e.p.wCap - t.p.wCap >= 1.5 && a.push("📦+" + (e.p.wCap - t.p.wCap) + "kg"),
      e.p.autoDisp === "Yes"
        && t.p.autoDisp !== "Yes"
        && a.push(r(["🤖自動投入", "Auto-dispensing", "自动投放"])),
      a;
  }
  function ne(e, t, a) {
    var n = H.map(function (s) {
      return s.price;
    }),
      i = Math.min.apply(0, n),
      o = Math.max.apply(0, n),
      d = function (s) {
        return (s - i) / (o - i) * 100;
      };
    return '<div style="position:relative;height:22px;background:#f1f5f9;border-radius:99px;margin:10px '
      + '0 4px"><div style="position:absolute;top:0;bottom:0;left:'
      + Math.min(d(e), 95).toFixed(1)
      + "%;width:"
      + Math.max(5, d(t) - d(e)).toFixed(1)
      + '%;background:#fef3c7;border:1.5px solid #f59e0b;border-radius:99px"></div>'
      + a.map(function (s) {
        return '<i style="position:absolute;top:6px;width:10px;height:10px;border-radius:50%;background:#f59e0b;left:calc('
          + d(s).toFixed(1)
          + '% - 5px)"></i>';
      }).join("")
      + '</div><div style="display:flex;justify-content:space-between;font-size:.72rem;color:#64748b"><span>'
      + w(i)
      + "</span><span>"
      + w(o)
      + "</span></div>";
  }
  function We() {
    var e = Y(),
      t = H.map(function (o) {
        var d = G(o), s = 0, p = 0;
        return W.forEach(function (h) {
          s += e[h[0]] * d[h[0]] / 5, p += e[h[0]];
        }),
          { p: o, sc: s / p };
      }).sort(function (o, d) {
        return d.sc - o.sc;
      }).slice(0, 5),
      a = t.map(function (o) {
        return o.p.price;
      }),
      n = Math.min.apply(0, a),
      i = Math.max.apply(0, a);
    return '<div class="fr-box"><h3>'
      + r(["💴 あなたの生活スタイルに合う価格帯", "💴 The price range that fits your lifestyle", "💴 契合您生活方式的价格区间"])
      + '</h3><p class="fr-p" style="margin:0">'
      + u([
        "ここまでの回答に相性の高い上位5機種は <b>{0}〜{1}</b> が中心です（薄く色が付いた範囲）。高い機種のほうが暮らしに合う場合もあります。",
        "The 5 best-matching models so far center on <b>{0} – {1}</b> (the softly highlighted range)"
          + ". A higher-priced model may suit your life better.",
        "目前契合度最高的5款主要集中在<b>{0}～{1}</b>（浅色高亮范围）。价格更高的机型有时更适合您的生活。"
      ], w(n), w(i))
      + "</p>"
      + ne(n, i, a)
      + '<div style="font-size:.8rem;color:#475569">'
      + t.map(function (o) {
        return o.p.maker + " " + o.p.name + "（" + w(o.p.price) + "）";
      }).join(" / ")
      + "</div></div>";
  }
  function Ae(e) {
    if (c.a.hh == null)
      return "";
    var t = B(1), a = F(C(t));
    if (!a.length)
      return "";
    var n = D.map(function () {
      return 0;
    }),
      i = {};
    a.slice(0, 6).forEach(function (y) {
      n[D.indexOf(y.t)] += y.sc;
    });
    var o = n.indexOf(Math.max.apply(0, n));
    a.forEach(function (y) {
      i[y.p.maker] || (i[y.p.maker] = y);
    });
    var d = Object.keys(i).map(function (y) {
      return i[y];
    }).slice(0, 3),
      s = D.map(function (y, P) {
        var Q = t.filter(function (X) {
          return X.t === y && !X.h.ng.length;
        }).length,
          b = P === o;
        return '<div style="flex:1;min-width:56px;text-align:center;padding:6px 2px;border-radius:10px;'
          + (
            b
              ? "background:#fef3c7;border:1.5px solid #f59e0b"
              : "background:#f8fafc;border:1px solid #e2e8f0" + (Q ? "" : ";opacity:.4")
          )
          + '"><div class="wm-mini">'
          + te(y.lay, (P * .8).toFixed(1))
          + '</div><div style="font-size:.64rem;line-height:1.3;margin-top:2px">'
          + (b ? "👉" : "")
          + z(y)
          + "<br>("
          + Q
          + ")</div></div>";
      }).join(""),
      p = d.map(function (y) {
        return '<div style="display:flex;align-items:center;gap:6px;font-size:.78rem;margin-top:5px"><b style="width:5.6em">'
          + y.p.maker
          + (y.p.maker === "AQUA" ? " 💴" : "")
          + '</b><div class="fr-bar" style="flex:1"><i style="width:'
          + y.sc
          + '%"></i></div><span style="width:8.5em;text-align:right">'
          + y.p.name
          + "</span></div>";
      }).join(""),
      h = '<div class="fr-box" style="padding:10px 12px"><h3 style="font-size:.9rem">'
        + r(["🔎 いまの見立て：6つのタイプのうち…", "🔎 Current read: which of the 6 types…", "🔎 目前判断：6种类型中…"])
        + '</h3><div style="display:flex;gap:5px">'
        + s
        + '</div><p class="fr-p" style="margin:6px 0 2px;font-size:.82rem">'
        + u([
          "今のところ <b>{0}</b> が当てはまりそうです（{1}）。カッコ内は条件に合う残り機種数です。",
          "So far <b>{0}</b> looks like the best match ({1}). Numbers in brackets are the models still matching.",
          "目前<b>{0}</b>最可能适合（{1}）。括号内为仍符合条件的机型数。"
        ], z(D[o]), r(D[o].who))
        + '</p><div style="font-size:.76rem;color:#64748b">'
        + r(["メーカー別の相性（いまの回答での上位）", "Maker fit so far (top models)", "各品牌目前契合度（代表机型）"])
        + "</div>"
        + p;
    if (e && e.st === 3) {
      var m = a[0],
        f = a.slice(0, 3).map(function (y) {
          return y.p.price;
        }),
        l = Math.min.apply(0, f),
        v = Math.max.apply(0, f);
      h += '<p class="fr-p" style="margin:10px 0 0;font-size:.82rem">💴 '
        + u([
          "ここまでの回答に最も合う機種の価格帯は <b>{0}〜{1}</b> です（薄く色が付いた範囲）。",
          "The best-fitting models cost roughly <b>{0} – {1}</b> (softly highlighted).",
          "最契合的机型价格约<b>{0}～{1}</b>（浅色高亮范围）。"
        ], w(l), w(v))
        + "</p>"
        + ne(l, v, f);
      var x = a.filter(function (y) {
        return y.p.price > m.p.price && y.p.price <= m.p.price * 2.2 && re(y, m).length;
      }).sort(function (y, P) {
        return y.p.price - P.p.price;
      })[0];
      x
        && (
          h += '<p class="fr-p" style="margin:6px 0 0;font-size:.82rem">⬆️ '
            + u([
              "もう少し上のランクなら <b>{0}</b>（{1}）。現在の最有力（{4}）より<b>{2}プラス</b>で、{3}がプラスされます。",
              "One rank up: <b>{0}</b> ({1}): <b>{2} more</b> than your current best fit ({4}), adding {3}.",
              "再上一档：<b>{0}</b>（{1}），比目前最契合机型（{4}）<b>多{2}</b>，增加{3}。"
            ], x.p.name, x.p.maker, w(x.p.price - m.p.price), re(x, m).join("・"), m.p.name)
            + "</p>"
        );
    }
    return h + "</div>";
  }
  function Te(e) {
    var t = { i: -1, note: "" };
    if (e.id === "budget") {
      var a = F(C(B(1))).slice(0, 3);
      if (!a.length)
        return t;
      var n = a[0].p.price;
      e.o.forEach(function (s, p) {
        t.i < 0 && s[1] >= n && (t.i = p);
      }),
        t.why = u([
          "最有力の「{0}」が{1}前後のため",
          "The best-fit “{0}” costs around {1}",
          "最契合的“{0}”约{1}"
        ], a[0].p.name, w(n)),
        t.note = '<p class="fr-p" style="font-size:.84rem;background:#fffbeb;border-radius:8px;padding:8px '
          + '10px;margin:0 0 8px">'
          + r([
            "薄く色が付いた選択肢が、ここまでの暮らし方に合う予算の目安です。",
            "The softly highlighted option is the budget that fits your lifestyle so far.",
            "浅色高亮的选项是契合目前生活方式的预算参考。"
          ])
          + "</p>";
    } else if (e.id === "pri") {
      var i = c.a.pri;
      delete c.a.pri;
      var o = Y(), d = null;
      i != null && (c.a.pri = i),
        W.forEach(function (s) {
          s[0] !== "capfit" && (!d || o[s[0]] > o[d]) && (d = s[0]);
        }),
        (!d || o[d] < 2.6) && (d = "capfit"),
        e.o.forEach(function (s, p) {
          s[1] === d && (t.i = p);
        }),
        t.why = Be(d);
    }
    return t;
  }
  function Ce() {
    var e = [], t = g("tm"), a = c.a.hh;
    return a >= 2
      && e.push([
        "3人以上のご家庭では、洗濯容量10kg前後〜だと洗濯回数が減り、毛布やシーツもまとめて洗えます。",
        "For 3+ people, around 10 kg or more means fewer loads and room for blankets and sheets.",
        "3人以上的家庭，约10kg以上可减少洗衣次数，毛毯床单也能一起洗。"
      ]),
      t === "wk"
        && e.push([
          "週末のまとめ洗いなら、一回り大きい容量が安心です。小さいと洗濯回数が増えて時間も水道代もかさみます。",
          "For weekend batches, one size up is safer; smaller drums mean more loads, time and water.",
          "周末集中洗建议选大一号容量，小容量会增加洗衣次数、时间和水费。"
        ]),
      t === "night"
        && e.push([
          "夜に回すなら、静音設計のインバーター機（中〜上位クラス）が毎日の快適さにつながります。",
          "For night washing, a quiet inverter model (mid to upper class) improves daily comfort.",
          "夜间洗衣，选静音变频机型（中高档）更舒适。"
        ]),
      g("dry") === 3
        && e.push([
          "毎日乾燥まで自動で終えたいなら、ヒートポンプ式のドラムが向いています。本体は高めでも、衣類にやさしく電気代も低めです。",
          "For daily automatic drying, a heat-pump drum fits best: higher price, but gentler on "
            + "clothes and cheaper to run.",
          "想每天自动烘干，热泵滚筒最合适：机身较贵，但对衣物温和、电费更低。"
        ]),
      g("aut") === 3
        && e.push([
          "洗剤・柔軟剤の自動投入は、中〜上位クラスに集中しています。",
          "Auto-dispensing of detergent and softener is concentrated in mid-to-upper classes.",
          "洗涤剂·柔顺剂自动投放集中在中高档机型。"
        ]),
      I()
        && g("dry1") === 2
        && e.push([
          "一人暮らしでも梅雨・花粉に乾燥が欲しいなら、乾燥付き縦型やコンパクトドラムは一段上の価格帯になります。",
          "Even living alone, drying for rainy / pollen season means a top-loader with dryer or a "
            + "compact drum, one price tier up.",
          "即使独居，若梅雨·花粉季需要烘干，带烘干的波轮或紧凑滚筒会高一档价位。"
        ]),
      _()
        && g("nroom") === 9999
        && e.push([
          "間取りを決められる段階なら、最終画面の「新居の間取りで確認したいこと」を設計担当の方にお伝えください。",
          "If the layout is still open, pass the “What to check in your new home’s layout” list on the "
            + "final screen to your designer.",
          "若布局尚可调整，请把最终页的“新居布局中需要确认的事项”告知设计师。"
        ]),
      e;
  }
  function ze() {
    var e = g("budget");
    if (e == null || e >= 1e9)
      return "";
    var t = B(1),
      a = F(C(t))[0],
      n = F(
        C(t).filter(function (i) {
          return i.p.price <= e;
        })
      )[0];
    return !a || a.p.price <= e || n && a.sc - n.sc < 6
      ? ""
      : u([
        "選ばれたご予算だと、ここまでのご希望に最も合う<b>{0}</b>には届きません（あと{1}）。この後の結果で比較できます。",
        "Your budget falls short of <b>{0}</b>, the best fit so far ({1} more). You can compare in the results.",
        "所选预算够不到目前最契合的<b>{0}</b>（还差{1}）。稍后结果页可对比。"
      ], a.p.name, w(a.p.price - e));
  }
  function De(e) {
    var t = Ce().map(function (n) {
      return "<li>" + r(n) + "</li>";
    }).join(""),
      a = e && e.st === 3 ? ze() : "";
    return !t && !a
      ? ""
      : '<div class="fr-box" style="border-left:4px solid #f59e0b;background:#fffbeb"><h3>💡 '
        + r([
          "お客様の暮らし方から、ひとつ上のクラスもおすすめです",
          "Your lifestyle suggests considering one class up",
          "根据您的生活方式，也建议考虑高一档"
        ])
        + "</h3>"
        + (t ? '<ul class="fr-ul">' + t + "</ul>" : "")
        + (a ? '<p class="fr-p" style="margin:6px 0 0">' + a + "</p>" : "")
        + "</div>";
  }
  function Ie(e, t) {
    var a = c.a[e.id];
    c.a[e.id] = t;
    var n = S().top[0];
    return a == null ? delete c.a[e.id] : c.a[e.id] = a, n;
  }
  function je() {
    var e = S().top[0],
      t = 0,
      a = j.filter(function (i) {
        return V(i) && c.a[i.id] != null;
      });
    if (!e)
      return "";
    var n = a.map(function (i, o) {
      var d = c.a[i.id],
        s = 0,
        p = i.o.map(function (h, m) {
          return { l: r(h[0]), v: m };
        }).filter(function (h) {
          return h.v !== d;
        }).map(function (h) {
          var m = Ie(i, h.v), f = m.p !== e.p;
          return f && (s++, t++),
            '<span style="display:inline-block;margin:3px 4px 0 0;padding:4px 8px;border-radius:8px;'
              + 'font-size:.76rem;line-height:1.45;'
              + (
                f
                  ? "background:#fffbeb;border:1px dashed #f59e0b"
                  : "background:#f8fafc;border:1px dashed #cbd5e1;color:#64748b"
              )
              + '">'
              + h.l
              + "<br><b>"
              + (
                f
                  ? r(["→ 1位は ", "→ #1 would be ", "→ 第1名将是 "]) + m.p.name
                  : r(["→ 1位は変わらず", "→ #1 unchanged", "→ 第1名不变"])
              )
              + "</b></span>";
        }).join("");
      return '<div style="position:relative;margin:0 0 12px 12px;padding:0 0 0 16px;border-left:3px solid '
        + '#93c5fd"><span style="position:absolute;left:-10px;top:1px;width:17px;height:17px;'
        + 'border-radius:50%;background:#2563eb;color:#fff;font-size:.64rem;text-align:center;'
        + 'line-height:17px">'
        + (o + 1)
        + '</span><div style="font-size:.78rem;color:#64748b">'
        + r(i.t).replace(/[？?]$/, "")
        + '</div><div style="display:inline-block;margin:3px 0;padding:5px 10px;border-radius:8px;'
        + 'background:#dbeafe;border:1.5px solid #2563eb;font-weight:700;font-size:.86rem">✓ '
        + A(i.id)
        + "</div>"
        + (
          p
            ? "<details"
              + (s ? " open" : "")
              + '><summary style="font-size:.78rem;color:'
              + (s ? "#b45309" : "#64748b")
              + ';cursor:pointer">'
              + u([
                "もし別の選択をしていたら（1位が変わる選択肢：{0}件）",
                "If you had chosen differently (options that change #1: {0})",
                "若选了其他选项（会改变第1名的选项：{0}个）"
              ], s)
              + "</summary>"
              + p
              + "</details>"
            : ""
        )
        + "</div>";
    }).join("");
    return '<div class="fr-box"><h3>🧭 '
      + r(["あなたの選択の経路図", "Your path through the questions", "您的选择路径图"])
      + '</h3><p class="fr-p" style="font-size:.82rem">'
      + u([
        "青が選んだ回答です。点線の薄い枠は「ここで別の選択をしていたら」の場合の1位で、<b>黄色は1位の機種が変わる分岐点</b>です（現在の1位：{0}／分岐点 {1}か所の選択肢）。",
        "Blue is what you chose. Dashed boxes show the top pick if you had chosen differently; "
          + "<b>yellow marks choices that would change #1</b> (current #1: {0} / {1} such choices).",
        "蓝色为您的选择。虚线框为“若选了其他选项”时的第1名；<b>黄色表示会改变第1名的分岐点</b>（当前第1名：{0}／共{1}个）。"
      ], e.p.name, t)
      + "</p>"
      + n
      + '<div style="margin-left:12px;padding:6px 10px;border-radius:8px;background:#dcfce7;'
      + 'border:1.5px solid #16a34a;font-weight:700;font-size:.88rem">🏁 '
      + e.p.name
      + "（"
      + e.p.maker
      + "）</div></div>";
  }
  var _ = function () {
    return c.a.sit === 0;
  };
  function ie() {
    return _() ? [0, 1, "rl", 4, 3, "final"] : [0, 2, "r1", 1, "rl", 3, "final"];
  }
  function oe(e) {
    var t = ie(), a = t.indexOf(e);
    for (a = a + 1; a < t.length; a++) {
      var n = t[a];
      if (typeof n != "number")
        return n;
      if (N(n).length)
        return { st: n, i: 0 };
    }
    return "final";
  }
  function J(e) {
    var t = ie(),
      a = typeof e == "object" ? e.st : e,
      n = Math.max(0, t.indexOf(a)),
      i = typeof e == "object" ? e.i / Math.max(1, N(e.st).length) : 0;
    return 6 + 88 * (n + i) / t.length;
  }
  function Se() {
    if (!_())
      return "";
    var e = S().top.slice(0, 3);
    if (!e.length)
      return "";
    var t = function (i) {
      return Math.max.apply(
        0,
        e.map(function (o) {
          return i(o.p);
        })
      );
    },
      a = e.some(function (i) {
        return i.p.type === "drum";
      }),
      n = [
        [
          ["防水パンの内寸（幅）", "Waterproof pan inner width", "防水盘内部宽度"],
          t(function (i) {
            return i.pan;
          })
        ],
        [
          [
            "置き場の横幅（ホース・放熱の余裕込み）",
            "Installation width (with hose / ventilation room)",
            "安装宽度（含软管·散热余量）"
          ],
          t(function (i) {
            return i.w;
          })
            + 100
        ],
        [
          ["奥行（壁から手前の扉・通路まで）", "Depth (wall to door / aisle)", "进深（墙到前方门·通道）"],
          t(function (i) {
            return i.d;
          })
            + 100
        ],
        [
          ["蛇口・棚の床からの高さ", "Faucet / shelf height from floor", "水龙头·架子离地高度"],
          t(function (i) {
            return i.h;
          })
            + 20
        ],
        [
          [
            "搬入経路で一番狭い幅（玄関・廊下・洗面所の入口）",
            "Narrowest delivery path (entrance, hall, washroom door)",
            "搬入路线最窄处（玄关·走廊·洗手间门）"
          ],
          Math.max.apply(
            0,
            e.map(function (i) {
              return Math.min(i.p.w, i.p.d);
            })
          )
            + 30
        ]
      ].map(function (i) {
        return "<tr><td>"
          + r(i[0])
          + '</td><td style="white-space:nowrap"><b>'
          + u(["{0}mm以上", "≥ {0} mm", "{0}mm以上"], i[1])
          + "</b></td></tr>";
      }).join("");
    return '<div class="fr-box"><h3>🏠 '
      + r(["新居の間取りで確認したいこと", "What to check in your new home’s layout", "新居布局中需要确认的事项"])
      + '</h3><p class="fr-p" style="font-size:.82rem">'
      + u(
        [
          "上位3機種（{0}）がすべて置ける目安の寸法です。設計担当の方・工務店にそのままお伝えください。",
          "Dimensions that let all of the top 3 models ({0}) fit. Please pass these to your designer or builder.",
          "可放下前3名机型（{0}）的参考尺寸。请直接告知设计师·施工方。"
        ],
        e.map(function (i) {
          return i.p.name;
        }).join(" / ")
      )
      + '</p><table style="width:100%;font-size:.84rem;border-collapse:collapse">'
      + n
      + '</table><ul class="fr-ul" style="margin-top:8px"><li>'
      + r([
        "電源（アース付き）・給水栓・排水口は、洗濯機のすぐ近くに",
        "Place an earthed outlet, tap and drain right next to the washer",
        "带接地的插座·水龙头·排水口请设在洗衣机附近"
      ])
      + "</li>"
      + (
        a
          ? "<li>"
            + r([
              "ドラム式を想定するなら、排水口は本体の真下を避け、扉が開く側に壁や棚を置かない",
              "For a drum, keep the drain out from directly under the unit and keep the door side free of walls or shelves",
              "若考虑滚筒，排水口避开机身正下方，开门一侧不要有墙或架子"
            ])
            + "</li>"
          : ""
      )
      + "</ul></div>";
  }
  function Be(e) {
    var t = function (i) {
      var o = A(i);
      return o === "—" ? "" : o;
    },
      a,
      n;
    return e === "capfit"
      ? (
        n = t("hh"),
          a = n
            ? [
              "{0}で洗濯する量から、容量の合い具合が効くため",
              "For laundry volume as {0}, getting the capacity right matters",
              "按{0}的洗衣量，容量是否合适很关键"
            ]
            : ["容量の合い具合が効くため", "Getting the capacity right matters", "容量是否合适很关键"]
      )
      : e === "dry"
        ? (
          n = t("dry") !== "" ? t("dry") : t("dry1"),
            a = n
              ? [
                "乾燥の使い方（{0}）から、乾燥性能が効くため",
                "From how you use drying ({0}), drying performance matters",
                "从烘干使用方式（{0}）来看，烘干性能很关键"
              ]
              : ["乾燥性能が効くため", "Drying performance matters", "烘干性能很关键"]
        )
        : e === "clean"
          ? (
            n = t("soil"),
              a = n
                ? [
                  "汚れの悩み（{0}）から、洗浄力が効くため",
                  "From your laundry worries ({0}), cleaning power matters",
                  "从衣物污渍烦恼（{0}）来看，洗净力很关键"
                ]
                : ["洗浄力が効くため", "Cleaning power matters", "洗净力很关键"]
          )
          : e === "auto"
            ? (
              n = t("aut"),
                a = n
                  ? [
                    "手間を減らしたいご希望（{0}）から、自動投入などの機能が効くため",
                    "Since you want less effort ({0}), features like auto-dispensing matter",
                    "因希望省事（{0}），自动投放等功能很关键"
                  ]
                  : ["手間を減らす機能が効くため", "Effort-saving features matter", "省事功能很关键"]
            )
            : e === "eco"
              ? (
                n = t("tm"),
                  a = n
                    ? [
                      "洗濯のタイミング（{0}）から、静音・省エネが効くため",
                      "From when you wash ({0}), quietness and efficiency matter",
                      "从洗衣时间（{0}）来看，静音节能很关键"
                    ]
                    : ["静音・省エネが効くため", "Quietness and efficiency matter", "静音节能很关键"]
              )
              : a = ["置き場に収まるコンパクトさが効くため", "Compactness to fit the spot matters", "能放进摆放位置的紧凑性很关键"],
      u(a, n || "");
  }
  function He() {
    var e = S(), t = e.top[0];
    if (!t)
      return "";
    var a = e.top.map(function (o) {
      return o.p.id;
    }),
      n = C(e.all).filter(function (o) {
        return a.indexOf(o.p.id) < 0
          && o.p.price <= t.p.price * .85
          && t.p.price - o.p.price >= 1e4
          && o.p.wCap >= t.p.wCap - 2;
      }).sort(function (o, d) {
        return (d.p.maker === "AQUA" ? 1 : 0) - (o.p.maker === "AQUA" ? 1 : 0) || d.sc - o.sc;
      }).slice(0, 2);
    if (!n.length)
      return "";
    var i = n.map(function (o) {
      var d = o.p,
        s = W.filter(function (p) {
          return p[0] !== "capfit" && t.a[p[0]] - o.a[p[0]] >= 1;
        }).map(function (p) {
          return '<span class="fr-chip ng">'
            + p[2]
            + u(["{0}は控えめ", "{0} is lighter", "{0}较弱"], T(p))
            + "</span>";
        }).join("");
      return '<div class="fr-win"><b>'
        + u(["{0}おさえて「{1}」（{2}）", "Save {0} with “{1}” ({2})", "省{0}：“{1}”（{2}）"], w(
          t.p.price - d.price
        ), d.name, d.maker)
        + "</b><br>"
        + u([
          "{0}｜洗濯{1}kg／乾燥：{2}｜価格 {3}",
          "{0} | Wash {1} kg / Drying: {2} | price {3}",
          "{0}｜洗涤{1}kg／烘干：{2}｜价格 {3}"
        ], z(o.t), d.wCap, r(U[d.dryType]), w(d.price))
        + '<div style="margin-top:4px">'
        + (
          s
            || '<span class="fr-chip ok">'
              + r(["主な機能はほぼ同等", "Main features about the same", "主要功能大致相同"])
              + "</span>"
        )
        + "</div></div>";
    }).join("");
    return '<div class="fr-box"><h3>'
      + r(["💴 もう少し費用を抑えたい場合は", "💴 If you want to spend a little less", "💴 如果想再省一些预算"])
      + '</h3><p class="fr-p">'
      + u([
        "1位「{0}」より価格をおさえたモデルもあります。AQUAなど、費用を抑えたい方向けのモデルが中心です。その分、機能が控えめな点もあわせてご確認ください。",
        "There are lower-priced models than #1 “{0}”, mainly from makers such as AQUA that suit "
          + "cost-conscious buyers. Please also check where they are lighter on features.",
        "也有比第1名“{0}”更便宜的机型，主要来自AQUA等适合控制预算的品牌。请同时确认其功能较弱之处。"
      ], t.p.name)
      + "</p>"
      + i
      + "</div>";
  }
  function K(e, t) {
    return t.slice().sort(function (a, n) {
      return n.a[e] - a.a[e] || n.sc - a.sc;
    })[0];
  }
  function S() {
    for (var e = F(B()), t = e.filter(function (n) {
      return !n.h.ng.length;
    }).slice(0, 3), a = 0; t.length < 3 && a < e.length; a++)
      t.indexOf(e[a]) < 0 && t.push(e[a]);
    return { all: e, top: t };
  }
  function Ne() {
    var e = j.filter(function (l) {
      return l.id === "budget";
    })[0],
      t = c.a.budget,
      a = c.give || {},
      n = w,
      i = W.filter(function (l) {
        return l[0] !== "price";
      }),
      o = e.o.map(function (l, v) {
        return '<button class="fr-opt'
          + (t === v ? " sel" : "")
          + '" data-a="bud" data-i="'
          + v
          + '"><span class="ck">'
          + (t === v ? "✓" : "")
          + "</span>"
          + r(l[0])
          + "</button>";
      }).join(""),
      d = '<div class="fr-box" id="bud-box"><h3>💴 '
        + r(["ご予算はいかがですか？", "What is your budget?", "您的预算是多少？"])
        + '</h3><p class="fr-p" style="font-size:.82rem">'
        + r([
          "ここまでのご希望だけで選んだ機種です。ご予算を選ぶと、予算内でのおすすめと「何を諦めることになるか」をお見せします。",
          "These picks are based on your needs only. Choose a budget to see what fits and what you would give up.",
          "以上机型仅根据您的需求选出。选择预算后，将显示预算内的推荐及“需要舍弃什么”。"
        ])
        + "</p>"
        + o,
      s = g("budget");
    if (t != null && s != null && s < 1e9) {
      var p = (function () {
        var l = c.a.budget;
        delete c.a.budget;
        var v = S().top[0];
        return c.a.budget = l, v;
      })(),
        h = S().top[0],
        m = h.p.price > s;
      if (p.p === h.p)
        d += '<div class="fr-win" style="margin-top:10px">✅ '
          + r([
            "予算内でも第1候補は変わりません。諦めるものはありません：",
            "Your top pick stays the same within budget. Nothing to give up: ",
            "预算内第1名不变，无需舍弃："
          ])
          + "<b>"
          + h.p.name
          + "</b>（"
          + n(h.p.price)
          + "）</div>";
      else {
        var f = i.filter(function (l) {
          return p.a[l[0]] - h.a[l[0]] >= .8;
        }).map(function (l) {
          return l[2] + r(l[1]);
        });
        d += '<div class="fr-win" style="margin-top:10px"><b>'
          + r(["ご予算内の第1候補：", "Top pick within budget: ", "预算内第1名："])
          + h.p.name
          + "</b>（"
          + h.p.maker
          + " / "
          + n(h.p.price)
          + "）<br>"
          + r([
            "予算を考えない第1候補は <b>%a</b>（%p）でした。",
            "Without a budget the top pick was <b>%a</b> (%p).",
            "不考虑预算时的第1名是<b>%a</b>（%p）。"
          ]).replace("%a", p.p.name).replace("%p", n(p.p.price))
          + "<br>"
          + (
            m
              ? r([
                "⚠ 予算内に収まる機種がありません。最も近い機種を表示しています。",
                "⚠ No model fits the budget; showing the closest.",
                "⚠ 没有符合预算的机型，显示最接近的。"
              ])
                + "<br>"
              : ""
          )
          + r(["予算内にすると、次を諦めることになります：", "Staying in budget means giving up:", "控制在预算内，需要舍弃："])
          + " "
          + (f.length ? f.join("・") : r(["大きな差はありません", "no big difference", "差别不大"]))
          + "</div>",
          d += '<p class="fr-p" style="font-size:.82rem;margin-top:8px">'
            + r([
              "あと %d 足すと <b>%a</b> に届きます。",
              "Add %d more to reach <b>%a</b>.",
              "再加%d即可选择<b>%a</b>。"
            ]).replace("%d", n(Math.max(0, p.p.price - s))).replace("%a", p.p.name)
            + "</p>";
      }
      d += '<h3 style="font-size:.9rem;margin-top:12px">'
        + r(["何なら諦めてもよいですか？（タップで選択）", "What could you give up? (tap to select)", "哪些可以舍弃？（点按选择）"])
        + '</h3><div class="fr-ax">'
        + i.map(function (l) {
          return '<button data-a="give" data-k="'
            + l[0]
            + '" class="'
            + (a[l[0]] ? "on" : "")
            + '">'
            + l[2]
            + " "
            + r(l[1])
            + "</button>";
        }).join("")
        + '</div><p class="fr-p" style="font-size:.78rem;margin-top:6px">'
        + r([
          "選んだ項目の重みを下げて、予算内であらためて選び直します。",
          "The chosen items count less, and the picks within budget are re-ranked.",
          "会降低所选项的权重，并在预算内重新排序。"
        ])
        + "</p>";
    }
    return d + "</div>";
  }
  function Le() {
    var e = S(),
      t = e.top,
      a = c.ax || g("pri") || "capfit",
      n = W.filter(function (l) {
        return l[0] === a;
      })[0],
      i = K(a, t),
      o = K(a, C(e.all)),
      d = W.map(function (l) {
        return '<button data-a="ax" data-k="'
          + l[0]
          + '" class="'
          + (l[0] === a ? "on" : "")
          + '">'
          + l[2]
          + " "
          + T(l)
          + "</button>";
      }).join(""),
      s = '<div class="fr-win"><b>'
        + u([
          "{0} 「{1}」を譲れないなら →{2}",
          "{0} If “{1}” is non-negotiable → {2}",
          "{0} 若“{1}”不可让步 →{2}"
        ], n[2], T(n), i.p.name)
        + "</b>"
        + r(["（", " (", "（"])
        + i.p.maker
        + " / "
        + w(i.p.price)
        + r(["）", ")", "）"])
        + "<br>"
        + ae(n)
        + r(["。", ". ", "。"])
        + (
          o && o !== i && o.a[a] > i.a[a]
            ? "<br>"
              + u([
                "さらに「{0}」に特化するなら <b>{1}</b>（{2}）も候補です。",
                "For an even stronger “{0}”, <b>{1}</b> ({2}) is also a candidate.",
                "若要更突出“{0}”，<b>{1}</b>（{2}）也是候选。"
              ], T(n), o.p.name, w(o.p.price))
            : r([
              "この3機種の中ではここが最も強い項目です。",
              "This is the strongest criterion among these 3 models.",
              "这是这3款中最强的项目。"
            ])
        )
        + "</div>",
      p = t.map(function (l, v) {
        var x = l.p,
          y = W.filter(function (b) {
            return K(b[0], t) === l && l.a[b[0]] >= 3.5;
          }).map(function (b) {
            return '<span class="fr-chip ok">'
              + b[2]
              + u(["{0}が3機種で最強", "Best of the 3 for {0}", "{0}为3款中最强"], T(b))
              + "</span>";
          }).join(""),
          P = W.map(function (b, X) {
            return '<div class="fr-row" style="margin-bottom:5px"><b style="width:9.4em;'
              + (b[0] === a ? "color:#d97706" : "")
              + '">'
              + b[2]
              + " "
              + T(b)
              + '</b><div class="fr-bar"><i style="width:'
              + l.a[b[0]] / 5 * 100
              + "%;--i:"
              + X
              + (b[0] === a ? ";background:linear-gradient(90deg,#f59e0b,#ef4444)" : "")
              + '"></i></div></div>';
          }).join(""),
          Q = l.h.ng.map(function (b) {
            return '<li class="n">' + u(["条件外：{0}", "Out of spec: {0}", "条件外：{0}"], b[1]) + "</li>";
          }).concat(
            l.h.wn.map(function (b) {
              return '<li class="w">' + b + "</li>";
            })
          ).concat(
            l.over
              ? [
                '<li class="w">'
                  + u(["予算（{0}）を超えています", "Over your budget ({0})", "超出预算（{0}）"], A("budget"))
                  + "</li>"
              ]
              : []
          ).concat(
            l.h.ok.slice(0, 3).map(function (b) {
              return "<li>" + b + "</li>";
            })
          ).join("");
        return '<div class="fr-rec fr-up'
          + (l === i ? " hi" : " dim")
          + '" style="--i:'
          + v
          + '"><span class="fr-rank">'
          + u(["第{0}位", "#{0}", "第{0}名"], v + 1)
          + " ・ "
          + z(l.t)
          + '</span><div class="fr-head"><div class="fr-ring"><svg width="62" height="62" viewBox="0 0 '
          + '62 62"><circle class="bg" cx="31" cy="31" r="26"/><circle class="fg" cx="31" cy="31" r="26" '
          + 'stroke-dasharray="'
          + (l.sc * 1.634).toFixed(0)
          + ' 164"/></svg><b>'
          + l.sc
          + '</b></div><div><div class="fr-name">'
          + x.name
          + '</div><div style="font-size:.8rem;color:#64748b">'
          + x.maker
          + "・"
          + u(["洗濯{0}kg", "Wash {0} kg", "洗涤{0}kg"], x.wCap)
          + (x.dCap ? u(["／乾燥{0}kg", " / Dry {0} kg", "／烘干{0}kg"], x.dCap) : "")
          + '</div><div class="fr-price">'
          + w(x.price)
          + '</div></div></div><p class="fr-p" style="margin-bottom:6px">'
          + q(x.desc)
          + "</p>"
          + y
          + '<ul class="fr-ul">'
          + Q
          + "</ul>"
          + P
          + "</div>";
      }).join(""),
      h = [
        [
          ["価格", "Price", "价格"],
          function (l) {
            return w(l.price);
          }
        ],
        [
          ["洗濯/乾燥", "Wash / dry", "洗涤/烘干"],
          function (l) {
            return l.wCap + "kg/" + (l.dCap ? l.dCap + "kg" : "—");
          }
        ],
        [
          ["乾燥方式", "Drying method", "烘干方式"],
          function (l) {
            return r(U[l.dryType]);
          }
        ],
        [
          ["幅×奥×高(mm)", "W×D×H (mm)", "宽×深×高(mm)"],
          function (l) {
            return l.w + "×" + l.d + "×" + l.h;
          }
        ],
        [
          ["パン内寸目安", "Pan inner size guide", "防水盘内部尺寸参考"],
          function (l) {
            return l.pan + "mm";
          }
        ],
        [
          ["タイプ", "Type", "类型"],
          function (l) {
            return l.type === "drum"
              ? r(["ドラム(左開き)", "Drum (left-hinged)", "滚筒（左开）"])
              : r(["縦型", "Top-loader", "波轮"]);
          }
        ],
        [
          ["自動投入", "Auto-dispensing", "自动投放"],
          function (l) {
            return l.autoDisp === "Yes" ? r(["あり", "Yes", "有"]) : r(["なし", "No", "无"]);
          }
        ]
      ],
      m = '<table class="fr-spec"><tr><td></td>'
        + t.map(function (l) {
          return "<td><b>" + l.p.name + "</b></td>";
        }).join("")
        + "</tr>"
        + h.map(function (l) {
          return "<tr><td>"
            + r(l[0])
            + "</td>"
            + t.map(function (v) {
              return "<td>" + l[1](v.p) + "</td>";
            }).join("")
            + "</tr>";
        }).join("")
        + "</table>",
      f = se.map(function (l, v) {
        return '<div style="font-size:.86rem;margin-bottom:6px"><b>'
          + q(l.name)
          + "</b>"
          + r(["（", " (", "（"])
          + w(+l.price.replace(/\D/g, ""))
          + r(["）", ")", "）"])
          + (
            v === 1 && g("drain") === "U"
              ? ' <span class="fr-chip w">'
                + r([
                  "排水口が真下の方におすすめ",
                  "Recommended if the drain is directly underneath",
                  "推荐排水口在正下方的情况"
                ])
                + "</span>"
              : ""
          )
          + '<br><span style="color:#64748b">'
          + q(l.desc)
          + "</span></div>";
      }).join("");
    return '<span class="fr-tag">'
      + r(["最終結果", "Final result", "最终结果"])
      + '</span><h1 class="fr-h1">'
      + r(["あなたへのおすすめ<em>3機種</em>", "Your recommended <em>3 models</em>", "为您推荐的<em>3款</em>"])
      + '</h1><p class="fr-p">'
      + r([
        "「譲れないポイント」を切り替えると、3機種のどれが最も強いかが変わります。",
        "Switch your non-negotiable point to see which of the 3 is strongest.",
        "切换“不可让步的点”，可查看3款中哪款最强。"
      ])
      + '</p><div class="fr-ax">'
      + d
      + "</div>"
      + s
      + p
      + Ne()
      + '<div class="fr-box"><h3>'
      + r(["3機種の比較表", "Comparison of the 3 models", "3款对比表"])
      + '</h3><div style="overflow-x:auto">'
      + m
      + "</div></div>"
      + ve()
      + He()
      + '<div class="fr-box"><h3>'
      + r(["一緒に選ばれている便利アイテム", "Handy items often chosen together", "常一起选购的实用配件"])
      + "</h3>"
      + f
      + "</div>"
      + Se()
      + je()
      + ke()
      + '<button class="fr-btn k" data-a="staff">'
      + r([
        "📸 スタッフに見せる（最終商談シート）",
        "📸 Show to staff (final consultation sheet)",
        "📸 出示给店员（最终洽谈单）"
      ])
      + '</button><button class="fr-btn s" data-a="back">'
      + r(["← 質問に戻る", "← Back to questions", "← 返回问题"])
      + '</button><button class="fr-btn s" data-a="restart">'
      + r(["最初からやり直す", "Start over", "重新开始"])
      + '</button><button class="fr-btn s" data-a="close">'
      + r(["一覧に戻る", "Back to list", "返回列表"])
      + "</button>";
  }
  function Pe() {
    var e = S(),
      t = c.a.pri != null,
      a = j.map(function (i) {
        return c.a[i.id] == null
          ? ""
          : "<tr><td>" + r(i.t).replace(/[？?]$/, "") + "</td><td>" + A(i.id) + "</td></tr>";
      }).join(""),
      n = t
        ? e.top.map(function (i, o) {
          return '<div style="margin-bottom:6px;font-size:.88rem"><b>'
            + u(["第{0}位", "#{0}", "第{0}名"], o + 1)
            + " "
            + i.p.name
            + "</b>（"
            + i.p.maker
            + "）"
            + w(i.p.price)
            + "<br>"
            + u([
              "{0}×{1}×{2}mm ／ パン内寸目安{3}mm ／ 適合度{4}",
              "{0}×{1}×{2} mm / pan inner size guide {3} mm / match {4}",
              "{0}×{1}×{2}mm ／ 防水盘内部尺寸参考{3}mm ／ 匹配度{4}"
            ], i.p.w, i.p.d, i.p.h, i.p.pan, i.sc)
            + (i.h.wn.length ? '<br><span style="color:#b45309">⚠ ' + i.h.wn[0] + "</span>" : "")
            + "</div>";
        }).join("")
        : "";
    return '<div class="fr-ss"><div style="display:flex;justify-content:space-between;border-bottom:2px '
      + 'solid #111827;padding-bottom:6px;margin-bottom:8px"><b style="background:#111827;'
      + 'color:#fbbf24;padding:2px 8px;border-radius:4px;font-size:.86rem">'
      + r(["スタッフ確認用シート（洗濯機）", "Staff confirmation sheet (Washing machine)", "店员确认单（洗衣机）"])
      + '</b><span style="font-size:.8rem;color:#6b7280">'
      + r(
        t ? ["最終商談カード", "Final consultation card", "最终洽谈卡"] : ["条件メモ", "Requirements memo", "条件备忘"]
      )
      + '</span></div><p style="font-size:.8rem;color:#d90429;font-weight:700;margin-bottom:6px">'
      + r([
        "※この画面をスクリーンショットしてスタッフにお見せください",
        "Please screenshot this screen and show it to our staff",
        "※请截屏并出示给店员"
      ])
      + "</p><table>"
      + a
      + "</table>"
      + (
        n
          ? '<b style="font-size:.88rem">'
            + r(["【最終提案TOP3】", "[Final TOP 3 proposal]", "【最终推荐TOP3】"])
            + "</b>"
            + n
          : ""
      )
      + '</div><button class="fr-btn s" data-a="back">'
      + r(["← 戻る", "← Back", "← 返回"])
      + "</button>";
  }
  function Fe(e) {
    if (!c.lock) {
      c.lock = 1;
      var t = N(c.v.st)[c.v.i];
      c.a[t.id] = e,
        he(),
        k.querySelectorAll(".fr-opt").forEach(function (a, n) {
          a.classList.toggle("sel", n === e), a.firstChild.textContent = n === e ? "✓" : "";
        }),
        setTimeout(function () {
          var a = N(c.v.st);
          c.lock = 0, M(c.v.i + 1 < a.length ? { st: c.v.st, i: c.v.i + 1 } : oe(c.v.st));
        }, 320);
    }
  }
  function Z() {
    c = { a: {}, v: "intro", hist: [], ax: null },
      L(),
      document.documentElement.style.overflow = "hidden";
    try {
      history.pushState({ wm: 1 }, "");
    } catch {}
  }
  function R(e) {
    if (k.classList.remove("on"), document.documentElement.style.overflow = "", !e)
      try {
        history.state && history.state.wm && history.back();
      } catch {}
  }
  k.addEventListener("click", function (e) {
    var t = e.target.closest("[data-a]");
    if (!(!t || t.tagName === "SELECT")) {
      var a = t.dataset.a;
      if (a === "close")
        R();
      else if (a === "start")
        M({ st: 0, i: 0 });
      else if (a === "type")
        k.querySelectorAll(".fr-card").forEach(function (o) {
          o.classList.toggle("sel", o === t && !t.classList.contains("sel"));
        });
      else if (a === "pick")
        Fe(+t.dataset.i);
      else if (a === "next")
        M(oe(c.v));
      else if (a === "back") {
        var n = c.hist.pop();
        n != null ? M(n, !0) : R();
      } else if (a === "staff")
        M("staff");
      else if (a === "bud") {
        const o = +t.dataset.i, d = k.scrollTop;
        c.a.budget === o ? delete c.a.budget : c.a.budget = o, c.back = !1, L(), k.scrollTop = d;
      } else if (a === "give") {
        c.give = c.give || {}, c.give[t.dataset.k] = !c.give[t.dataset.k];
        const o = k.scrollTop;
        c.back = !1, L(), k.scrollTop = o;
      } else if (a === "ax") {
        c.ax = t.dataset.k;
        var i = k.scrollTop;
        c.back = !1, L(), k.scrollTop = i;
      } else
        a === "restart" && Z();
    }
  }),
    k.addEventListener("change", function (e) {
      if (e.target.dataset.a === "lang") {
        var t = document.getElementById("lang-switcher");
        t && (t.value = e.target.value, t.dispatchEvent(new Event("change")));
        var a = k.scrollTop;
        c.back = !1, L(), k.scrollTop = a;
      }
    }),
    window.addEventListener("popstate", function () {
      k.classList.contains("on") && R(!0);
    }),
    window.WasherApp = { open: Z, close: R };
  var $ = document.getElementById("modal-link-btn");
  $
    && $.addEventListener("click", function (e) {
      $.dataset.app === "washer"
        && (e.preventDefault(), document.getElementById("modal").classList.remove("active"), Z());
    });
  try { window.NJ_HEAR && window.NJ_HEAR.hook([j], {"schema": "std", "root": "wm-app", "lock": ["budget"]}); } catch (e) { console.error(e); }
})();
</script>
<style id="app-motion-css">
/* =====================================================================
   PC相談：スマホ・iPad向けの調整 ＋ Apple風の動き
   ===================================================================== */
#wm-app{--ap:cubic-bezier(.32,.72,0,1);--aps:cubic-bezier(.25,1,.5,1)}

/* ---- 画面の出し入れ（iOSのシート／プッシュ） ---- */
#wm-app{transition:opacity .4s var(--ap),transform .6s var(--ap),visibility 0s .6s}
#wm-app.on{transition:opacity .4s var(--ap),transform .6s var(--ap)}
#wm-app .fr-in{animation:apPush .55s var(--ap) both}
#wm-app.fr-back .fr-in{animation-name:apPop}
@keyframes apPush{from{opacity:0;transform:translate3d(32px,0,0)}}
@keyframes apPop{from{opacity:0;transform:translate3d(-32px,0,0)}}
#wm-app .fr-up{animation:apRise .7s var(--ap) both;animation-delay:calc(var(--i,0)*45ms)}
#wm-app .fr-card.sel .fr-more{animation:apRise .5s var(--ap) both}
@keyframes apRise{from{opacity:0;transform:translate3d(0,14px,0) scale(.985);filter:blur(4px)}}

/* ---- 半透明のナビゲーションバー（スクロールすると細い境界線） ---- */
#wm-app .fr-top{background:rgba(255,255,255,.72);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);box-shadow:none;border-bottom:.5px solid transparent;transition:border-color .3s,background .3s}
#wm-app.scrolled .fr-top{border-bottom-color:rgba(15,23,42,.14);background:rgba(255,255,255,.82)}
#wm-app .fr-prog div{transition:width .8s var(--ap)}

/* ---- 押したときの沈み込み・選んだときの反応 ---- */
#wm-app .fr-opt,#wm-app .fr-card,#wm-app .fr-btn,#wm-app .fr-x,#wm-app .iv-entry,#wm-app .ht-heart{transition:transform .5s var(--ap),background-color .25s,border-color .25s,box-shadow .35s var(--ap)}
#wm-app .fr-opt:active,#wm-app .fr-card:active,#wm-app .fr-btn:active,#wm-app .fr-x:active,#wm-app .iv-entry:active{transform:scale(.97);transition-duration:.12s}
#wm-app .fr-opt.sel{animation:apSel .5s var(--ap)}
@keyframes apSel{0%{transform:scale(.97)}}
#wm-app .fr-opt .ck{transition:transform .45s var(--aps),background .2s,border-color .2s}
#wm-app .fr-opt.sel .ck{transform:scale(1.08)}
@media (hover:hover){#wm-app .fr-card:hover{transform:translateY(-2px);box-shadow:0 12px 28px #2563eb1f}}
@media (hover:none){#wm-app .fr-card:hover{transform:none;box-shadow:0 2px 8px #0f172a0d}}

/* ---- ヒアリング（イラストなし） ---- */
#wm-app .pc-qi{display:none!important}
#wm-app .fr-q{padding:20px 18px 18px;border:1px solid #e8edf5;box-shadow:0 10px 30px #0f172a12}
#wm-app .fr-q .no{display:inline-flex;align-items:center;gap:8px;font-size:.78rem;padding:5px 11px;border-radius:999px;background:linear-gradient(135deg,#eff6ff,#f5f3ff);color:#4338ca;letter-spacing:.08em}
#wm-app .fr-q h2{font-size:clamp(1.2rem,4.8vw,1.55rem);line-height:1.45;margin:12px 0 10px;word-break:auto-phrase;text-wrap:pretty;letter-spacing:.01em}
#wm-app .fr-hint{word-break:auto-phrase;border-left:0;border-radius:12px;background:#f1f5ff;padding:10px 12px}
#wm-app .fr-opt{border-radius:14px;word-break:auto-phrase}

/* ---- 「いまの見立て」：タイプとメーカーの並びをそろえる ---- */
#wm-app .pc-xe{grid-template-columns:repeat(7,minmax(0,1fr));gap:6px}
#wm-app .pc-xe>div,#wm-app .pc-xm>div{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-width:0;padding:7px 3px 6px!important;border-radius:12px!important;transition:background .3s,border-color .3s,opacity .3s}
#wm-app .pc-xe>div>div:last-child,#wm-app .pc-xm>div>div:last-child{font-size:.62rem!important;line-height:1.35!important;margin-top:4px!important;max-width:100%;text-align:center;word-break:auto-phrase}
#wm-app .pc-xe .pc-mini{height:30px;display:flex;align-items:center}
#wm-app .pc-xm{display:flex;flex-wrap:wrap;justify-content:center;gap:6px}
#wm-app .pc-xm>div{flex:1 1 0;min-width:62px;max-width:112px}
#wm-app .pc-mk{width:100%;max-width:56px;height:auto}
@media (max-width:600px){#wm-app .pc-xe{grid-template-columns:repeat(4,minmax(0,1fr))}}

/* ---- 結果画面「いま合うメーカー」：アイコンの列と文字の頭をそろえる ---- */
#wm-app .pc-mkrow{display:grid;grid-template-columns:64px minmax(0,1fr);column-gap:14px;align-items:center;padding:12px 2px;border-top:1px solid #eef2f7;text-align:left}
#wm-app .fr-box h3+.pc-mkrow,#wm-app .pc-mkrow:first-of-type{border-top:0;padding-top:4px}
#wm-app .pc-mkrow .pc-mk{margin:0;width:64px;max-width:64px;justify-self:center}
#wm-app .pc-mkrow>div{font-size:.86rem!important;line-height:1.6!important;min-width:0;word-break:auto-phrase}
#wm-app .pc-mkrow>div b:first-child{font-size:.95rem}
#wm-app .pc-mkrow>div span{display:block;margin-top:2px;font-size:.8rem}
@media (min-width:700px){#wm-app .pc-mkrow{grid-template-columns:72px minmax(0,1fr);padding:14px 6px}}

/* ---- 最初の画面：タイプのカード（7つ目が1枚だけ浮かないように） ---- */
#wm-app .fr-types{align-items:stretch}
#wm-app .fr-types>.fr-card{display:flex;flex-direction:column}
#wm-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel){grid-column:1/-1;display:grid;grid-template-columns:auto 1fr;column-gap:16px;align-items:center}
#wm-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>.pc-svg{grid-row:1/span 2;margin:0}
#wm-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>h3{align-self:end;margin:0 0 2px}
#wm-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>small{align-self:start}

/* ---- スマホ：上のバーを2段に（1段目：戻る・言語・該当数／2段目：タイトル・在庫管理） ---- */
@media (max-width:600px){
  #wm-app .fr-top{flex-wrap:wrap;row-gap:6px}
  #wm-app .fr-top>b{order:5;flex:1 1 auto;min-width:0;font-size:.95rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  #wm-app .fr-top .iv-entry{order:6}
  #wm-app .fr-q{padding:18px 14px 14px;border-radius:18px}
  #wm-app .fr-wrap{padding-left:12px;padding-right:12px}
}
/* ---- iPad・PC：中央に寄せ、選択肢は2列 ---- */
@media (min-width:700px){
  #wm-app .fr-wrap{max-width:900px;margin:0 auto}
  #wm-app .fr-q{display:grid;grid-template-columns:1fr 1fr;column-gap:12px;align-items:stretch;padding:26px 26px 22px;border-radius:24px}
  #wm-app .fr-q>*{grid-column:1/-1}
  #wm-app .fr-q>.fr-opt{grid-column:auto;margin:0 0 12px;height:calc(100% - 12px)}
  #wm-app .fr-q .no{justify-self:start}
  #wm-app .fr-types{grid-template-columns:1fr 1fr}
}
@media (prefers-reduced-motion:reduce){#wm-app *,#wm-app{animation-duration:.01ms!important;transition-duration:.01ms!important}}

#wm-app [class$="-qi"],#wm-app .tb-qi{display:none!important}
</style>
<script id="app-motion-js">
/* PC相談：スクロールでナビゲーションバーに境界線（Apple風）／iOSで押した感触を出す */
(function () {
  var r = document.getElementById("wm-app");
  if (!r) return;
  var on = false;
  r.addEventListener("scroll", function () {
    var s = r.scrollTop > 4;
    if (s !== on || !r.classList.contains("scrolled") === s) { on = s; r.classList.toggle("scrolled", s); }
  }, { passive: true });
  document.addEventListener("touchstart", function () {}, { passive: true });   // iOSで :active を効かせる
})();
</script>
<script>window.NJ_INV && window.NJ_INV.injectLinks && window.NJ_INV.injectLinks("wm-app");</script>
</body>
</html>