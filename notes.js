const fs=require('fs')
const chalk=require('chalk')

// ADDING A NOTE
const addNote=((title,body)=>{
  const notes=loadNotes()

  const duplicateNote=notes.find((note)=>{return title===note.title})

  if (!duplicateNote){
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log('New note added')
  } else {
    console.log('Duplicate title')
  }
})

//REMOVING A NOTE
const removeNote=((title)=>{
  const notes=loadNotes()

  const notesToKeep=notes.filter((note)=>{
    return !(title===note.title)
  })
  saveNotes(notesToKeep)

  if(notesToKeep.length===notes.length){
    console.log(chalk.bgRed('No such note exists'))
  } else{
    console.log(chalk.bgGreen('Note is removed'))
}}
)

const loadNotes=()=>{
  try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (err){
    return []
  }
}

const saveNotes=(notes)=>{
  const dataJSON=JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJSON)
}

const listNotes=()=>{
  console.log(chalk.inverse('Your notes: '))
  const notes=loadNotes()

  notes.forEach((note) => {
    console.log(note.title)
  });
}


const readNote=(title)=>{
  const notes=loadNotes()
  const note=notes.find((note)=>note.title===title)
  if (note){
    console.log(note.body)
} else {
    console.log('No such note to read')
  }
}


module.exports={
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote:readNote
}
