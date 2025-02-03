<script setup>	

	// === IMPORTS ===
	import { onMounted, reactive, ref } from 'vue'
	import ApiMessage from '@/components/api/ApiMessage.vue'
  import Modal from '@/components/ui/Modal.vue'
	
	// === ITEM HANDLER (for Users) ===
	import { useItemHandler } from '@/composables/useItemHandler.js'
	const {
		items: users, 
		displayItems: displayUsers,
		filterItems: filterUsers, 
		sortItems: sortUsers,
		deleteItem: deleteUser,
		toggleSortOrder,
    updateItemProperty: updateUserProperty
	} = useItemHandler([])


	// === API CALL (GET Users & Roles) ===
	import { useApi } from '@/composables/useApi.js'
	const { apiCall, apiLoading, apiData, apiError, apiMessage, apiStatus } = useApi()
	
	const roles = ref([])
	const getUsers = async (id) => {
		try{
			await apiCall('get', 'users/')
			roles.value = apiData.value.roles
			users.value = apiData.value.users
		} catch(error){
			console.log(error)
		}
	}
	getUsers()

  // === MODAL FOR DELETE USER CONFIRMATION ===
  let showModal = ref(false)
  let userIdToDelete = ref(null)
  let usernameToDelete = ref(null)
  let modalMessage = ref('')


	// === EVENTS ===
  const handleGlobalClick = () => {
    if(showModal.value) showModal.value = false
  }

	const handleUserDeleteClick = (userId, username) => {
    userIdToDelete.value = userId
    usernameToDelete.value = username
    modalMessage.value = `Are you sure you want to delete ${usernameToDelete.value}?`
    showModal.value = true
	}

  const handleUserDeleteConfirmation = async (result) => {
    if(result){
      await apiCall('post', 'users/delete', { userId: userIdToDelete.value })
      if(!apiError.value) deleteUser(userIdToDelete.value)
      showModal.value = false
    }
  }

  const handleUserRoleChange = async (event, userId) => {
    const roleId = +event.target.value
    const roleTitle = event.target.options[event.target.selectedIndex].text
    await apiCall('patch', 'users/' + userId, { roleId })
    updateUserProperty(userId, 'role_id', roleId)
    updateUserProperty(userId, 'role_title', roleTitle)
  }

	const handleUsersFilterByRole = (event) => {
		const roleId = +event.target.value
		filterUsers('role_id', roleId)
	}

	const handleUsersSort = (key) => {
		sortUsers(key)
		toggleSortOrder()
	}

</script>



<template>
  <GlobalEvents @click="handleGlobalClick" />
	<h1>Users</h1>
	
	<select @change="handleUsersFilterByRole($event)">
		<option :value="null">All Roles</option>
		<option v-for="role in roles" :key="role.id" :value="role.id">{{ role.title }}</option>
	</select>

  <ApiMessage v-if="apiMessage" :message="apiMessage" :status="apiStatus" />

	<table>
		<thead>
			<tr class="head-clickable">
				<th @click="handleUsersSort('email')">Email</th>
				<th @click="handleUsersSort('username')">Username</th>
				<th @click="handleUsersSort('role_title')">Role</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="user in displayUsers">
				<td>{{ user.email }}</td>
				<td>{{ user.username }}</td>
				<td>
          <select v-model="user.role_id" @change="handleUserRoleChange($event, user.id)">
            <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.title }}</option>
          </select>
        </td>
				<td>
          <button 
            @click.stop="handleUserDeleteClick(user.id, user.username)" 
            class="delete"
          >Delete
          </button>
        </td>
			</tr>
		</tbody>
	</table>

  <Modal 
    v-if="showModal"
    @emitConfirmation="handleUserDeleteConfirmation"
    :message="modalMessage"
  />

</template>


