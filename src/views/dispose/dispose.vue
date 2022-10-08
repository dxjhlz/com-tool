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
          <Form
            :label-width="90"
            :model="disposeData"
            :rules="disposeDataRules"
          >
            <FormItem label="项目根路经" prop="rootPath">
              <Input v-model="disposeData.rootPath" />
            </FormItem>
          </Form>
        </div>
      </Card>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disposeData: { rootPath: "" },
      disposeDataRules: {
        rootPath: [
          {
            required: true,
            message: "请填写项目根路径，例如：D:\\develop\\company\\hcow2.2",
            trigger: "blur",
          },
        ],
      },
    };
  },
};
</script>

<style></style>
