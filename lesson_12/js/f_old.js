createTotalUnit: function(name, value, params)
{
	var totalValue, className = 'order-make__discount cart-results__price-container';

	name = name || '';
	value = value || '';
	params = params || {};

	if (params.error)
	{
		totalValue = [BX.create('A', {
			props: {className: 'bx-soa-price-not-calc'},
			html: value,
			events: {
				click: BX.delegate(function(){
					this.animateScrollTo(this.deliveryBlockNode);
				}, this)
			}
		})];
	}
	else if (params.free)
	{
		totalValue = [BX.create('SPAN', {
			props: {className: 'bx-soa-price-free'},
			html: value
		})];
	}
	else
	{
		totalValue = [value];
	}

	if (params.total)
	{
		className = 'order-make__summ cart-results__price-container';
	}

	if (params.highlighted)
	{
		className += ' bx-soa-cart-total-line-highlighted';
	}

	return BX.create('DIV', {
		props: {className: className},
		children: [
			BX.create('SPAN', {props: {className: 'bx-soa-cart-t cart-results__price-title'}, text: name}),
			BX.create('SPAN', {
				props: {
					className: 'bx-soa-cart-d cart-results__price' + (params.total ? ' order-make__summ-price' : '')
				},
				children: totalValue
			})
		]
	});
},