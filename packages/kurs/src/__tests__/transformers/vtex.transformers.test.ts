import { ProductKurs } from '@kurs/typings/kurs'
import { mockTypeProductKurs } from '@kurs/mocks/product'

describe('[VTEX]', () => {
  describe('[PRODUCT]', () => {
    describe('[TRANSFORMERS]', () => {
      it('mockProduct has to match typing of kurs', () => {
        const mockProduct = {
          additionalProperty: [
            {
              propertyId: 'string',
              value: 'string',
              name: 'string',
              valueReference: 'string',
            },
          ],
          aggregateRating: {
            ratingCount: 0,
            reviewCount: 0,
          },
          brand: {
            name: 'string',
          },
        }

        expect(mockProduct).toMatchObject<ProductKurs>(mockTypeProductKurs)
      })
    })
  })
})

export {}
