"use client";
import { Button, Center, Flex, MantineProvider, Stack, Text } from "@mantine/core";
import '@mantine/core/styles.css'

export default function Home() {
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
      '"Operating System"',
      'Chrome Dino Game',
      'File Manager',
      'Web Browser',
      'AI chatbot',
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
    ]

    const purposes = [
      'predicts the future',
      'uses little memory',
      'uses AI',
      'works in the browser',
      'runs on a ' + ['Wii', 'Pi Zero', 'Smart TV', 'Xbox', 'PS2'][Math.floor(Math.random() * 5)],
      'is space-themed',
      'takes up <20MB',
      'uses no libraries / APIs',
      'runs in a console',
      'looks pretty',
      'is useful',
      'Prevents crime',
      'is educational',
      'is also a game',
    ]

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
    ]

    concept.classList.add('anim');
    purpose.classList.add('anim');
    lang.classList.add('anim');

    const preload = new Audio('/click.wav');
    preload.volume = 0;
    preload.play();

    for (let e of Array.from({ length: 20 }, (_, i) => i + 1)) {
      concept.innerText = concepts[Math.floor(Math.random() * concepts.length)];
      purpose.innerText = purposes[Math.floor(Math.random() * purposes.length)];
      lang.innerText = langs[Math.floor(Math.random() * langs.length)];

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

  window.onload = run;

  return (
    <MantineProvider>
      <Center style={{ height: '100vh' }}>
        <Stack>
          <Flex>
            <Text className="t pl" id="a">A&nbsp;</Text>
            <Text color="blue" className="t c" id="concept">word</Text>
            <Text className="t pl">&nbsp;that&nbsp;</Text>
            <Text color="blue" className="t c" id="purpose">words</Text>
          </Flex>
          <Flex>
            <Center style={{ width: '100%' }}>
              <Text className="t pl">written in&nbsp;</Text>
              <Text color="blue" className="t c" id="lang">word</Text>
            </Center>
          </Flex>
          <Button className="gbt" onClick={run}>Go!</Button>
        </Stack>
      </Center>
    </MantineProvider>
  );
}
