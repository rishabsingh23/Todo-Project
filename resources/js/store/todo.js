import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => {
    return { itemId: undefined, item: {} };
  },
  getters: {
    getItemId: (state) => state.itemId,
    getItem: (state) => state.item,
  },
  actions: {
    setItemId(itemId) {
      this.itemId = itemId;
    },
    resetItemId() {
      this.itemId = undefined;
    },
    setItem(item) {
      this.itemId = item.id;
      this.item = item;
    },
    resetItem() {
      this.itemId = undefined;
      this.item = {};
    },
  },
});
