'use strict';

/**
 * alb-static-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::alb-static-page.alb-static-page');
