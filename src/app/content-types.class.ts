export class ContentTypes {
  static HeroUnit = {
    codeName: 'hero_unit',
    fields: {
      title: 'title',
      image: 'image',
      marketingMessage: 'marketing_message'
    }
  }

  static FactAboutUs = {
    codeName: 'fact_about_us',
    fields: {
      title: 'title',
      image: 'image',
      description: 'description'
    }
  }

  static Home = {
    codeName: 'home',
    fields: {
      heroUnit: 'hero_unit',
      articles: 'articles'
    }
  }

  static Artcile = {
    codeName: 'article',
    fields: {
      teaserImage: 'teaser_image',
      title: 'title',
      summary: 'summary'
    }
  }
}
