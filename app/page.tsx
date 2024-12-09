"use client";
import { Button, Center, Flex, MantineProvider, MultiSelect, Stack, Text } from "@mantine/core";
import '@mantine/core/styles.css'
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState<string[]>([]);

  const langs = [
    'Python',
    'JavaScript',
    'Rust',
    'Assembly',
    'Astro',
    'React',
    'C++',
    'C#',
    'C',
    'Java',
    'Go',
    'TypeScript',
    'Ruby',
    'Swift',
    'Fortran',
    'PHP',
    'HTML',
    'Kotlin'
  ]

  async function run() {
    const concept = document.getElementById('concept');
    const purpose = document.getElementById('purpose');
    const lang = document.getElementById('lang');

    if (!concept || !purpose || !lang) {
      return;
    }

    const concepts = [
      'Word Processor',
      'IDE',
      'Social Media Platform',
      'Game Engine',
      'Operating System',
      'Chrome Dino Game',
      'File Manager',
      'Web Browser',
      'AI Chatbot',
      'NES Emulator',
      'Music Player',
      'Video Editor',
      'Random Idea Generator',
      'Chess Game',
      'Weather App',
      'API',
      'Slack Bot',
      'Web Scraper',
      'Programming Language',
      'Shopping List App',
      'Calculator',
      'Calendar',
      'Portfolio',
      'Blog',
      'Restaurant Finder',
      'Fitness Tracker',
      'Meme Generator',
      'GPS App',
      'Photo Editor',
      'To-Do List',
      'Voice Assistant',
      'Budget Tracker',
      'Recipe App',
      'Online Marketplace',
      'Habit Tracker',
      'Virtual Pet Game',
      'Trivia Quiz',
      'Text Adventure Game',
      'E-Book Reader',
      'Music Synthesizer',
      'Podcast Manager',
      'Language Learning App',
      'Digital Whiteboard',
      'Smart Home Controller',
      'Flashcard App',
      'Personal Journal',
      'Time Zone Converter',
      'Currency Converter',
      'Flight Booking System',
      'Stock Market Tracker',
      'Mood Tracker',
      'Resume Builder',
      'Trivia Generator',
      'VR Experience',
      '3D Modeling Software',
      'Bookmark Manager',
      'Digital Art Studio',
      'Audio Book Player',
    ];


    const purposes = [
      'predicts the future',
      'uses little memory',
      'uses AI',
      'runs on a ' + ['Wii', 'Pi Zero', 'Smart TV', 'Xbox', 'PS2'][Math.floor(Math.random() * 5)],
      'is space-themed',
      'takes up <20MB',
      'uses no libraries / APIs',
      'runs in a console',
      'looks pretty',
      'is useful',
      'prevents crime',
      'is educational',
      'is also a game',
      'helps with studies',
      'can be used by anyone',
      'takes <1 hour to make',
      'plays music',
      'makes you laugh',
      'solves a problem',
      'is privacy-focused',
      'protects the environment',
      'is part of an ARG',
      'features a cat',
      'is pixel-art style'
    ]



    concept.classList.add('anim');
    purpose.classList.add('anim');
    lang.classList.add('anim');

    const preload = new Audio('/click.wav');
    preload.volume = 0;
    preload.play();

    let flangs: string[] = [];

    if (filter.length > 0) {
      flangs = langs.filter(l => filter.includes(l));
      if (flangs.length === 0) {
        lang.innerText = 'No languages selected';
        return;
      }
    } else {
      flangs = langs;
    }

    for (let e of Array.from({ length: 20 }, (_, i) => i + 1)) {
      concept.innerText = concepts[Math.floor(Math.random() * concepts.length)];
      purpose.innerText = purposes[Math.floor(Math.random() * purposes.length)];
      lang.innerText = flangs[Math.floor(Math.random() * flangs.length)];

      if (concept.innerText[0].toLowerCase() === 'a' || concept.innerText[0].toLowerCase() === 'e' || concept.innerText[0].toLowerCase() === 'i' || concept.innerText[0].toLowerCase() === 'o' || concept.innerText[0].toLowerCase() === 'u') {
        const aElement = document.getElementById('a');
        if (aElement) aElement.innerHTML = 'An&nbsp;';
      } else {
        const aElement = document.getElementById('a');
        if (aElement) aElement.innerHTML = 'A&nbsp;&nbsp;';
      }

      // Play /click.wav
      const audio = new Audio('/click.wav');
      audio.volume = 0.4;
      audio.play();

      await new Promise(r => setTimeout(r, 100));
    }

    concept.classList.remove('anim');
    purpose.classList.remove('anim');
    lang.classList.remove('anim');

    const ding = new Audio('/ding.wav');
    ding.volume = 0.7;
    ding.play();
  }

  function v0() {
    const concept = document.getElementById('concept');
    const purpose = document.getElementById('purpose');
    const lang = document.getElementById('lang');
    const string = "A " + concept?.innerText + " that " + purpose?.innerText + " written in " + lang?.innerText;
    const url = "https://v0.dev/chat?q=" + encodeURIComponent(string);
    window.open(url, '_blank');
  }

  window.onload = run;

  return (
    <MantineProvider>
      <Center style={{ height: '100vh' }}>
        <Stack>
          <Flex>
            <Text className="t pl" id="a">A&nbsp;</Text>
            <Text color="blue" className="t c" id="concept">thing</Text>
            <Text className="t pl">&nbsp;that&nbsp;</Text>
            <Text color="blue" className="t c" id="purpose">does something</Text>
          </Flex>
          <Flex>
            <Center style={{ width: '100%' }}>
              <Text className="t pl">written in&nbsp;</Text>
              <Text color="blue" className="t c" id="lang">a language</Text>
            </Center>
          </Flex>
          <Button className="gbt" onClick={run}>Go!</Button>
          <MultiSelect id="filter" value={filter} onChange={setFilter} label="Filter Language(s)" data={[...langs]}></MultiSelect>
          <Button className="gbt2" variant="subtle" onClick={v0}>Create with v0</Button>
        </Stack>
      </Center>
    </MantineProvider>
  );
}
