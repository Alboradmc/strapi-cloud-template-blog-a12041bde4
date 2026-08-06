'use strict';

/**
 * alb-header router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::alb-header.alb-header');

