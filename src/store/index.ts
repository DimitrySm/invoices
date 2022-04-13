import { InvoiceType } from "@/types/Invoice";
import Vue from "vue";
import Vuex, { Commit } from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

interface State {
  invoices: InvoiceType[];
}

const store = new Vuex.Store<State>({
  state: {
    invoices: [],
  },

  mutations: {
    setInvoices(state: State, invoice: InvoiceType[]) {
      state.invoices = invoice;
    },

    addInvoice(state: State, invoice: InvoiceType) {
      state.invoices.push(invoice);
    },

    deleteInvoices(state: State, invoicesToDelete: string[]) {
      state.invoices = state.invoices.filter(
        (invoice: InvoiceType) =>
          invoice.id && !invoicesToDelete.includes(invoice.id)
      );
    },
  },

  actions: {
    setInvoices({ commit }: { commit: Commit }, invoice: InvoiceType[]) {
      commit("setInvoices", invoice);
    },

    addInvoice({ commit }: { commit: Commit }, invoice: InvoiceType) {
      commit("addInvoice", invoice);
    },

    deleteInvoices({ commit }: { commit: Commit }, invoicesToDelete: string[]) {
      if (invoicesToDelete.length) {
        commit("deleteInvoices", invoicesToDelete);
      }
    },
  },

  getters: {
    invoices(state: State): InvoiceType[] {
      return state.invoices;
    },

    invoicesIds(state: State) {
      return state.invoices.map((invoice: InvoiceType) => invoice.id);
    },

    totalInvoicesPrice(state: State) {
      return state.invoices.reduce(
        (total, invoice: InvoiceType) => (total += invoice.sum),
        0
      );
    },
  },

  plugins: [new VuexPersistence().plugin],
});

export default store;
