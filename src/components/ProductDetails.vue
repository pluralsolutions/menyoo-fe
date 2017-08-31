<template>
  <div class="product-detail-container">
    <NavigationBar>Descrição do Produto</NavigationBar>
    <img :src="product.image" class="product-galery" />  <!-- Should be a Galery Component-->
    <div class="product-info">
      <ProductInfo :product="product"/>
      <div class="summary-items">
        <Counter :min="0" :plusCallback="addProduct" :minusCallback="removeProduct" v-model:value="productQuantity"/>
        <div class="current-price">
          R$ {{ itemsPrice | currency }}
        </div>
      </div>
      <div class="custom-ingredients">
        <span class="title">Personalize seus ingredientes</span>
        <ul class="ingredients-list">
          <form v-on:submit.prevent="addOrder">
            <li v-for="group in product.ingredients">
              <span @click="toogleOptions" :class="{'ingredientes-section': true, active: group.standard}"> {{group.title}}</span>
              <ul>
                <li v-for="item in group.items">
                  <input type="checkbox" name="ingredients" :value="item.id" :checked="item.checked">
                  <span class="ingredient-name">{{item.name}}</span>
                  <span class="additional-cost" v-if="item.addionalPrice">+R$ {{item.addionalPrice | currency}}</span>
                </li>
              </ul>
            </li>
            <ButtonComponent additionalClass="add-order">Adicionr ao pedido</ButtonComponent>
          </form>
        </ul>
      </div>
    </div>
    <div @click="addOrder" class="add-order">Adicionar ao pedido</div>
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';
import ProductInfo from '@/components/shared/ProductInfo';
import Counter from '@/components/shared/Counter';
import ButtonComponent from '@/components/shared/Button';

import Product from '@/domain/Product';
import Order from '@/domain/Order';

export default {
  components: {
    NavigationBar,
    ProductInfo,
    Counter,
    ButtonComponent,
  },
  data() {
    return {
      productQuantity: 0,
      itemsPrice: 0,
      product: null,
    };
  },
  methods: {
    toogleIt: function toogleIt(event) {
      event.target.classList.toggle('checked');
    },
    toogleOptions: function toogleOptions(event) {
      event.target.classList.toggle('active');
    },
    addProduct: function addProduct() {
      this.itemsPrice = this.product.unitPrice * this.productQuantity;
    },
    removeProduct: function removeProduct() {
      if (this.productQuantity > 0) {
        this.productQuantity -= 1;
        this.itemsPrice = this.product.unitPrice * this.productQuantity;
      }
    },
    addOrder: function addOrder(event) {
      if (this.productQuantity < 1) {
        alert('Adicione pelo menos 1 produto no pedido');
        return;
      }
      const checkboxs = event.target.querySelectorAll('input:checked');
      const selectedIngredients = [];
      for (let x = 0; x < checkboxs.length; x += 1) {
        const ingredientElement = checkboxs[x].parentElement.getElementsByClassName('ingredient-name')[0];
        selectedIngredients.push({ id: checkboxs[x].value, name: ingredientElement.innerText });
      }

      const order = new Order({
        product: this.product,
        ingredients: selectedIngredients,
        productQuantity: this.productQuantity,
      });

      this.$store.dispatch('addItemToOrder', order);
    },
  },
  created() {
    this.product = Product.sample()[0];
  },
};
</script>

<style>
  @import '../assets/styles/product-detail.css'
</style>
