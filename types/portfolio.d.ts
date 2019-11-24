export type SiteSlug = string
export type SiteTitle = string
export type SiteDescription = string
export type SiteURL = string
export type SiteSourceURL = string
export type SiteImage = any
export type SiteTech = string

export interface PortfolioSite {
  slug: SiteSlug
  title: SiteTitle,
  description: SiteDescription[]
  url?: SiteURL
  sourceUrl?: SiteSourceURL
  images: SiteImage[]
  tech?: SiteTech[]
}
