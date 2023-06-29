<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Pagination } from 'flowbite-vue'
import { BASE_URL } from '../api'

const laravelData = ref({})
const cobaData = ref()
const currentPage = ref()

const getResults = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/products?page=${page}`)
  laravelData.value = await response.json()
}

getResults()

const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`)
    console.log(response.data)
    laravelData.value = response.data
    cobaData.value = response.data.links.length
    console.log(cobaData.value)
    currentPage.value = response.data.current_page
    console.log(currentPage.value)
  } catch (error) {
    console.log(error)
  }
}

onMounted(fetchProducts())
</script>

<template>
  <div>
    <h1>Welcome</h1>
    <!-- Flowbite-Vue Pagination component -->
    <Pagination
      v-model="currentPage"
      :total-pages="20"
      :per-page="2"
      :slice-length="2"
      :layout="'text-white text-lg'"
      :next-label="'Berikutnya'"
      :previous-label="'Sebelumnnya'"
      show-icons
    ></Pagination>
  </div>
</template>
