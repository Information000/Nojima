<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes, viewport-fit=cover">
<title>パソコンの相談 | イオンモール成田店</title>
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
<body data-lang="ja" data-dept="info" data-product="pc">
<!-- ======================================================================
     ▼▼▼ 在庫データ（パソコン）▼▼▼
     ・1商品 = items の中の { } ひとつ。型番・価格・スペック・大きさ・リンクなど
     ・status: "active"=販売中 / "ended"=販売終了（相談に出なくなる）
     ・links: type は "official"(メーカー公式HP) / "manual"(取扱説明書) / "ref"(参考リンク)
     ・ふだんはPC相談の上のバーにある「🔐 在庫管理」から編集できます（暗証番号は adminPin）
     ====================================================================== -->
<script type="application/json" id="inventory-data">
{
  "category": "pc",
  "label": "パソコン",
  "version": "2026-10-23",
  "adminPin": "staff2026",
  "groups": [
    {
      "id": "chrome",
      "name": "Chromebook（低価格・クラウド・Web特化）"
    },
    {
      "id": "entry_win",
      "name": "10～15万円台・普段使いスタンダードWindows"
    },
    {
      "id": "balance_14",
      "name": "14型・大学生／仕事用バランスモバイル"
    },
    {
      "id": "large_16",
      "name": "16型・大画面快適ノート"
    },
    {
      "id": "ultralight",
      "name": "超軽量モバイル（約689g〜1kg未満）"
    },
    {
      "id": "premium_ai",
      "name": "プレミアム＆AI / Copilot+ PC"
    },
    {
      "id": "desktop_fh",
      "name": "一体型デスクトップ（23.8型大画面）"
    }
  ],
  "tagOptions": {
    "cheap": "低価格",
    "light": "軽量",
    "large": "大画面",
    "balance": "バランス",
    "tablet": "タブレット兼用",
    "japan": "国内メーカー",
    "vaio": "VAIO",
    "office": "Office重視",
    "performance": "高性能",
    "student": "学生向け",
    "costperf": "コスパ",
    "ai": "AI PC",
    "dvd": "DVDドライブ",
    "bd": "BDドライブ",
    "design": "デザイン",
    "premium": "プレミアム",
    "oled": "有機EL",
    "storage": "大容量SSD",
    "memory": "大容量メモリ",
    "desktop": "デスクトップ",
    "tv": "TV機能"
  },
  "items": [
    {
      "id": "c1",
      "status": "active",
      "maker": "Lenovo",
      "model": "83E2001AJP",
      "name": "Duet Gen 9",
      "groupId": "chrome",
      "price": 64790,
      "cpu": "Kompanio 838",
      "ram": 4,
      "ssd": 64,
      "screen": 10.95,
      "weight": 0.51,
      "office": "なし",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "cheap",
        "tablet",
        "light"
      ],
      "grades": {
        "portability": "◎",
        "perf": "△",
        "cost": "◎",
        "screen": "△",
        "battery": "◎"
      },
      "desc": {
        "ja": "タブレット兼用。本体約510gの超軽量・最安帯",
        "en": "Detachable 2-in-1, ~510g tablet, lowest budget",
        "zh": "平板二合一，主机约510g极轻低价"
      },
      "links": [
        {
          "type": "official",
          "title": "PSREF 公式仕様：Lenovo Chromebook Duet 11M889（Gen 9）",
          "url": "https://psref.lenovo.com/Product/Lenovo/Lenovo_Chromebook_Duet_11M889"
        },
        {
          "type": "manual",
          "title": "Lenovo 公式マニュアル検索（製品名・型番で検索）",
          "url": "https://pcsupport.lenovo.com/us/en/manuals"
        }
      ],
      "note": "【要確認】日本の公式型番は 83HH000UJP（Chromebook Duet Gen 9）。値札の型番を確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "c2",
      "status": "active",
      "maker": "Lenovo",
      "model": "83K2000EJP",
      "name": "m Gen 11 14型",
      "groupId": "chrome",
      "price": 87780,
      "cpu": "Kompanio 520",
      "ram": 8,
      "ssd": 128,
      "screen": 14,
      "weight": 1.37,
      "office": "なし",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "cheap",
        "balance",
        "light"
      ],
      "grades": {
        "portability": "◯",
        "perf": "△",
        "cost": "◎",
        "screen": "◯",
        "battery": "◎"
      },
      "desc": {
        "ja": "普通のノートPC型として使える実用8GB版",
        "en": "Standard clamshell Chromebook with 8GB RAM",
        "zh": "标准笔记本开合形态，8GB实用配置"
      },
      "links": [
        {
          "type": "official",
          "title": "メーカー公式（型番検索）",
          "url": "https://www.google.com/search?q=site%3Alenovo.com%2083K2000EJP",
          "auto": true
        },
        {
          "type": "manual",
          "title": "Lenovo 公式マニュアル検索（製品名・型番で検索）",
          "url": "https://pcsupport.lenovo.com/us/en/manuals"
        }
      ],
      "note": "【要確認】型番 83K2000EJP を公式カタログで特定できませんでした。値札で型番・商品名を確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "c3",
      "status": "active",
      "maker": "Lenovo",
      "model": "83L1000HJP",
      "name": "m Gen 10 15.3型",
      "groupId": "chrome",
      "price": 97680,
      "cpu": "Kompanio 520",
      "ram": 8,
      "ssd": 128,
      "screen": 15.3,
      "weight": 1.58,
      "office": "なし",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "cheap",
        "large"
      ],
      "grades": {
        "portability": "△",
        "perf": "△",
        "cost": "◎",
        "screen": "◎",
        "battery": "◯"
      },
      "desc": {
        "ja": "Chromebookでも見やすい15.3型大画面モデル",
        "en": "Spacious 15.3\" display for comfortable web use",
        "zh": "15.3英寸大屏，家用观影视线舒适"
      },
      "links": [
        {
          "type": "official",
          "title": "メーカー公式（型番検索）",
          "url": "https://www.google.com/search?q=site%3Alenovo.com%2083L1000HJP",
          "auto": true
        },
        {
          "type": "manual",
          "title": "Lenovo 公式マニュアル検索（製品名・型番で検索）",
          "url": "https://pcsupport.lenovo.com/us/en/manuals"
        }
      ],
      "note": "【要確認】型番 83L1000HJP を公式カタログで特定できませんでした。値札で型番・商品名を確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "e1",
      "status": "active",
      "maker": "Dynabook",
      "model": "P1C5YPES",
      "name": "C5/Y",
      "groupId": "entry_win",
      "price": 120780,
      "cpu": "Core i3-1305U",
      "ram": 16,
      "ssd": 256,
      "screen": 15.6,
      "weight": 1.77,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "cheap",
        "office",
        "japan",
        "large"
      ],
      "grades": {
        "portability": "△",
        "perf": "◯",
        "cost": "◎",
        "screen": "◎",
        "battery": "◯"
      },
      "desc": {
        "ja": "12万円台でCore i5＋Office搭載の国産スタンダード",
        "en": "Core i5 + MS Office at 120k JPY price point",
        "zh": "12万日元档搭载Core i5与Office的日本老牌"
      },
      "links": [
        {
          "type": "official",
          "title": "dynabook公式：dynabook C5（2025年春モデル）",
          "url": "https://dynabook.com/personal/standard-notebook/c-series/c5-2025-spring-model/index.html"
        },
        {
          "type": "manual",
          "title": "dynabook 製品情報検索（仕様／取扱説明書）",
          "url": "https://dynabook.com/assistpc/check/index_j.htm"
        }
      ],
      "note": "",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "e2",
      "status": "active",
      "maker": "NEC",
      "model": "PC-N1550GAL",
      "name": "LAVIE N15",
      "groupId": "entry_win",
      "price": 126280,
      "cpu": "Ryzen 5 7530U",
      "ram": 8,
      "ssd": 256,
      "screen": 15.6,
      "weight": 2.1,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "cheap",
        "performance",
        "japan",
        "large"
      ],
      "grades": {
        "portability": "△",
        "perf": "◯",
        "cost": "◎",
        "screen": "◎",
        "battery": "◯"
      },
      "desc": {
        "ja": "6コアRyzen 5搭載でCPU性能重視の安価モデル",
        "en": "6-core Ryzen 5 performance at budget range",
        "zh": "6核Ryzen 5处理器，同价位重在CPU性能"
      },
      "links": [
        {
          "type": "official",
          "title": "NEC公式 仕様：LAVIE N15（2023年秋冬 カタログモデル）",
          "url": "https://www.nec-lavie.jp/navigate/products2/pc/232q/08/lavie/n15/spec/index.html"
        },
        {
          "type": "manual",
          "title": "NEC公式 製品検索・電子マニュアルの探し方",
          "url": "https://support.nec-lavie.jp/navigate/support/productsearch/help/index.html"
        }
      ],
      "note": "",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "e3",
      "status": "active",
      "maker": "Lenovo",
      "model": "83K60007JP",
      "name": "IdeaPad Slim 3 Gen 10",
      "groupId": "entry_win",
      "price": 142780,
      "cpu": "Ryzen 3 7320U",
      "ram": 8,
      "ssd": 256,
      "screen": 15.6,
      "weight": 1.62,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "cheap",
        "balance",
        "large"
      ],
      "grades": {
        "portability": "△",
        "perf": "◯",
        "cost": "◯",
        "screen": "◎",
        "battery": "◯"
      },
      "desc": {
        "ja": "15.6型大画面ながら1.62kgとやや軽めの設計",
        "en": "Relatively lightweight 1.62kg 15.6\" body",
        "zh": "15.6英寸大屏仅1.62kg，移动搬动较轻松"
      },
      "links": [
        {
          "type": "official",
          "title": "メーカー公式（型番検索）",
          "url": "https://www.google.com/search?q=site%3Alenovo.com%2083K60007JP",
          "auto": true
        },
        {
          "type": "manual",
          "title": "Lenovo 公式マニュアル検索（製品名・型番で検索）",
          "url": "https://pcsupport.lenovo.com/us/en/manuals"
        }
      ],
      "note": "【要確認】型番 83K60007JP を公式カタログで特定できませんでした。値札で確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "b1",
      "status": "active",
      "maker": "Lenovo",
      "model": "83J20054JP",
      "name": "IdeaPad Slim 5 Light",
      "groupId": "balance_14",
      "price": 131780,
      "cpu": "Ryzen 5 7535HS",
      "ram": 16,
      "ssd": 512,
      "screen": 13.3,
      "weight": 1.15,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "student",
        "costperf",
        "light"
      ],
      "grades": {
        "portability": "◎",
        "perf": "◎",
        "cost": "◎",
        "screen": "◯",
        "battery": "◎"
      },
      "desc": {
        "ja": "16GB/512GB・約1.15kg・13万円台。最重要の超コスパ機",
        "en": "16GB/512GB, 1.15kg, 131k JPY: Best overall value",
        "zh": "16G/512G、约1.15kg、仅13万多日元：无敌性价比首选"
      },
      "links": [
        {
          "type": "official",
          "title": "PSREF 公式仕様：IdeaPad Slim 5 Light 14ABR8",
          "url": "https://psref.lenovo.com/syspool/Sys/PDF/IdeaPad/IdeaPad_Slim_5_Light_14ABR8/IdeaPad_Slim_5_Light_14ABR8_Spec.html"
        },
        {
          "type": "manual",
          "title": "Lenovo 公式マニュアル検索（製品名・型番で検索）",
          "url": "https://pcsupport.lenovo.com/us/en/manuals"
        }
      ],
      "note": "【要確認】IdeaPad Slim 5 Light の公式の型番は 82XS 系です（83J2 は未確認）。値札で確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "b2",
      "status": "active",
      "maker": "Lenovo",
      "model": "83DA0025JP",
      "name": "IdeaPad Slim 5",
      "groupId": "balance_14",
      "price": 153780,
      "cpu": "Ryzen 5 7533HS",
      "ram": 16,
      "ssd": 512,
      "screen": 14,
      "weight": 1.46,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "student",
        "performance"
      ],
      "grades": {
        "portability": "◯",
        "perf": "◎",
        "cost": "◎",
        "screen": "◯",
        "battery": "◯"
      },
      "desc": {
        "ja": "高処理HSプロセッサ搭載。作業処理速度を重視",
        "en": "HS high-power CPU for heavier productivity",
        "zh": "搭载标压HS处理器，多任务与性能更强"
      },
      "links": [
        {
          "type": "official",
          "title": "PSREF 公式仕様：IdeaPad Slim 5 14IMH9（MT 83DA）",
          "url": "https://psref.lenovo.com/syspool/Sys/PDF/IdeaPad/IdeaPad_Slim_5_14IMH9/IdeaPad_Slim_5_14IMH9_Spec.pdf"
        },
        {
          "type": "manual",
          "title": "Lenovo 公式マニュアル検索（製品名・型番で検索）",
          "url": "https://pcsupport.lenovo.com/us/en/manuals"
        }
      ],
      "note": "【要確認】MT 83DA は IdeaPad Slim 5 14IMH9（Intel Core Ultra）です。登録のCPU（Ryzen 5 7533HS）と食い違うので値札で確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "b3",
      "status": "active",
      "maker": "富士通",
      "model": "FMVM55H1G",
      "name": "LIFEBOOK MH55",
      "groupId": "balance_14",
      "price": 153780,
      "cpu": "Ryzen 5 7530U",
      "ram": 16,
      "ssd": 512,
      "screen": 14,
      "weight": 1.3,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "student",
        "japan",
        "light"
      ],
      "grades": {
        "portability": "◎",
        "perf": "◯",
        "cost": "◯",
        "screen": "◯",
        "battery": "◎"
      },
      "desc": {
        "ja": "富士通ブランド＋16GB/512GB＋1.3kgの上品モバイル",
        "en": "Trusted Fujitsu 1.3kg chassis with 16GB/512GB",
        "zh": "富士通品牌、1.3kg轻巧雅致、16G+512G均衡"
      },
      "links": [
        {
          "type": "official",
          "title": "富士通公式 仕様：LIFEBOOK MHシリーズ（2023年1月発表）",
          "url": "https://www.fmworld.net/fmv/mh/2301/spec/"
        },
        {
          "type": "manual",
          "title": "FMVマニュアル（富士通公式）",
          "url": "https://azby.fmworld.net/support/manual/pdf/"
        },
        {
          "type": "ref",
          "title": "FMVサポート：型名から機種を検索",
          "url": "https://azby.fmworld.net/app/customer/select/search.act"
        }
      ],
      "note": "",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "b4",
      "status": "active",
      "maker": "VAIO",
      "model": "VJF14190211W",
      "name": "VAIO F14 (8GB)",
      "groupId": "balance_14",
      "price": 164780,
      "cpu": "Core i5-1334U",
      "ram": 8,
      "ssd": 256,
      "screen": 14,
      "weight": 1.34,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "vaio",
        "light"
      ],
      "grades": {
        "portability": "◯",
        "perf": "◯",
        "cost": "◯",
        "screen": "◯",
        "battery": "◯"
      },
      "desc": {
        "ja": "高品位キーボードを備えたVAIOブランド入門機",
        "en": "Entry into premium VAIO keyboard and chassis",
        "zh": "拥有优质手感键盘的VAIO品质入门款"
      },
      "links": [
        {
          "type": "official",
          "title": "VAIO公式 仕様：VAIO F14 標準仕様モデル（VJF141）",
          "url": "https://vaio.com/products/f141/14-0/specification_pm/"
        },
        {
          "type": "manual",
          "title": "ユーザーマニュアル（VJF141 / VJF161）",
          "url": "https://support.vaio.com/userguide/VJF141,VJF161/start01.html"
        },
        {
          "type": "ref",
          "title": "VAIO公式 製品別サポート（VJF141）",
          "url": "https://support.vaio.com/products/VJF141/"
        }
      ],
      "note": "【要確認】公式の型番一覧は VJF14190211N（末尾N）です。値札の型番を確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "b5",
      "status": "active",
      "maker": "Dynabook",
      "model": "P1M7VPEL",
      "name": "M7",
      "groupId": "balance_14",
      "price": 175780,
      "cpu": "Core i7-1260P",
      "ram": 8,
      "ssd": 512,
      "screen": 14,
      "weight": 1.35,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "performance",
        "japan",
        "light"
      ],
      "grades": {
        "portability": "◯",
        "perf": "◎",
        "cost": "◯",
        "screen": "◯",
        "battery": "◯"
      },
      "desc": {
        "ja": "高性能Core i7-Pシリーズ搭載の国産ハイパワー機",
        "en": "Equipped with powerful Core i7-P series CPU",
        "zh": "搭载强劲Core i7-P处理器的日本原厂实力本"
      },
      "links": [
        {
          "type": "official",
          "title": "dynabook公式：Mシリーズ（2022年モデル）",
          "url": "https://dynabook.com/mobile-notebook-tablet/m-series/2022-spring-model/index.html"
        },
        {
          "type": "manual",
          "title": "dynabook 製品情報検索（仕様／取扱説明書）",
          "url": "https://dynabook.com/assistpc/check/index_j.htm"
        }
      ],
      "note": "",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "b6",
      "status": "active",
      "maker": "VAIO",
      "model": "VJF14290111W",
      "name": "VAIO F14 (16GB)",
      "groupId": "balance_14",
      "price": 197780,
      "cpu": "Core i5-1335U",
      "ram": 16,
      "ssd": 512,
      "screen": 14,
      "weight": 1.34,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "student",
        "balance",
        "vaio",
        "light"
      ],
      "grades": {
        "portability": "◯",
        "perf": "◎",
        "cost": "◯",
        "screen": "◯",
        "battery": "◎"
      },
      "desc": {
        "ja": "長く安心して使える16GB/512GB仕様の本命VAIO",
        "en": "The sweet-spot VAIO featuring 16GB RAM & 512GB SSD",
        "zh": "16G+512G主力配置，经久耐用的VAIO本命机"
      },
      "links": [
        {
          "type": "official",
          "title": "VAIO公式 仕様：VAIO F14 標準仕様モデル（VJF142）",
          "url": "https://vaio.com/products/f142/14-0/specification_pm/"
        },
        {
          "type": "manual",
          "title": "ユーザーマニュアル（VJF142 / VJF162）",
          "url": "https://support.vaio.com/userguide/VJF142,VJF162,VJBK12,VJBM12/"
        }
      ],
      "note": "【要確認】VJF142 は VAIO F14 の2025年モデル（Core 5 120U など）です。登録のCPU（Core i5-1335U）と食い違うので値札で確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "b7",
      "status": "active",
      "maker": "Lenovo",
      "model": "83E20023JP",
      "name": "IdeaPad Slim 3i 14",
      "groupId": "balance_14",
      "price": 203280,
      "cpu": "Core Ultra 5 125H",
      "ram": 16,
      "ssd": 512,
      "screen": 14,
      "weight": 1.39,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "ai",
        "performance",
        "light"
      ],
      "grades": {
        "portability": "◯",
        "perf": "◎",
        "cost": "◯",
        "screen": "◯",
        "battery": "◎"
      },
      "desc": {
        "ja": "新世代Core Ultra搭載でAI処理やグラフィック強化",
        "en": "Equipped with Intel Core Ultra 5 & NPU",
        "zh": "搭载酷睿Ultra 5芯片，AI与核心显卡大幅提升"
      },
      "links": [
        {
          "type": "official",
          "title": "メーカー公式（型番検索）",
          "url": "https://www.google.com/search?q=site%3Alenovo.com%2083E20023JP",
          "auto": true
        },
        {
          "type": "manual",
          "title": "Lenovo 公式マニュアル検索（製品名・型番で検索）",
          "url": "https://pcsupport.lenovo.com/us/en/manuals"
        }
      ],
      "note": "【要確認】型番 83E20023JP を公式カタログで特定できませんでした。値札で確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "l1",
      "status": "active",
      "maker": "NEC",
      "model": "PC-N1675HAL",
      "name": "LAVIE N16 (DVD内蔵)",
      "groupId": "large_16",
      "price": 164780,
      "cpu": "Ryzen 7 7735U",
      "ram": 16,
      "ssd": 512,
      "screen": 16,
      "weight": 2.2,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "dvd",
        "japan",
        "large"
      ],
      "grades": {
        "portability": "△",
        "perf": "◎",
        "cost": "◯",
        "screen": "◎",
        "battery": "◯"
      },
      "desc": {
        "ja": "DVD/CDドライブを本体に内蔵した貴重な国内大画面",
        "en": "Rare 16\" laptop with built-in DVD/CD drive",
        "zh": "罕见的自带DVD/CD光驱的16英寸大屏实用机"
      },
      "links": [
        {
          "type": "official",
          "title": "NEC公式 仕様：LAVIE N16（2024年春 カタログモデル）",
          "url": "https://www.nec-lavie.jp/navigate/products2/pc/241q/01/lavie/n16/spec/index.html"
        },
        {
          "type": "manual",
          "title": "NEC公式 電子マニュアル：LAVIE N16（PC-N1675HAL）",
          "url": "https://support.nec-lavie.jp/e-manual/m/nx/lv/202401/html/n1675hal.html"
        }
      ],
      "note": "",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "l2",
      "status": "active",
      "maker": "NEC",
      "model": "PC-N1655HAL",
      "name": "LAVIE N16 Slim",
      "groupId": "large_16",
      "price": 208780,
      "cpu": "Core i5-1335U",
      "ram": 16,
      "ssd": 512,
      "screen": 16,
      "weight": 1.69,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "japan",
        "large"
      ],
      "grades": {
        "portability": "◯",
        "perf": "◯",
        "cost": "◯",
        "screen": "◎",
        "battery": "◯"
      },
      "desc": {
        "ja": "16型ながら1.69kgの薄型スリム設計",
        "en": "Slim & lightweight 1.69kg 16\" chassis by NEC",
        "zh": "16英寸大屏仅重1.69kg，超薄便携新设计"
      },
      "links": [
        {
          "type": "official",
          "title": "NEC公式 仕様：LAVIE N16（2024年春 カタログモデル）",
          "url": "https://www.nec-lavie.jp/navigate/products2/pc/241q/01/lavie/n16/spec/index.html"
        },
        {
          "type": "manual",
          "title": "NEC公式 電子マニュアル：LAVIE N16（2024年春モデル）",
          "url": "https://support.nec-lavie.jp/e-manual/m/nx/lv/202401/html/n1675hal.html"
        }
      ],
      "note": "",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "l3",
      "status": "active",
      "maker": "VAIO",
      "model": "VJF16190211W",
      "name": "VAIO F16 i5",
      "groupId": "large_16",
      "price": 208780,
      "cpu": "Core i5-1335U",
      "ram": 16,
      "ssd": 512,
      "screen": 16,
      "weight": 1.65,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "vaio",
        "large"
      ],
      "grades": {
        "portability": "◯",
        "perf": "◯",
        "cost": "◯",
        "screen": "◎",
        "battery": "◯"
      },
      "desc": {
        "ja": "16:10の広大な画面。1.65kgで部屋の移動も快適",
        "en": "Expansive 16:10 screen, easy to move around",
        "zh": "16:10舒适宽屏，机身1.65kg在家随时换位置"
      },
      "links": [
        {
          "type": "official",
          "title": "VAIO公式 仕様：VAIO F16 標準仕様モデル（VJF161）",
          "url": "https://vaio.com/products/f161/16-0/specification_pm/"
        },
        {
          "type": "manual",
          "title": "ユーザーマニュアル（VJF141 / VJF161）",
          "url": "https://support.vaio.com/userguide/VJF141,VJF161/start01.html"
        },
        {
          "type": "ref",
          "title": "VAIO公式 製品別サポート（VJF161）",
          "url": "https://support.vaio.com/products/VJF161/"
        }
      ],
      "note": "",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "l4",
      "status": "active",
      "maker": "VAIO",
      "model": "VJF16190111B",
      "name": "VAIO F16 i7",
      "groupId": "large_16",
      "price": 229680,
      "cpu": "Core i7-1355U",
      "ram": 16,
      "ssd": 512,
      "screen": 16,
      "weight": 1.65,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "performance",
        "vaio",
        "large"
      ],
      "grades": {
        "portability": "◯",
        "perf": "◎",
        "cost": "◯",
        "screen": "◎",
        "battery": "◯"
      },
      "desc": {
        "ja": "Core i7を搭載したF16の上位パフォーマンスモデル",
        "en": "High performance Core i7 variant of VAIO F16",
        "zh": "搭载Core i7的高性能版VAIO大屏旗舰"
      },
      "links": [
        {
          "type": "official",
          "title": "VAIO公式 仕様：VAIO F16 標準仕様モデル（VJF161）",
          "url": "https://vaio.com/products/f161/16-0/specification_pm/"
        },
        {
          "type": "manual",
          "title": "ユーザーマニュアル（VJF141 / VJF161）",
          "url": "https://support.vaio.com/userguide/VJF141,VJF161/start01.html"
        },
        {
          "type": "ref",
          "title": "VAIO公式 製品別サポート（VJF161）",
          "url": "https://support.vaio.com/products/VJF161/"
        }
      ],
      "note": "",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "u1",
      "status": "active",
      "maker": "富士通",
      "model": "FMVU90H1B",
      "name": "LIFEBOOK UH90/H1",
      "groupId": "ultralight",
      "price": 252780,
      "cpu": "Core i7-1360P",
      "ram": 16,
      "ssd": 512,
      "screen": 14,
      "weight": 0.689,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "performance",
        "japan",
        "light"
      ],
      "grades": {
        "portability": "◎",
        "perf": "◎",
        "cost": "△",
        "screen": "◯",
        "battery": "◯"
      },
      "desc": {
        "ja": "驚異の約689g！14型で世界トップクラスの軽さ",
        "en": "Stunning ~689g! World's lightest class 14\" body",
        "zh": "惊人的约689g！14英寸极致超轻世界巅峰"
      },
      "links": [
        {
          "type": "official",
          "title": "富士通公式 製品情報：LIFEBOOK UH90/H1（FMVU90H1）",
          "url": "https://www.fmworld.net/fmv/etc/2301/u90h1xe.html"
        },
        {
          "type": "manual",
          "title": "FMVマニュアル（富士通公式）",
          "url": "https://azby.fmworld.net/support/manual/pdf/"
        },
        {
          "type": "ref",
          "title": "FMVサポート：型名から機種を検索",
          "url": "https://azby.fmworld.net/app/customer/select/search.act"
        }
      ],
      "note": "",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "u2",
      "status": "active",
      "maker": "富士通",
      "model": "FMVU90J3B",
      "name": "LIFEBOOK UH90/J3",
      "groupId": "ultralight",
      "price": 263780,
      "cpu": "Core Ultra 7 155H",
      "ram": 16,
      "ssd": 512,
      "screen": 14,
      "weight": 0.689,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "ai",
        "japan",
        "light"
      ],
      "grades": {
        "portability": "◎",
        "perf": "◎",
        "cost": "△",
        "screen": "◯",
        "battery": "◯"
      },
      "desc": {
        "ja": "689gの超軽量に最新Core Ultra 7を搭載した最高峰",
        "en": "689g ultralight body packed with Core Ultra 7",
        "zh": "689g极致机身融入酷睿Ultra 7高能核心"
      },
      "links": [
        {
          "type": "official",
          "title": "富士通公式：LIFEBOOK UHシリーズ（UH90/J3）",
          "url": "https://www.fmworld.net/fmv/uh/"
        },
        {
          "type": "manual",
          "title": "FMVマニュアル（富士通公式）",
          "url": "https://azby.fmworld.net/support/manual/pdf/"
        },
        {
          "type": "ref",
          "title": "FMVサポート：型名から機種を検索",
          "url": "https://azby.fmworld.net/app/customer/select/search.act"
        }
      ],
      "note": "",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "u3",
      "status": "active",
      "maker": "Dynabook",
      "model": "P1G6VPBL",
      "name": "G6",
      "groupId": "ultralight",
      "price": 252780,
      "cpu": "Core i5-1340P",
      "ram": 8,
      "ssd": 256,
      "screen": 13.3,
      "weight": 0.875,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "japan",
        "light"
      ],
      "grades": {
        "portability": "◎",
        "perf": "◯",
        "cost": "△",
        "screen": "◯",
        "battery": "◎"
      },
      "desc": {
        "ja": "約875gの軽さとMIL規格の頑丈さを両立",
        "en": "Lightweight 875g with rugged MIL-spec durability",
        "zh": "约875g坚固轻巧，通过美军标抗跌落测试"
      },
      "links": [
        {
          "type": "official",
          "title": "dynabook公式：Gシリーズ（2022年モデル）",
          "url": "https://dynabook.com/mobile-notebook-tablet/g-series/2022-spring-model/index.html"
        },
        {
          "type": "manual",
          "title": "dynabook 製品情報検索（仕様／取扱説明書）",
          "url": "https://dynabook.com/assistpc/check/index_j.htm"
        }
      ],
      "note": "【要確認】メモリ・SSDを公式掲載（8GB / 256GB）に修正しました。CPU名は値札で確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "u4",
      "status": "active",
      "maker": "Dynabook",
      "model": "P1G7VPBL",
      "name": "G7",
      "groupId": "ultralight",
      "price": 263780,
      "cpu": "Core i7-1360P",
      "ram": 16,
      "ssd": 512,
      "screen": 13.3,
      "weight": 0.875,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "performance",
        "japan",
        "light"
      ],
      "grades": {
        "portability": "◎",
        "perf": "◎",
        "cost": "△",
        "screen": "◯",
        "battery": "◯"
      },
      "desc": {
        "ja": "約875gにCore i7搭載。高負荷モバイルワーク向け",
        "en": "Core i7 in an 875g tough magnesium chassis",
        "zh": "875g机身搭载Core i7，高负载移动办公首选"
      },
      "links": [
        {
          "type": "official",
          "title": "dynabook公式：Gシリーズ（2022年モデル）",
          "url": "https://dynabook.com/mobile-notebook-tablet/g-series/2022-spring-model/index.html"
        },
        {
          "type": "manual",
          "title": "dynabook 製品情報検索（仕様／取扱説明書）",
          "url": "https://dynabook.com/assistpc/check/index_j.htm"
        }
      ],
      "note": "",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "u5",
      "status": "active",
      "maker": "NEC",
      "model": "PC-N1350JAL",
      "name": "LAVIE SOL",
      "groupId": "ultralight",
      "price": 208780,
      "cpu": "Core Ultra 5 125U",
      "ram": 16,
      "ssd": 512,
      "screen": 13.3,
      "weight": 0.98,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "ai",
        "design",
        "japan",
        "light"
      ],
      "grades": {
        "portability": "◎",
        "perf": "◯",
        "cost": "◯",
        "screen": "◯",
        "battery": "◎"
      },
      "desc": {
        "ja": "1kg切り(約980g)の洗練デザイン＋Core Ultra",
        "en": "Stylish sub-1kg (980g) mobile with Core Ultra",
        "zh": "低于1kg(约980g)的高颜值新潮轻薄本"
      },
      "links": [
        {
          "type": "official",
          "title": "NEC公式 仕様：LAVIE N13 Slim（2024年秋冬 カタログモデル）",
          "url": "https://www.nec-lavie.jp/navigate/products2/pc/244q/11/lavie/n13s/spec/"
        },
        {
          "type": "manual",
          "title": "NEC公式 製品検索・電子マニュアルの探し方",
          "url": "https://support.nec-lavie.jp/navigate/support/productsearch/help/index.html"
        }
      ],
      "note": "【要確認】PC-N1350JAL は公式では LAVIE N13 Slim 系です（登録名は LAVIE SOL）。値札で商品名・スペックを確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "p1",
      "status": "active",
      "maker": "Lenovo",
      "model": "83CV0007JP",
      "name": "Yoga Slim 7i Gen 10",
      "groupId": "premium_ai",
      "price": 208780,
      "cpu": "Core Ultra 5 125H",
      "ram": 16,
      "ssd": 512,
      "screen": 14,
      "weight": 1.39,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "premium",
        "ai",
        "light"
      ],
      "grades": {
        "portability": "◯",
        "perf": "◎",
        "cost": "◯",
        "screen": "◯",
        "battery": "◎"
      },
      "desc": {
        "ja": "アルミ削り出しの高品質ボディ＋Core Ultra",
        "en": "Sleek aluminum chassis with Core Ultra power",
        "zh": "全铝一体化精致机身，性能出众"
      },
      "links": [
        {
          "type": "official",
          "title": "PSREF 公式仕様：Yoga Slim 7 14IMH9（MT 83CV）",
          "url": "https://psref.lenovo.com/Product/Yoga/Yoga_Slim_7_14IMH9"
        },
        {
          "type": "manual",
          "title": "Lenovo 公式マニュアル検索（製品名・型番で検索）",
          "url": "https://pcsupport.lenovo.com/us/en/manuals"
        }
      ],
      "note": "",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "p2",
      "status": "active",
      "maker": "Lenovo",
      "model": "83HM000UJP",
      "name": "Yoga Slim 7i Aura",
      "groupId": "premium_ai",
      "price": 285780,
      "cpu": "Core Ultra 7 258V",
      "ram": 32,
      "ssd": 1024,
      "screen": 15.3,
      "weight": 1.53,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "oled",
        "ai",
        "storage",
        "memory",
        "large"
      ],
      "grades": {
        "portability": "◯",
        "perf": "◎",
        "cost": "△",
        "screen": "◎",
        "battery": "◎"
      },
      "desc": {
        "ja": "2.8K有機EL(OLED)の圧倒的画質＋Copilot+ PC",
        "en": "Stunning 2.8K OLED & Lunar Lake AI flagship",
        "zh": "2.8K OLED顶级画质，Lunar Lake新一代AI旗舰"
      },
      "links": [
        {
          "type": "official",
          "title": "PSREF 公式仕様：Yoga Slim 7 15ILL9（Aura Edition / MT 83HM）",
          "url": "https://psref.lenovo.com/syspool/Sys/PDF/Yoga/Yoga_Slim_7_15ILL9/Yoga_Slim_7_15ILL9_Spec.PDF"
        },
        {
          "type": "manual",
          "title": "Lenovo 公式マニュアル検索（製品名・型番で検索）",
          "url": "https://pcsupport.lenovo.com/us/en/manuals"
        }
      ],
      "note": "",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "p3",
      "status": "active",
      "maker": "VAIO",
      "model": "VJS14790111B",
      "name": "VAIO SX-14R",
      "groupId": "premium_ai",
      "price": 294800,
      "cpu": "Core Ultra 5 125H",
      "ram": 16,
      "ssd": 512,
      "screen": 14,
      "weight": 0.999,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "premium",
        "vaio",
        "ai",
        "light"
      ],
      "grades": {
        "portability": "◎",
        "perf": "◎",
        "cost": "△",
        "screen": "◯",
        "battery": "◎"
      },
      "desc": {
        "ja": "999gのプレミアムカーボンボディ。国内最高級VAIO",
        "en": "Sub-1kg premium carbon body, flagship VAIO",
        "zh": "999g碳纤维机身，日本原产顶级商务旗舰"
      },
      "links": [
        {
          "type": "official",
          "title": "VAIO公式 仕様：VAIO SX14 標準仕様モデル（VJS147）",
          "url": "https://vaio.com/products/sx147/14-0/specification_pm/"
        },
        {
          "type": "manual",
          "title": "VAIO公式 ユーザーマニュアル（VJS147）",
          "url": "https://support.vaio.com/products/VJS147/userguide/"
        }
      ],
      "note": "【要確認】VJS147 は公式では「VAIO SX14」です（登録名は SX14-R）。値札で商品名・CPUを確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "p4",
      "status": "active",
      "maker": "NEC",
      "model": "PC-N1675JAL",
      "name": "LAVIE NEXTREME AI",
      "groupId": "premium_ai",
      "price": 296780,
      "cpu": "Ryzen AI 7 360",
      "ram": 16,
      "ssd": 512,
      "screen": 16,
      "weight": 1.7,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "ai",
        "japan",
        "large"
      ],
      "grades": {
        "portability": "△",
        "perf": "◎",
        "cost": "△",
        "screen": "◎",
        "battery": "◯"
      },
      "desc": {
        "ja": "50TOPS超の強力NPU内蔵。NECの最新AIフラッグシップ",
        "en": "50+ TOPS NPU for next-level Windows Copilot+ AI",
        "zh": "超50TOPS算力NPU，NEC划时代Copilot+ AI大屏旗舰"
      },
      "links": [
        {
          "type": "official",
          "title": "NEC公式 仕様：LAVIE N16（2025年春 カタログモデル）",
          "url": "https://www.nec-lavie.jp/navigate/products2/pc/251q/02/lavie/n16/spec/index.html"
        },
        {
          "type": "manual",
          "title": "NEC公式 製品検索・電子マニュアルの探し方",
          "url": "https://support.nec-lavie.jp/navigate/support/productsearch/help/index.html"
        },
        {
          "type": "ref",
          "title": "NEC公式 製品ページ：LAVIE N16 2025年春モデル",
          "url": "https://www.nec-lavie.jp/products/notebook/n16/251q02.html"
        }
      ],
      "note": "【要確認】PC-N1675JAL は公式では LAVIE N16（2025年春モデル）です（登録名は LAVIE NEXTREME AI）。値札で商品名・スペックを確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "p5",
      "status": "active",
      "maker": "NEC",
      "model": "PC-N1695JAL",
      "name": "LAVIE NEXTREME AI High-end",
      "groupId": "premium_ai",
      "price": 373780,
      "cpu": "Ryzen AI 9 365",
      "ram": 32,
      "ssd": 1024,
      "screen": 16,
      "weight": 1.7,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "ai",
        "storage",
        "memory",
        "performance",
        "japan",
        "large"
      ],
      "grades": {
        "portability": "△",
        "perf": "◎",
        "cost": "△",
        "screen": "◎",
        "battery": "◯"
      },
      "desc": {
        "ja": "32GBメモリ/1TB SSD搭載。妥協なき最高峰AI PC",
        "en": "32GB RAM / 1TB SSD, ultimate AI powerhouse",
        "zh": "32G超大内存/1TB存储，无妥协AI顶配旗舰"
      },
      "links": [
        {
          "type": "official",
          "title": "NEC公式 仕様：LAVIE N16（2025年春 カタログモデル）",
          "url": "https://www.nec-lavie.jp/navigate/products2/pc/251q/02/lavie/n16/spec/index.html"
        },
        {
          "type": "manual",
          "title": "NEC公式 製品検索・電子マニュアルの探し方",
          "url": "https://support.nec-lavie.jp/navigate/support/productsearch/help/index.html"
        }
      ],
      "note": "【要確認】PC-N1695JAL を公式カタログで特定できませんでした。値札で確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "h1",
      "status": "active",
      "maker": "富士通",
      "model": "FMVA53H3B",
      "name": "LIFEBOOK AH53/H3",
      "groupId": "large_16",
      "price": 219780,
      "cpu": "Core i7-1255U",
      "ram": 16,
      "ssd": 512,
      "screen": 15.6,
      "weight": 2,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "bd",
        "japan",
        "large"
      ],
      "grades": {
        "portability": "△",
        "perf": "◯",
        "cost": "◯",
        "screen": "◎",
        "battery": "△"
      },
      "desc": {
        "ja": "ブルーレイ(BD)ドライブ内蔵。映画鑑賞やバックアップに",
        "en": "Built-in Blu-ray drive for discs and movie playback",
        "zh": "自带蓝光(BD)光驱，影音娱乐与光盘刻录首选"
      },
      "links": [
        {
          "type": "official",
          "title": "富士通公式 仕様：LIFEBOOK AHシリーズ（2023年11月発表）",
          "url": "https://www.fmworld.net/fmv/ah/2311/spec/"
        },
        {
          "type": "manual",
          "title": "FMVマニュアル（富士通公式）",
          "url": "https://azby.fmworld.net/support/manual/pdf/"
        },
        {
          "type": "ref",
          "title": "FMVサポート：型名から機種を検索",
          "url": "https://azby.fmworld.net/app/customer/select/search.act"
        }
      ],
      "note": "【要確認】AH53/H3 は公式の2023年モデル一覧で見つかりませんでした（AH53/H2 はあり）。値札で型番を確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "h2",
      "status": "active",
      "maker": "富士通",
      "model": "FMVAX3H3B",
      "name": "LIFEBOOK AH-X/H3",
      "groupId": "premium_ai",
      "price": 263780,
      "cpu": "Core i7-1260P",
      "ram": 16,
      "ssd": 1024,
      "screen": 15.6,
      "weight": 2,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "oled",
        "storage",
        "japan",
        "large"
      ],
      "grades": {
        "portability": "△",
        "perf": "◎",
        "cost": "△",
        "screen": "◎",
        "battery": "△"
      },
      "desc": {
        "ja": "4K有機EL＋1TB SSD＋BD搭載の全部入りホームPC",
        "en": "4K OLED + 1TB SSD + BD drive all-in-one",
        "zh": "4K OLED超清屏+1TB固态+蓝光光驱，全功能影音顶配"
      },
      "links": [
        {
          "type": "official",
          "title": "富士通公式 仕様：LIFEBOOK AHシリーズ（2023年11月発表）",
          "url": "https://www.fmworld.net/fmv/ah/2311/spec/"
        },
        {
          "type": "manual",
          "title": "FMVマニュアル（富士通公式）",
          "url": "https://azby.fmworld.net/support/manual/pdf/"
        },
        {
          "type": "ref",
          "title": "FMVサポート：型名から機種を検索",
          "url": "https://azby.fmworld.net/app/customer/select/search.act"
        }
      ],
      "note": "【要確認】AH-X/H3 は公式の2023年11月発表モデル一覧で見つかりませんでした。値札で型番を確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "d1",
      "status": "active",
      "maker": "富士通",
      "model": "FMVF55H3B",
      "name": "ESPRIMO FH55/H3",
      "groupId": "desktop_fh",
      "price": 230780,
      "cpu": "Ryzen 5 7530U",
      "ram": 16,
      "ssd": 512,
      "screen": 23.8,
      "weight": 6.1,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "japan",
        "large",
        "desktop"
      ],
      "grades": {
        "portability": "△",
        "perf": "◯",
        "cost": "◯",
        "screen": "◎",
        "battery": "△"
      },
      "desc": {
        "ja": "23.8型大画面。配線すっきりで家族みんなで使える一体型",
        "en": "23.8\" clean All-in-One desktop for family and home",
        "zh": "23.8英寸超宽屏一体机，桌面整洁，全家共享"
      },
      "links": [
        {
          "type": "official",
          "title": "富士通公式 仕様：ESPRIMO FHシリーズ（2023年11月発表）",
          "url": "https://www.fmworld.net/fmv/fh/2311/spec/"
        },
        {
          "type": "manual",
          "title": "FMVマニュアル（富士通公式）",
          "url": "https://azby.fmworld.net/support/manual/pdf/"
        },
        {
          "type": "ref",
          "title": "FMVサポート：型名から機種を検索",
          "url": "https://azby.fmworld.net/app/customer/select/search.act"
        }
      ],
      "note": "【要確認】FH55/H3 は公式の2023年モデル一覧で見つかりませんでした。値札で型番を確認してください。",
      "updated": "2026-10-23",
      "photo": null
    },
    {
      "id": "d2",
      "status": "active",
      "maker": "富士通",
      "model": "FMVF76H3B",
      "name": "ESPRIMO FH76/H3",
      "groupId": "desktop_fh",
      "price": 263780,
      "cpu": "Core i7-1260P",
      "ram": 16,
      "ssd": 512,
      "screen": 23.8,
      "weight": 6.3,
      "office": "搭載",
      "size": {
        "w": null,
        "d": null,
        "h": null
      },
      "specs": {},
      "jan": "",
      "tags": [
        "tv",
        "japan",
        "large",
        "desktop"
      ],
      "grades": {
        "portability": "△",
        "perf": "◎",
        "cost": "△",
        "screen": "◎",
        "battery": "△"
      },
      "desc": {
        "ja": "高音質Pioneerスピーカー＋テレビチューナー付き",
        "en": "Pioneer audio + TV Tuner for rich home entertainment",
        "zh": "Pioneer先锋音响+自带电视接收功能，客厅娱乐中心"
      },
      "links": [
        {
          "type": "official",
          "title": "富士通公式 仕様：ESPRIMO FHシリーズ（2023年11月発表）",
          "url": "https://www.fmworld.net/fmv/fh/2311/spec/"
        },
        {
          "type": "manual",
          "title": "FMVマニュアル（富士通公式）",
          "url": "https://azby.fmworld.net/support/manual/pdf/"
        },
        {
          "type": "ref",
          "title": "FMVサポート：型名から機種を検索",
          "url": "https://azby.fmworld.net/app/customer/select/search.act"
        }
      ],
      "note": "【要確認】FH76/H3 は公式の2023年モデル一覧で見つかりませんでした（FH77/H3 はあり）。値札で型番を確認してください。",
      "updated": "2026-10-23",
      "photo": null
    }
  ]
}
</script>
<!-- ▲▲▲ 在庫データここまで ▲▲▲ -->
<!-- ======================================================================
     ▼▼▼ ヒアリング設定（店舗ごとのアレンジ）▼▼▼
     ・ふだんは「🔐 在庫管理」→「💬 ヒアリング」タブで編集できます
     ・questions：質問ごとの 非表示(hidden)・文言(t / h)・選択肢(opts / order)
     ・custom：店舗オリジナルの質問（スタッフ確認シートに表示）
     ====================================================================== -->
