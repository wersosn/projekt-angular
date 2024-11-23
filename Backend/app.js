const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

const eventsFilePath = './event.json';

// Funkcja do odczytywania wydarzeń z pliku JSON
const loadEvents = () => {
  try {
    const data = fs.readFileSync(eventsFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading events file:', err);
    return [];
  }
};

// Funkcja do zapisywania wydarzeń do pliku JSON
const saveEvents = (events) => {
  try {
    fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2));
  } catch (err) {
    console.error('Error writing events file:', err);
  }
};

// Inicjalizacja tablicy events z danych w pliku JSON
let events = loadEvents();

// Get do pobierania wszystkich wydarzeń
app.get('/api/events', (req, res) => {
  res.json(events);
});

// Get do konkretnego wydarzenia
app.get('/api/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id, 10);
  const event = events.find(e => e.id === eventId);

  if (event) {
    res.json(event);
  } else {
    res.status(404).send('Event not found');
  }
});

// Post do dodawania nowego wydarzenia
app.post('/api/events', (req, res) => {
  const newEvent = req.body;
  events.push(newEvent);
  saveEvents(events);
  res.status(201).json(newEvent);
});

// Post do edycji wydarzenia
app.put('/api/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id, 10);
  const updatedEvent = req.body;
  // Znajdź wydarzenie po ID i zaktualizuj
  let event = events.find(e => e.id === eventId);
  if (event) {
    Object.assign(event, updatedEvent);
    saveEvents(events);
    res.status(200).json(event);
  } else {
    res.status(404).send('Event not found edit');
  }
});

// Get do pobierania wszystkich grup z konkretnego wydarzenia
app.get('/api/events/:id/groups', (req,res) => {
  const eventId = parseInt(req.params.id, 10);
  const event = events.find(e => e.id === eventId);

  if (!event) {
    res.status(404).send('Event not found');
  }
  const groups = event.groups;

  if (groups) {
    res.json(groups);
  } else {
    res.status(404).send('Event ' + event.title + ' has no groups');
  }
});

// Get do konkretnej grupy w konkretnego wydarzenia
app.get('/api/events/:id/groups/:groupId', (req,res) => {
  const eventId = parseInt(req.params.id, 10);
  const event = events.find(e => e.id === eventId);

  if (!event) {
    res.status(404).send('Event not found');
  }
  const groups = event.groups;

  if (!groups) {
    res.status(404).send('Event ' + event.title + ' has no groups');
  }
  const groupId = parseInt(req.params.groupId, 10);
  const group = groups.find(e => e.groupId === groupId);

  if (group) {
    res.json(group);
  } else {
    res.status(404).send('Group not found');
  }
});

// Post do dodawania grupy dla konkretnego wydarzenia
app.post('/api/events/:id/groups', (req, res) => {
  const eventId = parseInt(req.params.id, 10);
  const event = events.find(e => e.id === eventId);
  
  if (!event) {
    res.status(404).send('Event not found');
  }
  const newGroup = req.body;

  events[events.indexOf(event)].groups.push(newGroup);
  saveEvents(events);

  res.status(201).json(newGroup);
});

// Put do edycji grupy w konkretnym wydarzeniu
app.put('/api/events/:id/groups/:groupId', (req, res) => {
  const eventId = parseInt(req.params.id, 10);
  const updatedGroup = req.body;
  let event = events.find(e => e.id === eventId);

  if (!event) {
    res.status(404).send('Event not found');
  }
  let groups = event.groups;

  if (!groups) {
    res.status(404).send('Event ' + event.title + ' has no groups');
  }
  const groupId = parseInt(req.params.groupId, 10);
  let group = groups.find(e => e.groupId === groupId);

  if(!group) {
    res.status(404).send('Group not found');
  }
  // TODO Do przetestowania
  // Nie jestem pewien czy to w taki sposób zadziała
  Object.assign(group, updatedGroup); 
  saveEvents(events);
  res.status(200).json(event);
});

// Uruchomienie serwera na porcie 3000
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
