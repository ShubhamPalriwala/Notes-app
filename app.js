
const notes=require('./notes.js')
const fs=require('fs')
const yargs=require('yargs')


yargs.command({
  command:'add',
  describe:'Add a new note',
  builder:{
    title:{
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body:{
      describe:'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.addNote(argv.title,argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe:'Remove a note',
  builder:{
    title:{
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.removeNote(argv.title)
  }
})


yargs.command({
  command: 'list',
  describe:'List the notes',
  handler(){
    notes.listNotes()
  }
})


yargs.command({
  command: 'read',
  describe:'Reading a note',
  builder:{
    title:{
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.readNote(argv.title)
  }
})

yargs.parse();
