import React from "react";
import create from 'zustand';
import {persist} from 'zustand/middleware';

const cartStore = create(persist(set => ({
  cart: [],
  addToCart: (item) =>
    set(state => ({
      cart: [
        {
          id: item.id,
          title: item.title,
          img: item.img,
          price: item.price,
          quantity: item.quantity
        },
        ...state.cart
      ]
    })),
  removeItem: (id) =>
    set(state => ({
      cart: state.cart.filter(item => item.id !== id)
    }))
})))

export const useCartStore = cartStore