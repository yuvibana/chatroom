<script setup>
const itemsToShow = ref(4);
const isLoading = ref(true);
const cards = ref([]);
const NoData = ref("");

const getData = async () => {
  try {
    const r = await fetch("https://dummyjson.com/products/category/womens-dresses");
    const rJson = await r.json();
    cards.value = rJson.products;
    isLoading.value = false;
  } catch (error) {
    console.error("Error fetching products:", error);
    NoData.value = "Error fetching products";
  }
};

const updateItemsToShow = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 576) {
    itemsToShow.value = 2;
  } else if (screenWidth < 768) {
    itemsToShow.value = 3;
  } else if (screenWidth < 1024) {
    itemsToShow.value = 4;
  } else if (screenWidth < 1440) {
    itemsToShow.value = 5;
  } else {
    itemsToShow.value = 5;
  }
};

onMounted(() => {
  getData();
  window.addEventListener("resize", updateItemsToShow);
  updateItemsToShow();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateItemsToShow);
});
</script>

<template>
  <div class="similarCardWrapper lg:py-5 py-2 bg-gray-200">
    <div class="container bg-white">
      <div class="flexHeading flex justify-between items-center lg:py-5 py-2">
        <h3 class="text-2xl lg:text-3xl">Highlights</h3>
        <a href="searchresult" class="commonbtn">View All</a>
      </div>
      <template v-if="isLoading">
        <div class="lg:flex hidden justify-between py-4">
          <ShimmereCard />
          <ShimmereCard />
          <ShimmereCard />
          <ShimmereCard />
        </div>
        <!-- for mb -->
        <div class="flex lg:hidden justify-between pb-5">
          <div class="w-[48%] h-40 animate-pulse bg-gray-200"></div>
          <div class="w-[48%] h-40 animate-pulse bg-gray-200"></div>
        </div>
      </template>
      <div v-else class="relative pb-5">
        <h1>{{ NoData }}</h1>
        <carousel :items-to-show="itemsToShow">
          <slide v-for="card in cards" :key="card.id">
            <HomePageCard :thumbnail="card.thumbnail" :title="card.title" />
          </slide>
          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.similarCardWrapper {
  &:hover .carousel__prev,
  &:hover .carousel__next {
    opacity: 1;
  }

  .carousel__icon {
    filter: invert(1);
  }

  .carousel__prev,
  .carousel__next {
    opacity: 0;
    height: 68px;
    width: 40px;
    background: #fff;
    transition: all 0.5s ease;
    svg {
      filter: unset;
      fill: #717171;
    }

    &:hover {
      filter: brightness(1.2);
    }
  }
}

@media (max-width: 768px) {
  .similarCardWrapper {
    overflow-x: hidden;

    .carousel__prev,
    .carousel__next {
      height: 35px;
      width: 35px;
      font-size: 17px;
    }
  }
}
@media (max-width: 576px) {
  .similarCardWrapper {
    .carousel__prev {
      left: 0;
    }
    .carousel__next {
      right: 0;
    }
  }
}
</style>
