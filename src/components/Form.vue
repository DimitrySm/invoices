<template>
  <form @submit.prevent>
    <CustomInput
      v-model.trim="formData.title"
      placeholder="Invoice name"
      v-validate="'required|alpha'"
      name="title"
      :error="errors.has('title')"
    >
      {{ errors.first("title") }}
    </CustomInput>

    <CustomInput
      v-model="formData.price"
      placeholder="Price"
      v-validate="'required|numeric'"
      name="price"
      :error="errors.has('price')"
    >
      {{ errors.first("price") }}
    </CustomInput>

    <CustomInput
      v-model="formData.quantity"
      placeholder="Qty"
      v-validate="'required|numeric'"
      name="quantity"
      :error="errors.has('quantity')"
    >
      {{ errors.first("quantity") }}
    </CustomInput>

    <ButtonOutline @click="addInvoice">Add</ButtonOutline>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { v4 as uuidv4 } from "uuid";
import CustomInput from "@/components/common/CustomInput.vue";
import ButtonOutline from "@/components/common/ButtonOutline.vue";

type FormDataType = {
  title: string | null;
  price: number | null;
  quantity: number | null;
};

export default Vue.extend({
  name: "InvoiceForm",
  components: { CustomInput, ButtonOutline },
  data() {
    return {
      formData: {
        title: null,
        quantity: null,
        price: null,
      } as FormDataType,
    };
  },
  methods: {
    addInvoice() {
      this.$validator.validate().then((result: boolean) => {
        if (result) {
          this.$store.dispatch(
            "addInvoice",
            this.getInvoiceWithAdditionalData()
          );
          this.clearForm();
          this.$validator.reset();
        }
      });
    },

    getInvoiceWithAdditionalData() {
      const sum = Number(this.formData.quantity) * Number(this.formData.price);
      return Object.assign({}, this.formData, { id: uuidv4(), sum });
    },

    clearForm() {
      Object.keys(this.formData).forEach(
        (fieldKey: string) =>
          (this.formData[fieldKey as keyof FormDataType] = null)
      );
    },
  },
});
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 4fr repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>
