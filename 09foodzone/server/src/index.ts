import express from "express";
import path from "path";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "../public/images")));

// ── In-memory food store ──────────────────────────────────────────────────────
let foodData: {
  name: string;
  price: number;
  text: string;
  image: string;
  type: string;
}[] = [
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

// ── Admin credentials (hardcoded) ─────────────────────────────────────────────
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

// ── Auth middleware (simple token check) ──────────────────────────────────────
const requireAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const auth = req.headers["authorization"];
  if (auth === "Bearer admin-secret-token") {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

// ── Routes ────────────────────────────────────────────────────────────────────

// Admin Login
app.post("/admin/login", (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.json({ success: true, token: "admin-secret-token" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Get all food items
app.get("/", (_req, res) => {
  res.json(foodData);
});

// Add a new food item
app.post("/foods", requireAdmin, (req, res): void => {
  const { name, price, text, image, type } = req.body;
  if (!name || !price || !type) {
    res.status(400).json({ error: "name, price and type are required" });
    return;
  }
  const exists = foodData.some(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  if (exists) {
    res.status(409).json({ error: "Item with this name already exists" });
    return;
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

// Delete a food item by name
app.delete("/foods/:name", requireAdmin, (req, res): void => {
  const name = decodeURIComponent(req.params.name);
  const index = foodData.findIndex(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  if (index === -1) {
    res.status(404).json({ error: "Item not found" });
    return;
  }
  const [deleted] = foodData.splice(index, 1);
  res.json({ success: true, deleted });
});

// ── Start server ──────────────────────────────────────────────────────────────
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
