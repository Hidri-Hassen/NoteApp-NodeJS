const fs = require ('fs');

var fetchNote = ( ) =>{
    try{
        return JSON.parse(fs.readFileSync("notes.txt"));  
    } catch (err) {
        return [];
    }

}


var addingNote = (title,body) => {
    if(title && body){
    var notes = fetchNote();

    var note ={
        title,
        body
    }
    var double = notes.filter((note) => note.title == title)
    if(double.length === 0){
        notes.push(note);
        fs.writeFileSync("notes.txt",JSON.stringify(notes));
        viewNotes(note);
    }else{
        console.log("WARN: Title Already Exists!");
        
    }
    }else{
        console.log("");
        console.log("Option:");
        console.log("--help              Show Help                                                       [boolean]");
        console.log("--title, -t         Title of note                                                   [required]");
        console.log("--body, -b          Body of note                                                    [required]");
        console.log("");
        console.log("Missing required arguments: title, body");
        
    }
    
}

var removingNote = (title) => {
    if(title){
    var notes = fetchNote();
    var filtredNotes = notes.filter((note) => note.title !== title)
    fs.writeFileSync("notes.txt",JSON.stringify(filtredNotes));
    }else{
        console.log("");
        console.log("Option:");
        console.log("--help              Show Help                                                       [boolean]");
        console.log("--title, -t         Title of note                                                   [required]");
        console.log("");
        console.log("Missing required arguments: title, body");
        
    }
}

var readingNote = (title) => {
    if(title){
    var notes = fetchNote();
    var filtredNotes = notes.filter((note) => note.title === title)
    viewNotes(filtredNotes[0]) ;
}else{
    console.log("");
    console.log("Option:");
    console.log("--help              Show Help                                                       [boolean]");
    console.log("--title, -t         Title of note                                                   [required]");
    console.log("");
    
    console.log("Missing required arguments: title, body");
    
}

}

var getAllNote = () => {
    i=0
    var notes = fetchNote();
    notes.forEach((note) => {
        note=[]
        i=i+1   
}
)
    console.log(`Printing ${i} note(s)`)
    notes.forEach((note) => viewNotes(note))
    
}

var viewNotes = (note) => {

    console.log("*************************************************************************");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
       
}


module.exports ={

    addingNote,
    removingNote,
    readingNote,
    getAllNote

}