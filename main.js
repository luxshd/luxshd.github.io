function formatTextToHTML(input) {
    const h2Text = ['Преимущества', 'Переваги', 'Комплектация:', 'Комплектація:'];
    const bText = ['Примечание:', 'Состав:', 'Способ применения:', 'Примітка:', 'Склад:', 'Спосіб застосування:'];

    const lines = input.split('\n');
    let result = [];
    let inList = false;
    let listItems = [];

    for (let rawLine of lines) {
        const line = rawLine.trim();
        if (line.length === 0) continue;

        // Начало списка
        if (line === '/*') {
            inList = true;
            listItems = [];
            continue;
        }

        // Конец списка
        if (line === '*/') {
            inList = false;
            const listHTML = '<ul>\n' + listItems.map(item => `<li>${item}</li>`).join('\n') + '\n</ul>';
            result.push(listHTML);
            continue;
        }

        if (inList) {
            listItems.push(line);
            continue;
        }

        // Проверка на заголовки
        const h2Match = h2Text.find(h => line.includes(h));
        if (h2Match) {
            result.push(`<h2>${h2Match}</h2>`);
            continue;
        }

        // Проверка на жирные слова
        let boldLine = line;
        bText.forEach(word => {
            const escaped = word.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
            const regex = new RegExp(escaped, 'g');
            boldLine = boldLine.replace(regex, `<b>${word}</b>`);
        });

        result.push(`<p>${boldLine}</p>`);
    }

    return result.join('\n');
}

function processText() {
    const input = document.getElementById('inputText').value;
    const outputHTML = formatTextToHTML(input);
    document.getElementById('output').innerText = outputHTML;
}
