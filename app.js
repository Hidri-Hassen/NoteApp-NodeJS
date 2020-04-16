console.log("Starting App.js");

//  const fs = require ('fs');
 const notes = require ("./notes.js");
 const yargs = require ("yargs");
 const argv = yargs.argv;

 var title = yargs.argv.title;
 var body = yargs.argv.body;
 var command = yargs.argv._[0];

 if(command === "add"){
     console.log("adding note"); 
     notes.addingNote(title,body)
 }else if (command === "remove"){
    console.log("removing note"); 
    notes.removingNote(title)
 }else if (command === "read"){
    console.log("reading note"); 
    notes.readingNote(title)
 }else if (command === "list"){
    console.log("listing all notes");
    notes.getAllNote() 
 }else{
     console.log("Unknown command was used!");
     
 }


 