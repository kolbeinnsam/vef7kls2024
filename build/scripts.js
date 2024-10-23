/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (!isString(str)) return null;
  if (str === '') return '';

  const words = split(str);
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
console.assert(
  longest('halló heimur') === 'heimur',
  'longest: finnur lengsta orðið'
);
console.assert(
  longest('') === '',
  'longest: skilar tómum streng ef inntakið er tómur strengur'
);
console.assert(longest(42) === null, 'longest: ef ekki strengur, skila null');

function shortest(str) {
  if (!isString(str)) return null;
  if (str === '') return '';

  const words = split(str);
  let shortestWord = words[0];

  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }

  return shortestWord;
}

console.assert(
  shortest('halló heimur') === 'halló',
  'shortest: finnur stysta orðið'
);
console.assert(
  shortest('') === '',
  'shortest: skilar tómum streng ef inntakið er tómur strengur'
);
console.assert(shortest(42) === null, 'shortest: ef ekki strengur, skila null');

function reverse(str) {
  if (isString(str)) {
    const split = str.split('');
    const reversed = split.reverse();

    return reversed.join('');
  }
  return null;
}
console.assert(
  reverse('halló') === 'óllah',
  'reverse: snýr við einföldum streng'
);
console.assert(
  reverse(false) === null,
  'reverse: ef ekki strengur, skila null'
);

function palindrome(str) {
  if (isString(str) && str !== '') {
    const reversed = reverse(str);
    return str.toLowerCase() === reversed.toLowerCase();
  }

  return false;
}
console.assert(palindrome('halló') === false, 'palindrome: strengur, ekki');
console.assert(palindrome('natan') === true, 'palindrome: strengur, er');

function vowels(str) {
  if (!isString(str)) return 0;
  if (str === '') return 0;

  const vowelCount = str
    .toLowerCase()
    .split('')
    .filter((char) => VOWELS.includes(char)).length;
  return vowelCount;
}
console.assert(vowels('halló') === 2, 'vowels: finnur fjölda sérhljóða');
console.assert(vowels('bcdfgh') === 0, 'vowels: finnur engan sérhljóða');

function consonants(str) {
  if (!isString(str)) return 0;
  if (str === '') return 0;

  const consonantCount = str
    .toLowerCase()
    .split('')
    .filter((char) => CONSONANTS.includes(char)).length;
  return consonantCount;
}
console.assert(
  consonants('halló') === 3,
  'consonants: finnur fjölda samhljóða'
);
console.assert(
  consonants('aeiouy') === 0,
  'consonants: finnur engan samhljóða'
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert('Velkomin/n í strengjagreini. Sláðu inn streng til að fá upplýsingar.');

  const inputStr = prompt('Sláðu inn streng:');

  if (inputStr === null || inputStr === '') {
    alert('Enginn strengur var sleginn inn.');
    return;
  }

  const longestWord = longest(inputStr);
  const shortestWord = shortest(inputStr);
  const reversedStr = reverse(inputStr);
  const vowelCount = vowels(inputStr);
  const consonantCount = consonants(inputStr);
  const isPalindrome = palindrome(inputStr);

  alert(`
    Lengsta orð: ${longestWord}
    Stysta orð: ${shortestWord}
    Strengur í öfugri röð: ${reversedStr}
    Fjöldi sérhljóða: ${vowelCount}
    Fjöldi samhljóða: ${consonantCount}
    Er samhverfur (palindrome): ${isPalindrome ? 'Já' : 'Nei'}
  `);

  const again = confirm('Viltu prófa aftur?');
  if (again) {
    start();
  }
}
