import 'bootstrap';
import $ from 'jquery';

import '@fontsource/montserrat';
import '/scss/style.scss';

$(() => {
	$('button.hamburger').on('click', async function() {
		$(this).toggleClass('is-active');
		const collapsibleID = $(this).attr('data-bs-target');
		const collapsible = $(collapsibleID);
		while (collapsible.hasClass('collapsing')) await new Promise(r => setTimeout(r, 500));
		const shown = collapsible.hasClass('show');
		if (shown)
			$(this).addClass('is-active');
		else
			$(this).removeClass('is-active');
	});
});