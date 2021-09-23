export default interface IContact {
  text: string
  gender: 'female' | 'male'
  name: string
  number: string
  messenger: 'viber' | 'telegram'
  date: string
  isRead: boolean
  id: number
}
