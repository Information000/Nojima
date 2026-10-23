<!DOCTYPE html>
<html lang="ja">
<head>
<base href="../">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes, viewport-fit=cover">
<title>ドライヤーの相談 | イオンモール成田店</title>
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
<body data-lang="ja" data-dept="home" data-product="dryer">
<!-- ======================================================================
     ▼▼▼ 在庫データ（ドライヤー・ヘアアイロン）▼▼▼
     ・1商品 = items の中の { } ひとつ。型番・価格・スペック・大きさ・リンクなど
     ・status: "active"=販売中 / "ended"=販売終了（相談に出なくなる）
     ・links: type は "official"(メーカー公式HP) / "manual"(取扱説明書) / "ref"(参考リンク)
     ・ふだんは相談画面の上のバーにある「🔐 在庫管理」から編集できます（暗証番号は adminPin）
     ====================================================================== -->
<script type="application/json" id="inventory-data">
{
  "category": "dryer",
  "label": "ドライヤー・ヘアアイロン",
  "version": "2026-10-23",
  "adminPin": "staff2026",
  "groups": [
    {
      "id": "d1",
      "name": "大風量・速乾タイプ"
    },
    {
      "id": "d2",
      "name": "うるおいケアタイプ"
    },
    {
      "id": "d3",
      "name": "センシング・温度制御タイプ"
    },
    {
      "id": "d4",
      "name": "超軽量・遠赤外線タイプ"
    },
    {
      "id": "i1",
      "name": "サロン仕様・即熱ストレート"
    },
    {
      "id": "i2",
      "name": "ケアプレート・ストレート"
    },
    {
      "id": "i3",
      "name": "2WAY・コスパタイプ"
    }
  ],
  "tagOptions": {},
  "schema": {
    "root": "dr-app",
    "icon": "💨",
    "map": {
      "maker": "mfg",
      "groupId": "type",
      "grades": "r"
    },
    "fields": [
      {
        "k": "mode",
        "l": "種類",
        "t": "seg",
        "o": [
          [
            "dryer",
            "ドライヤー"
          ],
          [
            "iron",
            "ヘアアイロン"
          ]
        ]
      },
      {
        "k": "feat",
        "l": "特長（ひとこと）"
      },
      {
        "k": "air",
        "l": "風量（m³/分・ドライヤー）",
        "t": "number"
      },
      {
        "k": "hu",
        "l": "立ち上がり（秒・アイロン）",
        "t": "number"
      },
      {
        "k": "g",
        "l": "重さ（g）",
        "t": "number"
      },
      {
        "k": "shape",
        "l": "形（straight / 2way・アイロン）"
      },
      {
        "k": "os",
        "l": "海外対応（1=対応）",
        "t": "number"
      }
    ],
    "listFields": [
      "mode",
      "feat"
    ],
    "grades": [
      [
        "speed",
        "速乾力"
      ],
      [
        "care",
        "ヘアケア"
      ],
      [
        "light",
        "軽さ"
      ],
      [
        "travel",
        "海外・携帯"
      ],
      [
        "heat",
        "速熱"
      ],
      [
        "shape",
        "カール対応"
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
        "KINUJO"
      ],
      [
        "KOIZUMI"
      ],
      [
        "Panasonic"
      ],
      [
        "ReFa"
      ],
      [
        "TESCOM"
      ],
      [
        "Vidal Sassoon"
      ]
    ],
    "buckets": [
      [
        0,
        15000,
        "〜1.5万"
      ],
      [
        15000,
        25000,
        "1.5万〜2.5万"
      ],
      [
        25000,
        35000,
        "2.5万〜3.5万"
      ],
      [
        35000,
        1000000000000,
        "3.5万〜"
      ]
    ]
  },
  "items": [
    {
      "id": "dry_01",
      "status": "active",
      "maker": "KOIZUMI",
      "name": "モンスター BLDC (KHDM800R)",
      "model": "KHDM800R",
      "price": 14080,
      "groupId": "d1",
      "mode": "dryer",
      "feat": "ダブルファンBLDCで超速乾",
      "air": 2.4,
      "g": 520,
      "os": 0,
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "speed": "◎",
        "care": "◯"
      },
      "desc": {
        "ja": "ダブルファンBLDCで超速乾",
        "en": "",
        "zh": ""
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Akoizumi-seiki.jp%20KHDM800R",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Akoizumi-seiki.jp%20KHDM800R%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "dry_02",
      "status": "active",
      "maker": "Panasonic",
      "name": "ナノケア EH-NA0K",
      "model": "EH-NA0K",
      "price": 34650,
      "groupId": "d2",
      "mode": "dryer",
      "feat": "高浸透ナノイーで圧倒的うるおい",
      "air": 1.6,
      "g": 595,
      "os": 0,
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "speed": "◯",
        "care": "◎"
      },
      "desc": {
        "ja": "高浸透ナノイーで圧倒的うるおい",
        "en": "",
        "zh": ""
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EH-NA0K",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EH-NA0K%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "dry_03",
      "status": "active",
      "maker": "Panasonic",
      "name": "イオニティ EH-NE7N",
      "model": "EH-NE7N",
      "price": 7678,
      "groupId": "d1",
      "mode": "dryer",
      "feat": "大風量ダブルミネラルイオン",
      "air": 2,
      "g": 540,
      "os": 0,
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "speed": "◯",
        "care": "◯"
      },
      "desc": {
        "ja": "大風量ダブルミネラルイオン",
        "en": "",
        "zh": ""
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EH-NE7N",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EH-NE7N%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "dry_04",
      "status": "active",
      "maker": "ReFa",
      "name": "ReFa BEAUTECH DRYER SMART W",
      "model": "BEAUTECH",
      "price": 40000,
      "groupId": "d3",
      "mode": "dryer",
      "feat": "自動温冷調整＆海外対応スリム",
      "air": null,
      "g": 475,
      "os": 1,
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "speed": "◯",
        "care": "◎"
      },
      "desc": {
        "ja": "自動温冷調整＆海外対応スリム",
        "en": "",
        "zh": ""
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Arefa.net%20BEAUTECH",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Arefa.net%20BEAUTECH%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "dry_05",
      "status": "active",
      "maker": "KINUJO",
      "name": "KINUJO ヘアドライヤー (KH301)",
      "model": "KH301",
      "price": 31680,
      "groupId": "d4",
      "mode": "dryer",
      "feat": "超軽量コンパクト＆遠赤外線速乾",
      "air": 2.2,
      "g": 363,
      "os": 0,
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "speed": "◎",
        "care": "◎"
      },
      "desc": {
        "ja": "超軽量コンパクト＆遠赤外線速乾",
        "en": "",
        "zh": ""
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Akinujo.jp%20KH301",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Akinujo.jp%20KH301%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "iron_01",
      "status": "active",
      "maker": "TESCOM",
      "name": "プロフェッショナル NIS700A",
      "model": "NIS700A",
      "price": 12980,
      "groupId": "i1",
      "mode": "iron",
      "feat": "サロン仕様ヒーターで即効ストレート",
      "hu": 18,
      "g": 350,
      "shape": "straight",
      "os": 0,
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "care": "◯"
      },
      "desc": {
        "ja": "サロン仕様ヒーターで即効ストレート",
        "en": "",
        "zh": ""
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Atescom-japan.co.jp%20NIS700A",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Atescom-japan.co.jp%20NIS700A%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "iron_02",
      "status": "active",
      "maker": "Panasonic",
      "name": "ストレートアイロン ナノケア (EHHS0J)",
      "model": "EHHS0J",
      "price": 14850,
      "groupId": "i2",
      "mode": "iron",
      "feat": "ナノイー＋3D密着プレート",
      "hu": 20,
      "g": 380,
      "shape": "straight",
      "os": 0,
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "care": "◎"
      },
      "desc": {
        "ja": "ナノイー＋3D密着プレート",
        "en": "",
        "zh": ""
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EHHS0J",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Apanasonic.jp%20EHHS0J%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "iron_03",
      "status": "active",
      "maker": "ReFa",
      "name": "ReFa BEAUTECH STRAIGHT IRON",
      "model": "BEAUTECH",
      "price": 22000,
      "groupId": "i2",
      "mode": "iron",
      "feat": "カーボンレイヤーで潰さない・軽量",
      "hu": 30,
      "g": 295,
      "shape": "straight",
      "os": 0,
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "care": "◎"
      },
      "desc": {
        "ja": "カーボンレイヤーで潰さない・軽量",
        "en": "",
        "zh": ""
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Arefa.net%20BEAUTECH",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Arefa.net%20BEAUTECH%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "iron_04",
      "status": "active",
      "maker": "KINUJO",
      "name": "絹女 -KINUJO- (LM225)",
      "model": "LM225",
      "price": 24200,
      "groupId": "i2",
      "mode": "iron",
      "feat": "シルクプレートで水分蒸発を防ぐ",
      "hu": 20,
      "g": 390,
      "shape": "straight",
      "os": 0,
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "care": "◎"
      },
      "desc": {
        "ja": "シルクプレートで水分蒸発を防ぐ",
        "en": "",
        "zh": ""
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Akinujo.jp%20LM225",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Akinujo.jp%20LM225%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
          "auto": true
        }
      ]
    },
    {
      "id": "iron_05",
      "status": "active",
      "maker": "Vidal Sassoon",
      "name": "マイナスイオン 2WAY (VSI2550)",
      "model": "VSI2550",
      "price": 2470,
      "groupId": "i3",
      "mode": "iron",
      "feat": "1台でカール＆ストレート超コスパ",
      "hu": 45,
      "g": 320,
      "shape": "2way",
      "os": 0,
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [],
      "grades": {
        "care": "△"
      },
      "desc": {
        "ja": "1台でカール＆ストレート超コスパ",
        "en": "",
        "zh": ""
      },
      "note": "",
      "updated": "2026-10-23",
      "photo": null,
      "links": [
        {
          "type": "official",
          "title": "メーカーサイトで型番を検索",
          "url": "https://www.google.com/search?q=site%3Avidalsassoon.jp%20VSI2550",
          "auto": true
        },
        {
          "type": "manual",
          "title": "取扱説明書を検索",
          "url": "https://www.google.com/search?q=site%3Avidalsassoon.jp%20VSI2550%20%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8",
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
  "category": "dryer",
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
  <h1 class="pg-ttl">ドライヤー</h1>
  <button type="button" class="pg-btn main" id="pg-open">相談をもう一度ひらく</button>
  <a class="pg-btn sub" id="pg-back" href="kaden/">← エリアへ戻る</a>
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
  var APP = "dryer";                 // このページの相談アプリ
  var ROOT_ID = "dr-app";            // アプリの表示エリア
  var AREA_URL = "kaden/";       // 閉じたときに戻るエリアページ
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

<!-- ===== 相談アプリ: dryer ===== -->
<style>
.dr-svg {
  width: 84px;
  height: 64px;
  display: block;
  margin: 0 auto 2px;
  overflow: visible;
}
.dr-wind {
  stroke: #60a5fa;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 6 8;
  animation: drw 1.1s linear infinite;
  animation-delay: var(--dl,0s);
}
@keyframes drw {
  to {
    stroke-dashoffset: -28;
  }
}
.dr-dot {
  animation: drf 2.4s ease-in-out infinite;
  animation-delay: var(--dl,0s);
}
@keyframes drf {
  50% {
    transform: translateY(-6px);
    opacity: .45;
  }
}
.dr-pl {
  transform-box: fill-box;
  transform-origin: left center;
  animation: drp 3.2s ease-in-out infinite;
  animation-delay: var(--dl,0s);
}
@keyframes drp {
  0%,
  35%,
  to {
    transform: rotate(-16deg);
  }
  52%,
  86% {
    transform: rotate(0);
  }
}
.dr-curl {
  stroke-dasharray: 120;
  animation: drc 3s ease-in-out infinite;
}
@keyframes drc {
  0% {
    stroke-dashoffset: 120;
  }
  60%,
  to {
    stroke-dashoffset: 0;
  }
}
.dr-tabs {
  display: flex;
  gap: 6px;
  background: #e2e8f0;
  border-radius: 99px;
  padding: 4px;
  margin-bottom: 14px;
}
.dr-tabs button {
  flex: 1;
  border: 0;
  border-radius: 99px;
  padding: 9px;
  font-size: .92rem;
  font-weight: 800;
  color: #475569;
  background: transparent;
  cursor: pointer;
  transition: .25s;
}
.dr-tabs button.on {
  background: #fff;
  color: #7c3aed;
  box-shadow: 0 3px 10px #7c3aed33;
}
.dr-models {
  margin-top: 6px;
  font-size: .8rem;
  color: #64748b;
  line-height: 1.6;
}
.dr-flow {
  display: flex;
  gap: 6px;
  margin: 0 0 14px;
  font-size: .8rem;
  font-weight: 800;
  color: #475569;
}
.dr-flow span {
  flex: 1;
  text-align: center;
  background: #fff;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  padding: 7px 2px;
}
.dr-flow span b {
  display: block;
  color: #7c3aed;
  font-size: .78rem;
}
.dr-why {
  font-size: .8rem;
  color: #334155;
  background: #f5f3ff;
  border-radius: 8px;
  padding: 7px 9px;
  margin: 6px 0;
  line-height: 1.6;
}
</style><div id="dr-app" class="fr-root" role="dialog" aria-label="ドライヤー・ヘアアイロン相談"></div>
<script>
(function () {
  "use strict";
  const f = document.getElementById("dr-app"),
    F = () => typeof currentLang < "u" && currentLang || "ja",
    ae = { ja: 0, en: 1, zh: 2 },
    a = e => Array.isArray(e) ? e[ae[F()]] : e,
    p = function (e) {
      let t = a(e);
      for (let s = 1; s < arguments.length; s++)
        t = t.split("{" + (s - 1) + "}").join(arguments[s]);
      return t;
    },
    A = e => a(e.n),
    se = { bud: ["予算", "Budget", "预算"], wt: ["重さ", "Weight", "重量"] },
    q = {
      dry_01: ["モンスター BLDC (KHDM800R)", "Monster BLDC (KHDM800R)", "Monster BLDC (KHDM800R)"],
      dry_02: ["ナノケア EH-NA0K", "Nanocare EH-NA0K", "Nanocare EH-NA0K"],
      dry_03: ["イオニティ EH-NE7N", "Ionity EH-NE7N", "Ionity EH-NE7N"],
      dry_05: ["KINUJO ヘアドライヤー (KH301)", "KINUJO Hair Dryer (KH301)", "KINUJO 吹风机 (KH301)"],
      iron_01: ["プロフェッショナル NIS700A", "Professional NIS700A", "专业款 NIS700A"],
      iron_02: [
        "ストレートアイロン ナノケア (EHHS0J)",
        "Straight Iron Nanocare (EHHS0J)",
        "直发夹板 Nanocare (EHHS0J)"
      ],
      iron_04: ["絹女 -KINUJO- (LM225)", "KINUJO (LM225)", "绢女 -KINUJO- (LM225)"],
      iron_05: ["マイナスイオン 2WAY (VSI2550)", "Negative Ion 2WAY (VSI2550)", "负离子 2WAY (VSI2550)"]
    },
    J = {
      dry_01: [
        "ダブルファンBLDCで超速乾",
        "Ultra-fast drying with a double-fan BLDC motor",
        "双风扇BLDC电机，超速干发"
      ],
      dry_02: [
        "高浸透ナノイーで圧倒的うるおい",
        "Overwhelming moisture with high-penetration nanoe",
        "高渗透纳米水离子，润泽感出众"
      ],
      dry_03: ["大風量ダブルミネラルイオン", "High airflow with double mineral ions", "大风量双矿物离子"],
      dry_04: [
        "自動温冷調整＆海外対応スリム",
        "Automatic hot/cool adjustment and a slim, overseas-compatible body",
        "自动温冷调节，轻薄且支持海外电压"
      ],
      dry_05: [
        "超軽量コンパクト＆遠赤外線速乾",
        "Ultra-light, compact, and far-infrared fast drying",
        "超轻小巧，远红外线速干"
      ],
      iron_01: ["サロン仕様ヒーターで即効ストレート", "Salon-grade heater for quick straightening", "沙龙级加热元件，快速拉直"],
      iron_02: ["ナノイー＋3D密着プレート", "Nanoe + 3D close-contact plates", "纳米水离子＋3D贴合夹板"],
      iron_03: [
        "カーボンレイヤーで潰さない・軽量",
        "Carbon layer prevents flattening; lightweight",
        "碳层夹板不压塌发丝，轻量"
      ],
      iron_04: ["シルクプレートで水分蒸発を防ぐ", "Silk plates prevent moisture from evaporating", "丝绸夹板防止水分蒸发"],
      iron_05: [
        "1台でカール＆ストレート超コスパ",
        "Curl and straighten with one unit; great value",
        "一台即可卷发+直发，超高性价比"
      ]
    },
    E = e => q[e.id] ? a(q[e.id]) : e.name,
    W = e => J[e.id] ? a(J[e.id]) : e.feat,
    _ = () => a(
      l.mode === "dryer" ? ["ドライヤー", "Hair Dryer", "吹风机"] : ["ヘアアイロン", "Hair Iron", "卷直发器"]
    ),
    w = e => "¥" + e.toLocaleString("ja-JP"),
    D = { "◎": 5, "◯": 3.5, "△": 2 },
    T = (e, t, s) => Math.max(t, Math.min(s, e)),
    Q = (window.NJ_INV ? window.NJ_INV.products() : []),
    oe = [
      [
        ["ヒートプロテクト ヘアオイル", "Heat-Protect Hair Oil", "防热护发精油"],
        "¥1,980",
        ["熱から髪を守りツヤ感をアップ", "Shields hair from heat and boosts shine", "保护头发免受高温伤害，提升光泽"]
      ],
      [
        ["耐熱収納ポーチ", "Heat-Resistant Storage Pouch", "耐热收纳袋"],
        "¥1,480",
        [
          "使用直後の熱い本体も安全に収納",
          "Safely stores the unit even right after use, while still hot",
          "刚使用完仍很烫的机身也能安全收纳"
        ]
      ]
    ],
    B = [
      {
        id: "d1",
        mode: "dryer",
        n: ["大風量・速乾タイプ", "High-airflow / fast-drying type", "大风量·速干型"],
        sub: ["風量で時短", "Saves time with airflow", "靠风量节省时间"],
        who: [
          "髪が多い・長い方／朝の時短をしたい方",
          "Those with thick or long hair / those who want to save time in the morning",
          "发量多·头发长的人／想节省早晨时间的人"
        ],
        pro: [
          "風量が大きく乾燥時間を短縮。手頃な価格のモデルもある",
          "Large airflow shortens drying time. Some models are reasonably priced.",
          "风量大，缩短吹干时间。也有价格实惠的机型。"
        ],
        con: [
          "本体はやや重め（520〜540g）。ケア力は◯評価でケア最優先なら次のタイプ",
          "Slightly heavy (520–540 g). Care rated ◯; if care is your top priority, choose the next type.",
          "机身略重（520～540g）。护发力评为◯，若最重视护发请选择下一类型。"
        ]
      },
      {
        id: "d2",
        mode: "dryer",
        n: ["うるおいケアタイプ", "Moisture-care type", "润泽护理型"],
        sub: ["高浸透ナノイー", "High-penetration nanoe", "高渗透纳米水离子"],
        who: [
          "ダメージ・パサつき・クセが気になる方",
          "Those concerned about damage, dryness, and frizz",
          "在意损伤·毛躁·发质不顺的人"
        ],
        pro: ["うるおい・ツヤのケア力が◎", "Top (◎) care for moisture and shine", "润泽·光泽护理力为◎"],
        con: [
          "約3.5万円と高めで、今回の中では最重量（595g）",
          "Pricey at about ¥35,000, and the heaviest of this lineup (595 g).",
          "约3.5万日元，价格偏高，且是本次对比中最重的（595g）。"
        ]
      },
      {
        id: "d3",
        mode: "dryer",
        n: ["センシング・温度制御タイプ", "Sensing / temperature-control type", "感应·温控型"],
        sub: ["温冷を自動調整", "Automatic hot/cool adjustment", "自动温冷调节"],
        who: [
          "熱ダメージを抑えたい／海外でも使いたい方",
          "Those who want to limit heat damage / use it overseas too",
          "想减少热损伤／也想在海外使用的人"
        ],
        pro: [
          "温冷を自動調整。475gのスリムさと海外対応が強み",
          "Automatic hot/cool adjustment. Strengths are its slim 475 g body and overseas compatibility.",
          "自动调节温冷。优势是475g的轻薄机身和支持海外电压。"
        ],
        con: [
          "約4万円と最も高価。速乾力は◯評価",
          "The most expensive at about ¥40,000. Fast-drying power rated ◯.",
          "约4万日元，价格最高。速干力评为◯。"
        ]
      },
      {
        id: "d4",
        mode: "dryer",
        n: ["超軽量・遠赤外線タイプ", "Ultra-light / far-infrared type", "超轻·远红外线型"],
        sub: ["363gの軽さ", "Light at 363 g", "仅363g的轻盈"],
        who: [
          "腕の疲れ・持ち運びを減らしたい方",
          "Those who want less arm fatigue and easier carrying",
          "想减轻手臂疲劳·便于携带的人"
        ],
        pro: [
          "363gの超軽量で、速乾もケアも◎評価",
          "Ultra-light at 363 g, with ◎ ratings for both fast drying and care.",
          "363g超轻，速干与护发均为◎评价。"
        ],
        con: ["約3.2万円と価格は中〜高め", "Mid-to-high price at about ¥32,000.", "约3.2万日元，价格中等偏高。"]
      },
      {
        id: "i1",
        mode: "iron",
        n: ["サロン仕様・即熱ストレート", "Salon-grade quick-heat straightener", "沙龙级·速热直发夹"],
        sub: ["18秒で立ち上がり", "Heats up in 18 seconds", "18秒升温"],
        who: [
          "忙しい朝／毎日しっかりストレートにしたい方",
          "Busy mornings / those who want solid straightening every day",
          "忙碌的早晨／每天都想认真拉直的人"
        ],
        pro: [
          "立ち上がり18秒で約1.3万円。時短と価格のバランスが良い",
          "Heats in 18 seconds for about ¥13,000. A good balance of speed and price.",
          "18秒升温，约1.3万日元。省时与价格均衡。"
        ],
        con: ["ストレート専用。ケア力は◯評価", "Straightening only. Care rated ◯.", "仅限直发。护发力评为◯。"]
      },
      {
        id: "i2",
        mode: "iron",
        n: ["ケアプレート・ストレート", "Care-plate straightener", "护理夹板·直发夹"],
        sub: ["ナノイー／カーボン／シルク", "Nanoe / carbon / silk", "纳米水离子／碳／丝绸"],
        who: [
          "カラー・ダメージが気になる方／毎日使う方",
          "Those concerned about color treatment and damage / daily users",
          "在意染发·损伤的人／每天使用的人"
        ],
        pro: [
          "プレート素材で髪の傷みを抑える。機種ごとに強みが分かれる",
          "Plate materials reduce hair damage. Strengths differ by model.",
          "夹板材质可减少对头发的损伤。各机型的优势不同。"
        ],
        con: [
          "1.5〜2.4万円台。立ち上がりは20〜30秒と機種で差がある",
          "About ¥15,000–24,000. Heat-up takes 20–30 seconds depending on the model.",
          "1.5～2.4万日元。升温时间为20～30秒，因机型而异。"
        ]
      },
      {
        id: "i3",
        mode: "iron",
        n: ["2WAY・コスパタイプ", "2-way / value type", "2WAY·高性价比型"],
        sub: ["カールもストレートも", "Curls and straightening", "可卷也可直"],
        who: [
          "初めての1台／1台で巻きも伸ばしもしたい方",
          "First-timers / those who want to curl and straighten with one unit",
          "第一次购买／想一台兼顾卷发和直发的人"
        ],
        pro: ["約2,500円でカールもストレートもできる", "Curl and straighten for about ¥2,500.", "约2,500日元即可卷发和直发。"],
        con: [
          "立ち上がり45秒、ケア・速熱は△評価",
          "45-second heat-up; care and quick heating are rated △.",
          "升温需45秒，护发与速热评为△。"
        ]
      }
    ],
    ie = e => B.filter(t => t.id === e.type)[0],
    re = {
      d1: "#2563eb",
      d2: "#a855f7",
      d3: "#0ea5e9",
      d4: "#f59e0b",
      i1: "#ef4444",
      i2: "#a855f7",
      i3: "#10b981"
    };
  function ne(e, t) {
    const s = re[e.id], o = e.id;
    if (e.mode === "dryer") {
      let c = "";
      return o === "d1"
        && (
          c = [0, 1, 2].map(
            r => '<line class="dr-wind" style="--dl:'
              + (t + r * .22)
              + 's" x1="66" y1="'
              + (20 + r * 9)
              + '" x2="84" y2="'
              + (20 + r * 9)
              + '"/>'
          ).join("")
        ),
        o === "d2"
          && (
            c = [0, 1, 2, 3].map(
              r => '<circle class="dr-dot" style="--dl:'
                + (t + r * .5)
                + 's" cx="'
                + (68 + r * 5)
                + '" cy="'
                + (18 + r % 2 * 14)
                + '" r="2.6" fill="#c084fc"/>'
            ).join("")
          ),
        o === "d3"
          && (
            c = '<path d="M68 18q8 8 0 16M74 14q12 12 0 24" fill="none" stroke="#38bdf8" stroke-width="2.5" '
              + 'stroke-linecap="round" class="dr-dot" style="--dl:'
              + t
              + 's"/>'
          ),
        o === "d4"
          && (
            c = [0, 1].map(
              r => '<path class="dr-dot" style="--dl:'
                + (t + r * .7)
                + 's" d="M70 '
                + (20 + r * 14)
                + 'q8-6 14 0q-6 6-14 0z" fill="#fbbf24"/>'
            ).join("")
          ),
        '<svg class="dr-svg" viewBox="0 0 90 64"><path d="M8 12h44a9 9 0 0 1 9 9v9a9 9 0 0 1-9 9H8z" fill="'
          + s
          + '"/><rect x="18" y="38" width="13" height="23" rx="6" fill="'
          + s
          + '" opacity=".72"/><rect x="52" y="16" width="11" height="19" rx="3" fill="#cbd5e1"/>'
          + c
          + "</svg>";
    }
    const d = o === "i3",
      n = (c, r) => '<rect class="dr-pl" style="--dl:'
        + t
        + "s;"
        + (r ? "transform:scaleY(-1)" : "")
        + '" x="10" y="'
        + c
        + '" width="64" height="9" rx="4.5" fill="'
        + s
        + '"/>';
    return '<svg class="dr-svg" viewBox="0 0 90 64"><rect x="10" y="34" width="64" height="9" rx="4.5" fill="'
      + s
      + '" opacity=".75"/>'
      + n(21, 0)
      + '<rect x="6" y="46" width="12" height="14" rx="5" fill="#94a3b8"/>'
      + (
        d
          ? '<path class="dr-curl" d="M74 30c10-2 10-14 2-14s-8 10 2 10 8-6 6-10" fill="none" '
            + 'stroke="#34d399" stroke-width="3" stroke-linecap="round"/>'
          : '<line class="dr-wind" style="--dl:'
            + t
            + 's;stroke:#fca5a5" x1="76" y1="32" x2="88" y2="32"/>'
      )
      + "</svg>";
  }
  const le = [
    [
      "speed",
      ["速乾力", "Drying speed", "速干力"],
      "💨",
      [
        "風量の大きさ。髪が多い・長いほど乾燥時間に差が出ます",
        "Airflow volume. The thicker or longer your hair, the bigger the difference in drying time.",
        "风量大小。头发越多·越长，吹干时间的差距越明显。"
      ]
    ],
    [
      "care",
      ["ヘアケア", "Hair care", "护发"],
      "✨",
      [
        "イオン・温度制御など、熱ダメージを抑えうるおいを守る力",
        "Ions, temperature control, etc. that reduce heat damage and protect moisture.",
        "离子·温控等，减少热损伤并锁住水分的能力。"
      ]
    ],
    [
      "light",
      ["軽さ", "Lightness", "轻量"],
      "🪶",
      [
        "本体重量。毎日腕で持つので疲れにくさに直結します",
        "Unit weight. You hold it every day, so it directly affects fatigue.",
        "机身重量。每天都要用手臂拿着，直接关系到是否容易疲劳。"
      ]
    ],
    [
      "travel",
      ["海外・携帯", "Overseas / portable", "海外·便携"],
      "✈️",
      [
        "海外電圧対応など。資料で確認できたもののみ高評価",
        "Overseas voltage support, etc. Only models confirmed in the documentation score high.",
        "是否支持海外电压等。仅资料中可确认的机型才获高评价。"
      ]
    ],
    [
      "price",
      ["価格", "Price", "价格"],
      "💴",
      ["本体価格の手頃さ", "Affordability of the unit price", "机身价格是否实惠"]
    ]
  ],
    ce = [
      [
        "heat",
        ["速熱", "Quick heat", "速热"],
        "⚡",
        [
          "電源を入れてから使える温度になるまでの速さ",
          "How quickly it reaches usable temperature after power-on.",
          "开机后达到可用温度的速度。"
        ]
      ],
      [
        "care",
        ["プレートケア", "Plate care", "夹板护理"],
        "✨",
        [
          "プレート素材・イオンなど、髪の傷みを抑える仕様",
          "Plate material, ions, and other features that reduce hair damage.",
          "夹板材质·离子等减少头发损伤的规格。"
        ]
      ],
      [
        "light",
        ["軽さ", "Lightness", "轻量"],
        "🪶",
        [
          "本体重量。手首への負担や持ち運びやすさ",
          "Unit weight. Strain on your wrist and ease of carrying.",
          "机身重量。对手腕的负担及携带便利性。"
        ]
      ],
      [
        "shape",
        ["カール対応", "Curl capability", "卷发能力"],
        "🔁",
        ["ストレート専用か、カールもできる2WAYか", "Straight-only, or 2-way that can curl too.", "仅限直发，还是可卷发的2WAY。"]
      ],
      [
        "price",
        ["価格", "Price", "价格"],
        "💴",
        ["本体価格の手頃さ", "Affordability of the unit price", "机身价格是否实惠"]
      ]
    ],
    k = e => a(e[1]),
    X = e => a(e[3]),
    z = () => l.mode === "dryer" ? le : ce,
    V = {
      id: "tr",
      st: 1,
      t: [
        "海外旅行・出張でも使いますか？",
        "Will you also use it on overseas trips or business travel?",
        "出国旅行·出差时也会使用吗？"
      ],
      h: [
        "海外電圧に非対応のものを海外で使うと故障の原因になります。「必須」を選ぶと、対応が資料で確認できない機種は減点し、店頭確認の注意を出します。",
        "Using a model that does not support overseas voltage abroad can cause failure. If you "
          + "choose “Essential”, models whose support cannot be confirmed in the documentation are "
          + "penalized and flagged for in-store confirmation.",
        "在海外使用不支持海外电压的机型可能导致故障。选择“必须”后，资料中无法确认支持的机型会被扣分，并提示需在店内确认。"
      ],
      o: [
        [["必須（海外でも使う）", "Essential (I’ll use it overseas)", "必须（海外也会使用）"], "must"],
        [["できれば対応していてほしい", "Preferably supported", "最好支持"], "like"],
        [["自宅のみ", "Home use only", "仅在家使用"], "none"]
      ]
    },
    G = e => ({
      id: "hl",
      st: 2,
      t: ["髪の長さは？", "How long is your hair?", "头发有多长？"],
      h: e,
      o: [
        [["ショート〜ボブ", "Short to bob", "短发～波波头"], 0],
        [["ミディアム", "Medium", "中长发"], 1],
        [["ロング", "Long", "长发"], 2]
      ]
    }),
    de = [
      {
        id: "bud",
        st: 9,
        t: ["ご予算の上限は？", "What is your maximum budget?", "预算上限是多少？"],
        h: [
          "ここまでのお話で、暮らしに合う機種が見えてきました。高価格帯の方が合う場合もあるため、予算は最後におたずねします。超えた分は減点で調整します。",
          "We now know your needs. A pricier model may suit you better, so budget comes last; going "
            + "over only lowers the score.",
          "已了解您的需求。更高价位的机型可能更适合，所以最后才询问预算；超出预算只会扣分。"
        ],
        o: [
          [["〜1万円", "Up to ¥10,000", "1万日元以下"], 1e4],
          [["〜2万円", "Up to ¥20,000", "2万日元以下"], 2e4],
          [["〜3.5万円", "Up to ¥35,000", "3.5万日元以下"], 35e3],
          [["〜4.5万円", "Up to ¥45,000", "4.5万日元以下"], 45e3],
          [["予算にこだわらない", "Budget is no concern", "不限预算"], 1e9]
        ]
      },
      {
        id: "wt",
        st: 2,
        t: ["本体の重さ、どこまで許せますか？", "How heavy a unit can you tolerate?", "机身重量能接受到多少？"],
        h: [
          "乾かしている間ずっと腕で持ちます。目安：超軽量＝360g台／標準＝500g前後／やや重め＝600g弱。",
          "You hold it with your arm the whole time you dry. Guide: ultra-light = 360 g range / "
            + "standard = around 500 g / somewhat heavy = just under 600 g.",
          "吹干期间一直要用手臂拿着。参考：超轻＝360g左右／标准＝500g左右／略重＝接近600g。"
        ],
        o: [
          [["〜400g（とにかく軽く）", "Up to 400 g (as light as possible)", "400g以下（务必轻）"], 400],
          [["〜500g", "Up to 500 g", "500g以下"], 500],
          [["〜550g", "Up to 550 g", "550g以下"], 550],
          [["気にしない", "Don’t mind", "不在意"], 9999]
        ]
      },
      V,
      G([
        "長いほど乾かす時間が延び、風量の差が効いてきます。",
        "The longer your hair, the longer drying takes, and the more airflow differences matter.",
        "头发越长，吹干时间越久，风量差异的影响就越大。"
      ]),
      {
        id: "vo",
        st: 2,
        t: ["髪の量・太さは？", "How much hair do you have, and how thick is it?", "发量·粗细如何？"],
        h: [
          "量が多い・太い髪は乾きにくく、速乾力の重みが上がります。",
          "Thick or abundant hair dries slowly, so drying-speed weight goes up.",
          "发量多·发质粗的头发不易干，速干力的权重会提高。"
        ],
        o: [
          [["少なめ・細い", "Thin / fine", "少·细"], 0],
          [["普通", "Average", "普通"], 1],
          [["多い・太い", "Thick / abundant", "多·粗"], 2]
        ]
      },
      {
        id: "dm",
        st: 1,
        t: ["髪のダメージ・クセは？", "How is your hair’s damage and frizz?", "头发的损伤·发质状况如何？"],
        h: [
          "カラー・ブリーチ・パサつきが強いほど、ヘアケア性能の重みを上げます。",
          "The more color, bleach, and dryness damage, the more weight we give to hair-care performance.",
          "染发·漂发·毛躁越严重，护发性能的权重就越高。"
        ],
        o: [
          [["カラー・ブリーチ・パサつきが強い", "Heavy color/bleach damage or dryness", "染发·漂发·毛躁严重"], "high"],
          [["クセ・うねりが強い", "Strong frizz or waves", "发质不顺·卷曲明显"], "wavy"],
          [["あまり気にならない", "Not much of a concern", "不太在意"], "none"]
        ]
      },
      {
        id: "wr",
        st: 2,
        t: [
          "今のドライヤーで一番困っていることは？",
          "What bothers you most about your current dryer?",
          "目前吹风机最让您困扰的是什么？"
        ],
        h: [
          "困りごとに近い軸を優先的に重みづけします。",
          "We weight the criteria closest to your pain point more heavily.",
          "会优先提高与您困扰最接近的维度的权重。"
        ],
        o: [
          [["乾くまで時間がかかる", "It takes a long time to dry", "要很久才能吹干"], "time"],
          [["熱で髪や頭皮が傷む気がする", "Heat seems to damage my hair or scalp", "感觉热风会伤害头发或头皮"], "heat"],
          [["重くて腕が疲れる", "It’s heavy and tires my arm", "太重，手臂容易累"], "heavy"],
          [["特にない", "Nothing in particular", "没有特别困扰"], "none"]
        ]
      },
      {
        id: "af",
        st: 1,
        t: ["風量は強い方がいいですか？", "Do you want strong airflow?", "希望风量大吗？"],
        h: [
          "風量が強いほど乾く時間は短くなりますが、音や重さは増えがちです。髪が多い・長い方ほど差が出ます。",
          "Stronger airflow dries faster but tends to be louder and heavier. The difference grows with "
            + "thick or long hair.",
          "风量越大干得越快，但噪音和重量也容易增加。发量多·头发长的人差异更明显。"
        ],
        o: [
          [["強い方がいい（とにかく早く乾かしたい）", "Strong (I want it dry fast)", "风量大（想尽快吹干）"], 2],
          [["ふつうでよい", "Average is fine", "普通即可"], 1],
          [["弱めでよい（静かさ・やさしさ重視）", "Gentle is fine (quiet, soft)", "弱一点也行（重视安静·温和）"], 0]
        ]
      },
      {
        id: "sn",
        st: 2,
        show: () => N("wr") === "heat",
        t: ["熱で一番気になるのは？", "Where does heat bother you most?", "热量最困扰您的是哪里？"],
        h: [
          "頭皮の熱さが気になるなら温度を抑えられる機種を、毛先のパサつきならケア力を重く見ます。（「熱が気になる」と答えた方にだけおたずねします）",
          "If scalp heat bothers you, we favor gentler temperatures; if dry ends, we weigh care more. "
            + "(Asked only if heat is your concern.)",
          "头皮发烫则看重温和温度，发尾干枯则更看重护发力。（仅在选择“在意热量”时询问）"
        ],
        o: [
          [["頭皮・地肌が熱い", "Scalp feels too hot", "头皮发烫"], "scalp"],
          [["毛先のパサつき・傷み", "Dry, damaged ends", "发尾干枯受损"], "ends"]
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
          "選んだ軸は評価を約2.2倍にして最終順位を決めます。最終画面で軸を切り替えて見比べもできます。",
          "The criterion you choose is weighted about 2.2x in the final ranking. You can switch "
            + "criteria on the final screen to compare.",
          "您选择的维度在最终排名中权重约为2.2倍。在最终画面可切换维度进行对比。"
        ],
        o: [
          [
            [
              "とにかく速く乾かしたい（速乾力）",
              "I want it to dry as fast as possible (drying speed)",
              "无论如何都想尽快吹干（速干力）"
            ],
            "speed"
          ],
          [["髪のうるおい・ダメージケア", "Hair moisture and damage care", "头发的润泽·损伤护理"], "care"],
          [["軽さ・疲れにくさ", "Lightness / less fatigue", "轻量·不易疲劳"], "light"],
          [["海外・携帯性", "Overseas use / portability", "海外使用·便携性"], "travel"],
          [["価格の安さ", "Low price", "价格便宜"], "price"]
        ]
      }
    ],
    he = [
      {
        id: "bud",
        st: 9,
        t: ["ご予算の上限は？", "What is your maximum budget?", "预算上限是多少？"],
        h: [
          "ここまでのお話で、暮らしに合う機種が見えてきました。高価格帯の方が合う場合もあるため、予算は最後におたずねします。超えた分は減点で調整します。",
          "We now know your needs. A pricier model may suit you better, so budget comes last; going "
            + "over only lowers the score.",
          "已了解您的需求。更高价位的机型可能更适合，所以最后才询问预算；超出预算只会扣分。"
        ],
        o: [
          [["〜5千円", "Up to ¥5,000", "5千日元以下"], 5e3],
          [["〜1.5万円", "Up to ¥15,000", "1.5万日元以下"], 15e3],
          [["〜2.5万円", "Up to ¥25,000", "2.5万日元以下"], 25e3],
          [["予算にこだわらない", "Budget is no concern", "不限预算"], 1e9]
        ]
      },
      {
        id: "sh",
        st: 1,
        t: ["どんなスタイリングをしたいですか？", "What kind of styling do you want?", "想做什么样的造型？"],
        h: [
          "ストレート専用機は、本格的なカールが苦手（毛先の内巻き程度が目安）。カールが必須なら2WAYが有利です。",
          "Straight-only models struggle with real curls (inward curling of the ends is about the "
            + "limit). If curls are essential, a 2-way model is better.",
          "直发专用机不擅长做完整的卷发（大致只能做发尾内卷）。如果必须卷发，2WAY更有利。"
        ],
        o: [
          [["ストレート中心", "Mostly straightening", "以直发为主"], "straight"],
          [["カール中心", "Mostly curling", "以卷发为主"], "curl"],
          [["1台でどちらもしたい", "Both with one unit", "一台兼顾两者"], "both"]
        ]
      },
      V,
      G([
        "長いほど処理に時間がかかり、立ち上がりの速さと軽さが効いてきます。",
        "The longer your hair, the more time it takes, so heat-up speed and lightness matter more.",
        "头发越长，造型耗时越久，升温速度和轻量性就越重要。"
      ]),
      {
        id: "dm",
        st: 1,
        t: ["髪のダメージ・クセは？", "How is your hair’s damage and frizz?", "头发的损伤·发质状况如何？"],
        h: [
          "カラー・ブリーチ・パサつきが強いほど、プレートのケア性能の重みを上げます。",
          "The more color, bleach, and dryness damage, the more weight we give to plate care performance.",
          "染发·漂发·毛躁越严重，夹板护理性能的权重就越高。"
        ],
        o: [
          [["カラー・ブリーチ・パサつきが強い", "Heavy color/bleach damage or dryness", "染发·漂发·毛躁严重"], "high"],
          [["クセ・うねりが強い", "Strong frizz or waves", "发质不顺·卷曲明显"], "wavy"],
          [["あまり気にならない", "Not much of a concern", "不太在意"], "none"]
        ]
      },
      {
        id: "fq",
        st: 2,
        t: ["使う頻度は？", "How often do you use it?", "使用频率如何？"],
        h: [
          "毎日使うほど髪へのダメージが積み重なり、ケア重視に。たまに使うだけなら価格・軽さが優先です。",
          "The more often you use it, the more damage accumulates, so care becomes important. For "
            + "occasional use, price and lightness take priority.",
          "使用越频繁，对头发的损伤累积越多，应更重视护理。偶尔使用的话，价格与轻量优先。"
        ],
        o: [
          [["ほぼ毎日", "Almost daily", "几乎每天"], "daily"],
          [["週に数回", "A few times a week", "每周几次"], "some"],
          [["前髪・お出かけ時のみ", "Only for bangs / when going out", "仅用于刘海／外出时"], "occ"]
        ]
      },
      {
        id: "rs",
        st: 2,
        t: ["朝の準備にかけられる時間は？", "How much time do you have for morning prep?", "早晨准备能花多少时间？"],
        h: [
          "時間が短いほど「立ち上がりの速さ」の重みを上げます。",
          "The shorter your time, the more weight we give to heat-up speed.",
          "时间越短，“升温速度”的权重越高。"
        ],
        o: [
          [["とにかく急いでいる（数分）", "In a big hurry (a few minutes)", "非常赶时间（几分钟）"], "rush"],
          [["ゆとりがある", "Have some time to spare", "时间比较充裕"], "calm"]
        ]
      },
      {
        id: "cv",
        st: 2,
        show: () => ["curl", "both"].includes(N("sh")),
        t: ["どんな仕上がりのカールにしたいですか？", "What kind of curl finish do you want?", "想要什么样的卷度？"],
        h: [
          "ゆるく毛先だけならストレート兼用でも十分。しっかり巻くなら2WAYが有利です。（カールを選んだ方にだけおたずねします）",
          "For soft ends-only curls, a straight iron is fine; for defined curls a 2-way is better. "
            + "(Asked only if you want curls.)",
          "只卷发尾轻柔卷度，直发夹也够用；要明显卷度则2WAY更有利。（仅在想要卷发时询问）"
        ],
        o: [
          [["ゆるふわ・毛先だけ", "Soft waves / ends only", "柔和卷·只卷发尾"], "soft"],
          [["しっかり巻きたい", "Defined curls", "明显卷度"], "tight"]
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
          "選んだ軸は評価を約2.2倍にして最終順位を決めます。最終画面で軸を切り替えて見比べもできます。",
          "The criterion you choose is weighted about 2.2x in the final ranking. You can switch "
            + "criteria on the final screen to compare.",
          "您选择的维度在最终排名中权重约为2.2倍。在最终画面可切换维度进行对比。"
        ],
        o: [
          [["立ち上がりの速さ", "Heat-up speed", "升温速度"], "heat"],
          [["髪を傷めないケア性能", "Care performance that protects hair", "不伤发的护理性能"], "care"],
          [["軽さ・手首への負担", "Lightness / less wrist strain", "轻量·减轻手腕负担"], "light"],
          [["カールもできる", "Can also curl", "也能卷发"], "shape"],
          [["価格の安さ", "Low price", "价格便宜"], "price"]
        ]
      }
    ];
  let l = null;
  const O = () => l.mode === "dryer" ? de : he,
    U = e => O().filter(t => t.st === e && (!t.show || t.show())).sort((x, y) => ORD(x) - ORD(y)),
    N = e => {
      const t = O().filter(o => o.id === e)[0], s = l.a[e];
      return s == null || t.show && !t.show() ? null : t.o[s][1];
    },
    S = e => {
      const t = O().filter(o => o.id === e)[0], s = l.a[e];
      return s == null ? "—" : a(t.o[s][0]);
    },
    Z = () => Q.filter(e => e.mode === l.mode);
  function pe(e) {
    const t = [], s = [], o = [];
    let d = 0;
    const n = N("bud"), c = N("wt"), r = N("tr"), g = N("sh");
    return n != null
      && (
        e.price > n
          ? (
            d += Math.min(35, (e.price - n) / n * 90 + 8),
              s.push(
                p(["{0}は予算を超えます（減点）", "{0} is over budget (score reduced)", "{0}超出预算（已扣分）"], w(
                  e.price
                ))
              )
          )
          : o.push(p(["{0}で予算内", "{0} is within budget", "{0}在预算内"], w(e.price)))
      ),
      c != null
        && (
          e.g > c
            ? t.push([
              "wt",
              p(["{0}gは許容の重さを超えます", "{0} g exceeds your weight limit", "{0}g超出可接受的重量"], e.g)
            ])
            : o.push(p(["{0}gで許容内", "{0} g is within your limit", "{0}g在可接受范围内"], e.g))
        ),
      g === "curl"
        && e.shape === "straight"
        && (
          s.push(
            a([
              "ストレート専用機：本格的なカールは苦手（毛先の内巻き程度）",
              "Straight-only: not good at real curls (inward curling of the ends at best)",
              "直发专用机：不擅长做完整卷发（最多做发尾内卷）"
            ])
          ),
            d += 30
        ),
      g === "both"
        && e.shape === "straight"
        && (
          s.push(
            a([
              "ストレート専用機：カールは簡単な内巻き程度",
              "Straight-only: curls are limited to a simple inward curl",
              "直发专用机：卷发仅限简单的内卷"
            ])
          ),
            d += 14
        ),
      (g === "curl" || g === "both")
        && e.shape === "2way"
        && o.push(a(["1台でカールもストレートもできる", "Can curl and straighten with one unit", "一台即可卷发和直发"])),
      r === "must"
        && !e.os
        && (
          s.push(
            a([
              "海外電圧への対応が資料で確認できません（店頭で要確認）",
              "Overseas voltage support cannot be confirmed in the documentation (check in store)",
              "资料中无法确认是否支持海外电压（需在店内确认）"
            ])
          ),
            d += 25
        ),
      r && r !== "none" && e.os && o.push(a(["海外対応", "Overseas compatible", "支持海外电压"])),
      { ng: t, wn: s, ok: o, pen: d };
  }
  function me(e) {
    return e.mode === "dryer"
      ? {
        speed: T(D[e.r.speed] + (e.air ? (e.air - 2) * .5 : 0), 1, 5),
        care: D[e.r.care],
        light: T(5 - (e.g - 360) / 70, 1, 5),
        travel: e.os ? 5 : 2,
        price: e.price <= 1e4
          ? 5
          : e.price <= 2e4 ? 4 : e.price <= 35e3 ? 3 : e.price <= 42e3 ? 2 : 1.5
      }
      : {
        heat: T(5 - (e.hu - 18) / 9, 1, 5),
        care: D[e.r.care],
        light: T(5 - (e.g - 295) / 45, 1, 5),
        shape: e.shape === "2way" ? 5 : 2,
        price: e.price <= 5e3
          ? 5
          : e.price <= 13e3 ? 4 : e.price <= 16e3 ? 3.5 : e.price <= 23e3 ? 2.5 : 2
      };
  }
  function $() {
    const e = o => N(o), t = {};
    if (l.mode === "dryer") {
      const o = e("hl") || 0, d = e("vo") || 0, n = e("dm"), c = e("wr"), r = e("tr");
      t.speed = 1
        + o * .5
        + d * .6
        + (c === "time" ? 1.6 : 0)
        + (N("af") == null ? 0 : N("af") * .9),
        t.care = 1
          + (n === "high" ? 2 : n === "wavy" ? 1.3 : 0)
          + (c === "heat" ? 1.6 : 0)
          + (N("sn") === "ends" ? 1.4 : N("sn") === "scalp" ? .8 : 0),
        t.light = 1 + (c === "heavy" ? 2 : 0) + (o === 0 ? .3 : 0),
        t.travel = r === "must" ? 2.5 : r === "like" ? 1.6 : .4,
        t.price = 1.3;
    } else {
      const o = e("hl") || 0, d = e("dm"), n = e("fq"), c = e("rs"), r = e("sh");
      t.heat = 1 + (c === "rush" ? 2 : 0) + o * .3 + (n === "daily" ? .4 : 0),
        t.care = 1
          + (d === "high" ? 2 : d === "wavy" ? 1.2 : 0)
          + (n === "daily" ? 1 : n === "some" ? .4 : 0),
        t.light = 1 + (n === "occ" ? .8 : 0) + (o === 0 ? .3 : 0),
        t.shape = (r === "curl" ? 3 : r === "both" ? 2.2 : .6) + (N("cv") === "tight" ? 1.5 : 0),
        t.price = 1.3 + (n === "occ" ? .9 : 0);
    }
    const s = e("pri");
    return s && (t[s] *= 2.2), t;
  }
  function I() {
    const e = $();
    return Z().map(t => {
      const s = pe(t), o = me(t);
      let d = 0, n = 0;
      z().forEach(r => {
        d += e[r[0]] * o[r[0]] / 5, n += e[r[0]];
      });
      const c = 100 * d / n - s.pen - s.ng.length * 40;
      return { p: t, h: s, a: o, W: e, sc: T(Math.round(c), 1, 99), t: ie(t) };
    });
  }
  const M = e => e.filter(t => !t.h.ng.length), ue = e => e.slice().sort((t, s) => s.sc - t.sc);
  function ge(e, t) {
    const s = performance.now(), o = +e.textContent || 0;
    (function d(n) {
      const c = Math.min(1, (n - s) / 450);
      e.textContent = Math.round(o + (t - o) * c), c < 1 && requestAnimationFrame(d);
    })(s);
  }
  function fe() {
    const e = document.getElementById("dr-n");
    e && ge(e, M(I()).length);
  }
  function L(e, t) {
    t || l.hist.push(l.v), l.v = e, l.back = !!t, P(), f.scrollTo({ top: 0 });
  }
  function P() {
    const e = l.v;
    let t = "", s = 0;
    const o = F(),
      d = '<select class="tb-sel" data-a="lang" aria-label="Language"><option value="ja"'
        + (o === "ja" ? " selected" : "")
        + '>日本語</option><option value="en"'
        + (o === "en" ? " selected" : "")
        + '>English</option><option value="zh"'
        + (o === "zh" ? " selected" : "")
        + ">中文</option></select>",
      n = '<div class="fr-top"><button class="fr-x" data-a="close">'
        + a(["← 一覧へ", "← Back to list", "← 返回列表"])
        + "</button><b>"
        + p(["ノジマ式 {0}相談", "Nojima {0} Advisor", "Nojima {0}选购咨询"], _())
        + "</b>"
        + d
        + '<span class="fr-pill">'
        + p([
          '該当<i id="dr-n">{0}</i>/{1}機種',
          '<i id="dr-n">{0}</i>/{1} match',
          '符合<i id="dr-n">{0}</i>/{1}款'
        ], M(I()).length, Z().length)
        + '</span></div><div class="fr-prog"><div id="dr-pg"></div></div>';
    if (e === "intro")
      t = ye(), s = 4;
    else if (e === "r1")
      t = ve(), s = 38;
    else if (e === "r2")
      t = we(), s = 72;
    else if (e === "final")
      t = ke(), s = 100;
    else if (e === "staff")
      t = xe(), s = 100;
    else {
      const c = U(e.st)[e.i];
      t = be(c, e), s = { 1: 6 + e.i * 10, 2: 40 + e.i * 7, 3: 74, 9: 88 }[e.st];
    }
    f.className = "fr-root on" + (l.back ? " fr-back" : ""),
      f.innerHTML = n + '<div class="fr-wrap"><div class="fr-in">' + t + "</div></div>",
      requestAnimationFrame(() => {
        const c = document.getElementById("dr-pg");
        c && (c.style.width = s + "%");
      });
  }
  function ye() {
    const e = a(["〜", "–", "～"]),
      t = a(["／", " / ", "／"]),
      s = '<div class="dr-tabs"><button data-a="mode" data-m="dryer" class="'
        + (l.mode === "dryer" ? "on" : "")
        + '">'
        + a(["💨 ドライヤー", "💨 Hair dryer", "💨 吹风机"])
        + '</button><button data-a="mode" data-m="iron" class="'
        + (l.mode === "iron" ? "on" : "")
        + '">'
        + a(["🔥 ヘアアイロン", "🔥 Hair iron", "🔥 卷直发器"])
        + "</button></div>",
      o = B.filter(n => n.mode === l.mode),
      d = o.map((n, c) => {
        const r = Q.filter(u => u.type === n.id),
          g = r.map(u => u.price),
          b = r.map(u => u.g),
          x = l.mode === "dryer"
            ? ""
            : p(
              ["／立ち上がり{0}秒", " / heat-up {0} sec", "／升温{0}秒"],
              Math.min.apply(0, r.map(u => u.hu))
                + (r.length > 1 ? e + Math.max.apply(0, r.map(u => u.hu)) : "")
            );
        return '<div class="fr-card fr-up" style="--i:'
          + (c + 1)
          + '" data-a="type">'
          + ne(n, c * .3)
          + "<h3>"
          + A(n)
          + "</h3><small>"
          + a(n.sub)
          + "・"
          + r.length
          + a(["機種", " models", "款"])
          + '</small><div class="fr-more"><div><span>'
          + a(["向く方", "Best for", "适合人群"])
          + "</span>"
          + a(n.who)
          + "</div><div><span>"
          + a(["強み", "Strengths", "优点"])
          + "</span>"
          + a(n.pro)
          + "</div><div><span>"
          + a(["注意", "Watch out", "注意"])
          + "</span>"
          + a(n.con)
          + "</div><div><span>"
          + a(["目安", "Range", "参考"])
          + "</span>"
          + w(Math.min.apply(0, g))
          + (r.length > 1 ? e + w(Math.max.apply(0, g)) : "")
          + t
          + Math.min.apply(0, b)
          + (r.length > 1 ? e + Math.max.apply(0, b) : "")
          + "g"
          + x
          + '</div><div class="dr-models">📋 '
          + r.map(u => u.mfg + " " + E(u).replace(/\s*\(.*\)/, "")).join(a([" ／ ", " / ", " ／ "]))
          + "</div></div></div>";
      }).join("");
    return '<span class="fr-tag fr-up">'
      + a(["STEP 0 ・ まずは全体像", "STEP 0 · The big picture", "STEP 0 · 先看整体概况"])
      + "</span>"
      + s
      + '<h1 class="fr-h1 fr-up" style="--i:1">'
      + p([
        "{0}は、大きく<em>{1}つのタイプ</em>に分かれます",
        "{0}s fall into <em>{1} main types</em>",
        "{0}大致分为<em>{1}种类型</em>"
      ], _(), o.length)
      + '</h1><p class="fr-p fr-up" style="--i:2">'
      + a([
        "タップでタイプごとの違いと、店頭でご案内できる機種が見られます。",
        "Tap a card to see how the types differ and which models we can show you in store.",
        "点击卡片可查看各类型的差异以及店内可介绍的机型。"
      ])
      + '</p><div class="dr-flow fr-up" style="--i:2"><span><b>'
      + a(["前半", "Part 1", "前半"])
      + "</b>"
      + a(["絶対条件", "Must-haves", "硬性条件"])
      + "</span><span><b>"
      + a(["後半", "Part 2", "后半"])
      + "</b>"
      + a(["こだわり", "Preferences", "偏好"])
      + "</span><span><b>"
      + a(["最終", "Final", "最终"])
      + "</b>"
      + a(["譲れない1点", "Non-negotiable", "不可让步的一点"])
      + "</span><span><b>"
      + a(["提案", "Result", "推荐"])
      + "</b>"
      + a(["3機種", "3 models", "3款"])
      + '</span></div><div class="fr-types">'
      + d
      + '</div><button class="fr-btn" data-a="start">'
      + a(["診断をはじめる →", "Start the consultation →", "开始诊断 →"])
      + "</button>";
  }
  function be(e, t) {
    const s = U(t.st),
      o = a(
        {
          1: ["前半｜まず優先して聞きたいこと", "Part 1 | Top priorities first", "前半｜优先确认的事项"],
          2: ["後半｜重さ・髪質・使い方", "Part 2 | Weight, hair type and usage", "后半｜重量·发质·使用方式"],
          3: ["最終｜譲れない1点", "Final | Your one non-negotiable", "最终｜不可让步的一点"],
          9: ["最後｜ご予算", "Last | Your budget", "最后｜预算"]
        }[t.st]
      ),
      d = e.o.map(
        (n, c) => '<button class="fr-opt fr-up'
          + (l.a[e.id] === c ? " sel" : "")
          + '" style="--i:'
          + (c + 1)
          + '" data-a="pick" data-i="'
          + c
          + '"><span class="ck">'
          + (l.a[e.id] === c ? "✓" : "")
          + "</span>"
          + a(n[0])
          + "</button>"
      ).join("");
    return '<span class="fr-tag">'
      + o
      + '</span>'
      + TP()
      + '<div class="fr-q"><div class="no">Q'
      + (t.i + 1)
      + " / "
      + s.length
      + "</div><h2>"
      + a(e.t)
      + '</h2><div class="fr-hint">💡 '
      + a(e.h)
      + "</div>"
      + d
      + '</div><button class="fr-btn s" data-a="back">'
      + a(["← ひとつ戻る", "← Back", "← 返回上一步"])
      + "</button>";
  }
  function ve() {
    const e = I(), t = M(e), s = {};
    e.forEach(
      r => r.h.ng.forEach(g => {
        s[g[0]] = (s[g[0]] || 0) + 1;
      })
    );
    const o = B.filter(r => r.mode === l.mode).map((r, g) => {
      const b = e.filter(u => u.t === r), x = b.filter(u => !u.h.ng.length).length;
      return '<div class="fr-row fr-up" style="--i:'
        + g
        + '"><b style="width:9em">'
        + A(r)
        + '</b><div class="fr-bar'
        + (x ? "" : " g")
        + '"><i style="width:'
        + (b.length ? x / b.length * 100 : 0)
        + "%;--i:"
        + g
        + '"></i></div><span style="width:3.4em;text-align:right">'
        + x
        + "/"
        + b.length
        + "</span></div>";
    }).join(""),
      d = Object.keys(s).map(
        r => '<span class="fr-chip ng">'
          + p(["{0}で {1}機種が対象外", "{1} models out by {0}", "因{0}排除{1}款"], a(se[r]), s[r])
          + "</span>"
      ).join("")
        || '<span class="fr-chip ok">' + a(["対象外なし", "Nothing excluded", "无被排除机型"]) + "</span>",
      n = t.filter(r => r.h.wn.length).length,
      c = l.mode === "dryer"
        ? p([
          "予算 {0}／重さ {1}／海外 {2}",
          "Budget {0} / Weight {1} / Overseas {2}",
          "预算 {0}／重量 {1}／海外 {2}"
        ], S("bud"), S("wt"), S("tr"))
        : p([
          "予算 {0}／スタイル {1}／海外 {2}",
          "Budget {0} / Style {1} / Overseas {2}",
          "预算 {0}／造型 {1}／海外 {2}"
        ], S("bud"), S("sh"), S("tr"));
    return '<span class="fr-tag">'
      + a(["前半の結果", "Part 1 result", "前半结果"])
      + '</span><h1 class="fr-h1">'
      + p([
        "絶対条件で、<em>{0}機種</em>に絞り込みました",
        "Your must-haves narrowed it to <em>{0} models</em>",
        "根据硬性条件，已筛选出<em>{0}款</em>"
      ], t.length)
      + '</h1><p class="fr-p">'
      + c
      + '</p><div class="fr-box"><h3>'
      + a(["タイプ別に残った機種数", "Models remaining by type", "各类型剩余机型数"])
      + "</h3>"
      + o
      + '</div><div class="fr-box"><h3>'
      + a(["外れた理由", "Why models were excluded", "被排除的原因"])
      + "</h3>"
      + d
      + (
        n
          ? '<p class="fr-p" style="margin:8px 0 0">'
            + p([
              "残った機種のうち {0} 機種に注意点（減点）があります。最終画面に明記します。",
              "{0} of the remaining models have caution points (penalties). These are noted on the final screen.",
              "剩余机型中有{0}款存在注意事项（扣分）。将在最终画面中标明。"
            ], n)
            + "</p>"
          : ""
      )
      + "</div>"
      + (
        t.length < 3
          ? '<div class="fr-win">'
            + a([
              "⚠️ 条件にぴったり合う機種が3つ未満です。最終提案では「条件外」の近い機種も参考に表示します（赤字で明記）。条件を見直すと選択肢が広がる場合があります。",
              "⚠️ Fewer than 3 models match your conditions exactly. The final proposal also shows close "
                + "“out-of-spec” models for reference (marked in red). Revisiting your conditions may widen "
                + "your options.",
              "⚠️ 完全符合条件的机型不足3款。最终推荐中也会参考性地显示接近的“条件外”机型（以红字标明）。重新考虑条件可能会增加选择。"
            ])
            + "</div>"
          : ""
      )
      + '<button class="fr-btn" data-a="next">'
      + a(["後半の質問へ →", "To Part 2 →", "前往后半部分 →"])
      + '</button><button class="fr-btn s" data-a="back">'
      + a(["← 前半をやり直す", "← Redo Part 1", "← 重做前半部分"])
      + "</button>";
  }
  function we() {
    const e = I(),
      t = M(e),
      s = z(),
      o = $(),
      d = Math.max.apply(0, s.map(h => o[h[0]])),
      n = B.filter(h => h.mode === l.mode).map(h => {
        const y = t.filter(v => v.t === h);
        return {
          t: h,
          n: y.length,
          v: s.map(v => y.length ? y.reduce((i, H) => i + H.a[v[0]], 0) / y.length : 0)
        };
      }),
      c = F() === "en",
      r = h => c ? k(h).split(" ")[0] : k(h).slice(0, 4);
    let g = '<div class="fr-heat" style="grid-template-columns:6.4em repeat(5,1fr)"><div class="hd"></div>'
      + s.map(h => '<div class="hd">' + h[2] + "<br>" + r(h) + "</div>").join("");
    n.forEach((h, y) => {
      g += '<div class="rn">'
        + (c ? A(h.t) : A(h.t).slice(0, 9))
        + '<br><small style="color:#94a3b8">'
        + h.n
        + a(["機種", " models", "款"])
        + "</small></div>"
        + h.v.map(
          (v, i) => '<div style="--a:'
            + (v ? (v / 5 * .85).toFixed(2) : 0)
            + ";--i:"
            + (y * 5 + i)
            + ";color:"
            + (v > 3.2 ? "#fff" : "#334155")
            + '">'
            + (v ? v.toFixed(1) : "—")
            + "</div>"
        ).join("");
    }),
      g += "</div>";
    const b = s.map(
      (h, y) => '<div class="fr-row fr-up" style="--i:'
        + y
        + '"><b style="width:7.4em">'
        + h[2]
        + " "
        + k(h)
        + '</b><div class="fr-bar"><i style="width:'
        + o[h[0]] / d * 100
        + "%;--i:"
        + y
        + '"></i></div></div>'
    ).join(""),
      x = s.map(
        (h, y) => '<div class="fr-row fr-up" style="--i:'
          + y
          + ';align-items:flex-start"><b style="width:7.4em">'
          + h[2]
          + " "
          + k(h)
          + '</b><span style="flex:1;color:#475569">'
          + X(h)
          + "</span></div>"
      ).join(""),
      u = n.filter(h => h.n).map(
        h => '<div style="margin-bottom:8px;font-size:.86rem;line-height:1.6"><b>'
          + A(h.t)
          + "</b>"
          + a(["：", ": ", "："])
          + a(h.t.pro)
          + a(["。", ". ", "。"])
          + '<span style="color:#b45309">'
          + a(h.t.con)
          + "</span></div>"
      ).join("");
    return '<span class="fr-tag">'
      + a(["後半の結果", "Part 2 result", "后半结果"])
      + '</span><h1 class="fr-h1">'
      + a(["お客様の<em>重みづけ</em>が決まりました", "Your <em>weighting</em> is set", "您的<em>权重设置</em>已确定"])
      + '</h1><p class="fr-p">'
      + a([
        "髪質・お悩みから、5つの評価軸の重要度を自動で決めました（長いほど重視）。このあと最後の1点で、さらに優先軸を決めます。",
        "Based on your hair type and concerns, we set the importance of the 5 criteria automatically "
          + "(longer bar = more weight). Next, your final pick sets the top priority.",
        "根据您的发质和困扰，已自动确定5个评价维度的重要度（条越长越重视）。接下来通过最后一个问题进一步确定优先维度。"
      ])
      + '</p><div class="fr-box"><h3>'
      + a(["あなたの重みづけ", "Your weighting", "您的权重设置"])
      + "</h3>"
      + b
      + '</div><div class="fr-box"><h3>'
      + a([
        "タイプ × 評価軸（平均点・5点満点）",
        "Type × criteria (average score, out of 5)",
        "类型 × 评价维度（平均分·满分5分）"
      ])
      + '</h3><div style="overflow-x:auto">'
      + g
      + '</div></div><div class="fr-box"><h3>'
      + a(["タイプごとの特徴", "Traits of each type", "各类型的特点"])
      + "</h3>"
      + u
      + '</div><div class="fr-box"><h3>'
      + a(["評価軸の見方", "How to read the criteria", "评价维度说明"])
      + "</h3>"
      + x
      + '</div><button class="fr-btn" data-a="next">'
      + a(["最後の質問へ →", "To the last question →", "前往最后一个问题 →"])
      + '</button><button class="fr-btn s" data-a="back">'
      + a(["← 後半をやり直す", "← Redo Part 2", "← 重做后半部分"])
      + "</button>";
  }
  const K = (e, t) => t.slice().sort((s, o) => o.a[e] - s.a[e] || o.sc - s.sc)[0];
  function ee() {
    const e = ue(I()), t = e.filter(s => !s.h.ng.length).slice(0, 3);
    for (let s = 0; t.length < 3 && s < e.length; s++)
      t.indexOf(e[s]) < 0 && t.push(e[s]);
    return { all: e, top: t };
  }
  function ke() {
    const e = ee(),
      t = e.top,
      s = z(),
      o = l.ax || N("pri") || s[0][0],
      d = s.filter(i => i[0] === o)[0],
      n = K(o, t),
      c = K(o, M(e.all)),
      r = t[0].W,
      g = s.slice().sort((i, H) => r[H[0]] - r[i[0]]).slice(0, 2),
      b = s.map(
        i => '<button data-a="ax" data-k="'
          + i[0]
          + '" class="'
          + (i[0] === o ? "on" : "")
          + '">'
          + i[2]
          + " "
          + k(i)
          + "</button>"
      ).join(""),
      x = '<div class="fr-win"><b>'
        + p([
          "{0} 「{1}」を譲れないなら →{2}",
          "{0} If “{1}” is non-negotiable → {2}",
          "{0} 若“{1}”不可让步 → {2}"
        ], d[2], k(d), E(n.p))
        + "</b>"
        + a(["（", " (", "（"])
        + n.p.mfg
        + " / "
        + w(n.p.price)
        + a(["）", ")", "）"])
        + "<br>"
        + X(d)
        + a(["。", ". ", "。"])
        + (
          c && c !== n && c.a[o] > n.a[o]
            ? "<br>"
              + p([
                "さらに「{0}」に特化するなら <b>{1}</b>（{2}）も候補です。",
                "For an even stronger “{0}”, <b>{1}</b> ({2}) is also a candidate.",
                "若要更突出“{0}”，<b>{1}</b>（{2}）也是候选。"
              ], k(d), E(c.p), w(c.p.price))
            : a([
              "この3機種の中ではここが最も強い項目です。",
              "This is the strongest criterion among these 3 models.",
              "这是这3款中最强的项目。"
            ])
        )
        + "</div>",
      u = t.map((i, H) => {
        const j = i.p,
          Se = s.filter(m => K(m[0], t) === i && i.a[m[0]] >= 3.5).map(
            m => '<span class="fr-chip ok">'
              + m[2]
              + p(["{0}が3機種で最強", "Best of the 3 for {0}", "{0}为3款中最强"], k(m))
              + "</span>"
          ).join(""),
          te = g.filter(m => i.a[m[0]] >= 3.5).map(m => k(m)).join(a(["・", ", ", "·"])),
          Ae = s.map(
            (m, Ne) => '<div class="fr-row" style="margin-bottom:5px"><b style="width:7.4em;'
              + (m[0] === o ? "color:#d97706" : "")
              + '">'
              + m[2]
              + " "
              + k(m)
              + '</b><div class="fr-bar"><i style="width:'
              + i.a[m[0]] / 5 * 100
              + "%;--i:"
              + Ne
              + (m[0] === o ? ";background:linear-gradient(90deg,#f59e0b,#ef4444)" : "")
              + '"></i></div></div>'
          ).join(""),
          Ee = i.h.ng.map(
            m => '<li class="n">' + p(["条件外：{0}", "Out of spec: {0}", "条件外：{0}"], m[1]) + "</li>"
          ).concat(i.h.wn.map(m => '<li class="w">' + m + "</li>")).concat(
            i.h.ok.slice(0, 3).map(m => "<li>" + m + "</li>")
          ).join("");
        return '<div class="fr-rec fr-up'
          + (i === n ? " hi" : " dim")
          + '" style="--i:'
          + H
          + '"><span class="fr-rank">'
          + p(["第{0}位", "#{0}", "第{0}名"], H + 1)
          + " ・ "
          + A(i.t)
          + '</span><div class="fr-head"><div class="fr-ring"><svg width="62" height="62" viewBox="0 0 '
          + '62 62"><circle class="bg" cx="31" cy="31" r="26"/><circle class="fg" cx="31" cy="31" r="26" '
          + 'stroke-dasharray="'
          + (i.sc * 1.634).toFixed(0)
          + ' 164"/></svg><b>'
          + i.sc
          + '</b></div><div><div class="fr-name">'
          + E(j)
          + '</div><div style="font-size:.8rem;color:#64748b">'
          + j.mfg
          + "・"
          + j.g
          + 'g</div><div class="fr-price">'
          + w(j.price)
          + '</div></div></div><p class="fr-p" style="margin-bottom:6px">'
          + W(j)
          + "</p>"
          + (
            te
              ? '<div class="dr-why">🎯 '
                + p([
                  "あなたが重視する「{0}」に強いモデルです",
                  "A model that is strong in what you value: {0}",
                  "在您重视的“{0}”方面表现出色的机型"
                ], te)
                + "</div>"
              : ""
          )
          + Se
          + '<ul class="fr-ul">'
          + Ee
          + "</ul>"
          + Ae
          + "</div>";
      }).join(""),
      h = l.mode === "dryer"
        ? [
          [["価格", "Price", "价格"], i => w(i.price)],
          [["メーカー", "Maker", "厂商"], i => i.mfg],
          [
            ["風量", "Airflow", "风量"],
            i => i.air
              ? p(["{0}m³/分", "{0} m³/min", "{0}m³/分"], i.air)
              : a(["センシング制御", "Sensing control", "感应控制"])
          ],
          [["重さ", "Weight", "重量"], i => i.g + "g"],
          [
            ["海外対応", "Overseas support", "海外电压支持"],
            i => i.os ? a(["対応", "Supported", "支持"]) : a(["要確認", "Needs checking", "需确认"])
          ],
          [["特徴", "Features", "特点"], i => W(i)]
        ]
        : [
          [["価格", "Price", "价格"], i => w(i.price)],
          [["メーカー", "Maker", "厂商"], i => i.mfg],
          [["立ち上がり", "Heat-up time", "升温时间"], i => p(["{0}秒", "{0} sec", "{0}秒"], i.hu)],
          [["重さ", "Weight", "重量"], i => i.g + "g"],
          [
            ["形状", "Shape", "形状"],
            i => i.shape === "2way" ? "2WAY" : a(["ストレート", "Straight", "直发"])
          ],
          [["特徴", "Features", "特点"], i => W(i)]
        ],
      y = '<table class="fr-spec"><tr><td></td>'
        + t.map(i => "<td><b>" + E(i.p).replace(/\s*\(.*\)/, "") + "</b></td>").join("")
        + "</tr>"
        + h.map(
          i => "<tr><td>"
            + a(i[0])
            + "</td>"
            + t.map(H => "<td>" + i[1](H.p) + "</td>").join("")
            + "</tr>"
        ).join("")
        + "</table>",
      v = oe.map(
        i => '<div style="font-size:.86rem;margin-bottom:6px"><b>'
          + a(i[0])
          + "</b>"
          + a(["（", " (", "（"])
          + i[1]
          + a(["）", ")", "）"])
          + '<br><span style="color:#64748b">'
          + a(i[2])
          + "</span></div>"
      ).join("");
    return '<span class="fr-tag">'
      + a(["最終結果", "Final result", "最终结果"])
      + '</span><h1 class="fr-h1">'
      + a(["あなたへのおすすめ<em>3機種</em>", "Your recommended <em>3 models</em>", "为您推荐的<em>3款</em>"])
      + '</h1><p class="fr-p">'
      + a([
        "「譲れないポイント」を切り替えると、3機種のどれが最も強いかが変わります。",
        "Switch your non-negotiable point to see which of the 3 is strongest.",
        "切换“不可让步的点”，可查看3款中哪款最强。"
      ])
      + '</p><div class="fr-ax">'
      + b
      + "</div>"
      + x
      + u
      + '<div class="fr-box"><h3>'
      + a(["3機種の比較表", "Comparison of the 3 models", "3款对比表"])
      + '</h3><div style="overflow-x:auto">'
      + y
      + '</div></div><div class="fr-box"><h3>'
      + a(["あわせて検討したい用品", "Accessories worth considering", "建议一并考虑的配件"])
      + "</h3>"
      + v
      + '</div>'
      + PATH()
      + '<button class="fr-btn k" data-a="staff">'
      + a([
        "📸 スタッフに見せる（最終商談シート）",
        "📸 Show to staff (final consultation sheet)",
        "📸 出示给店员（最终洽谈单）"
      ])
      + '</button><button class="fr-btn s" data-a="back">'
      + a(["← 質問に戻る", "← Back to questions", "← 返回问题"])
      + '</button><button class="fr-btn s" data-a="restart">'
      + a(["最初からやり直す", "Start over", "重新开始"])
      + '</button><button class="fr-btn s" data-a="close">'
      + a(["一覧に戻る", "Back to list", "返回列表"])
      + "</button>";
  }
  function PATH() {
    const e = ee().top[0], qs = O().filter(n => (!n.show || n.show()) && l.a[n.id] != null);
    let cnt = 0;
    const rows = qs.map((n, o) => {
      const cur = l.a[n.id];
      let d = 0;
      const alt = n.o.map((m, g) => ({ l: a(m[0]), v: g })).filter(m => m.v !== cur).map(m => {
        const old = l.a[n.id];
        l.a[n.id] = m.v;
        const g = ee().top[0];
        l.a[n.id] = old;
        const c = g.p !== e.p;
        return c && (d++, cnt++),
          '<span style="display:inline-block;margin:3px 4px 0 0;padding:4px 8px;border-radius:8px;'
            + 'font-size:.76rem;line-height:1.45;'
            + (
              c
                ? "background:#fffbeb;border:1px dashed #f59e0b"
                : "background:#f8fafc;border:1px dashed #cbd5e1;color:#64748b"
            )
            + '">'
            + m.l
            + "<br><b>"
            + (
              c
                ? a(["→ 1位は ", "→ #1 would be ", "→ 第1名将是 "]) + E(g.p)
                : a(["→ 1位は変わらず", "→ #1 unchanged", "→ 第1名不变"])
            )
            + "</b></span>";
      }).join("");
      return '<div style="position:relative;margin:0 0 12px 12px;padding:0 0 0 16px;border-left:3px solid '
        + '#93c5fd"><span style="position:absolute;left:-10px;top:1px;width:17px;height:17px;'
        + 'border-radius:50%;background:#2563eb;color:#fff;font-size:.64rem;text-align:center;'
        + 'line-height:17px">'
        + (o + 1)
        + '</span><div style="font-size:.78rem;color:#64748b">'
        + a(n.t).replace(/[？?]$/, "")
        + '</div><div style="display:inline-block;margin:3px 0;padding:5px 10px;border-radius:8px;'
        + 'background:#dbeafe;border:1.5px solid #2563eb;font-weight:700;font-size:.86rem">✓ '
        + S(n.id)
        + "</div>"
        + (
          alt
            ? "<details"
              + (d ? " open" : "")
              + '><summary style="font-size:.78rem;color:'
              + (d ? "#b45309" : "#64748b")
              + ';cursor:pointer">'
              + p([
                "もし別の選択をしていたら（1位が変わる選択肢：{0}件）",
                "If you had chosen differently (options that change #1: {0})",
                "若选了其他选项（会改变第1名的选项：{0}个）"
              ], d)
              + "</summary>"
              + alt
              + "</details>"
            : ""
        )
        + "</div>";
    }).join("");
    return '<div class="fr-box"><h3>🧭 '
      + a(["あなたの選択の経路図", "Your path through the questions", "您的选择路径图"])
      + '</h3><p class="fr-p" style="font-size:.82rem">'
      + p([
        "青が選んだ回答です。点線の薄い枠は「ここで別の選択をしていたら」の場合の1位で、<b>黄色は1位の機種が変わる分岐点</b>です（現在の1位：{0}／分岐点 {1}か所の選択肢）。",
        "Blue is what you chose. Dashed boxes show the top pick if you had chosen differently; "
          + "<b>yellow marks choices that would change #1</b> (current #1: {0} / {1} such choices).",
        "蓝色为您的选择。虚线框为“若选了其他选项”时的第1名；<b>黄色表示会改变第1名的分岐点</b>（当前第1名：{0}／共{1}个）。"
      ], E(e.p), cnt)
      + "</p>"
      + rows
      + '<div style="margin-left:12px;padding:6px 10px;border-radius:8px;background:#dcfce7;'
      + 'border:1.5px solid #16a34a;font-weight:700;font-size:.88rem">🏁 '
      + E(e.p)
      + "（"
      + e.p.mfg
      + "）</div></div>";
  }
  function TP() {
    const all = M(I()),
      any = Object.keys(l.a).length > 0,
      ty = B.filter(r => r.mode === l.mode),
      sc = ty.map(r => Math.max(0, ...all.filter(u => u.t === r).map(u => u.sc))),
      best = Math.max(...sc),
      cards = ty.map((r, g) => {
        const lead = any && sc[g] === best && best > 0;
        return '<div style="flex:1;min-width:0;text-align:center;padding:6px 3px 5px;border-radius:10px;border:2px solid '
          + (lead ? "#2563eb" : "#e2e8f0")
          + ";background:"
          + (lead ? "#eff6ff" : "#fff")
          + ";opacity:"
          + (sc[g] > 0 ? 1 : .4)
          + '"><div style="height:46px;overflow:hidden"><div style="transform:scale(.72);transform-origin:top center">'
          + ne(r, g * .3)
          + '</div></div><div style="font-size:.64rem;font-weight:700;line-height:1.3;margin-top:2px">'
          + A(r)
          + '</div><div style="font-size:.62rem;color:'
          + (lead ? "#2563eb" : "#64748b")
          + '">'
          + (lead ? "👑 " : "")
          + (any && sc[g] > 0 ? p(["適合度{0}", "match {0}", "匹配度{0}"], sc[g]) : "—")
          + "</div></div>";
      }).join("");
    return '<div class="fr-box" style="padding:8px"><div style="font-size:.74rem;color:#475569;margin-bottom:6px">🧭 '
      + a(
        any
          ? [
            "ここまでの回答だと、一番近いのは王冠のタイプ",
            "Based on your answers so far, the crowned type fits best",
            "按目前回答，最接近的是皇冠标记的类型"
          ]
          : [
            "回答するたびに、どのタイプに近いかここに表示されます",
            "This shows which type you are closest to as you answer",
            "每次回答后，这里会显示最接近的类型"
          ]
      )
      + '</div><div style="display:flex;gap:6px">'
      + cards
      + "</div></div>";
  }
  const ORD = i => {
    const n = ["dm", "tr", "af", "sh", "wt"].indexOf(i.id);
    return n < 0 ? 99 : n;
  };
  function xe() {
    const e = ee(),
      t = l.a.pri != null,
      s = O().map(
        d => l.a[d.id] == null
          ? ""
          : "<tr><td>" + a(d.t).replace(/[？?]$/, "") + "</td><td>" + S(d.id) + "</td></tr>"
      ).join(""),
      o = t
        ? e.top.map(
          (d, n) => '<div style="margin-bottom:6px;font-size:.88rem"><b>'
            + p(["第{0}位", "#{0}", "第{0}名"], n + 1)
            + " "
            + E(d.p)
            + "</b>（"
            + d.p.mfg
            + "）"
            + w(d.p.price)
            + "<br>"
            + p(["{0}g ／ 適合度{1}", "{0} g / match {1}", "{0}g ／ 匹配度{1}"], d.p.g, d.sc)
            + (d.h.wn.length ? '<br><span style="color:#b45309">⚠ ' + d.h.wn[0] + "</span>" : "")
            + "</div>"
        ).join("")
        : "";
    return '<div class="fr-ss"><div style="display:flex;justify-content:space-between;border-bottom:2px '
      + 'solid #111827;padding-bottom:6px;margin-bottom:8px"><b style="background:#111827;'
      + 'color:#fbbf24;padding:2px 8px;border-radius:4px;font-size:.86rem">'
      + p(["スタッフ確認用シート（{0}）", "Staff confirmation sheet ({0})", "店员确认单（{0}）"], _())
      + '</b><span style="font-size:.8rem;color:#6b7280">'
      + a(
        t ? ["最終商談カード", "Final consultation card", "最终洽谈卡"] : ["条件メモ", "Requirements memo", "条件备忘"]
      )
      + '</span></div><p style="font-size:.8rem;color:#d90429;font-weight:700;margin-bottom:6px">'
      + a([
        "※この画面をスクリーンショットしてスタッフにお見せください",
        "Please screenshot this screen and show it to our staff",
        "※请截屏并出示给店员"
      ])
      + "</p><table>"
      + s
      + "</table>"
      + (
        o
          ? '<b style="font-size:.88rem">'
            + a(["【最終提案TOP3】", "[Final TOP 3 proposal]", "【最终推荐TOP3】"])
            + "</b>"
            + o
          : ""
      )
      + '</div><button class="fr-btn s" data-a="back">'
      + a(["← 戻る", "← Back", "← 返回"])
      + "</button>";
  }
  function He(e) {
    if (l.lock)
      return;
    l.lock = 1;
    const t = U(l.v.st)[l.v.i];
    l.a[t.id] = e,
      fe(),
      f.querySelectorAll(".fr-opt").forEach((s, o) => {
        s.classList.toggle("sel", o === e), s.firstChild.textContent = o === e ? "✓" : "";
      }),
      setTimeout(() => {
        const s = U(l.v.st);
        l.lock = 0,
          L(
            l.v.i + 1 < s.length
              ? { st: l.v.st, i: l.v.i + 1 }
              : l.v.st === 1 ? "r1" : l.v.st === 2 ? "r2" : l.v.st === 3 ? { st: 9, i: 0 } : "final"
          );
      }, 320);
  }
  function R(e) {
    l = { mode: e || "dryer", a: {}, v: "intro", hist: [], ax: null },
      P(),
      document.documentElement.style.overflow = "hidden";
    try {
      history.pushState({ dr: 1 }, "");
    } catch {}
  }
  function C(e) {
    if (f.classList.remove("on"), document.documentElement.style.overflow = "", !e)
      try {
        history.state && history.state.dr && history.back();
      } catch {}
  }
  f.addEventListener("click", e => {
    const t = e.target.closest("[data-a]");
    if (!t || t.tagName === "SELECT")
      return;
    const s = t.dataset.a;
    if (s === "close")
      C();
    else if (s === "start")
      L({ st: 1, i: 0 });
    else if (s === "mode")
      l = { mode: t.dataset.m, a: {}, v: "intro", hist: [], ax: null }, P();
    else if (s === "type")
      f.querySelectorAll(".fr-card").forEach(
        o => o.classList.toggle("sel", o === t && !t.classList.contains("sel"))
      );
    else if (s === "pick")
      He(+t.dataset.i);
    else if (s === "next")
      L(l.v === "r1" ? { st: 2, i: 0 } : { st: 3, i: 0 });
    else if (s === "back") {
      const o = l.hist.pop();
      o != null ? L(o, !0) : C();
    } else if (s === "staff")
      L("staff");
    else if (s === "ax") {
      l.ax = t.dataset.k;
      const o = f.scrollTop;
      l.back = !1, P(), f.scrollTop = o;
    } else
      s === "restart" && R(l.mode);
  }),
    f.addEventListener("change", e => {
      if (e.target.dataset.a !== "lang")
        return;
      const t = document.getElementById("lang-switcher");
      t && (t.value = e.target.value, t.dispatchEvent(new Event("change")));
      const s = f.scrollTop;
      l.back = !1, P(), f.scrollTop = s;
    }),
    window.addEventListener("popstate", () => {
      f.classList.contains("on") && C(!0);
    }),
    window.DryerApp = { open: R, close: C };
  const Y = document.getElementById("modal-link-btn");
  Y
    && Y.addEventListener("click", e => {
      const t = Y.dataset.app;
      t !== "dryer" && t !== "iron"
        || (e.preventDefault(), document.getElementById("modal").classList.remove("active"), R(t));
    });
  try { window.NJ_HEAR && window.NJ_HEAR.hook([de, he], {"schema": "std", "root": "dr-app", "lock": ["pri"]}); } catch (e) { console.error(e); }
})();
</script>
<style id="app-motion-css">
/* =====================================================================
   PC相談：スマホ・iPad向けの調整 ＋ Apple風の動き
   ===================================================================== */
#dr-app{--ap:cubic-bezier(.32,.72,0,1);--aps:cubic-bezier(.25,1,.5,1)}

/* ---- 画面の出し入れ（iOSのシート／プッシュ） ---- */
#dr-app{transition:opacity .4s var(--ap),transform .6s var(--ap),visibility 0s .6s}
#dr-app.on{transition:opacity .4s var(--ap),transform .6s var(--ap)}
#dr-app .fr-in{animation:apPush .55s var(--ap) both}
#dr-app.fr-back .fr-in{animation-name:apPop}
@keyframes apPush{from{opacity:0;transform:translate3d(32px,0,0)}}
@keyframes apPop{from{opacity:0;transform:translate3d(-32px,0,0)}}
#dr-app .fr-up{animation:apRise .7s var(--ap) both;animation-delay:calc(var(--i,0)*45ms)}
#dr-app .fr-card.sel .fr-more{animation:apRise .5s var(--ap) both}
@keyframes apRise{from{opacity:0;transform:translate3d(0,14px,0) scale(.985);filter:blur(4px)}}

/* ---- 半透明のナビゲーションバー（スクロールすると細い境界線） ---- */
#dr-app .fr-top{background:rgba(255,255,255,.72);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);box-shadow:none;border-bottom:.5px solid transparent;transition:border-color .3s,background .3s}
#dr-app.scrolled .fr-top{border-bottom-color:rgba(15,23,42,.14);background:rgba(255,255,255,.82)}
#dr-app .fr-prog div{transition:width .8s var(--ap)}

/* ---- 押したときの沈み込み・選んだときの反応 ---- */
#dr-app .fr-opt,#dr-app .fr-card,#dr-app .fr-btn,#dr-app .fr-x,#dr-app .iv-entry,#dr-app .ht-heart{transition:transform .5s var(--ap),background-color .25s,border-color .25s,box-shadow .35s var(--ap)}
#dr-app .fr-opt:active,#dr-app .fr-card:active,#dr-app .fr-btn:active,#dr-app .fr-x:active,#dr-app .iv-entry:active{transform:scale(.97);transition-duration:.12s}
#dr-app .fr-opt.sel{animation:apSel .5s var(--ap)}
@keyframes apSel{0%{transform:scale(.97)}}
#dr-app .fr-opt .ck{transition:transform .45s var(--aps),background .2s,border-color .2s}
#dr-app .fr-opt.sel .ck{transform:scale(1.08)}
@media (hover:hover){#dr-app .fr-card:hover{transform:translateY(-2px);box-shadow:0 12px 28px #2563eb1f}}
@media (hover:none){#dr-app .fr-card:hover{transform:none;box-shadow:0 2px 8px #0f172a0d}}

/* ---- ヒアリング（イラストなし） ---- */
#dr-app .pc-qi{display:none!important}
#dr-app .fr-q{padding:20px 18px 18px;border:1px solid #e8edf5;box-shadow:0 10px 30px #0f172a12}
#dr-app .fr-q .no{display:inline-flex;align-items:center;gap:8px;font-size:.78rem;padding:5px 11px;border-radius:999px;background:linear-gradient(135deg,#eff6ff,#f5f3ff);color:#4338ca;letter-spacing:.08em}
#dr-app .fr-q h2{font-size:clamp(1.2rem,4.8vw,1.55rem);line-height:1.45;margin:12px 0 10px;word-break:auto-phrase;text-wrap:pretty;letter-spacing:.01em}
#dr-app .fr-hint{word-break:auto-phrase;border-left:0;border-radius:12px;background:#f1f5ff;padding:10px 12px}
#dr-app .fr-opt{border-radius:14px;word-break:auto-phrase}

/* ---- 「いまの見立て」：タイプとメーカーの並びをそろえる ---- */
#dr-app .pc-xe{grid-template-columns:repeat(7,minmax(0,1fr));gap:6px}
#dr-app .pc-xe>div,#dr-app .pc-xm>div{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-width:0;padding:7px 3px 6px!important;border-radius:12px!important;transition:background .3s,border-color .3s,opacity .3s}
#dr-app .pc-xe>div>div:last-child,#dr-app .pc-xm>div>div:last-child{font-size:.62rem!important;line-height:1.35!important;margin-top:4px!important;max-width:100%;text-align:center;word-break:auto-phrase}
#dr-app .pc-xe .pc-mini{height:30px;display:flex;align-items:center}
#dr-app .pc-xm{display:flex;flex-wrap:wrap;justify-content:center;gap:6px}
#dr-app .pc-xm>div{flex:1 1 0;min-width:62px;max-width:112px}
#dr-app .pc-mk{width:100%;max-width:56px;height:auto}
@media (max-width:600px){#dr-app .pc-xe{grid-template-columns:repeat(4,minmax(0,1fr))}}

/* ---- 結果画面「いま合うメーカー」：アイコンの列と文字の頭をそろえる ---- */
#dr-app .pc-mkrow{display:grid;grid-template-columns:64px minmax(0,1fr);column-gap:14px;align-items:center;padding:12px 2px;border-top:1px solid #eef2f7;text-align:left}
#dr-app .fr-box h3+.pc-mkrow,#dr-app .pc-mkrow:first-of-type{border-top:0;padding-top:4px}
#dr-app .pc-mkrow .pc-mk{margin:0;width:64px;max-width:64px;justify-self:center}
#dr-app .pc-mkrow>div{font-size:.86rem!important;line-height:1.6!important;min-width:0;word-break:auto-phrase}
#dr-app .pc-mkrow>div b:first-child{font-size:.95rem}
#dr-app .pc-mkrow>div span{display:block;margin-top:2px;font-size:.8rem}
@media (min-width:700px){#dr-app .pc-mkrow{grid-template-columns:72px minmax(0,1fr);padding:14px 6px}}

/* ---- 最初の画面：タイプのカード（7つ目が1枚だけ浮かないように） ---- */
#dr-app .fr-types{align-items:stretch}
#dr-app .fr-types>.fr-card{display:flex;flex-direction:column}
#dr-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel){grid-column:1/-1;display:grid;grid-template-columns:auto 1fr;column-gap:16px;align-items:center}
#dr-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>.pc-svg{grid-row:1/span 2;margin:0}
#dr-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>h3{align-self:end;margin:0 0 2px}
#dr-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>small{align-self:start}

/* ---- スマホ：上のバーを2段に（1段目：戻る・言語・該当数／2段目：タイトル・在庫管理） ---- */
@media (max-width:600px){
  #dr-app .fr-top{flex-wrap:wrap;row-gap:6px}
  #dr-app .fr-top>b{order:5;flex:1 1 auto;min-width:0;font-size:.95rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  #dr-app .fr-top .iv-entry{order:6}
  #dr-app .fr-q{padding:18px 14px 14px;border-radius:18px}
  #dr-app .fr-wrap{padding-left:12px;padding-right:12px}
}
/* ---- iPad・PC：中央に寄せ、選択肢は2列 ---- */
@media (min-width:700px){
  #dr-app .fr-wrap{max-width:900px;margin:0 auto}
  #dr-app .fr-q{display:grid;grid-template-columns:1fr 1fr;column-gap:12px;align-items:stretch;padding:26px 26px 22px;border-radius:24px}
  #dr-app .fr-q>*{grid-column:1/-1}
  #dr-app .fr-q>.fr-opt{grid-column:auto;margin:0 0 12px;height:calc(100% - 12px)}
  #dr-app .fr-q .no{justify-self:start}
  #dr-app .fr-types{grid-template-columns:1fr 1fr}
}
@media (prefers-reduced-motion:reduce){#dr-app *,#dr-app{animation-duration:.01ms!important;transition-duration:.01ms!important}}

#dr-app [class$="-qi"],#dr-app .tb-qi{display:none!important}
</style>
<script id="app-motion-js">
/* PC相談：スクロールでナビゲーションバーに境界線（Apple風）／iOSで押した感触を出す */
(function () {
  var r = document.getElementById("dr-app");
  if (!r) return;
  var on = false;
  r.addEventListener("scroll", function () {
    var s = r.scrollTop > 4;
    if (s !== on || !r.classList.contains("scrolled") === s) { on = s; r.classList.toggle("scrolled", s); }
  }, { passive: true });
  document.addEventListener("touchstart", function () {}, { passive: true });   // iOSで :active を効かせる
})();
</script>
<script>window.NJ_INV && window.NJ_INV.injectLinks && window.NJ_INV.injectLinks("dr-app");</script>
</body>
</html>
