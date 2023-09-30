export const cardAddapter = (card, lang) => {
    const wordSelected = card.languages.find(
        (items) => items.language_id === lang,
    ).word;
    const cardAddapted = {
        ...card,
        word: wordSelected
    }
    delete cardAddapted.languages
    return cardAddapted;
};
