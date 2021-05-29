# Detect bad language for Russian and English

### How to use?

`import { hasBadWord, LANGUAGE } from 'badwords'`

## ENGLISH
`hasBadWord('badword', LANGUAGE.ENGLISH)`

## RUSSIAN
`hasBadWord('плохоеслово', LANGUAGE.RUSSIAN)`

## Functions
`detectBadLang(text: string: dictionary: string[])`

`hasRussianBadWord(text: string)`

`hasEnglishBadWord(text: string)`

`hasBadWord(text: string, lang: LANGUAGE)`

## Enums
```
export enum LANGUAGE {
  ENGLISH = 'ENGLISH',
  RUSSIAN = 'RUSSIAN',
}
```