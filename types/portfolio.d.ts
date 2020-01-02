export type SiteSlug = string
export type SiteTitle = string
export type SiteDescription = string
export type SiteSourceURL = string
export type SiteImage = any
export type SiteTech = string
export type SiteLinkType = string
export type SiteLinkURL = string

export interface SiteLink {
  linkType: SiteLinkType
  linkUrl: SiteLinkURL
}

export interface PortfolioSite {
  slug: SiteSlug
  title: SiteTitle
  description: SiteDescription[]
  images: SiteImage[]
  tech?: SiteTech[]
  links?: SiteLink[]
}
