module.exports = Object.freeze({
    STOCK_PRICE_PATH  : '/quote/latestPrice',
    // eslint-disable-next-line no-magic-numbers
    REQUESTS_INTERVAL : process.env.STOCK_PRICE_REQUESTS_INTERVAL || 1000
});
