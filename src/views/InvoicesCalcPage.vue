<template>
  <div class="page-wrapper">
    <h1 class="title">Vue Invoice Calc</h1>
    <Form />
    <Table />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Form from "@/components/Form.vue";
import Table from "@/components/Table.vue";

export default Vue.extend({
  name: "InvoicesCalcPage",
  components: {
    Form,
    Table,
  },
});
</script>

<style lang="scss" scoped>
.page-wrapper {
  padding: 0 50px;
  max-width: 800px;
  margin: 0 auto;

  .title {
    text-align: left;
  }
}
</style>
