const ts=require('typescript');
function chk(l,c){const sf=ts.createSourceFile('t.tsx',c,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);const d=sf.parseDiagnostics||[];console.log(l,d.length?('ERR '+ts.flattenDiagnosticMessageText(d[0].messageText,' ')):'OK');}
chk('templ-class', "const C=()=> <div className={`h-1 w-full bg-gradient-to-r ${card.color}`} />;");
