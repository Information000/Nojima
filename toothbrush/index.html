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
<title>電動歯ブラシの相談 | イオンモール成田店</title>
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
<body data-lang="ja" data-dept="home" data-product="toothbrush">
<!-- ======================================================================
     ▼▼▼ 在庫データ（電動歯ブラシ）▼▼▼
     ・1商品 = items の中の { } ひとつ。型番・価格・スペック・大きさ・リンクなど
     ・status: "active"=販売中 / "ended"=販売終了（相談に出なくなる）
     ・links: type は "official"(メーカー公式HP) / "manual"(取扱説明書) / "ref"(参考リンク)
     ・ふだんは相談画面の上のバーにある「🔐 在庫管理」から編集できます（暗証番号は adminPin）
     ====================================================================== -->
<script type="application/json" id="inventory-data">
{
  "category": "toothbrush",
  "label": "電動歯ブラシ",
  "version": "2026-10-23",
  "adminPin": "staff2026",
  "groups": [
    {
      "id": "entry_budget_assist",
      "name": "低価格・手軽に電動お試し（数百円〜3,000円台）"
    },
    {
      "id": "sonic_pocket_doltz",
      "name": "歯周ポケット・歯ぐきにやさしい音波振動（パナソニック ドルツ）"
    },
    {
      "id": "round_plaque_oralb",
      "name": "圧倒的歯垢除去・丸型回転ブラシ（ブラウン Oral-B）"
    },
    {
      "id": "sonic_water_flow_philips",
      "name": "音波水流・広範囲ステインケア（フィリップス ソニッケアー）"
    },
    {
      "id": "premium_ai_smart",
      "name": "最高峰フラッグシップ・W音波＆AIガイド（iO10 / ドルツ最上位 / 9000）"
    },
    {
      "id": "water_flosser_interdental",
      "name": "歯間・歯周ポケット超音波水流洗浄（ジェットウォッシャー）"
    },
    {
      "id": "kids_children_care",
      "name": "子ども用・楽しく正しい歯磨き習慣（Oral-B キッズ）"
    }
  ],
  "tagOptions": {},
  "schema": {
    "root": "tb-app",
    "icon": "🪥",
    "map": {},
    "fields": [
      {
        "k": "type",
        "l": "方式"
      },
      {
        "k": "motion",
        "l": "動き（ストローク等）"
      },
      {
        "k": "modes",
        "l": "モード数"
      },
      {
        "k": "sensor",
        "l": "センサー"
      },
      {
        "k": "target",
        "l": "対象（大人・子ども など）"
      },
      {
        "k": "water",
        "l": "防水"
      }
    ],
    "listFields": [
      "type",
      "modes"
    ],
    "grades": [
      [
        "plaque",
        "歯垢除去力"
      ],
      [
        "gum",
        "歯ぐきへのやさしさ"
      ],
      [
        "sensor",
        "センサー"
      ],
      [
        "pocket",
        "ポケット・歯間"
      ],
      [
        "cost",
        "手頃さ"
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
        "FESTINO"
      ],
      [
        "OMRON"
      ],
      [
        "Oral-B"
      ],
      [
        "PHILIPS"
      ],
      [
        "Panasonic"
      ],
      [
        "maruman"
      ]
    ],
    "buckets": [
      [
        0,
        3000,
        "〜3千"
      ],
      [
        3000,
        8000,
        "3千〜8千"
      ],
      [
        8000,
        15000,
        "8千〜1.5万"
      ],
      [
        15000,
        30000,
        "1.5万〜3万"
      ],
      [
        30000,
        1000000000000,
        "3万〜"
      ]
    ]
  },
  "items": [
    {
      "id": "o1",
      "status": "active",
      "maker": "maruman",
      "name": "プロソニックコンパクト (DH310BL)",
      "model": "DH310BL",
      "price": 470,
      "groupId": "entry_budget_assist",
      "type": "音波式(乾電池)",
      "motion": "毎分約22,000ストローク",
      "modes": "1モード",
      "sensor": "なし",
      "target": "大人/携帯",
      "water": "生活防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "△",
        "gum": "◯",
        "sensor": "✕",
        "pocket": "◯",
        "cost": "◎"
      },
      "desc": {
        "ja": "400円台の驚異的価格！単4電池1本で動く超軽量・微細音波振動。手磨きアシストや外出用に最適",
        "en": "Unbelievable ~500 JPY price! AAA-battery ultra-light sonic vibration assisting manual brushing",
        "zh": "400多日元惊人超低价！单节7号电池驱动，超轻随身声波辅助手刷"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Amaruman-pro.com%20DH310BL",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Amaruman-pro.com%20DH310BL%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o2",
      "status": "active",
      "maker": "Oral-B",
      "name": "ブラックコントロール (DB400N)",
      "model": "DB400N",
      "price": 1640,
      "groupId": "entry_budget_assist",
      "type": "回転式(乾電池)",
      "motion": "丸型回転",
      "modes": "1モード",
      "sensor": "なし",
      "target": "大人/旅行",
      "water": "生活防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◯",
        "gum": "◯",
        "sensor": "✕",
        "pocket": "△",
        "cost": "◎"
      },
      "desc": {
        "ja": "乾電池式の丸型回転ブラシ。電源コード不要で1,000円台。旅行先や出張先でもしっかり歯垢を除去",
        "en": "Battery-powered oscillating round brush under 2k JPY; portable without charging cords",
        "zh": "千元日元档干电池式圆头旋转刷，出差旅行无需充电线，随时深度清洁"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20DB400N",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20DB400N%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o3",
      "status": "active",
      "maker": "Oral-B",
      "name": "すみずみクリーンEX",
      "model": "D1004132BKN",
      "price": 3126,
      "groupId": "entry_budget_assist",
      "type": "充電式回転式",
      "motion": "丸型回転",
      "modes": "1モード(クリーン)",
      "sensor": "なし",
      "target": "大人/入門",
      "water": "完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◎",
        "gum": "◯",
        "sensor": "✕",
        "pocket": "△",
        "cost": "◎"
      },
      "desc": {
        "ja": "3,000円台で手に入るブラウン回転式の世界的ベストセラー。歯を1本1本包み込んで手磨きの数倍の歯垢を除去",
        "en": "Bestselling 3k JPY rechargeable round-head brush tackling plaque on each tooth surface",
        "zh": "3千多日元充电款圆头旋转全球畅销款，单颗包围式清扫，清洁力显著超越手刷"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20D1004132BKN",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20D1004132BKN%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o4",
      "status": "active",
      "maker": "Oral-B",
      "name": "スミズミクリーンPRO",
      "model": "D1034133GN",
      "price": 3771,
      "groupId": "entry_budget_assist",
      "type": "充電式回転式",
      "motion": "丸型回転",
      "modes": "3モード(クリーン/やわらか/ホワイト)",
      "sensor": "なし",
      "target": "大人/入門",
      "water": "完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◎",
        "gum": "◯",
        "sensor": "✕",
        "pocket": "△",
        "cost": "◎"
      },
      "desc": {
        "ja": "すみずみクリーンの上位版。やわらかクリーンやホワイトニングなど3モードを搭載したハイコスパ機",
        "en": "Upgraded model with 3 brushing modes including sensitive and whitening under 4k JPY",
        "zh": "4千日元内配齐清洁、柔护与美白抛光3种模式的高性价比旋转牙刷"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20D1034133GN",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20D1034133GN%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o5",
      "status": "active",
      "maker": "PHILIPS",
      "name": "ソニッケアー 2100シリーズ",
      "model": "HX3651/32",
      "price": 4816,
      "groupId": "entry_budget_assist",
      "type": "音波式(充電式)",
      "motion": "毎分約31,000ストローク",
      "modes": "1モード(クリーン)",
      "sensor": "なし(タイマー付)",
      "target": "大人/入門",
      "water": "完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◯",
        "gum": "◎",
        "sensor": "✕",
        "pocket": "◯",
        "cost": "◎"
      },
      "desc": {
        "ja": "4,000円台でソニッケアーの音波水流を体験！やさしい振動で歯と歯ぐきをいたわりながらブラッシング",
        "en": "Accessible entry into Philips Sonicare fluid action; gentle brushing on teeth and gums",
        "zh": "4千多日元体验飞利浦高频声波水流！温和气泡水流冲刷齿缝，轻柔护龈"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Aphilips.co.jp%20HX3651/32",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Aphilips.co.jp%20HX3651/32%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o6",
      "status": "active",
      "maker": "Panasonic",
      "name": "音波振動ハブラシ ドルツ EW-DA18",
      "model": "EW-DA18-W",
      "price": 9680,
      "groupId": "sonic_pocket_doltz",
      "type": "音波式(リニア)",
      "motion": "毎分約31,000ストローク(ヨコ磨き)",
      "modes": "2モード",
      "sensor": "なし",
      "target": "大人/歯周ケア",
      "water": "IPX7完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◯",
        "gum": "◎",
        "sensor": "✕",
        "pocket": "◎",
        "cost": "◯"
      },
      "desc": {
        "ja": "歯科医師推奨の「ヨコ磨き」と毛先約0.02mmの極細毛ブラシ。歯周ポケットに潜む汚れをしっかり掻き出す定番機",
        "en": "Dentist-recommended horizontal sonic motion with 0.02mm ultra-fine bristles for pockets",
        "zh": "牙医推崇的水平横向微幅声波震动，0.02mm极细刷毛深入齿龈沟轻柔剔除污垢"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DA18-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DA18-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o7",
      "status": "active",
      "maker": "Panasonic",
      "name": "音波振動ハブラシ ドルツ EW-DA19",
      "model": "EW-DA19-W",
      "price": 12540,
      "groupId": "sonic_pocket_doltz",
      "type": "音波式(リニア)",
      "motion": "毎分約31,000ストローク(ヨコ磨き)",
      "modes": "2モード",
      "sensor": "なし",
      "target": "大人/歯周ケア",
      "water": "IPX7完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◯",
        "gum": "◎",
        "sensor": "✕",
        "pocket": "◎",
        "cost": "◯"
      },
      "desc": {
        "ja": "EW-DA18の新世代機。薄型ヘッドで奥歯の奥まで毛先がスムーズに届き、歯ぐきへの負担を抑えてブラッシング",
        "en": "Upgraded slim brush head reaching deep into molars while minimizing gum irritation",
        "zh": "新一代超薄刷头，更易探入后槽牙深处死角，有效抑制牙龈过度受压"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DA19-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DA19-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o8",
      "status": "active",
      "maker": "Panasonic",
      "name": "音波振動ハブラシ ドルツ EW-DA48",
      "model": "EW-DA48-A",
      "price": 14440,
      "groupId": "sonic_pocket_doltz",
      "type": "音波式(リニア)",
      "motion": "毎分約31,000ストローク(ヨコ磨き)",
      "modes": "3モード",
      "sensor": "押しつけ防止センサー",
      "target": "大人/過圧防止",
      "water": "IPX7完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◯",
        "gum": "◎",
        "sensor": "◎",
        "pocket": "◎",
        "cost": "◯"
      },
      "desc": {
        "ja": "「押しつけ防止センサー」を搭載！力を入れすぎると音で警告。強く磨きすぎて歯ぐきを痛めがちな方の本命",
        "en": "Built-in pressure sensor alerts with sound when pressing too hard to protect sensitive gums",
        "zh": "搭载防过度按压传感器！用力过猛即刻蜂鸣警示，专为刷牙力道过重人群定制"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DA48-A",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DA48-A%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o9",
      "status": "active",
      "maker": "Panasonic",
      "name": "音波振動ハブラシ ドルツ EW-DA49",
      "model": "EW-DA49-K",
      "price": 18810,
      "groupId": "sonic_pocket_doltz",
      "type": "音波式(リニア)",
      "motion": "毎分約31,000ストローク(ヨコ磨き)",
      "modes": "3モード",
      "sensor": "押しつけ防止センサー",
      "target": "大人/過圧防止",
      "water": "IPX7完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◯",
        "gum": "◎",
        "sensor": "◎",
        "pocket": "◎",
        "cost": "◯"
      },
      "desc": {
        "ja": "押しつけ防止センサー＋急速1時間充電対応。シックなマットブラックで上質なバスルームに調和",
        "en": "Pressure sensor with 1-hour fast charging in elegant matte black casing",
        "zh": "过压感应结合1小时极速充满电，哑光纯黑质感，高雅实用"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DA49-K",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DA49-K%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o10",
      "status": "active",
      "maker": "OMRON",
      "name": "オムロン 音波式電動歯ブラシ HT-B319",
      "model": "HT-B319-W",
      "price": 7770,
      "groupId": "sonic_pocket_doltz",
      "type": "音波式(マルチアクション)",
      "motion": "タテ・ヨコ立体微振動",
      "modes": "2モード",
      "sensor": "なし",
      "target": "大人/軽量",
      "water": "完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◯",
        "gum": "◯",
        "sensor": "✕",
        "pocket": "◯",
        "cost": "◎"
      },
      "desc": {
        "ja": "独自のタテ・ヨコ立体微振動。本体が細身でペンを持つように軽く握れるオムロンの実力派",
        "en": "Multi-action 3D vibrations in a slim, lightweight body held comfortably like a pencil",
        "zh": "独家纵向横向立体微细振动，纤细笔握手柄，手小长辈握持轻便省力"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ahealthcare.omron.co.jp%20HT-B319-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ahealthcare.omron.co.jp%20HT-B319-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o11",
      "status": "active",
      "maker": "Oral-B",
      "name": "Oral-B PRO1",
      "model": "D3055133",
      "price": 6050,
      "groupId": "round_plaque_oralb",
      "type": "3D丸型回転",
      "motion": "上下振動＋左右反転",
      "modes": "3モード",
      "sensor": "過圧ストッパー",
      "target": "大人/歯垢除去",
      "water": "完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◎",
        "gum": "◯",
        "sensor": "◎",
        "pocket": "△",
        "cost": "◎"
      },
      "desc": {
        "ja": "6,000円で「3D丸型回転＋過圧ストッパー」を搭載！上下で歯垢を叩いて浮かせ、左右で一気にかき出す本格機",
        "en": "3D pulsating and oscillating round head with pressure stopper under 7k JPY",
        "zh": "6千日元配齐上下叩击+左右旋转3D动作与过压自动减速，深度扫荡顽固牙结石菌斑"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20D3055133",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20D3055133%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o12",
      "status": "active",
      "maker": "Oral-B",
      "name": "Oral-B iO2",
      "model": "iOG21C90FG",
      "price": 7480,
      "groupId": "round_plaque_oralb",
      "type": "磁気駆動(iO)",
      "motion": "遠心マイクロモーション",
      "modes": "3モード",
      "sensor": "過圧ストッパー",
      "target": "大人/次世代入門",
      "water": "完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◎",
        "gum": "◎",
        "sensor": "◎",
        "pocket": "◯",
        "cost": "◎"
      },
      "desc": {
        "ja": "次世代iOシリーズを7,000円台で！磁気リニア駆動による遠心マイクロモーションで毛先まで滑らかに回転",
        "en": "Next-gen iO magnetic drive under 8k JPY; smooth micro-vibrations for gentle deep clean",
        "zh": "7千多日元体验次世代磁驱iO科技！微震顺畅柔滑，告别机械震手，净齿护龈兼顾"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20iOG21C90FG",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20iOG21C90FG%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o13",
      "status": "active",
      "maker": "Oral-B",
      "name": "Oral-B iO3",
      "model": "iOG31C60IBH",
      "price": 11200,
      "groupId": "round_plaque_oralb",
      "type": "磁気駆動(iO)",
      "motion": "遠心マイクロモーション",
      "modes": "3モード",
      "sensor": "スマート押しつけ防止センサー",
      "target": "大人/過圧防止",
      "water": "完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◎",
        "gum": "◎",
        "sensor": "◎",
        "pocket": "◯",
        "cost": "◯"
      },
      "desc": {
        "ja": "LEDリングが光って力加減をお知らせ（強すぎ・適切・弱すぎの3色判定）。iOシリーズの最もバランスの良い定番",
        "en": "Smart pressure ring lights up in 3 colors to guide the perfect brushing force",
        "zh": "环形光圈以绿/红/白三色实时反馈按压力度，iO系列备受推荐的主流黄金配置"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20iOG31C60IBH",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20iOG31C60IBH%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o14",
      "status": "active",
      "maker": "Oral-B",
      "name": "Oral-B iO5",
      "model": "iOG52J62KBK",
      "price": 19030,
      "groupId": "round_plaque_oralb",
      "type": "磁気駆動(iO)",
      "motion": "遠心マイクロモーション",
      "modes": "5モード",
      "sensor": "スマート押しつけ防止センサー",
      "target": "大人/AI認識",
      "water": "完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◎",
        "gum": "◎",
        "sensor": "◎",
        "pocket": "◯",
        "cost": "◯"
      },
      "desc": {
        "ja": "Bluetooth連携＆AIブラッシング認知機能搭載。スマホと繋いで磨き残した箇所をリアルタイムでチェック",
        "en": "Bluetooth AI recognition tracking real-time brushing coverage via smartphone app",
        "zh": "配备蓝牙与AI面部位置识别，在手机端实时查看齿面覆盖率，杜绝漏刷"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20iOG52J62KBK",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20iOG52J62KBK%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o15",
      "status": "active",
      "maker": "PHILIPS",
      "name": "ソニッケアー 3100シリーズ",
      "model": "HX4031/21",
      "price": 8680,
      "groupId": "sonic_water_flow_philips",
      "type": "音波式(充電式)",
      "motion": "毎分約31,000ストローク",
      "modes": "1モード(クリーン)",
      "sensor": "過圧防止センサー",
      "target": "大人/歯間ケア",
      "water": "完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◯",
        "gum": "◎",
        "sensor": "◎",
        "pocket": "◎",
        "cost": "◯"
      },
      "desc": {
        "ja": "過圧防止センサー付きのソニッケアー定番。高速振動と振幅による「音波水流」が歯の隙間の歯垢までやさしく除去",
        "en": "Dynamic fluid action washes deep between teeth with built-in pressure sensor",
        "zh": "声波水流强劲冲刷齿间缝隙，自带过压保护震动提醒，飞利浦高赞经典款"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Aphilips.co.jp%20HX4031/21",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Aphilips.co.jp%20HX4031/21%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o16",
      "status": "active",
      "maker": "PHILIPS",
      "name": "ソニッケアー 6500シリーズ",
      "model": "HX7410/09",
      "price": 28050,
      "groupId": "sonic_water_flow_philips",
      "type": "音波式(ハイグレード)",
      "motion": "毎分約31,000ストローク",
      "modes": "3モード×3段階強さ",
      "sensor": "過圧防止センサー",
      "target": "大人/ステインケア",
      "water": "完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◎",
        "gum": "◎",
        "sensor": "◎",
        "pocket": "◎",
        "cost": "◯"
      },
      "desc": {
        "ja": "3モード×3段階の強さ調節＆ブラシヘッド認識機能。ステイン除去ブラシが付属し着色汚れも徹底ケア",
        "en": "3 modes with 3 intensity levels and RFID brush sync for dedicated stain removal",
        "zh": "3种模式×3档强弱自由组合，芯片自动识别刷头寿命，配美白去渍刷头"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Aphilips.co.jp%20HX7410/09",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Aphilips.co.jp%20HX7410/09%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o17",
      "status": "active",
      "maker": "Panasonic",
      "name": "W音波振動ハブラシ ドルツ EW-DP58",
      "model": "EW-DP58-W",
      "price": 35640,
      "groupId": "premium_ai_smart",
      "type": "W音波振動(2モーター)",
      "motion": "ヨコ磨き＋タタキ振動",
      "modes": "5モード",
      "sensor": "押しつけ防止センサー",
      "target": "大人/最高峰ケア",
      "water": "IPX7完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◎",
        "gum": "◎",
        "sensor": "◎",
        "pocket": "◎",
        "cost": "△"
      },
      "desc": {
        "ja": "2つのモーターが生み出す独自の「W音波振動」！ヨコ磨きで歯周ポケット、タタキ振動で歯間の歯垢に立体アプローチ",
        "en": "Dual-motor 3D sonic action simultaneously sweeping pockets and pulsing between teeth",
        "zh": "双电机联合驱动！水平横向除垢叠加垂直高频敲击，深层立体扫除牙周与齿间污垢"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DP58-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DP58-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o18",
      "status": "active",
      "maker": "Panasonic",
      "name": "スマート ドルツ EW-DT88",
      "model": "EW-DT88-S",
      "price": 48510,
      "groupId": "premium_ai_smart",
      "type": "W音波振動(2モーター)",
      "motion": "ヨコ磨き＋タタキ振動",
      "modes": "アプリカスタマイズ",
      "sensor": "押しつけ＋角度センサー",
      "target": "大人/最高峰スマート",
      "water": "IPX7完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◎",
        "gum": "◎",
        "sensor": "◎",
        "pocket": "◎",
        "cost": "△"
      },
      "desc": {
        "ja": "ドルツ最上位。Bluetoothアプリ連携で磨き残し・角度・押しつけ圧を画面上でリアルタイム指導する究極モデル",
        "en": "Panasonic's apex model: Bluetooth app guides precise angle, coverage, and force live",
        "zh": "松下巅峰之作。内置姿态角度感应器，手机端动态模拟复原整口牙齿清洁盲区"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DT88-S",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DT88-S%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o19",
      "status": "active",
      "maker": "PHILIPS",
      "name": "ソニッケアー ダイヤモンドクリーン 9000",
      "model": "HX9911/57 / 70",
      "price": 45900,
      "groupId": "premium_ai_smart",
      "type": "音波式(最高峰)",
      "motion": "毎分約31,000ストローク",
      "modes": "4モード×3段階強さ",
      "sensor": "過圧防止センサー",
      "target": "大人/最高峰ステイン",
      "water": "完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◎",
        "gum": "◎",
        "sensor": "◎",
        "pocket": "◎",
        "cost": "△"
      },
      "desc": {
        "ja": "ソニッケアー最高峰。美しいグラス型充電器とトラベル充電ケース付属。アプリ連動でプレミアムな磨き体験を提供",
        "en": "Iconic flagship with induction charging glass, USB travel case, and full app tracking",
        "zh": "经典轻奢玻璃杯感应充电，皮质旅行盒随时补电，强效去除多倍烟酒茶渍"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Aphilips.co.jp%20HX9911/57%20/%2070",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Aphilips.co.jp%20HX9911/57%20/%2070%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o20",
      "status": "active",
      "maker": "Oral-B",
      "name": "Oral-B iO10",
      "model": "iOM10442ADCB",
      "price": 58300,
      "groupId": "premium_ai_smart",
      "type": "磁気駆動(iO最上位)",
      "motion": "遠心マイクロモーション",
      "modes": "7モード",
      "sensor": "スマート押しつけ防止センサー",
      "target": "大人/究極ガイド",
      "water": "完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◎",
        "gum": "◎",
        "sensor": "◎",
        "pocket": "◎",
        "cost": "△"
      },
      "desc": {
        "ja": "充電スタンド「iOsense」が時計・時間・磨き残し部位を直接ランプでナビゲート！スマホを見ずに完結する最高峰",
        "en": "iOsense smart charger displays time and live oral map lights without checking phone",
        "zh": "iOsense智能磁吸充电底座直接以灯光点阵实时显示漏刷牙面与倒计时，科技顶峰"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20iOM10442ADCB",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20iOM10442ADCB%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o21",
      "status": "active",
      "maker": "Panasonic",
      "name": "ジェットウォッシャー ドルツ EW-DJ55",
      "model": "EW-DJ55-W",
      "price": 17820,
      "groupId": "water_flosser_interdental",
      "type": "口腔洗浄器(コードレス)",
      "motion": "超音波水流",
      "modes": "水圧5段階調節",
      "sensor": "なし",
      "target": "大人/歯間ケア",
      "water": "IPX7お風呂使用可",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◎",
        "gum": "◎",
        "sensor": "✕",
        "pocket": "◎",
        "cost": "◯"
      },
      "desc": {
        "ja": "歯ブラシでは取れない歯間の詰まりを超音波水流で吹き飛ばす！お風呂でも使える防水コードレスタイプ",
        "en": "Ultrasonic shockwave water jet blasts out trapped food particles; fully waterproof for bath use",
        "zh": "超声波高频脉冲水柱强力冲洗牙缝与牙龈缝！全机IPX7防水，洗澡时可同时冲牙"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DJ55-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DJ55-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o22",
      "status": "active",
      "maker": "Panasonic",
      "name": "ジェットウォッシャー ドルツ EW-DJ75",
      "model": "EW-DJ75-W",
      "price": 19800,
      "groupId": "water_flosser_interdental",
      "type": "口腔洗浄器(大容量据置)",
      "motion": "超音波水流",
      "modes": "水圧10段階調節",
      "sensor": "マグネットハンドル",
      "target": "家族/自宅専用",
      "water": "本体防滴",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◎",
        "gum": "◎",
        "sensor": "✕",
        "pocket": "◎",
        "cost": "◯"
      },
      "desc": {
        "ja": "大容量600mLタンクで水補充の手間なし！10段階の細かな水圧調節で家族みんなで本格オーラル洗浄",
        "en": "Spacious 600ml reservoir with 10 pressure settings for thorough daily home flossing",
        "zh": "600mL大水箱单次加水洗透整口！10段细腻水压自由调节，全家共享洁齿利器"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DJ75-W",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EW-DJ75-W%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o23",
      "status": "active",
      "maker": "FESTINO",
      "name": "ジェットクリーン スマート (FESTINO)",
      "model": "SMHB-103-WT",
      "price": 3110,
      "groupId": "water_flosser_interdental",
      "type": "携帯型口腔洗浄器",
      "motion": "パルス水流",
      "modes": "3段階モード",
      "sensor": "なし",
      "target": "外出先/旅行",
      "water": "IPX7防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◯",
        "gum": "◯",
        "sensor": "✕",
        "pocket": "◯",
        "cost": "◎"
      },
      "desc": {
        "ja": "手のひらサイズに伸縮縮小！ポーチに入るUSB充電式で、オフィスや外食後の歯間ケアに3,000円台で大活躍",
        "en": "Pocket-collapsible USB rechargeable water flosser under 4k JPY for discreet office use",
        "zh": "3千多日元伸缩折叠掌心大小！USB充放随身进包，午休外食后迅速冲净齿缝残渣"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Afestino.jp%20SMHB-103-WT",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Afestino.jp%20SMHB-103-WT%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "o24",
      "status": "active",
      "maker": "Oral-B",
      "name": "すみずみクリーンキッズ プレミアム",
      "model": "D1004132KPKMRD",
      "price": 3140,
      "groupId": "kids_children_care",
      "type": "子ども用回転式(3歳〜)",
      "motion": "丸型回転(ソフト)",
      "modes": "2モード(やわらか)",
      "sensor": "過圧配慮設計",
      "target": "子ども(3歳〜)",
      "water": "完全防水",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "plaque": "◎",
        "gum": "◎",
        "sensor": "◯",
        "pocket": "△",
        "cost": "◎"
      },
      "desc": {
        "ja": "3歳からの正しい歯磨き習慣に！やわらか極細毛ブラシと楽しい専用ウェブタイマーで子どもが喜んで歯磨き",
        "en": "Specialized 3+ kids brush with extra-soft bristles and playful interactive web timer",
        "zh": "专为3岁以上儿童研发！超柔细圆头刷毛搭配宝可梦趣味互动刷牙倒计时，主动爱上刷牙"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20D1004132KPKMRD",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Ajp.oralb.com%20D1004132KPKMRD%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
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
  "category": "toothbrush",
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
  <h1 class="pg-ttl">電動歯ブラシ</h1>
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
  var APP = "toothbrush";                 // このページの相談アプリ
  var ROOT_ID = "tb-app";            // アプリの表示エリア
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

<!-- ===== 相談アプリ: toothbrush ===== -->
<style>
.tb-svg {
  width: 92px;
  height: 92px;
  display: block;
  margin: 0 auto;
  overflow: visible;
}
.fr-card.sel .tb-svg {
  margin: 0;
}
.tb-osc {
  transform-box: fill-box;
  transform-origin: center;
  animation: tbosc 1.4s ease-in-out infinite;
  animation-delay: var(--dl,0s);
}
@keyframes tbosc {
  0%,
  to {
    transform: rotate(-28deg);
  }
  50% {
    transform: rotate(28deg);
  }
}
.tb-wave {
  animation: tbwave .9s ease-in-out infinite alternate;
  animation-delay: var(--dl,0s);
}
@keyframes tbwave {
  0% {
    transform: translate(-3px);
  }
  to {
    transform: translate(3px);
  }
}
.tb-rise {
  animation: tbrise 2.2s ease-in infinite;
  animation-delay: var(--dl,0s);
}
@keyframes tbrise {
  0% {
    transform: translateY(8px);
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  to {
    transform: translateY(-14px);
    opacity: 0;
  }
}
.tb-tw {
  transform-box: fill-box;
  transform-origin: center;
  animation: tbtw 1.8s ease-in-out infinite;
  animation-delay: var(--dl,0s);
}
@keyframes tbtw {
  0%,
  to {
    transform: scale(.6);
    opacity: .5;
  }
  50% {
    transform: scale(1.25);
    opacity: 1;
  }
}
.tb-jet {
  animation: tbjet 1.2s linear infinite;
  animation-delay: var(--dl,0s);
}
@keyframes tbjet {
  0% {
    transform: translate(0);
    opacity: 1;
  }
  to {
    transform: translate(14px,-10px);
    opacity: 0;
  }
}
.tb-bn {
  transform-box: fill-box;
  transform-origin: center;
  animation: tbbn 1.6s ease-in-out infinite;
  animation-delay: var(--dl,0s);
}
@keyframes tbbn {
  0%,
  to {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-6px) rotate(18deg);
  }
}
.tb-cmp {
  width: 100%;
  border-collapse: collapse;
  font-size: .86rem;
  line-height: 1.55;
}
.tb-cmp td,
.tb-cmp th {
  padding: 7px 6px;
  border-bottom: 1px solid #e2e8f0;
  vertical-align: top;
  text-align: left;
}
.tb-cmp th {
  color: #0369a1;
  white-space: nowrap;
  width: 7em;
}
.tb-sel {
  border: 0;
  background: #f1f5f9;
  border-radius: 99px;
  padding: 6px 8px;
  font-size: .86rem;
  font-weight: 700;
  color: #475569;
}
.tb-src {
  font-size: .78rem;
  color: #94a3b8;
  line-height: 1.5;
  margin-top: 6px;
}
body.motion-off .tb-osc,
body.motion-off .tb-wave,
body.motion-off .tb-rise,
body.motion-off .tb-tw,
body.motion-off .tb-jet,
body.motion-off .tb-bn {
  animation: none!important;
}
</style><style>
.tb-mini {
  width: 54px;
  flex: none;
}
.tb-mini .tb-svg {
  width: 54px;
  height: 54px;
}
.tb-qi {
  float: right;
  width: 62px;
  height: 62px;
  margin: -2px 0 4px 8px;
}
.tb-qi svg {
  width: 62px;
  height: 62px;
  overflow: visible;
}
.fr-opt.rec:not(.sel) {
  background: #fffbeb;
  border-color: #fde68a;
}
body.motion-off .tb-qi * {
  animation: none!important;
}
</style><div id="tb-app" class="fr-root" role="dialog" aria-label="Toothbrush"></div>
<script>
(function () {
  "use strict";
  const _NQ = [
    {
      id: "sit",
      title: {
        ja: "今回の状況は？（回答で、このあとの質問が変わります）",
        en: "What is your situation? (Your answer changes the next questions)",
        zh: "您目前的情况是？（回答会改变后续问题）"
      },
      options: [
        {
          text: {
            ja: "初めて電動歯ブラシを使う（今は手磨き）",
            en: "My first electric toothbrush (brushing by hand now)",
            zh: "第一次使用电动牙刷（目前手刷）"
          },
          val: "sit_first"
        },
        {
          text: {
            ja: "今の電動歯ブラシから買い替え・アップグレード",
            en: "Replacing or upgrading my current one",
            zh: "更换·升级现有的电动牙刷"
          },
          val: "sit_replace"
        },
        {
          text: {
            ja: "家族や大切な人へのプレゼント",
            en: "A gift for family or someone special",
            zh: "送给家人或重要的人"
          },
          val: "sit_gift"
        },
        { text: { ja: "まだ検討中 / こだわらない", en: "Still Deciding", zh: "暂未决定 / 无特殊要求" }, val: "pending" }
      ]
    },
    {
      id: "worry",
      title: {
        ja: "電動歯ブラシで、一番不安なことは？",
        en: "What worries you most about going electric?",
        zh: "改用电动牙刷，您最担心什么？"
      },
      options: [
        {
          text: {
            ja: "振動や音が強そうで、歯ぐきに合うか不安",
            en: "Strong vibration or noise might not suit my gums",
            zh: "担心振动与噪音太强，不适合牙龈"
          },
          val: "w_noise"
        },
        {
          text: {
            ja: "機能が多くて使いこなせるか不安。簡単なものがいい",
            en: "Worried it will be complicated; I want something simple",
            zh: "担心功能复杂不会用，想要简单的"
          },
          val: "w_simple"
        },
        {
          text: {
            ja: "替えブラシ代など、維持費が心配",
            en: "Worried about running costs such as replacement heads",
            zh: "担心替换刷头等后续花费"
          },
          val: "w_cost"
        },
        { text: { ja: "特にない", en: "Nothing in particular", zh: "没有特别担心" }, val: "pending" }
      ]
    },
    {
      id: "why",
      title: {
        ja: "今の歯ブラシに、一番不満なことは？",
        en: "What bothers you most about your current one?",
        zh: "对现在的牙刷，最不满意的是？"
      },
      options: [
        {
          text: {
            ja: "磨き残しが多く、すっきり感が足りない",
            en: "It leaves plaque behind and does not feel clean enough",
            zh: "总有刷不干净的地方，清爽感不足"
          },
          val: "y_clean"
        },
        {
          text: {
            ja: "強すぎる・歯ぐきに合わない気がする",
            en: "Too harsh; it may not suit my gums",
            zh: "太用力·感觉不适合牙龈"
          },
          val: "y_gentle"
        },
        {
          text: {
            ja: "替えブラシ代や充電・手入れが面倒",
            en: "Replacement heads, charging and upkeep are a hassle",
            zh: "替换刷头、充电与保养太麻烦"
          },
          val: "y_upkeep"
        },
        {
          text: {
            ja: "壊れた・古くなった（不満は特にない）",
            en: "It broke or got old (no other complaints)",
            zh: "坏了·用旧了（没有其他不满）"
          },
          val: "pending"
        }
      ]
    },
    {
      id: "gum2",
      title: {
        ja: "歯ぐきのお悩みに近いのは？",
        en: "Which is closest to your gum concern?",
        zh: "最接近您的牙龈困扰的是？"
      },
      options: [
        {
          text: {
            ja: "磨くと出血しやすい・腫れが心配",
            en: "Gums bleed or swell when I brush",
            zh: "刷牙易出血·担心牙龈肿胀"
          },
          val: "g_bleed"
        },
        {
          text: {
            ja: "歯ぐきが下がった・しみる気がする",
            en: "My gums seem to be receding or feel sensitive",
            zh: "牙龈似乎退缩·有敏感感"
          },
          val: "g_recede"
        },
        {
          text: {
            ja: "今は症状はないが、予防したい",
            en: "No symptoms now, but I want to prevent problems",
            zh: "目前没有症状，想提前预防"
          },
          val: "g_prevent"
        }
      ]
    }
  ];
  const oe = [
    {
      id: "entry_budget_assist",
      name: {
        ja: "低価格・手軽に電動お試し（数百円〜3,000円台）",
        en: "Budget & Entry Trial (<4k JPY)",
        zh: "超值低门槛入门尝试型（数百～3千多日元）"
      },
      desc: { ja: "手磨きからのステップアップや携帯用。乾電池式や回転式の定番エントリーで手軽にブラッシング効率をアップ。" }
    },
    {
      id: "sonic_pocket_doltz",
      name: {
        ja: "歯周ポケット・歯ぐきにやさしい音波振動（パナソニック ドルツ）",
        en: "Periodontal Pocket & Gentle Sonic (Panasonic Doltz)",
        zh: "深入牙周袋·温和护龈声波（松下 Doltz）"
      },
      desc: { ja: "毎分約31,000ストロークのヨコ磨きと極細毛ブラシ。歯周ポケットに潜む汚れを掻き出し、歯ぐきへの優しさを両立。" }
    },
    {
      id: "round_plaque_oralb",
      name: {
        ja: "圧倒的歯垢除去・丸型回転ブラシ（ブラウン Oral-B）",
        en: "High Plaque Removal Round Head (Braun Oral-B)",
        zh: "强力包裹拔除牙菌斑·圆头旋转（欧乐-B）"
      },
      desc: { ja: "歯科クリーニング器具着想の丸型ブラシが歯を1本1本包み込み、物理的に汚れを掻き落とす高い歯垢除去力。" }
    },
    {
      id: "sonic_water_flow_philips",
      name: {
        ja: "音波水流・広範囲ステインケア（フィリップス ソニッケアー）",
        en: "Sonic Fluid Action & Stain Care (Philips Sonicare)",
        zh: "流动洁力冲刷齿间·声波水流（飞利浦 Sonicare）"
      },
      desc: { ja: "毎分約31,000ストロークの高速振動が生み出す「音波水流」で、毛先が届きにくい歯間までやさしく洗い流す。" }
    },
    {
      id: "premium_ai_smart",
      name: {
        ja: "最高峰フラッグシップ・W音波＆AIガイド（iO10 / ドルツ最上位 / 9000）",
        en: "Top Flagship with AI & Dual Sonic (iO10 / Flagship Doltz / DiamondClean)",
        zh: "顶峰旗舰·磁驱双声波与AI实时引导（iO10/旗舰Doltz/钻石9000）"
      },
      desc: { ja: "リニアマグネティックや2モーターW音波振動、外置きスマート充電器が磨き残しやブラッシング圧をリアルタイム可視化。" }
    },
    {
      id: "water_flosser_interdental",
      name: {
        ja: "歯間・歯周ポケット超音波水流洗浄（ジェットウォッシャー）",
        en: "Interdental Ultrasonic Water Flosser (Jet Washer)",
        zh: "齿间深层水流冲洗·口腔冲牙器（超声波水流）"
      },
      desc: { ja: "ブラシが届かない歯と歯の間、歯周ポケットの汚れを超音波水流の衝撃波で弾き飛ばす口腔洗浄専用機。" }
    },
    {
      id: "kids_children_care",
      name: {
        ja: "子ども用・楽しく正しい歯磨き習慣（Oral-B キッズ）",
        en: "Kids Electric Toothbrush (Oral-B Kids)",
        zh: "儿童专属·趣味养成刷牙习惯（欧乐-B 儿童款）"
      },
      desc: { ja: "3歳から使えるやわらか極細毛ブラシ。ブラッシングタイマーや専用コンテンツで楽しく正しい歯磨きをサポート。" }
    }
  ],
    ie = (window.NJ_INV ? window.NJ_INV.products() : []),
    le = [
      {
        name: {
          ja: "各社共通 替えブラシホルダー / UV紫外線除菌ケース",
          en: "UV Toothbrush Sanitizer Case",
          zh: "便携式紫外线深层杀菌收纳盒"
        },
        price: "¥2,980",
        desc: {
          ja: "濡れたブラシヘッドの細菌繁殖をUV-C紫外線で99.9%除菌。清潔な保管に",
          en: "Destroys 99.9% of bacteria on damp brush heads with UV-C light automatically",
          zh: "每次刷牙后放入自动开启UVC紫外杀菌，杜绝潮湿滋生细菌，卫生安心"
        }
      },
      {
        name: {
          ja: "薬用 オーラルケア ジェルフォーム (研磨剤無配合・低発泡)",
          en: "Non-Abrasive Low-Foam Toothpaste Gel",
          zh: "电动牙刷专用无研磨剂低泡洁齿啫喱"
        },
        price: "¥1,180",
        desc: {
          ja: "高速振動でも飛び散らず、エナメル質や歯ぐきを傷つけない電動歯ブラシ専用処方",
          en: "Specially formulated for high-speed sonic brushes without damaging enamel",
          zh: "无粗糙颗粒不磨损牙釉质与牙龈，低泡配方防止高频飞溅，药物成分深层渗透"
        }
      },
      {
        name: {
          ja: "口腔洗浄器用 替えノズルセット (識別カラーリング付 2本組)",
          en: "Replacement Water Flosser Nozzle Set (2-pack)",
          zh: "冲牙器原装替换喷嘴2支装 (带色环区分)"
        },
        price: "¥1,480",
        desc: {
          ja: "衛生的に3ヶ月ごとの交換を推奨。家族で使い分けるためのカラーリング付き",
          en: "Color-coded replacement nozzles ensuring hygienic individual family use",
          zh: "建议3个月定期更换保证水柱聚拢，不同颜色标环方便全家人卫生区分共用"
        }
      }
    ],
    ce = [
      {
        id: "q1_target_user",
        title: {
          ja: "Q1. 主にお使いになる「対象の方」はどなたですか？",
          en: "Q1. Who is the primary user?",
          zh: "Q1. 准备给谁选购使用？"
        },
        options: [
          {
            text: {
              ja: "大人が自分用または家族で使いたい",
              en: "Adult for personal / family use",
              zh: "成人自己用，或全家人共用"
            },
            val: "u_adult"
          },
          {
            text: {
              ja: "子どもに使わせたい（3歳〜小学生・正しい歯磨き習慣）",
              en: "Child (Age 3+ / fun healthy brushing habit)",
              zh: "给小孩子用（3岁至小学生·培养刷牙习惯）"
            },
            val: "u_kids"
          },
          {
            text: {
              ja: "出張や旅行・職場へ持ち歩く機会が多い",
              en: "Portable for travel, business trips, or office",
              zh: "经常出差旅行或需要在办公室午休使用"
            },
            val: "u_travel"
          },
          {
            text: { ja: "まだ検討中 / こだわらない", en: "Still Deciding", zh: "暂未决定 / 无特殊要求" },
            val: "pending"
          }
        ]
      },
      {
        id: "q2_main_trouble",
        title: {
          ja: "Q2. 【最重要】現在一番気になっている「お口のお悩み」は？",
          en: "Q2. [Crucial] What is your primary oral concern?",
          zh: "Q2. 【最核心】目前口腔最希望改善的重点是？"
        },
        options: [
          {
            text: {
              ja: "磨き残しが多く、ツルツルの歯垢除去感を味わいたい【歯垢・ざらつき】",
              en: "Plaque buildup; want that polished smooth dentist feel",
              zh: "容易有牙垢牙结石，想要刚洗完牙般的抛光爽滑感【强力清除牙菌斑】"
            },
            val: "t_plaque"
          },
          {
            text: {
              ja: "歯ぐきの腫れや出血が心配、歯周ポケットを優しくケアしたい【歯周・歯ぐき】",
              en: "Bleeding gums; want gentle care for periodontal pockets",
              zh: "牙龈脆弱易出血，想深入齿龈袋轻柔清洁【牙周袋·护龈】"
            },
            val: "t_gum_pocket"
          },
          {
            text: {
              ja: "コーヒー・お茶・タバコによる歯の黄ばみを落としたい【ステイン・着色】",
              en: "Teeth yellowing from coffee/tea; want stain removal",
              zh: "经常喝茶喝咖啡抽烟，想去除附着茶渍烟渍【美白去黄】"
            },
            val: "t_stain"
          },
          {
            text: {
              ja: "歯ブラシだけでは届かない「歯と歯の間の挟まり」を取りたい【歯間】",
              en: "Food caught between teeth that brushes can't reach",
              zh: "牙缝容易嵌塞食物残渣，牙刷刷不到【深入清洁齿缝】"
            },
            val: "t_interdental"
          },
          {
            text: { ja: "まだ検討中 / こだわらない", en: "Still Deciding", zh: "暂未决定 / 无特殊要求" },
            val: "pending"
          }
        ]
      },
      {
        id: "q3_water_floss_need",
        title: {
          ja: "Q3. 水流の力で歯間を洗い流す「口腔洗浄器（ジェットウォッシャー）」に関心は？",
          en: "Q3. Interest in water flossers (pulsing water jets for teeth gaps)?",
          zh: "Q3. 对利用高压细水柱冲洗齿缝的“冲牙器”是否有意向？"
        },
        options: [
          {
            text: {
              ja: "ぜひ使いたい！（フロス代わりに水流で歯間や歯周ポケットを一掃したい）",
              en: "Very interested! (Want water flosser to blast out trapped food)",
              zh: "非常想用！（用细脉冲水流彻底冲出齿缝卡住的残渣菜叶）"
            },
            val: "wf_must"
          },
          {
            text: {
              ja: "まずは「普通の電動歯ブラシ」で歯面や歯ぐきをしっかり磨きたい",
              en: "Prefer standard electric toothbrush first for tooth surfaces",
              zh: "首先需要一把踏实刷净牙面的“标准电动牙刷”"
            },
            val: "wf_brush_first"
          },
          {
            text: {
              ja: "両方揃えて完璧にケアしたい（電動歯ブラシ＋ジェットウォッシャー併用）",
              en: "Want both! (Toothbrush for surfaces + water jet for gaps)",
              zh: "想搭配双管齐下（电动牙刷刷面 + 冲牙器清缝）"
            },
            val: "wf_combo"
          },
          {
            text: { ja: "まだ検討中 / こだわらない", en: "Still Deciding", zh: "暂未决定 / 无特殊要求" },
            val: "pending"
          }
        ]
      },
      {
        id: "q4_brush_pressure",
        title: {
          ja: "Q4. 普段の歯磨きで「力を入れすぎてしまう傾向」はありますか？",
          en: "Q4. Do you tend to press too hard when brushing?",
          zh: "Q4. 您平常刷牙时是否有“不自觉用力过大过猛”的倾向？"
        },
        options: [
          {
            text: {
              ja: "よく強くゴシゴシ磨いてしまい、歯ぐきが下がったり痛めたりするのが不安",
              en: "Yes, I scrub hard; worried about receding or hurting gums",
              zh: "经常大力生刷，牙刷毛容易炸开，担心磨损牙龈牙釉质"
            },
            val: "pr_heavy"
          },
          {
            text: {
              ja: "適度な力加減で磨けていると思う",
              en: "Normal, moderate brushing pressure",
              zh: "力道适中，能够保持轻柔匀速"
            },
            val: "pr_normal"
          },
          {
            text: { ja: "まだ検討中 / こだわらない", en: "Still Deciding", zh: "暂未决定 / 无特殊要求" },
            val: "pending"
          }
        ]
      },
      {
        id: "q5_budget",
        title: {
          ja: "Q5. 今回のご予算イメージはどれくらいですか？",
          en: "Q5. What is your approximate budget limit?",
          zh: "Q5. 本次选购的心理预算范围大致是？"
        },
        options: [
          {
            text: {
              ja: "〜3,500円・5,000円以下（手軽に試せるエントリーモデル）",
              en: "Under 3.5k - 5k JPY (Budget trial entry)",
              zh: "3,500日元～5,000日元以下（低门槛体验试水款）"
            },
            val: "b_low"
          },
          {
            text: {
              ja: "6,000円〜1.5万円前後（人気ブランドの定番・実力派モデル）",
              en: "6k - 15k JPY (Mainstream solid performers)",
              zh: "6,000～15,000日元左右（各大品牌主力中端实用款）"
            },
            val: "b_mid"
          },
          {
            text: {
              ja: "1.6万〜3.5万円前後（W音波振動や押しつけセンサー上位・iOシリーズ）",
              en: "16k - 35k JPY (Dual sonic motors, iO smart sensors)",
              zh: "16,000～35,000日元左右（双电机W声波、防过压上位iO系列）"
            },
            val: "b_high"
          },
          {
            text: {
              ja: "4万円以上OK（AIブラッシング指導付きの最高峰フラッグシップ）",
              en: "40k+ JPY (Top flagship with live AI smartphone guide)",
              zh: "4万日元以上（带AI实时屏幕导航的发烧级巅峰旗舰）"
            },
            val: "b_top"
          },
          {
            text: { ja: "まだ検討中 / こだわらない", en: "Still Deciding", zh: "暂未决定 / 无特殊要求" },
            val: "pending"
          }
        ]
      }
    ],
    de = [
      {
        id: "q6_brushing_method",
        title: {
          ja: "Q6. 「ブラッシングの動作方式」で気になっているものは？",
          en: "Q6. Preferred brushing motion technology?",
          zh: "Q6. 对牙刷的“机械动作原理”更感兴趣的是？"
        },
        options: [
          {
            text: {
              ja: "歯を1本ずつ丸く包んで高速回転する【丸型回転式】（ブラウン Oral-B）",
              en: "Round oscillating head wrapping each tooth (Oral-B)",
              zh: "齿面单颗立体包裹高速旋转【圆头旋转式】（欧乐-B）"
            },
            val: "m_rotate"
          },
          {
            text: {
              ja: "細かなリニア振動で歯周ポケットを掻き出す【微細音波式】（ドルツ等）",
              en: "Linear micro-vibrations sweeping pockets (Panasonic Doltz)",
              zh: "微细线性高频横向扫刷【声波振动式】（松下Doltz等）"
            },
            val: "m_sonic"
          },
          {
            text: {
              ja: "水流の勢いだけで歯間を直接洗い流す【超音波水流】（ジェットウォッシャー）",
              en: "High-pressure ultrasonic water streams (Water Flosser)",
              zh: "仅靠水流冲击彻底洗净牙缝【冲牙器水流】（喷射水柱）"
            },
            val: "m_water"
          },
          {
            text: { ja: "まだ検討中 / こだわらない", en: "Still Deciding", zh: "暂未决定 / 无特殊要求" },
            val: "pending"
          }
        ]
      },
      {
        id: "q7_sensor_app",
        title: {
          ja: "Q7. 「過圧防止センサー」や「スマホアプリ連携」へのご希望は？",
          en: "Q7. Preference for pressure sensors or smartphone apps?",
          zh: "Q7. 对“过压提示灯与手机APP蓝牙互联”的期待？"
        },
        options: [
          {
            text: {
              ja: "強く押しすぎた時に光や音で警告してくれる【センサー機能】は必須",
              en: "Pressure sensor warning with lights/buzzing is essential",
              zh: "按压过重时变色发光或鸣音警告的【过压传感器】非常必要"
            },
            val: "s_sensor_must"
          },
          {
            text: {
              ja: "スマホ画面でどこを磨き残したか教えてくれる【AIアプリ連携】を使ってみたい",
              en: "Live app map showing missed brushing areas (AI tracking)",
              zh: "想在手机屏幕上直观看到哪里漏刷的【AI蓝牙互联功能】"
            },
            val: "s_app_want"
          },
          {
            text: {
              ja: "複雑な機能は不要、電源ボタンを押すだけのシンプルなものが良い",
              en: "Simple operation without apps or complicated setup",
              zh: "不需要复杂配对，拿起即刷、一键开关的纯粹操作最好"
            },
            val: "s_simple"
          },
          {
            text: { ja: "まだ検討中 / こだわらない", en: "Still Deciding", zh: "暂未决定 / 无特殊要求" },
            val: "pending"
          }
        ]
      },
      {
        id: "q8_power_type",
        title: {
          ja: "Q8. 電源は「充電式」と「乾電池式」、どちらがライフスタイルに合いますか？",
          en: "Q8. Power preference: Rechargeable dock vs. dry-cell batteries?",
          zh: "Q8. 供电模式更契合您生活的是“底座充电”还是“换干电池”？"
        },
        options: [
          {
            text: {
              ja: "洗面台のスタンドに置くだけでいつでもフルパワーな【充電式】が良い",
              en: "Rechargeable stand ready at sink with maximum power",
              zh: "放在洗漱台底座即充、动力强劲的【可充电式】"
            },
            val: "p_recharge"
          },
          {
            text: {
              ja: "充電台が邪魔・出張や職場で使いたいので手軽な【乾電池式】が良い",
              en: "Dry-cell battery for compact travel without bulky chargers",
              zh: "免带充电座、出差随装随走的轻巧【干电池式】"
            },
            val: "p_battery"
          },
          {
            text: { ja: "まだ検討中 / こだわらない", en: "Still Deciding", zh: "暂未决定 / 无特殊要求" },
            val: "pending"
          }
        ]
      },
      {
        id: "q9_whitening_care",
        title: {
          ja: "Q9. 「ホワイトニング・ステイン着色除去モード」の必要性は？",
          en: "Q9. Need for specialized stain polishing / whitening modes?",
          zh: "Q9. 是否需要专用的“抛光去渍美白模式”？"
        },
        options: [
          {
            text: {
              ja: "ぜひ欲しい！（専用の美白ブラシや回転モードで歯の表面を磨き上げたい）",
              en: "Yes! Want dedicated whitening brush head and polishing mode",
              zh: "很有必要！（配合专用美白刷头抛光牙齿表面，祛除咖啡茶渍）"
            },
            val: "w_stain_want"
          },
          {
            text: {
              ja: "毎日の普通の歯磨き（歯垢除去・歯周ケア）ができれば十分",
              en: "Standard daily plaque and gum care is completely enough",
              zh: "日常基础清洁干净即可，不需要特殊美白抛光"
            },
            val: "w_standard_ok"
          },
          {
            text: { ja: "まだ検討中 / こだわらない", en: "Still Deciding", zh: "暂未决定 / 无特殊要求" },
            val: "pending"
          }
        ]
      },
      {
        id: "q10_priority",
        title: {
          ja: "Q10. 今回のオーラルケア選びで【一番譲れないこだわり】は？",
          en: "Q10. Your absolute #1 priority?",
          zh: "Q10. 本次选购口腔护理设备最不可妥协的决定性核心？"
        },
        options: [
          {
            text: {
              ja: "手磨きとは次元が違うツルツルの爽快感・圧倒的歯垢除去力",
              en: "Unrivaled polished clean feel & maximum plaque removal",
              zh: "完全超越手动牙刷的光滑爽净感与拔群牙菌斑清洁力"
            },
            val: "p_deep_clean"
          },
          {
            text: {
              ja: "歯ぐきに負担をかけず、歯周病予防に直結する歯周ポケットケア",
              en: "Gentle periodontal pocket sweeping protecting delicate gums",
              zh: "温和不伤幼嫩牙龈、深入牙周袋的细致柔护"
            },
            val: "p_gentle_pocket"
          },
          {
            text: {
              ja: "歯ブラシだけでは絶対に取れない歯間の詰まりを一掃する水流洗浄",
              en: "Water flossing that cleans interdental spots brushes can't reach",
              zh: "彻底解决牙缝残渣嵌塞、牙刷无法企及的冲牙水流"
            },
            val: "p_water_floss"
          },
          {
            text: {
              ja: "購入価格の安さと替えブラシのランニングコストの低さ",
              en: "Lowest initial price and affordable replacement brush costs",
              zh: "亲民的购机预算与低廉经济的后续替换刷头成本"
            },
            val: "p_cost_value"
          },
          {
            text: { ja: "まだ検討中 / こだわらない", en: "Still Deciding", zh: "暂未决定 / 无特殊要求" },
            val: "pending"
          }
        ]
      }
    ],
    pe = [
      {
        id: "ex_rotation_vs_sonic",
        title: {
          ja: "【決定質問】磨き心地は「1本1本包み込んでしっかり掻き出す丸型回転式」と「やさしい微振動で歯周ポケットに入る音波式」、どちらが好みですか？",
          en: "Between 'Round oscillating head wrapping each tooth' and 'Gentle micro-sonic vibration for "
            + "pockets', which do you prefer?",
          zh: "【关键二选一】在刷牙体验上，您更偏爱“颗颗包围强力机械旋转感”还是“高频微细深入牙周袋的声波感”？"
        },
        options: [
          {
            text: {
              ja: "しっかり磨いた実感が強く得られる【丸型回転式】（ブラウン Oral-B）",
              en: "Intense clean feel: Round oscillating head (Oral-B)",
              zh: "刷完后齿面光滑如镜、爽净感强烈的【圆头旋转式】(欧乐-B)"
            },
            val: "prefer_rotate"
          },
          {
            text: {
              ja: "歯ぐきへの刺激がマイルドで奥まで届く【音波振動式】（パナソニック ドルツ等）",
              en: "Gentle mild vibration for gum pockets: Sonic (Panasonic Doltz)",
              zh: "温和轻柔直达牙龈深沟不刺激的【声波振动式】(松下Doltz等)"
            },
            val: "prefer_sonic"
          },
          {
            text: { ja: "まだ検討中 / こだわらない", en: "Still Deciding", zh: "暂未决定 / 无特殊要求" },
            val: "pending"
          }
        ]
      },
      {
        id: "ex_water_flosser_type",
        title: {
          ja: "ジェットウォッシャー（口腔洗浄器）をお選びの場合、「お風呂で使えるコードレス」と「水補給いらずの大容量据置型」はどちらが良いですか？",
          en: "For water flossers, do you prefer 'Waterproof Cordless for Shower' or 'High-Capacity Countertop'?",
          zh: "关于冲牙器机型，您更倾向“可在洗澡洗漱时随意移动的防水手持款”还是“大水箱免频繁添水的台面家用款”？"
        },
        options: [
          {
            text: {
              ja: "お風呂で水はねを気にせず使える【防水コードレス型】（EW-DJ55等）",
              en: "Cordless & waterproof for bath use without mess (EW-DJ55)",
              zh: "洗澡时使用防飞溅、收纳利落的【防水无线便携款】(EW-DJ55等)"
            },
            val: "prefer_cordless_floss"
          },
          {
            text: {
              ja: "水を途中で足さずにじっくり家族で洗える【大容量据置型】（EW-DJ75等）",
              en: "Large tank for continuous family use without refills (EW-DJ75)",
              zh: "一箱水冲洗全口无需中途添水的【大水箱台式款】(EW-DJ75等)"
            },
            val: "prefer_tank_floss"
          },
          {
            text: { ja: "口腔洗浄器以外またはこだわらない", en: "Non-flosser or no preference", zh: "不选冲牙器或无特定偏好" },
            val: "floss_na"
          }
        ]
      }
    ];
  var D = ie,
    w = { ja: 0, en: 1, zh: 2 },
    m = function () {
      return typeof currentLang < "u" && currentLang || "ja";
    },
    q = function (e) {
      return typeof e == "string" ? e : e && (e[m()] || e.ja) || "";
    },
    g = function (e) {
      var t = Math.round(e),
        r = Math.pow(10, Math.max(0, String(t).length - 2)),
        a = (Math.round(t / r) * r).toLocaleString("ja-JP");
      return ["約" + a + "円", "approx. ¥" + a, "约" + a + "日元"][w[m()]];
    },
    ue = function (e, r, t) {
      return Math.max(r, Math.min(t, e));
    },
    b = document.getElementById("tb-app"),
    d,
    H = {
      back: ["← 一覧へ", "← Back to list", "← 返回列表"],
      title: ["電動歯ブラシ相談", "Toothbrush Advisor", "电动牙刷顾问"],
      pill: [
        '該当<i id="tb-n">{0}</i>/{1}機種',
        '<i id="tb-n">{0}</i>/{1} match',
        '符合<i id="tb-n">{0}</i>/{1}款'
      ],
      step0: ["STEP 0 ・ まずは全体像", "STEP 0 · The big picture", "STEP 0 · 先看整体分类"],
      introH: [
        "電動歯ブラシは、大きく<em>7つのタイプ</em>に分かれます",
        "Electric toothbrushes fall into <em>7 types</em>",
        "电动牙刷大致分为<em>7种类型</em>"
      ],
      introP: [
        "タップでタイプごとの違いを確認できます。そのあと、まず<b>今回の状況</b>と使う方・電源をおたずねし、<b>お口と磨き方のヒアリング</b>（回答で質問が変わります）"
          + "→<b>譲れない1点</b>の順に進んで、店頭{0}機種から3機種に絞ります。ご予算は、候補をご覧になってからおたずねします。",
        "Tap a type to see how they differ. We first ask about <b>your situation</b>, the user and "
          + "power, then a <b>mouth and brushing interview</b> (questions adapt to your answers) and "
          + "your <b>#1 priority</b>, narrowing {0} in-store models to 3. We ask about budget after "
          + "showing the picks.",
        "点击类型查看区别。先询问<b>您目前的情况</b>、使用者与供电，再进行<b>口腔与刷牙访谈</b>（问题会随回答变化）和<b>最不可让步的一点</b>，从店内{0}款中选出3款。看完候选机型后再询问预算。"
      ],
      who: ["向く方", "Best for", "适合"],
      pro: ["強み", "Strengths", "优势"],
      con: ["注意", "Watch out", "注意"],
      price: ["価格帯", "Price", "价格带"],
      mdl: ["機種", "models", "款"],
      gt: ["まず知っておきたい「駆動方式」の違い", "Drive types explained", "先了解“驱动方式”的区别"],
      g1: ["丸型回転", "Round rotation", "圆头旋转"],
      g1d: [
        "丸いヘッドが歯1本ずつを包み、左右に回転・上下に振動。<b>歯垢除去力</b>が高く、磨いた実感が強い",
        "A round head cups each tooth, rotating and pulsing. Strong <b>plaque removal</b> and a clear “cleaned” feel",
        "圆形刷头逐颗包裹，左右旋转并上下脉动。<b>菌斑清除力</b>强，刷净感明显"
      ],
      g2: ["音波（ヨコ磨き）", "Sonic", "声波（横刷）"],
      g2d: [
        "毎分約31,000回の細かな振動。極細毛で<b>歯ぐき・歯周ポケット</b>にやさしい",
        "About 31,000 fine vibrations/min. Gentle on <b>gums and pockets</b> with ultra-fine bristles",
        "每分钟约31,000次细微振动，极细刷毛对<b>牙龈·牙周袋</b>温和"
      ],
      g3: ["口腔洗浄器", "Water flosser", "冲牙器"],
      g3d: [
        "水流で歯間を洗う別カテゴリ。ブラシの代わりではなく<b>併用</b>",
        "A separate category that flushes gaps with water. Used <b>with</b> a brush, not instead of one",
        "用水流冲洗齿缝的另一类产品，需与牙刷<b>配合</b>使用"
      ],
      g4: ["センサー・アプリ", "Sensor / App", "感应·APP"],
      g4d: [
        "力の入れすぎを光や音で警告。上位機はアプリで磨き残しを可視化",
        "Warns you with light or sound when you press too hard; top models map missed spots in an app",
        "用力过猛时以灯光或声音警示；高端款通过APP显示漏刷部位"
      ],
      src: [
        "※価格・在庫は売場で確認してください。評価は各機種の仕様・商品説明に基づく目安です。",
        "*Please confirm price and stock in store. Scores are guides based on each model’s specs.",
        "※价格与库存请以店内为准。评分依据各机型规格，仅供参考。"
      ],
      start: ["診断をはじめる →", "Start the consultation →", "开始诊断 →"],
      next2: ["後半の質問へ（こだわり） →", "On to Part 2 (preferences) →", "进入后半（偏好） →"],
      next3: ["最後の質問へ →", "Last question →", "进入最后一题 →"],
      prev: ["← ひとつ戻る", "← Previous", "← 上一步"],
      redo1: ["← 前半をやり直す", "← Redo Part 1", "← 重做前半"],
      redo2: ["← 後半をやり直す", "← Redo Part 2", "← 重做后半"],
      st1: ["前半｜はじめに・使う方と電源", "Part 1 | Start, user and power", "前半｜开始·使用者与供电"],
      st2: [
        "後半｜お口と磨き方のヒアリング（回答で質問が変わります）",
        "Part 2 | Your mouth and brushing (questions adapt to your answers)",
        "后半｜口腔与刷牙访谈（问题会随回答变化）"
      ],
      st3: ["最終｜譲れない1点", "Final | Your #1 priority", "最终｜最不可让步的一点"],
      r1t: ["前半の結果", "Part 1 results", "前半结果"],
      r1h: [
        "絶対条件で、<em>{0}機種</em>に絞り込みました",
        "Your must-haves leave <em>{0} models</em>",
        "按绝对条件筛选，剩余<em>{0}款</em>"
      ],
      r1a: ["タイプ別に残った機種数", "Models left by type", "各类型剩余款数"],
      r1b: ["外れた理由", "Why models dropped out", "被排除的原因"],
      none: ["対象外なし", "Nothing excluded", "无被排除"],
      ngc: ["{0}で{1}機種が対象外", "{1} out by {0}", "因{0}排除{1}款"],
      k_who: ["使う方", "User", "使用者"],
      k_cat: ["種類", "Category", "类别"],
      k_bud: ["予算", "Budget", "预算"],
      k_pw: ["電源", "Power", "供电"],
      k_sen: ["センサー", "Sensor", "感应"],
      r1w: [
        "⚠️ 条件にぴったり合う機種が3つ未満です。最終結果では条件外の近い機種も参考に表示します（赤字で明記）。",
        "⚠️ Fewer than 3 models fit perfectly. The final page also shows close matches outside your "
          + "conditions (marked in red).",
        "⚠️ 完全符合的机型不足3款，最终结果会另列接近的机型（以红字标注）。"
      ],
      r1r: [
        "残った機種の本体価格：<b>{0}〜{1}</b>",
        "Remaining models cost <b>{0}–{1}</b>",
        "剩余机型价格：<b>{0}～{1}</b>"
      ],
      r2t: ["後半の結果", "Part 2 results", "后半结果"],
      r2h: [
        "タイプごとの<em>違い</em>と、あなたの重み",
        "How types <em>differ</em>, and your weights",
        "各类型的<em>区别</em>与您的权重"
      ],
      r2p: [
        "条件に合う機種の平均点です（濃いほど得意・5点満点）。下のバーは、回答から決まった「何を重く評価するか」です。",
        "Average scores of the models that fit (darker = stronger, out of 5). The bars show what "
          + "your answers make us weigh most.",
        "符合条件机型的平均分（颜色越深越强，满分5）。下方条形为根据回答确定的“重点评价项”。"
      ],
      r2a: ["タイプ × 評価軸", "Type × criteria", "类型 × 评价维度"],
      r2b: ["あなたの重みづけ", "Your weighting", "您的权重"],
      r2c: ["タイプごとの特徴", "Features of each type", "各类型特点"],
      r2d: ["評価軸の見方", "What the criteria mean", "评价维度说明"],
      ft: ["最終結果", "Final result", "最终结果"],
      fh: ["あなたへのおすすめ<em>3機種</em>", "Your <em>top 3</em> picks", "为您推荐的<em>3款</em>"],
      fp: [
        "「譲れないポイント」を切り替えると、3機種のどれが最も強いかが変わります。",
        "Switch the “non-negotiable” criterion to see which of the 3 is strongest.",
        "切换“不可让步的要点”，可查看3款中哪一款最强。"
      ],
      rank: ["第{0}位", "No.{0}", "第{0}名"],
      win: ["{0}「{1}」を譲れないなら → {2}", "If “{1}” is non-negotiable → {2}", "若“{1}”不可让步 → {2}"],
      winb: [
        "この3機種の中ではここが最も強い項目です。",
        "This is the strongest of the three on that point.",
        "这3款中此项最强。"
      ],
      bestOf: ["3機種中で最強", "best of the 3", "3款中最强"],
      bestT: ["譲れないポイント別｜この3機種のベスト", "Best pick per priority", "按不可让步要点｜3款中的最佳"],
      cmpT: ["3機種の比較表", "Side-by-side", "3款对比表"],
      combo: ["併用おすすめ：口腔洗浄器", "Pair it with: water flosser", "搭配推荐：冲牙器"],
      comboP: [
        "歯ブラシが届かない歯間を水流で洗います（歯ブラシと併用）。",
        "Cleans between teeth with water; use together with your brush.",
        "用水流清洁牙刷够不到的齿缝（与牙刷配合使用）。"
      ],
      acc: ["あわせて選ばれている用品", "Popular accessories", "常一起购买的用品"],
      staffB: ["📸 スタッフに見せる（確認シート）", "📸 Show to staff (summary sheet)", "📸 出示给店员（确认单）"],
      again: ["最初からやり直す", "Start over", "重新开始"],
      ss: ["スタッフ確認用シート（電動歯ブラシ）", "Staff reference sheet (electric toothbrush)", "店员确认单（电动牙刷）"],
      ssn: [
        "※この画面をスクリーンショットしてスタッフにお見せください",
        "*Take a screenshot of this screen and show it to staff",
        "※请截图本页面并出示给店员"
      ],
      ss3: ["最終提案TOP3", "Final TOP 3", "最终推荐TOP3"],
      cond: ["条件外：{0}", "Not met: {0}", "不符条件：{0}"],
      match: ["適合度", "Match", "适合度"],
      rows: ["価格", "駆動方式", "動作", "センサー", "モード", "防水"],
      rowsN: [
        ["価格", "Price", "价格"],
        ["方式", "Drive", "驱动方式"],
        ["動作", "Motion", "动作"],
        ["センサー", "Sensor", "感应"],
        ["モード", "Modes", "模式"],
        ["防水", "Water", "防水"]
      ],
      pnone: ["まだ検討中 / こだわらない", "Still deciding / no preference", "暂未决定 / 无要求"],
      r_kid: [
        "子ども用を希望のため、大人用は対象外",
        "Kids model requested, so adult models are excluded",
        "您选择儿童款，成人款被排除"
      ],
      r_adult: ["子ども用（3歳〜）は大人向けの対象外", "Kids models (3+) are not for adults", "儿童款（3岁起）不适合成人"],
      r_catf: [
        "口腔洗浄器を希望のため、歯ブラシは対象外",
        "You asked for a water flosser, so brushes are excluded",
        "您想要冲牙器，牙刷被排除"
      ],
      r_catb: [
        "歯ブラシの順位には含めません（併用なら別提案）",
        "Not ranked with brushes (suggested separately if paired)",
        "不计入牙刷排名（搭配时另行推荐）"
      ],
      r_bud: ["本体{0}が予算の上限を超えます", "{0} exceeds your budget ceiling", "本体{0}超出预算上限"],
      r_pw: ["乾電池・USB式ではなく充電台式です", "Dock-charged, not battery/USB", "为底座充电款，非干电池/USB"],
      r_sen: ["押しつけ防止センサーがありません", "No pressure sensor", "没有压力感应"],
      r_app: ["アプリ連携はありません", "No app support", "不支持APP互联"],
      r_stn: ["専用のホワイトニング機能はありません", "No dedicated whitening mode", "无专用美白功能"],
      r_hv: [
        "力が強い方向けの最高評価センサーではありません",
        "Pressure sensing is not top grade for heavy brushers",
        "对用力大的人，压力感应不是最高等级"
      ],
      r_mth: ["お好みの駆動方式ではありません", "Not your preferred drive type", "不是您偏好的驱动方式"],
      o_bud: ["予算内（{0}）", "Within budget ({0})", "预算内（{0}）"],
      o_sen: ["押しつけ防止センサー搭載", "Pressure sensor included", "配备防压感应"],
      o_app: ["アプリ連携対応", "App support", "支持APP互联"],
      o_stn: ["ホワイトニング/ステイン対応", "Whitening / stain care", "支持美白/去渍"],
      o_mth: ["お好みの駆動方式です", "Matches your preferred drive", "符合您偏好的驱动方式"],
      o_pw: ["電池・USBで携帯しやすい", "Battery/USB, easy to carry", "干电池/USB，便于携带"]
    },
    s = function (e) {
      for (var r = H[e][w[m()]], t = 1; t < arguments.length; t++)
        r = r.split("{" + (t - 1) + "}").join(arguments[t]);
      return r;
    },
    he = {
      entry_budget_assist: {
        l: "e",
        n: ["エントリー・お試し", "Entry / trial", "入门·体验"],
        w: ["まず電動を試したい方・出張や旅行の予備", "First-timers; travel backup", "初次尝试电动牙刷、出差旅行备用"],
        p: ["470円〜と安く、乾電池式なら充電不要", "From ¥470; battery models need no charger", "低至470日元，干电池款无需充电"],
        c: [
          "センサーやアプリはなく、歯周ポケットのケアは控えめ",
          "No sensor or app; modest pocket care",
          "无压力感应与APP，牙周袋护理较弱"
        ]
      },
      sonic_pocket_doltz: {
        l: "s",
        n: ["音波・ヨコ磨き（ドルツ他）", "Sonic horizontal (Doltz etc.)", "声波·横刷（Doltz等）"],
        w: ["歯ぐきが気になる・やさしく磨きたい方", "Those with sensitive gums", "牙龈敏感、想轻柔刷牙的人"],
        p: [
          "極細毛と細かな横振動で歯周ポケットまでやさしく届く",
          "Ultra-fine bristles and gentle horizontal vibration reach the pockets",
          "极细刷毛与细微横向振动，温和深入牙周袋"
        ],
        c: ["丸型回転式ほどの「ゴシゴシ感」は弱め", "Less scrubbing power than round rotation", "刷净感不及圆头旋转式"]
      },
      round_plaque_oralb: {
        l: "r",
        n: ["丸型回転（Oral-B）", "Round rotation (Oral-B)", "圆头旋转（Oral-B）"],
        w: ["歯垢をしっかり落としてツルツルにしたい方", "Those wanting maximum plaque removal", "想强力清除菌斑、追求光滑感的人"],
        p: [
          "丸いブラシが歯を1本ずつ包み込み、歯垢除去力が高い",
          "The round head cups each tooth for top plaque removal",
          "圆形刷头逐颗包裹，菌斑清除力强"
        ],
        c: [
          "歯ぐきが弱い方は力加減に注意（センサー付き推奨）",
          "Mind your pressure if gums are weak (pick a sensor model)",
          "牙龈脆弱者需注意力度（建议选带感应款）"
        ]
      },
      sonic_water_flow_philips: {
        l: "w",
        n: ["音波水流（ソニッケアー）", "Sonic fluid (Sonicare)", "声波水流（Sonicare）"],
        w: ["歯間や着色汚れまで広く磨きたい方", "Those wanting gaps and stains cleaned", "想兼顾齿缝与色渍清洁的人"],
        p: [
          "約31,000ストロークの音波水流で歯間までやさしく洗い流す",
          "About 31,000 strokes/min of fluid action flushes between teeth",
          "每分钟约31,000次声波水流温和冲刷齿间"
        ],
        c: [
          "上位機は高価。入門機はモード数が少ない",
          "Top models are pricey; entry models have few modes",
          "高端款较贵，入门款模式较少"
        ]
      },
      premium_ai_smart: {
        l: "p",
        n: ["最高峰・AI/スマート", "Flagship AI / smart", "旗舰·AI/智能"],
        w: [
          "磨き残しを可視化し、最高の機能を求める方",
          "Those wanting live guidance and top features",
          "想可视化漏刷、追求顶级功能的人"
        ],
        p: [
          "W音波・磁気駆動に加え、アプリやスタンドで磨き残しと圧力をリアルタイム指導",
          "Dual-sonic / magnetic drive plus live coaching by app or stand",
          "双声波/磁驱动，配合APP或底座实时指导漏刷与力度"
        ],
        c: ["3.5〜5.8万円と高価", "Expensive: ¥35k–58k", "价格较高：3.5～5.8万日元"]
      },
      water_flosser_interdental: {
        l: "f",
        n: ["口腔洗浄器（水流）", "Water flosser", "冲牙器（水流）"],
        w: ["歯間の詰まりや歯周ポケットの汚れが気になる方", "Those with food trapped between teeth", "牙缝易塞食物、牙周袋易藏污的人"],
        p: ["ブラシが届かない歯間を超音波水流で洗い流す", "Water jets clean gaps bristles cannot reach", "水流冲洗刷毛够不到的齿缝"],
        c: [
          "歯ブラシの代わりにはならない（併用が前提）",
          "Does not replace a toothbrush (use together)",
          "不能替代牙刷（需配合使用）"
        ]
      },
      kids_children_care: {
        l: "k",
        n: ["子ども用（3歳〜）", "Kids (age 3+)", "儿童款（3岁起）"],
        w: ["3歳以上のお子さま", "Children aged 3 and up", "3岁以上的儿童"],
        p: [
          "やわらか極細毛と楽しいタイマーで習慣づくり",
          "Extra-soft bristles and a fun timer build the habit",
          "柔软极细刷毛与趣味计时培养习惯"
        ],
        c: ["大人の本格ケアには不向き", "Not for adult-level care", "不适合成人深度护理"]
      }
    },
    C = oe.map(function (e) {
      return { id: e.id, i: he[e.id] };
    }),
    fe = function (e) {
      return C.filter(function (r) {
        return r.id === e.groupId;
      })[0];
    },
    O = function (e) {
      return e.i.n[w[m()]];
    },
    k = [
      [
        "plaque",
        ["歯垢除去力", "Plaque removal", "菌斑清除"],
        "🪥",
        [
          "歯垢をかき落とす力（丸型回転が得意）",
          "How well it scrubs plaque (round rotation is strong)",
          "清除菌斑的能力（圆头旋转擅长）"
        ]
      ],
      [
        "gum",
        ["歯ぐきへのやさしさ", "Gum gentleness", "护龈温和度"],
        "🌸",
        [
          "刺激の少なさ（極細毛・音波が得意）",
          "Low irritation (fine bristles and sonic are strong)",
          "刺激小（极细毛与声波擅长）"
        ]
      ],
      [
        "pocket",
        ["ポケット・歯間", "Pockets & gaps", "牙周袋·齿缝"],
        "💧",
        [
          "歯周ポケットや歯間に届く力（水流・音波が得意）",
          "Reach into pockets and gaps (water and sonic are strong)",
          "深入牙周袋与齿缝的能力（水流与声波擅长）"
        ]
      ],
      [
        "press",
        ["力加減サポート", "Pressure support", "力度保护"],
        "🚦",
        ["押しつけ防止センサーの有無と精度", "Presence and quality of pressure sensing", "防压感应的有无与精度"]
      ],
      [
        "smart",
        ["アプリ・多機能", "App & features", "APP·多功能"],
        "📱",
        ["アプリ連携とモード数", "App connectivity and number of modes", "APP互联与模式数量"]
      ],
      ["price", ["手頃さ", "Affordability", "价格实惠"], "💴", ["本体価格の安さ", "Low purchase price", "本体价格低"]]
    ],
    z = function (e) {
      return e[1][w[m()]];
    },
    G = function (e) {
      return e[3][w[m()]];
    },
    me = [
      ["音波振動ハブラシ ドルツ", "Doltz Sonic Toothbrush", "Doltz 声波牙刷"],
      ["W音波振動ハブラシ ドルツ", "Doltz Dual-Sonic", "Doltz 双声波牙刷"],
      ["スマート ドルツ", "Smart Doltz", "智能 Doltz"],
      ["ジェットウォッシャー ドルツ", "Doltz Jet Washer", "Doltz 喷射冲牙器"],
      ["オムロン 音波式電動歯ブラシ", "OMRON Sonic Toothbrush", "欧姆龙声波电动牙刷"],
      ["ソニッケアー ダイヤモンドクリーン", "Sonicare DiamondClean", "Sonicare 钻石系列"],
      ["ソニッケアー", "Sonicare", "Sonicare"],
      ["シリーズ", " Series", " 系列"],
      ["プロソニックコンパクト", "Prosonic Compact", "Prosonic 便携款"],
      ["ブラックコントロール", "Black Control", "Black Control"],
      ["すみずみクリーンキッズ プレミアム", "Sumizumi Clean Kids Premium", "Sumizumi Clean 儿童款"],
      ["すみずみクリーン", "Sumizumi Clean ", "Sumizumi Clean "],
      ["スミズミクリーン", "Sumizumi Clean ", "Sumizumi Clean "],
      ["ジェットクリーン スマート", "Jet Clean Smart", "Jet Clean 智能款"],
      ["音波式", "sonic", "声波式"],
      ["子ども用回転式", "kids rotating", "儿童旋转式"],
      ["回転式", "rotating", "旋转式"],
      ["充電式", "rechargeable ", "充电式"],
      ["乾電池", "battery", "干电池"],
      ["リニア", "linear", "线性"],
      ["マルチアクション", "multi-action", "多维"],
      ["3D丸型回転", "3D round oscillating", "3D圆头旋转"],
      ["磁気駆動", "Magnetic drive", "磁驱动"],
      ["最上位", " top", "旗舰"],
      ["最高峰", "flagship", "旗舰"],
      ["ハイグレード", "high-grade", "高端"],
      ["W音波振動", "Dual sonic", "双声波振动"],
      ["2モーター", "2 motors", "双电机"],
      ["口腔洗浄器", "water flosser", "冲牙器"],
      ["携帯型", "portable ", "便携式"],
      ["コードレス", "cordless", "无线"],
      ["大容量据置", "countertop tank", "大容量台式"],
      ["歳〜", "+", "岁起"],
      ["毎分約", "~", "每分钟约"],
      ["ストローク", " strokes/min", "次"],
      ["タタキ振動", "tapping vibration", "敲击振动"],
      ["ヨコ磨き", "horizontal brushing", "横向刷"],
      ["丸型回転", "Round oscillation", "圆头旋转"],
      ["(ソフト)", " (soft)", "（柔软）"],
      ["上下振動＋左右反転", "Pulsation + oscillation", "上下脉动+左右旋转"],
      ["遠心マイクロモーション", "Centrifugal micro-motion", "离心微动"],
      ["タテ・ヨコ立体微振動", "3D micro-vibration", "纵横立体微振动"],
      ["超音波水流", "Ultrasonic water jet", "超声波水流"],
      ["パルス水流", "Pulse water jet", "脉冲水流"],
      ["＋", " + ", "＋"],
      ["(クリーン/やわらか/ホワイト)", " (Clean/Gentle/Whitening)", "（清洁/柔护/美白）"],
      ["(クリーン)", " (Clean)", "（清洁）"],
      ["(やわらか)", " (gentle)", "（柔护）"],
      ["アプリカスタマイズ", "App-customizable", "APP自定义"],
      ["なし", "None", "无"],
      ["(タイマー付)", " (with timer)", "（带计时）"],
      ["スマート押しつけ防止センサー", "Smart pressure sensor", "智能防压感应"],
      ["押しつけ＋角度センサー", "Pressure + angle sensor", "防压+角度感应"],
      ["押しつけ防止センサー", "Pressure sensor", "防压感应"],
      ["過圧ストッパー", "Pressure stopper", "过压自动减速"],
      ["過圧防止センサー", "Pressure sensor", "过压保护感应"],
      ["過圧配慮設計", "Pressure-safe design", "过压防护设计"],
      ["マグネットハンドル", "Magnetic handle", "磁吸手柄"],
      ["IPX7お風呂使用可", "IPX7 (bath-safe)", "IPX7（可洗澡时用）"],
      ["IPX7完全防水", "IPX7 waterproof", "IPX7完全防水"],
      ["IPX7防水", "IPX7 waterproof", "IPX7防水"],
      ["生活防水", "Splash-proof", "生活防水"],
      ["完全防水", "Fully waterproof", "完全防水"],
      ["本体防滴", "Drip-proof body", "本体防滴"]
    ].sort(function (e, r) {
      return r[0].length - e[0].length;
    }),
    ge = {
      PHILIPS: ["PHILIPS", "PHILIPS", "飞利浦"],
      Panasonic: ["Panasonic", "Panasonic", "松下"],
      OMRON: ["OMRON", "OMRON", "欧姆龙"],
      "Oral-B": ["Oral-B", "Oral-B", "欧乐-B"]
    };
  function x(e) {
    var r = w[m()];
    if (!r)
      return e;
    var t = e;
    return t = t.replace(/(\d+)モード/g, function (n, a) {
      return r === 1 ? a + (+a == 1 ? " mode" : " modes") : a + "种模式";
    }).replace(/(\d+)段階強さ/g, function (n, a) {
      return r === 1 ? a + " intensity levels" : a + "档强度";
    }).replace(/水圧(\d+)段階調節/g, function (n, a) {
      return r === 1 ? "Water pressure: " + a + " levels" : "水压" + a + "档";
    }).replace(/(\d+)段階モード/g, function (n, a) {
      return r === 1 ? a + "-level modes" : a + "档模式";
    }),
      me.forEach(function (n) {
        t = t.split(n[0]).join(n[r]);
      }),
      r === 1 && (t = t.replace(/(\S)\(/g, "$1 (").replace(/\s+\)/g, ")").replace(/\( /g, "(")),
      t = t.replace(/\s{2,}/g, " ").trim(),
      r === 1 ? t.charAt(0).toUpperCase() + t.slice(1) : t;
  }
  var M = function (e) {
    return (ge[e.maker] || [e.maker, e.maker, e.maker])[w[m()]];
  },
    S = function (e) {
      return x(e.name);
    },
    be = ce.concat(de, pe, _NQ),
    A = function (e) {
      return be.filter(function (r) {
        return r.id === e;
      })[0];
    },
    ve = A("q10_priority");
  ve.options.splice(
    4,
    0,
    {
      text: {
        ja: "力の入れすぎを防ぐセンサー・力加減のサポート",
        en: "Pressure-sensing support to avoid pressing too hard",
        zh: "防止用力过度的压力感应与力度保护"
      },
      val: "p_press"
    },
    {
      text: {
        ja: "アプリ連携・多機能（磨き残しの可視化）",
        en: "App and smart features (see missed spots)",
        zh: "APP互联与智能功能（可视化漏刷）"
      },
      val: "p_smart"
    }
  );
  var P = {
    1: ["sit", "q1_target_user", "q8_power_type"],
    2: [
      "q2_main_trouble",
      "worry",
      "why",
      "gum2",
      "q3_water_floss_need",
      "q4_brush_pressure",
      "q6_brushing_method",
      "q7_sensor_app",
      "q9_whitening_care",
      "ex_water_flosser_type"
    ],
    3: ["q10_priority"]
  },
    _e = {
      sit: [
        "初めての方・買い替えの方・贈り物の方で、このあとの質問が変わります。",
        "First-timers, upgraders and gift-givers get different follow-up questions.",
        "首次使用、更换、送礼的顾客，后续问题会有所不同。"
      ],
      worry: [
        "不安な点に合わせて、重視する評価軸を調整します。",
        "Your concern decides which scores count most.",
        "根据担心的点调整重点评价项。"
      ],
      why: [
        "不満の理由に合わせて、重視する評価軸を調整します。",
        "Your complaint decides which scores count most.",
        "根据不满的原因调整重点评价项。"
      ],
      gum2: [
        "歯ぐきの状態に合わせて、やさしさ・ポケットケア・力加減のサポートを重く評価します。気になる症状が続くときは歯科医院でご相談ください。",
        "Gentleness, pocket care and pressure support are weighted to match. If symptoms persist, "
          + "please see a dentist.",
        "据此加重温和度、牙周袋护理与力度保护。症状持续请咨询牙科医生。"
      ],
      q1_target_user: [
        "子ども用は専用の極細・やわらか設計です。大人用と分けて絞り込みます。",
        "Kids models have dedicated soft, extra-fine heads, so they are filtered separately from adult models.",
        "儿童款为专用柔软极细刷头，将与成人款分开筛选。"
      ],
      q3_water_floss_need: [
        "口腔洗浄器は歯ブラシの代わりではなく、歯間を水流で洗う別カテゴリです。「両方」を選ぶと、歯ブラシ3機種に加えて洗浄器も1台提案します。",
        "A water flosser is a separate category that cleans between teeth; it does not replace "
          + "brushing. Choose “both” and we add one flosser to your top 3 brushes.",
        "冲牙器是另一类产品，用水流清洁齿缝，不能替代刷牙。选“两者都要”会在3款牙刷外再推荐1款冲牙器。"
      ],
      q5_budget: [
        "上限を超える機種は対象外にします（絶対条件として扱います）。",
        "Models above your ceiling are excluded (treated as a hard condition).",
        "超出预算上限的机型将被排除（作为绝对条件）。"
      ],
      q8_power_type: [
        "乾電池・USB式は携帯向きですが機種は限られます。「持ち歩き優先」を選ぶと充電台式が対象外になります。",
        "Battery/USB models are portable but few. Choosing portable excludes dock-charged models.",
        "干电池/USB款便于携带但款式有限。选便携优先将排除底座充电款。"
      ],
      q7_sensor_app: [
        "「センサー必須」を選ぶと、押しつけ防止センサーのない機種は対象外になります。アプリ連携は後で点数に反映します。",
        "“Sensor required” excludes models without pressure sensing. App support is scored later.",
        "选“必须有感应”将排除无压力感应的机型；APP互联在后面计分。"
      ],
      q2_main_trouble: [
        "お悩みに合う評価軸を重く評価します。",
        "Your main concern decides which scores count most.",
        "您最在意的问题决定哪些评分权重更高。"
      ],
      q4_brush_pressure: [
        "強く磨く方は、歯ぐき下がりを防ぐセンサーと歯ぐきへのやさしさを重く評価します。",
        "Heavy brushers get more weight on pressure sensing and gum gentleness.",
        "刷牙用力大的人，将更看重压力感应与护龈性。"
      ],
      q6_brushing_method: [
        "回転式は歯を1本ずつ包んで強く落とし、音波式は細かな高速振動でやさしく磨きます。好みの方式を加点します。",
        "Rotation wraps each tooth for a stronger clean; sonic uses fine, fast vibration and is "
          + "gentler. Your pick earns a bonus.",
        "旋转式逐颗包裹、清洁力强；声波式细微高频振动、更温和。符合偏好的会加分。"
      ],
      q9_whitening_care: [
        "専用のホワイト/ステインモードやブラシがあるのは一部の機種だけです。",
        "Only a few models have dedicated whitening / stain modes or heads.",
        "只有部分机型配有专用美白/去渍模式或刷头。"
      ],
      ex_water_flosser_type: [
        "お風呂で使えるコードレスか、水補給いらずの大容量据置か。",
        "Bath-safe cordless, or a big countertop tank?",
        "可洗澡用的无线款，还是免频繁加水的大水箱台式款。"
      ],
      q10_priority: [
        "選んだ軸の評価を約2倍にして最終順位を決めます。最終画面で軸を切り替えて見比べもできます。",
        "The chosen criterion counts about double in the final ranking, and you can switch criteria on the next page.",
        "所选维度在最终排名中权重约翻倍，结果页还可切换维度对比。"
      ]
    },
    Q = function (e) {
      return P[e].filter(function (r) {
        return !_SH[r] || _SH[r]();
      }).map(A);
    },
    we = function (e) {
      return P[1].concat(P[2], P[3]).indexOf(e.id);
    },
    u = function (e) {
      var r = d.a[e];
      if (r == null || _SH[e] && !_SH[e]())
        return null;
      var t = A(e).options[r].val;
      return t === "pending" ? null : t;
    },
    V = function (e) {
      var r = d.a[e];
      return r == null ? "—" : q(A(e).options[r].text);
    },
    $ = function (e) {
      return q(e.title).replace(/^Q\d+\.\s*/, "");
    },
    Z = { o14: 1, o18: 1, o19: 1, o20: 1 },
    ee = { o4: 1, o16: 1, o19: 1 },
    N = { "◎": 5, "◯": 3.5, "△": 2, "✕": 1 };
  D.forEach(function (e) {
    e.pw = /乾電池/.test(e.type) ? "bat" : e.id === "o23" ? "usb" : "chg",
      e.fam = e.groupId === "water_flosser_interdental"
        ? "wf"
        : /回転|磁気駆動/.test(e.type) ? "rot" : "sonic";
  });
  var B = function (e) {
    return e.groupId === "water_flosser_interdental";
  };
  function ye(e) {
    var r = /(\d+)モード/.exec(e.modes),
      t = r ? +r[1] : /(\d+)段階/.exec(e.modes) ? +/(\d+)段階/.exec(e.modes)[1] : 1,
      n = Z[e.id] ? 5 : B(e) ? t >= 10 ? 3.5 : 2.5 : t >= 5 ? 4 : t >= 3 ? 3 : 1.5,
      a = e.price <= 3500
        ? 5
        : e.price <= 7e3
          ? 4.4
          : e.price <= 12e3 ? 3.6 : e.price <= 2e4 ? 2.8 : e.price <= 36e3 ? 2 : 1.3;
    return {
      plaque: N[e.grades.plaque],
      gum: N[e.grades.gum],
      pocket: N[e.grades.pocket],
      press: N[e.grades.sensor],
      smart: n,
      price: a
    };
  }
  var ke = { b_low: 5e3, b_mid: 15e3, b_high: 35e3, b_top: 1e9 };
  function ze(e, r) {
    var t = [],
      n = [],
      a = [],
      i = u("q1_target_user"),
      o = u("q3_water_floss_need"),
      p = ke[u("q5_budget")],
      f = u("q8_power_type"),
      y = u("q7_sensor_app"),
      l = e.groupId === "kids_children_care";
    if (
      r
        || (
          i === "u_kids" && !l && t.push({ k: "who", r: "kid", a: [] }),
            i !== "u_kids" && l && t.push({ k: "who", r: "adult", a: [] })
        ),
        r
          ? B(e) || t.push({ k: "cat", r: "catf", a: [] })
          : o === "wf_must"
            ? B(e) || t.push({ k: "cat", r: "catf", a: [] })
            : B(e) && t.push({ k: "cat", r: "catb", a: [] }),
        p != null
          && (
            e.price > p
              ? t.push({ k: "bud", r: "bud", a: [g(e.price)] })
              : p < 1e9 && a.push({ r: "o_bud", a: [g(e.price)] })
          ),
        !r
    ) {
      f === "p_battery"
        && (e.pw === "chg" ? t.push({ k: "pw", r: "pw", a: [] }) : a.push({ r: "o_pw", a: [] })),
        y === "s_sensor_must"
          && (
            e.grades.sensor === "✕"
              ? t.push({ k: "sen", r: "sen", a: [] })
              : a.push({ r: "o_sen", a: [] })
          ),
        y === "s_app_want"
          && (Z[e.id] ? a.push({ r: "o_app", a: [] }) : n.push({ r: "r_app", a: [] })),
        u("q9_whitening_care") === "w_stain_want"
          && (ee[e.id] ? a.push({ r: "o_stn", a: [] }) : n.push({ r: "r_stn", a: [] })),
        u("q4_brush_pressure") === "pr_heavy"
          && e.grades.sensor !== "◎"
          && !B(e)
          && n.push({ r: "r_hv", a: [] });
      var v = u("q6_brushing_method"),
        _ = v === "m_rotate" ? "rot" : v === "m_sonic" ? "sonic" : null;
      _ && !B(e) && (e.fam !== _ ? n.push({ r: "r_mth", a: [] }) : a.push({ r: "o_mth", a: [] }));
    }
    return { ng: t, wn: n, ok: a };
  }
  var F = function (e) {
    return s.apply(null, [/^[ow]_|^r_/.test(e.r) ? e.r : "r_" + e.r].concat(e.a));
  };
  function te() {
    return _TX(te0());
  }
  function te0() {
    var e = { plaque: 1.5, gum: 1.5, pocket: 1.2, press: 1, smart: .8, price: 1.5 },
      r = u("q2_main_trouble"),
      t = {
        p_deep_clean: "plaque",
        p_gentle_pocket: "gum",
        p_water_floss: "pocket",
        p_cost_value: "price",
        p_press: "press",
        p_smart: "smart"
      }[u("q10_priority")];
    r === "t_plaque" && (e.plaque += 2.5),
      r === "t_gum_pocket" && (e.gum += 1.5, e.pocket += 2),
      r === "t_stain" && (e.plaque += 1.5),
      r === "t_interdental" && (e.pocket += 3),
      u("q4_brush_pressure") === "pr_heavy" && (e.press += 2.5, e.gum += 1);
    var n = u("q7_sensor_app");
    n === "s_app_want" && (e.smart += 3),
      n === "s_simple" && (e.smart = .2),
      n === "s_sensor_must" && (e.press += 1.5);
    var a = u("q5_budget");
    return a === "b_low" && (e.price += 2), a === "b_top" && (e.price = .4), t && (e[t] *= 2.2), e;
  }
  function W(e) {
    var r = te(),
      t = u("q6_brushing_method"),
      n = t === "m_rotate" ? "rot" : t === "m_sonic" ? "sonic" : null;
    return D.map(function (a) {
      var i = ze(a, e), o = ye(a), p = 0, f = 0;
      k.forEach(function (l) {
        p += r[l[0]] * o[l[0]] / 5, f += r[l[0]];
      });
      var y = (u("q9_whitening_care") === "w_stain_want" && ee[a.id] ? 8 : 0)
        + (n && a.fam === n ? 6 : 0)
        + (u("q1_target_user") === "u_travel" && a.pw !== "chg" ? 5 : 0);
      return {
        p: a,
        h: i,
        a: o,
        sc: ue(Math.round(100 * p / f - i.wn.length * 8 - i.ng.length * 40 + y - _BP(a)), 1, 99),
        t: fe(a)
      };
    });
  }
  var E = function (e) {
    return e.filter(function (r) {
      return !r.h.ng.length;
    });
  },
    re = function (e) {
      return e.slice().sort(function (r, t) {
        return t.sc - r.sc;
      });
    };
  function ae() {
    for (var e = re(W(!1)), r = E(e).slice(0, 3), t = 0; r.length < 3 && t < e.length; t++)
      r.indexOf(e[t]) < 0 && r.push(e[t]);
    var n = u("q3_water_floss_need") === "wf_combo" ? E(re(W(!0)))[0] : null;
    return { all: e, top: r, fl: n };
  }
  var J = function (e, r) {
    return r.slice().sort(function (t, n) {
      return n.a[e] - t.a[e] || n.sc - t.sc;
    })[0];
  };
  function xe(e, r) {
    var t = ' style="--dl:-' + (r * .5).toFixed(1) + 's"',
      n = function (o) {
        return '<rect x="44" y="46" width="12" height="46" rx="6" fill="' + o + '"/>';
      },
      a = function (o, p, f) {
        return '<rect x="'
          + o
          + '" y="'
          + p
          + '" width="'
          + f
          + '" height="5" rx="2" fill="#fff" opacity=".85"/>';
      },
      i = '<svg class="tb-svg" viewBox="0 0 100 100">';
    return e === "e"
      && (
        i += n("#94a3b8")
          + '<rect x="42" y="14" width="16" height="30" rx="7" fill="#cbd5e1"/>'
          + a(45, 18, 10)
          + a(45, 27, 10)
          + '<rect class="tb-tw"'
          + t
          + ' x="70" y="60" width="16" height="9" rx="2" fill="#22c55e"/><rect x="86" y="62.5" width="3" '
          + 'height="4" fill="#22c55e"/>'
      ),
      e === "s"
        && (
          i += n("#2563eb")
            + '<rect x="40" y="10" width="20" height="36" rx="9" fill="#60a5fa"/>'
            + a(44, 16, 12)
            + a(44, 26, 12)
            + '<g class="tb-wave"'
            + t
            + '><path d="M28 18q-6 10 0 20M20 14q-9 14 0 28" fill="none" stroke="#2563eb" '
            + 'stroke-width="2.5" stroke-linecap="round"/><path d="M72 18q6 10 0 20M80 14q9 14 0 28" '
            + 'fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/></g>'
        ),
      e === "r"
        && (
          i += n("#dc2626")
            + '<g class="tb-osc"'
            + t
            + '><circle cx="50" cy="26" r="19" fill="#fecaca"/><circle cx="50" cy="26" r="13" fill="none" '
            + 'stroke="#dc2626" stroke-width="3" stroke-dasharray="4 4"/><circle cx="50" cy="26" r="5" '
            + 'fill="#dc2626"/></g>'
        ),
      e === "w"
        && (
          i += n("#0891b2")
            + '<rect x="40" y="10" width="20" height="36" rx="9" fill="#67e8f9"/>'
            + a(44, 16, 12)
            + a(44, 26, 12)
            + [0, 1, 2].map(function (o) {
              return '<circle class="tb-rise" style="--dl:-'
                + o * .7
                + 's" cx="'
                + (28 + o * 22)
                + '" cy="40" r="3.5" fill="#22d3ee"/>';
            }).join("")
        ),
      e === "p"
        && (
          i += n("#1e293b")
            + '<rect x="44" y="60" width="12" height="4" fill="#fbbf24"/><rect x="40" y="10" width="20" '
            + 'height="36" rx="9" fill="#475569"/>'
            + a(44, 16, 12)
            + a(44, 26, 12)
            + '<path class="tb-tw"'
            + t
            + ' d="M78 18l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#fbbf24"/><rect x="68" y="56" width="18" '
            + 'height="30" rx="4" fill="#fff" stroke="#475569" stroke-width="2"/><circle class="tb-tw"'
            + t
            + ' cx="77" cy="71" r="4" fill="#22c55e"/>'
        ),
      e === "f"
        && (
          i += '<rect x="26" y="46" width="34" height="46" rx="8" fill="#e0f2fe" stroke="#0ea5e9" '
            + 'stroke-width="2.5"/><rect class="tb-wave"'
            + t
            + ' x="29" y="62" width="28" height="27" rx="5" fill="#38bdf8"/><path d="M60 54h14q6 0 6-6v-8" '
            + 'fill="none" stroke="#0369a1" stroke-width="5" stroke-linecap="round"/>'
            + [0, 1, 2].map(function (o) {
              return '<circle class="tb-jet" style="--dl:-'
                + o * .4
                + 's" cx="82" cy="34" r="3" fill="#0ea5e9"/>';
            }).join("")
        ),
      e === "k"
        && (
          i += n("#ec4899")
            + '<circle cx="50" cy="28" r="15" fill="#fbcfe8"/><circle cx="50" cy="28" r="9" fill="none" '
            + 'stroke="#ec4899" stroke-width="3" stroke-dasharray="3 3"/><path class="tb-bn"'
            + t
            + ' d="M78 14l3 7 7 1-5 5 1 8-6-4-6 4 1-8-5-5 7-1z" fill="#fbbf24"/>'
        ),
      i + "</svg>";
  }
  function Pe(e, r) {
    var t = performance.now(), n = +e.textContent || 0;
    (function a(i) {
      var o = Math.min(1, (i - t) / 450);
      e.textContent = Math.round(n + (r - n) * o), o < 1 && requestAnimationFrame(a);
    })(t);
  }
  var se = function () {
    return Object.keys(d.a).length ? E(W(!1)).length : D.length;
  };
  function je() {
    var e = document.getElementById("tb-n");
    e && Pe(e, se());
  }
  function T(e, r) {
    r || d.hist.push(d.v), d.v = e, d.back = !!r, U(), b.scrollTo({ top: 0 });
  }
  function U() {
    var e = d.v,
      r = "",
      t = 0,
      n = m(),
      a = '<select class="tb-sel" data-a="lang" aria-label="Language"><option value="ja"'
        + (n === "ja" ? " selected" : "")
        + '>日本語</option><option value="en"'
        + (n === "en" ? " selected" : "")
        + '>English</option><option value="zh"'
        + (n === "zh" ? " selected" : "")
        + ">中文</option></select>",
      i = '<div class="fr-top"><button class="fr-x" data-a="close">'
        + s("back")
        + "</button><b>"
        + s("title")
        + "</b>"
        + a
        + '<span class="fr-pill">'
        + s("pill", se(), D.length)
        + '</span></div><div class="fr-prog"><div id="tb-pg"></div></div>';
    if (e === "intro")
      r = qe(), t = 3;
    else if (e === "r1")
      r = Ie(), t = 40;
    else if (e === "r2")
      r = De(), t = 88;
    else if (e === "final")
      r = Be(), t = 100;
    else if (e === "staff")
      r = Oe(), t = 100;
    else {
      var o = Q(e.st)[e.i];
      r = Se(o, e), t = 5 + we(o) / 14 * 85;
    }
    b.className = "fr-root on" + (d.back ? " fr-back" : ""),
      b.setAttribute("aria-label", s("title")),
      b.innerHTML = i + '<div class="fr-wrap"><div class="fr-in">' + r + "</div></div>",
      requestAnimationFrame(function () {
        var p = document.getElementById("tb-pg");
        p && (p.style.width = t + "%");
      });
  }
  function qe() {
    var e = C.map(function (t, n) {
      var a = D.filter(function (p) {
        return p.groupId === t.id;
      }),
        i = a.map(function (p) {
          return p.price;
        }),
        o = w[m()];
      return '<div class="fr-card fr-up" style="--i:'
        + (n + 1)
        + '" data-a="type">'
        + xe(t.i.l, n)
        + "<h3>"
        + O(t)
        + "</h3><small>"
        + g(Math.min.apply(0, i))
        + "〜 ・ "
        + a.length
        + s("mdl")
        + '</small><div class="fr-more"><div><span>'
        + s("who")
        + "</span>"
        + t.i.w[o]
        + "</div><div><span>"
        + s("pro")
        + "</span>"
        + t.i.p[o]
        + "</div><div><span>"
        + s("con")
        + "</span>"
        + t.i.c[o]
        + "</div><div><span>"
        + s("price")
        + "</span>"
        + g(Math.min.apply(0, i))
        + "〜"
        + g(Math.max.apply(0, i))
        + "</div></div></div>";
    }).join(""),
      r = '<div class="fr-box fr-up" style="--i:8"><h3>'
        + s("gt")
        + '</h3><table class="tb-cmp">'
        + ["g1", "g2", "g3", "g4"].map(function (t) {
          return "<tr><th>" + s(t) + "</th><td>" + s(t + "d") + "</td></tr>";
        }).join("")
        + '</table><p class="tb-src">'
        + s("src")
        + "</p></div>";
    return '<span class="fr-tag fr-up">'
      + s("step0")
      + '</span><h1 class="fr-h1 fr-up" style="--i:1">'
      + s("introH")
      + '</h1><p class="fr-p fr-up" style="--i:2">'
      + s("introP", D.length)
      + '</p><div class="fr-types">'
      + e
      + "</div>"
      + r
      + '<button class="fr-btn" data-a="start">'
      + s("start")
      + "</button>";
  }
  function Se(e, r) {
    var t = Q(r.st),
      n = w[m()],
      a = e.options.map(function (i, o) {
        return '<button class="fr-opt fr-up'
          + (_RI(e) === o ? " rec" : "")
          + (d.a[e.id] === o ? " sel" : "")
          + '" style="--i:'
          + (o + 1)
          + '" data-a="pick" data-i="'
          + o
          + '"><span class="ck">'
          + (d.a[e.id] === o ? "✓" : "")
          + "</span>"
          + q(i.text)
          + "</button>";
      }).join("");
    return '<span class="fr-tag">'
      + s("st" + r.st)
      + '</span><div class="fr-q">'
      + _QI(e.id)
      + '<div class="no">Q'
      + (r.i + 1)
      + " / "
      + t.length
      + "</div><h2>"
      + $(e)
      + '</h2><div class="fr-hint">💡 '
      + _e[e.id][n]
      + "</div>"
      + a
      + '</div><button class="fr-btn s" data-a="back">'
      + s("prev")
      + "</button>";
  }
  function Ie() {
    var e = W(!1), r = E(e), t = {};
    e.forEach(function (o) {
      o.h.ng.forEach(function (p) {
        t[p.k] = (t[p.k] || 0) + 1;
      });
    });
    var n = C.map(function (o, p) {
      var f = e.filter(function (l) {
        return l.t === o;
      }),
        y = f.filter(function (l) {
          return !l.h.ng.length;
        }).length;
      return '<div class="fr-row fr-up" style="--i:'
        + p
        + '"><b style="width:11em">'
        + O(o)
        + '</b><div class="fr-bar'
        + (y ? "" : " g")
        + '"><i style="width:'
        + (f.length ? y / f.length * 100 : 0)
        + "%;--i:"
        + p
        + '"></i></div><span style="width:3.4em;text-align:right">'
        + y
        + "/"
        + f.length
        + "</span></div>";
    }).join(""),
      a = Object.keys(t).map(function (o) {
        return '<span class="fr-chip ng">' + s("ngc", s("k_" + o), t[o]) + "</span>";
      }).join("")
        || '<span class="fr-chip ok">' + s("none") + "</span>",
      i = r.map(function (o) {
        return o.p.price;
      });
    return '<span class="fr-tag">'
      + s("r1t")
      + '</span><h1 class="fr-h1">'
      + s("r1h", r.length)
      + '</h1><p class="fr-p">'
      + P[1].map(function (o) {
        return V(o);
      }).join(" ／ ")
      + '</p><div class="fr-box"><h3>'
      + s("r1a")
      + "</h3>"
      + n
      + '</div><div class="fr-box"><h3>'
      + s("r1b")
      + "</h3>"
      + a
      + (
        r.length
          ? '<p class="fr-p" style="margin:8px 0 0">'
            + s("r1r", g(Math.min.apply(0, i)), g(Math.max.apply(0, i)))
            + "</p>"
          : ""
      )
      + "</div>"
      + (r.length < 3 ? '<div class="fr-win">' + s("r1w") + "</div>" : "")
      + '<button class="fr-btn" data-a="next">'
      + s("next2")
      + '</button><button class="fr-btn s" data-a="back">'
      + s("redo1")
      + "</button>";
  }
  function De() {
    var e = W(!1),
      r = E(e),
      t = te(),
      n = Math.max.apply(
        0,
        k.map(function (l) {
          return t[l[0]];
        })
      ),
      a = w[m()],
      i = C.map(function (l) {
        var v = r.filter(function (_) {
          return _.t === l;
        });
        return {
          t: l,
          n: v.length,
          v: k.map(function (_) {
            return v.length
              ? v.reduce(function (L, c) {
                return L + c.a[_[0]];
              }, 0)
                / v.length
              : 0;
          })
        };
      }),
      o = '<div class="fr-heat" style="grid-template-columns:9em repeat(6,1fr);min-width:460px"><div class="hd"></div>'
        + k.map(function (l) {
          return '<div class="hd">' + l[2] + "<br>" + z(l) + "</div>";
        }).join("");
    i.forEach(function (l, v) {
      o += '<div class="rn">'
        + O(l.t)
        + '<br><small style="color:#94a3b8">'
        + l.n
        + s("mdl")
        + "</small></div>"
        + l.v.map(function (_, L) {
          return '<div style="--a:'
            + (_ ? (_ / 5 * .85).toFixed(2) : 0)
            + ";--i:"
            + (v * 6 + L)
            + ";color:"
            + (_ > 3.2 ? "#fff" : "#334155")
            + '">'
            + (_ ? _.toFixed(1) : "—")
            + "</div>";
        }).join("");
    }),
      o += "</div>";
    var p = k.map(function (l, v) {
      return '<div class="fr-row fr-up" style="--i:'
        + v
        + '"><b style="width:9em">'
        + l[2]
        + " "
        + z(l)
        + '</b><div class="fr-bar"><i style="width:'
        + t[l[0]] / n * 100
        + "%;--i:"
        + v
        + '"></i></div></div>';
    }).join(""),
      f = k.map(function (l) {
        return '<div style="font-size:.86rem;line-height:1.6;margin-bottom:4px"><b>'
          + l[2]
          + " "
          + z(l)
          + "</b>："
          + G(l)
          + "</div>";
      }).join(""),
      y = i.filter(function (l) {
        return l.n;
      }).map(function (l) {
        return '<div style="margin-bottom:8px;font-size:.86rem;line-height:1.6"><b>'
          + O(l.t)
          + "</b>："
          + l.t.i.p[a]
          + '。<span style="color:#b45309">'
          + l.t.i.c[a]
          + "</span></div>";
      }).join("");
    return '<span class="fr-tag">'
      + s("r2t")
      + '</span><h1 class="fr-h1">'
      + s("r2h")
      + '</h1><p class="fr-p">'
      + s("r2p")
      + '</p><div class="fr-box"><h3>'
      + s("r2a")
      + '</h3><div style="overflow-x:auto">'
      + o
      + '</div></div><div class="fr-box"><h3>'
      + s("r2b")
      + "</h3>"
      + p
      + '</div><div class="fr-box"><h3>'
      + s("r2c")
      + "</h3>"
      + y
      + '</div><div class="fr-box"><h3>'
      + s("r2d")
      + "</h3>"
      + f
      + '</div><button class="fr-btn" data-a="next">'
      + s("next3")
      + '</button><button class="fr-btn s" data-a="back">'
      + s("redo2")
      + "</button>";
  }
  var ne = function (e) {
    return [g(e.price), x(e.type), x(e.motion), x(e.sensor), x(e.modes), x(e.water)];
  };
  function Be() {
    var e = ae(),
      r = e.top,
      t = {
        p_deep_clean: "plaque",
        p_gentle_pocket: "gum",
        p_water_floss: "pocket",
        p_cost_value: "price",
        p_press: "press",
        p_smart: "smart"
      }[u("q10_priority")],
      n = d.ax || t || "plaque",
      a = k.filter(function (c) {
        return c[0] === n;
      })[0],
      i = J(n, r),
      o = w[m()],
      p = k.map(function (c) {
        return '<button data-a="ax" data-k="'
          + c[0]
          + '" class="'
          + (c[0] === n ? "on" : "")
          + '">'
          + c[2]
          + " "
          + z(c)
          + "</button>";
      }).join(""),
      f = '<div class="fr-win"><b>'
        + a[2]
        + " "
        + s("win", "", z(a), S(i.p)).replace(/^\s+/, "")
        + "</b>（"
        + M(i.p)
        + " / "
        + g(i.p.price)
        + "）<br>"
        + G(a)
        + "。"
        + s("winb")
        + "</div>",
      y = r.map(function (c, I) {
        var j = c.p,
          We = k.filter(function (h) {
            return J(h[0], r) === c && c.a[h[0]] >= 3.5;
          }).map(function (h) {
            return '<span class="fr-chip ok">' + h[2] + z(h) + "：" + s("bestOf") + "</span>";
          }).join(""),
          Ee = k.map(function (h, K) {
            return '<div class="fr-row" style="margin-bottom:5px"><b style="width:9em;'
              + (h[0] === n ? "color:#d97706" : "")
              + '">'
              + h[2]
              + " "
              + z(h)
              + '</b><div class="fr-bar"><i style="width:'
              + c.a[h[0]] / 5 * 100
              + "%;--i:"
              + K
              + (h[0] === n ? ";background:linear-gradient(90deg,#f59e0b,#f97316)" : "")
              + '"></i></div></div>';
          }).join(""),
          Te = c.h.ng.map(function (h) {
            return '<li class="n">' + s("cond", F(h)) + "</li>";
          }).concat(
            c.h.wn.map(function (h) {
              return '<li class="w">' + F(h) + "</li>";
            })
          ).concat(
            c.h.ok.slice(0, 3).map(function (h) {
              return "<li>" + F(h) + "</li>";
            })
          ).join(""),
          Le = H.rowsN.map(function (h, K) {
            return "<tr><td>" + h[w[m()]] + "</td><td>" + ne(j)[K] + "</td></tr>";
          }).join("");
        return '<div class="fr-rec fr-up'
          + (c === i ? " hi" : " dim")
          + '" style="--i:'
          + I
          + '"><span class="fr-rank">'
          + s("rank", I + 1)
          + " ・ "
          + O(c.t)
          + '</span><div class="fr-head"><div class="fr-ring"><svg width="62" height="62" viewBox="0 0 '
          + '62 62"><circle class="bg" cx="31" cy="31" r="26"/><circle class="fg" cx="31" cy="31" r="26" '
          + 'stroke-dasharray="'
          + (c.sc / 100 * 163.4).toFixed(1)
          + ' 164"/></svg><b>'
          + c.sc
          + '</b></div><div class="tb-mini">'
          + xe(c.t.i.l, I)
          + '</div><div><div class="fr-name">'
          + S(j)
          + '</div><div style="font-size:.8rem;color:#64748b">'
          + M(j)
          + " ／ "
          + j.model
          + '</div><div class="fr-price">'
          + g(j.price)
          + "</div></div></div><div>"
          + We
          + '</div><p class="fr-p" style="margin:6px 0">'
          + q(j.desc)
          + "</p>"
          + Ee
          + '<ul class="fr-ul">'
          + Te
          + '</ul><table class="fr-spec">'
          + Le
          + "</table></div>";
      }).join(""),
      l = k.map(function (c) {
        var I = J(c[0], r);
        return "<tr><td>"
          + c[2]
          + " "
          + z(c)
          + "</td><td><b>"
          + S(I.p)
          + "</b>（"
          + g(I.p.price)
          + "）</td></tr>";
      }).join(""),
      v = '<table class="fr-spec"><tr><td></td>'
        + r.map(function (c) {
          return "<td><b>" + S(c.p) + "</b></td>";
        }).join("")
        + "</tr>"
        + H.rowsN.map(function (c, I) {
          return "<tr><td>"
            + c[w[m()]]
            + "</td>"
            + r.map(function (j) {
              return "<td>" + ne(j.p)[I] + "</td>";
            }).join("")
            + "</tr>";
        }).join("")
        + "</table>",
      _ = e.fl
        ? '<div class="fr-box"><h3>💧 '
          + s("combo")
          + '</h3><p class="fr-p" style="margin-bottom:6px">'
          + s("comboP")
          + '</p><div class="fr-name">'
          + S(e.fl.p)
          + '</div><div style="font-size:.8rem;color:#64748b">'
          + M(e.fl.p)
          + " ／ "
          + e.fl.p.model
          + '</div><div class="fr-price">'
          + g(e.fl.p.price)
          + '</div><p class="fr-p" style="margin:6px 0 0">'
          + q(e.fl.p.desc)
          + "</p></div>"
        : "",
      L = le.map(function (c) {
        return '<div style="font-size:.86rem;margin-bottom:6px"><b>'
          + q(c.name)
          + "</b>（"
          + g(+c.price.replace(/\D/g, ""))
          + '）<br><span style="color:#64748b">'
          + q(c.desc)
          + "</span></div>";
      }).join("");
    return '<span class="fr-tag">'
      + s("ft")
      + '</span><h1 class="fr-h1">'
      + s("fh")
      + '</h1><p class="fr-p">'
      + s("fp")
      + '</p>'
      + _PN()
      + '<div class="fr-ax">'
      + p
      + "</div>"
      + f
      + y
      + _
      + _BUD()
      + _RT()
      + '<div class="fr-box"><h3>'
      + s("bestT")
      + '</h3><table class="fr-spec">'
      + l
      + '</table></div><div class="fr-box"><h3>'
      + s("cmpT")
      + '</h3><div style="overflow-x:auto">'
      + v
      + '</div></div><div class="fr-box"><h3>'
      + s("acc")
      + "</h3>"
      + L
      + '</div><button class="fr-btn k" data-a="staff">'
      + s("staffB")
      + '</button><button class="fr-btn s" data-a="back">'
      + s("prev")
      + '</button><button class="fr-btn s" data-a="restart">'
      + s("again")
      + "</button>";
  }
  function Oe() {
    var e = ae(),
      r = P[1].concat(P[2], P[3]),
      t = r.map(A).filter(function (a) {
        return d.a[a.id] != null;
      }).map(function (a) {
        return "<tr><td>"
          + $(a).replace(/[？?]$/, "").replace(/【.*?】/g, "")
          + "</td><td>"
          + V(a.id)
          + "</td></tr>";
      }).join(""),
      n = e.top.map(function (a, i) {
        return '<div style="margin-bottom:6px;font-size:.88rem"><b>'
          + s("rank", i + 1)
          + " "
          + S(a.p)
          + "</b>（"
          + M(a.p)
          + "）"
          + g(a.p.price)
          + "<br>"
          + x(a.p.type)
          + " ／ "
          + x(a.p.sensor)
          + " ／ "
          + s("match")
          + " "
          + a.sc
          + (
            a.h.ng.length
              ? '<br><span style="color:#dc2626">'
                + a.h.ng.map(function (o) {
                  return s("cond", F(o));
                }).join(" / ")
                + "</span>"
              : ""
          )
          + "</div>";
      }).join("")
        + (
          e.fl
            ? '<div style="font-size:.88rem"><b>💧 '
              + s("combo")
              + "</b>："
              + S(e.fl.p)
              + "（"
              + g(e.fl.p.price)
              + "）</div>"
            : ""
        );
    return '<div class="fr-ss"><div style="display:flex;justify-content:space-between;border-bottom:2px '
      + 'solid #111827;padding-bottom:6px;margin-bottom:8px"><b style="background:#111827;'
      + 'color:#fbbf24;padding:2px 8px;border-radius:4px;font-size:.86rem">'
      + s("ss")
      + '</b></div><p style="font-size:.8rem;color:#d90429;font-weight:700;margin-bottom:6px">'
      + s("ssn")
      + "</p><table>"
      + t
      + '</table>'
      + _PN()
      + '<div style="font-size:.88rem;font-weight:800;margin:6px 0 4px">'
      + s("ss3")
      + "</div>"
      + n
      + '</div><button class="fr-btn s" data-a="back">'
      + s("prev")
      + "</button>";
  }
  var _SH = {
    worry: function () {
      return u("sit") === "sit_first";
    },
    why: function () {
      return u("sit") === "sit_replace";
    },
    gum2: function () {
      return u("q2_main_trouble") === "t_gum_pocket" && u("q1_target_user") !== "u_kids";
    },
    q3_water_floss_need: function () {
      var t = u("q2_main_trouble");
      return u("q1_target_user") !== "u_kids" && (t === "t_interdental" || t === "t_gum_pocket");
    },
    q4_brush_pressure: function () {
      return u("q1_target_user") !== "u_kids" && u("q3_water_floss_need") !== "wf_must";
    },
    q6_brushing_method: function () {
      return u("q1_target_user") !== "u_kids" && u("q3_water_floss_need") !== "wf_must";
    },
    q7_sensor_app: function () {
      return u("q1_target_user") !== "u_kids" && u("q3_water_floss_need") !== "wf_must";
    },
    q9_whitening_care: function () {
      return u("q2_main_trouble") === "t_stain" && u("q1_target_user") !== "u_kids";
    },
    ex_water_flosser_type: function () {
      return ["wf_must", "wf_combo"].indexOf(u("q3_water_floss_need")) >= 0;
    }
  };
  var _BC = [5e3, 15e3, 35e3, 1e9], _NB = 0;
  function _t3(a) {
    return a[w[m()]];
  }
  function _f3(a) {
    for (var t = _t3(a), i = 1; i < arguments.length; i++)
      t = t.split("{" + (i - 1) + "}").join(arguments[i]);
    return t;
  }
  function _BP(a) {
    var b = _NB || d.bud == null ? 1e9 : _BC[d.bud];
    return a.price > b ? Math.min(35, (a.price - b) / b * 90 + 8) : 0;
  }
  function _TX(e) {
    var a = u("worry"), y = u("why"), g2 = u("gum2");
    a === "w_noise" && (e.gum += 1),
      a === "w_simple" && (e.smart = Math.min(e.smart, .3)),
      a === "w_cost" && (e.price += 1.5),
      y === "y_clean" && (e.plaque += 1.5),
      y === "y_gentle" && (e.gum += 1.5, e.press += 1),
      y === "y_upkeep" && (e.price += 1),
      g2 === "g_bleed" && (e.gum += 1.5, e.pocket += 1.5),
      g2 === "g_recede" && (e.press += 2, e.gum += 1.5),
      g2 === "g_prevent" && (e.gum += 1);
    d.bud === 3 && (e.price = .4);
    d.bud === 0 && (e.price += 1.5);
    return e;
  }
  function _RI(e) {
    var v = null, t = e.id;
    if (t === "q10_priority") {
      var x = te(),
        b = null,
        mp = {
          plaque: "p_deep_clean",
          gum: "p_gentle_pocket",
          pocket: "p_water_floss",
          press: "p_press",
          smart: "p_smart",
          price: "p_cost_value"
        };
      Object.keys(mp).forEach(function (k) {
        (!b || x[k] > x[b]) && (b = k);
      });
      v = mp[b];
    } else if (t === "q7_sensor_app")
      v = u("q4_brush_pressure") === "pr_heavy"
        ? "s_sensor_must"
        : u("worry") === "w_simple" ? "s_simple" : null;
    else if (t === "q3_water_floss_need")
      v = u("q2_main_trouble") === "t_interdental" ? "wf_combo" : null;
    else if (t === "q4_brush_pressure")
      v = u("gum2") === "g_recede" ? "pr_heavy" : null;
    if (!v)
      return -1;
    for (var i = 0; i < e.options.length; i++)
      if (e.options[i].val === v)
        return i;
    return -1;
  }
  var _TH = '<path d="M18 16c3-5 9-4 14-2 5-2 11-3 14 2 3 6-1 12-2 19-1 8-2 16-6 16-3 0-3-10-6-10s-3 '
    + '10-6 10c-4 0-5-8-6-16-1-7-5-13-2-19z" fill="#fff" stroke="#60a5fa" stroke-width="2.5"/>',
    _SP = function (x, y, dl) {
      return '<path class="tb-tw" style="--dl:'
        + (dl || 0)
        + 's" d="M'
        + x
        + " "
        + y
        + 'l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fbbf24"/>';
    };
  function _QI(id) {
    var g = {
      sit: _TH + _SP(48, 6) + _SP(6, 18, -.6),
      q1_target_user: '<circle cx="22" cy="20" r="8" fill="#93c5fd"/><rect x="12" y="30" width="20" height="22" '
        + 'rx="9" fill="#60a5fa"/><circle cx="44" cy="32" r="6" fill="#fbcfe8"/><rect x="37" y="39" '
        + 'width="15" height="13" rx="7" fill="#f472b6"/>',
      q8_power_type: '<rect x="6" y="24" width="30" height="18" rx="4" fill="#fff" stroke="#16a34a" '
        + 'stroke-width="3"/><rect x="36" y="30" width="4" height="6" fill="#16a34a"/><rect '
        + 'class="tb-tw" x="10" y="28" width="12" height="10" rx="2" fill="#22c55e"/><path d="M46 '
        + '12v10M56 12v10M44 22h14v8a7 7 0 0 1-14 0zM51 37v12" stroke="#475569" stroke-width="3" '
        + 'fill="#e2e8f0" stroke-linecap="round"/>',
      q2_main_trouble: _TH
        + '<circle class="tb-tw" cx="28" cy="26" r="3" fill="#f59e0b"/><circle class="tb-tw" '
        + 'style="--dl:-.5s" cx="38" cy="30" r="3" fill="#f59e0b"/><circle class="tb-tw" '
        + 'style="--dl:-1s" cx="33" cy="40" r="3" fill="#f59e0b"/>',
      gum2: '<path d="M8 40c10-10 38-10 48 0v14H8z" fill="#fda4af"/>' + _TH,
      worry: _TH + '<text x="44" y="20" font-size="20" font-weight="800" fill="#f59e0b">?</text>',
      why: _TH + '<text x="44" y="22" font-size="20" font-weight="800" fill="#2563eb">↻</text>',
      q3_water_floss_need: '<path d="M14 46h18a8 8 0 0 0 8-8v-8" fill="none" stroke="#0369a1" stroke-width="5" '
        + 'stroke-linecap="round"/><circle class="tb-jet" cx="44" cy="22" r="3" fill="#0ea5e9"/>'
        + '<circle class="tb-jet" style="--dl:-.5s" cx="44" cy="22" r="3" fill="#0ea5e9"/>',
      q4_brush_pressure: '<path d="M8 46a24 24 0 0 1 48 0" fill="none" stroke="#e2e8f0" stroke-width="8"/><path d="M8 '
        + '46a24 24 0 0 1 30-23" fill="none" stroke="#f59e0b" stroke-width="8"/><path class="tb-bn" '
        + 'd="M32 46l12-14" stroke="#dc2626" stroke-width="4" stroke-linecap="round"/>',
      q6_brushing_method: '<g class="tb-osc"><circle cx="20" cy="30" r="13" fill="#fecaca"/><circle cx="20" cy="30" '
        + 'r="8" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3"/></g><g '
        + 'class="tb-wave"><path d="M40 16q-6 12 0 24M48 12q-8 16 0 32M56 16q-6 12 0 24" fill="none" '
        + 'stroke="#2563eb" stroke-width="3" stroke-linecap="round"/></g>',
      q7_sensor_app: '<rect x="20" y="8" width="24" height="46" rx="6" fill="#fff" stroke="#475569" '
        + 'stroke-width="3"/><circle class="tb-tw" cx="32" cy="22" r="5" fill="#22c55e"/><rect x="26" '
        + 'y="34" width="12" height="3" rx="1.5" fill="#cbd5e1"/><rect x="26" y="40" width="8" '
        + 'height="3" rx="1.5" fill="#cbd5e1"/>',
      q9_whitening_care: _TH + _SP(46, 8) + _SP(6, 30, -.8),
      ex_water_flosser_type: '<rect x="14" y="30" width="22" height="26" rx="6" fill="#e0f2fe" stroke="#0ea5e9" '
        + 'stroke-width="2.5"/><rect class="tb-wave" x="17" y="42" width="16" height="11" rx="3" '
        + 'fill="#38bdf8"/><path d="M36 36h8q6 0 6-6v-8" fill="none" stroke="#0369a1" stroke-width="4" '
        + 'stroke-linecap="round"/>',
      q10_priority: '<path class="tb-bn" d="M32 6l7 15 16 2-12 11 3 16-14-8-14 8 3-16L9 23l16-2z" fill="#fbbf24" '
        + 'stroke="#f59e0b" stroke-width="2"/>'
    };
    return '<div class="tb-qi"><svg viewBox="0 0 64 64">' + (g[id] || _TH) + "</svg></div>";
  }
  function _PN() {
    return '<div class="fr-box" style="border-left:4px solid #f59e0b"><p class="fr-p" style="margin:0">⚠️ '
      + _t3([
        "在庫・価格は日々変動します。表示の価格は上2桁の目安です。ご購入前に、必ず店頭スタッフで最新の在庫・価格をご確認ください。",
        "Stock and prices change daily. Prices shown are rounded estimates. Please confirm current "
          + "stock and price with our staff before buying.",
        "库存与价格每日变动。所示价格为取整后的参考值，购买前请务必向店员确认最新库存与价格。"
      ])
      + "</p></div>";
  }
  function _BUD() {
    var o = [
      ["〜5,000円", "Up to ¥5,000", "5,000日元以内"],
      ["〜15,000円", "Up to ¥15,000", "15,000日元以内"],
      ["〜35,000円", "Up to ¥35,000", "35,000日元以内"],
      ["上限なし", "No limit", "不设上限"]
    ],
      h = d.bud,
      btn = o.map(function (c, i) {
        return '<button class="fr-opt'
          + (h === i ? " sel" : "")
          + '" data-a="bud" data-i="'
          + i
          + '"><span class="ck">'
          + (h === i ? "✓" : "")
          + "</span>"
          + _t3(c)
          + "</button>";
      }).join(""),
      r = '<div class="fr-box"><h3><svg viewBox="0 0 64 64" width="30" height="30" '
        + 'style="vertical-align:middle;margin-right:6px"><circle cx="32" cy="32" r="24" fill="#fbbf24"'
        + ' stroke="#f59e0b" stroke-width="3"/><text x="32" y="41" text-anchor="middle" font-size="26" '
        + 'font-weight="800" fill="#b45309">¥</text></svg>'
        + _t3(["ご予算はいかがですか？", "What is your budget?", "您的预算是多少？"])
        + '</h3><p class="fr-p" style="font-size:.82rem">'
        + _t3([
          "ここまでは、ご希望だけで選んだ機種です。ご予算を選ぶと、予算内でのおすすめと「何を諦めることになるか」をお見せします。",
          "These picks are based on your needs only. Choose a budget to see what fits and what you would give up.",
          "以上机型仅根据您的需求选出。选择预算后，将显示预算内的推荐及“需要舍弃什么”。"
        ])
        + "</p>"
        + btn;
    if (h != null && h < 3) {
      _NB = 1;
      var a0 = ae().top[0];
      _NB = 0;
      var a1 = ae().top[0], cap = _BC[h];
      if (a0 && a1) {
        if (a0.p === a1.p)
          r += '<div class="fr-win" style="margin-top:10px">✅ '
            + _t3([
              "予算内でも第1候補は変わりません：",
              "Your top pick stays the same within budget: ",
              "预算内第1名不变："
            ])
            + "<b>"
            + S(a1.p)
            + "</b>（"
            + g(a1.p.price)
            + "）</div>";
        else {
          r += '<div class="fr-win" style="margin-top:10px"><b>'
            + _t3(["ご予算内の第1候補：", "Top pick within budget: ", "预算内第1名："])
            + S(a1.p)
            + "</b>（"
            + g(a1.p.price)
            + "）<br>"
            + _t3(["予算を考えない第1候補は ", "Without a budget the top pick was ", "不考虑预算时的第1名是 "])
            + "<b>"
            + S(a0.p)
            + "</b>（"
            + g(a0.p.price)
            + "）"
            + (
              a1.p.price > cap
                ? "<br>"
                  + _t3([
                    "⚠ 予算内に収まる機種がありません。最も近い機種を表示しています。",
                    "⚠ No model fits the budget; showing the closest.",
                    "⚠ 没有符合预算的机型，显示最接近的。"
                  ])
                : ""
            )
            + "</div>";
          a0.p.price > cap
            && (
              r += '<p class="fr-p" style="font-size:.82rem;margin-top:8px">'
                + _f3([
                  "あと {0} 足すと <b>{1}</b> に届きます。",
                  "Add {0} more to reach <b>{1}</b>.",
                  "再加{0}即可选择<b>{1}</b>。"
                ], g(a0.p.price - cap), S(a0.p))
                + "</p>"
            );
        }
      }
    }
    return r + "</div>";
  }
  function _RT() {
    var top = ae().top[0];
    if (!top)
      return "";
    var cnt = 0,
      ids = P[1].concat(P[2], P[3]).filter(function (i) {
        return d.a[i] != null && (!_SH[i] || _SH[i]());
      }),
      cut = function (t) {
        t = q(t).replace(/【.*?】/g, "").replace(/（.*?）/g, "");
        return t.length > 28 ? t.slice(0, 27) + "…" : t;
      },
      rows = ids.map(function (id, o) {
        var qd = A(id),
          cur = d.a[id],
          dd = 0,
          alt = qd.options.map(function (op, i) {
            return { l: cut(op.text), v: i };
          }).filter(function (x) {
            return x.v !== cur;
          }).map(function (x) {
            var old = d.a[id];
            d.a[id] = x.v;
            var t2 = ae().top[0];
            d.a[id] = old;
            var c = t2 && t2.p !== top.p;
            return c && (dd++, cnt++),
              '<span style="display:inline-block;margin:3px 4px 0 0;padding:4px 8px;border-radius:8px;'
                + 'font-size:.76rem;line-height:1.45;'
                + (
                  c
                    ? "background:#fffbeb;border:1px dashed #f59e0b"
                    : "background:#f8fafc;border:1px dashed #cbd5e1;color:#64748b"
                )
                + '">'
                + x.l
                + "<br><b>"
                + (
                  c
                    ? _t3(["→ 1位は ", "→ #1 would be ", "→ 第1名将是 "]) + S(t2.p)
                    : _t3(["→ 1位は変わらず", "→ #1 unchanged", "→ 第1名不变"])
                )
                + "</b></span>";
          }).join("");
        return '<div style="position:relative;margin:0 0 12px 12px;padding:0 0 0 16px;border-left:3px solid '
          + '#93c5fd"><span style="position:absolute;left:-10px;top:1px;width:17px;height:17px;'
          + 'border-radius:50%;background:#2563eb;color:#fff;font-size:.64rem;text-align:center;'
          + 'line-height:17px">'
          + (o + 1)
          + '</span><div style="font-size:.78rem;color:#64748b">'
          + $(qd).replace(/[？?]$/, "").replace(/【.*?】/g, "")
          + '</div><div style="display:inline-block;margin:3px 0;padding:5px 10px;border-radius:8px;'
          + 'background:#dbeafe;border:1.5px solid #2563eb;font-weight:700;font-size:.86rem">✓ '
          + cut(qd.options[cur].text)
          + "</div>"
          + (
            alt
              ? "<details"
                + (dd ? " open" : "")
                + '><summary style="font-size:.78rem;color:'
                + (dd ? "#b45309" : "#64748b")
                + ';cursor:pointer">'
                + _f3([
                  "もし別の選択をしていたら（1位が変わる選択肢：{0}件）",
                  "If you had chosen differently (options that change #1: {0})",
                  "若选了其他选项（会改变第1名的选项：{0}个）"
                ], dd)
                + "</summary>"
                + alt
                + "</details>"
              : ""
          )
          + "</div>";
      }).join("");
    return '<div class="fr-box"><h3>🧭 '
      + _t3(["あなたの選択の経路図", "Your path through the questions", "您的选择路径图"])
      + '</h3><p class="fr-p" style="font-size:.82rem">'
      + _f3([
        "青が選んだ回答です。点線の薄い枠は「ここで別の選択をしていたら」の場合の1位で、<b>黄色は1位の機種が変わる分岐点</b>です（現在の1位：{0}／分岐点 {1}か所の選択肢）。",
        "Blue is what you chose. Dashed boxes show the top pick if you had chosen differently; "
          + "<b>yellow marks choices that would change #1</b> (current #1: {0} / {1} such choices).",
        "蓝色为您的选择。虚线框为“若选了其他选项”时的第1名；<b>黄色表示会改变第1名的分岐点</b>（当前第1名：{0}／共{1}个）。"
      ], S(top.p), cnt)
      + "</p>"
      + rows
      + '<div style="margin-left:12px;padding:6px 10px;border-radius:8px;background:#dcfce7;'
      + 'border:1.5px solid #16a34a;font-weight:700;font-size:.88rem;display:flex;align-items:center;'
      + 'gap:8px"><span class="tb-mini">'
      + xe(top.t.i.l, 0)
      + "</span><span>🏁 "
      + S(top.p)
      + "（"
      + M(top.p)
      + "）</span></div></div>";
  }
  function Ae(e) {
    if (!d.lock) {
      d.lock = 1;
      var r = Q(d.v.st)[d.v.i];
      d.a[r.id] = e,
        je(),
        b.querySelectorAll(".fr-opt").forEach(function (t, n) {
          t.classList.toggle("sel", n === e), t.firstChild.textContent = n === e ? "✓" : "";
        }),
        setTimeout(function () {
          var t = Q(d.v.st);
          d.lock = 0,
            T(
              d.v.i + 1 < t.length
                ? { st: d.v.st, i: d.v.i + 1 }
                : d.v.st === 1 ? "r1" : d.v.st === 2 ? "r2" : "final"
            );
        }, 320);
    }
  }
  function X() {
    d = { a: {}, v: "intro", hist: [], ax: null },
      U(),
      document.documentElement.style.overflow = "hidden";
    try {
      history.pushState({ tb: 1 }, "");
    } catch {}
  }
  function R(e) {
    if (b.classList.remove("on"), document.documentElement.style.overflow = "", !e)
      try {
        history.state && history.state.tb && history.back();
      } catch {}
  }
  b.addEventListener("click", function (e) {
    var r = e.target.closest("[data-a]");
    if (!(!r || r.tagName === "SELECT")) {
      var t = r.dataset.a;
      if (t === "close")
        R();
      else if (t === "start")
        T({ st: 1, i: 0 });
      else if (t === "type")
        b.querySelectorAll(".fr-card").forEach(function (i) {
          i.classList.toggle("sel", i === r && !r.classList.contains("sel"));
        });
      else if (t === "pick")
        Ae(+r.dataset.i);
      else if (t === "next")
        T(d.v === "r1" ? { st: 2, i: 0 } : { st: 3, i: 0 });
      else if (t === "back") {
        var n = d.hist.pop();
        n != null ? T(n, !0) : R();
      } else if (t === "staff")
        T("staff");
      else if (t === "ax") {
        d.ax = r.dataset.k;
        var a = b.scrollTop;
        d.back = !1, U(), b.scrollTop = a;
      } else if (t === "bud") {
        var _b = +r.dataset.i, _s = b.scrollTop;
        d.bud = d.bud === _b ? null : _b, d.back = !1, U(), b.scrollTop = _s;
      } else
        t === "restart" && X();
    }
  }),
    b.addEventListener("change", function (e) {
      if (e.target.dataset.a === "lang") {
        var r = document.getElementById("lang-switcher");
        r && (r.value = e.target.value, r.dispatchEvent(new Event("change")));
        var t = b.scrollTop;
        d.back = !1, U(), b.scrollTop = t;
      }
    }),
    window.addEventListener("popstate", function () {
      b.classList.contains("on") && R(!0);
    }),
    window.ToothbrushApp = { open: X, close: R };
  var Y = document.getElementById("modal-link-btn");
  Y
    && Y.addEventListener("click", function (e) {
      Y.dataset.app === "toothbrush"
        && (e.preventDefault(), document.getElementById("modal").classList.remove("active"), X());
    });
  try { window.NJ_HEAR && window.NJ_HEAR.hook([be], {"schema": "tb", "root": "tb-app", "lock": ["q10_priority"], "flow": P, "hints": _e}); } catch (e) { console.error(e); }
})();
</script>
<style id="app-motion-css">
/* =====================================================================
   PC相談：スマホ・iPad向けの調整 ＋ Apple風の動き
   ===================================================================== */
#tb-app{--ap:cubic-bezier(.32,.72,0,1);--aps:cubic-bezier(.25,1,.5,1)}

/* ---- 画面の出し入れ（iOSのシート／プッシュ） ---- */
#tb-app{transition:opacity .4s var(--ap),transform .6s var(--ap),visibility 0s .6s}
#tb-app.on{transition:opacity .4s var(--ap),transform .6s var(--ap)}
#tb-app .fr-in{animation:apPush .55s var(--ap) both}
#tb-app.fr-back .fr-in{animation-name:apPop}
@keyframes apPush{from{opacity:0;transform:translate3d(32px,0,0)}}
@keyframes apPop{from{opacity:0;transform:translate3d(-32px,0,0)}}
#tb-app .fr-up{animation:apRise .7s var(--ap) both;animation-delay:calc(var(--i,0)*45ms)}
#tb-app .fr-card.sel .fr-more{animation:apRise .5s var(--ap) both}
@keyframes apRise{from{opacity:0;transform:translate3d(0,14px,0) scale(.985);filter:blur(4px)}}

/* ---- 半透明のナビゲーションバー（スクロールすると細い境界線） ---- */
#tb-app .fr-top{background:rgba(255,255,255,.72);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);box-shadow:none;border-bottom:.5px solid transparent;transition:border-color .3s,background .3s}
#tb-app.scrolled .fr-top{border-bottom-color:rgba(15,23,42,.14);background:rgba(255,255,255,.82)}
#tb-app .fr-prog div{transition:width .8s var(--ap)}

/* ---- 押したときの沈み込み・選んだときの反応 ---- */
#tb-app .fr-opt,#tb-app .fr-card,#tb-app .fr-btn,#tb-app .fr-x,#tb-app .iv-entry,#tb-app .ht-heart{transition:transform .5s var(--ap),background-color .25s,border-color .25s,box-shadow .35s var(--ap)}
#tb-app .fr-opt:active,#tb-app .fr-card:active,#tb-app .fr-btn:active,#tb-app .fr-x:active,#tb-app .iv-entry:active{transform:scale(.97);transition-duration:.12s}
#tb-app .fr-opt.sel{animation:apSel .5s var(--ap)}
@keyframes apSel{0%{transform:scale(.97)}}
#tb-app .fr-opt .ck{transition:transform .45s var(--aps),background .2s,border-color .2s}
#tb-app .fr-opt.sel .ck{transform:scale(1.08)}
@media (hover:hover){#tb-app .fr-card:hover{transform:translateY(-2px);box-shadow:0 12px 28px #2563eb1f}}
@media (hover:none){#tb-app .fr-card:hover{transform:none;box-shadow:0 2px 8px #0f172a0d}}

/* ---- ヒアリング（イラストなし） ---- */
#tb-app .pc-qi{display:none!important}
#tb-app .fr-q{padding:20px 18px 18px;border:1px solid #e8edf5;box-shadow:0 10px 30px #0f172a12}
#tb-app .fr-q .no{display:inline-flex;align-items:center;gap:8px;font-size:.78rem;padding:5px 11px;border-radius:999px;background:linear-gradient(135deg,#eff6ff,#f5f3ff);color:#4338ca;letter-spacing:.08em}
#tb-app .fr-q h2{font-size:clamp(1.2rem,4.8vw,1.55rem);line-height:1.45;margin:12px 0 10px;word-break:auto-phrase;text-wrap:pretty;letter-spacing:.01em}
#tb-app .fr-hint{word-break:auto-phrase;border-left:0;border-radius:12px;background:#f1f5ff;padding:10px 12px}
#tb-app .fr-opt{border-radius:14px;word-break:auto-phrase}

/* ---- 「いまの見立て」：タイプとメーカーの並びをそろえる ---- */
#tb-app .pc-xe{grid-template-columns:repeat(7,minmax(0,1fr));gap:6px}
#tb-app .pc-xe>div,#tb-app .pc-xm>div{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-width:0;padding:7px 3px 6px!important;border-radius:12px!important;transition:background .3s,border-color .3s,opacity .3s}
#tb-app .pc-xe>div>div:last-child,#tb-app .pc-xm>div>div:last-child{font-size:.62rem!important;line-height:1.35!important;margin-top:4px!important;max-width:100%;text-align:center;word-break:auto-phrase}
#tb-app .pc-xe .pc-mini{height:30px;display:flex;align-items:center}
#tb-app .pc-xm{display:flex;flex-wrap:wrap;justify-content:center;gap:6px}
#tb-app .pc-xm>div{flex:1 1 0;min-width:62px;max-width:112px}
#tb-app .pc-mk{width:100%;max-width:56px;height:auto}
@media (max-width:600px){#tb-app .pc-xe{grid-template-columns:repeat(4,minmax(0,1fr))}}

/* ---- 結果画面「いま合うメーカー」：アイコンの列と文字の頭をそろえる ---- */
#tb-app .pc-mkrow{display:grid;grid-template-columns:64px minmax(0,1fr);column-gap:14px;align-items:center;padding:12px 2px;border-top:1px solid #eef2f7;text-align:left}
#tb-app .fr-box h3+.pc-mkrow,#tb-app .pc-mkrow:first-of-type{border-top:0;padding-top:4px}
#tb-app .pc-mkrow .pc-mk{margin:0;width:64px;max-width:64px;justify-self:center}
#tb-app .pc-mkrow>div{font-size:.86rem!important;line-height:1.6!important;min-width:0;word-break:auto-phrase}
#tb-app .pc-mkrow>div b:first-child{font-size:.95rem}
#tb-app .pc-mkrow>div span{display:block;margin-top:2px;font-size:.8rem}
@media (min-width:700px){#tb-app .pc-mkrow{grid-template-columns:72px minmax(0,1fr);padding:14px 6px}}

/* ---- 最初の画面：タイプのカード（7つ目が1枚だけ浮かないように） ---- */
#tb-app .fr-types{align-items:stretch}
#tb-app .fr-types>.fr-card{display:flex;flex-direction:column}
#tb-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel){grid-column:1/-1;display:grid;grid-template-columns:auto 1fr;column-gap:16px;align-items:center}
#tb-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>.pc-svg{grid-row:1/span 2;margin:0}
#tb-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>h3{align-self:end;margin:0 0 2px}
#tb-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>small{align-self:start}

/* ---- スマホ：上のバーを2段に（1段目：戻る・言語・該当数／2段目：タイトル・在庫管理） ---- */
@media (max-width:600px){
  #tb-app .fr-top{flex-wrap:wrap;row-gap:6px}
  #tb-app .fr-top>b{order:5;flex:1 1 auto;min-width:0;font-size:.95rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  #tb-app .fr-top .iv-entry{order:6}
  #tb-app .fr-q{padding:18px 14px 14px;border-radius:18px}
  #tb-app .fr-wrap{padding-left:12px;padding-right:12px}
}
/* ---- iPad・PC：中央に寄せ、選択肢は2列 ---- */
@media (min-width:700px){
  #tb-app .fr-wrap{max-width:900px;margin:0 auto}
  #tb-app .fr-q{display:grid;grid-template-columns:1fr 1fr;column-gap:12px;align-items:stretch;padding:26px 26px 22px;border-radius:24px}
  #tb-app .fr-q>*{grid-column:1/-1}
  #tb-app .fr-q>.fr-opt{grid-column:auto;margin:0 0 12px;height:calc(100% - 12px)}
  #tb-app .fr-q .no{justify-self:start}
  #tb-app .fr-types{grid-template-columns:1fr 1fr}
}
@media (prefers-reduced-motion:reduce){#tb-app *,#tb-app{animation-duration:.01ms!important;transition-duration:.01ms!important}}

#tb-app [class$="-qi"],#tb-app .tb-qi{display:none!important}
</style>
<script id="app-motion-js">
/* PC相談：スクロールでナビゲーションバーに境界線（Apple風）／iOSで押した感触を出す */
(function () {
  var r = document.getElementById("tb-app");
  if (!r) return;
  var on = false;
  r.addEventListener("scroll", function () {
    var s = r.scrollTop > 4;
    if (s !== on || !r.classList.contains("scrolled") === s) { on = s; r.classList.toggle("scrolled", s); }
  }, { passive: true });
  document.addEventListener("touchstart", function () {}, { passive: true });   // iOSで :active を効かせる
})();
</script>
<script>window.NJ_INV && window.NJ_INV.injectLinks && window.NJ_INV.injectLinks("tb-app");</script>
</body>
</html>