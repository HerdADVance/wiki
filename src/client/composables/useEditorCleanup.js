import { onUnmounted } from 'vue'

export function useEditorCleanup(getEditorInstance) {
  onUnmounted(() => {
    const editor = getEditorInstance()
    if (editor && typeof editor.destroy === 'function') {
      editor.destroy()
    }
  })
}
