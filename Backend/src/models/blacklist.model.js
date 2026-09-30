const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, 'Token is required to be added in blacklisted'],
    },
}, {
    timestamps: true
})

const tokenBlacklistModel = mongoose.model('blacklistedToken', blacklistTokenSchema);

module.exports = tokenBlacklistModel;