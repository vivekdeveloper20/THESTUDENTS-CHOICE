const ts=require('typescript'),fs=require('fs');
const f='/tmp/orig_hero.tsx';
const sf=ts.createSourceFile(f,fs.readFileSync(f,'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
console.log('ORIGINAL (committed) HeroSection diags:', (sf.parseDiagnostics||[]).length);
(sf.parseDiagnostics||[]).slice(0,2).forEach(x=>console.log('  ',ts.flattenDiagnosticMessageText(x.messageText,'\n')));
