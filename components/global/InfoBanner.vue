<template>
  <div class="px-4 py-3 border-l-4 border-blue-400 rounded-b shadow-1">
    <div class="flex">
      <div class="py-1">
        <svg
          class="w-6 h-6 mr-4 text-blue-400 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
          />
        </svg>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBanner',
}
</script>
