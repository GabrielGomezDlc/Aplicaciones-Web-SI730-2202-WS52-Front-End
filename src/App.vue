<script >
export default {
  data() {
    return {
      price:0,
      date:null,
      status:null,
      selectedCategory: null,
      subjectToTax:null,
      categories: [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
      ]
    }
  }
}

</script>

<template>
  <form>

    <div class="card">
      <div class="field grid">
          <label for="code" class="col-12 mb-2 md:col-2 md:mb-0">Código*</label>
        <div class="col-12 md:col-10">
          <InputText id="code"/>
          <Button label="Validar"></Button>
        </div>
      </div>

      <div class="field grid">
        <label for="name" class="col-12 mb-2 md:col-2 md:mb-0">Nombre*</label>
        <div class="col-12 md:col-10">
          <InputText id="name"/>
        </div>
      </div>

      <div class="field grid">
        <label for="abbreviation" class="col-12 mb-2 md:col-2 md:mb-0">Abreviatura*</label>
        <div class="col-12 md:col-10">
          <InputText id="abbreviation"/>
        </div>
      </div>

      <div class="field grid">
        <label for="category" class="col-12 mb-2 md:col-2 md:mb-0">Categoría*</label>
        <div class="col-12 md:col-10">
          <Dropdown id="category" v-model="selectedCategory" :options="categories" optionLabel="name" placeholder="Selecciona una categoría"/>
        </div>
      </div>

      <div class="field grid">
        <label for="ruc" class="col-12 mb-2 md:col-2 md:mb-0">RUC Proveedor*</label>
        <div class="col-12 md:col-10">
          <InputMask id="ruc" v-model="value" mask="9999999999-999"/>
        </div>
      </div>

      <div class="field grid">
        <label for="price" class="col-12 mb-2 md:col-2 md:mb-0">Precio*</label>
        <div class="col-12 md:col-10">
          <InputNumber  id="price" v-model="price" showButtons mode="decimal" :min="0" />
        </div>
      </div>

      <div class="field grid">
        <label for="label-color" class="col-12 mb-2 md:col-2 md:mb-0">Color de etiqueta*</label>
        <div class="col-12 md:col-10">
          <ColorPicker  id="label-color" v-model="color"/>
        </div>
      </div>

      <div class="field grid">
        <label for="date" class="col-12 mb-2 md:col-2 md:mb-0">Fecha*</label>
        <div class="col-12 md:col-10">
          <Calendar id="date" v-model="date" showIcon dateFormat="mm/dd/yy"/>
        </div>
      </div>

      <div class="field grid">
        <label for="status" class="col-12 mb-2 md:col-2 md:mb-0">Estado*</label>
        <div class="col-12 md:col-10">
          <RadioButton  id="status" value="Active" v-model="status" />
          <label  class="col-12 mb-2 md:col-2 md:mb-0">Activo</label>
          <RadioButton  id="status" value="Suspended" v-model="status" />
          <label  class="col-12 mb-2 md:col-2 md:mb-0">Suspendido</label>
          <RadioButton  id="status" value="Disabled" v-model="status" />
          <label  class="col-12 mb-2 md:col-2 md:mb-0">De baja</label>
        </div>
      </div>

      <div class="field grid">
        <label for="subject-to-tax" class="col-12 mb-2 md:col-2 md:mb-0">Afecto a impuesto*</label>
        <div class="col-12 md:col-10">
          <TriStateCheckbox v-model="subjectToTax" />
        </div>
      </div>

      <div class="field grid">
        <label for="photo" class="col-12 mb-2 md:col-2 md:mb-0">Foto</label>
        <div class="col-12 md:col-10">
          <FileUpload for="photo" name="demo[]" url="./upload" accept="image/*" />
        </div>
      </div>

      <div class="field grid">
        <label for="description" class="col-12 mb-2 md:col-2 md:mb-0">Description</label>
        <div class="col-12 md:col-10">
          <Textarea for="description" v-model="description" :autoResize="true" rows="5" cols="30" />
        </div>
      </div>

      <div class="field grid">

        <div class="col-12 md:col-10">
          <Button label="Grabar" class="p-button-outlined" icon="pi pi-save" iconPos="right"/>
          <Button label="Limpiar" class="p-button-outlined" icon="pi pi-trash" iconPos="right"/>
        </div>
      </div>


    </div>

  </form>
</template>

<style scoped>

</style>
