<script setup>	

	// === IMPORTS ===
	import { onMounted, reactive, ref } from 'vue'
	import ApiMessage from '@/components/api/ApiMessage.vue'
	
	// === ITEM HANDLER (for Users) ===
	import { useItemHandler } from '@/composables/useItemHandler.js'
	const {
		items: users, 
		displayItems: displayUsers,
		filterItems: filterUsers, 
		sortItems: sortUsers,
		deleteItem: deleteUser,
		toggleSortOrder
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

  // === DELETE MODAL ===
  let showModal = ref(false)
  let userIdToDelete = ref(null)


	// === EVENTS ===
  const confirmUserDeleteClick = async () => {
    await apiCall('post', 'users/delete', { userId: 777 })
    if(!apiError.value) deleteUser(userId)
    showModal.value = false
  }

	const handleUserDeleteClick = (userId) => {
    userIdToDelete.value = userId
    showModal.value = true
	}

  const handleUserRoleChange = async (event, userId) => {
    const roleId = +event.target.value
    await apiCall('patch', 'users/' + userId, { roleId })
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
				<td><button @click="handleUserDeleteClick(user.id)" class="delete">Delete</button></td>
			</tr>
		</tbody>
	</table>

  <div v-if="showModal" class="overlay">
    <div class="modal">
      <p style="color: white;">Are you sure you want to delete this user?</p>
      <p><button @click="confirmUserDeleteClick()">Yes</button></p>
    </div>
  </div>

</template>


