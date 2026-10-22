'use strict';

/**
 * alb-footer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::alb-footer.alb-footer', () => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                footerSection: {
                    populate: {
                        Footer_Link: {
                            populate: {
                                Icon: true,
                            },
                        },
                    },
                },
            },
        };

        return super.find(ctx);
    },

    async findOne(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                footerSection: {
                    populate: {
                        Footer_Link: {
                            populate: {
                                Icon: true,
                            },
                        },
                    },
                },
            },
        };

        return super.findOne(ctx);
    },
}));
