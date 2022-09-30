<template>
  <div>
    <span>搜索接口</span>
    <div>
      <Form
        :model="pathForm"
        :rules="pathFormRules"
        ref="pathForm"
        :label-width="46"
      >
        <FormItem label="路径" prop="rootPath">
          <Input v-model="pathForm.rootPath"></Input
        ></FormItem>
      </Form>
      <template v-for="item in pathForm.items">
        <Select v-model="item.value" style="width: 200px" :key="item.index">
          <Option
            v-for="fileName in item.fileName"
            :value="fileName.value"
            :key="fileName.value"
            >{{ fileName.value }}</Option
          >
        </Select>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      pathForm: {
        rootPath: "",
        items: [{ value: "", index: 1, status: 1, fileName: [] }],
      },
      pathFormRules: {
        rootPath: [
          {
            required: true,
            message: "请输入路径！",
            trigger: "blur",
          },
        ],
      },
    };
  },
};
</script>

<style></style>
