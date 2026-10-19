import type { Component } from "svelte"

export type ContactLinkType = {
	title: string,
	url: string,
	icon: Component,
	enabled: boolean,
	order: number,
	serviceUrl?: ServiceUrlType
}

export type ServiceUrlType = {
	title: string,
	url: string
}