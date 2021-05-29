import { hasBadWord, LANGUAGE } from '../index';

test('should not be bad words', () => {
  expect(hasBadWord('Привет', LANGUAGE.RUSSIAN)).toBe(false)
  expect(hasBadWord('Hello how it goes', LANGUAGE.ENGLISH)).toBe(false)
  expect(hasBadWord('asdoifjasoi', LANGUAGE.ENGLISH)).toBe(false)
  expect(hasBadWord('асдиофйасиодфй', LANGUAGE.RUSSIAN)).toBe(false)
  expect(hasBadWord('Как дела?', LANGUAGE.RUSSIAN)).toBe(false)
});

test('should be bad words', () => {
  expect(hasBadWord('Привет гондон!', LANGUAGE.RUSSIAN)).toBe(true)
  expect(hasBadWord('    чтобы ты здох   ', LANGUAGE.RUSSIAN)).toBe(true)
  expect(hasBadWord('fuck you', LANGUAGE.ENGLISH)).toBe(true)
  expect(hasBadWord('asshole', LANGUAGE.ENGLISH)).toBe(true)
  expect(hasBadWord('bastard', LANGUAGE.ENGLISH)).toBe(true)
});