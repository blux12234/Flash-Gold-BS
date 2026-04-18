<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flash-Gold-BS | Tienda Oficial</title>
    <style>
        body {
            background-color: #0f0f13;
            color: #ffffff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            text-align: center;
        }
        h1 { color: #00ffcc; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px; }
        p.subtitle { color: #888; margin-bottom: 30px; font-size: 0.9em; }
        
        .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .card {
            background: #1a1a24;
            border: 1px solid #333;
            border-radius: 12px;
            padding: 15px;
            transition: transform 0.2s;
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }
        .card:active { transform: scale(0.95); }
        
        .gold-icon { font-size: 28px; margin-bottom: 10px; }
        .name { font-weight: bold; display: block; margin-bottom: 5px; font-size: 1.1em; }
        .price { color: #00ffcc; font-size: 1.2em; font-weight: bold; display: block; margin-bottom: 10px; }
        
        .buy-btn {
            display: block;
            background: #00ffcc;
            color: #000;
            text-decoration: none;
            padding: 10px;
            border-radius: 8px;
            font-weight: bold;
            font-size: 0.85em;
        }
    </style>
</head>
<body>

    <h1>Flash-Gold-BS</h1>
    <p class="subtitle">Rápido y Seguro | San Carlos, Cojedes</p>

    <div class="container">
        <div class="card">
            <div class="gold-icon">💰</div>
            <span class="name">105 Oro</span>
            <span class="price">Bs 616</span>
            <a href="https://wa.me/584160256643?text=Hola!%20Quiero%20comprar%20105%20Oro" class="buy-btn">COMPRAR</a>
        </div>

        <div class="card">
            <div class="gold-icon">💰</div>
            <span class="name">320 Oro</span>
            <span class="price">Bs 1.870</span>
            <a href="https://wa.me/584160256643?text=Hola!%20Quiero%20comprar%20320%20Oro" class="buy-btn">COMPRAR</a>
        </div>

        <div class="card">
            <div class="gold-icon">💰</div>
            
