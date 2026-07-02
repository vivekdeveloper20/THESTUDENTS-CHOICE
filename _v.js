const ts=require('typescript'),fs=require('fs');
const c=fs.readFileSync('/tmp/journey.full','utf8');
const sf=ts.createSourceFile('t.tsx',c,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
(sf.parseDiagnostics||[]).slice(0,5).forEach(x=>{const p=sf.getLineAndCharacterOfPosition(x.start);console.log(`line ${p.line+1}:${p.character+1} ${ts.flattenDiagnosticMessageText(x.messageText,' ')}`)});
