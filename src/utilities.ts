export const breakpoints = {
  md: '600px',
  lg: '900px',
}

export const localStorageKey = 'audiophileProductQuantity'

export interface ImageObject {
  [key:string]:[ImageMetadata, ImageMetadata, ImageMetadata, string]
}

export interface ProductOrder  {
  [index:string]:string[]
}

export interface Includes {
  quantity:number,
  item:string,
}

export interface NavLink {
  name?:string;
  icon?:string;
  path:string;
}

export interface Other {
  slug:string
  name:string
  category:string
  image:ImageUrlGroup
}

export interface Product {
  id:number
  slug:string
  name:string
  image:ImageUrlGroup
  category:string
  categoryImage:ImageUrlGroup
  new:boolean
  price:number
  description:string
  features:string
  includes:{
    quantity:number
    item:string
  }[]
  gallery:{
    first:ImageUrlGroup
    second:ImageUrlGroup
    third:ImageUrlGroup
  }
  others:{
    slug:string
    name:string
    image:ImageUrlGroup
  }[]
}

export type ImageUrlGroup = {
  mobile:string
  tablet:string
  desktop:string
}



export const getCategories = (allProducts:Product[]) => {
  const categoriesArray:string[] = []
  
  allProducts.forEach( (current:Product) => {
    categoriesArray.push(current.category)
  })
  return [...new Set(categoriesArray)]
}



export const updateLocalStorage = (datasetName:string, property:string, value:any)=> {
  if (!localStorage[datasetName]) {
    const data = JSON.stringify({[property]:value})
    localStorage.setItem(datasetName, data)
    return
  }

  const data = JSON.parse(localStorage.getItem(datasetName)!)
  
  !data[property]
    ? data[property] = value
    : data[property] += value 

  localStorage.setItem(datasetName, JSON.stringify(data))
}



export const convertPxToRem = (pixels:number) => {
  return pixels/16
}



// for (let x = 500; x <= 999; x++) {
//   if ( x%20 === 0 )
//   console.log(`${x}: '${convertPxToRem(x)}rem',`)
// }

