import stringSimilarity from 'string-similarity';
import franc from 'franc';
import {
	englishDictionaryOfBadWords
} from './dict/eng'
import {
	russianDictionaryOfBadWords
} from './dict/rus'

const detectBadLang = (text: string, dictionary: string[]) => {
	return text.split(' ').some((word: string) => dictionary.includes(
		word.toLowerCase().trim().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
	))
}

const hasRussianBadWord = (text: string): boolean => {
	return detectBadLang(text, russianDictionaryOfBadWords)
}

const hasEnglishBadWord = (text: string): boolean => {
	return detectBadLang(text, englishDictionaryOfBadWords)
}

export enum LANGUAGE {
	ENGLISH = 'ENGLISH',
	RUSSIAN = 'RUSSIAN',
}

export const hasBadWord = (text: string, lang: LANGUAGE) => {
	if (!text) {
		throw `Invalid argument should be at least 1 character`
	}

	if(!lang) {
		throw `Second Parametr language is Required ('ENGLISH' or 'RUSSIAN')`
	}

	switch(lang) {
		case LANGUAGE.RUSSIAN: 
			return hasRussianBadWord(text)
		case LANGUAGE.ENGLISH: 
			return hasEnglishBadWord(text)
		default: 
			throw 'Language is not supported'
	}
}

export default hasBadWord;