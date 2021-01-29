export type Prod = {
    name: string,
    type: string,
    opened: object,
    expiresIn: number,
    icon: string,
    photo: string,
    id: string
}

export enum KeyNames {
    Name = "name",
    Type = "type",
    Opened = "opened",
    ExpiresIn = 'expiresIn',
    Icon = "icon",
    Photo = "photo",
    Id = "id"
}