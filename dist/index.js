"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportedLanguages = exports.hasBadWord = exports.isEnglish = exports.isRussian = void 0;
const eng_1 = require("./dict/eng");
const rus_1 = require("./dict/rus");
const isRussian = (text) => /[\wа-я]+/ig.test(text);
exports.isRussian = isRussian;
const isEnglish = (text) => /^[a-zA-Z]+$/.test(text);
exports.isEnglish = isEnglish;
const detectBadLang = (text, dictionaryOfBadWords) => {
    return text.split(' ').some((word) => {
        const _word = word.toLowerCase().trim();
        const dictionary = dictionaryOfBadWords();
        return dictionary.some((badword) => badword.startsWith(_word) || badword.endsWith(_word));
    });
};
const hasRussianBadWord = (text) => {
    return detectBadLang(text, rus_1.russianDictionaryOfBadWords);
};
const hasEnglishBadWord = (text) => {
    return detectBadLang(text, eng_1.englishDictionaryOfBadWords);
};
const hasBadWord = (text) => {
    if (!text) {
        throw `Invalid argument should be at least 1 character in ${exports.supportedLanguages().join(' or ')} Language`;
    }
    if (exports.isRussian(text)) {
        return hasRussianBadWord(text);
    }
    if (exports.isEnglish(text)) {
        return hasEnglishBadWord(text);
    }
    throw 'Language is not supported use `supportedLanguages()` to get all supported languages';
};
exports.hasBadWord = hasBadWord;
const supportedLanguages = () => ['Russian', 'English'];
exports.supportedLanguages = supportedLanguages;
exports.default = exports.hasBadWord;
//# sourceMappingURL=index.js.map