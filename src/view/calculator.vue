<template>
  <div>
    <b-container>
      <b-row>
        <div class="col-md-6 m-auto bg-warning my-3">          
          <b-form class="my-5">
            <div class="row">
              <div class="col-6">                
                <b-form-group
                  id="input-group-1"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.number1"
                    type="number"
                    placeholder="Enter number 1"                    
                  ></b-form-input>
                </b-form-group>
              </div> 
              <div class="col-6">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="form.status"
                  name="checkbox-1"
                  :value="form.number1"
                  class="text-left"
                >                  
                </b-form-checkbox>
              </div> 
            </div>
            <div class="row">
              <div class="col-6">                
                <b-form-group
                  id="input-group-2"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.number2"
                    type="number"
                    placeholder="Enter number 2"                    
                  ></b-form-input>
                </b-form-group>
              </div> 
              <div class="col-6">
                <b-form-checkbox
                  id="checkbox-2"
                  v-model="form.status2"
                  name="checkbox-2"
                  :value="form.number2"
                  class="text-left"
                >                  
                </b-form-checkbox>
              </div> 
            </div>
            <div class="row">
              <div class="col-6">                
                <b-form-group
                  id="input-group-3"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.number3"
                    type="number"
                    placeholder="Enter number 3"                    
                  ></b-form-input>
                </b-form-group>
              </div> 
              <div class="col-6">
                <b-form-checkbox
                  id="checkbox-3"
                  v-model="form.status3"
                  name="checkbox-3"
                  :value="form.number3"
                  class="text-left"
                >                  
                </b-form-checkbox>
              </div> 
            </div>
              <b-button variant="light" class="mr-2" @click="tambah()">+</b-button>
              <b-button variant="light" class="mr-2" @click="kurang()">-</b-button>
              <b-button variant="light" class="mr-2" @click="kali()">x</b-button>
              <b-button variant="light" class="mr-2" @click="bagi()">/</b-button>
              <b-button variant="light" class="mr-2" @click="reset()">Reset</b-button>
          </b-form>
          <b-alert :show="response" dismissible variant="danger">Harap centang/pilih number yang akan di hitung</b-alert>
          <b-card class="mt-3 d-flex text-left bg-secondary" header="Form Data Result">
            <h3 class="text-white font-weight-bold">Hasil : {{ this.hasil }}</h3>
            <!-- <pre class="m-0">{{ form }}</pre> -->
            <p class="text-white">Input 1 : {{this.form.number1}}</p>
            <p class="text-white">Input 2 : {{this.form.number2}}</p>
            <p class="text-white">Input 3 : {{this.form.number3}}</p>
            <p class="text-white">Operasi : {{this.operasi}}</p>
            <p></p>
            <p></p>
          </b-card> 
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'calculator',
  data(){
    return {
      form: {
          number1: null,
          number2: null,
          number3: null,          
            status: false,
            status2: false,
            status3: false,
        },
      hasil:null,
      operasi:'',
      response:false,
      dismissSecs: 3,
      dismissCountDown: 0
    }
  },
  methods: {
    tambah(){
      let a=this.form;
      if (
        (a.status != false && a.status2 != false && a.status3 != false)
        || (a.status != false && a.status2 != false) 
        || (a.status2 != false && a.status3 != false)
        || (a.status != false && a.status3 != false)) {
        this.hasil= Number(this.form.number1) + Number(this.form.number2) + Number(this.form.number3);
      }
      else{
        this.response=true;
      }
        this.operasi='Tambah (+)';
    },
    kurang(){
      let a=this.form;
      if (
        (a.status != false && a.status2 != false && a.status3 != false)
        || (a.status != false && a.status2 != false) 
        || (a.status2 != false && a.status3 != false)
        || (a.status != false && a.status3 != false)) {
        this.hasil= Number(this.form.number1) - Number(this.form.number2) - Number(this.form.number3);
      }
      else{
        this.response=true;
      }
        this.operasi='Kurang (-)';
    },
    kali(){
      let a=this.form;
      if (a.status != false && a.status2 != false && a.status3 != false){
        this.hasil= Number(this.form.number1) * Number(this.form.number2) * Number(this.form.number3);        
      }
      else if (a.status != false && a.status2 != false) {
        this.hasil= Number(this.form.number1) * Number(this.form.number2);                
      }
      else if (a.status2 != false && a.status3 != false){
        this.hasil= Number(this.form.number2) * Number(this.form.number3);                        
      }
      else if (a.status != false && a.status3 != false) {
        this.hasil= Number(this.form.number1) * Number(this.form.number3);                        
      }
      else{
        this.response=true;
      }
        this.operasi='Perkalian (*)';
    },
    bagi(){
      let a=this.form;
      if (a.status != false && a.status2 != false && a.status3 != false){
        this.hasil= Number(this.form.number1) / Number(this.form.number2) / Number(this.form.number3);        
      }
      else if (a.status != false && a.status2 != false) {
        this.hasil= Number(this.form.number1) / Number(this.form.number2);                
      }
      else if (a.status2 != false && a.status3 != false){
        this.hasil= Number(this.form.number2) / Number(this.form.number3);                        
      }
      else if (a.status != false && a.status3 != false) {
        this.hasil= Number(this.form.number1) / Number(this.form.number3);                        
      }
      else{
        this.response=true;
      }
        this.operasi='Pembagian (/)';
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    reset(){
      this.form.number1='';
      this.form.number2='';
      this.form.number3='';
      this.hasil='';
    }
  }
}
</script>
<style>

</style>

