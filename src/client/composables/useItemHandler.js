import { ref, computed } from 'vue'

export function useItemHandler(initialItems = []) {
  const items = ref(initialItems)
  const sortKey = ref('id')
  const sortOrder = ref('asc')
  const filterProperty = ref('')
  const filterValue = ref('')

  const filteredItems = computed(() => {
    if (!filterProperty.value || !filterValue.value) {
      return items.value
    }
    return items.value.filter(item => item[filterProperty.value] === filterValue.value)
  })

  const displayItems = computed(() => {
    return [...filteredItems.value].sort((a, b) => {
      if (a[sortKey.value] < b[sortKey.value]) return sortOrder.value === 'asc' ? -1 : 1
      if (a[sortKey.value] > b[sortKey.value]) return sortOrder.value === 'asc' ? 1 : -1
      return 0
    })
  })

  function addItem(item) {
    items.value.push(item)
  }

  function deleteItem(id) {
    const index = items.value.findIndex(item => item.id === id)
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  function filterItems(property, value) {
    filterProperty.value = property
    filterValue.value = value
  }

  function sortItems(key) {
    sortKey.value = key
  }

  function toggleSortOrder() {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  }

  return {
    items,
    displayItems,
    addItem,
    deleteItem,
    filterItems,
    sortItems,
    toggleSortOrder
  }
}
