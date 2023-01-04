import { ProductKurs } from '../../src/typings/kurs'
import { mockTypeProductKurs } from '../mocks/product.mock'

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
