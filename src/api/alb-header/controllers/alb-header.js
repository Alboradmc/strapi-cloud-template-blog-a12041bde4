'use strict';

/**
 * alb-header controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::alb-header.alb-header', () => ({
    /** @param {any} ctx */
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                topMenu: {
                    populate: {
                        Icon: true,
                    },
                },
                serviceMenu: {
                    populate: {
                        Icon: true,
                    },
                },
            },
        };

        return super.find(ctx);
    },

    /** @param {any} ctx */
    async findOne(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                topMenu: {
                    populate: {
                        Icon: true,
                    },
                },
                serviceMenu: {
                    populate: {
                        Icon: true,
                    },
                },
            },
        };

        return super.findOne(ctx);
    },
}));

