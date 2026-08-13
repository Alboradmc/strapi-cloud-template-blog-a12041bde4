'use strict';

/**
 * alb-usp-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::alb-usp-list.alb-usp-list', ({ strapi }) => ({
    async find(ctx) {
        const populate = ctx.query.populate;

        if (populate === '*' || populate === 'details' || (typeof populate === 'object' && populate && populate.details)) {
            ctx.query.populate = {
                ...(typeof populate === 'object' && populate && !Array.isArray(populate) ? populate : {}),
                details: {
                    populate: '*',
                },
            };
        }

        return super.find(ctx);
    },

    async findOne(ctx) {
        const populate = ctx.query.populate;

        if (populate === '*' || populate === 'details' || (typeof populate === 'object' && populate && populate.details)) {
            ctx.query.populate = {
                ...(typeof populate === 'object' && populate && !Array.isArray(populate) ? populate : {}),
                details: {
                    populate: '*',
                },
            };
        }

        return super.findOne(ctx);
    },
}));


