import {mkdir,cp,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist');for(const f of ['index.html','style.css','fonts.css','fonts','icon.svg','src'])await cp(f,'dist/'+f,{recursive:true});console.log('Static site built in dist/');
