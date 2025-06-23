import React from 'react';
import MoodEntry from './MoodEntry';
import MoodHistory from './MoodHistory';

export default function JournalPage({ onNewEntry, entries }) {
  return (
    <section className="grid gap-8 md:grid-cols-2">
      <MoodEntry onNewEntry={onNewEntry} journalMode={true} />
      <MoodHistory entries={entries} />
    </section>
  );
} 