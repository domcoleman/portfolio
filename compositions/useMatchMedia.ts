import { ref, onMounted, onUnmounted } from '@vue/composition-api'

function useMatchMedia(mediaQuery: string, defaultValue = true) {
  let mediaQueryList: MediaQueryList
  const doesMatch = ref(defaultValue)

  const updateMediaMatches = function(e: MediaQueryListEvent | MediaQueryList) {
    doesMatch.value = e.matches
  }

  onMounted(function () {
    mediaQueryList = window.matchMedia(mediaQuery)
    mediaQueryList.addListener(updateMediaMatches)
    updateMediaMatches(mediaQueryList)
  })

  onUnmounted(function() {
    mediaQueryList.removeListener(updateMediaMatches)
  })

  return doesMatch
}

export default useMatchMedia
