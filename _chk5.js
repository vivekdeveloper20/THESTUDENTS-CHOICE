const ts=require('typescript'),fs=require('fs');
const files=process.argv.slice(2);
let bad=0;
for(const f of files){const sf=ts.createSourceFile(f,fs.readFileSync(f,'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);const d=sf.parseDiagnostics||[];if(d.length){bad++;const p=sf.getLineAndCharacterOfPosition(d[0].start);console.log(`${f} -> line ${p.line+1}: ${ts.flattenDiagnosticMessageText(d[0].messageText,' ')}`);}else console.log(`${f} -> OK`);}
console.log(bad?`${bad} still broken`:'ALL OK after normalize');
