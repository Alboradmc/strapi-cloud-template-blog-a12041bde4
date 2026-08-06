'use strict';

/**
 * alb-header service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::alb-header.alb-header');

