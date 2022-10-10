<template>
  <div class="layout">
    <Layout class="h100">
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78">
        <Menu active-name="1-2" theme="dark" width="auto">
          <template v-for="(item, index) in menuData">
            <MenuItem :name="item.name" :key="index" :to="item.to">
              <span>{{ item.name }}</span>
            </MenuItem>
          </template>
        </Menu>
      </Sider>
      <Layout class="content">
        <router-view />
      </Layout>
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  computed: {},
  data() {
    return {
      menuData: [
        { name: "路由管理", to: "/requestApi" },
        { name: "配置", to: "/dispose" },
      ],
    };
  },
  methods: {},
  created() {
    console.log("created");
  },
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}

.content {
  height: 100%;
}
.my-menu {
  text-align: center;
}
</style>
