'use strict';

/**
 * @param {string} source
 *
 * @returns {Object}
 */
function convertToObject(source) {
  const result = {};

  source.split(';').forEach((style) => {
    const trimmed = style.trim();

    if (!trimmed) {
      return;
    }

    const parts = trimmed.split(':');
    const property = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    result[property] = value;
  });

  return result;
}

module.exports = convertToObject;
