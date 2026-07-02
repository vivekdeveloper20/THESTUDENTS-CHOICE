const ts = require('typescript');
const fs = require('fs');
for (const f of ['src/components/layout/Footer.tsx','src/app/layout.tsx','src/components/home/DestinationsSection.tsx']) {
  const src = fs.readFileSync(f,'utf8');
  const sf = ts.createSourceFile(f, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const d = sf.parseDiagnostics || [];
  console.log(f, '=>', d.length, 'diags');
  d.slice(0,2).forEach(x=>console.log('   @pos',x.start, ts.flattenDiagnosticMessageText(x.messageText,'\n')));
}
