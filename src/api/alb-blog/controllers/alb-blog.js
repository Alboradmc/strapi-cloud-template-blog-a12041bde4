'use strict';

/**
 * alb-blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::alb-blog.alb-blog');

module.exports = createCoreController('api::alb-blog.alb-blog', ({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                Banner: true,
                metaTags: true,
                weatherInfo: {
                    populate: {
                        currentWeatherIcon: true,
                        bestTimeIcon: true,
                        targetAudienceIcon: true,
                    },
                },
                highlightExperiences: {
                    populate: {
                        image: true,
                    },
                },
                relaredBlog: {
                    populate: {
                        Banner: true,
                    },
                },
            },
        };

        const { data, meta } = await super.find(ctx);
        return { data, meta };
    },

    async findOne(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                Banner: true,
                metaTags: true,
                weatherInfo: {
                    populate: {
                        currentWeatherIcon: true,
                        bestTimeIcon: true,
                        targetAudienceIcon: true,
                    },
                },
                highlightExperiences: {
                    populate: {
                        image: true,
                    },
                },
                relaredBlog: {
                    populate: {
                        Banner: true,
                    },
                },
            },
        };

        const { data, meta } = await super.findOne(ctx);
        return { data, meta };
    },
}));

