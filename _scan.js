const ts=require('typescript'),fs=require('fs'),cp=require('child_process');
let files=['src/app/layout.tsx','src/app/contact-us/page.tsx','src/app/page.tsx','src/components/lead/LeadModal.tsx','src/components/layout/Header.tsx','src/components/layout/Footer.tsx','src/components/layout/PageShell.tsx','src/components/layout/LoanApprovalBanner.tsx','src/components/home/HeroSection.tsx','src/components/home/JourneySection.tsx','src/components/home/LoanOptionsSection.tsx','src/components/home/LoanSupportSection.tsx','src/components/home/DestinationsSection.tsx','src/components/home/WhyTrustSection.tsx','src/app/education-loan/page.tsx'];
files=files.concat(cp.execSync('ls src/components/study-abroad/Study*Page.tsx').toString().trim().split('\n'));
files=files.concat(cp.execSync('ls src/app/study-abroad/*/page.tsx').toString().trim().split('\n'));
let bad=0;
for(const f of files){const c=fs.readFileSync(f,'utf8');const nul=c.indexOf(String.fromCharCode(0))>=0;const sf=ts.createSourceFile(f,c,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);const d=sf.parseDiagnostics||[];if(d.length||nul){bad++;console.log((nul?'[NUL] ':'')+f.replace('src/','')+(d.length?(' L'+(sf.getLineAndCharacterOfPosition(d[0].start).line+1)):''));}}
console.log(bad?('>>> '+bad+' NEED FIX'):('>>> ALL '+files.length+' FILES CLEAN'));
