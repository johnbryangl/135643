<template lang="pug">
.row.my-4
  .col.col-12.col-md-8 
    div(v-if="modelValue.filter.type == 'text'")
      el-input(placeholder="Search here..." v-model='modelValue.input' @input='emitValue({ input: $event })')
        template(#prefix)
          i.bi.bi-search.me-2
    div(v-else-if="modelValue.filter.type == 'date'")
      el-date-picker.w-100.date-input(type="date" format="MMMM D, YYYY" value-format="YYYY-MM-DD" placeholder="Search here..." v-model='modelValue.input' @change='emitValue({ input: $event })')
        template(#prefix)
          i.bi.bi-search.me-2
    div(v-else-if="modelValue.filter.type == 'select'")
      el-select.w-100(placeholder="Search here..." valueKey='value' v-model='modelValue.input' @change='emitValue({ input: $event.value })')
        template(#prefix)
            i.bi.bi-search.me-2
        el-option(v-for="option in modelValue.selectTypeOptions" :key='option.value'  :label='option.name' :value='option' )
  .col.col-12.col-md-4
    el-select.w-100(placeholder="Filter options" valueKey='value' v-model='modelValue.filter' @change='emitValue({ filter: $event })')
      el-option(v-for="option in modelValue.options" :key='option.value'  :label='option.name' :value='option' )
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  methods: {
    emitValue(inputValue) {
      const updatedModelValue = { ...this.modelValue, ...inputValue };
      this.$emit("update:modelValue", updatedModelValue);
    },
  },
};
</script>
