import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAppDownload extends Struct.ComponentSchema {
  collectionName: 'components_shared_app_downloads';
  info: {
    displayName: 'App Download';
    icon: 'cast';
  };
  attributes: {
    Images: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'Footer Links';
  };
  attributes: {
    Footer_Link: Schema.Attribute.Component<'shared.navigation', true>;
    Heading: Schema.Attribute.String;
  };
}

export interface SharedHighlightExperience extends Struct.ComponentSchema {
  collectionName: 'components_destination_highlight_experiences';
  info: {
    displayName: 'Highlight Experience';
    icon: 'star';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    link: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavigation extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'arrowLeft';
  };
  attributes: {
    Icon: Schema.Attribute.String;
    OpenInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    URL: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    property: Schema.Attribute.String & Schema.Attribute.Required;
    tag: Schema.Attribute.Enumeration<['Meta', 'Link']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Meta'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'dashboard';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    Link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    OpenInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface SharedTitleDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_descriptions';
  info: {
    displayName: 'Title-Description';
    icon: 'book';
  };
  attributes: {
    Description: Schema.Attribute.RichText & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedWeatherInfo extends Struct.ComponentSchema {
  collectionName: 'components_destination_weather_infos';
  info: {
    displayName: 'Weather Info';
    icon: 'cloud';
  };
  attributes: {
    bestTimeIcon: Schema.Attribute.Media<'images' | 'files'>;
    bestTimeToVisit: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    currentWeather: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    currentWeatherIcon: Schema.Attribute.Media<'images' | 'files'>;
    targetAudience: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    targetAudienceIcon: Schema.Attribute.Media<'images' | 'files'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.app-download': SharedAppDownload;
      'shared.footer-links': SharedFooterLinks;
      'shared.highlight-experience': SharedHighlightExperience;
      'shared.media': SharedMedia;
      'shared.navigation': SharedNavigation;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-link': SharedSocialLink;
      'shared.title-description': SharedTitleDescription;
      'shared.weather-info': SharedWeatherInfo;
    }
  }
}
