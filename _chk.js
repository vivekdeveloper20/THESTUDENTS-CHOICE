const ts = require('typescript');
const fs = require('fs');
const glob = [
 'src/components/lead/LeadModal.tsx',
 'src/app/layout.tsx',
 'src/app/contact-us/page.tsx',
 'src/components/home/HeroSection.tsx',
 'src/components/home/JourneySection.tsx',
 'src/components/home/LoanOptionsSection.tsx',
 'src/components/home/LoanSupportSection.tsx',
 'src/components/layout/Header.tsx',
 'src/components/layout/LoanApprovalBanner.tsx',
];
const fg = require('child_process').execSync('ls src/components/study-abroad/Study*Page.tsx').toString().trim().split('\n');
let bad=0;
for (const f of glob.concat(fg)) {
  const src = fs.readFileSync(f,'utf8');
  const sf = ts.createSourceFile(f, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const d = sf.parseDiagnostics || [];
  if (d.length) { bad++; console.log("SYNTAX ERROR:", f); d.slice(0,3).forEach(x=>console.log("  ", ts.flattenDiagnosticMessageText(x.messageText,'\n'))); }
}
console.log(bad===0 ? "ALL FILES PARSE OK ("+(glob.length+fg.length)+" files)" : (bad+" files have syntax errors"));
