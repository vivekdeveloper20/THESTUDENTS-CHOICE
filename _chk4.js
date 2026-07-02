const ts=require('typescript'),fs=require('fs');
const files=['src/app/layout.tsx','src/app/contact-us/page.tsx','src/components/home/HeroSection.tsx','src/components/home/JourneySection.tsx','src/components/home/LoanOptionsSection.tsx','src/components/home/LoanSupportSection.tsx','src/components/layout/Header.tsx','src/components/layout/LoanApprovalBanner.tsx','src/components/lead/LeadModal.tsx'];
for(const f of files){
  const src=fs.readFileSync(f,'utf8');
  const sf=ts.createSourceFile(f,src,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
  const d=sf.parseDiagnostics||[];
  if(d.length){const p=sf.getLineAndCharacterOfPosition(d[0].start);console.log(`${f}  -> line ${p.line+1}: ${ts.flattenDiagnosticMessageText(d[0].messageText,' ')}`);}
  else console.log(`${f}  -> OK`);
}
