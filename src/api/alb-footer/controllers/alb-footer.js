'use strict';

/**
 * alb-footer controller
 *
 * The footer is always returned fully populated, whatever `populate` the request sends,
 * so the frontend gets the link icons, the app-download images and the payment-method images.
 */

const { createCoreController } = require('@strapi/strapi').factories;

const FOOTER_POPULATE = {
    footerSection: {
        populate: {
            Footer_Link: {
                populate: {
                    Icon: true,
                },
            },
        },
    },
    appDownload: {
        populate: {
            Images: true,
        },
    },
    paymentMethods: true,
};

module.exports = createCoreController('api::alb-footer.alb-footer', () => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: FOOTER_POPULATE,
        };

        return super.find(ctx);
    },

    async findOne(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: FOOTER_POPULATE,
        };

        return super.findOne(ctx);
    },
}));
