<template>
  <li @dblclick="isEdit = true" :class="['list-group-item d-flex justify-content-between align-items-center created',{'deleted':isDelete}]">
    <input v-if="isEdit" type="text" v-model="list.message" @keyup.enter="isEdit = false" class="form-control form-control-lg mr-2">
    <div v-else class="custom-control custom-checkbox">
      <input type="checkbox" v-model="list.isDone" class="custom-control-input" :id="'customCheck'+list.id">
      <label :class="['custom-control-label',{'done':list.isDone}]" :for="'customCheck'+list.id" >{{ list.message }}</label>
    </div>
    <i class="fas fa-trash-alt text-primary" @click="[isDelete=true,del(list.id)]"></i>
  </li>
</template>

<script>
export default {
  name: "List",
  props : {
    list : {
      type : Object,
      required : true
    }
  },
  methods: {
    del(a) {
      this.$emit("del", a);
    }
  },
  data() {
    return {
      isEdit : false,
      isDelete : false,
    }
  },
}
</script>

<style scoped>

</style>