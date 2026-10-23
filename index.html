<!doctype html>
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
  var DEF = "narita", REL = "./";
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

<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#0b1440">
<title>フロアガイド</title>
<style>
:root{--brand:#2563eb;--brand2:#7c3aed;--ink:#0f172a;--sub:#64748b;--line:#e2e8f0;--bg:#f4f6fb;--card:#fff;--r:18px;
--sh:0 10px 30px rgba(15,23,42,.08);--sh2:0 20px 50px rgba(15,23,42,.18);--tab:64px;--top:58px;
--ease:cubic-bezier(.16,1,.3,1);--spring:cubic-bezier(.34,1.56,.64,1)}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
html,body{height:100%}
body{font-family:"Hiragino Sans","Noto Sans JP","Noto Sans SC","Yu Gothic UI","Yu Gothic",system-ui,sans-serif;color:var(--ink);background:var(--bg);overflow:hidden;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%}
button{font:inherit;color:inherit;border:0;background:none;cursor:pointer;touch-action:manipulation}
input,select,textarea{font:inherit;font-size:16px;color:inherit}
a{color:inherit}
[hidden]{display:none!important}
body.no-motion *,body.no-motion *::before,body.no-motion *::after{animation-duration:1ms!important;animation-iteration-count:1!important;transition-duration:1ms!important}

/* ---------- ripple / reveal / skeleton ---------- */
.rp{position:relative;overflow:hidden}
.rpl{position:absolute;border-radius:50%;width:24px;height:24px;margin:-12px 0 0 -12px;background:currentColor;opacity:.18;pointer-events:none;animation:rpl .6s ease-out forwards}
@keyframes rpl{to{transform:scale(14);opacity:0}}
.rv{opacity:0;transform:translateY(26px);transition:opacity .7s var(--ease),transform .8s var(--ease)}
.rv.in{opacity:1;transform:none}
.sk{position:relative;overflow:hidden;background:#e7ebf3;border-radius:14px}
.sk::after{content:"";position:absolute;inset:0;transform:translateX(-100%);background:linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent);animation:shim 1.25s infinite}
@keyframes shim{to{transform:translateX(100%)}}

