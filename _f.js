const ts=require('typescript'),fs=require('fs'),cp=require('child_process');
const files=cp.execSync("find src -name '*.tsx' -o -name '*.ts'").toString().trim().split('\n').filter(Boolean);
let bad=0;
for(const f of files){const c=fs.readFileSync(f,'utf8');const nul=c.indexOf(String.fromCharCode(0))>=0;const sf=ts.createSourceFile(f,c,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);const d=sf.parseDiagnostics||[];if(d.length||nul){bad++;console.log((nul?'[NUL] ':'')+f.replace('src/','')+(d.length?(' L'+(sf.getLineAndCharacterOfPosition(d[0].start).line+1)):''));}}
console.log(bad?(bad+' NEED FIX'):('>>> ALL '+files.length+' CLEAN'));
