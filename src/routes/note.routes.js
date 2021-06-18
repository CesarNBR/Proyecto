const { Router } = require('express')
const router = Router()

const { 
    renderNoteForm, 
    createNewNote, 
    renderNotes, 
    renderEditForm, 
    updateNote, 
    deletenote } = require('../controllers/notes.controller');

const {isAuthenticated} = require('../helpers/auth')

//New Note
router.get('/notes/add',isAuthenticated, renderNoteForm);

router.post('/notes/new-note',isAuthenticated, createNewNote);

//Get all not
router.get('/notes',isAuthenticated, renderNotes)

//  Edit notes
router.get('/notes/edit/:id',isAuthenticated, renderEditForm)

router.put('/notes/edit/:id',isAuthenticated, updateNote)

//Delete Notes
router.delete('/notes/delete/:id',isAuthenticated, deletenote)

module.exports = router
