jQuery(function($){
	var textarea = document.getElementById("comment");

	if (!textarea) return;

	var tryTimes = 0;

	function getSmileySrc(smiley) {
		if (/\.([^.]+)$/.test(smiley)) {
			return MINTY.smileySettings.src_url + smiley;
		} else {
			return ''.concat(twemoji.base, twemoji.size, '/', twemoji.convert.toCodePoint(smiley), twemoji.ext);
		};
	};

	function loadSmilies(supportEmoji) {
		var smilies = MINTY.smileySettings.smilies;
		var html = "";
		var icon;

		for (var smily in smilies) {
			icon = smilies[smily];

			if (supportEmoji && icon.indexOf(".") == -1) {
				html += '<span class="emoji" alt="' + smily + '">' + icon + '</span>';
			} else {
				html += '<img class="emoji" draggable="false" src="' + getSmileySrc(icon) + '" alt="' + smily + '" />';				
			}
		};

		document.getElementById("comment-smilies").innerHTML = html;

		$("#comment-smilies .emoji").click(function() {
			var code = " " + this.alt + " ";

			if (document.selection) {
				textarea.focus();
				var rng = document.selection.createRange();
				rng.text = code;
			} else if (!isNaN(textarea.selectionStart)) {
				var selStart = textarea.selectionStart,
					selEnd = textarea.selectionEnd;
				textarea.value = textarea.value.substring(0, selStart) + code + textarea.value.substring(selEnd);
				textarea.selectionStart = textarea.selectionEnd = selStart + code.length;
			} else {
				textarea.value += code;
			};
			textarea.focus();
		});
	};

	(function twemojiReadyTest() {
		var supportEmoji = _wpemojiSettings.supports && _wpemojiSettings.supports.everything;

		if (typeof twemoji != "undefined" || supportEmoji) {
			loadSmilies(supportEmoji);
		} else if (tryTimes < 10) {
			tryTimes++;
			setTimeout(twemojiReadyTest, 500);
		};
	})();
});