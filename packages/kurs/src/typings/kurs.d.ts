type StorePropertyValue = {
  propertyId: string
  value: string | object
  name: string
  valueReference: string
}

type StoreAggregateRating = {
  ratingCount: number
  reviewCount: number
}

type StoreBrand = {
  name: string
}

type ProductKurs = {
  additionalProperty: StorePropertyValue[]
  aggregateRating: StoreAggregateRating
  brand: StoreBrand
}

declare namespace kurs {
  export type ProductKurs = ProductKurs
}

export = kurs
