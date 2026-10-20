export type ServiceType = {
	name: string;
	tags: ServiceTagType[];
};

export const serviceTags = [
	'Creative',
	'Technical',
	'Shopify',
	'Business',
	'Consulting',
	'Marketing',
	'AI',
	'Automation',
	'Website',
	'Ecommerce',
	'CRM',
	'Development'
];

export type ServiceTagType = (typeof serviceTags)[number]

export const services: ServiceType[] = [
	{
		name: 'Product/offer development & ideation',
		tags: ['Consulting', 'Business', 'Creative']
	},
	{
		name: 'Skool community development & management',
		tags: ['Creative', 'Business']
	},
	{
		name: 'Copywriting',
		tags: ['Creative', 'Marketing']
	},
	{
		name: 'Ad creatives',
		tags: ['Marketing', 'Creative']
	},
	{
		name: 'Paid media',
		tags: ['Marketing', 'Business']
	},
	{
		name: 'Email marketing',
		tags: ['Marketing', 'Automation', 'Creative']
	},
	{
		name: 'Shopify development & optimization',
		tags: ['Technical', 'Shopify', 'Ecommerce', 'Creative']
	},
	{
		name: 'Ecommerce',
		tags: ['Ecommerce', 'Technical', 'Creative', 'Business']
	},
	{
		name: 'Web development',
		tags: [
			'Technical',
			'Development',
			'Creative',
			'Website'
		]
	},
	{
		name: 'HighLevel CRM services',
		tags: ['CRM', 'Automation', 'Business', 'Technical']
	},
	{
		name: 'CRM integrations & automations',
		tags: [
			'CRM',
			'Automation',
			'Technical',
			'Business',
			'Consulting'
		]
	},
	{
		name: 'AI chat bots',
		tags: ['AI', 'Automation', 'Technical']
	},
	{
		name: 'AI customer support',
		tags: ['AI', 'Business', 'Website', 'Technical']
	},
	{
		name: 'AI automations',
		tags: ['AI', 'Automation', 'Technical']
	},
	{
		name: 'n8n workflows',
		tags: ['Automation', 'Technical', 'AI', 'CRM']
	},
	{
		name: 'Zapier workflows',
		tags: ['Automation', 'Technical', 'AI', 'CRM']
	}
];
