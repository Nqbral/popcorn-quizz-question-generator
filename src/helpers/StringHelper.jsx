export function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function themeToString(theme) {
    switch (theme) {
        case 'anime':
            return 'Anime';
        case 'movie':
            return 'Film';
        case 'serie':
            return 'Série';
        default:
            console.error(`themeToString : ${theme} not handled`);
            return '';
    }
}
export function typeQuestionToString(type) {
    switch (type) {
        case 'emoji':
            return 'Émojis';
        case 'image':
            return 'Image';
        case 'music':
            return 'Musique';
        default:
            console.error(`typeQuestionToString : ${type} not handled`);
            return '';
    }
}
