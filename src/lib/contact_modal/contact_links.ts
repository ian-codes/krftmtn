import type { ContactLinkType } from './contact_link.type';
import EmailIcon from './icons/email_icon.svelte';
import SignalIcon from './icons/signal_icon.svelte';
import SimplexIcon from './icons/simplex_icon.svelte';
import TelegramIcon from './icons/telegram_icon.svelte';
import VideoCallIcon from './icons/video_call_icon.svelte';
import WhatsAppIcon from './icons/whats_app_icon.svelte';
import WhitenoiseIcon from './icons/whitenoise_icon.svelte';
import XmppIcon from './icons/xmpp_icon.svelte';

export const CONTACT_LINKS: ContactLinkType[] = [
	{
		title: 'WhatsApp',
		url: '/',
		icon: WhatsAppIcon,
		enabled: true,
		order: 1
	},
	{
		title: 'Email',
		url: '/',
		icon: EmailIcon,
		enabled: true,
		order: 2,
		serviceUrl: {
			title: 'PGP public key',
			url: '/'
		}
	},
	{
		title: 'Schedule a call',
		url: '/',
		icon: VideoCallIcon,
		enabled: true,
		order: 3
	},
	{
		title: 'Telegram',
		url: '/',
		icon: TelegramIcon,
		enabled: true,
		order: 4
	},
	{
		title: 'Signal',
		url: '/',
		icon: SignalIcon,
		enabled: true,
		order: 5,
		serviceUrl: {
			title: 'signal.org',
			url: 'https://signal.org/download/'
		}
	},

	{
		title: 'SimpleX',
		url: '/',
		icon: SimplexIcon,
		enabled: true,
		order: 6,
		serviceUrl: {
			title: 'simplex.chat',
			url: 'https://simplex.chat'
		}
	},
	{
		title: 'XMPP',
		url: '/',
		icon: XmppIcon,
		enabled: true,
		order: 7,
		serviceUrl: {
			title: 'xmpp.org',
			url: 'https://xmpp.org/getting-started/'
		}
	},
	{
		title: 'White Noise',
		url: '/',
		icon: WhitenoiseIcon,
		enabled: true,
		order: 8,
		serviceUrl: {
			title: 'whitenoise.chat',
			url: 'https://www.whitenoise.chat'
		}
	}
];
