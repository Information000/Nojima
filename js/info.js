<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#0b1440">
<title>エリア</title>
<style>
:root{--ac:#2563eb;--ink:#0f172a;--sub:#64748b;--line:#e2e8f0;--bg:#f4f6fb;--sh:0 10px 30px rgba(15,23,42,.08);--sh2:0 20px 50px rgba(15,23,42,.18);
--ease:cubic-bezier(.16,1,.3,1);--spring:cubic-bezier(.34,1.56,.64,1)}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
html{-webkit-text-size-adjust:100%}
body{font-family:"Hiragino Sans","Noto Sans JP","Noto Sans SC","Yu Gothic UI",system-ui,sans-serif;color:var(--ink);background:var(--bg);min-height:100vh;overflow-x:hidden;-webkit-font-smoothing:antialiased}
button{font:inherit;color:inherit;border:0;background:none;cursor:pointer;touch-action:manipulation}
input,select,textarea{font:inherit;font-size:16px;color:inherit}
a{color:inherit}
[hidden]{display:none!important}
body.no-motion *,body.no-motion *::before,body.no-motion *::after{animation-duration:1ms!important;animation-iteration-count:1!important;transition-duration:1ms!important}
@media(prefers-reduced-motion:reduce){*{animation-duration:1ms!important;animation-iteration-count:1!important;transition-duration:1ms!important}}
.rp{position:relative;overflow:hidden}
.rpl{position:absolute;border-radius:50%;width:24px;height:24px;margin:-12px 0 0 -12px;background:currentColor;opacity:.18;pointer-events:none;animation:rpl .6s ease-out forwards}
@keyframes rpl{to{transform:scale(14);opacity:0}}
@keyframes chUp{to{opacity:1;transform:none}}
@keyframes sIn{to{opacity:1;transform:none}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes flt{50%{transform:translateY(-5px) rotate(-4deg)}}
.sk{position:relative;overflow:hidden;background:#e7ebf3;border-radius:18px}
.sk::after{content:"";position:absolute;inset:0;transform:translateX(-100%);background:linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent);animation:shim 1.25s infinite}
@keyframes shim{to{transform:translateX(100%)}}

/* top bar */
.top{position:sticky;top:0;z-index:40;display:flex;align-items:center;gap:8px;padding:calc(8px + env(safe-area-inset-top)) max(12px,env(safe-area-inset-right)) 8px max(12px,env(safe-area-inset-left));background:rgba(255,255,255,.82);backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);border-bottom:1px solid rgba(226,232,240,.8)}
.tb{flex:none;height:42px;min-width:42px;padding:0 12px;border-radius:12px;background:#fff;border:1px solid var(--line);font-weight:800;font-size:14px;display:inline-flex;align-items:center;justify-content:center;gap:5px;text-decoration:none;transition:transform .15s}
.tb:active{transform:scale(.93)}
.tb.edit{background:linear-gradient(135deg,var(--ac),color-mix(in srgb,var(--ac) 55%,#7c3aed));color:#fff;border:0;box-shadow:0 6px 16px color-mix(in srgb,var(--ac) 35%,transparent)}
.tb.fav b{min-width:20px;height:20px;padding:0 6px;border-radius:10px;background:#f43f5e;color:#fff;font-size:11px;display:grid;place-items:center}
.tb.fav b.bump{animation:bump .5s var(--spring)}
@keyframes bump{40%{transform:scale(1.6)}}
.tb.spin{animation:spin .8s linear infinite}
.store{flex:1;min-width:0;font-size:13px;font-weight:800;color:var(--sub);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.wrap{max-width:1100px;margin:0 auto;padding:14px max(16px,env(safe-area-inset-right)) 120px max(16px,env(safe-area-inset-left))}

/* area nav */
.anav{position:relative;display:flex;gap:4px;padding:5px;border-radius:16px;background:#fff;box-shadow:var(--sh);overflow-x:auto;scrollbar-width:none}
.anav::-webkit-scrollbar{display:none}
.anav a{position:relative;z-index:1;flex:1 0 auto;display:flex;align-items:center;justify-content:center;gap:6px;height:42px;padding:0 14px;border-radius:12px;font-size:13px;font-weight:800;color:var(--sub);text-decoration:none;white-space:nowrap;transition:color .3s}
.anav a.on{color:#fff}
.anav .ind{position:absolute;top:5px;bottom:5px;left:0;border-radius:12px;background:var(--ac);transition:transform .55s var(--spring),width .55s var(--spring)}

/* pull to refresh */
.ptr{height:0;overflow:hidden;display:flex;align-items:flex-end;justify-content:center;transition:height .35s var(--ease)}
.ptr-in{display:flex;align-items:center;gap:8px;padding-bottom:12px;font-size:13px;font-weight:700;color:var(--sub)}
.ptr-ic{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#fff;box-shadow:var(--sh);font-size:17px;color:var(--ac)}
.ptr.ready .ptr-ic{background:var(--ac);color:#fff}
.ptr.busy .ptr-ic{animation:spin .7s linear infinite}

/* hero */
.hero{position:relative;margin-top:14px;padding:22px 20px;border-radius:26px;color:#fff;isolation:isolate;overflow:hidden;background:linear-gradient(135deg,color-mix(in srgb,var(--ac) 80%,#000),var(--ac) 55%,color-mix(in srgb,var(--ac) 60%,#7c3aed));box-shadow:0 18px 40px color-mix(in srgb,var(--ac) 30%,transparent)}
.hero::before{content:"";position:absolute;inset:-40%;z-index:-1;background:radial-gradient(circle at 80% 20%,rgba(255,255,255,.3),transparent 35%),radial-gradient(circle at 10% 90%,rgba(255,255,255,.18),transparent 40%);animation:glow 12s ease-in-out infinite alternate}
@keyframes glow{to{transform:rotate(25deg) scale(1.1)}}
.hero-row{display:flex;gap:16px;align-items:center}
.h-ico{flex:none;width:72px;height:72px;border-radius:22px;display:grid;place-items:center;font-size:38px;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.3);animation:flt 3.6s ease-in-out infinite}
.h-kick{font-size:12px;font-weight:800;letter-spacing:.2em;opacity:.8;text-transform:uppercase}
.h-ttl{font-size:clamp(28px,6vw,46px);font-weight:900;line-height:1.15;letter-spacing:-.01em;margin-top:2px}
.h-ttl span{display:inline-block;opacity:0;transform:translateY(.6em) rotate(8deg);filter:blur(6px);animation:kIn .7s var(--ease) forwards;animation-delay:calc(var(--i)*45ms + .1s)}
@keyframes kIn{to{opacity:1;transform:none;filter:none}}
.h-desc{font-size:14px;font-weight:600;opacity:.88;margin-top:6px}
.h-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:18px}
.hs{padding:12px 10px;border-radius:16px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22);text-align:center}
.hs b{display:block;font-size:clamp(24px,5vw,32px);font-weight:900;line-height:1.1;font-variant-numeric:tabular-nums}
.hs span{font-size:11px;font-weight:800;opacity:.85}
.h-bar{display:flex;height:8px;border-radius:8px;overflow:hidden;background:rgba(255,255,255,.2);margin-top:12px}
.h-bar i{display:block;height:100%;width:0;transition:width 1.2s var(--ease)}
.h-bar i:nth-child(1){background:#fde68a}.h-bar i:nth-child(2){background:#fff}
.h-lg{display:flex;gap:14px;margin-top:6px;font-size:11px;font-weight:700;opacity:.9}
.h-lg i{display:inline-block;width:9px;height:9px;border-radius:3px;margin-right:4px;vertical-align:-1px}

/* search */
.search{position:relative;margin-top:16px;z-index:5}
.s-field{position:relative;height:54px;border-radius:16px;background:#fff;color:var(--ink);box-shadow:var(--sh);display:flex;align-items:center;border:1.5px solid transparent;transition:box-shadow .25s,border-color .25s,transform .25s}
.search.focus .s-field{border-color:var(--ac);box-shadow:0 0 0 4px color-mix(in srgb,var(--ac) 18%,transparent),var(--sh2);transform:translateY(-1px)}
.s-ico{position:absolute;left:16px;font-size:17px;pointer-events:none}
.s-ghost,.s-in{position:absolute;inset:0;padding:0 50px 0 44px;font-size:16px;font-weight:700;line-height:51px;white-space:pre;overflow:hidden}
.s-ghost{color:#94a3b8;pointer-events:none}.s-ghost .gq{color:transparent}
.s-in{border:0;outline:0;background:transparent;width:100%;height:100%}
.s-in::-webkit-search-cancel-button{-webkit-appearance:none;display:none}
.s-in::placeholder{color:#94a3b8;font-weight:500;font-size:14px}
.s-clear{position:absolute;right:8px;width:38px;height:38px;border-radius:50%;background:#f1f5f9;font-size:17px;font-weight:700;color:#475569;transform:scale(0);transition:transform .3s var(--spring)}
.s-clear.on{transform:scale(1)}
.s-drop{position:absolute;left:0;right:0;top:calc(100% + 8px);background:#fff;border-radius:18px;box-shadow:var(--sh2);max-height:min(50vh,380px);overflow-y:auto;opacity:0;transform:translateY(-8px) scale(.98);transform-origin:top;pointer-events:none;transition:opacity .2s,transform .3s var(--ease)}
.s-drop.on{opacity:1;transform:none;pointer-events:auto}
.s-item{display:flex;align-items:center;gap:12px;padding:12px 16px;min-height:52px;cursor:pointer;border-top:1px solid #f1f5f9;opacity:0;transform:translateX(-10px);animation:sIn .3s var(--ease) forwards;animation-delay:calc(var(--i)*30ms)}
.s-item:first-child{border-top:0}
.s-item.act,.s-item:hover{background:color-mix(in srgb,var(--ac) 8%,#fff)}
.s-item .ic{font-size:22px}
.s-main{flex:1;min-width:0}.s-name{font-weight:800;font-size:15px}.s-sub{font-size:12px;color:var(--sub);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.s-empty{padding:20px 16px;text-align:center;color:var(--sub);font-size:14px;line-height:1.7}
mark{background:#fef08a;color:inherit;border-radius:3px;padding:0 1px}

/* filter chips */
.chips{display:flex;gap:8px;margin-top:14px;overflow-x:auto;scrollbar-width:none;padding:2px}
.chips::-webkit-scrollbar{display:none}
.chip{flex:none;height:38px;padding:0 14px;border-radius:999px;background:#fff;border:1.5px solid var(--line);font-size:13px;font-weight:800;transition:all .25s var(--ease)}
.chip.on{background:var(--ink);border-color:var(--ink);color:#fff;transform:translateY(-1px)}
.lead{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:18px 2px 10px;font-size:14px;font-weight:800;color:var(--sub)}
.lead .w{display:inline-block;opacity:0;transform:translateY(8px);animation:chUp .5s var(--ease) forwards;animation-delay:calc(var(--i)*70ms + .3s)}
.swhint{font-size:11px;font-weight:700;color:#94a3b8;animation:nudge 2.4s ease-in-out infinite}
@keyframes nudge{50%{transform:translateX(5px)}}

/* grid of products */
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px}
.cell{position:relative;display:flex;border-radius:20px;overflow:hidden;opacity:0;transform:translateY(18px) scale(.98);animation:chUp .55s var(--ease) forwards;animation-delay:calc(var(--i)*45ms)}
.cell.gone{animation:none;opacity:1;transition:height .35s var(--ease),opacity .3s,transform .35s var(--ease)}
.cell-bg{position:absolute;inset:0;display:flex;justify-content:space-between;align-items:center;padding:0 22px;font-weight:900;font-size:14px;color:#fff;background:#94a3b8}
.cell.to-l .cell-bg{background:#0ea5e9}.cell.to-r .cell-bg{background:#f43f5e}
.cell-bg{opacity:0;transition:opacity .2s}.cell.to-l .cell-bg,.cell.to-r .cell-bg{opacity:1}
.cell-bg span{opacity:0;transition:opacity .2s,transform .25s var(--spring)}
.cell.to-r .bg-r,.cell.to-l .bg-l{opacity:1}
.cell.arm .bg-r,.cell.arm .bg-l{transform:scale(1.15)}
.card{position:relative;flex:1;display:flex;flex-direction:column;gap:10px;width:100%;min-height:150px;padding:16px;text-align:left;background:#fff;border:1.5px solid #edf0f6;border-radius:20px;box-shadow:var(--sh);touch-action:pan-y;user-select:none;-webkit-user-select:none;transition:box-shadow .3s,border-color .3s}
.card.snap{transition:transform .35s var(--ease),box-shadow .3s}
.card:hover{border-color:color-mix(in srgb,var(--ac) 40%,#fff);box-shadow:0 16px 36px rgba(15,23,42,.12)}
.card.guide{background:linear-gradient(170deg,color-mix(in srgb,var(--ac) 9%,#fff),#fff 60%)}
.card.hidden-item{opacity:.55;border-style:dashed}
.c-top{display:flex;align-items:flex-start;gap:12px}
.c-ic{flex:none;width:50px;height:50px;border-radius:16px;display:grid;place-items:center;font-size:27px;background:color-mix(in srgb,var(--ac) 12%,#fff);transition:transform .4s var(--spring)}
.card:hover .c-ic{transform:rotate(-8deg) scale(1.08)}
.c-name{font-size:16px;font-weight:900;line-height:1.4}
.c-desc{font-size:12.5px;color:var(--sub);line-height:1.55;margin-top:3px}
.c-foot{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}
.c-go{font-size:13px;font-weight:900;color:var(--ac)}
.badges{display:flex;gap:5px;flex-wrap:wrap}
.bd{font-size:11px;font-weight:800;padding:3px 9px;border-radius:999px;background:#f1f5f9;color:#475569;white-space:nowrap}
.bd.g{background:var(--ac);color:#fff}
.bd.rec{background:#fef3c7;color:#92400e}.bd.new{background:#dcfce7;color:#166534}.bd.sale{background:#fee2e2;color:#b91c1c}.bd.season{background:#e0f2fe;color:#075985}.bd.off{background:#334155;color:#fff}
.c-fav{position:absolute;top:10px;right:10px;width:40px;height:40px;border-radius:50%;background:#fff;border:1.5px solid #fecdd3;color:#e11d48;font-size:18px;display:grid;place-items:center;box-shadow:0 2px 8px rgba(15,23,42,.1);transition:transform .2s}
.c-fav[aria-pressed=true]{background:#e11d48;border-color:#e11d48;color:#fff;animation:pop .5s var(--spring)}
@keyframes pop{0%{transform:scale(.6)}60%{transform:scale(1.25)}}
.c-note{padding:9px 12px;border-radius:12px;font-size:12px!important;background:#ecfdf5;border:1px solid #a7f3d0;color:#065f46;font-size:13px;font-weight:600;line-height:1.65}
.empty{grid-column:1/-1;padding:36px 20px;text-align:center;border:2px dashed #dbe1ea;border-radius:22px;background:#fff;color:var(--sub);font-size:14px;line-height:1.8}
.empty b{display:block;font-size:40px;animation:flt 3s ease-in-out infinite}
/* edit mode */
.ebar{position:sticky;top:calc(58px + env(safe-area-inset-top));z-index:30;display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:14px;padding:10px 12px;border-radius:16px;background:#0f172a;color:#fff;box-shadow:var(--sh2);animation:chUp .45s var(--ease) both;transform:translateY(-10px);opacity:0}
.ebar b{font-size:14px;font-weight:900;margin-right:auto}
.ebar .eb{height:38px;padding:0 12px;border-radius:11px;background:#1f2937;font-size:13px;font-weight:800;color:#e2e8f0}
.ebar .eb.pri{background:var(--ac);color:#fff}
.ebar .eb.x{background:#fff;color:#0f172a}
.eacts{display:flex;gap:6px;margin-top:4px}
.eacts button{flex:1;height:38px;border-radius:11px;background:#f1f5f9;font-size:13px;font-weight:800}
.eacts button.del{background:#fef2f2;color:#dc2626}
.eacts button:disabled{opacity:.35}
.addc{min-height:150px;border-radius:20px;border:2px dashed color-mix(in srgb,var(--ac) 45%,#fff);background:color-mix(in srgb,var(--ac) 5%,#fff);color:var(--ac);font-weight:900;font-size:15px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;opacity:0;animation:chUp .5s var(--ease) forwards;transform:translateY(14px)}
.addc i{font-style:normal;font-size:30px;width:54px;height:54px;border-radius:50%;display:grid;place-items:center;background:#fff;box-shadow:var(--sh);transition:transform .4s var(--spring)}
.addc:hover i{transform:rotate(90deg)}
.flash{animation:flash 1.4s ease}
@keyframes flash{0%,40%{box-shadow:0 0 0 4px var(--ac),var(--sh2)}}

/* toast */
#toasts{position:fixed;left:50%;bottom:calc(24px + env(safe-area-inset-bottom));transform:translateX(-50%);z-index:900;display:flex;flex-direction:column-reverse;gap:8px;align-items:center;width:min(92vw,440px);pointer-events:none}
.toast{position:relative;overflow:hidden;pointer-events:auto;display:flex;align-items:center;gap:10px;width:100%;padding:12px 14px;border-radius:16px;background:rgba(15,23,42,.95);color:#fff;font-size:14px;font-weight:700;box-shadow:0 16px 36px rgba(2,6,23,.35);opacity:0;transform:translateY(24px) scale(.94);transition:opacity .3s,transform .45s var(--spring);touch-action:pan-y}
.toast.in{opacity:1;transform:none}.toast.out{opacity:0;transform:translateY(12px) scale(.96);transition:opacity .25s,transform .3s}
.t-ic{flex:none;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.14)}
.t-msg{flex:1;min-width:0;line-height:1.45}
.t-act{flex:none;padding:7px 12px;border-radius:10px;background:#fde68a;color:#422006;font-weight:900;font-size:13px}
.t-bar{position:absolute;left:0;bottom:0;height:3px;width:100%;background:linear-gradient(90deg,#60a5fa,#c084fc);transform-origin:left;animation:tbar linear forwards}
@keyframes tbar{to{transform:scaleX(0)}}

/* sheet */
.sroot{position:fixed;inset:0;z-index:700}
.sbd{position:absolute;inset:0;background:rgba(2,6,23,.45);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);opacity:0;transition:opacity .35s}
.sroot.on .sbd{opacity:1}
.sheet{position:absolute;left:0;right:0;bottom:0;margin:0 auto;max-width:620px;max-height:90vh;max-height:90dvh;display:flex;flex-direction:column;background:#fff;border-radius:26px 26px 0 0;box-shadow:0 -20px 60px rgba(2,6,23,.3);transform:translateY(105%);transition:transform .5s var(--ease);padding-bottom:env(safe-area-inset-bottom)}
.sroot.on .sheet{transform:none}
.sheet.drag{transition:none}
.sgrab{flex:none;height:30px;display:grid;place-items:center;cursor:grab;touch-action:none}
.sgrab i{width:44px;height:5px;border-radius:5px;background:#cbd5e1}
.sbody{flex:1;overflow-y:auto;overscroll-behavior:contain;padding:0 20px 22px}
.sbody.swap>*{animation:chUp .45s var(--ease) both}
.sh-h{display:flex;align-items:flex-start;gap:12px;margin-bottom:14px;touch-action:none;cursor:grab}
.sh-h .bic{flex:none;width:60px;height:60px;border-radius:18px;display:grid;place-items:center;font-size:32px;background:color-mix(in srgb,var(--ac) 12%,#fff);animation:pop .6s var(--spring)}
.sh-h h2{font-size:clamp(22px,5vw,28px);font-weight:900;line-height:1.25}
.sh-h h2 span{display:inline-block;opacity:0;transform:translateY(.5em);animation:chUp .5s var(--ease) forwards;animation-delay:calc(var(--i)*28ms)}
.sh-h p{font-size:13px;color:var(--sub);margin-top:4px;line-height:1.6}
.sh-x{margin-left:auto;flex:none;width:38px;height:38px;border-radius:50%;background:#f1f5f9;font-size:16px;font-weight:900}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:50px;padding:0 20px;border-radius:14px;font-weight:800;font-size:15px;background:var(--ink);color:#fff;text-decoration:none;transition:transform .15s}
.btn:active{transform:scale(.96)}
.btn.pri{background:var(--ac);box-shadow:0 10px 24px color-mix(in srgb,var(--ac) 35%,transparent)}
.btn.line{background:#fff;color:var(--ink);border:1.5px solid var(--line)}
.btn.ghost{background:#f1f5f9;color:var(--ink)}
.btn.red{background:#fff;color:#dc2626;border:1.5px solid #fecaca}
.btn.wide{width:100%}
.acts{display:grid;gap:10px;margin:4px 0 16px}
.acts .row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.prep{padding:12px;border-radius:14px;background:#f8fafc;color:var(--sub);font-size:13px;font-weight:700;text-align:center}
.rel h4{font-size:13px;font-weight:900;color:var(--sub);margin:4px 0 10px}
.rchips{display:flex;flex-wrap:wrap;gap:8px}
.rchip{display:inline-flex;align-items:center;gap:6px;padding:9px 13px;border-radius:12px;background:#f8fafc;border:1px solid var(--line);font-size:13px;font-weight:700;opacity:0;animation:chUp .4s var(--ease) forwards;animation-delay:calc(var(--i)*50ms + .2s);transform:translateY(8px)}
.fld{display:block;margin-bottom:12px}
.fld>span{display:block;font-size:12px;font-weight:800;color:#334155;margin-bottom:5px}
.inp{width:100%;min-height:46px;padding:9px 12px;border-radius:12px;border:1.5px solid #dbe1ea;background:#fff;outline:none;transition:border-color .2s,box-shadow .2s}
.inp:focus{border-color:var(--ac);box-shadow:0 0 0 4px color-mix(in srgb,var(--ac) 15%,transparent)}
textarea.inp{min-height:76px;resize:vertical;line-height:1.55}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.g3{display:grid;grid-template-columns:70px 1fr;gap:8px}
.emo{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}
.emo button{width:38px;height:38px;border-radius:10px;background:#f8fafc;font-size:20px;border:1.5px solid transparent}
.emo button.on{border-color:var(--ac);background:#fff}
.pills{display:flex;flex-wrap:wrap;gap:8px}
.pill{padding:8px 13px;min-height:40px;border-radius:12px;border:1.5px solid #dbe1ea;background:#fff;font-size:13px;font-weight:700;transition:all .2s var(--ease)}
.pill.on{border-color:var(--ac);background:color-mix(in srgb,var(--ac) 8%,#fff);color:var(--ac)}
.chk{display:flex;align-items:center;gap:10px;font-size:14px;font-weight:700;margin:6px 0 12px}
.chk input{width:22px;height:22px;accent-color:var(--ac)}
.tip{font-size:12px;color:var(--sub);line-height:1.7}
.mdl{position:relative}
.mdl-dd{position:absolute;left:0;right:0;top:calc(100% + 4px);z-index:20;max-height:200px;overflow-y:auto;background:#fff;border:1px solid var(--line);border-radius:12px;box-shadow:var(--sh2);display:none}
.mdl-dd.on{display:block}
.mdl-dd button{display:block;width:100%;text-align:left;padding:10px 12px;font-size:14px;font-weight:700;border-top:1px solid #f1f5f9}
.mdl-dd button:hover{background:#eff6ff}
.fld:has(.mdl-dd.on){position:relative;z-index:30}
@media(max-width:600px){.grid{grid-template-columns:1fr}.h-ico{width:58px;height:58px;font-size:30px}.store{display:none}.tb .lbl{display:none}.top{gap:6px}}
</style>
</head>
<body>
<header class="top">
  <a class="tb" id="b-home" href="https://information000.github.io/Nojima/">← <span class="lbl" data-t="home"></span></a>
  <span class="store" id="store"></span>
  <span style="flex:1"></span>
  <button class="tb" id="b-ref" type="button" aria-label="refresh">↻</button>
  <a class="tb fav" id="b-fav" href="https://information000.github.io/Nojima/">♡ <b id="fav-n">0</b></a>
  <button class="tb" id="b-lang" type="button">🌐 <span id="lang-l">JA</span></button>
  <button class="tb edit" id="b-edit" type="button">✏️ <span class="lbl" data-t="edit"></span></button>
</header>
<div class="ptr" id="ptr"><div class="ptr-in"><span class="ptr-ic">↓</span><span class="ptr-tx"></span></div></div>
<main class="wrap">
  <nav class="anav" id="anav"><span class="ind" id="anav-ind"></span></nav>
  <section class="hero" id="hero"></section>
  <div id="ebar-slot"></div>
  <div class="search" id="search" role="search">
    <div class="s-field"><span class="s-ico">🔍</span><div class="s-ghost" aria-hidden="true"></div>
      <input class="s-in" id="q" type="search" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search">
      <button class="s-clear" type="button" aria-label="clear">×</button></div>
    <div class="s-drop" role="listbox"></div>
  </div>
  <div class="chips" id="chips"></div>
  <div class="lead"><span id="lead"></span><span class="swhint" id="swhint"></span></div>
  <div class="grid" id="grid"></div>
</main>
<div class="sroot" id="sroot" hidden><div class="sbd"></div><div class="sheet" role="dialog" aria-modal="true"><div class="sgrab"><i></i></div><div class="sbody"></div></div></div>
<div id="toasts" aria-live="polite"></div>
<input type="file" id="file" accept=".json,application/json" hidden>

<script>
/* ===== このページの設定（エリアごとに違うのはここだけ） ===== */
const CONFIG = {
 "dept": "info",
 "color": "#0891b2",
 "desc": {
  "ja": "パソコン・iPad・Apple Watch・プリンター",
  "en": "PCs, iPad, Apple Watch and printers",
  "zh": "电脑·iPad·Apple Watch·打印机"
 },
 "apps": {
  "pc": "https://information000.github.io/Nojima/pc/",
  "printer": "https://information000.github.io/Nojima/printer/"
 },
 "items": [
  {
   "id": "pc",
   "icon": "💻",
   "name": {
    "ja": "パソコン本体（ノートPC / デスクトップ）",
    "en": "Laptop / Desktop PC",
    "zh": "电脑主机（笔记本/台式机）"
   },
   "desc": {
    "ja": "用途と予算からぴったりの1台を",
    "en": "Find the right one for your use and budget",
    "zh": "按用途和预算选择"
   },
   "map": "PC付属品",
   "url": "https://information000.github.io/Nojima/pc/",
   "badge": "",
   "note": {
    "ja": "",
    "en": "",
    "zh": ""
   },
   "hidden": false,
   "kw": "ぱそこん のーとpc"
  },
  {
   "id": "ipad",
   "icon": "📱",
   "name": {
    "ja": "iPad（タブレット本体）",
    "en": "iPad (Tablet)",
    "zh": "iPad（平板电脑）"
   },
   "desc": {
    "ja": "iPad・mini・Air・Pro",
    "en": "iPad, mini, Air and Pro",
    "zh": "iPad·mini·Air·Pro"
   },
   "map": "iPad",
   "url": "",
   "badge": "",
   "note": {
    "ja": "",
    "en": "",
    "zh": ""
   },
   "hidden": false,
   "kw": "あいぱっど たぶれっと"
  },
  {
   "id": "watch",
   "icon": "⌚",
   "name": {
    "ja": "Apple Watch（スマートウォッチ）",
    "en": "Apple Watch (Smartwatch)",
    "zh": "Apple Watch（智能手表）"
   },
   "desc": {
    "ja": "SE・Series・Ultra",
    "en": "SE, Series and Ultra",
    "zh": "SE·Series·Ultra"
   },
   "map": "Apple Watch",
   "url": "",
   "badge": "",
   "note": {
    "ja": "",
    "en": "",
    "zh": ""
   },
   "hidden": false,
   "kw": "あっぷるうぉっち"
  },
  {
   "id": "acc",
   "icon": "🛍️",
   "name": {
    "ja": "ケース・アクセサリー",
    "en": "Cases & Accessories",
    "zh": "保护套·配件"
   },
   "desc": {
    "ja": "iPad・Apple Watch用",
    "en": "For iPad and Apple Watch",
    "zh": "iPad·Apple Watch用"
   },
   "map": "ケース・アクセサリー",
   "url": "",
   "badge": "",
   "note": {
    "ja": "",
    "en": "",
    "zh": ""
   },
   "hidden": false,
   "kw": "けーす"
  },
  {
   "id": "printer",
   "icon": "🖨️",
   "name": {
    "ja": "プリンター・印刷機",
    "en": "Printer",
    "zh": "打印机"
   },
   "desc": {
    "ja": "写真・書類・インク代で選ぶ",
    "en": "Photos, documents or low ink cost",
    "zh": "按照片·文档·墨水成本"
   },
   "map": "プリンター",
   "url": "https://information000.github.io/Nojima/printer/",
   "badge": "",
   "note": {
    "ja": "",
    "en": "",
    "zh": ""
   },
   "hidden": false,
   "kw": "ぷりんたー 複合機"
  },
  {
   "id": "kb",
   "icon": "⌨️",
   "name": {
    "ja": "キーボード・マウス",
    "en": "Keyboard & Mouse",
    "zh": "键盘与鼠标"
   },
   "desc": {
    "ja": "無線・静音・エルゴノミクス",
    "en": "Wireless, quiet and ergonomic",
    "zh": "无线·静音·人体工学"
   },
   "map": "キーボード・マウス",
   "url": "https://information000.github.io/Nojima/pc/",
   "badge": "",
   "note": {
    "ja": "",
    "en": "",
    "zh": ""
   },
   "hidden": false,
   "kw": "きーぼーど まうす"
  },
  {
   "id": "monitor",
   "icon": "🖥️",
   "name": {
    "ja": "モニター・PCディスプレイ",
    "en": "PC Monitor Display",
    "zh": "电脑显示器"
   },
   "desc": {
    "ja": "在宅ワーク・ゲーム向け",
    "en": "For home office and gaming",
    "zh": "居家办公·游戏用"
   },
   "map": "モニター",
   "url": "",
   "badge": "",
   "note": {
    "ja": "",
    "en": "",
    "zh": ""
   },
   "hidden": false,
   "kw": "もにたー でぃすぷれい"
  },
  {
   "id": "pcacc",
   "icon": "🔌",
   "name": {
    "ja": "PC付属品・各種ケーブル",
    "en": "PC Accessories & Cables",
    "zh": "电脑配件及线缆"
   },
   "desc": {
    "ja": "ハブ・ケーブル・ストレージ",
    "en": "Hubs, cables and storage",
    "zh": "扩展坞·线缆·存储"
   },
   "map": "PC付属品",
   "url": "https://information000.github.io/Nojima/pc/",
   "badge": "",
   "note": {
    "ja": "",
    "en": "",
    "zh": ""
   },
   "hidden": false,
   "kw": "けーぶる はぶ"
  }
 ]
};
</script>
<script>
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), sleep = ms => new Promise(r => setTimeout(r, ms)), uid = () => Math.random().toString(36).slice(2, 9);
const LS = { get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }, del(k) { try { localStorage.removeItem(k); } catch (e) {} } };
const vib = n => { try { navigator.vibrate && navigator.vibrate(n || 8); } catch (e) {} };
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const motion = !RM && LS.get('fg-motion', true) !== false;
document.body.classList.toggle('no-motion', !motion);
const HOME = 'https://information000.github.io/Nojima/';
const AREA_PAGES = { home: 'https://information000.github.io/Nojima/kaden/', av: 'https://information000.github.io/Nojima/season-av/', info: 'https://information000.github.io/Nojima/info/', comm: 'https://information000.github.io/Nojima/tsushin/' };
const AREA_DEF = {
  home: { icon: '🏠', color: '#ea580c', name: { ja: '家電エリア', en: 'Home Appliances', zh: '家电区域' } },
  av: { icon: '📺', color: '#059669', name: { ja: '季節・AVエリア', en: 'Seasonal & AV', zh: '季节与影音区域' } },
  info: { icon: '💻', color: '#0891b2', name: { ja: '情報エリア', en: 'Information', zh: '信息数码区域' } },
  comm: { icon: '📱', color: '#7c3aed', name: { ja: '通信エリア', en: 'Telecom & Audio', zh: '通信网络区域' } }
};

/* ---------- 言語 ---------- */
const LANGS = ['ja', 'en', 'zh'];
let qs; try { qs = new URLSearchParams(location.search); } catch (e) { qs = { get: () => null }; }
let lang = qs.get('lang');
if (!LANGS.includes(lang)) lang = LS.get('fg-lang', null);
if (!LANGS.includes(lang)) { try { lang = localStorage.getItem('nj-lang'); } catch (e) {} }
if (!LANGS.includes(lang)) lang = 'ja';
const T = {
  home: ['ホーム', 'Home', '首页'], edit: ['商品を編集', 'Edit items', '编辑商品'],
  ph: ['このエリアの商品を検索', 'Search this area', '搜索本区域商品'],
  lead: [['気になる', '商品を', 'タップ'], ['Tap', 'a product', 'to begin'], ['点击', '想了解的', '商品']],
  swipe: ['← マップ ・ ♡ →', '← map · ♡ →', '← 地图 · ♡ →'],
  all: ['すべて', 'All', '全部'], guideOnly: ['相談ガイドあり', 'With guide', '有导购'], rec: ['おすすめ', 'Recommended', '推荐'], newI: ['新着', 'New', '新品'], sale: ['セール', 'Sale', '促销'], season: ['季節', 'Seasonal', '季节'],
  items: ['商品', 'Items', '商品'], guides: ['相談ガイド', 'Guides', '导购'], maps: ['マップ連携', 'On map', '地图联动'],
  gLeg: ['相談ガイドあり', 'Guide', '有导购'], oLeg: ['売り場案内のみ', 'Location only', '仅位置'],
  start: ['相談をはじめる →', 'Start consultation →', '开始咨询 →'], info: ['場所・情報を見る →', 'Location & info →', '位置与信息 →'], guide: ['店内ガイドあり', 'In-store guide', '店内导购'],
  map: ['🗺 マップで場所を見る', '🗺 See it on the map', '🗺 在地图上查看'], open: ['相談・紹介ページを開く ↗', 'Open guide page ↗', '打开导购页面 ↗'], prep: ['紹介ページは準備中です', 'The guide page is coming soon', '介绍页面准备中'],
  fav: ['♡ マイリスト', '♡ My List', '♡ 收藏'], unfav: ['♥ 追加済み', '♥ Saved', '♥ 已收藏'], favAdd: ['マイリストに追加しました', 'Saved to My List', '已加入收藏'], favDel: ['マイリストから外しました', 'Removed from My List', '已取消收藏'], favNo: ['マップの売り場が未設定のため保存できません', 'No map section set for this item', '该商品未设置卖场'],
  undo: ['元に戻す', 'Undo', '撤销'], related: ['同じエリアのほかの商品', 'More in this area', '本区域其他商品'], close: ['閉じる', 'Close', '关闭'],
  none: ['見つかりませんでした', 'No results', '未找到'], noneSub: ['別のことばで試すか、店員にご相談ください', 'Try another word, or ask our staff', '请换个关键词或咨询店员'],
  empty: ['表示できる商品がありません', 'No items to show', '没有可显示的商品'],
  pull: ['引っぱって更新', 'Pull to refresh', '下拉刷新'], release: ['離すと更新', 'Release to refresh', '松开刷新'], refreshing: ['更新しています…', 'Refreshing…', '正在刷新…'], refreshed: ['最新の情報に更新しました', 'Up to date', '已更新'],
  lang: ['言語', 'Language', '语言']
};
const li = () => LANGS.indexOf(lang), t = k => { const v = T[k]; return v ? v[li()] : k; };
const L = o => !o ? '' : typeof o === 'string' ? o : (o[lang] || o.ja || o.en || o.zh || '');

/* ---------- 店舗・エリア情報（ホームと共有） ---------- */
const reg = LS.get('fg-registry-v1', null);
const storeId = (reg && reg.current) || 'narita';
const sdata = LS.get('fg-store-' + storeId, null);
const DEPT = CONFIG.dept;
const areaInfo = () => { const a = sdata && Array.isArray(sdata.areas) && sdata.areas.find(x => x.id === DEPT); return a || AREA_DEF[DEPT]; };
const AR = areaInfo();
document.documentElement.style.setProperty('--ac', /^#[0-9a-f]{6}$/i.test(AR.color) ? AR.color : CONFIG.color);
function storeName() {
  if (!sdata || !sdata.store) return 'ノジマ イオンモール成田店';
  const b = L(sdata.store.brand !== undefined ? sdata.store.brand : { ja: 'ノジマ' }), n = L(sdata.store.name);
  return b && n && !n.startsWith(b) ? b + ' ' + n : (n || b);
}
const mapLabels = () => sdata && Array.isArray(sdata.items) ? [...new Set(sdata.items.filter(i => i.type === 'shelf' || i.type === 'counter').map(i => i.label && i.label.ja).filter(Boolean))] : [];
const ITEMS_KEY = 'fg-area-' + storeId + '-' + DEPT, FAV_KEY = 'fg-fav-' + storeId;
const BADGES = ['', 'rec', 'new', 'sale', 'season'];
const BLBL = { rec: 'rec', new: 'newI', sale: 'sale', season: 'season' };
// 端末に保存済みの古い遷移先（product-○○.html）も公開URLに直す
function fixUrl(u) { u = String(u || ''); const m = u.match(/^(?:\.\/)?product-([a-z]+)\.html/i); return m ? 'https://information000.github.io/Nojima/' + m[1].toLowerCase() + '/' : u; }
function normItem(i) {
  const lab = v => typeof v === 'string' ? { ja: v, en: '', zh: '' } : { ja: (v && v.ja) || '', en: (v && v.en) || '', zh: (v && v.zh) || '' };
  return { id: String(i.id || uid()), icon: String(i.icon || '📦'), name: lab(i.name), desc: lab(i.desc || ''), map: String(i.map || ''), url: fixUrl(i.url), badge: BADGES.includes(i.badge) ? i.badge : '', note: lab(i.note || ''), hidden: !!i.hidden, kw: String(i.kw || '') };
}
let items = (LS.get(ITEMS_KEY, null) || CONFIG.items).map(normItem);
const saveItems = () => { if (!LS.set(ITEMS_KEY, items)) toast('保存できませんでした（ブラウザの容量）', { icon: '⚠️' }); };
let edit = false, filter = '';
const staffOK = () => { try { return +sessionStorage.getItem('fg-staff-until') > Date.now(); } catch (e) { return false; } };

/* ---------- SHA-256（パスワード確認用） ---------- */
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

/* ---------- 共通UI：トースト／シート／リップル ---------- */
function toast(msg, o = {}) {
  const box = $('#toasts'), dur = o.dur || (o.action ? 5000 : 2600), el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="t-ic">${o.icon || '✓'}</span><span class="t-msg">${esc(msg)}</span>${o.action ? `<button class="t-act" type="button">${esc(o.action.label)}</button>` : ''}<i class="t-bar" style="animation-duration:${dur}ms"></i>`;
  box.appendChild(el); while (box.children.length > 3) box.firstElementChild.remove();
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('in')));
  let done = false; const close = () => { if (done) return; done = true; clearTimeout(tm); el.classList.remove('in'); el.classList.add('out'); setTimeout(() => el.remove(), 350); };
  const tm = setTimeout(close, dur);
  if (o.action) $('.t-act', el).onclick = () => { o.action.fn(); close(); };
  let x0 = null;
  el.addEventListener('pointerdown', e => { if (!e.target.closest('button')) { x0 = e.clientX; el.style.transition = 'none'; } });
  el.addEventListener('pointermove', e => { if (x0 != null) { const dx = e.clientX - x0; el.style.transform = `translateX(${dx}px)`; el.style.opacity = 1 - Math.min(1, Math.abs(dx) / 220); } });
  el.addEventListener('pointerup', e => { if (x0 == null) return; const dx = e.clientX - x0; x0 = null; el.style.transition = ''; if (Math.abs(dx) > 90) { el.style.transform = `translateX(${dx > 0 ? 120 : -120}%)`; close(); } else { el.style.transform = ''; el.style.opacity = ''; } });
}
const Sheet = (() => {
  const root = $('#sroot'), sh = $('.sheet', root), body = $('.sbody', root);
  let open = false, drag = null, ht = 0;
  function show(html) {
    clearTimeout(ht); const was = open; body.innerHTML = html; body.scrollTop = 0;
    if (!was) { root.hidden = false; sh.style.transform = ''; requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('on'))); open = true; }
    else { body.classList.remove('swap'); void body.offsetWidth; body.classList.add('swap'); }
    $$('[data-close]', body).forEach(b => b.onclick = hide); return body;
  }
  function hide() { if (!open) return; open = false; root.classList.remove('on'); sh.style.transform = ''; ht = setTimeout(() => { if (!open) { root.hidden = true; body.innerHTML = ''; } }, 450); }
  $('.sbd', root).onclick = hide;
  sh.addEventListener('pointerdown', e => { if (!e.target.closest('.sgrab,.sh-h') || e.target.closest('button:not(.sgrab),input,a,select,textarea')) return; drag = { y: e.clientY, t: performance.now(), dy: 0 }; sh.classList.add('drag'); try { sh.setPointerCapture(e.pointerId); } catch (er) {} });
  sh.addEventListener('pointermove', e => { if (!drag) return; drag.dy = e.clientY - drag.y; sh.style.transform = `translateY(${drag.dy < 0 ? drag.dy * .2 : drag.dy}px)`; });
  const end = () => { if (!drag) return; const v = drag.dy / Math.max(1, performance.now() - drag.t); sh.classList.remove('drag'); if (drag.dy > 110 || v > .7) hide(); else sh.style.transform = ''; drag = null; };
  sh.addEventListener('pointerup', end); sh.addEventListener('pointercancel', end);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && open) hide(); });
  return { show, hide, get open() { return open; } };
})();
document.addEventListener('pointerdown', e => { const b = e.target.closest && e.target.closest('.rp'); if (!b || !motion) return; const r = b.getBoundingClientRect(), s = document.createElement('span'); s.className = 'rpl'; s.style.left = e.clientX - r.left + 'px'; s.style.top = e.clientY - r.top + 'px'; b.appendChild(s); setTimeout(() => s.remove(), 650); }, { passive: true });
const kChars = s => [...String(s)].map((c, i) => `<span style="--i:${i}">${c === ' ' ? '&nbsp;' : esc(c)}</span>`).join('');
function countUp(el, to, dur = 1100) { if (!motion) { el.textContent = to; return; } const t0 = performance.now(); const f = n => { const k = Math.min(1, (n - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); }

/* ---------- 検索の正規化 ---------- */
function nrm(s) { s = String(s || '').normalize('NFKC').toLowerCase(); s = s.replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 96)); return s.replace(/[\s・･\/\-_、,.（）()]/g, ''); }
function markText(raw, tk) { const ch = [...raw], nc = ch.map(c => { const n = nrm(c); return n.length === 1 ? n : '\u0000'; }), j = nc.join(''), mk = ch.map(() => false); if (tk) { let i = j.indexOf(tk); while (i >= 0) { for (let k = 0; k < tk.length; k++) mk[i + k] = true; i = j.indexOf(tk, i + tk.length); } } let s = '', on = false; ch.forEach((c, i) => { if (mk[i] && !on) { s += '<mark>'; on = true; } if (!mk[i] && on) { s += '</mark>'; on = false; } s += esc(c); }); return on ? s + '</mark>' : s; }
const hay = it => nrm([it.name.ja, it.name.en, it.name.zh, it.desc.ja, it.desc.en, it.map, it.kw].join(' '));

/* ---------- 画面の組み立て ---------- */
const visible = () => items.filter(i => edit || !i.hidden);
function applyStatic() {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.body.dataset.lang = lang;
  $$('[data-t]').forEach(e => e.textContent = t(e.dataset.t));
  $('#lang-l').textContent = lang.toUpperCase();
  $('#store').textContent = storeName();
  document.title = L(AR.name) + ' | ' + storeName();
  $('#q').placeholder = t('ph');
  $('#b-home').href = HOME + '?skip=1&lang=' + lang;
  $('#b-fav').href = HOME + '?skip=1&lang=' + lang + '&tab=list';
  $('.ptr-tx').textContent = t('pull');
  favCount(false);
}
function renderNav() {
  const nav = $('#anav'); $$('a', nav).forEach(a => a.remove());
  Object.keys(AREA_PAGES).forEach(k => {
    const a = (sdata && sdata.areas && sdata.areas.find(x => x.id === k)) || AREA_DEF[k];
    const el = document.createElement('a'); el.href = AREA_PAGES[k] + '?lang=' + lang; el.className = k === DEPT ? 'on' : '';
    el.innerHTML = `${esc(a.icon)} ${esc(L(a.name))}`; nav.appendChild(el);
  });
  requestAnimationFrame(() => { const on = $('a.on', nav), ind = $('#anav-ind'); if (on) { ind.style.width = on.offsetWidth + 'px'; ind.style.transform = `translateX(${on.offsetLeft - 5}px)`; ind.style.left = '5px'; on.scrollIntoView({ inline: 'center', block: 'nearest' }); } });
}
function renderHero() {
  const v = items.filter(i => !i.hidden), g = v.filter(i => i.url).length, m = v.filter(i => i.map).length;
  $('#hero').innerHTML = `<div class="hero-row"><div class="h-ico">${esc(AR.icon)}</div><div style="min-width:0"><div class="h-kick">${esc(L(AREA_DEF[DEPT].name) === L(AR.name) ? (AREA_DEF[DEPT].name.en || '') : '')}</div><h1 class="h-ttl">${kChars(L(AR.name))}</h1><p class="h-desc">${esc(L(CONFIG.desc))}</p></div></div>
    <div class="h-stats"><div class="hs"><b class="cnt" data-n="${v.length}">0</b><span>${esc(t('items'))}</span></div><div class="hs"><b class="cnt" data-n="${g}">0</b><span>${esc(t('guides'))}</span></div><div class="hs"><b class="cnt" data-n="${m}">0</b><span>${esc(t('maps'))}</span></div></div>
    <div class="h-bar"><i data-w="${v.length ? g / v.length * 100 : 0}"></i><i data-w="${v.length ? (v.length - g) / v.length * 100 : 0}"></i></div>
    <div class="h-lg"><span><i style="background:#fde68a"></i>${esc(t('gLeg'))}</span><span><i style="background:#fff"></i>${esc(t('oLeg'))}</span></div>`;
  $$('.cnt', $('#hero')).forEach(e => countUp(e, +e.dataset.n));
  requestAnimationFrame(() => setTimeout(() => $$('.h-bar i', $('#hero')).forEach(b => b.style.width = b.dataset.w + '%'), 300));
}
function renderChips() {
  const opts = [['', t('all')], ['guide', '💬 ' + t('guideOnly')], ...['rec', 'new', 'sale', 'season'].filter(b => items.some(i => i.badge === b)).map(b => [b, t(BLBL[b])])];
  $('#chips').innerHTML = opts.map(([k, l]) => `<button class="chip${filter === k ? ' on' : ''}" type="button" data-f="${k}">${esc(l)}</button>`).join('');
}
$('#chips').addEventListener('click', e => { const c = e.target.closest('.chip'); if (!c) return; filter = c.dataset.f; renderChips(); renderGrid(); vib(6); });
function lead() { const ws = t('lead'); $('#lead').innerHTML = ws.map((w, i) => `<span class="w" style="--i:${i}">${esc(w)}</span>`).join(lang === 'en' ? ' ' : ''); $('#swhint').textContent = edit ? '' : t('swipe'); }
const favs = () => LS.get(FAV_KEY, []);
function favCount(bump) { const b = $('#fav-n'); b.textContent = favs().length; if (bump) { b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); } }
function cardHTML(it, i) {
  const f = it.map && favs().includes(it.map), bd = [];
  if (it.url) bd.push(`<span class="bd g">${esc(t('guide'))}</span>`);
  if (it.badge) bd.push(`<span class="bd ${it.badge}">${esc(t(BLBL[it.badge]))}</span>`);
  if (edit && it.hidden) bd.push('<span class="bd off">非公開</span>');
  return `<div class="cell" data-id="${esc(it.id)}" style="--i:${Math.min(i, 14)}"><div class="cell-bg"><span class="bg-l">🗺 Map</span><span class="bg-r">♥ ${esc(t('fav').replace('♡ ', ''))}</span></div>
    <div class="card rp${it.url ? ' guide' : ''}${it.hidden ? ' hidden-item' : ''}" role="button" tabindex="0">
      <div class="c-top"><div class="c-ic">${esc(it.icon)}</div><div style="min-width:0;padding-right:40px"><div class="c-name">${esc(L(it.name))}</div>${L(it.desc) ? `<div class="c-desc">${esc(L(it.desc))}</div>` : ''}</div></div>
      ${!edit && it.map ? `<button class="c-fav" type="button" aria-pressed="${f}" aria-label="fav">${f ? '♥' : '♡'}</button>` : ''}
      ${!edit && L(it.note) ? `<div class="c-note">☀️ ${esc(L(it.note))}</div>` : ''}
      <div class="c-foot"><span class="c-go">${esc(it.url ? t('start') : t('info'))}</span><span class="badges">${bd.join('')}</span></div>
      ${edit ? `<div class="eacts"><button type="button" data-a="up" ${i === 0 ? 'disabled' : ''}>↑</button><button type="button" data-a="down" ${i === visible().length - 1 ? 'disabled' : ''}>↓</button><button type="button" data-a="edit">✏️ 編集</button><button type="button" data-a="dup">⧉</button><button type="button" data-a="del" class="del">🗑</button></div>` : ''}
    </div></div>`;
}
function list() { const v = visible(); return edit ? v : v.filter(i => !filter || (filter === 'guide' ? !!i.url : i.badge === filter)); }
function renderGrid() {
  const g = $('#grid'), v = list();
  g.innerHTML = (v.length ? v.map(cardHTML).join('') : `<div class="empty"><b>🔎</b>${esc(t('empty'))}</div>`) + (edit ? '<button class="addc rp" type="button" id="add"><i>＋</i>商品を追加</button>' : '');
  $$('.cell', g).forEach(bindCell);
  const add = $('#add', g); if (add) add.onclick = () => openForm(null);
}
function skeleton() {
  $('#hero').innerHTML = '<div class="sk" style="height:180px;background:rgba(255,255,255,.18)"></div>';
  $('#grid').innerHTML = Array.from({ length: 6 }, () => '<div class="sk" style="height:150px"></div>').join('');
}
function renderAll() { applyStatic(); renderNav(); renderHero(); renderChips(); lead(); renderGrid(); renderEbar(); }

/* ---------- カード操作（タップ・スワイプ） ---------- */
function bindCell(cell) {
  const id = cell.dataset.id, card = $('.card', cell); let s = null;
  card.addEventListener('click', e => {
    if (card.dataset.drag) { delete card.dataset.drag; return; }
    const it = items.find(x => x.id === id); if (!it) return;
    const fb = e.target.closest('.c-fav'); if (fb) { e.stopPropagation(); toggleFav(it, fb); return; }
    const a = e.target.closest('[data-a]'); if (a) { e.stopPropagation(); editAct(a.dataset.a, it, cell); return; }
    if (edit) { openForm(it); return; }
    openItem(it);
  });
  card.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target === card) card.click(); });
  if (edit) return;
  card.addEventListener('pointerdown', e => { if (e.target.closest('button')) return; s = { x: e.clientX, y: e.clientY, dx: 0, lock: null }; card.classList.remove('snap'); });
  card.addEventListener('pointermove', e => {
    if (!s) return; const dx = e.clientX - s.x, dy = e.clientY - s.y;
    if (!s.lock) { if (Math.hypot(dx, dy) < 8) return; s.lock = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'; if (s.lock === 'x') try { card.setPointerCapture(e.pointerId); } catch (er) {} }
    if (s.lock !== 'x') return;
    let d = dx; if (Math.abs(d) > 130) d = Math.sign(d) * (130 + (Math.abs(d) - 130) * .3);
    s.dx = d; card.style.transform = `translateX(${d}px)`; card.dataset.drag = '1';
    cell.classList.toggle('to-l', d < 0); cell.classList.toggle('to-r', d > 0);
    const arm = Math.abs(d) > 90; if (arm && !cell.classList.contains('arm')) vib(10); cell.classList.toggle('arm', arm);
  });
  const end = () => {
    if (!s) return; const d = s.dx, lock = s.lock; s = null; card.classList.add('snap'); card.style.transform = '';
    setTimeout(() => cell.classList.remove('to-l', 'to-r', 'arm'), 300);
    if (lock !== 'x') { delete card.dataset.drag; return; }
    const it = items.find(x => x.id === id);
    if (d > 90 && it) toggleFav(it, $('.c-fav', cell));
    else if (d < -90 && it) goMap(it);
    setTimeout(() => delete card.dataset.drag, 50);
  };
  card.addEventListener('pointerup', end); card.addEventListener('pointercancel', end);
}
function toggleFav(it, btn) {
  if (!it.map) { toast(t('favNo'), { icon: 'ℹ️' }); return; }
  const before = favs(), on = before.includes(it.map);
  LS.set(FAV_KEY, on ? before.filter(x => x !== it.map) : [it.map, ...before]); favCount(true); vib(10);
  if (btn) { btn.setAttribute('aria-pressed', !on); btn.textContent = on ? '♡' : '♥'; if (!on && motion) hearts(btn); }
  const sb = $('#sh-fav'); if (sb) sb.textContent = on ? t('fav') : t('unfav');
  toast(on ? t('favDel') : t('favAdd'), { icon: on ? '♡' : '♥', action: { label: t('undo'), fn: () => { LS.set(FAV_KEY, before); favCount(true); renderGrid(); } } });
}
function hearts(btn) { const r = btn.getBoundingClientRect(); for (let i = 0; i < 7; i++) { const s = document.createElement('span'), a = (-90 + (i - 3) * 24) * Math.PI / 180, d = 46 + Math.random() * 30; s.textContent = '♥'; s.style.cssText = `position:fixed;left:${r.left + r.width / 2}px;top:${r.top + r.height / 2}px;color:#f43f5e;font-size:17px;z-index:999;pointer-events:none;transition:transform .8s cubic-bezier(.16,1,.3,1),opacity .8s`; document.body.appendChild(s); requestAnimationFrame(() => { s.style.transform = `translate(${Math.cos(a) * d}px,${Math.sin(a) * d}px) scale(1.3)`; s.style.opacity = '0'; }); setTimeout(() => s.remove(), 850); } }
const mapUrl = it => HOME + '?skip=1&lang=' + lang + (it && it.map ? '&find=' + encodeURIComponent(it.map) : '');
function goMap(it) { location.href = mapUrl(it); }
function isExt(u) { return /^https?:/i.test(u) && u.indexOf(location.origin + '/') !== 0 && u.indexOf('https://information000.github.io/Nojima/') !== 0; }
function linkUrl(u) { if (!u) return ''; if (isExt(u) || u.startsWith('#')) return u; return u + (u.includes('?') ? '&' : '?') + 'lang=' + lang; }

/* ---------- 商品の詳細（ボトムシート） ---------- */
function openItem(it) {
  const f = it.map && favs().includes(it.map), rel = items.filter(x => x !== it && !x.hidden).slice(0, 8);
  const body = Sheet.show(`<div class="sh-h"><div class="bic">${esc(it.icon)}</div><div style="min-width:0"><h2>${kChars(L(it.name))}</h2>${L(it.desc) ? `<p>${esc(L(it.desc))}</p>` : ''}</div><button class="sh-x" type="button" data-close aria-label="${esc(t('close'))}">✕</button></div>
    ${L(it.note) ? `<div class="c-note" style="margin-bottom:12px">☀️ ${esc(L(it.note))}</div>` : ''}
    <div class="acts">
      ${it.url ? `<a class="btn pri wide rp" href="${esc(linkUrl(it.url))}"${isExt(it.url) ? ' target="_blank" rel="noopener"' : ''}>${esc(t('open'))}</a>` : `<div class="prep">⏳ ${esc(t('prep'))}</div>`}
      <div class="row"><a class="btn line rp" href="${esc(mapUrl(it))}">${esc(t('map'))}</a><button class="btn ghost rp" type="button" id="sh-fav">${esc(f ? t('unfav') : t('fav'))}</button></div>
    </div>
    ${rel.length ? `<div class="rel"><h4>${esc(t('related'))}</h4><div class="rchips">${rel.map((x, i) => `<button class="rchip rp" type="button" data-id="${esc(x.id)}" style="--i:${i}">${esc(x.icon)} ${esc(L(x.name))}</button>`).join('')}</div></div>` : ''}`);
  $('#sh-fav', body).onclick = e => toggleFav(it, $(`.cell[data-id="${CSS.escape(it.id)}"] .c-fav`));
  $$('.rchip', body).forEach(b => b.onclick = () => { const x = items.find(y => y.id === b.dataset.id); x && openItem(x); });
}

/* ---------- オートコンプリート ---------- */
(() => {
  const box = $('#search'), inp = $('#q'), ghost = $('.s-ghost', box), drop = $('.s-drop', box), clr = $('.s-clear', box);
  let act = -1, res = [], gf = '';
  const close = () => { drop.classList.remove('on'); act = -1; };
  function update() {
    const q = inp.value, tk = nrm(q); clr.classList.toggle('on', !!q); ghost.innerHTML = ''; gf = ''; act = -1;
    if (!tk) { close(); return; }
    res = visible().map(it => { const h = hay(it), dn = nrm(L(it.name)); if (!h.includes(tk)) return null; return { it, sc: (dn.startsWith(tk) ? 0 : dn.includes(tk) ? 1 : 2) + (it.url ? 0 : .3) }; }).filter(Boolean).sort((a, b) => a.sc - b.sc).slice(0, 7).map(x => x.it);
    drop.innerHTML = res.length ? res.map((it, i) => `<div class="s-item" data-id="${esc(it.id)}" style="--i:${i}"><span class="ic">${esc(it.icon)}</span><div class="s-main"><div class="s-name">${markText(L(it.name), tk)}</div><div class="s-sub">${esc(L(it.desc) || it.map)}</div></div>${it.url ? `<span class="bd g">${esc(t('guide'))}</span>` : ''}</div>`).join('') : `<div class="s-empty"><b>${esc(t('none'))}</b><br>${esc(t('noneSub'))}</div>`;
    drop.classList.add('on');
    if (res.length) { const top = L(res[0].name); if (top.toLowerCase().startsWith(q.toLowerCase()) && top.length > q.length) { gf = top; ghost.innerHTML = `<span class="gq">${esc(q)}</span>${esc(top.slice(q.length))}`; } }
  }
  function pick(id) { const it = items.find(x => x.id === id); if (!it) return; close(); inp.blur(); const c = $(`.cell[data-id="${CSS.escape(id)}"]`); if (c) { c.scrollIntoView({ block: 'center', behavior: motion ? 'smooth' : 'auto' }); $('.card', c).classList.add('flash'); setTimeout(() => $('.card', c) && $('.card', c).classList.remove('flash'), 1400); } edit ? openForm(it) : openItem(it); }
  inp.addEventListener('input', update);
  inp.addEventListener('focus', () => { box.classList.add('focus'); update(); });
  inp.addEventListener('blur', () => { box.classList.remove('focus'); setTimeout(close, 160); });
  inp.addEventListener('keydown', e => {
    if (e.isComposing || e.keyCode === 229) return;
    const its = $$('.s-item', drop);
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); if (!its.length) return; act = (act + (e.key === 'ArrowDown' ? 1 : -1) + its.length) % its.length; its.forEach((x, i) => x.classList.toggle('act', i === act)); its[act].scrollIntoView({ block: 'nearest' }); }
    else if ((e.key === 'Tab' || (e.key === 'ArrowRight' && inp.selectionStart === inp.value.length)) && gf) { e.preventDefault(); inp.value = gf; update(); }
    else if (e.key === 'Enter' && its.length) { e.preventDefault(); pick(its[Math.max(0, act)].dataset.id); }
    else if (e.key === 'Escape') close();
  });
  drop.addEventListener('pointerdown', e => e.preventDefault());
  drop.addEventListener('click', e => { const s = e.target.closest('.s-item'); if (s) pick(s.dataset.id); });
  clr.onclick = () => { inp.value = ''; inp.focus(); update(); };
})();

/* ---------- 引っぱって更新 ---------- */
async function refresh() {
  const b = $('#b-ref'); b.classList.add('spin'); skeleton();
  items = (LS.get(ITEMS_KEY, null) || CONFIG.items).map(normItem);
  await sleep(700); renderAll(); b.classList.remove('spin'); toast(t('refreshed'), { icon: '↻' });
}
$('#b-ref').onclick = refresh;
(() => {
  const ind = $('#ptr'), tx = $('.ptr-tx', ind), ic = $('.ptr-ic', ind); let y0 = null, h = 0, busy = false;
  addEventListener('touchstart', e => { if (busy || scrollY > 0 || e.touches.length > 1 || Sheet.open) { y0 = null; return; } y0 = e.touches[0].clientY; h = 0; }, { passive: true });
  addEventListener('touchmove', e => {
    if (y0 == null) return; const dy = e.touches[0].clientY - y0;
    if (dy <= 0 || scrollY > 0) { if (h) { ind.style.height = '0'; h = 0; } return; }
    if (e.cancelable) e.preventDefault();
    h = Math.min(110, dy * .5); ind.style.transition = 'none'; ind.style.height = h + 'px';
    const ready = h > 64; if (ready !== ind.classList.contains('ready')) { ind.classList.toggle('ready', ready); vib(8); }
    tx.textContent = ready ? t('release') : t('pull'); ic.style.transform = `rotate(${ready ? 180 : h * 2}deg)`;
  }, { passive: false });
  addEventListener('touchend', async () => {
    if (y0 == null) return; y0 = null; ind.style.transition = '';
    if (h > 64) { busy = true; ind.classList.add('busy'); ic.style.transform = ''; ic.textContent = '↻'; ind.style.height = '58px'; tx.textContent = t('refreshing'); await refresh(); ind.classList.remove('busy', 'ready'); ic.textContent = '↓'; busy = false; }
    ind.style.height = '0'; h = 0;
  });
})();

/* ---------- 言語切替 ---------- */
$('#b-lang').onclick = () => {
  const body = Sheet.show(`<div class="sh-h"><h2>🌐 ${esc(t('lang'))}</h2><button class="sh-x" type="button" data-close>✕</button></div><div style="display:grid;gap:8px">${[['ja', '日本語'], ['en', 'English'], ['zh', '中文']].map(([k, n]) => `<button class="btn ${k === lang ? 'pri' : 'line'} wide rp" type="button" data-l="${k}">${n}${k === lang ? ' ✓' : ''}</button>`).join('')}</div>`);
  $$('[data-l]', body).forEach(b => b.onclick = () => { lang = b.dataset.l; LS.set('fg-lang', lang); try { localStorage.setItem('nj-lang', lang); } catch (e) {} Sheet.hide(); renderAll(); });
};

/* =====================================================================
   スタッフ用：商品の追加・編集・削除（パスワード staff2026）
   ===================================================================== */
function staffGate(fn) {
  if (staffOK()) { fn(); return; }
  const body = Sheet.show(`<div class="sh-h"><div><h2>${kChars('🔒 スタッフ専用')}</h2><p>商品の追加・編集・削除には、スタッフ用パスワードが必要です</p></div><button class="sh-x" type="button" data-close>✕</button></div>
    <label class="fld"><span>パスワード</span><input class="inp" id="pw" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="go"></label><button class="btn pri wide rp" type="button" id="pw-go">開く</button>`);
  let fails = 0, lockT = 0;
  const go = () => {
    const inp = $('#pw', body);
    if (Date.now() < lockT) { toast('入力の回数が多すぎます。30秒ほど待ってください', { icon: '⏳' }); return; }
    if (sha256(inp.value) === STAFF_HASH) { try { sessionStorage.setItem('fg-staff-until', Date.now() + 15 * 60 * 1000); } catch (e) {} Sheet.hide(); toast('スタッフモードを15分間有効にしました', { icon: '🔓' }); setTimeout(fn, 260); return; }
    inp.value = ''; vib([30, 40, 30]); if (++fails >= 5) { lockT = Date.now() + 30000; fails = 0; }
    inp.animate && inp.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' }, { transform: 'translateX(8px)' }, { transform: 'translateX(0)' }], { duration: 300 });
    toast('パスワードが違います', { icon: '⚠️' });
  };
  $('#pw-go', body).onclick = go; $('#pw', body).onkeydown = e => { if (e.key === 'Enter') go(); };
  setTimeout(() => { const i = $('#pw', body); i && i.focus(); }, 350);
}
$('#b-edit').onclick = () => { if (edit) { setEdit(false); return; } staffGate(() => setEdit(true)); };
function setEdit(on) {
  edit = on; filter = '';
  $('#b-edit').innerHTML = on ? '✓ <span class="lbl">編集を終える</span>' : `✏️ <span class="lbl">${esc(t('edit'))}</span>`;
  renderChips(); lead(); renderGrid(); renderEbar(); renderHero();
  if (on) toast('編集モード：カードをタップで編集・↑↓で並べ替え', { icon: '✏️' });
  else toast('編集内容を保存しました', { icon: '💾' });
}
function renderEbar() {
  const s = $('#ebar-slot');
  if (!edit) { s.innerHTML = ''; return; }
  s.innerHTML = `<div class="ebar"><b>✏️ 編集モード ・ ${items.length}件</b><button class="eb pri" type="button" id="e-add">＋ 追加</button><button class="eb" type="button" id="e-exp">⤒ 書き出し</button><button class="eb" type="button" id="e-imp">⤓ 読み込み</button><button class="eb" type="button" id="e-reset">↺ 初期に戻す</button><button class="eb x" type="button" id="e-done">✓ 完了</button></div>`;
  $('#e-add').onclick = () => openForm(null);
  $('#e-done').onclick = () => setEdit(false);
  $('#e-exp').onclick = () => { const b = new Blob([JSON.stringify({ dept: DEPT, store: storeId, items }, null, 1)], { type: 'application/json' }), u = URL.createObjectURL(b), a = document.createElement('a'); a.href = u; a.download = `${DEPT}-items.json`; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(u); a.remove(); }, 500); toast('JSONファイルを書き出しました', { icon: '⤒' }); };
  $('#e-imp').onclick = () => { const f = $('#file'); f.value = ''; f.click(); };
  $('#e-reset').onclick = () => { const before = items; items = CONFIG.items.map(normItem); saveItems(); renderAll(); toast('初期の商品一覧に戻しました', { icon: '↺', action: { label: '元に戻す', fn: () => { items = before; saveItems(); renderAll(); } } }); };
}
$('#file').addEventListener('change', async e => {
  const f = e.target.files && e.target.files[0]; if (!f) return;
  try {
    const d = JSON.parse(await f.text()), arr = Array.isArray(d) ? d : d.items;
    if (!Array.isArray(arr)) throw new Error('items が見つかりません');
    const before = items; items = arr.map(normItem); saveItems(); renderAll();
    toast(`${items.length}件の商品を読み込みました`, { icon: '⤓', action: { label: '元に戻す', fn: () => { items = before; saveItems(); renderAll(); } } });
  } catch (er) { toast('読み込めませんでした：' + (er.message || er), { icon: '⚠️', dur: 5000 }); }
});
function flip(fn) {
  const before = new Map($$('.cell').map(c => [c.dataset.id, c.getBoundingClientRect()]));
  fn();
  if (!motion) return;
  $$('.cell').forEach(c => { const b = before.get(c.dataset.id); if (!b) return; const a = c.getBoundingClientRect(), dx = b.left - a.left, dy = b.top - a.top; if (!dx && !dy) return; c.style.animation = 'none'; c.style.opacity = 1; c.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 450, easing: 'cubic-bezier(.16,1,.3,1)' }); });
}
function editAct(a, it, cell) {
  const idx = items.indexOf(it);
  if (a === 'edit') openForm(it);
  else if (a === 'up' || a === 'down') { const j = idx + (a === 'up' ? -1 : 1); if (j < 0 || j >= items.length) return; flip(() => { [items[idx], items[j]] = [items[j], items[idx]]; saveItems(); renderGrid(); $$('.cell').forEach(c => { c.style.animation = 'none'; c.style.opacity = 1; c.style.transform = 'none'; }); }); vib(6); }
  else if (a === 'dup') { const c = normItem(JSON.parse(JSON.stringify(it))); c.id = uid(); c.name.ja += '（コピー）'; items.splice(idx + 1, 0, c); saveItems(); renderGrid(); renderHero(); highlight(c.id); toast('複製しました', { icon: '⧉' }); }
  else if (a === 'del') {
    const before = items.slice();
    cell.classList.add('gone'); cell.style.height = cell.offsetHeight + 'px'; void cell.offsetHeight; cell.style.height = '0px'; cell.style.opacity = '0'; cell.style.transform = 'scale(.92)';
    setTimeout(() => { items = items.filter(x => x !== it); saveItems(); renderGrid(); renderHero(); renderEbar(); }, 330);
    toast(`「${L(it.name)}」を削除しました`, { icon: '🗑', action: { label: '元に戻す', fn: () => { items = before; saveItems(); renderGrid(); renderHero(); renderEbar(); highlight(it.id); } } });
  }
}
function highlight(id) { requestAnimationFrame(() => { const c = $(`.cell[data-id="${CSS.escape(id)}"]`); if (!c) return; c.scrollIntoView({ block: 'center', behavior: motion ? 'smooth' : 'auto' }); const k = $('.card', c); k.classList.add('flash'); setTimeout(() => k.classList.remove('flash'), 1500); }); }
const EMO = ['🧊', '🧺', '🧹', '🤖', '🍚', '♨️', '🍞', '💨', '💇', '🪒', '🪥', '🚿', '❄️', '🌀', '📺', '🎤', '💻', '📱', '⌚', '🖨️', '⌨️', '🖥️', '🔌', '🎧', '🔋', '📷', '🎮', '💡', '🛍️', '📦'];
function openForm(it) {
  const isNew = !it, d = it ? JSON.parse(JSON.stringify(it)) : normItem({ icon: '📦' });
  const body = Sheet.show(`<div class="sh-h"><div class="bic" id="f-ic">${esc(d.icon)}</div><div><h2>${kChars(isNew ? '商品を追加' : '商品を編集')}</h2><p>${esc(L(AR.name))} ・ ${esc(storeName())}</p></div><button class="sh-x" type="button" data-close>✕</button></div>
    <div class="fld"><span>アイコン</span><div class="g3"><input class="inp" id="f-icon" value="${esc(d.icon)}" maxlength="4" style="text-align:center;font-size:22px"><div class="emo">${EMO.map(e => `<button type="button" class="${e === d.icon ? 'on' : ''}">${e}</button>`).join('')}</div></div></div>
    <label class="fld"><span>商品名（日本語）＊</span><input class="inp" id="f-ja" value="${esc(d.name.ja)}" placeholder="例：冷蔵庫"></label>
    <div class="g2"><label class="fld"><span>English</span><input class="inp" id="f-en" value="${esc(d.name.en)}" placeholder="Refrigerator"></label><label class="fld"><span>中文</span><input class="inp" id="f-zh" value="${esc(d.name.zh)}" placeholder="冰箱"></label></div>
    <label class="fld"><span>ひとこと説明（日本語）</span><input class="inp" id="f-dja" value="${esc(d.desc.ja)}" placeholder="例：大容量から一人暮らし向けまで"></label>
    <div class="g2"><label class="fld"><span>説明（English）</span><input class="inp" id="f-den" value="${esc(d.desc.en)}"></label><label class="fld"><span>说明（中文）</span><input class="inp" id="f-dzh" value="${esc(d.desc.zh)}"></label></div>
    <label class="fld"><span>マップの売り場名（ホームのフロアマップと連動）</span><div class="mdl"><input class="inp" id="f-map" value="${esc(d.map)}" autocomplete="off" placeholder="例：冷蔵庫コーナー"><div class="mdl-dd" id="f-mapdd"></div></div></label>
    <label class="fld"><span>相談・紹介ページのURL（空欄＝準備中）</span><input class="inp" id="f-url" value="${esc(d.url)}" inputmode="url" placeholder="例：product-fridge.html または https://…"></label>
    <div class="fld"><span>ラベル</span><div class="pills" id="f-badge">${BADGES.map(b => `<button type="button" class="pill${d.badge === b ? ' on' : ''}" data-b="${b}">${b ? esc(T[BLBL[b]][0]) : 'なし'}</button>`).join('')}</div></div>
    <label class="fld"><span>お知らせ（日本語・任意）</span><textarea class="inp" id="f-note" placeholder="例：現在は夏用品のみ展開しています">${esc(d.note.ja)}</textarea></label>
    <label class="fld"><span>検索キーワード（ひらがな・別名、空白区切り）</span><input class="inp" id="f-kw" value="${esc(d.kw)}" placeholder="例：れいぞうこ 冷凍庫"></label>
    <label class="chk"><input type="checkbox" id="f-hide" ${d.hidden ? 'checked' : ''}>お客様には表示しない（非公開）</label>
    <div class="acts"><button class="btn pri wide rp" type="button" id="f-save">${isNew ? '＋ 追加する' : '💾 保存する'}</button>${isNew ? '' : '<button class="btn red wide" type="button" id="f-del">🗑 この商品を削除</button>'}</div>`);
  const icI = $('#f-icon', body);
  $$('.emo button', body).forEach(b => b.onclick = () => { icI.value = b.textContent; $$('.emo button', body).forEach(x => x.classList.toggle('on', x === b)); $('#f-ic', body).textContent = b.textContent; });
  icI.oninput = () => { $('#f-ic', body).textContent = icI.value || '📦'; };
  $$('#f-badge .pill', body).forEach(b => b.onclick = () => { d.badge = b.dataset.b; $$('#f-badge .pill', body).forEach(x => x.classList.toggle('on', x === b)); });
  const mi = $('#f-map', body), dd = $('#f-mapdd', body), labels = mapLabels();
  const showDD = () => { const q = nrm(mi.value), r = labels.filter(l => !q || nrm(l).includes(q)).slice(0, 30); dd.innerHTML = r.length ? r.map(l => `<button type="button">${esc(l)}</button>`).join('') : ''; dd.classList.toggle('on', !!r.length && document.activeElement === mi); };
  mi.addEventListener('focus', showDD); mi.addEventListener('input', showDD); mi.addEventListener('blur', () => setTimeout(() => dd.classList.remove('on'), 160));
  dd.addEventListener('pointerdown', e => e.preventDefault()); dd.addEventListener('click', e => { const b = e.target.closest('button'); if (b) { mi.value = b.textContent; dd.classList.remove('on'); mi.blur(); } });
  $('#f-save', body).onclick = () => {
    const ja = $('#f-ja', body).value.trim();
    if (!ja) { toast('商品名（日本語）を入力してください', { icon: '⚠️' }); $('#f-ja', body).focus(); return; }
    const url = $('#f-url', body).value.trim();
    if (url && /^\s*javascript:/i.test(url)) { toast('このURLは使えません', { icon: '⚠️' }); return; }
    const nv = normItem({ ...d, icon: icI.value.trim() || '📦', name: { ja, en: $('#f-en', body).value.trim(), zh: $('#f-zh', body).value.trim() }, desc: { ja: $('#f-dja', body).value.trim(), en: $('#f-den', body).value.trim(), zh: $('#f-dzh', body).value.trim() }, map: mi.value.trim(), url, note: { ...d.note, ja: $('#f-note', body).value.trim() }, kw: $('#f-kw', body).value.trim(), hidden: $('#f-hide', body).checked });
    const before = items.slice();
    if (isNew) items.push(nv); else items = items.map(x => x.id === it.id ? nv : x);
    saveItems(); Sheet.hide(); renderGrid(); renderHero(); renderChips(); renderEbar(); highlight(nv.id);
    toast(isNew ? `「${ja}」を追加しました` : `「${ja}」を更新しました`, { icon: isNew ? '＋' : '💾', action: { label: '元に戻す', fn: () => { items = before; saveItems(); renderGrid(); renderHero(); renderEbar(); } } });
    if (nv.map && labels.length && !labels.includes(nv.map)) setTimeout(() => toast('この売り場名はフロアマップにありません。マップで探せない場合があります', { icon: 'ℹ️', dur: 4000 }), 600);
  };
  const del = $('#f-del', body);
  if (del) del.onclick = () => { Sheet.hide(); const c = $(`.cell[data-id="${CSS.escape(it.id)}"]`); if (c) editAct('del', it, c); };
  if (isNew) setTimeout(() => $('#f-ja', body).focus(), 350);
}

/* ---------- 起動 ---------- */
addEventListener('storage', e => { if (e.key === FAV_KEY) favCount(true); });
addEventListener('pageshow', () => favCount(false));
addEventListener('resize', () => { const on = $('#anav a.on'), ind = $('#anav-ind'); if (on) { ind.style.width = on.offsetWidth + 'px'; ind.style.transform = `translateX(${on.offsetLeft - 5}px)`; } });
const want = qs.get('app');
if (want && CONFIG.apps && CONFIG.apps[want]) { location.replace(linkUrl(CONFIG.apps[want])); return; }
applyStatic(); renderNav(); skeleton();
setTimeout(() => { renderAll(); if (staffOK() && qs.get('edit') === '1') setEdit(true); }, motion ? 600 : 0);
})();
</script>
</body>
</html>