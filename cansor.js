window.onload = function ()
{
	let cansorOptions = {
		css: `
		.cansor
		{
			-webkit-filter: blur(5px);
			-moz-filter: blur(5px);
			-o-filter: blur(5px);
			-ms-filter: blur(5px);
			filter: blur(5px);
		}
		.cansor:hover
		{
			-webkit-filter: none;
			-moz-filter: none;
			-o-filter: none;
			-ms-filter: none;
			filter: none;
		}`,
		list: [
		'item 1',
		'item 2'
		]

	};

	let head = document.querySelector('head');
	let elements = document.querySelectorAll('body *');
	
	let style = document.createElement('style');
	style.setAttribute('type', 'text/css');
	style.appendChild(document.createTextNode(cansorOptions.css));
	head.appendChild(style);


	elements.forEach((element, elementIndex) => {
        
		cansorOptions.list.forEach((cansorItem) => {

            let match = new RegExp(cansorItem, 'ig');
            element.innerHTML = element.innerHTML.replace(match, '<cansored class="cansor">$&</cansored>');
		});
	});
};