<script type="application/json" id="hearing-data">
{
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
  <h1 class="pg-ttl">パソコン</h1>
  <button type="button" class="pg-btn main" id="pg-open">相談をもう一度ひらく</button>
  <a class="pg-btn sub" id="pg-back" href="https://information000.github.io/Nojima/info/">← エリアへ戻る</a>
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
  var APP = "pc";                 // このページの相談アプリ
  var ROOT_ID = "pc-app";            // アプリの表示エリア
  var AREA_URL = "https://information000.github.io/Nojima/info/";       // 閉じたときに戻るエリアページ
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
     在庫管理モジュール（スタッフ用） ※PC相談の上のバーの「🔐 在庫管理」から開く（暗証番号が必要）
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
  function products() {
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

  return { AUTO_TAGS: AUTO_TAGS, autoTags: autoTags, canonMaker: canonMaker, BASE: BASE, LKEY: LKEY, all: all, products: products, local: local, saveLocal: saveLocal, gradeAuto: gradeAuto, clone: clone, esc: esc, safeUrl: safeUrl };
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
  var LKEY = "nj-hearing-pc-v1";
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function local() { try { return JSON.parse(localStorage.getItem(LKEY) || "null"); } catch (e) { return null; } }
  function cfg() { var l = local(); var c = l || clone(BASE); c.questions = c.questions || {}; c.custom = c.custom || []; return c; }
  function save(c) { try { localStorage.setItem(LKEY, JSON.stringify(c)); return true; } catch (e) { return false; } }
  function reset() { try { localStorage.removeItem(LKEY); } catch (e) {} }
  return { BASE: BASE, LKEY: LKEY, cfg: cfg, save: save, reset: reset, isLocal: function () { return !!local(); }, clone: clone };
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
    var app = document.getElementById("pc-app");
    if (app) {
      var put = function () {
        var top = app.querySelector(".fr-top");
        if (top && !top.querySelector(".iv-entry")) {
          var b = document.createElement("button");
          b.type = "button"; b.className = "iv-entry"; b.title = "在庫管理（スタッフ用・暗証番号が必要）";
          b.innerHTML = '<span class="lk">🔐</span><span class="tx">在庫管理</span>';
          b.addEventListener("click", function (e) { e.stopPropagation(); open(); });
          var pill = top.querySelector(".fr-pill");
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
      + '<div class="iv-search"><span class="ico">🔍</span><input id="iv-q" type="search" placeholder="型番・商品名・メーカー・CPUで検索" value="' + esc(filt.q) + '" aria-label="在庫を検索"></div>'
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
      return INV.all().filter(function (p) { return [p.model, p.name, p.maker, p.cpu, p.jan].join(" ").toLowerCase().indexOf(s) >= 0; }).map(function (p) {
        return { label: dispName(p), sub: p.model + " ・ " + yen(p.price), value: p.model, id: p.id, icon: p.status === "ended" ? "⏸" : "💻" };
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
      return !q || [p.model, p.name, p.maker, p.cpu, p.jan, p.note].join(" ").toLowerCase().indexOf(q) >= 0;
    }).sort(function (a, b) { return String(b.updated || "").localeCompare(String(a.updated || "")) || (a.price - b.price); });
    var list = $("#iv-list");
    list.innerHTML = rows.length ? rows.map(function (p, i) { return row(p, anim ? Math.min(i, 14) : 0, anim); }).join("")
      : '<div class="iv-empty"><div class="big">🔎</div>' + kt(q ? "「" + filt.q + "」は見つかりませんでした" : "ここにはまだ在庫がありません") + "</div>";
    $("#iv-cnt").innerHTML = kt(rows.length + "件") + (L.removed.length && filt.st === "local" ? "（削除 " + L.removed.length + "件）" : "");
    openRow = null;
  }
  function row(p, i, anim) {
    var th = p.photo ? '<img class="th" src="' + esc(p.photo) + '" alt="">' : '<div class="th">💻</div>';
    var tg = '<span class="tg mdl">' + esc(p.model) + "</span>" + (p.status === "ended" ? '<span class="tg end">販売終了</span>' : "")
      + (p._new ? '<span class="tg new">新規</span>' : p._local ? '<span class="tg loc">端末で編集</span>' : "")
      + '<span class="tg">' + esc(short(gname(p.groupId))) + "</span>"
      + (p.cpu ? '<span class="tg">' + esc(p.cpu) + "</span>" : "") + (p.ram ? '<span class="tg">' + esc(p.ram) + "GB</span>" : "")
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
    return { id: "u" + Date.now().toString(36), status: "active", maker: "", model: "", name: "", groupId: "",
      price: "", cpu: "", ram: "", ssd: "", screen: "", weight: "", office: "なし", size: { w: null, d: null, h: null }, specs: {}, jan: "",
      tags: [], grades: {}, desc: { ja: "", en: "", zh: "" }, links: [], note: "", updated: today(), photo: null };
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
      + f("CPU", "cpu", p.cpu) + f("メモリ（GB）", "ram", p.ram, "number") + f("SSD（GB）", "ssd", p.ssd, "number")
      + f("画面（インチ）", "screen", p.screen, "number") + f("重さ（kg）", "weight", p.weight, "number")
      + '<div class="iv-f"><label>Office</label>' + seg("office", p.office || "なし", [["なし", "なし"], ["搭載", "搭載"]]) + "</div>"
      + f("幅 W（mm）", "size.w", p.size && p.size.w, "number") + f("奥行 D（mm）", "size.d", p.size && p.size.d, "number") + f("高さ H（mm）", "size.h", p.size && p.size.h, "number")
      + "</div></div>";
    h += '<div class="iv-note" style="font-weight:800;margin-top:12px">その他のスペック</div><div id="iv-specs">' + Object.keys(p.specs || {}).map(function (k) { return kv(k, p.specs[k]); }).join("") + "</div>"
      + '<button class="iv-b" data-e="spec-add">＋ 項目を追加</button>';
    // リンク
    h += '<div class="iv-sec">🔗 メーカーHP・取扱説明書・参考リンク</div><div id="iv-links">' + (p.links || []).map(ln).join("") + "</div>"
      + '<button class="iv-b" data-e="link-add">＋ リンクを追加</button> <button class="iv-b warn" data-e="link-auto">🌐 型番からメーカーHP・取説を探す</button>'
      + '<div class="iv-note">メーカーと型番から公式サイト・取扱説明書のリンク（または公式サイト内の検索）を作ります。↗ で開き、正しいページが見つかったらそのURLに貼り替えると、お客様にも直接そのページが表示されます。</div>';
    // 見せ方
    var autoT = INV.autoTags(p), AUTO = INV.AUTO_TAGS.filter(function (x) { return x !== "ai"; });
    h += '<div class="iv-sec">相談での見せ方</div><div class="iv-chk">' + Object.keys(B.tagOptions).map(function (t) {
      if (AUTO.indexOf(t) >= 0) return '<label class="auto" title="メーカー・スペックから自動で決まります"><input type="checkbox" disabled' + (autoT.indexOf(t) >= 0 ? " checked" : "") + ">" + esc(B.tagOptions[t]) + "<i>自動</i></label>";
      return '<label><input type="checkbox" data-tag="' + t + '"' + ((p.tags || []).indexOf(t) >= 0 || (t === "ai" && autoT.indexOf("ai") >= 0) ? " checked" : "") + ">" + esc(B.tagOptions[t]) + "</label>";
    }).join("") + '</div><div class="iv-note">「自動」のタグ（国内メーカー・VAIO・大画面・軽量・デスクトップ）は、メーカーと画面サイズ・重さから自動で付きます。AI PCは Core Ultra / Ryzen AI などのCPUなら自動で付きます。</div><div class="iv-note" style="font-weight:800;margin-top:12px">評価（空欄はスペックから自動）</div><div class="iv-grid">'
      + GRADE_KEYS.map(function (g) {
        var v = (p.grades || {})[g[0]] || "";
        return '<div class="iv-f"><label>' + g[1] + "</label>" + seg("g." + g[0], v, [["", "自動"], ["◎", "◎"], ["◯", "◯"], ["△", "△"]]) + "</div>";
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
    attachAC($('[data-k="cpu"]', s.body), srcList(function () { return uniq("cpu"); }));
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
    set("cpu", o.cpu); set("ram", o.ram); set("ssd", o.ssd); set("screen", o.screen); set("weight", o.weight);
    o.office && set("office", o.office);
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
  function defs() { try { return window.PC_HEAR ? window.PC_HEAR.defs() : []; } catch (e) { return []; } }
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
    STAGES.forEach(function (sg) {
      var qs = D.filter(function (d) { return d.st === sg[0]; });
      var cs = (c.custom || []).map(function (x, k) { return { x: x, k: k }; }).filter(function (o) { return (+o.x.st || 0) === sg[0]; });
      h += '<div class="iv-sec-h"><span>' + esc(sg[1]) + "</span><span>" + (qs.length + cs.length) + "問</span></div><div class=\"hv-list\">";
      qs.forEach(function (d) {
        var q = c.questions[d.id] || {}, off = q.hidden && d.id !== "sit";
        var nOpt = d.o.length, nOn = d.o.filter(function (o) { return !(q.opts && q.opts[o.v] && q.opts[o.v].hidden); }).length;
        var edited = (q.t && q.t.ja) || (q.h && q.h.ja) || (q.order && q.order.length) || Object.keys(q.opts || {}).some(function (k) { return q.opts[k].label && q.opts[k].label.ja; });
        var dyn = !d.o.length;
        h += '<div class="hq-row' + (off ? " off" : "") + '" data-hq="' + esc(d.id) + '" style="--i:' + Math.min(i++, 14) + '"><div class="hq-tx"><div class="nm">' + esc((q.t && q.t.ja) || j3(d.t) || "使い方に合わせた追加の質問") + '</div><div class="mt">'
          + (d.cond ? '<span class="tg">条件付きで表示</span>' : "") + (dyn ? '<span class="tg">内容は「使い方」の回答で変わります</span>' : '<span class="tg">選択肢 ' + nOn + "/" + nOpt + "</span>")
          + (edited ? '<span class="tg loc">文言を変更</span>' : "") + (d.id === "sit" ? '<span class="tg">必須</span>' : "") + "</div></div>"
          + '<label class="tgl" title="表示／非表示"><input type="checkbox" data-hq-on="' + esc(d.id) + '"' + (off ? "" : " checked") + (d.id === "sit" ? " disabled" : "") + '><span></span></label></div>';
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
      body: (LOCKED[id] ? '<div class="iv-note" style="background:#fef3c7;padding:10px;border-radius:12px;color:#92400e">' + LOCKED[id] + "</div>" : "")
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
      api.body.innerHTML = '<div class="iv-sec">どこで聞く？</div><div class="iv-f"><select id="hv-st">' + STAGES.map(function (sg) { return '<option value="' + sg[0] + '"' + (sg[0] === (+x.st || 0) ? " selected" : "") + ">" + esc(sg[1]) + "</option>"; }).join("") + "</select></div>"
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

<!-- ===== 相談アプリ: pc ===== -->
<style>
.pc-svg {
  width: 104px;
  height: 70px;
  display: block;
  margin: 0 auto;
}
.fr-card.sel .pc-svg {
  margin: 0;
}
@keyframes pcfl {
  0%,
  to {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
.pc-fl {
  animation: pcfl 2.4s ease-in-out infinite;
  animation-delay: var(--dl,0s);
}
@keyframes pctw {
  0%,
  to {
    opacity: .3;
  }
  50% {
    opacity: 1;
  }
}
.pc-tw {
  animation: pctw 1.6s ease-in-out infinite;
  animation-delay: var(--dl,0s);
}
@keyframes pcsp {
  to {
    transform: rotate(360deg);
  }
}
.pc-sp {
  transform-box: fill-box;
  transform-origin: center;
  animation: pcsp 3s linear infinite;
}
@keyframes pcsw {
  0%,
  to {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(20deg);
  }
}
.pc-sw {
  transform-origin: 32px 20px;
  animation: pcsw 2.2s ease-in-out infinite;
}
.pc-sel {
  border: 0;
  background: #f1f5f9;
  border-radius: 99px;
  padding: 6px 8px;
  font-size: .86rem;
  font-weight: 700;
  color: #475569;
}
.pc-qi {
  width: 88px;
  height: 66px;
  display: block;
  margin: 2px auto 6px;
}
.pc-mk {
  display: block;
  margin: 0 auto;
  width: 64px;
  max-width: 100%;
  height: auto;
  background: none;
}
.pc-mk.hot {
  animation: pcfl 1.6s ease-in-out infinite;
}
.pc-mini .pc-svg {
  width: 44px;
  height: 30px;
}
.pc-xe {
  display: grid;
  grid-template-columns: repeat(7,1fr);
  gap: 4px;
}
.pc-xm {
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 4px;
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
</style><div id="pc-app" class="fr-root" role="dialog" aria-label="PC"></div>
<script>
(function () {
  "use strict";
  const GROUPS = [
    {
      id: "chrome",
      name: {
        ja: "Chromebook（低価格・クラウド・Web特化）",
        en: "Chromebooks (Affordable & Cloud)",
        zh: "Chromebook系列（超高性价比·云端）"
      },
      desc: {
        ja: "Google環境中心。起動が速く、タブレット兼用や6〜9万円台の安価な選択肢。",
        en: "Google-centric, instant boot, 2-in-1 detachable or under 100k JPY.",
        zh: "以Google服务为主，开机极速，带平板二合一，6～9万日元预算首选。"
      }
    },
    {
      id: "entry_win",
      name: {
        ja: "10～15万円台・普段使いスタンダードWindows",
        en: "Standard Windows (100k-150k JPY)",
        zh: "10～15万日元 居家办公主流本"
      },
      desc: {
        ja: "15.6型中心。Core i5やRyzen 5、Office搭載で予算を抑えたい方に最適。",
        en: 'Mainly 15.6", Core i5/Ryzen 5, MS Office included under 150k JPY.',
        zh: "以15.6英寸为主，带Core i5/Ryzen 5及Office，控预算实用之选。"
      }
    },
    {
      id: "balance_14",
      name: { ja: "14型・大学生／仕事用バランスモバイル", en: "14-inch Balanced Laptop", zh: "14英寸 学生/职场全能轻薄本" },
      desc: {
        ja: "最重要ゾーン。16GB/512GB・約1.15〜1.4kgで持ち運びと性能をハイレベル両立。",
        en: "Key segment: 16GB/512GB, 1.15-1.4kg, balancing mobility and power.",
        zh: "主力黄金档：16G/512G、约1.15～1.4kg，便携与性能完美兼顾。"
      }
    },
    {
      id: "large_16",
      name: { ja: "16型・大画面快適ノート", en: "16-inch Large Screen Laptop", zh: "16英寸 大屏舒适视界办公本" },
      desc: {
        ja: "見やすい16型。DVD/CD内蔵機や1.6kg台の薄型大画面など据え置きメイン向け。",
        en: 'Comfortable 16" display. Includes optical drive or sleek 1.6kg models.',
        zh: "16英寸宽屏，包含光驱一体机及1.6kg轻薄大屏，适合居家常驻。"
      }
    },
    {
      id: "ultralight",
      name: {
        ja: "超軽量モバイル（約689g〜1kg未満）",
        en: "Ultra-Lightweight (689g to <1kg)",
        zh: "极致羽量级超轻本（约689g～1kg）"
      },
      desc: {
        ja: "富士通UH（約689g）、Dynabook G（約875g）、LAVIE SOL（約980g）。毎日持つ人の最高峰。",
        en: "Fujitsu UH (~689g), Dynabook G (~875g), LAVIE SOL (~980g). For daily carry.",
        zh: "富士通UH(约689g)、Dynabook G(约875g)、SOL(约980g)。每天携带首选。"
      }
    },
    {
      id: "premium_ai",
      name: { ja: "プレミアム＆AI / Copilot+ PC", en: "Premium & Next-Gen AI PC", zh: "旗舰高定 & AI新架构PC" },
      desc: {
        ja: "2.8K有機EL、Core Ultra / Ryzen AI、999gプレミアムVAIOなど妥協のない選択。",
        en: "2.8K OLED, Core Ultra/Ryzen AI, 999g VAIO SX-14R, Copilot+ PC.",
        zh: "2.8K OLED超清屏、酷睿Ultra/Ryzen AI芯片、999g VAIO SX-14R顶配。"
      }
    },
    {
      id: "desktop_fh",
      name: {
        ja: "一体型デスクトップ（23.8型大画面）",
        en: 'All-in-One Desktop (23.8")',
        zh: "一体机台式机（23.8英寸超大屏）"
      },
      desc: {
        ja: "持ち運ばずリビングや書斎に固定。TVチューナーや高音質スピーカー搭載。",
        en: 'Fixed home desktop with 23.8" display, TV tuner, and premium audio.',
        zh: "固定于家中客厅/书房，自带电视接收器与高品质音响。"
      }
    }
  ];
  // 在庫は上の「在庫データ」(#inventory-data) から読み込みます
  const PRODUCTS = window.NJ_INV ? window.NJ_INV.products() : [];
  const ACCS = [
    {
      name: { ja: "静音ワイヤレスマウス", en: "Silent Wireless Mouse", zh: "静音无线鼠标" },
      price: "¥2,980",
      desc: {
        ja: "講義室やカフェでクリック音が響かない定番品",
        en: "Silent click design for public spaces",
        zh: "图书馆与咖啡厅不扰人的静音款"
      }
    },
    {
      name: { ja: "衝撃吸収PCインナーケース (13.3〜14型)", en: 'Shockproof Sleeve (14")', zh: "防震内胆包 (14英寸)" },
      price: "¥2,480",
      desc: {
        ja: "通学・通勤リュックの圧迫や雨から本体をガード",
        en: "Protects against pressure and moisture in your backpack",
        zh: "放入书包防压防刮、防水滴溅"
      }
    },
    {
      name: { ja: "超高速ポータブル外付けSSD 1TB", en: "Portable Fast SSD 1TB", zh: "高速移动固态硬盘 1TB" },
      price: "¥12,800",
      desc: {
        ja: "写真整理や重要レポートの定期バックアップ用",
        en: "Ideal for regular backup of photos and coursework",
        zh: "照片、视频与重要作业日常备份"
      }
    }
  ];
  const TYPEINFO = {
    chrome: {
      l: "c",
      w: [
        "Web・動画・学習が中心で、とにかく安く済ませたい人",
        "Web, video and study on a tight budget",
        "以网页·视频·学习为主、预算有限的人"
      ],
      p: ["起動が速く管理が楽。タブレット兼用機もある", "Fast boot, easy upkeep, 2-in-1 options", "开机快、易维护，也有平板二合一"],
      c: [
        "Windowsソフトが使えず、Officeは別途",
        "No Windows apps; Office sold separately",
        "无法运行Windows软件，Office需另购"
      ]
    },
    entry_win: {
      l: "e",
      w: ["自宅中心でOfficeを使う普段使いの人", "Everyday home use with Office", "在家使用Office的日常用户"],
      p: [
        "10〜15万円台でOffice付き。画面が大きく見やすい",
        "¥100–150k with Office and a big screen",
        "10～15万日元含Office，屏幕大"
      ],
      c: ["1.6〜2.1kgと重く、持ち運びには不向き", "1.6–2.1kg: not for carrying around", "1.6～2.1kg偏重，不适合携带"]
    },
    balance_14: {
      l: "b",
      w: ["通学・通勤で毎日持ち歩く学生・社会人", "Students and commuters carrying daily", "每天携带的学生与上班族"],
      p: [
        "1.15〜1.4kgで性能も十分。迷ったらここ",
        "1.15–1.4kg with solid power — the safe choice",
        "1.15～1.4kg且性能充足，首选区间"
      ],
      c: [
        "超軽量機ほどの軽さや有機ELの贅沢さはない",
        "Not as light or luxurious as the top tiers",
        "不及超轻本轻，也没有OLED等高端配置"
      ]
    },
    large_16: {
      l: "l",
      w: ["家や職場で据え置き中心に使う人", "Mostly desk use at home or work", "主要在家或办公室固定使用"],
      p: ["16型の広い画面。DVD内蔵機も選べる", 'Roomy 16" screen; DVD-equipped option', "16英寸大屏，可选自带光驱款"],
      c: ["1.65〜2.2kgで持ち歩きには重い", "1.65–2.2kg is heavy for carrying", "1.65～2.2kg携带较重"]
    },
    ultralight: {
      l: "u",
      w: ["毎日持ち歩き、軽さを最優先する人", "Daily carriers who put weight first", "每天携带、把轻便放第一的人"],
      p: ["約689g〜980g。カバンが軽くなる", "About 689–980g — a lighter bag", "约689g～980g，包包更轻"],
      c: ["価格が25万円前後と高め", "Pricey at around ¥250k", "价格偏高，约25万日元"]
    },
    premium_ai: {
      l: "p",
      w: [
        "画質・AI機能・質感に妥協したくない人",
        "Those who won't compromise on display, AI and build",
        "在画质、AI与质感上不愿妥协的人"
      ],
      p: [
        "有機EL、Copilot+ PC、高級素材のボディ",
        "OLED, Copilot+ PC, premium materials",
        "OLED、Copilot+ PC、高级材质"
      ],
      c: ["20〜37万円と高価", "¥200–370k is a big spend", "价格20～37万日元，较高"]
    },
    desktop_fh: {
      l: "d",
      w: ["リビングや書斎で家族と共有する人", "Families sharing one PC at home", "在客厅或书房固定使用、全家共享"],
      p: [
        "23.8型の大画面で配線すっきり。TV機能付きも",
        '23.8" screen, tidy cabling, TV tuner option',
        "23.8英寸大屏、线路整洁，可选电视功能"
      ],
      c: ["持ち運べず、重さは約6kg", "Not portable at about 6kg", "无法携带，约6kg"]
    }
  };
  const CRIT = [
    [
      "portability",
      ["持ち運び", "Portability", "便携性"],
      "🎒",
      ["軽さ・サイズ。毎日持ち歩くなら最重要", "Weight and size — vital for daily carry", "重量与尺寸，每天携带时最重要"]
    ],
    [
      "perf",
      ["処理性能", "Performance", "处理性能"],
      "⚡",
      [
        "CPU・メモリの余裕。動画編集やExcel多用向け",
        "CPU/RAM headroom for editing or heavy Excel",
        "CPU与内存余量，适合剪辑和重度Excel"
      ]
    ],
    [
      "cost",
      ["コスパ", "Value", "性价比"],
      "💰",
      ["価格に対する性能・付属品のお得さ", "Performance and extras per yen", "价格对应的性能与附赠内容"]
    ],
    [
      "screen",
      ["画面の見やすさ", "Display", "屏幕观感"],
      "🖥️",
      ["画面の大きさ・見やすさ、作業領域の広さ", "Size and comfort of the display", "屏幕大小与舒适度"]
    ],
    [
      "battery",
      ["バッテリー", "Battery", "续航"],
      "🔋",
      ["外出先での電池持ち", "Battery life away from outlets", "外出时的续航"]
    ]
  ];
  const root = document.getElementById("pc-app");
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
  const yen = n => "¥" + n.toLocaleString("ja-JP");
  const AP = n => {
    const t = Math.round(n),
      r = Math.pow(10, Math.max(0, String(t).length - 2)),
      a = (Math.round(t / r) * r).toLocaleString("ja-JP");
    return L3(["約" + a + "円", "approx. ¥" + a, "约" + a + "日元"]);
  };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const short = s => (s || "").replace(/[（(][^）)]*[）)]/g, "").replace(/[？?]$/, "");
  const G5 = { "◎": 5, "◯": 3.5, "△": 2 };
  const has = (p, t) => (p.tags || []).indexOf(t) >= 0;
  const TYPES = GROUPS.map(g => ({ id: g.id, g: g, i: TYPEINFO[g.id] }));
  const typeOf = p => TYPES.filter(t => t.id === p.groupId)[0];
  const tName = t => P(t.g.name);
  const MAKERS = [
    {
      id: "Lenovo",
      key: ["Lenovo"],
      c: "#e2231a",
      ic: "L",
      n: L("Lenovo", "Lenovo", "联想"),
      t: L(
        "コスパと先進性。Chromebookから高性能機まで幅広い",
        "Great value and fresh tech, from Chromebooks to high-end",
        "性价比与先进性兼具，从Chromebook到高性能机型"
      )
    },
    {
      id: "Fujitsu",
      key: ["富士通"],
      c: "#d9001b",
      ic: "F",
      n: L("富士通", "Fujitsu", "富士通"),
      t: L(
        "国産で軽量。UHシリーズは約689gの超軽量",
        "Made in Japan and light; the UH series is about 689g",
        "日本制造且轻巧，UH系列约689g"
      )
    },
    {
      id: "NEC",
      key: ["NEC"],
      c: "#1d4ed8",
      ic: "N",
      n: L("NEC", "NEC", "NEC"),
      t: L(
        "LAVIEの安心感。DVD内蔵機や16型の大画面が豊富",
        "LAVIE reliability; DVD and 16-inch models",
        "LAVIE稳定可靠，有内置光驱与16英寸大屏机型"
      )
    },
    {
      id: "Dynabook",
      key: ["Dynabook"],
      c: "#0f766e",
      ic: "D",
      n: L("Dynabook", "Dynabook", "Dynabook"),
      t: L(
        "国産の堅実な作り。軽量Gシリーズ（約875g）が人気",
        "Solid Japanese build; the light G series (~875g) is popular",
        "日系扎实做工，轻量G系列（约875g）受欢迎"
      )
    },
    {
      id: "VAIO",
      key: ["VAIO"],
      c: "#111827",
      ic: "V",
      n: L("VAIO", "VAIO", "VAIO"),
      t: L(
        "デザインと作り込み。上質なノートを選びたい方に",
        "Design and craftsmanship for those who want a premium notebook",
        "设计与做工出众，适合想选高品质笔记本的人"
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
  (function syncMakers() {
    const PAL = { Apple: "#1d1d1f", HP: "#0096d6", Dell: "#007db8", ASUS: "#00539b", Acer: "#4c8c2b", Microsoft: "#5e5e5e", Panasonic: "#0041c0", MSI: "#e60012", Huawei: "#c7000b" };
    PRODUCTS.forEach(p => {
      if (p.maker && !MAKERS.some(m => m.key.indexOf(p.maker) >= 0))
        MAKERS.push({ id: p.maker, key: [p.maker], c: PAL[p.maker] || "#475569", ic: p.maker.charAt(0), n: [p.maker, p.maker, p.maker], t: ["", "", ""] });
    });
    for (let i = MAKERS.length - 1; i >= 0; i--)
      if (!PRODUCTS.some(p => MAKERS[i].key.indexOf(p.maker) >= 0)) MAKERS.splice(i, 1);
  })();
  const cName = c => L3(c[1]);
  const cDesc = c => L3(c[3]);
  /* ---------- text ---------- */
  const T = {
    back: L("← 一覧へ", "← Back to list", "← 返回列表"),
    title: L("ノジマ式 PC購入相談", "PC Shopping Concierge", "PC选购咨询"),
    pill: L(
      '該当<i id="pc-n">{0}</i>/{1}機種',
      '<i id="pc-n">{0}</i>/{1} match',
      '符合<i id="pc-n">{0}</i>/{1}款'
    ),
    prev: L("← ひとつ戻る", "← Back", "← 返回上一步"),
    step0: L("STEP 0 ・ まずは全体像", "STEP 0 · The big picture", "STEP 0 · 先看整体概况"),
    introH: L(
      "PCは、大きく<em>7つのタイプ</em>に分かれます",
      "PCs fall into <em>7 main types</em>",
      "电脑大致分为<em>7种类型</em>"
    ),
    introP: L(
      "タップでタイプごとの違いを確認できます。そのあと、まず<b>PCをお使いになる状況</b>をおたずねします。<b>これからPC環境を決める</b>方は、使い方→持ち歩き・"
        + "置き場の想定→譲れない1点の順に。<b>すでにPCをお持ち</b>の方は、使う場所の条件→使い方→譲れない1点の順に進め、店頭の{0}機種から3機種に絞ります。ご予算は、"
        + "暮らしに合う機種が見えてから最後におたずねします。",
      "Tap a card to see how the types differ. Then we first ask about <b>your situation</b>. If "
        + "you are <b>setting up from scratch</b>: how you use it → how and where you will carry or "
        + "place it → your one non-negotiable. If you <b>already own a PC</b>: where you use it → how "
        + "you use it → your one non-negotiable, narrowing {0} in-store models to 3. We ask about "
        + "budget last, once we see what fits your life.",
      "点击卡片查看各类型差异。之后先询问<b>您的使用情况</b>。<b>从头规划电脑环境</b>的顾客：使用方式→携带与摆放设想→不可让步的一点；<b>已有电脑</b>的顾客："
        + "使用场所条件→使用方式→不可让步的一点，从店内{0}款中筛出3款。预算在看清适合您的机型后最后询问。"
    ),
    mdl: L("機種", " models", "款"),
    who: L("こんな人に", "Best for", "适合人群"),
    pro: L("強み", "Strengths", "优势"),
    con: L("弱み", "Trade-offs", "弱点"),
    range: L("価格帯", "Price range", "价格区间"),
    gt: L("まず押さえる3つの違い", "3 key differences", "先看懂3个关键差异"),
    g1: L("OS", "OS", "系统"),
    g1d: L(
      "Windows＝何でも使える／ChromeOS＝Web中心で安価",
      "Windows = runs anything / ChromeOS = web-centric and cheap",
      "Windows＝通用全能／ChromeOS＝以网页为主、价格低"
    ),
    g2: L("重さ・画面", "Weight & screen", "重量与屏幕"),
    g2d: L(
      "13〜14型で1.2kg前後が持ち運び向き。15.6〜16型は据え置き寄り",
      '13–14" at about 1.2kg suits carrying; 15.6–16" is for desk use',
      "13～14英寸约1.2kg适合携带；15.6～16英寸更适合固定使用"
    ),
    g3: L("メモリ・SSD", "RAM & SSD", "内存与固态"),
    g3d: L(
      "長く使うなら16GB/512GBが安心。8GBは安さ優先向け",
      "16GB/512GB is safest for long use; 8GB suits tight budgets",
      "长期使用建议16GB/512GB；8GB适合预算优先"
    ),
    start: L("診断をはじめる →", "Start →", "开始诊断 →"),
    stage: {
      0: L("はじめに｜ご利用の状況", "Start | Your situation", "开始｜使用情况"),
      1: L(
        "使う場所の条件（持ち歩く？ サイズは？ 重さは？）",
        "Where you use it (carrying, size, weight)",
        "使用场所条件（携带？尺寸？重量？）"
      ),
      2: L(
        "使い方・暮らし方のヒアリング（回答で質問が変わります）",
        "Your lifestyle (questions adapt to your answers)",
        "使用方式访谈（问题会随回答变化）"
      ),
      3: L("最終｜譲れない1点とご予算", "Final | Your one non-negotiable and budget", "最终｜不可让步的一点与预算"),
      4: L("持ち歩き・置き場の想定", "How and where you will carry or place it", "携带与摆放设想")
    },
    recDefault: L("暮らし方から見たおすすめ", "Suggested for your lifestyle", "契合生活方式的推荐"),
    budWhy: L("最有力の「{0}」が{1}前後のため", "The best-fit “{0}” costs around {1}", "最契合的“{0}”约{1}"),
    budNote: L(
      "ここまでの回答に最も合う機種の価格帯は、<b>{0}〜{1}</b>が目安です。薄く色が付いた選択肢が、使い方に合う予算の目安です。",
      "Models that best fit your answers cost roughly <b>{0} – {1}</b>. The softly highlighted "
        + "option is the budget that fits your use.",
      "最契合您回答的机型价格约<b>{0}～{1}</b>。浅色高亮的选项是契合使用方式的预算参考。"
    ),
    xeT: L("🔎 いまの見立て：7つのタイプのうち…", "🔎 Current read: which of the 7 types…", "🔎 目前判断：7种类型中…"),
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
    upRam: L(
      "長く使いたい・重い作業をするなら、メモリ16GB・SSD512GB以上のクラスが安心です。8GBは数年後に動作が重く感じやすくなります。",
      "For long use or heavier work, choose 16GB RAM / 512GB SSD or more; 8GB tends to feel slow after a few years.",
      "想长期使用或做较重的工作，建议内存16GB、固态512GB以上；8GB几年后容易觉得卡顿。"
    ),
    upVid: L(
      "動画編集をするなら、メモリ32GBの上位クラスに余裕があります。",
      "For video editing, a 32GB RAM class gives comfortable headroom.",
      "做视频剪辑的话，32GB内存的高一档机型余量更充足。"
    ),
    upLight: L(
      "毎日持ち歩くなら、1.2kgより軽い機種を一度持ってみてください。差は毎日の負担として積み重なります。",
      "If you carry it every day, try holding a model lighter than 1.2kg; the difference adds up daily.",
      "若每天携带，建议亲手试试比1.2kg更轻的机型，差异会日积月累。"
    ),
    stockNote: L(
      "在庫・価格は日々変動します。表示の価格は上2桁の目安です。ご購入前に、必ず店頭スタッフで最新の在庫・価格をご確認ください。",
      "Stock and prices change daily. Prices shown are rounded estimates. Please confirm current "
        + "stock and price with our staff before buying.",
      "库存与价格每日变动。所示价格为取整后的参考值，购买前请务必向店员确认最新库存与价格。"
    )
  };
  const RS = {
    win: L(
      "Windowsソフトが使えません（Chromebook）",
      "Cannot run Windows software (Chromebook)",
      "无法运行Windows软件（Chromebook）"
    ),
    heavy: L("重さ{0}kgが許容を超えています", "{0}kg exceeds your weight limit", "{0}kg超出重量上限"),
    fixedonly: L(
      "約{0}kgの据え置き専用で、持ち運べません",
      "About {0}kg: desktop only, not portable",
      "约{0}kg，仅限固定使用，无法携带"
    ),
    size: L("画面{0}が希望サイズ外です", "Screen {0} is outside your preferred size", "屏幕{0}不在期望尺寸内"),
    nodrive: L("光学ドライブが内蔵されていません", "No built-in optical drive", "没有内置光驱"),
    ramng: L(
      "制作・開発にはメモリ{0}GBでは足りません",
      "{0}GB RAM is not enough for creative or dev work",
      "{0}GB内存不足以应对创作·开发"
    ),
    ramlong: L(
      "長く使うにはメモリ{0}GBは少なめです",
      "{0}GB RAM is on the low side for long use",
      "{0}GB内存对长期使用偏少"
    ),
    ramvid: L(
      "動画編集にはメモリ{0}GBだと余裕が少なめです",
      "{0}GB RAM leaves little headroom for video editing",
      "做视频剪辑时{0}GB内存余量偏少"
    ),
    ramwork: L(
      "重めの作業にはメモリ{0}GBだと余裕が少なめです",
      "{0}GB RAM leaves little headroom for heavier work",
      "较重的工作中{0}GB内存余量偏少"
    ),
    batt: L(
      "バッテリー評価が低めです（1日外で使う用途に注意）",
      "Battery rating is low (careful for all-day use away from outlets)",
      "续航评价偏低（需注意全天外出使用）"
    ),
    office: L(
      "Officeが付属しません（別途購入が必要）",
      "Office is not included (sold separately)",
      "不含Office（需另购）"
    ),
    light: L("{0}kgと軽量", "Light at {0}kg", "仅{0}kg轻巧"),
    drive: L("光学ドライブ内蔵", "Built-in optical drive", "内置光驱"),
    ramok: L("メモリ{0}GBで余裕がある", "{0}GB RAM gives headroom", "{0}GB内存余量充足"),
    officeok: L("Office搭載", "Office included", "含Office"),
    brand: L("ご希望のブランド傾向に合致", "Matches your brand preference", "符合品牌偏好"),
    ai: L("AI機能（Copilot+級）に対応した世代", "Latest AI generation (Copilot+ class)", "新一代AI（Copilot+级）"),
    oled: L("有機ELで画面がとてもきれい", "OLED for a beautiful display", "OLED屏幕非常漂亮"),
    tv: L("テレビ機能付きでリビング向き", "TV features suit the living room", "带电视功能，适合客厅"),
    fit: L("使い方に合うタイプ", "Fits your type of use", "契合您的使用类型"),
    over: L("予算（{0}）を超えています", "Over your budget ({0})", "超出预算（{0}）")
  };
  const NGK = {
    k_win: L("Windowsソフト", "Windows software", "Windows软件"),
    k_weight: L("重さ", "weight", "重量"),
    k_size: L("画面サイズ", "screen size", "屏幕尺寸"),
    k_drive: L("光学ドライブ", "optical drive", "光驱"),
    k_ram: L("メモリ", "RAM", "内存")
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
  const vis = q => !(hq(q).hidden && q.id !== "sit") && (!q.show || q.show());
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
  const carryIs = (...a) => a.indexOf(ans("carry")) >= 0;
  QS.push(
    {
      id: "sit",
      st: 0,
      t: L("まず、PCをお使いになる状況を教えてください", "First, tell us about your situation", "请先告诉我们您的使用情况"),
      h: L(
        "これからPC環境を決める方は「使い方→持ち歩き・置き場の想定→譲れない1点」の順に、すでにPCをお持ちの方は「使う場所の条件→使い方→譲れない1点」の順におたずねします。",
        "If you are setting up from scratch, we ask how you use it, then how and where you will "
          + "carry or place it, then your one non-negotiable. If you already own a PC, we start with "
          + "where you use it, then how you use it, then your one non-negotiable.",
        "尚未确定电脑使用环境的顾客：使用方式→携带与摆放设想→不可让步的一点；已有电脑的顾客：使用场所条件→使用方式→不可让步的一点。"
      ),
      o: [
        O(
          L(
            "これからPC環境を決める（新生活・初めてのPC・使い方はこれから）",
            "Setting up from scratch (new life, first PC, use not decided)",
            "正在规划电脑环境（新生活·首台电脑·用法未定）"
          ),
          "new"
        ),
        O(L("今のPCを買い替える", "Replacing my current PC", "更换现有电脑"), "repl"),
        O(
          L("PCは持っていて、2台目・サブ機を追加したい", "I have a PC and want a second / sub PC", "已有电脑，想再买第2台/副机"),
          "add"
        )
      ]
    },
    {
      id: "carry",
      st: 1,
      stNew: 4,
      t: L("普段、PCを持ち歩く頻度は？", "How often will you carry your PC around?", "平时携带电脑的频率？"),
      tn: L("PCを持ち歩く機会は、ありそうですか？", "Do you expect to carry your PC around?", "您预计会经常携带电脑外出吗？"),
      h: L(
        "持ち歩くかどうかで、重さ・バッテリー・画面サイズの考え方が大きく変わります。回答によってこのあとの質問が変わります。",
        "Whether you carry it changes how weight, battery and screen size matter. Your answer "
          + "changes the next questions.",
        "是否携带会大幅改变对重量、续航和屏幕尺寸的考量。您的回答会改变后续问题。"
      ),
      o: [
        O(L("毎日（通学・通勤・カフェなど）", "Every day (school, commute, cafés)", "每天（上学·通勤·咖啡馆等）"), "daily"),
        O(
          L(
            "週に1〜2回（出張・ゼミ・外出先で作業）",
            "1–2 times a week (trips, seminars, working out)",
            "每周1～2次（出差·研讨·外出办公）"
          ),
          "weekly"
        ),
        O(
          L("ほぼ家の中（部屋やリビングを移動する程度）", "Mostly at home (moving between rooms)", "基本在家（在房间或客厅间移动）"),
          "room"
        ),
        O(L("完全に据え置き（机や台から動かさない）", "Stays put on a desk or stand", "完全固定（放在桌上不移动）"), "fixed")
      ]
    },
    {
      id: "size",
      st: 1,
      stNew: 4,
      t: L("画面サイズの希望は？", "What screen size do you prefer?", "对屏幕尺寸有什么要求？"),
      tn: L("画面サイズは、どのくらいが良さそうですか？", "What screen size sounds right?", "您觉得多大的屏幕比较合适？"),
      h: L(
        "小さいほど軽く、大きいほど見やすくなります。持ち歩く頻度に合わせて、選べるサイズを絞っています。",
        "Smaller is lighter; larger is easier to see. We narrow the choices based on how often you carry it.",
        "越小越轻，越大越清晰。会根据携带频率缩小可选尺寸。"
      ),
      o: () => {
        const c = ans("carry");
        const all = {
          compact: O(
            L('コンパクト重視（13.3型以下）', 'Compact (13.3" or smaller)', "紧凑优先（13.3英寸以下）"),
            "compact"
          ),
          std14: O(
            L("見やすさと軽さの両立（14型前後）", 'Balanced view and weight (around 14")', "兼顾清晰与轻便（约14英寸）"),
            "std14"
          ),
          large16: O(
            L("大画面で作業しやすい（15.6〜16型）", 'Big screen for comfort (15.6–16")', "大屏更好工作（15.6～16英寸）"),
            "large16"
          ),
          desktop: O(
            L("超大画面（23.8型の一体型デスクトップ）", 'Extra large (23.8" all-in-one desktop)', "超大屏（23.8英寸一体机）"),
            "desktop"
          ),
          any: O(L("こだわらない", "No preference", "无特别要求"), "any")
        };
        const k = c === "daily"
          ? ["compact", "std14", "any"]
          : c === "weekly"
            ? ["compact", "std14", "large16", "any"]
            : c === "room"
              ? ["std14", "large16", "any"]
              : c === "fixed"
                ? ["large16", "desktop", "any"]
                : ["compact", "std14", "large16", "desktop", "any"];
        return k.map(x => all[x]);
      }
    },
    {
      id: "wt",
      st: 1,
      stNew: 4,
      show: () => carryIs("daily", "weekly"),
      t: L(
        "持ち歩くときの「本体の重さ」は、どこまで許容できますか？",
        "How heavy can the PC be when you carry it?",
        "携带时能接受多重的机身？"
      ),
      tn: L(
        "持ち歩くとしたら、「本体の重さ」はどこまで許容できそうですか？",
        "If you carry it, how heavy can it be?",
        "如果携带，您能接受多重的机身？"
      ),
      h: L(
        "バッグの中の重さは毎日だと効いてきます。1kg未満は約689g〜980gの超軽量機が対象です。",
        "Weight adds up when carried daily. Under 1kg means ultra-light models of about 689–980g.",
        "每天携带时重量影响明显。1kg以下为约689g～980g的超轻机型。"
      ),
      o: [
        O(
          L(
            "とにかく軽く！1kg未満（約689g〜980g）",
            "As light as possible: under 1kg (about 689–980g)",
            "以轻为先！1kg以下（约689g～980g）"
          ),
          "sub1"
        ),
        O(
          L(
            "バッグに入れて苦にならない程度（約1.15〜1.4kg）",
            "Comfortable in a bag (about 1.15–1.4kg)",
            "放包里不觉得累（约1.15～1.4kg）"
          ),
          "mid"
        ),
        O(
          L(
            "持ち歩きは少ないので1.6〜2kg前後でもOK",
            "Fine with 1.6–2kg since I carry it rarely",
            "不常携带，1.6～2kg也可以"
          ),
          "up"
        )
      ]
    },
    {
      id: "drive",
      st: 1,
      stNew: 4,
      t: L(
        "CD・DVD・ブルーレイ（光ディスク）は使いますか？",
        "Do you use CDs, DVDs or Blu-ray discs?",
        "会使用CD/DVD/蓝光光盘吗？"
      ),
      tn: L(
        "CD・DVD・ブルーレイ（光ディスク）を使う予定はありますか？",
        "Do you plan to use CDs, DVDs or Blu-ray discs?",
        "打算使用CD/DVD/蓝光光盘吗？"
      ),
      h: L(
        "光学ドライブを内蔵したモデルは多くありません。たまに使う程度なら外付けでも対応できます。",
        "Few models include an optical drive. If you only need one occasionally, an external drive works.",
        "内置光驱的机型不多。偶尔使用的话，外接光驱也可以。"
      ),
      o: [
        O(L("本体に内蔵していてほしい（DVDまたはBD）", "I want it built in (DVD or BD)", "希望内置（DVD或蓝光）"), "need"),
        O(
          L("たまに使う程度。必要なら外付けで対応", "Only occasionally; an external drive is fine", "偶尔使用，需要时外接即可"),
          "ext"
        ),
        O(L("使わない", "I don't use discs", "不使用"), "none")
      ]
    },
    {
      id: "win",
      st: 1,
      stNew: 4,
      t: L("使うソフトは、Windows用のソフトが必要ですか？", "Do you need Windows software?", "需要使用Windows软件吗？"),
      tn: L(
        "学校や仕事で、Windows用のソフトを使う予定はありますか？",
        "Will you use Windows software for school or work?",
        "学校或工作中会使用Windows软件吗？"
      ),
      h: L(
        "Chromebookは安価で起動も速い反面、Windows用ソフトやOfficeのデスクトップ版は使えません。ネットや動画が中心ならChromebookも候補に入ります。",
        "Chromebooks are cheap and boot fast but cannot run Windows apps or desktop Office. If you "
          + "mostly browse and watch video, they are a candidate.",
        "Chromebook便宜且开机快，但无法运行Windows软件和桌面版Office。如以上网和视频为主，也可作为候选。"
      ),
      o: [
        O(
          L(
            "必要（学校・会社のソフトやOfficeを使う）",
            "Yes (school or work software, or Office)",
            "需要（学校/公司软件或Office）"
          ),
          "needwin"
        ),
        O(
          L(
            "不要（ネット・動画・Googleのサービス中心でOK）",
            "No (web, video and Google services are enough)",
            "不需要（以上网·视频·Google服务为主即可）"
          ),
          "webok"
        )
      ]
    },
    {
      id: "use",
      st: 2,
      t: L("主に、どんな使い方をしますか？", "What will you mainly use it for?", "主要用来做什么？"),
      h: L(
        "回答によって、このあとの質問が変わります。いちばん時間が長い使い方を選んでください。",
        "Your answer changes the next questions. Pick the use that takes the most time.",
        "回答会改变后续问题。请选择使用时间最长的用途。"
      ),
      o: [
        O(
          L("学校・レポート・Office（学生）", "School, reports and Office (student)", "学校·报告·Office（学生）"),
          "student"
        ),
        O(
          L(
            "在宅勤務・仕事（Excelやオンライン会議）",
            "Work and remote work (Excel, online meetings)",
            "居家办公·工作（Excel与线上会议）"
          ),
          "work"
        ),
        O(
          L(
            "ネット・動画・SNS・家計簿などの日常使い",
            "Everyday: web, video, social media, household accounts",
            "网页·视频·社交·家庭记账等日常使用"
          ),
          "casual"
        ),
        O(
          L("写真・動画編集、プログラミング、ゲーム", "Photo/video editing, programming, gaming", "照片·视频剪辑、编程、游戏"),
          "creative"
        ),
        O(
          L(
            "リビングで家族みんなで使う（テレビ兼用も）",
            "Shared by the family in the living room (TV too)",
            "在客厅全家共用（可兼作电视）"
          ),
          "family"
        )
      ]
    },
    {
      id: "why",
      st: 2,
      show: () => ST.a.sit === "repl" || ST.a.sit === "add",
      t: () => ST.a.sit === "add"
        ? L("2台目のPCは、どんな役割にしたいですか？", "What role will the second PC play?", "第2台电脑想承担什么角色？")
        : L("今のPCを買い替える、一番の理由は？", "What is the main reason for replacing your PC?", "更换电脑的最主要原因是？"),
      h: L(
        "理由によって、このあとの質問が変わります。",
        "Your reason changes the questions that follow.",
        "原因不同，后面的问题也会变化。"
      ),
      o: () => ST.a.sit === "add"
        ? [
          O(L("外出・持ち運び用にもう1台", "One more for going out and carrying", "再买一台外出携带用"), "mobile"),
          O(L("家での作業用にもう1台", "One more for work at home", "再买一台在家办公用"), "home"),
          O(L("お子さまの学習用", "For my child's study", "孩子学习用"), "kids"),
          O(L("仕事と私用を分けたい", "Separate work from personal use", "工作与私人分开"), "split")
        ]
        : [
          O(L("壊れた・古くなった・サポートが切れる", "Broken, old or losing support", "坏了·用旧了·即将终止支持"), "old"),
          O(L("動作が遅い・固まる", "It is slow or freezes", "运行慢·卡顿"), "slow"),
          O(L("バッテリーがもたない", "The battery does not last", "电池不耐用"), "battery"),
          O(L("重くて持ち運びがつらい", "Too heavy to carry", "太重，携带吃力"), "heavy"),
          O(L("画面が小さい・見づらい", "The screen is too small or hard to see", "屏幕太小·看不清"), "small")
        ]
    },
    {
      id: "fu",
      st: 2,
      show: () => !!ans("use"),
      t: () => ({
        student: L(
          "授業や課題は、どんな内容が中心ですか？",
          "What does your coursework mostly involve?",
          "课程与作业主要是什么内容？"
        ),
        work: L("お仕事では、どんな使い方が多いですか？", "How do you mostly use it at work?", "工作中主要怎么用？"),
        casual: L("日常使いでは、どんなことが多いですか？", "What do you do most often day to day?", "日常使用中最常做什么？"),
        creative: L("いちばん重い作業はどれですか？", "Which is your heaviest task?", "最重的工作是哪一项？"),
        family: L(
          "リビングでは、どんな場面で使いますか？",
          "What will you use it for in the living room?",
          "在客厅主要用于哪些场景？"
        )
      })[ans("use")],
      h: () => ({
        student: L(
          "レポート中心ならスペックは控えめで足ります。プログラミングや画像処理が必要なら、余裕のある性能を選びます。",
          "Reports need modest specs; programming or image work needs more headroom.",
          "以报告为主则配置适中即可；需要编程或图像处理则要更高性能。"
        ),
        work: L(
          "大きなExcelや複数ソフトの同時利用は、処理性能とメモリに余裕が必要です。オンライン会議が多いなら、画面とバッテリーが効きます。",
          "Large Excel files or many apps at once need CPU and RAM headroom. Frequent online meetings "
            + "reward a good display and battery.",
          "大型Excel或同时运行多个软件，需要处理器与内存余量；频繁线上会议则看重屏幕与续航。"
        ),
        casual: L(
          "軽い用途ならスペックを上げすぎず、価格を抑えたほうが満足度が高くなります。",
          "For light use, avoiding over-spec keeps cost down and satisfaction high.",
          "轻度使用无需过高配置，控制价格更划算。"
        ),
        creative: L(
          "動画編集やゲームはCPUとメモリに余裕が必要です。写真編集は画面の見やすさも大切です。",
          "Video editing and gaming need CPU and RAM headroom; photo editing also benefits from a good display.",
          "视频剪辑与游戏需要处理器和内存余量；照片编辑还很看重屏幕。"
        ),
        family: L(
          "テレビ機能付きの一体型や、見やすい大画面モデルが合うかを判断します。",
          "We judge whether an all-in-one with TV features or a large-screen model fits.",
          "判断带电视功能的一体机或大屏机型是否合适。"
        )
      })[ans("use")],
      o: () => ({
        student: [
          O(
            L("レポート・Office・オンライン授業が中心", "Reports, Office and online classes", "以报告·Office·线上课程为主"),
            "lite"
          ),
          O(
            L(
              "理系の実験データ・CAD・プログラミング・画像処理",
              "Lab data, CAD, programming or image processing",
              "理科数据·CAD·编程·图像处理"
            ),
            "tech"
          ),
          O(
            L(
              "通学が長く、授業から課題まで1日中使う",
              "Long commutes and all-day use from class to homework",
              "通学路程长，从上课到作业整天使用"
            ),
            "long"
          )
        ],
        work: [
          O(
            L(
              "Word・Excel・PowerPointなどの資料作成が中心",
              "Documents with Word, Excel and PowerPoint",
              "以Word·Excel·PowerPoint制作资料为主"
            ),
            "doc"
          ),
          O(L("Web会議（Teams・Zoom）が多い", "Many Teams / Zoom meetings", "Teams/Zoom线上会议很多"), "meet"),
          O(
            L(
              "大きなExcel・複数画面・業務ソフトを同時に使う",
              "Big Excel files, multiple screens, business apps at once",
              "大型Excel·多屏·同时运行业务软件"
            ),
            "heavy"
          )
        ],
        casual: [
          O(L("ネット閲覧・メール・動画視聴", "Browsing, email and video", "上网·邮件·看视频"), "web"),
          O(
            L(
              "スマホ写真の整理・年賀状・家計簿など",
              "Organizing phone photos, New Year cards, household accounts",
              "整理手机照片·贺年卡·家庭记账等"
            ),
            "photo"
          ),
          O(
            L("オンライン学習・資格の勉強・読書", "Online learning, certification study, reading", "线上学习·考证·阅读"),
            "learn"
          )
        ],
        creative: [
          O(L("写真の現像・イラスト・デザイン", "Photo editing, illustration, design", "照片后期·插画·设计"), "photo"),
          O(L("動画編集・配信", "Video editing and streaming", "视频剪辑·直播"), "video"),
          O(L("プログラミング・開発", "Programming and development", "编程·开发"), "code"),
          O(L("PCゲーム", "PC gaming", "电脑游戏"), "game")
        ],
        family: [
          O(
            L(
              "テレビ視聴・録画・動画を大画面で楽しむ",
              "Watching TV, recording and video on a big screen",
              "大屏看电视·录制·视频"
            ),
            "tv"
          ),
          O(L("お子さまの学習や家族の調べもの", "Children's study and family look-ups", "孩子学习与家人查资料"), "kids"),
          O(
            L(
              "写真整理・年賀状・家計簿など家事の延長",
              "Photos, New Year cards and household accounts",
              "整理照片·贺年卡·家庭记账等家务延伸"
            ),
            "photo"
          )
        ]
      })[ans("use")]
    },
    {
      id: "years",
      st: 2,
      t: L("このPCは、何年くらい使いたいですか？", "How many years do you want to use this PC?", "希望这台电脑用几年？"),
      h: L(
        "長く使うほど、メモリやSSDの余裕が効いてきます。16GB/512GBが目安です。",
        "The longer you keep it, the more RAM and SSD headroom matter. 16GB/512GB is a good guide.",
        "使用越久，内存与固态硬盘的余量越重要。16GB/512GB为参考。"
      ),
      o: [
        O(L("3年くらい（使い方が変わるかも）", "About 3 years (my needs may change)", "约3年（用法可能改变）"), "short"),
        O(L("4〜5年くらい", "About 4–5 years", "约4～5年"), "mid"),
        O(L("できるだけ長く（6年以上）", "As long as possible (6+ years)", "尽可能长久（6年以上）"), "long")
      ]
    },
    {
      id: "batt",
      st: 2,
      stNew: 4,
      show: () => carryIs("daily", "weekly"),
      t: L("外出先で、コンセントなしで使う時間は？", "How long will you use it away from an outlet?", "外出时不接电源使用多久？"),
      tn: L(
        "持ち歩くとしたら、コンセントなしで使う時間は？",
        "If you carry it, how long will you use it without an outlet?",
        "如果携带，不接电源会使用多久？"
      ),
      h: L(
        "実際の使用では、公称のバッテリー時間より短くなることが多いです。",
        "In real use, battery life is often shorter than the rated time.",
        "实际使用时，续航通常比标称时间短。"
      ),
      o: [
        O(L("1〜2時間（カフェや移動中に少し）", "1–2 hours (a café or commute)", "1～2小时（咖啡馆或通勤途中）"), "short"),
        O(
          L("半日（授業・会議・出張で数時間）", "Half a day (classes, meetings, trips)", "半天（上课·会议·出差数小时）"),
          "half"
        ),
        O(L("1日充電なしで使いたい", "All day without charging", "想一整天不充电"), "all")
      ]
    },
    {
      id: "ms",
      st: 2,
      show: () => ans("win") !== "webok",
      t: L(
        "Word・Excel・PowerPointは必要ですか？",
        "Do you need Word, Excel and PowerPoint?",
        "需要Word·Excel·PowerPoint吗？"
      ),
      h: L(
        "Windowsモデルの多くはOffice搭載です（詳細は店頭でご確認ください）。すでにMicrosoft 365などを契約中なら、Office付きは重視しなくて大丈夫です。",
        "Most Windows models include Office (confirm details in store). If you already subscribe to "
          + "Microsoft 365, bundled Office matters less.",
        "多数Windows机型含Office（详情请在店内确认）。若已订阅Microsoft 365等，则无需特别看重自带Office。"
      ),
      o: [
        O(L("Office付きがいい（新しく用意したい）", "I want Office included", "希望含Office（想新购）"), "need"),
        O(
          L(
            "すでに契約・持っている（Microsoft 365など）",
            "I already have it (Microsoft 365 etc.)",
            "已订阅/已拥有（Microsoft 365等）"
          ),
          "have"
        ),
        O(
          L("Officeは使わない・無料のソフトで十分", "Not needed; free tools are enough", "不使用Office，免费软件即可"),
          "none"
        )
      ]
    },
    {
      id: "ai",
      st: 2,
      show: () => ["work", "creative", "family"].indexOf(ans("use")) >= 0
        || ans("years") === "long",
      t: L(
        "最新のAI機能や、映像のきれいさには興味がありますか？",
        "Are you interested in the latest AI features or a more beautiful display?",
        "对最新AI功能或更漂亮的屏幕感兴趣吗？"
      ),
      h: L(
        "Copilot+ PC（AI機能）や有機EL（OLED）搭載モデルは魅力が大きい一方、価格も上がります。",
        "Copilot+ PCs (AI features) and OLED models are attractive but cost more.",
        "Copilot+ PC（AI功能）和OLED机型魅力大，但价格也更高。"
      ),
      o: [
        O(
          L(
            "AI機能・最新チップ（Core Ultra / Ryzen AI）を体験したい",
            "I want AI features and the latest chips (Core Ultra / Ryzen AI)",
            "想体验AI功能与最新芯片（Core Ultra / Ryzen AI）"
          ),
          "ai"
        ),
        O(
          L("映画や写真がきれいな有機ELがいい", "I want an OLED for movies and photos", "想要影片与照片更漂亮的OLED屏"),
          "oled"
        ),
        O(L("普通の液晶で十分", "A regular LCD is fine", "普通液晶屏即可"), "std")
      ]
    },
    {
      id: "brand",
      st: 2,
      t: L("メーカーやサポートのこだわりは？", "Any preference on maker or support?", "对品牌或售后有偏好吗？"),
      h: L(
        "国内メーカーは日本語サポートの安心感、Lenovoは価格と先進性、VAIOはデザインと作り込みが特長です。",
        "Japanese makers offer local support, Lenovo offers value and fresh tech, and VAIO offers "
          + "design and build quality.",
        "日系品牌有本土售后，联想性价比高且先进，VAIO设计与做工出色。"
      ),
      o: [
        O(
          L(
            "国内メーカー（富士通・NEC・Dynabook）が安心",
            "Japanese makers (Fujitsu / NEC / Dynabook)",
            "更信赖日本品牌（富士通·NEC·Dynabook）"
          ),
          "domestic"
        ),
        O(L("VAIOのデザインや品質が好き", "I like VAIO's design and quality", "喜欢VAIO的设计与品质"), "vaio"),
        O(
          L(
            "価格や先進性重視で、Lenovoなど海外大手でもOK",
            "Value and tech first; Lenovo is fine",
            "重视价格与先进性，联想等海外大厂也可以"
          ),
          "global"
        ),
        O(L("特にこだわらない", "No preference", "没有特别偏好"), "any")
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
      o: CRIT.map(
        c => O(
          L(
            {
              portability: "持ち運びやすさ（軽さ・サイズ）",
              perf: "動作の快適さ（処理性能）",
              cost: "価格の安さ・コスパ",
              screen: "画面の見やすさ・広さ",
              battery: "バッテリーの持ち"
            }[c[0]],
            {
              portability: "Easy to carry (weight and size)",
              perf: "Smooth performance",
              cost: "Low price and value",
              screen: "A clear, roomy display",
              battery: "Battery life"
            }[c[0]],
            {
              portability: "便于携带（轻与小）",
              perf: "运行流畅（处理性能）",
              cost: "价格低·性价比",
              screen: "屏幕清晰宽敞",
              battery: "续航持久"
            }[c[0]]
          ),
          c[0]
        )
      )
    },
    {
      id: "budget",
      st: 3,
      t: L("ご予算の上限は？", "What is your maximum budget?", "预算上限是多少？"),
      h: L(
        "ここまでのお話で、使い方に合う機種が見えてきました。高価格帯の方が合う場合もあるため、ご予算は最後におたずねします。予算を少し超えるおすすめも別枠でご案内します。",
        "We now know how you use it. A pricier model may suit you better, so we ask about budget "
          + "last, and also show a few worthwhile step-up options.",
        "已了解您的使用方式。更高价位的机型可能更适合，所以最后才询问预算，并另行推荐值得加预算的机型。"
      ),
      o: [
        O(L("〜10万円", "Up to ¥100,000", "10万日元以内"), 1e5),
        O(L("〜15万円", "Up to ¥150,000", "15万日元以内"), 15e4),
        O(L("〜20万円", "Up to ¥200,000", "20万日元以内"), 2e5),
        O(L("〜30万円", "Up to ¥300,000", "30万日元以内"), 3e5),
        O(L("予算にこだわらない", "No budget limit", "不限预算"), 1e9)
      ]
    }
  );
  /* ---------- 店舗オリジナルの質問（おすすめ順位には影響せず、スタッフ確認シートに表示） ---------- */
  window.PC_HEAR = {
    defs: () => QS.filter(q => !q.custom).map(q => {
      let o = [];
      try { o = val(q.o).map(x => ({ v: x[1], l: x[0] })); } catch (e) {}
      if (q.id === "size") o = [["compact", L('コンパクト重視（13.3型以下）', 'Compact (13.3" or smaller)', "紧凑优先（13.3英寸以下）")], ["std14", L("見やすさと軽さの両立（14型前後）", 'Balanced view and weight (around 14")', "兼顾清晰与轻便（约14英寸）")], ["large16", L("大画面で作業しやすい（15.6〜16型）", 'Big screen for comfort (15.6–16")', "大屏更好工作（15.6～16英寸）")], ["desktop", L("超大画面（23.8型の一体型デスクトップ）", 'Extra large (23.8" all-in-one desktop)', "超大屏（23.8英寸一体机）")], ["any", L("こだわらない", "No preference", "无特别要求")]].map(x => ({ v: x[0], l: x[1] }));
      return { id: q.id, st: q.st, stNew: q.stNew, cond: !!q.show, t: val(q.t), h: val(q.h), o: o };
    })
  };
  (HC.custom || []).forEach(c => {
    if (!c || !c.id || !c.t || !c.t.ja || !(c.o || []).length || c.hidden) return;
    const st = +c.st || 0;
    QS.push({
      id: "x_" + c.id, custom: true, st: st, stNew: st === 1 ? 4 : undefined,
      t: tx3(c.t), h: tx3(c.h) || ["", "", ""],
      o: c.o.filter(x => x && x.label && x.label.ja).map((x, i) => O(tx3(x.label), "o" + i))
    });
  });
  /* ---------- evaluation ---------- */
  function hear(p) {
    const ng = [], wn = [], ok = [];
    const c = ans("carry"),
      sz = ans("size"),
      w = ans("wt"),
      d = ans("drive"),
      win = ans("win"),
      u = ans("use"),
      f = ans("fu"),
      yr = ans("years"),
      ms = ans("ms"),
      b = ans("batt"),
      sc = p.screen,
      wt = p.weight;
    if (win === "needwin" && p.groupId === "chrome")
      ng.push({ k: "k_win", r: "win", a: [] });
    if (w === "sub1" && wt >= 1 || w === "mid" && wt > 1.5 || w === "up" && wt > 2.3)
      ng.push({ k: "k_weight", r: "heavy", a: [wt] });
    else if (c && c !== "fixed" && wt > 3)
      ng.push({ k: "k_weight", r: "fixedonly", a: [wt] });
    else if (wt <= 1.3 && (c === "daily" || c === "weekly"))
      ok.push({ r: "light", a: [wt] });
    if (
      sz === "compact" && sc > 14.1
        || sz === "std14" && (sc > 15 || sc < 13)
        || sz === "large16" && sc < 15
        || sz === "desktop" && sc < 20
    )
      ng.push({ k: "k_size", r: "size", a: [sc + L3(['型', '"', '寸'])] });
    if (d === "need") {
      if (has(p, "dvd") || has(p, "bd"))
        ok.push({ r: "drive", a: [] });
      else
        ng.push({ k: "k_drive", r: "nodrive", a: [] });
    }
    if (u === "creative" && p.ram < 16)
      ng.push({ k: "k_ram", r: "ramng", a: [p.ram] });
    else if (u === "creative" && f === "video" && p.ram < 32)
      wn.push({ r: "ramvid", a: [p.ram] });
    else if ((u === "work" && f === "heavy" || u === "student" && f === "tech") && p.ram < 16)
      wn.push({ r: "ramwork", a: [p.ram] });
    else if (yr === "long" && p.ram < 16)
      wn.push({ r: "ramlong", a: [p.ram] });
    else if (p.ram >= 16 && (yr === "mid" || yr === "long"))
      ok.push({ r: "ramok", a: [p.ram] });
    if (b === "all" && p.grades.battery === "△")
      wn.push({ r: "batt", a: [] });
    if (ms === "need") {
      if (p.office === "搭載")
        ok.push({ r: "officeok", a: [] });
      else
        wn.push({ r: "office", a: [] });
    }
    return { ng: ng, wn: wn, ok: ok };
  }
  function weights(skipPri) {
    const w = { portability: 1, perf: 1, cost: 1.2, screen: 1, battery: .8 };
    const add = (k, x) => {
      w[k] = Math.max(.3, w[k] + x);
    };
    const c = ans("carry"),
      u = ans("use"),
      f = ans("fu"),
      y = ans("why"),
      yr = ans("years"),
      b = ans("batt"),
      pri = ans("pri");
    if (c === "daily") {
      add("portability", 1.6);
      add("battery", .9);
    } else if (c === "weekly") {
      add("portability", .8);
      add("battery", .4);
    } else if (c === "room")
      add("portability", -.3);
    else if (c === "fixed") {
      add("portability", -.7);
      add("battery", -.4);
      add("screen", .6);
    }
    if (u === "student") {
      add("cost", .4);
      add("portability", .3);
    }
    if (u === "work") {
      add("perf", .6);
      add("screen", .4);
    }
    if (u === "casual")
      add("cost", .9);
    if (u === "creative") {
      add("perf", 1.6);
      add("screen", .5);
    }
    if (u === "family") {
      add("screen", .9);
      add("cost", .3);
      add("portability", -.5);
    }
    if (f === "tech" || f === "heavy" || f === "video" || f === "code" || f === "game")
      add("perf", 1.2);
    if (f === "meet") {
      add("screen", .5);
      add("battery", .5);
    }
    if (f === "long") {
      add("battery", 1);
      add("portability", .5);
    }
    if (f === "photo" && u === "creative") {
      add("screen", .8);
      add("perf", .4);
    }
    if (f === "tv")
      add("screen", .8);
    if (f === "web" || f === "learn")
      add("cost", .5);
    if (y === "slow")
      add("perf", 1.5);
    if (y === "battery")
      add("battery", 1.5);
    if (y === "heavy")
      add("portability", 1.5);
    if (y === "small")
      add("screen", 1.5);
    if (y === "mobile")
      add("portability", 1);
    if (y === "home")
      add("screen", .5);
    if (y === "kids" || y === "split")
      add("cost", .8);
    if (yr === "long")
      add("perf", .8);
    if (yr === "short")
      add("cost", .6);
    if (b === "half")
      add("battery", .8);
    if (b === "all")
      add("battery", 1.6);
    Object.keys(ST.give).forEach(k => {
      if (ST.give[k] && k !== pri && w[k] != null)
        w[k] *= .3;
    });
    if (!skipPri && pri && w[pri] != null)
      w[pri] *= 2.2;
    return w;
  }
  function axes(p) {
    const o = {};
    CRIT.forEach(c => {
      o[c[0]] = G5[p.grades[c[0]]] || 3;
    });
    return o;
  }
  function bonus(p) {
    let s = 0;
    const u = ans("use"),
      f = ans("fu"),
      y = ans("why"),
      yr = ans("years"),
      b = ans("batt"),
      c = ans("carry"),
      br = ans("brand"),
      ai = ans("ai"),
      ms = ans("ms");
    if (br === "domestic" && has(p, "japan"))
      s += 5;
    if (br === "vaio" && has(p, "vaio"))
      s += 6;
    if (br === "global" && p.maker === "Lenovo")
      s += 5;
    if (ai === "ai" && has(p, "ai"))
      s += 5;
    if (ai === "oled" && has(p, "oled"))
      s += 5;
    if (u === "student" && has(p, "student"))
      s += 4;
    if (u === "casual" && has(p, "cheap"))
      s += 3;
    if (u === "creative" && has(p, "performance"))
      s += 4;
    if (u === "work" && has(p, "performance"))
      s += 2;
    if (u === "family" && (has(p, "desktop") || has(p, "tv")))
      s += 4;
    if ((f === "tech" || f === "heavy" || f === "video" || f === "code") && has(p, "performance"))
      s += 3;
    if (f === "tv" && has(p, "tv"))
      s += 6;
    if (f === "tv" && has(p, "desktop"))
      s += 3;
    if (f === "kids" && has(p, "student"))
      s += 2;
    if (y === "slow" && has(p, "performance"))
      s += 3;
    if (y === "heavy" && has(p, "light"))
      s += 3;
    if (y === "small" && has(p, "large"))
      s += 3;
    if (yr === "long") {
      if (p.ram >= 16)
        s += 3;
      if (p.ssd >= 512)
        s += 2;
    }
    if (yr === "short" && has(p, "cheap"))
      s += 2;
    if (ms === "need" && p.office === "搭載")
      s += 2;
    if (b === "all" && p.grades.battery === "◎")
      s += 3;
    if (c === "daily" && has(p, "light"))
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
      s -= h.wn.length * 6 + h.ng.length * 40;
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
    const g = CRIT.filter(c => d.a[c[0]] - s.a[c[0]] >= 1).map(c => c[2] + cName(c));
    if (d.p.ram > s.p.ram)
      g.push("🧠" + F(L("メモリ{0}GB", "RAM {0}GB", "内存{0}GB"), d.p.ram));
    if (has(d.p, "oled") && !has(s.p, "oled"))
      g.push(L3(["🖼️有機EL", "🖼️OLED", "🖼️OLED屏"]));
    if (has(d.p, "ai") && !has(s.p, "ai"))
      g.push(L3(["✨AI機能", "✨AI features", "✨AI功能"]));
    return g;
  }
  const specLine = p => p.ram + "GB/" + p.ssd + "GB・" + p.weight + "kg";
  /* ---------- illustrations ---------- */
  function pcsvg(l, i) {
    const a = ' style="--dl:-' + (i * .5).toFixed(1) + 's"';
    const scr = (x, w, c1, c2) => '<rect x="'
      + x
      + '" y="6" width="'
      + w
      + '" height="40" rx="4" fill="'
      + c1
      + '"/><rect x="'
      + (x + 3)
      + '" y="9" width="'
      + (w - 6)
      + '" height="34" rx="2" fill="'
      + c2
      + '"/><path d="M'
      + (x - 10)
      + ' 52h'
      + (w + 20)
      + 'l-5 8H'
      + (x - 5)
      + 'z" fill="#cbd5e1"/>';
    let s = '<svg class="pc-svg" viewBox="0 0 100 70" aria-hidden="true">';
    if (l === "c")
      s += scr(18, 64, "#475569", "#bfdbfe")
        + '<g class="pc-sp"'
        + a
        + '><circle cx="50" cy="26" r="9" fill="none" stroke="#2563eb" stroke-width="3" stroke-dasharray="10 6"/></g>';
    if (l === "e")
      s += scr(18, 64, "#64748b", "#e2e8f0")
        + '<rect class="pc-tw"'
        + a
        + ' x="28" y="18" width="30" height="4" rx="2" fill="#94a3b8"/><rect class="pc-tw"'
        + a
        + ' x="28" y="27" width="22" height="4" rx="2" fill="#94a3b8"/>';
    if (l === "b")
      s += scr(20, 60, "#1d4ed8", "#dbeafe")
        + '<path class="pc-tw"'
        + a
        + ' d="M40 28l7 7 14-14" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/>';
    if (l === "l")
      s += scr(8, 84, "#0369a1", "#e0f2fe")
        + '<rect class="pc-tw"'
        + a
        + ' x="20" y="18" width="60" height="4" rx="2" fill="#38bdf8"/><rect class="pc-tw"'
        + a
        + ' x="20" y="27" width="44" height="4" rx="2" fill="#38bdf8"/>';
    if (l === "u")
      s += '<g class="pc-fl"'
        + a
        + '>'
        + scr(20, 60, "#0f766e", "#ccfbf1")
        + '<path d="M44 26q6-10 14 0q-6 8-14 0z" fill="#14b8a6"/></g>';
    if (l === "p")
      s += scr(18, 64, "#6d28d9", "#1e1b4b")
        + '<path class="pc-tw"'
        + a
        + ' d="M50 14l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#fbbf24"/>';
    if (l === "d")
      s += '<rect x="14" y="4" width="72" height="46" rx="4" fill="#334155"/><rect x="17" y="7" '
        + 'width="66" height="38" rx="2" fill="#e0f2fe"/><path d="M44 50h12l3 12H41z" fill="#94a3b8"/>'
        + '<rect x="32" y="62" width="36" height="4" rx="2" fill="#94a3b8"/><rect class="pc-tw"'
        + a
        + ' x="24" y="18" width="40" height="4" rx="2" fill="#38bdf8"/>';
    return s + "</svg>";
  }
  const TSHORT = {
    chrome: L("Chromebook", "Chromebook", "Chromebook"),
    entry_win: L("標準Win", "Standard", "标准款"),
    balance_14: L("14型軽め", "14\" light", "14寸轻薄"),
    large_16: L("16型大画面", "16\" large", "16寸大屏"),
    ultralight: L("超軽量", "Ultra-light", "超轻"),
    premium_ai: L("高級・AI", "Premium AI", "旗舰AI"),
    desktop_fh: L("一体型", "All-in-one", "一体机")
  };
  const tShort = t => L3(TSHORT[t.id] || [tName(t), tName(t), tName(t)]);
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
    return '<svg class="pc-mk'
      + (hot ? " hot" : "")
      + '" viewBox="0 0 64 48" width="64" height="48" aria-hidden="true">'
      + '<ellipse cx="32" cy="45" rx="25" ry="2.6" fill="#0f172a" opacity=".13"/>'
      + '<rect x="9" y="3.5" width="46" height="31" rx="4.5" fill="'
      + c
      + '"/>'
      + '<rect x="9" y="3.5" width="46" height="31" rx="4.5" fill="none" stroke="'
      + dd
      + '" stroke-opacity=".35"/>'
      + '<rect x="12.5" y="7" width="39" height="24" rx="2.2" fill="#fff"/>'
      + '<path d="M12.5 9.2A2.2 2.2 0 0 1 14.7 7H33L24 31H14.7a2.2 2.2 0 0 1-2.2-2.2Z" fill="'
      + l
      + '" opacity=".16"/>'
      + '<text x="32" y="'
      + (19 + fs * .36)
      + '" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" style="fill:'
      + c
      + ';font-size:'
      + fs
      + 'px;font-weight:800;dominant-baseline:auto" textLength="'
      + tl
      + '" lengthAdjust="spacingAndGlyphs">'
      + nm
      + '</text>'
      + '<path d="M4.5 35.5h55l2.2 4.3a2.4 2.4 0 0 1-2.1 3.5H4.4a2.4 2.4 0 0 1-2.1-3.5Z" fill="'
      + d
      + '"/>'
      + '<rect x="25" y="35.5" width="14" height="2.4" rx="1.2" fill="'
      + dd
      + '" opacity=".55"/>'
      + '</svg>';
  }
  const LAP = '<rect x="14" y="10" width="36" height="24" rx="3" fill="#475569"/><rect x="17" y="13" '
    + 'width="30" height="18" rx="1" fill="#bfdbfe"/><path d="M8 36h48l-4 6H12z" fill="#cbd5e1"/>';
  const QI = {
    sit: '<path d="M12 26 32 8l20 18v16H12z" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" '
      + 'stroke-linejoin="round"/><rect x="27" y="30" width="10" height="12" rx="2" fill="#60a5fa"/>'
      + '<path class="pc-tw" d="M52 4l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fbbf24"/>',
    carry: '<rect x="6" y="10" width="22" height="32" rx="6" fill="#f59e0b"/><rect x="10" y="22" '
      + 'width="14" height="9" rx="2" fill="#fde68a"/><g class="pc-fl"><rect x="34" y="14" width="24"'
      + ' height="16" rx="2" fill="#475569"/><rect x="36" y="16" width="20" height="12" rx="1" '
      + 'fill="#bfdbfe"/><path d="M31 32h30l-3 5H34z" fill="#cbd5e1"/></g>',
    size: '<rect x="16" y="6" width="32" height="24" rx="3" fill="#334155"/><rect x="19" y="9" '
      + 'width="26" height="18" rx="1" fill="#bfdbfe"/><path d="M27 30h10l2 8H25z" fill="#94a3b8"/>'
      + '<g class="pc-tw"><path d="M4 20h8M7 16l-4 4 4 4M60 20h-8M57 16l4 4-4 4" fill="none" '
      + 'stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>',
    wt: '<path d="M12 42h40l-5-20H17z" fill="#cbd5e1"/><circle cx="32" cy="20" r="12" fill="#f8fafc" '
      + 'stroke="#64748b" stroke-width="2"/><g class="pc-sw"><path d="M32 20 38 12" stroke="#ef4444" '
      + 'stroke-width="2.5" stroke-linecap="round"/></g><circle cx="32" cy="20" r="2" '
      + 'fill="#64748b"/><text x="32" y="38" text-anchor="middle" font-size="8" font-weight="700" '
      + 'fill="#475569">kg</text>',
    drive: '<g class="pc-sp"><circle cx="32" cy="24" r="17" fill="#e2e8f0" stroke="#94a3b8" '
      + 'stroke-width="2"/><circle cx="32" cy="24" r="5" fill="#fff" stroke="#94a3b8"/><path d="M32 '
      + '9a15 15 0 0 1 13 8" fill="none" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round"/></g>',
    win: '<g class="pc-fl"><path d="M6 12l14-2v12H6zM22 10l16-3v15H22zM6 24h14v12L6 34zM22 '
      + '24h16v16l-16-3z" fill="#2563eb"/></g><circle class="pc-tw" cx="50" cy="26" r="10" '
      + 'fill="#16a34a"/><circle cx="50" cy="26" r="4" fill="#fff"/>',
    use: LAP + '<path class="pc-tw" d="M54 6l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fbbf24"/>',
    why: '<g class="pc-fl">'
      + LAP
      + '</g><path class="pc-tw" d="M54 6v12M54 24v3" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>',
    years: '<rect x="12" y="8" width="40" height="34" rx="5" fill="#fff" stroke="#3b82f6" '
      + 'stroke-width="2"/><path d="M12 13a5 5 0 0 1 5-5h30a5 5 0 0 1 5 5v5H12z" fill="#3b82f6"/>'
      + '<path class="pc-tw" d="M20 27h8M36 27h8M20 35h8" stroke="#94a3b8" stroke-width="3" '
      + 'stroke-linecap="round"/>',
    batt: '<rect x="8" y="14" width="42" height="22" rx="4" fill="#fff" stroke="#16a34a" '
      + 'stroke-width="2.5"/><rect x="51" y="21" width="5" height="8" rx="1" fill="#16a34a"/><rect '
      + 'class="pc-tw" x="12" y="18" width="10" height="14" rx="1.5" fill="#22c55e"/><rect '
      + 'class="pc-tw" style="--dl:.3s" x="24" y="18" width="10" height="14" rx="1.5" '
      + 'fill="#22c55e"/><rect class="pc-tw" style="--dl:.6s" x="36" y="18" width="10" height="14" '
      + 'rx="1.5" fill="#22c55e"/>',
    ms: '<rect x="22" y="4" width="32" height="40" rx="3" fill="#fff" stroke="#94a3b8" '
      + 'stroke-width="2"/><rect x="8" y="14" width="20" height="20" rx="3" fill="#2563eb"/><text '
      + 'x="18" y="29" text-anchor="middle" font-size="14" font-weight="800" fill="#fff">W</text>'
      + '<path class="pc-tw" d="M34 14h14M34 21h14M34 28h9" stroke="#94a3b8" stroke-width="2.5" '
      + 'stroke-linecap="round"/>',
    ai: '<path class="pc-tw" d="M30 4l6 14 14 6-14 6-6 14-6-14-14-6 14-6z" fill="#a78bfa"/><path '
      + 'class="pc-tw" style="--dl:.5s" d="M52 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fbbf24"/>',
    brand: '<g class="pc-fl"><path d="M32 4l6 12 13 2-9.500 9 2.500 13-12-6.500L20 40l2.500-13L13 '
      + '18l13-2z" fill="#f59e0b"/></g><path d="M18 44h28" stroke="#cbd5e1" stroke-width="3" '
      + 'stroke-linecap="round"/>',
    pri: '<g class="pc-fl"><path d="M20 6h24v14a12 12 0 0 1-24 0z" fill="#fbbf24"/><path d="M20 '
      + '10h-8v4a8 8 0 0 0 8 8M44 10h8v4a8 8 0 0 1-8 8" fill="none" stroke="#f59e0b" '
      + 'stroke-width="3"/></g><rect x="28" y="32" width="8" height="6" fill="#f59e0b"/><rect x="21" '
      + 'y="38" width="22" height="5" rx="2" fill="#d97706"/>',
    budget: '<g class="pc-fl"><circle cx="32" cy="24" r="17" fill="#fbbf24" stroke="#f59e0b" '
      + 'stroke-width="3"/><text x="32" y="31" text-anchor="middle" font-size="20" font-weight="800" '
      + 'fill="#b45309">¥</text></g>'
  };
  const QIU = {
    student: '<rect x="10" y="10" width="44" height="30" rx="3" fill="#dbeafe" stroke="#3b82f6" '
      + 'stroke-width="2"/><path d="M32 10v30" stroke="#3b82f6" stroke-width="2"/><path class="pc-tw"'
      + ' d="M15 19h12M15 26h12M37 19h12M37 26h12" stroke="#60a5fa" stroke-width="2.5" '
      + 'stroke-linecap="round"/>',
    work: '<rect x="8" y="16" width="48" height="26" rx="4" fill="#475569"/><path d="M24 16v-3a3 3 0 0 '
      + '1 3-3h10a3 3 0 0 1 3 3v3" fill="none" stroke="#475569" stroke-width="3"/><rect x="28" y="26"'
      + ' width="8" height="6" rx="1" fill="#fbbf24"/><path class="pc-tw" d="M54 6l2 5 5 2-5 2-2 '
      + '5-2-5-5-2 5-2z" fill="#fbbf24"/>',
    casual: '<rect x="6" y="8" width="52" height="32" rx="5" fill="#fee2e2"/><g class="pc-tw"><path '
      + 'd="M27 17l14 7-14 7z" fill="#ef4444"/></g>',
    creative: '<rect x="8" y="10" width="48" height="30" rx="5" fill="#ede9fe"/><circle class="pc-tw" '
      + 'cx="22" cy="25" r="6" fill="#8b5cf6"/><circle class="pc-tw" style="--dl:.4s" cx="35" cy="20"'
      + ' r="5" fill="#f472b6"/><circle class="pc-tw" style="--dl:.8s" cx="46" cy="29" r="5" fill="#38bdf8"/>',
    family: '<rect x="14" y="4" width="36" height="24" rx="3" fill="#334155"/><rect x="17" y="7" '
      + 'width="30" height="18" rx="1" fill="#bfdbfe"/><path class="pc-tw" d="M28 11l10 4-10 4z" '
      + 'fill="#2563eb"/><rect x="8" y="32" width="48" height="12" rx="5" fill="#f59e0b"/>'
  };
  function qiHtml(q) {
    const k = q.id === "fu" ? (QIU[ans("use")] || QI.use) : (QI[q.id] || QI.use);
    return '<svg class="pc-qi" viewBox="0 0 64 48" aria-hidden="true">' + k + '</svg>';
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
        + '"><div class="pc-mini">'
        + pcsvg(t.i.l, n)
        + '</div><div style="font-size:.6rem;line-height:1.3;margin-top:2px;'
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
      + '</h3><div class="pc-xe">'
      + cells
      + '</div>';
    if (best >= 0)
      h += '<p class="fr-p" style="margin:6px 0 0;font-size:.82rem">'
        + F(T.xeNow, tName(TYPES[best]), L3(TYPES[best].i.w))
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
        + '<div style="font-size:.64rem;line-height:1.3;margin-top:2px;'
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
      + '</h3><div class="pc-xm">'
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
          d.p.name,
          mName(d.p),
          specLine(d.p),
          AP(d.p.price - s.p.price),
          gains(d, s).join("・"),
          s.p.name
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
    const h = [], u = ans("use"), f = ans("fu"), yr = ans("years"), c = ans("carry");
    if ((yr === "long" || u === "creative" || f === "heavy" || f === "tech") && r.p.ram < 16)
      h.push(T.upRam);
    if (u === "creative" && f === "video" && r.p.ram < 32)
      h.push(T.upVid);
    if (c === "daily" && r.p.weight > 1.2)
      h.push(T.upLight);
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
    const c = short(lab("carry")), u = short(lab("fu") || lab("use")), b = short(lab("batt"));
    if (k === "portability")
      return c && carryIs("daily", "weekly")
        ? F(
          L(
            "持ち歩く頻度（{0}）から、軽さ・サイズが効くため",
            "From how often you carry it ({0}), weight and size matter",
            "从携带频率（{0}）来看，重量与尺寸很关键"
          ),
          c
        )
        : L3(L("持ち運びやすさが使い勝手に効くため", "Portability matters for daily use", "便携性影响使用体验"));
    if (k === "perf")
      return u
        ? F(
          L(
            "使い方（{0}）から、処理性能の余裕が効くため",
            "From how you use it ({0}), performance headroom matters",
            "从使用方式（{0}）来看，性能余量很关键"
          ),
          u
        )
        : L3(L("処理性能の余裕が快適さに効くため", "Performance headroom keeps it smooth", "性能余量决定流畅度"));
    if (k === "cost")
      return u
        ? F(
          L(
            "使い方（{0}）なら、価格とのバランスが満足度に効くため",
            "For your use ({0}), value for money drives satisfaction",
            "对于您的使用方式（{0}），性价比决定满意度"
          ),
          u
        )
        : L3(L("価格とのバランスが満足度に効くため", "Value for money drives satisfaction", "性价比决定满意度"));
    if (k === "screen")
      return u
        ? F(
          L(
            "使い方（{0}）から、画面の見やすさが効くため",
            "From how you use it ({0}), display clarity matters",
            "从使用方式（{0}）来看，屏幕清晰度很关键"
          ),
          u
        )
        : L3(L("画面の見やすさが疲れにくさに効くため", "Display clarity reduces fatigue", "屏幕清晰度关系到是否容易疲劳"));
    return b
      ? F(
        L(
          "外出先での使用時間（{0}）から、バッテリーが効くため",
          "From your time away from outlets ({0}), battery matters",
          "从外出使用时长（{0}）来看，续航很关键"
        ),
        b
      )
      : L3(L("外出先でのバッテリーが効くため", "Battery matters when you are out", "外出时续航很关键"));
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
      r.why = F(T.budWhy, rs[0].p.name, AP(first));
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
        hi = Math.max.apply(0, pr),
        ix = LI[lang()];
      return '<div class="fr-card fr-up" style="--i:'
        + (n + 1)
        + '" data-a="type">'
        + pcsvg(t.i.l, n)
        + '<h3>'
        + tName(t)
        + '</h3><small>'
        + (g.length ? AP(lo) + "〜 ・ " + g.length + L3(T.mdl) : L3(L("ただいま在庫なし", "Currently out of stock", "暂无库存")))
        + '</small><div class="fr-more"><div><span>'
        + L3(T.who)
        + "</span>"
        + t.i.w[ix]
        + "</div><div><span>"
        + L3(T.pro)
        + "</span>"
        + t.i.p[ix]
        + "</div><div><span>"
        + L3(T.con)
        + "</span>"
        + t.i.c[ix]
        + "</div><div><span>"
        + L3(T.range)
        + "</span>"
        + (g.length ? AP(lo) + "〜" + AP(hi) : "—")
        + "</div></div></div>";
    }).join("");
    const g3 = '<div class="fr-box fr-up" style="--i:8"><h3>'
      + L3(T.gt)
      + '</h3><table class="fr-spec">'
      + ["g1", "g2", "g3"].map(
        k => "<tr><td>" + L3(T[k]) + "</td><td>" + L3(T[k + "d"]) + "</td></tr>"
      ).join("")
      + "</table></div>";
    return '<span class="fr-tag fr-up">'
      + L3(T.step0)
      + '</span><h1 class="fr-h1 fr-up" style="--i:1">'
      + L3(T.introH)
      + '</h1><p class="fr-p fr-up" style="--i:2">'
      + F(T.introP, PRODUCTS.length)
      + '</p><div class="fr-types">'
      + cards
      + "</div>"
      + g3
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
      + F(L("使う場所の条件に合うのは {0}機種", "{0} models fit where you use it", "符合使用场所条件的有 {0} 款"), t.length)
      + '</h1><p class="fr-p">'
      + F(
        L(
          "持ち歩き {0}／画面 {1}／重さ {2}／光学ドライブ {3}／Windows {4}",
          "Carrying {0} / Screen {1} / Weight {2} / Optical drive {3} / Windows {4}",
          "携带 {0}／屏幕 {1}／重量 {2}／光驱 {3}／Windows {4}"
        ),
        dash("carry"),
        dash("size"),
        dash("wt"),
        dash("drive"),
        dash("win")
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
                "⚠️ 条件にぴったり合う機種が3つ未満です。このあと「条件外」の近い機種も参考に表示します（赤字で明記）。持ち歩きやサイズの条件を見直すと選択肢が広がる場合があります。",
                "⚠️ Fewer than 3 models fully fit. We will also show close “out-of-spec” models for "
                  + "reference (marked in red). Revisiting carrying or size limits may widen your options.",
                "⚠️ 完全符合条件的机型不足3款。后面将参考性展示接近的“条件外”机型（以红字标明）。重新确认携带或尺寸条件或可增加选择。"
              )
            )
            + "</div>"
          : ""
      )
      + '<button class="fr-btn" data-a="next">'
      + L3(L("使い方のヒアリングへ →", "To the lifestyle questions →", "进入使用方式访谈 →"))
      + '</button><button class="fr-btn k" data-a="staff">'
      + L3(L("📸 スタッフに見せる（条件メモ）", "📸 Show to staff (requirements memo)", "📸 出示给店员（条件备忘）"))
      + '</button><button class="fr-btn s" data-a="back">'
      + L3(L("← 使う場所の条件をやり直す", "← Redo the where-you-use-it questions", "← 重新回答使用场所条件"))
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
    let heat = '<div class="fr-heat" style="grid-template-columns:9em repeat(5,1fr);min-width:420px"><div class="hd"></div>'
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
            + (n * 5 + d)
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
    const ix = LI[lang()];
    const td = rows.filter(r => r.n).map(
      r => '<div style="margin-bottom:8px;font-size:.86rem;line-height:1.6"><b>'
        + tName(r.t)
        + "</b>："
        + r.t.i.p[ix]
        + '。<span style="color:#b45309">'
        + r.t.i.c[ix]
        + "</span></div>"
    ).join("");
    const mk = MAKERS.map(m => {
      const g = e.filter(f => makerOf(f.p) === m), b = g[0] ? sorted(g)[0] : null;
      return '<div class="pc-mkrow" style="'
        + (g.length ? "" : "opacity:.45")
        + '">'
        + mkIcon(m, false)
        + '<div style="font-size:.84rem;line-height:1.55"><b>'
        + L3(m.n)
        + "</b>（"
        + g.length
        + L3(T.mdl)
        + "）"
        + (b ? " " + L3(L("最有力", "Top", "最强")) + "：<b>" + b.p.name + "</b>" : "")
        + '<br><span style="color:#64748b">'
        + L3(m.t)
        + "</span></div></div>";
    }).join("");
    return '<span class="fr-tag">'
      + L3(L("使い方の結果", "Lifestyle result", "使用方式结果"))
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
      + L3(L("← 使い方をやり直す", "← Redo the lifestyle questions", "← 重新回答使用方式"))
      + "</button>";
  }
  const rowsN = [
    L("価格", "Price", "价格"),
    L("CPU", "CPU", "处理器"),
    L("メモリ/SSD", "RAM / SSD", "内存/固态"),
    L("画面/重さ", "Screen / Weight", "屏幕/重量"),
    L("Office", "Office", "Office"),
    L("光学ドライブ", "Optical drive", "光驱")
  ];
  const specOf = p => [
    AP(p.price),
    p.cpu,
    p.ram + "GB / " + p.ssd + "GB",
    p.screen + L3(["型", '"', "寸"]) + " / " + p.weight + "kg",
    p.office === "搭載" ? L3(["付き", "Included", "含"]) : L3(["なし", "No", "无"]),
    has(p, "bd") ? "Blu-ray" : has(p, "dvd") ? "DVD" : "—"
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
        + o.p.name
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
          + f.p.name
          + "</b>（"
          + AP(f.p.price)
          + "）</div>";
      else {
        const g = axs.filter(c => d.a[c[0]] - f.a[c[0]] >= .8).map(c => c[2] + cName(c));
        h += '<div class="fr-win" style="margin-top:10px"><b>'
          + L3(L("ご予算内の第1候補：", "Top pick within budget: ", "预算内第1名："))
          + f.p.name
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
            d.p.name,
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
            d.p.name
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
                ? L3(L("→ 1位は ", "→ #1 would be ", "→ 第1名将是 ")) + r.p.name
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
        cur.p.name,
        total
      )
      + "</p>"
      + rows.join("")
      + '<div style="margin-left:12px;padding:6px 10px;border-radius:8px;background:#dcfce7;'
      + 'border:1.5px solid #16a34a;font-weight:700;font-size:.88rem">🏁 '
      + cur.p.name
      + "（"
      + mName(cur.p)
      + "）</div></div>";
  }
  function vFinal() {
    const R = result(),
      top = R.top,
      ax = ST.ax || ans("pri") || "perf",
      axc = CRIT.filter(c => c[0] === ax)[0] || CRIT[1],
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
        win.p.name
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
        d.over ? ['<li class="w">' + F(RS.over, lab("budget")) + "</li>"] : []
      ).concat(d.h.ok.slice(0, 3).map(r => "<li>" + rtext(r) + "</li>")).join("");
      const sp = specOf(p),
        tb = rowsN.map((g, k) => "<tr><td>" + L3(g) + "</td><td>" + sp[k] + "</td></tr>").join("");
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
        + p.name
        + '</div><div style="font-size:.8rem;color:#64748b">'
        + mName(p)
        + " ／ "
        + p.model
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
    const best = CRIT.map(c => {
      const w = bestBy(c[0], top);
      return "<tr><td>"
        + c[2]
        + " "
        + cName(c)
        + "</td><td><b>"
        + w.p.name
        + "</b>（"
        + AP(w.p.price)
        + "）</td></tr>";
    }).join("");
    const cmp = '<table class="fr-spec"><tr><td></td>'
      + top.map(d => "<td><b>" + d.p.name + "</b></td>").join("")
      + "</tr>"
      + rowsN.map(
        (g, k) => "<tr><td>"
          + L3(g)
          + "</td>"
          + top.map(d => "<td>" + specOf(d.p)[k] + "</td>").join("")
          + "</tr>"
      ).join("")
      + "</table>";
    const acc = ACCS.map(
      d => '<div style="font-size:.86rem;margin-bottom:6px"><b>'
        + P(d.name)
        + "</b>（"
        + d.price
        + ')<br><span style="color:#64748b">'
        + P(d.desc)
        + "</span></div>"
    ).join("");
    const game = ans("fu") === "game"
      ? '<div class="fr-box" style="border-left:4px solid #f59e0b"><p class="fr-p" style="margin:0">⚠️ '
        + L3(
          L(
            "ここで比較している機種はゲーミングPCではありません。本格的なPCゲームにはグラフィックス性能の高いモデルが向くため、スタッフにご相談ください。",
            "The models compared here are not gaming PCs. Serious PC gaming calls for strong graphics "
              + "performance, so please ask our staff.",
            "这里对比的机型并非游戏本。认真玩电脑游戏需要强图形性能，请向店员咨询。"
          )
        )
        + "</p></div>"
      : "";
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
      + game
      + vBudget()
      + vStepUp(top)
      + vPath()
      + '<div class="fr-box"><h3>'
      + L3(L("譲れないポイント別の一番", "Best pick per criterion", "按不可让步项的最佳选择"))
      + '</h3><table class="fr-spec">'
      + best
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
        + d.p.name
        + "</b>（"
        + mName(d.p)
        + " / "
        + d.p.model
        + "）"
        + AP(d.p.price)
        + "<br>"
        + d.p.cpu
        + " ／ "
        + d.p.ram
        + "GB / "
        + d.p.ssd
        + "GB ／ "
        + L3(L("適合度", "Match", "匹配度"))
        + " "
        + d.sc
        + (d.h.wn.length ? '<br><span style="color:#b45309">⚠ ' + rtext(d.h.wn[0]) + "</span>" : "")
        + "</div>"
    ).join("");
    return '<div class="fr-ss"><div style="display:flex;justify-content:space-between;border-bottom:2px '
      + 'solid #111827;padding-bottom:6px;margin-bottom:8px"><b style="background:#111827;'
      + 'color:#fbbf24;padding:2px 8px;border-radius:4px;font-size:.86rem">'
      + L3(L("スタッフ確認用シート", "Staff confirmation sheet", "店员确认单"))
      + '</b>' + (HC.storeName ? '<b style="font-size:.86rem;color:#111827">' + String(HC.storeName).replace(/[<>&]/g, "") + "</b>" : "") + '</div><p style="font-size:.8rem;color:#d90429;font-weight:700;margin-bottom:6px">'
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
    const sel = '<select class="pc-sel" data-a="lang" aria-label="Language"><option value="ja"'
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
      + '</span></div><div class="fr-prog"><div id="pc-pg"></div></div>';
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
    const el = document.getElementById("pc-n");
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
      const p = document.getElementById("pc-pg");
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
      history.pushState({ pc: 1 }, "");
    } catch (e) {}
  }
  function close(silent) {
    root.classList.remove("on");
    document.documentElement.style.overflow = "";
    if (!silent)
      try {
        history.state && history.state.pc && history.back();
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
  window.PCApp = { open: open, close: close };
  const mb = document.getElementById("modal-link-btn");
  if (mb)
    mb.addEventListener("click", function (e) {
      if (mb.dataset.app === "pc") {
        e.preventDefault();
        const m = document.getElementById("modal");
        if (m)
          m.classList.remove("active");
        open();
      }
    });
})();
</script>
<style id="pc-responsive-css">
/* =====================================================================
   PC相談：スマホ・iPad向けの調整 ＋ Apple風の動き
   ===================================================================== */
#pc-app{--ap:cubic-bezier(.32,.72,0,1);--aps:cubic-bezier(.25,1,.5,1)}

/* ---- 画面の出し入れ（iOSのシート／プッシュ） ---- */
#pc-app{transition:opacity .4s var(--ap),transform .6s var(--ap),visibility 0s .6s}
#pc-app.on{transition:opacity .4s var(--ap),transform .6s var(--ap)}
#pc-app .fr-in{animation:apPush .55s var(--ap) both}
#pc-app.fr-back .fr-in{animation-name:apPop}
@keyframes apPush{from{opacity:0;transform:translate3d(32px,0,0)}}
@keyframes apPop{from{opacity:0;transform:translate3d(-32px,0,0)}}
#pc-app .fr-up{animation:apRise .7s var(--ap) both;animation-delay:calc(var(--i,0)*45ms)}
#pc-app .fr-card.sel .fr-more{animation:apRise .5s var(--ap) both}
@keyframes apRise{from{opacity:0;transform:translate3d(0,14px,0) scale(.985);filter:blur(4px)}}

/* ---- 半透明のナビゲーションバー（スクロールすると細い境界線） ---- */
#pc-app .fr-top{background:rgba(255,255,255,.72);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);box-shadow:none;border-bottom:.5px solid transparent;transition:border-color .3s,background .3s}
#pc-app.scrolled .fr-top{border-bottom-color:rgba(15,23,42,.14);background:rgba(255,255,255,.82)}
#pc-app .fr-prog div{transition:width .8s var(--ap)}

/* ---- 押したときの沈み込み・選んだときの反応 ---- */
#pc-app .fr-opt,#pc-app .fr-card,#pc-app .fr-btn,#pc-app .fr-x,#pc-app .iv-entry,#pc-app .ht-heart{transition:transform .5s var(--ap),background-color .25s,border-color .25s,box-shadow .35s var(--ap)}
#pc-app .fr-opt:active,#pc-app .fr-card:active,#pc-app .fr-btn:active,#pc-app .fr-x:active,#pc-app .iv-entry:active{transform:scale(.97);transition-duration:.12s}
#pc-app .fr-opt.sel{animation:apSel .5s var(--ap)}
@keyframes apSel{0%{transform:scale(.97)}}
#pc-app .fr-opt .ck{transition:transform .45s var(--aps),background .2s,border-color .2s}
#pc-app .fr-opt.sel .ck{transform:scale(1.08)}
@media (hover:hover){#pc-app .fr-card:hover{transform:translateY(-2px);box-shadow:0 12px 28px #2563eb1f}}
@media (hover:none){#pc-app .fr-card:hover{transform:none;box-shadow:0 2px 8px #0f172a0d}}

/* ---- ヒアリング（イラストなし） ---- */
#pc-app .pc-qi{display:none!important}
#pc-app .fr-q{padding:20px 18px 18px;border:1px solid #e8edf5;box-shadow:0 10px 30px #0f172a12}
#pc-app .fr-q .no{display:inline-flex;align-items:center;gap:8px;font-size:.78rem;padding:5px 11px;border-radius:999px;background:linear-gradient(135deg,#eff6ff,#f5f3ff);color:#4338ca;letter-spacing:.08em}
#pc-app .fr-q h2{font-size:clamp(1.2rem,4.8vw,1.55rem);line-height:1.45;margin:12px 0 10px;word-break:auto-phrase;text-wrap:pretty;letter-spacing:.01em}
#pc-app .fr-hint{word-break:auto-phrase;border-left:0;border-radius:12px;background:#f1f5ff;padding:10px 12px}
#pc-app .fr-opt{border-radius:14px;word-break:auto-phrase}

/* ---- 「いまの見立て」：タイプとメーカーの並びをそろえる ---- */
#pc-app .pc-xe{grid-template-columns:repeat(7,minmax(0,1fr));gap:6px}
#pc-app .pc-xe>div,#pc-app .pc-xm>div{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-width:0;padding:7px 3px 6px!important;border-radius:12px!important;transition:background .3s,border-color .3s,opacity .3s}
#pc-app .pc-xe>div>div:last-child,#pc-app .pc-xm>div>div:last-child{font-size:.62rem!important;line-height:1.35!important;margin-top:4px!important;max-width:100%;text-align:center;word-break:auto-phrase}
#pc-app .pc-xe .pc-mini{height:30px;display:flex;align-items:center}
#pc-app .pc-xm{display:flex;flex-wrap:wrap;justify-content:center;gap:6px}
#pc-app .pc-xm>div{flex:1 1 0;min-width:62px;max-width:112px}
#pc-app .pc-mk{width:100%;max-width:56px;height:auto}
@media (max-width:600px){#pc-app .pc-xe{grid-template-columns:repeat(4,minmax(0,1fr))}}

/* ---- 結果画面「いま合うメーカー」：アイコンの列と文字の頭をそろえる ---- */
#pc-app .pc-mkrow{display:grid;grid-template-columns:64px minmax(0,1fr);column-gap:14px;align-items:center;padding:12px 2px;border-top:1px solid #eef2f7;text-align:left}
#pc-app .fr-box h3+.pc-mkrow,#pc-app .pc-mkrow:first-of-type{border-top:0;padding-top:4px}
#pc-app .pc-mkrow .pc-mk{margin:0;width:64px;max-width:64px;justify-self:center}
#pc-app .pc-mkrow>div{font-size:.86rem!important;line-height:1.6!important;min-width:0;word-break:auto-phrase}
#pc-app .pc-mkrow>div b:first-child{font-size:.95rem}
#pc-app .pc-mkrow>div span{display:block;margin-top:2px;font-size:.8rem}
@media (min-width:700px){#pc-app .pc-mkrow{grid-template-columns:72px minmax(0,1fr);padding:14px 6px}}

/* ---- 最初の画面：タイプのカード（7つ目が1枚だけ浮かないように） ---- */
#pc-app .fr-types{align-items:stretch}
#pc-app .fr-types>.fr-card{display:flex;flex-direction:column}
#pc-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel){grid-column:1/-1;display:grid;grid-template-columns:auto 1fr;column-gap:16px;align-items:center}
#pc-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>.pc-svg{grid-row:1/span 2;margin:0}
#pc-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>h3{align-self:end;margin:0 0 2px}
#pc-app .fr-types>.fr-card:last-child:nth-child(odd):not(.sel)>small{align-self:start}

/* ---- スマホ：上のバーを2段に（1段目：戻る・言語・該当数／2段目：タイトル・在庫管理） ---- */
@media (max-width:600px){
  #pc-app .fr-top{flex-wrap:wrap;row-gap:6px}
  #pc-app .fr-top>b{order:5;flex:1 1 auto;min-width:0;font-size:.95rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  #pc-app .fr-top .iv-entry{order:6}
  #pc-app .fr-q{padding:18px 14px 14px;border-radius:18px}
  #pc-app .fr-wrap{padding-left:12px;padding-right:12px}
}
/* ---- iPad・PC：中央に寄せ、選択肢は2列 ---- */
@media (min-width:700px){
  #pc-app .fr-wrap{max-width:900px;margin:0 auto}
  #pc-app .fr-q{display:grid;grid-template-columns:1fr 1fr;column-gap:12px;align-items:stretch;padding:26px 26px 22px;border-radius:24px}
  #pc-app .fr-q>*{grid-column:1/-1}
  #pc-app .fr-q>.fr-opt{grid-column:auto;margin:0 0 12px;height:calc(100% - 12px)}
  #pc-app .fr-q .no{justify-self:start}
  #pc-app .fr-types{grid-template-columns:1fr 1fr}
}
@media (prefers-reduced-motion:reduce){#pc-app *,#pc-app{animation-duration:.01ms!important;transition-duration:.01ms!important}}
</style>
<script id="pc-motion-js">
/* PC相談：スクロールでナビゲーションバーに境界線（Apple風）／iOSで押した感触を出す */
(function () {
  var r = document.getElementById("pc-app");
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