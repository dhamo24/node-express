"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/api/data', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get('https://jsonplaceholder.typicode.com/posts');
        res.json(response.data);
    }
    catch (error) { // Explicitly specify 'error' as 'any' type
        console.error('Error fetching data:', error.message);
        res.status(500).send('Error fetching data');
    }
}));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
