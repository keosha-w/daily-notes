const searchTerm = "Flexbox"

const notes = [
    {
        id: 1, 
        subject: "HTML and CSS", 
        date: "9/28/2021", 
        feeling: "Needed to brush up on my basic CSS skills. HTML seemed to come back easily.", 
        timeSpent: 8 
    },
    {
        id: 2, 
        subject: "Flexbox",
        date: "9/29/2021", 
        feeling: "I still feel like i don't really understand flexbox.", 
        timeSpent: 6

    },
    {
        id: 3, 
        subject: "Git & GitHub",
        date: "9/30/2021", 
        feeling: "Felt very confused for a while trying to get everything in order in my mind. There are lots of steps to remember.", 
        timeSpent: 6

    },
    {
        id: 4, 
        subject: "Worst Website Ever",
        date: "10/01/2021", 
        feeling: "Feeling pretty good. Still need practice on the steps but they make sense to me now.", 
        timeSpent: 6

    }
]

const noteAboutToday = {
    id: 5, 
    subject: "Free work Day", 
    date: "10/4/2021", 
    feeling: "Feeling good about Git and Github. Worked ahead to start working on javascript objects. Nice to know that i haven't completely forgotten this stuff from the pre-work.",
    timespent: 4
}

notes.push(noteAboutToday)

// console.log(notes)

// for (const note of notes) {
//     console.log(`Note ${note.id}
//     ${note.date}
//     Today i worked on ${note.subject}.
//     I spent ${note.timespent} hours working on it.
//     ${note.feeling}
//     ------------`)
// }

const newNote = {
    id: 6, 
    subject: "Demo Day & more Javascript", 
    date: "10/5/2021", 
    feeling: "Still feeling good about what i'm learning. However i keep using for...in instead of for...of to write my loops and of course keep getting undefined in the terminal.",
    timespent: 4
}

notes.push(newNote)

// for (const note of notes) {
//     if (note.subject === searchTerm) {
//         console.log(note.date)
//     }
// }

const createNote = (note) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1
    note.id = idForNewNote
    note.date = Date()
    notes.push(note)
}

const moreNewerNote = {
    subject: "Javascript Day 3",
    feeling: "Adding arrow function and variable syntax to my list to study tonight. I'm feeling a bit confused. Had to google function syntax for the previous activity."
}

createNote(moreNewerNote)



console.log(notes)