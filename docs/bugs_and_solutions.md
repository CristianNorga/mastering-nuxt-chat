### problema al trabajar con @nuxt/image

##### Descripción

- Al agregar el modulo segun la documentacion oficial, se presentaron problemas de renderizado de imagenes en el componente.
- Aunque se ejecuto el comando npm rebuild sharp, el problema persiste.

#### Solución

1. Se desinstaló y volvió a instalar el módulo con el comando `pnpm dlx nuxi module add image`
   npx nuxi@latest module add @prisma/nuxt
2. Se ejecuto el comando `npm rebuild sharp`

pnpm add @prisma/nuxt@latest -D --ignore-scripts

pnpm dlx nuxi module add prisma

pnpm dlx nuxi module add @prisma/nuxt
