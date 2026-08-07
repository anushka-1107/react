"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
let foodData = [
    {
        name: "Boiled Egg",
        price: 10,
        text: "A perfectly boiled egg, rich in protein and great for a healthy breakfast.",
        image: "/images/egg.png",
        type: "breakfast",
    },
    {
        name: "RAMEN",
        price: 25,
        text: "Steaming hot ramen with rich broth, noodles and toppings — a comfort classic.",
        image: "/images/ramen.png",
        type: "lunch",
    },
    {
        name: "GRILLED CHICKEN",
        price: 45,
        text: "Juicy grilled chicken seasoned to perfection, served with fresh greens.",
        image: "/images/chicken.png",
        type: "dinner",
    },
    {
        name: "CAKE",
        price: 18,
        text: "Soft and fluffy cake with a rich creamy topping — perfect for any occasion.",
        image: "/images/cake.png",
        type: "breakfast",
    },
    {
        name: "BURGER",
        price: 23,
        text: "A thick, juicy burger stacked with fresh veggies, cheese and our secret sauce.",
        image: "/images/burger.png",
        type: "lunch",
    },
    {
        name: "PANCAKE",
        price: 25,
        text: "Golden fluffy pancakes drizzled with maple syrup and a side of fresh berries.",
        image: "/images/pancake.png",
        type: "dinner",
    },
];
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";
const requireAdmin = (req, res, next) => {
    const auth = req.headers["authorization"];
    if (auth === "Bearer admin-secret-token") {
        next();
    }
    else {
        res.status(401).json({ error: "Unauthorized" });
    }
};
app.post("/admin/login", (req, res) => {
    const { username, password } = req.body;
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        res.json({ success: true, token: "admin-secret-token" });
    }
    else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});
app.get("/", (_req, res) => {
    res.json(foodData);
});
app.post("/foods", requireAdmin, (req, res) => {
    const { name, price, text, image, type } = req.body;
    if (!name || !price || !type) {
        return res.status(400).json({ error: "name, price and type are required" });
    }
    const exists = foodData.some((item) => item.name.toLowerCase() === name.toLowerCase());
    if (exists) {
        return res.status(409).json({ error: "Item with this name already exists" });
    }
    const newItem = {
        name: name.trim(),
        price: Number(price),
        text: text?.trim() || "",
        image: image?.trim() || "/images/egg.png",
        type: type.toLowerCase(),
    };
    foodData.push(newItem);
    res.status(201).json(newItem);
});
app.delete("/foods/:name", requireAdmin, (req, res) => {
    const name = decodeURIComponent(req.params.name);
    const index = foodData.findIndex((item) => item.name.toLowerCase() === name.toLowerCase());
    if (index === -1) {
        return res.status(404).json({ error: "Item not found" });
    }
    const [deleted] = foodData.splice(index, 1);
    res.json({ success: true, deleted });
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map