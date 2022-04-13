<template>
  <table>
    <thead>
      <tr>
        <th>
          <CustomCheckbox
            :checked="
              invoices.length !== 0 &&
              selectedInvoicesIds.length === invoices.length
            "
            @check="selectAll"
          />
        </th>
        <th v-for="(header, index) in tableTitles" :key="index">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody v-if="invoices.length">
      <tr v-for="invoice in invoices" :key="invoice.id">
        <td>
          <CustomCheckbox
            :checked="selectedInvoicesIds.includes(invoice.id)"
            @check="checkSelectedInvoices(invoice.id)"
          />
        </td>
        <td>{{ invoice.title }}</td>
        <td>{{ invoice.price }}</td>
        <td>{{ invoice.quantity }}</td>
        <td>$ {{ invoice.sum }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">
          <ButtonOutline @click="deleteInvoices">Delete</ButtonOutline>
        </td>
        <td>Total:</td>
        <td>$ {{ totalInvoicesPrice }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import CustomCheckbox from "@/components/common/CustomCheckbox.vue";
import ButtonOutline from "@/components/common/ButtonOutline.vue";

export default Vue.extend({
  name: "InvoicesTable",

  components: { CustomCheckbox, ButtonOutline },

  data() {
    return {
      tableTitles: ["Invoice name", "Price", "Qty", "Sum"],
      selectedInvoicesIds: [] as string[],
    };
  },

  methods: {
    checkSelectedInvoices(id: string) {
      if (this.selectedInvoicesIds.includes(id)) {
        const index = this.selectedInvoicesIds.indexOf(id);
        this.selectedInvoicesIds.splice(index, 1);
      } else {
        this.selectedInvoicesIds.push(id);
      }
    },

    selectAll() {
      if (this.selectedInvoicesIds.length === this.invoices.length) {
        this.selectedInvoicesIds = [];
      } else {
        this.selectedInvoicesIds = [...this.invoicesIds];
      }
    },

    deleteInvoices() {
      this.$store.dispatch("deleteInvoices", this.selectedInvoicesIds);
      this.selectedInvoicesIds = [];
    },
  },

  computed: {
    ...mapGetters(["invoices", "invoicesIds", "totalInvoicesPrice"]),
  },
});
</script>

<style scoped lang="scss">
table {
  width: 100%;
  background-color: white;
  font-size: 16px;
  border-collapse: collapse;

  tbody {
    display: block;
    max-height: 600px;
    overflow-y: auto;
  }

  thead,
  tbody tr,
  tfoot {
    display: table;
    table-layout: fixed;
    width: 100%;
  }

  thead {
    background-color: rgb(148, 139, 139);
    border: 2px solid #000;
  }

  tr {
    &:last-child {
      td {
        border-bottom: 0;
      }
    }

    &:first-child {
      td {
        border-top: 0;
      }
    }

    th,
    td {
      text-align: left;
      padding: 15px;
    }

    th {
      color: #000;

      font-weight: normal;
      font-size: 20px;
      border: 2px solid #000;

      position: sticky;
      top: 0;
    }
  }

  tbody tr {
    transition: background-color 150ms ease-out;
    border-bottom: 2px solid #000;

    &:nth-child(2n) {
      background-color: #ccc;
    }
  }

  tbody tr:last-child {
    border-bottom: none;
  }
}
</style>
