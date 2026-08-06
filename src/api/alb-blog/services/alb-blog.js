'use strict';

/**
 * alb-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::alb-blog.alb-blog');

