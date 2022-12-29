type Platform = 'vtex' | 'shopify'

type ConfigurationKurs = {
  platform: Platform
}

export class kurs {
  constructor(private readonly configuration: ConfigurationKurs) {}

  public getPlatform(): Platform {
    return this.configuration.platform
  }
}

export default {
  kurs,
}
