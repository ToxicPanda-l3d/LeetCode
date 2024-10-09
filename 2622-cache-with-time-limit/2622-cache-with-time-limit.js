var TimeLimitedCache = function() {
    this.cache = new Map();  // Stores key -> { value, expiration }
    this.validKeys = 0;      // To track the count of valid (unexpired) keys
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    const expiresAt = now + duration;

    const entry = this.cache.get(key);
    const isUnexpired = entry && entry.expiration > now;

    if (!isUnexpired) this.validKeys++;  // Increment validKeys only if it's a new or expired key

    this.cache.set(key, { value, expiration: expiresAt });

    // Set a timeout to remove the key when it expires
    setTimeout(() => {
        const currentEntry = this.cache.get(key);
        if (currentEntry && currentEntry.expiration === expiresAt) {
            this.cache.delete(key);
            this.validKeys--;
        }
    }, duration);

    return !!isUnexpired;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();
    const entry = this.cache.get(key);

    return entry && entry.expiration > now ? entry.value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.validKeys;
};
