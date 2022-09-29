<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78">
        <Menu active-name="1-2" theme="dark" width="auto">
          <MenuItem name="1-1">
            <span>Option 1</span>
          </MenuItem>
          <MenuItem name="1-2">
            <span>Option 2</span>
          </MenuItem>
          <MenuItem name="1-3">
            <span>Option 3</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout class="content"></Layout>
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
    return {};
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
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
/* .menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
} */
.content {
  height: 100%;
}
</style>
