<script setup>	

	// === IMPORTS ===
	import { onMounted, reactive, ref } from 'vue'
	
	// === ITEM HANDLER (for Users) ===
	import { useItemHandler } from '@/composables/useItemHandler.js'
	//const { items, displayItems, filterItems, sortItems, deleteItem, toggleSortOrder } = useItemHandler([])
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
	const { apiCall, apiLoading, apiData, apiError } = useApi()
	
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


	// === EVENTS ===
	const handleUserDeleteClick = async (userId) => {
		await apiCall('post', 'users/delete', { userId })
		deleteUser(userId)
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

	<div v-if="apiError" style="background: crimson;, color: white; height: 50px; padding: 1rem;">
		{{ apiError.response.data.message }}
	</div>
	<h1>Users</h1>
	
	<select @change="handleUsersFilterByRole($event)">
		<option :value="null">All Roles</option>
		<option v-for="role in roles" :key="role.id" :value="role.id">{{ role.title }}</option>
	</select>

	<table>
		<thead>
			<tr>
				<th @click="handleUsersSort('email')">Email</th>
				<th @click="handleUsersSort('username')">Username</th>
				<th @click="handleUsersSort('role_title')">Role</th>
				<th>Edit</th>
				<th>Delete</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="user in displayUsers">
				<td>{{ user.email }}</td>
				<td>{{ user.username }}</td>
				<td>{{ user.role_title }}</td>
				<td><button @click="editUserRole">Edit</button></td>
				<td><button @click="handleUserDeleteClick(user.id)">Delete</button></td>
			</tr>
		</tbody>
	</table>

</template>


