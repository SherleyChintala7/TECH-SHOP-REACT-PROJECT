import { useState } from "react";
import ProductsData from "../../Data/productsData";
import "./TopProducts.css";

const categories = [
    "All",
    "Headphones",
    "Earbuds",
    "Earphones",
    "Neckbands",
];

const TopProducts = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts =
        activeCategory === "All"
            ? ProductsData
            : ProductsData.filter(
                (product) => product.category === activeCategory
            );

    return (
        <section className="top-products">
            <h2 className="top-title">Top Products</h2>

            {/* CATEGORY TABS */}
            <div className="top-tabs">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={activeCategory === cat ? "active" : ""}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* PRODUCTS GRID */}
            <div className="top-grid">
                {filteredProducts.slice(0, 11).map((item) => (
                    <div className="top-card" key={item.id}>
                        <img src={item.images[0]} alt={item.title} />

                        <div className="top-info">
                            <h3>{item.title}</h3>
                            <p className="desc">{item.info}</p>

                            <div className="price">
                                ₹{item.finalPrice.toLocaleString()}
                                <span>₹{item.originalPrice.toLocaleString()}</span>
                            </div>

                            <button className="add-btn">Add to cart</button>
                        </div>
                    </div>
                ))}

                {/* BROWSE ALL CARD */}
                <div className="top-card browse-all">
                    <h3>Browse All Products →</h3>
                </div>
            </div>
        </section>
    );
};

export default TopProducts;