/* ---------- splash ---------- */
#splash{position:fixed;inset:0;z-index:500;color:#fff;background:#070d2e;overflow:hidden;cursor:pointer;user-select:none;-webkit-user-select:none;
clip-path:circle(150% at 50% 50%);transition:clip-path .9s var(--ease),opacity .6s ease}
#splash.out{clip-path:circle(0% at 50% 50%);opacity:0;pointer-events:none}
.sp-bg{position:absolute;inset:0}
.blob{position:absolute;border-radius:50%;filter:blur(70px);opacity:.65;animation:blob 18s ease-in-out infinite alternate}
.b1{width:60vmax;height:60vmax;left:-15vmax;top:-20vmax;background:#2563eb}
.b2{width:50vmax;height:50vmax;right:-15vmax;top:10vmax;background:#7c3aed;animation-delay:-6s}
.b3{width:45vmax;height:45vmax;left:20vmax;bottom:-25vmax;background:#0ea5e9;animation-delay:-11s}
@keyframes blob{50%{transform:translate(6vmax,4vmax) scale(1.12)}100%{transform:translate(-4vmax,7vmax) scale(.95)}}
.sp-map{position:absolute;inset:0;width:100%;height:100%;opacity:.28}
.sp-map rect,.sp-map polygon{fill:none;stroke:#bfdbfe;stroke-width:2;stroke-dasharray:100;stroke-dashoffset:100;animation:draw 2.4s var(--ease) forwards;animation-delay:calc(var(--d)*1ms)}
@keyframes draw{to{stroke-dashoffset:0}}
.sp-float span{position:absolute;bottom:-10vh;font-size:var(--s);opacity:0;animation:floatUp var(--t) linear infinite;animation-delay:var(--dl);filter:drop-shadow(0 6px 12px rgba(0,0,0,.3))}
@keyframes floatUp{10%{opacity:.75}90%{opacity:.6}100%{transform:translate(var(--x),-120vh) rotate(var(--r));opacity:0}}
.sp-inner{position:relative;z-index:2;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:max(24px,env(safe-area-inset-top)) 20px max(90px,env(safe-area-inset-bottom))}
.sp-sub{font-size:clamp(11px,1.6vw,14px);font-weight:700;letter-spacing:.6em;opacity:0;animation:trk 1.6s var(--ease) .2s forwards;text-transform:uppercase}
@keyframes trk{from{letter-spacing:1.4em;opacity:0;filter:blur(6px)}to{letter-spacing:.42em;opacity:.8;filter:none}}
.sp-store{margin-top:10px;font-size:clamp(18px,3.4vw,30px);font-weight:800}
.sp-store span{display:inline-block;opacity:0;transform:translateY(16px);animation:chUp .7s var(--ease) forwards;animation-delay:calc(var(--i)*40ms + .35s)}
@keyframes chUp{to{opacity:1;transform:none}}
.sp-verb{margin-top:clamp(10px,3vh,26px);height:1.15em;font-size:clamp(54px,13vw,150px);font-weight:900;line-height:1.1;letter-spacing:-.02em;white-space:nowrap}
.sp-verb span{display:inline-block;opacity:0;transform:translateY(.55em) rotate(10deg) scale(.85);filter:blur(10px);
background:linear-gradient(100deg,#fff 10%,#a5f3fc 45%,#c4b5fd 80%);background-size:400% 100%;background-position:calc(var(--i)*22%) 0;-webkit-background-clip:text;background-clip:text;color:transparent;
animation:chIn .75s var(--ease) forwards;animation-delay:calc(var(--i)*60ms)}
.sp-verb.out span{animation:chOut .42s ease-in forwards;animation-delay:calc(var(--i)*35ms)}
@keyframes chIn{to{opacity:1;transform:none;filter:none}}
@keyframes chOut{from{opacity:1;transform:none;filter:none}to{opacity:0;transform:translateY(-.45em) rotate(-8deg) scale(1.05);filter:blur(8px)}}
.sp-tag{margin-top:clamp(8px,2vh,16px);font-size:clamp(13px,2vw,18px);font-weight:600;opacity:.85}
.sp-langs{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:clamp(18px,5vh,44px)}
.sp-langs button{min-width:150px;padding:14px 22px;border-radius:18px;background:rgba(255,255,255,.12);border:1.5px solid rgba(255,255,255,.4);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);color:#fff;display:flex;flex-direction:column;align-items:center;gap:2px;
opacity:0;transform:translateY(20px);animation:chUp .7s var(--ease) forwards;transition:background .2s,transform .2s}
.sp-langs button:nth-child(1){animation-delay:.9s}.sp-langs button:nth-child(2){animation-delay:1s}.sp-langs button:nth-child(3){animation-delay:1.1s}
.sp-langs button:hover{background:rgba(255,255,255,.24)}
.sp-langs button:active{transform:scale(.95)}
.sp-langs b{font-size:20px}.sp-langs small{font-size:12px;opacity:.75}
.sp-tap{margin-top:22px;font-size:14px;font-weight:800;letter-spacing:.3em;opacity:.8;animation:tapP 1.8s ease-in-out infinite}
@keyframes tapP{50%{opacity:.35}}
.sp-clock{position:absolute;z-index:2;left:0;right:0;bottom:max(18px,env(safe-area-inset-bottom));display:flex;justify-content:center;align-items:baseline;gap:14px;font-variant-numeric:tabular-nums}
.sp-clock b{font-size:clamp(22px,4vw,34px);font-weight:800}
.sp-clock span{font-size:14px;opacity:.8;font-weight:600}

/* ---------- app shell ---------- */
#app{position:fixed;inset:0;display:flex;flex-direction:column}
.topbar{flex:none;height:calc(var(--top) + env(safe-area-inset-top));padding:env(safe-area-inset-top) max(12px,env(safe-area-inset-right)) 0 max(12px,env(safe-area-inset-left));display:flex;align-items:center;gap:6px;background:rgba(255,255,255,.8);backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);border-bottom:1px solid rgba(226,232,240,.8);z-index:40}
.tb-store{display:flex;align-items:center;gap:8px;min-width:0;padding:6px 8px;border-radius:12px;font-weight:800;font-size:15px}
.tb-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tb-dot{flex:none;width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,var(--brand),var(--brand2));box-shadow:0 0 0 0 rgba(37,99,235,.5);animation:dotP 2s infinite}
@keyframes dotP{70%{box-shadow:0 0 0 9px rgba(37,99,235,0)}}
.tb-sp{flex:1}
.tb-btn.tb-edit{background:linear-gradient(135deg,var(--brand),var(--brand2));color:#fff;border:0;padding:0 14px;box-shadow:0 6px 16px rgba(79,70,229,.35)}
.map-edit{flex:none}
.staffc{display:flex;gap:14px;align-items:center;flex-wrap:wrap;padding:18px;border-radius:20px;background:#0f172a;color:#fff;box-shadow:var(--sh)}
.staffc h3{font-size:16px;font-weight:900}.staffc p{font-size:12px;opacity:.75;margin-top:3px;line-height:1.6}
.staffc .acts{display:flex;gap:8px;flex-wrap:wrap;margin-left:auto}
.staffc .btn.line{background:transparent;color:#fff;border-color:rgba(255,255,255,.35)}
@media(max-width:520px){.tb-edit span{display:none}.tb-edit{padding:0 10px}.map-edit span{display:none}.map-edit{padding:0 12px}}
.tb-btn{flex:none;height:40px;min-width:40px;padding:0 10px;border-radius:12px;background:#fff;border:1px solid var(--line);font-weight:800;font-size:15px;display:inline-flex;align-items:center;justify-content:center;gap:4px;transition:transform .15s,background .2s}
.tb-btn:active{transform:scale(.92)}
.tb-btn.spin{animation:spin .8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
#views{flex:1;position:relative;overflow:hidden}
.view{position:absolute;inset:0;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;
padding:16px max(16px,env(safe-area-inset-right)) calc(var(--tab) + 40px + env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left));
opacity:0;visibility:hidden;transform:translateX(var(--dx,24px)) scale(.985);transition:opacity .3s,transform .5s var(--ease),visibility 0s .3s}
.view.on{opacity:1;visibility:visible;transform:none;transition:opacity .35s,transform .5s var(--ease)}
.wrap{max-width:1100px;margin:0 auto}
.tabbar{position:fixed;left:50%;bottom:calc(14px + env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;gap:2px;padding:6px;background:rgba(15,23,42,.9);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-radius:999px;z-index:45;box-shadow:0 14px 34px rgba(15,23,42,.35);animation:tabIn .8s var(--spring) both}
@keyframes tabIn{from{transform:translate(-50%,140%)}}
.tab-ind{position:absolute;top:6px;bottom:6px;left:0;border-radius:999px;background:linear-gradient(135deg,var(--brand),var(--brand2));transition:transform .5s var(--spring),width .5s var(--spring);z-index:0}
.tab{position:relative;z-index:1;display:flex;align-items:center;gap:7px;height:48px;padding:0 18px;border-radius:999px;color:#94a3b8;font-weight:800;font-size:14px;white-space:nowrap;transition:color .3s}
.tab.on{color:#fff}
.tab .ti{font-size:18px;line-height:1}
.tab .bdg{min-width:20px;height:20px;padding:0 6px;border-radius:10px;background:#f43f5e;color:#fff;font-size:11px;font-style:normal;display:grid;place-items:center}
.tab .bdg[data-n="0"]{display:none}
.tab .bdg.bump{animation:bump .5s var(--spring)}
@keyframes bump{40%{transform:scale(1.6)}}

/* ---------- pull to refresh ---------- */
.ptr{height:0;overflow:hidden;display:flex;align-items:flex-end;justify-content:center;transition:height .35s var(--ease);margin:-16px -16px 0}
.ptr-in{display:flex;align-items:center;gap:8px;padding-bottom:14px;font-size:13px;font-weight:700;color:var(--sub)}
.ptr-ic{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#fff;box-shadow:var(--sh);font-size:17px;color:var(--brand)}
.ptr.ready .ptr-ic{background:var(--brand);color:#fff}
.ptr.busy .ptr-ic{animation:spin .7s linear infinite}

/* ---------- home ---------- */
.hero{position:relative;padding:22px 20px 22px;border-radius:26px;background:linear-gradient(135deg,#0b1440,#1e3a8a 50%,#4c1d95);color:#fff;overflow:visible;isolation:isolate;box-shadow:var(--sh2)}
.hero::before{content:"";position:absolute;inset:0;border-radius:inherit;z-index:-1;overflow:hidden;background:radial-gradient(circle at 85% 10%,rgba(56,189,248,.45),transparent 40%),radial-gradient(circle at 10% 100%,rgba(244,114,182,.35),transparent 45%);animation:heroGlow 10s ease-in-out infinite alternate}
@keyframes heroGlow{to{filter:hue-rotate(40deg)}}
.hero-store{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;padding:5px 12px;border-radius:999px;background:rgba(255,255,255,.14);letter-spacing:.06em}
.pdot{width:8px;height:8px;border-radius:50%;background:#4ade80;box-shadow:0 0 0 0 rgba(74,222,128,.6);animation:dotP 1.8s infinite}
.hero-greet{margin-top:14px;font-size:14px;font-weight:600;opacity:.8}
.hero-q{margin-top:4px;font-size:clamp(26px,5.4vw,44px);font-weight:900;line-height:1.25;letter-spacing:-.01em}
.kw{display:inline-block;overflow:hidden;vertical-align:bottom;padding:0 .02em .12em}
.kw>span{display:inline-block;transform:translateY(115%) skewY(8deg);animation:kwUp .9s var(--ease) forwards;animation-delay:calc(var(--i)*.13s + .1s)}
@keyframes kwUp{to{transform:none}}
.kw.hl{position:relative}
.kw.hl>span{background:linear-gradient(90deg,#fde68a,#f9a8d4,#a5f3fc);-webkit-background-clip:text;background-clip:text;color:transparent}
.kw.hl::after{content:"";position:absolute;left:0;right:0;bottom:.08em;height:.12em;border-radius:4px;background:linear-gradient(90deg,#fde68a,#f9a8d4);transform:scaleX(0);transform-origin:left;animation:ul .8s var(--ease) forwards;animation-delay:calc(var(--i)*.13s + .7s)}
@keyframes ul{to{transform:scaleX(1)}}
.hero-chips{display:flex;gap:8px;margin-top:14px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px}
.hero-chips::-webkit-scrollbar{display:none}
.hchip{flex:none;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.25);font-size:13px;font-weight:700;color:#fff;opacity:0;transform:translateY(10px);animation:chUp .5s var(--ease) forwards;animation-delay:calc(var(--i)*60ms + .8s)}
.hchip:active{transform:scale(.94)}

/* search + autocomplete */
.search{position:relative;margin-top:16px;z-index:5}
.s-field{position:relative;height:56px;border-radius:16px;background:#fff;color:var(--ink);box-shadow:0 10px 30px rgba(2,6,23,.3);display:flex;align-items:center;transition:box-shadow .25s,transform .25s}
.search.focus .s-field{box-shadow:0 0 0 4px rgba(253,230,138,.6),0 16px 40px rgba(2,6,23,.35);transform:translateY(-1px)}
.s-ico{position:absolute;left:16px;font-size:18px;pointer-events:none}
.s-ghost,.s-in{position:absolute;inset:0;padding:0 52px 0 46px;font-size:16px;font-weight:700;line-height:56px;white-space:pre;overflow:hidden}
.s-ghost{color:#94a3b8;pointer-events:none}
.s-ghost .gq{color:transparent}
.s-in{border:0;outline:0;background:transparent;width:100%;height:100%}
.s-in::-webkit-search-cancel-button,.s-in::-webkit-search-decoration{-webkit-appearance:none;display:none}
.s-in::placeholder{color:#94a3b8;font-weight:500;font-size:14px}
.s-clear{position:absolute;right:8px;width:40px;height:40px;border-radius:50%;background:#f1f5f9;font-size:18px;font-weight:700;color:#475569;transform:scale(0);transition:transform .3s var(--spring)}
.s-clear.on{transform:scale(1)}
.s-drop{position:absolute;left:0;right:0;top:calc(100% + 8px);background:#fff;color:var(--ink);border-radius:18px;box-shadow:var(--sh2);max-height:min(56vh,420px);overflow-y:auto;overscroll-behavior:contain;opacity:0;transform:translateY(-8px) scale(.98);transform-origin:top;pointer-events:none;transition:opacity .2s,transform .3s var(--ease)}
.s-drop.on{opacity:1;transform:none;pointer-events:auto}
.s-head{display:flex;justify-content:space-between;align-items:center;padding:10px 16px 4px;font-size:12px;font-weight:800;color:var(--sub)}
.s-head button{color:var(--brand);font-weight:800;font-size:12px;padding:6px}
.s-item{display:flex;align-items:center;gap:12px;padding:12px 16px;min-height:54px;cursor:pointer;border-top:1px solid #f1f5f9;opacity:0;transform:translateX(-10px);animation:sIn .3s var(--ease) forwards;animation-delay:calc(var(--i)*30ms)}
@keyframes sIn{to{opacity:1;transform:none}}
.s-item:first-of-type{border-top:0}
.s-item.act,.s-item:hover{background:#eff6ff}
.s-dot{flex:none;width:12px;height:12px;border-radius:4px;background:var(--c,#cbd5e1)}
.s-main{flex:1;min-width:0}
.s-name{font-weight:800;font-size:15px}
.s-sub{font-size:12px;color:var(--sub);margin-top:1px}
mark{background:#fef08a;color:inherit;border-radius:3px;padding:0 1px}
.tag{flex:none;font-size:11px;font-weight:800;padding:3px 9px;border-radius:999px;background:#f1f5f9;color:#475569}
.tag.lk{background:#dbeafe;color:#1d4ed8}
.s-x{flex:none;width:32px;height:32px;border-radius:50%;color:#94a3b8;font-size:16px}
.s-empty{padding:22px 16px;text-align:center;color:var(--sub);font-size:14px;line-height:1.7}
.s-empty b{display:block;color:var(--ink);font-size:15px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:48px;padding:0 20px;border-radius:14px;font-weight:800;font-size:15px;background:var(--ink);color:#fff;transition:transform .15s,box-shadow .2s;text-decoration:none}
.btn:active{transform:scale(.96)}
.btn.pri{background:linear-gradient(135deg,var(--brand),var(--brand2));box-shadow:0 10px 24px rgba(79,70,229,.35)}
.btn.ghost{background:#f1f5f9;color:var(--ink)}
.btn.line{background:#fff;color:var(--ink);border:1.5px solid var(--line)}
.btn.red{background:#fff;color:#dc2626;border:1.5px solid #fecaca}
.btn.sm{min-height:38px;padding:0 14px;font-size:13px;border-radius:11px}
.btn.wide{width:100%}

.sec{margin-top:28px}
.sec-h{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;margin-bottom:14px}
.sec-h h2{font-size:clamp(20px,3vw,26px);font-weight:900;letter-spacing:-.01em}
.sec-h p{font-size:13px;color:var(--sub);margin-top:3px}
.areas{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
@media(min-width:860px){.areas{grid-template-columns:repeat(4,1fr)}}
.acard{position:relative;text-align:left;padding:16px;border-radius:20px;background:#fff;box-shadow:var(--sh);border:1px solid #edf0f6;overflow:hidden;isolation:isolate;transition:transform .35s var(--ease),box-shadow .35s;opacity:0;transform:translateY(20px);animation:chUp .6s var(--ease) forwards;animation-delay:calc(var(--i)*80ms + .1s)}
.acard::before{content:"";position:absolute;right:-30px;top:-30px;width:110px;height:110px;border-radius:50%;background:var(--c);opacity:.12;z-index:-1;transition:transform .5s var(--ease)}
.acard:hover{box-shadow:0 18px 40px rgba(15,23,42,.14)}
.acard:hover::before{transform:scale(1.5)}
.acard:active{transform:scale(.97)}
.a-ic{width:50px;height:50px;border-radius:16px;display:grid;place-items:center;font-size:26px;background:var(--c);box-shadow:0 8px 18px color-mix(in srgb,var(--c) 40%,transparent);animation:flt 3.4s ease-in-out infinite;animation-delay:calc(var(--i)*-.6s)}
@keyframes flt{50%{transform:translateY(-4px) rotate(-3deg)}}
.a-n{margin-top:12px;font-size:16px;font-weight:900}
.a-d{margin-top:3px;font-size:12px;color:var(--sub);line-height:1.5;min-height:2.9em}
.a-meta{display:flex;flex-wrap:wrap;gap:2px 8px;justify-content:space-between;align-items:center;font-size:11px!important;margin-top:10px;font-size:12px;font-weight:800;color:var(--sub)}
.a-bar{height:6px;border-radius:6px;background:#eef1f6;margin-top:6px;overflow:hidden}
.a-bar i{display:block;height:100%;width:var(--w);background:var(--c);border-radius:inherit;transform-origin:left;animation:barIn 1.2s var(--ease) both;animation-delay:calc(var(--i)*80ms + .5s)}
@keyframes barIn{from{transform:scaleX(0)}}

/* infographic */
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.stat{padding:16px 14px;border-radius:20px;background:#fff;box-shadow:var(--sh);text-align:center}
.stat b{display:block;font-size:clamp(28px,6vw,42px);font-weight:900;line-height:1.1;font-variant-numeric:tabular-nums;background:linear-gradient(135deg,var(--brand),var(--brand2));-webkit-background-clip:text;background-clip:text;color:transparent}
.stat span{font-size:12px;font-weight:800;color:var(--sub)}
.charts{display:grid;grid-template-columns:1fr;gap:12px;margin-top:12px}
@media(min-width:860px){.charts{grid-template-columns:1.1fr .8fr 1.3fr}}
.chart{padding:18px;border-radius:20px;background:#fff;box-shadow:var(--sh)}
.chart h3{font-size:14px;font-weight:900;margin-bottom:12px}
.donut-w{display:flex;align-items:center;gap:16px}
.donut-b{position:relative;flex:none;width:136px;height:136px}
.donut-b svg{width:100%;height:100%;transform:rotate(-90deg)}
.donut-b circle{fill:none;stroke-width:16;transition:stroke-dasharray 1.1s var(--ease)}
.donut-c{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.donut-c b{font-size:28px;font-weight:900;line-height:1;font-variant-numeric:tabular-nums}
.donut-c small{font-size:11px;color:var(--sub);font-weight:700}
.lgd{list-style:none;display:grid;gap:7px;font-size:13px;font-weight:700;flex:1;min-width:0}
.lgd li{display:flex;align-items:center;gap:8px}
.lgd i{flex:none;width:11px;height:11px;border-radius:4px;background:var(--c)}
.lgd span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lgd em{font-style:normal;color:var(--sub)}
.ring-w{display:flex;flex-direction:column;align-items:center;gap:8px}
.ring-w p{font-size:12px;color:var(--sub);font-weight:700;text-align:center}
.bars{display:grid;gap:12px}
.brow{display:grid;grid-template-columns:7.5em 1fr auto;gap:10px;align-items:center;font-size:13px;font-weight:700}
.brow span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.btrack{position:relative;height:14px;border-radius:8px;background:#eef1f6;overflow:hidden}
.btrack i,.btrack b{position:absolute;left:0;top:0;bottom:0;border-radius:inherit;width:0;transition:width 1.2s var(--ease)}
.btrack i{background:color-mix(in srgb,var(--c) 35%,#fff)}
.btrack b{background:var(--c)}
.brow em{font-style:normal;color:var(--sub);font-variant-numeric:tabular-nums;font-size:12px}
.bars-l{display:flex;gap:14px;font-size:11px;color:var(--sub);font-weight:700;margin-top:4px}
.bars-l i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:4px;vertical-align:-1px;background:#94a3b8}
.bars-l i.l2{background:#cbd5e1}
.appc{display:flex;gap:16px;align-items:center;flex-wrap:wrap;padding:18px;border-radius:20px;background:linear-gradient(135deg,#fff7cc,#ffe9a6);box-shadow:var(--sh)}
.appc .ai{font-size:40px;animation:flt 3s ease-in-out infinite}
.appc h3{font-size:17px;font-weight:900}
.appc p{font-size:13px;color:#7a5a00;margin-top:2px}
.appc .acts{display:flex;gap:8px;flex-wrap:wrap;margin-left:auto}

/* ---------- map view ---------- */
#v-map{display:flex;flex-direction:column;overflow:hidden;padding-top:12px}
.map-top{display:flex;align-items:center;gap:12px;margin-bottom:10px;min-width:0}
.vt{font-size:20px;font-weight:900;flex:none}
.chips{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;flex:1;min-width:0;padding:2px}
.chips::-webkit-scrollbar{display:none}
.chip{flex:none;display:inline-flex;align-items:center;gap:6px;height:38px;padding:0 14px;border-radius:999px;background:#fff;border:1.5px solid var(--line);font-size:13px;font-weight:800;transition:all .25s var(--ease)}
.chip i{width:10px;height:10px;border-radius:3px;background:var(--c,#94a3b8)}
.chip.on{background:var(--c,var(--ink));border-color:var(--c,var(--ink));color:#fff;transform:translateY(-1px);box-shadow:0 6px 14px rgba(15,23,42,.15)}
.chip.on i{background:#fff}
.map-wrap{position:relative;flex:1;min-height:0;border-radius:24px;overflow:hidden;background:#e9edf4;box-shadow:var(--sh);border:1px solid #e2e8f0}
#map-svg,#ed-svg{display:block;width:100%;height:100%;touch-action:none;user-select:none;-webkit-user-select:none}
.map-fab{position:absolute;right:12px;bottom:12px;display:flex;flex-direction:column;gap:8px;z-index:3}
.map-fab button,.ed-zoom button{width:46px;height:46px;border-radius:14px;background:rgba(255,255,255,.95);box-shadow:0 6px 16px rgba(15,23,42,.18);font-size:20px;font-weight:900;transition:transform .15s}
.map-fab button:active{transform:scale(.88)}
.map-hint{position:absolute;left:12px;top:12px;right:70px;z-index:3;font-size:12px;font-weight:700;color:#475569;background:rgba(255,255,255,.88);padding:7px 12px;border-radius:12px;width:max-content;max-width:calc(100% - 84px);transition:opacity .6s}
.map-hint.hide{opacity:0;pointer-events:none}
.map-sk{position:absolute;inset:0;z-index:4;border-radius:0;transition:opacity .5s}
.map-sk.hide{opacity:0;pointer-events:none}
.map-sk .sk-grid{position:absolute;inset:8% 6%;display:grid;grid-template-columns:repeat(8,1fr);gap:12px}
.map-sk .sk-grid i{background:#dde3ee;border-radius:8px}
/* map svg shared */
.mapsvg text{font-weight:800;text-anchor:middle;dominant-baseline:central;paint-order:stroke;stroke:#fff;stroke-width:3px;stroke-linejoin:round;pointer-events:none;font-family:"Hiragino Sans","Noto Sans JP","Noto Sans SC",system-ui,sans-serif}
.mapsvg text.dk{stroke:none}
.mapsvg text.v{writing-mode:vertical-rl;text-orientation:upright;letter-spacing:0}
body[data-lang=en] .mapsvg text.v{text-orientation:mixed}
.mapsvg .it{cursor:pointer;transition:opacity .35s}
#map-svg .it{transform-box:fill-box;transform-origin:center;animation:itIn .6s var(--ease) both;animation-delay:calc(var(--d)*1ms)}
@keyframes itIn{from{opacity:0;transform:scale(.6)}}
.mapsvg .it:hover rect{filter:brightness(.96)}
.mapsvg .it.dim{opacity:.18}
.mapsvg .it.hl rect{stroke:#dc2626!important;stroke-width:3.5px!important;animation:hlP .9s ease-in-out infinite alternate}
@keyframes hlP{to{fill:#fecaca}}
.pin .pin-b{animation:pinB .8s ease-in-out infinite alternate}
.pin.drop .pin-b{animation:pinD .7s var(--spring) both,pinB .8s .7s ease-in-out infinite alternate}
@keyframes pinB{to{transform:translateY(-7px)}}
@keyframes pinD{from{transform:translateY(-80px);opacity:0}}
.pin .pr{fill:none;stroke:#ef4444;stroke-width:3;transform-box:fill-box;transform-origin:center;animation:prA 1.8s ease-out infinite}
.pin .r2{animation-delay:.9s}
@keyframes prA{from{transform:scale(.3);opacity:.9}to{transform:scale(2.8);opacity:0}}
.pin text{font-size:13px;fill:#b91c1c;stroke-width:4px}

/* ---------- list ---------- */
.lsec{margin-top:22px}
.lsec h3{font-size:14px;font-weight:900;color:var(--sub);margin:0 4px 10px}
.sw{position:relative;margin-bottom:10px;border-radius:18px;overflow:hidden;transition:height .35s var(--ease),margin .35s var(--ease),opacity .3s}
.sw-bg{position:absolute;inset:0;display:flex;justify-content:space-between;align-items:center;padding:0 22px;font-weight:900;font-size:14px;color:#fff;background:#94a3b8}
.sw.to-l .sw-bg{background:#ef4444}
.sw.to-r .sw-bg{background:var(--brand)}
.sw-bg span{opacity:0;transition:opacity .2s,transform .25s var(--spring)}
.sw.to-r .sw-r,.sw.to-l .sw-l{opacity:1}
.sw.arm .sw-r,.sw.arm .sw-l{transform:scale(1.15)}
.sw-fg{position:relative;background:#fff;touch-action:pan-y;user-select:none;-webkit-user-select:none;cursor:grab}
.sw-fg.snap{transition:transform .35s var(--ease)}
.lrow{display:flex;align-items:center;gap:12px;padding:14px 16px;min-height:68px}
.lrow .s-dot{width:14px;height:40px;border-radius:7px}
.lempty{padding:40px 20px;text-align:center;border-radius:22px;background:#fff;border:2px dashed #dbe1ea;color:var(--sub);font-size:14px;line-height:1.8}
.lempty .hb{display:block;font-size:46px;color:#f43f5e;animation:beat 1.6s ease-in-out infinite}
@keyframes beat{15%{transform:scale(1.25)}30%{transform:scale(1)}45%{transform:scale(1.15)}60%{transform:scale(1)}}
.swhint{display:flex;justify-content:center;font-size:12px;font-weight:700;color:var(--sub);margin:4px 0 12px;animation:nudge 2.4s ease-in-out infinite}
@keyframes nudge{50%{transform:translateX(6px)}}

/* ---------- toast ---------- */
#toasts{position:fixed;left:50%;bottom:calc(var(--tab) + 34px + env(safe-area-inset-bottom));transform:translateX(-50%);z-index:900;display:flex;flex-direction:column-reverse;gap:8px;align-items:center;width:min(92vw,440px);pointer-events:none}
.toast{position:relative;overflow:hidden;pointer-events:auto;display:flex;align-items:center;gap:10px;width:100%;padding:12px 14px;border-radius:16px;background:rgba(15,23,42,.95);color:#fff;font-size:14px;font-weight:700;box-shadow:0 16px 36px rgba(2,6,23,.35);opacity:0;transform:translateY(24px) scale(.94);transition:opacity .3s,transform .45s var(--spring);touch-action:pan-y}
.toast.in{opacity:1;transform:none}
.toast.out{opacity:0;transform:translateY(12px) scale(.96);transition:opacity .25s,transform .3s}
.t-ic{flex:none;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.14);font-size:14px}
.t-msg{flex:1;min-width:0;line-height:1.45}
.t-act{flex:none;padding:7px 12px;border-radius:10px;background:#fde68a;color:#422006;font-weight:900;font-size:13px}
.t-bar{position:absolute;left:0;bottom:0;height:3px;width:100%;background:linear-gradient(90deg,#60a5fa,#c084fc);transform-origin:left;animation:tbar linear forwards}
@keyframes tbar{to{transform:scaleX(0)}}

/* ---------- bottom sheet ---------- */
.sheet-root{position:fixed;inset:0;z-index:700}
.sheet-bd{position:absolute;inset:0;background:rgba(2,6,23,.45);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);opacity:0;transition:opacity .35s}
.sheet-root.on .sheet-bd{opacity:1}
.sheet{position:absolute;left:0;right:0;bottom:0;margin:0 auto;max-width:640px;max-height:88vh;max-height:88dvh;display:flex;flex-direction:column;background:#fff;border-radius:26px 26px 0 0;box-shadow:0 -20px 60px rgba(2,6,23,.3);transform:translateY(105%);transition:transform .5s var(--ease);padding-bottom:env(safe-area-inset-bottom)}
.sheet-root.on .sheet{transform:translateY(0)}
.sheet.drag{transition:none}
.sheet-grab{flex:none;height:30px;display:grid;place-items:center;cursor:grab;touch-action:none}
.sheet-grab i{width:44px;height:5px;border-radius:5px;background:#cbd5e1}
.sheet-body{flex:1;overflow-y:auto;overscroll-behavior:contain;padding:0 20px 22px}
.sheet-body.swap>*{animation:chUp .45s var(--ease) both}
.sh-drag{touch-action:none;cursor:grab}
.sh-h{display:flex;align-items:flex-start;gap:12px;margin-bottom:14px}
.sh-h h2{font-size:clamp(22px,5vw,28px);font-weight:900;line-height:1.25}
.sh-h h2 span{display:inline-block;opacity:0;transform:translateY(.5em);animation:chUp .5s var(--ease) forwards;animation-delay:calc(var(--i)*28ms)}
.sh-x{margin-left:auto;flex:none;width:38px;height:38px;border-radius:50%;background:#f1f5f9;font-size:16px;font-weight:900}
.abadge{display:inline-flex;align-items:center;gap:6px;padding:4px 11px;border-radius:999px;font-size:12px;font-weight:800;color:#fff;background:var(--c,#64748b);margin-bottom:8px}
.note{padding:12px 14px;border-radius:14px;background:#ecfdf5;border:1px solid #a7f3d0;color:#065f46;font-size:13px;font-weight:600;line-height:1.65;margin-bottom:12px}
.sh-acts{display:grid;gap:10px;margin:6px 0 16px}
.sh-acts .row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.prep{padding:12px;border-radius:14px;background:#f8fafc;color:var(--sub);font-size:13px;font-weight:700;text-align:center}
.near h4{font-size:13px;font-weight:900;color:var(--sub);margin:4px 0 10px}
.nchips{display:flex;flex-wrap:wrap;gap:8px}
.nchip{display:inline-flex;align-items:center;gap:6px;padding:9px 13px;border-radius:12px;background:#f8fafc;border:1px solid var(--line);font-size:13px;font-weight:700;opacity:0;animation:chUp .4s var(--ease) forwards;animation-delay:calc(var(--i)*50ms + .2s)}
.nchip i{width:9px;height:9px;border-radius:3px;background:var(--c)}
.nchip small{color:var(--sub);font-weight:600}
.alist{display:grid;gap:8px}
.arow{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:13px 14px;border-radius:14px;background:#f8fafc;border:1px solid #eef1f6;font-weight:800;font-size:15px;opacity:0;transform:translateX(-12px);animation:sIn .4s var(--ease) forwards;animation-delay:calc(var(--i)*35ms)}
.arow:active{background:#eff6ff}
.arow .s-main{font-size:15px}
.arow .arr{color:var(--brand);font-weight:900}
.fld{display:block;margin-bottom:12px}
.fld>span{display:block;font-size:12px;font-weight:800;color:#334155;margin-bottom:5px}
.inp{width:100%;min-height:44px;padding:9px 12px;border-radius:12px;border:1.5px solid #dbe1ea;background:#fff;outline:none;transition:border-color .2s,box-shadow .2s}
.inp:focus{border-color:var(--brand);box-shadow:0 0 0 4px rgba(37,99,235,.15)}
textarea.inp{min-height:84px;resize:vertical;line-height:1.55}
.pills{display:flex;flex-wrap:wrap;gap:8px}
.pill{padding:9px 14px;min-height:42px;border-radius:12px;border:1.5px solid #dbe1ea;background:#fff;font-size:13px;font-weight:700;transition:all .2s var(--ease)}
.pill.on{border-color:var(--brand);background:#eff6ff;color:var(--brand);transform:scale(1.03)}
.ticket{border:2px solid #93c5fd;border-radius:18px;padding:16px;animation:chUp .5s var(--ease)}
.ticket .tb{padding:10px;border-radius:12px;background:#fef9c3;border:1.5px solid #facc15;font-weight:800;font-size:13px;text-align:center;margin-bottom:12px}
.ticket dl{display:grid;gap:10px}
.ticket dt{font-size:11px;font-weight:800;color:var(--sub)}
.ticket dd{font-size:15px;font-weight:700;margin-top:1px;white-space:pre-wrap}
.seg{display:inline-flex;padding:4px;border-radius:14px;background:#f1f5f9;gap:4px}
.seg button{padding:9px 14px;border-radius:10px;font-weight:800;font-size:13px}
.seg button.on{background:#fff;box-shadow:0 2px 8px rgba(15,23,42,.12);color:var(--brand)}
.mrow{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px solid #f1f5f9;font-weight:800}
.mbtn{display:flex;align-items:center;gap:12px;width:100%;padding:15px 14px;margin-top:8px;border-radius:14px;background:#f8fafc;font-weight:800;text-align:left}
.mbtn i{font-style:normal;width:36px;height:36px;border-radius:11px;display:grid;place-items:center;background:#fff;box-shadow:0 2px 6px rgba(15,23,42,.08)}

/* ---------- editor ---------- */
.ed{position:fixed;inset:0;z-index:600;background:#0f172a;display:flex;flex-direction:column;opacity:0;transform:scale(1.02);transition:opacity .35s,transform .45s var(--ease)}
.ed.on{opacity:1;transform:none}
.ed-top{flex:none;display:flex;align-items:center;gap:8px;padding:calc(8px + env(safe-area-inset-top)) max(10px,env(safe-area-inset-right)) 8px max(10px,env(safe-area-inset-left));background:#111827;color:#e2e8f0;overflow-x:auto;scrollbar-width:none}
.ed-top::-webkit-scrollbar{display:none}
.ed-top button{flex:none}
.ed-done{height:42px;padding:0 16px;border-radius:12px;background:linear-gradient(135deg,var(--brand),var(--brand2));color:#fff;font-weight:900}
.ed-tools{display:flex;gap:4px;padding:4px;border-radius:14px;background:#1f2937}
.ed-tools button{display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:52px;height:46px;border-radius:10px;font-size:10px;font-weight:800;color:#94a3b8;gap:1px;transition:background .2s,color .2s}
.ed-tools button i{font-style:normal;font-size:17px;line-height:1}
.ed-tools button.on{background:#334155;color:#fff;box-shadow:inset 0 0 0 1.5px #60a5fa}
.ed-acts{display:flex;gap:4px;align-items:center;margin-left:auto}
.ed-acts button{width:42px;height:42px;border-radius:11px;background:#1f2937;font-size:17px;font-weight:900;color:#e2e8f0}
.ed-acts button:disabled{opacity:.35}
.ed-acts button.on{background:#1e3a8a}
.ed-save{flex:none;font-size:11px;font-weight:800;color:#86efac;padding:0 6px;white-space:nowrap;transition:color .3s}
.ed-save.dirty{color:#fbbf24}
.ed-main{flex:1;min-height:0;display:flex}
.ed-cv{position:relative;flex:1;min-width:0;background:#cbd5e1}
#ed-svg .it{cursor:move}
#ed-svg .it.sel rect{stroke:#2563eb!important;stroke-width:2.5px!important}
#ed-svg.draw{cursor:crosshair}
#ed-svg.draw .it{cursor:crosshair}
.hdl{fill:#fff;stroke:#2563eb;stroke-width:1.5px;vector-effect:non-scaling-stroke}
.ed-hint{position:absolute;left:10px;top:10px;right:10px;z-index:2;width:max-content;max-width:calc(100% - 20px);font-size:12px;font-weight:700;color:#fff;background:rgba(15,23,42,.82);padding:7px 12px;border-radius:10px;pointer-events:none}
.ed-zoom{position:absolute;right:10px;bottom:10px;display:flex;flex-direction:column;gap:6px;z-index:2}
.ed-pn{flex:none;width:360px;background:#fff;display:flex;flex-direction:column;border-left:1px solid #e2e8f0}
.ed-pn-grab{display:none}
.ed-pn-body{flex:1;overflow-y:auto;padding:14px 16px 30px}
.pn-h{display:flex;align-items:center;gap:8px;margin:2px 0 12px}
.pn-h h3{font-size:16px;font-weight:900}
.pn-h .tag{margin-left:auto}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
.g4 .fld>span{font-size:11px}
.g4 .inp{padding:8px 6px;min-height:40px;font-size:14px}
details.pn{border:1px solid #e2e8f0;border-radius:14px;margin-bottom:10px}
details.pn>summary{list-style:none;cursor:pointer;padding:13px 14px;border-radius:13px;font-weight:900;font-size:14px;display:flex;align-items:center;gap:8px;background:#f8fafc}
details.pn>summary::-webkit-details-marker{display:none}
details.pn>summary::after{content:"＋";margin-left:auto;color:var(--sub);transition:transform .3s}
details.pn[open]>summary{border-radius:13px 13px 0 0}
details.pn[open]>summary::after{transform:rotate(45deg)}
details.pn>div{padding:12px 14px}
.spk{position:relative}
.spk-dd{position:absolute;left:0;right:0;top:calc(100% + 6px);z-index:20;max-height:260px;overflow-y:auto;overscroll-behavior:contain;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:var(--sh2);opacity:0;transform:translateY(-6px);pointer-events:none;transition:opacity .2s,transform .3s var(--ease)}
.spk-dd.on{opacity:1;transform:none;pointer-events:auto}
.spk-h{position:sticky;top:0;background:#fff;padding:8px 12px 4px;font-size:11px;font-weight:800;color:var(--sub)}
.spk-i{display:flex;justify-content:space-between;align-items:center;gap:8px;width:100%;text-align:left;padding:11px 12px;min-height:44px;border-top:1px solid #f1f5f9;font-size:14px;font-weight:700;opacity:0;animation:sIn .3s var(--ease) forwards;animation-delay:calc(var(--i)*20ms)}
.spk-i:hover,.spk-i.act{background:#eff6ff}
.spk-new{padding:12px;font-size:13px;font-weight:800;color:#047857;background:#ecfdf5;cursor:pointer;border-top:1px solid #d1fae5}
.sheet-body{overflow-x:visible}
.sheet-body>*:has(.spk-dd.on),.g2:has(.spk-dd.on),.fld:has(.spk-dd.on),details.pn:has(.spk-dd.on),details.pn>div:has(.spk-dd.on){position:relative;z-index:60}
.arearow{display:grid;grid-template-columns:44px 44px 1fr 36px;gap:6px;align-items:center;margin-bottom:8px}
.arearow input[type=color]{width:44px;height:40px;padding:2px;border-radius:10px;border:1.5px solid #dbe1ea;background:#fff}
.arearow .inp{min-height:40px;padding:6px 8px;font-size:14px}
.arearow .ex{grid-column:3/4;display:grid;grid-template-columns:1fr 1fr;gap:6px}
.pn-btns{display:flex;flex-wrap:wrap;gap:8px}
.pn-tip{font-size:12px;color:var(--sub);line-height:1.7;margin-top:8px}
.rng{width:100%}
.chk{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;margin:8px 0}
.chk input{width:20px;height:20px}
@media(max-width:860px){
 .ed-main{position:relative}
 .ed-pn{position:absolute;left:0;right:0;bottom:0;width:auto;height:46vh;border-left:0;border-radius:22px 22px 0 0;box-shadow:0 -16px 40px rgba(2,6,23,.3);transition:transform .45s var(--ease);z-index:3}
 .ed-pn.min{transform:translateY(calc(100% - 46px))}
 .ed-pn-grab{display:grid;place-items:center;height:46px;flex:none;cursor:pointer;font-size:12px;font-weight:800;color:var(--sub);gap:4px}
 .ed-pn-grab i{width:44px;height:5px;border-radius:5px;background:#cbd5e1}
 .ed-zoom{bottom:calc(46vh + 10px);transition:bottom .45s var(--ease)}
 .ed-pn.min~.ed-zoom,.ed-main.pmin .ed-zoom{bottom:56px}
 .ed-tools button{min-width:46px}
 .ed-tools button span{display:none}
}
@media(max-width:520px){
 .tab{padding:0 14px}
 .tab span[data-t]{font-size:13px}
 .stats{gap:8px}
 .stat{padding:14px 8px}
 .donut-w{flex-direction:column;align-items:stretch}
 .donut-b{margin:0 auto}
 .brow{grid-template-columns:6em 1fr auto}
 .tb-btn.hide-s{display:none}
}
@media(prefers-reduced-motion:reduce){*{animation-duration:1ms!important;animation-iteration-count:1!important;transition-duration:1ms!important}}

/* スタート画面：店舗の選択 */
.sp-shop{display:inline-flex;align-items:center;gap:12px;margin-top:clamp(12px,2.5vh,22px);padding:9px 14px 9px 12px;border-radius:999px;background:rgba(255,255,255,.12);border:1.5px solid rgba(255,255,255,.35);color:#fff;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);text-align:left;opacity:0;animation:spIn .8s cubic-bezier(.2,.8,.2,1) 1.2s forwards;transition:background .2s,transform .2s}
.sp-shop:active{transform:scale(.96)}.sp-shop:hover{background:rgba(255,255,255,.22)}
.sp-shop .ic{font-size:22px}.sp-shop .tx{display:flex;flex-direction:column;line-height:1.25}.sp-shop small{font-size:11px;opacity:.75;font-weight:700}.sp-shop b{font-size:15px}
.sp-shop .ch{margin-left:6px;font-size:12px;font-weight:800;padding:4px 10px;border-radius:999px;background:rgba(255,255,255,.18)}
@keyframes spIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.shp-sec{font-size:12px;font-weight:900;color:var(--sub);margin:14px 2px 8px}
.shp-list{display:grid;gap:8px}
.shp-row{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:13px 14px;border-radius:14px;background:#f8fafc;border:1px solid #eef1f6;font-weight:800;font-size:15px}
.shp-row.on{background:#eff6ff;border-color:#bfdbfe}.shp-row .s-main{flex:1}.shp-row small{display:block;font-size:11px;color:var(--sub);font-weight:700}
.shp-tabs{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px}
.shp-tabs button{padding:11px;border-radius:12px;border:1.5px solid #dbe1ea;background:#fff;font-weight:800;font-size:14px}
.shp-tabs button.on{background:var(--brand);border-color:var(--brand);color:#fff}
</style>
</head>
<body data-lang="ja">

<!-- ============ SPLASH ============ -->
<div id="splash" role="button" tabindex="0" aria-label="Start">
  <div class="sp-bg"><i class="blob b1"></i><i class="blob b2"></i><i class="blob b3"></i></div>
  <svg class="sp-map" id="sp-map" preserveAspectRatio="xMidYMid slice" aria-hidden="true"></svg>
  <div class="sp-float" id="sp-float" aria-hidden="true"></div>
  <div class="sp-inner">
    <div class="sp-sub" id="sp-sub"></div>
    <div class="sp-store" id="sp-store"></div>
    <div class="sp-verb" id="sp-verb" aria-hidden="true"></div>
    <p class="sp-tag" data-t="tagline"></p>
    <button class="sp-shop" id="sp-shop" type="button"><span class="ic">🏬</span><span class="tx"><small>あなたのノジマの店舗は？</small><b id="sp-shop-n"></b></span><span class="ch">変更 ›</span></button>
    <div class="sp-langs" id="sp-langs">
      <button type="button" data-l="ja" lang="ja"><b>日本語</b><small>Japanese</small></button>
      <button type="button" data-l="en" lang="en"><b>English</b><small>英語</small></button>
      <button type="button" data-l="zh" lang="zh-CN"><b>中文</b><small>Chinese</small></button>
    </div>
    <div class="sp-tap" data-t="tap"></div>
  </div>
  <div class="sp-clock"><b id="sp-time"></b><span id="sp-date"></span></div>
</div>

<!-- ============ APP ============ -->
<div id="app">
  <header class="topbar">
    <button class="tb-store" id="tb-store" type="button"><span class="tb-dot"></span><span class="tb-name" id="tb-name"></span></button>
    <div class="tb-sp"></div>
    <button class="tb-btn hide-s" id="tb-refresh" type="button" aria-label="refresh">↻</button>
    <button class="tb-btn" id="tb-ask" type="button" aria-label="ask">💬</button>
    <button class="tb-btn" id="tb-lang" type="button">🌐 <span id="tb-lang-l">JA</span></button>
    <button class="tb-btn tb-edit" id="tb-edit" type="button">✏️ <span>マップ</span>編集</button>
    <button class="tb-btn" id="tb-menu" type="button" aria-label="menu">⚙</button>
  </header>
  <main id="views">
    <section class="view on" id="v-home" data-v="home">
      <div class="ptr"><div class="ptr-in"><span class="ptr-ic">↓</span><span class="ptr-tx"></span></div></div>
      <div class="wrap" id="home"></div>
    </section>
    <section class="view" id="v-map" data-v="map">
      <div class="map-top"><h2 class="vt" data-t="mapT"></h2><div class="chips" id="map-chips"></div><button class="btn sm pri rp map-edit" id="map-edit" type="button">✏️ <span>このマップを</span>編集</button></div>
      <div class="map-wrap" id="map-wrap">
        <svg id="map-svg" class="mapsvg" preserveAspectRatio="xMidYMid meet"></svg>
        <div class="map-hint" id="map-hint" data-t="mapHint"></div>
        <div class="map-fab"><button type="button" data-z="in" aria-label="zoom in">＋</button><button type="button" data-z="out" aria-label="zoom out">－</button><button type="button" data-z="fit" aria-label="fit">⤢</button></div>
        <div class="map-sk sk" id="map-sk"><div class="sk-grid"></div></div>
      </div>
    </section>
    <section class="view" id="v-list" data-v="list">
      <div class="ptr"><div class="ptr-in"><span class="ptr-ic">↓</span><span class="ptr-tx"></span></div></div>
      <div class="wrap" id="list"></div>
    </section>
  </main>
  <nav class="tabbar" id="tabbar">
    <span class="tab-ind" id="tab-ind"></span>
    <button class="tab on" type="button" data-v="home"><span class="ti">⌂</span><span data-t="tabHome"></span></button>
    <button class="tab" type="button" data-v="map"><span class="ti">◫</span><span data-t="tabMap"></span></button>
    <button class="tab" type="button" data-v="list"><span class="ti">♡</span><span data-t="tabList"></span><i class="bdg" id="fav-bdg" data-n="0">0</i></button>
  </nav>
</div>

<div id="sheet" class="sheet-root" hidden>
  <div class="sheet-bd"></div>
  <div class="sheet" role="dialog" aria-modal="true"><div class="sheet-grab"><i></i></div><div class="sheet-body"></div></div>
</div>
<div id="toasts" aria-live="polite"></div>

<!-- ============ EDITOR ============ -->
<div id="editor" class="ed" hidden>
  <div class="ed-top">
    <button class="ed-done" id="ed-done" type="button">✓ 完了</button>
    <div class="ed-tools" id="ed-tools">
      <button type="button" data-tool="select" class="on" title="選択・移動"><i>↖</i><span>選択</span></button>
      <button type="button" data-tool="shelf" title="棚を描く"><i>▭</i><span>棚</span></button>
      <button type="button" data-tool="counter" title="レジを描く"><i>¥</i><span>レジ</span></button>
      <button type="button" data-tool="wall" title="壁・柱を描く"><i>▬</i><span>壁・柱</span></button>
      <button type="button" data-tool="label" title="文字を置く"><i>T</i><span>文字</span></button>
      <button type="button" data-tool="entrance" title="入口を置く"><i>⇥</i><span>入口</span></button>
    </div>
    <div class="ed-acts">
      <span class="ed-save" id="ed-save">保存済み</span>
      <button type="button" id="ed-undo" title="元に戻す (Ctrl+Z)">↶</button>
      <button type="button" id="ed-redo" title="やり直す (Ctrl+Y)">↷</button>
      <button type="button" id="ed-snap" class="on" title="グリッドに吸着">🧲</button>
    </div>
  </div>
  <div class="ed-main" id="ed-main">
    <div class="ed-cv" id="ed-cv">
      <svg id="ed-svg" class="mapsvg" preserveAspectRatio="xMidYMid meet"></svg>
      <div class="ed-hint" id="ed-hint"></div>
    </div>
    <aside class="ed-pn" id="ed-pn"><button type="button" class="ed-pn-grab" id="ed-pn-grab"><i></i><span id="ed-pn-title">設定</span></button><div class="ed-pn-body" id="ed-pn-body"></div></aside>
    <div class="ed-zoom"><button type="button" data-ez="in">＋</button><button type="button" data-ez="out">－</button><button type="button" data-ez="fit">⤢</button></div>
  </div>
</div>
<input type="file" id="file-in" hidden accept=".json,.svg,application/json,image/svg+xml,image/png,image/jpeg,image/webp">

<script>
(() => {
'use strict';
/* =====================================================================
   0. ユーティリティ
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const uid = () => Math.random().toString(36).slice(2, 9);
const newStoreId = () => 's' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const LS = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};
const vib = n => { try { navigator.vibrate && navigator.vibrate(n || 8); } catch (e) {} };
function hexA(h, a) {
  h = String(h || '#94a3b8').replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const n = parseInt(h, 16);
  if (isNaN(n)) return `rgba(148,163,184,${a})`;
  return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`;
}
function download(name, text, type) {
  const b = new Blob([text], { type: type || 'application/json' }), u = URL.createObjectURL(b), a = document.createElement('a');
  a.href = u; a.download = name; document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(u); a.remove(); }, 600);
}
const safeName = s => String(s || 'store').replace(/[\\/:*?"<>|\s]+/g, '_').slice(0, 40);

/* =====================================================================
   1. 多言語
   ===================================================================== */
const LANGS = ['ja', 'en', 'zh'];
let lang = LS.get('fg-lang', 'ja');
if (!LANGS.includes(lang)) lang = 'ja';
let motion = !RM && LS.get('fg-motion', true) !== false;
const I18N = {
  ja: {
    tabHome: 'ホーム', tabMap: 'マップ', tabList: 'マイリスト', tap: 'タップしてスタート', tagline: '売り場さがし ・ フロアマップ ・ 商品のご相談',
    verbs: ['探す。', '比べる。', '見つける。'], greet: ['おはようございます', 'こんにちは', 'こんばんは'],
    hero: ['今日は', '何を', 'お探しですか？'], heroHl: 1, heroJoin: '',
    ph: '商品名・売り場名で検索（例：れいぞうこ、iPad）', recent: '最近の検索', clear: 'すべて消去', none: '見つかりませんでした',
    noneSub: '別のことばで試すか、店員にご相談ください', ask: '店員に相談する', linked: '紹介ページあり', prep: '準備中', popular: 'よく見られている売り場',
    areasT: 'エリアから探す', areasS: 'エリアを選ぶと売り場の一覧が開きます', corners: '売り場',
    statsT: 'このお店をデータで見る', statsS: 'フロアマップのデータから自動で集計しています', stCorner: '売り場', stArea: 'エリア', stLinked: '紹介ページ',
    stRate: '紹介ページ公開率', stBy: 'エリア別の売り場数', stLinkBy: 'エリア別の紹介ページ', total: '全体', withPage: '紹介ページあり',
    pull: '引っぱって更新', release: '離すと更新', refreshing: '更新しています…', refreshed: '最新の情報に更新しました',
    all: 'すべて', mapT: 'フロアマップ', mapHint: 'ドラッグで移動 ・ ピンチ／ホイールで拡大 ・ 売り場をタップで詳細', here: 'こちらです',
    open: '紹介ページを見る ↗', prepMsg: 'この売り場の紹介ページは準備中です', fav: '♡ マイリストに追加', unfav: '♥ マイリストに追加済み',
    near: '近くの売り場', onMap: 'マップで見る', areaMap: 'このエリアをマップで表示', favAdd: 'マイリストに追加しました', favDel: 'マイリストから外しました', undo: '元に戻す',
    listT: 'マイリスト', listS: '気になる売り場を保存しておけます', listEmpty: 'まだ保存した売り場はありません。<br>売り場の詳細で「♡ マイリストに追加」を押してください。',
    swipe: '← 左にスワイプで削除 ・ 右にスワイプでマップ →', del: '削除', recentT: '最近の検索', recentEmpty: '検索履歴はありません', recentDel: '検索履歴を削除しました',
    cT: 'ご相談シート', cD: '内容を選んで作成し、この画面を店員にお見せください', cP: 'ご相談の目的', cA: '対象のエリア', cX: '詳しいご要望（任意）',
    cPh: '例：予算10万円以内で軽いノートPCを探している', cMake: '相談シートを作成', cShow: '📸 この画面を店員にお見せください', cBack: '← 入力し直す',
    cPs: ['商品の場所を知りたい', '商品の比較・相談', '在庫・価格の確認', 'その他'], cOther: 'その他', none2: '特になし（口頭で確認）', cMade: '相談シートを作成しました',
    menu: 'メニュー', lang: '言語', motion: 'アニメーション', on: 'オン', off: 'オフ', edit: 'フロアマップを編集', stores: '店舗の切り替え・管理', home: 'スタート画面に戻る',
    appT: 'ノジマアプリをダウンロード', appS: 'ポイント抽選・購入履歴・お得な情報をアプリで', sections: '件', close: '閉じる', langChanged: '日本語に切り替えました'
  },
  en: {
    tabHome: 'Home', tabMap: 'Map', tabList: 'My List', tap: 'TAP TO START', tagline: 'Find products · Floor map · Ask our staff',
    verbs: ['Find.', 'Compare.', 'Discover.'], greet: ['Good morning', 'Hello', 'Good evening'],
    hero: ['What', 'are you', 'looking for', 'today?'], heroHl: 2, heroJoin: ' ',
    ph: 'Search products or sections (e.g. fridge, iPad)', recent: 'Recent searches', clear: 'Clear all', none: 'No results',
    noneSub: 'Try another word, or ask our staff', ask: 'Ask staff', linked: 'Guide page', prep: 'Coming soon', popular: 'Popular sections',
    areasT: 'Browse by area', areasS: 'Pick an area to see its sections', corners: 'sections',
    statsT: 'This store in numbers', statsS: 'Calculated automatically from the floor map', stCorner: 'Sections', stArea: 'Areas', stLinked: 'Guide pages',
    stRate: 'Guide page coverage', stBy: 'Sections by area', stLinkBy: 'Guide pages by area', total: 'Total', withPage: 'With guide page',
    pull: 'Pull to refresh', release: 'Release to refresh', refreshing: 'Refreshing…', refreshed: 'Everything is up to date',
    all: 'All', mapT: 'Floor map', mapHint: 'Drag to move · pinch / wheel to zoom · tap a section', here: 'Here',
    open: 'Open guide page ↗', prepMsg: 'The guide page for this section is coming soon', fav: '♡ Save to My List', unfav: '♥ Saved',
    near: 'Nearby sections', onMap: 'Show on map', areaMap: 'Show this area on the map', favAdd: 'Saved to My List', favDel: 'Removed from My List', undo: 'Undo',
    listT: 'My List', listS: 'Keep the sections you like here', listEmpty: 'Nothing saved yet.<br>Tap “♡ Save to My List” on any section.',
    swipe: '← swipe left to delete · swipe right for map →', del: 'Delete', recentT: 'Recent searches', recentEmpty: 'No search history', recentDel: 'Search removed',
    cT: 'Consultation sheet', cD: 'Fill it in and show this screen to our staff', cP: 'Purpose', cA: 'Area', cX: 'Details (optional)',
    cPh: 'e.g. a light laptop under ¥100,000', cMake: 'Create sheet', cShow: '📸 Please show this screen to our staff', cBack: '← Edit',
    cPs: ['Find a product', 'Compare & advice', 'Stock & price', 'Other'], cOther: 'Other', none2: 'None (will explain in person)', cMade: 'Sheet created',
    menu: 'Menu', lang: 'Language', motion: 'Animations', on: 'On', off: 'Off', edit: 'Edit floor map', stores: 'Switch / manage stores', home: 'Back to start screen',
    appT: 'Get the Nojima app', appS: 'Point lottery, purchase history and deals in the app', sections: '', close: 'Close', langChanged: 'Switched to English'
  },
  zh: {
    tabHome: '首页', tabMap: '地图', tabList: '我的收藏', tap: '点击开始', tagline: '查找卖场 · 楼层地图 · 商品咨询',
    verbs: ['寻找。', '比较。', '发现。'], greet: ['早上好', '您好', '晚上好'],
    hero: ['今天', '您在', '寻找', '什么？'], heroHl: 2, heroJoin: '',
    ph: '搜索商品或卖场（例：冰箱、iPad）', recent: '最近搜索', clear: '全部清除', none: '未找到结果',
    noneSub: '请换个关键词，或咨询店员', ask: '咨询店员', linked: '有介绍页', prep: '准备中', popular: '热门卖场',
    areasT: '按区域查找', areasS: '选择区域即可查看卖场列表', corners: '个卖场',
    statsT: '用数据看本店', statsS: '根据楼层地图数据自动统计', stCorner: '卖场', stArea: '区域', stLinked: '介绍页',
    stRate: '介绍页开放率', stBy: '各区域卖场数', stLinkBy: '各区域介绍页', total: '全部', withPage: '有介绍页',
    pull: '下拉刷新', release: '松开刷新', refreshing: '正在刷新…', refreshed: '已更新为最新信息',
    all: '全部', mapT: '楼层地图', mapHint: '拖动移动 · 双指／滚轮缩放 · 点击卖场查看详情', here: '在这里',
    open: '查看介绍页 ↗', prepMsg: '该卖场的介绍页正在准备中', fav: '♡ 加入收藏', unfav: '♥ 已收藏',
    near: '附近卖场', onMap: '在地图上查看', areaMap: '在地图上显示该区域', favAdd: '已加入收藏', favDel: '已取消收藏', undo: '撤销',
    listT: '我的收藏', listS: '可以保存感兴趣的卖场', listEmpty: '还没有收藏。<br>请在卖场详情中点击“♡ 加入收藏”。',
    swipe: '← 左滑删除 · 右滑查看地图 →', del: '删除', recentT: '最近搜索', recentEmpty: '暂无搜索记录', recentDel: '已删除搜索记录',
    cT: '咨询单', cD: '选择内容后生成，并向店员出示此画面', cP: '咨询目的', cA: '咨询区域', cX: '详细要求（选填）',
    cPh: '例：想买10万日元以内的轻薄笔记本电脑', cMake: '生成咨询单', cShow: '📸 请向店员出示此画面', cBack: '← 重新填写',
    cPs: ['想知道商品位置', '商品比较与咨询', '确认库存与价格', '其他'], cOther: '其他', none2: '无（当面说明）', cMade: '已生成咨询单',
    menu: '菜单', lang: '语言', motion: '动画', on: '开', off: '关', edit: '编辑楼层地图', stores: '切换・管理门店', home: '返回开始画面',
    appT: '下载 Nojima 应用', appS: '积分抽选、购买记录、优惠信息尽在应用', sections: '', close: '关闭', langChanged: '已切换为中文'
  }
};
const t = k => { const d = I18N[lang] || I18N.ja; return d[k] !== undefined ? d[k] : (I18N.ja[k] !== undefined ? I18N.ja[k] : k); };
const L = o => { if (!o) return ''; if (typeof o === 'string') return o; return o[lang] || o.ja || o.en || o.zh || ''; };

/* =====================================================================
   2. データ（店舗ごとのフロアマップ）
   ===================================================================== */
const TYPES = ['shelf', 'counter', 'wall', 'label', 'entrance'];
/* ノジマの店舗名の候補（2026年10月時点の公開情報をもとにした一覧。新店舗は手入力できます） */
const NOJIMA_STORES = ["イオン土浦店", "イーアスつくば店", "イオンつくば店", "イオンタウン守谷店", "大宮ステラタウン店", "大宮タカシマヤ店", "イオンモール与野店", "浦和パルコ店", "浦和店", "川越西店", "ウニクス川越店", "まるひろ川越店", "熊谷ニットーモール店", "イオンモール川口前川店", "ララガーデン川口店", "ららテラス川口店", "東所沢店", "所沢本店", "所沢北原店", "エミテラス所沢店", "西武飯能ペペ店", "ララガーデン春日部店", "イオンモール上尾店", "まるひろ上尾SC店", "草加舎人店", "レイクタウン店", "イオンモール北戸田店", "入間店", "マルイファミリー志木店", "イトーヨーカドー和光店", "ベニバナウォーク桶川店", "モラージュ菖蒲店", "イトーヨーカドー久喜店", "八潮店", "ららぽーと富士見店", "イトーヨーカドー三郷店", "蓮田マイン店", "アリオ蘇我店", "マルエツ稲毛店", "イオンスタイル鎌取店", "イオンモール幕張新都心店", "イオン海浜幕張店", "マリンピア専門館店", "イオン銚子店", "コルトンプラザ店", "市川駅前店", "ららぽーとTOKYO-BAY店", "船橋東武店", "イオンモール木更津店", "イトーヨーカドー松戸店", "テラスモール松戸店", "イトーヨーカドー八柱店", "イオンノア店", "ユアエルム成田店", "イオンモール成田店", "イオンタウンユーカリが丘店", "イオンタウン東習志野店", "イオンモール津田沼店", "ららぽーと柏の葉店", "柏モディ店", "ユニモちはら台店", "流山おおたかの森S・C店", "ユアエルム八千代台店", "イオン八千代緑が丘店", "あびこショッピングプラザ店", "鎌ヶ谷店", "西友浦安店", "ニューコースト新浦安店", "イオンモール千葉ニュータウン店", "上野マルイ店", "イトーヨーカドー曳舟店", "アリオ北砂店", "アーバンドックららぽーと豊洲店", "イトーヨーカドー木場店", "五反田TOC店", "イオンスタイル碑文谷店", "フレル・ウィズ自由が丘店", "上池台東急ストア店", "マチノマ大森店", "グランデュオ蒲田店", "経堂駅前店", "SOCOLA用賀店", "レシピ下北沢店", "新宿タカシマヤタイムズスクエア店", "荻窪駅前店", "池袋東武店", "イトーヨーカドー赤羽店", "西台店", "板橋前野町店", "西友成増店", "練馬駅前店", "リヴィンオズ大泉店", "北千住マルイ店", "イオン西新井店", "千住大橋店", "イトーヨーカドー綾瀬店", "ららテラス北綾瀬店", "亀有店", "イトーヨーカドー四つ木店", "葛西店", "イトーヨーカドー小岩店", "八王子みなみ野店", "西八王子店", "南大沢店", "イーアス高尾店", "ららぽーと立川立飛店", "グランデュオ立川店", "東急百貨店吉祥寺店", "イトーヨーカドー武蔵境店", "青梅統合館店", "青梅インター店", "府中四谷店", "ミッテン府中店", "イトーヨーカドー昭島店", "調布パルコ店", "キテラタウン調布店", "三鷹東八店", "ホームズ仙川店", "忠生店", "NEW鶴川店", "小田急町田店", "三和小川店", "SOCOLA武蔵小金井クロス店", "イオンフードスタイル小平店", "イオンモール多摩平の森店", "国分寺店", "小田急OX狛江店", "LICOPA東大和店", "アクロスプラザ東久留米店", "東久留米滝山店", "イオンモールむさし村山店", "イトーヨーカドー多摩センター店", "東寺方店", "若葉台店", "ひばりが丘パルコ店", "田無アスタ店", "日の出店", "横浜東寺尾店", "西友鶴見店", "MARK ISみなとみらい店", "横浜岡野店", "本牧フロント店", "権太坂店", "金沢八景店", "ブランチ横浜南部市場店", "アピタ金沢文庫店", "トレッサ横浜店", "東急百貨店日吉店", "戸塚モディ店", "東戸塚西口プラザ店", "オーロラモール東戸塚店", "港南台バーズ店", "イトーヨーカドー上永谷店", "横浜四季の森店", "ジョイナステラス二俣川店", "カエデウォーク長津田店", "イオンフードスタイル三ツ境店", "瀬谷店", "ららぽーと横浜店", "センター北店", "コーナン港北インター店", "川崎小田栄店", "川崎中原店", "イトーヨーカドー武蔵小杉駅前店", "マルイファミリー溝口店", "クロス向ヶ丘店", "川崎枡形店", "川崎水沢店", "宮前店", "イオン新百合ヶ丘店", "NEW城山店", "アリオ橋本店", "相模原本店", "野比店", "横須賀店", "コースカベイサイド横須賀店", "ららぽーと湘南平塚店", "ジアウトレット湘南平塚店", "ラスカ平塚店", "鎌倉店", "東急ストア鎌倉店", "藤沢店", "オーディオスクエア藤沢", "テラスモール湘南店", "NEW湘南台店", "鴨宮店", "そよら湘南茅ヶ崎店", "三浦店", "秦野店", "厚木本店", "本厚木ミロード店", "大和店", "伊勢原店", "イトーヨーカドー伊勢原店", "ららぽーと海老名店", "海老名マルイ店", "座間店", "イオンモール座間店", "NEW綾瀬店", "大井松田店", "湯河原店", "愛川店", "イオンモール新潟亀田インター店", "巻店", "十日町店", "見附店", "村上店", "五泉店", "水原店", "NEW甲府店", "甲府東店", "富士吉田店", "都留店", "韮崎店", "イオンモール甲府昭和店", "イオンモール松本店", "諏訪店", "豊科店", "新静岡セノバ店", "MARK IS静岡店", "イトーヨーカドー静岡店", "清水店", "沼津店", "ららぽーと沼津店", "三島店", "イオン富士宮店", "伊東店", "島田店", "イオン富士南店", "ららぽーと磐田店", "焼津店", "藤枝水守店", "藤枝駅前店", "御殿場店", "下田とうきゅう店", "修善寺店", "長泉店", "吉田店"];
/* スタッフ用パスワード（staff2026）のSHA-256。平文は保存していません */
const STAFF_HASH = '7448477c642e607e214fc8f12e1e68389c59f142459fea8c074b324acb553100';
function sha256(str) {
  const K = [0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
  const b = new TextEncoder().encode(str), l = b.length, n = ((l + 9 + 63) >> 6) << 6, m = new Uint8Array(n);
  m.set(b); m[l] = 0x80; const dv = new DataView(m.buffer); dv.setUint32(n - 4, l * 8); dv.setUint32(n - 8, Math.floor(l / 0x20000000));
  let H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  const w = new Uint32Array(64), rr = (x, k) => (x >>> k) | (x << (32 - k));
  for (let o = 0; o < n; o += 64) {
    for (let i = 0; i < 16; i++) w[i] = dv.getUint32(o + i * 4);
    for (let i = 16; i < 64; i++) { const s0 = rr(w[i-15],7) ^ rr(w[i-15],18) ^ (w[i-15] >>> 3), s1 = rr(w[i-2],17) ^ rr(w[i-2],19) ^ (w[i-2] >>> 10); w[i] = (w[i-16] + s0 + w[i-7] + s1) | 0; }
    let [a, bb, c, d, e, f, g, h] = H;
    for (let i = 0; i < 64; i++) { const S1 = rr(e,6) ^ rr(e,11) ^ rr(e,25), ch = (e & f) ^ (~e & g), t1 = (h + S1 + ch + K[i] + w[i]) | 0, S0 = rr(a,2) ^ rr(a,13) ^ rr(a,22), mj = (a & bb) ^ (a & c) ^ (bb & c), t2 = (S0 + mj) | 0; h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = bb; bb = a; a = (t1 + t2) | 0; }
    H = H.map((v, i) => (v + [a, bb, c, d, e, f, g, h][i]) | 0);
  }
  return H.map(v => (v >>> 0).toString(16).padStart(8, '0')).join('');
}
// 売場（棚）をタップしたときの遷移先：その棚のエリアのページ
function isExt(u) { return /^https?:/i.test(u || '') && u.indexOf(location.origin + '/') !== 0 && u.indexOf('https://information000.github.io/Nojima/') !== 0; }
function siteUrl(u) { return !u || isExt(u) || u.startsWith('#') ? u : u + (u.includes('?') ? '&' : '?') + 'lang=' + lang; }
// 端末に保存済みの仮URL（netlify）や旧ファイル名は、その棚のエリアURLに直す
function fixUrl(u, area, label) { if (!u) return u; const old = /netlify\.app/i.test(u) || /^(?:\.\/)?(area-[\w-]+|index)\.html/i.test(u) || u.indexOf('https://information000.github.io/Nojima/') === 0; if (!old) return u; return HAS_PAGE.includes(label) ? (SHELF_LINKS[area] || '') : ''; }
// 相談ページがある売り場だけ「紹介ページあり」にする（ほかは準備中）
const HAS_PAGE = ["冷蔵庫コーナー", "洗濯機コーナー", "オーブン・グリル", "電子レンジ", "炊飯器", "電動歯ブラシ", "シェーバー", "ヘアアイロン", "ドライヤー", "エアコンコーナー", "TV", "プリンター", "PC付属品"];
const SHELF_LINKS = {'home': 'https://information000.github.io/Nojima/kaden/', 'av': 'https://information000.github.io/Nojima/season-av/', 'info': 'https://information000.github.io/Nojima/info/'};   // 通信エリアは相談ページが無いので準備中
const AREA_LINKS = {'home': 'https://information000.github.io/Nojima/kaden/', 'av': 'https://information000.github.io/Nojima/season-av/', 'info': 'https://information000.github.io/Nojima/info/', 'comm': 'https://information000.github.io/Nojima/tsushin/'};
function defaultAreas() {
  return [
    { id: 'home', icon: '🏠', color: '#ea580c', name: { ja: '家電エリア', en: 'Home Appliances', zh: '家电区域' }, desc: { ja: '冷蔵庫・洗濯機・炊飯器・レンジ・理美容など', en: 'Fridges, washers, rice cookers, beauty', zh: '冰箱·洗衣机·电饭煲·美容家电' } },
    { id: 'av', icon: '📺', color: '#059669', name: { ja: '季節・AVエリア', en: 'Seasonal & AV', zh: '季节与影音区域' }, desc: { ja: 'エアコン・季節用品・テレビ・オーディオ', en: 'Air conditioners, seasonal goods, TVs', zh: '空调·季节用品·电视' } },
    { id: 'info', icon: '💻', color: '#0891b2', name: { ja: '情報エリア', en: 'Information', zh: '信息数码区域' }, desc: { ja: 'パソコン・iPad・Apple Watch・プリンター', en: 'PCs, iPad, Apple Watch, printers', zh: '电脑·iPad·Apple Watch·打印机' } },
    { id: 'comm', icon: '📱', color: '#7c3aed', name: { ja: '通信エリア', en: 'Telecom & Audio', zh: '通信网络区域' }, desc: { ja: 'スマホ・イヤホン・充電器・光回線', en: 'Smartphones, earphones, chargers', zh: '手机·耳机·充电器·光纤' } }
  ];
}
function defaultStore() {
  const S = '季節用品', SE = 'Seasonal Goods', SZ = '季节用品', SK = 'きせつ 扇風機 空気清浄機 加湿器 ヒーター',
    note = { ja: '現在は夏用品のみ展開しています。これから冬用品にアップデートしていきます。', en: 'Only summer items are on display at the moment. We will be updating to winter items soon.', zh: '目前仅展示夏季用品，今后将陆续更新为冬季用品。' };
  // [種類, x, y, w, h, 日本語, English, 中文, エリア, 縦横(a/h/v), 紹介ページ, 検索キーワード]
  const R = [
    ['s',65,20,700,42,'エアコンコーナー','Air Conditioners','空调专区','av','h',1,'えあこん 冷暖房'],
    ['s',850,20,360,42,'TV','TV','电视','av','h',1,'てれび テレビ 有機el 液晶'],
    ['s',1170,62,40,108,'スマホケース','Phone Cases','手机壳','comm','v',0,'けーす'],
    ['s',1170,170,40,200,'イヤホン','Earphones','耳机','comm','v',1,'いやほん へっどほん airpods ワイヤレス'],
    ['s',65,80,185,260,'冷蔵庫コーナー','Refrigerators','冰箱专区','home','h',1,'れいぞうこ 冷凍庫 fridge'],
    ['s',270,80,185,260,'洗濯機コーナー','Washing Machines','洗衣机专区','home','h',1,'せんたくき ドラム 乾燥機'],
    ['s',65,380,60,175,'シーリングライト','Ceiling Lights','吸顶灯','home','v',0,'しーりんぐ 照明 しょうめい'],
    ['s',65,565,60,135,'アイロン','Irons','电熨斗','home','v',0,'あいろん'],
    ['s',65,710,70,72,'電球','Bulbs','灯泡','home','v',0,'でんきゅう led'],
    ['s',65,785,435,45,'電球コーナー','Light Bulbs','灯泡专区','home','h',0,'でんきゅう led 照明'],
    ['s',225,380,235,32,'オーブン・グリル','Oven / Grill','烤箱·烧烤炉','home','h',1,'おーぶん とーすたー'],
    ['s',225,415,235,32,'電子レンジ','Microwaves','微波炉','home','h',1,'でんしれんじ れんじ'],
    ['s',225,480,235,34,'炊飯器','Rice Cookers','电饭煲','home','h',1,'すいはんき'],
    ['s',225,517,235,30,'IH・電子ポット','IH & Kettles','电磁炉·水壶','home','h',0,'ぽっと けとる'],
    ['s',225,585,235,30,'電子ポット','Electric Kettles','电水壶','home','h',0,'ぽっと けとる'],
    ['s',225,618,60,30,'便座','Bidet Seats','智能马桶盖','home','h',0,'べんざ 温水洗浄'],
    ['s',288,618,172,30,'マッサージ用品','Massagers','按摩用品','home','h',0,'まっさーじ'],
    ['s',225,685,75,28,'シャワーヘッド','Shower Heads','花洒','home','h',1,'しゃわー'],
    ['s',303,685,157,28,'電動歯ブラシ','Electric Toothbrushes','电动牙刷','home','h',1,'はぶらし'],
    ['s',225,716,75,28,'バリカン','Hair Clippers','理发器','home','h',0,'ばりかん'],
    ['s',303,716,157,28,'シェーバー','Shavers','剃须刀','home','h',1,'しぇーばー ひげそり'],
    ['c',515,75,28,25,'レジ','Cashier','收银台','','h',0,'れじ 会計'],
    ['s',515,104,28,149,S,SE,SZ,'av','v',0,SK,note],
    ['s',547,75,28,178,S,SE,SZ,'av','v',0,SK,note],
    ['s',611,75,28,178,S,SE,SZ,'av','v',0,SK,note],
    ['s',643,75,28,178,S,SE,SZ,'av','v',0,SK,note],
    ['c',707,75,60,40,'レジ','Cashier','收银台','','h',0,'れじ 会計'],
    ['s',707,119,60,134,S,SE,SZ,'av','v',0,SK,note],
    ['s',803,75,28,178,'DVD・ブルーレイ','DVD / Blu-ray','DVD·蓝光','av','v',0,'でぃーぶいでぃー ぶるーれい'],
    ['s',835,75,28,178,'スピーカー・録画機器','Speakers & Recorders','音响·录像机','av','v',0,'すぴーかー れこーだー'],
    ['s',515,281,28,166,'ロボット掃除機','Robot Vacuums','扫地机器人','home','v',1,'ろぼっと るんば そうじき'],
    ['s',547,281,28,166,'ハンディクリーナー','Handy Cleaners','手持吸尘器','home','v',1,'はんでぃ そうじき'],
    ['s',611,281,28,166,'ハンディクリーナー','Handy Cleaners','手持吸尘器','home','v',1,'はんでぃ そうじき'],
    ['s',643,281,28,166,'掃除機','Vacuum Cleaners','吸尘器','home','v',1,'そうじき すてぃっく'],
    ['s',707,281,28,166,'プリンターインク','Printer Ink','打印机墨水','info','v',0,'いんく'],
    ['s',739,281,28,166,'SSD・HDD・ルーター','SSD / HDD / Routers','硬盘·路由器','info','v',0,'るーたー wifi'],
    ['s',803,281,28,166,'プリンター','Printers','打印机','info','v',1,'ぷりんたー 複合機'],
    ['s',835,281,28,100,'モニター','Monitors','显示器','info','v',0,'もにたー でぃすぷれい'],
    ['s',835,385,28,62,'Watchカバー','Watch Cases','表壳','info','v',0,'あっぷるうぉっち かばー'],
    ['s',803,451,60,42,'Apple Watch','Apple Watch','Apple Watch','info','h',1,'あっぷるうぉっち すまーとうぉっち'],
    ['s',899,281,28,166,'ケース・アクセサリー','Cases & Accessories','保护套·配件','info','v',0,'けーす'],
    ['s',931,281,28,166,'携帯','Mobile Phones','手机','comm','v',0,'けいたい すまほ iphone'],
    ['s',899,451,60,42,'iPad','iPad','iPad','info','h',1,'あいぱっど たぶれっと'],
    ['s',515,521,28,150,'SDカード','SD Cards','存储卡','info','v',0,'えすでぃー めもり'],
    ['s',547,521,28,150,'電源コード','Power Cords','电源线','info','v',0,'こーど 延長 たっぷ'],
    ['s',611,521,28,150,'オフィス用品','Office Supplies','办公用品','info','v',0,'おふぃす 文具'],
    ['s',643,521,28,48,'insta360','Insta360','Insta360','info','h',0,'かめら'],
    ['s',643,573,28,98,'カメラ','Cameras','相机','info','v',0,'かめら'],
    ['s',707,521,28,150,'電卓・用紙','Calculators & Paper','计算器·纸张','info','v',0,'でんたく ようし'],
    ['s',739,521,28,150,'キーボード・マウス','Keyboards & Mice','键盘·鼠标','info','v',1,'きーぼーど まうす'],
    ['s',803,521,28,150,'ヘッドホン・ハブ','Headphones & Hubs','耳机·扩展坞','comm','v',1,'へっどほん はぶ'],
    ['s',835,521,28,150,'PC付属品','PC Accessories','电脑配件','info','v',1,'ぱそこん のーとpc'],
    ['s',899,521,28,150,'PC付属品','PC Accessories','电脑配件','info','v',1,'ぱそこん のーとpc'],
    ['s',931,521,28,150,'PC付属品','PC Accessories','电脑配件','info','v',1,'ぱそこん のーとpc'],
    ['s',515,699,28,122,'電池','Batteries','电池','home','v',0,'でんち'],
    ['s',547,699,28,122,'ヘアアイロン','Hair Irons','卷直发器','home','v',1,'へああいろん こて'],
    ['s',611,699,28,122,'ドライヤー','Hair Dryers','吹风机','home','v',1,'どらいやー'],
    ['s',643,699,28,122,'脱毛器','Hair Removal','脱毛仪','home','v',0,'だつもう'],
    ['s',707,699,28,122,'体重計・血圧計','Scales & BP Monitors','体重秤·血压计','home','v',0,'たいじゅうけい けつあつけい'],
    ['s',739,699,28,122,'美顔器','Beauty Devices','美容仪','home','v',0,'びがんき'],
    ['c',515,832,165,22,'メインレジ・Apple製品','Main Cashier / Apple','总收银·Apple','','h',1,'れじ あっぷる'],
    ['s',685,832,75,22,'ゲーム用品','Gaming','游戏配件','info','h',0,'げーむ'],
    ['s',899,75,28,178,'HDMI・ケーブル','HDMI & Cables','HDMI线','av','v',0,'けーぶる'],
    ['s',931,75,28,178,'TV','TV','电视','av','v',1,'てれび'],
    ['s',990,75,120,34,'TV','TV','电视','av','h',1,'てれび'],
    ['s',990,109,120,34,'ケーブル・カラオケ','Cables & Karaoke','线缆·卡拉OK','av','h',0,'からおけ'],
    ['s',990,160,120,34,'ラジカセ','Radios','收音机','av','h',0,'らじお'],
    ['s',990,194,120,34,'スマホ関連','Phone Goods','手机配件','comm','h',0,'すまほ'],
    ['s',990,245,120,34,'スマホケース','Phone Cases','手机壳','comm','h',0,'けーす'],
    ['s',990,279,120,34,'充電・フィルム','Chargers & Film','充电·贴膜','comm','h',0,'じゅうでん ふぃるむ'],
    ['s',990,330,120,34,'充電・ケーブル','Charging Cables','充电线','comm','h',0,'じゅうでん けーぶる'],
    ['s',990,364,120,34,'充電・ケーブル','Charging Cables','充电线','comm','h',0,'じゅうでん けーぶる'],
    ['c',1005,418,140,48,'レジ','Cashier','收银台','','h',0,'れじ 会計'],
    ['s',980,488,190,90,'携帯コーナー','Mobile Corner','手机专区','comm','h',0,'けいたい 契約 光回線 ひかり'],
    ['e',995,760,90,36,'入口','Entrance','入口','','h',0,'いりぐち']
  ];
  const TY = { s: 'shelf', c: 'counter', w: 'wall', l: 'label', e: 'entrance' };
  return {
    version: 1, id: 'narita',
    store: { brand: { ja: 'ノジマ', en: 'Nojima', zh: 'Nojima' }, name: { ja: 'イオンモール成田店', en: 'AEON MALL Narita', zh: '永旺梦乐城成田店' }, sub: 'NOJIMA × AEON MALL NARITA' },
    canvas: { w: 1260, h: 870, outline: [[15, 15], [1245, 15], [1245, 480], [840, 855], [15, 855]], bg: null, bgOpacity: .45, bgShow: true, bgInView: false },
    areas: defaultAreas(),
    items: R.map((r, i) => ({ id: 'i' + i, type: TY[r[0]], x: r[1], y: r[2], w: r[3], h: r[4], label: { ja: r[5], en: r[6], zh: r[7] }, area: r[8], vertical: r[9], url: r[10] && HAS_PAGE.includes(r[5]) ? (SHELF_LINKS[r[8]] || '') : '', kw: r[11] || '', note: r[12] || { ja: '', en: '', zh: '' } }))
  };
}
function blankStore(name) {
  return validateStore({ store: { brand: { ja: 'ノジマ', en: 'Nojima', zh: 'Nojima' }, name: { ja: name || '新しい店舗', en: '', zh: '' }, sub: '' }, canvas: { w: 1200, h: 800, outline: null }, areas: defaultAreas(), items: [] });
}
function validateStore(o) {
  if (!o || typeof o !== 'object') throw new Error('ファイルの形式が正しくありません');
  const d = (o.items || o.store) ? o : (o.data || o);
  if (!Array.isArray(d.items)) throw new Error('items（売り場の一覧）が見つかりません');
  const lab = v => typeof v === 'string' ? { ja: v, en: '', zh: '' } : { ja: (v && v.ja) || '', en: (v && v.en) || '', zh: (v && v.zh) || '' };
  const c = d.canvas || {};
  const out = {
    version: 1, id: String(d.id || newStoreId()),
    store: { brand: d.store && d.store.brand !== undefined ? lab(d.store.brand) : { ja: 'ノジマ', en: 'Nojima', zh: 'Nojima' }, name: lab((d.store && d.store.name) || '新しい店舗'), sub: String((d.store && d.store.sub) || '') },
    canvas: {
      w: clamp(+c.w || 1260, 200, 6000), h: clamp(+c.h || 870, 200, 6000),
      outline: Array.isArray(c.outline) ? c.outline.filter(p => Array.isArray(p) && p.length === 2 && isFinite(+p[0]) && isFinite(+p[1])).map(p => [+p[0], +p[1]]) : null,
      bg: typeof c.bg === 'string' && c.bg.startsWith('data:image') ? c.bg : null,
      bgOpacity: isFinite(+c.bgOpacity) ? +c.bgOpacity : .45, bgShow: c.bgShow !== false, bgInView: !!c.bgInView
    },
    areas: (Array.isArray(d.areas) ? d.areas : defaultAreas()).map(a => ({ id: String(a.id || uid()), icon: String(a.icon || '📦'), color: /^#[0-9a-f]{6}$/i.test(a.color) ? a.color : '#64748b', name: lab(a.name), desc: lab(a.desc || '') })),
    items: d.items.filter(i => i && isFinite(+i.x) && isFinite(+i.y) && +i.w > 0 && +i.h > 0).map(i => ({
      id: String(i.id || uid()), type: TYPES.includes(i.type) ? i.type : 'shelf', x: +i.x, y: +i.y, w: +i.w, h: +i.h,
      label: lab(i.label), area: String(i.area || ''), vertical: ['a', 'h', 'v'].includes(i.vertical) ? i.vertical : 'a',
      url: fixUrl(/^(https?:|#|\.?\/|[\w-]+\.html)/i.test(i.url || '') ? String(i.url) : '', i.area, (i.label && i.label.ja) || (typeof i.label === 'string' ? i.label : '')), kw: String(i.kw || ''), note: lab(i.note || '')
    }))
  };
  if (out.canvas.outline && out.canvas.outline.length < 3) out.canvas.outline = null;
  const seen = new Set();
  out.items.forEach(i => { if (seen.has(i.id)) i.id = uid(); seen.add(i.id); });
  return out;
}

/* 店舗の登録簿（この端末のブラウザに保存） */
const REG_KEY = 'fg-registry-v1';
let reg = LS.get(REG_KEY, null);
function storeKey(id) { return 'fg-store-' + id; }
function loadStore(id) { const d = LS.get(storeKey(id), null); if (!d) return null; try { return validateStore(d); } catch (e) { return null; } }
function saveStore(d, quiet) {
  const ok = LS.set(storeKey(d.id), d);
  if (!ok && !quiet) toast('保存容量が足りません。下絵の画像を小さくするか削除してください', { icon: '⚠️', dur: 5000 });
  return ok;
}
function saveReg() { LS.set(REG_KEY, reg); }
if (!reg || !Array.isArray(reg.list) || !reg.list.length) {
  const d = defaultStore(); saveStore(d, true); reg = { current: d.id, list: [d.id] }; saveReg();
}
{ // 成田店以外：GitHub の stores/<店舗ID>/store.json をこの店舗の公開データとして使う
  const P = window.NJ_STORE && NJ_STORE.pub('store.json');
  if (P && P.items && localStorage.getItem('nj-pubapplied-store-' + reg.current) !== String(P.savedAt || P.version || P.items.length)) {
    try { const v = validateStore(P); v.id = reg.current; saveStore(v, true); localStorage.setItem('nj-pubapplied-store-' + reg.current, String(P.savedAt || P.version || P.items.length)); } catch (e) {}
  }
  window.NJ_STORE && NJ_STORE.sync('store.json');
}
let store = loadStore(reg.current) || (() => { const d = defaultStore(); saveStore(d, true); if (!reg.list.includes(d.id)) reg.list.unshift(d.id); reg.current = d.id; saveReg(); return d; })();

const favKey = () => 'fg-fav-' + store.id, recKey = () => 'fg-recent-' + store.id;
function fullName(d) { d = d || store; const b = L(d.store.brand), n = L(d.store.name); return b && n && !n.startsWith(b) ? b + ' ' + n : (n || b); }
const areaOf = id => store.areas.find(a => a.id === id) || null;
const byId = id => store.items.find(i => i.id === id) || null;
const keyOf = it => (it.label && (it.label.ja || it.label.en || it.label.zh)) || '';

/* =====================================================================
   3. マップの描画（閲覧・編集・書き出しで共通）
   ===================================================================== */
function cw(s) { let n = 0; for (const ch of s) { const c = ch.codePointAt(0); n += c < 128 ? (/[A-Z0-9]/.test(ch) ? .68 : .58) : 1; } return n || 1; }
function labelSVG(it, color) {
  const txt = L(it.label); if (!txt) return '';
  const vert = it.vertical === 'v' || (it.vertical !== 'h' && it.h > it.w * 1.6);
  const cx = it.x + it.w / 2, cy = it.y + it.h / 2, dk = (it.type === 'wall' || it.type === 'entrance') ? ' dk' : '';
  if (vert) {
    const fs = clamp(Math.min(it.w * .62, (it.h - 6) / cw(txt)), 5, 15);
    return `<text class="lb v${dk}" x="${cx}" y="${cy}" fill="${color}" style="font-size:${fs.toFixed(1)}px">${esc(txt)}</text>`;
  }
  let fs = Math.min((it.w - 6) / cw(txt), it.h * .58, 17);
  if (fs < 8 && it.h >= 24 && [...txt].length > 3) {
    const a = [...txt]; let k = a.findIndex((c, i) => i >= a.length / 3 && /[・\s/]/.test(c)); if (k < 0) k = Math.ceil(a.length / 2);
    const l1 = a.slice(0, k).join('').trim(), l2 = a.slice(k).join('').replace(/^[・\s/]/, '').trim();
    fs = clamp(Math.min((it.w - 6) / Math.max(cw(l1), cw(l2)), it.h * .32), 5, 15);
    return `<text class="lb${dk}" x="${cx}" y="${cy - fs * .62}" fill="${color}" style="font-size:${fs.toFixed(1)}px">${esc(l1)}</text><text class="lb${dk}" x="${cx}" y="${cy + fs * .62}" fill="${color}" style="font-size:${fs.toFixed(1)}px">${esc(l2)}</text>`;
  }
  fs = clamp(fs, 5, 17);
  return `<text class="lb${dk}" x="${cx}" y="${cy}" fill="${color}" style="font-size:${fs.toFixed(1)}px">${esc(txt)}</text>`;
}
function itemMarkup(it, o, i) {
  const a = areaOf(it.area), col = a ? a.color : '#94a3b8';
  let fill = '#ffffff', stroke = col, sw = 1.4, tc = '#0f172a';
  if (it.type === 'shelf' && it.url) { fill = hexA(col, .18); sw = 2; }
  if (it.type === 'counter') { fill = '#fde68a'; stroke = '#b45309'; sw = 1.8; }
  if (it.type === 'wall') { fill = '#64748b'; stroke = '#475569'; tc = '#ffffff'; }
  if (it.type === 'entrance') { fill = '#10b981'; stroke = '#047857'; tc = '#ffffff'; }
  const rx = it.type === 'wall' ? 2 : 5;
  const shape = it.type === 'label'
    ? `<rect x="${it.x}" y="${it.y}" width="${it.w}" height="${it.h}" fill="transparent"${o.editor ? ' stroke="#94a3b8" stroke-dasharray="4 3" stroke-width="1"' : ''}/>`
    : `<rect x="${it.x}" y="${it.y}" width="${it.w}" height="${it.h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
  const d = o.anim ? ` style="--d:${Math.min(i * 7, 600)}"` : '';
  return `<g class="it t-${it.type}${it.url ? ' lk' : ''}" data-id="${esc(it.id)}" data-area="${esc(it.area)}"${d}>${shape}${labelSVG(it, tc)}</g>`;
}
function mapMarkup(d, o = {}) {
  const W = d.canvas.w, H = d.canvas.h, p = o.p || 'm';
  const ol = (d.canvas.outline && d.canvas.outline.length > 2 ? d.canvas.outline : [[0, 0], [W, 0], [W, H], [0, H]]).map(q => q.join(',')).join(' ');
  const g = o.editor ? 50 : 40;
  let s = `<defs><pattern id="${p}tile" width="${g}" height="${g}" patternUnits="userSpaceOnUse"><rect width="${g}" height="${g}" fill="#f8fafc"/><path d="M${g} 0H0V${g}" fill="none" stroke="${o.editor ? '#cbd5e1' : '#e5e9f0'}" stroke-width="1"/></pattern></defs>`;
  if (!o.export) s += `<rect x="${-W * 3}" y="${-H * 3}" width="${W * 7}" height="${H * 7}" fill="${o.editor ? '#cbd5e1' : '#e9edf4'}"/>`;
  s += `<polygon points="${ol}" fill="url(#${p}tile)" stroke="#94a3b8" stroke-width="5" stroke-linejoin="round"/>`;
  const showBg = d.canvas.bg && (o.editor ? d.canvas.bgShow !== false : d.canvas.bgInView);
  if (showBg) s += `<image href="${d.canvas.bg}" x="0" y="0" width="${W}" height="${H}" preserveAspectRatio="none" opacity="${clamp(+d.canvas.bgOpacity || .45, .05, 1)}" pointer-events="none"/>`;
  s += '<g class="items">' + d.items.map((it, i) => itemMarkup(it, o, i)).join('') + '</g>';
  return s;
}
const PIN = `<g id="pin" class="pin" style="display:none"><g class="pin-s"><circle class="pr" r="16"/><circle class="pr r2" r="16"/><g class="pin-b"><path d="M0 0C-4-9-15-16-15-28a15 15 0 1 1 30 0C15-16 4-9 0 0Z" fill="#ef4444" stroke="#fff" stroke-width="2.5"/><circle cy="-28" r="6" fill="#fff"/><text class="pin-t" y="-56"></text></g></g></g>`;

/* =====================================================================
   4. パン＆ズーム（ドラッグ・ピンチ・ホイール）
   ===================================================================== */
function PanZoom(svg, opt = {}) {
  let W = 1000, H = 1000, vb = { x: 0, y: 0, w: 1000, h: 1000 }, raf = 0, fitted = true;
  const ptrs = new Map(); let moved = false, downT = null, start = null, pinch = null, cb = 0;
  const shouldPan = opt.shouldPan || (() => true);
  const asp = () => { const r = svg.getBoundingClientRect(); return r.width > 10 && r.height > 10 ? r.width / r.height : W / H; };
  const apply = () => {
    svg.setAttribute('viewBox', `${vb.x.toFixed(2)} ${vb.y.toFixed(2)} ${vb.w.toFixed(2)} ${vb.h.toFixed(2)}`);
    if (opt.onChange && !cb) cb = requestAnimationFrame(() => { cb = 0; opt.onChange(); });
  };
  const fitBox = () => { const a = asp(), pad = Math.max(W, H) * .03; let w = W + pad * 2, h = H + pad * 2; if (w / h > a) h = w / a; else w = h * a; return { x: W / 2 - w / 2, y: H / 2 - h / 2, w, h }; };
  const norm = b => { const a = asp(), f = fitBox(); const w = clamp(b.w, Math.min(140, f.w), f.w * 1.25), h = w / a; const cx = clamp(b.x + b.w / 2, 0, W), cy = clamp(b.y + b.h / 2, 0, H); return { x: cx - w / 2, y: cy - h / 2, w, h }; };
  const set = b => { vb = norm(b); apply(); };
  function animate(b, dur = 700) {
    b = norm(b); cancelAnimationFrame(raf);
    if (!motion) { vb = b; apply(); return; }
    const s = { ...vb }, t0 = performance.now();
    const step = n => { let k = Math.min(1, (n - t0) / dur); k = 1 - Math.pow(1 - k, 4); vb = { x: s.x + (b.x - s.x) * k, y: s.y + (b.y - s.y) * k, w: s.w + (b.w - s.w) * k, h: s.h + (b.h - s.h) * k }; apply(); if (k < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
  }
  function pt(e) { const m = svg.getScreenCTM(); if (!m) return { x: 0, y: 0 }; const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()); return { x: p.x, y: p.y }; }
  function zoomAt(f, cx, cy, anim) {
    const p = pt({ clientX: cx, clientY: cy }), a = asp(), nw = vb.w * f, rx = (p.x - vb.x) / vb.w, ry = (p.y - vb.y) / vb.h;
    const b = { x: p.x - rx * nw, y: p.y - ry * (nw / a), w: nw, h: nw / a };
    fitted = false; anim ? animate(b, 350) : set(b);
  }
  function zoomC(f) { const r = svg.getBoundingClientRect(); zoomAt(f, r.left + r.width / 2, r.top + r.height / 2, true); }
  svg.addEventListener('pointerdown', e => {
    if (ptrs.size === 0 && !shouldPan(e)) return;
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    try { svg.setPointerCapture(e.pointerId); } catch (er) {}
    cancelAnimationFrame(raf);
    if (ptrs.size === 1) { moved = false; downT = e.target; start = { x: e.clientX, y: e.clientY }; }
    if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 }; moved = true; }
  });
  svg.addEventListener('pointermove', e => {
    const p = ptrs.get(e.pointerId); if (!p) return;
    const r = svg.getBoundingClientRect(), sc = Math.max(vb.w / r.width, vb.h / r.height);
    if (ptrs.size === 1) {
      if (!moved && Math.hypot(e.clientX - start.x, e.clientY - start.y) < 6) return;
      moved = true; fitted = false;
      set({ x: vb.x - (e.clientX - p.x) * sc, y: vb.y - (e.clientY - p.y) * sc, w: vb.w, h: vb.h });
      p.x = e.clientX; p.y = e.clientY;
    } else if (ptrs.size === 2 && pinch) {
      p.x = e.clientX; p.y = e.clientY;
      const [a, b] = [...ptrs.values()], d = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      if (d < 10) return;
      set({ x: vb.x - (mx - pinch.mx) * sc, y: vb.y - (my - pinch.my) * sc, w: vb.w, h: vb.h });
      zoomAt(pinch.d / d, mx, my, false);
      pinch = { d, mx, my };
    }
  });
  const up = e => {
    if (!ptrs.has(e.pointerId)) return;
    ptrs.delete(e.pointerId);
    if (ptrs.size < 2) pinch = null;
    if (ptrs.size === 0 && !moved && e.type === 'pointerup' && opt.onTap) opt.onTap(downT, e);
  };
  svg.addEventListener('pointerup', up); svg.addEventListener('pointercancel', up);
  svg.addEventListener('wheel', e => { e.preventDefault(); zoomAt(Math.exp(clamp(e.deltaY, -120, 120) * (e.ctrlKey ? .012 : .0022)), e.clientX, e.clientY, false); }, { passive: false });
  svg.addEventListener('dblclick', e => { if (!opt.noDbl) zoomAt(.55, e.clientX, e.clientY, true); });
  new ResizeObserver(() => { if (fitted) set(fitBox()); else set(vb); }).observe(svg);
  return {
    setBounds(w, h) { W = w; H = h; },
    fit(anim) { fitted = true; anim ? animate(fitBox()) : set(fitBox()); },
    focus(b) { const a = asp(), f = fitBox(); let w = Math.max(b.w * 3.2, b.h * 3.2 * a, f.w * .32); w = Math.min(w, f.w); fitted = false; animate({ x: b.x + b.w / 2 - w / 2, y: b.y + b.h / 2 - w / a / 2, w, h: w / a }); },
    zoom: zoomC, pt, get vb() { return vb; },
    scale() { const r = svg.getBoundingClientRect(); return r.width ? Math.max(vb.w / r.width, vb.h / r.height) : 1; },
    get busy() { return ptrs.size > 0; }
  };
}

/* =====================================================================
   5. 共通UI：トースト／ボトムシート／スワイプ／リップル／リビール
   ===================================================================== */
function toast(msg, o = {}) {
  const box = $('#toasts'), dur = o.dur || (o.action ? 5000 : 2600), el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="t-ic">${o.icon || '✓'}</span><span class="t-msg">${esc(msg)}</span>${o.action ? `<button class="t-act" type="button">${esc(o.action.label)}</button>` : ''}<i class="t-bar" style="animation-duration:${dur}ms"></i>`;
  box.appendChild(el);
  while (box.children.length > 3) box.firstElementChild.remove();
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('in')));
  let acted = false, done = false;
  const close = () => { if (done) return; done = true; clearTimeout(tm); el.classList.remove('in'); el.classList.add('out'); setTimeout(() => el.remove(), 350); if (!acted && o.onExpire) o.onExpire(); };
  const tm = setTimeout(close, dur);
  if (o.action) $('.t-act', el).onclick = () => { acted = true; o.action.fn(); close(); };
  let x0 = null;
  el.addEventListener('pointerdown', e => { if (e.target.closest('button')) return; x0 = e.clientX; el.style.transition = 'none'; });
  el.addEventListener('pointermove', e => { if (x0 == null) return; const dx = e.clientX - x0; el.style.transform = `translateX(${dx}px)`; el.style.opacity = 1 - Math.min(1, Math.abs(dx) / 220); });
  el.addEventListener('pointerup', e => { if (x0 == null) return; const dx = e.clientX - x0; x0 = null; el.style.transition = ''; if (Math.abs(dx) > 90) { el.style.transform = `translateX(${dx > 0 ? 120 : -120}%)`; el.style.opacity = 0; close(); } else { el.style.transform = ''; el.style.opacity = ''; } });
  return close;
}

const Sheet = (() => {
  const root = $('#sheet'), sh = $('.sheet', root), body = $('.sheet-body', root), bd = $('.sheet-bd', root);
  let open = false, onClose = null, drag = null, hideT = 0;
  function show(html, o = {}) {
    clearTimeout(hideT);
    const was = open;
    if (was && onClose) { const f = onClose; onClose = null; f(); }
    body.innerHTML = html; body.scrollTop = 0; onClose = o.onClose || null;
    if (!was) { root.hidden = false; sh.style.transform = ''; requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('on'))); open = true; }
    else { body.classList.remove('swap'); void body.offsetWidth; body.classList.add('swap'); }
    $$('[data-close]', body).forEach(b => b.onclick = hide);
    return body;
  }
  function hide() {
    if (!open) return; open = false; root.classList.remove('on'); sh.style.transform = '';
    const f = onClose; onClose = null; f && f();
    hideT = setTimeout(() => { if (!open) { root.hidden = true; body.innerHTML = ''; } }, 450);
  }
  bd.addEventListener('click', hide);
  sh.addEventListener('pointerdown', e => {
    if (!e.target.closest('.sheet-grab,.sh-drag') || e.target.closest('button:not(.sheet-grab),input,a,select,textarea')) return;
    drag = { y: e.clientY, t: performance.now(), dy: 0 }; sh.classList.add('drag');
    try { sh.setPointerCapture(e.pointerId); } catch (er) {}
  });
  sh.addEventListener('pointermove', e => { if (!drag) return; drag.dy = e.clientY - drag.y; const dy = drag.dy < 0 ? drag.dy * .2 : drag.dy; sh.style.transform = `translateY(${dy}px)`; });
  const end = () => { if (!drag) return; const v = drag.dy / Math.max(1, performance.now() - drag.t); sh.classList.remove('drag'); if (drag.dy > 110 || v > .7) hide(); else sh.style.transform = ''; drag = null; };
  sh.addEventListener('pointerup', end); sh.addEventListener('pointercancel', end);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && open) hide(); });
  return { show, hide, get open() { return open; }, body };
})();

/* スワイプアクション：左＝削除、右＝マップなど */
function swipeRow(inner, { left, right, onTap }) {
  const el = document.createElement('div'); el.className = 'sw';
  el.innerHTML = `<div class="sw-bg"><span class="sw-r">${right ? esc(right.label) : ''}</span><span class="sw-l">${left ? esc(left.label) : ''}</span></div><div class="sw-fg">${inner}</div>`;
  const fg = $('.sw-fg', el); let s = null;
  fg.addEventListener('pointerdown', e => { s = { x: e.clientX, y: e.clientY, dx: 0, lock: null, id: e.pointerId }; fg.classList.remove('snap'); });
  fg.addEventListener('pointermove', e => {
    if (!s || e.pointerId !== s.id) return;
    const dx = e.clientX - s.x, dy = e.clientY - s.y;
    if (!s.lock) { if (Math.hypot(dx, dy) < 8) return; s.lock = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'; if (s.lock === 'x') try { fg.setPointerCapture(e.pointerId); } catch (er) {} }
    if (s.lock !== 'x') return;
    let d = dx; if ((d < 0 && !left) || (d > 0 && !right)) d *= .15;
    if (Math.abs(d) > 140) d = Math.sign(d) * (140 + (Math.abs(d) - 140) * .3);
    s.dx = d; fg.style.transform = `translateX(${d}px)`;
    el.classList.toggle('to-l', d < 0); el.classList.toggle('to-r', d > 0);
    const arm = Math.abs(d) > 90; if (arm && !el.classList.contains('arm')) vib(10); el.classList.toggle('arm', arm);
  });
  const end = e => {
    if (!s) return; const d = s.dx, lock = s.lock; s = null; fg.classList.add('snap');
    if (lock !== 'x') { fg.style.transform = ''; if (!lock && e.type === 'pointerup' && onTap) onTap(); return; }
    if (d < -90 && left) { fg.style.transform = 'translateX(-110%)'; setTimeout(() => left.fn(el), 220); }
    else if (d > 90 && right) { fg.style.transform = ''; el.classList.remove('arm'); setTimeout(() => { el.classList.remove('to-r'); right.fn(el); }, 220); }
    else { fg.style.transform = ''; el.classList.remove('arm', 'to-l', 'to-r'); }
  };
  fg.addEventListener('pointerup', end); fg.addEventListener('pointercancel', end);
  return el;
}
function collapse(el, cb) { el.style.height = el.offsetHeight + 'px'; void el.offsetHeight; el.style.height = '0px'; el.style.marginBottom = '0px'; el.style.opacity = '0'; setTimeout(() => { el.remove(); cb && cb(); }, 360); }

document.addEventListener('pointerdown', e => {
  const b = e.target.closest && e.target.closest('.rp'); if (!b || !motion) return;
  const r = b.getBoundingClientRect(), s = document.createElement('span'); s.className = 'rpl';
  s.style.left = e.clientX - r.left + 'px'; s.style.top = e.clientY - r.top + 'px'; b.appendChild(s); setTimeout(() => s.remove(), 650);
}, { passive: true });
const revealIO = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); revealIO.unobserve(en.target); if (en.target._onIn) en.target._onIn(); } }), { threshold: .15 }) : null;
function reveal(root) { $$('.rv', root).forEach(el => { if (revealIO) revealIO.observe(el); else { el.classList.add('in'); el._onIn && el._onIn(); } }); }
function kineticChars(text, base = 0) { return [...String(text)].map((c, i) => `<span style="--i:${i + base}">${c === ' ' ? '&nbsp;' : esc(c)}</span>`).join(''); }
function countUp(el, to, suf = '', dur = 1300) {
  if (!motion) { el.textContent = to + suf; return; }
  const t0 = performance.now(); const f = n => { const k = Math.min(1, (n - t0) / dur), e = 1 - Math.pow(1 - k, 3); el.textContent = Math.round(to * e) + suf; if (k < 1) requestAnimationFrame(f); }; requestAnimationFrame(f);
}

/* =====================================================================
   6. 検索（オートコンプリート）
   ===================================================================== */
const READ = [['冷蔵庫', 'れいぞうこ'], ['洗濯機', 'せんたくき'], ['掃除機', 'そうじき'], ['炊飯器', 'すいはんき'], ['電子', 'でんし'], ['電動', 'でんどう'], ['歯ブラシ', 'はぶらし'], ['季節', 'きせつ'], ['用品', 'ようひん'], ['携帯', 'けいたい'], ['充電', 'じゅうでん'], ['電池', 'でんち'], ['電球', 'でんきゅう'], ['美顔器', 'びがんき'], ['体重計', 'たいじゅうけい'], ['血圧計', 'けつあつけい'], ['脱毛', 'だつもう'], ['便座', 'べんざ'], ['電源', 'でんげん'], ['電卓', 'でんたく'], ['録画', 'ろくが'], ['機器', 'きき'], ['付属品', 'ふぞくひん'], ['入口', 'いりぐち'], ['照明', 'しょうめい']];
function nrm(s) {
  s = String(s || '').normalize('NFKC').toLowerCase();
  s = s.replace(/[\u30a1-\u30f6]/g, c => String.fromCharCode(c.charCodeAt(0) - 96));
  return s.replace(/[\s・･\/\-_、,.。！!？?]/g, '');
}
function reading(s) { READ.forEach(r => { s = s.split(r[0]).join(r[1]); }); return s; }
let IDX = [];
function buildIndex() {
  const m = new Map();
  store.items.forEach(it => {
    if (it.type === 'wall' || it.type === 'label') return;
    const k = keyOf(it); if (!k) return;
    if (m.has(k)) { m.get(k).ids.push(it.id); return; }
    const a = areaOf(it.area);
    const hay = [it.label.ja, it.label.en, it.label.zh, it.kw, a && a.name.ja, a && a.name.en, a && a.name.zh].filter(Boolean).join(' ');
    m.set(k, { key: k, ids: [it.id], it, area: a, hay: nrm(hay) + '|' + nrm(reading(hay)) });
  });
  IDX = [...m.values()];
}
function query(q) {
  const toks = q.trim().split(/\s+/).map(nrm).filter(Boolean); if (!toks.length) return { toks, res: [] };
  const res = IDX.map(e => {
    if (!toks.every(tk => e.hay.includes(tk))) return null;
    const dn = nrm(L(e.it.label));
    const sc = (dn.startsWith(toks[0]) ? 0 : dn.includes(toks[0]) ? 1 : 2) + (e.it.url ? 0 : .3) + dn.length / 200;
    return { e, sc };
  }).filter(Boolean).sort((a, b) => a.sc - b.sc).slice(0, 8);
  return { toks, res };
}
function markText(raw, toks) {
  const ch = [...raw], nc = ch.map(c => { const n = nrm(c); return n.length === 1 ? n : '\u0000'; }), j = nc.join(''), mk = ch.map(() => false);
  toks.forEach(tk => { if (!tk) return; let i = j.indexOf(tk); while (i >= 0) { for (let k = 0; k < tk.length; k++) mk[i + k] = true; i = j.indexOf(tk, i + tk.length); } });
  let s = '', on = false; ch.forEach((c, i) => { if (mk[i] && !on) { s += '<mark>'; on = true; } if (!mk[i] && on) { s += '</mark>'; on = false; } s += esc(c); });
  return on ? s + '</mark>' : s;
}
function addRecent(k) { const r = LS.get(recKey(), []).filter(x => x !== k); r.unshift(k); LS.set(recKey(), r.slice(0, 8)); }
function bindSearch(root) {
  const box = $('.search', root), inp = $('.s-in', box), ghost = $('.s-ghost', box), drop = $('.s-drop', box), clr = $('.s-clear', box);
  let act = -1, list = [], ghostFull = '';
  const close = () => { drop.classList.remove('on'); act = -1; };
  const row = (e, nameHtml, sub, i, recent) => {
    const a = e.area, c = a ? a.color : '#cbd5e1';
    return `<div class="s-item" role="option" data-k="${esc(e.key)}" style="--i:${i}"><i class="s-dot" style="--c:${c}"></i><div class="s-main"><div class="s-name">${nameHtml}</div><div class="s-sub">${sub}</div></div>${recent ? `<button class="s-x" type="button" data-rm="${esc(e.key)}" aria-label="remove">✕</button>` : `<span class="tag${e.it.url ? ' lk' : ''}">${esc(e.it.url ? t('linked') : t('prep'))}</span>`}</div>`;
  };
  function update() {
    const q = inp.value; clr.classList.toggle('on', !!q); act = -1; ghostFull = ''; ghost.innerHTML = '';
    if (!q.trim()) {
      const rec = LS.get(recKey(), []).map(k => IDX.find(e => e.key === k)).filter(Boolean);
      list = rec;
      if (!rec.length) { close(); return; }
      drop.innerHTML = `<div class="s-head"><span>🕘 ${esc(t('recent'))}</span><button type="button" data-clr="1">${esc(t('clear'))}</button></div>` + rec.map((e, i) => row(e, esc(L(e.it.label)), esc(e.area ? L(e.area.name) : ''), i, true)).join('');
      drop.classList.add('on'); return;
    }
    const r = query(q); list = r.res.map(x => x.e);
    if (!list.length) { drop.innerHTML = `<div class="s-empty"><b>${esc(t('none'))}</b>${esc(t('noneSub'))}<br><button class="btn pri sm" type="button" data-ask="1" style="margin-top:10px">💬 ${esc(t('ask'))}</button></div>`; drop.classList.add('on'); return; }
    drop.innerHTML = list.map((e, i) => row(e, markText(L(e.it.label), r.toks), esc(e.area ? L(e.area.name) : ''), i, false)).join('');
    drop.classList.add('on');
    const top = L(list[0].it.label);
    if (top.toLowerCase().startsWith(q.toLowerCase()) && top.length > q.length) { ghostFull = top; ghost.innerHTML = `<span class="gq">${esc(q)}</span>${esc(top.slice(q.length))}`; }
  }
  function setAct(n) { const its = $$('.s-item', drop); if (!its.length) return; act = (n + its.length) % its.length; its.forEach((x, i) => x.classList.toggle('act', i === act)); its[act].scrollIntoView({ block: 'nearest' }); }
  function pick(k) { const e = IDX.find(x => x.key === k); if (!e) return; inp.value = L(e.it.label); ghost.innerHTML = ''; close(); inp.blur(); addRecent(k); goItem(e.ids[0]); }
  inp.addEventListener('input', update);
  inp.addEventListener('focus', () => { box.classList.add('focus'); update(); });
  inp.addEventListener('blur', () => { box.classList.remove('focus'); setTimeout(close, 180); });
  inp.addEventListener('keydown', e => {
    if (e.isComposing || e.keyCode === 229) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setAct(act + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setAct(act - 1); }
    else if ((e.key === 'Tab' || (e.key === 'ArrowRight' && inp.selectionStart === inp.value.length)) && ghostFull) { e.preventDefault(); inp.value = ghostFull; update(); }
    else if (e.key === 'Enter') { const its = $$('.s-item', drop); if (its.length) { e.preventDefault(); pick(its[Math.max(0, act)].dataset.k); } }
    else if (e.key === 'Escape') close();
  });
  inp.addEventListener('scroll', () => { ghost.scrollLeft = inp.scrollLeft; });
  drop.addEventListener('pointerdown', e => e.preventDefault());
  drop.addEventListener('click', e => {
    const rm = e.target.closest('[data-rm]'); if (rm) { LS.set(recKey(), LS.get(recKey(), []).filter(x => x !== rm.dataset.rm)); update(); return; }
    if (e.target.closest('[data-clr]')) { LS.set(recKey(), []); update(); toast(t('recentDel')); return; }
    if (e.target.closest('[data-ask]')) { close(); openConsult(); return; }
    const it = e.target.closest('.s-item'); if (it) pick(it.dataset.k);
  });
  clr.addEventListener('click', () => { inp.value = ''; inp.focus(); update(); });
}

/* =====================================================================
   7. 集計（インフォグラフィック用）
   ===================================================================== */
function stats() {
  const sh = IDX.filter(e => e.it.type === 'shelf');
  const by = store.areas.map(a => ({ a, n: sh.filter(e => e.it.area === a.id).length, l: sh.filter(e => e.it.area === a.id && e.it.url).length }));
  const other = sh.filter(e => !areaOf(e.it.area)); if (other.length) by.push({ a: { id: '', icon: '📦', color: '#94a3b8', name: { ja: 'その他', en: 'Other', zh: '其他' } }, n: other.length, l: other.filter(e => e.it.url).length });
  const n = sh.length, l = sh.filter(e => e.it.url).length;
  return { n, l, areas: store.areas.length, rate: n ? Math.round(l / n * 100) : 0, by };
}

/* =====================================================================
   8. スプラッシュ（キネティック・タイポグラフィ）
   ===================================================================== */
const SP = { el: $('#splash'), vt: 0, vi: 0, clk: 0, shown: true };
function splashBuild() {
  $('#sp-sub').textContent = store.store.sub || 'FLOOR GUIDE';
  $('#sp-store').innerHTML = kineticChars(fullName());
  $('#sp-shop-n').textContent = fullName();
  const W = store.canvas.w, H = store.canvas.h, sm = $('#sp-map');
  sm.setAttribute('viewBox', `${-W * .05} ${-H * .05} ${W * 1.1} ${H * 1.1}`);
  const ol = (store.canvas.outline && store.canvas.outline.length > 2 ? store.canvas.outline : [[0, 0], [W, 0], [W, H], [0, H]]).map(q => q.join(',')).join(' ');
  sm.innerHTML = `<polygon points="${ol}" pathLength="100" style="--d:0"/>` + store.items.filter(i => i.type !== 'label').map((i, k) => `<rect x="${i.x}" y="${i.y}" width="${i.w}" height="${i.h}" rx="4" pathLength="100" style="--d:${200 + k * 18}"/>`).join('');
  const em = ['📺', '❄️', '🧺', '🍚', '💻', '📱', '🎧', '🖨️', '💡', '🔋', '⌚', '🧊', '📷', '🎮'];
  $('#sp-float').innerHTML = em.map((e, i) => `<span style="left:${(i * 73) % 100}%;--s:${22 + (i * 7) % 26}px;--t:${14 + (i * 5) % 11}s;--dl:-${(i * 1.7) % 14}s;--x:${(i % 2 ? 1 : -1) * (20 + i * 3)}px;--r:${(i % 2 ? 1 : -1) * 40}deg">${e}</span>`).join('');
}
function verbTick() {
  const el = $('#sp-verb'), vs = t('verbs');
  el.classList.add('out');
  setTimeout(() => { SP.vi = (SP.vi + 1) % vs.length; el.classList.remove('out'); el.innerHTML = kineticChars(vs[SP.vi]); }, el.children.length ? 480 : 0);
}
function clockTick() {
  const d = new Date();
  $('#sp-time').textContent = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(d);
  $('#sp-date').textContent = new Intl.DateTimeFormat({ ja: 'ja-JP', en: 'en-US', zh: 'zh-CN' }[lang], { timeZone: 'Asia/Tokyo', month: 'long', day: 'numeric', weekday: 'short' }).format(d);
}
function splashShow() {
  staffUntil = 0;
  Sheet.hide(); splashBuild(); applyStatic();
  SP.el.hidden = false; void SP.el.offsetWidth; SP.el.classList.remove('out'); SP.shown = true;
  $('#sp-verb').innerHTML = ''; SP.vi = -1; verbTick();
  clearInterval(SP.vt); SP.vt = setInterval(verbTick, 2600);
  clearInterval(SP.clk); clockTick(); SP.clk = setInterval(clockTick, 1000);
  try { SP.el.focus({ preventScroll: true }); } catch (e) {}
}
function splashHide() {
  if (!SP.shown) return; SP.shown = false;
  SP.el.classList.add('out'); clearInterval(SP.vt); clearInterval(SP.clk);
  setTimeout(() => { if (!SP.shown) SP.el.hidden = true; }, 900);
  appEnter();
}
SP.el.addEventListener('click', e => {
  if (e.target.closest('#sp-shop')) { e.stopPropagation(); openShopPicker(); return; }
  const b = e.target.closest('[data-l]');
  if (b) { e.stopPropagation(); b.style.transform = 'scale(1.08)'; setLang(b.dataset.l, true); setTimeout(splashHide, 180); return; }
  splashHide();
});
SP.el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); splashHide(); } });

/* =====================================================================
   9. アプリ本体
   ===================================================================== */
let booted = false, curView = 'home', filterArea = '', HL = [];
const views = { home: $('#v-home'), map: $('#v-map'), list: $('#v-list') };
function applyStatic() {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.body.dataset.lang = lang;
  $$('[data-t]').forEach(el => { const v = t(el.dataset.t); if (typeof v === 'string') el.textContent = v; });
  $('#tb-name').textContent = fullName();
  $('#tb-lang-l').textContent = lang.toUpperCase();
  document.title = fullName() + ' | Floor Guide';
  $$('.ptr-tx').forEach(x => x.textContent = t('pull'));
  updateFavBadge(false);
}
function setLang(l, quiet) {
  if (!LANGS.includes(l)) return; const ch = l !== lang; lang = l; LS.set('fg-lang', l); applyStatic();
  if (!ch) return;
  if (SP.shown) { splashBuild(); $('#sp-verb').innerHTML = kineticChars(t('verbs')[Math.max(0, SP.vi)]); clockTick(); }
  if (booted) { renderHome(); renderList(); renderViewer(true); moveTabInd(); }
  if (!quiet) toast(t('langChanged'), { icon: '🌐' });
}
function moveTabInd() {
  const b = $(`.tab[data-v="${curView}"]`), ind = $('#tab-ind'); if (!b) return;
  ind.style.width = b.offsetWidth + 'px'; ind.style.transform = `translateX(${b.offsetLeft}px)`;
}
function goTab(v) {
  if (!views[v]) return; const order = ['home', 'map', 'list'], dir = order.indexOf(v) > order.indexOf(curView) ? 1 : -1;
  curView = v;
  Object.entries(views).forEach(([k, el]) => { el.style.setProperty('--dx', (k === v ? -dir : dir) * 24 + 'px'); el.classList.toggle('on', k === v); });
  $$('.tab').forEach(b => b.classList.toggle('on', b.dataset.v === v));
  moveTabInd();
  if (v === 'list') renderList();
}
$('#tabbar').addEventListener('click', e => { const b = e.target.closest('.tab'); if (b) { goTab(b.dataset.v); vib(6); } });
window.addEventListener('resize', moveTabInd);

/* ---------- スケルトン ---------- */
function homeSkeleton() {
  $('#home').innerHTML = `<div class="sk" style="height:250px;border-radius:26px"></div>
  <div class="sk" style="height:26px;width:42%;margin:30px 0 14px"></div>
  <div class="areas">${'<div class="sk" style="height:170px;border-radius:20px"></div>'.repeat(4)}</div>
  <div class="sk" style="height:26px;width:50%;margin:30px 0 14px"></div>
  <div class="stats">${'<div class="sk" style="height:92px;border-radius:20px"></div>'.repeat(3)}</div>
  <div class="sk" style="height:200px;margin-top:12px;border-radius:20px"></div>`;
}
function mapSkeleton(on) {
  const sk = $('#map-sk');
  if (on) { $('.sk-grid', sk).innerHTML = Array.from({ length: 32 }, (_, i) => `<i style="grid-row:span ${1 + (i * 7) % 3}"></i>`).join(''); sk.classList.remove('hide'); }
  else sk.classList.add('hide');
}

/* ---------- ホーム ---------- */
function greet() { const h = +new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tokyo', hour: '2-digit', hourCycle: 'h23' }).format(new Date()); return t('greet')[h < 11 ? 0 : h < 17 ? 1 : 2]; }
function renderHome() {
  const st = stats(), hl = t('heroHl'), j = t('heroJoin');
  const pop = IDX.filter(e => e.it.url && e.it.type === 'shelf').slice(0, 10);
  const C = 2 * Math.PI * 46;
  let off = 0;
  const segs = st.by.filter(b => b.n).map(b => { const len = st.n ? b.n / st.n * C : 0; const s = `<circle r="46" cx="60" cy="60" stroke="${b.a.color}" data-len="${(len - 2).toFixed(1)}" stroke-dasharray="0 ${C.toFixed(1)}" stroke-dashoffset="${(-off).toFixed(1)}"/>`; off += len; return s; }).join('');
  const maxN = Math.max(1, ...st.by.map(b => b.n));
  $('#home').innerHTML = `
  <section class="hero rv">
    <div class="hero-store"><span class="pdot"></span>${esc(fullName())}</div>
    <p class="hero-greet">${esc(greet())}</p>
    <h1 class="hero-q">${t('hero').map((w, i) => `<span class="kw${i === hl ? ' hl' : ''}" style="--i:${i}"><span>${esc(w)}</span></span>`).join(j ? ' ' : '')}</h1>
    <div class="search" role="search">
      <div class="s-field"><span class="s-ico">🔍</span><div class="s-ghost" aria-hidden="true"></div>
        <input class="s-in" type="search" placeholder="${esc(t('ph'))}" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search" role="combobox" aria-expanded="false">
        <button class="s-clear" type="button" aria-label="clear">×</button></div>
      <div class="s-drop" role="listbox"></div>
    </div>
    ${pop.length ? `<div class="hero-chips" aria-label="${esc(t('popular'))}">${pop.map((e, i) => `<button class="hchip rp" type="button" data-k="${esc(e.key)}" style="--i:${i}">${esc(L(e.it.label))}</button>`).join('')}</div>` : ''}
  </section>
  <section class="sec">
    <div class="sec-h rv"><div><h2>${esc(t('areasT'))}</h2><p>${esc(t('areasS'))}</p></div></div>
    <div class="areas">${st.by.filter(b => b.a.id).map((b, i) => `<button class="acard rp" type="button" data-area="${esc(b.a.id)}" style="--c:${b.a.color};--i:${i}">
      <div class="a-ic">${esc(b.a.icon)}</div><div class="a-n">${esc(L(b.a.name))}</div><div class="a-d">${esc(L(b.a.desc))}</div>
      <div class="a-meta"><span>${b.n} ${esc(t('corners'))}</span><span>${b.l} ${esc(t('linked'))}</span></div>
      <div class="a-bar"><i style="--w:${b.n ? Math.round(b.l / b.n * 100) : 0}%"></i></div></button>`).join('')}</div>
  </section>
  <section class="sec rv"><div class="appc"><div class="ai">🎁</div><div><h3>${esc(t('appT'))}</h3><p>${esc(t('appS'))}</p></div>
    <div class="acts"><a class="btn sm" target="_blank" rel="noopener" href="https://apps.apple.com/jp/app/%E3%83%8E%E3%82%B8%E3%83%9E%E3%82%A2%E3%83%97%E3%83%AA/id451436140">App Store</a><a class="btn sm" target="_blank" rel="noopener" href="https://play.google.com/store/apps/details?id=jp.mnoji.app">Google Play</a></div></div></section>
  <section class="sec rv"><div class="staffc"><div style="font-size:34px">🛠</div><div><h3>スタッフの方へ：フロアマップの編集</h3><p>棚の追加・移動・名前の変更、図面画像やSVGの読み込み、他店舗用マップの作成ができます。</p></div>
    <div class="acts"><button class="btn sm pri" type="button" id="hs-edit">✏️ マップを編集</button><button class="btn sm line" type="button" id="hs-new">＋ 他店舗のマップを作る</button></div></div></section>`;
  const h = $('#home');
  bindSearch(h);
  $$('.hchip', h).forEach(b => b.onclick = () => { const e = IDX.find(x => x.key === b.dataset.k); if (e) goItem(e.ids[0]); });
  $$('.acard', h).forEach(b => b.onclick = () => openArea(b.dataset.area));
  $('#hs-edit', h).onclick = () => requestEditor();
  $('#hs-new', h).onclick = () => openNewStore();
  reveal(h);
}
function animateStats(root) {
  $$('.cnt', root).forEach(el => countUp(el, +el.dataset.n, el.dataset.s || ''));
  const C = 2 * Math.PI * 46;
  requestAnimationFrame(() => {
    $$('circle[data-len]', root).forEach((c, i) => { c.style.transitionDelay = i * 120 + 'ms'; c.setAttribute('stroke-dasharray', `${Math.max(0, +c.dataset.len)} ${C.toFixed(1)}`); });
    $$('.btrack [data-w]', root).forEach((b, i) => { b.style.transitionDelay = (i * 90) + 'ms'; b.style.width = b.dataset.w + '%'; });
  });
}

/* ---------- 引っぱって更新 ---------- */
function bindPTR(view) {
  const ind = $('.ptr', view), tx = $('.ptr-tx', ind), ic = $('.ptr-ic', ind); let y0 = null, h = 0, busy = false;
  view.addEventListener('touchstart', e => { if (busy || view.scrollTop > 0 || e.touches.length > 1) { y0 = null; return; } y0 = e.touches[0].clientY; h = 0; }, { passive: true });
  view.addEventListener('touchmove', e => {
    if (y0 == null) return; const dy = e.touches[0].clientY - y0;
    if (dy <= 0 || view.scrollTop > 0) { if (h) { ind.style.height = '0'; h = 0; } return; }
    if (e.cancelable) e.preventDefault();
    h = Math.min(120, dy * .5); ind.style.transition = 'none'; ind.style.height = h + 'px';
    const ready = h > 66; if (ready !== ind.classList.contains('ready')) { ind.classList.toggle('ready', ready); vib(8); }
    tx.textContent = ready ? t('release') : t('pull'); ic.style.transform = `rotate(${ready ? 180 : h * 2}deg)`;
  }, { passive: false });
  view.addEventListener('touchend', async () => {
    if (y0 == null) return; y0 = null; ind.style.transition = '';
    if (h > 66) { busy = true; ind.classList.add('busy'); ic.style.transform = ''; ic.textContent = '↻'; ind.style.height = '62px'; tx.textContent = t('refreshing'); await refreshAll(); ind.classList.remove('busy', 'ready'); ic.textContent = '↓'; busy = false; }
    ind.style.height = '0'; h = 0;
  });
}
async function refreshAll() {
  const b = $('#tb-refresh'); b.classList.add('spin');
  const fresh = loadStore(store.id); if (fresh) store = fresh;
  buildIndex(); homeSkeleton(); mapSkeleton(true);
  await sleep(850);
  renderHome(); renderViewer(); renderList(); applyStatic(); mapSkeleton(false);
  b.classList.remove('spin'); toast(t('refreshed'), { icon: '↻' });
}
$('#tb-refresh').onclick = refreshAll;

/* ---------- マップ（閲覧） ---------- */
const mapSvg = $('#map-svg');
const mapPZ = PanZoom(mapSvg, {
  onTap: target => { const g = target && target.closest && target.closest('.it'); if (g && g.dataset.id) selectItem(g.dataset.id); },
  onChange: () => updatePinScale()
});
mapSvg.addEventListener('pointerdown', () => $('#map-hint').classList.add('hide'), { once: true });
$('.map-fab').addEventListener('click', e => { const z = e.target.closest('[data-z]'); if (!z) return; z.dataset.z === 'in' ? mapPZ.zoom(1 / 1.5) : z.dataset.z === 'out' ? mapPZ.zoom(1.5) : mapPZ.fit(true); });
function renderViewer(keep) {
  const vb = mapPZ.vb;
  mapSvg.innerHTML = mapMarkup(store, { p: 'v', anim: !keep && motion }) + PIN;
  mapPZ.setBounds(store.canvas.w, store.canvas.h);
  if (keep) mapSvg.setAttribute('viewBox', `${vb.x} ${vb.y} ${vb.w} ${vb.h}`); else mapPZ.fit(false);
  $('#map-chips').innerHTML = `<button class="chip${filterArea ? '' : ' on'}" type="button" data-a="">${esc(t('all'))}</button>` + store.areas.map(a => `<button class="chip${filterArea === a.id ? ' on' : ''}" type="button" data-a="${esc(a.id)}" style="--c:${a.color}"><i></i>${esc(a.icon)} ${esc(L(a.name))}</button>`).join('');
  applyFilter(false); applyHL();
  const pin = $('#pin'); if (pin) $('.pin-t', pin).textContent = t('here');
  if (keep && HL.length) { const it = byId(HL[0]); if (it) placePin(it, false); }
}
$('#map-chips').addEventListener('click', e => { const c = e.target.closest('.chip'); if (!c) return; filterArea = c.dataset.a; $$('.chip', $('#map-chips')).forEach(x => x.classList.toggle('on', x === c)); applyFilter(true); c.scrollIntoView({ inline: 'center', block: 'nearest', behavior: motion ? 'smooth' : 'auto' }); });
function applyFilter(zoom) {
  $$('.it', mapSvg).forEach(g => g.classList.toggle('dim', !!filterArea && g.dataset.area !== filterArea && !g.classList.contains('t-entrance')));
  if (!zoom) return;
  if (!filterArea) { mapPZ.fit(true); return; }
  const its = store.items.filter(i => i.area === filterArea); if (!its.length) return;
  const x = Math.min(...its.map(i => i.x)), y = Math.min(...its.map(i => i.y)), x2 = Math.max(...its.map(i => i.x + i.w)), y2 = Math.max(...its.map(i => i.y + i.h));
  mapPZ.focus({ x: x - 20, y: y - 20, w: (x2 - x + 40) / 3.2, h: (y2 - y + 40) / 3.2 });
}
function applyHL() { $$('.it', mapSvg).forEach(g => g.classList.toggle('hl', HL.includes(g.dataset.id))); }
function placePin(it, drop = true) {
  const pin = $('#pin'); if (!pin) return;
  pin.style.display = ''; pin.setAttribute('transform', `translate(${it.x + it.w / 2},${it.y})`);
  pin.classList.remove('drop'); if (drop) { void pin.getBoundingClientRect(); pin.classList.add('drop'); }
  updatePinScale();
}
function updatePinScale() { const p = $('#pin .pin-s'); if (p) p.setAttribute('transform', `scale(${clamp(mapPZ.vb.w / 1000, .45, 1.6).toFixed(3)})`); }
function goItem(id) { if (curView !== 'map') { goTab('map'); setTimeout(() => selectItem(id), 380); } else selectItem(id); }
function selectItem(id, o = {}) {
  const it = byId(id); if (!it) return;
  const k = keyOf(it);
  HL = store.items.filter(x => keyOf(x) === k && x.type === it.type).map(x => x.id);
  if (filterArea && it.area !== filterArea) { filterArea = ''; $$('.chip', $('#map-chips')).forEach(c => c.classList.toggle('on', !c.dataset.a)); applyFilter(false); }
  applyHL(); placePin(it); mapPZ.focus(it); vib(10);
  if (o.sheet !== false) openItem(it);
}

/* ---------- 売り場の詳細（ボトムシート） ---------- */
const getFav = () => LS.get(favKey(), []);
function setFav(a) { LS.set(favKey(), a); updateFavBadge(true); }
function updateFavBadge(bump) { const b = $('#fav-bdg'), n = getFav().filter(k => IDX.some(e => e.key === k)).length; b.textContent = n; b.dataset.n = n; if (bump) { b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); } }
function openItem(it) {
  const a = areaOf(it.area), k = keyOf(it), isFav = getFav().includes(k);
  const cx = it.x + it.w / 2, cy = it.y + it.h / 2, seen = new Set([k]);
  const near = store.items.filter(x => x.type === 'shelf' && keyOf(x) && !seen.has(keyOf(x))).map(x => ({ x, d: Math.hypot(x.x + x.w / 2 - cx, x.y + x.h / 2 - cy) })).sort((p, q) => p.d - q.d).filter(o => { const kk = keyOf(o.x); if (seen.has(kk)) return false; seen.add(kk); return true; }).slice(0, 6);
  const note = L(it.note);
  const body = Sheet.show(`
    <div class="sh-h sh-drag"><div>${a ? `<span class="abadge" style="--c:${a.color}">${esc(a.icon)} ${esc(L(a.name))}</span>` : ''}<h2>${kineticChars(L(it.label))}</h2></div><button class="sh-x" type="button" data-close aria-label="${esc(t('close'))}">✕</button></div>
    ${note ? `<div class="note">☀️ ${esc(note)}</div>` : ''}
    <div class="sh-acts">
      ${it.url ? `<a class="btn pri wide rp" href="${esc(siteUrl(it.url))}"${isExt(it.url) ? ' target="_blank" rel="noopener"' : ''}>${esc(t('open'))}</a>` : `<div class="prep">⏳ ${esc(t('prepMsg'))}</div>`}
      <div class="row"><button class="btn line rp" type="button" id="sh-fav">${esc(isFav ? t('unfav') : t('fav'))}</button><button class="btn ghost rp" type="button" id="sh-ask">💬 ${esc(t('ask'))}</button></div>
    </div>
    ${near.length ? `<div class="near"><h4>${esc(t('near'))}</h4><div class="nchips">${near.map((o, i) => { const aa = areaOf(o.x.area); return `<button class="nchip rp" type="button" data-id="${esc(o.x.id)}" style="--i:${i};--c:${aa ? aa.color : '#94a3b8'}"><i></i>${esc(L(o.x.label))}<small>${Math.max(1, Math.round(o.d * .05))}m</small></button>`; }).join('')}</div></div>` : ''}`);
  $('#sh-fav', body).onclick = e => {
    const f = getFav(), on = f.includes(k);
    setFav(on ? f.filter(x => x !== k) : [k, ...f]);
    e.currentTarget.textContent = on ? t('fav') : t('unfav');
    if (!on && motion) hearts(e.currentTarget);
    toast(on ? t('favDel') : t('favAdd'), { icon: on ? '♡' : '♥', action: { label: t('undo'), fn: () => { setFav(f); const b = $('#sh-fav'); if (b) b.textContent = on ? t('unfav') : t('fav'); renderList(); } } });
    renderList();
  };
  $('#sh-ask', body).onclick = () => openConsult(it.area);
  $$('.nchip', body).forEach(b => b.onclick = () => selectItem(b.dataset.id));
}
function hearts(btn) {
  const r = btn.getBoundingClientRect();
  for (let i = 0; i < 7; i++) {
    const s = document.createElement('span'), a = (-90 + (i - 3) * 24) * Math.PI / 180, d = 50 + Math.random() * 30;
    s.textContent = '♥'; s.style.cssText = `position:fixed;left:${r.left + r.width / 2}px;top:${r.top + r.height / 2}px;color:#f43f5e;font-size:18px;z-index:999;pointer-events:none;transition:transform .8s cubic-bezier(.16,1,.3,1),opacity .8s`;
    document.body.appendChild(s);
    requestAnimationFrame(() => { s.style.transform = `translate(${Math.cos(a) * d}px,${Math.sin(a) * d}px) scale(1.3)`; s.style.opacity = '0'; });
    setTimeout(() => s.remove(), 850);
  }
}
function openArea(id) {
  const a = areaOf(id); if (!a) return;
  const es = IDX.filter(e => e.it.area === id && e.it.type === 'shelf');
  const body = Sheet.show(`<div class="sh-h sh-drag"><div><span class="abadge" style="--c:${a.color}">${esc(a.icon)} ${es.length} ${esc(t('corners'))}</span><h2>${kineticChars(L(a.name))}</h2></div><button class="sh-x" type="button" data-close>✕</button></div>
    ${AREA_LINKS[id] ? `<a class="btn pri wide rp" id="ar-page" href="${esc(siteUrl(AREA_LINKS[id]))}" style="margin-bottom:10px">🚪 ${esc(L({ ja: 'このエリアのページを開く', en: 'Open this area page', zh: '打开该区域页面' }))}</a>` : ''}
    <button class="btn line wide rp" type="button" id="ar-map" style="margin-bottom:14px">🗺 ${esc(t('areaMap'))}</button>
    <div class="alist">${es.map((e, i) => `<button class="arow rp" type="button" data-id="${esc(e.ids[0])}" style="--i:${i}"><i class="s-dot" style="--c:${a.color}"></i><span class="s-main">${esc(L(e.it.label))}</span><span class="tag${e.it.url ? ' lk' : ''}">${esc(e.it.url ? t('linked') : t('prep'))}</span><span class="arr">›</span></button>`).join('')}</div>`);
  $('#ar-map', body).onclick = () => { Sheet.hide(); filterArea = id; goTab('map'); setTimeout(() => { $$('.chip', $('#map-chips')).forEach(c => c.classList.toggle('on', c.dataset.a === id)); applyFilter(true); }, 380); };
  $$('.arow', body).forEach(b => b.onclick = () => goItem(b.dataset.id));
}

/* ---------- マイリスト（スワイプ操作） ---------- */
function renderList() {
  const root = $('#list'); if (!root) return;
  const fav = getFav().map(k => IDX.find(e => e.key === k)).filter(Boolean);
  const rec = LS.get(recKey(), []).map(k => IDX.find(e => e.key === k)).filter(Boolean);
  root.innerHTML = `<div class="sec-h" style="margin-top:4px"><div><h2 style="font-size:26px;font-weight:900">${kineticChars(t('listT'))}</h2><p>${esc(t('listS'))}</p></div></div>
    <div class="lsec" id="l-fav">${fav.length ? `<div class="swhint">${esc(t('swipe'))}</div>` : `<div class="lempty"><span class="hb">♥</span>${t('listEmpty')}</div>`}</div>
    <div class="lsec"><h3>🕘 ${esc(t('recentT'))}</h3><div id="l-rec">${rec.length ? '' : `<div class="prep">${esc(t('recentEmpty'))}</div>`}</div></div>`;
  $$('.sec-h h2 span', root).forEach(s => { s.style.cssText += ';display:inline-block;opacity:0;transform:translateY(.5em);animation:chUp .5s cubic-bezier(.16,1,.3,1) forwards;animation-delay:calc(var(--i)*40ms)'; });
  const row = (e, i) => { const a = e.area; return `<div class="lrow" style="animation:sIn .4s var(--ease) both;animation-delay:${i * 50}ms"><i class="s-dot" style="--c:${a ? a.color : '#cbd5e1'}"></i><div class="s-main"><div class="s-name">${esc(L(e.it.label))}</div><div class="s-sub">${esc(a ? L(a.name) : '')}</div></div><span class="tag${e.it.url ? ' lk' : ''}">${esc(e.it.url ? t('linked') : t('prep'))}</span></div>`; };
  const lf = $('#l-fav', root);
  fav.forEach((e, i) => lf.appendChild(swipeRow(row(e, i), {
    onTap: () => goItem(e.ids[0]),
    right: { label: '🗺 ' + t('onMap'), fn: () => goItem(e.ids[0]) },
    left: { label: t('del') + ' 🗑', fn: el => { const before = getFav(); collapse(el, () => { setFav(before.filter(x => x !== e.key)); toast(t('favDel'), { icon: '🗑', action: { label: t('undo'), fn: () => { setFav(before); renderList(); } } }); if (!getFav().length) renderList(); }); } }
  })));
  const lr = $('#l-rec', root);
  rec.forEach((e, i) => lr.appendChild(swipeRow(row(e, i), {
    onTap: () => goItem(e.ids[0]),
    right: { label: '🗺 ' + t('onMap'), fn: () => goItem(e.ids[0]) },
    left: { label: t('del') + ' 🗑', fn: el => { const before = LS.get(recKey(), []); collapse(el, () => { LS.set(recKey(), before.filter(x => x !== e.key)); toast(t('recentDel'), { icon: '🗑', action: { label: t('undo'), fn: () => { LS.set(recKey(), before); renderList(); } } }); }); } }
  })));
}

/* ---------- ご相談シート ---------- */
function openConsult(areaId) {
  let p = 0, a = areaId || '';
  const draw = () => {
    const body = Sheet.show(`<div class="sh-h sh-drag"><div><h2>${kineticChars(t('cT'))}</h2><p style="font-size:13px;color:var(--sub);margin-top:4px">${esc(t('cD'))}</p></div><button class="sh-x" type="button" data-close>✕</button></div>
      <div class="fld"><span>${esc(t('cP'))}</span><div class="pills" id="c-p">${t('cPs').map((s, i) => `<button class="pill${i === p ? ' on' : ''}" type="button" data-i="${i}">${esc(s)}</button>`).join('')}</div></div>
      <div class="fld"><span>${esc(t('cA'))}</span><div class="pills" id="c-a">${store.areas.map(x => `<button class="pill${x.id === a ? ' on' : ''}" type="button" data-a="${esc(x.id)}">${esc(x.icon)} ${esc(L(x.name))}</button>`).join('')}<button class="pill${a === '_' ? ' on' : ''}" type="button" data-a="_">${esc(t('cOther'))}</button></div></div>
      <label class="fld"><span>${esc(t('cX'))}</span><textarea class="inp" id="c-x" maxlength="300" placeholder="${esc(t('cPh'))}"></textarea></label>
      <button class="btn pri wide rp" type="button" id="c-go">${esc(t('cMake'))}</button>`);
    $('#c-p', body).onclick = e => { const b = e.target.closest('.pill'); if (!b) return; p = +b.dataset.i; $$('#c-p .pill', body).forEach(x => x.classList.toggle('on', x === b)); };
    $('#c-a', body).onclick = e => { const b = e.target.closest('.pill'); if (!b) return; a = b.dataset.a; $$('#c-a .pill', body).forEach(x => x.classList.toggle('on', x === b)); };
    $('#c-go', body).onclick = () => {
      const x = $('#c-x', body).value.trim(), ar = a === '_' ? t('cOther') : (areaOf(a) ? L(areaOf(a).name) : '—');
      const tm = new Intl.DateTimeFormat('ja-JP', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' }).format(new Date());
      const b2 = Sheet.show(`<div class="sh-h sh-drag"><h2>${kineticChars(t('cT'))}</h2><button class="sh-x" type="button" data-close>✕</button></div>
        <div class="ticket"><div class="tb">${esc(t('cShow'))}</div><dl><div><dt>${esc(t('cP'))}</dt><dd>${esc(t('cPs')[p])}</dd></div><div><dt>${esc(t('cA'))}</dt><dd>${esc(ar)}</dd></div><div><dt>${esc(t('cX'))}</dt><dd>${esc(x || t('none2'))}</dd></div><div><dt>🕘</dt><dd>${esc(tm)} ・ ${esc(fullName())}</dd></div></dl></div>
        <button class="btn line wide" type="button" id="c-back" style="margin-top:12px">${esc(t('cBack'))}</button>`);
      $('#c-back', b2).onclick = draw; toast(t('cMade'), { icon: '💬' });
    };
  };
  draw();
}
$('#tb-ask').onclick = () => openConsult();
$('#tb-store').onclick = () => { goTab('home'); views.home.scrollTo({ top: 0, behavior: motion ? 'smooth' : 'auto' }); };
$('#tb-lang').onclick = () => {
  const body = Sheet.show(`<div class="sh-h sh-drag"><h2>🌐 ${esc(t('lang'))}</h2><button class="sh-x" type="button" data-close>✕</button></div><div class="alist">${[['ja', '日本語', 'Japanese'], ['en', 'English', '英語'], ['zh', '中文', 'Chinese']].map((x, i) => `<button class="arow rp" type="button" data-l="${x[0]}" style="--i:${i}"><span class="s-main">${x[1]} <small style="color:var(--sub);font-weight:600">${x[2]}</small></span>${x[0] === lang ? '<span class="arr">✓</span>' : ''}</button>`).join('')}</div>`);
  $$('[data-l]', body).forEach(b => b.onclick = () => { setLang(b.dataset.l); Sheet.hide(); });
};
$('#tb-menu').onclick = openMenu;
$('#tb-edit').onclick = () => requestEditor();
$('#map-edit').onclick = () => requestEditor();
function openMenu() {
  const body = Sheet.show(`<div class="sh-h sh-drag"><h2>⚙ ${esc(t('menu'))}</h2><button class="sh-x" type="button" data-close>✕</button></div>
    <div class="mrow"><span>✨ ${esc(t('motion'))}</span><div class="seg" id="m-mo"><button type="button" data-v="1" class="${motion ? 'on' : ''}">${esc(t('on'))}</button><button type="button" data-v="0" class="${motion ? '' : 'on'}">${esc(t('off'))}</button></div></div>
    <button class="mbtn rp" type="button" id="m-edit" style="background:#eff6ff;color:#1d4ed8"><i>✏️</i>${esc(t('edit'))}</button>
    <button class="mbtn rp" type="button" id="m-stores"><i>🏬</i>${esc(t('stores'))}</button>
    ${Date.now() < staffUntil ? '<button class="mbtn rp" type="button" id="m-lock"><i>🔒</i>スタッフモードを終了</button>' : ''}<button class="mbtn rp" type="button" id="m-home"><i>🏠</i>${esc(t('home'))}</button>`);
  $('#m-mo', body).onclick = e => { const b = e.target.closest('button'); if (!b) return; setMotion(b.dataset.v === '1'); $$('#m-mo button', body).forEach(x => x.classList.toggle('on', x === b)); };
  $('#m-edit', body).onclick = () => requestEditor();
  $('#m-stores', body).onclick = () => openStores();
  $('#m-home', body).onclick = () => splashShow();
  const ml = $('#m-lock', body); if (ml) ml.onclick = () => { staffUntil = 0; Sheet.hide(); toast('スタッフモードを終了しました', { icon: '🔒' }); };
}
function setMotion(on) { motion = on && !RM; LS.set('fg-motion', on); document.body.classList.toggle('no-motion', !motion); }

/* ---------- 起動と操作が無いときの自動復帰 ---------- */
async function appEnter() {
  if (booted) return; booted = true;
  homeSkeleton(); mapSkeleton(true);
  await sleep(motion ? 750 : 50);
  renderHome(); renderViewer(); renderList(); mapSkeleton(false); moveTabInd();
}
let lastAct = Date.now();
['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(ev => document.addEventListener(ev, () => { lastAct = Date.now(); }, { capture: true, passive: true }));
setInterval(() => { if (!SP.shown && !ED.open && Date.now() - lastAct > 120000 && !(document.activeElement && /INPUT|TEXTAREA/.test(document.activeElement.tagName))) { splashShow(); } }, 5000);

/* =====================================================================
   10. フロアマップ編集
   ===================================================================== */
const ED = { open: false, tool: 'select', sel: null, snap: true, undo: [], redo: [], drag: null, inSnap: null, lastArea: '', saveT: 0 };
const edSvg = $('#ed-svg');
const DEF = {
  shelf: { ja: '新しい棚', en: 'New shelf', zh: '新货架', w: 90, h: 30 }, counter: { ja: 'レジ', en: 'Cashier', zh: '收银台', w: 60, h: 34 },
  wall: { ja: '', en: '', zh: '', w: 140, h: 12 }, label: { ja: 'テキスト', en: 'Text', zh: '文字', w: 120, h: 28 }, entrance: { ja: '入口', en: 'Entrance', zh: '入口', w: 90, h: 36 }
};
const TOOLNAME = { shelf: '棚', counter: 'レジ', wall: '壁・柱', label: '文字', entrance: '入口' };
const edPZ = PanZoom(edSvg, { shouldPan: e => ED.tool === 'select' && !e.target.closest('.it,.hdl'), onChange: () => edRenderSel(), noDbl: true });
const snapV = v => ED.snap ? Math.round(v / 5) * 5 : Math.round(v);
const snapshot = () => JSON.stringify({ ...store, canvas: { ...store.canvas, bg: null } });
function restore(s) { const bg = store.canvas.bg, o = JSON.parse(s); o.canvas.bg = bg; store = o; }
function pushUndo(s) { ED.undo.push(s || snapshot()); if (ED.undo.length > 80) ED.undo.shift(); ED.redo = []; edUndoBtns(); }
function edUndo() { if (!ED.undo.length) return; ED.redo.push(snapshot()); restore(ED.undo.pop()); if (ED.sel && !byId(ED.sel)) ED.sel = null; edAfter(true); }
function edRedo() { if (!ED.redo.length) return; ED.undo.push(snapshot()); restore(ED.redo.pop()); if (ED.sel && !byId(ED.sel)) ED.sel = null; edAfter(true); }
function edUndoBtns() { $('#ed-undo').disabled = !ED.undo.length; $('#ed-redo').disabled = !ED.redo.length; }
function edAfter(panel) { edRender(); if (panel) edPanel(); edUndoBtns(); autosave(); }
function autosave() {
  $('#ed-save').textContent = '保存中…'; $('#ed-save').classList.add('dirty');
  clearTimeout(ED.saveT);
  ED.saveT = setTimeout(() => { const ok = saveStore(store); $('#ed-save').textContent = ok ? '✓ 保存済み' : '⚠ 保存できません'; $('#ed-save').classList.toggle('dirty', !ok); }, 500);
}
let staffUntil = 0;
function staffGate(fn) {
  if (Date.now() < staffUntil) { fn(); return; }
  const body = Sheet.show(`<div class="sh-h sh-drag"><div><h2>${kineticChars('🔒 スタッフ専用')}</h2><p style="font-size:13px;color:var(--sub);margin-top:4px">マップの編集・店舗の作成や切り替えには、スタッフ用パスワードが必要です</p></div><button class="sh-x" type="button" data-close>✕</button></div>
    <label class="fld"><span>パスワード</span><input class="inp" id="sg-in" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="go"></label>
    <button class="btn pri wide rp" type="button" id="sg-go">開く</button>`);
  let fails = 0, lockT = 0;
  const go = () => {
    const inp = $('#sg-in', body);
    if (Date.now() < lockT) { toast('入力の回数が多すぎます。30秒ほど待ってください', { icon: '⏳' }); return; }
    if (sha256(inp.value) === STAFF_HASH) { staffUntil = Date.now() + 15 * 60 * 1000; Sheet.hide(); toast('スタッフモードを15分間有効にしました', { icon: '🔓' }); setTimeout(fn, 260); return; }
    inp.value = ''; fails++; vib([30, 40, 30]);
    inp.animate && inp.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' }, { transform: 'translateX(8px)' }, { transform: 'translateX(0)' }], { duration: 300 });
    if (fails >= 5) { lockT = Date.now() + 30000; fails = 0; }
    toast('パスワードが違います', { icon: '⚠️' });
  };
  $('#sg-go', body).onclick = go; $('#sg-in', body).onkeydown = e => { if (e.key === 'Enter') go(); };
  setTimeout(() => { const i = $('#sg-in', body); i && i.focus(); }, 350);
}
function requestEditor() { staffGate(openEditor); }
function openEditor() {
  Sheet.hide(); ED.open = true; ED.sel = null; ED.undo = []; ED.redo = []; setTool('select');
  const ed = $('#editor'); ed.hidden = false; requestAnimationFrame(() => requestAnimationFrame(() => ed.classList.add('on')));
  edPZ.setBounds(store.canvas.w, store.canvas.h); edRender(); edPanel(); edUndoBtns();
  $('#ed-save').textContent = '✓ 保存済み'; $('#ed-save').classList.remove('dirty');
  setTimeout(() => edPZ.fit(false), 30);
  toast('編集モード：ツールを選んでマップに描いてください', { icon: '✏️' });
}
function closeEditor() {
  clearTimeout(ED.saveT); saveStore(store); ED.open = false;
  const ed = $('#editor'); ed.classList.remove('on'); setTimeout(() => { ed.hidden = true; }, 400);
  buildIndex(); renderHome(); renderViewer(); renderList(); applyStatic();
  toast('フロアマップを保存しました', { icon: '💾' });
}
$('#ed-done').onclick = closeEditor;
$('#ed-undo').onclick = edUndo; $('#ed-redo').onclick = edRedo;
$('#ed-snap').onclick = e => { ED.snap = !ED.snap; e.currentTarget.classList.toggle('on', ED.snap); toast(ED.snap ? 'グリッド吸着：オン（5px単位）' : 'グリッド吸着：オフ', { icon: '🧲', dur: 1600 }); };
$('.ed-zoom').addEventListener('click', e => { const b = e.target.closest('[data-ez]'); if (!b) return; b.dataset.ez === 'in' ? edPZ.zoom(1 / 1.5) : b.dataset.ez === 'out' ? edPZ.zoom(1.5) : edPZ.fit(true); });
$('#ed-tools').addEventListener('click', e => { const b = e.target.closest('[data-tool]'); if (b) setTool(b.dataset.tool); });
$('#ed-pn-grab').onclick = () => { $('#ed-pn').classList.toggle('min'); $('#ed-main').classList.toggle('pmin', $('#ed-pn').classList.contains('min')); };
function setTool(tl) {
  ED.tool = tl; $$('#ed-tools button').forEach(b => b.classList.toggle('on', b.dataset.tool === tl));
  edSvg.classList.toggle('draw', tl !== 'select');
  $('#ed-hint').textContent = tl === 'select' ? 'パーツをタップで選択・ドラッグで移動／四隅で大きさ変更。空いている所をドラッグで画面移動、ピンチ・ホイールで拡大' : `ドラッグして「${TOOLNAME[tl]}」を描きます（タップで標準サイズを配置）`;
}
function edRender() {
  edPZ.setBounds(store.canvas.w, store.canvas.h);
  edSvg.innerHTML = mapMarkup(store, { p: 'e', editor: true }) + '<g id="ed-sel"></g>';
  edRenderSel();
}
function edRenderSel() {
  const g = $('#ed-sel', edSvg); if (!g) return;
  $$('.it.sel', edSvg).forEach(x => x.classList.remove('sel'));
  const it = ED.sel && byId(ED.sel); if (!it) { g.innerHTML = ''; return; }
  const n = edSvg.querySelector(`.it[data-id="${CSS.escape(it.id)}"]`); if (n) n.classList.add('sel');
  const s = edPZ.scale(), hs = (matchMedia('(pointer:coarse)').matches ? 20 : 12) * s;
  const P = { nw: [it.x, it.y], n: [it.x + it.w / 2, it.y], ne: [it.x + it.w, it.y], e: [it.x + it.w, it.y + it.h / 2], se: [it.x + it.w, it.y + it.h], s: [it.x + it.w / 2, it.y + it.h], sw: [it.x, it.y + it.h], w: [it.x, it.y + it.h / 2] };
  g.innerHTML = `<rect x="${it.x}" y="${it.y}" width="${it.w}" height="${it.h}" fill="none" stroke="#2563eb" stroke-width="${1.5 * s}" stroke-dasharray="${6 * s} ${4 * s}" pointer-events="none"/>`
    + Object.entries(P).map(([k, p]) => `<rect class="hdl" data-h="${k}" x="${p[0] - hs / 2}" y="${p[1] - hs / 2}" width="${hs}" height="${hs}" rx="${hs * .25}" style="cursor:${k}-resize"/>`).join('')
    + `<text x="${it.x + it.w / 2}" y="${it.y - 14 * s}" style="font-size:${12 * s}px;fill:#1d4ed8">${Math.round(it.w)} × ${Math.round(it.h)}</text>`;
}
function newItem(type, x, y, w, h) {
  const d = DEF[type];
  return { id: uid(), type, x, y, w, h, label: { ja: d.ja, en: d.en, zh: d.zh }, area: type === 'shelf' ? (ED.lastArea || (store.areas[0] && store.areas[0].id) || '') : '', vertical: 'a', url: '', kw: '', note: { ja: '', en: '', zh: '' } };
}
edSvg.addEventListener('pointerdown', e => {
  if (e.button > 0) return;
  const p = edPZ.pt(e), h = e.target.closest('.hdl'), g = e.target.closest('.it');
  if (h && ED.sel) { const it = byId(ED.sel); ED.drag = { mode: 'resize', h: h.dataset.h, p0: p, o: { x: it.x, y: it.y, w: it.w, h: it.h }, snap: snapshot(), moved: false }; }
  else if (ED.tool !== 'select') { const x = snapV(p.x), y = snapV(p.y); ED.drag = { mode: 'draw', x0: x, y0: y, snap: snapshot(), it: null }; }
  else if (g) { ED.sel = g.dataset.id; const it = byId(ED.sel); ED.drag = { mode: 'move', p0: p, o: { x: it.x, y: it.y }, snap: snapshot(), moved: false }; edRenderSel(); edPanel(); }
  else { if (ED.sel) { ED.sel = null; edRenderSel(); edPanel(); } return; }
  e.stopPropagation();
  try { edSvg.setPointerCapture(e.pointerId); } catch (er) {}
});
edSvg.addEventListener('pointermove', e => {
  const d = ED.drag; if (!d) return;
  const p = edPZ.pt(e);
  if (d.mode === 'move') {
    if (!d.moved && Math.hypot(p.x - d.p0.x, p.y - d.p0.y) < 3 * edPZ.scale()) return;
    if (!d.moved) { d.moved = true; pushUndo(d.snap); }
    const it = byId(ED.sel); it.x = snapV(d.o.x + p.x - d.p0.x); it.y = snapV(d.o.y + p.y - d.p0.y);
  } else if (d.mode === 'resize') {
    if (!d.moved) { d.moved = true; pushUndo(d.snap); }
    const it = byId(ED.sel), o = d.o, dx = p.x - d.p0.x, dy = p.y - d.p0.y; let { x, y, w, h } = o;
    if (d.h.includes('w')) { x = snapV(o.x + dx); w = o.x + o.w - x; } if (d.h.includes('e')) w = snapV(o.x + o.w + dx) - o.x;
    if (d.h.includes('n')) { y = snapV(o.y + dy); h = o.y + o.h - y; } if (d.h.includes('s')) h = snapV(o.y + o.h + dy) - o.y;
    if (w < 6) { if (d.h.includes('w')) x = o.x + o.w - 6; w = 6; } if (h < 6) { if (d.h.includes('n')) y = o.y + o.h - 6; h = 6; }
    Object.assign(it, { x, y, w, h });
  } else if (d.mode === 'draw') {
    const x = snapV(p.x), y = snapV(p.y), w = Math.abs(x - d.x0), h = Math.abs(y - d.y0);
    if (!d.it) { if (w < 4 && h < 4) return; pushUndo(d.snap); d.it = newItem(ED.tool, d.x0, d.y0, 1, 1); store.items.push(d.it); ED.sel = d.it.id; }
    Object.assign(d.it, { x: Math.min(x, d.x0), y: Math.min(y, d.y0), w: Math.max(1, w), h: Math.max(1, h) });
  }
  edRender(); edGeomFields();
});
const edUp = () => {
  const d = ED.drag; if (!d) return; ED.drag = null;
  if (d.mode === 'draw') {
    if (!d.it) { pushUndo(d.snap); const df = DEF[ED.tool]; d.it = newItem(ED.tool, snapV(d.x0 - df.w / 2), snapV(d.y0 - df.h / 2), df.w, df.h); store.items.push(d.it); ED.sel = d.it.id; }
    else if (d.it.w < 6 || d.it.h < 6) { d.it.w = Math.max(d.it.w, 6); d.it.h = Math.max(d.it.h, 6); }
    toast(`「${TOOLNAME[d.it.type]}」を追加しました。右の欄で名前を入力できます`, { icon: '＋', dur: 2200 }); vib(10);
    setTool('select'); edAfter(true);
    if (matchMedia('(max-width:860px)').matches) { $('#ed-pn').classList.remove('min'); $('#ed-main').classList.remove('pmin'); }
    return;
  }
  if (d.moved) edAfter(false);
};
edSvg.addEventListener('pointerup', edUp); edSvg.addEventListener('pointercancel', edUp);
document.addEventListener('keydown', e => {
  if (!ED.open || /INPUT|TEXTAREA|SELECT/.test((e.target.tagName || ''))) return;
  const mod = e.ctrlKey || e.metaKey, it = ED.sel && byId(ED.sel);
  if (mod && e.key.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? edRedo() : edUndo(); }
  else if (mod && e.key.toLowerCase() === 'y') { e.preventDefault(); edRedo(); }
  else if (mod && e.key.toLowerCase() === 'd' && it) { e.preventDefault(); edDup(); }
  else if ((e.key === 'Delete' || e.key === 'Backspace') && it) { e.preventDefault(); edDel(); }
  else if (e.key === 'Escape') { ED.sel = null; setTool('select'); edRenderSel(); edPanel(); }
  else if (it && e.key.startsWith('Arrow')) {
    e.preventDefault(); const st = e.shiftKey ? 10 : 1; pushUndo();
    if (e.key === 'ArrowLeft') it.x -= st; if (e.key === 'ArrowRight') it.x += st; if (e.key === 'ArrowUp') it.y -= st; if (e.key === 'ArrowDown') it.y += st;
    edAfter(false); edGeomFields();
  }
});
function edDup() { const it = byId(ED.sel); if (!it) return; pushUndo(); const c = JSON.parse(JSON.stringify(it)); c.id = uid(); c.x += 20; c.y += 20; store.items.push(c); ED.sel = c.id; edAfter(true); toast('複製しました', { icon: '⧉', dur: 1500 }); }
function edDel() {
  const it = byId(ED.sel); if (!it) return; const s = snapshot(); pushUndo(s);
  store.items = store.items.filter(x => x.id !== it.id); ED.sel = null; edAfter(true);
  toast(`「${L(it.label) || TOOLNAME[it.type]}」を削除しました`, { icon: '🗑', action: { label: '元に戻す', fn: edUndo } });
}
function edOrder(front) { const it = byId(ED.sel); if (!it) return; pushUndo(); store.items = store.items.filter(x => x !== it); front ? store.items.push(it) : store.items.unshift(it); edAfter(false); }
function getPath(o, p) { return p.split('.').reduce((a, k) => a == null ? a : a[k], o); }
function setPath(o, p, v) { const ks = p.split('.'), last = ks.pop(); const tg = ks.reduce((a, k) => (a[k] == null ? (a[k] = {}) : a[k]), o); tg[last] = v; }
function bindFields(root, target, after) {
  $$('[data-f]', root).forEach(inp => {
    const path = inp.dataset.f, num = inp.type === 'number' || inp.type === 'range';
    const cur = getPath(target(), path);
    if (inp.type === 'checkbox') inp.checked = !!cur; else inp.value = cur == null ? '' : cur;
    const begin = () => { ED.inSnap = snapshot(); };
    inp.addEventListener('focus', begin); inp.addEventListener('pointerdown', begin);
    const h = () => {
      if (ED.inSnap) { pushUndo(ED.inSnap); ED.inSnap = null; }
      let v = inp.type === 'checkbox' ? inp.checked : num ? parseFloat(inp.value) : inp.value;
      if (num && !isFinite(v)) return;
      setPath(target(), path, v); after && after(path, v); edRender(); autosave();
    };
    inp.addEventListener(inp.tagName === 'SELECT' || inp.type === 'checkbox' ? 'change' : 'input', h);
  });
}
function edGeomFields() { const it = ED.sel && byId(ED.sel); if (!it) return; ['x', 'y', 'w', 'h'].forEach(k => { const f = $(`#ed-pn-body [data-f="${k}"]`); if (f && document.activeElement !== f) f.value = Math.round(it[k]); }); }
function edPanel() {
  const b = $('#ed-pn-body'), it = ED.sel && byId(ED.sel);
  $('#ed-pn-title').textContent = it ? '選択中のパーツ' : '店舗・マップの設定';
  if (it) {
    b.innerHTML = `<div class="pn-h"><h3>✏️ ${esc(TOOLNAME[it.type])}</h3><span class="tag">ID ${esc(it.id)}</span></div>
      <label class="fld"><span>種類</span><select class="inp" data-f="type">${TYPES.map(x => `<option value="${x}">${TOOLNAME[x]}</option>`).join('')}</select></label>
      <label class="fld"><span>名前（日本語）</span><input class="inp" data-f="label.ja" placeholder="例：冷蔵庫コーナー"></label>
      <div class="g2"><label class="fld"><span>English</span><input class="inp" data-f="label.en"></label><label class="fld"><span>中文</span><input class="inp" data-f="label.zh"></label></div>
      ${it.type === 'shelf' || it.type === 'counter' ? `<label class="fld"><span>エリア</span><select class="inp" data-f="area"><option value="">（なし）</option>${store.areas.map(a => `<option value="${esc(a.id)}">${esc(a.icon)} ${esc(a.name.ja)}</option>`).join('')}</select></label>` : ''}
      <label class="fld"><span>文字の向き</span><select class="inp" data-f="vertical"><option value="a">自動</option><option value="h">横書き</option><option value="v">縦書き</option></select></label>
      ${it.type !== 'wall' && it.type !== 'label' ? `<label class="fld"><span>検索キーワード（ひらがな・別名など、空白区切り）</span><input class="inp" data-f="kw" placeholder="例：れいぞうこ 冷凍庫 fridge"></label>
      <label class="fld"><span>紹介ページのURL（空欄＝準備中）</span><input class="inp" data-f="url" inputmode="url" placeholder="https://…"></label>
      <label class="fld"><span>お知らせ（日本語・任意）</span><textarea class="inp" data-f="note.ja" placeholder="売り場の詳細に表示されます"></textarea></label>` : ''}
      <div class="g4"><label class="fld"><span>X</span><input class="inp" type="number" data-f="x"></label><label class="fld"><span>Y</span><input class="inp" type="number" data-f="y"></label><label class="fld"><span>幅</span><input class="inp" type="number" min="6" data-f="w"></label><label class="fld"><span>高さ</span><input class="inp" type="number" min="6" data-f="h"></label></div>
      <div class="pn-btns"><button class="btn sm line" type="button" id="p-dup">⧉ 複製</button><button class="btn sm line" type="button" id="p-front">⤒ 前面へ</button><button class="btn sm line" type="button" id="p-back">⤓ 背面へ</button><button class="btn sm red" type="button" id="p-del">🗑 削除</button></div>
      <p class="pn-tip">ショートカット：Delete 削除／Ctrl+D 複製／矢印キー 1px移動（Shiftで10px）／Ctrl+Z 元に戻す</p>
      <button class="btn sm ghost wide" type="button" id="p-none" style="margin-top:12px">← 店舗・マップの設定に戻る</button>`;
    bindFields(b, () => byId(ED.sel), (path, v) => { if (path === 'area') ED.lastArea = v; if (path === 'type') edPanel(); if (path === 'w' || path === 'h') { const i = byId(ED.sel); i.w = Math.max(6, i.w); i.h = Math.max(6, i.h); } });
    $('#p-dup', b).onclick = edDup; $('#p-del', b).onclick = edDel; $('#p-front', b).onclick = () => edOrder(true); $('#p-back', b).onclick = () => edOrder(false);
    $('#p-none', b).onclick = () => { ED.sel = null; edRenderSel(); edPanel(); };
    return;
  }
  const c = store.canvas, cnt = store.items.length;
  b.innerHTML = `<div class="pn-h"><h3>🏬 ${esc(fullName())}</h3><span class="tag">${cnt} パーツ</span></div>
    <details class="pn" open><summary>📂 読み込み・書き出し</summary><div>
      <div class="pn-btns"><button class="btn sm pri" type="button" id="p-imp">⤓ ファイルを読み込む</button><button class="btn sm line" type="button" id="p-ejson">⤒ JSONで保存</button><button class="btn sm line" type="button" id="p-esvg">⤒ SVGで保存</button><button class="btn sm line" type="button" id="p-copy">📋 JSONをコピー</button></div>
      <p class="pn-tip">読み込めるファイル：<b>JSON</b>（このツールで保存したマップ）、<b>SVG</b>（Illustrator・Inkscape・draw.io などで描いた図形。四角形などが棚に、中の文字が売り場名になります）、<b>画像</b>（PNG・JPG の図面写真。下絵として表示され、上からなぞって棚を描けます）。</p>
    </div></details>
    <details class="pn" open><summary>🖼 下絵（図面画像）</summary><div>
      <div class="pn-btns"><button class="btn sm line" type="button" id="p-bg">画像を選ぶ</button>${c.bg ? '<button class="btn sm line" type="button" id="p-bgfit">画像の縦横比に合わせる</button><button class="btn sm red" type="button" id="p-bgdel">削除</button>' : ''}</div>
      ${c.bg ? `<label class="fld" style="margin-top:10px"><span>濃さ</span><input class="rng" type="range" min=".05" max="1" step=".05" data-f="canvas.bgOpacity"></label>
      <label class="chk"><input type="checkbox" data-f="canvas.bgShow">編集画面に表示</label><label class="chk"><input type="checkbox" data-f="canvas.bgInView">お客様向けマップにも表示</label>` : '<p class="pn-tip">店舗の図面を撮影した写真やPDFを画像にしたものを読み込むと、なぞって棚を配置できます。</p>'}
    </div></details>
    <details class="pn" open><summary>🏷 表示名（ブランド・店舗名）</summary><div>
      <div class="g2"><label class="fld"><span>ブランド名</span><input class="inp" data-f="store.brand.ja" placeholder="ノジマ"></label><label class="fld"><span>ブランド（英字）</span><input class="inp" data-f="store.brand.en" placeholder="Nojima"></label></div>
      <label class="fld"><span>店舗名（日本語）候補から選ぶか手入力</span><div class="spk"><input class="inp" data-f="store.name.ja" id="p-sname" autocomplete="off" placeholder="例：イオンモール成田店"></div></label>
      <p class="pn-tip" style="margin:-4px 0 10px">画面上の表示：<b id="p-full"></b></p>
      <div class="g2"><label class="fld"><span>English</span><input class="inp" data-f="store.name.en"></label><label class="fld"><span>中文</span><input class="inp" data-f="store.name.zh"></label></div>
      <label class="fld"><span>英字の小見出し（スタート画面）</span><input class="inp" data-f="store.sub" placeholder="例：AEON MALL NARITA"></label>
    </div></details>
    <details class="pn"><summary>📐 キャンバスと外壁</summary><div>
      <div class="g2"><label class="fld"><span>幅</span><input class="inp" type="number" min="200" max="6000" data-f="canvas.w"></label><label class="fld"><span>高さ</span><input class="inp" type="number" min="200" max="6000" data-f="canvas.h"></label></div>
      <label class="fld"><span>外壁の形（x,y を空白区切りで順に。空欄＝長方形）</span><textarea class="inp" id="p-ol" placeholder="15,15 1245,15 1245,480 840,855 15,855"></textarea></label>
      <div class="pn-btns"><button class="btn sm line" type="button" id="p-olrect">長方形にする</button><button class="btn sm line" type="button" id="p-olfit">パーツに合わせて縮める</button></div>
    </div></details>
    <details class="pn"><summary>🎨 エリア（色分け）</summary><div id="p-areas"></div></details>
    <p class="pn-tip">🔒 編集・店舗の管理はスタッフ用パスワードで保護されています（全店共通）。</p>
    <div class="pn-btns" style="margin-top:6px"><button class="btn sm line" type="button" id="p-stores">🏬 店舗の切り替え・新規作成</button><button class="btn sm red" type="button" id="p-clear">全パーツを削除</button></div>
    <p class="pn-tip">変更は自動でこの端末に保存されます。別の端末で使うときは「JSONで保存」したファイルをその端末で読み込んでください。</p>`;
  bindFields(b, () => store, path => { if (path.startsWith('canvas.w') || path.startsWith('canvas.h')) { store.canvas.w = clamp(store.canvas.w, 200, 6000); store.canvas.h = clamp(store.canvas.h, 200, 6000); edPZ.setBounds(store.canvas.w, store.canvas.h); } if (path.startsWith('store.')) $('.pn-h h3', b).textContent = '🏬 ' + fullName(); if (path.startsWith('store.')) applyStatic(); });
  const ol = $('#p-ol', b); ol.value = c.outline ? c.outline.map(q => q.join(',')).join(' ') : '';
  ol.addEventListener('focus', () => { ED.inSnap = snapshot(); });
  ol.addEventListener('change', () => {
    const pts = ol.value.trim().split(/\s+/).map(s => s.split(',').map(Number)).filter(q => q.length === 2 && q.every(isFinite));
    if (ED.inSnap) { pushUndo(ED.inSnap); ED.inSnap = null; }
    store.canvas.outline = pts.length > 2 ? pts : null; edRender(); autosave();
    if (ol.value.trim() && pts.length < 3) toast('3点以上の座標を入力してください', { icon: '⚠️' });
  });
  $('#p-olrect', b).onclick = () => { pushUndo(); store.canvas.outline = null; edAfter(true); };
  $('#p-olfit', b).onclick = () => {
    if (!store.items.length) return; pushUndo();
    const m = 20, x = Math.min(...store.items.map(i => i.x)), y = Math.min(...store.items.map(i => i.y));
    store.items.forEach(i => { i.x -= x - m; i.y -= y - m; });
    store.canvas.w = Math.ceil(Math.max(...store.items.map(i => i.x + i.w)) + m); store.canvas.h = Math.ceil(Math.max(...store.items.map(i => i.y + i.h)) + m); store.canvas.outline = null;
    edAfter(true); edPZ.fit(true);
  };
  edAreas($('#p-areas', b));
  const pf = $('#p-full', b), upFull = () => { pf.textContent = fullName(); };
  upFull(); $$('[data-f^="store."]', b).forEach(i => i.addEventListener('input', upFull));
  storePicker($('#p-sname', b), v => { upFull(); });
  $('#p-imp', b).onclick = () => pickFile('import');
  $('#p-bg', b).onclick = () => pickFile('bg');
  if (c.bg) {
    $('#p-bgdel', b).onclick = () => { const old = store.canvas.bg; store.canvas.bg = null; edAfter(true); toast('下絵を削除しました', { icon: '🖼', action: { label: '元に戻す', fn: () => { store.canvas.bg = old; edAfter(true); } } }); };
    $('#p-bgfit', b).onclick = () => { const im = new Image(); im.onload = () => { pushUndo(); store.canvas.h = Math.round(store.canvas.w * im.naturalHeight / im.naturalWidth); edAfter(true); edPZ.fit(true); }; im.src = store.canvas.bg; };
  }
  $('#p-ejson', b).onclick = () => { download(safeName(fullName()) + '-floormap.json', JSON.stringify(store, null, 1)); toast('JSONファイルを書き出しました', { icon: '⤒' }); };
  $('#p-esvg', b).onclick = () => { download(safeName(fullName()) + '-floormap.svg', exportSVG(), 'image/svg+xml'); toast('SVGファイルを書き出しました', { icon: '⤒' }); };
  $('#p-copy', b).onclick = async () => { try { await navigator.clipboard.writeText(JSON.stringify(store)); toast('JSONをコピーしました', { icon: '📋' }); } catch (er) { toast('コピーできませんでした', { icon: '⚠️' }); } };
  $('#p-stores', b).onclick = () => openStores();
  $('#p-clear', b).onclick = () => { if (!store.items.length) return; pushUndo(); const n = store.items.length; store.items = []; ED.sel = null; edAfter(true); toast(`${n}個のパーツを削除しました`, { icon: '🗑', action: { label: '元に戻す', fn: edUndo } }); };
}
function edAreas(root) {
  root.innerHTML = store.areas.map((a, i) => `<div class="arearow" data-i="${i}"><input type="color" value="${esc(a.color)}" data-k="color" aria-label="色"><input class="inp" value="${esc(a.icon)}" data-k="icon" aria-label="アイコン" style="text-align:center"><input class="inp" value="${esc(a.name.ja)}" data-k="name.ja" placeholder="エリア名"><button class="btn sm red" type="button" data-rm="${i}" style="padding:0;min-height:40px">✕</button>
    <div class="ex"><input class="inp" value="${esc(a.name.en)}" data-k="name.en" placeholder="English"><input class="inp" value="${esc(a.name.zh)}" data-k="name.zh" placeholder="中文"></div>
    <div class="ex" style="grid-template-columns:1fr"><input class="inp" value="${esc(a.desc.ja)}" data-k="desc.ja" placeholder="説明（ホーム画面に表示）"></div></div>`).join('')
    + `<button class="btn sm line" type="button" id="a-add">＋ エリアを追加</button><p class="pn-tip">エリアの色は、マップの棚の色・ホームのカード・グラフに使われます。</p>`;
  $$('.arearow', root).forEach(r => {
    const a = store.areas[+r.dataset.i];
    $$('[data-k]', r).forEach(inp => {
      inp.addEventListener('focus', () => { ED.inSnap = snapshot(); });
      inp.addEventListener('input', () => { if (ED.inSnap) { pushUndo(ED.inSnap); ED.inSnap = null; } setPath(a, inp.dataset.k, inp.value); edRender(); autosave(); });
    });
  });
  $$('[data-rm]', root).forEach(btn => btn.onclick = () => {
    const a = store.areas[+btn.dataset.rm]; pushUndo();
    store.areas = store.areas.filter(x => x !== a); store.items.forEach(i => { if (i.area === a.id) i.area = ''; });
    edAfter(true); toast(`エリア「${a.name.ja}」を削除しました`, { icon: '🗑', action: { label: '元に戻す', fn: edUndo } });
  });
  $('#a-add', root).onclick = () => { pushUndo(); const cols = ['#0ea5e9', '#e11d48', '#65a30d', '#d97706', '#4f46e5', '#0d9488']; store.areas.push({ id: 'a' + uid(), icon: '📦', color: cols[store.areas.length % cols.length], name: { ja: '新しいエリア', en: '', zh: '' }, desc: { ja: '', en: '', zh: '' } }); edAfter(false); edAreas(root); };
}
function exportSVG() {
  const W = store.canvas.w, H = store.canvas.h;
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" class="mapsvg"><style>text{font-family:"Hiragino Sans","Noto Sans JP",sans-serif;font-weight:800;text-anchor:middle;dominant-baseline:central;paint-order:stroke;stroke:#fff;stroke-width:3px;stroke-linejoin:round}text.dk{stroke:none}text.v{writing-mode:vertical-rl;text-orientation:upright}</style>${mapMarkup(store, { p: 'x', export: true })}</svg>`;
}

/* ---------- ファイル読み込み（JSON / SVG / 画像） ---------- */
let fileMode = 'import', fileCb = null;
const fileIn = $('#file-in');
function pickFile(mode, cb) { fileMode = mode; fileCb = cb || null; fileIn.accept = mode === 'bg' ? 'image/png,image/jpeg,image/webp' : '.json,.svg,application/json,image/svg+xml,image/png,image/jpeg,image/webp'; fileIn.value = ''; fileIn.click(); }
fileIn.addEventListener('change', async () => {
  const f = fileIn.files && fileIn.files[0]; if (!f) return;
  try {
    const isImg = /^image\/(png|jpe?g|webp)$/.test(f.type), isSvg = f.type === 'image/svg+xml' || /\.svg$/i.test(f.name);
    if (fileMode === 'bg' || (isImg && !isSvg)) { await importImage(f); return; }
    const text = await f.text();
    let data;
    if (isSvg) data = svgToStore(text, f.name);
    else data = validateStore(JSON.parse(text));
    if (fileCb) { fileCb(data); return; }
    pushUndo();
    const keep = { id: store.id, bg: store.canvas.bg };
    store = data; store.id = keep.id; if (!store.canvas.bg && keep.bg && isSvg) store.canvas.bg = keep.bg;
    ED.sel = null; edAfter(true); edPZ.fit(true);
    toast(`${store.items.length}個のパーツを読み込みました`, { icon: '⤓', action: { label: '元に戻す', fn: () => { edUndo(); edPZ.fit(true); } } });
  } catch (er) { toast('読み込めませんでした：' + (er.message || er), { icon: '⚠️', dur: 5000 }); }
});
function importImage(f) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => {
      const im = new Image();
      im.onload = () => {
        const max = 1800, k = Math.min(1, max / Math.max(im.naturalWidth, im.naturalHeight));
        const cv = document.createElement('canvas'); cv.width = Math.round(im.naturalWidth * k); cv.height = Math.round(im.naturalHeight * k);
        cv.getContext('2d').drawImage(im, 0, 0, cv.width, cv.height);
        const url = cv.toDataURL('image/jpeg', .72);
        pushUndo();
        store.canvas.bg = url; store.canvas.bgShow = true;
        if (!store.items.length) { store.canvas.h = Math.round(store.canvas.w * cv.height / cv.width); store.canvas.outline = null; }
        edAfter(true); edPZ.fit(true);
        toast('下絵を読み込みました。ツールを選んで上からなぞってください', { icon: '🖼', dur: 3500 });
        res();
      };
      im.onerror = () => rej(new Error('画像を開けませんでした'));
      im.src = r.result;
    };
    r.onerror = () => rej(new Error('ファイルを読めませんでした'));
    r.readAsDataURL(f);
  });
}
function svgToStore(text, fname) {
  const doc = new DOMParser().parseFromString(text, 'image/svg+xml');
  const src = doc.documentElement;
  if (doc.querySelector('parsererror') || src.nodeName.toLowerCase() !== 'svg') throw new Error('SVGの形式が正しくありません');
  $$('script,foreignObject,iframe', src).forEach(n => n.remove());
  [src, ...src.querySelectorAll('*')].forEach(n => [...n.attributes].forEach(a => { if (/^on/i.test(a.name) || (/href$/i.test(a.name) && /^\s*javascript:/i.test(a.value))) n.removeAttribute(a.name); }));
  const host = document.createElement('div'); host.style.cssText = 'position:fixed;left:-100000px;top:0;visibility:hidden;pointer-events:none';
  const svg = document.importNode(src, true); host.appendChild(svg); document.body.appendChild(host);
  try {
    const vbA = (svg.getAttribute('viewBox') || '').trim().split(/[\s,]+/).map(Number);
    let W = vbA.length === 4 && vbA[2] > 0 ? vbA[2] : parseFloat(svg.getAttribute('width')) || 1260;
    let H = vbA.length === 4 && vbA[3] > 0 ? vbA[3] : parseFloat(svg.getAttribute('height')) || 870;
    svg.setAttribute('width', W); svg.setAttribute('height', H);
    const root = svg.getScreenCTM(); if (!root) throw new Error('SVGを解析できませんでした');
    const inv = root.inverse();
    const box = el => { const b = el.getBBox(), m = el.getScreenCTM(); if (!m) return null; const ps = [[b.x, b.y], [b.x + b.width, b.y], [b.x, b.y + b.height], [b.x + b.width, b.y + b.height]].map(([x, y]) => new DOMPoint(x, y).matrixTransform(m).matrixTransform(inv)); const xs = ps.map(p => p.x), ys = ps.map(p => p.y); return { x: Math.min(...xs), y: Math.min(...ys), w: Math.max(...xs) - Math.min(...xs), h: Math.max(...ys) - Math.min(...ys) }; };
    const area = W * H;
    let shapes = $$('rect,path,polygon,polyline,circle,ellipse', svg).filter(el => !el.closest('defs,pattern,clipPath,mask,symbol')).map(el => { try { const b = box(el); if (!b) return null; const cs = getComputedStyle(el); return { ...b, fillNone: cs.fill === 'none', el }; } catch (er) { return null; } }).filter(s => s && s.w >= 4 && s.h >= 4);
    let outline = null;
    const big = shapes.filter(s => s.w * s.h > area * .45).sort((a, b) => b.w * b.h - a.w * a.h);
    if (big.length) { const o = big[0]; if (o.el.tagName.toLowerCase() === 'polygon') { outline = o.el.getAttribute('points').trim().split(/[\s,]+/).map(Number).reduce((acc, v, i, arr) => { if (i % 2 === 0) acc.push([v, arr[i + 1]]); return acc; }, []); } }
    shapes = shapes.filter(s => s.w * s.h <= area * .45);
    const texts = $$('text', svg).map(el => { const s = (el.textContent || '').replace(/\s+/g, ' ').trim(); if (!s) return null; try { const b = box(el); return b ? { s, cx: b.x + b.w / 2, cy: b.y + b.h / 2, b } : null; } catch (er) { return null; } }).filter(Boolean);
    const items = shapes.map(s => ({ id: uid(), type: s.h <= 14 && s.w > s.h * 4 && s.fillNone === false ? 'wall' : 'shelf', x: +s.x.toFixed(1), y: +s.y.toFixed(1), w: +s.w.toFixed(1), h: +s.h.toFixed(1), label: { ja: '', en: '', zh: '' }, area: '', vertical: 'a', url: '', kw: '' }));
    texts.forEach(tx => {
      let best = null; items.forEach(it => { if (tx.cx >= it.x && tx.cx <= it.x + it.w && tx.cy >= it.y && tx.cy <= it.y + it.h && (!best || it.w * it.h < best.w * best.h)) best = it; });
      if (best) { best.label.ja = best.label.ja ? best.label.ja + ' ' + tx.s : tx.s; if (best.type === 'wall') best.type = 'shelf'; }
      else items.push({ id: uid(), type: 'label', x: tx.b.x - 4, y: tx.b.y - 2, w: tx.b.w + 8, h: tx.b.h + 4, label: { ja: tx.s, en: '', zh: '' }, area: '', vertical: tx.b.h > tx.b.w * 1.6 ? 'v' : 'h', url: '', kw: '' });
    });
    items.forEach(it => { const s = it.label.ja; if (/レジ|cashier|register/i.test(s)) it.type = 'counter'; if (/入口|entrance|出入口/i.test(s)) it.type = 'entrance'; });
    if (!items.length) throw new Error('四角形などの図形が見つかりませんでした');
    return validateStore({ store: { name: { ja: (fname || '').replace(/\.svg$/i, '') || '読み込んだ店舗' }, sub: '' }, canvas: { w: Math.round(W), h: Math.round(H), outline }, areas: store.areas, items });
  } finally { host.remove(); }
}

/* =====================================================================
   11. 店舗の管理（切り替え・新規作成・複製・削除）
   ===================================================================== */
function storeList() { return reg.list.map(id => ({ id, d: id === store.id ? store : LS.get(storeKey(id), null) })).filter(x => x.d); }
function switchStore(id, quiet) {
  const d = loadStore(id); if (!d) { toast('店舗データを開けませんでした', { icon: '⚠️' }); return false; }
  if (ED.open) { clearTimeout(ED.saveT); saveStore(store); }
  store = d; reg.current = id; saveReg(); filterArea = ''; HL = [];
  buildIndex(); applyStatic();
  if (ED.open) { ED.sel = null; ED.undo = []; ED.redo = []; edAfter(true); edPZ.fit(false); }
  if (booted) { homeSkeleton(); mapSkeleton(true); setTimeout(() => { renderHome(); renderViewer(); renderList(); mapSkeleton(false); }, 600); }
  if (!quiet) toast(`「${fullName()}」に切り替えました`, { icon: '🏬' });
  return true;
}
function addStore(d, open) {
  { const n = d.store && d.store.name && d.store.name.ja, sid = n ? stableStoreId('store', String(n).replace(/^ノジマ\s*/, '')) : ''; d.id = sid && !reg.list.includes(sid) ? sid : newStoreId(); }
  if (!saveStore(d)) return; reg.list.push(d.id); saveReg(); switchStore(d.id, true);
  toast(`「${fullName(d)}」を作成しました`, { icon: '🏬' });
  if (open) { if (ED.open) { edAfter(true); edPZ.fit(false); } else openEditor(); }
}
function openStores() { staffGate(openStoresInner); }
/* ---------- スタート画面の店舗選択 ----------
   ・この端末の店舗から選ぶ／ノジマの店舗を検索して作る／手入力で新しい店舗・個人名で作る
   ・切り替えも作成も、毎回スタッフ用パスワード（staff2026）が必要
   ・店舗ID は名前から決まるので、別の端末で同じ名前を選ぶと同じ公開データ（GitHub の stores/<店舗ID>/）を使う */
function stableStoreId(kind, name) { return kind === 'me' ? 'me-' + sha256('me:' + name).slice(0, 10) : (name === 'イオンモール成田店' ? 'narita' : 's-' + sha256('store:' + name).slice(0, 10)); }
function staffGateAlways(fn) { staffUntil = 0; staffGate(fn); }
function openShopPicker() {
  const cur = store.id;
  const list = storeList();
  const body = Sheet.show(`<div class="sh-h sh-drag"><div><h2>${kineticChars('あなたのノジマの店舗は？')}</h2><p style="font-size:13px;color:var(--sub);margin-top:4px">店舗ごとに、マップ・商品・ヒアリングの内容を分けて保存します。切り替え・作成にはスタッフ用パスワードが必要です。</p></div><button class="sh-x" type="button" data-close>✕</button></div>
    <div class="shp-sec">この端末の店舗</div>
    <div class="shp-list">${list.map(x => { const d = validateStore(x.d); return `<button class="shp-row rp${x.id === cur ? ' on' : ''}" type="button" data-id="${esc(x.id)}"><span>${x.id.startsWith('me-') ? '👤' : '🏬'}</span><span class="s-main">${esc(fullName(d))}<small>${x.id === cur ? 'いま使っている店舗' : 'タップで切り替え（パスワード）'}</small></span><span class="arr">${x.id === cur ? '✓' : '›'}</span></button>`; }).join('')}</div>
    <div class="shp-sec">新しく作る</div>
    <div class="shp-tabs" id="shp-tabs"><button type="button" class="on" data-k="store">🏬 店舗</button><button type="button" data-k="me">👤 個人（名前）</button></div>
    <label class="fld"><span id="shp-lbl">ノジマの店舗名（候補から選ぶか手入力）</span><div class="spk"><input class="inp" id="shp-name" autocomplete="off" placeholder="例：ららぽーと沼津店"></div></label>
    <p class="pn-tip" id="shp-tip" style="margin:-4px 0 12px">今の店舗（${esc(fullName())}）の内容をひな形にして作ります。あとから自由に変えられます。</p>
    <button class="btn pri wide rp" type="button" id="shp-go">作成して切り替える</button>`);
  let kind = 'store';
  const inp = $('#shp-name', body);
  try { storePicker(inp, n => { inp.value = n; }); } catch (e) {}
  $('#shp-tabs', body).onclick = e => {
    const b = e.target.closest('[data-k]'); if (!b) return; kind = b.dataset.k;
    $$('#shp-tabs button', body).forEach(x => x.classList.toggle('on', x === b));
    $('#shp-lbl', body).textContent = kind === 'me' ? 'あなたの名前（個人用にカスタマイズ）' : 'ノジマの店舗名（候補から選ぶか手入力）';
    inp.placeholder = kind === 'me' ? '例：山田' : '例：ららぽーと沼津店';
    const dd = $('.spk-dd', body); if (dd) dd.style.display = kind === 'me' ? 'none' : '';
  };
  $$('.shp-row', body).forEach(b => b.onclick = () => {
    const id = b.dataset.id; if (id === cur) { Sheet.hide(); return; }
    staffGateAlways(() => { if (switchStore(id)) { splashBuild(); toast('各ページもこの店舗の内容になります', { icon: '🏬' }); } });
  });
  $('#shp-go', body).onclick = () => {
    let name = inp.value.trim().replace(/^ノジマ\s*/, '');
    if (!name) { toast(kind === 'me' ? '名前を入力してください' : '店舗名を入力してください', { icon: '✍️' }); inp.focus(); return; }
    const id = stableStoreId(kind, name);
    staffGateAlways(() => {
      if (reg.list.includes(id) && loadStore(id)) { switchStore(id); splashBuild(); return; }
      const d = validateStore(JSON.parse(JSON.stringify(store)));
      d.store.brand = { ja: 'ノジマ', en: 'Nojima', zh: 'Nojima' };
      d.store.name = kind === 'me' ? { ja: name + 'さん用', en: name, zh: name } : { ja: name, en: '', zh: '' };
      d.store.sub = kind === 'me' ? 'NOJIMA × ' + name.toUpperCase() : 'NOJIMA FLOOR GUIDE';
      d.id = id;
      if (!saveStore(d)) return;
      if (!reg.list.includes(id)) reg.list.push(id);
      saveReg(); switchStore(id, true); splashBuild();
      toast(`「${fullName(d)}」を作成して切り替えました`, { icon: kind === 'me' ? '👤' : '🏬', dur: 4000 });
    });
  };
}
function openStoresInner() {
  const body = Sheet.show(`<div class="sh-h sh-drag"><div><h2>${kineticChars('店舗の管理')}</h2><p style="font-size:13px;color:var(--sub);margin-top:4px">タップで切り替え ・ 左にスワイプで削除 ・ 右にスワイプで複製</p></div><button class="sh-x" type="button" data-close>✕</button></div>
    <div id="st-list"></div>
    <div class="sh-acts"><div class="row"><button class="btn pri rp" type="button" id="st-new">＋ 新しい店舗</button><button class="btn line rp" type="button" id="st-imp">⤓ ファイルから追加</button></div></div>`);
  const box = $('#st-list', body);
  storeList().forEach((s, i) => {
    const cur = s.id === store.id, n = (s.d.items || []).length;
    box.appendChild(swipeRow(`<div class="lrow" style="animation:sIn .4s var(--ease) both;animation-delay:${i * 50}ms"><i class="s-dot" style="--c:${cur ? 'var(--brand)' : '#cbd5e1'}"></i><div class="s-main"><div class="s-name">${esc((s.d.store && s.d.store.name ? fullName(validateStore(s.d)) : '') || '名称未設定')}</div><div class="s-sub">${n} パーツ${s.d.canvas && s.d.canvas.bg ? ' ・ 下絵あり' : ''}</div></div>${cur ? '<span class="tag lk">使用中</span>' : ''}</div>`, {
      onTap: () => { if (!cur) { switchStore(s.id); Sheet.hide(); } },
      right: { label: '⧉ 複製', fn: () => { const c = validateStore(JSON.parse(JSON.stringify(s.d))); c.store.name.ja = (c.store.name.ja || '店舗') + ' のコピー'; c.id = newStoreId(); if (saveStore(c)) { reg.list.push(c.id); saveReg(); toast('複製しました', { icon: '⧉' }); openStoresInner(); } } },
      left: { label: '削除 🗑', fn: el => {
        if (reg.list.length <= 1) { toast('最後の1店舗は削除できません', { icon: '⚠️' }); openStoresInner(); return; }
        const idx = reg.list.indexOf(s.id); reg.list.splice(idx, 1); saveReg();
        if (cur) switchStore(reg.list[0], true);
        collapse(el);
        toast(`「${fullName(validateStore(s.d))}」を削除しました`, { icon: '🗑', dur: 6000, action: { label: '元に戻す', fn: () => { reg.list.splice(idx, 0, s.id); saveReg(); if (cur) switchStore(s.id, true); if (Sheet.open) openStoresInner(); } }, onExpire: () => { if (!reg.list.includes(s.id)) LS.del(storeKey(s.id)); } });
      } }
    }));
  });
  $('#st-new', body).onclick = openNewStoreInner;
  $('#st-imp', body).onclick = () => pickFile('import', d => { Sheet.hide(); addStore(d, false); });
}
function storePicker(inp, onPick) {
  const wrap = inp.parentElement, dd = document.createElement('div'); dd.className = 'spk-dd'; wrap.appendChild(dd);
  const used = new Set(storeList().map(x => x.d.store && x.d.store.name && x.d.store.name.ja));
  let act = -1;
  const draw = () => {
    const q = nrm(inp.value.replace(/^ノジマ\s*/, '')), all = NOJIMA_STORES.map(n => ({ n, h: nrm(n) + '|' + nrm(reading(n)) }));
    const hit = (q ? all.filter(x => x.h.includes(q)).sort((a, b) => (nrm(a.n).startsWith(q) ? 0 : 1) - (nrm(b.n).startsWith(q) ? 0 : 1)) : all).slice(0, 40);
    act = -1;
    dd.innerHTML = `<div class="spk-h">${q ? `候補 ${hit.length}${hit.length === 40 ? '+' : ''} 件` : `ノジマの店舗 ${NOJIMA_STORES.length} 件から選べます`}</div>`
      + hit.map((x, i) => `<button type="button" class="spk-i" data-n="${esc(x.n)}" style="--i:${Math.min(i, 12)}"><span>${q ? markText(x.n, [q]) : esc(x.n)}</span>${used.has(x.n) ? '<span class="tag lk">登録済み</span>' : ''}</button>`).join('')
      + (inp.value.trim() && !NOJIMA_STORES.includes(inp.value.trim().replace(/^ノジマ\s*/, '')) ? `<div class="spk-new">✍️ 「${esc(inp.value.trim())}」を新しい店舗名として使う（候補になくてもOK）</div>` : '');
    dd.classList.add('on');
  };
  const pick = n => { inp.value = n; inp.dispatchEvent(new Event('input', { bubbles: true })); dd.classList.remove('on'); onPick && onPick(n); inp.blur(); };
  inp.addEventListener('focus', draw); inp.addEventListener('input', () => { if (document.activeElement === inp) draw(); });
  inp.addEventListener('blur', () => setTimeout(() => dd.classList.remove('on'), 160));
  inp.addEventListener('keydown', e => {
    const its = $$('.spk-i', dd); if (!its.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); act = (act + (e.key === 'ArrowDown' ? 1 : -1) + its.length) % its.length; its.forEach((x, i) => x.classList.toggle('act', i === act)); its[act].scrollIntoView({ block: 'nearest' }); }
    else if (e.key === 'Enter' && act >= 0) { e.preventDefault(); pick(its[act].dataset.n); }
    else if (e.key === 'Escape') dd.classList.remove('on');
  });
  dd.addEventListener('pointerdown', e => e.preventDefault());
  dd.addEventListener('click', e => { const b = e.target.closest('.spk-i'); if (b) pick(b.dataset.n); else if (e.target.closest('.spk-new')) { dd.classList.remove('on'); inp.blur(); onPick && onPick(inp.value); } });
}
function openNewStore() { staffGate(openNewStoreInner); }
function openNewStoreInner() {
  let tpl = 'blank';
  const body = Sheet.show(`<div class="sh-h sh-drag"><h2>${kineticChars('新しい店舗')}</h2><button class="sh-x" type="button" data-close>✕</button></div>
    <div class="g2" style="grid-template-columns:1fr 2fr"><label class="fld"><span>ブランド</span><input class="inp" id="ns-brand" value="ノジマ"></label>
    <label class="fld"><span>店舗名（候補から選ぶか手入力）</span><div class="spk"><input class="inp" id="ns-name" autocomplete="off" placeholder="例：ららぽーと沼津店"></div></label></div>
    <div class="g2"><label class="fld"><span>店舗名（英語・任意）</span><input class="inp" id="ns-en" placeholder="e.g. LaLaport Numazu"></label><label class="fld"><span>スタート画面の英字見出し（任意）</span><input class="inp" id="ns-sub" placeholder="NOJIMA LALAPORT NUMAZU"></label></div>
    <p class="pn-tip" style="margin:-4px 0 12px">候補にない新店舗は、そのまま店舗名を入力してください。表示：<b id="ns-full">ノジマ</b></p>
    <div class="fld"><span>ひな形</span><div class="pills" id="ns-tpl"><button class="pill on" type="button" data-t="blank">空白</button><button class="pill" type="button" data-t="grid">通路と棚のグリッド</button><button class="pill" type="button" data-t="copy">今の店舗をコピー</button><button class="pill" type="button" data-t="file">ファイルから</button></div></div>
    <div id="ns-grid" hidden><div class="g2"><label class="fld"><span>棚の列数</span><input class="inp" id="ns-c" type="number" value="8" min="1" max="40"></label><label class="fld"><span>棚の段数</span><input class="inp" id="ns-r" type="number" value="3" min="1" max="20"></label></div></div>
    <p class="pn-tip" id="ns-tip">白紙のキャンバスから作ります。図面画像を下絵にしてなぞることもできます。</p>
    <button class="btn pri wide rp" type="button" id="ns-go" style="margin-top:12px">作成して編集を始める</button>`);
  const tips = { blank: '白紙のキャンバスから作ります。図面画像を下絵にしてなぞることもできます。', grid: '指定した数の棚と通路を自動で並べます。あとから動かしたり名前を付けたりできます。', copy: '今の店舗のマップを複製して、違う部分だけ直します。', file: 'JSON・SVG・図面画像を選んで店舗を作ります。' };
  $('#ns-tpl', body).onclick = e => { const b = e.target.closest('.pill'); if (!b) return; tpl = b.dataset.t; $$('#ns-tpl .pill', body).forEach(x => x.classList.toggle('on', x === b)); $('#ns-grid', body).hidden = tpl !== 'grid'; $('#ns-tip', body).textContent = tips[tpl]; };
  $('#ns-go', body).onclick = () => {
    const name = $('#ns-name', body).value.trim().replace(/^ノジマ\s*/, '') || '新しい店舗';
    const brand = $('#ns-brand', body).value.trim(), en = $('#ns-en', body).value.trim(), sub = $('#ns-sub', body).value.trim();
    const dupe = storeList().find(x => x.d.store && x.d.store.name && x.d.store.name.ja === name);
    if (dupe && !confirm(`「${name}」はすでに登録されています。もう1つ作成しますか？`)) return;
    const setName = d => { d.store.brand = { ja: brand, en: brand === 'ノジマ' ? 'Nojima' : brand, zh: brand === 'ノジマ' ? 'Nojima' : brand }; d.store.name = { ja: name, en, zh: '' }; d.store.sub = sub; return d; };
    if (tpl === 'file') {
      pickFile('import', d => { setName(d); Sheet.hide(); addStore(d, true); });
      return;
    }
    let d;
    if (tpl === 'copy') { d = validateStore(JSON.parse(JSON.stringify(store))); }
    else {
      d = blankStore(name);
      if (tpl === 'grid') {
        const cols = clamp(+$('#ns-c', body).value || 8, 1, 40), rows = clamp(+$('#ns-r', body).value || 3, 1, 20), m = 60, sw = 30, gap = 60, sh = Math.max(60, Math.round((d.canvas.h - m * 2 - (rows - 1) * gap) / rows));
        d.canvas.w = m * 2 + cols * sw + (cols - 1) * gap; d.canvas.w = Math.max(d.canvas.w, 600);
        for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
          const a = d.areas[(c * d.areas.length / cols) | 0];
          d.items.push({ id: uid(), type: 'shelf', x: m + c * (sw + gap), y: m + r * (sh + gap), w: sw, h: sh, label: { ja: `棚 ${String.fromCharCode(65 + r)}-${c + 1}`, en: `Shelf ${String.fromCharCode(65 + r)}-${c + 1}`, zh: '' }, area: a ? a.id : '', vertical: 'a', url: '', kw: '', note: { ja: '', en: '', zh: '' } });
        }
        d.items.push({ id: uid(), type: 'entrance', x: d.canvas.w / 2 - 45, y: d.canvas.h - 40, w: 90, h: 34, label: { ja: '入口', en: 'Entrance', zh: '入口' }, area: '', vertical: 'h', url: '', kw: 'いりぐち', note: { ja: '', en: '', zh: '' } });
      }
    }
    setName(d); Sheet.hide(); addStore(d, true);
  };
  const nf = () => { const b = $('#ns-brand', body).value.trim(), n = $('#ns-name', body).value.trim().replace(/^ノジマ\s*/, ''); $('#ns-full', body).textContent = (b && n ? b + ' ' + n : (n || b)) || '—'; };
  ['#ns-brand', '#ns-name'].forEach(q => $(q, body).addEventListener('input', nf));
  storePicker($('#ns-name', body), nf);
  setTimeout(() => $('#ns-name', body) && $('#ns-name', body).focus(), 350);
}

/* =====================================================================
   12. 起動
   ===================================================================== */
document.body.classList.toggle('no-motion', !motion);
buildIndex(); applyStatic(); bindPTR(views.home); bindPTR(views.list);
splashShow();
})();
</script>
</body>
</html>