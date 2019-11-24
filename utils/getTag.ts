import { TagName, TagLabel } from '~/types/tags'

export default function getTag(name: TagName, tagList: TagLabel[]) {
  return (
    tagList.find((tag) => tag.name.toUpperCase() === name.toUpperCase()) || {
      name
    }
  )
}
