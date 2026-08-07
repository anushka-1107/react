import React from "react";
import styled from "styled-components";
import { Button, BASE_URL } from "../src/App";

const SearchResult = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <EmptyState>
        <span>🍽️</span>
        <p>No food items found.</p>
        <small>Try a different search or filter.</small>
      </EmptyState>
    );
  }

  return (
    <Foodbox>
      <Foodcard>
        {data.map((item) => (
          <Fooditem key={item.name}>
            <div className="foodimg">
              <img src={BASE_URL + item.image} alt={item.name} />
            </div>
            <div className="fooddetails">
              <div className="info">
                <span className="type-badge">{item.type}</span>
                <h2>{item.name}</h2>
                <p>{item.text}</p>
              </div>
              <div className="footer">
                <span className="price">${item.price}</span>
                <Button id={`order-${item.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  Order Now
                </Button>
              </div>
            </div>
          </Fooditem>
        ))}
      </Foodcard>
    </Foodbox>
  );
};

export default SearchResult;

const Foodbox = styled.section`
  padding: 0 8px 60px;
`;

const Foodcard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
`;

const Fooditem = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(255, 107, 53, 0.2);
    border-color: rgba(255, 107, 53, 0.35);
  }

  .foodimg {
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.07);
    }
  }

  .fooddetails {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 16px 20px 20px;
    gap: 12px;

    .info {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .type-badge {
      display: inline-block;
      background: rgba(255, 107, 53, 0.18);
      color: #ff6b35;
      border-radius: 20px;
      padding: 2px 12px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      width: fit-content;
    }

    h2 {
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
      letter-spacing: 0.3px;
    }

    p {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.5);
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 4px;

      .price {
        font-size: 22px;
        font-weight: 700;
        color: #ff6b35;
      }
    }
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  gap: 12px;
  text-align: center;

  span {
    font-size: 56px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
  }

  small {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.4);
  }
`;
