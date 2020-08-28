<template>
<div>
    <div class="card-footer">
    <div class="container">
      <div class="row">
       <div class="col-lg-6 col-md-12">


          <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <i :style="{ color: colors.hex }" class="fas fa-copy mx-1"></i>
              Hex</span
            >
          </div>
          <input
            disabled
            placeholder="Hex color"
            type="text"
            class="form-control"
            v-model="colors.hex"
          />
        </div>



        </div>


        <div class="col-lg-6 col-md-12">



          <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <i :style="{ color: colors.hex }" class="fas fa-copy mx-1"></i>
              Rgb</span
            >
          </div>
          <input
            disabled
            placeholder="Rgb color"
            type="text"
            class="form-control"
            v-model="colors.rgb"
          />
        </div>



        </div>
      </div>
    </div>
    
  </div>
  <div class="card-footer" style="height: 8rem;" :style="{'background-color': colors.hex}" />
</div>

</template>

<script>
export default {
  props: {
    colors: Object,
  },
};
</script>

<style></style>
