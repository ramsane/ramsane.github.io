<template>
  <div
    class="bg-card group transition-all duration-200 hover:shadow-md active:shadow-xs flex flex-col"
  >
    <!-- category title -->
    <div class="text-xl text-gray-500 pl-1 font-novaround">
      <g-link
        class="transition duration-200 border-above inline-block hover:text-primary-500 focus:text-primary-500"
        :to="article.category.path"
      >
        {{ article.category.title }}
      </g-link>
    </div>
    <!-- blog image -->
    <g-link
      :to="article.path"
      class="transition-all duration-200 
    block shadow-xs group-hover:shadow-xl focus:shadow-xl"
    >
      <g-image
        :src="article.image"
        class="mt-2 h-full w-full object-cover rounded-t-md"
      />
    </g-link>
    <!-- title, date and author -->
    <g-link
      :to="article.path"
      class="text-default block font-novaflat text-2xl leading-7 mt-4 hover:text-primary-500 focus:text-primary-500"
    >
      {{ article.title }}
    </g-link>
    <div class="text-xs font-roboto text-secondary">
      on <span class="font-semibold">{{ article.date }} </span> by
      <span class="font-semibold">{{ article.author.title }}</span>
    </div>
    <!-- excerpt -->
    <div class="excerpt text-sm flex-1">{{ article.excerpt }}</div>
    <!-- tags -->
    <div class="mt-4 font-roboto text-secondary text-sm select-none">
      <span v-for="tag in article.tags" :key="tag.id" class="tag">
        <g-link
          :to="tag.path"
          class="inline-block px-2 hover:text-primary-500 active:text-primary-500 focus:text-primary-500"
        >
          # {{ tag.title }}
        </g-link>
        <!-- <span class="saperator text-gray-500">&#x25CF;</span> -->
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["article"],
};
</script>

<style scoped></style>
