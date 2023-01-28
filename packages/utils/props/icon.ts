import { definePropType } from './'
import type { Component } from 'vue'

export const iconPropType = definePropType<string | Component>([
  String,
  Function,
  Object
])
