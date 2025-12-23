export type Item = {
	id: number,
	name: string,
	price: number,
	url: string,
	brand?: string,
	description?: string,
	color?: string,
	notes?: string,
	room_name?: string,
	slug: string,
}

export type Room = {
	name: 'Bedroom'|'Kitchen'|'Living room'|'Bathroom'
}

export type View = 'list'|'module'|'quilt'