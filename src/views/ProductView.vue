<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { BASE_URL } from '../api'
import { TailwindPagination } from 'laravel-vue-pagination'

import {
  Table,
  TableHead,
  TableBody,
  TableHeadCell,
  TableRow,
  TableCell,
  Pagination
} from 'flowbite-vue'

import {
  PlusIcon,
  DocumentIcon,
  PencilIcon,
  TrashIcon,
  ArrowPathIcon
} from '@heroicons/vue/24/outline'

const laravelData = ref({})
const currentPage = ref(1)
const totalPages = null
const products = ref({})

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
  } catch (error) {
    console.log(error)
  }
}

onMounted(fetchProducts())
// // import { useToast } from "vue-toastification";
// import {
//   PlusIcon,
//   DocumentIcon,
//   PencilIcon,
//   TrashIcon,
//   ArrowPathIcon
// } from '@heroicons/vue/24/outline'

// export default {
//   components: {
//     CreateProduct,
//     ButtonComponent,
//     PlusIcon,
//     TrashIcon,
//     ArrowPathIcon,
//     PencilIcon,
//     DocumentIcon
//   },

//   setup() {
//     // const toast = useToast();
//     const products = ref([])

//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/products`)
//         // Display all data
//         products.value = response.data
//         // Display data by range
//         // products.value = response.data.slice(0, 11);
//         console.log(products.value)
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     const refreshProducts = () => {
//       products.value = []
//       console.log(products.value)
//       setTimeout(fetchProducts, 100) // Delayed call to fetchProducts
//     }

//     onMounted(() => {
//       // Initial fetch
//       fetchProducts()
//     })

//     const createModal = ref(false)

//     const openCreateModal = () => {
//       createModal.value = !createModal.value
//       console.log(createModal.value)
//     }

//     const closeCreateModal = () => {
//       createModal.value = false
//     }

//     // Format price with dot as thousand separator and comma as decimal separator
//     const formatPrice = (price) => {
//       const formattedPrice = parseFloat(price).toFixed(2)
//       const parts = formattedPrice.split('.')
//       const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
//       const decimalPart = parts[1]
//       return `${integerPart},${decimalPart}`
//     }

//     return {
//       products,
//       formatPrice,
//       refreshProducts,
//       createModal,
//       openCreateModal,
//       closeCreateModal
//     }
//   }
// }
//   setup() {
//     const toast = useToast();
//     const products = ref([]);
//     const product = reactive({
//       name: "",
//       category: "",
//       price: "",
//     });

//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/products`);
//         products.value = response.data;
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     onMounted(fetchProducts);

//     return {
//       products,
//     };
//   },
// };

// const toast = useToast();
// const products = ref([]);
// const product = reactive({
//   name: "",
//   category: "",
//   price: "",
// });

// const fetchProducts = async () => {
//   axios
//     .get(`${BASE_URL}/products`)
//     .then((response) => {
//       products.value = response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const fetchProduct = async (id) => {
//   axios
//     .get(`${BASE_URL}/products/${id}`)
//     .then((response) => {
//       product.name = response.data.name;
//       product.category = response.data.category;
//       product.price = response.data.price;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const resetForm = () => {
//   product.name = "";
//   product.category = "";
//   product.price = "";
// };

// const createProduct = async () => {
//   let { name, category, price } = product;
//   axios
//     .post(`${BASE_URL}/products`, {
//       name: name,
//       category: category,
//       price: price,
//     })
//     .then(() => {
//       fetchProducts();
//       resetForm();
//       showNotification();
//     })
//     .catch((error) => {
//       console.log.apply(error);
//     });
// };

// onMounted(fetchProducts);

// const showNotification = () => {
//   toast.success("I'm a toast!");
// };
//

// import Button from "../components/ButtonComponent.vue";

// export default {
//   Button,
// };
//
</script>

<template>
  <div class="text-sm rounded-lg border-gray-300 dark:border-gray-600 h-full">
    <div class="w-full p-4">
      <!-- Start coding here -->
      <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div
          class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
        >
          <div class="w-full md:w-1/2">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="SKU / Item Name"
                  required=""
                />
              </div>
            </form>
          </div>
          <div
            class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
          >
            <ButtonComponent @click.prevent="openCreateModal" variant="primary" class="gap-2">
              <!-- Menambahakan icon pada button -->
              <span><PlusIcon class="w-5 h-5 text-white font-bold" /></span>
              Add Product</ButtonComponent
            >
            <ButtonComponent @click="refreshProducts" variant="primary" class="gap-2">
              <!-- Menambahakan icon pada button -->
              <span><ArrowPathIcon class="w-5 h-5 text-white font-bold" /></span>
              Refresh</ButtonComponent
            >
            <div class="flex items-center space-x-3 w-full md:w-auto">
              <button
                id="actionsDropdownButton"
                data-dropdown-toggle="actionsDropdown"
                class="w-full md:w-auto flex items-center justify-center py-2 px-4 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                <svg
                  class="-ml-1 mr-1.5 w-5 h-5"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
                Actions
              </button>
              <div
                id="actionsDropdown"
                class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-1 text-gray-700 dark:text-gray-200"
                  aria-labelledby="actionsDropdownButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Mass Edit</a
                    >
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    href="#"
                    class="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >Delete all</a
                  >
                </div>
              </div>
              <button
                id="filterDropdownButton"
                data-dropdown-toggle="filterDropdown"
                class="w-full md:w-auto flex items-center justify-center py-2 px-4 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="h-4 w-4 mr-2 text-gray-400"
                  viewbox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clip-rule="evenodd"
                  />
                </svg>
                Filter
                <svg
                  class="-mr-1 ml-1.5 w-5 h-5"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
              </button>
              <div
                id="filterDropdown"
                class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
              >
                <h6 class="mb-3 font-medium text-gray-900 dark:text-white">Choose brand</h6>
                <ul class="space-y-2" aria-labelledby="filterDropdownButton">
                  <li class="flex items-center">
                    <input
                      id="apple"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label for="apple" class="ml-2 font-medium text-gray-900 dark:text-gray-100"
                      >Apple (56)</label
                    >
                  </li>
                  <li class="flex items-center">
                    <input
                      id="fitbit"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label for="fitbit" class="ml-2 font-medium text-gray-900 dark:text-gray-100"
                      >Microsoft (16)</label
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full h-full text-left text-gray-500 dark:text-gray-400">
            <thead class="text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr class="text-center">
                <th scope="col" class="px-4 py-3">SKU</th>
                <th scope="col" class="px-4 py-3">Nama Barang</th>
                <th scope="col" class="px-4 py-3">Category</th>
                <th scope="col" class="px-4 py-3">Price</th>
                <th scope="col" class="px-4 py-3 w-16">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-if="laravelData.data.length === 0"
                class="border-b text-center dark:border-gray-700"
              >
                <td colspan="8" class="h-16 text-center">
                  <div class="flex items-center justify-center">
                    <svg
                      aria-hidden="true"
                      class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr
                v-for="product in laravelData.data"
                :key="product.id"
                key="index"
                class="overflow-y-auto"
                :class="[
                  'hover:bg-gray-100 dark:hover:bg-gray-600'
                  // Tenary condition to set different table data background
                  // index % 2 === 0 ? '' : 'bg-gray-100 dark:bg-gray-700',
                ]"
              >
                <th
                  scope="row"
                  class="px-6 py-1 text-center border border-l-0 dark:border-gray-700 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ product.id }}
                </th>
                <td class="px-4 py-1 border dark:border-gray-700">
                  {{ product.name }}
                </td>
                <td class="px-4 py-1 border dark:border-gray-700 text-center">
                  {{ product.category }}
                </td>
                <td class="px-4 py-1 border dark:border-gray-700 text-right">
                  {{ product.price }}
                </td>
                <td class="px-4 py-1 border border-r-0 dark:border-gray-700">
                  <div class="flex justify-between gap-2">
                    <div>
                      <DocumentIcon
                        class="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-500"
                      />
                      <span class="sr-only">View</span>
                    </div>
                    <div>
                      <PencilIcon
                        class="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
                      />
                      <span class="sr-only">Edit</span>
                    </div>
                    <div>
                      <TrashIcon
                        class="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500"
                      />
                      <span class="sr-only">Delete</span>
                    </div>
                  </div>
                  <!-- <button
                      id="apple-imac-27-dropdown-button"
                      data-dropdown-toggle="apple-imac-27-dropdown"
                      class="inline-flex items-center p-0.5 font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                        />
                      </svg>
                    </button> -->
                  <div
                    id="apple-imac-27-dropdown"
                    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-1 text-gray-700 dark:text-gray-200"
                      aria-labelledby="apple-imac-27-dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Show</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Edit</a
                        >
                      </li>
                    </ul>
                    <div class="py-1">
                      <a
                        href="#"
                        class="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >Delete</a
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <Table hoverable>
            <table-head>
              <table-head-cell>Product name</table-head-cell>
              <table-head-cell>Color</table-head-cell>
              <table-head-cell>Category</table-head-cell>
              <table-head-cell>Price</table-head-cell>
              <table-head-cell><span class="sr-only">Edit</span></table-head-cell>
            </table-head>
            <table-body>
              <table-row>
                <table-cell>Apple MacBook Pro 17"</table-cell>
                <table-cell>Sliver</table-cell>
                <table-cell>Laptop</table-cell>
                <table-cell>$2999</table-cell>
                <table-cell>
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >Edit</a
                  >
                </table-cell>
              </table-row>
              <table-row>
                <table-cell>Microsoft Surface Pro</table-cell>
                <table-cell>White</table-cell>
                <table-cell>Laptop PC</table-cell>
                <table-cell>$1999</table-cell>
                <table-cell>
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >Edit</a
                  >
                </table-cell>
              </table-row>
              <table-row>
                <table-cell>Magic Mouse 2</table-cell>
                <table-cell>Black</table-cell>
                <table-cell>Accessories</table-cell>
                <table-cell>$99</table-cell>
                <table-cell>
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >Edit</a
                  >
                </table-cell>
              </table-row>
            </table-body>
          </Table>
          <Pagination
            v-model="currentPage"
            :total-pages="laravelData.last_page"
            show-icons
          ></Pagination>
        </div>
        <nav
          class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
          aria-label="Table navigation"
        >
          <span class="font-normal text-gray-500 dark:text-gray-400">
            Showing
            <span class="font-semibold text-gray-900 dark:text-white"
              >{{ laravelData.from }} - {{ laravelData.to }}</span
            >
            of
            <span class="font-semibold text-gray-900 dark:text-white">{{ laravelData.total }}</span>
          </span>
          <ul class="inline-flex items-stretch -space-x-px">
            <TailwindPagination
              :limit="1"
              :keepLength="true"
              :data="laravelData"
              @pagination-change-page="getResults"
              class="bg-sky-500 rounded-md"
              :itemClasses="'bg-white dark:bg-gray-700'"
            />
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <!-- Create Drawer -->
  <CreateProduct v-show="createModal" @closeCreateModal="closeCreateModal" />
  <!-- Update modal -->
  <div
    id="updateProductModal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <!-- Modal header -->
        <div
          class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Update Product</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="updateProductModal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form action="#">
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label for="name" class="block mb-2 font-medium text-gray-900 dark:text-white"
                >Name</label
              >
              <input
                type="text"
                name="name"
                id="name"
                value="iPad Air Gen 5th Wi-Fi"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Ex. Apple iMac 27&ldquo;"
              />
            </div>
            <div>
              <label for="brand" class="block mb-2 font-medium text-gray-900 dark:text-white"
                >Brand</label
              >
              <input
                type="text"
                name="brand"
                id="brand"
                value="Google"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Ex. Apple"
              />
            </div>
            <div>
              <label for="price" class="block mb-2 font-medium text-gray-900 dark:text-white"
                >Price</label
              >
              <input
                type="number"
                value="399"
                name="price"
                id="price"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$299"
              />
            </div>
            <div>
              <label for="category" class="block mb-2 font-medium text-gray-900 dark:text-white"
                >Category</label
              ><select
                id="category"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected="">Electronics</option>
                <option value="TV">TV/Monitors</option>
                <option value="PC">PC</option>
                <option value="GA">Gaming/Console</option>
                <option value="PH">Phones</option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label for="description" class="block mb-2 font-medium text-gray-900 dark:text-white"
                >Description</label
              ><textarea
                id="description"
                rows="5"
                class="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write a description..."
              >
  Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea
              >
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button
              type="submit"
              class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Update product
            </button>
            <button
              type="button"
              class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              <svg
                class="mr-1 -ml-1 w-5 h-5"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Read modal -->
  <div
    id="readProductModal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-xl max-h-full">
      <!-- Modal content -->
      <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <!-- Modal header -->
        <div class="flex justify-between mb-4 rounded-t sm:mb-5">
          <div class="text-lg text-gray-900 md:text-xl dark:text-white">
            <h3 class="font-semibold">Apple iMac 27”</h3>
            <p class="font-bold">$2999</p>
          </div>
          <div>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="readProductModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
        </div>
        <dl>
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
          <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
            Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to
            5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD
            storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
          </dd>
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Category</dt>
          <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Electronics/PC</dd>
        </dl>
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-3 sm:space-x-4">
            <button
              type="button"
              class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                aria-hidden="true"
                class="mr-1 -ml-1 w-5 h-5"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"
                />
              </svg>
              Edit
            </button>
            <button
              type="button"
              class="py-2.5 px-5 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Preview
            </button>
          </div>
          <button
            type="button"
            class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 mr-1.5 -ml-1"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Delete modal -->
  <div
    id="deleteModal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <button
          type="button"
          class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="deleteModal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewbox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <svg
          class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
          aria-hidden="true"
          fill="currentColor"
          viewbox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <p class="mb-4 text-gray-500 dark:text-gray-300">
          Are you sure you want to delete this item?
        </p>
        <div class="flex justify-center items-center space-x-4">
          <button
            data-modal-toggle="deleteModal"
            type="button"
            class="py-2 px-3 font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            No, cancel
          </button>
          <button
            type="submit"
            class="py-2 px-3 font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Yes, I'm sure
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
