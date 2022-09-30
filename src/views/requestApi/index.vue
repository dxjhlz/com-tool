<template>
  <div class="layout h100">
    <Layout class="h100">
      <Card
        :bordered="false"
        :dis-hover="true"
        :shadow="true"
        class="no-shadow h100"
      >
        <p slot="title">请求路径设置</p>
        <div>
          <searchApi></searchApi>
        </div>
      </Card>
    </Layout>
  </div>
</template>

<script>
import searchApi from "./searchApi.vue";
export default {
  props: {},
  components: {
    searchApi,
  },
};
</script>

<style></style>
