'use strict';

const rateLimit = require('express-rate-limit');

// In a multi-instance deployment, rate-limit-redis can replace the default
// in-memory store with shared Redis counters. In-memory counters are local to
// each process, so a load balancer can spread attempts across instances and
// let a client exceed the intended limit.
module.exports = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
});
