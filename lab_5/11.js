var parser = new EasySax();
// если требуется пространство имен
parser.ns('rss', {
	'http://www.w3.org/2005/Atom': 'atom',
	'http://www.w3.org/1999/xhtml': 'xhtml',

	'http://search.yahoo.com/mrss/': 'media',
	'http://purl.org/rss/1.0/': 'rss',
	'http://purl.org/dc/elements/1.1/': 'dc',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#' : 'rdf',
	'http://purl.org/rss/1.0/modules/content/': 'content',
	'http://www.yandex.ru': 'yandex',
	'http://news.yandex.ru': 'yandex',
	'http://backend.userland.com/rss2': 'rss'

});
parser.on('error', function(msg) {
	// console.log('error - ' + msg);
});
parser.on('startNode', function(elementName, getAttr, isTagEnd, getStringNode) {
	// elementName -- (string) название элемента. при указании пространства имен, то автоматически подставляется префикс
	// getAttr() -- (function) парсит атрибуты и возврашает обьект.
	// isTagEnd -- (boolean) флаг что элемент пустой "<elem/>"
	// getStringNode() -- (function) возвращает нераспарсенная строка элемента. Пример: <item title="text" id="x345">
});
parser.on('endNode', function(elementName, isTagStart, getStringNode) {
	// isTagStart -- (boolean) флаг что элемент пустой "<elem/>"
});
parser.on('textNode', function(text) {
	// text -- (String) строка текста
});
parser.on('cdata', function(text) {
    // text -- (String) строка текста элемента CDATA
});
parser.on('comment', function(text) {
	// text - (String) текст комментария
});
//parser.on('question', function() {}); // <? ... ?>
//parser.on('attention', function() {}); // <!XXXXX zzzz="eeee">
parser.parse(xml); // xml -- (String) строка xml