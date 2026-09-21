'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::alb-static-page.alb-static-page',
  ({ strapi }) => ({

    async find(ctx) {
      const { populate, slug, locale } = ctx.query;

      const queryOptions = {
        select: [
          'id',
          'documentId',
          'Header',
          'Slug',
          'Description',
          'locale',
          'seoSchema'
        ],
        populate: {
          Banner: true,
          MetaTags: true,
        },
        orderBy: {
          updatedAt: 'desc',
        },
      };

      if (populate === '*') {
        queryOptions.populate = {
          ...queryOptions.populate,
          Details: true,
        };
      }

      if (slug) {

        const where = {
          Slug: slug,
        };

        // Filter by locale if provided
        if (locale) {
          where.locale = locale;
        }

        const page = await strapi.db
          .query('api::alb-static-page.alb-static-page')
          .findOne({
            where,
            ...queryOptions,
          });

        if (!page) {
          return ctx.notFound('No page found for this slug');
        }

        delete page.createdBy;
        delete page.updatedBy;

        return { data: page };

      } else {

        const where = {};

        // Filter by locale if provided
        if (locale) {
          where.locale = locale;
        }

        let data = await strapi.db
          .query('api::alb-static-page.alb-static-page')
          .findMany({
            ...queryOptions,
            where,
          });

        // Deduplicate by documentId
        const uniqueMap = new Map();

        for (const item of data) {
          const existing = uniqueMap.get(item.documentId);

          if (
            !existing ||
            new Date(item.updatedAt) > new Date(existing.updatedAt)
          ) {
            delete item.createdBy;
            delete item.updatedBy;

            uniqueMap.set(item.documentId, item);
          }
        }

        return {
          data: Array.from(uniqueMap.values()),
        };
      }
    },

  })
);