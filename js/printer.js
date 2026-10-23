<!DOCTYPE html>
<html lang="ja">
<head>
<base href="../">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes, viewport-fit=cover">
<title>プリンターの相談 | イオンモール成田店</title>
<style id="product-shell-css">
*{box-sizing:border-box;margin:0;padding:0;font-family:Plus Jakarta Sans,Noto Sans JP,Noto Sans SC,sans-serif;-webkit-tap-highlight-color:transparent}
html,body{width:100%;max-width:100%;overflow-x:hidden}
body{background:linear-gradient(160deg,#e8f0ff,#f8fafc 45%,#eef2ff);color:#0f172a;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:16px}
.pg-card{background:#fff;border:1px solid #e2e8f0;border-radius:18px;padding:28px 22px;max-width:420px;width:100%;text-align:center;box-shadow:0 10px 30px #0f172a14}
.pg-ico{font-size:2.6rem}
.pg-ttl{font-size:1.3rem;font-weight:800;margin:8px 0 18px}
.pg-btn{display:block;width:100%;padding:14px;border-radius:12px;border:none;font-size:1rem;font-weight:700;cursor:pointer;text-decoration:none;margin-top:8px}
.pg-btn.main{background:#0891b2;color:#fff}
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
<body data-lang="ja" data-dept="info" data-product="printer">
<!-- ======================================================================
     ▼▼▼ 在庫データ（プリンター）▼▼▼
     ・1商品 = items の中の { } ひとつ。型番・価格・スペック・大きさ・リンクなど
     ・status: "active"=販売中 / "ended"=販売終了（相談に出なくなる）
     ・links: type は "official"(メーカー公式HP) / "manual"(取扱説明書) / "ref"(参考リンク)
     ・ふだんは相談画面の上のバーにある「🔐 在庫管理」から編集できます（暗証番号は adminPin）
     ====================================================================== -->
<script type="application/json" id="inventory-data">
{
  "category": "printer",
  "label": "プリンター",
  "version": "2026-10-23",
  "adminPin": "staff2026",
  "groups": [
    {
      "id": "entry_value",
      "name": "エントリー（低価格）"
    },
    {
      "id": "doc_work_student",
      "name": "文書・レポート向け"
    },
    {
      "id": "photo_balance",
      "name": "写真高画質（5〜6色）"
    },
    {
      "id": "bulk_low_cost",
      "name": "大量印刷・低コスト"
    },
    {
      "id": "business_a3",
      "name": "A3ビジネス複合機"
    }
  ],
  "tagOptions": {},
  "schema": {
    "root": "pr-app",
    "icon": "🖨️",
    "map": {},
    "fields": [
      {
        "k": "ink",
        "l": "インク"
      },
      {
        "k": "costDoc",
        "l": "文書1枚のコスト"
      },
      {
        "k": "costPhoto",
        "l": "写真1枚のコスト"
      },
      {
        "k": "duplex",
        "l": "両面印刷"
      },
      {
        "k": "paper",
        "l": "給紙"
      },
      {
        "k": "adf",
        "l": "ADF（自動原稿送り）"
      },
      {
        "k": "a3",
        "l": "A3対応"
      },
      {
        "k": "speed",
        "l": "印刷速度"
      }
    ],
    "listFields": [
      "ink",
      "duplex"
    ],
    "grades": [
      [
        "cost",
        "印刷コスト"
      ],
      [
        "photo",
        "写真画質"
      ],
      [
        "doc",
        "文書"
      ],
      [
        "duplex",
        "両面"
      ],
      [
        "speed",
        "速さ"
      ]
    ],
    "gradeVals": [
      "◎",
      "◯",
      "△",
      "✕"
    ],
    "buckets": [
      [
        0,
        15000,
        "〜1.5万"
      ],
      [
        15000,
        30000,
        "1.5〜3万"
      ],
      [
        30000,
        50000,
        "3〜5万"
      ],
      [
        50000,
        80000,
        "5〜8万"
      ],
      [
        80000,
        1000000000000.0,
        "8万〜"
      ]
    ],
    "makers": [
      [
        "Brother"
      ],
      [
        "Canon"
      ],
      [
        "Epson"
      ]
    ]
  },
  "items": [
    {
      "id": "p1",
      "status": "active",
      "maker": "Canon",
      "name": "PIXUS TS3730",
      "model": "TS3730",
      "price": 7920,
      "groupId": "entry_value",
      "ink": "4色ハイブリッド(一体型)",
      "costDoc": "約15.5円",
      "costPhoto": "約34.0円",
      "duplex": "手動",
      "paper": "背面60枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約52秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "△",
        "photo": "◯",
        "doc": "◯",
        "duplex": "✕",
        "speed": "△"
      },
      "desc": {
        "ja": "本体7,000円台の最安機！年に数回の提出書類や簡単なコピーを安く済ませたい方に",
        "en": "Under 8k JPY! Simplest wireless A4 all-in-one for occasional paperwork and copies",
        "zh": "7千多日元全场超低价！满足偶尔复印、证件打印与基础学校通知"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20TS3730",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20TS3730%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p2",
      "status": "active",
      "maker": "Epson",
      "name": "Colorio EW-056A",
      "model": "EW-056A",
      "price": 8800,
      "groupId": "entry_value",
      "ink": "4色独立(顔料黒+染料3色)",
      "costDoc": "約14.5円",
      "costPhoto": "約31.0円",
      "duplex": "手動",
      "paper": "背面50枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約74秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◯",
        "photo": "◯",
        "doc": "◯",
        "duplex": "✕",
        "speed": "△"
      },
      "desc": {
        "ja": "4色独立インク採用で無駄がない。コンパクト設計で一人暮らしの棚にもすっきり収まる",
        "en": "Individual 4-color cartridges so you only replace what runs out; compact footprint",
        "zh": "4色独立墨盒，用完哪色换哪色，超窄机身随处摆放"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Aepson.jp%20EW-056A",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Aepson.jp%20EW-056A%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p3",
      "status": "active",
      "maker": "Canon",
      "name": "PIXUS TS5430",
      "model": "TS5430",
      "price": 10978,
      "groupId": "entry_value",
      "ink": "4色ハイブリッド(一体型)",
      "costDoc": "約15.0円",
      "costPhoto": "約32.0円",
      "duplex": "自動両面",
      "paper": "前面100+背面20枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約36秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "△",
        "photo": "◯",
        "doc": "◎",
        "duplex": "◎",
        "speed": "◯"
      },
      "desc": {
        "ja": "1万円前後で「自動両面印刷」を標準搭載。スマホフレンドリーで手軽に扱える優等生",
        "en": "Around 10k JPY with automatic double-sided printing and smooth smartphone setup",
        "zh": "万元价位配备自动双面打印，手机一键直连，实用度大幅提升"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20TS5430",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20TS5430%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p4",
      "status": "active",
      "maker": "Epson",
      "name": "Colorio EW-456A",
      "model": "EW-456A",
      "price": 12100,
      "groupId": "entry_value",
      "ink": "4色独立(顔料黒+染料3色)",
      "costDoc": "約14.0円",
      "costPhoto": "約30.0円",
      "duplex": "自動両面",
      "paper": "背面100枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約70秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◯",
        "photo": "◯",
        "doc": "◎",
        "duplex": "◎",
        "speed": "△"
      },
      "desc": {
        "ja": "自動両面プリント対応＆カラー液晶付き。エプソンの手頃で使いやすいエントリー機",
        "en": "Equipped with color LCD screen and auto-duplexing for paper-saving daily tasks",
        "zh": "自带彩色显示屏，支持自动双面打印，省纸直观好上手"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Aepson.jp%20EW-456A",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Aepson.jp%20EW-456A%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p5",
      "status": "active",
      "maker": "Canon",
      "name": "PIXUS TS5530",
      "model": "TS5530",
      "price": 12650,
      "groupId": "entry_value",
      "ink": "4色ハイブリッド(一体型)",
      "costDoc": "約15.0円",
      "costPhoto": "約32.0円",
      "duplex": "自動両面",
      "paper": "前面100+背面20枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約36秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "△",
        "photo": "◯",
        "doc": "◎",
        "duplex": "◎",
        "speed": "◯"
      },
      "desc": {
        "ja": "5GHz Wi-Fi対応で通信が途切れない。スクエア写真印刷や自動両面もこなす新世代機",
        "en": "Stable 5GHz Wi-Fi with auto-duplex and square photo printing for modern homes",
        "zh": "支持5GHz双频Wi-Fi防断连，支持正方形照片与双面打印的新世代机型"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20TS5530",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20TS5530%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p6",
      "status": "active",
      "maker": "Brother",
      "name": "PRIVIO DCP-J529N",
      "model": "DCP-J529N",
      "price": 15400,
      "groupId": "doc_work_student",
      "ink": "4色独立(顔料黒+染料3色)",
      "costDoc": "約3.4円(モノクロ)",
      "costPhoto": "約25.0円",
      "duplex": "自動両面",
      "paper": "前面100枚+手差し1枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約14秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◎",
        "photo": "◯",
        "doc": "◎",
        "duplex": "◎",
        "speed": "◯"
      },
      "desc": {
        "ja": "前面給紙＆前面インク交換の使いやすさ。文書印刷スピードとインク持ちに優れるブラザー入門",
        "en": "Front loading paper and ink cartridges; excellent mono document speed for home study",
        "zh": "前置抽屉进纸与前置换墨设计，黑白文档每分钟15页高速输出"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Abrother.co.jp%20DCP-J529N",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Abrother.co.jp%20DCP-J529N%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p7",
      "status": "active",
      "maker": "Canon",
      "name": "PIXUS TS6630",
      "model": "TS6630",
      "price": 16500,
      "groupId": "doc_work_student",
      "ink": "4色ハイブリッド(独立)",
      "costDoc": "約14.0円",
      "costPhoto": "約28.0円",
      "duplex": "自動両面",
      "paper": "前面100枚+背面20枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約18秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◯",
        "photo": "◯",
        "doc": "◎",
        "duplex": "◎",
        "speed": "◎"
      },
      "desc": {
        "ja": "2WAY給紙＆自動両面。操作パネルが使いやすく、書類作成から年賀状まで卒なくこなす中核機",
        "en": "Dual paper feeds and auto-duplexing; well-balanced middle model for family paperwork",
        "zh": "前后双向进纸避免频繁换纸，触摸面板直观，作业报表处理顺手"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20TS6630",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20TS6630%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p8",
      "status": "active",
      "maker": "Brother",
      "name": "PRIVIO DCP-J929N",
      "model": "DCP-J929N",
      "price": 19580,
      "groupId": "doc_work_student",
      "ink": "4色独立(顔料黒+染料3色)",
      "costDoc": "約3.1円(モノクロ)",
      "costPhoto": "約23.0円",
      "duplex": "自動両面",
      "paper": "前面100枚+手差し",
      "adf": "あり(20枚)",
      "a3": "なし",
      "speed": "約14秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◎",
        "photo": "◯",
        "doc": "◎",
        "duplex": "◎",
        "speed": "◎"
      },
      "desc": {
        "ja": "複数枚の書類をまとめて読み取れる「ADF」搭載！レーベル印刷や自動両面も揃った最強の書類機",
        "en": "Equipped with 20-sheet ADF for multi-page scans/copies, CD/DVD printing, and auto-duplex",
        "zh": "配备20页ADF自动连续输稿器！厚重合同与多页作业一次性复印扫描"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Abrother.co.jp%20DCP-J929N",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Abrother.co.jp%20DCP-J929N%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p9",
      "status": "active",
      "maker": "Canon",
      "name": "PIXUS TS7630",
      "model": "TS7630",
      "price": 21780,
      "groupId": "photo_balance",
      "ink": "5色独立ハイブリッド",
      "costDoc": "約13.5円",
      "costPhoto": "約20.5円",
      "duplex": "自動両面",
      "paper": "前面100枚+背面100枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約16秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◯",
        "photo": "◎",
        "doc": "◎",
        "duplex": "◎",
        "speed": "◎"
      },
      "desc": {
        "ja": "写真に強い「5色独立インク」＆新世代UI。前後200枚給紙で写真も書類も美しく両立",
        "en": "5-color hybrid independent inks with revamped UI; 200-sheet dual feeds for both photos & text",
        "zh": "5色独立双黑墨水架构，照片层次更鲜明，前后共可装200张纸"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20TS7630",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20TS7630%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p10",
      "status": "active",
      "maker": "Epson",
      "name": "Colorio EP-717A",
      "model": "EP-717A",
      "price": 22880,
      "groupId": "photo_balance",
      "ink": "6色染料独立",
      "costDoc": "約20.0円",
      "costPhoto": "約19.5円",
      "duplex": "手動",
      "paper": "前面100枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約17秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◯",
        "photo": "◎",
        "doc": "◯",
        "duplex": "✕",
        "speed": "◎"
      },
      "desc": {
        "ja": "エプソン写真画質の入門機。ライトシアン・ライトマゼンタ入りの6色染料インクで人物肌色が鮮やか",
        "en": "Entry into 6-color dye photo printing; captures natural skin tones and rich landscape hues",
        "zh": "6色纯染料照片入门款，含浅青与浅洋红，人像肤色与风景细腻润泽"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Aepson.jp%20EP-717A",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Aepson.jp%20EP-717A%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p11",
      "status": "active",
      "maker": "Canon",
      "name": "PIXUS TS8830",
      "model": "TS8830",
      "price": 25300,
      "groupId": "photo_balance",
      "ink": "6色独立(グレーインク搭載)",
      "costDoc": "約12.5円",
      "costPhoto": "約18.0円",
      "duplex": "自動両面",
      "paper": "前面100枚+背面50枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約10秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◯",
        "photo": "◎",
        "doc": "◎",
        "duplex": "◎",
        "speed": "◎"
      },
      "desc": {
        "ja": "グレーインク搭載のプレミアム6色＆4.3型大型タッチパネル。迷ったらこれと言える万能の旗艦機",
        "en": "6-color hybrid with dedicated gray ink & 4.3\" touch LCD; the definitive all-round photo composite",
        "zh": "搭载专用灰色墨水的6色旗舰，配备4.3英寸触控彩屏，家庭高品质首选"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20TS8830",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20TS8830%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p12",
      "status": "active",
      "maker": "Epson",
      "name": "Colorio EP-817A",
      "model": "EP-817A",
      "price": 27579,
      "groupId": "photo_balance",
      "ink": "6色染料独立",
      "costDoc": "約19.0円",
      "costPhoto": "約17.5円",
      "duplex": "自動両面",
      "paper": "前面2段+背面手差し",
      "adf": "なし",
      "a3": "なし",
      "speed": "約13秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◯",
        "photo": "◎",
        "doc": "◯",
        "duplex": "◎",
        "speed": "◎"
      },
      "desc": {
        "ja": "前面2段カセットで写真用紙とA4普通紙を常時セット可能。自動両面印刷対応の6色定番モデル",
        "en": "Front 2-tier cassettes hold photo & plain paper simultaneously; classic auto-duplex 6-color",
        "zh": "前置上下双层抽屉，A4纸与相纸无需反复抽换，标配自动双面"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Aepson.jp%20EP-817A",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Aepson.jp%20EP-817A%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p13",
      "status": "active",
      "maker": "Epson",
      "name": "Colorio EP-887A",
      "model": "EP-887A",
      "price": 32780,
      "groupId": "photo_balance",
      "ink": "6色染料独立",
      "costDoc": "約18.5円",
      "costPhoto": "約16.5円",
      "duplex": "自動両面",
      "paper": "前面2段+背面手差し",
      "adf": "なし",
      "a3": "なし",
      "speed": "約13秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◯",
        "photo": "◎",
        "doc": "◯",
        "duplex": "◎",
        "speed": "◎"
      },
      "desc": {
        "ja": "エプソン最高峰デザイン。スマート給紙・4.3型ワイドタッチ液晶で部屋のインテリアに溶け込む上位機",
        "en": "Epson's flagship styling with 4.3\" wide touch screen and ultra-smooth smart paper handling",
        "zh": "精工纤美工业设计，智能电动出纸托盘，高规格家庭照片影印顶配"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Aepson.jp%20EP-887A",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Aepson.jp%20EP-887A%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p14",
      "status": "active",
      "maker": "Canon",
      "name": "PIXUS TS8930",
      "model": "TS8930",
      "price": 37950,
      "groupId": "photo_balance",
      "ink": "6色独立(グレーインク搭載)",
      "costDoc": "約12.0円",
      "costPhoto": "約17.0円",
      "duplex": "自動両面",
      "paper": "前面100枚+背面50枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約10秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◯",
        "photo": "◎",
        "doc": "◎",
        "duplex": "◎",
        "speed": "◎"
      },
      "desc": {
        "ja": "L判約10秒の超高速写真プリント＆自動紙幅検知。静音設計と高画質を極めたキヤノンの最高峰",
        "en": "Ultra-fast 10-sec photo prints with auto paper-width sensing; top-tier speed & quietness",
        "zh": "10秒一张高清相片！自动纸宽探测，静音降噪与极速色彩还原旗舰"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20TS8930",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20TS8930%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p15",
      "status": "active",
      "maker": "Canon",
      "name": "G3390 ギガタンク",
      "model": "G3390",
      "price": 22088,
      "groupId": "bulk_low_cost",
      "ink": "特大容量インクボトル4色",
      "costDoc": "約0.4円(黒)/約1.0円(カラー)",
      "costPhoto": "約4.2円",
      "duplex": "手動",
      "paper": "背面100枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約37秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◎",
        "photo": "◯",
        "doc": "◎",
        "duplex": "△",
        "speed": "◯"
      },
      "desc": {
        "ja": "特大容量ギガタンクボトル！A4カラー1枚約1.0円の衝撃。インク切れを気にせず月数百枚印刷できる",
        "en": "Refillable MegaTank! Shocking ~1.0 JPY per A4 color page; prints thousands without refills",
        "zh": "大容量连供大墨仓！单张彩色成本仅约1日元，月印几百张毫无耗材负担"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20G3390",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20G3390%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p16",
      "status": "active",
      "maker": "Brother",
      "name": "PRIVIO DCP-J1270N",
      "model": "DCP-J1270N",
      "price": 28380,
      "groupId": "bulk_low_cost",
      "ink": "大容量カートリッジ4色",
      "costDoc": "約1.0円(黒)/約6.1円(カラー)",
      "costPhoto": "約19.0円",
      "duplex": "自動両面",
      "paper": "前面150枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約14秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◎",
        "photo": "◯",
        "doc": "◎",
        "duplex": "◎",
        "speed": "◎"
      },
      "desc": {
        "ja": "大容量カートリッジで交換頻度激減＆自動両面・150枚大容量トレイ。家庭用と大量印刷の完璧な融合",
        "en": "High-yield cartridges with auto-duplex & 150-sheet tray; clean cartridge replacement with low costs",
        "zh": "超大容量墨盒+自动双面+150张进纸盒，免去注墨漏脏烦恼，低成本大印量"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Abrother.co.jp%20DCP-J1270N",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Abrother.co.jp%20DCP-J1270N%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p17",
      "status": "active",
      "maker": "Canon",
      "name": "PIXUS XK140",
      "model": "XK140",
      "price": 36300,
      "groupId": "bulk_low_cost",
      "ink": "プレミアム6色(低コスト設計)",
      "costDoc": "約4.1円",
      "costPhoto": "約10.8円(L判)",
      "duplex": "自動両面",
      "paper": "前面100枚+背面50枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約16秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◎",
        "photo": "◎",
        "doc": "◎",
        "duplex": "◎",
        "speed": "◎"
      },
      "desc": {
        "ja": "写真画質を極めながらL判1枚約10.8円の超低インクコスト！写真をたくさん残したい家庭の救世主",
        "en": "Premium 6-color photo quality at an astonishing ~10.8 JPY per photo; best for photo enthusiasts",
        "zh": "6色高精度相片冲印，单张相片成本压至约10.8日元，宝宝与家庭影集救星"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20XK140",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20XK140%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p18",
      "status": "active",
      "maker": "Canon",
      "name": "PIXUS XK510",
      "model": "XK510",
      "price": 54780,
      "groupId": "bulk_low_cost",
      "ink": "プレミアム6色(低コスト設計)",
      "costDoc": "約4.1円",
      "costPhoto": "約10.8円(L判)",
      "duplex": "自動両面",
      "paper": "前面100枚+背面50枚",
      "adf": "なし",
      "a3": "なし",
      "speed": "約10秒(L判)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◎",
        "photo": "◎",
        "doc": "◎",
        "duplex": "◎",
        "speed": "◎"
      },
      "desc": {
        "ja": "高精細FINEヘッドによる最上位フォト画質×低ランニングコスト。作品制作・大量フォトプリントの頂点",
        "en": "Ultimate FINE print head yielding professional photo gallery results with slashed operating costs",
        "zh": "高密度超细微喷头+超低单张耗材，专业摄影师与大量相册制作顶级方案"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20XK510",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Acanon.jp%20XK510%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "p19",
      "status": "active",
      "maker": "Brother",
      "name": "PRIVIO MFC-J7100CDW",
      "model": "MFC-J7100CDW",
      "price": 30800,
      "groupId": "business_a3",
      "ink": "4色独立全色顔料",
      "costDoc": "約1.7円(黒)/約6.5円(カラー)",
      "costPhoto": "約22.0円",
      "duplex": "自動両面(A3対応)",
      "paper": "前面250枚カセット",
      "adf": "あり(A3対応50枚)",
      "a3": "対応(プリント/スキャン)",
      "speed": "約28ipm(高速)",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "cost": "◎",
        "photo": "△",
        "doc": "◎",
        "duplex": "◎",
        "speed": "◎"
      },
      "desc": {
        "ja": "A3プリント＆A3スキャン＆A3両面を3万円で網羅！全色顔料インクで図面・ポスター・店舗業務に無敵",
        "en": "Full A3 print/scan/copy with all-pigment waterproof inks and 50-sheet A3 ADF around 30k JPY",
        "zh": "3万日元实现A3双面打印+A3扫描！全色颜料防水耐光，设计图纸与店铺海报利器"
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Abrother.co.jp%20MFC-J7100CDW",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Abrother.co.jp%20MFC-J7100CDW%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
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
  "category": "printer",
  "storeName": "",
  "version": "2026-10-23",
  "questions": {},
  "custom": []
}
</script>
<!-- ▲▲▲ ヒアリング設定ここまで ▲▲▲ -->
<!-- アプリを閉じた直後・読み込み中に一瞬見える画面 -->
<div class="pg-card">
  <div class="pg-ico" aria-hidden="true">💻</div>
  <h1 class="pg-ttl">プリンター</h1>
  <button type="button" class="pg-btn main" id="pg-open">相談をもう一度ひらく</button>
  <a class="pg-btn sub" id="pg-back" href="info/">← エリアへ戻る</a>
</div>
<!-- アプリが使う部品（画面には出ません） -->
<select id="lang-switcher" aria-hidden="true" tabindex="-1"><option value="ja">ja</option><option value="en">en</option><option value="zh">zh</option></select>
<div id="modal"><a id="modal-link-btn" href="javascript:void(0)"></a></div>
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
  var APP = "printer";                 // このページの相談アプリ
  var ROOT_ID = "pr-app";            // アプリの表示エリア
  var AREA_URL = "info/";       // 閉じたときに戻るエリアページ
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
  var LKEY = "nj-inventory-" + BASE.category + "-v1";   // この端末での編集内容

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
  var LKEY = "nj-hearing-" + (BASE.category || "pc") + "-v1";
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
      + '<div class="iv-ttl">' + kt("在庫管理", "grad-text") + "<small>" + kt(B.label + " ・ 公開データ " + B.version) + "</small></div><span class=\"iv-sp\"></span>"
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
        + '<button style="--i:0" data-m="export-html"><span class="e">⬇️</span><span>HTMLを書き出す<small>在庫とヒアリング設定入りの product-pc.html を保存 → サイトに上げ直すと全端末に反映</small></span></button>'
        + '<button style="--i:1" data-m="export-json"><span class="e">🧾</span><span>在庫データ（JSON）を保存<small>バックアップや、他の端末への受け渡しに</small></span></button>'
        + '<label style="--i:2"><span class="e">⬆️</span><span>在庫データ（JSON）を読み込む<small>保存したJSONの内容にそろえます</small></span><input type="file" accept=".json,application/json" hidden data-m-file></label>'
        + '<button style="--i:3" data-m="refresh"><span class="e">↻</span><span>最新の状態にする<small>スマホでは一覧を下に引っぱっても更新できます</small></span></button>'
        + (n ? '<button style="--i:5" class="dng" data-m="reset"><span class="e">↺</span><span>この端末の編集をすべて取り消す<small>' + n + "件の編集を捨てて、公開データに戻します</small></span></button>" : "")
        + "</div>",
      onClick: function (e, api) {
        var b = e.target.closest("[data-m]"); if (!b || b.hasAttribute("data-m-file")) return;
        var m = b.getAttribute("data-m"); if (b.tagName === "LABEL") return;
        api.close(true);
        if (m === "export-html") exportHtml();
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
      download(location.pathname.split("/").pop() || "pc/", out, "text/html");
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

<!-- ===== 相談アプリ: printer ===== -->
<style>
.pr-svg {
  width: 112px;
  height: 76px;
  display: block;
  margin: 0 auto;
}
.fr-card.sel .pr-svg {
  margin: 0;
}
@keyframes prpaper {
  0%,
  to {
    transform: translateY(0);
  }
  50% {
    transform: translateY(7px);
  }
}
.pr-paper {
  animation: prpaper 2.6s ease-in-out infinite;
  animation-delay: var(--dl,0s);
}
@keyframes prdot {
  0%,
  to {
    opacity: .35;
    transform: scale(.7);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}
.pr-dot {
  transform-box: fill-box;
  transform-origin: center;
  animation: prdot 1.8s ease-in-out infinite;
  animation-delay: var(--dl,0s);
}
@keyframes prlvl {
  0%,
  to {
    transform: scaleY(.5);
  }
  50% {
    transform: scaleY(1);
  }
}
.pr-lvl {
  transform-box: fill-box;
  transform-origin: bottom;
  animation: prlvl 3s ease-in-out infinite;
  animation-delay: var(--dl,0s);
}
.pr-cmp {
  width: 100%;
  border-collapse: collapse;
  font-size: .86rem;
  line-height: 1.55;
}
.pr-cmp td,
.pr-cmp th {
  padding: 7px 6px;
  border-bottom: 1px solid #e2e8f0;
  vertical-align: top;
  text-align: left;
}
.pr-cmp th {
  color: #1d4ed8;
  white-space: nowrap;
  width: 6.8em;
}
.pr-src {
  font-size: .78rem;
  color: #94a3b8;
  line-height: 1.5;
  margin-top: 6px;
}
@keyframes prtw {
  0%,
  to {
    opacity: .3;
  }
  50% {
    opacity: 1;
  }
}
.pr-tw {
  animation: prtw 1.6s ease-in-out infinite;
}
@keyframes prfl {
  0%,
  to {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
.pr-fl {
  animation: prfl 2.4s ease-in-out infinite;
}
@keyframes prbeam {
  0%,
  to {
    transform: translateY(0);
  }
  50% {
    transform: translateY(22px);
  }
}
.pr-beam {
  animation: prbeam 2.2s ease-in-out infinite;
}
.pr-sel {
  border: 0;
  background: #f1f5f9;
  border-radius: 99px;
  padding: 6px 8px;
  font-size: .86rem;
  font-weight: 700;
  color: #475569;
}
.pr-qi {
  width: 88px;
  height: 66px;
  display: block;
  margin: 2px auto 6px;
}
.pr-mk {
  display: block;
  margin: 0 auto;
  width: 64px;
  max-width: 100%;
  height: auto;
  background: none;
}
.pr-mk.hot {
  animation: prfl 1.6s ease-in-out infinite;
}
.pr-mini .pr-svg {
  width: 46px;
  height: 32px;
}
.pr-xe {
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 4px;
}
.pr-xm {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 6px;
}
.fr-opt .ot {
  flex: 1;
  min-width: 0;
}
.fr-opt.rec:not(.sel) {
  background: #fffbeb;
  border-color: #fde68a;
}
.fr-opt .rb {
  display: block;
  font-size: .72rem;
  font-weight: 600;
  color: #b45309;
  margin-top: 2px;
}
</style><div id="pr-app" class="fr-root" role="dialog" aria-label="プリンター購入相談"></div>
<script>
(function () {
  "use strict";
  const PRODUCTS = (window.NJ_INV ? window.NJ_INV.products() : []);
  const ACCS = [
    {
      name: { ja: "メーカー純正 大容量インクセット", en: "OEM Genuine High-Yield Ink Set", zh: "原厂大容量高保真墨盒/墨水套装" },
      price: "¥4,980",
      desc: {
        ja: "ヘッド詰まりを防ぎ、写真の色あせを100年守る安心の純正品",
        en: "Prevents nozzle clogging and preserves photo colors for decades",
        zh: "有效防止打印头堵塞与偏色，保证相片百年不褪色的原厂首选"
      }
    },
    {
      name: {
        ja: "高白色 高平滑 マルチコピー用紙 A4 (500枚入)",
        en: "Ultra-White Smooth A4 Copy Paper (500 sheets)",
        zh: "高白度平滑多功能A4复印纸 (500张)"
      },
      price: "¥680",
      desc: {
        ja: "文字がくっきり裏写りしにくい。毎日のレポートや提出書類に最適",
        en: "Sharp contrast with minimal bleed-through for crisp double-sided docs",
        zh: "纸质挺括细腻，字迹边缘锐利不渗墨，双面打印不透光"
      }
    },
    {
      name: {
        ja: "写真用紙プレミアム 光沢・厚手 L判 (100枚入)",
        en: "Premium Heavyweight Glossy Photo Paper L-size (100 pack)",
        zh: "高级高光加厚相纸 L判/6寸 (100张装)"
      },
      price: "¥1,180",
      desc: {
        ja: "写真屋さんのプリントと同じ厚みとツヤ。スマホの思い出を最高品質で保存",
        en: "Photo-lab weight and high-gloss coating to bring memories to life",
        zh: "与冲印店一致的细腻厚实光泽感，高保真锁住手机相册美好瞬间"
      }
    }
  ];
  const QTR = {
    ink: {
      "4色ハイブリッド(一体型)": ["4-color hybrid (integrated)", "4色混合(一体式)"],
      "4色独立(顔料黒+染料3色)": ["4 separate inks (pigment black + 3 dye colors)", "4色独立(颜料黑+3色染料)"],
      "4色ハイブリッド(独立)": ["4-color hybrid (separate)", "4色混合(独立)"],
      "5色独立ハイブリッド": ["5-color separate hybrid", "5色独立混合"],
      "6色染料独立": ["6 separate dye inks", "6色染料独立"],
      "6色独立(グレーインク搭載)": ["6 separate inks (with gray ink)", "6色独立(含灰色墨水)"],
      特大容量インクボトル4色: ["4 extra-large ink bottles", "4色超大容量墨水瓶"],
      大容量カートリッジ4色: ["4-color high-capacity cartridges", "4色大容量墨盒"],
      "プレミアム6色(低コスト設計)": ["Premium 6-color (low-cost design)", "高级6色(低成本设计)"],
      "4色独立全色顔料": ["4 separate all-pigment inks", "4色独立全颜料"]
    },
    duplex: {
      手動: ["Manual", "手动"],
      自動両面: ["Auto duplex", "自动双面"],
      "自動両面(A3対応)": ["Auto duplex (A3)", "自动双面(支持A3)"]
    },
    paper: {
      背面60枚: ["Rear 60 sheets", "后部60张"],
      背面50枚: ["Rear 50 sheets", "后部50张"],
      "前面100+背面20枚": ["Front 100 + rear 20 sheets", "前部100+后部20张"],
      背面100枚: ["Rear 100 sheets", "后部100张"],
      "前面100枚+手差し1枚": ["Front 100 sheets + 1 manual-feed sheet", "前部100张+手送1张"],
      "前面100枚+背面20枚": ["Front 100 + rear 20 sheets", "前部100张+后部20张"],
      "前面100枚+手差し": ["Front 100 sheets + manual feed", "前部100张+手送"],
      "前面100枚+背面100枚": ["Front 100 + rear 100 sheets", "前部100张+后部100张"],
      前面100枚: ["Front 100 sheets", "前部100张"],
      "前面100枚+背面50枚": ["Front 100 + rear 50 sheets", "前部100张+后部50张"],
      "前面2段+背面手差し": ["Front 2 trays + rear manual feed", "前部2层+后部手送"],
      前面150枚: ["Front 150 sheets", "前部150张"],
      前面250枚カセット: ["Front 250-sheet cassette", "前部250张纸盒"]
    },
    adf: {
      なし: ["None", "无"],
      "あり(20枚)": ["Yes (20 sheets)", "有(20张)"],
      "あり(A3対応50枚)": ["Yes (50 sheets, A3)", "有(50张,支持A3)"]
    },
    a3: { なし: ["No", "无"], "対応(プリント/スキャン)": ["Supported (print/scan)", "支持(打印/扫描)"] }
  };
  const GROUPS = [
    {
      id: "entry_value",
      n: ["エントリー（低価格）", "Entry (low price)", "入门款（低价）"],
      sub: ["1万円前後", "Around ¥10,000", "1万日元左右"],
      lay: "e",
      who: [
        "たまに書類・年賀状・コピーを使う方",
        "Those who occasionally print documents, New Year’s cards, or make copies",
        "偶尔打印文件·贺年卡或复印的人"
      ],
      pro: [
        "本体が安くコンパクト。スマホからすぐ印刷できる",
        "Inexpensive and compact. Print right from your smartphone.",
        "机身便宜小巧。可直接用手机打印。"
      ],
      con: [
        "1枚あたりのインク代は約14〜15円と割高。たくさん刷ると本体代の差を上回る",
        "Ink costs about ¥14–15 per page, which is high. Heavy printing quickly outweighs the savings on the unit.",
        "每张墨水成本约14～15日元，偏高。大量打印的话很快就会超过机身省下的差价。"
      ]
    },
    {
      id: "doc_work_student",
      n: ["文書・レポート向け", "For documents & reports", "文档·报告适用"],
      sub: ["1.5〜2万円", "¥15,000–20,000", "1.5～2万日元"],
      lay: "d",
      who: [
        "レポート・テレワーク・学校書類を毎週刷る方",
        "Those who print reports, remote-work files, and school papers every week",
        "每周都要打印报告·远程办公文件·学校资料的人"
      ],
      pro: [
        "自動両面と前面給紙が標準。ブラザーはモノクロ約3円と安く、ADF付きもある",
        "Auto duplex and front paper feed are standard. Brother’s monochrome cost is low at about "
          + "¥3, and some models have an ADF.",
        "标配自动双面和前部进纸。Brother黑白成本低至约3日元，还有带ADF的机型。"
      ],
      con: [
        "写真の仕上がりは写真特化機に劣る",
        "Photo quality falls short of photo-focused models.",
        "照片效果不及照片专用机型。"
      ]
    },
    {
      id: "photo_balance",
      n: ["写真高画質（5〜6色）", "High-quality photos (5–6 colors)", "高画质照片（5～6色）"],
      sub: ["2〜3.8万円", "¥20,000–38,000", "2～3.8万日元"],
      lay: "p",
      who: [
        "スマホ写真・年賀状・アルバムをきれいに残したい方",
        "Those who want to preserve smartphone photos, New Year’s cards, and albums beautifully",
        "想把手机照片·贺年卡·相册漂亮地保存下来的人"
      ],
      pro: [
        "5〜6色インクで肌色や空の階調がなめらか。書類もきれいに刷れる",
        "5–6 inks give smooth skin tones and sky gradations. Documents print cleanly too.",
        "5～6色墨水让肤色和天空的渐变过渡更平滑。文件也能打印得很漂亮。"
      ],
      con: [
        "写真1枚のインク代は約16〜20円。大量印刷には向かない",
        "Ink costs about ¥16–20 per photo. Not suited to high-volume printing.",
        "每张照片墨水成本约16～20日元。不适合大量打印。"
      ]
    },
    {
      id: "bulk_low_cost",
      n: ["大量印刷・低コスト", "High volume / low cost", "大量打印·低成本"],
      sub: ["2.2〜5.5万円", "¥22,000–55,000", "2.2～5.5万日元"],
      lay: "b",
      who: [
        "月100枚以上刷る方・写真をたくさん刷りたい方",
        "Those who print 100+ pages a month or lots of photos",
        "每月打印100张以上或想大量打印照片的人"
      ],
      pro: [
        "タンク式・大容量・低コスト設計でインク代が桁違いに安い",
        "Tank type, high capacity, and low-cost design make ink dramatically cheaper.",
        "采用墨仓式·大容量·低成本设计，墨水成本便宜得多。"
      ],
      con: [
        "本体価格は高め。タンク式はボトルから注ぐ手間がある",
        "Higher unit price. Tank models require refilling from bottles.",
        "机身价格较高。墨仓式需要从瓶中注墨，比较费事。"
      ]
    },
    {
      id: "business_a3",
      n: ["A3ビジネス複合機", "A3 business all-in-one", "A3商务复合机"],
      sub: ["約3万円", "About ¥30,000", "约3万日元"],
      lay: "a",
      who: [
        "図面・チラシ・A3資料を扱う方",
        "Those who handle drawings, flyers, and A3 documents",
        "需要处理图纸·传单·A3资料的人"
      ],
      pro: [
        "A3の印刷・スキャン・両面に対応。全色顔料で耐水・耐光",
        "Supports A3 printing, scanning, and duplex. All-pigment inks are water- and light-resistant.",
        "支持A3打印·扫描·双面。全颜料墨水防水·耐光。"
      ],
      con: [
        "本体が大きく、写真の画質は写真特化機に劣る",
        "Large body, and photo quality falls short of photo-focused models.",
        "机身较大，照片画质不及照片专用机型。"
      ]
    }
  ];
  const CRIT = [
    [
      "price",
      ["本体価格", "Unit price", "机身价格"],
      "💴",
      ["本体価格の手頃さ", "Affordability of the unit price", "机身价格是否实惠"]
    ],
    [
      "photo",
      ["写真画質", "Photo quality", "照片画质"],
      "📷",
      [
        "色数と階調表現（6色・グレーインクなど）",
        "Number of colors and tonal gradation (6 colors, gray ink, etc.)",
        "色数与层次表现（6色·灰色墨水等）"
      ]
    ],
    [
      "doc",
      ["文書品質", "Document quality", "文档品质"],
      "📄",
      [
        "文字のくっきり感・耐水性（顔料黒の有無など）",
        "Text sharpness and water resistance (e.g. presence of pigment black)",
        "文字清晰度·防水性（是否有颜料黑等）"
      ]
    ],
    [
      "run",
      ["インク代", "Ink cost", "墨水成本"],
      "💧",
      [
        "1枚あたりのインク代（文書・写真の平均）",
        "Ink cost per page (average of documents and photos)",
        "每张墨水成本（文档与照片的平均值）"
      ]
    ],
    [
      "conv",
      ["使いやすさ", "Ease of use", "易用性"],
      "⚙️",
      [
        "自動両面・前面給紙・ADFの充実度",
        "How well-equipped it is: auto duplex, front feed, ADF",
        "自动双面·前部进纸·ADF的完备程度"
      ]
    ],
    [
      "speed",
      ["速さ", "Speed", "速度"],
      "⚡",
      ["写真1枚・文書の出力スピード", "Output speed for a photo and documents", "照片·文档的输出速度"]
    ]
  ];
  const root = document.getElementById("pr-app");
  if (!root)
    return;
  const LI = { ja: 0, en: 1, zh: 2 };
  const lang = () => typeof currentLang !== "undefined" && currentLang || "ja";
  const L = (a, b, c) => [a, b, c];
  const L3 = a => Array.isArray(a) ? a[LI[lang()]] : a;
  const P = o => typeof o === "string" ? o : (o && (o[lang()] || o.ja)) || "";
  const F = function (a) {
    let s = L3(a);
    for (let n = 1; n < arguments.length; n++)
      s = s.split("{" + (n - 1) + "}").join(arguments[n]);
    return s;
  };
  const AP = n => {
    const t = Math.round(n),
      r = Math.pow(10, Math.max(0, String(t).length - 2)),
      a = (Math.round(t / r) * r).toLocaleString("ja-JP");
    return L3(["約" + a + "円", "approx. ¥" + a, "约" + a + "日元"]);
  };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const R = clamp;
  const Y = e => {
    const t = /[\d.]+/.exec(e);
    return t ? parseFloat(t[0]) : 99;
  };
  const short = s => (s || "").replace(/[（(][^）)]*[）)]/g, "").replace(/[？?]$/, "");
  const G5 = { "◎": 5, "◯": 3.5, "△": 2, "✕": 1 };
  const TYPES = GROUPS.map(g => ({ id: g.id, g: g }));
  const typeOf = p => TYPES.filter(t => t.id === p.groupId)[0];
  const tName = t => L3(t.g.n);
  const TSHORT = {
    entry_value: L("エントリー", "Entry", "入门"),
    doc_work_student: L("文書向け", "Documents", "文档"),
    photo_balance: L("写真高画質", "Photo", "照片高画质"),
    bulk_low_cost: L("大量・低コスト", "Bulk / low cost", "大量低成本"),
    business_a3: L("A3複合機", "A3 MFP", "A3复合机")
  };
  const tShort = t => L3(TSHORT[t.id] || t.g.n);
  const MAKERS = [
    {
      id: "Canon",
      key: ["Canon"],
      c: "#c8102e",
      ic: "C",
      n: L("キヤノン", "Canon", "佳能"),
      t: L(
        "6色の写真機と、大容量インクのタンク式（ギガタンク）が特長",
        "Strong in 6-color photo models and tank-type Giga Tank",
        "擅长6色照片机型与大容量墨仓式（Giga Tank）"
      )
    },
    {
      id: "Epson",
      key: ["Epson"],
      c: "#0a3d91",
      ic: "E",
      n: L("エプソン", "Epson", "爱普生"),
      t: L(
        "顔料黒と染料のインク構成。写真機から手頃な入門機まで",
        "Pigment black plus dye inks; from photo models to affordable entry models",
        "颜料黑搭配染料墨水，从照片机型到入门款均有"
      )
    },
    {
      id: "Brother",
      key: ["Brother"],
      c: "#0090d4",
      ic: "B",
      n: L("ブラザー", "Brother", "兄弟"),
      t: L(
        "モノクロ文書が安く、ADF付きやA3複合機が得意",
        "Cheap monochrome pages; strong in ADF and A3 models",
        "黑白文档成本低，擅长带ADF与A3复合机"
      )
    }
  ];
  const makerOf = p => MAKERS.filter(m => m.key.indexOf(p.maker) >= 0)[0]
    || {
      id: p.maker,
      key: [p.maker],
      c: "#475569",
      ic: (p.maker || "?").charAt(0),
      n: [p.maker, p.maker, p.maker],
      t: ["", "", ""]
    };
  const mName = p => L3(makerOf(p).n);
  const pName = p => LI[lang()] ? p.name.replace("ギガタンク", "Giga Tank") : p.name;
  const cName = c => L3(c[1]);
  const cDesc = c => L3(c[3]);
  const Tr = (k, t) => {
    const o = LI[lang()] || 0;
    if (!o)
      return t;
    const n = QTR[k][t];
    return n ? n[o - 1] : t;
  };
  const HH = e => {
    const t = LI[lang()] || 0;
    return t
      ? t === 1
        ? e.replace(/約([\d.]+)円/g, "~¥$1").replace(/\(モノクロ\)/g, " (mono)").replace(
          /\(黒\)/g,
          " (black)"
        ).replace(/\(カラー\)/g, " (color)").replace(/\(L判\)/g, " (L-size)")
        : e.replace(/約([\d.]+)円/g, "约$1日元").replace(/\(モノクロ\)/g, "(黑白)").replace(
          /\(黒\)/g,
          "(黑色)"
        ).replace(/\(カラー\)/g, "(彩色)")
      : e;
  };
  const SPD = e => {
    const t = LI[lang()] || 0;
    if (!t)
      return e;
    let o = /^約(\d+)秒\(L判\)$/.exec(e);
    return o
      ? t === 1 ? "approx. " + o[1] + " sec (L-size)" : "约" + o[1] + "秒(L判)"
      : (
        o = /^約(\d+)ipm\(高速\)$/.exec(e),
          o ? t === 1 ? "approx. " + o[1] + " ipm (high speed)" : "约" + o[1] + "ipm(高速)" : e
      );
  };
  const has6 = p => /6色/.test(p.ink);
  const tank = p => p.groupId === "bulk_low_cost" && /タンク|ボトル/.test(p.ink);
  const autoDup = p => /自動両面/.test(p.duplex);
  const frontFeed = p => /前面/.test(p.paper);
  /* ---------- text ---------- */
  const T = {
    back: L("← 一覧へ", "← Back to list", "← 返回列表"),
    title: L("ノジマ式 プリンター相談", "Nojima Printer Advisor", "Nojima 打印机选购咨询"),
    pill: L(
      '該当<i id="pr-n">{0}</i>/{1}機種',
      '<i id="pr-n">{0}</i>/{1} match',
      '符合<i id="pr-n">{0}</i>/{1}款'
    ),
    prev: L("← ひとつ戻る", "← Back", "← 返回上一步"),
    step0: L("STEP 0 ・ まずは全体像", "STEP 0 · The big picture", "STEP 0 · 先看整体概况"),
    introH: L(
      "プリンターは、大きく<em>5つのタイプ</em>に分かれます",
      "Printers fall into <em>5 main types</em>",
      "打印机大致分为<em>5种类型</em>"
    ),
    introP: L(
      "タップでタイプごとの違いを確認できます。そのあと、まず<b>プリンターをお使いになる状況</b>をおたずねします。<b>これから使い方を決める</b>方は、"
        + "使い方→必要な機能の想定→譲れない1点の順に。<b>すでにお持ち</b>の方は、必要な機能→使い方→譲れない1点の順に進め、店頭の{0}機種から3機種に絞ります。ご予算は、"
        + "使い方に合う機種が見えてから最後におたずねします。",
      "Tap a card to see how the types differ. Then we first ask about <b>your situation</b>. If "
        + "you are <b>deciding how you will use it</b>: how you use it → which features you may need → "
        + "your one non-negotiable. If you <b>already own a printer</b>: which features you need → how "
        + "you use it → your one non-negotiable, narrowing {0} in-store models to 3. We ask about "
        + "budget last, once we see what fits.",
      "点击卡片查看各类型差异。之后先询问<b>您的使用情况</b>。<b>尚未确定用法</b>的顾客：使用方式→可能需要的功能→不可让步的一点；<b>已有打印机</b>的顾客："
        + "必要功能→使用方式→不可让步的一点，从店内{0}款中筛出3款。预算在看清适合您的机型后最后询问。"
    ),
    mdl: L("機種", " models", "款"),
    who: L("向く方", "Best for", "适合人群"),
    pro: L("強み", "Strengths", "优点"),
    con: L("注意", "Watch out", "注意"),
    range: L("価格帯", "Price range", "价格区间"),
    start: L("診断をはじめる →", "Start →", "开始诊断 →"),
    stage: {
      0: L("はじめに｜ご利用の状況", "Start | Your situation", "开始｜使用情况"),
      1: L("必要な機能（コピー・両面・A3など）", "Features you need (copy, duplex, A3…)", "必要功能（复印·双面·A3等）"),
      2: L(
        "使い方のヒアリング（回答で質問が変わります）",
        "How you use it (questions adapt to your answers)",
        "使用方式访谈（问题会随回答变化）"
      ),
      3: L("最終｜譲れない1点とご予算", "Final | Your one non-negotiable and budget", "最终｜不可让步的一点与预算"),
      4: L("必要になりそうな機能の想定", "Features you may need", "可能需要的功能设想")
    },
    recDefault: L("使い方から見たおすすめ", "Suggested for your use", "契合使用方式的推荐"),
    budWhy: L("最有力の「{0}」が{1}前後のため", "The best-fit “{0}” costs around {1}", "最契合的“{0}”约{1}"),
    budNote: L(
      "ここまでの回答に最も合う機種の価格帯は、<b>{0}〜{1}</b>が目安です。薄く色が付いた選択肢が、使い方に合う予算の目安です。",
      "Models that best fit your answers cost roughly <b>{0} – {1}</b>. The softly highlighted "
        + "option is the budget that fits your use.",
      "最契合您回答的机型价格约<b>{0}～{1}</b>。浅色高亮的选项是契合使用方式的预算参考。"
    ),
    xeT: L("🔎 いまの見立て：5つのタイプのうち…", "🔎 Current read: which of the 5 types…", "🔎 目前判断：5种类型中…"),
    xeNow: L(
      "今のところ <b>{0}</b> が当てはまりそうです（{1}）。カッコ内は、ここまでの条件に合う残り機種数です。",
      "So far <b>{0}</b> looks like the best match ({1}). Numbers in brackets are models that "
        + "still fit your answers.",
      "目前<b>{0}</b>最可能适合（{1}）。括号内为仍符合目前回答的机型数。"
    ),
    xeUp: L(
      "もう少し上のランクなら <b>{0}</b>（{1}・{2}）。現在の最有力（{5}）より<b>{3}プラス</b>で、{4}がプラスされます。",
      "One rank up: <b>{0}</b> ({1}, {2}): <b>{3} more</b> than your current best fit ({5}), adding {4}.",
      "再上一档：<b>{0}</b>（{1}·{2}），比目前最契合机型（{5}）<b>多{3}</b>，增加{4}。"
    ),
    xeMk: L("🏷️ いま合いそうなメーカー", "🏷️ Makers that seem to fit", "🏷️ 目前看起来适合的品牌"),
    upT: L(
      "💡 お客様の使い方から、ひとつ上のクラスもおすすめです",
      "💡 Your use suggests considering one class up",
      "💡 根据您的使用方式，也建议考虑高一档"
    ),
    upBulk: L(
      "月100枚以上刷るなら、本体は高めでもタンク式・大容量クラスのほうが、インク代で本体の差を取り戻しやすくなります。",
      "If you print 100+ pages a month, a tank or high-capacity class costs more upfront but can "
        + "win it back in ink.",
      "每月打印100张以上的话，墨仓式·大容量机型机身虽贵，但墨水成本更容易把差价赚回来。"
    ),
    upPhoto: L(
      "アルバムに残す写真なら、6色（グレーインク搭載含む）のクラスが階調となじみます。",
      "For photos worth keeping in an album, 6-color models (including gray ink) give smoother gradation.",
      "要留进相册的照片，6色（含灰色墨水）机型的层次更细腻。"
    ),
    upAdf: L(
      "コピー・スキャンをよく使うなら、ADF付きのクラスが毎回の手間を減らします。",
      "If you copy and scan often, ADF-equipped models save effort every time.",
      "经常复印·扫描的话，带ADF的机型能省去每次的麻烦。"
    ),
    stockNote: L(
      "在庫・価格は日々変動します。表示の価格は上2桁の目安です。ご購入前に、必ず店頭スタッフで最新の在庫・価格をご確認ください。インク代・速度は各機種の公称値に基づく目安です。",
      "Stock and prices change daily. Prices shown are rounded estimates. Please confirm current "
        + "stock and price with our staff before buying. Ink costs and speeds are estimates based on "
        + "rated values.",
      "库存与价格每日变动。所示价格为取整后的参考值，购买前请务必向店员确认最新库存与价格。墨水成本与速度为基于标称值的参考。"
    )
  };
  const RS = {
    a3: L("A3の印刷・スキャンに非対応です", "Does not support A3 printing and scanning", "不支持A3打印·扫描"),
    adf: L("ADF（原稿自動送り）がありません", "No ADF (automatic document feeder)", "没有ADF（自动进稿器）"),
    dup: L(
      "自動両面印刷に非対応（手動両面）です",
      "No auto duplex printing (manual duplex only)",
      "不支持自动双面打印（仅手动双面）"
    ),
    feed: L(
      "前面給紙ではありません（用紙は背面にセット）",
      "Not front-feed (paper is loaded at the rear)",
      "不是前部进纸（纸张放在后部）"
    ),
    tank: L(
      "ボトルからインクを注ぐタンク式です（手が汚れる場合あり）",
      "Tank type refilled from bottles (your hands may get dirty)",
      "需要从瓶中注墨的墨仓式（可能弄脏手）"
    ),
    pq: L("写真画質は6色機より控えめです", "Photo quality is more modest than 6-color models", "照片画质比6色机型更为一般"),
    vol: L(
      "大量に刷るとインク代がかさみます（書類1枚{0}）",
      "Heavy printing adds up in ink cost (per doc page {0})",
      "大量打印时墨水成本会累积（每页文档{0}）"
    ),
    a3ok: L("A3の印刷・スキャンに対応", "Supports A3 printing and scanning", "支持A3打印·扫描"),
    adfok: L("ADF搭載：{0}", "ADF included: {0}", "配备ADF：{0}"),
    dupok: L("自動両面印刷に対応", "Supports auto duplex printing", "支持自动双面打印"),
    feedok: L("前面給紙で用紙を入れっぱなしにできる", "Front feed lets you leave paper loaded", "前部进纸，可一直放纸"),
    six: L("6色インクで階調がなめらか", "6 inks for smooth gradation", "6色墨水，层次平滑"),
    cheap: L("書類1枚が{0}と安い", "Only {0} per document page", "每页文档仅{0}"),
    tankok: L("大容量でインク代が安いタンク式", "Tank type with cheap ink", "大容量墨仓式，墨水成本低"),
    over: L("本体{0}が予算の上限を超えます", "Unit price {0} exceeds your budget limit", "机身价格{0}超出预算上限"),
    within: L("予算内（{0}）", "Within budget ({0})", "预算内（{0}）")
  };
  const NGK = {
    a3: L("A3", "A3", "A3"),
    adf: L("ADF", "ADF", "ADF"),
    dup: L("自動両面", "auto duplex", "自动双面")
  };
  const rtext = r => F.apply(null, [RS[r.r]].concat(r.a));
  /* ---------- state & questions ---------- */
  let ST = { a: {}, v: "intro", hist: [], ax: null, give: {}, lock: 0, back: false };
  const O = (l, v) => [l, v];
  const val = f => typeof f === "function" ? f() : f;
  const QS = [];
  const qBy = id => QS.filter(q => q.id === id)[0];
  const isNew = () => ST.a.sit === "new";
  const stageOf = q => isNew() && q.stNew != null ? q.stNew : q.st;
  const HC = window.NJ_HEAR ? window.NJ_HEAR.cfg() : { questions: {}, custom: [] };
  const hq = q => (HC.questions || {})[q.id] || {};
  const tx3 = o => o && o.ja ? [o.ja, o.en || o.ja, o.zh || o.ja] : null;
  const vis = q => !(hq(q).hidden && q.st !== 0) && (!q.show || q.show());
  const opts = q => {
    const c = hq(q), oo = c.opts || {};
    let a = val(q.o).filter(o => !(oo[o[1]] && oo[o[1]].hidden)).map(o => {
      const t = oo[o[1]] && tx3(oo[o[1]].label);
      return t ? [t, o[1]] : o;
    });
    if (!a.length) a = val(q.o);
    if (c.order && c.order.length) a.sort((x, y) => (c.order.indexOf(x[1]) + 1 || 999) - (c.order.indexOf(y[1]) + 1 || 999));
    return a;
  };
  const qT = q => L3(tx3(hq(q).t) || (isNew() && q.tn ? q.tn : val(q.t)));
  const qH = q => L3(tx3(hq(q).h) || (isNew() && q.hn ? q.hn : val(q.h)));
  const qsOf = s => QS.filter(q => stageOf(q) === s && vis(q));
  function ans(id) {
    const q = qBy(id);
    if (!q || !vis(q))
      return null;
    const v = ST.a[id];
    if (v == null)
      return null;
    return opts(q).some(o => o[1] === v) ? v : null;
  }
  function lab(id) {
    const q = qBy(id), v = ans(id);
    if (!q || v == null)
      return "";
    const o = opts(q).filter(x => x[1] === v)[0];
    return o ? L3(o[0]) : "";
  }
  const FLOW_NEW = [0, 2, "r2", 4, 3, "final"], FLOW_DEC = [0, 1, "r1", 2, "r2", 3, "final"];
  const flow = () => isNew() ? FLOW_NEW : FLOW_DEC;
  function nextOf(cur) {
    const f = flow();
    let n = f.indexOf(typeof cur === "object" ? cur.st : cur);
    for (n++; n < f.length; n++) {
      const s = f[n];
      if (typeof s !== "number")
        return s;
      if (qsOf(s).length)
        return { st: s, i: 0 };
    }
    return "final";
  }
  function prog(v) {
    if (v === "intro")
      return 4;
    const f = flow();
    const s = typeof v === "object" ? v.st : v;
    const a = Math.max(0, f.indexOf(s));
    const n = typeof v === "object" ? v.i / Math.max(1, qsOf(v.st).length) : 0;
    return 6 + 88 * (a + n) / f.length;
  }
  const useIs = (...a) => a.indexOf(ans("use")) >= 0;
  QS.push(
    {
      id: "sit",
      st: 0,
      t: L("まず、プリンターをお使いになる状況を教えてください", "First, tell us about your situation", "请先告诉我们您的使用情况"),
      h: L(
        "これから使い方を決める方は「使い方→必要になりそうな機能→譲れない1点」の順に、すでにプリンターをお持ちの方は「必要な機能→使い方→譲れない1点」の順におたずねします。",
        "If you are still deciding how you will use it, we ask how you use it, then which features "
          + "you may need, then your one non-negotiable. If you already own a printer, we start with the "
          + "features you need, then how you use it, then your one non-negotiable.",
        "尚未确定用法的顾客：使用方式→可能需要的功能→不可让步的一点；已有打印机的顾客：必要功能→使用方式→不可让步的一点。"
      ),
      o: [
        O(
          L(
            "初めてのプリンター・新生活（使い方はこれから）",
            "My first printer / new life (use not decided)",
            "首台打印机·新生活（用法未定）"
          ),
          "new"
        ),
        O(L("今のプリンターを買い替える", "Replacing my current printer", "更换现有打印机"), "repl"),
        O(
          L(
            "プリンターはあるが、もう1台追加したい（写真用・仕事用など）",
            "I have one and want another (photos, work, etc.)",
            "已有打印机，想再添一台（照片用·工作用等）"
          ),
          "add"
        )
      ]
    },
    {
      id: "scan",
      st: 1,
      stNew: 4,
      t: L("コピー・スキャンは使いますか？", "Do you use copying and scanning?", "会使用复印·扫描吗？"),
      tn: L("コピーやスキャンを使う機会はありそうですか？", "Do you expect to copy or scan?", "预计会使用复印或扫描吗？"),
      h: L(
        "コピー・スキャンをあまり使わないなら、ADFなどの機能は考えなくて大丈夫です。回答によってこのあとの質問が変わります。",
        "If you rarely copy or scan, you can ignore features like ADF. Your answer changes the next questions.",
        "如果很少复印·扫描，就不必考虑ADF等功能。您的回答会改变后续问题。"
      ),
      o: [
        O(
          L(
            "よく使う（書類・資料をまとめてコピー・読み取り）",
            "Often (copying and scanning documents in bulk)",
            "经常使用（成叠复印·扫描文件资料）"
          ),
          "often"
        ),
        O(L("たまに使う（1枚ずつで十分）", "Sometimes (one page at a time is fine)", "偶尔使用（逐张就够了）"), "some"),
        O(L("ほとんど使わない", "Hardly ever", "几乎不用"), "none")
      ]
    },
    {
      id: "adf",
      st: 1,
      stNew: 4,
      show: () => ans("scan") === "often",
      t: L(
        "複数枚の原稿をまとめて読み取る「ADF」は必要ですか？",
        "Do you need an “ADF” to scan multiple pages at once?",
        "是否需要可一次扫描多页原稿的“ADF”？"
      ),
      tn: L(
        "複数枚をまとめて読み取る「ADF」は必要になりそうですか？",
        "Will you need an “ADF” to scan multiple pages at once?",
        "可能需要能一次扫描多页的“ADF”吗？"
      ),
      h: L(
        "ADF（原稿自動送り）があると十数枚の書類を一度に読み取れます。ない機種はガラス面に1枚ずつ置きます。",
        "With an ADF (automatic document feeder) you can scan a dozen or so pages at once. Models "
          + "without one require placing each page on the glass.",
        "配备ADF（自动进稿器）可一次扫描十几页文件。没有ADF的机型需要逐张放在玻璃面上。"
      ),
      o: [
        O(
          L("必須（書類をまとめて読み取りたい）", "Essential (I want to scan documents in bulk)", "必须（想一次性扫描整叠文件）"),
          "y"
        ),
        O(L("なくてもよい（1枚ずつでも大丈夫）", "Not necessary (one page at a time is fine)", "没有也可以（逐张也行）"), "n")
      ]
    },
    {
      id: "a3",
      st: 1,
      stNew: 4,
      t: L("A3サイズの印刷・スキャンは必要ですか？", "Do you need A3 printing and scanning?", "是否需要A3尺寸的打印·扫描？"),
      tn: L(
        "A3サイズの印刷・スキャンを使う予定はありますか？",
        "Do you plan to print or scan at A3 size?",
        "打算使用A3尺寸的打印·扫描吗？"
      ),
      h: L(
        "A3対応は本体が大きくなるため、必要な方だけ選びます。「必要」を選ぶとA3対応機のみが残ります。",
        "A3 support makes the unit larger, so choose it only if needed. Selecting “Needed” leaves "
          + "only A3-capable models.",
        "支持A3会使机身更大，仅在需要时选择。选择“需要”后只会保留支持A3的机型。"
      ),
      o: [
        O(L("必要（図面・チラシ・A3資料）", "Needed (drawings, flyers, A3 documents)", "需要（图纸·传单·A3资料）"), "y"),
        O(L("不要（A4までで十分）", "Not needed (A4 is enough)", "不需要（A4以内就够了）"), "n")
      ]
    },
    {
      id: "dup",
      st: 1,
      stNew: 4,
      t: L(
        "用紙を裏返さずに両面に刷れる「自動両面印刷」は必要ですか？",
        "Do you need “auto duplex printing” that prints both sides without flipping the paper?",
        "是否需要无需翻面即可双面打印的“自动双面打印”？"
      ),
      tn: L(
        "用紙を裏返さずに両面に刷れる「自動両面印刷」は必要になりそうですか？",
        "Will you need “auto duplex printing”?",
        "可能需要“自动双面打印”吗？"
      ),
      h: L(
        "「必須」を選ぶと、手動両面の機種は対象外になります（用紙代の節約と手間が減ります）。",
        "Choosing “Essential” excludes manual-duplex models (saves paper and effort).",
        "选择“必须”后，手动双面的机型将被排除（可节省纸张并减少麻烦）。"
      ),
      o: [
        O(
          L(
            "必須（レポート・資料を両面で刷る）",
            "Essential (reports and materials printed double-sided)",
            "必须（报告·资料要双面打印）"
          ),
          "y"
        ),
        O(L("なくてもよい（本体価格を優先）", "Not necessary (unit price comes first)", "没有也可以（优先考虑机身价格）"), "n")
      ]
    },
    {
      id: "use",
      st: 2,
      t: L("主に印刷するのは？", "What will you mainly print?", "主要打印什么？"),
      h: L(
        "回答によって、このあとの質問が変わります。文書中心なら「文字品質」、写真中心なら「写真画質」を重く評価します。",
        "Your answer changes the next questions. Documents weight text quality; photos weight photo quality.",
        "回答会改变后续问题。以文档为主更看重“文字品质”，以照片为主更看重“照片画质”。"
      ),
      o: [
        O(L("文書・プリント・レポート中心", "Mostly documents, handouts, reports", "以文档·讲义·报告为主"), "doc"),
        O(L("写真・年賀状・カラー中心", "Mostly photos, New Year’s cards, color", "以照片·贺年卡·彩色为主"), "photo"),
        O(L("両方バランスよく", "A balance of both", "两者兼顾"), "both"),
        O(
          L(
            "年に数回だけ（年賀状・提出書類など）",
            "Only a few times a year (cards, paperwork)",
            "一年只用几次（贺年卡·提交文件等）"
          ),
          "rare"
        )
      ]
    },
    {
      id: "why",
      st: 2,
      show: () => ST.a.sit === "repl" || ST.a.sit === "add",
      t: () => ST.a.sit === "add"
        ? L("2台目のプリンターは、どんな役割にしたいですか？", "What role will the second printer play?", "第2台打印机想承担什么角色？")
        : L(
          "今のプリンターを買い替える、一番の理由は？",
          "What is the main reason for replacing your printer?",
          "更换打印机的最主要原因是？"
        ),
      h: L(
        "理由によって、このあとの質問が変わります。",
        "Your reason changes the questions that follow.",
        "原因不同，后面的问题也会变化。"
      ),
      o: () => ST.a.sit === "add"
        ? [
          O(
            L("写真をきれいに刷る専用機にしたい", "A dedicated machine for beautiful photos", "想要专门打印漂亮照片的机器"),
            "photo2"
          ),
          O(
            L("仕事・店舗用に書類をたくさん刷りたい", "Lots of documents for work or a shop", "工作·店铺用，要打印大量文件"),
            "office"
          ),
          O(
            L("家用にもう1台（置き場所を分けたい）", "Another one for home (separate locations)", "家里再添一台（分开摆放）"),
            "home2"
          ),
          O(L("お子さまの学習・プリント用", "For my child's study and worksheets", "孩子学习·打印资料用"), "kids")
        ]
        : [
          O(L("壊れた・古くなった", "Broken or old", "坏了·用旧了"), "old"),
          O(L("インク代が高い", "Ink costs too much", "墨水太贵"), "ink"),
          O(L("遅い・紙詰まりが多い", "Slow or jams often", "太慢·经常卡纸"), "slow"),
          O(L("画質や文字に不満がある", "Unhappy with print quality", "对画质或文字不满意"), "quality"),
          O(
            L("両面・コピーなど機能が足りない", "Missing features such as duplex or copying", "缺少双面·复印等功能"),
            "feature"
          )
        ]
    },
    {
      id: "fu",
      st: 2,
      show: () => useIs("doc", "photo", "both"),
      t: () => ({
        doc: L("どんな書類を刷ることが多いですか？", "What kind of documents do you print most?", "最常打印哪类文件？"),
        photo: L(
          "どんな写真・カラー印刷が多いですか？",
          "What photo or color printing do you do most?",
          "最常打印哪类照片·彩色内容？"
        ),
        both: L("書類と写真、どちらの比重が大きいですか？", "Which weighs more: documents or photos?", "文档与照片，哪边比重更大？")
      })[ans("use")],
      h: () => ({
        doc: L(
          "レポートや資料を毎週刷るなら、両面・文字のくっきり感・インク代が効きます。",
          "If you print reports weekly, duplex, text sharpness and ink cost matter.",
          "如果每周打印报告资料，双面·文字清晰度·墨水成本都很关键。"
        ),
        photo: L(
          "アルバム用なら写真画質、年賀状なら色の鮮やかさと用紙の通しやすさが効きます。",
          "For albums photo quality matters; for New Year's cards, vivid color and easy paper feeding matter.",
          "相册用看重照片画质；贺年卡则看重色彩鲜艳与进纸顺畅。"
        ),
        both: L(
          "比重の大きい方を重く評価し、もう一方もほどよく考慮します。",
          "We weigh the larger share more and still consider the other.",
          "会更看重比重大的一方，同时适度兼顾另一方。"
        )
      })[ans("use")],
      o: () => ({
        doc: [
          O(L("レポート・資料（学生・仕事）", "Reports and materials (school, work)", "报告·资料（学生·工作）"), "report"),
          O(L("学校のプリント・お子さまの書類", "School handouts and children's papers", "学校讲义·孩子的资料"), "school"),
          O(
            L("申込書・提出書類（たまに）", "Application forms and paperwork (occasionally)", "申请表·提交文件（偶尔）"),
            "form"
          )
        ],
        photo: [
          O(L("L判・2L判の写真をアルバムに残す", "L/2L photos kept in an album", "把L判·2L判照片留进相册"), "album"),
          O(L("年賀状・ハガキ", "New Year's cards and postcards", "贺年卡·明信片"), "card"),
          O(L("写真も年賀状も両方", "Both photos and cards", "照片与贺年卡都要"), "mix")
        ],
        both: [
          O(L("書類が多く、写真はたまに", "Mostly documents, photos sometimes", "文档多，照片偶尔"), "docmore"),
          O(L("写真が多く、書類はたまに", "Mostly photos, documents sometimes", "照片多，文档偶尔"), "photomore"),
          O(L("ほぼ半々", "About half and half", "大致各占一半"), "even")
        ]
      })[ans("use")]
    },
    {
      id: "vol",
      st: 2,
      show: () => ans("use") !== "rare",
      t: L("1か月に印刷する枚数は？", "How many pages do you print per month?", "每月打印多少张？"),
      h: L(
        "印刷量が多いほど、本体価格よりインク代の差が効いてきます。",
        "The more you print, the more ink cost matters compared with the unit price.",
        "打印量越大，墨水成本的差异比机身价格影响更大。"
      ),
      o: [
        O(L("ほとんど使わない（〜10枚）", "Rarely use it (up to 10 pages)", "几乎不用（10张以内）"), "l"),
        O(L("週に1〜2回（10〜50枚）", "1–2 times a week (10–50 pages)", "每周1～2次（10～50张）"), "m"),
        O(L("毎日・毎週たくさん（100枚以上）", "Lots every day/week (100+ pages)", "每天·每周大量打印（100张以上）"), "h")
      ]
    },
    {
      id: "pq",
      st: 2,
      show: () => useIs("photo", "both"),
      t: L("写真の仕上がりへのこだわりは？", "How particular are you about photo quality?", "对照片效果有多讲究？"),
      h: L(
        "6色（グレーインク搭載含む）は階調と肌色が自然です。4色は家庭用としては十分ですが、写真店ほどの滑らかさはありません。",
        "6 colors (including gray ink models) give natural gradation and skin tones. 4 colors are "
          + "enough for home use but not as smooth as a photo shop.",
        "6色（含配备灰色墨水的机型）的层次和肤色更自然。4色足够家用，但不如照相馆那样细腻。"
      ),
      o: [
        O(L("アルバムに残せる高画質がよい", "I want high quality worthy of an album", "希望有可以留进相册的高画质"), 1.6),
        O(L("家庭用にきれいなら十分", "Nice enough for home use is fine", "家用效果漂亮就足够"), 1),
        O(L("写真画質は求めない", "Photo quality isn’t a priority", "不追求照片画质"), .4)
      ]
    },
    {
      id: "ink",
      st: 2,
      show: () => ["m", "h"].indexOf(ans("vol")) >= 0,
      t: L("インクの供給方式の好みは？", "What is your preference for ink supply type?", "对墨水供给方式有何偏好？"),
      h: L(
        "タンク式はボトルから注ぎ足す方式で、インク代が最も安い反面、手が汚れる可能性があります。カートリッジは交換が簡単です。",
        "Tank type is refilled from bottles; ink is cheapest but your hands may get dirty. "
          + "Cartridges are easy to swap.",
        "墨仓式从瓶中补充墨水，墨水成本最低，但可能弄脏手。墨盒则更换简单。"
      ),
      o: [
        O(
          L(
            "手間があってもインク代が安いタンク式・大容量",
            "Tank / high-capacity for cheaper ink, even if it takes effort",
            "虽然麻烦但墨水便宜的墨仓式·大容量"
          ),
          "tank"
        ),
        O(
          L("ワンタッチで清潔に替えられるカートリッジ式", "Cartridges that swap cleanly with one touch", "一按即可干净更换的墨盒式"),
          "cart"
        ),
        O(L("こだわらない", "No preference", "没有特别要求"), "any")
      ]
    },
    {
      id: "feed",
      st: 2,
      show: () => ans("use") !== "rare",
      t: L("用紙の入れ方は？", "How do you want to load paper?", "希望如何放纸？"),
      h: L(
        "前面給紙は用紙を入れっぱなしにでき、ホコリが入りにくい方式です。背面給紙は写真用紙や厚紙が通しやすい方式です。",
        "Front feed lets you leave paper loaded and keeps dust out. Rear feed handles photo paper "
          + "and thick stock more easily.",
        "前部进纸可以一直放着纸，不易进灰。后部进纸则更容易通过相纸和厚纸。"
      ),
      o: [
        O(L("前面の給紙カセットがよい", "I prefer a front paper cassette", "希望使用前部纸盒"), "f"),
        O(L("こだわらない", "No preference", "没有特别要求"), "any")
      ]
    },
    {
      id: "brand",
      st: 2,
      t: L("メーカーの好みは？", "Do you have a manufacturer preference?", "对厂商有何偏好？"),
      h: L(
        "好みのメーカーは少しだけ加点します（機能の条件より優先はしません）。",
        "A preferred maker gets a small bonus (never prioritized over functional requirements).",
        "偏好的厂商会略微加分（不会优先于功能条件）。"
      ),
      o: [
        O(L("キヤノン", "Canon", "佳能"), "Canon"),
        O(L("エプソン", "Epson", "爱普生"), "Epson"),
        O(L("ブラザー", "Brother", "兄弟"), "Brother"),
        O(L("こだわらない", "No preference", "没有特别要求"), "any")
      ]
    },
    {
      id: "pri",
      st: 3,
      t: L(
        "最後に、どうしても譲れない1点は？",
        "Finally, what is the one thing you can't compromise on?",
        "最后，您绝对不能让步的一点是？"
      ),
      h: L(
        "選んだ軸は評価を約2倍にして最終順位を決めます。最終画面で軸を切り替えて見比べもできます。",
        "The chosen criterion counts about double in the final ranking. You can switch criteria on "
          + "the final screen to compare.",
        "所选维度在最终排名中权重约翻倍。最终页面可切换维度对比。"
      ),
      o: [
        O(L("本体価格の安さ", "Low unit price", "机身价格便宜"), "price"),
        O(L("写真の画質", "Photo quality", "照片画质"), "photo"),
        O(L("文書のくっきり感", "Text sharpness", "文字清晰度"), "doc"),
        O(L("インク代の安さ", "Low ink cost", "墨水成本低"), "run"),
        O(L("使いやすさ（両面・給紙・ADF）", "Ease of use (duplex, feed, ADF)", "易用性（双面·进纸·ADF）"), "conv"),
        O(L("印刷の速さ", "Print speed", "打印速度"), "speed")
      ]
    },
    {
      id: "budget",
      st: 3,
      t: L("本体のご予算の上限は？", "What is your maximum budget for the unit?", "机身预算上限是多少？"),
      h: L(
        "ここまでのお話で、使い方に合う機種が見えてきました。本体が高くてもインク代で得になる場合があるため、ご予算は最後におたずねします。予算を少し超えるおすすめも別枠でご案内します。",
        "We now know how you use it. A pricier unit can save money on ink, so we ask about budget "
          + "last, and also show a few worthwhile step-up options.",
        "已了解您的使用方式。机身贵一些但墨水更省的情况也存在，所以最后才询问预算，并另行推荐值得加预算的机型。"
      ),
      o: [
        O(L("〜1.5万円", "Up to ¥15,000", "1.5万日元以下"), 15e3),
        O(L("〜2.5万円", "Up to ¥25,000", "2.5万日元以下"), 25e3),
        O(L("〜4万円", "Up to ¥40,000", "4万日元以下"), 4e4),
        O(L("〜6万円", "Up to ¥60,000", "6万日元以下"), 6e4),
        O(L("予算にこだわらない", "Budget is no concern", "不限预算"), 1e9)
      ]
    }
  );
  /* ---------- ヒアリング設定（店舗ごとのアレンジ） ---------- */
  window.NJ_HEAR_DEFS = {
    stages: Object.keys((T && T.stage) || {}).map(k => [+k, (T.stage[k] || [])[0] || ("ステップ" + k)]),
    defs: () => QS.filter(q => !q.custom).map(q => {
      let o = [], t = [], h = [];
      try { o = val(q.o).map(x => ({ v: x[1], l: x[0] })); } catch (e) {}
      try { t = val(q.t); } catch (e) {}
      try { h = val(q.h); } catch (e) {}
      return { id: q.id, st: q.st, cond: !!q.show, t: t, h: h, o: o };
    })
  };
  (HC.custom || []).forEach(c => {
    if (!c || !c.id || !c.t || !c.t.ja || !(c.o || []).length || c.hidden) return;
    QS.push({
      id: "x_" + c.id, custom: true, st: +c.st || 0,
      t: tx3(c.t), h: tx3(c.h) || ["", "", ""],
      o: c.o.filter(x => x && x.label && x.label.ja).map((x, i) => O(tx3(x.label), "o" + i))
    });
  });
  /* ---------- evaluation ---------- */
  function axesOf(e) {
    var t = e.ink,
      o = Y(e.costDoc),
      n = Y(e.costPhoto),
      r = /(\d+)秒/.exec(e.speed),
      c = /6色/.test(t)
        ? 5
        : /5色/.test(t) ? 4.3 : e.id === "p15" ? 3.4 : e.groupId === "business_a3" ? 2 : 3.2,
      i = R(
        { "◎": 4.4, "◯": 3.2 }[e.grades.doc]
          + (/全色顔料/.test(t) ? .6 : /顔料黒|ハイブリッド/.test(t) ? .3 : 0),
        1,
        5
      ),
      u = o <= 2 ? 5 : o <= 5 ? 4.4 : o <= 13 ? 3.4 : o <= 15 ? 2.8 : 2.2,
      h = n <= 5 ? 5 : n <= 12 ? 4.2 : n <= 20.5 ? 3 : n <= 26 ? 2.4 : 1.6,
      D = 2
        + (/自動両面/.test(e.duplex) ? 1.2 : 0)
        + (/前面/.test(e.paper) ? .8 : 0)
        + (/2段|前面.*背面/.test(e.paper) ? .3 : 0)
        + (e.adf !== "なし" ? 1 : 0),
      d = r ? +r[1] <= 10 ? 5 : +r[1] <= 14 ? 4.6 : +r[1] <= 18 ? 4.2 : +r[1] <= 40 ? 3 : 2 : 5,
      b = e.price <= 1e4
        ? 5
        : e.price <= 16e3
          ? 4.3
          : e.price <= 23e3 ? 3.5 : e.price <= 3e4 ? 2.8 : e.price <= 4e4 ? 2 : 1.3;
    return { price: b, photo: c, doc: i, run: u * .6 + h * .4, conv: R(D, 1, 5), speed: d };
  }
  function hear(p) {
    const ng = [], wn = [], ok = [];
    const a3 = ans("a3"),
      adf = ans("adf"),
      dup = ans("dup"),
      feed = ans("feed"),
      ink = ans("ink"),
      pq = ans("pq"),
      vol = ans("vol"),
      f = ans("fu");
    if (a3 === "y") {
      if (p.a3 === "なし")
        ng.push({ k: "a3", r: "a3", a: [] });
      else
        ok.push({ r: "a3ok", a: [] });
    }
    if (adf === "y") {
      if (p.adf === "なし")
        ng.push({ k: "adf", r: "adf", a: [] });
      else
        ok.push({ r: "adfok", a: [Tr("adf", p.adf)] });
    }
    if (dup === "y") {
      if (autoDup(p))
        ok.push({ r: "dupok", a: [] });
      else
        ng.push({ k: "dup", r: "dup", a: [] });
    }
    if (feed === "f") {
      if (frontFeed(p))
        ok.push({ r: "feedok", a: [] });
      else
        wn.push({ r: "feed", a: [] });
    }
    if (ink === "cart" && p.id === "p15")
      wn.push({ r: "tank", a: [] });
    if (ink === "tank" && tank(p))
      ok.push({ r: "tankok", a: [] });
    if (pq === 1.6 && !has6(p))
      wn.push({ r: "pq", a: [] });
    else if (pq == null && f === "album" && !has6(p) && !/5色/.test(p.ink))
      wn.push({ r: "pq", a: [] });
    else if (pq === 1.6 && has6(p))
      ok.push({ r: "six", a: [] });
    if (vol === "h" && Y(p.costDoc) > 10)
      wn.push({ r: "vol", a: [HH(p.costDoc)] });
    else if ((vol === "m" || vol === "h") && Y(p.costDoc) <= 5)
      ok.push({ r: "cheap", a: [HH(p.costDoc)] });
    return { ng: ng, wn: wn, ok: ok };
  }
  function weights(skipPri) {
    const u = ans("use"),
      f = ans("fu"),
      y = ans("why"),
      vol = ans("vol") || (u === "rare" ? "l" : null),
      pq = ans("pq"),
      pri = ans("pri");
    const w = {
      price: vol === "l" ? 2.5 : 1.5,
      photo: u === "photo" ? 3 : u === "both" ? 2 : u === "rare" ? 1 : .8,
      doc: u === "doc" ? 3 : u === "both" ? 2 : u === "rare" ? 1.2 : 1.2,
      run: vol === "h" ? 3 : vol === "m" ? 2 : .8,
      conv: 1.5 + (ans("feed") === "f" ? .8 : 0),
      speed: 1
    };
    const add = (k, x) => {
      w[k] = Math.max(.3, w[k] + x);
    };
    if (f === "report") {
      add("conv", .8);
      add("doc", .4);
    }
    if (f === "school")
      add("conv", .5);
    if (f === "form")
      add("price", .5);
    if (f === "album")
      add("photo", .8);
    if (f === "card") {
      add("photo", .3);
      add("conv", .2);
    }
    if (f === "docmore")
      add("doc", .6);
    if (f === "photomore")
      add("photo", .6);
    if (y === "ink")
      add("run", 1.5);
    if (y === "slow")
      add("speed", 1.2);
    if (y === "quality") {
      add("photo", u === "photo" ? 1 : .3);
      add("doc", u === "doc" ? 1 : .3);
    }
    if (y === "feature")
      add("conv", 1);
    if (y === "photo2")
      add("photo", 1.5);
    if (y === "office") {
      add("run", 1);
      add("conv", .8);
      add("doc", .6);
    }
    if (y === "home2" || y === "kids")
      add("price", .4);
    if (y === "kids")
      add("conv", .4);
    if (pq != null)
      w.photo *= pq;
    if (ans("ink") === "tank")
      add("run", 1.5);
    Object.keys(ST.give).forEach(k => {
      if (ST.give[k] && k !== pri && w[k] != null)
        w[k] *= .3;
    });
    if (!skipPri && pri && w[pri] != null)
      w[pri] *= 2.2;
    return w;
  }
  function axes(p) {
    return axesOf(p);
  }
  function bonus(p) {
    let s = 0;
    const br = ans("brand"), u = ans("use"), vol = ans("vol"), sc = ans("scan"), f = ans("fu");
    if (br && br !== "any" && p.maker === br)
      s += 6;
    if (u === "rare" && p.groupId === "entry_value")
      s += 4;
    if (vol === "h" && p.groupId === "bulk_low_cost")
      s += 4;
    if (sc === "often" && p.adf !== "なし")
      s += 3;
    if (f === "album" && has6(p))
      s += 3;
    return s;
  }
  function evalAll(noBudget) {
    const w = weights(), bud = noBudget ? 1e9 : (ans("budget") || 1e9);
    let tw = 0;
    Object.keys(w).forEach(k => {
      tw += w[k];
    });
    return PRODUCTS.map(p => {
      const h = hear(p), a = axes(p);
      let s = 0;
      Object.keys(w).forEach(k => {
        s += w[k] * a[k];
      });
      s = s / (5 * tw) * 100 + bonus(p);
      const over = p.price > bud;
      if (over)
        s -= Math.min(35, (p.price - bud) / bud * 90 + 8);
      s -= h.wn.length * 10 + h.ng.length * 40;
      return { p: p, t: typeOf(p), h: h, a: a, sc: clamp(Math.round(s), 1, 99), over: over };
    });
  }
  const okOf = r => r.filter(x => !x.h.ng.length);
  const sorted = r => r.slice().sort((a, b) => b.sc - a.sc);
  function result(noBudget) {
    const all = sorted(evalAll(noBudget));
    const top = all.filter(x => !x.h.ng.length).slice(0, 3);
    for (let i = 0; top.length < 3 && i < all.length; i++)
      if (top.indexOf(all[i]) < 0)
        top.push(all[i]);
    return { all: all, top: top };
  }
  const okCount = () => Object.keys(ST.a).length ? okOf(evalAll(true)).length : PRODUCTS.length;
  const bestBy = (k, list) => list.slice().sort((a, b) => b.a[k] - a[k] || b.sc - a.sc)[0];
  function gains(d, s) {
    const g = CRIT.filter(c => d.a[c[0]] - s.a[c[0]] >= 1 && c[0] !== "price").map(
      c => c[2] + cName(c)
    );
    if (has6(d.p) && !has6(s.p))
      g.push(L3(["🎨6色インク", "🎨6 inks", "🎨6色墨水"]));
    if (tank(d.p) && !tank(s.p))
      g.push(L3(["💧大容量インク", "💧Tank ink", "💧大容量墨水"]));
    if (d.p.adf !== "なし" && s.p.adf === "なし")
      g.push("📑ADF");
    if (d.p.a3 !== "なし" && s.p.a3 === "なし")
      g.push("A3");
    return g;
  }
  const specLine = p => Tr("ink", p.ink).split(/\s?\(/)[0]
    + "・"
    + Tr("duplex", p.duplex).split(/\s?\(/)[0];
  /* ---------- illustrations ---------- */
  function prsvg(e, t) {
    const o = 'style="--dl:-' + (t * .5).toFixed(1) + 's"',
      n = e === "a" ? 98 : e === "e" ? 60 : 78,
      r = (112 - n) / 2,
      c = { e: "#94a3b8", d: "#2563eb", p: "#a21caf", b: "#16a34a", a: "#d97706" }[e] || "#94a3b8";
    let i = "";
    if (e === "p")
      i = ["#06b6d4", "#ec4899", "#facc15", "#334155", "#38bdf8", "#f472b6"].map(
        (u, h) => '<circle class="pr-dot" style="--dl:-'
          + h * .3
          + 's" cx="'
          + (r + 13 + h * 10)
          + '" cy="44" r="3.4" fill="'
          + u
          + '"/>'
      ).join("");
    if (e === "b")
      i = ["#06b6d4", "#ec4899", "#facc15", "#1e293b"].map(
        (u, h) => '<rect class="pr-lvl" style="--dl:-'
          + h * .6
          + 's" x="'
          + (r + 10 + h * 9)
          + '" y="30" width="6" height="18" rx="2" fill="'
          + u
          + '"/>'
      ).join("");
    if (e === "d")
      i = '<rect x="'
        + (r + 8)
        + '" y="26" width="'
        + (n - 16)
        + '" height="5" rx="2" fill="#93c5fd"/><rect x="'
        + (r + 8)
        + '" y="45" width="'
        + (n - 16)
        + '" height="7" rx="2" fill="#dbeafe"/>';
    if (e === "a")
      i = '<text x="56" y="45" font-size="12" font-weight="800" text-anchor="middle" fill="#fff">A3</text>';
    if (e === "e")
      i = '<circle class="pr-dot" cx="' + (r + n - 10) + '" cy="44" r="2.6" fill="#22c55e"/>';
    return '<svg class="pr-svg" viewBox="0 0 112 76" '
      + o
      + ' aria-hidden="true"><rect class="pr-paper" '
      + o
      + ' x="'
      + (r + 8)
      + '" y="4" width="'
      + (n - 16)
      + '" height="24" rx="2" fill="#fff" stroke="#cbd5e1"/><rect x="'
      + r
      + '" y="22" width="'
      + n
      + '" height="34" rx="7" fill="'
      + c
      + '"/>'
      + i
      + '<rect class="pr-paper" '
      + o
      + ' x="'
      + (r + 12)
      + '" y="54" width="'
      + (n - 24)
      + '" height="14" rx="2" fill="#fff" stroke="#cbd5e1"/></svg>';
  }
  function mkShade(h, a) {
    var n = parseInt(String(h).slice(1), 16);
    if (isNaN(n))
      return "#475569";
    var f = function (x) {
      return Math.max(0, Math.min(255, Math.round(a < 0 ? x * (1 + a) : x + (255 - x) * a)));
    };
    return "#"
      + ((1 << 24) + (f(n >> 16 & 255) << 16) + (f(n >> 8 & 255) << 8) + f(n & 255)).toString(
        16
      ).slice(1);
  }
  function mkIcon(m, hot) {
    var c = m.c || "#475569",
      nm = String(m.id || m.ic || "").replace(/[&<>"]/g, ""),
      L = nm.length,
      fs = L <= 3 ? 15 : L <= 5 ? 12.5 : L <= 7 ? 10.5 : 9,
      tl = Math.min(36, Math.round(L * fs * .66) + 2),
      d = mkShade(c, -.28),
      dd = mkShade(c, -.5),
      l = mkShade(c, .3);
    return '<svg class="pr-mk'
      + (hot ? " hot" : "")
      + '" viewBox="0 0 64 48" width="64" height="48" aria-hidden="true">'
      + '<ellipse cx="32" cy="45.5" rx="25" ry="2.6" fill="#0f172a" opacity=".13"/>'
      + '<rect x="19" y="2.5" width="26" height="16" rx="1.8" fill="#fff" stroke="#cbd5e1"/>'
      + '<rect x="22.5" y="6" width="19" height="1.8" rx=".9" fill="#cbd5e1"/><rect x="22.5" y="10" '
      + 'width="14" height="1.8" rx=".9" fill="#cbd5e1"/>'
      + '<rect x="5" y="15.5" width="54" height="22" rx="7" fill="'
      + c
      + '"/>'
      + '<path d="M5 22.5A7 7 0 0 1 12 15.5H52A7 7 0 0 1 59 22.5Z" fill="'
      + l
      + '" opacity=".28"/>'
      + '<text x="29" y="'
      + (26.6 + fs * .3)
      + '" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" style="fill:#fff;font-size:'
      + fs * .9
      + 'px;font-weight:800;dominant-baseline:auto" textLength="'
      + Math.min(34, Math.round(tl * .92))
      + '" lengthAdjust="spacingAndGlyphs">'
      + nm
      + '</text>'
      + '<circle cx="52" cy="22" r="1.9" fill="#86efac"/>'
      + '<rect x="13" y="31" width="38" height="3" rx="1.5" fill="'
      + dd
      + '" opacity=".6"/>'
      + '<rect x="17" y="33.5" width="30" height="11" rx="1.3" fill="#fff" stroke="#cbd5e1"/>'
      + '<rect x="20.5" y="37" width="23" height="1.6" rx=".8" fill="#cbd5e1"/><rect x="20.5" '
      + 'y="40.3" width="15" height="1.6" rx=".8" fill="#cbd5e1"/>'
      + '</svg>';
  }
  const PRN = '<rect x="10" y="18" width="44" height="18" rx="5" fill="#64748b"/><rect class="pr-paper" '
    + 'x="18" y="6" width="28" height="16" rx="2" fill="#fff" stroke="#cbd5e1"/><rect '
    + 'class="pr-paper" x="20" y="32" width="24" height="12" rx="2" fill="#fff" stroke="#cbd5e1"/>';
  const QI = {
    sit: '<path d="M12 26 32 8l20 18v16H12z" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" '
      + 'stroke-linejoin="round"/><rect x="27" y="30" width="10" height="12" rx="2" fill="#60a5fa"/>'
      + '<path class="pr-tw" d="M52 4l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fbbf24"/>',
    scan: '<rect x="8" y="22" width="48" height="16" rx="4" fill="#64748b"/><rect x="12" y="26" '
      + 'width="40" height="5" rx="1" fill="#cbd5e1"/><g class="pr-beam"><rect x="12" y="8" '
      + 'width="40" height="3" rx="1.5" fill="#38bdf8"/></g><rect x="16" y="4" width="32" height="18"'
      + ' rx="2" fill="#fff" stroke="#cbd5e1" opacity=".9"/><path d="M21 10h22M21 15h14" '
      + 'stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>',
    adf: '<rect class="pr-paper" x="14" y="6" width="30" height="20" rx="2" fill="#fff" '
      + 'stroke="#cbd5e1"/><rect x="18" y="12" width="30" height="20" rx="2" fill="#fff" '
      + 'stroke="#cbd5e1"/><rect x="22" y="18" width="30" height="20" rx="2" fill="#fff" '
      + 'stroke="#94a3b8"/><path class="pr-tw" d="M10 42h44M48 38l5 4-5 4" fill="none" '
      + 'stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>',
    a3: '<rect x="6" y="6" width="52" height="36" rx="3" fill="#fef3c7" stroke="#d97706" '
      + 'stroke-width="2"/><rect x="40" y="22" width="14" height="16" rx="1" fill="#fff" '
      + 'stroke="#94a3b8"/><text x="22" y="30" text-anchor="middle" font-size="16" font-weight="800" '
      + 'fill="#d97706">A3</text><text x="47" y="34" text-anchor="middle" font-size="7" '
      + 'font-weight="700" fill="#64748b">A4</text>',
    dup: '<rect x="10" y="8" width="26" height="34" rx="2" fill="#fff" stroke="#94a3b8" '
      + 'stroke-width="2"/><path d="M15 16h16M15 22h16M15 28h10" stroke="#93c5fd" stroke-width="2.5" '
      + 'stroke-linecap="round"/><g class="pr-tw"><path d="M42 14a10 10 0 0 1 8 12M50 26l-1-6M50 '
      + '26l-6-1" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" '
      + 'stroke-linejoin="round"/></g><rect x="40" y="30" width="16" height="12" rx="2" '
      + 'fill="#dbeafe" stroke="#93c5fd"/>',
    use: PRN + '<path class="pr-tw" d="M54 4l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fbbf24"/>',
    why: '<g class="pr-fl">'
      + PRN
      + '</g><path class="pr-tw" d="M56 6v12M56 24v3" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>',
    vol: '<rect x="14" y="30" width="36" height="6" rx="2" fill="#fff" stroke="#94a3b8" '
      + 'stroke-width="1.5"/><rect x="14" y="23" width="36" height="6" rx="2" fill="#fff" '
      + 'stroke="#94a3b8" stroke-width="1.5"/><rect class="pr-paper" x="14" y="16" width="36" '
      + 'height="6" rx="2" fill="#fff" stroke="#60a5fa" stroke-width="1.5"/><rect x="12" y="37" '
      + 'width="40" height="6" rx="2" fill="#cbd5e1"/>',
    pq: '<rect x="8" y="6" width="48" height="34" rx="3" fill="#fff" stroke="#cbd5e1" '
      + 'stroke-width="2"/><rect x="12" y="10" width="40" height="24" rx="1" fill="#bae6fd"/><path '
      + 'd="M12 34l12-12 8 8 6-6 14 10z" fill="#4ade80"/><circle class="pr-tw" cx="43" cy="17" r="4" '
      + 'fill="#fbbf24"/>',
    ink: '<path class="pr-fl" d="M32 6c8 10 12 15 12 21a12 12 0 0 1-24 0c0-6 4-11 12-21z" '
      + 'fill="#38bdf8"/><path d="M26 28a6 6 0 0 0 5 6" fill="none" stroke="#fff" stroke-width="2.5" '
      + 'stroke-linecap="round"/><rect x="48" y="26" width="9" height="16" rx="2" fill="#ec4899"/>'
      + '<rect x="50" y="22" width="5" height="5" rx="1" fill="#9d174d"/>',
    feed: '<rect x="8" y="24" width="48" height="16" rx="4" fill="#64748b"/><rect x="12" y="30" '
      + 'width="40" height="8" rx="2" fill="#e2e8f0"/><rect class="pr-paper" x="20" y="14" width="24"'
      + ' height="14" rx="2" fill="#fff" stroke="#cbd5e1"/><path class="pr-tw" d="M32 6v6M29 9l3 3 '
      + '3-3" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    brand: '<g class="pr-fl"><path d="M32 4l6 12 13 2-9.5 9 2.5 13-12-6.500L20 40l2.500-13L13 18l13-2z" '
      + 'fill="#f59e0b"/></g><path d="M18 44h28" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>',
    pri: '<g class="pr-fl"><path d="M20 6h24v14a12 12 0 0 1-24 0z" fill="#fbbf24"/><path d="M20 '
      + '10h-8v4a8 8 0 0 0 8 8M44 10h8v4a8 8 0 0 1-8 8" fill="none" stroke="#f59e0b" '
      + 'stroke-width="3"/></g><rect x="28" y="32" width="8" height="6" fill="#f59e0b"/><rect x="21" '
      + 'y="38" width="22" height="5" rx="2" fill="#d97706"/>',
    budget: '<g class="pr-fl"><circle cx="32" cy="24" r="17" fill="#fbbf24" stroke="#f59e0b" '
      + 'stroke-width="3"/><text x="32" y="31" text-anchor="middle" font-size="20" font-weight="800" '
      + 'fill="#b45309">¥</text></g>'
  };
  const QIU = {
    doc: '<rect x="14" y="4" width="36" height="40" rx="3" fill="#fff" stroke="#94a3b8" '
      + 'stroke-width="2"/><path class="pr-tw" d="M20 13h24M20 20h24M20 27h24M20 34h14" '
      + 'stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round"/>',
    photo: QI.pq,
    both: '<rect x="6" y="8" width="26" height="34" rx="3" fill="#fff" stroke="#94a3b8" '
      + 'stroke-width="2"/><path d="M11 16h16M11 23h16M11 30h10" stroke="#60a5fa" stroke-width="2.5" '
      + 'stroke-linecap="round"/><rect x="34" y="14" width="24" height="26" rx="3" fill="#fff" '
      + 'stroke="#cbd5e1" stroke-width="2"/><rect x="37" y="17" width="18" height="14" '
      + 'fill="#bae6fd"/><path d="M37 31l7-7 5 5 3-3 3 5z" fill="#4ade80"/>'
  };
  function qiHtml(q) {
    const k = q.id === "fu" ? (QIU[ans("use")] || QI.use) : (QI[q.id] || QI.use);
    return '<svg class="pr-qi" viewBox="0 0 64 48" aria-hidden="true">' + k + '</svg>';
  }
  /* ---------- hearing helpers ---------- */
  function xe() {
    if (!Object.keys(ST.a).some(k => k !== "sit"))
      return "";
    const e = evalAll(true), ok = sorted(okOf(e));
    let best = -1;
    const sums = TYPES.map(() => 0);
    if (ok.length) {
      ok.slice(0, 6).forEach(f => {
        sums[TYPES.indexOf(f.t)] += f.sc;
      });
      best = sums.indexOf(Math.max.apply(0, sums));
    }
    const cells = TYPES.map((t, n) => {
      const g = e.filter(b => b.t === t && !b.h.ng.length).length, c = n === best;
      return '<div style="text-align:center;padding:5px 1px;border-radius:10px;'
        + (
          c
            ? "background:#fef3c7;border:1.5px solid #f59e0b"
            : "background:#f8fafc;border:1px solid #e2e8f0" + (g ? "" : ";opacity:.4")
        )
        + '"><div class="pr-mini">'
        + prsvg(t.g.lay, n)
        + '</div><div style="font-size:.62rem;line-height:1.3;margin-top:2px;'
        + (c ? "font-weight:700" : "")
        + '">'
        + (c ? "👉" : "")
        + tShort(t)
        + '<br>('
        + g
        + ')</div></div>';
    }).join("");
    let h = '<div class="fr-box" style="padding:10px 12px"><h3 style="font-size:.9rem">'
      + L3(T.xeT)
      + '</h3><div class="pr-xe">'
      + cells
      + '</div>';
    if (best >= 0)
      h += '<p class="fr-p" style="margin:6px 0 0;font-size:.82rem">'
        + F(T.xeNow, tName(TYPES[best]), L3(TYPES[best].g.who))
        + '</p>';
    const mscore = MAKERS.map(
      m => ok.slice(0, 8).filter(f => makerOf(f.p) === m).reduce((s, f) => s + f.sc, 0)
    );
    const mb = ok.length ? mscore.indexOf(Math.max.apply(0, mscore)) : -1;
    const mk = MAKERS.map((m, n) => {
      const g = ok.filter(f => makerOf(f.p) === m).length, c = n === mb && mscore[n] > 0;
      return '<div style="text-align:center;padding:5px 1px;border-radius:10px;'
        + (
          c
            ? "background:#fef3c7;border:1.5px solid #f59e0b"
            : "background:#f8fafc;border:1px solid #e2e8f0" + (g ? "" : ";opacity:.4")
        )
        + '">'
        + mkIcon(m, c)
        + '<div style="font-size:.66rem;line-height:1.3;margin-top:2px;'
        + (c ? "font-weight:700" : "")
        + '">'
        + (c ? "👉" : "")
        + L3(m.n)
        + '<br>('
        + g
        + ')</div></div>';
    }).join("");
    h += '<h3 style="font-size:.9rem;margin:10px 0 6px">'
      + L3(T.xeMk)
      + '</h3><div class="pr-xm">'
      + mk
      + '</div>';
    if (mb >= 0 && mscore[mb] > 0)
      h += '<p class="fr-p" style="margin:6px 0 0;font-size:.82rem"><b>'
        + L3(MAKERS[mb].n)
        + '</b>：'
        + L3(MAKERS[mb].t)
        + '</p>';
    const s = ok[0],
      d = s
        ? ok.filter(
          f => f.p.price > s.p.price && f.p.price <= s.p.price * 2.2 && gains(f, s).length
        ).sort((a, b) => a.p.price - b.p.price)[0]
        : null;
    if (d)
      h += '<p class="fr-p" style="margin:6px 0 0;font-size:.82rem">⬆️ '
        + F(
          T.xeUp,
          pName(d.p),
          mName(d.p),
          specLine(d.p),
          AP(d.p.price - s.p.price),
          gains(d, s).join("・"),
          pName(s.p)
        )
        + '<br><span style="color:#64748b">'
        + P(d.p.desc)
        + '</span></p>';
    return h + '</div>';
  }
  function upHints() {
    const r = result(true).top[0];
    if (!r || r.h.ng.length)
      return [];
    const h = [], vol = ans("vol"), pq = ans("pq"), f = ans("fu"), sc = ans("scan");
    if (vol === "h" && r.p.groupId !== "bulk_low_cost" && r.p.groupId !== "business_a3")
      h.push(T.upBulk);
    if ((pq === 1.6 || f === "album") && !has6(r.p))
      h.push(T.upPhoto);
    if (sc === "often" && r.p.adf === "なし")
      h.push(T.upAdf);
    return h;
  }
  function upBox(v) {
    if (v.st === 0)
      return "";
    const h = upHints();
    if (!h.length)
      return "";
    return '<div class="fr-box" style="border-left:4px solid #f59e0b;background:#fffbeb"><h3>'
      + L3(T.upT)
      + '</h3><ul class="fr-ul">'
      + h.map(x => "<li>" + L3(x) + "</li>").join("")
      + "</ul></div>";
  }
  function priWhy(k) {
    const u = short(lab("fu") || lab("use")), v = short(lab("vol"));
    if (k === "price")
      return v
        ? F(
          L(
            "印刷量（{0}）が多くなく、本体価格の差が効くため",
            "Your print volume ({0}) is modest, so the unit price matters",
            "打印量（{0}）不大，机身价格差异更关键"
          ),
          v
        )
        : L3(L("本体価格の差が効くため", "The unit price matters", "机身价格差异很关键"));
    if (k === "photo")
      return u
        ? F(
          L(
            "使い方（{0}）から、写真画質が効くため",
            "From how you use it ({0}), photo quality matters",
            "从使用方式（{0}）来看，照片画质很关键"
          ),
          u
        )
        : L3(L("写真画質が仕上がりに効くため", "Photo quality shapes the result", "照片画质决定成品效果"));
    if (k === "doc")
      return u
        ? F(
          L(
            "使い方（{0}）から、文字のくっきり感が効くため",
            "From how you use it ({0}), text sharpness matters",
            "从使用方式（{0}）来看，文字清晰度很关键"
          ),
          u
        )
        : L3(L("文字のくっきり感が効くため", "Text sharpness matters", "文字清晰度很关键"));
    if (k === "run")
      return v
        ? F(
          L(
            "印刷量（{0}）から、インク代の差が効くため",
            "From your print volume ({0}), ink cost matters",
            "从打印量（{0}）来看，墨水成本很关键"
          ),
          v
        )
        : L3(
          L("使うほどインク代の差が効くため", "The more you print, the more ink cost matters", "用得越多，墨水成本差异越重要")
        );
    if (k === "conv")
      return u
        ? F(
          L(
            "使い方（{0}）から、両面・給紙・ADFの手間の差が効くため",
            "From how you use it ({0}), duplex, feed and ADF convenience matter",
            "从使用方式（{0}）来看，双面·进纸·ADF的便利度很关键"
          ),
          u
        )
        : L3(
          L(
            "両面・給紙・ADFの使いやすさが毎回の手間に効くため",
            "Duplex, feed and ADF convenience affects every job",
            "双面·进纸·ADF的便利度影响每次使用"
          )
        );
    return L3(L("印刷の待ち時間が使い勝手に効くため", "Waiting time affects daily use", "等待时间影响使用体验"));
  }
  function recOf(q) {
    const r = { i: -1, note: "", why: "" };
    if (q.id === "budget") {
      const rs = result(true).top;
      if (!rs.length)
        return r;
      const pr = rs.map(x => x.p.price), first = rs[0].p.price;
      opts(q).forEach((x, n) => {
        if (r.i < 0 && x[1] >= first)
          r.i = n;
      });
      r.why = F(T.budWhy, pName(rs[0].p), AP(first));
      r.note = '<p class="fr-p" style="font-size:.84rem;background:#fffbeb;border-radius:8px;padding:8px '
        + '10px;margin:0 0 8px">'
        + F(T.budNote, AP(Math.min.apply(0, pr)), AP(Math.max.apply(0, pr)))
        + "</p>";
    } else if (q.id === "pri") {
      const w = weights(true);
      let b = null;
      CRIT.forEach(c => {
        if (!b || w[c[0]] > w[b])
          b = c[0];
      });
      opts(q).forEach((x, n) => {
        if (x[1] === b)
          r.i = n;
      });
      r.why = priWhy(b);
    }
    return r;
  }
  /* ---------- views ---------- */
  function vIntro() {
    const cards = TYPES.map((t, n) => {
      const g = PRODUCTS.filter(p => p.groupId === t.id),
        pr = g.map(p => p.price),
        lo = Math.min.apply(0, pr),
        hi = Math.max.apply(0, pr);
      return '<div class="fr-card fr-up" style="--i:'
        + (n + 1)
        + '" data-a="type">'
        + prsvg(t.g.lay, n)
        + '<h3>'
        + tName(t)
        + '</h3><small>'
        + L3(t.g.sub)
        + "・"
        + g.length
        + L3(T.mdl)
        + '</small><div class="fr-more"><div><span>'
        + L3(T.who)
        + "</span>"
        + L3(t.g.who)
        + "</div><div><span>"
        + L3(T.pro)
        + "</span>"
        + L3(t.g.pro)
        + "</div><div><span>"
        + L3(T.con)
        + "</span>"
        + L3(t.g.con)
        + "</div><div><span>"
        + L3(T.range)
        + "</span>"
        + AP(lo)
        + L3(["〜", "–", "～"])
        + AP(hi)
        + "</div></div></div>";
    }).join("");
    let t;
    t = '<div class="fr-box fr-up" style="--i:7"><h3>'
      + L3(["まず知っておきたい「インク」と「機能」の違い", "Basics to know first: inks and features", "先了解“墨水”与“功能”的区别"])
      + '</h3><table class="pr-cmp"><tr><th>'
      + L3(["4色", "4 colors", "4色"])
      + "</th><td>"
      + L3([
        "黒＋カラー3色。書類・年賀状向けで本体が安い。写真は家庭用レベル",
        "Black + 3 colors. Good for documents and New Year’s cards, with cheap units. Photos are home-use level.",
        "黑色+3种彩色。适合文件·贺年卡，机身便宜。照片为家用水平。"
      ])
      + "</td></tr><tr><th>"
      + L3(["5〜6色", "5–6 colors", "5～6色"])
      + "</th><td>"
      + L3([
        "淡色インクやグレーを追加。<b>肌色・空の階調</b>がなめらかで、写真向き",
        "Adds light-color and gray inks. <b>Skin tones and sky gradations</b> are smooth, ideal for photos.",
        "增加淡色和灰色墨水。<b>肤色·天空的渐变</b>平滑，适合照片。"
      ])
      + "</td></tr><tr><th>"
      + L3(["タンク式", "Tank type", "墨仓式"])
      + "</th><td>"
      + L3([
        "ボトルから注ぎ足す方式。<b>A4カラー1枚約1円</b>と最安だが、本体はやや高く注入の手間がある",
        "Refilled from bottles. Cheapest at <b>about ¥1 per A4 color page</b>, but the unit costs "
          + "more and refilling takes effort.",
        "从瓶中补充墨水。<b>A4彩色每张约1日元</b>，成本最低，但机身稍贵且注墨比较费事。"
      ])
      + "</td></tr><tr><th>"
      + L3(["カートリッジ", "Cartridge", "墨盒式"])
      + "</th><td>"
      + L3([
        "交換が簡単で清潔。1枚あたり約12〜20円が目安（機種で差あり）",
        "Easy and clean to replace. Roughly ¥12–20 per page (varies by model).",
        "更换简单干净。每张约12～20日元（因机型而异）。"
      ])
      + "</td></tr><tr><th>"
      + L3(["自動両面・ADF", "Auto duplex / ADF", "自动双面·ADF"])
      + "</th><td>"
      + L3([
        "自動両面は用紙の裏返し不要。ADFは複数枚の原稿をまとめてコピー・スキャン",
        "Auto duplex needs no flipping of paper. An ADF copies and scans multiple pages at once.",
        "自动双面无需翻纸。ADF可一次复印·扫描多页原稿。"
      ])
      + "</td></tr><tr><th>"
      + L3(["前面／背面給紙", "Front / rear feed", "前部/后部进纸"])
      + "</th><td>"
      + L3([
        "前面は用紙を入れっぱなしにでき埃に強い。背面は写真用紙・厚紙が通しやすい",
        "Front feed lets you leave paper loaded and resists dust. Rear feed handles photo paper and "
          + "thick stock more easily.",
        "前部进纸可一直放纸、防尘。后部进纸更容易通过相纸·厚纸。"
      ])
      + '</td></tr></table><p class="pr-src">'
      + L3([
        "※インク代・速度は各機種の公称値に基づく目安です。実際の価格・在庫は売場で確認してください。",
        "* Ink costs and speeds are estimates based on each model’s rated values. Please check "
          + "actual prices and stock in store.",
        "※墨水成本·速度是基于各机型标称值的参考。实际价格·库存请在卖场确认。"
      ])
      + "</p></div>";
    return '<span class="fr-tag fr-up">'
      + L3(T.step0)
      + '</span><h1 class="fr-h1 fr-up" style="--i:1">'
      + L3(T.introH)
      + '</h1><p class="fr-p fr-up" style="--i:2">'
      + F(T.introP, PRODUCTS.length)
      + '</p><div class="fr-types">'
      + cards
      + "</div>"
      + t
      + '<button class="fr-btn" data-a="start">'
      + L3(T.start)
      + "</button>";
  }
  function vQ(q, v) {
    const list = qsOf(v.st), rec = recOf(q), cur = ans(q.id);
    const o = opts(q).map((x, n) => {
      const sel = cur === x[1], isRec = rec.i === n;
      return '<button class="fr-opt fr-up'
        + (isRec ? " rec" : "")
        + (sel ? " sel" : "")
        + '" style="--i:'
        + (n + 1)
        + '" data-a="pick" data-i="'
        + n
        + '"><span class="ck">'
        + (sel ? "✓" : "")
        + '</span><span class="ot">'
        + L3(x[0])
        + (isRec ? '<span class="rb">💡 ' + (rec.why || L3(T.recDefault)) + "</span>" : "")
        + "</span></button>";
    }).join("");
    return '<span class="fr-tag">'
      + L3(T.stage[v.st])
      + "</span>"
      + xe()
      + upBox(v)
      + '<div class="fr-q"><div class="no">Q'
      + (v.i + 1)
      + " / "
      + list.length
      + "</div>"
      + ""
      + "<h2>"
      + qT(q)
      + '</h2><div class="fr-hint">💡 '
      + qH(q)
      + "</div>"
      + rec.note
      + o
      + '</div><button class="fr-btn s" data-a="back">'
      + L3(T.prev)
      + "</button>";
  }
  function vR1() {
    const e = evalAll(true), t = okOf(e), a = {};
    e.forEach(
      x => x.h.ng.forEach(n => {
        a[n.k] = (a[n.k] || 0) + 1;
      })
    );
    const bars = TYPES.map((ty, n) => {
      const h = e.filter(u => u.t === ty), c = h.filter(u => !u.h.ng.length).length;
      return '<div class="fr-row fr-up" style="--i:'
        + n
        + '"><b style="width:11em">'
        + tName(ty)
        + '</b><div class="fr-bar'
        + (c ? "" : " g")
        + '"><i style="width:'
        + (h.length ? c / h.length * 100 : 0)
        + "%;--i:"
        + n
        + '"></i></div><span style="width:3.4em;text-align:right">'
        + c
        + "/"
        + h.length
        + "</span></div>";
    }).join("");
    const chips = Object.keys(a).map(
      k => '<span class="fr-chip ng">'
        + F(L("{0}で{1}機種が対象外", "{0}: {1} models out", "因{0}排除{1}款"), L3(NGK[k]), a[k])
        + "</span>"
    ).join("")
      || '<span class="fr-chip ok">' + L3(L("対象外なし", "Nothing excluded", "无被排除机型")) + "</span>";
    const pr = t.map(x => x.p.price), dash = x => short(lab(x)) || "—";
    return '<span class="fr-tag">'
      + L3(L("条件の結果", "Conditions result", "条件结果"))
      + '</span><h1 class="fr-h1">'
      + F(L("必要な機能に合うのは {0}機種", "{0} models fit the features you need", "符合必要功能的有 {0} 款"), t.length)
      + '</h1><p class="fr-p">'
      + F(
        L(
          "コピー・スキャン {0}／ADF {1}／A3 {2}／自動両面 {3}",
          "Copy/scan {0} / ADF {1} / A3 {2} / Auto duplex {3}",
          "复印·扫描 {0}／ADF {1}／A3 {2}／自动双面 {3}"
        ),
        dash("scan"),
        dash("adf"),
        dash("a3"),
        dash("dup")
      )
      + '</p><div class="fr-box"><h3>'
      + L3(L("タイプ別に残った機種数", "Models remaining by type", "各类型剩余机型数"))
      + "</h3>"
      + bars
      + '</div><div class="fr-box"><h3>'
      + L3(L("外れた理由", "Why models were excluded", "被排除的原因"))
      + "</h3>"
      + chips
      + (
        t.length
          ? '<p class="fr-p" style="margin:8px 0 0">'
            + F(
              L("価格帯：{0}〜{1}", "Price range: {0} – {1}", "价格区间：{0}～{1}"),
              AP(Math.min.apply(0, pr)),
              AP(Math.max.apply(0, pr))
            )
            + "</p>"
          : ""
      )
      + "</div>"
      + (
        t.length < 3
          ? '<div class="fr-win">'
            + L3(
              L(
                "⚠️ 条件にぴったり合う機種が3つ未満です。このあと「条件外」の近い機種も参考に表示します（赤字で明記）。A3や両面などの条件を見直すと選択肢が広がる場合があります。",
                "⚠️ Fewer than 3 models fully fit. We will also show close “out-of-spec” models for "
                  + "reference (marked in red). Revisiting A3 or duplex needs may widen your options.",
                "⚠️ 完全符合条件的机型不足3款。后面将参考性展示接近的“条件外”机型（以红字标明）。重新确认A3或双面等条件或可增加选择。"
              )
            )
            + "</div>"
          : ""
      )
      + '<button class="fr-btn" data-a="next">'
      + L3(L("使い方のヒアリングへ →", "To the usage questions →", "进入使用方式访谈 →"))
      + '</button><button class="fr-btn k" data-a="staff">'
      + L3(L("📸 スタッフに見せる（条件メモ）", "📸 Show to staff (requirements memo)", "📸 出示给店员（条件备忘）"))
      + '</button><button class="fr-btn s" data-a="back">'
      + L3(L("← 必要な機能をやり直す", "← Redo the feature questions", "← 重新回答必要功能"))
      + "</button>";
  }
  function vR2() {
    const e = okOf(evalAll(true)), w = weights(), mx = Math.max.apply(0, CRIT.map(c => w[c[0]]));
    const rows = TYPES.map(t => {
      const u = e.filter(f => f.t === t);
      return {
        t: t,
        n: u.length,
        v: CRIT.map(c => u.length ? u.reduce((s, f) => s + f.a[c[0]], 0) / u.length : 0)
      };
    });
    let heat = '<div class="fr-heat" style="grid-template-columns:8em repeat(6,1fr);min-width:460px"><div class="hd"></div>'
      + CRIT.map(c => '<div class="hd">' + c[2] + "<br>" + cName(c) + "</div>").join("");
    rows.forEach((r, n) => {
      heat += '<div class="rn">'
        + tShort(r.t)
        + '<br><small style="color:#94a3b8">'
        + r.n
        + L3(T.mdl)
        + "</small></div>"
        + r.v.map(
          (f, d) => '<div style="--a:'
            + (f ? (f / 5 * .85).toFixed(2) : 0)
            + ";--i:"
            + (n * 6 + d)
            + ";color:"
            + (f > 3.2 ? "#fff" : "#334155")
            + '">'
            + (f ? f.toFixed(1) : "—")
            + "</div>"
        ).join("");
    });
    heat += "</div>";
    const wb = CRIT.map(
      (c, n) => '<div class="fr-row fr-up" style="--i:'
        + n
        + '"><b style="width:9em">'
        + c[2]
        + " "
        + cName(c)
        + '</b><div class="fr-bar"><i style="width:'
        + w[c[0]] / mx * 100
        + "%;--i:"
        + n
        + '"></i></div></div>'
    ).join("");
    const ds = CRIT.map(
      c => '<div style="font-size:.86rem;line-height:1.6;margin-bottom:4px"><b>'
        + c[2]
        + " "
        + cName(c)
        + "</b>："
        + cDesc(c)
        + "</div>"
    ).join("");
    const td = rows.filter(r => r.n).map(
      r => '<div style="margin-bottom:8px;font-size:.86rem;line-height:1.6"><b>'
        + tName(r.t)
        + "</b>："
        + L3(r.t.g.pro)
        + '<span style="color:#b45309"> '
        + L3(r.t.g.con)
        + "</span></div>"
    ).join("");
    const mk = MAKERS.map(m => {
      const g = e.filter(f => makerOf(f.p) === m), b = g[0] ? sorted(g)[0] : null;
      return '<div style="display:flex;gap:10px;align-items:center;margin-bottom:8px;'
        + (g.length ? "" : "opacity:.45")
        + '">'
        + mkIcon(m, false)
        + '<div style="font-size:.84rem;line-height:1.55"><b>'
        + L3(m.n)
        + "</b>（"
        + g.length
        + L3(T.mdl)
        + "）"
        + (b ? " " + L3(L("最有力", "Top", "最强")) + "：<b>" + pName(b.p) + "</b>" : "")
        + '<br><span style="color:#64748b">'
        + L3(m.t)
        + "</span></div></div>";
    }).join("");
    return '<span class="fr-tag">'
      + L3(L("使い方の結果", "Usage result", "使用方式结果"))
      + '</span><h1 class="fr-h1">'
      + L3(L("タイプ別の違いと評価軸", "Differences by type & criteria", "各类型差异与评价维度"))
      + '</h1><p class="fr-p">'
      + L3(
        L(
          "色が濃いほど強み。あなたの回答で各項目の重みを調整しています。",
          "Darker = stronger. Your answers set the weight of each criterion.",
          "颜色越深越强。您的回答决定了各项权重。"
        )
      )
      + '</p><div class="fr-box"><h3>'
      + L3(L("タイプ × 評価軸", "Type × criteria", "类型 × 评价维度"))
      + '</h3><div style="overflow-x:auto">'
      + heat
      + '</div></div><div class="fr-box"><h3>'
      + L3(L("あなたの重みづけ", "Your weighting", "您的权重"))
      + "</h3>"
      + wb
      + '</div><div class="fr-box"><h3>'
      + L3(L("いま合うメーカー", "Makers that fit so far", "目前契合的品牌"))
      + "</h3>"
      + mk
      + '</div><div class="fr-box"><h3>'
      + L3(L("タイプごとの違い", "Type differences", "各类型差异"))
      + "</h3>"
      + td
      + '</div><div class="fr-box"><h3>'
      + L3(L("評価軸の意味", "What each criterion means", "评价维度说明"))
      + "</h3>"
      + ds
      + '</div><button class="fr-btn" data-a="next">'
      + L3(L("最後の質問（譲れない1点とご予算）へ →", "To the final questions →", "进入最后提问 →"))
      + '</button><button class="fr-btn s" data-a="back">'
      + L3(L("← 使い方をやり直す", "← Redo the usage questions", "← 重新回答使用方式"))
      + "</button>";
  }
  const rowsN = [
    [L("価格", "Price", "价格"), p => AP(p.price)],
    [L("インク", "Ink", "墨水"), p => Tr("ink", p.ink)],
    [L("文書1枚", "Per doc page", "每页文档"), p => HH(p.costDoc)],
    [L("写真1枚", "Per photo", "每张照片"), p => HH(p.costPhoto)],
    [L("両面", "Duplex", "双面"), p => Tr("duplex", p.duplex)],
    [L("給紙", "Paper feed", "进纸"), p => Tr("paper", p.paper)],
    [L("ADF", "ADF", "ADF"), p => Tr("adf", p.adf)],
    [L("A3", "A3", "A3"), p => Tr("a3", p.a3)],
    [L("速度", "Speed", "速度"), p => SPD(p.speed)]
  ];
  function vStepUp(top) {
    const bud = ans("budget") || 1e9, r = top[0];
    if (!r || bud >= 1e9)
      return "";
    const a = sorted(okOf(evalAll(true))).filter(
      o => o.p.price > bud && o.p.price <= bud * 1.6 && o.sc > r.sc
    ).slice(0, 2);
    if (!a.length)
      return "";
    const n = a.map(o => {
      const g = gains(o, r).join("・");
      return '<div style="margin-bottom:10px;font-size:.88rem;line-height:1.6"><b>'
        + pName(o.p)
        + "</b>（"
        + mName(o.p)
        + "／"
        + AP(o.p.price)
        + "）<br>"
        + F(
          L(
            "ご予算の上限から<b>あと{0}</b>で届きます。",
            "Only <b>{0} more</b> than your budget limit.",
            "比预算上限<b>仅多{0}</b>。"
          ),
          AP(o.p.price - bud)
        )
        + (g ? "<br>" + L3(L("この差で伸びるポイント：", "What the extra buys: ", "多花这笔钱可提升：")) + g : "")
        + '<br><span style="color:#64748b">'
        + P(o.p.desc)
        + "</span></div>";
    }).join("");
    return '<div class="fr-box"><h3>💡 '
      + L3(L("もう少しご予算を足せるなら…", "If you can stretch your budget a little…", "如果预算可以稍微提高…"))
      + "</h3>"
      + n
      + '<p class="fr-p" style="margin:6px 0 0">'
      + L3(
        L(
          "ご要望にぴったりの機種に加えて、使い心地がさらに良くなる上位モデルの一例です。無理のない範囲でご検討ください。",
          "Besides the best fits above, these step-up models could feel even better. Consider them only if comfortable.",
          "除上述最契合的机型外，这些更高一档的机型使用感更好，请量力而行。"
        )
      )
      + "</p></div>";
  }
  function vBudget() {
    const q = qBy("budget"), cur = ans("budget"), a = ST.give || {}, axs = CRIT;
    const chips = opts(q).map(
      (x, n) => '<button class="fr-opt'
        + (cur === x[1] ? " sel" : "")
        + '" data-a="bud" data-i="'
        + n
        + '"><span class="ck">'
        + (cur === x[1] ? "✓" : "")
        + '</span><span class="ot">'
        + L3(x[0])
        + "</span></button>"
    ).join("");
    let h = '<div class="fr-box" id="bud-box"><h3>💴 '
      + L3(L("ご予算を変えて見比べる", "Compare with a different budget", "更换预算对比"))
      + '</h3><p class="fr-p" style="font-size:.82rem">'
      + L3(
        L(
          "ここまでのご希望だけで選んだ機種と、予算内の機種を比べて、「何を諦めることになるか」をお見せします。",
          "We compare the best fit for your needs with the best fit within budget, and show what you would give up.",
          "对比仅按需求选出的机型与预算内机型，并显示“需要舍弃什么”。"
        )
      )
      + "</p>"
      + chips;
    if (cur != null && cur < 1e9) {
      const d = result(true).top[0], f = result().top[0], m = f.p.price > cur;
      if (d.p === f.p)
        h += '<div class="fr-win" style="margin-top:10px">✅ '
          + L3(
            L(
              "予算内でも第1候補は変わりません。諦めるものはありません：",
              "Your top pick stays the same within budget. Nothing to give up: ",
              "预算内第1名不变，无需舍弃："
            )
          )
          + "<b>"
          + pName(f.p)
          + "</b>（"
          + AP(f.p.price)
          + "）</div>";
      else {
        const g = axs.filter(c => d.a[c[0]] - f.a[c[0]] >= .8 && c[0] !== "price").map(
          c => c[2] + cName(c)
        );
        h += '<div class="fr-win" style="margin-top:10px"><b>'
          + L3(L("ご予算内の第1候補：", "Top pick within budget: ", "预算内第1名："))
          + pName(f.p)
          + "</b>（"
          + mName(f.p)
          + " / "
          + AP(f.p.price)
          + "）<br>"
          + F(
            L(
              "予算を考えない第1候補は <b>{0}</b>（{1}）でした。",
              "Without a budget the top pick was <b>{0}</b> ({1}).",
              "不考虑预算时的第1名是<b>{0}</b>（{1}）。"
            ),
            pName(d.p),
            AP(d.p.price)
          )
          + "<br>"
          + (
            m
              ? L3(
                L(
                  "⚠ 予算内に収まる機種がありません。最も近い機種を表示しています。",
                  "⚠ No model fits the budget; showing the closest.",
                  "⚠ 没有符合预算的机型，显示最接近的。"
                )
              )
                + "<br>"
              : ""
          )
          + L3(L("予算内にすると、次を諦めることになります：", "Staying in budget means giving up:", "控制在预算内，需要舍弃："))
          + " "
          + (g.length ? g.join("・") : L3(L("大きな差はありません", "no big difference", "差别不大")))
          + "</div>";
        h += '<p class="fr-p" style="font-size:.82rem;margin-top:8px">'
          + F(
            L(
              "あと {0} 足すと <b>{1}</b> に届きます。",
              "Add {0} more to reach <b>{1}</b>.",
              "再加{0}即可选择<b>{1}</b>。"
            ),
            AP(Math.max(0, d.p.price - cur)),
            pName(d.p)
          )
          + "</p>";
      }
      h += '<h3 style="font-size:.9rem;margin-top:12px">'
        + L3(L("何なら諦めてもよいですか？（タップで選択）", "What could you give up? (tap to select)", "哪些可以舍弃？（点按选择）"))
        + '</h3><div class="fr-ax">'
        + axs.map(
          c => '<button data-a="give" data-k="'
            + c[0]
            + '" class="'
            + (a[c[0]] ? "on" : "")
            + '">'
            + c[2]
            + " "
            + cName(c)
            + "</button>"
        ).join("")
        + '</div><p class="fr-p" style="font-size:.78rem;margin-top:6px">'
        + L3(
          L(
            "選んだ項目の重みを下げて、予算内であらためて選び直します。",
            "The chosen items count less, and the picks within budget are re-ranked.",
            "会降低所选项的权重，并在预算内重新排序。"
          )
        )
        + "</p>";
    }
    return h + "</div>";
  }
  function vPath() {
    const cur = result().top[0];
    if (!cur)
      return "";
    let total = 0;
    const rows = [];
    let n = 0;
    flow().forEach(s => {
      if (typeof s !== "number")
        return;
      qsOf(s).forEach(q => {
        const cv = ans(q.id);
        if (cv == null)
          return;
        n++;
        const saved = ST.a[q.id];
        let cnt = 0;
        const chips = opts(q).filter(o => o[1] !== cv).map(o => {
          ST.a[q.id] = o[1];
          let r = null;
          try {
            r = result().top[0];
          } finally {
            ST.a[q.id] = saved;
          }
          const ch = r && r.p !== cur.p;
          if (ch) {
            cnt++;
            total++;
          }
          return '<span style="display:inline-block;margin:3px 4px 0 0;padding:4px 8px;border-radius:8px;'
            + 'font-size:.76rem;line-height:1.45;'
            + (
              ch
                ? "background:#fffbeb;border:1px dashed #f59e0b"
                : "background:#f8fafc;border:1px dashed #cbd5e1;color:#64748b"
            )
            + '">'
            + L3(o[0])
            + "<br><b>"
            + (
              ch
                ? L3(L("→ 1位は ", "→ #1 would be ", "→ 第1名将是 ")) + pName(r.p)
                : L3(L("→ 1位は変わらず", "→ #1 unchanged", "→ 第1名不变"))
            )
            + "</b></span>";
        }).join("");
        rows.push(
          '<div style="position:relative;margin:0 0 12px 12px;padding:0 0 0 16px;border-left:3px solid '
            + '#93c5fd"><span style="position:absolute;left:-10px;top:1px;width:17px;height:17px;'
            + 'border-radius:50%;background:#2563eb;color:#fff;font-size:.64rem;text-align:center;'
            + 'line-height:17px">'
            + n
            + '</span><div style="font-size:.78rem;color:#64748b">'
            + qT(q).replace(/[？?]$/, "")
            + '</div><div style="display:inline-block;margin:3px 0;padding:5px 10px;border-radius:8px;'
            + 'background:#dbeafe;border:1.5px solid #2563eb;font-weight:700;font-size:.86rem">✓ '
            + lab(q.id)
            + "</div>"
            + (
              chips
                ? "<details"
                  + (cnt ? " open" : "")
                  + '><summary style="font-size:.78rem;color:'
                  + (cnt ? "#b45309" : "#64748b")
                  + ';cursor:pointer">'
                  + F(
                    L(
                      "もし別の選択をしていたら（1位が変わる選択肢：{0}件）",
                      "If you had chosen differently (options that change #1: {0})",
                      "若选了其他选项（会改变第1名的选项：{0}个）"
                    ),
                    cnt
                  )
                  + "</summary>"
                  + chips
                  + "</details>"
                : ""
            )
            + "</div>"
        );
      });
    });
    return '<div class="fr-box"><h3>🧭 '
      + L3(L("あなたの選択の経路図", "Your path through the questions", "您的选择路径图"))
      + '</h3><p class="fr-p" style="font-size:.82rem">'
      + F(
        L(
          "青が選んだ回答です。点線の薄い枠は「ここで別の選択をしていたら」の場合の1位で、<b>黄色は1位の機種が変わる分岐点</b>です（現在の1位：{0}／分岐点 {1}か所の選択肢）。",
          "Blue is what you chose. Dashed boxes show the top pick if you had chosen differently; "
            + "<b>yellow marks choices that would change #1</b> (current #1: {0} / {1} such choices).",
          "蓝色为您的选择。虚线框为“若选了其他选项”时的第1名；<b>黄色表示会改变第1名的分岐点</b>（当前第1名：{0}／共{1}个）。"
        ),
        pName(cur.p),
        total
      )
      + "</p>"
      + rows.join("")
      + '<div style="margin-left:12px;padding:6px 10px;border-radius:8px;background:#dcfce7;'
      + 'border:1.5px solid #16a34a;font-weight:700;font-size:.88rem">🏁 '
      + pName(cur.p)
      + "（"
      + mName(cur.p)
      + "）</div></div>";
  }
  function vFinal() {
    const R = result(),
      top = R.top,
      ax = ST.ax || ans("pri") || "run",
      axc = CRIT.filter(c => c[0] === ax)[0] || CRIT[3],
      win = bestBy(ax, top);
    const chips = CRIT.map(
      c => '<button data-a="ax" data-k="'
        + c[0]
        + '" class="'
        + (c[0] === ax ? "on" : "")
        + '">'
        + c[2]
        + " "
        + cName(c)
        + "</button>"
    ).join("");
    const wbox = '<div class="fr-win"><b>'
      + axc[2]
      + " "
      + F(
        L("「{0}」を譲れないなら → {1}", "If “{0}” is non-negotiable → {1}", "若最看重“{0}” → {1}"),
        cName(axc),
        pName(win.p)
      )
      + "</b>（"
      + mName(win.p)
      + " / "
      + AP(win.p.price)
      + "）<br>"
      + cDesc(axc)
      + "。"
      + L3(L("この3機種の中でこの項目が最も強い機種です。", "Strongest of the three on this criterion.", "三款中此项最强。"))
      + "</div>";
    const cards = top.map((d, n) => {
      const p = d.p;
      const best = CRIT.filter(c => bestBy(c[0], top) === d && d.a[c[0]] >= 3.5).map(
        c => '<span class="fr-chip ok">'
          + c[2]
          + cName(c)
          + "："
          + L3(L("最強", "best", "最强"))
          + "</span>"
      ).join("");
      const bars = CRIT.map(
        (c, nn) => '<div class="fr-row" style="margin-bottom:5px"><b style="width:9em;'
          + (c[0] === ax ? "color:#d97706" : "")
          + '">'
          + c[2]
          + " "
          + cName(c)
          + '</b><div class="fr-bar"><i style="width:'
          + d.a[c[0]] / 5 * 100
          + "%;--i:"
          + nn
          + (c[0] === ax ? ";background:linear-gradient(90deg,#f59e0b,#f97316)" : "")
          + '"></i></div></div>'
      ).join("");
      const li = d.h.ng.map(
        r => '<li class="w" style="color:#b91c1c">'
          + F(L("条件外：{0}", "Not met: {0}", "未满足：{0}"), rtext(r))
          + "</li>"
      ).concat(d.h.wn.map(r => '<li class="w">' + rtext(r) + "</li>")).concat(
        d.over ? ['<li class="w">' + F(RS.over, AP(p.price)) + "</li>"] : []
      ).concat(d.h.ok.slice(0, 3).map(r => "<li>" + rtext(r) + "</li>")).join("");
      const tb = rowsN.map(g => "<tr><td>" + L3(g[0]) + "</td><td>" + g[1](p) + "</td></tr>").join(
        ""
      );
      return '<div class="fr-rec fr-up'
        + (d === win ? " hi" : " dim")
        + '" style="--i:'
        + n
        + '"><span class="fr-rank">'
        + F(L("第{0}位", "#{0}", "第{0}名"), n + 1)
        + " ・ "
        + tShort(d.t)
        + '</span><div class="fr-head"><div class="fr-ring"><svg width="62" height="62" viewBox="0 0 '
        + '62 62"><circle class="bg" cx="31" cy="31" r="26"/><circle class="fg" cx="31" cy="31" r="26" '
        + 'stroke-dasharray="'
        + (d.sc / 100 * 163.4).toFixed(1)
        + ' 164"/></svg><b>'
        + d.sc
        + '</b></div><div><div class="fr-name">'
        + pName(p)
        + '</div><div style="font-size:.8rem;color:#64748b">'
        + mName(p)
        + "・"
        + Tr("ink", p.ink).split(/\s?\(/)[0]
        + '</div><div class="fr-price">'
        + AP(p.price)
        + "</div></div></div><div>"
        + best
        + '</div><p class="fr-p" style="margin:6px 0">'
        + P(p.desc)
        + "</p>"
        + bars
        + '<ul class="fr-ul">'
        + li
        + '</ul><table class="fr-spec">'
        + tb
        + "</table>"
        + (window.njLinks ? window.njLinks(p) : "")
        + "</div>";
    }).join("");
    const bestT = CRIT.map(c => {
      const w = bestBy(c[0], top);
      return "<tr><td>"
        + c[2]
        + " "
        + cName(c)
        + "</td><td><b>"
        + pName(w.p)
        + "</b>（"
        + AP(w.p.price)
        + "）</td></tr>";
    }).join("");
    const cmp = '<table class="fr-spec"><tr><td></td>'
      + top.map(d => "<td><b>" + pName(d.p) + "</b></td>").join("")
      + "</tr>"
      + rowsN.map(
        g => "<tr><td>"
          + L3(g[0])
          + "</td>"
          + top.map(d => "<td>" + g[1](d.p) + "</td>").join("")
          + "</tr>"
      ).join("")
      + "</table>";
    const acc = ACCS.map((s, g) => {
      let y = "";
      if (g === 0)
        y = L3(
          L("純正インクは色あせ・目詰まり対策に", "Genuine ink helps prevent fading and clogging", "原厂墨水有助于防褪色·防堵塞")
        );
      if (g === 1 && ans("use") !== "photo")
        y = L3(L("両面印刷・書類に", "For duplex printing and documents", "适合双面打印·文件"));
      if (g === 2 && ans("use") !== "doc")
        y = L3(L("写真印刷の方に", "For photo printing", "适合打印照片的用户"));
      return '<div style="font-size:.86rem;margin-bottom:6px"><b>'
        + P(s.name)
        + "</b>（"
        + s.price
        + "）"
        + (y ? ' <span class="fr-chip w">' + y + "</span>" : "")
        + '<br><span style="color:#64748b">'
        + P(s.desc)
        + "</span></div>";
    }).join("");
    const note = '<div class="fr-box" style="border-left:4px solid #f59e0b"><p class="fr-p" style="margin:0">⚠️ '
      + L3(T.stockNote)
      + "</p></div>";
    return '<span class="fr-tag">'
      + L3(L("最終提案", "Final picks", "最终推荐"))
      + '</span><h1 class="fr-h1">'
      + L3(L("あなたへの3機種", "Your top 3", "为您推荐的3款"))
      + '</h1><p class="fr-p">'
      + L3(
        L(
          "「譲れない点」をタップすると、その軸で一番の機種を示します。",
          "Tap your must-win criterion to see the best pick for it.",
          "点击“不可让步项”，查看该项最强的机型。"
        )
      )
      + '</p><div class="fr-ax">'
      + chips
      + "</div>"
      + wbox
      + cards
      + note
      + vBudget()
      + vStepUp(top)
      + vPath()
      + '<div class="fr-box"><h3>'
      + L3(L("譲れないポイント別の一番", "Best pick per criterion", "按不可让步项的最佳选择"))
      + '</h3><table class="fr-spec">'
      + bestT
      + '</table></div><div class="fr-box"><h3>'
      + L3(L("3機種のスペック比較", "Spec comparison", "三款规格对比"))
      + '</h3><div style="overflow-x:auto">'
      + cmp
      + '</div></div><div class="fr-box"><h3>'
      + L3(L("一緒に選ばれる便利アイテム", "Handy accessories", "常搭配的配件"))
      + "</h3>"
      + acc
      + '</div><button class="fr-btn k" data-a="staff">'
      + L3(L("📸 スタッフに見せる（最終商談シート）", "📸 Show to staff (final sheet)", "📸 出示给店员（最终洽谈单）"))
      + '</button><button class="fr-btn s" data-a="back">'
      + L3(L("← 質問に戻る", "← Back to questions", "← 返回提问"))
      + '</button><button class="fr-btn s" data-a="restart">'
      + L3(L("最初からやり直す", "Start over", "重新开始"))
      + '</button><button class="fr-btn s" data-a="close">'
      + L3(L("一覧に戻る", "Back to list", "返回列表"))
      + "</button>";
  }
  function vStaff() {
    const R = result(), rows = [];
    flow().forEach(s => {
      if (typeof s !== "number")
        return;
      qsOf(s).forEach(q => {
        const v = lab(q.id);
        if (v)
          rows.push("<tr><td>" + qT(q).replace(/[？?]$/, "") + "</td><td>" + v + "</td></tr>");
      });
    });
    const t3 = R.top.map(
      (d, n) => '<div style="margin-bottom:6px;font-size:.88rem"><b>'
        + F(L("第{0}位", "#{0}", "第{0}名"), n + 1)
        + " "
        + pName(d.p)
        + "</b>（"
        + mName(d.p)
        + " / "
        + d.p.model
        + "）"
        + AP(d.p.price)
        + "<br>"
        + Tr("ink", d.p.ink)
        + F(
          L(
            "／両面:{0}／ADF:{1}／適合度{2}",
            " / Duplex: {0} / ADF: {1} / match {2}",
            "／双面:{0}／ADF:{1}／匹配度{2}"
          ),
          Tr("duplex", d.p.duplex),
          Tr("adf", d.p.adf),
          d.sc
        )
        + (d.h.ng.length ? '<br><span style="color:#d90429">× ' + rtext(d.h.ng[0]) + "</span>" : "")
        + (d.h.wn.length ? '<br><span style="color:#b45309">⚠ ' + rtext(d.h.wn[0]) + "</span>" : "")
        + "</div>"
    ).join("");
    return '<div class="fr-ss"><div style="display:flex;justify-content:space-between;border-bottom:2px '
      + 'solid #111827;padding-bottom:6px;margin-bottom:8px"><b style="background:#111827;'
      + 'color:#fbbf24;padding:2px 8px;border-radius:4px;font-size:.86rem">'
      + L3(L("スタッフ確認用シート（プリンター）", "Staff confirmation sheet (Printer)", "店员确认单（打印机）")) + (HC.storeName ? " ｜ " + String(HC.storeName).replace(/[<>&]/g, "") : "")
      + '</b></div><p style="font-size:.8rem;color:#d90429;font-weight:700;margin-bottom:6px">'
      + L3(
        L(
          "※この画面をスクリーンショットしてスタッフにお見せください",
          "Please screenshot this screen and show it to our staff",
          "※请截屏并出示给店员"
        )
      )
      + "</p><table>"
      + rows.join("")
      + '</table><div style="font-size:.88rem;font-weight:800;margin:6px 0 4px">'
      + L3(L("【最終提案TOP3】", "[Final TOP 3]", "【最终推荐TOP3】"))
      + "</div>"
      + t3
      + '<p style="font-size:.74rem;color:#64748b;margin-top:6px">'
      + L3(T.stockNote)
      + '</p></div><button class="fr-btn s" data-a="back">'
      + L3(L("← 戻る", "← Back", "← 返回"))
      + "</button>";
  }
  /* ---------- render & events ---------- */
  function topBar() {
    const lg = lang();
    const sel = '<select class="pr-sel" data-a="lang" aria-label="Language"><option value="ja"'
      + (lg === "ja" ? " selected" : "")
      + '>日本語</option><option value="en"'
      + (lg === "en" ? " selected" : "")
      + '>English</option><option value="zh"'
      + (lg === "zh" ? " selected" : "")
      + ">中文</option></select>";
    return '<div class="fr-top"><button class="fr-x" data-a="close">'
      + L3(T.back)
      + "</button><b>"
      + L3(T.title)
      + "</b>"
      + sel
      + '<span class="fr-pill">'
      + F(T.pill, okCount(), PRODUCTS.length)
      + '</span></div><div class="fr-prog"><div id="pr-pg"></div></div>';
  }
  function animCount(el, to) {
    const t0 = performance.now(), from = +el.textContent || 0;
    (function f(n) {
      const k = Math.min(1, (n - t0) / 450);
      el.textContent = Math.round(from + (to - from) * k);
      if (k < 1)
        requestAnimationFrame(f);
    })(t0);
  }
  function updatePill() {
    const el = document.getElementById("pr-n");
    if (el)
      animCount(el, okCount());
  }
  function render() {
    let v = ST.v, body = "", pct = 4;
    if (typeof v === "object") {
      const l = qsOf(v.st);
      if (!l.length || v.i >= l.length) {
        ST.v = v = nextOf(v.st);
      }
    }
    if (v === "intro") {
      body = vIntro();
      pct = 4;
    } else if (v === "r1") {
      body = vR1();
      pct = prog(v);
    } else if (v === "r2") {
      body = vR2();
      pct = prog(v);
    } else if (v === "final") {
      body = vFinal();
      pct = 100;
    } else if (v === "staff") {
      body = vStaff();
      pct = 100;
    } else {
      body = vQ(qsOf(v.st)[v.i], v);
      pct = prog(v);
    }
    root.className = "fr-root on" + (ST.back ? " fr-back" : "");
    root.setAttribute("aria-label", L3(T.title));
    root.innerHTML = topBar() + '<div class="fr-wrap"><div class="fr-in">' + body + "</div></div>";
    requestAnimationFrame(() => {
      const p = document.getElementById("pr-pg");
      if (p)
        p.style.width = pct + "%";
    });
  }
  function go(v, back) {
    if (!back)
      ST.hist.push(ST.v);
    ST.v = v;
    ST.back = !!back;
    render();
    root.scrollTo({ top: 0 });
  }
  function pick(n) {
    if (ST.lock || typeof ST.v !== "object")
      return;
    const q = qsOf(ST.v.st)[ST.v.i];
    if (!q)
      return;
    const o = opts(q)[n];
    if (!o)
      return;
    ST.lock = 1;
    ST.a[q.id] = o[1];
    updatePill();
    root.querySelectorAll(".fr-opt").forEach((a, i) => {
      a.classList.toggle("sel", i === n);
      if (a.firstChild)
        a.firstChild.textContent = i === n ? "✓" : "";
    });
    setTimeout(() => {
      ST.lock = 0;
      const l = qsOf(ST.v.st);
      go(ST.v.i + 1 < l.length ? { st: ST.v.st, i: ST.v.i + 1 } : nextOf(ST.v));
    }, 320);
  }
  function keepScroll(fn) {
    const y = root.scrollTop;
    ST.back = false;
    fn();
    render();
    root.scrollTop = y;
  }
  function open() {
    ST = { a: {}, v: "intro", hist: [], ax: null, give: {}, lock: 0, back: false };
    render();
    document.documentElement.style.overflow = "hidden";
    try {
      history.pushState({ pr: 1 }, "");
    } catch (e) {}
  }
  function close(silent) {
    root.classList.remove("on");
    document.documentElement.style.overflow = "";
    if (!silent)
      try {
        history.state && history.state.pr && history.back();
      } catch (e) {}
  }
  root.addEventListener("click", function (e) {
    const t = e.target.closest("[data-a]");
    if (!t || t.tagName === "SELECT")
      return;
    const a = t.dataset.a;
    if (a === "close")
      close();
    else if (a === "start")
      go({ st: 0, i: 0 });
    else if (a === "type")
      root.querySelectorAll(".fr-card").forEach(o => {
        o.classList.toggle("sel", o === t && !t.classList.contains("sel"));
      });
    else if (a === "pick")
      pick(+t.dataset.i);
    else if (a === "next")
      go(nextOf(ST.v));
    else if (a === "back") {
      const p = ST.hist.pop();
      if (p != null)
        go(p, true);
      else
        close();
    } else if (a === "staff")
      go("staff");
    else if (a === "ax")
      keepScroll(() => {
        ST.ax = t.dataset.k;
      });
    else if (a === "bud")
      keepScroll(() => {
        const v = opts(qBy("budget"))[+t.dataset.i][1];
        if (ST.a.budget === v)
          delete ST.a.budget;
        else
          ST.a.budget = v;
      });
    else if (a === "give")
      keepScroll(() => {
        ST.give[t.dataset.k] = !ST.give[t.dataset.k];
      });
    else if (a === "restart")
      open();
  });
  root.addEventListener("change", function (e) {
    if (e.target.dataset && e.target.dataset.a === "lang") {
      const s = document.getElementById("lang-switcher");
      if (s) {
        s.value = e.target.value;
        s.dispatchEvent(new Event("change"));
      }
      keepScroll(() => {});
    }
  });
  window.addEventListener("popstate", function () {
    if (root.classList.contains("on"))
      close(true);
  });
  window.PrinterApp = { open: open, close: close };
  const mb = document.getElementById("modal-link-btn");
  if (mb)
    mb.addEventListener("click", function (e) {
      if (mb.dataset.app === "printer") {
        e.preventDefault();
        const m = document.getElementById("modal");
        if (m)
          m.classList.remove("active");
        open();
      }
    });
})();
</script>
<style id="app-motion-css">
/* =====================================================================
   PC相談：スマホ・iPad向けの調整 ＋ Apple風の動き
   ===================================================================== */
#pr-app{--ap:cubic-bezier(.32,.72,0,1);--aps:cubic-bezier(.25,1,.5,1)}

/* ---- 画面の出し入れ（iOSのシート／プッシュ） ---- */
#pr-app{transition:opacity .4s var(--ap),transform .6s var(--ap),visibility 0s .6s}
#pr-app.on{transition:opacity .4s var(--ap),transform .6s var(--ap)}
#pr-app .fr-in{animation:apPush .55s var(--ap) both}
#pr-app.fr-back .fr-in{animation-name:apPop}
@keyframes apPush{from{opacity:0;transform:translate3d(32px,0,0)}}
@keyframes apPop{from{opacity:0;transform:translate3d(-32px,0,0)}}
#pr-app .fr-up{animation:apRise .7s var(--ap) both;animation-delay:calc(var(--i,0)*45ms)}
#pr-app .fr-card.sel .fr-more{animation:apRise .5s var(--ap) both}
@keyframes apRise{from{opacity:0;transform:translate3d(0,14px,0) scale(.985);filter:blur(4px)}}

/* ---- 半透明のナビゲーションバー（スクロールすると細い境界線） ---- */
#pr-app .fr-top{background:rgba(255,255,255,.72);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);box-shadow:none;border-bottom:.5px solid transparent;transition:border-color .3s,background .3s}
#pr-app.scrolled .fr-top{border-bottom-color:rgba(15,23,42,.14);background:rgba(255,255,255,.82)}
#pr-app .fr-prog div{transition:width .8s var(--ap)}

/* ---- 押したときの沈み込み・選んだときの反応 ---- */
#pr-app .fr-opt,#pr-app .fr-card,#pr-app .fr-btn,#pr-app .fr-x,#pr-app .iv-entry,#pr-app .ht-heart{transition:transform .5s var(--ap),background-color .25s,border-color .25s,box-shadow .35s var(--ap)}
#pr-app .fr-opt:active,#pr-app .fr-card:active,#pr-app .fr-btn:active,#pr-app .fr-x:active,#pr-app .iv-entry:active{transform:scale(.97);transition-duration:.12s}
#pr-app .fr-opt.sel{animation:apSel .5s var(--ap)}
@keyframes apSel{0%{transform:scale(.97)}}
#pr-app .fr-opt .ck{transition:transform .45s var(--aps),background .2s,border-color .2s}
#pr-app .fr-opt.sel .ck{transform:scale(1.08)}
@media (hover:hover){#pr-app .fr-card:hover{transform:translateY(-2px);box-shadow:0 12px 28px #2563eb1f}}
@media (hover:none){#pr-app .fr-card:hover{transform:none;box-shadow:0 2px 8px #0f172a0d}}

/* ---- ヒアリング（イラストなし） ---- */
#pr-app .pc-qi{display:none!important}
#pr-app .fr-q{padding:20px 18px 18px;border:1px solid #e8edf5;box-shadow:0 10px 30px #0f172a12}
#pr-app .fr-q .no{display:inline-flex;align-items:center;gap:8px;font-size:.78rem;padding:5px 11px;border-radius:999px;background:linear-gradient(135deg,#eff6ff,#f5f3ff);color:#4338ca;letter-spacing:.08em}
#pr-app .fr-q h2{font-size:clamp(1.2rem,4.8vw,1.55rem);line-height:1.45;margin:12px 0 10px;word-break:auto-phrase;text-wrap:pretty;letter-spacing:.01em}
#pr-app .fr-hint{word-break:auto-phrase;border-left:0;border-radius:12px;background:#f1f5ff;padding:10px 12px}
#pr-app .fr-opt{border-radius:14px;word-break:auto-phrase}

/* ---- 「いまの見立て」：タイプとメーカーの並びをそろえる ---- */
#pr-app .pc-xe{grid-template-columns:repeat(7,minmax(0,1fr));gap:6px}
#pr-app .pc-xe>div,#pr-app .pc-xm>div{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-width:0;padding:7px 3px 6px!important;border-radius:12px!important;transition:background .3s,border-color .3s,opacity .3s}
#pr-app .pc-xe>div>div:last-child,#pr-app .pc-xm>div>div:last-child{font-size:.62rem!important;line-height:1.35!important;margin-top:4px!important;max-width:100%;text-align:center;word-break:auto-phrase}
#pr-app .pc-xe .pc-mini{height:30px;display:flex;align-items:center}
#pr-app .pc-xm{display:flex;flex-wrap:wrap;justify-content:center;gap:6px}
#pr-app .pc-xm>div{flex:1 1 0;min-width:62px;max-width:112px}
#pr-app .pc-mk{width:100%;max-width:56px;height:auto}
@media (max-width:600px){#pr-app .pc-xe{grid-template-columns:repeat(4,minmax(0,1fr))}}

/* ---- 結果画面「いま合うメーカー」：アイコンの列と文字の頭をそろえる ---- */
#pr-app .pc-mkrow{display:grid;grid-template-columns:64px minmax(0,1fr);column-gap:14px;align-items:center;padding:12px 2px;border-top:1px solid #eef2f7;text-align:left}
#pr-app .fr-box h3+.pc-mkrow,#pr-app .pc-mkrow:first-of-type{border-top:0;padding-top:4px}
#pr-app .pc-mkrow .pc-mk{margin:0;width:64px;max-width:64px;justify-self:center}
#pr-app .pc-mkrow>div{font-size:.86rem!important;line-height:1.6!important;min-width:0;word-break:auto-phrase}
#pr-app .pc-mkrow>div b:first-child{font-size:.95rem}
#pr-app .pc-mkrow>div span{display:block;margin-top:2px;font-size:.8rem}
@media (min-width:700px){#pr-app .pc-mkrow{grid-template-columns:72px minmax(0,1fr);padding:14px 6px}}

/* ---- 最初の画面：タイプのカード（7つ目が1枚だけ浮かないように） ---- */
#pr-app .fr-types{align-items:stretch}
#pr-app .fr-types>.fr-card{display:flex;flex-direction:column}
#pr-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel){grid-column:1/-1;display:grid;grid-template-columns:auto 1fr;column-gap:16px;align-items:center}
#pr-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>.pc-svg{grid-row:1/span 2;margin:0}
#pr-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>h3{align-self:end;margin:0 0 2px}
#pr-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>small{align-self:start}

/* ---- スマホ：上のバーを2段に（1段目：戻る・言語・該当数／2段目：タイトル・在庫管理） ---- */
@media (max-width:600px){
  #pr-app .fr-top{flex-wrap:wrap;row-gap:6px}
  #pr-app .fr-top>b{order:5;flex:1 1 auto;min-width:0;font-size:.95rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  #pr-app .fr-top .iv-entry{order:6}
  #pr-app .fr-q{padding:18px 14px 14px;border-radius:18px}
  #pr-app .fr-wrap{padding-left:12px;padding-right:12px}
}
/* ---- iPad・PC：中央に寄せ、選択肢は2列 ---- */
@media (min-width:700px){
  #pr-app .fr-wrap{max-width:900px;margin:0 auto}
  #pr-app .fr-q{display:grid;grid-template-columns:1fr 1fr;column-gap:12px;align-items:stretch;padding:26px 26px 22px;border-radius:24px}
  #pr-app .fr-q>*{grid-column:1/-1}
  #pr-app .fr-q>.fr-opt{grid-column:auto;margin:0 0 12px;height:calc(100% - 12px)}
  #pr-app .fr-q .no{justify-self:start}
  #pr-app .fr-types{grid-template-columns:1fr 1fr}
}
@media (prefers-reduced-motion:reduce){#pr-app *,#pr-app{animation-duration:.01ms!important;transition-duration:.01ms!important}}

#pr-app [class$="-qi"],#pr-app .tb-qi{display:none!important}
</style>
<script id="app-motion-js">
/* PC相談：スクロールでナビゲーションバーに境界線（Apple風）／iOSで押した感触を出す */
(function () {
  var r = document.getElementById("pr-app");
  if (!r) return;
  var on = false;
  r.addEventListener("scroll", function () {
    var s = r.scrollTop > 4;
    if (s !== on || !r.classList.contains("scrolled") === s) { on = s; r.classList.toggle("scrolled", s); }
  }, { passive: true });
  document.addEventListener("touchstart", function () {}, { passive: true });   // iOSで :active を効かせる
})();
</script>
</body>
</html>
