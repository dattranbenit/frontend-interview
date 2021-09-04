export const DBConfig = {
  name: 'MyDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'products',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        {
          name: 'code',
          keypath: 'code',
          options: { unique: false }
        },
        {
          name: 'name',
          keypath: 'name',
          options: { unique: false }
        },
        {
          name: 'type',
          keypath: 'type',
          options: { unique: false }
        },
        {
          name: 'availability',
          keypath: 'availability',
          options: { unique: false }
        },
        {
          name: 'needing_repair',
          keypath: 'needing_repair',
          options: { unique: false }
        },
        {
          name: 'durability',
          keypath: 'durability',
          options: { unique: false }
        },
        {
          name: 'max_durability',
          keypath: 'max_durability',
          options: { unique: false }
        },
        {
          name: 'mileage',
          keypath: 'mileage',
          options: { unique: false }
        },
        {
          name: 'price',
          keypath: 'price',
          options: { unique: false }
        },
        {
          name: 'minimum_rent_period',
          keypath: 'minimum_rent_period',
          options: { unique: false }
        },
      ]
    }
  ]
};