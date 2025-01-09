// composables/useSunEditor.js
import { ref, onMounted, onUnmounted } from 'vue'
import SunEditor from 'suneditor'
import 'suneditor/dist/css/suneditor.min.css'
import { formatBlock } from 'suneditor/src/plugins'

export function useEditor(editorId) {
  
  const editor = ref(null)

  onMounted(() => {
    editor.value = SunEditor.create(editorId, {
      height: '300px',
      buttonList: [
        ['formatBlock', 'align', 'list', 'lineHeight'],
        ['bold', 'underline', 'italic', 'strike', 'blockquote'],
        ['table', 'link', 'image', 'video', 'audio'],
        ['codeView']
      ],
      plugins: [formatBlock]
    })
  })

  onUnmounted(() => {
    if (editor.value) {
      editor.value.destroy()
      editor.value = null
    }
  })

  return { editor }
}
