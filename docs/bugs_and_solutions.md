### problema al trabajar con @nuxt/image

##### Descripción

- Al agregar el modulo segun la documentacion oficial, se presentaron problemas de renderizado de imagenes en el componente.
- Aunque se ejecuto el comando npm rebuild sharp, el problema persiste.

#### Solución

1. Se desinstaló y volvió a instalar el módulo con el comando `pnpm dlx nuxi module add image`
2. Se ejecuto el comando `npm rebuild sharp`
