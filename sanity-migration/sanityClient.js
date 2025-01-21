"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.client = (0, client_1.createClient)({
    projectId: 't9ags2vo', // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: 'skJ3GyGn9pUdpceqUy9kU0ULzNbeyGwyRmB3eyWYWWXOpqhqmmtFVa5YGae87vtLReSRu2RjKc5bJyKJjUBgR1vCzMwf91MemWZqm2y7WtgW6LLyj5XWKtg9EazHLFlg0LkcYtxai8sJq79NKEwfS9gFG9KLfGd9gdHXAAOn0SocStcR3njy',
});
