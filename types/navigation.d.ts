import { RawLocation } from 'vue-router/types'

export type NavigationLinkName = string
export type NavigationLinkURL = RawLocation | null
export type NavigationLinkDisplay = string | null

export interface NavigationLinkTagProps {
  target?: string
  rel?: string
  exact?: boolean
}

export interface NavigationLink {
  name: NavigationLinkName
  link?: NavigationLinkURL
  display?: NavigationLinkDisplay
  tagProps?: NavigationLinkTagProps
  style?: {
    [key: string]: number
  }
}
